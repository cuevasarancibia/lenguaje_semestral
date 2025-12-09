import { PracticeExercise, RapidRoundSet } from './types';

export const practiceExercises: PracticeExercise[] = [
  {
    id: '1-sentimientos',
    category: 'Sentimientos',
    title: 'Inferir Sentimientos (Azabache)',
    emojiArt: '🔥 🐴 😨',
    content: 'Fragmento: "El aire estaba lleno de humo y se oían crujidos terribles. Azabache temblaba en su establo, negándose a moverse a pesar de los gritos, hasta que sintió una mano suave y una voz tranquila que le cubrió los ojos con una bufanda."',
    question: '¿Qué sentía Azabache antes de que le cubrieran los ojos?',
    options: ['Alegría por el calor', 'Pánico y bloqueo', 'Curiosidad por el fuego', 'Sueño'],
    correctIndex: 1,
    feedback: 'El texto dice que "temblaba" y se "negaba a moverse". Estas son reacciones físicas típicas cuando alguien siente mucho miedo o pánico.'
  },
  {
    id: '2-causa',
    category: 'CausaEfecto',
    title: 'Causa y Efecto (Guepardo)',
    emojiArt: '🐆 💨 🦴',
    content: 'Texto: "La velocidad del guepardo no depende solo de sus músculos. Su columna vertebral es extremadamente flexible, funcionando como un resorte que se contrae y estira, permitiéndole dar zancadas enormes."',
    question: '¿Cuál es la causa física de que el guepardo dé zancadas tan largas?',
    options: ['Sus grandes dientes', 'Su columna flexible como resorte', 'El color de su piel', 'El calor de la sabana'],
    correctIndex: 1,
    feedback: 'El texto conecta directamente la flexibilidad de la columna (la causa) con la capacidad de dar zancadas enormes (el efecto).'
  },
  {
    id: '3-info',
    category: 'Infografia',
    title: 'Interpretar Visualmente',
    emojiArt: '📱 🦒 🤕',
    content: 'Imagina una imagen mostrando un cuello humano inclinado mirando un celular. Una flecha roja señala el cuello con el texto "27 kilos de presión". Al lado, un cuello recto con el texto "5 kilos".',
    question: 'Según la descripción visual, ¿qué acción daña más el cuello?',
    options: ['Mirar al frente', 'Dormir con almohada', 'Inclinar la cabeza para ver el celular', 'Usar bufanda'],
    correctIndex: 2,
    feedback: 'La imagen muestra que al inclinar la cabeza la presión sube a "27 kilos", lo cual es mucho mayor que los "5 kilos" de la posición recta, indicando mayor daño.'
  },
  {
    id: '4-personaje',
    category: 'Personaje',
    title: 'Características (Juan)',
    emojiArt: '👨‍🌾 🐎 ❤️',
    content: 'Fragmento: "Juan nunca usaba el látigo. Cuando los caballos se asustaban, él les hablaba suavemente y les daba palmaditas hasta que se calmaban. Decía que la paciencia lograba más que la fuerza."',
    question: '¿Qué cualidad describe mejor a Juan?',
    options: ['Impaciente y ruidoso', 'Empático y paciente', 'Distraído y perezoso', 'Severo y estricto'],
    correctIndex: 1,
    feedback: 'Su acción de "hablar suavemente" en lugar de castigar, y su frase explícita sobre la "paciencia", demuestran que es empático y paciente.'
  },
  {
    id: '5-comparar',
    category: 'Comparar',
    title: 'Comparar Información',
    emojiArt: '🖐️ 🐾 🐵',
    content: 'Texto: "Mientras que los humanos tienen pulgares oponibles en las manos para agarrar herramientas, nuestros pies son planos para caminar. Los monos, en cambio, tienen \'manos\' en los pies para agarrarse de las ramas."',
    question: '¿En qué se diferencian los pies humanos de los de los monos?',
    options: ['Los humanos tienen garras', 'Los monos usan sus pies para agarrar, los humanos para caminar', 'No hay diferencias', 'Los humanos tienen pies más peludos'],
    correctIndex: 1,
    feedback: 'El texto hace un contraste claro: asigna la función de "caminar" a los humanos y "agarrarse de ramas" a los monos.'
  },
  {
    id: '6-opinion',
    category: 'Opinion',
    title: 'Opinión Fundamentada',
    emojiArt: '🧐 ⚖️ 🐴',
    content: 'Contexto: En la época de Azabache, se usaba el "engallador", una correa que obligaba a los caballos a llevar la cabeza muy alta solo por moda, aunque les causaba dolor y dificultad para respirar.',
    question: '¿Qué opinas sobre el uso del engallador?',
    options: ['Es bueno porque se ven elegantes', 'Es una forma cruel de maltrato por vanidad', 'Ayuda a los caballos a respirar mejor', 'Es necesario para que corran rápido'],
    correctIndex: 1,
    feedback: 'Esta es la opinión más fundamentada en el bienestar animal. El texto menciona que causa "dolor y dificultad para respirar" solo por "moda", lo cual define la crueldad.'
  }
];

