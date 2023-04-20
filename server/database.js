import knex from 'knex'

export const db = knex({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'root',
      database : 'project',
      port: '6060'
    }
}) 