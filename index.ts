interface Todo {
    id: number;
    title: string;
    done: boolean;
  };

const toDoList: Todo[] = [];

const generateId = () : number => {
    return Date.now() + Math.floor(Math.random() * 1000);
};

const createToDoList = (title: string) : void => {
    const newToDoList: Todo = {
        id: generateId(),
        title,
        done: false
    };
    toDoList.push(newToDoList);
};

createToDoList("Learn TypeScript");
createToDoList("Keep GitHub green 🌱");
createToDoList("Make tea");
createToDoList("Clean desk");
createToDoList("Watch a film");

console.log(toDoList);

const doneList: Todo[] = [];

const removeATask = (idToRemove: number) : void => {

    toDoList.forEach((toDo) => {
        if (toDo.id === idToRemove) {
          toDo.done = true; 
          doneList.push(toDo);
        }
    });

    const updatedList = toDoList.filter((toDo) => toDo.id !== idToRemove);
    toDoList.length = 0;  
    toDoList.push(...updatedList);
};

console.log("Before:", toDoList);

removeATask(toDoList[3].id);

console.log("After:", toDoList);

console.log("Done tasks:", doneList);