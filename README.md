🐝 Guardiãs do Campo — Agrinho 2026

Tema: Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente
Subtema: Como a tecnologia auxilia agricultores a acompanhar suas colmeias e a saúde de suas abelhas


📋 Sobre o Projeto
Site educativo desenvolvido para o Concurso Agrinho 2026, voltado a estudantes do Ensino Médio. O projeto conscientiza sobre a importância das abelhas para o agronegócio brasileiro, apresenta tecnologias IoT de monitoramento de colmeias e mostra dados reais sobre desmatamento nos biomas do Brasil — tudo com foco no equilíbrio entre produção agrícola e preservação ambiental.

🗂️ Estrutura de Arquivos
agrinho/
├── index.html   ← Estrutura e conteúdo do site
├── style.css    ← Estilos visuais (Paleta Mel & Floresta)
├── script.js    ← Interatividade (quiz, animações, gráficos)
└── README.md    ← Este arquivo

🚀 Como Rodar o Projeto
Pré-requisitos: VS Code instalado + extensão Live Server (Ritwick Dey)

Coloque os arquivos index.html, style.css e script.js na mesma pasta
Abra o VS Code → File → Open Folder → selecione a pasta do projeto
Clique com o botão direito no index.html → "Open with Live Server"
O site abrirá em http://127.0.0.1:5500


🎨 Design
ElementoEscolhaPaletaMel & FlorestaCor principal#3B6D11 — Verde FlorestaCor de destaque#BA7517 — Âmbar IntensoCor de alerta#D85A30 — CoralFundo claro#EAF3DE — Verde ClaroFonte títulosPlayfair Display (Google Fonts)Fonte corpoLato (Google Fonts)

📑 Seções do Site
#SeçãoConteúdo1HeroImagem de impacto, estatísticas animadas, chamada para ação2Importância4 cards sobre polinização, economia, biodiversidade e ameaças3TecnologiaTimeline com 5 tecnologias IoT reais para monitoramento de colmeias4DadosGráfico de barras por bioma + painel de fatos com fontes oficiais5Biomas4 cards com fotos e dados de desmatamento por bioma6AçãoQuiz interativo com 4 perguntas + 4 ações práticas do cidadão7CréditosRodapé com todas as fontes e referências bibliográficas

⚙️ Funcionalidades JavaScript

Contadores animados — números do hero sobem de 0 ao valor real ao carregar
Gráfico de barras — anima ao entrar na tela via IntersectionObserver
Timeline — itens aparecem em sequência ao rolar a página
Quiz interativo — 4 perguntas, feedback imediato, placar e opção de reiniciar
Navbar inteligente — sombra ao rolar, destaque do link da seção ativa
Menu hambúrguer — navegação mobile responsiva
Animações de entrada — cards surgem suavemente ao aparecer na tela
Redução de movimento — respeita prefers-reduced-motion para acessibilidade


📊 Fontes e Dados Utilizados
Todas as informações possuem fonte citada em comentários no HTML ou em texto visível na página.
DadoFonte61 milhões kg de mel (2024)IBGE — Pesquisa da Pecuária Municipal, 202473% da polinização das culturasMinistério do Meio Ambiente / Portal do Agronegócio350 mil empregos na cadeia apícolaIBGE, via Jornal Grande Bahia, 2026R$ 43 bilhões em serviços de polinizaçãoBPBES/REBIPP — Relatório Temático, 2019Cerrado: 652.197 ha desmatados (2024)MapBiomas Alerta — RAD 2024Amazônia: 5.796 km² desmatados (2024–25)INPE/PRODES, 2025Desmatamento total caiu 32,4% em 2024MapBiomas Alerta — RAD 2024Sistema IoT com ESP8266/DHT11/DS18B20Brazilian Journal of Development, 2025Sistema LoRa para apiários ruraisERCEMAPI/SBC, 2024Monitoramento com ESP32 + FirebaseUFERSA, 2024Sensores VOC e sonorosProjeto PFG-24-26, UNICAMP, 2024IoT solar + IA: +50–70% produtividadeRevista Destaques Acadêmicos, Univates, 2025

🖼️ Imagens
Todas as imagens são de bancos gratuitos, sem direitos autorais, com licença de uso livre. URLs e créditos individuais estão documentados como comentários no index.html.

Unsplash — unsplash.com — Unsplash License
Pexels — pexels.com — Pexels License


🏷️ Tag Agrinho
Presente de duas formas no projeto:
html<!-- Meta tag no <head> -->
<meta name="agrinho" content="abelhas-tecnologia-sustentabilidade" />

<!-- Elemento visível no rodapé -->
<span class="agrinho-tag">agrinho</span>

♿ Acessibilidade

Atributos aria-label, aria-labelledby e aria-live nas seções interativas
Foco visível em todos os elementos interativos via :focus-visible
Texto alternativo (alt) em todas as imagens
prefers-reduced-motion respeitado via CSS e JS
Contraste de cores adequado em todas as seções


🌐 Tecnologias Utilizadas

HTML5 — estrutura e semântica
CSS3 — estilos, responsividade e animações
JavaScript — interatividade (sem frameworks ou bibliotecas externas)


As fontes tipográficas são carregadas via Google Fonts (CDN). Nenhuma outra linguagem foi utilizada, conforme as regras do concurso.


👤 Créditos
Desenvolvido para o Concurso Agrinho 2026
Tema: Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente
Linguagens: HTML, CSS e JavaScript.
