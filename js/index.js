/*
    Trabalho de Contabilidade
    Desenvolvido por: Victor Ribeiro
    FB: fb.com/OVictorRibeiro
    Email: victor_ribeiro135@hotmail.com
    Github: github.com/JVRibeiro
*/

<<<<<<< HEAD
  var
  data =
  {
    // Contador de vagas disponiveis para cada serie
    serie_count:
    {
      _1: 5, _2: 5,
      _3: 5, _4: 5,
      _5: 5,
    },
=======
var data = {},

    serie = {
      1: 5,
      2: 5,
      3: 5,
      4: 5,
      5: 5
    },

    nome_aluno = document.querySelector( '#nome_aluno' ),
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
    $(document).ready(function ()
    {
      if ( _cadastroAluno != undefined ) data.aluno = JSON.parse(window.localStorage.getItem( 'cadastro_aluno' ));
      if ( _cadastroBens ) bens_cadastrados.innerHTML = localStorage.getItem( 'cadastro_bens' );
      if ( _cadastroCAP ) cap_cadastrados.innerHTML = localStorage.getItem( 'cadastro_cap' );



    if ( _totalALunos )
    {
      for (var i = 0; i < data.aluno.length; i++)
      {
        alunos_cadastrados.innerHTML +=
           '<li>'
           + '<div class="saved_nome"><span id="nome_aluno_value">' + data.aluno[i].nome + '</span></div>'
           + '<div class="saved_serie">Série: <span id="serie_aluno_value">' + data.aluno[i].serie + '</span></div>'
           + '<div class="saved_valor">Valor da parcela: <span id="valor_aluno_value" class="money_value">' + data.aluno[i].valor_parcela + '</span></div>'
          + '</li>'
      }

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
    });


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
>>>>>>> origin/gh-pages

    // Métodos
    cadastrar_aluno: function ()
    {
<<<<<<< HEAD
      if ( alunoNome.value != ''
        && alunoSerie.value != 'Selecione'
        && alunoVencimento.value != 'Selecione' )
      {
        if ( alunoSerie.value === '1ª Série' )
        {
          if ( data.serie_count._1 > 0 )
          {
            data.add_aluno();
            data.serie_count._1 = --data.serie_count._1;
            vagasDisp.innerHTML = '' ;
            window.localStorage.setItem( 'series_int', JSON.stringify( data.serie_count ) )
          }
          else alert( 'Limite de alunos atingido nesta série.' );
        }
        else if ( alunoSerie.value === '2ª Série' )
        {
          if ( data.serie_count._2 > 0 )
          {
            data.add_aluno();
            data.serie_count._2 = --data.serie_count._2;
            vagasDisp.innerHTML = '' ;
            window.localStorage.setItem( 'series_int', JSON.stringify( data.serie_count ) )
          }
          else alert( 'Limite de alunos atingido nesta série.' );
        }
        else if ( alunoSerie.value === '3ª Série' )
        {
          if ( data.serie_count._3 > 0 )
          {
            data.add_aluno();
            data.serie_count._3 = --data.serie_count._3;
            vagasDisp.innerHTML = '' ;
            window.localStorage.setItem( 'series_int', JSON.stringify( data.serie_count ) )
          }
          else alert( 'Limite de alunos atingido nesta série.' );
        }
        else if ( alunoSerie.value === '4ª Série' )
        {
          if ( data.serie_count._4 > 0 )
          {
            data.add_aluno();
            data.serie_count._4 = --data.serie_count._4;
            vagasDisp.innerHTML = '' ;
            window.localStorage.setItem( 'series_int', JSON.stringify( data.serie_count ) )
          }
          else alert( 'Limite de alunos atingido nesta série.' );
        }
        else if ( alunoSerie.value === '5ª Série' )
        {
          if ( data.serie_count._5 > 0 )
          {
            data.add_aluno();
            data.serie_count._5 = --data.serie_count._5;
            vagasDisp.innerHTML = '' ;
            window.localStorage.setItem( 'series_int', JSON.stringify( data.serie_count ) )
          }
          else alert( 'Limite de alunos atingido nesta série.' );
        }
      }
      // Verifica se o usuario preencheu todos os campos
      else
      {
        if ( alunoNome.value === '' )
        {
          alert( 'Você esqueceu um campo em branco: Nome' );
          alunoNome.focus();
        }
        else if ( alunoSerie.value === 'Selecione' )
        {
          alert( 'Você esqueceu um campo em branco: Série' );
          alunoSerie.focus();
        }
        else if ( alunoVencimento.value === 'Selecione' )
        {
          alert( 'Você esqueceu um campo em branco: Vencimento' );
          alunoVencimento.focus();
        }
      }
    },
=======
      cadastrar_bens();
      tipo_bens.focus();
    });

    $( '#cadastrar_cap' ).on( 'click', function ()
    {
      cadastrar_cap();
      nome_cap.focus();
    });

    data.aluno = [];

