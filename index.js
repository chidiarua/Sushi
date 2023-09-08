// mobile menus
const exploreDropMenu = document.querySelector('.explore_menu_items');
const chainDropMenu = document.querySelector('.chain_menu_items');
const walletsMenu = document.querySelector('.wallet_connect');

//desktop menus

const desktopChainMenu = document.querySelector('.dchain_menu');
const desktopWalletsMenu = document.querySelector('.dwallet_connect');




//mobile

function showExploreMenu(){
    chainDropMenu.classList.remove('show_chains');
    walletsMenu.classList.remove('show_wallet_connect');
    exploreDropMenu.classList.toggle('open');
    
}

function showChainsMenu(){
    exploreDropMenu.classList.remove('open');
    walletsMenu.classList.remove('show_wallet_connect');
    chainDropMenu.classList.toggle('show_chains');
    
    
}

function showWalletsMenu(){
    exploreDropMenu.classList.remove('open');
    chainDropMenu.classList.remove('show_chains');
    walletsMenu.classList.toggle('show_wallet_connect');
    
}



//desktop

function showDesktopChainMenu(){
    desktopWalletsMenu.classList.remove('show_dwallet_connect');
    desktopChainMenu.classList.toggle('show_dchain_menu');
    
}

function showDesktopWallets(){
    desktopChainMenu.classList.remove('show_dchain_menu');
    desktopWalletsMenu.classList.toggle('show_dwallet_connect');
    
}




//searching chainlist

//targetting mobile search field and chains list
const searchInput = document.getElementById("search");
const chainItems = document.querySelectorAll(".chain");

//targetting desktop search field and chains list
const dsearchInput = document.getElementById("dsearch");
const dchainItems = document.querySelectorAll('.dchain');


//function to search the chain by passing the search field and items into it
function searchChains(inputField, items){
    //collect input and convert to lowercase
    const query = inputField.value.toLowerCase();

    // for each chain item, we look for it name by targetting the p element in it
    items.forEach(function(chain){
        const chainName = chain.querySelector("p").textContent.toLowerCase();

        //condition to keep only chains starting with supplied input or vice versa
        if (chainName.startsWith(query)){
            chain.style.display = "block";
        } else{
            chain.style.display = "none";
        }
    });


    if (query ===""){
        items.forEach(function(chain){
            chain.style.display = "block";
        });
    }
}

//event listener for mobile
searchInput.addEventListener("input", function(){
    searchChains(searchInput, chainItems);
});

//event listener for desktop

dsearchInput.addEventListener("input", function(){
    searchChains(dsearchInput, dchainItems);
});





/*function searchChains() {
    // converting user search query to lowercase
    const query = searchInput.value.toLowerCase();

    // Iterating through the list of chain(items)
    chainItems.forEach(function(chain) {
        // Getting the text content of the chain item
        const chainName = chain.querySelector("p").textContent.toLowerCase();

        // Checking if the chain/item name starts with the search query
        if (chainName.startsWith(query)) {
            // Displaying the chain/item if it matches the query
            chain.style.display = "block";
        } else {
            // Hiding the chain/item if it doesn't match the query
            chain.style.display = "none";
        }
    });


    if (query === "") {
        chainItems.forEach(function(chain) {
            chain.style.display = "block";
        });
    }
}

searchInput.addEventListener("input", searchChains);*/


