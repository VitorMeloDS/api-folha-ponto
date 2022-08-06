import knex, { Knex } from 'knex'
import knexConfig from './config'

const connection: Knex = knex(knexConfig)

export default connection
