
import ExpoConstants from "expo-constants";

import * as environment_prod from './environment.prod';
import * as environment_development from './environment.development';


const getEffectiveEnv = () => {
  switch(ExpoConstants?.expoConfig?.extra?.configuration) {
    case 'production': {
      return environment_prod;
    }
    default: {
      return environment_development;
    }
  }
}

export const environment = {
  ... getEffectiveEnv(),
};
