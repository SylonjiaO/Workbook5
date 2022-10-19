let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 1.79},
    {product: "Snickers", price: 1.79},
    {product: "Skittles", price: 3.79},
    {product: "Cow Tails", price: 1.79},
    // TODO: fill the array with 10 candies of various
    // price ranges
   ];

   let cheapOptions = products.filter((product) => product.price < 4.00 );
 console.log(cheapOptions); 

 console.log(`-----------------------`);

 let mmCandies = products.filter((p) => p.product.includes("M&Ms"));
 console.log(mmCandies);

 console.log(`-----------------------`);

 let svenskFisk = products.find((sweds) => sweds.product.includes("Swedish Fish"))
 console.log(svenskFisk.length != null);

