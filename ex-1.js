function sortCustomerName(customers) {
  let lenght = customers.length
  let swap = true
  while (swap) {
    swap = false
    for(let i = 0 ; i<lenght-1;i++) {
      if (customers[i]>customers[i+1]) {
        let temp = customers[i]
        customers[i] = customers[i+1]
        customers[i+1] = temp
        swap =true
      }
    }
    
  }
  return customers
}
customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"]
console.log(sortCustomerName(customers))

// o(n^2)
