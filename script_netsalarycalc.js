
//calculayes the net salary
function calculateNetSalary(basicSalary, benefits) {
    // Defines tax rates and thresholds for Kenya
    const taxRates = [//tax rates to be used 
      { threshold: 12298, rate: 0.1 },
      { threshold: 23885, rate: 0.15 },
      { threshold: 35472, rate: 0.2 },
      { threshold: 47059, rate: 0.25 },
      { threshold: 58646, rate: 0.3 },
      { threshold: Infinity, rate: 0.35 },
    ];
  
    // Calculates gross salary
    const grossSalary = basicSalary + benefits;
  
    // Calculates NHIF deductions (assuming a fixed rate)
    const nhifRate = 500; // Adjust this rate based on NHIF regulations
    const nhifDeductions = nhifRate;
  
    // Calculates NSSF deductions (assuming a fixed rate)
    const nssfRate = 200; // Adjust this rate based on NSSF regulations
    const nssfDeductions = nssfRate;
  
    // Calculates taxable income
    const taxableIncome = grossSalary - nhifDeductions - nssfDeductions;
  
    // Calculates payee (tax)
    let payee = 0;
    for (const { threshold, rate } of taxRates) {
      if (taxableIncome <= threshold) {
        payee += taxableIncome * rate;
        break;
      } else {
        payee += (threshold - 0) * rate;
      }
    }
  
    // Calculates net salary
    const netSalary = grossSalary - nhifDeductions - nssfDeductions - payee;
  
    return {
      grossSalary,
      nhifDeductions,
      nssfDeductions,
      payee,
      netSalary,
    };
  }
  
  