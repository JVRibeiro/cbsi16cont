var nome_aluno = document.querySelector( '#nome_aluno' ),
    serie_aluno = document.querySelector( '#serie_aluno' ),
    valor_aluno = document.querySelector( '#valor_aluno' ),
    alunos_cadastrados = document.querySelector( '#alunos_cadastrados' ),

    nome_bens = document.querySelector( '#nome_bens' ),
    tipo_bens = document.querySelector( '#tipo_bens' ),
    valor_bens = document.querySelector( '#valor_bens' ),
    bens_cadastrados = document.querySelector( '#bens_cadastrados' );

    if ( window.localStorage.getItem('cadastro_aluno') ) alunos_cadastrados.innerHTML = localStorage.getItem('cadastro_aluno');

    if ( window.localStorage.getItem('cadastro_bens') ) bens_cadastrados.innerHTML = localStorage.getItem('cadastro_bens');



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
        alunos_cadastrados.innerHTML +=
           '<li>'
           + '<div class="saved_nome">' + nome_aluno.value + '</div>'
           + '<div class="saved_serie">' + serie_aluno.value + '</div>'
           + '<div class="saved_valor">' + valor_aluno.value + '</div>'
          + '</li>'

        localStorage.setItem( 'cadastro_aluno', alunos_cadastrados.innerHTML );

        nome_aluno.value = '';
        serie_aluno.value = '';
        valor_aluno.value = '';
      }
    });




    $( '#cadastrar_bens' ).on( 'click', function ()
    {
      if ( nome_bens.value !== ''
        && tipo_bens.value !== 'Selecione'
        && valor_bens.value !== '' )
      {
        bens_cadastrados.innerHTML +=
           '<li>'
           + '<div class="saved_nome">' + nome_bens.value + '</div>'
           + '<div class="saved_tipo">' + tipo_bens.value + '</div>'
           + '<div class="saved_valor">' + valor_bens.value + '</div>'
          + '</li>'

        localStorage.setItem( 'cadastro_bens', bens_cadastrados.innerHTML );

        nome_bens.value = '';
        tipo_bens.value = 'Selecione';
        valor_bens.value = '';
      }
    });



    function show_cadastro_aluno ()
    {
      $('.fixed_right').hide();
      $( '#alunos_cadastrados_holder' ).show();
    }

    function show_cadastro_bens ()
    {
      $('.fixed_right').hide();
      $( '#bens_cadastrados_holder' ).show();
    }
