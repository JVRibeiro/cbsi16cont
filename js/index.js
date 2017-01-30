/*
    Trabalho de Contabilidade
    Desenvolvido por: Victor Ribeiro
    FB: fb.com/OVictorRibeiro
    Email: victor_ribeiro135@hotmail.com
    Github: github.com/JVRibeiro
*/

var nome_aluno = document.querySelector( '#nome_aluno' ),
    serie_aluno = document.querySelector( '#serie_aluno' ),
    valor_aluno = document.querySelector( '#valor_aluno' ),
    alunos_cadastrados = document.querySelector( '#alunos_cadastrados' ),

    nome_bens = document.querySelector( '#nome_bens' ),
    tipo_bens = document.querySelector( '#tipo_bens' ),
    qtd_bens = document.querySelector( '#qtd_bens' ),
    valor_bens = document.querySelector( '#valor_bens' ),
    bens_cadastrados = document.querySelector( '#bens_cadastrados' ),

    nome_cap = document.querySelector( '#nome_cap' ),
    qtd_cap = document.querySelector( '#qtd_cap' ),
    valor_cap = document.querySelector( '#valor_cap' ),
    cap_cadastrados = document.querySelector( '#cap_cadastrados' ),

    total_bens = 0,
    total_alunos = 0,
    total_cap = 0,

    _cadastroAluno = window.localStorage.getItem( 'cadastro_aluno' ),
    _cadastroBens = window.localStorage.getItem( 'cadastro_bens' ),
    _cadastroCAP = window.localStorage.getItem( 'cadastro_cap' ),

    _totalALunos = localStorage.getItem( 'total_alunos' ),
    _totalBens = localStorage.getItem( 'total_bens' ),
    _totalCap = localStorage.getItem( 'total_cap' );



    // Carrega os dados salvos
    if ( _cadastroAluno ) alunos_cadastrados.innerHTML = localStorage.getItem( 'cadastro_aluno' );
    if ( _cadastroBens ) bens_cadastrados.innerHTML = localStorage.getItem( 'cadastro_bens' );
    if ( _cadastroCAP ) cap_cadastrados.innerHTML = localStorage.getItem( 'cadastro_cap' );

    if ( _totalALunos )
    {
      $( '#alunos_total' ).html( _totalALunos );
      total_alunos = Number( _totalALunos );
    }
    if ( _totalBens )
    {
      $( '#bens_total' ).html( _totalBens );
      total_bens = Number( _totalBens );
    }
    if ( _totalCap )
    {
      $( '#cap_total' ).html( _totalCap );
      total_cap = Number( _totalCap );
    }


    // Event Listeners
    $( '#serie_aluno' ).on( 'click', function ()
    {
      if ( serie_aluno.value === '1ª Série' ) valor_aluno.value = 190,00;
      if ( serie_aluno.value === '2ª Série' ) valor_aluno.value = 280,00;
      if ( serie_aluno.value === '3ª Série' ) valor_aluno.value = 400,00;
      if ( serie_aluno.value === '4ª Série' ) valor_aluno.value = 460,00;
      if ( serie_aluno.value === '5ª Série' ) valor_aluno.value = 530,00;
      if ( serie_aluno.value === 'Selecione' )  valor_aluno.value = "";
    });

    $( '#cadastrar_aluno' ).on( 'click', function ()
    {
      cadastrar_aluno();
      nome_aluno.focus();
    });

    $( '#cadastrar_bens' ).on( 'click', function ()
    {
      cadastrar_bens();
      tipo_bens.focus();
    });

    $( '#cadastrar_cap' ).on( 'click', function ()
    {
      cadastrar_cap();
      nome_cap.focus();
    });



    // Funções
    function cadastrar_aluno ()
    {
      if ( nome_aluno.value !== ''
        && serie_aluno.value !== ''
        && valor_aluno.value !== '' )
      {
        alunos_cadastrados.innerHTML +=
           '<li>'
           + '<div class="saved_nome"><span id="nome_aluno_value">' + nome_aluno.value + '</span></div>'
           + '<div class="saved_serie">Série: <span id="serie_aluno_value">' + serie_aluno.value + '</span></div>'
           + '<div class="saved_valor">Valor da parcela: <span id="valor_aluno_value" class="money_value">' + valor_aluno.value + '</span></div>'
          + '</li>'

        localStorage.setItem( 'cadastro_aluno', alunos_cadastrados.innerHTML );

        total_alunos = total_alunos + Number(valor_aluno.value);

        nome_aluno.value = '';
        serie_aluno.value = 'Selecione';
        valor_aluno.value = '';

        $( '#alunos_total' ).html(total_alunos);
        localStorage.setItem( 'total_alunos', total_alunos );
      }
      else alert( 'Você esqueceu um campo em branco!' );
    }

    function cadastrar_bens ()
    {
      if ( nome_bens.value !== ''
        && tipo_bens.value !== 'Selecione'
        && qtd_bens.value !== ''
        && valor_bens.value !== '' )
      {
        valor_bens.value = valor_bens.value * qtd_bens.value;
        bens_cadastrados.innerHTML +=
           '<li>'
           + '<div class="saved_1">Tipo do bem: <span id="tipo_bens_value">' + tipo_bens.value + '</span></div>'
           + '<div class="saved_1">Nome do bem: <span id="nome_bens_value">' + nome_bens.value + '</span></div>'
           + '<div class="saved_1">Quantidade: <span id="qtd_bens_value">' + qtd_bens.value + '</span></div>'
           + '<div class="saved_2">Valor Unitário: <span id="valor_unit_bens_value"  class="money_value">' + valor_bens.value + '</span></div>'
           + '<div class="saved_2">Valor Total: <span id="valor_bens_value" class="money_value">' + qtd_bens.value * valor_bens.value + '</span></div>'
          + '</li>'

        localStorage.setItem( 'cadastro_bens', bens_cadastrados.innerHTML );

        total_bens = total_bens + Number(valor_bens.value);

        tipo_bens.value = 'Selecione';
        nome_bens.value = '';
        qtd_bens.value = '';
        valor_bens.value = '';

        $( '#bens_total' ).html(total_bens);
        localStorage.setItem( 'total_bens', total_bens );
      }
      else alert( 'Você esqueceu um campo em branco!' );
    }

    function cadastrar_cap ()
    {
      if ( nome_cap.value !== ''
        && qtd_cap.value !== ''
        && valor_cap.value !== '' )
      {

        cap_cadastrados.innerHTML +=
           '<li>'
           + '<div class="saved_1">Nome da conta: <span id="nome_cap_value">' + nome_cap.value + '</span></div>'
           + '<div class="saved_1">Quantidade: <span id="qtd_cap_value">' + qtd_cap.value + '</span></div>'
           + '<div class="saved_2">Valor Unitário: <span id="valor_unit_cap_value"  class="money_value">' + valor_cap.value + '</span></div>'
           + '<div class="saved_2">Valor Total: <span id="valor_cap_value" class="money_value">' + qtd_cap.value * valor_cap.value + '</span></div>'
          + '</li>'

        localStorage.setItem( 'cadastro_cap', cap_cadastrados.innerHTML );

        total_cap = total_cap
                  + Number(qtd_cap.value * valor_cap.value);

        nome_cap.value = '';
        qtd_cap.value = '';
        valor_cap.value = '';

        $( '#cap_total' ).html(total_cap);
        localStorage.setItem( 'total_cap', total_cap );
      }
      else alert( 'Você esqueceu um campo em branco!' );
    }




    function show_cadastro_aluno ()
    {
      $( '.page, .fixed_right' ).hide();
      $( '#cadastro_aluno, #alunos_cadastrados_holder' ).show();
    }

    function show_cadastro_bens ()
    {
      $( '.page, .fixed_right' ).hide();
      $( '#cadastro_bens, #bens_cadastrados_holder' ).show();
    }

    function show_cadastro_cap ()
    {
      $( '.page, .fixed_right' ).hide();
      $( '#contas_pagar, #cap_cadastrados_holder' ).show();
    }


    function calcular ()
    {
      var calculo = (total_alunos + total_bens) - total_cap;
      $( '#sit_liq_pat' ).html(calculo);
    }

    console.log( '1' );
