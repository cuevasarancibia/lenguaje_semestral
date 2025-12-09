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
  {
    id: 'set-1-musculos',
    title: 'El Sistema Muscular',
    text: 'Los músculos son los motores del movimiento. Tienen la propiedad de contraerse (acortarse) y relajarse (estirarse). Cuando un músculo se contrae, tira del hueso al que está unido y produce movimiento. La mayoría de los músculos trabajan en pares: cuando uno se contrae, el otro se relaja. Existen músculos voluntarios, que movemos cuando queremos (como los brazos), e involuntarios, que se mueven solos (como el corazón).',
    questions: [
      { id: 1, statement: "Los músculos empujan los huesos para moverlos.", isTrue: false, explanation: "Falso. Los músculos 'tiran' o jalan de los huesos al contraerse, no los empujan." },
      { id: 2, statement: "El corazón es un ejemplo de músculo involuntario.", isTrue: true, explanation: "Verdadero. El texto dice que los involuntarios se mueven solos, como el corazón." },
      { id: 3, statement: "Para que haya movimiento, ambos músculos del par deben contraerse al mismo tiempo.", isTrue: false, explanation: "Falso. El texto explica que trabajan en pares: cuando uno se contrae, el otro se relaja." },
      { id: 4, statement: "Tenemos control sobre los músculos voluntarios.", isTrue: true, explanation: "Verdadero. El texto dice que los movemos 'cuando queremos'." }
    ]
  },
  {
    id: 'set-2-azabache',
    title: 'Azabache: Primeros Años',
    text: 'El primer lugar que recuerdo era una agradable pradera con un estanque de agua clara. Yo vivía de la leche de mi madre, pues era muy pequeño para comer hierba. Mi madre salía a trabajar por el día y volvía por la noche. Ella me dijo: "Los potros que viven aquí son buenos, pero no han aprendido modales. Tú tienes buena sangre. Espero que crezcas bueno y noble, y nunca aprendas malas mañas".',
    questions: [
      { id: 5, statement: "El narrador de la historia es un caballo joven.", isTrue: true, explanation: "Verdadero. Habla de 'mi madre', 'comer hierba' y ser un 'potro'." },
      { id: 6, statement: "La madre del protagonista pasaba todo el día jugando con él.", isTrue: false, explanation: "Falso. El texto dice explícitamente: 'Mi madre salía a trabajar por el día'." },
      { id: 7, statement: "La madre le aconsejó que aprendiera a pelear con otros potros.", isTrue: false, explanation: "Falso. Le aconsejó que creciera 'bueno y noble' y 'nunca aprendiera malas mañas'." },
      { id: 8, statement: "El protagonista vivía en un lugar oscuro y triste.", isTrue: false, explanation: "Falso. Describe el lugar como una 'agradable pradera con un estanque de agua clara'." }
    ]
  }
];