/*ESERCIZIO 1: 

Usando JS, crea un elemento HTML per ognuna delle seguenti task: 
L'elemento deve mostrare il testo della task ed avere un sfondo verde in caso sia completata, rosso se non lo e'. 

ESERCIZIO 2: 

Modificando il codice precedente, assicurati che solo le task NON completate siano mostrate sulla pagina. 

ESERCIZIO 3: 

Aggiungi un input che filtri le task in base alla proprieta' todo
*/
//Array di lavoro:
const tasks = [
    {
        todo: "Do something nice for someone I care about",
        completed: true,
    },
    {
        todo: "Memorize the fifty states and their capitals",
        completed: false,
    },
    {
        todo: "Watch a classic movie",
        completed: false,
    },
    {
        todo: "Contribute code or a monetary donation to an open-source software project",
        completed: false,
    },
    {
        todo: "Solve a Rubik's cube",
        completed: false,
    },
    {
        todo: "Bake pastries for me and neighbor",
        completed: false,
    },
    {
        todo: "Go see a Broadway production",
        completed: false,
    },
    {
        todo: "Write a thank you letter to an influential person in my life",
        completed: true,
    },
    {
        todo: "Invite some friends over for a game night",
        completed: false,
    },
    {
        todo: "Have a football scrimmage with some friends",
        completed: false,
    },
    {
        todo: "Text a friend I haven't talked to in a long time",
        completed: false,
    },
    {
        todo: "Organize pantry",
        completed: true,
    },
    {
        todo: "Buy a new house decoration",
        completed: false,
    },
    {
        todo: "Plan a vacation I've always wanted to take",
        completed: false,
    },
    {
        todo: "Clean out car",
        completed: false,
    },
    {
        todo: "Draw and color a Mandala",
        completed: true,
    },
    {
        todo: "Create a cookbook with favorite recipes",
        completed: false,
    },
    {
        todo: "Bake a pie with some friends",
        completed: false,
    },
    {
        todo: "Create a compost pile",
        completed: true,
    },
    {
        todo: "Take a hike at a local park",
        completed: true,
    },
    {
        todo: "Take a class at local community center that interests you",
        completed: false,
    },
    {
        todo: "Research a topic interested in",
        completed: false,
    },
    {
        todo: "Plan a trip to another country",
        completed: true,
    },
    {
        todo: "Improve touch typing",
        completed: false,
    },
    {
        todo: "Learn Express.js",
        completed: false,
    },
    {
        todo: "Learn calligraphy",
        completed: false,
    },
    {
        todo: "Have a photo session with some friends",
        completed: false,
    },
    {
        todo: "Go to the gym",
        completed: false,
    },
    {
        todo: "Make own LEGO creation",
        completed: false,
    },
    {
        todo: "Take cat on a walk",
        completed: false,
    }
]
//Aggiungo gli eventi al click del tasto

document.querySelector("#doneTask").addEventListener("click",showCompletedTasks);
document.querySelector("#undoneTask").addEventListener("click",showUndoneTasks);
document.querySelector("#clearTasks").addEventListener("click", clearAllTasks);
document.querySelector("#allTasks").addEventListener("click", showAllTasks);
document.querySelector("input").addEventListener("keyup", searchTasks);

//Funzione per mostrare tutte le tasks

function showAllTasks(){
    filterTasks(null); //usiamo null per mostrare tutte le tasks poichè abbiamo 3 button diversi
}

//Funzione per mostrare solo tasks completate
function showCompletedTasks(){
    filterTasks(true); //completate
}
//Funzione per mostrare solo tasks non completate
function showUndoneTasks(){
    filterTasks(false); //non completate
}

//Funzione per mostrare le task inserendo nell'input caratteri per la ricerca tramite keyUp

function searchTasks(event){
   const searchText=event.target.value.toLowerCase(); //Ottengo il valore inserito dall'utente
   const filteredTasks=tasks.filter(function(task){
    return task.todo.toLowerCase().includes(searchText);
   })

   //Richiamo funzione per mostrare i task filtrati
   displayFilteredTasks(filteredTasks);
}
//Funzione per visualizzare i task filtrati tramite input
function displayFilteredTasks(filteredTasks){
    const mainElement=document.querySelector("main");
    mainElement.innerHTML="";
    for(let i=0; i<filteredTasks.length;i++){
        const task=filteredTasks[i];
        const taskElement=document.createElement("div");
        taskElement.innerText=task.todo;
        mainElement.appendChild(taskElement);
    }
}


//Funzione per mostrare le task complete con bg verde e le incomplete con bg rosso aggiungendo l'elemento div HTML da js.

function filterTasks(completed){
    //dichiaro l'elemento main
    const mainElement=document.querySelector("main");
    mainElement.innerHTML=""; //svuotiamo il mainElement ad ogni click su diverso button
    for(let i=0; i<tasks.length;i++){//cicliamo tutte le task
        const task=tasks[i]; 
        if (completed ===null || task.completed ===completed){
            const taskElement=document.createElement("div"); //creaiamo l'elemento HTML "div"
            taskElement.innerText= task.todo; // assegno valore todo al div creato prima
            if(task.completed){
                taskElement.style.backgroundColor="green";
            } else 
            { taskElement.style.backgroundColor="red";}
            mainElement.appendChild(taskElement); //inserisco il taskElement al mainElement (appendo)
        } 
    }
}

//Funzione per nascondere tutte le tasks

function clearAllTasks (){
    const mainElement=document.querySelector("main");
    mainElement.innerHTML= ""; 
    filterInput.value="";//svuoto tutto il main con button clear
}