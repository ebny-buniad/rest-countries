import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/Countries'

const loadCountries = fetch("https://restcountries.com/v3.1/all")
  .then(res => res.json());

function App() {

  const countriesPromise = loadCountries;

  return (

    <>
      <Suspense fallback={<h5>Data Loading...</h5>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
