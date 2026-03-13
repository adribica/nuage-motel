export interface Suite {
  name: string;
  priceCheckIn?: string;
  priceOvernight: string;
  features: string[];
  imageUrl?: string;
  images?: string[];
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
  // --- Unidades com fotos reais ---
  {
    id: 'joquei',
    name: 'NUAGE Jóquei',
    slug: 'joquei',
    locationUrl: 'https://maps.app.goo.gl/FEKNt93rMxfoSYHcA',
    description: 'Design moderno e ambiente sofisticado próximo ao Jóquei Clube.',
    imageUrl: '/images/units/joquei_hq.png',
    suites: [
      {
        name: 'Suíte Estrela',
        priceCheckIn: '2h — R$ 60,00',
        priceOvernight: 'R$ 120,00',
        features: featuresEstrela,
        imageUrl: 'https://i.postimg.cc/dt7DmwMm/Estrela_Joquei.png'
      },
      {
        name: 'Suíte Lua',
        priceCheckIn: '3h — R$ 60,00',
        priceOvernight: 'R$ 130,00',
        features: featuresLua,
        imageUrl: 'https://i.postimg.cc/SNwRg3k0/Lua_Joquei.png'
      },
      {
        name: 'Suíte Sol',
        priceCheckIn: '3h — R$ 150,00',
        priceOvernight: 'R$ 250,00',
        features: ['Itens da Lua', 'Banheira de hidromassagem externa'],
        imageUrl: 'https://i.postimg.cc/gjjj7Pxp/Sol_Joquei_1.png',
        images: [
          'https://i.postimg.cc/gjjj7Pxp/Sol_Joquei_1.png',
          'https://i.postimg.cc/0j4jRHSw/Sol_Joquei_2.png',
          'https://i.postimg.cc/h4ZfdhYt/Sol_Joquei_3.png'
        ]
      }
    ]
  },
  {
    id: 'messejana',
    name: 'NUAGE Messejana',
    slug: 'messejana',
    locationUrl: 'https://maps.app.goo.gl/3h3Dy26kouU3RxAG6',
    description: 'Localização estratégica em Fortaleza com suítes temáticas e discrição total.',
    imageUrl: 'https://i.postimg.cc/vBpsrCYB/motelmessajana.jpg',
    suites: [
      {
        name: 'Suíte Estrela',
        priceCheckIn: '2h — R$ 70,00',
        priceOvernight: 'R$ 140,00',
        features: featuresEstrela,
        imageUrl: 'https://i.postimg.cc/rp9pFpWc/Estrela_Messajana.png'
      },
      {
        name: 'Suíte Lua',
        priceCheckIn: '3h — R$ 60,00',
        priceOvernight: 'R$ 150,00',
        features: featuresLua,
        imageUrl: 'https://i.postimg.cc/qRbMyZj5/Lua_Messajana.png'
      },
      {
        name: 'Suíte Sol',
        priceCheckIn: '3h — R$ 180,00',
        priceOvernight: 'R$ 250,00',
        features: ['Itens da Lua', 'Banheira de hidromassagem externa'],
        imageUrl: 'https://i.postimg.cc/wvTjtdcN/Sol_Messajana.png',
        images: [
          'https://i.postimg.cc/wvTjtdcN/Sol_Messajana.png',
          'https://i.postimg.cc/cJWHS3vX/Sol_Messajana_2.png',
          'https://i.postimg.cc/P5Yx9y5C/Sol_Messajana_3.png'
        ]
      }
    ]
  },
  {
    id: 'rodolfo-teofilo',
    name: 'NUAGE Rodolfo Teófilo',
    slug: 'rodolfo-teofilo',
    locationUrl: '#',
    description: 'Conforto e discrição na região do Rodolfo Teófilo.',
    imageUrl: 'https://i.postimg.cc/ht4HdKL7/motelrodolfoteofi.jpg',
    suites: [
      {
        name: 'Suíte Estrela',
        priceCheckIn: '3h — R$ 70,00',
        priceOvernight: 'R$ 120,00',
        features: featuresEstrela,
        imageUrl: 'https://i.postimg.cc/3Nz8b0Mj/Estrela_Rodolfo.png'
      },
      {
        name: 'Suíte Lua',
        priceCheckIn: '3h — R$ 60,00',
        priceOvernight: 'R$ 130,00',
        features: featuresLua,
        imageUrl: 'https://i.postimg.cc/7PRZLdCC/Lua_Rodolfo.png'
      },
      {
        name: 'Suíte Sol',
        priceCheckIn: '4h — R$ 120,00',
        priceOvernight: 'R$ 160,00',
        features: ['Itens da Lua', 'Banheira de hidromassagem externa'],
        imageUrl: 'https://i.postimg.cc/7YTYJ97K/Sol_Rodolfo.png',
        images: [
          'https://i.postimg.cc/7YTYJ97K/Sol_Rodolfo.png',
          'https://i.postimg.cc/vm74gzJJ/Sol_Rodolfo_2.png'
        ]
      }
    ]
  },
  {
    id: 'guararapes',
    name: 'NUAGE Guararapes',
    slug: 'guararapes',
    locationUrl: 'https://maps.app.goo.gl/6KRW7t4zHHrRFuAC8',
    description: 'O auge da exclusividade no bairro Guararapes. Privacidade e requinte.',
    imageUrl: 'https://i.postimg.cc/Sx5zMNBr/fotoguararapes.jpg',
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
    id: 'papicu',
    name: 'NUAGE Papicu',
    slug: 'papicu',
    locationUrl: '#',
    description: 'A sofisticação do Papicu ao seu dispor.',
    imageUrl: 'https://i.postimg.cc/YSPK7Tm9/motelpapicu.jpg',
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

  // --- Unidades com fotos geradas pela IA ---
  {
    id: 'eusebio',
    name: 'NUAGE Eusébio',
    slug: 'eusebio',
    locationUrl: 'https://maps.app.goo.gl/6bR4E3gfywX5sr4G8',
    description: 'Suítes com luxo e conforto no Eusébio, perfeitas para momentos inesquecíveis.',
    imageUrl: '/images/units/eusebio_hq.png',
    suites: [
      {
        name: 'Suíte Estrela',
        priceCheckIn: '2h — R$ 70,00',
        priceOvernight: 'R$ 140,00',
        features: ['Garagem privativa', 'Ar condicionado', 'Frigobar', 'TV smart', 'Sistema de som'],
        imageUrl: 'https://i.postimg.cc/sg4B1Kdt/Estrela_Eusébio.avif'
      },
      {
        name: 'Suíte Lua',
        priceCheckIn: '3h — R$ 60,00',
        priceOvernight: 'R$ 150,00',
        features: ['Itens da Estrela', 'Banheiro aquecido', 'Luz de LED nãoite', 'Espelho'],
        imageUrl: 'https://i.postimg.cc/FRD1GKsG/Lua_Eusébio.png'
      },
      {
        name: 'Suíte Sol',
        priceCheckIn: '4h — R$ 180,00',
        priceOvernight: 'R$ 250,00',
        features: ['Itens da Lua', 'Banheira de hidromassagem'],
        imageUrl: 'https://i.postimg.cc/SKbXx5vL/Sol_Eusébio.png'
      }
    ]
  },
  {
    id: 'rogaciano-leite',
    name: 'NUAGE Rogaciano Leite',
    slug: 'rogaciano-leite',
    locationUrl: '#',
    description: 'Sua melhor escolha na Av. Rogaciano Leite.',
    imageUrl: '/images/units/rogaciano_hq.png',
    suites: [
      {
        name: 'Suíte Lua',
        priceCheckIn: '3h — R$ 60,00',
        priceOvernight: 'R$ 130,00',
        features: ['Garagem privativa', 'Ar condicionado', 'Frigobar', 'TV smart', 'Som', 'Banheiro aquecido', 'Espelho'],
        imageUrl: 'https://i.postimg.cc/kG2McFHX/Lua_Rogaciano.png'
      }
    ]
  },
  {
    id: 'siqueira',
    name: 'NUAGE Siqueira',
    slug: 'siqueira',
    locationUrl: '#',
    description: 'Momentos especiais com o melhor custo-benefício no Siqueira.',
    imageUrl: '/images/units/siqueira_hq.png',
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
    imageUrl: '/images/units/matriz_hq.png',
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
