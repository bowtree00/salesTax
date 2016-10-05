var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function sumSales(salesData) {
  var salesSum = 0;

  for (i = 0; i < salesData.sales.length; i++) {
    salesSum += Number(salesData.sales[i]);
  }

  return salesSum;
}


function calculateSalesTax(salesData, taxRates) {

var salesProvince = salesData.province;
var tax = taxRates[salesProvince];
var salesTax = sumSales(salesData) * tax;

return salesTax
}



function salesTaxReport(companySalesData, salesTaxRates) {
var taxReport = {};

  for (salesInstance of companySalesData) {
    if (!taxReport[salesInstance.name]) {  
      
      var salesSum = 0;

      taxReport[salesInstance.name] = {
        totalSales: sumSales(salesInstance),
        totalTaxes: calculateSalesTax(salesInstance, salesTaxRates)
      }
    } else {
      tempObj = taxReport[salesInstance.name];
      tempObj.totalSales += sumSales(salesInstance);
      tempObj.totalTaxes += calculateSalesTax(salesInstance, salesTaxRates);
    }
 
  }
console.log("taxReport ", taxReport)
}


var results = salesTaxReport(companySalesData, salesTaxRates);


