# 🏎️ RMcars - Dashboard de Gestão Automotiva

O **RMcars** é um ecossistema administrativo desenvolvido para facilitar o controle de estoque, monitoramento de vendas e análise de leads para concessionárias de veículos. O projeto combina uma interface sofisticada com performance otimizada.


## 🎯 Objetivo do Projeto

Transformar dados brutos de vendas e estoque em insights visuais, permitindo que o gestor da RMcars tome decisões rápidas sobre o inventário e metas mensais.

## 🚀 Funcionalidades Principais

* **Gestão de Estoque:** Visualização rápida de modelos disponíveis, categorias (SUV, Sedã, Esportivo) e status (Novo/Seminovo).
* **Painel de Vendas:** Gráficos comparativos de vendas mensais e ticket médio.
* **Filtro de Veículos:** Sistema de busca rápida por marca ou faixa de preço no client-side.
* **Status de Revisão:** Alertas visuais para veículos que precisam de manutenção ou preparação para venda.
* **Interface Premium:** Design inspirado em marcas automotivas de luxo com suporte a Dark Mode.

## 🛠️ Tecnologias e Ferramentas

* **HTML5 Semântico:** Para SEO e acessibilidade dos dados.
* **CSS3 (Custom Properties):** Sistema de temas e layout baseado em Grid/Flexbox.
* **JavaScript Vanilla:** Lógica de filtragem de estoque e cálculos de comissão.
* **Chart.js:** Gráficos de pizza (distribuição de marcas) e linhas (evolução de vendas).
* **Phosphor Icons:** Biblioteca de ícones moderna e leve.

## 📦 Estrutura de Arquivos

```text
├── index.html              # Estrutura principal e Sidebar
├── assets/
│   ├── css/
│   │   ├── global.css      # Reset e variáveis de cores (RMcars Brand)
│   │   └── dashboard.css   # Estilos específicos dos cards e tabelas
│   ├── js/
│   │   ├── inventory.js    # Dados simulados e lógica de filtros
│   │   └── sales-charts.js # Configuração dos gráficos de performance
│   └── img/
│       └── cars/           # Fotos dos modelos em destaque
└── README.md
