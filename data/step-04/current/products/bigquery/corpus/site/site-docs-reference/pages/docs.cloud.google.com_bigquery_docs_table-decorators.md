---
title: "Table decorators in legacy SQL \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/table-decorators
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/table-decorators
  title: "Table decorators in legacy SQL \_|\_ BigQuery \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Table decorators in legacy SQL
Caution: This document describes table decorators in legacy SQL query syntax.
The preferred query syntax for BigQuery is GoogleSQL. Standard
SQL does not support table decorators, but the
FOR SYSTEM_TIME AS OF
clause in GoogleSQL provides functionality equivalent to time decorators.
For range decorators, you can achieve similar semantics in GoogleSQL by using
time-partitioned tables. For more information, see
Table decorators
in the GoogleSQL migration guide and Legacy SQL feature availability .
Normally, BigQuery performs a full column scan when
running a query .
You can use table decorators in legacy SQL to perform a more cost-effective query of a
subset of your data. Table decorators can be used whenever a table is read,
such as when copying a table,
exporting a table ,
or listing data using tabledata.list .
Note: Range decorators aren't supported in GoogleSQL. To view the status
of this feature request, see the
BigQuery feature request tracker .
You can click the Vote for this issue and get email notifications icon
(the star) to register your support for the feature.
Table decorators support relative and absolute <time> values. Relative
values are indicated by a negative number, and absolute
values are indicated by a positive number. For example, -3600000 indicates one
hour ago in milliseconds, relative to the current time; 3600000
indicates one hour in milliseconds after 1/1/1970.
Time decorators
Time decorators (formerly known as snapshot decorators ) reference a table's
historical data at a point in time.
Syntax
@ <time>
References a table's historical data at <time> ,
in milliseconds since the epoch.
<time> must be within the last seven days and
greater than or equal to the table's creation time, but less than the table's
deletion or expiration time.
@0 is a special case that references the oldest data available for the
table.
Time decorators are also used outside of legacy SQL. You can use them in the
bq cp command to
restore deleted tables
within seven days of table deletion.
Examples
To get the historical data for a table at one hour ago:
Relative value example
# legacySQL
SELECT COUNT(*) FROM [PROJECT_ID:DATASET.TABLE@-3600000]
Absolute value example
Get <time> for one hour ago:
# legacySQL
SELECT INTEGER(DATE_ADD(USEC_TO_TIMESTAMP(NOW()), -1, 'HOUR')/1000)
Then, replace <time> in the following query:
#legacySQL
SELECT COUNT ( * ) FROM [ PROJECT_ID:DATASET.TABLE@time ]
Range decorators
Syntax
@ <time1> - <time2>
References table data added between <time1> and
<time2> , in milliseconds since the epoch.
<time1> and <time2>
must be within the last seven days.
<time2> is optional and defaults to 'now'.
Examples
Relative value examples
To get table data added between one hour and half an hour ago:
# legacySQL
SELECT COUNT(*) FROM [PROJECT_ID:DATASET.TABLE@-3600000--1800000]
To get data from the last 10 minutes:
# legacySQL
SELECT COUNT(*) FROM [PROJECT_ID:DATASET.TABLE@-600000-]
Absolute value example
To get table data added between one hour and half an hour ago:
Get <time1> for one hour ago:
# legacySQL
SELECT INTEGER(DATE_ADD(USEC_TO_TIMESTAMP(NOW()), -1, 'HOUR')/1000)
Get <time2> for a half hour ago:
# legacySQL
SELECT INTEGER(DATE_ADD(USEC_TO_TIMESTAMP(NOW()), -30, 'MINUTE')/1000)
Replace <time1> and
<time2> in the following query:
#legacySQL
SELECT COUNT ( * ) FROM [ PROJECT_ID:DATASET.TABLE@time1-time2 ]
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
