import knex from 'knex'

export const db = knex({
    client: 'mysql',
    connection: {
      host : 'mysql-db',
      user : 'root',
      password : 'root',
      database : 'project',
      port: '3306'
    }
}) 