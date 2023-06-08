# ToDoList

This is an app created as part of my learning in The Odin Project that can create separate projects, hold tasks within those projects, and visually display all of that on the screen.  All of it is saved in and loaded from localStorage.  The projects are created using a Library class.  Static methods are used on the class itself to store and modify global data.  Tasks for each project are stored in an array of objects as a property.  As far as I am aware everything functions more or less as I intended it to after a lot of duct tape.  However, I could be totally wrong.

# Takeaways

From the beginning I was confident in the fact that I had some semblance of a file structure and organization to the program.  I was _wrong_.
As I coded, requirements began to pop up that I didn't realize that I needed because they were not explicitly stated in the requirements.
What resulted was some fresh spaghetti and meatballs.

In the future, I want to spend more time planning/coding the logic _before_ doing anything with the DOM.  I thought what I had done with the library class was all that I would need, but I was wrong.
Also, a few other things:
  - Load/Save logic:
        - Not sure how this works at higher scale yet, especially with a database.
        - Right now, I'm kind of using video game save/load logic.
        - Anytime a change is made, pull the static user data array, and overwrite the corresponding localstorage object with it.
        - Upon load, check for save data, if it's found, load it into the static user data array.
        - I imagine at a larger scale, using DBs, this saving/loading happens with isolated instances of data, so big chunks of the DB aren't being re-written every single time you save/load.
  - Git:
        - I noticed that the further along the project progressed, and the longer any one coding session lasted, the time between my commits increased.
        - The slow spaghettification of my code made it so that providing descriptive commit messages was difficult.
        - My runaway brain would sometimes also just code and code and forget to commit and then realize I've done like 3-4 things in one commit.
        - I need to commit even smaller changes than I thought.

  - DOM Manipulation:
        - Writing to the DOM from a set of data is super easy.  Mapping data on the DOM, after it's written, to its corresponding data in a dataset, not so much.
        - Maybe I'm just really really bad.  I've asked online but the best method that accounts for any type of data sorting seems to be creating a unique ID for a data object,
            housing it in a property, and then assigning that id to the HTML id to the outermost HTML div that represents a data object.  This way, I can use this ID to immediately
            point to the corresponding object in an array.  There's still some jank involved.
        - In frustration, and reading ahead, I may have learned about the data binding that exists in React and other frameworks.  I really really like this.
  - Styling:
        - The project required everything be rendered via JS with no hardcoding in HTML.  Maybe it's because I'm bad at CSS, but it feels like this limits some CSS transitions and animations.
