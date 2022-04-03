let dishname = ['Pho Bo Hanoi', 'Nem Nuong', 'Goi Xaoi Vit', 'Nem Ran', 'Goi Cuon', 'Banh Bao', 'Banh Xeo', 'Mien Ga', 'Canh Chua Tom', 'Canh Tofu', 'Sui Gao', 'Pho Ga Hanoi', 'Bun Bo Hue', 'Bun Rieu Cua', 'Hu Tieu', 'Banh Mi Pâté Xá Xíu', 'Banh Qiu Rit Tofu', 'Banh Mi Gà', 'Banh Mi Heo Quay', 'Banh Da Lon', 'Banh Taro', 'Mochi-Eis'];
let description = ['Vietnamesische Suppe mit deftigem Rindfleisch, Reisnudeln, Sojasprossen, Basilikum und Koriander', ' gegrillte Rindfleischspieße mit Zitronengras', 'Salat mit frischer Mango und knuspriger Ente', 'Frühlingsrollen mit Minze, eingelegtem Gemüse, verschiedenen Kräutern, Sojasprossen, Erdnüssen, Reisnudeln', 'Sommerrollen mit Minze, eingelegtem Gemüse, verschiedenen Kräutern, Sojasprossen, Erdnüssen, Reisnudeln', 'Dampfnudeln gefüllt mit Ei und Hackfleisch vom Schwein', 'Vietnamesische Crepes mit Garnelen, Schweinefleisch und frischen Kräutern', 'Suppe mit Glasnudeln, Hühnerfleisch, Frühlingszwiebeln und Morcheln', 'Süß saure Suppe mit Garnelen, Okraschoten, Tomaten, Sellerie, Ananas, Sojakeimen und Reiskraut', 'Yamswurzel-Suppe mit Tofu und Saisongemüse', 'Maultaschensuppe mit Garnelenfüllung', 'Vietnamesische Suppe mit Hähnchenfleisch, Reisnudeln, Sojasprossen, Basilikum und Koriander', 'scharf-würzige Rindfleisch-Nudelsuppe mit Zitronengras, Shrimppaste und asiatischen Kräutern', 'Nudelsuppe mit Krabbenfleisch', 'Nudelsuppe mit Shrimps und Schweinefleisch', 'mit mariniertem Schweinefleisch, hausgemachter Leberpastete und vietnamesischer Wurst', 'mit Tofu und französischem Schmelzkäse', 'mit mariniertem Hühnerfleisch und Zitronengras', 'mit geröstetem Schweinebauch und hausgemachter Leberpastete', 'Pandankuchen', 'Klebreiskuchen mit Tarosfüllung in Kokossoße und Erdnüssen', 'Reiskuchen mit Eis', ];
let price = [14.50, 8.50, 7.50, 4.50, 4.50, 7.50, 9.50, 5.50, 5.50, 5.50, 13.50, 15.50, 15.00, 14.00, 8.50, 8.50, 8.50, 8.50, 4.00, 4.00, 4.50, 5.00];
let basketDish = [];
let basketPrice = [];
let basketAmount = [];


loadArrayLocalStorage();

function render() {

    for (let i = 0; i < 3; i++) {

        document.getElementById('favorite-dishes').innerHTML += generateFavoriteDishes(i);
    }

    for (let i = 3; i < 7; i++) {

        document.getElementById('appetizers').innerHTML += generateAppetizers(i);
    }
    for (let i = 7; i < 11; i++) {

        document.getElementById('soups').innerHTML += generateSoups(i);
    }

    for (let i = 11; i < 15; i++) {

        document.getElementById('rice-noodle-soups').innerHTML += generateRiceNoodleSoups(i);
    }

    for (let i = 15; i < 19; i++) {

        document.getElementById('banh-mi').innerHTML += generateBanhMis(i);
    }

    for (let i = 19; i < dishname.length; i++) {

        document.getElementById('desserts').innerHTML += generateDesserts(i);
    }
}

function generateFavoriteDishes(i) {

    return `
    <div class="single-dish">

    <div class="dish-name"> <b> ${dishname[i]} </b>

        <p class="product-info"> Produktinfo </p>

    </div>

    <div class="dish-description">
        ${description[i]}
    </div>

    <div class="dish-price">
    <b> ${price[i].toFixed(2).replace('.',',')} € </b> 
        </div>

    <button class="add-btn" onclick="addDishToBasket(${i})"> + </button>

</div>
    `;
}

function generateAppetizers(i) {

    return `
    <div class="single-dish">

    <div class="dish-name"> <b> ${dishname[i]} </b>

        <p class="product-info"> Produktinfo </p>

    </div>

    <div class="dish-description">
        ${description[i]}
    </div>

    <div class="dish-price">
    <b> ${price[i].toFixed(2).replace('.',',')} € </b>
        </div>

    <button class="add-btn" onclick="addDishToBasket(${i})"> + </button>

</div>
    `;
}

function generateSoups(i) {

    return `
    <div class="single-dish">

    <div class="dish-name"> <b> ${dishname[i]} </b>

        <p class="product-info"> Produktinfo </p>

    </div>

    <div class="dish-description">
        ${description[i]}
    </div>

    <div class="dish-price">
    <b> ${price[i].toFixed(2).replace('.',',')} € </b>
        </div>

    <button class="add-btn" onclick="addDishToBasket(${i})"> + </button>

</div>
    `;
}

