import {
  ServiceCategory,
  ProjectItem,
  BeforeAfterItem,
  TestimonialItem,
  FAQItem,
  BlogPost,
  ProcessStep,
  Differential,
  RenovationServiceItem
} from '../types';

export const COMPANY_INFO = {
  name: "JM SOLUÇÕES",
  subtitle: "Soluções de Alto Padrão em Alumínio e Vidro",
  slogan: "Arquitetura, Precisão e Engenharia em Esquadrias de Luxo",
  phone: "(11) 94568-8116",
  whatsappNumber: "5511945688116",
  formattedWhatsApp: "+55 (11) 94568-8116",
  email: "contato@jmsolucoes.com.br",
  address: "Av. das Indústrias, 1500 - Distrito Industrial, São Paulo - SP",
  openingHours: "Segunda a Sexta: 08h às 18h | Sábados com agendamento",
  experienceYears: 18,
  projectsCount: 1250,
  warrantyYears: 10,
  citiesServed: "Grande São Paulo, Alphaville, Quinta da Baroneza, Fazenda Boa Vista, Litoral e Interior SP",
  socials: {
    instagram: "https://instagram.com/jmsolucoes.esquadrias",
    facebook: "https://facebook.com/jmsolucoes.oficial",
    linkedin: "https://linkedin.com/company/jmsolucoes",
    youtube: "https://youtube.com/jmsolucoes"
  }
};

export const TRUST_BAR_STATS = [
  { label: "Projetos Entregues", value: "+1.250", subtext: "Residenciais, comerciais e industriais" },
  { label: "Anos de Experiência", value: "+18 Anos", subtext: "Liderança e inovação contínua" },
  { label: "Garantia Integral", value: "10 Anos", subtext: "Estrutural e estanqueidade NBR" },
  { label: "Satisfação de Clientes", value: "99,4%", subtext: "Avaliações 5 estrelas em padrão luxo" },
  { label: "Pontualidade em Obras", value: "100%", subtext: "Rigoroso cumprimento de prazos" }
];

export const ABOUT_INFO = {
  title: "A Engenharia Por Trás da Estética Perfeita",
  headline: "Transformamos conceitos arquitetônicos em estruturas de alumínio de precisão milimétrica.",
  textParagraph1: "A JM SOLUÇÕES nasceu da visão de elevar o padrão das caixilharias no Brasil. Unimos o rigor da engenharia estrutural com as tendências mais sofisticadas da arquitetura contemporânea internacional. Não fabricamos apenas esquadrias; desenvolvemos soluções de iluminação natural, conforto acústico e integração visual que valorizam empreendimentos de altíssimo padrão.",
  textParagraph2: "Nossa fábrica conta com maquinário CNC de última geração e equipe de engenheiros especializados na norma ABNT NBR 10821. Cada peça é usinada com precisão micron, tratada contra intempéries com anodização e pintura eletrostática especial, garantindo durabilidade extrema e funcionamento suave por décadas.",
  values: [
    { title: "Engenharia de Precisão", subtitle: "Cálculo estrutural e estanqueidade rigorosa em cada esquadria." },
    { title: "Design Minimalista", subtitle: "Perfis de alumínio ultra finos com máxima área envidraçada." },
    { title: "Aislamiento Térmico e Acústico", subtitle: "Vidros duplos insulados e vedação com borracha EPDM." },
    { title: "Compromisso Absoluto", subtitle: "Acompanhamento desde a medição técnica até o pós-obra." }
  ],
  factoryImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
  architecturalImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
};

