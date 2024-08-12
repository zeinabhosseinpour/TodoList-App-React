import AddTodo from "./component/addTodo";
import React, { useState } from "react";
import TodosList from "./component/todosList";
import { connect, useDispatch, useSelector } from "react-redux";
import { todoAction } from "./store/todoSlice";
import { createSelector } from "@reduxjs/toolkit";

import { VisibilityFilters } from "./store/filterSlice";
import TodoItem from "./component/todoItem";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { HiOutlineXCircle } from "react-icons/hi2";

import { require } from "lodash";
import _ from "lodash";
import { useMemo } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  const todoList = useSelector((state) => state.todo.todoList);
  const todos = useSelector((state) => state.todo.todos);
  const clearAll = useSelector(todoAction.clearAll);
  const searchTodo = useSelector(todoAction.searchTodo);
  const dispatch = useDispatch();

  const [category, setCategory] = useState([]);
  const [categoryOption, setCategoryOption] = useState("");

  const [isFilterd, setIsFilterd] = useState(false);
  const [value1, setValue1] = useState("");
  const [editValue1, setEditValue1] = useState("");

  const [inputSearch, setInputSearch] = useState("");
  const [sortType, setSortType] = useState("ascending");
  const [sortByField, setSortByField] = useState("title");
  const [fieldSearch, setFieldSearch] = useState("");

  const [result, setResult] = useState();
  const [sortResult, setSortResult] = useState([]);

  const [listCheckBox, setListCheckBox] = useState([]);

  // const [listOption,setListOption]=useState();
  const [isCheckAll, setIsCheckAll] = useState(false);

  const ListOptions = [
    { id: 1, value: "title", checked: false },
    { id: 2, value: "category", checked: false },
  ];

  const [listItems, setListItems] = useState(ListOptions);

  // const [listCheckBox,setListCheckBox]=useState([
  //   { value:"tilte" ,checked:false},
  //   { value:"category" ,checked:false},

  //  ]);

  const { valueCheck, checkedBox } = listCheckBox;

  const [resultGroup, setResultGroup] = useState({});

  // console.log("todolist:",todoList);
  // console.log("todoList.id:",todoList.id);
  // console.log("todoList.title:",todoList.title);
  // console.log("todoList.done:",todoList.done);

  const selectFilter = useSelector((state) => state.VisibilityFilters);

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

  console.log("apptodos:", todos);
  console.log("apptodolist:", todoList);
  console.log("isFilterd:", isFilterd);
  console.log("iconserachfield:", fieldSearch);
  console.log("listCheckbox:", listCheckBox);
  console.log("listOptions:", ListOptions);
  console.log("listitems:", listItems);
  console.log("resultgroup:", resultGroup);
  console.log("resultgroup.length:", resultGroup.length);

  const consolegroup = () => {
    console.log("resultgroup2:", resultGroup);
    const d = [];
    resultGroup.map((rg) => d.push(rg));
    console.log("d:", d);
  };
  const data = useMemo(() => _.groupBy(todos, "category"), [todos]);

  function foo() {
    const data = _.groupBy(todos, "category");
    console.log("lodashdata:", data);
    return data;
  }

  const grouptodolist = () => {
    // const _ = require("lodash");
    const group = _.groupBy(todos, "category");
    console.log("lodashgroup:", group);
    setResultGroup(group);

    const objectkey = Object.keys(group);
    console.log("objectkey:", objectkey);
    const objectkeyMap = Object.keys(group).map((k) => console.log("k:", k));
    console.log("objectkeyMap:", objectkeyMap);
    const objectentries = Object.entries(group);
    console.log("objectentries:", objectentries);
    const objectentriesMap = Object.entries(group).map(([e, g]) =>
      console.log("e,g:", e, g)
    );
    console.log("objectentriesMap:", objectentriesMap);
    // return group;
  };

  // var group;

  const products = [
    { name: "apples", category: "fruits" },
    { name: "oranges", category: "fruits" },
    { name: "potatoes", category: "vegetables" },
  ];

  const groupTodo = () => {
    // const _ = require("lodash");

    var data = [
      { birthdate: "1993", name: "Ben" },
      { birthdate: "1994", name: "John" },
      { birthdate: "1995", name: "Larry" },
      { birthdate: "1995", name: "Nicole" },
      { birthdate: "1996", name: "Jane" },
      { birthdate: "1996", name: "Janet" },
      { birthdate: "1996", name: "Dora" },
    ];

    var list = _(data)
      .groupBy("birthdate")
      .map((items, birthdate) => ({
        birthdate: birthdate,
        names: _.map(items, "name"),
      }))
      .value();

    console.log(list);

    // const _ = require("lodash");

    // const group = _.groupBy(products, "category");
    const group = _.groupBy(["one", "two", "three"], "length");
    console.log("lodash:", group);
    Object.entries(group).map(([key, value]) => {
      console.log("key:", key, "\nvalue:", value);
    });

    const products = [
      { name: "apples", category: "fruits" },
      { name: "oranges", category: "fruits" },
      { name: "potatoes", category: "vegetables" },
    ];
    const resultMapgroup = Object.groupBy(products, (product) => {
      return product.category;
    });
    console.log("resultMapGroup:", resultMapgroup);

    // const _ = require("lodash");

    // const _=require("lodash");

    // group = _.groupBy(todos, "category");
    // console.log("lodash:", group);
    // Object.entries(group).map(([key, value]) => {
    //   console.log("key:", key, "\nvalue:", value);
    // });

    // const result = Map.group(todos, "category");
    // const resultgroup = Map.groupBy(todos, (categ) => {
    //   return categ.category;
    // });
    // console.log("resultgroup:", resultgroup);
  };

  const sortTodoList = (e) => {
    setSortType(e.target.value);

    console.log("e.target.value:", e.target.value);
    dispatch(todoAction.sortTodoList({ sortType: sortType }));
  };
  console.log("sortTypeTodo:", sortType);

  const clearall = () => {
    // setTodoList([]);
    // setTodos([]);

    dispatch(todoAction.clearAll());
  };

  const deleteFilter = () => {
    dispatch(todoAction.deleteFilter());
    setIsFilterd(!isFilterd);
  };

  const handleChangeInput = () => {};

  console.log("sortResult:", sortResult);
  console.log("result:", result);
  console.log("todoListSort:", todoList);
  // console.log("resultSearch:",resultSearch);
  console.log("InputSearch:", inputSearch);
  console.log("categoryOption:", categoryOption);
  console.log("sortByField:", sortByField);
  console.log("sortType:", sortType);

  const selectAll = (e) => {
    // setToppings(toppings.map(topping => ({ ...topping, checked: true })))
    setIsCheckAll(!isCheckAll);
    setListItems(
      listItems.map((item) => ({ ...item, checked: e.target.checked }))
    );
    if (e.target.checked) {
      setListCheckBox(
        listItems.map((item) => ({ ...item, checked: e.target.checked }))
      );
    } else {
      setListCheckBox([]);
    }
    // if (e.target.checked) {
    //   // setCheckAll(e.target.checked);
    //   // setListCheckBox(ListOptions.map(listoption => ({...listoption,checked: true})));
    //   // setListCheckBox(
    //   //   ListOptions.map((listoption) => ({
    //   //     ...listoption,
    //   //     checked: e.target.checked,
    //   //   }))
    //   // );
    //   setListCheckBox(ListOptions);
    // } else {
    //   // setCheckAll(false);
    //   setListCheckBox(
    //     ListOptions.map((listoption) => ({
    //       ...listoption,
    //       checked: !e.target.checked,
    //     }))
    //   );
    // }
  };

  // console.log("listcheckboxAll:",listCheckBox);
  console.log("selectall:", isCheckAll);

  // const unSelectAll = () => {
  //   setToppings(toppings.map(topping => ({ ...topping, checked: false })))
  // }

  const handleCheck = (e) => {
    console.log("e.target.value:", e.target.value);
    console.log("e.taget.checked:", e.target.checked);
    // if (e.target.checked) {
    const newListItems = [...listItems];
    const itemcheck = listItems.find((item) => item.value === e.target.value);
    itemcheck.checked = !!e.target.checked;
    setListItems(newListItems);
    // if (!e.target.checked){

    // }
    // setFieldSearch(e.target.value);
    // setListCheckBox(p => [...p,{value:e.target.value,checked: e.target.checked}]);
    if (e.target.checked) {
      setListCheckBox((p) => [
        ...p,
        {
          id: e.target.id + 1,
          value: e.target.value,
          checked: e.target.checked,
        },
      ]);
    } else {
      setListCheckBox(
        listCheckBox.filter((item) => item.value !== e.target.value)
      );
    }
    setIsCheckAll(false);

    //  console.log("listCheckBoxState:",listCheckBox);
    // } else {
    // setListItems(listItems);
    //   const updateList = [...listCheckBox];
    //   // updateList.splice(listCheckBox.indexOf(event.target.value), 1);
    //   const updateListCheck = listCheckBox.filter(
    //     (item) => item.value !== e.target.value
    //   );
    //   setListCheckBox(updateListCheck);
    //   console.log("updateListCheck:", updateListCheck);
    //   // setListCheckBox(listcheck);
    //   // console.log("listcheck:",listcheck);
    //   // setListCheckBox(updateList);
    //   console.log("updatelist:", updateList);
    // }
    // console.log("listcheck2:",listCheckBox);
  };

  const iconSearch = () => {
    const { title3, category3 } = listCheckBox;

    console.log("listcheck:", listCheckBox);
    // console.log("titlesort3:", title3);
    // console.log("categorysort3:", category3);
    // console.log("valuelist:", listCheckBox.value);
    // console.log("checkedlist:", listCheckBox.checked);
    // dispatch(todoAction.handleSearch({
    //         sortByField:listCheckBox.map(list => list.value),
    //         field: inputSearch,
    //       })
    //     );
    dispatch(
      todoAction.handleSearch({
        sortByField: listCheckBox,
        field: inputSearch,
      })
    );
  };

  const sortSearch = () => {
    // const resultSearch=dispatch(todoAction.handleSearch({sortByField:sortByField,value:inputSearch}));
    // setResult(resultSearch);
    // const resultSort=!result ? dispatch(todoAction.sort({results:todoList,sortType:sortType,ByField:sortByField})) :
    // dispatch(todoAction.sort({results:resultSearch,sortType:sortType,ByField:sortByField}));
    if (sortByField === "category") {
      dispatch(
        todoAction.handleSearch({
          sortByField: sortByField,
          field: categoryOption,
        })
      );
    } else {
      if (inputSearch.trim() !== "") {
        dispatch(
          todoAction.handleSearch({
            sortByField: sortByField,
            field: inputSearch,
          })
        );
      } else {
        alert("ورودی برای سرچ وارد کنید");
      }
    }

    dispatch(
      todoAction.sortSearch({
        results: todos,
        sortType: sortType,
        ByField: sortByField,
      })
    );

    // const resultSort=dispatch(todoAction.sort({results:resultSearch,sortType:sortType,ByField:sortByField}));

    // setSortResult(resultSort);
    setIsFilterd(true);
    setInputSearch("");
  };
  console.log("todosApp:", todos);

  const searchTodoList = () => {
    // const enterTask=taskInputRef.current.value;
    // const newTodo=[...todoList];
    // const searchtodo=newTodo.filter(todo => todo.title===enterTask);
    // setTodoList(searchtodo);

    dispatch(todoAction.searchTodo({ value: inputValue }));
    setInputValue("");
  };

  const searchFilter = () => {
    const sf = dispatch(todoAction.filterSearch({ category: categoryOption }));
    console.log("sf:", sf);
  };

  //  let catfind;
  const isUniqCategory = () => {
    console.log("value1.trim():", value1.trim());
    console.log("category.lenght", category.length);
    if (category.length > 0) {
      var catfind = category.filter((ct) => value1.trim() === ct.value);
      console.log("catfind:", catfind);
      // console.log("catfind.value:",catfind.value);
      console.log("catfind.lenght", catfind.length);
    }
    // console.log("catfind2.length:",catfind.length);
    if (category.length > 0 && catfind.length > 0) {
      console.log("catfind3.length:", catfind.length);

      return false;
    } else {
      return true;
    }
  };

  const handleFilter = (typeFilter) => {
    switch (typeFilter) {
      case "allTodo":
        dispatch(todoAction.filterAllTodo());
        break;

      case "doneTodo":
        dispatch(todoAction.filterDoneTodo());
        break;

      case "unDoneTodo":
        dispatch(todoAction.filterUndoneTodo());
        break;
    }
  };

  const addCategory = (e) => {
    // setValue1(e.target.value);
    const newCategory = {
      value: value1,
      lable: value1,
    };
    // console.log("e.target.value:",e.target.value);
    console.log("newCategory:", newCategory);
    console.log("newCategory.value:", newCategory.value);
    console.log("newCategory.label:", newCategory.lable);
    console.log("category3:", category);
    const x = category.find((c) => value1.trim !== c.value);
    console.log("x:", x);
    console.log("isUniqcategory:", isUniqCategory());

    if (value1.trim() !== "") {
      if (isUniqCategory()) {
        console.log("value1:", value1);
        console.log("categoryoption:", categoryOption);
        console.log("aaaaaaaaaaaaaaaaaaa");
        console.log("categoryadd:", category);
        setCategory((prev) => [newCategory, ...prev]);
        // props.setTodoList(prev=> ([...newTodoList,...prev]));
        setValue1("");
      } else {
        alert(" کتگوری تکراری است . لطفا یک کتگوری جدید وارد کنید");
      }
    } else {
      alert(" کتگوری  وارد کنید");
    }
  };
  console.log("value1App:", value1);

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
      <h1>TO DO List App</h1>
      <button onClick={consolegroup}>consolegroup</button>
      <button onClick={grouptodolist}>group</button>
      <div>
        <div>
          {Object.entries(data).map(([category, items]) => (
            <div key={category}>
              <h1 style={{ backgroundColor: "ButtonFace" }}>{category}</h1>
              {items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: "turquoise",
                    display: "flex",
                    flexDirection: "row",
                    gap: 30,
                  }}
                >
                  <div>{item.id}</div>
                  <div>{item.title}</div>
                  <div>{item.date}</div>
                  <div>{item.done}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div>
        <button onClick={groupTodo}>ssssss</button>
      </div>
      (
      <div>
        xxxxxx
        {todos.lenght === 0 && <h2>Empty TodoList !!!</h2>}
      </div>
      )
      <div>
        <div>
          {todoList.length !== 0 && (
            <button
              style={{ backgroundColor: "green" }}
              onClick={searchTodoList}
            >
              searchtodo
            </button>
          )}
        </div>

        <button style={{ backgroundColor: "green" }} onClick={searchFilter}>
          searchFilter
        </button>
        <div style={{ backgroundColor: "green" }}>
          {todoList.length !== 0 && (
            <div>
              <span>Sort Type:</span>
              <select defaultValue={"DEFAULT"} onChange={sortTodoList}>
                <option value="DEFAULT" disabled>
                  None
                </option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          )}
        </div>
        <div>
          {todoList.length !== 0 && (
            <div>
              <button onClick={clearall}>Clear All</button>

              <div>
                <button onClick={() => dispatch(todoAction.filterAllTodo())}>
                  All Todo
                </button>
                <button onClick={() => dispatch(todoAction.filterDoneTodo())}>
                  Done todo
                </button>
                <button onClick={() => dispatch(todoAction.filterUndoneTodo())}>
                  Active
                </button>
              </div>

              <div style={{ backgroundColor: "pink" }}>
                <button onClick={() => handleFilter("allTodo")}>
                  All Todo
                </button>
                <button onClick={() => handleFilter("doneTodo")}>
                  Done todo
                </button>
                <button onClick={() => handleFilter("unDoneTodo")}>
                  Active
                </button>
              </div>
            </div>
          )}

          <div>
            <div>
              <div style={{ borderRadius: "10px" }}>
                <button onClick={iconSearch}>iconsearchfield</button>

                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="selectAll"
                        checked={isCheckAll}
                        onChange={selectAll}
                        size="small"
                      />
                    }
                    label="selectAll"
                  />
                  {listItems.map((option) => (
                    <FormControlLabel
                      key={option.id}
                      control={
                        <Checkbox
                          id={option.id}
                          value={option.value}
                          checked={option.checked}
                          onChange={handleCheck}
                          size="small"
                          color="success"
                        />
                      }
                      label={option.value}
                      {...console.log("option.checked:", option.checked)}
                    />
                  ))}
                </FormGroup>
              </div>
              <div style={{ backgroundColor: "gold" }}>
                <div>
                  <span>Enter For Search:</span>
                  <input
                    type="serach"
                    placeholder="enter "
                    onChange={(e) => setInputSearch(e.target.value)}
                    value={inputSearch}
                  />
                </div>
              </div>

              <div>
                <button onClick={sortSearch}>Search and Sort</button>
              </div>
              {todoList.length !== 0 && isFilterd && (
                <button onClick={deleteFilter}>Delete Filter</button>
              )}
            </div>

            <div style={{ backgroundColor: "green" }}>
              <span>Filter By Category:</span>
              <select
                name="categoreis2"
                id="categoreis2"
                value={categoryOption}
                onChange={(e) => setCategoryOption(e.target.value)}
              >
                <option value={""} selected>
                  All
                </option>
                <option value={""} selected>
                  <div style={{ backgroundColor: "red" }}>
                    <HiOutlineXCircle
                      style={{ backgroundColor: "red" }}
                      size={5}
                    />
                  </div>
                </option>
                {category.map((op) => (
                  <option key={op.value} value={op.value}>
                    {op.lable}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "green" }}>
          <span>Sort By Field</span>
          <select
            defaultValue={"title"}
            onChange={(e) => setSortByField(e.target.value)}
          >
            <option value="title" disabled>
              None
            </option>
            <option value="title">Title</option>
            <option value="description">Description</option>
            <option value="category">Category</option>
            <option value="Date">Date</option>
          </select>

          <span>Sort Type</span>
          <select
            defaultValue={"DEFAULT"}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="DEFAULT" disabled>
              None
            </option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
      </div>
      <div>
        <AddTodo
          value={inputValue}
          setValue={setInputValue}
          value1={value1}
          setValue1={setValue1}
          category={category}
          setCategory={setCategory}
          categoryOption={categoryOption}
          setCategoryOption={setCategoryOption}
          addCategory={addCategory}
        />
        <TodosList
          value1={value1}
          setValue1={setValue1}
          category={category}
          setCategory={setCategory}
          categoryOption={categoryOption}
          setCategoryOption={setCategoryOption}
          addCategory={addCategory}
        />
      </div>
    </div>
  );
}

export default App;
