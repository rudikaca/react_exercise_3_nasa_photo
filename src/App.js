import React, {useEffect, useState} from "react";
import "./App.css";
// import dummyData from './dummyData';
import Card from "./components/Card/Card";
import axios from "axios";

function App() {
    const [date, setDate] = useState('2012-03-14');
    const [data, setData] = useState({});
    // const [data] = useState(dummyData);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`).then((response) => {
            setData(response.data);
            console.log(data);
        })
        // console.log(data);
    }, [date]);

    if (!data) return <h2>Loading...</h2>;

  return (
    <div className="App">
        <Card data={data} date={date} setDate={setDate} />
    </div>
  );
}

export default App;
