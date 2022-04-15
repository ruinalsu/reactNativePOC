import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

export function useSwipe(onSwipeLeft?: () => void, onSwipeRight?: () => void, rangeOffset = 4) {

  let firstTouch = 0

  function onTouchStart(e: any) {
    firstTouch = e.nativeEvent.pageX;
  }

  function onTouchEnd(e: any) {
    const positionX = e.nativeEvent.pageX
    const range = windowWidth / rangeOffset

    // check if position is growing positively and has reached specified range
    if (positionX - firstTouch > range) {
      onSwipeRight && onSwipeRight()
    }
    // check if position is growing negatively and has reached specified range
    else if (firstTouch - positionX > range) {
      onSwipeLeft && onSwipeLeft()
    }
  }

  return { onTouchStart, onTouchEnd };
}