    const { prompt } = require('inquirer');
    const figlet = require('figlet');
    const db = require("./db");
    require('console.table');

    program();

    function program() {
        figlet('Employee DB', function(err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data)
        });

        initialize();
    }

    function initialize() {
        prompt([
            {
                type: "list",
                name: "choice",
                message: "Select an option:",
                choices: [
                    {
                        name: "View ALL data:",
                        value: "FILTER_BY_ALL"
                    },
                    {
                        name: "FILTER employees by ROLE:",
                        value: "FILTER_BY_ROLE"
                    },
                    {
                        name: "FILTER employees by DEPARTMENT:",
                        value: "FILTER_BY_DEPT"
                    },
                    {
                        name: "FILTER employees by SALARY:",
                        value: "FILTER_BY_SALARY"
                    },
                    {
                        name: "CREATE new employee:",
                        value: "NEW_EMPLOYEE"
                    }
                ]
            }
        ]).then(res => {
            let answer = res.answer;
            switch (answer) {
                case 'FILTER_BY_ALL':
                    filterBy_all();
                    break;
                case 'FILTER_BY_ROLE':
                    filterBy_role();
                    break;
                case 'FILTER_BY_DEPT':
                    filterBy_department();
                    break;
                case 'FILTER_BY_SALARY':
                    filterBy_salary();
                    break;
                default:
                    quit();
            }
        })
    }

    function filterBy_all(){
        db.search_all().then(([rows]) => {
            let employees = rows;
            console.log("\n");
            console.table(employees);
        }).then(() => initialize());
    }