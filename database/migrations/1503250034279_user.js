'use strict'

const entregas = use('App/Models/Entrega')

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.create('users', (table) => {
      table.increments()
      table.string('name', 50).notNullable().unique()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('image', 100).notNullable()
      table.string('cpf', 14).notNullable()
      table.string('telefone', 15).notNullable()
      table.decimal('avaliacao').notNullable().default(5)
      table.string('tipo', 1).notNullable()
      table.string('status').notNullable().default('Ativo') //pode ser ativo, bloqueado ou desativado
      table.timestamps()
    })
  }

  down() {
    this.drop('users')
  }
}

module.exports = UserSchema
