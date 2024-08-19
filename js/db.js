const menu = [
    {
        id: 1,
        nombre : "Banchan",
        precio: 27500,
        gramaje: "450g",
        descripcion: "Es un conjunto de platos que sirven para acompañar a los platos fuertes para generar un contraste de sabores. Se elaboran a partir de kimchi, de pepino, espinacas, brotes de soja, nabo, berenjenas, alubias, zanahorias, algas, entre otros.",
        categoria: "entradas",
        foto:"../../img/preparaciones/banchan.jpg",
        kcal: 130,
        carbohidrados: 18,
        grasas: 4,
        proteina: 12
    },
    {
        id: 2,
        nombre : "Kimchi",
        precio: 25000,
        gramaje: "250g",
        descripcion: "Es un plato tradicional coreano que consiste en col y rabanos fermentados, sazonados con ajo, jengibre, pimiento rojo y otros condimentos. Se consume como acompañante de los platos fuertes. Además de ser delicioso, el kimchi también es conocido por sus beneficios para la salud, gracias a su contenido en vitaminas, antioxidantes y probióticos.",
        categoria: "entradas",
        foto:"../../img/preparaciones/kimchi.jpg",
        kcal: 22,
        carbohidrados: 4.15,
        grasas: 0.32,
        proteina: 1.7
    },
    {
        id: 3,
        nombre : "Pajeon",
        precio: 20000,
        gramaje: "200g",
        descripcion: "Es un panqueque en base de harina de trigo y cebolla verde. Por su versatilidad puede elaborarse de diversos ingredientes como mariscos, camarones, calamares, verduras, u otros, según el gusto del cliente.",
        categoria: "entradas",
        foto:"../../img/preparaciones/pajeon.jpg",
        kcal: 60,
        carbohidrados: 7.3,
        grasas: 2,
        proteina: 3.8
    },
    {
        id: 4,
        nombre : "Kimbap",
        precio: 28000,
        gramaje: "300g",
        descripcion: "Kimbap es un rollo de arroz envuelto en algas nori. Es muy versatil en su acompañamiento, por lo que puede realizarse con verduras como zanahorias, espinacas y rábanos, productos carnicos, productos de mar, kimchi, huevo o aguacate.",
        categoria: "entradas",
        foto:"../../img/preparaciones/kimbap1.jpg",
        kcal: 38,
        carbohidrados: 2.7,
        grasas: 2.4,
        proteina: 1.5
    },
    {
        id: 5,
        nombre : "SSAM / SAAM",
        precio: 25000,
        gramaje: "450g",
        descripcion: "SSAM es un conjunto de platos con diversos ingredientes y sabores. Se hará un envuelto con una hoja de lechuga. Contiene carne a la parrilla (panceta de cerdo), cebollas verdes, arroz, ssamjang (pasta), entre otros.",
        categoria: "entradas",
        foto:"../../img/preparaciones/ssam.jpg",
        kcal: 95,
        carbohidrados: 20,
        grasas: 8,
        proteina: 10
    },
    {
        id: 6,
        nombre : "Mandu",
        precio: 27000,
        gramaje: "10 unidades",
        descripcion: "Dumpling o empanada hecha a vapor o frita, rellena de carne y vegetales. Esto puede incluir: carne de cerdo, carne de res, pollo, tofu, cebollines, champiñones, entre otros.",
        categoria: "entradas",
        foto:"../../img/preparaciones/mandu.jpg",
        kcal: 194,
        carbohidrados: 24,
        grasas: 6,
        proteina: 11
    },
    {
        id: 7,
        nombre : "Bibimbap",
        precio: 50000,
        gramaje: "450g",
        descripcion: "Plato hecho a base de arroz, verduras salteadas, carne (carne de res, pollo o cerdo), huevo, gochujang (pasta de chile fermentado y condimentos), y kimchi (opcional).",
        categoria: "platos fuertes",
        foto:"../../img/preparaciones/Bibimbap.jpg",
        kcal: 400,
        carbohidrados: 30,
        grasas: 17,
        proteina: 25
    },
    {
        id: 8,
        nombre : "Japchae",
        precio: 30000,
        gramaje: "300g",
        descripcion: "Plato en base a fideos celofán acompañado con ojo de bife, zanahorias, espinaca, pimentón, cebolla y hongos shitake.",
        categoria: "platos fuertes",
        foto:"../../img/preparaciones/japchae.jpg",
        kcal: 348,
        carbohidrados: 51.5,
        grasas: 11.5,
        proteina: 11.5
    },
    {
        id: 9,
        nombre : "Samgyeopsal (Barbacoa)",
        precio: 100000,
        gramaje: "600g",
        descripcion: "Asado acompañado de rebanadas de panceta de cerdo, Lomo de cerdo, zanahoria, repollo, ajos tiernos y lechuga romana.",
        categoria: "platos fuertes",
        foto:"../../img/preparaciones/Samgyeopsal.jpg",
        kcal: 333,
        carbohidrados: 0,
        grasas: 28,
        proteina: 18
    },
    {
        id: 10,
        nombre : "Budae Jjigae",
        precio: 55000,
        gramaje: "400g",
        descripcion: "Sopa tipica coreana, similar a un estofado, acompañados por salchichas Frankfurt, tofu, hongos enoki, champiñones ostra, hongos shiitake, kimchi añejo y fideos ramen.",
        categoria: "platos fuertes",
        foto:"../../img/preparaciones/Budae_Jjigae.jpg",
        kcal: 552,
        carbohidrados: 91,
        grasas: 16,
        proteina: 10
    },
    {
        id: 11,
        nombre : "Jajangmyeon",
        precio: 45000,
        gramaje: "350g",
        descripcion: "fideos gruesos de trigo, cubiertos en salsa espesa hecha de chunjang, carne, verduras picadas y solo en ocasiones mariscos panceta cebolla, calabacín, col, ajo, jengibre y pasta.",
        categoria: "platos fuertes",
        foto:"../../img/preparaciones/Jajangmyeon.jpg",
        kcal: 610,
        carbohidrados: 91,
        grasas: 23,
        proteina: 9
    },
    {
        id: 12,
        nombre : "Jjimdak",
        precio: 35000,
        gramaje: "450g",
        descripcion: "Pollo estofado con tonalidades dulces, saladas, y ligero picante. Está acompañado por papas,  zanahoria ,cebolla, chiles, fideos de vidrio coreanos, champiñones o hongos shiitake, cebolla verde, semillas de sésamo tostadas",
        categoria: "platos fuertes",
        foto:"../../img/preparaciones/jjimdak.jpg",
        kcal: 465,
        carbohidrados: 61,
        grasas: 14.5,
        proteina: 23.7
    },
    {
        id: 13,
        nombre : "Tteokbokki",
        precio: 19500,
        gramaje: "5 unidades",
        descripcion: "Postre a base de harina de arroz glutinoso acompañado de frutos secos, semillas de sésamo, piñones, aceite y azúcar. Se consumen como bizcochos, por lo que son dulces y de distintos sabores.",
        categoria: "postres",
        foto:"../../img/preparaciones/tteok.jpg",
        kcal: 420,
        carbohidrados: 94,
        grasas: 1.4,
        proteina: 8
    },
    {
        id: 14,
        nombre : "Mochis",
        precio: 23000,
        gramaje: "6 unidades",
        descripcion: "Postre a base de harina de arroz con gluten, agua, azúcar y maicena.  Rellenos de frutas como fresa, kiwi, mango, durazno arándanos, además de adornarlos con chocolate o crema batida.",
        categoria: "postres",
        foto:"../../img/preparaciones/mochis.jpg",
        kcal: 96,
        carbohidrados: 18,
        grasas: 3,
        proteina: 1
    },
    {
        id: 15,
        nombre : "Dasik",
        precio: 18500,
        gramaje: "6 unidades",
        descripcion: "Postre a base de harina de cereal, miel, azúcar, fruta y yeot, decorado con grabados de dasikpan. Este postre està inspirado en la epoca real de la Dinastía Joseon. ",
        categoria: "postres",
        foto:"../../img/preparaciones/dasik.jpg",
        kcal: 123,
        carbohidrados: 23,
        grasas: 3,
        proteina: 1
    },
    {
        id: 16,
        nombre : "Bingsu",
        precio: 22000,
        gramaje: "20g",
        descripcion: "Granizado que està acompañado con mermeladas, jarabes, frutas y toppings.",
        categoria: "postres",
        foto:"../../img/preparaciones/bingsu.jpg",
        kcal: 97 ,
        carbohidrados: 17,
        grasas: 2.3,
        proteina: 1
    },
    {
        id: 17,
        nombre : "Hoddeok",
        precio: 15000,
        gramaje: "130g",
        descripcion: "Panqueque frito que se rellena comúnmente con una mezcla de azúcar moreno, cacahuetes y canela.",
        categoria: "postres",
        foto:"../../img/preparaciones/Hoddeok.webp",
        kcal: 197,
        carbohidrados: 29.8,
        grasas: 7,
        proteina: 4.1
    },
    {
        id: 18,
        nombre : "Songpyeon",
        precio: 25000,
        gramaje: "6 unidades",
        descripcion: "Postre tipico donde se consume en otoño (su temporada especial: festival de la cosecha de Chuseok) ",
        categoria: "postres",
        foto:"../../img/preparaciones/songpyeon.jpg",
        kcal: 84,
        carbohidrados: 14.7,
        grasas: 1.2,
        proteina: 1.4
    },
    {
        id: 19,
        nombre : "Soju ",
        precio: 40000,
        gramaje: "360 ml",
        descripcion: "Es un licor destilado de arroz, cebada o batata dulce, que ofrece un perfil de sabor suave y versátil. Con un contenido alcohólico equilibrado, es ideal para acompañar tus comidas, realzando los sabores de cada bocado.",
        categoria: "bebidas",
        foto:"../../img/preparaciones/Soju-bebida.jpg",
        kcal: 241 ,
        carbohidrados: 45,
        grasas: 0,
        proteina: 0.5
    },
    {
        id: 20,
        nombre : "Makgeolli",
        precio: 50000,
        gramaje: "1.2L",
        descripcion: "Licor tradicional fermentado a base de arroz, característico por color lechoso y su cuerpo sedoso. Con sabores sutiles de arroz dulce, sabor fresco,  ligero y un toque efervescente que genera un contraste perfecto en sus comidas.",
        categoria: "bebidas",
        foto:"../../img/preparaciones/Makgeolli-bebida.jpg",
        kcal: 128,
        carbohidrados: 15,
        grasas: 0,
        proteina: 5
    },
    {
        id: 21,
        nombre : "Sake coreano",
        precio: 60000,
        gramaje: "700ml",
        descripcion: "Es un vino tradicional coreano hecho de arroz. Se consume como bebida alcohólica con tonos dulces y pocos acidos, generando un contraste en los sabores de los alimentos. Se puede servir frío, templado o caliente.",
        categoria: "bebidas",
        foto:"../../img/preparaciones/sake-bebida.jpg",
        kcal: 140,
        carbohidrados: 17,
        grasas: 0,
        proteina: 3
    },
    {
        id: 22,
        nombre : "Bokbunja ju",
        precio: 12000,
        gramaje: "300ml",
        descripcion: "Bebida artesanal elaborada a partir de las jugosas y aromáticas bayas de bokbunja, también conocidas como moras coreanas. Con dulzura frutal y un toque sutil de acidez, tonalidad vibrante y una explosion de sabores.",
        categoria: "bebidas",
        foto:"../../img/preparaciones/bokbunjaJu-bebida.jpg",
        kcal: 300,
        carbohidrados: 36,
        grasas: 0,
        proteina: 0
    },
    {
        id: 23,
        nombre : "Omija Cha",
        precio: 12000,
        gramaje: "300ml",
        descripcion: "Bebida elaborada con las vibrantes bayas omija, la cual poseen sabores dulces, salado, agrio, amargo y picante. Esta exquisita infusión es creada mediante la combinación de las bayas omija con agua pura y la dulzura natural de la miel, con resultado es una bebida equilibrada y refrescante.",
        categoria: "bebidas",
        foto:"../../img/preparaciones/OmijaCha-bebida.jpg",
        kcal: 10,
        carbohidrados: 2,
        grasas: 0,
        proteina: 0
    },
    {
        id: 24,
        nombre : "Bocado de angel",
        precio: 27000,
        gramaje: "8 unidades",
        descripcion: "Dumbling frito relleno de chicharron, carne deshebrada en salsa BBq de café, papa criolla, platano maduro, puerro caramelizado, queso gouda y mozzarella.",
        categoria: "fusion",
        foto:"../../img/preparaciones/fusion-bocado-de-angel.webp",
        kcal: 250,
        carbohidrados: 55,
        grasas: 13,
        proteina: 18
    },
    {
        id: 25,
        nombre : "Memorias",
        precio: 27000,
        gramaje: "300",
        descripcion: "Hervido compuesto por pollo, chips de yuca, esparragos, cebollín, verduras salteadas en soya infusionada con coco: cebolla, coliflor, maiz, ajonjolí, brocolí, zanahoria, papa criolla.",
        categoria: "fusion",
        foto:"../../img/preparaciones/fusion-memorias.jpg",
        kcal: 350,
        carbohidrados: 60,
        grasas: 17,
        proteina: 18
    },
    {
        id: 26,
        nombre : "Explosión",
        precio: 13000,
        gramaje: "4 unidades",
        descripcion: "Snack relleno de dulce de guayaba, cacao y nueces, hecho en harina de arroz y trigo cubierto con almendra tostada, maní y pistachos.",
        categoria: "fusion",
        foto:"../../img/preparaciones/fusion-explosion.jpg",
        kcal: 300,
        carbohidrados: 40,
        grasas: 17,
        proteina: 8
    },
    {
        id: 27,
        nombre : "Camino cafetero",
        precio: 20000,
        gramaje: "150g",
        descripcion: "Panqueque frito a base de harina de platano relleno de cacao, platano, salsa de café del Quindio en reducción con panela y canela.",
        categoria: "fusion",
        foto:"../../img/preparaciones/fusion-camino-cafetero.jpg",
        kcal: 220,
        carbohidrados: 35,
        grasas: 14,
        proteina: 6
    },

]