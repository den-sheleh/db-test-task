import DbClient from './DbClient'

class ValueService {
  private static dbClient: DbClient;

  public static init(client: DbClient) {
    ValueService.dbClient = client;
  }

  public static getValue() {
    if (!ValueService.dbClient) return Promise.reject('Value Service is not initialize correctly');

    return ValueService.dbClient.getValue();
  }
}

export default ValueService;
