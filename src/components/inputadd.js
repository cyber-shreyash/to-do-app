import React, { useState } from "react";
import ReactDOM from "react-dom/client"

export const Input=()=>{
    const [task, setTask] = useState("");
    const [tasks,setTasks]=useState([]);
    const toggleTask=(index)=>{
    const newTasks=[...tasks];
    newTasks[index].completed=!newTasks[index].completed;
    setTasks(newTasks);
    };

return (
    <div className="outer flex flex-col items-center gap-2 bg-slate-400 rounded-lg shadow-md p-4 border border-gray-200 w-72 align-middle ml-[39%]">
        <input className=" inputbox flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Enter Task"
                value={task} onChange={(e) => setTask(e.target.value)}
/>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-md transition duration-200" onClick={
            ()=>{
                if(task.trim()==="")return ;
                setTasks([...tasks,{
                    text:task,completed:false
                }]);
                setTask("");
            }
        }>Add</button>
        <div className="mt-4">
            {tasks.map((item,index)=>(
                <div key={index} 
                onClick ={()=>toggleTask(index)}className={`p-2  cursor-pointer ${item.completed ? "line-through text-black-400 opacity-60":""}`}>{item.text}</div>
            ))}
        </div>
    </div>
)
}