>>>>>>> origin/gh-pages

    // Cadastra o aluno no sistema
    add_aluno: function ()
    {
<<<<<<< HEAD
      // Cria o objeto aluno
      data.aluno[data.aluno.length] = {};
      data.aluno[data.aluno.length - 1].nome = alunoNome.value;
      data.aluno[data.aluno.length - 1].serie = alunoSerie.value;
      data.aluno[data.aluno.length - 1].parcela =
      {
        valor: Number( alunoParcela.value ),
        vencimento: Number( alunoVencimento.value )
      };
      data.aluno[data.aluno.length - 1].cadastro = Number( new Date() );
      data.aluno[data.aluno.length - 1].mes_atrasado = [];

      // Limpa a lista de alunos antes de atualiza-la
      alunos_cadastrados.innerHTML = '';
      alunoListaNome.innerHTML = '';

      // Atualiza a lista de alunos
      for ( var i = 0; i < data.aluno.length; i++ )
      {
        // Organiza os nomes em ordem alfabetica
        data.aluno.sort( dynamicSort( 'nome' ) );

        // Imprime a lista de alunos
        $( alunos_cadastrados )
        .append(
=======
      if ( nome_aluno.value !== ''
        && serie_aluno.value !== ''
        && valor_aluno.value !== ''
        && data.aluno.length < 5 )
      {
        data.aluno[data.aluno.length] = {};
        data.aluno[data.aluno.length - 1].nome = nome_aluno.value;
        data.aluno[data.aluno.length - 1].serie = serie_aluno.value;
        data.aluno[data.aluno.length - 1].valor_parcela = valor_aluno.value;


        alunos_cadastrados.innerHTML +=
>>>>>>> origin/gh-pages
           '<li>'
           + '<div class="saved_nome">'
           + '<span id="alunoNome_value">'
              + data.aluno[i].nome
           + '</span></div>'
           + '<div class="saved_serie">'
           + '<span id="alunoSerie_value">'
              + data.aluno[i].serie
           + '</span></div>'
           + '<div class="saved_valor">'
           + 'Valor da parcela: <span id="alunoParcela_value" class="money_value">'
              + data.aluno[i].parcela.valor
           + '</span></div>'
           + '<div class="saved_vencimento">'
           + 'Vencimento: Dia <span id="alunoVencimento">'
             + data.aluno[i].parcela.vencimento
           + '</span></div>'
          + '</li>'
        );

<<<<<<< HEAD
        $( alunoListaNome ).append(
          '<option>'
            + data.aluno[i].nome
          +'</option>'
        );
      }
=======
        localStorage.setItem( 'cadastro_aluno', JSON.stringify(data.aluno) );
>>>>>>> origin/gh-pages

      // Salva os dados
      data.save.aluno();

      // Atualiza o somatorio de parcelas a receber
      total_alunos = total_alunos + Number( alunoParcela.value );
      document.querySelector( '#alunos_total' ).innerHTML = total_alunos;
      window.localStorage.setItem( 'total_alunos', total_alunos );

<<<<<<< HEAD
      // Limpa os campos
      alunoNome.value = '';
      alunoParcela.value = '';
      alunoSerie.value = 'Selecione';
      alunoVencimento.value = 'Selecione';
    },
=======
        $( '#alunos_total' ).html(total_alunos);
        localStorage.setItem( 'total_alunos', total_alunos );
      }
      else if ( data.aluno.length > 5 ) alert( 'Limite de alunos atingido!' );
      else alert( 'Você esqueceu um campo em branco!' );
    }
