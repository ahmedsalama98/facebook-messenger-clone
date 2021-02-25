import './App.css';
import React , {useEffect , useState}  from  'react';
import { Button , FormControl , InputLabel , Input  } from '@material-ui/core';
import Message from "./components/Message";
import {db} from "./firebase";
import firebase from "firebase";
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';



function App() {

const [input , setinput]=useState("");
const [username , setusername]=useState("");
const [messeges , setmesseges]=useState([]);


const addmessge = async(e)=>{

  e.preventDefault()

  if(input.trim() !==""){

await db.collection("messeges").add({
  username : username ,
  text : input,
  timestamp:firebase.firestore.FieldValue.serverTimestamp()
  })
    setinput("");
  }

}


useEffect(()=>{

  let prom =prompt("inter your name");


if(prom===null || prom.trim()===""){
  setusername("guest")
}else{
  setusername(prom)
}
  let unsubscribe = db.collection("messeges").orderBy("timestamp" ,"desc").onSnapshot(snap =>{

    let fetched = snap.docs.map(doc =>{
      return {...doc.data(),id:doc.id}
    })
    setmesseges([...fetched])
  })


return unsubscribe;
},[])


  return (

    <div className="message-app">
    <div className="container">
    <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100"></img>
    <h1>Hello  { username.toUpperCase()}</h1>

    <div className="new-messege-area">
    <form  onSubmit={addmessge}>
        <FormControl>
        <Input type="text"  value={input}  onChange={e => setinput(e.target.value)}  placeholder="inter a message ..." />

        <IconButton variant="contained" color="primary"  type="submit" disabled={!input}> 
        {<SendIcon />}
        </IconButton>
 
        </FormControl>
    </form>

 

    </div>
  


    <div className="messeges-box">

    <FlipMove>

    {messeges.map((message , inedx) =>
    <Message username={username} message={message} key={message.id}/>
    )}
    
    </FlipMove>

    </div>


    </div>
    </div>
  );
}

export default App;
