import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [items, setItems] = useState([]);
    const [name, setName] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/items")
            .then(res => setItems(res.data))
            .catch(err => console.log(err));
    }, []);

    const addItem = () => {
        axios.post("http://localhost:5000/items", { name })
            .then(res => setItems([...items, res.data]))
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h1>MERN Without MongoDB</h1>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={addItem}>Add Item</button>
            <ul>
                {items.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    );
}

export default App;
