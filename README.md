
    #Three projects Features

    Feature-1:Credit Hour Limit Enforcement.
        Description: Ensure that students cannot select courses that would exceed the maximum credit hour limit of 20. When a student attempts to select a course that would exceed this limit, display a toast notification explaining the limitation and preventing the course selection.

    Feature-2:Duplicate Course Prevention.
        Description: Implement a mechanism that checks if a student has already selected a particular course. If the same course is selected again, display a toast notification indicating that the course has already been chosen, and do not allow duplicate entries for the same course in the selected courses list.

    Feature-3:Course Registration Summary.
        Description: Create a section or page where students can review their selected courses and view the total credit hours accumulated. Provide a clear and organized summary to help students verify their choices before finalizing their registration.
        These features will enhance the usability and functionality of your course registration website by enforcing credit hour limits, preventing duplicate course selections, and providing a convenient summary of the selected courses.



    #In the course registration project, state is managed as follows:

        01-Selected Courses State:

            State Variable: selectedCourses (array) to store selected courses.
            Usage: Courses are added to this array when selected.
        
        02-Total Credit Hours State:
            State Variable: totalCreditHours (number) to track total credit hours.
            Usage: Credit hours of selected courses are summed up here.

        03-Credit Hour Limit Check:
            Constraint: Credit hour limit of 20 is enforced.
            Usage: Before adding a course, check if limit would be exceeded.

        04-Duplicate Course Prevention:
            Constraint: Prevent selecting the same course twice.
            Usage: Check if course is already in selectedCourses.

        05-UI Rendering:
            Course List: Render available courses with "Select" buttons.
            Selected Courses: Display selected courses and total credit hours.

        06-Reactive Updates:
            State changes trigger UI updates, ensuring synchronization.

    By managing state this way, the project enforces constraints and provides real-time feedback to users through toast notifications, creating a user-friendly course registration experience.








