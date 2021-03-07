// https://stackoverflow.com/questions/28558920/postgresql-foreign-key-syntax
// Users:
// id
// email
// password
// salt
import sha512 from 'js-sha512'

import conn from './db-connection.js'

import { createSalt } from './utils/auth.js'
// NOTE this order does not matter if cascade deletion is set otherwise this is the order it'd need to be
// due to foreign key reference issue during deletion
const tables = [
    'users',
    'todos',
]
async function main() {
    for (let table of tables) {
        const hasTable = await conn.schema.hasTable(table)
        if (hasTable) {
            await conn.schema.dropTable(table)
        }
    }
    await conn.schema.createTable(`users`, (table) => {
        table.increments('id')
        table.string('username', 45)
        table.string('password', 128)
        table.string('salt', 20)
    })
    await conn.schema.createTable(`todos`, (table) => {
        table.increments('id')
        table.string('description', 45)
        table.enu('status', ['active', 'completed'])
        table.integer('user_id').unsigned()
        table.foreign('user_id').references('users.id')
    })
    
    const salt = createSalt(20)
    await conn('users').insert({username: 'test', password: sha512('test' + salt), salt: salt})
    await conn('todos').insert({description: 'my todo', status: 'active', user_id: 1})
    process.exit()
}
main()
// respective sql below...