function generateRiceNoodleSoups(i) {

    return `
    <div class="single-dish">
    
    <div class="dish-name"> <b> ${dishname[i]} </b>
    
        <p class="product-info"> Produktinfo </p>
    
    </div>
    
    <div class="dish-description">
        ${description[i]}
    </div>
    
    <div class="dish-price">
    <b> ${price[i].toFixed(2).replace('.',',')} € </b>
        </div>
    
    <button class="add-btn" onclick="addDishToBasket(${i})"> + </button>
    
    </div>
    `;

}

function generateBanhMis(i) {

    return `
    <div class="single-dish">
    
    <div class="dish-name"> <b> ${dishname[i]} </b>
    
        <p class="product-info"> Produktinfo </p>
    
    </div>
    
    <div class="dish-description">
        ${description[i]}
    </div>
    
    <div class="dish-price">
    <b> ${price[i].toFixed(2).replace('.',',')} € </b>
        </div>
    
    <button class="add-btn" onclick="addDishToBasket(${i})"> + </button>
    
    </div>
    `;

}

function generateDesserts(i) {
    return `
    <div class="single-dish">
    
    <div class="dish-name"> <b> ${dishname[i]} </b>
    
        <p class="product-info"> Produktinfo </p>
    
    </div>
    
    <div class="dish-description">
        ${description[i]}
    </div>
    
    <div class="dish-price">
    <b> ${price[i].toFixed(2).replace('.',',')} € </b>
        </div>
    
    <button class="add-btn" onclick="addDishToBasket(${i})"> + </button>
    
    </div>
    `;

}

function addDishToBasket(i) {

    document.getElementById('fill-basket').classList.add('d-none');

    let position = basketDish.indexOf(dishname[i]);

    if (position == -1) {

        basketDish.push(dishname[i]);
        basketPrice.push(price[i]);
        basketAmount.push(1);

        saveArrayLocalStorage('dish', basketDish);
        saveArrayLocalStorage('price', basketPrice);
        saveArrayLocalStorage('amount', basketAmount);

    } else {
        basketAmount[i]++;
    }

    renderBasketDish(i);

}

function renderBasketDish(i) {

    document.getElementById('shopping-basket-dish').innerHTML = ``;


    for (let i = 0; i < basketDish.length; i++) {

        document.getElementById('shopping-basket-dish').innerHTML += `
        <div class="basket-amount">
        
        <div class="basket-btn-box">
        <button class="basket-btn" onclick="minusOneDish(${i})"> - </button> 
        
        ${basketAmount[i]}
        
        <button class="basket-btn" onclick="plusOneDish(${i}) "> + </button> 
        
        
        </div>
        
        <div>
        <b> ${basketDish[i]} ${basketPrice[i].toFixed(2).replace('.',',')} €</b>
        <br>
        </div>
        
        <div>
        <button class="delete-btn" onclick="deleteDish(${i})"></button>
        </div>
        
        </div>
        `;
    }

    calculateCost(i);
}


function calculateCost(i) {


    let dishCost = 0;

    for (let i = 0; i < basketPrice.length; i++) {

        dishCost += basketPrice[i] * basketAmount[i];
    }

    let deliveryCost = 1.50;

    let totalCost = dishCost + deliveryCost;

    if (dishCost == 0) {
        deliveryCost = 0;
        totalCost = 0;
    }

    document.getElementById('cost').innerHTML = ` 
        <div class="cost"> 
        <p> Zwischensumme </p>
        <p>${dishCost.toFixed(2).replace('.',',')} €</p>
        
        </div>
         
          <div class="cost"> 
          
          <p> Lieferkosten </p>
          <br>
          <p> ${deliveryCost.toFixed(2).replace('.',',')} €</p>
          
          </div>
        
          <div class="cost"> 
        
          <p> Gesamtkosten </p>
          <p>${totalCost.toFixed(2).replace('.',',')} €</p>
          
          </div>

          <div class="pay">
          
          <button onclick="pay()" class="pay-btn" > Bezahlen </button>

          </div>
         
          
          `;

}

function minusOneDish(i) {

    if (basketAmount[i] > 1) {
        basketAmount[i]--;
        renderBasketDish(i);

    } else {

        deleteDish(i);
    }

    saveArrayLocalStorage('dish', basketDish);
    saveArrayLocalStorage('price', basketPrice);
    saveArrayLocalStorage('amount', basketAmount);
}

function plusOneDish(i) {
    basketAmount[i]++;
    renderBasketDish(i);

    saveArrayLocalStorage('dish', basketDish);
    saveArrayLocalStorage('price', basketPrice);
    saveArrayLocalStorage('amount', basketAmount);

}

function deleteDish(i) {

    basketDish.splice(i, 1);
    basketPrice.splice(i, 1);
    basketAmount.splice(i, 1);

    renderBasketDish(i);

    saveArrayLocalStorage('dish', basketDish);
    saveArrayLocalStorage('price', basketPrice);
    saveArrayLocalStorage('amount', basketAmount);
}


function pay() {

    document.getElementById('pay').innerHTML = `
    <div class="pay-success">
    
    Ihre Bestellung wurde angenommen und wird bearbeitet. 
    <br>
    Wir wünschen Ihnen einen Guten Appetit!

    </div>
    `;

}

function saveArrayLocalStorage(key, array) {

    localStorage.setItem(key, JSON.stringify(array));
}

function getArrayLocalStorage(key) {

    return JSON.parse(localStorage.getItem(key));
}

function loadArrayLocalStorage() {

    basketDish = getArrayLocalStorage('dish') || [];
    basketPrice = getArrayLocalStorage('price') || [];
    basketAmount = getArrayLocalStorage('amount') || [];
}