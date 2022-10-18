let ticketPackage = [
    {ticketType: "Senior", price: 49.99, numTickets: 1},
    {ticketType: "Adult", price: 79.99, numTickets: 2},
    {ticketType: "Child", price: 29.99, numTickets: 3},
   ];
   
   function getTotalCost(currentTotal, arrayElement) {
    return currentTotal + 
    (arrayElement.price * arrayElement.numTickets);
   }
   let sum = ticketPackage.reduce(getTotalCost, 0);
    // sum contains 299.94