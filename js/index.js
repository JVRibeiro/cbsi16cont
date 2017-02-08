/*
    Trabalho de Contabilidade
    Desenvolvido por: Victor Ribeiro
    FB: fb.com/OVictorRibeiro
    Email: victor_ribeiro135@hotmail.com
    Github: github.com/JVRibeiro
*/

  var
  periodoAtual,

  // Cria variaveis para o controle de datas
  date = new Date(),
  d = date.getDate(),
  m = date.getMonth(),
  y = date.getFullYear(),
  now = new Date( y, m, d ),

// DOM
  alunoNome = document.querySelector( '#alunoNome' ),
  alunoListaNome = document.querySelector( '#alunoListaNome' ),
  alunoSerie = document.querySelector( '#alunoSerie' ),
  alunoParcela = document.querySelector( '#alunoParcela' ),
  alunoVencimento = document.querySelector( '#alunoVencimento' ),
  alunos_cadastrados = document.querySelector( '#alunos_cadastrados' ),
  pagamentos_confirmados = document.querySelector( '#pagamentos_confirmados' ),

  alunoListaNome = document.querySelector( '#alunoListaNome' ),
/*
  nome_bens = document.querySelector( '#nome_bens' ).value,
  tipo_bens = document.querySelector( '#tipo_bens' ).value,
  qtd_bens = document.querySelector( '#qtd_bens' ).value,
  valor_bens = document.querySelector( '#valor_bens' ).value,
  bens_cadastrados = document.querySelector( '#bens_cadastrados' ),*/
  vagasDisp = document.querySelector( '#v_disp' ),
/*
  nome_cap = document.querySelector( '#nome_cap' ).value,
  qtd_cap = document.querySelector( '#qtd_cap' ).value,
  valor_cap = document.querySelector( '#valor_cap' ).value,
  cap_cadastrados = document.querySelector( '#cap_cadastrados' ),
*/
  // total_bens = 0,
  total_alunos = 0,
  // total_cap = 0,

// localStorage
  _cadastroAluno = window.localStorage.getItem( 'cadastro_aluno' ),
  _cadastroAlunoSelect = window.localStorage.getItem( 'cadastro_aluno' ),/*
  _cadastroBens = window.localStorage.getItem( 'cadastro_bens' ),
  _cadastroCAP = window.localStorage.getItem( 'cadastro_cap' ),*/

  _vagasDisp = window.localStorage.getItem( 'series_int' ),

  _totalALunos = localStorage.getItem( 'total_alunos' )/*,
  _totalBens = localStorage.getItem( 'total_bens' ),
  _totalCap = localStorage.getItem( 'total_cap' ),*/