export const SERVICES_CATEGORIES: ServiceCategory[] = [
  {
    id: "fabricacao",
    title: "Fabricação Sob Medida",
    description: "Sistemas de alumínio usinados com precisão milimétrica para projetos arquitetônicos exclusivos.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    badge: "Linhas Premium & Minimalistas",
    items: [
      {
        name: "Esquadrias Minimalistas (Perfis Finos)",
        description: "Sistemas de alta tecnologia com perfis ocultos que priorizam a visibilidade máxima e a luz natural.",
        specs: ["Perfis visíveis de apenas 18mm a 26mm", "Capacidade para folhas de até 6 metros de altura", "Trilhos embutidos no piso sem degraus", "Rolamentos de roldanas inoxidáveis deslizamento suave"],
        image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Portas Pivotantes e Deslizantes de Grande Porte",
        description: "Portas de entrada imponentes em alumínio ripado, ACM ou vidro com pivotamento em aço inox.",
        specs: ["Alturas até 7m com fechadura multiponto digital", "Acabamentos corten, amadeirado e anodizado preto fosco", "Suporte estrutural reforçado anti-empenamento", "Vedação escova de nylon e borracha contínua"],
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Janelas Integradas e com Persianas Motorizadas",
        description: "Janelas termoacústicas com persianas embutidas em alumínio preenchidas com poliuretano expandido.",
        specs: ["Acionamento via controle remoto ou automação residencial", "Aislamiento acústico de até 38dB", "Opção de tela mosquiteira retrátil integrada", "Pintura Kynar alta resistência a raios UV"],
        image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Guarda-Corpos e Corrimãos de Alumínio e Vidro",
        description: "Sistemas de segurança para varandas e escadas sem montantes verticais.",
        specs: ["Torres em alumínio anodizado maciço ou perfil de engaste contínuo", "Vidro laminado temperado até 20mm", "Conformidade total com a NBR 14718", "Cálculo de impacto de até 2,5 kN/m"],
        image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Coberturas de Alumínio e Vidro / Pergolados",
        description: "Estruturas de alumínio estrutural para jardins de inverno, garagens e espaços gourmet.",
        specs: ["Calhas integradas invisíveis para drenagem", "Vidros laminados de controle solar (Refletivos/Low-E)", "Mecanismo de abertura retrátil automatizado opcional", "Resistência estrutural a cargas de vento elevadas"],
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Portões e Fechamentos Residenciais",
        description: "Portões sociais e basculantes em perfis de alumínio tubulares ou ripados horizontais/verticais.",
        specs: ["Motorização rápida com abertura em 4 segundos", "Estrutura interna reforçada contra deformações", "Zero manutenção contra ferrugem ou maresia", "Design personalizado conforme projeto do arquiteto"],
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "instalacao",
    title: "Instalação Especializada",
    description: "Equipe própria de engenheiros e técnicos treinados para montagens limpas e de altíssima precisão.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
    badge: "Equipe Própria & Normatizada",
    items: [
      {
        name: "Instalação de Fachadas Pele de Vidro & Structural Glazing",
        description: "Envidraçamento de edifícios comerciais e residências com fita VHB e silicone estrutural.",
        specs: ["Fixação com ancoragens calculadas estruturalmente", "Vedação bi-componente antileitosa", "Trabalho seguro com plataformas pantográficas e ventosas elétricas", "Ensaio de estanqueidade de água no local"],
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Instalação de Esquadrias e Caixilhos em Grandes Vãos",
        description: "Içamento e nivelamento a laser de grandes peças de alumínio com tolerância zero de desalinhamento.",
        specs: ["Nivelamento digital com precisão laser de 0,1mm", "Fixação em contramarcos selados com manta de silicone", "Proteção antiriscos e resíduos de obra durante a fase civil", "Nivelamento absoluto para trilhos embutidos no contrapiso"],
        image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Instalação de Box de Banheiro Luxo & Divisórias",
        description: "Montagem de sistemas de box de roldanas aparentes em aço inox/alumínio e divisórias de ambientes.",
        specs: ["Vidros temperados de 8mm a 10mm com película de segurança", "Perfis embutidos no teto e paredes", "Vedação antifungo de longa duração", "Aberturas tipo pivotante, camarão ou deslizante"],
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "manutencao",
    title: "Manutenção & Restauração",
    description: "Serviço preventivo e corretivo para restaurar o estanqueidade, silêncio e funcionalidade original.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80",
    badge: "Técnicos Certificados",
    items: [
      {
        name: "Troca de Roldanas, Fechos e Guias",
        description: "Substituição de componentes desgastados por roldanas duplas de rolamento blindado e aço inox.",
        specs: ["Substituição sem danificar a alvenaria ou pintura", "Ajuste e alinhamento de folhas pesadas", "Troca de braços articulados de janelas maxim-ar", "Roldanas originais certificadas"],
        image: "https://images.unsplash.com/photo-1581092163162-8e100c5a3311?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Regulagem e Troca de Borrachas / Vedação NBR",
        description: "Renovação total de escovas e gaxetas de EPDM para eliminação de barulho de vento e infiltrações.",
        specs: ["Substituição por borracha EPDM resistente ao sol", "Eliminação de ruídos e trepidações ao vento", "Injeção de selante de poliuretano nas junções de marcos", "Ajuste da pressão de fechamento de travas"],
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Substituição de Vidros Quebrados ou Embaçados",
        description: "Troca rápida e segura de peças de vidro quebrado ou vidros duplos que perderam o vácuo interno.",
        specs: ["Vidros laminados, temperados e insulados sob medida", "Troca sem alterar a caixilharia de alumínio existente", "Reciclagem adequada do vidro removido", "Atendimento emergencial prioritário"],
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
      }
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: "Solicite seu Orçamento",
    subtitle: "Atendimento ágil em menos de 2 horas",
    description: "Envie seu projeto arquitetônico em PDF/DWG ou mencione as medidas aproximadas pelo WhatsApp ou formulário.",
    iconName: "FileText",
    details: ["Análise preliminar por engenheiros", "Levantamento inicial de esquadrias", "Sem compromisso financeiro"]
  },
  {
    number: 2,
    title: "Visita Técnica e Medição",
    subtitle: "Precisão a laser no local da obra",
    description: "Nossos técnicos vão até sua obra para conferência minuciosa de vãos, prumos, esquadro e níveis de piso acabado.",
    iconName: "Compass",
    details: ["Conferência de prumo e nível a laser", "Avaliação da pressão de vento na região", "Análise de pontos de escoamento e drenagem"]
  },
  {
    number: 3,
    title: "Projeto Personalizado 3D",
    subtitle: "Aprovação detalhada de tipologias",
    description: "Desenvolvemos os desenhos técnicos das caixilharias indicando perfis, espessura de vidro, cor do alumínio e acessórios.",
    iconName: "Layers",
    details: ["Definição da linha de alumínio ideal", "Especificação de vidros de controle solar/acústico", "Aprovação técnica junto ao arquiteto"]
  },
  {
    number: 4,
    title: "Fabricação de Precisão CNC",
    subtitle: "Usinagem micron na fábrica",
    description: "Corte e montagem com maquinário computadorizado de alta tecnologia, tratamento de superfície e rigorosa inspeção de qualidade.",
    iconName: "Cpu",
    details: ["Cortes com serras de dupla cabeça CNC", "Tratamento de anodização ou pintura Kynar/Eletrostática", "Inspeção e pré-montagem na fábrica"]
  },
  {
    number: 5,
    title: "Instalação Técnica com Equipe Própria",
    subtitle: "Montagem limpa e organizada",
    description: "Instalação por profissionais fardados e treinados com equipamentos de segurança, contra-marcos e vedação de alto desempenho.",
    iconName: "Tool",
    details: ["Fixação com produtos de estanqueidade alemães", "Testes imediatos de rolamento e fechamento", "Proteção dos caixilhos durante a entrega"]
  },
  {
    number: 6,
    title: "Entrega Técnica & Garantia de 10 Anos",
    subtitle: "Tranquilidade total para seu imóvel",
    description: "Termo de garantia assinado com manual de uso e manutenção, além de suporte técnico pós-obra dedicado.",
    iconName: "ShieldCheck",
    details: ["Vistoria final acompanhada pelo cliente", "Manual de conservação e limpeza", "Garantia de 10 anos registrada em contrato"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "p1",
    title: "Residência Alphaville - Villa Toscana",
    category: "Residencial",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    location: "Barueri / SP",
    completionYear: "2025",
    profileLine: "Linha Minimalista Slim - Anodizado Preto Fosco",
    glassType: "Vidro Laminado 12mm Neutro Controle Solar",
    description: "Projeto de residência unifamiliar com vãos livres de 12 metros integrando a sala de estar com a área de piscina através de portas de alumínio minimalistas com trilhos embutidos no piso.",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "p2",
    title: "Edifício Corporativo Horizon Tower",
    category: "Comercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    location: "Faria Lima - São Paulo / SP",
    completionYear: "2025",
    profileLine: "Pele de Vidro Structural Glazing - Alumínio Cinza Inox",
    glassType: "Vidro Duplo Insulado Refletivo 24mm (Low-E)",
    description: "Fachada pele de vidro com mais de 2.400m² de área envidraçada com máxima eficiência térmica e redução de ruído de tráfego urbano.",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "p3",
    title: "Casa de Campo Quinta da Baroneza",
    category: "Minimalista",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    location: "Itatiba / SP",
    completionYear: "2024",
    profileLine: "Linha Elegance Minimalista - Alumínio Corten Special",
    glassType: "Vidro Duplo Termoacústico 16mm Extra Clear",
    description: "Padrão arquitetônico com caixilhos em cor corten combinando madeira natural e panos de vidro do piso ao teto com 4.5m de pé-direito.",
    gallery: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "p4",
    title: "Complexo Logístico e Industrial TechPark",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    location: "Campinas / SP",
    completionYear: "2024",
    profileLine: "Linha Industrial Heavy Duty - Anodizado Prata Matizado",
    glassType: "Vidro Aramado e Temperado de Segurança 10mm",
    description: "Fechamento de galpões industriais com venezianas industriais em alumínio extrudado para ventilação permanente e portões automáticos seccionados.",
    gallery: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "p5",
    title: "Mansão Fazenda Boa Vista",
    category: "Residencial",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    location: "Porto Feliz / SP",
    completionYear: "2025",
    profileLine: "Linha Pivotante Master - Alumínio Ripado Amadeirado",
    glassType: "Vidro Laminado Incolor 12mm + Porta Pivotante ACM 6m",
    description: "Porta monumental de entrada em perfil ripado amadeirado com fechadura biometria e caixilharia de dormitórios com persiana motorizada integrada.",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "p6",
    title: "Hotel Boutique Costa do Sol",
    category: "Comercial",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    location: "Ilhabela / SP",
    completionYear: "2024",
    profileLine: "Linha Inox & Alumínio Anodizado Náutico Antimaresia",
    glassType: "Vidro Triplo Insulado com Proteção UV 99%",
    description: "Guarda-corpos em alumínio náutico e vidros duplos de varanda preparados para atmosfera marinha de extrema salinidade sem oxidação.",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ]
  }
];

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: "ba1",
    title: "Reforma de Varanda Gourmet - Substituição de Caixilho Antigo",
    category: "Residencial de Alto Padrão",
    beforeImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    description: "Troca de esquadrias pesadas de ferro com dividores verticais visíveis por caixilharia minimalista JM SOLUÇÕES de vidro contínuo e trilho zero no piso.",
    specs: "Ganho de +40% de luminosidade natural e eliminação total de ruído externo."
  },
  {
    id: "ba2",
    title: "Fachada de Sede Comercial - Modernização Pele de Vidro",
    category: "Comercial / Arquitetura Corporativa",
    beforeImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
    afterImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    description: "Substituição de esquadrias antigas de alumínio natural foscas por Sistema Structural Glazing com vidros espelhados azulados Low-E.",
    specs: "Redução de 35% nos custos com ar-condicionado pelo isolamento térmico."
  }
];

export const DIFFERENTIALS: Differential[] = [
  {
    title: "Fabricação Própria de Alta Precisão",
    description: "Parque industrial moderno com maquinário CNC de origem alemã e italiana para encaixes perfeitos.",
    iconName: "Factory"
  },
  {
    title: "Atendimento Personalizado & Engenharia",
    description: "Acompanhamento exclusivo por engenheiros dedicados desde a leitura do projeto até o pós-obra.",
    iconName: "UserCheck"
  },
  {
    title: "Equipe Própria Certificada (Sem Terceirizados)",
    description: "Profissionais registrados, fardados e treinados nas normas NR-35 (trabalho em altura) e NR-6.",
    iconName: "Shield"
  },
  {
    title: "Materiais Certificados com Selo NBR",
    description: "Alumínio das melhores ligas (6063 T5) com garantia de espessura e rigidez estritamente normatizadas.",
    iconName: "Award"
  },
  {
    title: "Alto Padrão de Acabamento & Anodização",
    description: "Pinturas eletrostáticas e anodizações especiais com garantia contra desbotamento por exposição solar.",
    iconName: "Sparkles"
  },
  {
    title: "Garantia Real de 10 Anos em Contrato",
    description: "Garantia estendida cobrindo estrutura, estanqueidade contra água e funcionamento de mecanismos.",
    iconName: "CheckCircle2"
  },
  {
    title: "Rigoroso Cumprimento de Prazos",
    description: "Cronograma de entrega e instalação blindado com multas contratuais no caso de atrasos.",
    iconName: "Clock"
  },
  {
    title: "Projetos 100% Sob Medida",
    description: "Flexibilidade total para atender desenhos complexos, pés-direitos duplos e formas especiais.",
    iconName: "Ruler"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Arq. Roberto Mendonça",
    role: "Sócio Diretor na RMA Arquitetos",
    city: "São Paulo / SP",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    content: "Trabalho com a JM SOLUÇÕES há mais de 8 anos nos projetos de casas de alto padrão do escritório. A precisão nos perfis minimalistas e a pontualidade na montagem de vãos de 6 metros de altura são impecáveis. Recomendo de olhos fechados.",
    rating: 5,
    projectType: "Residência Minimalista de Luxo"
  },
  {
    id: "t2",
    name: "Eng. Mariana Siqueira",
    role: "Gerente de Obras - Construtora Prime Build",
    city: "Alphaville / SP",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    content: "A fachada pele de vidro que instalaram no nosso edifício comercial passou no ensaio de estanqueidade de água com nota máxima na primeira tentativa. O atendimento do engenheiro responsável do início ao fim foi diferencial absoluto.",
    rating: 5,
    projectType: "Edifício Comercial 14 Andares"
  },
  {
    id: "t3",
    name: "Carlos Eduardo Fontes",
    role: "Proprietário de Imóvel",
    city: "Quinta da Baroneza - Itatiba / SP",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    content: "Substituímos todas as caixilharias da nossa casa de campo por portas deslizantes minimalistas. O conforto térmico e o silêncio dentro da casa mudaram drasticamente. Além disso, a equipe de instalação deixou a obra impecavelmente limpa.",
    rating: 5,
    projectType: "Troca Total de Esquadrias"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "f1",
    question: "Vocês realizam orçamento sem compromisso?",
    answer: "Sim! Você pode nos enviar a lista de esquadrias ou o projeto arquitetônico (DWG ou PDF) por WhatsApp ou e-mail. Nossa equipe de engenharia analisa os vãos e elabora um orçamento detalhado com indicação de perfis e vidros em até 24 horas.",
    category: "Orçamento"
  },
  {
    id: "f2",
    question: "Qual é o prazo médio de fabricação e instalação?",
    answer: "O prazo médio varia de 25 a 45 dias úteis após a conferência e medição técnica definitiva no local da obra. Definimos um cronograma preciso em contrato para acompanhar o andamento da sua construção.",
    category: "Geral"
  },
  {
    id: "f3",
    question: "Como funciona a garantia de 10 anos?",
    answer: "Oferecemos garantia contratual de 10 anos para a integridade estrutural e pintura/anodização dos perfis de alumínio, e garantia de 2 a 5 anos para componentes operacionais, como roldanas, fechos e motores de persianas integradas.",
    category: "Garantia"
  },
  {
    id: "f4",
    question: "Vocês fabricam esquadrias realmente sob medida?",
    answer: "Absolutamente. Todas as nossas peças são 100% sob medida. Não trabalhamos com tamanhos padronizados de prateleira. Desenvolvemos soluções especiais para pés-direitos duplos, portas pivotantes monumentais e vãos curvos ou angulados.",
    category: "Técnico"
  },
  {
    id: "f5",
    question: "Atendem construtoras, escritórios de arquitetura e empresas?",
    answer: "Sim. Temos um departamento técnico dedicado exclusivamente ao atendimento corporativo de construtoras, escritórios de arquitetura e obras industriais, com preços competitivos para volumes e condições de faturamento flexíveis.",
    category: "Geral"
  },
  {
    id: "f6",
    question: "Quais regiões e cidades vocês atendem?",
    answer: "Atendemos toda a Grande São Paulo, Alphaville, Aldeia da Serra, Região Metropolitana de Campinas, Vale do Paraíba, Litoral Norte/Sul e condomínios fechados do interior de São Paulo.",
    category: "Geral"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    title: "Esquadrias Minimalistas em 2026: A Tendência dos Perfis Ocultos na Arquitetura de Luxo",
    summary: "Descubra como os novos caixilhos com perfis visíveis de apenas 18mm estão redefinindo a integração entre interiores e paisagismo.",
    category: "Arquitetura & Design",
    date: "14 de Julho de 2026",
    readTime: "4 min de leitura",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Eng. Gabriel Prado",
      role: "Diretor Técnico JM SOLUÇÕES",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    content: [
      "A busca pela integração total entre os ambientes internos e a natureza tem impulsionado a arquitetura residencial de alto padrão a adotar caixilhos com perfis cada vez mais esguios e discretos.",
      "As chamadas esquadrias minimalistas utilizam o próprio vidro como elemento estrutural, permitindo que a moldura metálica fique praticamente toda embutida nas paredes, pisos e forros.",
      "Com a capacidade de suportar folhas de vidro de mais de 800 kg com roldanas de rolamento náutico em aço inoxidável, a abertura de portas gigantescas se tornou leve, podendo ser operada até mesmo por uma criança.",
      "Na JM SOLUÇÕES, nosso sistema minimalista é testado sob pressão hidrostática extrema, garantindo que mesmo diante de tempestades tropicais não ocorra a mínima infiltração de água."
    ]
  },
  {
    id: "b2",
    title: "Como Escolher a Espessura e o Tipo de Vidro Ideal para Reduzir Barulho e Calor",
    summary: "Guia completo sobre vidros laminados, temperados e insulados termoacústicos para máxima eficiência energética.",
    category: "Engenharia & Soluções",
    date: "02 de Junho de 2026",
    readTime: "6 min de leitura",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Arq. Sophia Martins",
      role: "Especialista em Fachadas Sustentáveis",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    content: [
      "A escolha do vidro correto é responsável por mais de 70% do desempenho térmico e acústico de uma janela ou porta em alumínio.",
      "Para imóveis localizados próximos a avenidas movimentadas ou aeroportos, o vidro duplo termoacústico (insulado) composto por lâminas de diferentes espessuras com câmara de gás árgon é a solução definitiva.",
      "Já para controlar a incidência de radiação solar em fachadas poente, os vidros de controle solar de última geração bloqueiam até 80% do calor sem escurecer os ambientes internos.",
      "Consulte nossos engenheiros para calcular a composição ideal conforme a orientação solar da sua residência."
    ]
  },
  {
    id: "b3",
    title: "Pintura Eletrostática vs Anodização: Qual o Melhor Acabamento para Esquadrias?",
    summary: "Entenda a durabilidade, estética e resistência à corrosão de cada tipo de acabamento para alumínio.",
    category: "Materiais & Dicas",
    date: "18 de Maio de 2026",
    readTime: "5 min de leitura",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Eng. Gabriel Prado",
      role: "Diretor Técnico JM SOLUÇÕES",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    content: [
      "Tanto a anodização quanto a pintura eletrostática a pó oferecem proteção excelente contra a oxidação do alumínio, porém com características visuais e táteis distintas.",
      "A anodização cria uma camada eletroquímica protetora que preserva a textura metálica nobre do alumínio em tons como inox, preto anodizado, champanhe e bronze.",
      "Já a pintura eletrostática Kynar/Pó permite uma paleta infinita de cores, incluindo acabamentos acetinados, corten, amadeirados texturizados e fosco aveludado de altíssima resistência UV.",
      "Para regiões praianas com forte maresia, ambos os acabamentos devem seguir rígidos parâmetros de camada micron recomendados pela norma ABNT."
    ]
  }
];

export const RENOVATION_SERVICES: RenovationServiceItem[] = [
  {
    id: "r1",
    title: "Demolição Interna",
    category: "Estrutura & Alvenaria",
    description: "Execução segura de demolição controlada em ambientes internos residenciais e comerciais, preservando estruturas principais.",
    iconName: "Hammer",
    badge: "Segurança & Agilidade",
    tags: ["Paredes", "Divisórias", "Remoção"],
    image: "/demolicao.jpg"
  },
  {
    id: "r2",
    title: "Levantamento de Paredes",
    category: "Estrutura & Alvenaria",
    description: "Construção e elevação de paredes e divisórias com bloco de cimento ou tijolos cerâmicos com prumo e alinhamento perfeito.",
    iconName: "Building",
    badge: "Alvenaria Estrutural",
    tags: ["Bloco de Cimento", "Tijolos", "Divisórias"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "r3",
    title: "Execução de Contrapiso",
    category: "Estrutura & Alvenaria",
    description: "Nivelamento e confecção de contrapiso de qualquer espessura com caimento ideal para assentamento de pisos e porcelanatos.",
    iconName: "Layers",
    badge: "Nivelamento Técnico",
    tags: ["Qualquer Espessura", "Argamassa", "Regularização"],
    image: "/contrapiso.jpg"
  },
  {
    id: "r4",
    title: "Retirada e Descarte de Entulho",
    category: "Estrutura & Alvenaria",
    description: "Coleta, ensacamento e destinação ambientalmente correta de entulhos e resíduos de obras e reformas.",
    iconName: "Trash2",
    badge: "Eco-Responsável",
    tags: ["Caçamba", "Limpeza de Obra", "Resíduos"],
    image: "/entulho.jpg"
  },
  {
    id: "r5",
    title: "Porcelanato, Azulejo & Elétrica",
    category: "Acabamentos & Interiores",
    description: "Assentamento de porcelanato de grandes formatos, azulejos e execução completa de infraestrutura e instalações elétricas.",
    iconName: "Zap",
    badge: "Fino Acabamento",
    tags: ["Porcelanato", "Azulejo", "Instalação Elétrica"],
    image: "/acabamento.jpg"
  },
  {
    id: "r6",
    title: "Instalação de Forro PVC e Drywall",
    category: "Acabamentos & Interiores",
    description: "Montagem profissional de rebaixamento de teto em gesso acartonado (drywall) ou réguas de forro PVC técnico.",
    iconName: "Grid",
    badge: "Isolamento & Estética",
    tags: ["Gesso Drywall", "Forro PVC", "Sancas"],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "r7",
    title: "Limpeza Fina Pós-Obra",
    category: "Acabamentos & Interiores",
    description: "Higienização técnica detalhada e remoção de resíduos de tinta, cimento e poeira para entrega imediata da obra.",
    iconName: "Sparkles",
    badge: "Pronto para Morar",
    tags: ["Pós-Obra", "Higienização", "Vidros & Pisos"],
    image: "/limpeza.jpg"
  },
  {
    id: "r8",
    title: "Fabricação e Instalação de Porta, Janela, Guarda-Corpo, Corrimão e Box",
    category: "Esquadrias, Vidros & Manutenção",
    description: "Produção sob medida e instalação de esquadrias em alumínio, portas, janelas, guarda-corpos, corrimãos e box de banheiro.",
    iconName: "DoorClosed",
    badge: "Fabricação Própria",
    tags: ["Portas & Janelas", "Guarda-Corpo", "Box & Corrimão"],
    image: "/fabricacao.jpg"
  },
  {
    id: "r9",
    title: "Fechamento de Sacada Residencial e Comercial",
    category: "Esquadrias, Vidros & Manutenção",
    description: "Instalação de envidraçamento retrátil de sacadas com perfis reforçados, vedação superior e rolamentos em inox.",
    iconName: "Maximize2",
    badge: "Visão Panorâmica",
    tags: ["Envidraçamento", "Sacadas", "Sistema Retrátil"],
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "r10",
    title: "Troca de Vidros em Fachadas e Residências",
    category: "Esquadrias, Vidros & Manutenção",
    description: "Substituição de vidros quebrados, trincados ou desbotados em pele de vidro, janelas e portões prediais ou residenciais.",
    iconName: "Shield",
    badge: "Serviço nas Alturas",
    tags: ["Pele de Vidro", "Vidro Temperado", "Laminados"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "r11",
    title: "Troca de Bracinhos Maxim-ar e Puxadores",
    category: "Esquadrias, Vidros & Manutenção",
    description: "Manutenção e substituição de articulações maxim-ar, braços de inox, fechos, roldanas e puxadores em esquadrias.",
    iconName: "Wrench",
    badge: "Manutenção Preventiva",
    tags: ["Maxim-ar", "Puxadores", "Ferragens Inox"],
    image: "/maxim-ar.jpg"
  },
  {
    id: "r12",
    title: "Troca de Borrachas e Ajuste Anti-Ruído",
    category: "Esquadrias, Vidros & Manutenção",
    description: "Substituição de gaxetas e guarnições de borracha para eliminação de barulho, rangidos, folgas e aumento de pressão nas janelas.",
    iconName: "VolumeX",
    badge: "Conforto Acústico",
    tags: ["Vedação de Borracha", "Elimina Rangidos", "Mais Pressão"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "r13",
    title: "Aplicação de Insulfilm Predial e Residencial",
    category: "Esquadrias, Vidros & Manutenção",
    description: "Instalação de películas de controle solar, privacidade, espelhadas ou de segurança para vidros residenciais e comerciais.",
    iconName: "Sun",
    badge: "Proteção Térmica & UV",
    tags: ["Película Solar", "Insulfilm Espelhado", "Privacidade"],
    image: "/insulfilm.jpg"
  },
  {
    id: "r14",
    title: "Vedação Contra Água em Fachadas e Residências",
    category: "Fachadas, Coberturas & Proteção",
    description: "Aplicação de PU e silicone de alta performance em juntas de esquadrias e pele de vidro para estanqueidade 100% contra infiltrações.",
    iconName: "Droplet",
    badge: "Infiltração Zero",
    tags: ["Vedação de PU", "Sem Infiltrações", "Estanqueidade"],
    image: "/vedacao.jpg"
  },
  {
    id: "r15",
    title: "Lavagem de Fachadas Prediais",
    category: "Fachadas, Coberturas & Proteção",
    description: "Higienização profunda e restauração de pele de vidro, pastilhas e ACM em fachadas prediais com equipe especializada.",
    iconName: "Wind",
    badge: "Limpeza nas Alturas",
    tags: ["Fachada Predial", "Hydro-Jetting", "Trabalho em Altura"],
    image: "/lavagem.jpg"
  },
  {
    id: "r16",
    title: "Lavagem de Portarias",
    category: "Fachadas, Coberturas & Proteção",
    description: "Lavagem e renovação visual de portarias de condomínios, marquises, coberturas e vidros de entrada.",
    iconName: "Home",
    badge: "Renovação de Entrada",
    tags: ["Portarias", "Condomínios", "Vidros & Esquadrias"],
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "r17",
    title: "Instalação de Rufos e Calhas",
    category: "Fachadas, Coberturas & Proteção",
    description: "Fabricação e instalação de rufos pingadeira, calhas moldura ou quadradas em alumínio ou chapa galvanizada contra vazamentos.",
    iconName: "Umbrella",
    badge: "Drenagem Perfeita",
    tags: ["Rufos Pingadeira", "Calhas de Alumínio", "Sem Infiltração"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "r18",
    title: "Instalação de Telhados (Eternit, Zinco ou Vidro)",
    category: "Fachadas, Coberturas & Proteção",
    description: "Montagem de estrutura e cobertura de telhados com telhas de eternit, telhas termoacústicas de zinco ou coberturas de vidro.",
    iconName: "Home",
    badge: "Estruturas Reforçadas",
    tags: ["Telhas Zinco", "Eternit", "Cobertura de Vidro"],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "r19",
    title: "Instalação de Cerca Elétrica",
    category: "Fachadas, Coberturas & Proteção",
    description: "Projeto e instalação de centrais de cerca elétrica com hastes de alumínio, alarme sonorizado e proteção perimetral para imóveis.",
    iconName: "ShieldAlert",
    badge: "Segurança Perimetral",
    tags: ["Cerca Elétrica", "Hastes Alumínio", "Segurança Residencial"],
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80"
  }
];
