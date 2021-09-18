    DROP DATABASE IF EXISTS employee_db;
    CREATE DATABASE employee_db;

    USE employee_db;

    CREATE TABLE department (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR (30) NOT NULL
    );

    CREATE TABLE role (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR (30) NOT NULL,
        salary DECIMAL UNSIGNED NOT NULL,
        department_id INT,
        FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
    );

    CREATE TABLE employee (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR (30) NOT NULL,
        last_name VARCHAR (30) NOT NULL,
        department_name TEXT,
        FOREIGN KEY (department_name) REFERENCES department(department_name) ON DELETE CASCADE,
        role_salary INT,
        FOREIGN KEY (role_salary) REFERENCES role(salary) ON DELETE CASCADE,
        role_id INT,
        FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
        manager_id INT,
        FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
    );

    -- GLOSSARY
    -- 01. UNSIGNED avoids negative numbers
    -- 02. INDEX is the quickest way to search for a value inside a row
    -- 03. CONSTRAINT maintains database consistency, prevents inconsistent data from being updated or inserted
    -- 04. ON DELETE CASCADE deletes all the rows related to the child table
    /*
    CREATE TABLE employee (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR (30) NOT NULL,
        last_name VARCHAR (30) NOT NULL,
        role_id INT UNSIGNED NOT NULL,
        INDEX role_index (role_id),
        CONSTRAINT role_constraint FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
        manager_id INT UNSIGNED,
        INDEX manager_index (manager_id),
        CONSTRAINT manager_constraint FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
    );
    CREATE TABLE role (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR (30) NOT NULL,
        salary DECIMAL UNSIGNED NOT NULL,
        department_id INT UNSIGNED NOT NULL,
        INDEX department_index (department_id),
        CONSTRAINT department_constraint FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
    );
     */