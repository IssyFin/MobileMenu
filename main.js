// import './style.css';

function init(){
    findPositions();
    domSetup();
    addBindings();
}

// Dom cache
function domSetup(){
    let perimeter = document.getElementById("perimeter");
    for(let i=0;i<perimeter.children.length;i++){
        perimeter.children[i].classList.add("hidden");
        perimeter.children[i].classList.add("option");
    }
}

//One to five bubbles are positioned equally around the perimeter when hamburger clicked
function findPositions(){
    let perimeter = document.getElementById("perimeter");
    let count = perimeter.childElementCount;
    let children = perimeter.children;
    if(count>5||count<1){
        console.log("Error - only one to five bubbles may be displayed");
    }
    else if(count===1){
        children[0].classList.add("fortyfivedeg");
    }
    else if(count===2){
        children[0].classList.add("thirtydeg");
        children[1].classList.add("sixtydeg");
    }
    else if(count===3){
        children[0].classList.add("zerodeg");
        children[1].classList.add("fortyfivedeg");
        children[2].classList.add("ninetydeg");
    }
    else if(count===4){
        children[0].classList.add("zerodeg");
        children[1].classList.add("thirtydeg");
        children[2].classList.add("sixtydeg");
        children[3].classList.add("ninetydeg");
    }
    else if(count===5){
        children[0].classList.add("zerodeg");
        children[1].classList.add("twentytwodeg");
        children[2].classList.add("fortyfivedeg");
        children[3].classList.add("sixtysevendeg");
        children[4].classList.add("ninetydeg");
    }
    else{}
}


//Add bindings
function addBindings(){
    console.log("adding bindings);")
    let perimeter = document.getElementById("perimeter");
        let children = perimeter.children;
        console.log(children);
        perimeter.addEventListener("click",function(){
            for(let i= 0;i<children.length;i++){
                if(children[i].classList.contains("hidden")){
                    children[i].classList.remove("hidden");
                    console.log("It's hidden!");
                    console.log(children[i].classList);
                }
                else{
                    children[i].classList.add("hidden");
                    console.log("not hidden...");
                }
            }
        });
}

init();
