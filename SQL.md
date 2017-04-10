###EXERCISE SQL

#####BASIC SELECT

1. Query all columns for all American cities in CITY with populations larger than 100000. The CountryCode for America is USA.

`SELECT * 
FROM CITY
WHERE POPULATION > 100000
AND 
COUNTRYCODE = 'USA';`

2. Query the names of all American cities in CITY with populations larger than 120000. The CountryCode for America is USA.

`SELECT NAME
FROM CITY
WHERE POPULATION > 120000
AND COUNTRYCODE = 'USA';`

3. Query all columns (attributes) for every row in the CITY table.

`SELECT * 
FROM CITY;`

4. Query all columns for a city in CITY with the ID 1661.

`SELECT *
FROM CITY
WHERE ID = 1661;`

5. Query all attributes of every Japanese city in the CITY table. The COUNTRYCODE for Japan is JPN.

`SELECT * 
FROM CITY
WHERE COUNTRYCODE = 'JPN';`

6. Query the names of all the Japanese cities in the CITY table. The COUNTRYCODE for Japan is JPN.

`SELECT NAME 
FROM CITY
WHERE COUNTRYCODE = 'JPN';`

7. Query a list of CITY and STATE from the STATION table.

 `SELECT STATION.CITY,STATION.STATE
FROM STATION;`

8. Query a list of CITY names from STATION with even ID numbers only. You may print the results in any order, but must exclude duplicates from your answer.

`SELECT DISTINCT CITY 
FROM STATION 
WHERE MOD(STATION.ID,2) = 0;`

9. Let  be the number of CITY entries in STATION, and let  be the number of distinct CITY names in STATION; query the value of  from STATION. In other words, find the difference between the total number of CITY entries in the table and the number of distinct CITY entries in the table.

` SELECT COUNT(CITY)-COUNT(DISTINCT CITY) FROM STATION ;`

10. Query the list of CITY names starting with vowels (i.e., a, e, i, o, or u) from STATION. Your result cannot contain duplicates.

`SELECT DISTINCT CITY
FROM   STATION
WHERE  CITY RLIKE '^[aeiouAEIOU]'
` 

11. Query the list of CITY names ending with vowels (a, e, i, o, u) from STATION. Your result cannot contain duplicates.

`SELECT DISTINCT CITY
FROM STATION
WHERE CITY RLIKE '[AEIOU]$';`

12. Query the list of CITY names from STATION which have vowels (i.e., a, e, i, o, and u) as both their first and last characters. Your result cannot contain duplicates.

`SELECT DISTINCT CITY 
FROM STATION
WHERE CITY RLIKE '^[aeiou].*[aeiou]$';
`
13. Query the list of CITY names from STATION that do not start with vowels. Your result cannot contain duplicates.

`SELECT DISTINCT CITY 
FROM STATION
WHERE CITY NOT RLIKE '^[AEIOU]';`

14. Query the list of CITY names from STATION that do not end with vowels. Your result cannot contain duplicates.

`SELECT DISTINCT CITY 
FROM STATION
WHERE CITY NOT RLIKE '[AEIOU]$';`

15. Query the list of CITY names from STATION that either do not start with vowels or do not end with vowels. Your result cannot contain duplicates.

`SELECT DISTINCT CITY 
FROM STATION
WHERE CITY NOT RLIKE '^[aeiouAEIOU].*[aeiouAEIOU]$';`

16. Query the list of CITY names from STATION that do not start with vowels and do not end with vowels. Your result cannot contain duplicates.

` SELECT DISTINCT CITY 
FROM STATION  
WHERE CITY NOT RLIKE '^[aeiouAEIOU]' 
AND CITY NOT RLIKE '[aeiouAEIOU]$';`

18. Write a query that prints a list of employee names (i.e.: the name attribute) from the Employee table in alphabetical order.

` SELECT NAME 
FROM EMPLOYEE
ORDER BY NAME ASC;`

19.  Write a query that prints a list of employee names (i.e.: the name attribute) for employees in Employee having a salary greater than  per month who have been employees for less than  months. Sort your result by ascending employee_id.

` SELECT NAME 
FROM EMPLOYEE
WHERE SALARY > 2000 AND MONTHS <10
ORDER BY EMPLOYEE_ID ASC;`
 
#####Advanced Select Challenges

20. Write a query identifying the type of each record in the TRIANGLES table using its three side lengths. Output one of the following statements for each record in the table:

Not A Triangle: The given values of A, B, and C don't form a triangle.
Equilateral: It's a triangle with  sides of equal length.
Isosceles: It's a triangle with  sides of equal length.
Scalene: It's a triangle with  sides of differing lengths.

`SELECT  CASE
    WHEN A+B>C && B+C>A && A+C>B THEN
        CASE 
            WHEN A=B && B=C THEN 'Equilateral'
            WHEN A=B OR A=C OR B=C THEN 'Isosceles'
            ELSE 'Scalene'
        END
    ELSE 'Not A Triangle'
END
FROM TRIANGLES`

#####Basic Join Challenges

21. Given the CITY and COUNTRY tables, query the sum of the populations of all cities where the CONTINENT is 'Asia'.
Note: CITY.CountryCode and COUNTRY.Code are matching key columns.

`SELECT SUM(CITY.POPULATION)
FROM COUNTRY
INNER JOIN CITY
    ON COUNTRY.CODE = CITY.COUNTRYCODE
WHERE COUNTRY.CONTINENT='Asia';`

22.Given the CITY and COUNTRY tables, query the names of all cities where the CONTINENT is 'Africa'
Note: CITY.CountryCode and COUNTRY.Code are matching key columns.

`SELECT CITY.NAME 
FROM CITY, COUNTRY 
WHERE CITY.COUNTRYCODE = COUNTRY.Code AND CONTINENT = 'Africa' ;`

#####Aggregation Challenges

23. Query a count of the number of cities in CITY having a Population larger than 100,000.
`SELECT COUNT(POPULATION)

FROM CITY
WHERE POPULATION > 100000;`

24. Query the total population of all cities in CITY where District is California.

`SELECT SUM(POPULATION)
FROM CITY
WHERE DISTRICT = "California";`

25. Query the average population of all cities in CITY where District is California.

`SELECT AVG(POPULATION)
FROM CITY
WHERE DISTRICT = 'California';
`
