// ==============================================================================
// CONFIGURAÇÃO CENTRAL DA CLIENTE: DANNY LIRA NAILS (JABOATÃO DOS GUARARAPES)
// Toda a personalização do site fica neste arquivo.
// Fontes: bio do Instagram @dannylira_nails, perfil e catálogo do WhatsApp
// Business (valores reais) e endereço do Google.
// ATENÇÃO: horário de atendimento e valor da aplicação no molde F1 não
// aparecem nos prints. Confirmar com a Danny antes da entrega.
// ==============================================================================

export const studioConfig = {
  name: "Danny Lira",
  ownerName: "Danny",
  nameSuffix: "Nails",
  fullName: "Danny Lira Nails",
  tagline: "Tips, molde F1, fibra de vidro e esmaltação em gel",
  subtitle:
    "Especialista em tips e molde F1, em Dois Carneiros. Escolha o serviço, veja o valor e reserve seu horário em poucos toques.",
  city: "Jaboatão dos Guararapes, PE",
  cityShort: "Jaboatão",
  neighborhood: "Dois Carneiros",
  addressShort: "R. Manoel Carneiro Leão, 1525",
  address: "R. Manoel Carneiro Leão, 1525 - Dois Carneiros, Jaboatão dos Guararapes - PE, 54280-535",
  addressNote: "",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=R.+Manoel+Carneiro+Leão,+1525,+Dois+Carneiros,+Jaboatão+dos+Guararapes+-+PE",
  whatsappNumber: "5581986752754", // Apenas dígitos com DDI e DDD
  whatsappDisplay: "(81) 98675-2754",
  instagramHandle: "@dannylira_nails",
  instagramUrl: "https://www.instagram.com/dannylira_nails",
  // Link do Calendly. Na demo usamos a agenda de teste; na entrega vai o da Danny.
  calendlyUrl: "https://calendly.com/carbosalarissa/30min",
  // ESTIMATIVA: o WhatsApp dela diz "atendimento com hora marcada", sem os dias.
  workingHours: [
    { days: "Segunda a Sábado", hours: "Com hora marcada" },
    { days: "Domingo", hours: "Fechado" },
  ],
  workingHoursShort: "Seg a sáb, com hora marcada",
  // Dias sem atendimento (0 = domingo ... 6 = sábado). Vazio = abre todos os dias.
  closedWeekdays: [0],
  periods: [
    { id: "Manhã (08h às 12h)", label: "Manhã", sub: "08h às 12h" },
    { id: "Tarde (13h às 18h)", label: "Tarde", sub: "13h às 18h" },
  ],
  paymentNote: "Os valores podem variar conforme o comprimento e a decoração. A Danny confirma tudo pelo WhatsApp.",
  // Avisos que a cliente confirma antes de agendar
  bookingNotes: [
    "O atendimento é com hora marcada. Chegue 5 minutinhos antes.",
    "Se precisar desmarcar, avise com antecedência para liberar a vaga.",
    "Decorações e nail art têm valor à parte.",
  ],
  decoratedNote: "Decorações, strass, corações e nail art têm valor à parte. Mande a foto da inspiração nas observações.",

  // Sobre a profissional
  about: {
    photo: "/images/danny-lira.webp",
    title: "Nail designer especialista em tips e molde F1",
    text: "A Danny trabalha com unhas de alto padrão: alongamento na tips e no molde F1, fibra de vidro e esmaltação em gel com cutilagem inclusa. Cada mão é feita com calma, no formato e no comprimento que combinam com você.",
    highlights: ["Tips", "Molde F1", "Fibra de vidro", "Esmaltação em gel"],
    coursesText: "A Danny também forma manicures. O curso tem prática, suporte e certificado.",
  },

  // Categorias de serviço (valores reais do catálogo do WhatsApp, exceto onde indicado)
  categories: [
    {
      id: "tips-f1",
      title: "Tips e Molde F1",
      short: "Tips e F1",
      description: "A especialidade da Danny. Alongamento com gel, leve e resistente, no formato que você escolher.",
      image: "/images/gel-tips-francesinha.webp",
      duration: "2h a 2h30",
      maintenance: "Manutenção indicada a cada 20 a 25 dias",
      notes: ["Inclui cutilagem"],
      items: [
        { id: "gel-tips", title: "Aplicação de gel na tips", price: 180, popular: true },
        { id: "manut-tips", title: "Manutenção de gel na tips", price: 120 },
        { id: "molde-f1", title: "Aplicação no molde F1", price: null },
        { id: "manut-f1", title: "Manutenção no molde F1", price: 120 },
      ],
    },
    {
      id: "fibra",
      title: "Fibra de Vidro",
      short: "Fibra",
      description: "Unha fina e natural, com acabamento liso. Fica linda na francesinha e no nude.",
      image: "/images/fibra-francesinha-azul.webp",
      duration: "2h a 2h30",
      maintenance: "Manutenção indicada a cada 20 a 25 dias",
      notes: ["Inclui cutilagem"],
      items: [
        { id: "fibra", title: "Aplicação de fibra de vidro", price: 200, popular: true },
        { id: "manut-fibra", title: "Manutenção de fibra de vidro", price: 120 },
      ],
    },
    {
      id: "gel",
      title: "Gel na Unha Natural",
      short: "Gel",
      description: "Para quem quer a própria unha mais forte e com brilho que dura semanas.",
      image: "/images/gel-vinho.webp",
      duration: "1h a 1h30",
      maintenance: "Dura de 15 a 20 dias",
      notes: ["Cutilagem inclusa"],
      items: [
        { id: "esmalt-gel", title: "Esmaltação em gel", price: 70, popular: true },
        { id: "banho-gel", title: "Banho de gel", price: 130 },
        { id: "blindagem", title: "Blindagem", price: 60 },
      ],
    },
  ],

  // Adicionais que podem ser somados no agendamento
  addons: [
    { id: "nail-art", name: "Decorações e nail art", price: 40 },
  ],

  // Informações importantes
  policies: [
    {
      title: "Hora marcada",
      description: "A agenda é por horário. Chegue 5 minutinhos antes para o seu atendimento render.",
    },
    {
      title: "Desmarcar",
      description: "Imprevisto acontece. Avise com antecedência para a vaga ir para outra cliente.",
    },
    {
      title: "Decorações",
      description: "Strass, corações, fio dourado e nail art têm valor à parte. Mande a foto da inspiração no WhatsApp.",
    },
    {
      title: "Manutenção",
      description: "Para o alongamento durar bonito, marque a manutenção entre 20 e 25 dias.",
    },
  ],

  // Galeria de fotos de resultados (fotos reais do Instagram e do WhatsApp da Danny)
  gallery: [
    { url: "/images/perolado-fio-dourado.webp", tag: "Perolado com contorno dourado" },
    { url: "/images/gel-tips-francesinha.webp", tag: "Gel na tips, francesinha" },
    { url: "/images/molde-f1-flores.webp", tag: "Molde F1 com flores" },
    { url: "/images/vinho-amendoada.webp", tag: "Vinho amendoada" },
    { url: "/images/quadrada-coracoes-strass.webp", tag: "Francesinha com corações e strass" },
    { url: "/images/fibra-lilas-glitter.webp", tag: "Fibra com glitter lilás" },
    { url: "/images/francesinha-pink-baby.webp", tag: "Francesinha no Pink Baby" },
    { url: "/images/banho-gel-vermelho.webp", tag: "Banho de gel vermelho" },
    { url: "/images/tips-branco-leitoso.webp", tag: "Tips branco leitoso" },
    { url: "/images/francesinha-coracao.webp", tag: "Francesinha curta com coração" },
    { url: "/images/blindagem-nude.webp", tag: "Blindagem nude" },
    { url: "/images/decoracao-nail-art.webp", tag: "Nail art delicada" },
  ],
};

// Lista "achatada" de todos os serviços, usada no agendamento
export const allServices = studioConfig.categories.flatMap((cat) =>
  cat.items.map((item) => ({
    ...item,
    category: cat.title,
    categoryId: cat.id,
    duration: item.duration || cat.duration,
  }))
);

export const formatPrice = (value) =>
  value === null || value === undefined
    ? "Sob consulta"
    : `R$ ${Number(value).toFixed(2).replace(".", ",")}`;
