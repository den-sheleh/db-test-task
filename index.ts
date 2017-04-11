import {config} from "./config"
import DbClientFactory from './src/DbClientFactory'
import ValueService from './src/ValueService'

const dbClient = DbClientFactory.createClient(config);

ValueService.init(dbClient);
// create class ValueService which has public method getValue(). getValue() should somehow get value by using
// MysqlClient or RedisClient
// final code here should have call like that: ValueService.getValue()
ValueService.getValue()
  .then((res:any) => { console.log("Value is: %j", res) })
  .catch((err:any) => { console.error(err) })
