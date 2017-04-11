class RedisClient implements DbClient {
  async getValue() {
    return Promise.resolve({ test: 1 });
  }
}
