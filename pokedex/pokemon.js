let pokeContent=document.getElementById("pokeContent")
const pokeCount=300;



function initPokemon(){

    for(let i=1;i<=pokeCount;i++){
        let url=`https://pokeapi.co/api/v2/pokemon/${i}`
        fetch(url).then(response=>{
            return response.json();
        }).then(gelen=>{
        let box=document.createElement("div");
        let name=document.createElement("li");
        let photo=document.createElement("img");
        photo.classList.add("photo");
        let id=document.createElement("p");
        photo.width="150";
        photo.height="130";
        name.style.listStyle="none";
        
        const colors={
        fire:"#e73636",
        grass:"#DEFDE0",
        electric:"#FCF7DE",
        water:"#DEF3FD",
        ground:"#f4e7da",
        rock:"#d5d5d4",
        fairy:"#fceaff",
        poison:"#d6b3ff",
        bug:"#f8d5a3",
        dragon:"#97b3e6",
        psychic:"#eaeda1",
        flying:"#F5F5F5",
        fighting:"#E6E0D4",
        normal:"#F5F5F5",
        ice:"#e0f5ff",
        ghost:"#aeffb3",
        dark:"#4e352d",
        steel:"#616161"
        
        }
        
        
        
        
        photo.src=`https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${i}.png`
        
        box.classList.add("pokeBox");
        pokeContent.appendChild(box);
        box.appendChild(name);
        box.appendChild(photo);
        box.appendChild(id);
        let type=gelen.types[0].type.name;
        let color=colors[type]
        box.style.backgroundColor=color;
        if(i>9){
        
            photo.src=`https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${i}.png`
        }
        if(i>99){
            photo.src=`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${i}.png`
        }
        
        
        if(gelen.weight >=999){
            name.innerHTML=`Name : ${gelen.name[0].toUpperCase()+gelen.name.slice(1)} <br> Weight : ${gelen.weight} Ton <br> Id : ${gelen.id} <br> Type : ${type[0].toUpperCase()+type.slice(1)}`;
        }
        else{
            name.innerHTML=`Name : ${gelen.name[0].toUpperCase()+gelen.name.slice(1)} <br> Weight : ${gelen.weight} Kg <br> Id : ${gelen.id} <br> Type : ${type[0].toUpperCase()+type.slice(1)}`;
        }
        
        
           
        
        })
        }

    
}

initPokemon();

