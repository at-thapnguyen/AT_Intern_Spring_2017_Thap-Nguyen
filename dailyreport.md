####DAILY REPORT  DAY_04-04-2017

####LEARN SQL 

**1. No SQL and SQL** 
- SQL (Structured Query Language ) :  RELATIONAL DATABASES . SQL storage data format table contain row and column, each row will have key respectively. 

	|Id | Name| Address|Sex|
	|--------------|-------|------|-------|
	|Id1 | Thap | QuangNam | 1 | 
	| Id2| Huy| Da Nang | 0 | 
	| Id3 | Hung | Da Nang | 0 |

- No SQL :NON-RELATIONAL & DISTRIBUTED DATA :is a non-relational database management systems.Databases store document filed value pairs like JSON.

- {
  Id : Id1,
Name : " Thap",
 Address : "QuangNam",
 Sex : 1
}

**2. Google's DBMS** 

- Many projects at Google store data in Bigtable, including web indexing, Google Earth, and Google Finance.

- BigTable is not a relational database. It does not support joins nor does it support rich SQL-like queries.

- In order to manage the huge tables, Bigtable splits tables at row boundaries and saves them as tablets. A tablet is around 200 MB, and each machine saves about 100 tablets.

**3. Install PostgresSQL and PgAdmin3**

**4. Window function in postgresSql**

**Window functions** are a tool to perform advanced sorting and limiting on a subset of a joined table of data.
Some window functions include: 
`row-number()`,`rank()`,`dense_rank()`,`percent_rank()`,`cume_dist()`,`lag(value anyelement [, offset integer [, default anyelement ]])`,...	

**5. Storange engine in Mysql**

 **MyISAM engine :**

-  Charactericstic :

	+ full-text indexing
	+ compression.
	+ spatial functions (GIS)
	+ Do not support transaction 
	+ Do not support row-level-lock

- Storage :
	
	+ MyISAM table data stored each on two files: .MYD for data and .MYI. 
	+ Row 2 types: dynamic and static.

- Function :
	+ MyISAM lock entire table   
	+ MyISAM capable of self-repair and restore the data after the system crashed. 
	+ Use the command table check / repair tables for error checking and recovery after error. 
	+ MyISAM can full-text indexing, supports full-text search. 
	+ MyISAM does not write data to the hard drive immediately, but in the memory buffer is written to the first (and only write to the disk after 1 period), thereby increasing the write speed. 
	+ MyISAM supports data compression, support speed data read

**INNODB ENGINE 2** 

- Characteristics 
	+ As most complex engine in the engine of MySQL 
	+ Support transactions 
	+ Support to recover, repair fine 

- Storage : 
InnoDB data stored on one file (technically known as tablespace).

**MEMORY:**

- Characteristic 
	+ This type of storage engine does not save data to the hard drive that is stored directly on the RAM. 
	+ Used as a temporary table contains data, contains the user's session. 

- Storage : All database stored in RAM
- Function :
	+ After a server restart, the table structure is conserved, the data is lost.
	+ Memory engine uses HASH indexes should be very fast for query lookup.
	+ Memory engine use table-level locking so the computer does higher concurrency.
