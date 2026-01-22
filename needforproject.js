const container = document.querySelector(".container");
const cardTemplate = document.querySelector(".card");

const locations = [
{name: "Littleroot Town", dominantElement: "Normal" },
  {name: "Dewford Town", dominantElement: "Water" },
    {name: "Petalburg City", dominantElement: "descriptive description" },
      {name: "Pacifidlog Town", dominantElement: "descriptive description" },
        {name: "Ever-Grande City", dominantElement: "descriptive description" },
           {name: "Slateport City", dominantElement: "descriptive description" },
              {name: "Lavaridge Town", dominantElement: "descriptive description" },
                 {name: "Lilycove City", dominantElement: "descriptive description" },
                   {name: "Littleroot Town", dominantElement: "descriptive description" },
                     {name: "Littleroot Town", dominantElement: "descriptive description" },
                        {name: "Littleroot Town", dominantElement: "descriptive description" },

]

for(const person of people) {
  console.log(person.name);
  const newCard = cardTemplate.cloneNode(true) ;
  newCard.children[0].innerText = person.name 
  newCard.children[1].innerText = person.dominantElement; 
  conatainer.appenedChild(newCard);
}

cardTemplate.remove()

const cards = document.querySelectorAll(".card");

for(let i = 0; i < cards.length; i++) {
cards[i].addEventListener("click", function () 
{console.log(this) 
})

}