// Objeto de dados do programa
  data =
  {
    // Contador de vagas disponiveis para cada serie
    serie_count:
    {
      _1: 5, _2: 5,
      _3: 5, _4: 5,
      _5: 5,
    },

    // Métodos
    // Cadastra o aluno no sistema
    cadastrar_aluno: function ()
    {
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

    // Cadastra o aluno no sistema
    add_aluno: function ()
    {
      // Cria o objeto aluno
      data.aluno[data.aluno.length] = {};
      data.aluno[data.aluno.length - 1].nome = alunoNome.value.toUpperCase();
      data.aluno[data.aluno.length - 1].serie = alunoSerie.value;
      data.aluno[data.aluno.length - 1].parcela = {
                                                    valor: Number( alunoParcela.value ),
                                                    vencimento: Number( alunoVencimento.value )
                                                  };
      data.aluno[data.aluno.length - 1].cadastro = {
                                                    data: Number( date ),
                                                    data_formatada: date.toLocaleDateString(),
                                                    dia: d,
                                                    mes: m,
                                                    ano: y
                                                    };
      data.aluno[data.aluno.length - 1].inclusao = {
                                                    data: Number( new Date( y, m + 1, 1 ) ),
                                                    data_formatada: new Date( y, m + 1, 1 ).toLocaleDateString(),
                                                    dia: 1,
                                                    mes: m + 1,
                                                    ano: y
                                                    };
      data.aluno[data.aluno.length - 1].mes_atrasado = [];
      data.aluno[data.aluno.length - 1].mes_pago = [];

      // Limpa a lista de alunos antes de atualiza-la
      alunos_cadastrados.innerHTML = '';
      alunoListaNome.innerHTML = '';

      // Atualiza a lista de alunos
      for ( var i in data.aluno )
      {
        // Organiza os nomes em ordem alfabetica
        data.aluno.sort( dynamicSort( 'nome' ) );

        // Imprime a lista de alunos
        $( alunos_cadastrados )
        .append(
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
      }

      // Salva os dados
      data.save.aluno();

      // Atualiza o somatorio de parcelas a receber
      total_alunos = total_alunos + Number( alunoParcela.value );
      document.querySelector( '#alunos_total' ).innerHTML = total_alunos;
      window.localStorage.setItem( 'total_alunos', total_alunos );

      // Limpa os campos
      alunoNome.value = '';
      alunoParcela.value = '';
      alunoSerie.value = 'Selecione';
      alunoVencimento.value = 'Selecione';
    },

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

    // Abre uma página específica do programa
    showPage: function ( pageSelector ) // @param CSS Selector
    {
      if ( !$( pageSelector ).is( ':visible' ) )
      {
        $( '.page' )
        .fadeOut();

        $( pageSelector )
        .show( 'folder' );
      }
    },

    // Abre a página de cadastro de alunos
    show_cadastro_aluno: function ()
    {
      data.showPage( '#cadastro_aluno' );
    },

    // Abre a página de controle de pagamentos
    show_controle_pagam: function ()
    {
      data.showPage( '#controle_pagamentos' );
      $( '.ui-combobox input' )
      .attr( 'placeholder','digite o nome...' )
    },

/*
    show_cadastro_bens: function ()
    {
      document.querySelector( '.page, .fixed_right' )
      .style.display = 'none';

      $( '#cadastro_bens, #bens_cadastrados_holder' )
      .fadeIn();
    },

    show_cadastro_cap: function ()
    {
      document.querySelector( '.page, .fixed_right' )
      .style.display = 'none';

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
  };



  // Cria uma array para armazenar os dados dos alunos
  data.aluno = [];

  periodoAtual = y + '-' + ( m + 1 );

  // Carrega os dados salvos na inicializacao
  $( document ).ready( function ()
  {
    if ( _cadastroAluno != undefined )
    {
      data.aluno = JSON.parse( _cadastroAluno );
    }

    alunos_cadastrados.innerHTML = '';
    alunoListaNome.innerHTML = '';

    for ( var i in data.aluno ) // Busca todos os alunos cadastrados
    {
      // Imprime os alunos na lista
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

      // Adiciona os alunos no indice de busca
      $( alunoListaNome ).append(
        '<option>'
          + data.aluno[i].nome
        +'</option>'
      );



      var hoje = Number( now ),
          vencimento = Number( new Date( y, m, data.aluno[i].parcela.vencimento ) );

      // Se não houverem pendencias
      if ( data.aluno[i].mes_atrasado.length == 0 )
      {
        data.aluno[i].situacao = 'REGULARIZADO';

        // Imprime os alunos na lista
        $( pagamentos_confirmados ).append(
           '<li>'
           + '<div class="saved_nome" title="' + data.aluno[i].nome + '">'
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
          + '</li>'
        );

        console.log( data.aluno[i].nome + ' está REGULARIZADO.' );
      }

      if ( hoje == vencimento )
      {
        data.aluno[i].situacao = 'REGULARIZADO';
        console.log( data.aluno[i].nome + ' VENCE HOJE.' );
      }

      if ( hoje > vencimento && m >= data.aluno[i].inclusao.mes )
      {
        var arr = data.aluno[i].mes_atrasado,
            index = arr.indexOf( y + '-' + m );

        data.aluno[i].mes_atrasado.push( y + '-' + m );
        data.aluno[i].mes_atrasado.sort();

        data.aluno[i].situacao = 'INADIPLENTE';

        if ( index > -1 )
        {
          arr.splice( index, 1 );
          console.log( data.aluno[i].mes_atrasado[index] + ' repetido removido' );
        }

        data.save.aluno();

        console.log( data.aluno[i].nome + ' está INADIPLENTE.' );
      }
    }

    console.log( JSON.stringify( data.aluno ) );


//    if ( _cadastroBens != undefined ) bens_cadastrados.innerHTML = localStorage.getItem( 'cadastro_bens' );
//    if ( _cadastroCAP != undefined ) cap_cadastrados.innerHTML = localStorage.getItem( 'cadastro_cap' );

    if ( _totalALunos != undefined )
    {
      document.querySelector( '#alunos_total' ).innerHTML = _totalALunos;
      total_alunos = Number( _totalALunos );
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


    setInterval(function ()
    {
      var d = new Date();
      document.querySelector( '#currentTime' )
      .innerHTML = d.toLocaleString();

      document.querySelector( '#currentPeriod' )
      .innerHTML = periodoAtual;
    }, 1000);
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
  $( '#menu_btn' ).on( 'click', function ()
  {
    if ( !$( '#menu_btn' ).hasClass( 'is-active' ) )
    {
      $( '#menu_btn' )
      .addClass( 'is-active' );

      $( '#menu' )
      .removeClass('menu-closed')
      .addClass( 'menu-open' );
    }
    else
    {
      $( '#menu_btn' )
      .removeClass( 'is-active' );

      $( '#menu' )
      .removeClass('menu-open')
      .addClass( 'menu-closed' );
    }
  });

  $( '#menu ul li' ).on( 'click', function ()
  {
    $( '#menu_btn' )
    .removeClass( 'is-active' );

    $( '#menu' )
    .removeClass('menu-open')
    .addClass( 'menu-closed' );
  });


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
      var result =
      ( a[ property ] < b[ property ] ) ? -1
      : ( a[ property ] > b[ property ] )
      ? 1 : 0;
      return result * sortOrder;
    }
  }




  function searchClientData ()
  {
    var selected = alunoListaNome.value;

    $( '#client_atrasadas div' ).html( '<ul></ul>' );

    for ( var i in data.aluno )
    {
      if ( data.aluno[i].nome === selected )
      {
        $( '#client_resume div' ).html(
          'Nome: <strong>'
            + data.aluno[i].nome
          + '</strong><br>'
          + 'Série: <strong>'
            + data.aluno[i].serie
          + '</strong><br>'
          + 'Valor da parcela: <strong><span class="money_value">'
            + data.aluno[i].parcela.valor
          + '</span></strong><br>'
          + 'Data de cadastro: <strong>'
            + data.aluno[i].cadastro.data_formatada
          + '</strong><br>'
          + 'Situação: <strong>'
            + data.aluno[i].situacao
          + '</strong><br>'
          + 'Atrasos: <strong>'
            + data.aluno[i].mes_atrasado.length
          + '</strong><br>'
        );

        for ( var j in data.aluno[i].mes_atrasado )
        {
          if ( data.aluno[i].mes_atrasado.length > 0 )
          {
            $( '#client_atrasadas div ul' ).append(
              '<li>'
              + 'Período: <strong>'
                + data.aluno[i].mes_atrasado[j]
              + '</strong> '
              + '<button id="" '
              + 'onclick="'
                + 'var arr=data.aluno['+i+'].mes_atrasado,'
                + 'index=arr.indexOf(\''+data.aluno[i].mes_atrasado[j]+'\');'
                + 'if(index>-1){'
                + 'console.log(data.aluno['+i+'].mes_atrasado[index]+\' removido\');'
                + 'arr.splice(index,1);'
                + '$(this).parent().remove();'
                + '}'
                + '">Confirmar pagamento</button><br>'
              + '</li>'
            );
          }
        }
      }
    }
  }
