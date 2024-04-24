import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: () => `$${budget.income}`,
    getIncomeInEuros: () => `${budget.income} euros`,
  };

  return fullBudget;
}
