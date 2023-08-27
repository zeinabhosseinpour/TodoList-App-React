import AddTodo from './addTodo';
import { todoAction } from './todoSlice';
import TodosList from './todosList';
import { useSelector } from 'react-redux';



const App = () => {

    const todoList=useSelector(todoAction.todoList);

    return (
        <div>
         <AddTodo/>
          {todoList.map(t =>(
            <TodosList key={t.id} id={t.id} title={t.title}/>
          )
            )}
        </div>
    );
}

export default App;
