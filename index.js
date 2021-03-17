// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}


function wrapAdjective(highlight='*') {
  return function(param='special') {
    const wrappedAdj = highlight + param + highlight;
    return `You are ${wrappedAdj}!`
  }
}

const Calculator = {
  add: (num1, num2) => {return num1 + num2},
  subtract: (num1, num2) => {return num1 - num2},
  multiply: (num1, num2) => {return num1 * num2},
  divide: (num1, num2) => {return num1 / num2},
}

function actionApplyer(int, funcs) {
  if (funcs.length > 0) {
    return funcs.reduce((acc, func) =>  func(acc) , int)
  } else {
    return int
  }
}

// wrapAdjective("%")("a dedicated programmer") //=&gt; "You are %a dedicated programmer%!"