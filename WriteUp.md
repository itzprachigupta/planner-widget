# planner-widget

####### Why the Plannar Widget was Built #####
The Plannar widget was built to provide users with a convenient and efficient way to manage their tasks and stay organized within the planner app. It addresses the need for a centralized tool that allows users to easily view, add, and track their to-do items directly from the home screen. How can we imagine a planner app without thinking of to do list as it will help us to manage our day to day task.


########  How the Plannar Widget Works ######
=>Viewing Tasks: The Plannar widget displays a list of tasks that users have added. It provides a quick overview of upcoming and ongoing tasks, allowing users to prioritize and plan their activities effectively.
=>Adding New Tasks: Users can easily add new tasks to the widget by entering the task details through the provided input field. Once added, the task will appear in the list of tasks.

#########  Functionality of code  ###########
In this code, I've added the necessary functionality to manage a simple Plannar widget. The tasks state array holds the list of tasks, and the newTask state variable is used to capture the input for a new task.
The addTask function is called when the "Add Task" button is clicked. It checks if the new task input is not empty, adds the task to the tasks array, and clears the newTask input.
The deleteTask function is called when the "Delete" button next to a task is clicked. It removes the corresponding task from the tasks array.