var nome_aluno = document.querySelector( '#nome_aluno' ),
    serie_aluno = document.querySelector( '#serie_aluno' ),
    valor_aluno = document.querySelector( '#valor_aluno' ),
    alunos_cadastrados = document.querySelector( '#alunos_cadastrados' ),

    nome_bens = document.querySelector( '#nome_bens' ),
    tipo_bens = document.querySelector( '#tipo_bens' ),
    valor_bens = document.querySelector( '#valor_bens' ),
    bens_cadastrados = document.querySelector( '#bens_cadastrados' ),

    salariofunc_cap = document.querySelector( '#salario_func' ),
    local_cap = document.querySelector( '#local_cap' ),
    valor_cap = document.querySelector( '#valor_cap' ),
    cap_cadastrados = document.querySelector( '#cap_cadastrados' ),

    total_bens = 0,
    total_alunos = 0,
    total_cap = 0,

    _totalALunos = localStorage.getItem('total_alunos'),
    _totalBens = localStorage.getItem('total_bens'),
    _totalCap = localStorage.getItem('total_cap');

    if ( window.localStorage.getItem('cadastro_aluno') ) alunos_cadastrados.innerHTML = localStorage.getItem('cadastro_aluno');
    if ( window.localStorage.getItem('cadastro_bens') ) bens_cadastrados.innerHTML = localStorage.getItem('cadastro_bens');
    if ( window.localStorage.getItem('cadastro_cap') ) cap_cadastrados.innerHTML = localStorage.getItem('cadastro_cap');

    if ( _totalALunos )
    {
      $( '#alunos_total' ).html( _totalALunos );
      total_alunos = Number( _totalALunos );
    }
    if ( _totalBens )
    {
      $( '#bens_total' ).html( _totalBens );
    }
    if ( _totalCap )
    {
      $( '#cap_total' ).html( _totalCap );
    }



    $( '#serie_aluno' ).on( 'click', function ()
    {
      if ( serie_aluno.value === '1' ) valor_aluno.value = 190,00;
      if ( serie_aluno.value === '2' ) valor_aluno.value = 280,00;
      if ( serie_aluno.value === '3' ) valor_aluno.value = 400,00;
      if ( serie_aluno.value === '4' ) valor_aluno.value = 460,00;
      if ( serie_aluno.value === '5' ) valor_aluno.value = 530,00;
      if ( serie_aluno.value === 'Selecione' )  valor_aluno.value = "";
    });


    $( '#cadastrar_aluno' ).on( 'click', function ()
    {
      cadastrar_aluno();
    });

    $( '#cadastrar_bens' ).on( 'click', function ()
    {
      cadastrar_bens();
    });

    $( '#cadastrar_cap' ).on( 'click', function ()
    {
      cadastrar_cap();
    });




    function cadastrar_aluno ()
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

        total_alunos = total_alunos + Number(valor_aluno.value);

        nome_aluno.value = '';
        serie_aluno.value = 'Selecione';
        valor_aluno.value = '';

        $('#alunos_total').html(total_alunos);
        localStorage.setItem( 'total_alunos', total_alunos );
      }
    }

    function cadastrar_bens ()
    {
      if ( nome_bens.value !== ''
        && tipo_bens.value !== 'Selecione'
        && valor_bens.value !== '' )
      {
        bens_cadastrados.innerHTML +=
           '<li>'
           + '<div class="saved_nome">' + nome_bens.value + '</div>'
           + '<div class="saved_tipo">' + tipo_bens.value + '</div>'
           + '<div class="saved_valor"><span class="valor_bens">' + valor_bens.value + '</span></div>'
          + '</li>'

        localStorage.setItem( 'cadastro_bens', bens_cadastrados.innerHTML );

        total_bens = total_bens + Number(valor_bens.value);

        nome_bens.value = '';
        tipo_bens.value = 'Selecione';
        valor_bens.value = '';

        $('#bens_total').html(total_bens);
        localStorage.setItem( 'total_bens', total_bens );
      }
    }

    function cadastrar_cap ()
    {
      if ( salariofunc_cap.value !== ''
        && local_cap.value !== ''
        && valor_cap.value !== '' )
      {
        cap_cadastrados.innerHTML +=
           '<li>'
           + '<div class="saved_1">' + salariofunc_cap.value + '</div>'
           + '<div class="saved_2">' + local_cap.value + '</div>'
           + '<div class="saved_3">' + valor_cap.value + '</div>'
          + '</li>'

        localStorage.setItem( 'cadastro_cap', cap_cadastrados.innerHTML );

        total_cap = total_cap
                  + Number(salariofunc_cap.value)
                  + Number(valor_cap.value);

        salariofunc_cap.value = '';
        local_cap.value = '';
        valor_cap.value = '';

        $('#cap_total').html(total_cap);
        localStorage.setItem( 'total_cap', total_cap );
      }
    }




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

    function show_cadastro_cap ()
    {
      $('.fixed_right').hide();
      $( '#cap_cadastrados_holder' ).show();
    }


    function calcular ()
    {
      var calculo = (_totalALunos + _totalBens) - _totalCap;
      $('#sit_liq_pat').html(calculo);
    }
