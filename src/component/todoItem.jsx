import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todoAction } from '../store/todoSlice';


const TodoItem = (props) => {

const Todos=useSelector(state => state.todo.todoList);  
const delete1=useSelector(todoAction.deleteTodo);
const complete=useSelector(todoAction.done);
const updateTodo=useSelector(todoAction.updateTodo);
const dispatch=useDispatch();

const [isEditing,setIsEditing]=useState(false);


const editTaskInputRef = useRef();
const editCategoryRef=useRef();

const [categoryOption2,setCategoryOption2]=useState('');
const [editValue1,setEditValue1]=useState('');




console.log("props.date:",props.date);



const addEditCategory=(e)=> {
  // setValue1(e.target.value);
   const newCategory=
      {
          value:editValue1,
          lable:editValue1
  }
  ;
   
  // console.log("e.target.value:",e.target.value);
  console.log("newCategory:",newCategory);
  console.log("newCategory.value:",newCategory.value);
  console.log("newCategory.label:",newCategory.lable);
  // console.log("category3:",category);
  
  if(editValue1.trim() !=='' && editValue1 !=categoryOption2){
  props.setCategory(prev=>([newCategory,...prev]) );
  // props.setTodoList(prev=> ([...newTodoList,...prev]));
  setEditValue1('');
  }
  else {
      alert(" یک کتگوری جدید وارد کنید");

  }
}


const doComplete=() => {
    
    // dispatch(todoAction.done(!props.done));
    // dispatch(done(!props.done));
    
    dispatch(todoAction.done({id:props.id,done:props.done}));
    
}


// console.log("props.id:",props.id);
// console.log("props.title:",props.title);
// console.log("props.done:",props.done);
console.log("props.category:",props.category);




const deletetodo=() =>{

    // dispatch(deleteTodo(props.id));
    // dispatch(todoAction.deleteTodo(props.id));

    dispatch(todoAction.deleteTodo({id:props.id}));
    // dispatch(delete1({id:props.id}));
}


const isEditingHandler = (idTodo) => {
    
    console.log(isEditing, "isediting");
    setIsEditing(!isEditing);


  };



  const updateTodoList = () => {
    console.log(isEditing, "isediting");
    const enterEditTask = editTaskInputRef.current.value;
    // const enterEditCategory=editCategoryRef.current.value;
    // console.log(enterEditTask, "enterref");
    console.log("categoryOption2:",categoryOption2);
     dispatch(todoAction.updateTodo({editTask:enterEditTask,editCategory:categoryOption2,id:props.id}))

    // const newTodoList = [...todoList];

    // const updateTodo = newTodoList.find((item) => item.id === idTodo);

    // // updateTodo.title=event.target.value;

    // // updateTodo.title=enterEditTask;
    // updateTodo.title = value;
    // setTodoList(newTodoList);
    // console.log(todoList, "tdedit");

    // props.data.title=enterEditTask;
    // props.setTodoList(prev => [...prev]);
    console.log(event.target.value, "eventvaluedit");


    // const result=listtodos.filter(f=> f.id===idTodo);
    // listtodos.title=enterEditTask;
    // setTodoList();
    // setTodos(prev)

    setIsEditing(false);
  };



  const CanselEdit=() => {

    setIsEditing(false);
  }

console.log("props.category1:",props.category1);






    return (
        <div>
          
          <div>{props.id}</div>
          <div key={props.id}
        style={{ textDecoration: props.done  ? "line-through" : ""}}>
             {isEditing ? (
            <div>
              <input
                type="text"
                defaultValue={props.title}
                ref={editTaskInputRef}
              />
                <div>
         
         <label htmlFor='category2'>Enter New Category:</label> 
         <input  type='text' name="category2" id="category2" placeholder='enter new category' onChange={(e) =>setEditValue1(e.target.value)} value={editValue1}  />
         <button onClick={addEditCategory}>add new category to list</button>
         <select  name='categoreis2' id='categoreis2'  value={categoryOption2}    onChange={e =>setCategoryOption2(e.target.value) }   >
         <option value={""}   selected>choose a category</option>
           {props.category.map(op =>(
               
                   <option key={op.value}  value={op.value} >{op.lable}</option>
               
              
           ))}
         </select>
       
          </div>
              <button onClick={ updateTodoList}>Update</button>
              <button onClick={ CanselEdit}>Cancel</button>
            </div>
          ) : (
            <div>
               <input style={{color:"green",backgroundColor:"red"}} type="checkbox" checked={props.done}  onChange={doComplete} />
               
               <div>{props.title}</div>
               <div>{props.category1}</div>
               <div>{props.date}</div>
               <button  onClick={()=> !props.done &&  deletetodo()}  >delete</button>
               <button  onClick={() =>!props.done && isEditingHandler(props.id)}>Edit</button>
            </div>
          )}
          </div>
        </div>
    );
}

export default TodoItem;
