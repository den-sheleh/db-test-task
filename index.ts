// # General note:
// Use DI and IoC and best code quality possible
// Use node 7.8
import {config} from "./config"

// use this to check which client should be used
config.dbType;



// create class ValueService which has public method getValue(). getValue() should somehow get value by using
// MysqlClient or RedisClient


// final code here should have call like that:
// ValueService.getValue()