class Mkulima{
      constructor(){
      this.vendors=[];
      this.orders=[];
      this.products=[];
      this.farms=[];
    }
    addFarm(farmId,name,farmer,phone,adress){
      return this.farms.push({farmId,name,farmer,phone,adress});
    }
    removeFarm(farmId){
      let remove=this.farms.find(remove=>remove.farmId==farmId)
      return delete this.farms[remove]
    }
    updateFarm(farmId,name,farmer,phone,adress){
      let shamba=this.farms.find(shamba=> shamba.farmId==farmId)
      shamba={
        farmId:farmId,
        name:name,
        farmer:farmer,
        phone:phone,
        adress:adress
      }
      return shamba
  }
    getFarm(farmId){
      let shamba1=this.farms.find(shamba1 => shamba1.farmId == farmId);
      return shamba1;
  }
    addProduct(productId,name,price){
      return this.products.push({productId,name,price});
    }
    removeProduct(productId){
      let product=this.products.find(product => product.productId ==productId);
      return delete this.products[product];
    }
    updateProduct(productId,name,price){
      this.products.name=name;
      this.products.price=price;
      this.products.productId=productId;

  let updates ={productId,name,price};
   return updates;
  }
  getProduct(productId){
    let product=this.products.find(product => product.productId === productId);
    return product
  }
  printProducts(){
    for(let items of this.products){
      console.log(items.name + " " + items.price);
    }
  }
  calculate_order_cost(productId,Quantity){
    let cost=this.products.find(cost => cost.productId== productId);
    return cost.price*Quantity;
  } 
  } 
  let garden= new Mkulima([],[],[]);
  console.log(garden.addFarm(600,"Njao Farm","Kimani","0723456789","Kijabe"));
  console.log(garden.addFarm(800,"Kara farm","Mbugua","0722345897","Kiambu"));
  console.log(garden.removeFarm(800));
  console.log(garden.getFarm(600));
  console.log(garden.updateFarm(800,"Kara farm","Kamau","0765432178","Kiambu"));
  console.log(garden.farms);
  console.log(garden.addProduct(500,"Cheese",80));
  console.log(garden.addProduct(800,"Ghee",70));
  console.log(garden.removeProduct(800))
  console.log(garden.updateProduct(700,"Butter",100));
  console.log(garden.getProduct(800));
  console.log(garden.products);
  garden.printProducts();
  console.log(garden.calculate_order_cost(500,2));
  console.log (garden.getFarm(800));