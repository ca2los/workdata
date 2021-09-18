    const connection = require("../config/connection");
    
    class DATABASE {

        constructor(connection) {
            this.connection = connection;
        }

        // FILTER: Employee ALL
        filterBy_all() {
            return this.connection.promise().query (
                "SELECT employee.first_name, employee.last_name, role.title AS role, role.salary FROM employee LEFT JOIN role ON employee.id = role.id ORDER BY employee.first_name;"
            );
        }

        // FILTER: Employee BY Role ID
        filterBy_role() {
            return this.connection.promise().query (
                "SELECT employee.first_name, role.title FROM employee LEFT JOIN role ON employee.id = role.id ORDER BY employee.first_name;"
            );
        }

        // FILTER: Employee BY Department NAME
        filterBy_department() {
            return this.connection.promise().query (
                "SELECT employee.first_name, department.name FROM employee LEFT JOIN department ON employee.id = department.id ORDER BY employee.first_name;"
            );
        }

        // FILTER: Employee BY Role SALARY
        filterBy_salary() {
            return this.connection.promise().query (
                "SELECT employee.first_name, employee.last_name, role.salary FROM employee LEFT JOIN role ON employee.id = role.id ORDER BY employee.first_name;"
            );
        }

        // POST: Create Employee
        postBy_employee() {
            return this.connection.promise().query (
                "INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES (?,?,?,?);"
            );
        }

    }
    
    module.exports = new DATABASE(connection);