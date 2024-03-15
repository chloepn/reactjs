import Hello from "./components/Hello.jsx"
import Fruits from "./components/Fruits.jsx"
import Message from "./components/Message.jsx"
import Counter from "./components/Counter.jsx"
import Form from "./components/Form.jsx"
function App() {
    const personInfo ={
        name :"Rob",
        message:"hi",
        emoji: ":)"
    }
  return (
    <div>
        <Hello person = {personInfo}/>
        <Fruits/>
        <Message/>
        <Counter/>
        <Form/>
    </div>
  );
}
export default App;
