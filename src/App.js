import React, {useEffect, useState} from "react";
import "./App.css";
import dummyData from './dummyData';
import Card from "./components/Card/Card";

function App() {
    const [data] = useState(dummyData);

    useEffect(() => {
        // axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY').then((response) => {
        //     setData(response.data);
        //     console.log(data);
        // })
        console.log(data);
    }, []);

    if (!data) return <h2>Loading...</h2>;

  return (
    <div className="App">
        <Card data={data} />
    </div>
  );
}

export default App;
