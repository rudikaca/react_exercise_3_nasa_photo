import React, {useEffect, useState} from "react";
import "./App.css";
// import dummyData from './dummyData';
import Card from "./components/Card/Card";
import axios from "axios";

function App() {
    const [date, setDate] = useState('2012-03-14');
    const [data, setData] = useState({});
    const [error, setError] = useState();

    // const [data] = useState(dummyData);

    useEffect(() => {
        async function fetchData() {
            axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`).then((response) => {
                if (response.data) {
                    setData(response.data);
                    // console.log(data);
                }
            })
                .catch((e) => {
                    setError(e.response.data.error.message)
                })
        }
        fetchData();
    }, [date]);

    if (!data) return <h2>Loading...</h2>;

  return (
    <div className="App">
        {data.length ? <Card data={data} date={date} setDate={setDate} /> : <h2 style={{color: 'red'}}>{error}</h2>}
    </div>
  );
}

export default App;
