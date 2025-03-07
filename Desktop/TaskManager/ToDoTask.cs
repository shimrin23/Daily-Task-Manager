using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
    public class ToDoTask
    {
        public string Name { get; set; }
        public bool IsDone { get; set; }

        // Constructor to initialize the task name and status
        public ToDoTask(string name, bool isDone = false)
        {
            Name = name;
            IsDone = isDone;
        }
    }
}
