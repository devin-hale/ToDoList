export class Project {
    constructor(name) {
        this.pName = name;
        this.pId = Project.pLibraryIndex += 1;
        this.tasks = [];
    }

    addTask(taskName, date, priority, notes) {
        let newTask = {
            taskName: taskName,
            tID: Project.taskID +=1,
            date: date, 
            priority: priority, 
            notes: notes, 
            completed: false,}
        this.tasks.push(newTask)
    }

    static taskID = 0;

    static pLibraryIndex = 0;    

    //Global storage of all projects.
    static pLibrary = [];

    //Return Project Library.
    static getPLib() {
        return Project.pLibrary;
    }

    //Add an object to global project library.
    static pushPLib(object) {
        Project.pLibrary.push(object);
    }

    //Check if a project exists in the library, and removes it if true.
    static removePLib(object) {
        let index = Project.pLibrary.indexOf(object);
        if (index !== -1) {
            Project.pLibrary.splice(index, 1);
            return;
        }
        return "Project Not Found"
    }

    //Check if a project exists in the library, removes the old enry, and replaces it with the new entry.
    static updatePLib(object) {
        let index = Project.pLibrary.indexOf(object);
        if (index !== -1) {
            Project.pLibrary.splice(index, 1, object);
        }
        return "Project Not Found"
    }

    
}