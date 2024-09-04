import React from 'react'
import './Todoitems.css'

const Todoitems = ({item,id,todos,setTodos,setIpvalue,setedit}) => {
    const delfunc=(delid)=>{
        let newtodos = todos.filter((element) => delid!== element.id)
        setTodos(newtodos)
    }
    
  return (
    <div className='todoitems'>
        <h4 key={id}>{id}. {item}  
            <button onClick={()=>{delfunc(id)}} className='todoitems-delete'>Delete</button>
        </h4>
    </div>
  )
}

export default Todoitems