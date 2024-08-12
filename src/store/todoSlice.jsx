import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      let newTodo = {
        id: Math.floor(Math.random() * 100),
        title: action.payload.title,
        category: action.payload.category,
        done: false,
        date: new Date().toLocaleString("FA-IR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        //  date:new Date().toLocaleString(),
      };
      // date:new Date().getTime().toString(),
      state.todoList = [newTodo, ...state.todoList];
      state.todos = [newTodo, ...state.todos];
      //  state.todoList.push(newTodo);

      //  console.log("state.TodoList.id:",state.todoList.id);
      //  console.log("state.TodoList.title:",state.todoList.title);
      //  console.log("state.TodoList.done:",state.todoList.done);
      //  console.log("newTodo:",newTodo);
      //  console.log("initialstate:",initialState);
    },
    deleteTodo(state, action) {
      let { todoList, todos } = state;

      state.todoList = todoList.filter((todo) => todo.id !== action.payload.id);
      state.todos = todoList.filter((todo) => todo.id !== action.payload.id);
      console.log("  state.initialState.todoListDelete:", state.todoList);
      console.log("  state.initialState.todosDelete:", state.todos);
    },

    updateTodo(state, action) {
      // let {todoList}=state,
      console.log("editTaskSlice:", action.payload.editTask);
      console.log("editCategorySlice:", action.payload.editCategory);
      // const x=state.todoList.filter(todo => (todo.id === action.payload.id)
      //   {return  todo.title=action.payload.editTask})

      // state.todoList=action.payload.editTask;

      // console.log("state.todosupdate:",state.todos);
      let { todoList, todos } = state;
      console.log("state:", state);
      console.log("todolistUpdate:", state.todoList);
      console.log("todosUpdate:", todos);
      // state.todoList = state.todoList.map((item) =>
      //   item.id === action.payload.id ? action.payload.editTask : item);

      // console.log("todoList:",todoList);
      todos.map((t) => {
        if (t.id === action.payload.id) {
          console.log("t.title:", t.title);
          console.log("teditr:", action.payload.editTask);
          t.title = action.payload.editTask;
          if (action.payload.editCategory.trim() !== "") {
            t.category = action.payload.editCategory;
          }
        }
      });
      // console.log("todoList:",todoList);
      todoList.map((t) => {
        if (t.id === action.payload.id) {
          console.log("t.title:", t.title);
          console.log("teditr:", action.payload.editTask);
          t.title = action.payload.editTask;
          if (action.payload.editCategory.trim() !== "") {
            t.category = action.payload.editCategory;
          }
        }
      });

      // return state.map((todo) => {

      //   if (todo.id === action.payload.id) {

      //     return {

      //       ...todo,

      //       item: action.payload.item,

      //     };

      //   }

      //   return todo;

      // });
    },
    //   searchByName: (state, action) => {
    //     // The object you return is the full state object update in your reducer
    //     return {
    //        ...state,
    //        users: [...state.users].filter((user) => user.name.toLowerCase().includes(action.payload.toLowerCase())
    //     };
    // },

    //   checkedTodo: (state, action) => {
    //     return state.map((obj) =>
    //       obj.id === action.payload.id
    //         ? {
    //             ...obj,
    //             checked: action.payload.checked,
    //           }
    //         : obj
    //     );
    //   },

    completeTodo(state, action) {
      const commpleteTodo = state.find((t) => t.id === action.payload);
      commpleteTodo.complete = !commpleteTodo.complete;
      return state;
    },

    done(state, action) {
      // state.todoList.done=!state.todoList.done;

      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index].done = !action.payload.done;

      const index2 = state.todoList.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todoList[index2].done = !action.payload.done;

      console.log("done:", action.payload.done);

      // state.todoList.map(t => {
      //   if (t.id===action.payload.id)
      //   {
      //   t.done=!action.payload.done;
      //   }
      //   }
      // )

      console.log("done2:", action.payload.done);
    },

    clearAll: () => initialState,

    deleteFilter: (state, acttion) => {
      state.todos = [...state.todoList];
    },

    searchTodo: (state, action) => {
      // const {todoslist}=state.todoList;
      const newTodo = [...state.todoList];
      // state.todoList=newTodo.filter(todo =>todo.title===action.payload.value);
      action.payload.value === ""
        ? alert("ورودی برای سرچ وارد کنید")
        : (state.todos = newTodo?.filter((todo) =>
            todo.title
              .toLowerCase()
              .includes(action.payload.value.toLowerCase())
          ));
      console.log("state.todoList:", state.todoList);

      // todoList.filter((item)=>item[field] === inputText);
    },

    filterSearch: (state, action) => {
      const newTodo = [...state.todoList];
      state.todos = newTodo?.filter(
        (todo) => todo.category === action.payload.category
      );
      // return groupCategory;
      console.log("hello");
      // console.log("groupCategry:",groupCategory);

      //  return  groupCategory.map(item => {
      //     return  ({item} )}
      //     )
      // return [...groupCategory];

      // const groupCategory=newTodo?.map(item => {
      //   return item.category;
      // });

      //   const searchItems = (searchValue) => {
      //     setSearchInput(searchValue)
      //     const filteredData = APIData.filter((item) => {
      //         return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      //     })
      //     setFilteredResults(filteredData)
      // }
    },
    //   state.todos.filter((item) => item.id !== action.payload);
    // },
    // filterTodo: (state, action) => {
    //     if (action.payload == "incomplete") {
    //         state.todos = state.todos.filter((item) => item.isDone !== false)
    //     } else if (action.payload == "completed") {
    //         state.todos = state.todos.filter((item) => item.isDone !== true)
    //     } else {
    //         state.todos;
    //     }
    // }

    handleSearch: (state, action) => {
      const newTodo = [...state.todoList];
      // state.todoList=newTodo.filter(todo =>todo.title===action.payload.value);
      action.payload.value === ""
        ? alert("ورودی برای سرچ وارد کنید")
        : console.log("action.paylod.field:", action.payload.field);
      console.log("action.paylod.sortByField:", action.payload.sortByField);
      const listcheck = action.payload.sortByField.map((f) => f.value);
      console.log("listcheck:", listcheck);
      // const [title, category] = listcheck;
      // console.log("title:", title);
      // console.log("category:", category);
      // const resultSearch1 = newTodo?.filter((todo) =>
      //   todo[title].toLowerCase().includes(action.payload.field.toLowerCase())
      // );
      // const resultSearch2 = newTodo?.filter((todo) =>
      //   todo[category]
      //     .toLowerCase()
      //     .includes(action.payload.field.toLowerCase())
      // );
      const result = [];
      listcheck.map((itemcheck) =>
        newTodo?.map((todo) => {
          if (
            todo[itemcheck]
              .toLowerCase()
              .includes(action.payload.field.toLowerCase())
          ) {
            const checkResult = result.filter((r) => {
              console.log("r:", r.id, todo.id);
              return r.id === todo.id;
            });
            console.log(
              "checkresult.length:",
              checkResult.length,
              !checkResult.length
            );
            if (!checkResult.length) result.push(todo);
          }
        })
      );

      console.log("result:", result);

      // const [rd] = result;
      // console.log("rd:", rd);

      result.length !== 0 ? (state.todos = result) : alert("هیچ تودو یافت نشد");

      // state.todos = resultSearch2;
      // resultSearch1.length !== 0
      //   ? (state.todos = resultSearch1)
      //   : alert("هیچ تودو یافت نشد");
      // state.todoList=newTodo?.filter(todo =>todo[action.payload.sortByField].toLowerCase().includes(action.payload.field.toLowerCase()));
      console.log("state.todoListSortSearch:", state.todoList);
      console.log("state.todosSortSearch:", state.todos);
    },

    sortSearch: (state, action) => {
      if (action.payload.sortType === "ascending") {
        if (action.payload.sortByField === "Date") {
          const newestTodos = [...state.todos].sort((a, b) => b.date - a.date);
          newestTodos.map((todo, index) =>
            index === 0 ? { ...todo, ...action.payload.todo } : todo
          );
          console.log("datesortnewstodos:", newestTodos);
        } else {
          console.log("else1");
          state.todos.sort((a, b) =>
            a[action.payload.sortByField] < b[action.payload.sortByField]
              ? -1
              : 1
          );
          console.log("else2");
        }
      } else if (action.payload.sortType === "descending") {
        if (action.payload.sortByField === "Date") {
          const oldestTodos = [...state.todos].sort(
            (a, b) =>
              new Date(a.date).format("YYYYMMDD") -
              new Date(b.date).format("YYYYMMDD")
          );
          console.log("a.date:");
          oldestTodos.map((todo, index) =>
            index === 0 ? { ...todo, ...action.payload.todo } : todo
          );
        } else {
          action.payload.results.sort((a, b) =>
            b[action.payload.sortByField] > a[action.payload.sortByField]
              ? 1
              : -1
          );
        }
      }
    },

    sortTodoList: (state, action) => {
      if (action.payload.sortType === "ascending") {
        const newestTodos = [...state.todoList].sort((a, b) => b.date - a.date);
        // newestTodos.map((todo,index) =>(index===0 ? {...todo,...action.payload.todo} :todo));
        console.log("datesortnewstodos:", newestTodos);
        console.log("date1:");
      } else if (action.payload.sortType === "descending") {
        const oldestTodos = [...state.todoList].sort((a, b) => a.date - b.date);
        console.log("datesortoldesttodos:", oldestTodos);
        console.log("date2:");
        oldestTodos.map((todo, index) =>
          index === 0 ? { ...todo, ...action.payload.todo } : todo
        );
      }
    },

    filterAllTodo: (state, action) => {
      const allTodo = state.todoList;
      allTodo.length !== 0
        ? (state.todos = allTodo)
        : alert("هیچ تودو یافت نشد.");
    },

    filterDoneTodo: (state, action) => {
      const newTodo = [...state.todoList];
      const doneTodo = newTodo?.filter((todo) => todo.done == true);
      doneTodo.length !== 0
        ? (state.todos = doneTodo)
        : alert("هیچ تودو انجام شده یافت نشد.");

      // setTodoList(todofilterDone);
    },

    filterUndoneTodo: (state, action) => {
      const newTodo = [...state.todoList];
      const unDoneTodo = newTodo?.filter((todo) => todo.done == false);
      unDoneTodo.length !== 0
        ? (state.todos = unDoneTodo)
        : alert("هیچ تودو انجام نشده یافت نشد.");
      // setTodoList(todofilterUnDone);
    },

    // // filter:(state,action) => {

    //   switch(action.payload)  {

    //     case "allTodo" :

    //     break;

    //     case "doneTodo" :

    //     return filterDoneTodo;

    //     case "doneTodo" :

    //     return filterUndoneTodo();
    //   }
    // }
  },
});

export const todoAction = todoSlice.actions;

// export default todoSlice.reducer;
export default todoSlice;
