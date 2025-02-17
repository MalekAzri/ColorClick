var button=document.querySelector(".button");
var list=document.querySelector(".list");
var c=0;
button.addEventListener("click",function(e){
    c++;
    let nod=document.createElement("li");
    nod.textContent=`Item${c}`;
    nod.classList.add("item","list-group-item","list-group-item-action","border");
    list.appendChild(nod);
})
list.addEventListener("click",function(e){
    console.log(getRandomColor());
    e.target.style['background-color']=getRandomColor();
    

})
list.addEventListener("dblclick",function(e){
    if (e.target && e.target.nodeName === "LI") {  // Check if the target is an <li> element
        list.removeChild(e.target); // Remove the clicked <li> element
    }
}
)

var savedPosition=null;
var close=document.querySelector(".closed");
close.addEventListener("click",function(e){
    if(close.classList.contains("closed")){
        var rmq=document.querySelector(".container");

        rmq.remove();
        close.classList.remove("closed");
        close.classList.add("opened");
        close.textContent = "Open"; 
    }
    else{
        let nod=document.createElement("div");
        nod.innerHTML=`
        <div class="container mt-5">
        <div class="border border-3 border-black rounded p-4">
            <p class="lead">
                <strong>Here are the things you can do:</strong>
                <ul>
                    <li>Click 'Add element' to add a row.</li>
                    <li>Click  a row to change its color randomly.</li>
                    <li>Double-click a row to remove it.</li>
                </ul>
            </p>
        </div>
    </div>
        `
        nod.classList.add("container" ,"mt-5");
        
        document.body.insertBefore(nod,close);
        close.classList.remove("opened");
        close.classList.add("closed");
        close.textContent = "Close";
    }


}
)



function getRandomColor(){
    let hexa="0123456789ABCDEG";
    let couleur="#";//une couleur est une combinaison de 6 chiffres hexa qui commence avec #
    for(let i=0;i<6;i++){
        couleur+=hexa[Math.floor(Math.random()*16)];

    }
    return couleur;

}