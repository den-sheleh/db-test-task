import {Config} from '../config'
import RedisClient from './RedisClient'
import MysqlClientAsync from './MysqlClientAsync'
import DbClient from './DbClient'

class DbClientFactory {
  public static createClient(config: Config): DbClient {
    let client;

    if (config.dbType === 'redis') {
      client = new RedisClient();
    } else {
      client = new MysqlClientAsync();
    }

    return client;
  }
}

export default DbClientFactory;
