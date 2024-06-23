const product = [
    {
        id: 0,
        image: 'https://as01.epimg.net/showroom/imagenes/2019/05/13/portada/1557734847_049672_1557736620_sumario_normal.jpg',
        title: 'zapatos',
        price: 120,
    },
    {
        id: 1,
        image: 'https://i.ebayimg.com/thumbs/images/g/PyoAAOSwPcNlKAg~/s-l640.jpg',
        title: 'toalla',
        price: 60,
    },
    {
        id: 2,
        image: 'https://imagenes.elpais.com/resizer/VMy3RFE1Uki4jGerurz9jZGN6TE=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/OC2EEIFKGSSZJMYFW7NC2BWKSQ.jpg',
        title: 'tomatodo',
        price: 230,
    },
    {
        id: 3,
        image: 'https://www.sevenelectronics.com.ar/images/000779813771045190947st-bold-angulo1-0a70a10dad821a27f016279990303166-640-0.jpg',
        title: 'auriculares',
        price: 100,
    },
    {
        id:4,
        image:'https://m.media-amazon.com/images/I/61dQGXzsvZL.jpg',
        title:'ropa para hombre',
        price:250,
    },
    {
        id:5,
        image:'https://ae01.alicdn.com/kf/Sf9d9717c35f448cebc300eb566ef162db/Conjunto-de-gimnasio-para-hombre-ropa-interior-de-compresi-n-secado-r-pido-mallas-de-entrenamiento.jpg',
        title:'conjunto nuevo',
        price:250,
    },
    {
    id:6,
    image:'https://ae01.alicdn.com/kf/Sa932d0581d01440fac2bfa18c6135485A/Mono-de-Yoga-de-verano-para-mujer-traje-deportivo-corto-para-Fitness-conjunto-de-gimnasio-ropa.jpg',
    title:'conjunto para mujer',
    price:250,
    },
   {
    id:7,
    image:'https://ae01.alicdn.com/kf/Sdf90261a75de4b3fadd925d6b069a33bZ.jpg_640x640Q90.jpg_.webp',
    title:'ropa de algodon',
    price:250,
   },
   {
    id:8,
    image:'https://vader-prod.s3.amazonaws.com/1572351041-61I4bKkQJL.jpg',
    title:'bolso',
    price:250,
   },
   {
    id:9,
    image:'https://d13xymm0hzzbsd.cloudfront.net/2/20180801/15331371326122.jpg',
    title:'bolso para mujer',
    price:250,
   },
   {
    id:10,
    image:'https://comprargorra.com/img/cms/Gorras%20deportivas/Gorra%20Deportiva%20Ultradelgada%20Secado%20Rapido%20Unisex%20desc.JPG',
    title:'gorra',
    price:250,
   },
   {
    id:11,
    image:'https://cf.shopee.com.mx/file/sg-11134201-22120-flha8q5qu2kv71',
    title:'conjunto 2 piezas',
    price:250,
   },
   {
    id:12,
    image:'https://image.made-in-china.com/202f0j10wZSazuiFfLGy/2020-Winter-Women-Gym-Clothing-Zippered-Workout-Fitness-Sports-Suit-Long-Sleeve-Crop-Top-Jacket-Yoga-Bra-High-Waist-Leggings-Seamless-3-Piece-Sportswear.jpg',
    title:'conjunto de invierno',
    price:250,
   },
{
 id:12,
 image:'https://ae01.alicdn.com/kf/Sa381378b351242e4a2bbf2e333f7e6edj/Conjuntos-deportivos-para-hombre-ropa-deportiva-para-entrenamiento-ch-ndal-transpirable-para-M-6XL-primavera-2021.jpg_Q90.jpg_.webp',
 title:'conjunto de verano',
 price:250,
}

];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>comprar</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "tu carrito esta vacio";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}