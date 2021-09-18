    const { prompt } = require('inquirer');
    const figlet = require('figlet');
    const connection = require("./config/connection");
    require('console.table');

    program();

    function program() {
        figlet('Employee DB', function(err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data);
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
                        name: "VIEW ALL DATA",
                        value: "FILTER_BY_ALL"
                    },
                    {
                        name: "FILTER employees by ROLE",
                        value: "FILTER_BY_ROLE"
                    },
                    {
                        name: "FILTER employees by DEPARTMENT",
                        value: "FILTER_BY_DEPT"
                    },
                    {
                        name: "FILTER employees by SALARY",
                        value: "FILTER_BY_SALARY"
                    },
                    {
                        name: "CREATE employee",
                        value: "NEW_EMPLOYEE"
                    }
                ]
            }
        ]).then(res => {
            let answer = res.answer;
            switch (answer) {
                case 'FILTER_BY_ALL':
                    get_all();
                    break;
                case 'FILTER_BY_ROLE':
                    get_role();
                    break;
                case 'FILTER_BY_DEPT':
                    get_department();
                    break;
                case 'FILTER_BY_SALARY':
                    get_salary();
                    break;
                case 'NEW_EMPLOYEE':
                    post_employee();
                    break;
            }
        })
    }

    function get_all(){
        return this.connection.promise().query (
            "SELECT employee.first_name, employee.last_name, role.title AS role, role.salary FROM employee LEFT JOIN role ON employee.id = role.id ORDER BY employee.first_name;"
        );
    }

    function get_role(){
        return this.connection.promise().query (
            "SELECT employee.first_name, role.title FROM employee LEFT JOIN role ON employee.id = role.id ORDER BY employee.first_name;"
        );
    }

    function get_department(){
        return this.connection.promise().query (
            "SELECT employee.first_name, department.name FROM employee LEFT JOIN department ON employee.id = department.id ORDER BY employee.first_name;"
        );
    }

    function get_salary(){
        return this.connection.promise().query (
            "SELECT employee.first_name, employee.last_name, role.salary FROM employee LEFT JOIN role ON employee.id = role.id ORDER BY employee.first_name;"
        );
    }

    function post_employee(){
        return this.connection.promise().query (
            "INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES (?,?,?,?);"
        );
    }