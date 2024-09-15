fetch('https://rickandmortyapi.com/api/character')
.then((res) => res.json())
.then((date)=>{
    let contiiner = document.getElementById('contiiner');
    
    date.results.map(elem => {


        let card = document.createElement('div');
        card.classList.add('col-lg-9',  'character-card');


        let nameT = document.createElement('h4');
        nameT.textContent = elem.name;
      card.appendChild(nameT);

        let imgT = document.createElement('img');
        imgT.src = elem.image;
        card.appendChild(imgT);
        contiiner.appendChild(card);
    })
})