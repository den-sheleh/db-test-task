export interface Config {
  dbType: 'redis' | 'mysql'
}

export const config = <Config>{
  dbType: 'mysql'
}
