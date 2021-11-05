const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const sobs = await connection("rascunho").select("*");

    return res.json(sobs);
  },

  async create(req, res) {
    const {
      etapa,
      sob,
      hr_in,
      hr_fin,
      estrutura,
      observacao,
      apoio,
      tipo_sgd,
      num_equip,
      hr_in_sgd,
      hr_fin_sgd,
      alimentador,
      logradouro,
      bairro,
      municipio,
      descricao_servico,
    } = req.body;

    const [id] = await connection("rascunho").insert({
      etapa,
      sob,
      hr_in,
      hr_fin,
      estrutura,
      observacao,
      apoio,
      tipo_sgd,
      num_equip,
      hr_in_sgd,
      hr_fin_sgd,
      alimentador,
      logradouro,
      bairro,
      municipio,
      descricao_servico,
    });

    return res.json({ id });
  },
};
