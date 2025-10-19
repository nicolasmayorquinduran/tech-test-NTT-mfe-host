import { getMfeEnv, buildRemoteEntryUrl } from 'shared';
import { environment } from './environments/environment';

/**
 * Configuración de Module Federation para Host
 * Usa variables de entorno centralizadas de la librería shared
 */
const mfeEnv = getMfeEnv(environment.production);

/**
 * Configuración de los MFEs remotos que consume el host
 */
export const REMOTE_MFE_CONFIG = {
  login: {
    name: 'mfLogin',
    url: mfeEnv.login.url,
    remoteEntry: buildRemoteEntryUrl(mfeEnv.login.url)
  }
};
