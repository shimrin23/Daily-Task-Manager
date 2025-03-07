using System.Collections.ObjectModel;
using System.Windows;
using System.Windows.Controls;

namespace TaskManager
{
    public partial class MainWindow : Window
    {
        public ObservableCollection<ToDoTask> Tasks { get; set; }

        public MainWindow()
        {
            InitializeComponent();
            Tasks = new ObservableCollection<ToDoTask>();
            TaskList.ItemsSource = Tasks;
        }

        private void AddTask_Click(object sender, RoutedEventArgs e)
        {
            string taskName = TaskInput.Text;
            if (!string.IsNullOrWhiteSpace(taskName) && taskName != "Enter a task")
            {
                AddTask(taskName);
                TaskInput.Clear();
            }
            else
            {
                MessageBox.Show("Please enter a valid task.");
            }
        }

        public void AddTask(string taskName)
        {
            ToDoTask newTask = new ToDoTask(taskName, false);
            Tasks.Add(newTask);
        }

        private void MarkDone_Click(object sender, RoutedEventArgs e)
        {
            if (sender is Button button && button.DataContext is ToDoTask task)
            {
                task.IsDone = true;
                button.IsEnabled = false;
            }
        }

        private void DeleteTask_Click(object sender, RoutedEventArgs e)
        {
            if (sender is Button button && button.DataContext is ToDoTask task)
            {
                Tasks.Remove(task);
            }
        }
        private void Logout_Click(object sender, RoutedEventArgs e)
        {
            // Close the main window and navigate back to the login page
            LoginWindow loginWindow = new LoginWindow();
            loginWindow.Show();
            this.Close(); // Close the current main window
        }

        private void RemovePlaceholder(object sender, RoutedEventArgs e)
        {
            if (TaskInput.Text == "Enter a task")
            {
                TaskInput.Text = "";
                TaskInput.Foreground = System.Windows.Media.Brushes.Black;
            }
        }

        private void AddPlaceholder(object sender, RoutedEventArgs e)
        {
            if (string.IsNullOrWhiteSpace(TaskInput.Text))
            {
                TaskInput.Text = "Enter a task";
                TaskInput.Foreground = System.Windows.Media.Brushes.Gray;
            }
        }
    }
}
