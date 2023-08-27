// import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { todoAction } from '../store/todoSlice';
import { Fragment, useState } from 'react';

const AddTodo = (props) => {

    const addTodo=useSelector(todoAction.addTodo);
    const dispatch=useDispatch();
    
    // const [inputValue,setInputValue]=useState("");

    // const [category,setCategory]=useState([]);
    // const [categoryOption,setCategoryOption]=useState('');

    // const [value1,setValue1]=useState('');

    // console.log("value1:",value1);
    
    let options=[
        {
            value:'nn',
            lable:'nn' 
    },
    {
        value:'mm',
        lable:'mm' 
},
{
    value:'kk',
    lable:'kk' 
},
    ];
    // console.log("options:",options);
    // console.log("options.value:",options.value);
    // console.log("options.label:",options.label);

    // console.log("category:",category);


    const handleChangeInput=(e) => {
    
        // setInputValue(e.target.value);
        props.setValue(e.target.value);
       

    
    }
    



    // const addCategory=(e)=> {
    //     // setValue1(e.target.value);
    //      const newCategory=
    //         {
    //             value:value1,
    //             lable:value1
    //     }
    //     ;
         
    //     // console.log("e.target.value:",e.target.value);
    //     console.log("newCategory:",newCategory);
    //     console.log("newCategory.value:",newCategory.value);
    //     console.log("newCategory.label:",newCategory.lable);
    //     console.log("category3:",category);
        
    //     if(value1.trim() !==''){
    //     setCategory(prev=>([newCategory,...prev]) );
    //     // props.setTodoList(prev=> ([...newTodoList,...prev]));
    //     setValue1('');
    //     }
    //     else {
    //         alert("ورودی وارد کنید");
    
    //     }
    // }


    const addTodoList=() => {
    
        // dispatch(addTodo(inputValue));
        // if (props.value.trim() && categoryOption.trim() !=='' && categoryOption.trim() !=='placeholder'  )
        if (props.value.trim() && props.categoryOption.trim() !=='' )
        {
            console.log("props.value:",props.value);
            // console.log("categoryOption:",pcategoryOption);
            console.log("props.categoryOption:",props.categoryOption);
            dispatch(todoAction.addTodo({title:props.value,category:props.categoryOption}));
            dispatch(todoAction.deleteFilter());
            props.setValue('');
            props.setCategoryOption('');
            
        }
        else
        {
         alert("یک تودو جدید وارد کنید");

       
    }
    // setInputValue("");
}


console.log("cat:",props.category);
    

    return (
        <div>
             <div>
                <span>Enter Todo:</span>
             <label htmlFor='text'>
             <input type='text' name='text'  placeholder='enter task' onChange={handleChangeInput} value={props.value}   />
            </label>
            </div>

            <div>
         
              <label htmlFor='category2'>Enter New Category:</label> 
            <input  type='text' name="category2" id="category2" placeholder='enter new category' onChange={(e) =>props.setValue1(e.target.value)} value={props.value1}  />
            <button onClick={props.addCategory}>add new category to list</button>
              <select  name='categoreis2' id='categoreis2'  value={props.categoryOption}    onChange={e =>props.setCategoryOption(e.target.value) }   >
              <option value={""}   selected>choose a category</option>
                {props.category.map(op =>(
                    
                        <option key={op.value}  value={op.value} >{op.lable}</option>
                    
                   
                ))}
              </select>
            
               </div>
              <button onClick={ addTodoList}>addtodolist</button>
         
        </div>
    );
}

export default AddTodo;
