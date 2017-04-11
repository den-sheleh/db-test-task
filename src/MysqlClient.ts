class MysqlClient {
  getValue(callback: (error: Error, val: any) => void) {
    callback(null, { test: 1 });
  }
}

export default MysqlClient;
