---
title: "The Publisher Query Language (PQL) Developer's Guide \_|\_ Ad Manager SOAP\
  \ API \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/pqlreference
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/authentication
source_metadata:
  url: https://developers.google.com/ad-manager/api/pqlreference
  title: "The Publisher Query Language (PQL) Developer's Guide \_|\_ Ad Manager SOAP\
    \ API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Looking for a REST API? The Ad Manager API (Beta) is now available.
Home
Products
Ad Manager
SOAP API
Send feedback
The Publisher Query Language (PQL) Developer's Guide
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
PQL is a SQL-like language used for querying objects with a syntax similar to SQL.
The basic PQL syntax includes clauses for filtering with WHERE , ordering results with ORDER BY , and limiting results with LIMIT .
PQL supports various conditions for filtering, including equality ( = , != ), list matching ( IN , NOT IN ), wildcard matching ( LIKE ), and checking for null values ( IS NULL ).
Bind variables using a colon prefix can be used in place of hard-coded values in PQL queries.
PQL can be used to fetch data from match tables or PublisherQueryLanguageService tables to supplement report data.
PQL syntax and usage
PQL is a SQL-like language for querying objects. The PQL syntax is
similar to that of SQL, with a few differences described here. This section
describes the PQL syntax, and how to use it to filter various object types.
The PQL syntax can be summarized as follows:
[WHERE <condition> {[AND | OR] <condition> ...}]
[ORDER BY <property> [ASC | DESC]]
[LIMIT {[<offset>,] <count>} | {<count> OFFSET <offset>}]
< condition > : = <property> { = | != } <value>
< condition > : = <property> { = | != } <bind variable>
< condition > : = <property> IN <list>
< condition > : = NOT <property> IN <list>
< condition > : = <property> LIKE <wildcard%match>
< condition > : = <property> IS NULL
< bind variable > : = :<name>
Important:
The ReportService only supports a subset of PQL syntax. See the ReportQuery
documentation for details.
Notes
PQL keywords are not case sensitive.
Strings are escaped automatically when used in bind parameters. Otherwise:
For a string within single quotes (apostrophes), escape any
additional apostrophe by writing it as a pair of single quotes.
Example: "WHERE name = 'Company''s name'"
Keywords (case-insensitive)
WHERE - Expresses a set of zero or more conditions,
optionally joined using AND or OR phrases. You can bundle AND or OR phrases
with parentheses. Executing the query "" (empty
string) returns everything.
Examples: WHERE width = 728
WHERE width = 728 AND height = 90
WHERE (width = 728 AND height = 90) OR id IN (5008, 8745, 3487)
OR - Joins multiple conditions, only one of which must
be true. If you want to check for any of several values for a single
property, consider using an IN clause.
Example: WHERE width = 728 OR height = 90
AND - Joins multiple conditions that must all be
satisfied using the AND clause.
Example: WHERE type = 'AGENCY' AND name IN ('CompanyNameA',
'CompanyNameB')
ORDER BY - Sorts the returned results in either
ascending ( ASC where 'A' is first) or descending
( DESC where 'A' is last) order. If the direction is not
specified, it defaults to ASC . If this clause is not included
the default is ASC on the first field.
Example: WHERE id IN (5008, 8745, 3487) ORDER BY id
LIMIT - The number of results to return. The
LIMIT can also include an <offset> , which is
how many rows from the start to offset your result set.
Examples (both examples return the same result set):
WHERE type = 'AGENCY' LIMIT 50 OFFSET 50
WHERE type = 'AGENCY' LIMIT 50,50
OFFSET - The offset into the result set to begin
returning values. Use this to page through results.
Example (returns results 51-100):
WHERE type = 'AGENCY' LIMIT 50 OFFSET 50 .
<property> - One of the properties exposed by the
object. Each object exposes different properties that you can filter by,
using PQL; you usually cannot filter on all properties supported by an
object, so check the list below to see which properties support PQL queries.
For example, the creative properties you can filter by include id ,
name , width , and height .
<value> - String values should be quoted with a
single (') quotation mark. Number values can be quoted or unquoted. Wildcards
are not supported.
IN - Compares the value of a property to each item in a
list; if any one matches, it is a positive match. The IN
operator is equivalent to many = queries, one for each value,
that are ORed together. The values are specified as a comma-separated list of
values, enclosed in parentheses: (a, b, c). All of the values in the list are
evaluated.
Example: WHERE name IN ('CompanyNameA', 'CompanyNameB')
NOT IN - Compares the value of a property to each item
in a list; if none match, it is a positive match. The NOT IN
operator is equivalent to many != queries, one for each value,
that are ORed together. The values are specified as a comma-separated list of
values, enclosed in parentheses: (a, b, c). All of the values in the list are
evaluated.
Example: WHERE NOT name IN ('CompanyNameA', 'CompanyNameB')
LIKE - Enables you to query for objects using wildcard
string matching. The percent sign ( % ) represents zero, one, or
multiple characters. Use a pair to enclose the search string being matched.
Examples: WHERE name LIKE 'foo %searchString% bar'
WHERE name LIKE 'Aus%'
IS NULL - Enables you to query for objects with an
undefined property value. The classic example of this is querying for the
root AdUnit by querying for an AdUnit with a null
parent ID.
Example: WHERE parentId IS NULL .
<bind variable> - You can use Value
objects in place of hard-coded <value> values in your PQL query. A bind
variable is referred to in PQL using a string name without spaces, starting
with a : (colon).
Example (Creates a query and enters two variables in place of
hard-coded id and status property
values):
// Create two mapped parameters : id and status
String_ValueMapEntry [] values = new String_ValueMapEntry [ 2 ];
values [ 0 ] = new String_ValueMapEntry ( "id" , new NumberValue ( null , "123" ));
values [ 1 ] = new String_ValueMapEntry ( "status" , new TextValue ( null , "APPROVED" ));
// Create our statement and map our bind variables
Statement statement = new Statement ();
statement . setQuery ( "WHERE id = :id AND status = :status LIMIT 500" );
statement . setValues ( values );
DateTime fields - You can filter by date and time by
assigning a DateTime value to a bind variable, or by using a
string formatted according to ISO 8601.
// Create a bind variable : startDateTime
String_ValueMapEntry [] values = new String_ValueMapEntry [ 1 ];
values [ 0 ] = new String_ValueMapEntry ( "startDateTime" , new DateTimeValue ( null , dateTime ));
// Create our statement and map our bind variables
Statement statement = new Statement ();
statement . setQuery ( "WHERE endDateTime :startDateTime LIMIT 500" );
statement . setValues ( values );
Fetching match tables with PQL
Match tables provide a lookup mechanism for the raw values contained within
data transfer files, allowing you to match ad serving information (such as ad
unit or line item) to pre-assigned values stored in the database.
If you're running reports through the ReportService or
with Data Transfer
reports , you might want to supplement your report data with additional
fields. For example, with a report that has the dimension LINE_ITEM_ID
or with a data transfer event that has the field LineItemId ,
you can create a match table that includes each line item's start date,
end date, type, status, and other useful attributes.
There are several ways to accomplish this matching functionality:
Use the premade match tables provided by the
BigQuery Data Transfer Service . Note that these match tables do not contain every entity field.
An efficient approach is to use any of the available PublisherQueryLanguageService
tables .
If there is no BigQuery or PQL table for the entity, or the table is missing fields that you need, you can go through that
entity's service directly, such as the OrderService .
Python
Set up a report query
Start by creating a report job, specifying your report parameters such as
dimensions, columns, and date range.
# Set the start and end dates of the report to run (past 8 days).
end_date = date . today ()
start_date = end_date - timedelta ( days = 8 )
# Create report job.
report_job = {
'reportQuery' : {
'dimensions' : [ 'LINE_ITEM_ID' , 'LINE_ITEM_NAME' ],
'columns' : [ 'AD_SERVER_IMPRESSIONS' , 'AD_SERVER_CLICKS' ,
'AD_SERVER_CTR' , 'AD_SERVER_CPM_AND_CPC_REVENUE' ,
'AD_SERVER_WITHOUT_CPD_AVERAGE_ECPM' ],
'dateRangeType' : 'CUSTOM_DATE' ,
'startDate' : start_date ,
'endDate' : end_date
}
}
Download the report
# Initialize a DataDownloader.
report_downloader = client . GetDataDownloader ( version = 'v202602' )
try :
# Run the report and wait for it to finish.
report_job_id = report_downloader . WaitForReport ( report_job )
except errors . AdManagerReportError as e :
print ( 'Failed to generate report. Error was: %s ' % e )
with tempfile . NamedTemporaryFile (
suffix = '.csv.gz' , mode = 'wb' , delete = False ) as report_file :
# Download report data.
report_downloader . DownloadReportToFile (
report_job_id , 'CSV_DUMP' , report_file )
Download data from the Line_Item PQL table
To match your report with additional line item data, you can use the Line_Item
PQL table.
# Create a PQL query to fetch the line item data
line_items_pql_query = ( 'SELECT Id, LineItemType, Status FROM LineItem' )
# Download the response from PQL select statement
line_items = report_downloader . DownloadPqlResultToList ( line_items_pql_query )
Join report data with line item data
This example uses the pandas
library since it makes working with tabular data much easier. Here, it's used
to join the report data with the PQL data to make a match table.
# Use pandas to join the two csv files into a match table
report = pandas . read_csv ( report_file . name )
line_items = pandas . DataFrame ( data = line_items [ 1 :], columns = line_items [ 0 ])
merged_result = pandas . merge ( report , line_items ,
left_on = 'Dimension.LINE_ITEM_ID' , right_on = 'id' )
merged_result . to_csv ( '~/complete_line_items_report.csv' , index = False )
View on GitHub
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],["PQL, a SQL-like language, queries objects using `WHERE`, `ORDER BY`, and `LIMIT` clauses. Conditions compare properties with `=`, `!=`, `IN`, `NOT IN`, `LIKE`, or `IS NULL` operators. Bind variables (`:\u003cname\u003e`) can replace hard-coded values. `AND`, `OR`, and parentheses combine conditions. `ORDER BY` sorts results; `LIMIT` sets result count and offset. PQL matches data transfer reports to database values via match tables, using `PublisherQueryLanguageService` or direct entity services. The steps to set up a report query, download a report, download PQL table data, and join the data using pandas, are given as an example.\n"]]
