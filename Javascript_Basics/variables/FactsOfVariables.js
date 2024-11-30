var productName = "Samsung galaxy A32", productPrice = 23000;
console.log(productName, productPrice);

// Fact 1: Initialization of multiple variables in a single line

// Fact 2: Variables declared using 'let' and 'var' are reassignable and mutable, but 'const' is immutable.

var productName = "Redmi 23"; // var allows redeclaration
productPrice = 50000;         // We are reassigning 'productPrice', no 'let' keyword needed here
console.log(productPrice, productName);

/*
Here are key facts about variables in JavaScript, covering the use of `var`, `let`, and `const`:

### 1. **Declaring Variables**
   - You can declare variables using `var`, `let`, or `const`.
   - `var` and `let` are used for variables that can be reassigned.
   - `const` is used for variables that cannot be reassigned after their initial assignment.

### 2. **Hoisting**
   - **`var`** declarations are **hoisted** to the top of their scope (global or function). However, the initialization stays in place.
     - Example:
       ```javascript
       console.log(x); // undefined
       var x = 5;
       ```
   - **`let`** and **`const`** are also hoisted but are not initialized. They remain in a **"temporal dead zone"** until the actual declaration.
     - Example:
       ```javascript
       console.log(y); // ReferenceError
       let y = 10;
       ```

### 3. **Scope**
   - **`var`** is function-scoped, meaning it is only available within the function where it's declared.
     - Example:
       ```javascript
       if (true) {
         var x = 5;
       }
       console.log(x); // 5 (even though declared inside the if block)
       ```
   - **`let`** and **`const`** are block-scoped, meaning they are limited to the block `{}` in which they are declared.
     - Example:
       ```javascript
       if (true) {
         let y = 10;
       }
       console.log(y); // ReferenceError: y is not defined
       ```

### 4. **Reassignability**
   - **`var`** and **`let`** variables can be reassigned after their initial declaration.
     - Example:
       ```javascript
       var x = 5;
       x = 10; // allowed

       let y = 20;
       y = 30; // allowed
       ```
   - **`const`** variables cannot be reassigned after their initial value is set.
     - Example:
       ```javascript
       const z = 15;
       z = 20; // TypeError: Assignment to constant variable
       ```

### 5. **Redeclaration**
   - **`var`** allows for redeclaration in the same scope.
     - Example:
       ```javascript
       var a = 1;
       var a = 2; // No error, redeclaration is allowed
       ```
   - **`let`** and **`const`** do not allow redeclaration in the same scope.
     - Example:
       ```javascript
       let b = 3;
       let b = 4; // SyntaxError: Identifier 'b' has already been declared

       const c = 5;
       const c = 6; // SyntaxError: Identifier 'c' has already been declared
       ```

### 6. **Immutability**
   - **`const`** ensures that the variable binding is immutable, but the contents of objects or arrays declared with `const` can still be modified.
     - Example:
       ```javascript
       const obj = { name: "John" };
       obj.name = "Doe"; // Allowed
       console.log(obj.name); // "Doe"
       ```
     - However, you cannot reassign the entire `obj` variable:
       ```javascript
       obj = { name: "Alice" }; // TypeError
       ```

### 7. **Global Scope Behavior**
   - **`var`** declared in the global scope becomes a property of the global object (`window` in browsers).
     - Example:
       ```javascript
       var globalVar = 10;
       console.log(window.globalVar); // 10
       ```
   - **`let`** and **`const`** do not create properties on the global object.
     - Example:
       ```javascript
       let globalLet = 20;
       console.log(window.globalLet); // undefined
       ```

### 8. **Initialization Requirement**
   - **`var`** can be declared without initialization, and its value is `undefined` by default.
   - **`let`** can also be declared without initialization, but accessing it before initialization leads to a `ReferenceError` due to the temporal dead zone.
   - **`const`** must be initialized at the time of declaration, or it will throw a `SyntaxError`.

### 9. **Best Practices**
   - Use `let` when the variable needs to be reassigned.
   - Use `const` for variables that should not be reassigned.
   - Avoid using `var` because of its function-scoped behavior, which can lead to bugs in block-scoped contexts like loops and conditionals.

By understanding these facts, you can choose the appropriate keyword (`var`, `let`, or `const`) depending on the scope, reassignability, and behavior you want for your variable.
*/