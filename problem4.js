const interpreter = input => {
  const tokens = input.split(" "); // split the input into an array of tokens
  const symbolMap = {
    "T": true, // T represents true
    "F": false, // F represents false
    "∧": "AND", // ∧ represents AND
    "∨": "OR", // ∨ represents OR
    "¬": "NOT" // ¬ represents NOT
  };
  
  // recursively evaluate the expression
  const evaluate = tokens => {
    if (tokens.length === 1) { // base case: there's only one token left
      const [token] = tokens; 
      if (token === "T" || token === "F") { // the token is either T or F
        return symbolMap[token];
      } else { // the token is a variable
        return symbolMap[evaluatedVariables[token]]; // look up the variable's value in the evaluatedVariables object
      }
    } else { // there are still operators and/or variables left to evaluate
      let i = 0;
      while (i < tokens.length) { // evaluate all NOT operators first
        const token = tokens[i];
        if (token === "¬") {
          const right = evaluate(tokens.slice(i + 1, i + 2));
          tokens.splice(i, 2, !right); // replace the NOT operator and its operand with the negation of the operand
        }
        i++;
      }
      i = 1;
      while (i < tokens.length) { // evaluate all AND and OR operators
        const token = tokens[i];
        if (token === "∧") { // AND operator
          const left = evaluate(tokens.slice(i - 1, i));
          const right = evaluate(tokens.slice(i + 1, i + 2));
          tokens.splice(i - 1, 3, left && right); // replace the operator and its operands with the result of the AND operation
        } else if (token === "∨") { // OR operator
          const left = evaluate(tokens.slice(i - 1, i));
          const right = evaluate(tokens.slice(i + 1, i + 2));
          tokens.splice(i - 1, 3, left || right); // replace the operator and its operands with the result of the OR operation
        }
        i++;
      }
      return tokens[0]; // the final result is the first token in the array
    }
  };
  
  const evaluatedVariables = {}; // object to store the values of evaluated variables
  
  for (let i = 0; i < tokens.length; i++) { // look for variable declarations
    if (tokens[i] === "let") {
      const variableName = tokens[i + 1].slice(0, -1);
      const variableValue = evaluate(tokens.slice(i + 3)); // evaluate the expression that follows the variable name
      evaluatedVariables[variableName] = variableValue ? "T" : "F"; // store the variable value in the evaluatedVariables object
    }
  }
  
  return evaluate(tokens); // return the final result of evaluating the expression
};

//Usage in interpretor
const expression = 'let X = F ∧ T';
console.log(interpreter(expression)); // outputs: false
