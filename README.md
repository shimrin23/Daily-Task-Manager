# Daily Task Manager

A cross-platform productivity suite featuring a C# WPF desktop application and a responsive web-based task management interface.

---

## Overview
Daily Task Manager demonstrates a hybrid approach to software development, providing a robust desktop client for Windows alongside a mobile-friendly web application. The project highlights clean UI design, MVVM architecture in desktop development, and state persistence in web environments.

## Tech Stack

| Platform | Technologies |
| :--- | :--- |
| **Desktop (WPF)** | .NET 8.0, C# 12.0, XAML, MVVM Pattern |
| **Web Frontend** | HTML5, CSS3, JavaScript (ES6+), LocalStorage API |
| **Tools** | Git, Visual Studio 2022, VS Code, Font Awesome |

---

## Key Features

### Desktop Client (WPF)
* **Authentication:** Secure login system with credential validation.
* **State Management:** Real-time UI updates via ObservableCollection and Data Binding.
* **Task Operations:** Full CRUD (Create, Read, Update, Delete) functionality for daily objectives.
* **Session Control:** Integrated logout and secure window transitions.

### Web Interfaces
* **Advanced Task Engine:** Support for priority levels (High/Low) and due date tracking.
* **Dynamic Filtering:** View and sort tasks by status (All, Active, Completed).
* **Analytics Dashboard:** Visual progress tracking via circular completion indicators and task counters.
* **State Persistence:** Data retention using the Browser LocalStorage API.
* **Responsive Design:** Mobile-first UI compatible with all modern browsers.

---

## Project Structure

```text
Daily-Task-Manager/
├── Desktop/           # C# WPF Source Code (MVVM)
├── Web/               # Advanced Web Interface (State Management)
├── main/              # Lightweight Web Interface
└── README.md          # Documentation
