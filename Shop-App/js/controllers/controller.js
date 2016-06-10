window.addEventListener("DOMContentLoaded",function(){
   doAjax(); 
});
window.addEventListener("load",function(){
    
       
});

function addToCart(event){
    
    var value = event.srcElement.getAttribute("value");
    itemOperations.addToCart(value);
    clearList();
    print(itemOperations.itemList,'L');
    print(itemOperations.addToCartList,'A');
    bindEvents("addButtons",addToCart);
    bindEvents("removeButtons",deleteToCart);
    //alert("Add Call "+value);
}

function clearList(){
    document.getElementById("items").innerHTML="";
    document.getElementById("addToCartItems").innerHTML="";
}

function print(itemList,cartType){
    var ul ;
  itemList.forEach(function(itemObject){
      var button;
            var li = document.createElement("li");
            var img = "<img src='"+itemObject.url+"'>";
            if(cartType==='A'){
             button = "<button class='removeButtons' value='"+itemObject.name+"'>Remove From Cart</button>";
                ul = document.getElementById("addToCartItems");
            }
            else if(cartType==='L'){
                button = "<button class='addButtons' value='"+itemObject.name+"'>Add to Cart</button>"; 
                ul = document.getElementById("items");
            }
                li.innerHTML="Id "+itemObject.id+ " Name "+itemObject.name+" Price "+itemObject.price+img+button;
            ul.appendChild(li);
        });
    
}

function bindEvents(className,fn){
    var addButtons = document.getElementsByClassName(className);
   Array.prototype.forEach.call(addButtons,function(addBt){
     console.log("Inside Loop "+addBt);
       addBt.addEventListener("click",fn);                  
    }) ;  
   
}


