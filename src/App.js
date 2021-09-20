import './App.css';
import Countries from './Component/Countries/Countries';






function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}








/* function Countries() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)

      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (
    <div>
      <h1>Traveling Arount The World!!!!!</h1>
      <h3>Countries Available: {countries.length} </h3>
      {
        countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
      }
    </div>
  )
}
function Country(props) {
  return (
    <div>
      <h1>Name: {props.name} </h1>
      <h3>Capital: {props.capital}</h3>
    </div>
  )
} */
export default App;
