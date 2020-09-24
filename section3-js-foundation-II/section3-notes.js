// Execution Context
    // When the engine sees something like someFunction(), specifically the parathesis, it knows it has a task
    // It then adds the execution context to the stack and runs the function --> and so on --> then the call stack all gets popped off and the result returns

    // Stack Example: 

    //printName()
    //findName()
    //sayMyName()
    // global()

    // Anytime we run code in JS it's always going to be part of an execution context

    // Global Execution Context:
        // it gives us two things: Global object and 'this' keyword
        // window === this

// Lexical Environment
    // lexical: relating to the words or vocabulary of a language
    // where you write something
    // it looks through our code and where we write things has importance
    // its checking to see where the words are written at compile time

    // In javascript, our lexical scope (availble data + variables where the function was defined) determines our available variables. Not where the function is called (dynamic scope)

    // this first lexical enviroment we have access to is the gloval environment

// Hoisting
    // is the behavior of moving the varaibles or function declarations to the top of their respective environements during compilation phase

    console.log('1-------')

    var teddy = 'bear';

    // function declaration
    function sing() {
        console.log('ohhh la la la')
    }

        // hoisting: during the creation phase, the JS engine will look through the code and when it sees the 'var' keyword or function, it will allocate memory for it
            // variables are partially hoisting
            // functions are fully hoisted

            // its having one pass through the code and allocating memory for the program about to run

            // function expression
            var sing2 = function() {
                console.log('uhh lala')
            } 
            // only going to be run after it was defined