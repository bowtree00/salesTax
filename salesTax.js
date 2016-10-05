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

// pick the value from 'province' in salesData, then grab the value from taxRates[value]

var salesProvince = salesData.province;
var tax = taxRates[salesProvince];

var salesTax = sumSales(salesData) * tax;
//var salesTax = salesData.sales[0] * tax;

return salesTax


}



function salesTaxReport(companySalesData, salesTaxRates) {
var taxReport = {};
  // console.log("companySalesData ", companySalesData)

  for (salesInstance of companySalesData) {

    if (!taxReport[salesInstance.name]) {
      
      var salesSum = 0;

      // for (i = 0; i < salesInstance.sales.length; i++) {
      //   salesSum += Number(salesInstance.sales[i]);
      // }

      taxReport[salesInstance.name] = {
        totalSales: sumSales(salesInstance),
        totalTaxes: calculateSalesTax(salesInstance, salesTaxRates)
      }


    } else {
      
      tempObj = taxReport[salesInstance.name];
      tempObj.totalSales += sumSales(salesInstance);
      tempObj.totalTaxes += calculateSalesTax(salesInstance, salesTaxRates);

      // taxReport[salesInstance.name].totalSales += Number(salesInstance.sales[0]);
      // taxReport[salesInstance.name].totalTaxes += Number(salesInstance.sales[1]);
    }
 
  }
  
console.log("taxReport ", taxReport)

}




var results = salesTaxReport(companySalesData, salesTaxRates);


