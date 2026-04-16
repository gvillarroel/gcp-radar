---
title: "Monitor listings \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/analytics-hub-monitor-listings
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/introduction?authuser=3
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/analytics-hub-monitor-listings
  title: "Monitor listings \_|\_ BigQuery \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Monitor listings
This document describes how to monitor listings in BigQuery sharing
(formerly Analytics Hub).
As a data provider, you can track the usage metrics for your listings. There are
two methods to get the usage metrics for your shared data:
Use BigQuery sharing .
You can use Sharing to view the usage metrics dashboard
for your listings. This dashboard includes daily subscriptions, daily
executed jobs, the number of subscribers for each organization, and job
frequency for each table. You can retrieve the usage metrics for your
shared data by querying the INFORMATION_SCHEMA.SHARED_DATASET_USAGE view.
Use the INFORMATION_SCHEMA view . You can track
how subscribers use your datasets by querying the
INFORMATION_SCHEMA.SHARED_DATASET_USAGE view.
Use Sharing
To get usage metrics for your shared data using Sharing,
follow these steps:
In the Google Cloud console, go to the Sharing (Analytics Hub) page.
Go to Sharing (Analytics Hub)
Click the name of the
data exchange
that contains the listing to view its usage metrics.
Click Usage metrics , and then do the following:
From the Listings menu, select the listing.
Set the time range.
The page displays the following usage metrics:
Total Subscriptions : the number of current subscriptions on the selected
listing. You can view total subscriptions for up to 60 days.
Total Subscribers : the number of unique subscribers across all
subscriptions on the selected listing. You can view total subscribers for up
to 60 days.
Total jobs executed : the number of unique jobs run on each table of the
selected listing.
Total bytes scanned : the total number of bytes scanned from all tables of
the selected listing.
Daily Subscriptions : the chart that tracks the number of subscriptions for
the selected listing over a time period. You can view daily subscriptions for
up to 60 days.
Subscribers per organization : lists the organizations and their number of
subscribers that consume your selected listing.
Daily Executed Jobs : this chart displays the jobs consumption from the
selected listing.
Tables' job frequency : the frequency at which the tables are accessed on
the selected listing.
Note: You can also use the
BigQuery sharing subscriber APIs
to retrieve the Total Subscriptions , Total Subscribers , and Daily
Subscriptions fields.
Use INFORMATION_SCHEMA view
Data providers can track how subscribers use datasets by querying the
INFORMATION_SCHEMA.SHARED_DATASET_USAGE view .
Ensure that you have the required role to query this view.
To run the query against a Google Cloud project other than your default project,
use the following format:
PROJECT_ID .region- REGION_NAME .INFORMATION_SCHEMA.SHARED_DATASET_USAGE
Replace the following:
PROJECT_ID : the Google Cloud project ID
REGION_NAME : the BigQuery dataset
region name
For example, myproject.region-us.INFORMATION_SCHEMA.SHARED_DATASET_USAGE .
The following examples describe how to view the usage metrics by querying the
INFORMATION_SCHEMA view.
Get the total number of jobs executed on all shared tables
The following example calculates total jobs run by subscribers for a project:
SELECT
COUNT ( DISTINCT job_id ) AS num_jobs
FROM
`region-us` . INFORMATION_SCHEMA . SHARED_DATASET_USAGE
The result is similar to the following:
+------------+
| num_jobs |
+------------+
| 1000 |
+------------+
To check the total jobs run by subscribers, use the WHERE clause:
For datasets, use WHERE dataset_id = "..." .
For tables, use WHERE dataset_id = "..." AND table_id = "..." .
Get the most used table based on the number of rows processed
The following query calculates the most used table based on the number of rows
processed by subscribers.
SELECT
dataset_id ,
table_id ,
SUM ( num_rows_processed ) AS usage_rows
FROM
`region-us` . INFORMATION_SCHEMA . SHARED_DATASET_USAGE
GROUP BY
1 ,
2
ORDER BY
3 DESC
LIMIT
1
The output is similar to the following:
+---------------+-------------+----------------+
| dataset_id | table_id | usage_rows |
+---------------+-------------+----------------+
| mydataset | mytable | 15 |
+---------------+-------------+----------------+
Find the top organizations that consume your tables
The following query calculates the top subscribers based on the number of bytes
processed from your tables. You can also use the num_rows_processed column as
a metric.
SELECT
subscriber_org_number ,
ANY_VALUE ( subscriber_org_display_name ) AS subscriber_org_display_name ,
SUM ( total_bytes_processed ) AS usage_bytes
FROM
`region-us` . INFORMATION_SCHEMA . SHARED_DATASET_USAGE
GROUP BY
1
The output is similar to the following:
+--------------------------+--------------------------------+----------------+
|subscriber_org_number | subscriber_org_display_name | usage_bytes |
+-----------------------------------------------------------+----------------+
| 12345 | myorganization | 15 |
+--------------------------+--------------------------------+----------------+
For subscribers without an organization, you can use job_project_number
instead of subscriber_org_number .
Get usage metrics for your data exchange
If your data exchange
and source dataset are in different projects, follow
these steps to view the usage metrics for your data exchange:
Find all listings that
belong to your data exchange.
Retrieve the source dataset attached to the listing.
To view the usage metrics for your data exchange, use the following query:
SELECT
*
FROM
source_project_1 . `region-us` . INFORMATION_SCHEMA . SHARED_DATASET_USAGE
WHERE
dataset_id = 'source_dataset_id'
AND data_exchange_id = "projects/4/locations/us/dataExchanges/x1"
UNION ALL
SELECT
*
FROM
source_project_2 . `region-us` . INFORMATION_SCHEMA . SHARED_DATASET_USAGE
WHERE
dataset_id = 'source_dataset_id'
AND data_exchange_id = "projects/4/locations/us/dataExchanges/x1"
Get usage metrics for shared views
The following query displays the usage metrics for all of the shared views
present in a project:
SELECT
project_id ,
dataset_id ,
table_id ,
num_rows_processed ,
total_bytes_processed ,
shared_resource_id ,
shared_resource_type ,
referenced_tables
FROM `myproject` . `region-us` . INFORMATION_SCHEMA . SHARED_DATASET_USAGE
WHERE shared_resource_type = 'VIEW'
The output is similar to the following:
+---------------------+----------------+----------+--------------------+-----------------------+--------------------+----------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| project_id | dataset_id | table_id | num_rows_processed | total_bytes_processed | shared_resource_id | shared_resource_type | referenced_tables |
+---------------------+----------------+----------+--------------------+-----------------------+--------------------+----------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| myproject | source_dataset | view1 | 6 | 38 | view1 | VIEW | [{"project_id":"myproject","dataset_id":"source_dataset","table_id":"test_table","processed_bytes":"21"},
{"project_id":"bq-dataexchange-exp","dataset_id":"other_dataset","table_id":"other_table","processed_bytes":"17"}] |
+---------------------+----------------+----------+--------------------+-----------------------+--------------------+----------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
Get usage metrics for shared table valued functions
The following query displays the usage metrics for all of the shared table
valued functions present in a project:
SELECT
project_id ,
dataset_id ,
table_id ,
num_rows_processed ,
total_bytes_processed ,
shared_resource_id ,
shared_resource_type ,
referenced_tables
FROM `myproject` . `region-us` . INFORMATION_SCHEMA . SHARED_DATASET_USAGE
WHERE shared_resource_type = 'TABLE_VALUED_FUNCTION'
The output is similar to the following:
+---------------------+----------------+----------+--------------------+-----------------------+--------------------+-----------------------+---------------------------------------------------------------------------------------------------------------------+
| project_id | dataset_id | table_id | num_rows_processed | total_bytes_processed | shared_resource_id | shared_resource_type | referenced_tables |
+---------------------+----------------+----------+--------------------+-----------------------+--------------------+-----------------------+---------------------------------------------------------------------------------------------------------------------+
| myproject | source_dataset | | 3 | 45 | provider_exp | TABLE_VALUED_FUNCTION | [{"project_id":"myproject","dataset_id":"source_dataset","table_id":"test_table","processed_bytes":"45"}] |
+---------------------+----------------+----------+--------------------+-----------------------+--------------------+-----------------------+---------------------------------------------------------------------------------------------------------------------+
What's next
Learn how to
manage BigQuery sharing listings .
Learn about
BigQuery pricing .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
