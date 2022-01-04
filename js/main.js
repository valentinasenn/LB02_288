//JSON Daten den Klassen zuordnen

const portraits = JSON.parse(portrait);
const animals = JSON.parse(animal);
const streetdances = JSON.parse(streetdance);


// alle Objekte mit der Klasse .img einblenden

function displayAll(){
    $(".img").show();
}


// Loop für die Anzeige der Portrait-Bilder

function displayPortrait(){
    $(".img").hide();
    for(let i = 0; i < 12; i++){
        let url = portraits.portrait[i].img;

        $(`.img[src="${url}"]`).show(); 
    }
}


// Loop für die Anzeige der Animal-Bilder

function displayAnimals(){
    $(".img").hide();
    for(let i = 0; i < 5; i++){
        let url = animals.animal[i].img;
        $(`.img[src="${url}"]`).show(); 
    }
}


// Loop für die Anzeige der Streetdance-Bilder

function displayStreetdance(){
    $(".img").hide();
    for(let i = 0; i < 5; i++){
        let url = streetdances.streetdance[i].img;
        $(`.img[src="${url}"]`).show(); 
    }
}




