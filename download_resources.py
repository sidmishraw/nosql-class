#!/usr/bin/env

# download_resources.py
# -*- coding: utf-8 -*-
# @Author: Sidharth Mishra
# @Date:   2017-04-14 12:24:01
# @Last Modified by:   Sidharth Mishra
# @Last Modified time: 2017-04-14 12:40:34

__author__ = 'sidmishraw'


# python standard library imports
from subprocess import call

download_links = [
'https://www.cs.sjsu.edu/~kim/nosql/contents/cs157a_handouts/JDBC/faculty.txt',
'https://www.cs.sjsu.edu/~kim/nosql/contents/cs157a_handouts/JDBC/students.txt',
'https://www.cs.sjsu.edu/~kim/nosql/contents/cs157a_handouts/JDBC/DriverManagerTester.java',
'https://www.cs.sjsu.edu/~kim/nosql/contents/cs157a_handouts/JDBC/DataSourceTester.java',
'https://www.cs.sjsu.edu/~kim/nosql/contents/cs157a_handouts/JDBC/DataSourceTester.java',
'https://www.cs.sjsu.edu/~kim/nosql/contents/cs157a_handouts/JDBC/db.properties',
'https://www.cs.sjsu.edu/~kim/nosql/contents/cs157a_handouts/JDBC/JDBCExample.java',
'https://www.cs.sjsu.edu/~kim/nosql/contents/cs157a_handouts/JDBC/JDBCStatementExample.java',
'https://www.cs.sjsu.edu/~kim/nosql/contents/cs157a_handouts/JDBC/JDBCPreparedStatementExample.java',
'https://www.cs.sjsu.edu/~kim/nosql/contents/cs157a_handouts/JDBC/JDBCCallableStatementExample.java',
'https://www.cs.sjsu.edu/~kim/nosql/contents/cs157a_handouts/handouts/JDBC/ExceptionExample.java',
'https://www.cs.sjsu.edu/~kim/nosql/contents/cs157a_handouts/handouts/JDBC/JDBCResultSet.java'
]


if __name__ == '__main__':

  call(['wget', '--no-check-certificate', '--user=spring17cs185c', \
    '--password=myfirstnosql', *download_links])