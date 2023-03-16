const express = require('express');

const router = express.Router();

const Produto = require('./produto');

// Banco de dados de exemplo


// Operações CRUD do recurso aluno
router.get('/', async (req, res) => {
  //https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
  const produtos = await Produto.findAll()
  res.send(produtos);
});

router.get('/:id', async (req, res) => {
  const produtoId = req.params.id;
  //https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
  const produto = await Produto.findByPk(produtoId)
  res.send(produto);
});

router.get('/:id/nome', async (req, res) => {
  const produto = await Produto.findByPk(produtoId)

  res.send({
    nome: produto.nome
  })
})

router.post('/', async (req, res) => {
  let novoProduto = req.body;
  novoProduto = await Produto.create(req.body)
  res.send({ message: 'Produto adicionado com sucesso', produto: novoProduto });
});

router.put('/:id', async (req, res) => {
  const produtoId = req.params.id; 
  const dadosNovosProduto = req.body;

  let produto = await Produto.findByPk(produtoId);

  if (produto) {
    produto.set({...dadosNovosProduto})
    await produto.save();
    res.send({ message: 'Produto atualizado com sucesso'});
  } else {
    res.status(404).send({ message: 'Produto não encontrado' });
  }
});

router.delete('/:id', async (req, res) => {
  const produtoId = req.params.id;
  let produto = await Produto.findByPk(produtoId);
  if (produto) {
    await produto.destroy();
    res.send({ message: 'Produto excluído com sucesso' });
  } else {
    res.status(404).send({ message: 'Produto não encontrado' });
  }
});

module.exports = router;

