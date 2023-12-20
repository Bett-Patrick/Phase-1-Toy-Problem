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
function payeeCalculator(grossIncome){
    //gross Income(input)
    //range(higher range - lower range)
    //TAX rate(%)
    //Tax(range * Tax rate)
    let paye = 0
    for (let i = 0; i < 5; i++) {
        //PAYE if grossIncome is less than 24001:
        if (grossIncome<=higherLimit[0])  {
                paye = paye + parseFloat(grossIncome*taxRate[i])
                break
        }
        //PAYE if grossIncome lies in the middle ranges:
        else if (grossIncome<=higherLimit[i]) {
                paye = paye + parseFloat((grossIncome-lowerLimit[i])*taxRate[i])
                break 
        }
        //PAYE if grossIncome is greater than the highest limit:
        else if (grossIncome>lowerLimit[i] && grossIncome>higherLimit[i]) {
                paye = paye + parseFloat((higherLimit[i] - lowerLimit[i])*taxRate[i])
        }
        else{
                console.log("Entries should be a positive number!")
        }
    }
    return paye
}
console.log(payeeCalculator(grossIncome))


//NHIF Deductions Calculator function:
function nhifDeductions (grossIncome){
        let deductions = 0
        if (grossIncome>0 && grossIncome<6000) {
                deductions = 150
        }
        else if (grossIncome>=6000 && grossIncome<8000) {
                deductions = 300
        }
        else if (grossIncome>=8000 && grossIncome<12000) {
                deductions = 400
        }
        else if (grossIncome>=12000 && grossIncome<15000) {
                deductions = 500
        }
        else if (grossIncome>=15000 && grossIncome<20000) {
                deductions = 600
        }
        else if (grossIncome>=20000 && grossIncome<25000) {
                deductions = 750
        }
        else if (grossIncome>=25000 && grossIncome<30000) {
                deductions = 850
        }
        else if (grossIncome>=30000 && grossIncome<35000) {
                deductions = 900
        }
        else if (grossIncome>=35000 && grossIncome<40000) {
                deductions = 950
        }
        else if (grossIncome>=40000 && grossIncome<45000) {
                deductions = 1000
        }
        else if (grossIncome>=45000 && grossIncome<50000) {
                deductions = 1100
        }
        else if (grossIncome>=50000 && grossIncome<60000) {
                deductions = 1200
        }
        else if (grossIncome>=60000 && grossIncome<70000) {
                deductions = 1300
        }
        else if (grossIncome>=70000 && grossIncome<80000) {
                deductions = 1400
        }
        else if (grossIncome>=80000 && grossIncome<90000) {
                deductions = 1500
        }
        else if (grossIncome>=90000 && grossIncome<100000) {
                deductions = 1600
        }
        else if (grossIncome>=100000) {
                deductions = 1700
        }
        return deductions
}
console.log(nhifDeductions(grossIncome))



//NSSF Calculator function:
let pensionablePay = prompt("Enter pensionable pay: ")
function nssfDeductions(pensionablePay){
        if (pensionablePay>0 && pensionablePay<=6000) {
                return pensionablePay*0.06
        }
        else if (pensionablePay>6000 && pensionablePay<=18000) {
                return pensionablePay*0.06
        }
}
console.log(nssfDeductions(pensionablePay))

