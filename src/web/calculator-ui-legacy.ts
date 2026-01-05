import { calcule } from '../calculator/calculator.js';

let calculationCount = 0;
let lastResult: number | null = null;

function handleCalculation() {
  const inputElement = document.getElementById('calc-input') as HTMLInputElement;
  const resultElement = document.getElementById('result')!;

  if (!inputElement || !resultElement) {
    console.error('Éléments DOM non trouvés !');
    return;
  }

  const expression = inputElement.value;

  console.log(`\n=== Calcul #${calculationCount + 1} ===`);
  console.log(`Expression: ${expression}`);

  // Validation basique
  if (!expression || expression.trim() === '') {
    resultElement.textContent = 'Veuillez entrer une expression';
    resultElement.className = 'error';
    console.error('Expression vide');
    return;
  }

  const result = calcule(expression);

  const isError = result === 0 && expression !== "0" && !expression.includes("0 / 0");

  if (isError) {
    resultElement.textContent = `❌ Erreur: ${result}`;
    resultElement.className = 'error';
  } else {
    resultElement.textContent = `Résultat: ${result}`;
    resultElement.className = 'success';
  }

  calculationCount++;
  lastResult = result;

  console.log(`Résultat: ${result}`);
  console.log(`Total de calculs effectués: ${calculationCount}`);
  console.log(`Dernier résultat: ${lastResult}`);
}

function init() {
  const button = document.getElementById('calc-button');
  const input = document.getElementById('calc-input') as HTMLInputElement;

  if (!button || !input) {
    console.error('Éléments DOM non trouvés lors de l\'initialisation !');
    return;
  }

  button.addEventListener('click', handleCalculation);

  input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      handleCalculation();
    }
  });

  console.log('Calculatrice legacy initialisée');
  console.log('⚠️ ATTENTION : Ce code est volontairement mal écrit pour démonstration');
}

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', init);
}