# pesapal-problem4


The const interpreter function evaluates the Boolean expressions that are represented using the logical operators AND, OR, and NOT. The program works by first parsing the input string into a list of tokens and then recursively evaluating the tokens using a combination of if/else statements and loops.

Syntax:

The input to the interpreter function is a string that represents a Boolean expression. The syntax of this expression is similar to that of regular mathematical expressions, with the logical operators having a specific precedence order. The operators NOT, AND, and OR have the highest, middle, and lowest precedence, respectively. The operator precedence can be overridden using parentheses.

Examples:

Consider the following Boolean expression:

T ∧ F ∨ T

This expression can be parsed into the following list of tokens:

[ 'T', '∧', 'F', '∨', 'T' ]

The interpreter function will then recursively evaluate this list of tokens by first evaluating the NOT operators, then the AND operators, and finally the OR operators. In this case, there are no NOT operators, so the program will evaluate the AND operator first.

The program will start by evaluating the expression T ∧ F. This expression can be parsed into the following list of tokens:

[ 'T', '∧', 'F' ]

The interpreter function will then evaluate the left-hand side of the operator (T) and the right-hand side of the operator (F) using the evaluate function. The left-hand side (T) evaluates to true, and the right-hand side (F) evaluates to false. The program then applies the AND operator to these two values, which results in false.

The program then evaluates the expression false ∨ T. This expression can be parsed into the following list of tokens:

[ 'false', '∨', 'T' ]

The interpreter function will then evaluate the left-hand side of the operator (false) and the right-hand side of the operator (T) using the evaluate function. The left-hand side (false) evaluates to false, and the right-hand side (T) evaluates to true. The program then applies the OR operator to these two values, which results in true.

Therefore, the final result of evaluating the original Boolean expression T ∧ F ∨ T is true.

The const interpreter function is therefore powerful and flexible for evaluating Boolean expressions using the logical operators AND, OR, and NOT. The program is easy to use and can handle a wide variety of input strings, making it a valuable resource for anyone. 


# detailed-readme
Logic Expression Evaluator
This is a simple JavaScript function that evaluates logical expressions composed of the AND, OR, and NOT operators.

Usage
To use this function, first import it into the JavaScript code. Then, call the function and pass in the logical expression you want to evaluate as a string. 


Syntax
This function supports the following operators:

AND
The AND operator returns true if and only if both of its operands are true. In this function, the AND operator is represented by the ∧ symbol. For example:

interpreter('T ∧ T'); // true
interpreter('T ∧ F'); // false
interpreter('F ∧ T'); // false
interpreter('F ∧ F'); // false
OR
The OR operator returns true if at least one of its operands is true. In this function, the OR operator is represented by the ∨ symbol. For example:

interpreter('T ∨ T'); // true
interpreter('T ∨ F'); // true
interpreter('F ∨ T'); // true
interpreter('F ∨ F'); // false
NOT
The NOT operator negates the value of its operand. In this function, the NOT operator is represented by the ¬ symbol. For example:

interpreter('¬T'); // false
interpreter('¬F'); // true
interpreter('¬(T ∧ F)'); // true
Parentheses
Parentheses can be used to group expressions and control operator precedence. For example:


interpreter('(T ∧ F) ∨ T'); // true
interpreter('T ∧ (F ∨ T)'); // true
Variables
This function also supports variables, which can be defined using the let keyword. For example:


interpreter('let x = T ∧ F; x ∨ F'); // true
In this example, the first expression defines a variable x with the value false. The second expression evaluates the expression x ∨ F, which is equivalent to (T ∧ F) ∨ F, which evaluates to true.

Limitations
This function has the following limitations:

It only supports boolean values (true and false).
It only supports the AND, OR, and NOT operators.
It has no error handling, so passing in an invalid expression may cause the function to throw an error or return unexpected results.

License
This code is licensed under the MIT License.