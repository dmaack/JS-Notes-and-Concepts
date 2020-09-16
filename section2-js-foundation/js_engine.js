// JavaScript Engine :
    // allows you to give machine the JS file and understand what to tell the computer what to do
    // in a sense youre creating a translator for the computer

    // ECMAScript Engines: programs written by programers that execute source code
    // V8: written in C++
const isHappy = true;

// Who created the first JS engine?
    // Brendan Eich - SpiderMonkery - Firefox still uses it

// Inside the Engine:
    // File --> Parser --> AST (Abstract Syntax Tree) --> Intrepreter --> Profiler --> Compiler --> Optimized Code

    // Writing our own engine 
    function jsengine(code) {
        return code.split(/\s+/)
    }

    console.log(jsengine('var a = 5'))

    // What problem do you see with everbody creating their own JS Engine?
        // Would be chaos without some sort of standardizaion
        // Tells engine creators how the engine should work

// Interpreter + Compilers:
    // There are 2 ways of translating programming languages
        // Interpreter: translate and read files line by line on the fly

        function someCalculation(x, y) {
            return x + y;
        }

        for (let i = 0; i < 1000; i++) {
            someCalculation(5,4)
        }
        
        // Compliler: it works ahead of time to create a translation of code we just wrote and compiles down to a lanuage that the machine understands
        
        // Pros and Cons:
            // Interpreters are quick to get up and running
                // when you run the same code more than once (for loop), it can get really slow
            // Compilers can take more time to get set up but its smart to enough that when it sees something like a for loop, it just simplifies it. -- Doesnt need to repeat the translation, this is call optimization

        // Can you get the best of both worlds?
            // JIT Compiler : Just in time compilations
            // V8 engines: 
                // the code gets sent to the interpreter (ignition) and it takes the AST and spits out bytecode --> which is able to be interpreted. THen the profiler (monitor) and makes notes on how we can optimize the code, if it can be optimized, it's passed off to the compiler and then the complier takes the code and modifies it by optimizating it and is then used 
    
// Is JavaSctipy an interpreted language? Yes, initially -- but now we also use compilers - it depends on the implementation

// Writing Optimized Code:
        // in order to help the JS engine
            // we want to be carful with:
                // eval()
                // arguments
                // for in
                // with
                // delete
            // Main reasons these can make our code less optimized
                // inline caching:

                    function findUser(user) {
                        return `found ${user.firstName} ${user.lastName}`
                    }

                    const userData = {
                        firstName: 'Johnson',
                        lastName: 'Junior'
                    }

                    findUser(userData)

                    // hidden classes:

                    function Animal(x, y) {
                        this.x = x;
                        this.y = y;
                    }

                    const obj1 = new Animal(1,2)
                    const obj2 = new Animal(3,4)

                    obj1.a = 30;
                    obj1.b = 100;
                    obj2.b = 30;
                    obj2.s = 100;

// We should write code that is predictable to both the computer/compiler and programmer

