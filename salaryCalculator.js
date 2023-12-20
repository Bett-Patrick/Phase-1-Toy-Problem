// Write a program whose major task is to 
// calculate an individual’s *Net Salary* 
// by getting the inputs of *basic salary* and *benefits*. 
// Calculate the *payee* 
// (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 


let basicSalary = parseInt(prompt("Enter your basic salary: "))
let benefits = parseInt(prompt("Enter benefits: "))

//Taxable Income(gross salary) = (gross salary + Allowances + all benefits)
//All Deductions = (PAYE + *fringeBenefitTax* + NHIF + NSSF + Housing Levy)
//Allowances(input)
//gross salary(bs + benefits)
//net salary = (gross salary - All deductions)


        /**Solution**/
let grossIncome = basicSalary + benefits

//PAYE Rates Object:
const payeRates = {
        range1 : [0,24000,0.1],
       
        range2 : [24000,32333,0.25],
        
        range3 : [32333,500000,0.30],
        
        range4 : [500000,800000,0.325],
        
        range5 : [800000,grossIncome,0.35]
}
console.log(Object.keys(payeRates))
console.log(Object.values(payeRates))


let outerKeys = Object.keys(payeRates)
console.log(outerKeys)//returns array of the keys

let objectValues = []
let objectValue = []
let lowerLimit = []
let higherLimit = []
let taxRate = []

//Traverse outerKeys array and clg its values
for (let i = 0; i < outerKeys.length; i++) {
        let objectKey = outerKeys[i]
        objectValues.push(payeRates[objectKey])
        lowerLimit.push(objectValues[i][0])
        higherLimit.push(objectValues[i][1])
        taxRate.push(objectValues[i][2])
}

console.log(objectValues)
console.log(lowerLimit)
console.log(higherLimit)
console.log(taxRate)


//payee calculator function:

function payeeCalculator(taxableIncome){
    //gross Income(input)
    //range(higher range - lower range)
    //TAX rate(%)
    //Tax(range * Tax rate)
    let paye = 0
    for (let i = 0; i < 5; i++) {
        if (grossIncome<=higherLimit[0])  {
                paye = paye + parseFloat(grossIncome*taxRate[i])
                break
        }
        else if (grossIncome<=higherLimit[i]) {
                paye = paye + parseFloat((grossIncome-lowerLimit[i])*taxRate[i])
                break 
        }
        else if (grossIncome>lowerLimit[i] && grossIncome>higherLimit[i]) {
                paye = paye + parseFloat((higherLimit[i] - lowerLimit[i])*taxRate[i])
        }
        else{
                console.log("Entries should be a positive number!")
        }
    }
    return paye
}
console.log(payeeCalculator())

