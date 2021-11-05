exports.up = function (knex) {
  return knex.schema.createTable("rascunho", function (table) {
    table.increments('id').primary();
    table.string("etapa", 20).notNullable();
    table.string("sob", 20).notNullable();
    table.string("hr_in", 2).notNullable();
    table.string("hr_fin", 2).notNullable();
    table.string("estrutura", 30).notNullable();
    table.string("observacao", 255).notNullable();
    table.string("apoio", 255);
    table.string("tipo_sgd", 10);
    table.string("num_equip", 255);
    table.string("hr_in_sgd", 2);
    table.string("hr_fin_sgd", 2);
    table.string("alimentador", 255).notNullable();
    table.string("logradouro", 255).notNullable();
    table.string("bairro", 255).notNullable();
    table.string("municipio", 255).notNullable();
    table.string("descricao_servico", 255).notNullable();
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.droptable("rascunho");
};
