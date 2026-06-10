/* =====================================================
   GUARDIÃS DO CAMPO — AGRINHO 2025
   JavaScript: animações, quiz, gráfico e navbar
   ===================================================== */

'use strict';

// =====================================================
// 1. NAVBAR — efeito de scroll e menu hambúrguer
// =====================================================
(function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');

  if (!navbar || !hamburger || !navLinks) return;

  // Adiciona classe 'scrolled' ao rolar a página
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // Abre/fecha menu hambúrguer
  hamburger.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Fecha menu ao clicar em um link
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
})();


// =====================================================
// 2. CONTADORES ANIMADOS — números no hero
// =====================================================
(function initCounters() {
  const counters = document.querySelectorAll('.stat-num[data-target]');

  if (!counters.length) return;

  /**
   * Anima um número de 0 até o valor alvo.
   * @param {HTMLElement} el   - elemento a animar
   * @param {number}      end  - valor final
   * @param {number}      dur  - duração em ms
   */
  function animateCounter(el, end, dur) {
    var start     = 0;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / dur, 1);
      // easing ease-out
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * end);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = end;
      }
    }

    requestAnimationFrame(step);
  }

  // Dispara quando o hero entra na tela (IntersectionObserver)
  var observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var el     = entry.target;
        var target = parseInt(el.getAttribute('data-target'), 10);
        animateCounter(el, target, 1800);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(function (c) { observer.observe(c); });
})();


// =====================================================
// 3. TIMELINE DE TECNOLOGIA — aparece ao rolar
// =====================================================
(function initTimeline() {
  var items = document.querySelectorAll('.tech-item');

  if (!items.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // Delay escalonado por índice
        var index = Array.from(items).indexOf(entry.target);
        setTimeout(function () {
          entry.target.classList.add('visible');
        }, index * 120);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  items.forEach(function (item) { observer.observe(item); });
})();


// =====================================================
// 4. GRÁFICO DE BARRAS — anima ao entrar na tela
// =====================================================
(function initBarChart() {
  var chart = document.getElementById('barChart');

  if (!chart) return;

  var observer = new IntersectionObserver(function (entries, obs) {
    if (entries[0].isIntersecting) {
      var fills = chart.querySelectorAll('.bar-fill[data-width]');
      fills.forEach(function (bar, i) {
        setTimeout(function () {
          bar.style.width = bar.getAttribute('data-width') + '%';
        }, i * 150);
      });
      obs.unobserve(chart);
    }
  }, { threshold: 0.3 });

  observer.observe(chart);
})();


// =====================================================
// 5. QUIZ INTERATIVO
// =====================================================
(function initQuiz() {
  var quizArea    = document.getElementById('quizArea');
  var quizBar     = document.getElementById('quizBar');
  var quizCounter = document.getElementById('quizCounter');

  if (!quizArea || !quizBar || !quizCounter) return;

  /**
   * Perguntas do quiz
   * Fonte das informações embutida em cada pergunta/resposta.
   */
  var perguntas = [
    {
      // Fonte: Portal do Agronegócio / Ministério do Meio Ambiente
      // Abelhas responsáveis por 73% da polinização das áreas cultivadas
      pergunta: 'Qual percentual da polinização das culturas agrícolas as abelhas são responsáveis no Brasil?',
      opcoes: ['45%', '73%', '90%', '55%'],
      correta: 1,
      explicacao: 'Correto! As abelhas são responsáveis por 73% do processo de polinização que incrementa a produtividade das áreas cultivadas. (Fonte: Ministério do Meio Ambiente, Portal do Agronegócio)'
    },
    {
      // Fonte: IBGE, Pesquisa da Pecuária Municipal 2024
      // Brasil produziu 61 milhões de kg de mel em 2024
      pergunta: 'Quantos quilogramas de mel o Brasil produziu em 2024, segundo o IBGE?',
      opcoes: ['20 milhões', '42 milhões', '61 milhões', '80 milhões'],
      correta: 2,
      explicacao: 'Exato! O Brasil produziu 61 milhões de quilogramas de mel em 2024, consolidando sua posição entre os 11 maiores produtores mundiais. (Fonte: IBGE, Pesquisa da Pecuária Municipal 2024)'
    },
    {
      // Fonte: MapBiomas Alerta — RAD 2024
      // Cerrado foi o bioma mais desmatado em 2024: 652.197 ha
      pergunta: 'Qual bioma brasileiro foi o MAIS desmatado em 2024, segundo o MapBiomas?',
      opcoes: ['Amazônia', 'Mata Atlântica', 'Pantanal', 'Cerrado'],
      correta: 3,
      explicacao: 'Isso mesmo! O Cerrado foi o bioma mais desmatado em 2024, com 652.197 hectares perdidos — mais de 52% do total nacional. (Fonte: MapBiomas Alerta — RAD 2024)'
    },
    {
      // Fonte: Brazilian Journal of Development / ERCEMAPI 2024 / UFERSA 2024
      // Sistemas IoT monitoram temperatura, peso, umidade, som e fluxo
      pergunta: 'Qual tecnologia é usada nos sistemas modernos de monitoramento de colmeias para transmissão de dados em áreas rurais remotas?',
      opcoes: ['Bluetooth 5G', 'LoRa (Long Range)', 'Cabo de fibra óptica', 'Rádio AM/FM'],
      correta: 1,
      explicacao: 'Correto! A tecnologia LoRa (Long Range) permite transmissão de dados por quilômetros sem necessidade de Wi-Fi, sendo ideal para apiários em áreas remotas do sertão e campo. (Fonte: ERCEMAPI/SBC, 2024)'
    }
  ];

  var atual  = 0;
  var pontos = 0;
  var respondida = false;

  /** Renderiza a pergunta atual */
  function renderPergunta() {
    if (atual >= perguntas.length) {
      renderResultado();
      return;
    }

    respondida = false;

    var p    = perguntas[atual];
    var pct  = Math.round((atual / perguntas.length) * 100);

    // Atualiza barra e contador
    quizBar.style.width = pct + '%';
    quizBar.setAttribute('aria-valuenow', pct);
    quizCounter.textContent = 'Pergunta ' + (atual + 1) + ' de ' + perguntas.length;

    // Constrói HTML das opções
    var opcoesHTML = p.opcoes.map(function (op, i) {
      return '<button class="quiz-option" data-index="' + i + '" aria-label="Opção ' + (i + 1) + ': ' + op + '">' + op + '</button>';
    }).join('');

    quizArea.innerHTML =
      '<p class="quiz-question">' + p.pergunta + '</p>' +
      '<div class="quiz-options">' + opcoesHTML + '</div>';

    // Eventos das opções
    quizArea.querySelectorAll('.quiz-option').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (respondida) return;
        respondida = true;

        var escolha = parseInt(btn.getAttribute('data-index'), 10);
        var correta = p.correta;

        // Desabilita todos os botões
        quizArea.querySelectorAll('.quiz-option').forEach(function (b) {
          b.disabled = true;
          if (parseInt(b.getAttribute('data-index'), 10) === correta) {
            b.classList.add('correta');
          }
        });

        if (escolha === correta) {
          pontos++;
          btn.classList.add('correta');
        } else {
          btn.classList.add('errada');
        }

        // Feedback
        var feedback = document.createElement('p');
        feedback.className = 'quiz-feedback';
        feedback.textContent = p.explicacao;
        quizArea.appendChild(feedback);

        // Botão próxima
        var btnNext = document.createElement('button');
        btnNext.className = 'quiz-next';
        btnNext.textContent = (atual + 1 < perguntas.length)
          ? 'Próxima pergunta →'
          : 'Ver resultado 🎉';
        btnNext.addEventListener('click', function () {
          atual++;
          renderPergunta();
        });
        quizArea.appendChild(btnNext);
        btnNext.focus();
      });
    });
  }

  /** Renderiza o resultado final */
  function renderResultado() {
    quizBar.style.width = '100%';
    quizBar.setAttribute('aria-valuenow', 100);
    quizCounter.textContent = 'Resultado final';

    var mensagem = '';
    if (pontos === 4)      mensagem = '🏆 Perfeito! Você é um verdadeiro guardião das abelhas!';
    else if (pontos >= 3)  mensagem = '🌱 Muito bem! Você já sabe bastante sobre o tema!';
    else if (pontos >= 2)  mensagem = '📚 Boa tentativa! Continue aprendendo sobre abelhas!';
    else                   mensagem = '🐝 Continue estudando — as abelhas precisam de você!';

    quizArea.innerHTML =
      '<div class="quiz-result">' +
        '<h3>' + mensagem + '</h3>' +
        '<p>Você acertou <strong>' + pontos + ' de ' + perguntas.length + '</strong> perguntas.</p>' +
        '<button class="quiz-restart" id="quizRestart">Jogar novamente 🔄</button>' +
      '</div>';

    document.getElementById('quizRestart').addEventListener('click', function () {
      atual  = 0;
      pontos = 0;
      renderPergunta();
    });
  }

  // Inicia o quiz
  renderPergunta();
})();


