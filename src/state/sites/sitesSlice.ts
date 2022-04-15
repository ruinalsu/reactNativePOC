import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISite, sites } from '../../mockdata/sites';
import SiteService from '../../services/siteService';
import { timeout } from '../../utils/utilities';
import { RootState } from '../store';
import { Filters } from './models/filters';

const initialState = {
  items: [] as ISite[],
  isLoading: false,
  searchText: '',
  visibilityFilter: [Filters.Green, Filters.Red] as Filters[]
};

export const fetchSites = createAsyncThunk(
  'sites/fetchAll',
  async (_, __) => {
    await timeout(1000);
    return SiteService.getSites();
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setFilterVisibility: (state, action: PayloadAction<Filters>) => {
      if (!state.visibilityFilter.includes(action.payload)) {
        state.visibilityFilter.push(action.payload);
      } else {
        state.visibilityFilter.splice(state.visibilityFilter.indexOf(action.payload), 1);
      }
    }
  },
  extraReducers: {
    [fetchSites.fulfilled.type]: (state, action: PayloadAction<ISite[]>) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchSites.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchSites.rejected.type]: (state) => {
      state.isLoading = false;
    }
  }
});

export default postsSlice.reducer;

export const { setSearchText, setFilterVisibility } = postsSlice.actions;

export const selectItems = ({ sitesReducer }: RootState): ISite[] => {
  const { items, searchText, visibilityFilter } = sitesReducer;
  let returnItems = items;
  returnItems = returnItems.filter(item => {
    if ((visibilityFilter.includes(Filters.Green) && item.checked)
      || (visibilityFilter.includes(Filters.Red) && !item.checked)) {
      return true;
    }
    return false;
  });
  if (searchText !== '') {
    returnItems = returnItems.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()));
  }
  return returnItems;
}