/**
 * Estaba intentando pintar estos datos en el handlebar y no me funciono
 */
const { Router } = require('express');
const router = Router();


router.get('/hombre', (req, res) => {
    const productoH = [{

        imagePath: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/d285610e30664900b857a7fa00ed0201_9366/Zapatilla_Superstar_Blanco_C77124_01_standard.jpg',
        nombre: 'Adidas',
        talla: '38',
        color: 'Blanco',
        cantidad: '1',
        precio: 45,


        imagePath: 'https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/61f87dec481e4512823ea7fb0080ba1a_9366/Zapatilla_Gazelle_Negro_BB5476_01_standard.jpg',
        nombre: 'Adidas',
        talla: '37',
        color: 'Negro',
        cantidad: '1',
        precio: 35,


        imagePath: 'https://photos6.spartoo.es/photos/562/5629211/5629211_350_A.jpg',
        nombre: 'Adidas',
        talla: '40',
        color: 'Azul',
        cantidad: '1',
        precio: 47,


        imagePath: 'https://s3.amazonaws.com/nikeinc/assets/84925/Sp19_BB_Nike_Adapt_20181218_NIKE0538_Detail5_rectangle_1600.jpg?1547068102',
        nombre: 'Nike',
        talla: '40',
        color: 'Negro',
        cantidad: '1',
        precio: 49,

        imagePath: 'https://n3.sdlcdn.com/imgs/i/f/l/Nike-Gray-Running-Shoes-SDL195072249-1-98f01.jpg',
        nombre: 'Nike',
        talla: '37',
        color: 'Gris',
        cantidad: '1',
        precio: 34,

        imagePath: 'https://http2.mlstatic.com/zapatillas-classic-leather-reebok-D_NQ_NP_834827-MLA31118406487_062019-Q.jpg',
        nombre: 'Reebok',
        talla: '39',
        color: 'Blanco',
        cantidad: '1',
        precio: 56,

        imagePath: 'https://cdn.shopify.com/s/files/1/2031/6995/products/DV8303_1_1280x.jpg?v=1566404382',
        nombre: 'Reebok',
        talla: '40',
        color: 'Combinado',
        cantidad: '1',
        precio: 51,

        imagePath: 'https://footonmars.com/1384-large_default/reebok-classic-leather-negras-49800.jpg',
        nombre: 'Reebok',
        talla: '38',
        color: 'Negro',
        cantidad: '1',
        precio: 55,
    }];
    res.render('hombre', { productoH });
});

module.exports = router;