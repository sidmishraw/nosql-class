DROP TABLE IF EXISTS BOOK;
CREATE TABLE BOOK
(title VARCHAR(50),
 author VARCHAR(30),
 copies INT,
 PRIMARY KEY(title)
);
DROP TABLE IF EXISTS USER;
CREATE TABLE USER
(uID INT,
 uNAME VARCHAR(30),
 age INT,
 loaned INT,
 PRIMARY KEY (uID)
); 
DROP TABLE IF EXISTS LOAN;
CREATE TABLE LOAN
(uID INT,
 title VARCHAR(50),
 loanDate DATE DEFAULT '0000-00-00',
 overdue BOOLEAN DEFAULT FALSE,
 PRIMARY KEY(uID,title,loanDate)
); 
.separator ","
.import user.csv user
.import book.csv book
.import loan.csv loan 