>>>>>>> origin/gh-pages

/*
    cadastrar_bens: function ()
    {
      if ( nome_bens !== ''
        && tipo_bens !== 'Selecione'
        && qtd_bens !== ''
        && valor_bens !== '' )
      {
        valor_bens = valor_bens * qtd_bens;
        bens_cadastrados.innerHTML +=
           '<li>'
           + '<div class="saved_1">Tipo do bem: <span id="tipo_bens_value">' + tipo_bens + '</span></div>'
           + '<div class="saved_1">Nome do bem: <span id="nome_bens_value">' + nome_bens + '</span></div>'
           + '<div class="saved_1">Quantidade: <span id="qtd_bens_value">' + qtd_bens + '</span></div>'
           + '<div class="saved_2">Valor Unitário: <span id="valor_unit_bens_value"  class="money_value">' + valor_bens + '</span></div>'
           + '<div class="saved_2">Valor Total: <span id="valor_bens_value" class="money_value">' + qtd_bens * valor_bens + '</span></div>'
          + '</li>'

        localStorage.setItem( 'cadastro_bens', bens_cadastrados.innerHTML );

        total_bens = total_bens + Number(valor_bens);

        tipo_bens = 'Selecione';
        nome_bens = '';
        qtd_bens = '';
        valor_bens = '';

        document.querySelector( '#bens_total' ).innerHTML = total_bens;
        localStorage.setItem( 'total_bens', total_bens );
      }
      else alert( 'Você esqueceu um campo em branco!' );
    },

    cadastrar_cap: function ()
    {
      if ( nome_cap !== ''
        && qtd_cap !== ''
        && valor_cap !== '' )
      {

        cap_cadastrados.innerHTML +=
           '<li>'
           + '<div class="saved_1">Nome da conta: <span id="nome_cap_value">' + nome_cap + '</span></div>'
           + '<div class="saved_1">Quantidade: <span id="qtd_cap_value">' + qtd_cap + '</span></div>'
           + '<div class="saved_2">Valor Unitário: <span id="valor_unit_cap_value"  class="money_value">' + valor_cap + '</span></div>'
           + '<div class="saved_2">Valor Total: <span id="valor_cap_value" class="money_value">' + qtd_cap * valor_cap + '</span></div>'
          + '</li>'

        localStorage.setItem( 'cadastro_cap', cap_cadastrados.innerHTML );

        total_cap = total_cap
                  + Number(qtd_cap * valor_cap);

        nome_cap = '';
        qtd_cap = '';
        valor_cap = '';

        document.querySelector( '#cap_total' ).innerHTML = total_cap;
        localStorage.setItem( 'total_cap', total_cap );
      }
      else alert( 'Você esqueceu um campo em branco!' );
    },
*/
    // Abre a página de cadastro de alunos
    show_cadastro_aluno: function ()
    {
      $( '.page, .fixed_right' )
      .hide();

      $( '#cadastro_aluno, #alunos_cadastrados_holder' )
      .fadeIn();
    },

    // Abre a página de controle de pagamentos
    show_controle_pagam: function ()
    {
      $( '.page, .fixed_right' )
      .hide();

      $( '#controle_pagamentos, #pagamentos_confirmados_holder' )
      .fadeIn();
    },

