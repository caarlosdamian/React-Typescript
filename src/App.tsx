import React, { useState } from "react";
import "./App.css";
import AddToList from "./components/AddToList";
import List from "./components/List";

 export interface Istate {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<Istate["people"]>([
    {
      name: "LeBron James",
      url: "https://ca-times.brightspotcdn.com/dims4/default/8f80818/2147483647/strip/true/crop/2928x1952+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Faf%2F3d%2F9e2e950b4c679d46cd72c51989a9%2Faptopix-hawks-lakers-basketball-83978.jpg",
      age: 25,
      note: "Probando ando ",
    },
  ]);

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
