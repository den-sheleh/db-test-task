import DbClient from './DbClient'

class RedisClient implements DbClient {
  async getValue() {
    return Promise.resolve({ test: 1 });
  }
}

export default RedisClient;