// =====================================================
// 6. SCROLL SUAVE — destaca link ativo no menu
// =====================================================
(function initScrollSpy() {
  var sections = document.querySelectorAll('section[id], footer[id]');
  var links    = document.querySelectorAll('.nav-links a');

  if (!sections.length || !links.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var id = entry.target.getAttribute('id');
        links.forEach(function (link) {
          link.style.borderBottomColor = 'transparent';
          link.style.color = '';
          if (link.getAttribute('href') === '#' + id) {
            link.style.borderBottomColor = '#BA7517';
            link.style.color = '#3B6D11';
          }
        });
      }
    });
  }, {
    threshold: 0.35,
    rootMargin: '-60px 0px -35% 0px'
  });

  sections.forEach(function (s) { observer.observe(s); });
})();


// =====================================================
// 7. ANIMAÇÃO DE ENTRADA — genérica para cards/seções
// =====================================================
(function initFadeIn() {
  var targets = document.querySelectorAll(
    '.card, .biome-card, .action-item, .fact-card, .diag-sensor'
  );

  if (!targets.length || typeof IntersectionObserver === 'undefined') return;

  // Adiciona estilo inicial sem modificar o CSS principal
  targets.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, i) {
      if (entry.isIntersecting) {
        var el    = entry.target;
        var index = Array.from(targets).indexOf(el);
        // Delay leve e escalonado por posição
        var delay = (index % 4) * 90;
        setTimeout(function () {
          el.style.opacity   = '1';
          el.style.transform = 'translateY(0)';
        }, delay);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(function (t) { observer.observe(t); });
})();
