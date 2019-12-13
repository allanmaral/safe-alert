import { useEffect, useCallback, useState } from 'react';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

function useLoaction() {
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);
  const [mustUpdate, setMustUpdate] = useState(true);

  const askPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      setError('Permission to access location was denied');
    }
  };

  const getLocationAsync = useCallback(async () => {
    await askPermission();
    const currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation);
    setMustUpdate(false);
  }, []);

  useEffect(() => {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      setError(
        'Oops, this will not work on Sketch in an Android emulator. Try it on your device!'
      );
    } else if (mustUpdate) getLocationAsync();
  }, [getLocationAsync, mustUpdate]);

  const requestUpdate = () => {
    setMustUpdate(true);
  };

  return [location, error, requestUpdate];
}

export default useLoaction;
