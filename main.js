// VOORRAAD ARRAY MET TV'S
const inventory = [
    {
        type: '43PUS6504/12',
        name: '4K TV',
        brand: 'Philips',
        price: 379,
        availableSizes: [43, 50, 58, 65],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 23,
        sold: 2,
    },
    {
        type: 'NH3216SMART',
        name: 'HD smart TV',
        brand: 'Nikkei',
        price: 159,
        availableSizes: [32],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'HD ready',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 4,
        sold: 4,
    },
    {
        type: 'QE55Q60T',
        name: '4K QLED TV',
        brand: 'Samsung',
        price: 709,
        availableSizes: [43, 50, 55, 58, 65],
        refreshRate: 60,
        screenType: 'QLED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 7,
        sold: 0,
    },
    {
        type: '43HAK6152',
        name: 'Ultra HD SMART TV',
        brand: 'Hitachi',
        price: 349,
        availableSizes: [43, 50, 55, 58],
        refreshRate: 60,
        screenType: 'LCD',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 5,
        sold: 5,
    },
    {
        type: '50PUS7304/12',
        name: 'The One 4K TV',
        brand: 'Philips',
        price: 479,
        availableSizes: [43, 50, 55, 58, 65, 70],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: true,
        },
        originalStock: 8,
        sold: 3,
    },
    {
        type: '55PUS7805',
        name: '4K LED TV',
        brand: 'Philips',
        price: 689,
        availableSizes: [55],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: true,
        },
        originalStock: 6,
        sold: 3,
    },
    {
        type: 'B2450HD',
        name: 'LED TV',
        brand: 'Brandt',
        price: 109,
        availableSizes: [24],
        refreshRate: 60,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
    {
        type: '32WL1A63DG',
        name: 'HD TV',
        brand: 'Toshiba',
        price: 161,
        availableSizes: [32],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
];
/*
Opdracht 1 - Array Methoden
Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
    Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.
Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.
*/

//Opdracht 1a:
//Loop de array langs en return alleen de typenamen van de tv's. Log in console.

const allTvTypes = inventory.map((tvType) => {
    return tvType.type;
})
console.log(allTvTypes);

//Opdracht 1b:
//Loop de array langs en return alle tv's waarbij 'original stock' en 'sold' gelijk zijn en log in de console.

const soldOut = inventory.filter((invent) => {
    return invent.sold === invent.originalStock;
})
console.log(soldOut);

//Opdracht 1c:
// loop de array langs en return de tv's met 'ambilight: true' en log in de console.

const ambiLight = inventory.filter((ambi) => {
    return ambi.options.ambiLight === true;
})
console.log(ambiLight);

//Opdracht 1d:
// Loop de array langs en sorteer de tv's van laag naar hoog in prijs en log in de console.

inventory.sort((a, b) => {
    return a.price - b.price;
})
console.log(inventory);

/*
Opdracht 2 - Elementen in de DOM plaatsen
Tip: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon een oude vertrouwde for-loop voor!

Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
 */

//Opdracht 2a:
//maak een for-loop waarin het aantal verkochte tv's bij 'inventory.sold' steeds onthouden en opgeteld worden.
//log het totaal aantal verkochte tv's in de console.

let howManySold = 0
for (let i = 0; i < inventory.length; i++) {
    howManySold = howManySold + inventory[i].sold;
}
console.log(howManySold);

//Opdracht 2b:
// Maak een div aan op de HTML pagina met een eigen ID, en tekst die je gaat vervangen met javaScript.
// Maak op de .js pagina een variabele aan om de tekst in de DIV op de HTML pagina aan te passen.
// Pas de kleur op de .css pagina aan naar groen.

const element = document.getElementById("soldTvs");
element.textContent = ("Het aantal verkochte televisies in het groen is " + howManySold);

// Opdracht 2c:
//maak een for-loop waarin het aantal ingekochte tv's bij 'inventory.originalStock' steeds onthouden en opgeteld worden.
//log het totaal aantal ingekochte tv's in de console. Zie opdracht 2a.

let howManyBought = 0
for (let i = 0; i < inventory.length; i++) {
    howManyBought = howManyBought + inventory[i].originalStock;
}
console.log(howManyBought);

// Opdracht 2d:
// zie Opdracht 2b.

const element2 = document.getElementById("boughtTvs");
element2.textContent = ("Het aantal ingekochte televisies in het blauw is " + howManyBought);

// Opdracht 2e:
// Maak een div aan op de HTML pagina met een eigen ID, en tekst die je gaat vervangen met javaScript.
// Maak op de .js pagina een variabele aan om de tekst in de DIV op de HTML pagina aan te passen dmv document.getElementById() icm variabele.textcontent.
// trek howManyBought af van howManySold via .textcontent.
// Pas de kleur op de .css pagina aan naar groen.

const element3 = document.getElementById("sellTvs");
element3.textContent = ("Het aantal nog te verkopen televisies in het rood is " + (howManyBought - howManySold));

/*
Opdracht 3 - Array methoden en functies
Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.)
    in een lijst op de pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan.
    Dat er dubbele namen in zitten, is niet erg.
Opdracht 3b: Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht.
    Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken.
    Tip: vergeet deze functie -declaratie niet aan te roepen!
 */

// Opdracht 3a:

const tvBrands = inventory.map((tvBrand) => {
  return `<li>${tvBrand.brand}</li>`;
})
const element4 = document.getElementById("listTvs");

element4.innerHTML = tvBrands.join('');


// Opdracht 3b:
function tvObjects(inventory) {
    const element4 = document.getElementById('listTvs'); // Koppeling HTML.

    const tvBrands = inventory.map((tvBrand) => {
        return `<li>${tvBrand.brand}</li>`; // Overschrijven HTML tekst in lijstvorm.
    });

    element4.innerHTML = `${tvBrands.join('')}`; // Maakt string van array zonder de komma's.
}

tvObjects(inventory); // Functie aanroepen.

/*
Opdracht 4 -Functies
Maak deze gehele opdracht eerst alsof je het voor één tv doet. We gaan één tv weergeven in het volgende format:

Philips 43PUS6504/12 - 4K TV
€379,-
43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)

Opdracht 4a: Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft
 in het format [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.*/

function infoTv(inventory) {
    return `${inventory.brand} ${inventory.type} - ${inventory.name}`;
}

console.log(infoTv(inventory));


//Opdracht 4b: Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals 379 of 159) teruggeeft in het format €379,- of €159,-.

function priceTv(price) {
    return `€${price},-`;
}

console.log(priceTv);

/*
Opdracht 4c: Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv.
De functie geeft dit terug in het format [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches
([schermgrootte omgerekend]cm) etc. Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm).
Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm).
Let op: om één string te genereren uit een array van schermgroottes zul je een for-loop voor moeten gebruiken.*/

function screenSizes(inventory) {
    let output = "";
    for (let i = 0; i < inventory.length; i++) {
        const currentSizeInches = inventory[i];
        const currentSizeCm = inventory[i] * 2.54;

        output = output + `${currentSizeInches} inch (${currentSizeCm} cm)`;

        if (i < inventory.length - 1) {
            output = `${output} | `;
        }
    }
    return output
}

console.log(screenSizes(inventory));


//Opdracht 4d: Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand voorbeeld.
//Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.


//Philips 43PUS6504/12 - 4K TV
//€379,-
//43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)

const singleTvContainer = document.getElementById('single-tv');

singleTvContainer.innerHTML = `
  <h3>${infoTv(inventory[5])}</h3>
  <h4>${priceTv(inventory[5].price)}</h4>
  <p>${screenSizes(inventory[5].availableSizes)}</p>
`;

//Opdracht 4e: Maak een herbruikbare functie die de informatie van alle tv's weergeeft op de pagina.
//Gebruik hiervoor de map-methode in combinatie met de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.

function generateTvList(inventory) {
    const tvModelList = document.getElementById('inventory-models');

    const modelItems = inventory.map((tvObject) => {
        return `
      <li>
        <h3>${infoTv(tvObject)}</h3>
        <h4>${priceTv(tvObject.price)}</h4>
        <p>${screenSizes(tvObject.availableSizes)}</p>
      </li>
    `;
    });

    tvModelList.innerHTML = `${modelItems.join('')}`;
}

generateTvList(inventory);

/*
Bonusopdracht
Maak drie knoppen op de pagina: Sorteer op prijs, AmbiLight TV's en Uitverkochte exemplaren.
Gebruik de code die je in opdracht 1b, 1c en 1d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen
op het moment dat de buttons geklikt worden.
Zorg ervoor dat de functies de uitkomsten in de de console loggen als de gebruiker op de bijbehorende knop klikt.
Tip: lees hiervoor paragraaf 7.4 op EdHub eens door!
Zorg er nu voor, in plaats van dat de uitkomsten in de console worden gelogd,
dat de uitkomsten worden meegegeven aan jouw functie uit 4e zodat de resultaten daadwerkelijk op de pagina weergegeven worden!
 */