const employees = [
  {
    name: "Atticus",
    employeeNumber: "2405",
    annualSalary: "47000",
    reviewRating: 3
  },
  {
    name: "Jem",
    employeeNumber: "62347",
    annualSalary: "63500",
    reviewRating: 4
  },
  {
    name: "Scout",
    employeeNumber: "6243",
    annualSalary: "74750",
    reviewRating: 5
  },
  {
    name: "Robert",
    employeeNumber: "26835",
    annualSalary: "66000",
    reviewRating: 1
  },
  {
    name: "Mayella",
    employeeNumber: "89068",
    annualSalary: "35000",
    reviewRating: 1
  }
];

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);

function bonusCalculations(employee) {
  let bonus = 0;

  if (employee.reviewRating === 3) {
    bonus = 0.04;
  } else if (employee.reviewRating === 4) {
    bonus = 0.06;
  } else if (employee.reviewRating === 5) {
    bonus = 0.1;
  } else {
    return {
      name: employee.name,
      bonusPercentage: 0,
      totalCompensation: employee.annualSalary,
      totalBonus: 0
    };
  }

  if (employee.employeeNumber.length === 4) {
    bonus = bonus + 0.05;
  }

  if (employee.annualSalary > 65000) {
    bonus = bonus - 0.01;
  }

  if (bonus > 0.13) {
    bonus = 0.13;
  } else if (bonus < 0) {
    bonus = 0;
  }

  return {
    name: employee.name,
    bonusPercentage: bonus * 100 + "%",
    totalCompensation:
      parseInt(employee.annualSalary) + employee.annualSalary * bonus,
    totalBonus: parseInt(employee.annualSalary * bonus)
  };
}

function loopthru() {
  for (let employee of employees) {
    console.log(bonusCalculations(employee));
  }
}

function clickDiplayButton() {
  let finalP = "";
  for (let employee of employees) {
    let holdPerson = bonusCalculations(employee);
    finalP +=
      `${holdPerson.name}     Bonus Percentage: ${holdPerson.bonusPercentage}  Total Compensation: ${holdPerson.totalCompensation}  Total Bonus: ${holdPerson.totalBonus}` +
      "<br>";
  }
  console.log(finalP);
  $("#calculatedBonusOutput").html(finalP);
}
