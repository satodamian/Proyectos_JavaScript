const tasks = [];
let time = 0;
let timer = null;
let timerBreak = null;
let current = 0; /* Tarea Actual */

const bAdd = document.querySelector("#bAdd");
const itTask = document.querySelector("#itTask");
const form = document.querySelector("#form");

renderTime();
renderTasks();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (itTask.value != "") {
    // Creacion de mi tarea
    createTask(itTask.value);
    itTask.value = "";
    renderTasks();
  }
});

function createTask(value) {
  const newTask = {
    id: (Math.random() * 100).toString(36).slice(3),
    title: value,
    completed: false,
  };

  tasks.unshift(newTask);
}

function renderTasks() {
  const html = tasks.map((task) => {
    return `
            <div class="task">
                <div class="completed">${
                  task.completed
                    ? `<span class="done">Done</span>`
                    : `<button class="start-button" data-id="${task.id}">Start</button>`
                }</div>
                <div class="title">${task.title}</div>
            </div>
            `;
  });
  const tasksContainer = document.querySelector("#tasks");
  // Trasnformar el array en un string
  tasksContainer.innerHTML = html.join("");

  const startButton = document.querySelectorAll(".task .start-button");

  console.log(startButton);

  startButton.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // console.log('E')
      if (!timer) {
        const id = btn.getAttribute("data-id");
        startButtonHandler(id);
        btn.textContent = "In Progress...";
      }
    });
  });
}

  function startButtonHandler(id) {
    // 25minutos
    time = 5;
    current = id; // Tarea Actual
    // Encontrar la tarea actual para empezar a manejarla
    const taskIndex = tasks.findIndex((task) => task.id == id);
    const taskName = document.querySelector("#time #taskName");
    taskName.textContent = tasks[taskIndex].title;
    renderTime();
    // Formato al tiempo
    timer = setInterval(() => {
      timerHandler(id);
    }, 1000);
  }

  function timerHandler(id) {
    time--;
    renderTime();

    if (time == 0) {
      clearInterval(timer);
      markCompleted(id);
      renderTasks();
      startBreak();
    }
  }

  function renderTime() {
    const timeDiv = document.querySelector("#time #value");
    const minutes = parseInt(time / 60);
    const seconds = parseInt(time % 60);

    timeDiv.textContent = `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  }

  function markCompleted(id) {
    const taskIndex = tasks.findIndex((task) => task.id == id);
    tasks[taskIndex].completed = true;
    timer = null;
  }

  function startBreak() {
    time = 5;
    taskName.textContent = "Break";
    renderTime();
    timerBreak = setInterval(() => {
      timerBreakHandler();
    }, 1000);
  }

  function timerBreakHandler() {
    time--;
    renderTime();

    if (time == 0) {
      clearInterval(timerBreak);
      current = null;
      timerBreak = null;
      taskName.textContent = "";
      renderTasks();
    }
  }

