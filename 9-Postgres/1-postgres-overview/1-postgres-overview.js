/* 
  What is a Database?

    There's no single definition for the word database. In general, databases are systems for managing information - it's a place where information is stored
    in a hard drive.
    
    Databases can have varying amounts of structure imposed on the data. When the data is more structured, it can help people and computers work with the data more efficiently.

  What is a Relational Database?

    Relational databases are probably the best known kind of database. At their heart, relational databases are made up of tables, which are a lot like spreadsheets. Each column in the table has a name and a data type (text, number, etc.), and each row in the table is a specific instance of whatever the table is "about." The "relational" part comes with specific rules about how to connect data between different tables.
      - https://mystery.knightlab.com/walkthrough.html


    The basic actions needed for a database:
      CRUD - 
        Create
        Read
        Update
        Delete

    Different categories of databases in the modern web development world
      - Relational (aka SQL -> Postgres is a popular non-relational database management system) -> are optimized for writing information
      - Non-relational (aka NoSQL -> MongoDB is a popular non-relational database management system) -> optimized for reading information
      - Key-value
      - ...

    Data Normalization?
      It is the process of structuring a database, usually a relational database, in accordance with a series of so-called normal forms in order to reduce data 
      redundancy and improve data integrity.
        - Wikipedia

      To put it more simply, we don't want repeated data and we want to ensure things like consistant, clean data (ie no missing fields) that is properly
      going in and out of our database.
*/

/* 
  Quick thought experiment:
    Let's say we're building an app of a library. Consider what a table (in a relational database) would look like - for example
    what information or attributes would be associated with each table)
    

    What would the table for a book look like?
    What would the table for an author look like?

    Our database will be a Library
      
    -Tables below-
      
      Book:
        id:
        Title:
        Author: authorId
        Genre:
      
      Author:
        id:
        Name: 
        Books: 


      -Table Entries below-

      Book Instance:
        id: 1
        name: Black God
        author: [32]
        genre: non-fiction

      Author Instance:
        id: 32
        name: Supreme Understanding
        books: [1, 3, 139]

    Notice how the author instance shares the book id's instance and vice versa

*/

/*
  What is SQL?
    It stands for: Structured Query Language
  
    SQL is a language that's universally used and adapted to interact with relational databases! (A database management language).
    So when you use a SQL client and connect to relational database that contains tables with data, the scope of what you can do with 
    SQL commands includes:
      - Inserting data
      - Querying or retrieving data
      - Updating or deleting data
      - Creating new tables and entire databases
      - Controlling permissions of who can access the data

  Why is SQL Important?
    A database is just a repository for storing data. You need to use systems to dictate how that data will be stored and how clients will interact with it.
    We call these system database management systems.

      - MySQL
      - SQLite
      - PostgeSQL <--- this is what we will be using!

    All of these management systems use SQL (or some version of it) as a language for managing data in the system.
*/

/*
  How to install for Mac:
    1- Go to link -> https://postgresapp.com/
    2- Will also need to set PATH variable (https://postgresapp.com/documentation/cli-tools.html)

      OR

    For just CLI -
      1- In Terminal: brew install postgres


  How to install for Windows:

    1- Download / Install from here https://www.postgresql.org/download/windows/
    2- Add this to your PATH environment variable (13 is the version number) -> C:\Program Files\PostgreSQL\13\bin
      -> Link -> https://sqlbackupandftp.com/blog/setting-windows-path-for-postgres-tools


  How to login to Postgres after installed with CLI tools:

    First check for installation:
    - psql --version

    Windows:
    - psql -U postgres

    Mac:
    - psql
*/

/* 
  SQL Style Guide:
    - Fields should always be lower case.
    - SQL keywords should always be upper case.
    - Never name a field id; always correlate it to the table.
    - Always check your company's style guide or follow the convention -> don't create your own style.
      - https://www.sqlstyle.guide/

  How to quit out of psql (postgreSQL)
    1. \q
    2. ctrl + c

*/


/*
  More on the Relational Model
    - So each table is 'related' to another table (within a given db) in some way. This is organizing the data into one more
    tables of columns and rows, with a unique key identifying each row. Each row is known as a 'record' / 'entry'...
    
    Relational Mapping
      - Relationships happen when we start to see multiple occurences of duplicative information - or when one object
      needs to relate / connect to another object.
*/

/*
  Primary Key:
    A column or group of columns that uniquely identifies a row. Every table should have a primary key;
    a table cannot have more than one primary key.

  Foreign Key:
    A column or group of columns in one table whose values must have matching values in the primary key of another
    (or the same) table. A foreign key is said to reference its primary key.

  Foreign Key Constraint:
    - A foreign key constraint specifies that the values in a column (or a group of columns) must match the values appearing
      in some row of another table. We say this maintains the referential integrity between two related tables.
        -> https://www.postgresql.org/docs/9.4/ddl-constraints.html
  .........................................
  GO TO CHALLENGE IN CLASS EXERCISES FOLDER
*/