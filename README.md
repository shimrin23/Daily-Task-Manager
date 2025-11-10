
```markdown
#  TaskManager (WPF + Web Assets)

**TaskManager** is a simple **WPF desktop application** built with **C#** for managing personal to-do tasks, accompanied by several **web demo pages** showcasing login and task management UI concepts.  
It serves as both a **desktop productivity tool** and a **learning project** combining WPF and web technologies.

---

##  Features

-  Add, update, and delete tasks  
-  Basic login UI (desktop & web demo)  
-  Modern WPF UI using XAML  
-  Web-based demos for login and task list screens  
-  Modular project structure (Desktop + Web)

---

##  Project Structure

```

TaskManager/
├── Desktop/
│   └── TaskManager/
│       ├── App.xaml / App.xaml.cs
│       ├── MainWindow.xaml / MainWindow.xaml.cs
│       ├── LoginWindow.xaml / LoginWindow.xaml.cs
│       ├── ToDoTask.cs
│       ├── TaskManager.csproj
│       ├── TaskManager.sln
│       └── bin/ & obj/ (build artifacts)
│
├── login/
│   ├── index2.html
│   ├── script2.js
│   └── style2.css
│
├── main/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── notes/
│   ├── calander.html
│   └── note.html
│
└── Web/tasksmanager-main/
├── index.html
├── assets/
├── css/styles.css
├── js/
└── login/

````

---

## ⚙️ Prerequisites

###  Desktop (WPF)
- **Visual Studio 2022** or newer  
- **.NET Framework / .NET 6+ Desktop Runtime**

###  Web (Demo pages)
- Any modern web browser (Chrome, Edge, Firefox)  
- (Optional) Local static server such as Python HTTP server

---

##  How to Run

###  Desktop (WPF)
1. Open `Desktop/TaskManager/TaskManager.sln` in **Visual Studio**  
2. Press **F5** to build and run the project  

**Alternative (CLI):**
```bash
cd Desktop/TaskManager
dotnet run
````

---

###  Web Pages

You can open any `.html` file directly in your browser:

* [login/index2.html](login/index2.html)
* [main/index.html](main/index.html)

**Optional (for serving via localhost):**

```bash
cd main
python -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080) in your browser.

---



## Development Notes

* UI and events: `MainWindow.xaml` + `MainWindow.xaml.cs`
* Authentication logic: `LoginWindow.xaml.cs`
* Domain model: `ToDoTask.cs`
* Styling: `style.css` (web), XAML styles (desktop)
* Extend functionality by adding new UI elements or models

---

## How to Extend

* **Add new task features** → Edit `MainWindow.xaml.cs`
* **Add new UI windows** → Create new XAML + code-behind pair
* **Change web UI** → Modify HTML/CSS/JS under `main/` or `Web/`
* **Integrate backend** → Connect web or desktop to an API later

---

##  Author & Credits

**Author:** [shimrin](https://github.com/shimrin23)
**Field:** Computer Engineering

---

##  License

This project is provided for **educational and demonstration purposes**.
Feel free to modify or extend it as needed.

---


