    USE employee_db;

    INSERT INTO department (name)
    VALUES ('Sales'),
           ('Finance'),
           ('Management'),
           ('Warehouse');

    INSERT INTO role (title, salary, department_id)
    VALUES ('Regional Manager', 150000, 1),
           ('Salesperson', 75000, 1),
           ('Account Manager', 90000, 2),
           ('Accountant', 55000, 2),
           ('Management', 200000, 3),
           ('Human Resources', 150000, 3),
           ('Warehouse Manager', 60000, 4),
           ('Warehouse Employee', 30000, 4);

    INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES ('Michael', 'Scott', 1, NULL),
           ('Dwight', 'Schrute', 2, 1),
           ('Angela', 'Martin', 3, NULL),
           ('Kevin', 'Malone', 4, 3),
           ('Jan', 'Levinson', 5, NULL),
           ('Toby', 'Flenderson', 6, 5),
           ('Darryl', 'Philbin', 7, NULL),
           ('Roy', 'Anderson', 8, 7);

    -- ROLES:
    -- Total of Managers is 4
    -- Total of Regular Employees is 4
    -- Total of employees is 8