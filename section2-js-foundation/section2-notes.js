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

// Why not just use machine code from the beginning?
    // 

// Call Stack and Memory Heap

    // Memory Heap: to store and write information - where the memory allocation happens

    // Call Stack: to keep track of where we are in the code - where the engine keeps track of where your code is in the execution

    const number = 610; // allocate memory for a number
    const string = 'some text'; // allocate memory for a string 
    const human = { // allocate memory for an object... and it's values
        first: 'Dominique',
        last: 'Maack'
    }

    function calculate() {
        const sumTotal = 4 + 5;
        return sumTotal;
    }

    calculate()

    // a region in memory which operates in first in last out mode

    // Garbage Collection:
        // it uses the mark and sweep alogrithm --> mark what you need, sweep what you dont
    
    // Memory Leaks:
        let array = [];

        // for ( let i =5; i > 1; i++) {
        //     array.push(i - 1) // what happens here is an infinite loop
        // }
        // the garabage collection wasnt keeping up and crashed

        // 3 Common Memory Leaks:
            // Global Variables
                // want to avoid having too many global variables
                // youre adding more pieces of memory 
            // Event Listeners
                var element = document.getElementById('button');
                element.addEventListener('click', onClick)
                // im not removing the event listener off the page and the memory keeps getting added to and creates a memory leak
            // setInterval
                // referecing objects...

    // Memory is limited! So to write efficient code, it's important to not have stack overflow or memory leaks

// Single Threaded:

    // It means that only one set of instructions is executed at one time
    // JS is synchronous -- only one thing can happen at a time

    // What problems do you see with synchronoys code?
        // It makes it difficult if we have long running tasks
        // imagine youre running twitter --> and they had a function that took 5sec to complete --> you wouldnt be able to click or scroll or use functionality until the function was complete

    // We dont just use the JS Engine, we also use the JS Runtime to allow us to run asynchronous code

// JS Runtime: 

    // The Web browser is working in the background (using the Web API) 
        // This comes with the browser (Chrome, Firefox, Safari, etc)
        // These are applications that can do a vairety of things, http requests
        // They are asynchronous --> This allows us to run our callstacks in the mean time
    // You have items on the call stack and as soon as something related to the Web API is brought up, it sends to Web API, processess it and then sends it back with a callback, and as soon as the call stack is free, the callback will be pushed onto the call stack

    console.log('1')
    setTimeout(() => {console.log('2'), 1000});
    console.log('3')

    //JS Engine vs Runtime
        // Engine: is like the conductor, he can read and make sense of it
        // Runtime: is like the whole package, a musician that has all the tools to play music (music and coductor)

// Node.js
    // A JS Runtime -- a C++ program, node.exe --> it provides the runtime for us
    // Server side platform --> it uses JS but outside the browser and allows us to have the same single threaded model and any asynchronous process can be handled the same way as WEB API JS Runtime
    //

    // Exercise: 
        // This recursive function creates a stack overflow. How can you fix this code by still keeping the recursive call around, but only adding something that you have learned in this section to not cause this stack overflow.

    //fill array with 60000 elements
        const list = new Array(60000).join('1.1').split('.');
        
        function removeItemsFromList() {
            var item = list.pop();
        
            if (item) {
                // removeItemsFromList();
                setTimeout(removeItemsFromList, 0)
            }
        };
        
        removeItemsFromList();

        list

// Overview:
        // JS Engine: CallStack and Memory Heap
            // Stack keeps track of where we are in the program
        // Single Threaded Model: We can use the JS Runtime to have threads in the background (on browser or outside browser (Node)) 
        

    