/*
    show_cadastro_bens: function ()
    {
      $( '.page, .fixed_right' )
      .hide();

      $( '#cadastro_bens, #bens_cadastrados_holder' )
      .fadeIn();
    },

    show_cadastro_cap: function ()
    {
      $( '.page, .fixed_right' )
      .hide();

      $( '#contas_pagar, #cap_cadastrados_holder' )
      .fadeIn();
    },
*/

    calcular: function ()
    {
      var calculo = ( total_alunos + total_bens ) - total_cap;
      document.querySelector( '#patrimLiq' ).innerHTML = calculo;
    },

    save:
    {
      aluno: function ()
      {
        window.localStorage.setItem( 'cadastro_aluno', JSON.stringify( data.aluno ) );
      }
    }
  },

// DOM
  alunoNome = document.querySelector( '#alunoNome' ),
  alunoSerie = document.querySelector( '#alunoSerie' ),
  alunoParcela = document.querySelector( '#alunoParcela' ),
  alunoVencimento = document.querySelector( '#alunoVencimento' ),
  alunos_cadastrados = document.querySelector( '#alunos_cadastrados' ),

  alunoListaNome = document.querySelector( '#alunoListaNome' ),
/*
  nome_bens = document.querySelector( '#nome_bens' ).value,
  tipo_bens = document.querySelector( '#tipo_bens' ).value,
  qtd_bens = document.querySelector( '#qtd_bens' ).value,
  valor_bens = document.querySelector( '#valor_bens' ).value,
  bens_cadastrados = document.querySelector( '#bens_cadastrados' ),
  vagasDisp = document.querySelector( '#v_disp' ),

  nome_cap = document.querySelector( '#nome_cap' ).value,
  qtd_cap = document.querySelector( '#qtd_cap' ).value,
  valor_cap = document.querySelector( '#valor_cap' ).value,
  cap_cadastrados = document.querySelector( '#cap_cadastrados' ),
*/
//  total_bens = 0,
  total_alunos = 0,
//  total_cap = 0,

  _cadastroAluno = window.localStorage.getItem( 'cadastro_aluno' ),
  _cadastroAlunoSelect = window.localStorage.getItem( 'cadastro_aluno' ),
