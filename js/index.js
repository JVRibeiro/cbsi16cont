var nome_aluno = document.querySelector( '#nome_aluno' ),
    serie_aluno = document.querySelector( '#serie_aluno' ),
    valor_aluno = document.querySelector( '#valor_aluno' ),

    cadastro_aluno = {};


    $( '#serie_aluno' ).on( 'click', function ()
    {
      if ( serie_aluno.value === '1' ) valor_aluno.value = "R$ 190,00";
      if ( serie_aluno.value === '2' ) valor_aluno.value = "R$ 280,00";
      if ( serie_aluno.value === '3' ) valor_aluno.value = "R$ 400,00";
      if ( serie_aluno.value === '4' ) valor_aluno.value = "R$ 460,00";
      if ( serie_aluno.value === '5' ) valor_aluno.value = "R$ 530,00";
      if ( serie_aluno.value === 'Selecione' )  valor_aluno.value = "";
    });


    $( '#cadastrar_aluno' ).on( 'click', function ()
    {
      if ( nome_aluno.value !== ''
        && serie_aluno.value !== ''
        && valor_aluno.value !== '' )
      {
        cadastro_aluno.nome = nome_aluno.value;
        cadastro_aluno.serie = serie_aluno.value;
        cadastro_aluno.valor = valor_aluno.value;

        localStorage.setItem( 'cadastro_aluno', JSON.stringify(cadastro_aluno) );

        nome_aluno.value = '';
        serie_aluno.value = '';
        valor_aluno.value = '';
      }
    });
