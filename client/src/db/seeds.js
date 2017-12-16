use space_oddity;
db.dropDatabase();

db.planets.insertMany([
  {
    name: 'Sun',
    radius: 401, // In pixels, 1 px = 3474.2 km.
    numMoons: 0,
    image: '\/images\/sun.png',
    dayLength: 0, // In hours.
    yearLength: 0, // In Earth days.
    composition: {
      Hydrogen: 73.46, // Percentages.
      Helium: 24.85,
      Oxygen: 0.77,
      Carbon: 0.29,
      Iron: 0.16,
      Neon: 0.12,
      Nitrogen: 0.09,
      Silicon: 0.07,
      Magnesium: 0.05,
      Sulfur: 0.04,
    },
    distance: 0, // In pixels from the sun.
    gravity: 27.94,// In g, Earth gravities.
    colour: '#fde301',
    homepageRadius: 150,
    volume: 1304000,
    mass: 333000,
    description: 'The Sun is the star at the centre of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process. It is by far the most important source of energy for life on Earth. Its diameter is about 1.39 million kilometers, i.e. 109 times that of Earth, and its mass is about 330,000 times that of Earth, accounting for about 99.86% of the total mass of the Solar System. About three quarters of the Sun\'s mass consists of hydrogen (~73%); the rest is mostly helium (~25%), with much smaller quantities of heavier elements, including oxygen, carbon, neon, and iron.',
  },
  {
    name: 'Mercury',
    radius: 1.5,
    numMoons: 0,
    image: '\/images\/mercury.png',
    dayLength: 1408,
    yearLength: 88,
    composition: {
      Oxygen: 42,
      Sodium: 29,
      Hydrogen: 22,
      Helium: 6,
      Potassium: 0.5,
      Others: 0.5
    },
    distance: 16713,
    gravity: 0.38,
    colour: '#ffcc00',
    homepageRadius: 15,
    volume: 0.06,
    mass: 0.06,
    description: 'Mercury is the smallest planet in the Solar System. It is the closest planet to the sun. It makes one trip around the Sun once every 87.969 days. Mercury is bright when it is visible from Earth, ranging from −2.0 to 5.5 in apparent magnitude. It cannot be easily seen as it is usually too close to the Sun. Because Mercury is normally lost in the glare of the Sun (except during a solar eclipse), Mercury can only be seen in the morning or evening twilight.',
  },
  {
    name: 'Venus',
    radius: 3.5,
    numMoons: 0,
    image: '\/images\/venus.png',
    dayLength: 5832,
    yearLength: 225,
    composition: {
      Carbon_Dioxide: 96.5,
      Nitrogen: 3.5
    },
    distance: 31230,
    gravity: 0.904,
    colour: '#86ffca',
    homepageRadius: 35,
    volume: 0.87,
    mass: 0.82,
    description: 'Venus is the second planet from the Sun, orbiting it every 224.7 Earth days. It has the longest rotation period (243 days) of any planet in the Solar System and rotates in the opposite direction to most other planets. It has no natural satellites. It is named after the Roman goddess of love and beauty. It is the second-brightest natural object in the night sky after the Moon, reaching an apparent magnitude of −4.6 – bright enough to cast shadows at night and, rarely, visible to the naked eye in broad daylight. Orbiting within Earth's orbit, Venus is an inferior planet and never appears to venture far from the Sun; its maximum angular distance from the Sun (elongation) is 47.8°.',
  },
  {
    name: 'Earth',
    radius: 3.5,
    numMoons: 1,
    image: '\/images\/earth.png',
    dayLength: 24,
    yearLength: 365,
    composition: {
      Nitrogen: 78.1,
      Oxygen: 20.9,
      Argon: 0.93,
      Carbon_Dioxide: 0.04
    },
    distance: 43060,
    gravity: 1,
    colour: '#01fdfa',
    homepageRadius: 35,
    volume: 1,
    mass: 1,
    description: 'Earth is the third planet from the Sun and the only object in the Universe known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4 billion years ago. Earth's gravity interacts with other objects in space, especially the Sun and the Moon, Earth's only natural satellite. Earth revolves around the Sun in 365.26 days, a period known as an Earth year. During this time, Earth rotates about its axis about 366.26 times.',
  },
  {
    name: 'Moon',
    radius: 1,
    numMoons: 0,
    image: '\/images\/moon.png',
    dayLength: 648,
    yearLength: 27,
    composition: {
    },
    distance: 43171, // When furthest from sun around Earth.
    gravity: 0.165,
    colour: 'grey',
    homepageRadius: 10,
    volume: 0.02,
    mass: 0.01,
    description: 'The Moon is an astronomical body that orbits planet Earth, being Earth's only permanent natural satellite. It is the fifth-largest natural satellite in the Solar System, and the largest among planetary satellites relative to the size of the planet that it orbits (its primary). Following Jupiter's satellite Io, the Moon is second-densest satellite among those whose densities are known.

    The Moon is thought to have formed about 4.51 billion years ago, not long after Earth. The most widely accepted explanation is that the Moon formed from the debris left over after a giant impact between Earth and a Mars-sized body called Theia.
    ',
  },
  {
    name: 'Mars',
    radius: 2,
    numMoons: 2,
    image: '\/images\/mars.png',
    dayLength: 25,
    yearLength: 687,
    composition: {
      Carbon_Dioxide: 95.97,
      Argon: 1.93,
      Nitrogen: 1.89,
      Oxygen: 0.15,
      Carbon_Monoxide: 0.06
    },
    distance: 65786,
    gravity: 0.376,
    colour: '#ff7443',
    homepageRadius: 20,
    volume: 0.15,
    mass: 0.11,
    description: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war, and is often referred to as the "Red Planet" because the reddish iron oxide prevalent on its surface gives it a reddish appearance that is distinctive among the astronomical bodies visible to the naked eye. Mars is a terrestrial planet with a thin atmosphere, having surface features reminiscent both of the impact craters of the Moon and the valleys, deserts, and polar ice caps of Earth.',
  },
  {
    name: 'Jupiter',
    radius: 40,
    numMoons: 53,
    image: '\/images\/jupiter.png',
    dayLength: 10,
    yearLength: 4333,
    composition: {
      hydrogen: 92,
      helium: 8,
    },
    distance: 224101,
    gravity: 2.528,
    colour: '#ffa043' ,
    homepageRadius: 80,
    volume: 1321,
    mass: 318,
    description: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a giant planet with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter and Saturn are gas giants; the other two giant planets, Uranus and Neptune are ice giants. Jupiter has been known to astronomers since antiquity. The Romans named it after their god Jupiter. When viewed from Earth, Jupiter can reach an apparent magnitude of −2.94, bright enough for its reflected light to cast shadows, and making it on average the third-brightest object in the night sky after the Moon and Venus.',
  },
  {
    name: 'Saturn',
    radius: 33.5,
    numMoons: 53,
    image: '\/images\/saturn.png',
    dayLength: 11,
    yearLength: 10756,
    composition: {
      hydrogen: 96.3,
      helium: 3.25,
      methane: 0.45,
    },
    distance: 412620,
    gravity: 1.065,
    colour: '#f9d293',
    homepageRadius: 67,
    volume: 764,
    mass: 96,
    description: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth. It has only one-eighth the average density of Earth, but with its larger volume Saturn is over 95 times more massive. Saturn is named after the Roman god of agriculture; its astronomical symbol represents the god's sickle.',
  },
  {
    name: 'Uranus',
    radius: 14.5,
    numMoons: 27,
    image: '\/images\/uranus.png',
    dayLength: 17,
    yearLength: 30687,
    composition: {
      hydrogen: 83,
      helium: 15,
      methane: 2,
    },
    distance: 829831,
    gravity: 0.89,
    colour: '#18E6FF',
    homepageRadius: 29,
    volume: 63,
    mass: 15,
    description: 'Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have different bulk chemical composition from that of the larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as "ice giants" to distinguish them from the gas giants. Uranus's atmosphere is similar to Jupiter's and Saturn's in its primary composition of hydrogen and helium, but it contains more "ices" such as water, ammonia, and methane, along with traces of other hydrocarbons. It is the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 K (−224 °C; −371 °F), and has a complex, layered cloud structure with water thought to make up the lowest clouds and methane the uppermost layer of clouds.The interior of Uranus is mainly composed of ices and rock.',
  },
  {
    name: 'Neptune',
    radius: 14,
    numMoons: 13,
    image: '\/images\/neptune.png',
    dayLength: 16,
    yearLength: 60190,
    composition: {
      Hydrogen: 80,
      Helium: 19,
      Methane: 1
    },
    distance: 1300443,
    gravity: 1.14,
    colour: '#45B9FF',
    homepageRadius: 28,
    volume: 58,
    mass: 17,
    description: 'Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. Neptune is 17 times the mass of Earth and is slightly more massive than its near-twin Uranus, which is 15 times the mass of Earth and slightly larger than Neptune. Neptune orbits the Sun once every 164.8 years at an average distance of 30.1 astronomical units (4.50×109 km). It is named after the Roman god of the sea and its astronomical symbol represents a stylised version of the god Neptune's trident.',
  },
  {
    name: 'Pluto',
    radius: 0.5,
    numMoons: 5,
    image: '\/images\/pluto.png',
    dayLength: 154,
    yearLength: 90520,
    composition: {
      Nitrogen: 90,
      Methane: 10,
    },
    distance: 1704630,
    gravity: 0.063,
    colour: '#D9F5FF',
    homepageRadius: 5,
    volume: 0.01,
    mass: 0.002,
    description: 'Pluto (minor-planet designation: 134340 Pluto) is a dwarf planet in the Kuiper belt, a ring of bodies beyond Neptune. It was the first Kuiper belt object to be discovered.

    Pluto was discovered by Clyde Tombaugh in 1930 and was originally considered to be the ninth planet from the Sun. After 1992, its status as a planet was questioned following the discovery of several objects of similar size in the Kuiper belt. In 2005, Eris, a dwarf planet in the scattered disc which is 27% more massive than Pluto, was discovered. This led the International Astronomical Union (IAU) to define the term "planet" formally in 2006, during their 26th General Assembly. That definition excluded Pluto and reclassified it as a dwarf planet.
    ',
  }

]);
