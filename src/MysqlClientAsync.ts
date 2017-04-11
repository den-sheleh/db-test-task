import MysqlClient from './MysqlClient'
import DbClient from './DbClient'

class MysqlClientAsync extends MysqlClient implements DbClient {
  async getValue() {
    let context = this;
    let getValueSync = super.getValue

    return new Promise(function(resolve, reject) {
      let args = [function MysqlClientCallback(err: any, result: { test: number }) {
        if (err) return reject(err);

        return resolve(result);
      }]

      getValueSync.apply(context, args);
    });
  }
}

export default MysqlClientAsync;
