import React from "react"


const ListItem = ({items,setItem}) => {

  const handleLi=(key)=>{
  
  
  const filterItems = items.filter(item=>item.key!==key) 
  setItem(filterItems)
   
}
const handleCheck=(key)=>{
 const checkItem = items.map(item=>{
   if(item.key===key){
     return{
       ...item,completed:!item.completed
     }
    
    }
    return item
  }
    
    )
     setItem(checkItem)
    //  console.log(checkItem)
     console.log(checkItem)
    
        
          

        

     
    // console.log(items[0].completed)
}




  const list= items.map(item=>{
    return(
      <div key={item.key} className="border">
      <li className={`li ${item.completed? "active":""}`}   key={item.key} >{item.inv}</li>
      <div className="btn">
      <button className="delbutton"onClick={()=>handleLi(item.key)}>DEL</button>
      <button className="checkbtn"  onClick={()=>handleCheck(item.key)} >Check</button>
      </div></div>
    )}
    )
    
  return ( 
    <div className="item">
    {list}
    </div>
   );
  }
  
export default ListItem;


      