export const rapidRoundSets: RapidRoundSet[] = [
  // ===== SISTEMA MUSCULAR =====
  {
    id: 'set-musculos',
    title: 'El Sistema Muscular',
    text: 'Los músculos son los motores del movimiento. Tienen la propiedad de contraerse (acortarse) y relajarse (estirarse). Cuando un músculo se contrae, tira del hueso al que está unido y produce movimiento. La mayoría de los músculos trabajan en pares: cuando uno se contrae, el otro se relaja. Existen músculos voluntarios, que movemos cuando queremos (como los brazos), e involuntarios, que se mueven solos (como el corazón).',
    questions: [
      { id: 1, statement: "Los músculos empujan los huesos para moverlos.", isTrue: false, explanation: "Falso. Los músculos 'tiran' o jalan de los huesos al contraerse, no los empujan." },
      { id: 2, statement: "El corazón es un ejemplo de músculo involuntario.", isTrue: true, explanation: "Verdadero. El texto dice que los involuntarios se mueven solos, como el corazón." },
      { id: 3, statement: "Para que haya movimiento, ambos músculos del par deben contraerse al mismo tiempo.", isTrue: false, explanation: "Falso. El texto explica que trabajan en pares: cuando uno se contrae, el otro se relaja." },
      { id: 4, statement: "Tenemos control sobre los músculos voluntarios.", isTrue: true, explanation: "Verdadero. El texto dice que los movemos 'cuando queremos'." },
      { id: 5, statement: "Contraerse significa que el músculo se estira.", isTrue: false, explanation: "Falso. El texto dice que contraerse significa 'acortarse', no estirarse." },
      { id: 6, statement: "Los músculos de los brazos son voluntarios.", isTrue: true, explanation: "Verdadero. El texto menciona los brazos como ejemplo de músculos voluntarios." },
      { id: 7, statement: "Los músculos están unidos a los huesos.", isTrue: true, explanation: "Verdadero. El texto dice que cuando un músculo se contrae, tira del hueso 'al que está unido'." },
      { id: 8, statement: "Un músculo puede contraerse y relajarse al mismo tiempo.", isTrue: false, explanation: "Falso. Son acciones opuestas: contraerse es acortarse y relajarse es estirarse." }
    ]
  },

  // ===== AZABACHE: PRIMEROS AÑOS =====
  {
    id: 'set-azabache-1',
    title: 'Azabache: Primeros Años',
    text: 'El primer lugar que recuerdo era una agradable pradera con un estanque de agua clara. Yo vivía de la leche de mi madre, pues era muy pequeño para comer hierba. Mi madre salía a trabajar por el día y volvía por la noche. Ella me dijo: "Los potros que viven aquí son buenos, pero no han aprendido modales. Tú tienes buena sangre. Espero que crezcas bueno y noble, y nunca aprendas malas mañas".',
    questions: [
      { id: 1, statement: "El narrador de la historia es un caballo joven.", isTrue: true, explanation: "Verdadero. Habla de 'mi madre', 'comer hierba' y ser un 'potro'." },
      { id: 2, statement: "La madre del protagonista pasaba todo el día jugando con él.", isTrue: false, explanation: "Falso. El texto dice explícitamente: 'Mi madre salía a trabajar por el día'." },
      { id: 3, statement: "La madre le aconsejó que aprendiera a pelear con otros potros.", isTrue: false, explanation: "Falso. Le aconsejó que creciera 'bueno y noble' y 'nunca aprendiera malas mañas'." },
      { id: 4, statement: "El protagonista vivía en un lugar oscuro y triste.", isTrue: false, explanation: "Falso. Describe el lugar como una 'agradable pradera con un estanque de agua clara'." },
      { id: 5, statement: "El protagonista se alimentaba solo de hierba.", isTrue: false, explanation: "Falso. El texto dice que 'vivía de la leche de mi madre' porque era muy pequeño para comer hierba." },
      { id: 6, statement: "La madre creía que su hijo tenía buena sangre.", isTrue: true, explanation: "Verdadero. La madre le dice directamente: 'Tú tienes buena sangre'." },
      { id: 7, statement: "Los otros potros del lugar tenían buenos modales.", isTrue: false, explanation: "Falso. La madre dice que los otros potros 'no han aprendido modales'." },
      { id: 8, statement: "La madre quería que Azabache fuera noble.", isTrue: true, explanation: "Verdadero. La madre dice: 'Espero que crezcas bueno y noble'." }
    ]
  },

  // ===== AZABACHE: EL INCENDIO =====
  {
    id: 'set-azabache-2',
    title: 'Azabache: El Incendio',
    text: 'Una noche me despertó un ruido extraño. El aire estaba lleno de humo y se oían crujidos terribles. Los caballos tiraban de sus cuerdas, relinchando de terror. El mozo de cuadra intentaba sacarnos, pero yo estaba tan asustado que no podía mover las patas. Entonces llegó mi amo, me habló con voz tranquila y me cubrió los ojos con su bufanda. Solo así pude caminar hacia afuera, confiando ciegamente en él.',
    questions: [
      { id: 1, statement: "Azabache se despertó por el olor a humo.", isTrue: false, explanation: "Falso. El texto dice que lo despertó 'un ruido extraño', no el olor." },
      { id: 2, statement: "El mozo de cuadra logró sacar a Azabache fácilmente.", isTrue: false, explanation: "Falso. El texto dice que Azabache estaba tan asustado que 'no podía mover las patas'." },
      { id: 3, statement: "El amo de Azabache le cubrió los ojos para calmarlo.", isTrue: true, explanation: "Verdadero. El amo 'me cubrió los ojos con su bufanda' y así pudo caminar." },
      { id: 4, statement: "Azabache confiaba en su amo.", isTrue: true, explanation: "Verdadero. El texto termina diciendo que caminó 'confiando ciegamente en él'." },
      { id: 5, statement: "Todos los caballos estaban tranquilos durante el incendio.", isTrue: false, explanation: "Falso. El texto dice que 'tiraban de sus cuerdas, relinchando de terror'." },
      { id: 6, statement: "El amo le gritó a Azabache para que se moviera.", isTrue: false, explanation: "Falso. El texto dice que el amo 'me habló con voz tranquila'." },
      { id: 7, statement: "Azabache pudo ver el camino hacia afuera.", isTrue: false, explanation: "Falso. Tenía los ojos cubiertos, por eso confiaba 'ciegamente' en su amo." },
      { id: 8, statement: "El miedo paralizó a Azabache.", isTrue: true, explanation: "Verdadero. El texto dice que 'estaba tan asustado que no podía mover las patas'." }
    ]
  },

  // ===== CIVILIZACIÓN AZTECA =====
  {
    id: 'set-aztecas-1',
    title: 'Los Aztecas',
    text: 'Los aztecas fueron una de las grandes civilizaciones de América. Su capital era Tenochtitlán, una impresionante ciudad construida sobre un lago. Los aztecas eran politeístas, lo que significa que creían en muchos dioses. Construyeron grandes pirámides y templos para honrar a sus deidades. La educación era obligatoria para todos los niños aztecas, algo muy avanzado para su época.',
    questions: [
      { id: 1, statement: "La capital azteca se llamaba Tenochtitlán.", isTrue: true, explanation: "Verdadero. El texto dice que 'Su capital era Tenochtitlán'." },
      { id: 2, statement: "Los aztecas creían en un solo dios.", isTrue: false, explanation: "Falso. El texto dice que eran 'politeístas', es decir, creían en muchos dioses." },
      { id: 3, statement: "Tenochtitlán fue construida sobre un lago.", isTrue: true, explanation: "Verdadero. El texto describe a Tenochtitlán como 'una ciudad construida sobre un lago'." },
      { id: 4, statement: "Solo los niños ricos podían ir a la escuela.", isTrue: false, explanation: "Falso. El texto dice que 'la educación era obligatoria para todos los niños'." },
      { id: 5, statement: "Los aztecas construyeron pirámides.", isTrue: true, explanation: "Verdadero. El texto menciona que 'Construyeron grandes pirámides y templos'." },
      { id: 6, statement: "Politeísta significa creer en un solo dios.", isTrue: false, explanation: "Falso. El texto explica que politeísta significa 'creer en muchos dioses'." },
      { id: 7, statement: "Las pirámides aztecas eran para honrar a sus dioses.", isTrue: true, explanation: "Verdadero. El texto dice que construyeron pirámides 'para honrar a sus deidades'." },
      { id: 8, statement: "Los aztecas vivieron en Europa.", isTrue: false, explanation: "Falso. El texto dice que fueron 'una de las grandes civilizaciones de América'." }
    ]
  },

  // ===== NEZAHUALCÓYOTL =====
  {
    id: 'set-aztecas-2',
    title: 'Nezahualcóyotl, el Rey Poeta',
    text: 'Nezahualcóyotl fue un poeta sabio y gobernante de la ciudad de Tenochtitlán. Cuando apenas tenía 28 años llegó a ser el gobernante, donde conformó la biblioteca más importante del Valle de México. Recibió una amplia formación intelectual y desde muy temprana edad demostró una elevada sensibilidad artística y amor por la naturaleza. Nezahualcóyotl destacó por cultivar la poesía sin desatender su gobierno. Falleció en 1472 a la edad de 70 años, de los cuales reinó durante 43.',
    questions: [
      { id: 1, statement: "Nezahualcóyotl fue solo un poeta, nunca gobernó.", isTrue: false, explanation: "Falso. El texto dice que fue 'poeta sabio y gobernante'." },
      { id: 2, statement: "Nezahualcóyotl comenzó a gobernar a los 28 años.", isTrue: true, explanation: "Verdadero. El texto dice: 'cuando apenas tenía 28 años llegó a ser el gobernante'." },
      { id: 3, statement: "Nezahualcóyotl creó una biblioteca importante.", isTrue: true, explanation: "Verdadero. El texto dice que 'conformó la biblioteca más importante del Valle de México'." },
      { id: 4, statement: "Nezahualcóyotl descuidó su gobierno por escribir poesía.", isTrue: false, explanation: "Falso. El texto dice que 'cultivó la poesía sin desatender su gobierno'." },
      { id: 5, statement: "Nezahualcóyotl murió a los 70 años.", isTrue: true, explanation: "Verdadero. El texto dice: 'Falleció en 1472 a la edad de 70 años'." },
      { id: 6, statement: "Nezahualcóyotl reinó durante 28 años.", isTrue: false, explanation: "Falso. El texto dice que 'reinó durante 43' años." },
      { id: 7, statement: "Nezahualcóyotl amaba la naturaleza.", isTrue: true, explanation: "Verdadero. El texto menciona su 'amor por la naturaleza'." },
      { id: 8, statement: "Nezahualcóyotl no tenía interés por el arte.", isTrue: false, explanation: "Falso. El texto dice que demostró 'una elevada sensibilidad artística'." }
    ]
  },

  // ===== PLACAS TECTÓNICAS =====
  {
    id: 'set-placas',
    title: 'Las Placas Tectónicas',
    text: 'La superficie de la Tierra no es un solo trozo o estructura unida, está dividida en piezas irregulares que encajan como en un rompecabezas. A estas piezas las llamamos placas tectónicas. La Tierra empezó a enfriarse hace 4000 millones de años. En la actualidad, la superficie terrestre se divide en unas ocho o nueve grandes placas y en otras varias placas más pequeñas. Estas placas son como planchas rígidas y sólidas, compuestas por distintos tipos de roca y minerales.',
    questions: [
      { id: 1, statement: "La superficie de la Tierra es una sola pieza sólida.", isTrue: false, explanation: "Falso. El texto dice que 'no es un solo trozo', está dividida en piezas." },
      { id: 2, statement: "Las placas tectónicas encajan como un rompecabezas.", isTrue: true, explanation: "Verdadero. El texto dice que son 'piezas irregulares que encajan como en un rompecabezas'." },
      { id: 3, statement: "Existen exactamente 5 placas tectónicas en la Tierra.", isTrue: false, explanation: "Falso. El texto dice que hay 'ocho o nueve grandes placas' más otras pequeñas." },
      { id: 4, statement: "Las placas tectónicas son blandas y flexibles.", isTrue: false, explanation: "Falso. El texto dice que son 'planchas rígidas y sólidas'." },
      { id: 5, statement: "La Tierra comenzó a enfriarse hace 4000 millones de años.", isTrue: true, explanation: "Verdadero. El texto dice: 'La Tierra empezó a enfriarse hace 4000 millones de años'." },
      { id: 6, statement: "Las placas están compuestas por rocas y minerales.", isTrue: true, explanation: "Verdadero. El texto dice que están 'compuestas por distintos tipos de roca y minerales'." },
      { id: 7, statement: "Todas las placas tectónicas tienen el mismo tamaño.", isTrue: false, explanation: "Falso. El texto menciona 'grandes placas' y también 'placas más pequeñas'." },
      { id: 8, statement: "La palabra 'tectónica' se relaciona con la estructura de la Tierra.", isTrue: true, explanation: "Verdadero. El contexto del texto habla sobre la estructura de la superficie terrestre." }
    ]
  },

  // ===== TERREMOTOS =====
  {
    id: 'set-terremotos',
    title: 'Los Terremotos',
    text: 'Aunque nos parezca que el suelo sea sólido, los terremotos nos demuestran que la Tierra puede moverse o temblar con tanta violencia que los edificios se derrumban y el terreno se llena de grietas. Un terremoto consiste en la vibración de las rocas provocada por la repentina liberación de energía en el interior de la Tierra. Esto hace que en la superficie se produzca un violento temblor que puede durar entre unos segundos y varios minutos. Casi todos los terremotos se producen por la rotura o fractura repentina de las rocas.',
    questions: [
      { id: 1, statement: "Los terremotos demuestran que el suelo siempre está quieto.", isTrue: false, explanation: "Falso. El texto dice que los terremotos demuestran que 'la Tierra puede moverse o temblar'." },
      { id: 2, statement: "Un terremoto es causado por la liberación de energía.", isTrue: true, explanation: "Verdadero. El texto dice que es 'provocada por la repentina liberación de energía'." },
      { id: 3, statement: "Los terremotos siempre duran exactamente un minuto.", isTrue: false, explanation: "Falso. El texto dice que puede durar 'entre unos segundos y varios minutos'." },
      { id: 4, statement: "Los terremotos pueden causar grietas en el terreno.", isTrue: true, explanation: "Verdadero. El texto dice que 'el terreno se llena de grietas'." },
      { id: 5, statement: "Los terremotos se producen por la fractura de las rocas.", isTrue: true, explanation: "Verdadero. El texto dice que se producen 'por la rotura o fractura repentina de las rocas'." },
      { id: 6, statement: "La energía de un terremoto se libera en la superficie.", isTrue: false, explanation: "Falso. El texto dice que la energía se libera 'en el interior de la Tierra'." },
      { id: 7, statement: "Durante un terremoto, los edificios pueden derrumbarse.", isTrue: true, explanation: "Verdadero. El texto menciona que 'los edificios se derrumban'." },
      { id: 8, statement: "Los terremotos son eventos muy lentos.", isTrue: false, explanation: "Falso. El texto habla de 'repentina liberación' y 'violento temblor'." }
    ]
  },

  // ===== SISMÓGRAFOS =====
  {
    id: 'set-sismografos',
    title: 'Medición de Terremotos',
    text: 'Los científicos han desarrollado distintos instrumentos y métodos para medir la magnitud de un terremoto. El sismógrafo es un instrumento diseñado para medir las vibraciones sísmicas durante un terremoto. La Red Sismográfica Global es una red de sismógrafos de última generación que miden y registran todas las vibraciones sísmicas. El principio básico de un sismógrafo es el péndulo en movimiento, un cuerpo colgado de un hilo que puede hacer un movimiento muy parecido al que haces cuando te columpias.',
    questions: [
      { id: 1, statement: "El sismógrafo mide la temperatura de la Tierra.", isTrue: false, explanation: "Falso. El texto dice que mide 'las vibraciones sísmicas durante un terremoto'." },
      { id: 2, statement: "El principio del sismógrafo es el péndulo.", isTrue: true, explanation: "Verdadero. El texto dice: 'El principio básico de un sismógrafo es el péndulo en movimiento'." },
      { id: 3, statement: "La Red Sismográfica Global usa sismógrafos antiguos.", isTrue: false, explanation: "Falso. El texto dice que usa 'sismógrafos de última generación'." },
      { id: 4, statement: "Un péndulo se mueve como un columpio.", isTrue: true, explanation: "Verdadero. El texto dice que hace 'un movimiento muy parecido al que haces cuando te columpias'." },
      { id: 5, statement: "Los científicos no pueden medir los terremotos.", isTrue: false, explanation: "Falso. El texto dice que 'han desarrollado distintos instrumentos y métodos para medir'." },
      { id: 6, statement: "El sismógrafo registra las vibraciones sísmicas.", isTrue: true, explanation: "Verdadero. El texto dice que los sismógrafos 'miden y registran todas las vibraciones sísmicas'." },
      { id: 7, statement: "Un péndulo es un cuerpo colgado de un hilo.", isTrue: true, explanation: "Verdadero. El texto define el péndulo como 'un cuerpo colgado de un hilo'." },
      { id: 8, statement: "Solo existe un sismógrafo en todo el mundo.", isTrue: false, explanation: "Falso. El texto menciona la 'Red Sismográfica Global', indicando que hay muchos." }
    ]
  },

  // ===== CIVILIZACIÓN MAYA =====
  {
    id: 'set-mayas',
    title: 'Los Mayas',
    text: 'Los mayas fueron una de las civilizaciones más avanzadas de América. Desarrollaron un sistema de escritura con jeroglíficos y crearon un calendario muy preciso. Construyeron impresionantes ciudades con pirámides escalonadas en la selva de Centroamérica. Los mayas eran expertos astrónomos que estudiaban las estrellas y los planetas. Su civilización floreció durante más de 2000 años. Practicaban la agricultura, cultivando principalmente maíz, frijoles y calabaza.',
    questions: [
      { id: 1, statement: "Los mayas vivían en Centroamérica.", isTrue: true, explanation: "Verdadero. El texto dice que construyeron ciudades 'en la selva de Centroamérica'." },
      { id: 2, statement: "Los mayas no sabían escribir.", isTrue: false, explanation: "Falso. El texto dice que 'Desarrollaron un sistema de escritura con jeroglíficos'." },
      { id: 3, statement: "Los mayas crearon un calendario.", isTrue: true, explanation: "Verdadero. El texto dice que 'crearon un calendario muy preciso'." },
      { id: 4, statement: "Los mayas construyeron pirámides planas.", isTrue: false, explanation: "Falso. El texto dice que construyeron 'pirámides escalonadas'." },
      { id: 5, statement: "Los mayas estudiaban las estrellas.", isTrue: true, explanation: "Verdadero. El texto dice que 'eran expertos astrónomos que estudiaban las estrellas'." },
      { id: 6, statement: "La civilización maya duró solo 100 años.", isTrue: false, explanation: "Falso. El texto dice que 'floreció durante más de 2000 años'." },
      { id: 7, statement: "El maíz era un cultivo importante para los mayas.", isTrue: true, explanation: "Verdadero. El texto dice que cultivaban 'principalmente maíz, frijoles y calabaza'." },
      { id: 8, statement: "Los mayas vivían en el desierto.", isTrue: false, explanation: "Falso. El texto dice que vivían 'en la selva de Centroamérica'." }
    ]
  },

  // ===== CIVILIZACIÓN INCA =====
  {
    id: 'set-incas',
    title: 'Los Incas',
    text: 'Los incas crearon el imperio más grande de América del Sur. Su capital era Cusco, ubicada en las montañas de los Andes. Se dedicaban principalmente a la agricultura, desarrollando técnicas avanzadas como las terrazas de cultivo en las laderas de las montañas. Los incas construyeron una extensa red de caminos que conectaba todo su imperio. No tenían escritura, pero usaban los quipus, un sistema de cuerdas con nudos para llevar registros. Machu Picchu es una de sus construcciones más famosas.',
    questions: [
      { id: 1, statement: "La capital del imperio inca era Cusco.", isTrue: true, explanation: "Verdadero. El texto dice: 'Su capital era Cusco'." },
      { id: 2, statement: "Los incas vivían junto al mar.", isTrue: false, explanation: "Falso. El texto dice que Cusco estaba 'en las montañas de los Andes'." },
      { id: 3, statement: "Los incas se dedicaban a la agricultura.", isTrue: true, explanation: "Verdadero. El texto dice que 'Se dedicaban principalmente a la agricultura'." },
      { id: 4, statement: "Los incas usaban libros para escribir.", isTrue: false, explanation: "Falso. El texto dice que 'No tenían escritura' y usaban quipus." },
      { id: 5, statement: "Los quipus eran cuerdas con nudos.", isTrue: true, explanation: "Verdadero. El texto dice que los quipus eran 'un sistema de cuerdas con nudos'." },
      { id: 6, statement: "Los incas construyeron caminos.", isTrue: true, explanation: "Verdadero. El texto dice que 'construyeron una extensa red de caminos'." },
      { id: 7, statement: "Machu Picchu fue construido por los aztecas.", isTrue: false, explanation: "Falso. El texto dice que Machu Picchu es una construcción inca." },
      { id: 8, statement: "Las terrazas de cultivo estaban en las montañas.", isTrue: true, explanation: "Verdadero. El texto dice que usaban 'terrazas de cultivo en las laderas de las montañas'." }
    ]
  },

  // ===== TERREMOTO DE VALDIVIA =====
  {
    id: 'set-valdivia',
    title: 'El Terremoto de Valdivia',
    text: 'Chile es uno de los países con mayor actividad sísmica debido a que gran parte de su territorio está expuesto al choque tectónico de dos grandes placas. El terremoto de mayor magnitud registrado en el mundo tuvo lugar en Valdivia, Chile, en 1960. Dejó al menos 2.000 muertos y dos millones de personas damnificadas. El sismo de magnitud 9,5 provocó erupciones de volcanes y un maremoto que destruyó ciudades de la costa chilena hasta cruzar el océano Pacífico y causar víctimas en lugares tan lejanos como Japón, Hawái o Filipinas.',
    questions: [
      { id: 1, statement: "Chile tiene poca actividad sísmica.", isTrue: false, explanation: "Falso. El texto dice que Chile es 'uno de los países con mayor actividad sísmica'." },
      { id: 2, statement: "El terremoto más grande del mundo fue en Valdivia.", isTrue: true, explanation: "Verdadero. El texto dice: 'El terremoto de mayor magnitud registrado en el mundo tuvo lugar en Valdivia'." },
      { id: 3, statement: "El terremoto de Valdivia fue en 1960.", isTrue: true, explanation: "Verdadero. El texto dice que ocurrió 'en 1960'." },
      { id: 4, statement: "El terremoto de Valdivia tuvo magnitud 5,5.", isTrue: false, explanation: "Falso. El texto dice que fue de 'magnitud 9,5'." },
      { id: 5, statement: "El terremoto de Valdivia causó un maremoto.", isTrue: true, explanation: "Verdadero. El texto dice que 'provocó erupciones de volcanes y un maremoto'." },
      { id: 6, statement: "El maremoto solo afectó a Chile.", isTrue: false, explanation: "Falso. El texto dice que causó víctimas en 'Japón, Hawái o Filipinas'." },
      { id: 7, statement: "Chile está ubicado sobre dos placas tectónicas.", isTrue: true, explanation: "Verdadero. El texto dice que está 'expuesto al choque tectónico de dos grandes placas'." },
      { id: 8, statement: "El terremoto de Valdivia no provocó volcanes.", isTrue: false, explanation: "Falso. El texto dice que 'provocó erupciones de volcanes'." }
    ]
  },

  // ===== POESÍA AZTECA =====
  {
    id: 'set-poesia-azteca',
    title: 'La Poesía Azteca',
    text: 'Los aztecas fueron grandes poetas que expresaban su amor por la naturaleza en sus versos. En sus poemas aparecen aves como el faisán, el cenzontle (llamado "pájaro de 400 voces" por su hermoso canto) y el quetzal. También mencionaban instrumentos musicales como el atabal, un tambor pequeño que se toca con una sola baqueta. La palabra "deleitar" aparece frecuentemente en sus poemas, significando producir gusto y placer. Los poetas aztecas cantaban sobre las flores, la primavera y la belleza del mundo.',
    questions: [
      { id: 1, statement: "Los aztecas solo escribían sobre guerras.", isTrue: false, explanation: "Falso. El texto dice que 'expresaban su amor por la naturaleza' y cantaban sobre 'flores, la primavera y la belleza'." },
      { id: 2, statement: "El cenzontle es llamado 'pájaro de 400 voces'.", isTrue: true, explanation: "Verdadero. El texto dice que al cenzontle lo llamaban 'pájaro de 400 voces'." },
      { id: 3, statement: "El atabal es un instrumento de cuerda.", isTrue: false, explanation: "Falso. El texto dice que el atabal es 'un tambor pequeño'." },
      { id: 4, statement: "Deleitar significa producir gusto y placer.", isTrue: true, explanation: "Verdadero. El texto define deleitar como 'producir gusto y placer'." },
      { id: 5, statement: "El quetzal aparece en los poemas aztecas.", isTrue: true, explanation: "Verdadero. El texto menciona que en sus poemas aparecen aves como 'el quetzal'." },
      { id: 6, statement: "El atabal se toca con dos baquetas.", isTrue: false, explanation: "Falso. El texto dice que 'se toca con una sola baqueta'." },
      { id: 7, statement: "Los poetas aztecas cantaban sobre la primavera.", isTrue: true, explanation: "Verdadero. El texto dice que 'cantaban sobre las flores, la primavera y la belleza'." },
      { id: 8, statement: "El faisán es un pez mencionado en los poemas.", isTrue: false, explanation: "Falso. El texto menciona al faisán como un ave, no como un pez." }
    ]
  }
];