//  _cadastroBens = window.localStorage.getItem( 'cadastro_bens' ),
//  _cadastroCAP = window.localStorage.getItem( 'cadastro_cap' ),

  _vagasDisp = window.localStorage.getItem( 'series_int' ),

  _totalALunos = localStorage.getItem( 'total_alunos' )/*,
  _totalBens = localStorage.getItem( 'total_bens' ),
  _totalCap = localStorage.getItem( 'total_cap' )*/;

  data.aluno = [];

  // Carrega os dados salvos
  $( document ).ready( function ()
  {
    if ( _cadastroAluno != undefined )
    {
<<<<<<< HEAD
      data.aluno = JSON.parse( _cadastroAluno );
=======
      $( '.page, .fixed_right' ).hide();
      $( '#cadastro_aluno, #alunos_cadastrados_holder' ).fadeIn();
>>>>>>> origin/gh-pages
    }

    alunos_cadastrados.innerHTML = '';
    alunoListaNome.innerHTML = '';

    for ( var i = 0; i < data.aluno.length; i++ )
    {
<<<<<<< HEAD
      $( alunos_cadastrados ).append(
         '<li>'
         + '<div class="saved_nome">'
         + '<span id="alunoNome_value">'
            + data.aluno[i].nome
         + '</span></div>'
         + '<div class="saved_serie">'
         + '<span id="alunoSerie_value">'
            + data.aluno[i].serie
         + '</span></div>'
         + '<div class="saved_valor">'
         + 'Valor da parcela: <span id="alunoParcela_value" class="money_value">'
            + data.aluno[i].parcela.valor
         + '</span></div>'
         + '<div class="saved_vencimento">'
         + 'Vencimento: Dia <span id="alunoVencimento">'
           + data.aluno[i].parcela.vencimento
         + '</span></div>'
        + '</li>'
      );

      $( alunoListaNome ).append(
        '<option>'
          + data.aluno[i].nome
        +'</option>'
      );



      var date = new Date(),
          d = date.getDate(),
          m = date.getMonth(),
          y = date.getFullYear(),
          now = new Date( y, m, d ),
          a = Number( now ),
          b = Number( new Date(y, m, data.aluno[i].parcela.vencimento) );



      if ( a < b )
      {
        data.aluno[i].situacao = 'REGULARIZADO';
        console.log( data.aluno[i].nome + ' está REGULARIZADO.' );
      }
      else if ( a === b )
      {
        data.aluno[i].situacao = 'REGULARIZADO';
        console.log( data.aluno[i].nome + ' VENCE HOJE.' );
      }
      else if ( a > b || data.aluno[i].mes_atrasado.length > 0 )
      {
        data.aluno[i].situacao = 'INADIPLENTE';

        data.aluno[i].mes_atrasado.push( y + '/' + (m + 1) );
//      data.save.aluno();

        console.log( data.aluno[i].nome + ' está INADIPLENTE.' );
      }
=======
      $( '.page, .fixed_right' ).hide();
      $( '#cadastro_bens, #bens_cadastrados_holder' ).fadeIn();
>>>>>>> origin/gh-pages
    }

//    if ( _cadastroBens != undefined ) bens_cadastrados.innerHTML = localStorage.getItem( 'cadastro_bens' );
//    if ( _cadastroCAP != undefined ) cap_cadastrados.innerHTML = localStorage.getItem( 'cadastro_cap' );

    if ( _totalALunos != undefined )
    {
<<<<<<< HEAD
      document.querySelector( '#alunos_total' ).innerHTML = _totalALunos;
      total_alunos = Number( _totalALunos );
=======
      $( '.page, .fixed_right' ).hide();
      $( '#contas_pagar, #cap_cadastrados_holder' ).fadeIn();
>>>>>>> origin/gh-pages
    }
/*    if ( _totalBens != undefined )
    {
      document.querySelector( '#bens_total' ).innerHTML = _totalBens;
      total_bens = Number( _totalBens );
    }
    if ( _totalCap != undefined )
    {
      document.querySelector( '#cap_total' ).innerHTML = _totalCap;
      total_cap = Number( _totalCap );
    }
*/
    if ( _vagasDisp != undefined )
    {
      data.serie_count = JSON.parse( _vagasDisp );
    }
  });


  // Event Listeners
  $( '#alunoSerie' ).on( 'change', function ()
  {
    if ( alunoSerie.value === '1ª Série' )
    {
      alunoParcela.value = 190;
      vagasDisp.innerHTML = data.serie_count._1;
    }
    else
    if ( alunoSerie.value === '2ª Série' )
    {
      alunoParcela.value = 280;
      vagasDisp.innerHTML = data.serie_count._2;
    }
    else
    if ( alunoSerie.value === '3ª Série' )
    {
      alunoParcela.value = 400;
      vagasDisp.innerHTML = data.serie_count._3;
    }
    else
    if ( alunoSerie.value === '4ª Série' )
    {
      alunoParcela.value = 460;
      vagasDisp.innerHTML = data.serie_count._4;
    }
    else
    if ( alunoSerie.value === '5ª Série' )
    {
      alunoParcela.value = 530;
      vagasDisp.innerHTML = data.serie_count._5;
    }
    else
    if ( alunoSerie.value === 'Selecione' )
    {
       alunoParcela.value = '';
       vagasDisp.innerHTML = 'selecione';
    }
  });

  $( '#cadastrar_aluno' ).on( 'click', function ()
  {
    data.cadastrar_aluno();
  });

/*  $( '#cadastrar_bens' ).on( 'click', function ()
  {
    data.cadastrar_bens();
    tipo_bens.focus();
  });

  $( '#cadastrar_cap' ).on( 'click', function ()
  {
    data.cadastrar_cap();
    nome_cap.focus();
  });
*/


// Funções
  function dynamicSort ( property )
  {
    var sortOrder = 1;
    if ( property[0] === '-' )
    {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function ( a, b )
    {
      var result = ( a[property] < b[property] ) ? -1 : ( a[property] > b[property] ) ? 1 : 0;
      return result * sortOrder;
    }
  }
