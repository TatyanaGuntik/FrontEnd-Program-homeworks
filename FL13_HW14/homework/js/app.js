function Student(name, email) {
    this.name = name;
    this.email = email;
    this.homeworkResults = [];

    const getName = () => this.name;
    const getEmail = () => this.email;
    const addHomeworkResult = (topic, success) => this.homeworkResults.push({topic, success});
    const getHomeworkResult = () => this.homeworkResults;
    const getFailCount = () => {
        let result = 0;
        this.homeworkResults.forEach(val => {
            if (!val['success']) {
                result++;
            }
        });

        return result;
    }

    return {getName, getEmail, getHomeworkResult, addHomeworkResult, getFailCount};
}

function FrontendLab(students, failedLimit) {
    this.list = {};
    this.failedLimit = failedLimit;

    students.forEach((val) => {
        this.list[val['email']] = new Student(val['name'], val['email']);
    });

    const printStudentsList = () => {
        for (let i in this.list) {
            console.log('name: ' + this.list[i].getName() + ', email: ' + this.list[i].getEmail());
            console.log(this.list[i].getHomeworkResult());
        }
    }

    const printStudentsEligibleForTest = () => {
        for (let i in this.list) {
            this.list[i].getFailCount();
            if (this.list[i].getFailCount() <= this.failedLimit) {
                console.log('name: ' + this.list[i].getName() + ', email: ' + i);
            }
        }
    }

    const addHomeworkResults = (arr) => {
        let topic = arr['topic'];

        arr['results'].forEach((val) => {
            let email = val['email'];
            let studentObj = this.list[email];
            studentObj.addHomeworkResult(topic, val['success']);
        });

    }
    return {printStudentsList, addHomeworkResults, printStudentsEligibleForTest};
}

