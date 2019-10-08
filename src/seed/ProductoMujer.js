const Producto = require('../models/productsModels');
const mongoose = require('mongoose');
require('../models/database');



productoM = [
    new Producto({
        imagePath: 'https://deportesblanes.com/10034-large_default/zapatillas-adidas-runfalcon-negras-mujer.jpg',
        nombre: 'Adidas',
        talla: '38',
        color: 'Negro',
        cantidad: '1',
        precio: 45
    }),
    new Producto({
        imagePath: 'https://deportesblanes.com/5735-large_default/zapatillas-adidas-swift-run-rosa-para-mujer.jpg',
        nombre: 'Adidas',
        talla: '38',
        color: 'Rosado',
        cantidad: '1',
        precio: 45
    }),
    new Producto({
        imagePath: 'https://http2.mlstatic.com/zapatillas-run-w-adidas-blast-tienda-oficial-D_NQ_NP_962764-MLA31026969676_062019-Q.jpg',
        nombre: 'Adidas',
        talla: '38',
        color: 'Rosado',
        cantidad: '1',
        precio: 45
    }),
    new Producto({
        imagePath: 'https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/knpetbrjxfm583vvhvsd/epic-react-flyknit-2-zapatillas-de-running-QtLMg0.jpg',
        nombre: 'Nike',
        talla: '40',
        color: 'Rosado',
        cantidad: '1',
        precio: 49,
    }),
    new Producto({
        imagePath: 'http://www.ifixurdevice.com/wp-content/uploads/2018/03/tenis-para-correr-nike-mujer-nike-air-max-advantage-rosa-y-blanco.jpg',
        nombre: 'Nike',
        talla: '40',
        color: 'Rosado',
        cantidad: '1',
        precio: 49,
    }),
    new Producto({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/51CZf-f-VHL._UY500_.jpg',
        nombre: 'Nike',
        talla: '40',
        color: 'Gris',
        cantidad: '1',
        precio: 49,
    }),
    new Producto({
        imagePath: 'https://prochampions.vteximg.com.br/arquivos/ids/219856-700-700/CN6757_1.jpg?v=636939788352530000',
        nombre: 'Reebok',
        talla: '38',
        color: 'Verde-Marino',
        cantidad: '1',
        precio: 55,
    }),
    new Producto({
        imagePath: 'https://assets.reebok.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/6bf3844dd6fc49039940a96b014c2574_9366/Reebok_Aztrek_Gris_DV3941_01_standard.jpg',
        nombre: 'Reebok',
        talla: '38',
        color: 'Gris',
        cantidad: '1',
        precio: 55,
    }),
]

var done = 0;
for (var i = 0; i < productoM.length; i++) {
    productoM[i].save(function (err, result) {
        done++;
        if (done === productoM.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}

