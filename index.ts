import {config} from "./config"
import {DbClientFactory} from './src/DbClientFactory'

const dbClient = DbClientFactory.createClient(config);

// create class ValueService which has public method getValue(). getValue() should somehow get value by using
// MysqlClient or RedisClient


// final code here should have call like that:
// ValueService.getValue()
