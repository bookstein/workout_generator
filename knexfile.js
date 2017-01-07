module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
        filename: "./DB.sqlite"
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    useNullAsDefault: true,
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  }
}