export interface ISite {
  id: string;
  title: string;
  checked: boolean;
}

export interface ISiteEvent {
  id: string;
  siteId: string;
  name: string;
  triggerDate: Date;
  description: string;
}

export const sites: ISite[] = [
  { id: '1', title: 'Industriestrasse 6, Langendorf', checked: true },
  { id: '2', title: 'Quai de l\'Ile 13, Geneva', checked: false },
  { id: '3', title: 'Test 3', checked: false },
  { id: '4', title: 'Site with long long long long long long long long name', checked: true },
  { id: '5', title: 'Test 5', checked: true },
  { id: '6', title: 'Test 6', checked: true },
  { id: '7', title: 'Test 7', checked: true },
  { id: '8', title: 'Test 8', checked: true },
  { id: '9', title: 'Test 9', checked: true },
  { id: '10', title: 'Site with long long long long long long long long long long long long name', checked: true },
  { id: '11', title: 'Test 11', checked: true },
  { id: '12', title: 'Test 12', checked: true },
  { id: '13', title: 'Test 13', checked: true },
  { id: '14', title: 'Test 14', checked: true },
  { id: '15', title: 'Test 15', checked: true },
  { id: '16', title: 'Test 16', checked: true },
  { id: '17', title: 'Test 17', checked: true }
];

export const siteEvents: ISiteEvent[] = [
  { id: "1", siteId: "1", name: '124-456', triggerDate: new Date(2022, 2, 27, 22, 15, 13), description: 'Fire' },
  { id: "2", siteId: "1", name: '124-457', triggerDate: new Date(2022, 2, 30, 11, 34, 56), description: 'Burglary' },
  { id: "3", siteId: "2", name: '357-222', triggerDate: new Date(2022, 3, 1, 22, 15, 13), description: 'Fire' },
  { id: "4", siteId: "2", name: '257-221', triggerDate: new Date(2022, 3, 3, 22, 15, 13), description: 'Fire' },
];