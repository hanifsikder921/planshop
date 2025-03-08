const products=[
    {
        "title": "Palm Tree",
        "price": 210,
        "discount": 185,
        "photo": "https://chive.com/cdn/shop/files/LILO4P-2.png?v=1741104049&width=1080"
    },
    {
        "title": "Pla Tree",
        "price": 200,
        "discount": 180,
        "photo": "https://img.freepik.com/premium-vector/flowers-pot-houseplant-vector-illustration_1253202-1568.jpg"
    },
    {
        "title": "Rose Tree",
        "price": 200,
        "discount": 180,
        "photo": "https://i0.wp.com/doodlewash.com/wp-content/uploads/2020/03/Day-9-Pot-Of-Flowers-Watercolor-Illustration.jpg?fit=1024%2C766&ssl=1"
    },
    {
        "title": "Bonsai Tree",
        "price": 150,
        "discount": 130,
        "photo": "https://img.drz.lazcdn.com/static/bd/p/34c9c5cf513075d430e617321f0822b5.jpg_960x960q80.jpg_.webp"
    },
    {
        "title": "Maple Tree",
        "price": 250,
        "discount": 220,
        "photo": "https://tresorie.in/cdn/shop/products/HOHAFONAS00476_78057a86-09f1-4746-b3ec-561be7bfcbe8.jpg?v=1675083286"
    },
    {
        "title": "Oak Tree",
        "price": 300,
        "discount": 270,
        "photo": "https://img.tatacliq.com/images/i14/437Wx649H/MP000000020110865_437Wx649H_202311171105372.jpeg"
    },
    {
        "title": "Pine Tree",
        "price": 180,
        "discount": 160,
        "photo": "https://media.istockphoto.com/id/1154066666/vector/home-flower-in-pot-vector-design-illustration-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=9Y1Ba6ho_E1zXrNl2UXiCMW2F0s4NmzKaqzq0XxEXIc="
    },
    {
        "title": "Cherry Blossom",
        "price": 220,
        "discount": 200,
        "photo": "https://img.freepik.com/premium-vector/flowers-pot-houseplant-vector-illustration_1253202-1493.jpg"
    },
    {
        "title": "Cactus",
        "price": 50,
        "discount": 40,
        "photo": "https://img.freepik.com/premium-vector/flower-pot-with-pink-flowers-it-green-leaf_1253202-22021.jpg"
    },
    {
        "title": "Sunflower",
        "price": 100,
        "discount": 90,
        "photo": "https://leafyisland.com/cdn/shop/products/12inchbrownwithplants.png?v=1683090465&width=1445"
    },
    {
        "title": "Tulip",
        "price": 120,
        "discount": 110,
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWHjaHueXe10WxslfD0MttXVpoGDHr4knBQ&s"
    },
    {
        "title": "Lavender",
        "price": 80,
        "discount": 70,
        "photo": "https://img.freepik.com/premium-vector/flowers-pot-houseplant-vector-illustration_1253202-2966.jpg?semt=ais_hybrid"
    },
    {
        "title": "Bamboo",
        "price": 90,
        "discount": 80,
        "photo": "https://tiimg.tistatic.com/fp/1/008/192/6-inches-200-grams-round-decorative-antique-design-glass-flower-pot--374.jpg"
    },
    {
        "title": "Jasmine",
        "price": 110,
        "discount": 100,
        "photo": "https://www.bloomingbackyard.com/wp-content/uploads/2021/04/Dahlia-1024x974.jpg.webp"
    },
    {
        "title": "Orchid",
        "price": 200,
        "discount": 180,
        "photo": "https://img.drz.lazcdn.com/static/lk/p/2409ca9dc6a0d6361d54d32207af7e74.jpg_720x720q80.jpg"
    },
    {
        "title": "Aloe Vera",
        "price": 60,
        "discount": 50,
        "photo": "https://5.imimg.com/data5/SELLER/Default/2021/2/AU/VL/NZ/48041294/cement-flower-pots-500x500.jpg"
    },
    {
        "title": "Fern",
        "price": 70,
        "discount": 60,
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT_lLUqwNA-_RzpakJUlDRPQERMsi3P4-9lw&s"
    },
    {
        "title": "Lily",
        "price": 130,
        "discount": 120,
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx8XNorTgJRJtgKyVK2OHFgxJ8Lo2CJmTZosJakrg7uipxmzjlQ8n7kOl1QA78cVf23X8&usqp=CAU"
    },
    {
        "title": "Daisy",
        "price": 90,
        "discount": 80,
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDy3l7Z4-7FJwCSqyXCgfkLgucxnDmCUGDRQ&s"
    },
    {
        "title": "Hibiscus",
        "price": 140,
        "discount": 130,
        "photo": "https://p.kindpng.com/picc/s/135-1352028_purple-flower-pot-clip-arts-flower-in-pot.png"
    },
];



    
function showProduct() {
for (const product of products) {

    const productCard= document.createElement("div"); 
    productCard.innerHTML=`

       <div class="flex flex-col items-center p-4 rounded-lg shadow bg-white shadow-gray-300 gap-4" data-aos="zoom-in">
                    <div class="max-w-64 min-h-64 h-70 overflow-hidden">
                        <img class="w-full h-full object-cover rounded-lg p-4 mx-auto"
                            src="${product.photo}">
                    </div>
                    <h3 class="text-2xl font-medium mt-3">${product.title}r</h3>
                    <p class="text-2xl">
                        <s class="text-gray-400">$${product.price}</s> <span class="text-emerald-600 font-bold">$${product.discount}</span>
                    </p>
                    <button
                        class="text-white bg-emerald-500 font-bold hover:bg-emerald-600 px-6 py-3 mt-4 rounded-lg shadow cursor-pointer">
                        Add to Cart
                    </button>
                </div>
               
    
    `
    document.getElementById("productContainer").append(productCard);
    
}

    
}

showProduct();