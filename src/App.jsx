import AddTodo from './component/addTodo';
import React, { useState } from "react";
import TodosList from './component/todosList';
import { connect, useDispatch, useSelector } from 'react-redux';
import { todoAction } from './store/todoSlice';
import { createSelector } from '@reduxjs/toolkit';

import { VisibilityFilters } from './store/filterSlice';
import TodoItem from './component/todoItem';

function App () {


  

  const [inputValue,setInputValue]=useState("");
  
  const todoList=useSelector(state => state.todo.todoList);
  const todos=useSelector(state => state.todo.todos);
  const clearAll=useSelector(todoAction.clearAll);
  const searchTodo=useSelector(todoAction.searchTodo);
  const dispatch=useDispatch();


  const [category,setCategory]=useState([]);
  const [categoryOption,setCategoryOption]=useState('');
  

  const [isFilterd,setIsFilterd]=useState(false);
  const [value1,setValue1]=useState('');
  const [editValue1,setEditValue1]=useState('');

  const [inputSearch,setInputSearch]=useState('');
  const [sortType,setSortType]=useState('ascending');
  const [sortByField,setSortByField]=useState('title');

  const [result,setResult]=useState();
  const [sortResult,setSortResult]=useState([]);


  // console.log("todolist:",todoList);
  // console.log("todoList.id:",todoList.id);
  // console.log("todoList.title:",todoList.title);
  // console.log("todoList.done:",todoList.done);

  const selectFilter=useSelector(state =>state.VisibilityFilters);

  // const selectVisibleTodos=createSelector(
  //   [todoList,selectFilter],
    
  //     (todos,filter) => {

  //       switch(filter) {
  //         case VisibilityFilters.SHOW_ALL :
  //           return todos

  //           case VisibilityFilters.SHOW_COMPLETED :
  //            return todos.filter(item => item.done)


  //             case VisibilityFilters.SHOW_ACTIVE :
  //             return  todos.filter(item => !item.done )
          
  //             default:
  //               throw new Error('Unknown filter: ' + filter)
        


  //     }

  //   }
    
  //   )

  //   const mapStateToProps = state => ({
  //     todos: selectVisibleTodos(state)
  //   })
    
  //   // const mapDispatchToProps = { toggleTodo };
    
  //   // export default connect(
  //   //   mapStateToProps,
  //   //   mapDispatchToProps
  //   // )(TodoList);


  console.log("apptodos:",todos);
  console.log("apptodolist:",todoList);
  console.log("isFilterd:",isFilterd);

  const sortTodoList=(e) => {

    setSortType(e.target.value);
   
    console.log("e.target.value:",e.target.value); 
    dispatch(todoAction.sortTodoList({sortType:sortType}));
    
  
  }
  console.log("sortTypeTodo:",sortType); 


  const clearall=()=> {

    // setTodoList([]);
    // setTodos([]);

    dispatch(todoAction.clearAll());
   }

   const deleteFilter=()=> {

    dispatch(todoAction.deleteFilter());
    setIsFilterd(!isFilterd);

   }

   const handleChangeInput=() => {
  
     

   }

   console.log("sortResult:",sortResult);
   console.log("result:",result);
   console.log("todoListSort:",todoList);
   // console.log("resultSearch:",resultSearch);
   console.log("InputSearch:",inputSearch);
   console.log("categoryOption:",categoryOption);
   console.log("sortByField:",sortByField);
   console.log("sortType:",sortType);

  const sortSearch=() => {
    
    // const resultSearch=dispatch(todoAction.handleSearch({sortByField:sortByField,value:inputSearch}));
    // setResult(resultSearch);
    // const resultSort=!result ? dispatch(todoAction.sort({results:todoList,sortType:sortType,ByField:sortByField})) :
    // dispatch(todoAction.sort({results:resultSearch,sortType:sortType,ByField:sortByField}));
    if (sortByField ==='category' ) {
      dispatch(todoAction.handleSearch({sortByField:sortByField,field:categoryOption}));
    }
    else {
      if (inputSearch.trim() !==''){
    dispatch(todoAction.handleSearch({sortByField:sortByField,field:inputSearch}));
      }
      else {
        alert('ورودی برای سرچ وارد کنید');
      }
  }
 
    dispatch(todoAction.sortSearch({results:todos,sortType:sortType,ByField:sortByField}));

    // const resultSort=dispatch(todoAction.sort({results:resultSearch,sortType:sortType,ByField:sortByField}));

    // setSortResult(resultSort);
    setIsFilterd(true);
    setInputSearch('');
    
  
  }
console.log("todosApp:",todos);


   const searchTodoList=() => {
  
    // const enterTask=taskInputRef.current.value;
    // const newTodo=[...todoList];
    // const searchtodo=newTodo.filter(todo => todo.title===enterTask);
    // setTodoList(searchtodo);

    dispatch(todoAction.searchTodo({value:inputValue}));
    setInputValue('');
  
    }
   

    const searchFilter= () => {
      const sf=dispatch(todoAction.filterSearch({category:categoryOption}));
      console.log("sf:",sf);
    }

    const isUniqCategory=() => {
      if (category.filter(c=> value1.trim === c.value)) {
        return false;
      }
      return true;
    }

    const addCategory=(e)=> {
      // setValue1(e.target.value);
       const newCategory=
          {
              value:value1,
              lable:value1
      }
      ;
       
      // console.log("e.target.value:",e.target.value);
      console.log("newCategory:",newCategory);
      console.log("newCategory.value:",newCategory.value);
      console.log("newCategory.label:",newCategory.lable);
      console.log("category3:",category);
      const x=category.find(c=> value1.trim !== c.value);
      console.log("x:",x);
      console.log("isUniqcategory:",isUniqCategory);

      if( value1.trim() !=='' || isUniqCategory){
        console.log("value1:",value1);
        console.log("categoryoption:",categoryOption);
        console.log("aaaaaaaaaaaaaaaaaaa");
        console.log("categoryadd:",category);
      setCategory(prev=>([newCategory,...prev]) );
      // props.setTodoList(prev=> ([...newTodoList,...prev]));
      setValue1('');
      }
      else {
          alert(" یک کتگوری جدید وارد کنید");
  
      }
  }
console.log("value1App:",value1);


/* <ul>
{(
    todos.map(todo => {
   return <div key={todo.title} >
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
        <p>{todo.category}</p>
        <p>{todo.date}</p>
      </div>
  })
  )}

  { todoList.length === 0 && <h2>Empty Search Result !!!</h2> }
   
</ul> */
   

    return (
        <div>
          <h1>TO DO List</h1>
            <div>
            <div>
            { todoList.length!==0 && <button onClick={clearall}>Clear All</button>}
            { todoList.length!==0 && <div>
          <span >Sort Type:</span>
        <select defaultValue={'DEFAULT'} onChange={ sortTodoList}>
          <option value="DEFAULT" disabled>None</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
          </div>}
          
              <div><button onClick={sortSearch}>Search and Sort</button></div>
              
                <div>
                <span>Enter Todo:</span>
             <input type='serach'  placeholder='enter todo title' onChange={(e) => setInputSearch(e.target.value)} value={inputSearch}   />
             <span >Filter By Category:</span>
            <select  name='categoreis2' id='categoreis2'  value={categoryOption}    onChange={e =>setCategoryOption(e.target.value) }   >
              <option value={""}   selected>All</option>
                {category.map(op =>(
                    
                        <option key={op.value}  value={op.value} >{op.lable}</option>
                    
                   
                ))}
              </select>
            </div>
            
        
            
             </div>
              <div>
            <span >Sort By Field</span>
        <select defaultValue={'title'} onChange={(e) => setSortByField(e.target.value)}>
          <option value="title" disabled>None</option>
          <option value="title">Title</option>
          <option value="description">Description</option>
          <option value="category">Category</option>
          <option value="Date">Date</option>
        </select>
      
        <span >Sort Type</span>
        <select defaultValue={'DEFAULT'} onChange={(e) => setSortType(e.target.value)}>
          <option value="DEFAULT" disabled>None</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
        </div>
            </div>
           
      

          <div>
       
        { todoList.length!==0 && <button onClick={ searchTodoList}>searchtodo</button>}
        </div>
        { todoList.length!==0 && isFilterd && <button onClick={deleteFilter}>Delete  Filter</button>}
        <button onClick={searchFilter}>searchFilter</button>
        <div >
          
        </div>
          <AddTodo
          value={inputValue} setValue={setInputValue}
           value1={value1} setValue1={setValue1}
           category={category} setCategory={setCategory} 
           categoryOption={categoryOption} setCategoryOption={setCategoryOption}
           addCategory={addCategory} />
          <TodosList 
           value1={value1} setValue1={setValue1}
           category={category} setCategory={setCategory} 
           categoryOption={categoryOption} setCategoryOption={setCategoryOption}
           addCategory={addCategory}/>
         
   
        </div>
    );
}

export default App;
