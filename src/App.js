import { useState, useEffect } from'react';
import './App.css';
 
/** SIEVE OF ERATOSTHENES
* For referencce, https://www.geeksforgeeks.org/sieve-of-eratosthenes/
*/
 
function createRange(size) {
  const range = Array.from({ length: +size + 1}, (val, idx) => idx).filter(num => num !== 0 && num !== 1)
 
  return range
}
 
function App() {
  /* TODO: IMPLEMENT CODE HERE */
 
  return (
    <div className="App">
      <header className="App-header">
       Sieve of Eratosthenes
      </header>
      <form onSubmit={/*TODO: IMPLEMENT */}>
        <input disabled={/*TODO: IMPLEMENT */} name="maxprime" type="number" />
        <button type="submit">Find Primes</button>
      </form>
      {/*TODO: IMPLEMENT LIST OF PRIMES AND NON-PRIMES */}
    </div>
  );
}
 
export default App;