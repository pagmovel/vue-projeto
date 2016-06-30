<template>
	<h1>Teste</h1>
</template>

<script>
export default {
  components: {
  },
  data: function () {
    return {
      cliente: {
        id_cliente: 0,
        tipo: [ {tipo: 'F', descricao: 'Pessoa Física'},
                {tipo: 'J', descricao: 'Pessoa Jurídica'} ],
        nome: '',
        fantasia: '',
        rg: '',
        cpf: '',
        inscr_estadual: '',
        inscr_municipal: '',
        email: ''
      },
      endereco: {
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        municipio: '',
        uf: '',
        cep: ''
      },
      contatos: []

    }
  }

}
</script>

<style scoped>
	
</style>