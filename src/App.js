import Item from "./components/DragItem";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import {useState} from 'react';

function App() {
  const [cardList, setCardList] = useState([
    '1', '2', '3',
  ])

  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        {cardList.map((data, i)=>{
          return (<Item key={data} index={{index : i, item : 'card'}} data={data} move={(ii ,i)=>{
            setCardList((prev)=>{
              let newList = [
                ...prev,
              ]
              newList.splice(i, 1);
              console.log(newList);
              newList.splice(ii, 0, data);
              console.log(newList);
              return newList
            })
          }} />)
        })}
      </DndProvider>
    </div>
  );
}
export default App;