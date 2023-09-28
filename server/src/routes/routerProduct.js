const { Router } = require("express");
const router = Router();
const {createProduct,calculateAverageRating} = require('../controllers/Products/createProduct')
const {getProducts} = require ('../controllers/Products/getProducts')
router.post("/create", async(req, res) => {
  try{
    const data = req.body;
    console.log("DATa", data)
    const newProduct =await createProduct(data);
    
    const averageRating = calculateAverageRating(newProduct.rating);
    newProduct.averageRating = parseFloat(averageRating.toFixed(2));
    
    res.status(200).json(newProduct);

}catch(err){
    console.log("error crate",err.message)

}
});

router.get("/",async (req, res) => {
  const products = [
    {
      id: 1,
      name: "Audífonos Inalámbricos",
      description: "Audífonos Bluetooth con cancelación de ruido.",
      SKU: "SKU-TECH-001",
      category: "Audífonos",
      image: "https://example.com/product1.jpg",
      stock: 30,
      price: 149.99,
      discount: 10,
      rating: {
        rate: 4.5,
      },
      averageRating: 4.3,
      isAvailable: true,
    },
    {
      id: 2,
      name: "Portátil Ultradelgado",
      description: "Portátil ligero y potente para trabajo y entretenimiento.",
      SKU: "SKU-TECH-002",
      category: "Portátiles",
      image: "https://example.com/product2.jpg",
      stock: 15,
      price: 899.99,
      discount: 5,
      rating: {
        rate: 4.8,
      },
      averageRating: 4.6,
      isAvailable: true,
    },
    {
      id: 3,
      name: "Tablet Android de 10 Pulgadas",
      description: "Tablet con pantalla Full HD y alto rendimiento.",
      SKU: "SKU-TECH-003",
      category: "Tablets",
      image: "https://example.com/product3.jpg",
      stock: 20,
      price: 199.99,
      discount: 15,
      rating: {
        rate: 4.3,
      },
      averageRating: 4.1,
      isAvailable: true,
    },
    {
      id: 4,
      name: "Smartphone de Gama Alta",
      description:
        "Teléfono inteligente con cámara de alta resolución y pantalla OLED.",
      SKU: "SKU-TECH-004",
      category: "Smartphones",
      image: "https://example.com/product4.jpg",
      stock: 25,
      price: 699.99,
      discount: 20,
      rating: {
        rate: 4.7,
      },
      averageRating: 4.5,
      isAvailable: true,
    },
    {
      id: 5,
      name: "Auriculares Gaming RGB",
      description:
        "Auriculares para juegos con iluminación RGB personalizable.",
      SKU: "SKU-TECH-005",
      category: "Audífonos",
      image: "https://example.com/product5.jpg",
      stock: 40,
      price: 79.99,
      discount: 0,
      rating: {
        rate: 4.2,
      },
      averageRating: 4.0,
      isAvailable: true,
    },
    {
      id: 6,
      name: "Laptop para Diseñadores",
      description:
        "Laptop de alta resolución y potencia para diseñadores creativos.",
      SKU: "SKU-TECH-006",
      category: "Portátiles",
      image: "https://example.com/product6.jpg",
      stock: 10,
      price: 1299.99,
      discount: 10,
      rating: {
        rate: 4.9,
      },
      averageRating: 4.8,
      isAvailable: true,
    },
    {
      id: 7,
      name: "Tablet con Stylus",
      description: "Tablet con lápiz óptico para dibujo y notas manuscritas.",
      SKU: "SKU-TECH-007",
      category: "Tablets",
      image: "https://example.com/product7.jpg",
      stock: 18,
      price: 249.99,
      discount: 5,
      rating: {
        rate: 4.4,
      },
      averageRating: 4.2,
      isAvailable: true,
    },
    {
      id: 8,
      name: "Smartphone 5G",
      description:
        "Teléfono inteligente con conectividad 5G de alta velocidad.",
      SKU: "SKU-TECH-008",
      category: "Smartphones",
      image: "https://example.com/product8.jpg",
      stock: 30,
      price: 599.99,
      discount: 15,
      rating: {
        rate: 4.6,
      },
      averageRating: 4.4,
      isAvailable: true,
    },
    {
      id: 9,
      name: "Auriculares Inalámbricos Deportivos",
      description:
        "Auriculares Bluetooth resistentes al agua para actividades deportivas.",
      SKU: "SKU-TECH-009",
      category: "Audífonos",
      image: "https://example.com/product9.jpg",
      stock: 25,
      price: 49.99,
      discount: 20,
      rating: {
        rate: 4.0,
      },
      averageRating: 3.8,
      isAvailable: true,
    },
    {
      id: 10,
      name: "Portátil 2 en 1",
      description: "Portátil convertible en tableta con pantalla táctil.",
      SKU: "SKU-TECH-010",
      category: "Portátiles",
      image: "https://example.com/product10.jpg",
      stock: 12,
      price: 749.99,
      discount: 0,
      rating: {
        rate: 4.3,
      },
      averageRating: 4.1,
      isAvailable: true,
    },
    {
      id: 11,
      name: "Tablet de 8 Pulgadas",
      description: "Tablet compacta con excelente duración de batería.",
      SKU: "SKU-TECH-011",
      category: "Tablets",
      image: "https://example.com/product11.jpg",
      stock: 22,
      price: 149.99,
      discount: 10,
      rating: {
        rate: 4.2,
      },
      averageRating: 4.0,
      isAvailable: true,
    },
    {
      id: 12,
      name: "Smartphone Compacto",
      description: "Teléfono inteligente compacto y fácil de llevar.",
      SKU: "SKU-TECH-012",
      category: "Smartphones",
      image: "https://example.com/product12.jpg",
      stock: 35,
      price: 349.99,
      discount: 10,
      rating: {
        rate: 4.7,
      },
      averageRating: 4.5,
      isAvailable: true,
    },
    {
      id: 13,
      name: "Auriculares Bluetooth Deportivos",
      description:
        "Auriculares inalámbricos para deportes y actividades al aire libre.",
      SKU: "SKU-TECH-013",
      category: "Audífonos",
      image: "https://example.com/product13.jpg",
      stock: 28,
      price: 59.99,
      discount: 5,
      rating: {
        rate: 4.1,
      },
      averageRating: 3.9,
      isAvailable: true,
    },
    {
      id: 14,
      name: "Portátil de Juegos",
      description:
        "Portátil de alto rendimiento para juegos y contenido multimedia.",
      SKU: "SKU-TECH-014",
      category: "Portátiles",
      image: "https://example.com/product14.jpg",
      stock: 8,
      price: 1699.99,
      discount: 15,
      rating: {
        rate: 4.9,
      },
      averageRating: 4.7,
      isAvailable: true,
    },
    {
      id: 15,
      name: "Tablet para Niños",
      description: "Tablet resistente para niños con aplicaciones educativas.",
      SKU: "SKU-TECH-015",
      category: "Tablets",
      image: "https://example.com/product15.jpg",
      stock: 17,
      price: 99.99,
      discount: 10,
      rating: {
        rate: 4.5,
      },
      averageRating: 4.3,
      isAvailable: true,
    },
    {
      id: 16,
      name: "Smartphone de Gama Media",
      description:
        "Teléfono inteligente de buen rendimiento a un precio asequible.",
      SKU: "SKU-TECH-016",
      category: "Smartphones",
      image: "https://example.com/product16.jpg",
      stock: 30,
      price: 249.99,
      discount: 10,
      rating: {
        rate: 4.4,
      },
      averageRating: 4.2,
      isAvailable: true,
    },
    {
      id: 17,
      name: "Auriculares con Cancelación de Ruido",
      description:
        "Auriculares inalámbricos con tecnología de cancelación de ruido.",
      SKU: "SKU-TECH-017",
      category: "Audífonos",
      image: "https://example.com/product17.jpg",
      stock: 20,
      price: 199.99,
      discount: 20,
      rating: {
        rate: 4.6,
      },
      averageRating: 4.4,
      isAvailable: true,
    },
    {
      id: 18,
      name: "Portátil Ligero",
      description: "Portátil delgado y ligero para usuarios en movimiento.",
      SKU: "SKU-TECH-018",
      category: "Portátiles",
      image: "https://example.com/product18.jpg",
      stock: 25,
      price: 799.99,
      discount: 10,
      rating: {
        rate: 4.7,
      },
      averageRating: 4.5,
      isAvailable: true,
    },
    {
      id: 19,
      name: "Tablet con Pantalla 4K",
      description:
        "Tablet con impresionante pantalla 4K para multimedia de alta calidad.",
      SKU: "SKU-TECH-019",
      category: "Tablets",
      image: "https://example.com/product19.jpg",
      stock: 15,
      price: 299.99,
      discount: 5,
      rating: {
        rate: 4.4,
      },
      averageRating: 4.2,
      isAvailable: true,
    },
    {
      id: 20,
      name: "Smartphone de Gama Baja",
      description: "Teléfono inteligente económico para uso básico.",
      SKU: "SKU-TECH-020",
      category: "Smartphones",
      image: "https://example.com/product20.jpg",
      stock: 40,
      price: 129.99,
      discount: 15,
      rating: {
        rate: 3.9,
      },
      averageRating: 3.7,
      isAvailable: true,
    },
    {
      id: 21,
      name: "Auriculares Bluetooth Deportivos",
      description:
        "Auriculares inalámbricos para deportes y actividades al aire libre.",
      SKU: "SKU-TECH-021",
      category: "Audífonos",
      image: "https://example.com/product21.jpg",
      stock: 22,
      price: 69.99,
      discount: 5,
      rating: {
        rate: 4.0,
      },
      averageRating: 3.8,
      isAvailable: true,
    },
    {
      id: 22,
      name: "Portátil de Diseño Gráfico",
      description:
        "Portátil de alto rendimiento para diseño gráfico y edición de video.",
      SKU: "SKU-TECH-022",
      category: "Portátiles",
      image: "https://example.com/product22.jpg",
      stock: 10,
      price: 1799.99,
      discount: 15,
      rating: {
        rate: 4.8,
      },
      averageRating: 4.6,
      isAvailable: true,
    },
    {
      id: 23,
      name: "Tablet para Estudiantes",
      description:
        "Tablet con aplicaciones educativas y recursos para estudiantes.",
      SKU: "SKU-TECH-023",
      category: "Tablets",
      image: "https://example.com/product23.jpg",
      stock: 20,
      price: 119.99,
      discount: 10,
      rating: {
        rate: 4.3,
      },
      averageRating: 4.1,
      isAvailable: true,
    },
    {
      id: 24,
      name: "Smartphone Resistente al Agua",
      description:
        "Teléfono inteligente resistente al agua y golpes para aventuras al aire libre.",
      SKU: "SKU-TECH-024",
      category: "Smartphones",
      image: "https://example.com/product24.jpg",
      stock: 18,
      price: 299.99,
      discount: 10,
      rating: {
        rate: 4.5,
      },
      averageRating: 4.3,
      isAvailable: true,
    },
    {
      id: 25,
      name: "Auriculares de Estudio",
      description:
        "Auriculares de alta calidad para estudio de música y grabación.",
      SKU: "SKU-TECH-025",
      category: "Audífonos",
      image: "https://example.com/product25.jpg",
      stock: 15,
      price: 149.99,
      discount: 0,
      rating: {
        rate: 4.7,
      },
      averageRating: 4.5,
      isAvailable: true,
    },
    {
      id: 26,
      name: "Portátil para Negocios",
      description:
        "Portátil empresarial con seguridad y rendimiento empresarial.",
      SKU: "SKU-TECH-026",
      category: "Portátiles",
      image: "https://example.com/product26.jpg",
      stock: 25,
      price: 1199.99,
      discount: 5,
      rating: {
        rate: 4.4,
      },
      averageRating: 4.2,
      isAvailable: true,
    },
    {
      id: 27,
      name: "Tablet con Teclado Desmontable",
      description:
        "Tablet con teclado desmontable para productividad en movimiento.",
      SKU: "SKU-TECH-027",
      category: "Tablets",
      image: "https://example.com/product27.jpg",
      stock: 20,
      price: 349.99,
      discount: 20,
      rating: {
        rate: 4.6,
      },
      averageRating: 4.4,
      isAvailable: true,
    },
    {
      id: 28,
      name: "Smartphone Económico",
      description: "Teléfono inteligente asequible con buenas prestaciones.",
      SKU: "SKU-TECH-028",
      category: "Smartphones",
      image: "https://example.com/product28.jpg",
      stock: 28,
      price: 149.99,
      discount: 10,
      rating: {
        rate: 4.0,
      },
      averageRating: 3.8,
      isAvailable: true,
    },
    {
      id: 29,
      name: "Auriculares Inalámbricos Premium",
      description:
        "Auriculares inalámbricos premium con calidad de sonido excepcional.",
      SKU: "SKU-TECH-029",
      category: "Audífonos",
      image: "https://example.com/product29.jpg",
      stock: 14,
      price: 199.99,
      discount: 0,
      rating: {
        rate: 4.5,
      },
      averageRating: 4.3,
      isAvailable: true,
    },
    {
      id: 30,
      name: "Portátil de 17 Pulgadas",
      description:
        "Portátil de gran tamaño con pantalla de 17 pulgadas para entretenimiento y productividad.",
      SKU: "SKU-TECH-030",
      category: "Portátiles",
      image: "https://example.com/product30.jpg",
      stock: 9,
      price: 1099.99,
      discount: 10,
      rating: {
        rate: 4.2,
      },
      averageRating: 4.0,
      isAvailable: true,
    },
    {
      id: 31,
      name: "Tablet para Artistas",
      description:
        "Tablet con pantalla sensible a la presión para ilustradores y artistas.",
      SKU: "SKU-TECH-031",
      category: "Tablets",
      image: "https://example.com/product31.jpg",
      stock: 13,
      price: 399.99,
      discount: 0,
      rating: {
        rate: 4.8,
      },
      averageRating: 4.6,
      isAvailable: true,
    },
    {
      id: 32,
      name: "Smartphone Plegable",
      description:
        "Teléfono inteligente con pantalla plegable y diseño innovador.",
      SKU: "SKU-TECH-032",
      category: "Smartphones",
      image: "https://example.com/product32.jpg",
      stock: 6,
      price: 1999.99,
      discount: 15,
      rating: {
        rate: 4.3,
      },
      averageRating: 4.1,
      isAvailable: true,
    },
    {
      id: 33,
      name: "Auriculares con Micrófono",
      description:
        "Auriculares con micrófono para llamadas y conferencias en línea.",
      SKU: "SKU-TECH-033",
      category: "Audífonos",
      image: "https://example.com/product33.jpg",
      stock: 24,
      price: 79.99,
      discount: 0,
      rating: {
        rate: 4.5,
      },
      averageRating: 4.3,
      isAvailable: true,
    },
    {
      id: 34,
      name: "Portátil de Negocios",
      description:
        "Portátil empresarial con seguridad avanzada y rendimiento superior.",
      SKU: "SKU-TECH-034",
      category: "Portátiles",
      image: "https://example.com/product34.jpg",
      stock: 16,
      price: 1499.99,
      discount: 5,
      rating: {
        rate: 4.7,
      },
      averageRating: 4.5,
      isAvailable: true,
    },
    {
      id: 35,
      name: "Tablet para Entretenimiento",
      description:
        "Tablet para ver películas y jugar juegos con pantalla grande.",
      SKU: "SKU-TECH-035",
      category: "Tablets",
      image: "https://example.com/product35.jpg",
      stock: 19,
      price: 179.99,
      discount: 10,
      rating: {
        rate: 4.4,
      },
      averageRating: 4.2,
      isAvailable: true,
    },
    {
      id: 36,
      name: "Smartphone de Edición Limitada",
      description:
        "Teléfono inteligente de edición limitada con diseño exclusivo.",
      SKU: "SKU-TECH-036",
      category: "Smartphones",
      image: "https://example.com/product36.jpg",
      stock: 10,
      price: 799.99,
      discount: 0,
      rating: {
        rate: 4.9,
      },
      averageRating: 4.7,
      isAvailable: true,
    },
    {
      id: 37,
      name: "Auriculares In-Ear",
      description:
        "Auriculares compactos y ligeros para escuchar música en movimiento.",
      SKU: "SKU-TECH-037",
      category: "Audífonos",
      image: "https://example.com/product37.jpg",
      stock: 30,
      price: 29.99,
      discount: 10,
      rating: {
        rate: 3.9,
      },
      averageRating: 3.7,
      isAvailable: true,
    },
    {
      id: 38,
      name: "Portátil 4K para Creativos",
      description:
        "Portátil con pantalla 4K para editores de video y diseñadores gráficos.",
      SKU: "SKU-TECH-038",
      category: "Portátiles",
      image: "https://example.com/product38.jpg",
      stock: 14,
      price: 1999.99,
      discount: 5,
      rating: {
        rate: 4.5,
      },
      averageRating: 4.3,
      isAvailable: true,
    },
    {
      id: 39,
      name: "Tablet de 12 Pulgadas",
      description:
        "Tablet grande con pantalla de 12 pulgadas para productividad.",
      SKU: "SKU-TECH-039",
      category: "Tablets",
      image: "https://example.com/product39.jpg",
      stock: 12,
      price: 299.99,
      discount: 0,
      rating: {
        rate: 4.7,
      },
      averageRating: 4.5,
      isAvailable: true,
    },
    {
      id: 40,
      name: "Smartphone de Gama Alta",
      description: "Teléfono inteligente de alta gama con cámara profesional.",
      SKU: "SKU-TECH-040",
      category: "Smartphones",
      image: "https://example.com/product40.jpg",
      stock: 10,
      price: 899.99,
      discount: 10,
      rating: {
        rate: 4.8,
      },
      averageRating: 4.6,
      isAvailable: true,
    },
  ];
  res.json(products);
  


});


module.exports = router;