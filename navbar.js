//Selectionne le Search
const searchBar = document.forms['Search'].querySelector('input');

//Fait un rendu de ce que l'utilisateur cherche
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const cards = document.getElementsByClassName('card');
    Array.from(cards).forEach(function(card){
        const c = card.getElementsByTagName("h2")[0].innerText;
        if(c.toLowerCase().indexOf(term) != -1){
            card.style.display = 'block';
        }else{
            card.style.display = 'none';
        }
    })
    
})


