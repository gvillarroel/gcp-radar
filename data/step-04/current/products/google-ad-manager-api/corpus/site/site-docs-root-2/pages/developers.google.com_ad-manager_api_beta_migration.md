---
title: "Migrate from the Ad Manager SOAP API \_|\_ Ad Manager API (Beta) \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/ad-manager/api/beta/migration
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/beta/getting-started
source_metadata:
  url: https://developers.google.com/ad-manager/api/beta/migration
  title: "Migrate from the Ad Manager SOAP API \_|\_ Ad Manager API (Beta) \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To discuss and provide feedback on our products, join the official Ad Manager Discord channel in the Google Advertising and Measurement Community server.
Home
Products
Ad Manager
API (Beta)
Send feedback
Migrate from the Ad Manager SOAP API
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Ad Manager SOAP API is a legacy API, and migration to the Ad Manager API (Beta) is recommended.
Ad Manager API (Beta) service methods have equivalent concepts to the Ad Manager SOAP API.
Authentication for the Ad Manager API (Beta) can use existing Ad Manager SOAP API credentials or new ones after enabling the Ad Manager API in Google Cloud.
There are significant syntax differences in the filter language between the two APIs, including case-sensitive operators and changes to string matching and clause formatting.
The Ad Manager API (Beta) uses pagination tokens instead of LIMIT and OFFSET clauses for paging through large result sets.
The Ad Manager SOAP API is a legacy API for reading and writing your Ad Manager
data and running reports. If you can migrate, we recommend using the Ad Manager
API (Beta). However, Ad Manager SOAP API versions are supported for their
typical lifecycle. For more information, see the Ad Manager SOAP API
Deprecation Schedule .
The following guide outlines differences between the Ad Manager SOAP
API and the Ad Manager API (Beta).
Learn
The standard Ad Manager SOAP API service methods have equivalent
concepts in the Ad Manager API. The Ad Manager API also has methods for reading
single entities. The following table shows an example mapping for Order
methods:
SOAP method
REST methods
getOrdersByStatement
networks.orders.get
networks.orders.list
Authenticate
To authenticate with the Ad Manager API (Beta), you can use your existing
Ad Manager SOAP API credentials or create new ones. With either option, you must
first enable the
Ad Manager API in your
Google Cloud project. For more details, see
Authentication .
If you are using a client library, set up application default credentials by
setting the environment variable GOOGLE_APPLICATION_CREDENTIALS to the path of
your service account key file. For more details, see
How Application Default Credentials works .
If you are using Installed Application credentials, create a JSON file
in the following format and set the environment variable to its path instead:
{
"client_id" : " CLIENT_ID " ,
"client_secret" : " CLIENT_SECRET " ,
"refresh_token" : " REFRESH_TOKEN " ,
"type" : "authorized_user"
}
Replace the following values:
CLIENT_ID : Your new or existing client ID.
CLIENT_SECRET : Your new or existing client
secret.
REFRESH_TOKEN : Your new or existing refresh
token.
Linux or macOS
export GOOGLE_APPLICATION_CREDENTIALS = KEY_FILE_PATH
Windows
set GOOGLE_APPLICATION_CREDENTIALS = KEY_FILE_PATH
Understand filter differences
The Ad Manager API (Beta) query language supports all Publisher Query Language
(PQL) features, but significant syntax differences exist.
This example for listing Order objects illustrates the major changes such as
the removal of bind variables, case sensitive operators, and the replacement of
ORDER BY and LIMIT clauses with separate fields:
Ad Manager SOAP API
<filterStatement>
<query>WHERE name like "PG_%" and lastModifiedDateTime &gt;= :lastModifiedDateTime ORDER BY id ASC LIMIT 500</query>
<values>
<key>lastModifiedDateTime</key>
<value xmlns:ns2="https://www.google.com/apis/ads/publisher/v202502" xsi:type="ns2:DateTimeValue">
<value>
<date>
<year>2024</year>
<month>1</month>
<day>1</day>
</date>
<hour>0</hour>
<minute>0</minute>
<second>0</second>
<timeZoneId>America/New_York</timeZoneId>
</value>
</value>
</values>
</filterStatement>
Ad Manager API (Beta)
JSON format
{
"filter" : "displayName = \"PG_*\" AND updateTime > \"2024-01-01T00:00:00-5:00\"" ,
"pageSize" : 500 ,
"orderBy" : "name"
}
URL encoded
GET https://admanager.googleapis.com/v1/networks/123/orders?filter=displayName+%3D+\"PG_*\"+AND+updateTime+%3E+\"2024-01-01T00%3A00%3A00-5%3A00\"
The Ad Manager API (Beta) supports all PQL capabilities, with the following
syntax differences from the Ad Manager SOAP API:
The operators AND and OR are case sensitive in the
Ad Manager API (Beta). Lowercase and and or are treated as bare
literal search strings, a feature in the Ad Manager API (Beta) to search
across fields.
Use uppercase operators
// Matches unarchived Orders where order.notes has the value 'lorem ipsum'.
notes = "lorem ipsum" AND archived = false
Lowercase treated as literal
// Matches unarchived Orders where order.notes has the value 'lorem ipsum'
// and any field in the order has the literal value 'and'.
notes = "lorem ipsum" and archived = false
The character * is a wildcard for string matching. The Ad Manager API (Beta)
doesn't support the like operator.
Ad Manager SOAP API PQL
// Matches orders where displayName starts with the string 'PG_'
displayName like "PG_%"
Ad Manager API (Beta)
// Matches orders where displayName starts with the string 'PG_'
displayName = "PG_*"
Field names must appear on the left-hand side of a comparison operator:
Valid filter
updateTime > "2024-01-01T00:00:00Z"
Invalid filter
"2024-01-01T00:00:00Z" < updateTime
The Ad Manager API (Beta) does not support bind variables. All values must be
inlined.
String literals containing spaces must be wrapped in double quotes,
for example, "Foo bar" . You can't use single quotes to wrap string literals.
Remove order by clauses
Specifying a sorting order is optional in the Ad Manager API (Beta). If you
want to specify a sorting order for your result set, remove the PQL ORDER BY
clause and set the orderBy field instead:
GET networks/ ${ NETWORK_CODE } /orders?orderBy = updateTime+desc
Tip: While the Ad Manager SOAP API recommends always including an ORDER BY
clause to ensure pagination consistency, the Ad Manager API (Beta) maintains
consistency with pagination tokens.
Migrate from offsets to pagination tokens
The Ad Manager API (Beta) uses pagination tokens instead of LIMIT and OFFSET
clauses for paging through large result sets.
The Ad Manager API (Beta) uses a pageSize parameter to control the page size.
Unlike the LIMIT clause in the Ad Manager SOAP API, omitting a page size does
not return the entire result set. Instead, the list method uses a default page
size of 50 . The following example sets pageSize and pageToken
as URL parameters:
# Initial request
GET networks/ ${ NETWORK_CODE } /orders?pageSize = 50
# Next page
GET networks/ ${ NETWORK_CODE } /orders?pageSize = 50&pageToken = ${ TOKEN_FROM_INITIAL_REQUEST }
Unlike the Ad Manager SOAP API, the Ad Manager API (Beta) may return fewer
results than the requested page size even if there are additional pages. Use the
nextPageToken field to determine if there are additional
results.
Although an offset is not required for pagination, you may use the skip
field for multithreading. When multithreading, use the pagination token from the
first page to ensure you are reading from the same result set:
# First thread
GET networks/ ${ NETWORK_CODE } /orders?pageSize = 50&pageToken = ${ TOKEN_FROM_INITIAL_REQUEST }
# Second thread
GET networks/ ${ NETWORK_CODE } /orders?pageSize = 50&pageToken = ${ TOKEN_FROM_INITIAL_REQUEST } & skip = 50
Migrate reports
The SOAP API can only read and run reports in the deprecated Reports tool.
Conversely, the REST API can only read, write, and run Interactive Reports.
The reporting tools and APIs have a different ID space . The ID of a
SavedQuery in the SOAP API cannot be used in the REST API.
If you are using SavedQuery , you can migrate the report to an Interactive
report in the UI and create a mapping between the two ID spaces. For more
information about migrating reports, see
Migrate reports to Interactive reports .
Understand API differences
There are some differences in how the SOAP API and REST API handle report
definitions and results:
The SOAP API automatically added a corresponding ID dimension to the results
when a report only requested the NAME . In the REST API, you must explicitly
add the ID dimension to the ReportDefinition for it to be included in the
results.
The SOAP API did not have explicit types for metrics. The REST API defines
a data type, documented on the Dimension
enum value. Note that ENUM dimensions are open enums . You must handle
new and unknown enum values when parsing results.
The SOAP API separated Dimensions and DimensionAttributes . The REST API
has a unified Dimension enum that contains both.
The SOAP API did not have a limit on the number of dimensions. Interactive
Reports have a limit of 10 dimensions in both the UI and API. Dimensions that
break down by the same ID space are counted as a single dimension. For
example, including ORDER_NAME , ORDER_ID , and ORDER_START_DATE only
counts as 1 dimension when calculating the limit.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-10 UTC."],[],[]]
