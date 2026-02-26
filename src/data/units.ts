export interface Suite {
  name: string;
  priceCheckIn?: string;
  priceOvernight: string;
  features: string[];
}

export interface Unit {
  id: string;
  name: string;
  slug: string;
  locationUrl: string;
  description: string;
  imageUrl: string;
  suites: Suite[];
}

// Helper features arrays based on the typebot flow
const featuresEstrela = ['Garagem privativa', 'Cama de casal', 'Ar condicionado', 'Frigobar', 'TV smart', 'Banheiro', 'Sistema de som'];
const featuresLua = ['Garagem privativa', 'Ar condicionado', 'Frigobar', 'TV smart', 'Sistema de som', 'Banheiro aquecido', 'Luz de LED noturna', 'Espelho'];
const featuresSol = ['Garagem privativa', 'Ar condicionado', 'Frigobar', 'TV smart', 'Sistema de som', 'Banheiro aquecido', 'Luz de LED noturna', 'Espelho', 'Banheira de hidromassagem'];
const featuresNuage = ['3 ambientes', 'Piscina externa', 'Boate com pole dance', 'Globo de luz', 'Sistema de som', 'Suíte principal separada'];

export const units: Unit[] = [
  {
    id: 'guararapes',
    name: 'NUAGE Guararapes',
    slug: 'guararapes',
    locationUrl: 'https://maps.app.goo.gl/6KRW7t4zHHrRFuAC8', // Keeping existing if valid, otherwise can be updated later
    description: 'O auge da exclusividade no bairro Guararapes. Privacidade e requinte.',
    imageUrl: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000&auto=format&fit=crop',
    suites: [
      {
        name: 'Suíte Estrela',
        priceCheckIn: '3h — R$ 70,00',
        priceOvernight: 'R$ 120,00',
        features: featuresEstrela
      },
      {
        name: 'Suíte Lua',
        priceCheckIn: '3h — R$ 60,00',
        priceOvernight: 'R$ 130,00',
        features: featuresLua
      },
      {
        name: 'Suíte Sol',
        priceCheckIn: '4h — R$ 120,00',
        priceOvernight: 'R$ 160,00',
        features: featuresSol
      },
      {
        name: 'Suíte Nuage',
        priceCheckIn: '4h — R$ 250,00',
        priceOvernight: 'R$ 400,00',
        features: featuresNuage
      }
    ]
  },
  {
    id: 'eusebio',
    name: 'NUAGE Eusébio',
    slug: 'eusebio',
    locationUrl: 'https://maps.app.goo.gl/6bR4E3gfywX5sr4G8',
    description: 'Suítes com luxo e conforto no Eusébio, perfeitas para momentos inesquecíveis.',
    imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop',
    suites: [
      {
        name: 'Suíte Estrela',
        priceCheckIn: '2h — R$ 70,00',
        priceOvernight: 'R$ 140,00',
        features: ['Garagem privativa', 'Ar condicionado', 'Frigobar', 'TV smart', 'Sistema de som']
      },
      {
        name: 'Suíte Lua',
        priceCheckIn: '3h — R$ 60,00',
        priceOvernight: 'R$ 150,00',
        features: ['Itens da Estrela', 'Banheiro aquecido', 'Luz de LED nãoite', 'Espelho']
      },
      {
        name: 'Suíte Sol',
        priceCheckIn: '4h — R$ 180,00',
        priceOvernight: 'R$ 250,00',
        features: ['Itens da Lua', 'Banheira de hidromassagem']
      }
    ]
  },
  {
    id: 'messejana',
    name: 'NUAGE Messejana',
    slug: 'messejana',
    locationUrl: 'https://maps.app.goo.gl/3h3Dy26kouU3RxAG6',
    description: 'Localização estratégica em Fortaleza com suítes temáticas e discrição total.',
    imageUrl: 'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?q=80&w=1000&auto=format&fit=crop',
    suites: [
      {
        name: 'Suíte Estrela',
        priceCheckIn: '2h — R$ 70,00',
        priceOvernight: 'R$ 140,00',
        features: featuresEstrela
      },
      {
        name: 'Suíte Lua',
        priceCheckIn: '3h — R$ 60,00',
        priceOvernight: 'R$ 150,00',
        features: featuresLua
      },
      {
        name: 'Suíte Sol',
        priceCheckIn: '3h — R$ 180,00',
        priceOvernight: 'R$ 250,00',
        features: ['Itens da Lua', 'Banheira de hidromassagem externa']
      }
    ]
  },
  {
    id: 'joquei',
    name: 'NUAGE Jóquei',
    slug: 'joquei',
    locationUrl: 'https://maps.app.goo.gl/FEKNt93rMxfoSYHcA',
    description: 'Design moderno e ambiente sofisticado próximo ao Jóquei Clube.',
    imageUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000&auto=format&fit=crop',
    suites: [
      {
        name: 'Suíte Estrela',
        priceCheckIn: '2h — R$ 60,00',
        priceOvernight: 'R$ 120,00',
        features: featuresEstrela
      },
      {
        name: 'Suíte Lua',
        priceCheckIn: '3h — R$ 60,00',
        priceOvernight: 'R$ 130,00',
        features: featuresLua
      },
      {
        name: 'Suíte Sol',
        priceCheckIn: '3h — R$ 150,00',
        priceOvernight: 'R$ 250,00',
        features: ['Itens da Lua', 'Banheira de hidromassagem externa']
      }
    ]
  },
  {
    id: 'papicu',
    name: 'NUAGE Papicu',
    slug: 'papicu',
    locationUrl: '#',
    description: 'A sofisticação do Papicu ao seu dispor.',
    imageUrl: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1000&auto=format&fit=crop',
    suites: [
      {
        name: 'Suíte Estrela',
        priceCheckIn: '3h — R$ 70,00',
        priceOvernight: 'R$ 120,00',
        features: featuresEstrela
      },
      {
        name: 'Suíte Lua',
        priceCheckIn: '3h — R$ 60,00',
        priceOvernight: 'R$ 130,00',
        features: featuresLua
      },
      {
        name: 'Suíte Sol',
        priceCheckIn: '4h — R$ 150,00',
        priceOvernight: 'R$ 250,00',
        features: ['Itens da Lua', 'Banheira de hidromassagem externa']
      }
    ]
  },
  {
    id: 'rodolfo-teofilo',
    name: 'NUAGE Rodolfo Teófilo',
    slug: 'rodolfo-teofilo',
    locationUrl: '#',
    description: 'Conforto e discrição na região do Rodolfo Teófilo.',
    imageUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000&auto=format&fit=crop',
    suites: [
      {
        name: 'Suíte Estrela',
        priceCheckIn: '3h — R$ 70,00',
        priceOvernight: 'R$ 120,00',
        features: featuresEstrela
      },
      {
        name: 'Suíte Lua',
        priceCheckIn: '3h — R$ 60,00',
        priceOvernight: 'R$ 130,00',
        features: featuresLua
      },
      {
        name: 'Suíte Sol',
        priceCheckIn: '4h — R$ 120,00',
        priceOvernight: 'R$ 160,00',
        features: ['Itens da Lua', 'Banheira de hidromassagem externa']
      }
    ]
  },
  {
    id: 'rogaciano-leite',
    name: 'NUAGE Rogaciano Leite',
    slug: 'rogaciano-leite',
    locationUrl: '#',
    description: 'Sua melhor escolha na Av. Rogaciano Leite.',
    imageUrl: 'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?q=80&w=1000&auto=format&fit=crop',
    suites: [
      {
        name: 'Suíte Lua',
        priceCheckIn: '3h — R$ 60,00',
        priceOvernight: 'R$ 130,00',
        features: ['Garagem privativa', 'Ar condicionado', 'Frigobar', 'TV smart', 'Som', 'Banheiro aquecido', 'Espelho']
      }
    ]
  },
  {
    id: 'siqueira',
    name: 'NUAGE Siqueira',
    slug: 'siqueira',
    locationUrl: '#',
    description: 'Momentos especiais com o melhor custo-benefício no Siqueira.',
    imageUrl: 'https://images.unsplash.com/photo-1549480017-d76466a4b7e8?q=80&w=1000&auto=format&fit=crop',
    suites: [
      {
        name: 'Suíte Estrela',
        priceCheckIn: '2h — R$ 49,90',
        priceOvernight: 'R$ 99,90',
        features: featuresEstrela
      },
      {
        name: 'Suíte Lua',
        priceCheckIn: '3h — R$ 59,90',
        priceOvernight: 'R$ 119,90',
        features: featuresLua
      }
    ]
  },
  {
    id: 'matriz',
    name: 'NUAGE Matriz',
    slug: 'matriz',
    locationUrl: '#',
    description: 'A essência do NUAGE em nossa matriz.',
    imageUrl: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000&auto=format&fit=crop',
    suites: [
      {
        name: 'Suíte Estrela',
        priceCheckIn: '2h — R$ 40,00',
        priceOvernight: 'R$ 100,00',
        features: featuresEstrela
      },
      {
        name: 'Suíte Lua',
        priceCheckIn: '3h — R$ 60,00',
        priceOvernight: 'R$ 120,00',
        features: featuresLua
      }
    ]
  }
];
