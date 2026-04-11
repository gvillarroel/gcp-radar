---
title: "Python Client for Cloud Spanner \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/spanner/latest
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/spanner/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/spanner/latest
  title: "Python Client for Cloud Spanner \_|\_ Python client libraries \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Python Client for Cloud Spanner
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
3.63.0 (latest)
3.62.0
3.61.0
3.60.0
3.59.0
3.58.0
3.57.0
3.56.0
3.55.0
3.54.0
3.53.0
3.52.0
3.51.0
3.50.1
3.46.0
3.45.0
3.44.0
3.43.0
3.42.0
3.41.0
3.40.1
3.39.0
3.38.0
3.37.0
3.36.0
3.35.1
3.34.0
3.33.0
3.32.0
3.31.0
3.30.0
3.29.0
3.28.0
3.27.1
3.26.0
3.25.0
3.24.0
3.23.0
3.22.2
3.21.0
3.20.0
3.19.0
3.18.0
3.17.0
3.16.0
3.15.1
3.14.1
3.13.0
3.12.1
3.11.1
3.10.0
3.9.0
3.8.0
3.7.0
3.6.0
3.5.0
3.4.0
3.3.0
3.2.0
3.1.0
3.0.0
2.1.1
2.0.0
1.19.3
1.18.0
1.17.1
1.16.0
1.15.1
1.14.0
1.13.0
1.12.0
1.11.0
1.10.0
Cloud Spanner is the world’s first fully managed relational database service
to offer both strong consistency and horizontal scalability for
mission-critical online transaction processing (OLTP) applications. With Cloud
Spanner you enjoy all the traditional benefits of a relational database; but
unlike any other relational database service, Cloud Spanner scales horizontally
to hundreds or thousands of servers to handle the biggest transactional
workloads.
Client Library Documentation
Product Documentation
Quick Start
In order to use this library, you first need to go through the following steps:
Select or create a Cloud Platform project.
Enable billing for your project.
Enable the Google Cloud Spanner API.
Setup Authentication.
Installation
Install this library in a virtualenv using pip. virtualenv is a tool to
create isolated Python environments. The basic problem it addresses is one of
dependencies and versions, and indirectly permissions.
With virtualenv , it’s possible to install this library without needing system
install permissions, and without clashing with the installed system
dependencies.
Supported Python Versions
Python >= 3.9
Deprecated Python Versions
Python == 2.7.
Python == 3.5.
Python == 3.6.
Python == 3.7.
Python == 3.8.
Mac/Linux
pip install virtualenv
virtualenv <your-env>
source <your-env>/bin/activate
<your-env>/bin/pip install google-cloud-spanner
Windows
pip install virtualenv
virtualenv <your-env>
<your-env>\Scripts\activate
<your-env>\Scripts\pip.exe install google-cloud-spanner
Example Usage
Executing Arbitrary SQL in a Transaction
Generally, to work with Cloud Spanner, you will want a transaction. The
preferred mechanism for this is to create a single function, which executes
as a callback to database.run_in_transaction :
# First, define the function that represents a single "unit of work"
# that should be run within the transaction.
def update_anniversary(transaction, person_id, unix_timestamp):
# The query itself is just a string.
#
# The use of @parameters is recommended rather than doing your
# own string interpolation; this provides protections against
# SQL injection attacks.
query = """SELECT anniversary FROM people
WHERE id = @person_id"""
# When executing the SQL statement, the query and parameters are sent
# as separate arguments. When using parameters, you must specify
# both the parameters themselves and their types.
row = transaction.execute_sql(
query=query,
params={'person_id': person_id},
param_types={
'person_id': types.INT64_PARAM_TYPE,
},
).one()
# Now perform an update on the data.
old_anniversary = row[0]
new_anniversary = _compute_anniversary(old_anniversary, years)
transaction.update(
'people',
['person_id', 'anniversary'],
[person_id, new_anniversary],
)
# Actually run the `update_anniversary` function in a transaction.
database.run_in_transaction(update_anniversary,
person_id=42,
unix_timestamp=1335020400,
)
Select records using a Transaction
Once you have a transaction object (such as the first argument sent to
run_in_transaction ), reading data is easy:
# Define a SELECT query.
query = """SELECT e.first_name, e.last_name, p.telephone
FROM employees as e, phones as p
WHERE p.employee_id == e.employee_id"""
# Execute the query and return results.
result = transaction.execute_sql(query)
for row in result.rows:
print(row)
Insert records using Data Manipulation Language (DML) with a Transaction
Use the execute_update() method to execute a DML statement:
spanner_client = spanner.Client()
instance = spanner_client.instance(instance_id)
database = instance.database(database_id)
def insert_singers(transaction):
row_ct = transaction.execute_update(
"INSERT Singers (SingerId, FirstName, LastName) "
" VALUES (10, 'Virginia', 'Watson')"
)
print("{} record(s) inserted.".format(row_ct))
database.run_in_transaction(insert_singers)
Insert records using Mutations with a Transaction
To add one or more records to a table, use insert :
transaction.insert(
'citizens',
columns=['email', 'first_name', 'last_name', 'age'],
values=[
['phred@exammple.com', 'Phred', 'Phlyntstone', 32],
['bharney@example.com', 'Bharney', 'Rhubble', 31],
],
)
Update records using Data Manipulation Language (DML) with a Transaction
spanner_client = spanner.Client()
instance = spanner_client.instance(instance_id)
database = instance.database(database_id)
def update_albums(transaction):
row_ct = transaction.execute_update(
"UPDATE Albums "
"SET MarketingBudget = MarketingBudget * 2 "
"WHERE SingerId = 1 and AlbumId = 1"
)
print("{} record(s) updated.".format(row_ct))
database.run_in_transaction(update_albums)
Update records using Mutations with a Transaction
Transaction.update updates one or more existing records in a table. Fails
if any of the records does not already exist.
transaction.update(
'citizens',
columns=['email', 'age'],
values=[
['phred@exammple.com', 33],
['bharney@example.com', 32],
],
)
Connection API
Connection API represents a wrap-around for Python Spanner API, written in accordance with PEP-249, and provides a simple way of communication with a Spanner database through connection objects:
from google.cloud.spanner_dbapi.connection import connect
connection = connect("instance-id", "database-id")
connection.autocommit = True
cursor = connection.cursor()
cursor.execute("SELECT * FROM table_name")
result = cursor.fetchall()
If using fine-grained access controls you can pass a database_role argument to connect as that role:
connection = connect("instance-id", "database-id", database_role='your-role')
Aborted Transactions Retry Mechanism
In !autocommit mode, transactions can be aborted due to transient errors. In most cases retry of an aborted transaction solves the problem. To simplify it, connection tracks SQL statements, executed in the current transaction. In case the transaction aborted, the connection initiates a new one and re-executes all the statements. In the process, the connection checks that retried statements are returning the same results that the original statements did. If results are different, the transaction is dropped, as the underlying data changed, and auto retry is impossible.
Auto-retry of aborted transactions is enabled only for !autocommit mode, as in autocommit mode transactions are never aborted.
Next Steps
See the Client Library Documentation to learn how to connect to Cloud
Spanner using this Client Library.
Read the Product documentation to learn
more about the product and see How-to Guides.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
