import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);

    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1=v1();
    let todolistID2=v1();

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]:[
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]:[
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });



    function removeTask(id: string, todolistId: string) {
        // let filteredTasks = tasks.filter(t => t.id != id);
        setTasks({...tasks, [todolistId]: [...tasks[todolistId].filter(t => t.id !== id)]});
    }

    function addTask(title: string, todolistId: string) {
        let newTask = {id: v1(), title, isDone: false};
        // let newTasks = [task, ...tasks];
        setTasks({...tasks, [todolistId]: [newTask, ...tasks[todolistId]]});
    }

    function changeStatus(taskId: string, isDone: boolean, todolistId: string) {
        // let task = tasks.find(t => t.id === taskId);
        // if (task) {
        //     task.isDone = isDone;
        // }

        setTasks({...tasks, [todolistId]: [...tasks[todolistId].map(t => t.id === taskId ? {...t, isDone: isDone} : t)]});
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        setTodolists([...todolists.map(t => t.id === todolistId ? {...t, filter: value} : t)]);
    }

    return (
        <div className="App">
            {todolists.map(t => {

                return (
                    <Todolist title={t.title}
                              todolistId={t.id}
                              key={t.id}
                              tasks={tasks[t.id]}
                              removeTask={removeTask}
                              changeFilter={changeFilter}
                              addTask={addTask}
                              changeTaskStatus={changeStatus}
                              filter={t.filter}
                    />
                )
            })}


        </div>
    );
}

export default App;
