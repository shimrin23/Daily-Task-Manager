using System.Windows;

namespace TaskManager
{
    public partial class LoginWindow : Window
    {
        public LoginWindow()
        {
            InitializeComponent();
        }

        private void Login_Click(object sender, RoutedEventArgs e)
        {
            string username = UsernameInput.Text;
            string password = PasswordInput.Password;

            // Example credentials for demonstration (this can be replaced with database validation)
            if (username == "admin" && password == "password")
            {
                // Login successful, show main window
                MainWindow mainWindow = new MainWindow();
                mainWindow.Show();
                this.Close(); // Close the login window
            }
            else
            {
                // Display error message
                ErrorMessage.Text = "Invalid username or password!";
                ErrorMessage.Visibility = Visibility.Visible;
            }
        }
    }
}
