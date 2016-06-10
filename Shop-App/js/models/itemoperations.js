var itemOperations={
    itemList:[],
    addToCartList:[],
    addItem:function(id,name,price,quantity,desc,rating){
        var itemObject = new Item(id,name,desc,price,quantity,rating);
        this.itemList.push(itemObject);
    },
    addToCart:function(itemName){
        var itemObject = this.search(itemName);
        if(itemObject){
            this.addToCartList.push(itemObject); 
            this.itemList=this.delete(itemName);
        }
    },
    search:function(itemName){
        var tempArray = this.itemList.filter(function(itemObject){
            return itemObject.name===itemName;
        });
        return tempArray.length==1?tempArray[0]:null;
    },
    delete:function(itemName){
        return this.itemList.filter(function(itemObject){
            return itemObject.name!=itemName;
        });
    }
}