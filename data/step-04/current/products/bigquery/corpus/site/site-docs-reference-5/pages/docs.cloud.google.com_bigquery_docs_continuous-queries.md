---
title: "Create continuous queries \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/continuous-queries
knowledge_key: corpus
source_id: site-docs-reference-5
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/continuous-queries
  title: "Create continuous queries \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
Create continuous queries
This document describes how to run a continuous
query in BigQuery.
BigQuery continuous queries are SQL statements that run
continuously. Continuous queries let you analyze incoming data in
BigQuery in real time, and then either export the results to
Bigtable, Pub/Sub, or Spanner, or write the results to a
BigQuery table.
Choose an account type
You can create and run a continuous query job by using a user account, or
you can create a continuous query job by using a user account and then run it
by using a service account .
You must use a service account to run a continuous query that exports
results to a Pub/Sub topic.
When you use a user account, a
continuous query runs for up to two days. When you use a service account, a
continuous query runs for up to 150 days. For more information, see
Authorization .
Required permissions
This section describes the permissions that you need to create and run a
continuous query. As an alternative to the Identity and Access Management (IAM) roles
mentioned, you could get the required permissions through
custom roles .
Permissions when using a user account
This section provides information about the roles and permissions required
to create and run a continuous query by using a user account.
To create a job in BigQuery, the user account must have the
bigquery.jobs.create IAM permission. Each of the
following IAM roles grants the bigquery.jobs.create permission:
BigQuery User ( roles/bigquery.user )
BigQuery Job User ( roles/bigquery.jobUser )
BigQuery Admin ( roles/bigquery.admin )
To export data from a BigQuery table, the user account must have
the bigquery.tables.export IAM permission. Each of the
following IAM roles grants the bigquery.tables.export
permission:
BigQuery Data Viewer ( roles/bigquery.dataViewer )
BigQuery Data Editor ( roles/bigquery.dataEditor )
BigQuery Data Owner ( roles/bigquery.dataOwner )
BigQuery Admin ( roles/bigquery.admin )
To update data in a BigQuery table, the user account must have
the bigquery.tables.updateData IAM permission. Each of the
following IAM roles grants the bigquery.tables.updateData
permission:
BigQuery Data Editor ( roles/bigquery.dataEditor )
BigQuery Data Owner ( roles/bigquery.dataOwner )
BigQuery Admin ( roles/bigquery.admin )
If the user account must enable the APIs required for your
continuous query use case, the user account must have the
Service Usage Admin ( roles/serviceusage.serviceUsageAdmin )
role.
Permissions when using a service account
This section provides information about the roles and permissions required by
the user account that creates the continuous query, and the service account that
runs the continuous query.
User account permissions
To create a job in BigQuery, the user account must have the
bigquery.jobs.create IAM permission. Each of the following
IAM roles grants the bigquery.jobs.create permission:
BigQuery User ( roles/bigquery.user )
BigQuery Job User ( roles/bigquery.jobUser )
BigQuery Admin ( roles/bigquery.admin )
To submit a job that runs using a service account, the user account must have the
Service Account User ( roles/iam.serviceAccountUser )
role. If you are using the same user account to create the service account,
then the user account must have the
Service Account Admin ( roles/iam.serviceAccountAdmin )
role. For information on how to limit a user's access to single service account,
rather than to all service accounts within a project, see
Grant a single role .
If the user account must enable the APIs required for your
continuous query use case, the user account must have the
Service Usage Admin ( roles/serviceusage.serviceUsageAdmin )
role.
Service account permissions
To export data from a BigQuery table, the service account must
have the bigquery.tables.export IAM permission. Each of the
following IAM roles grants the bigquery.tables.export
permission:
BigQuery Data Viewer ( roles/bigquery.dataViewer )
BigQuery Data Editor ( roles/bigquery.dataEditor )
BigQuery Data Owner ( roles/bigquery.dataOwner )
BigQuery Admin ( roles/bigquery.admin )
To update data in a BigQuery table, the service account must have
the bigquery.tables.updateData IAM permission. Each of the
following IAM roles grants the bigquery.tables.updateData
permission:
BigQuery Data Editor ( roles/bigquery.dataEditor )
BigQuery Data Owner ( roles/bigquery.dataOwner )
BigQuery Admin ( roles/bigquery.admin )
Before you begin
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the BigQuery API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Create a reservation
Create an Enterprise or Enterprise Plus edition reservation ,
and then
create a reservation assignment
with a CONTINUOUS job type. This reservation can use
autoscaling
and idle slot sharing .
There are
reservation limitations
that apply to reservation assignments for continuous queries.
Export to Pub/Sub
Additional APIs, IAM permissions, and Google Cloud resources are
required to export data to Pub/Sub. For more information, see
Export to Pub/Sub .
Processing mutations with CHANGES
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
When you export data to Pub/Sub, you have the option of using the
CHANGES change history function .
The CHANGES function processes all rows that have changed within the source
table, including both appends and mutations.
Embed custom attributes as metadata in Pub/Sub messages
You can use Pub/Sub attributes
to provide additional information about the message, such as its priority,
origin, destination, or additional metadata. You can also use attributes to
filter messages on the subscription .
Within a continuous query result, if a column is named _ATTRIBUTES ,
then its values are copied to the Pub/Sub message attributes.
The provided fields within _ATTRIBUTES are used as attribute keys.
The _ATTRIBUTES column must be of JSON type, in the format
ARRAY<STRUCT<STRING, STRING>> or STRUCT<STRING> .
For an example, see
export data to a Pub/Sub topic .
Export to Bigtable
Additional APIs, IAM permissions, and Google Cloud
resources are required to export data to Bigtable. For more
information, see
Export to Bigtable .
Export to Spanner
Additional APIs, IAM permissions, and Google Cloud
resources are required to export data to Spanner. For more
information, see
Export to Spanner (reverse ETL) .
Write data to a BigQuery table
You can write data to a BigQuery table by using an
INSERT statement .
Use AI functions
Additional APIs, IAM permissions, and Google Cloud
resources are required to use a
supported
AI function in a continuous query. For more information, see one of the
following topics, based on your use case:
Generate text by using the AI.GENERATE_TEXT function
Generate text embeddings by using the AI.GENERATE_EMBEDDING function
Understand text with the ML.UNDERSTAND_TEXT function
Translate text with the ML.TRANSLATE function
When you use an AI function in a continuous query, consider whether the query
output will remain within the
quota for the function.
If you exceed the quota, you might have to separately handle the records that
don't get processed.
Specify a starting time for the continuous query
You must use the APPENDS function ,
or CHANGES function
in the case of exports to Pub/Sub ,
in the FROM clause of a continuous query to specify the earliest data to
process. For example, APPENDS(TABLE my_table, start_timestamp) .
The start_timestamp argument defines the point in time at which the
continuous query begins processing data. For example,
APPENDS(TABLE my_table, CURRENT_TIMESTAMP() - INTERVAL 10 MINUTE) tells
BigQuery to process data that was added to the table my_table
at most 10 minutes before the start of the continuous query.
Data that's subsequently added to my_table is processed as it comes in. There
is no imposed delay on data processing.
When specifying the start_timestamp argument, the
value must fall within the table's time travel
window, which defaults to seven days for standard tables. Setting the
start_timestamp to NULL defaults to the table's creation time. Using a value
of NULL isn't recommended because an error is returned if the table was
created earlier than the time travel window. A query using
NULL might succeed for a newly created table but fail later if the
table's creation timestamp ages out of the seven day window.
Don't provide an end_timestamp argument to the APPENDS function
when you use it in a continuous query.
Note: When used in a continuous query, the APPENDS function is considered to
be at the General Availability (GA) launch
stage.
The following example shows how to start a continuous query from a particular
point in time by using the APPENDS function, when querying a
BigQuery table that is receiving streaming taxi ride information:
EXPORT DATA
OPTIONS ( format = 'CLOUD_PUBSUB' ,
uri = 'https://pubsub.googleapis.com/projects/myproject/topics/taxi-real-time-rides' ) AS (
SELECT
TO_JSON_STRING ( STRUCT ( ride_id ,
timestamp ,
latitude ,
longitude )) AS message
FROM
APPENDS ( TABLE `myproject.real_time_taxi_streaming.taxirides` ,
-- Configure the APPENDS TVF start_timestamp to specify when you want to
-- start processing data using your continuous query.
-- This example starts processing at 10 minutes before the current time.
CURRENT_TIMESTAMP () - INTERVAL 10 MINUTE )
WHERE
ride_status = 'enroute' );
Specify a starting point earlier than the time travel window
To include data that is outside of the seven day time travel window,
use a standard query to backfill data up to a particular point in time,
and then start a continuous query from that point. The "handover" timestamp must
be within the seven day window so that the continuous query can pick up where
the standard query left off.
The following example shows how to backfill older data from a
BigQuery table receiving streaming taxi ride information and then
transition to a continuous query.
Run a standard query to backfill data up to a particular point in time:
INSERT INTO `myproject.real_time_taxi_streaming.transformed_taxirides`
SELECT
timestamp ,
meter_reading ,
ride_status ,
passenger_count ,
ST_Distance (
ST_GeogPoint ( pickup_longitude , pickup_latitude ),
ST_GeogPoint ( dropoff_longitude , dropoff_latitude )) AS euclidean_trip_distance ,
SAFE_DIVIDE ( meter_reading , passenger_count ) AS cost_per_passenger
FROM `myproject.real_time_taxi_streaming.taxirides`
-- Include all data inserted into the table up to this handoff point.
-- This handoff timestamp must be within the time travel window.
FOR SYSTEM_TIME AS OF '2025-01-01 00:00:00 UTC'
WHERE
ride_status = 'dropoff' ;
Run a continuous query from the point in time at which the query
stopped:
INSERT INTO `myproject.real_time_taxi_streaming.transformed_taxirides`
SELECT
timestamp ,
meter_reading ,
ride_status ,
passenger_count ,
ST_Distance (
ST_GeogPoint ( pickup_longitude , pickup_latitude ),
ST_GeogPoint ( dropoff_longitude , dropoff_latitude )) AS euclidean_trip_distance ,
SAFE_DIVIDE ( meter_reading , passenger_count ) AS cost_per_passenger
FROM
APPENDS ( TABLE `myproject.real_time_taxi_streaming.taxirides` ,
-- Configure the APPENDS TVF start_timestamp to start processing
-- data right where the batch query left off + 1 microsecond.
-- This timestamp must be within the time travel window.
TIMESTAMP '2025-01-01 00:00:00 UTC' + INTERVAL 1 MICROSECOND )
WHERE
ride_status = 'dropoff' ;
Run a continuous query by using a user account
This section describes how to run a continuous query by using a user account.
After the continuous query is running, you can close the Google Cloud console,
terminal window, or application without interrupting query execution. A
continuous query run by a user account runs for a maximum of two days and then
automatically stops. To continue processing new incoming data, start a new
continuous query and
specify a starting point .
To automate this process, see retry failed queries .
Follow these steps to run a continuous query:
Console
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the query editor, click
settings More .
In the Choose query mode section, choose Continuous query .
Click Confirm .
Optional: To control how long the query runs, click Query settings
and set the Job timeout in milliseconds.
In the query editor, type in the SQL statement for the continuous query.
The SQL statement must only contain
supported operations .
Click Run .
bq
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
In Cloud Shell, run the continuous query by using the
bq query command
with the --continuous flag:
bq query --use_legacy_sql = false --continuous = true
' QUERY '
Replace QUERY with the SQL statement for the
continuous query. The SQL statement must only contain
supported operations .
You can control how long the query runs by using the --job_timeout_ms
flag.
API
Run the continuous query by calling the
jobs.insert method .
You must set the continuous field to true in the
JobConfigurationQuery
of the Job resource that you pass in.
You can optionally control how long the query runs by setting the
jobTimeoutMs field .
curl --request POST \
"https://bigquery.googleapis.com/bigquery/v2/projects/ PROJECT_ID /jobs" \
--header "Authorization: Bearer $( gcloud auth print-access-token ) " \
--header "Content-Type: application/json; charset=utf-8" \
--data '{"configuration":{"query":{"query":" QUERY ","useLegacySql":false,"continuous":true}}}' \
--compressed
Replace the following:
PROJECT_ID : your project ID.
QUERY : the SQL statement for the
continuous query. The SQL statement must only contain
supported operations .
Run a continuous query by using a service account
This section describes how to run a continuous query by using a service account.
After the continuous query is running, you can close the Google Cloud console,
terminal window, or application without interrupting query execution. A
continuous query run by using a service account can run for up to 150 days and
then automatically stops. To continue processing new incoming data, start a new
continuous query and
specify a starting point .
To automate this process, see retry failed queries .
Follow these steps to use a service account to run a continuous query:
Console
Create a service account .
Grant the required
permissions to the service account.
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the query editor, click More .
In the Choose query mode section, choose Continuous query .
Click Confirm .
In the query editor, click More > Query settings .
In the Continuous query section, use the Service account box
to select the service account that you created.
Optional: To control how long the query runs, set the Job timeout
in milliseconds.
Click Save .
In the query editor, type in the SQL statement for the continuous query.
The SQL statement must only contain
supported operations .
Click Run .
bq
Create a service account .
Grant the required
permissions to the service account.
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
On the command line, run the continuous query by using the
bq query command
with the following flags:
Set the --continuous flag to true to make the query continuous.
Use the --connection_property flag to specify a service account to use.
Optional: Set the --job_timeout_ms flag to limit the query runtime.
bq query --project_id = PROJECT_ID --use_legacy_sql = false \
--continuous = true --connection_property = service_account = SERVICE_ACCOUNT_EMAIL \
' QUERY '
Replace the following:
PROJECT_ID : your project ID.
SERVICE_ACCOUNT_EMAIL : the service
account email. You can get the service account email from the
Service accounts page
of the Google Cloud console.
QUERY : the SQL statement for the
continuous query. The SQL statement must only contain
supported operations .
API
Create a service account .
Grant the required
permissions to the service account.
Run the continuous query by calling the
jobs.insert method .
Set the following fields in the
JobConfigurationQuery resource
of the Job resource that you pass in:
Set the continuous field to true to make the query continuous.
Use the connectionProperties field to specify a service account to use.
You can optionally control how long the query runs by setting the
jobTimeoutMs field
in the
JobConfiguration resource .
curl --request POST \
"https://bigquery.googleapis.com/bigquery/v2/projects/ PROJECT_ID /jobs" \
--header "Authorization: Bearer $( gcloud auth print-access-token ) " \
--header "Content-Type: application/json; charset=utf-8" \
--data '{"configuration":{"query":{"query":" QUERY ","useLegacySql":false,"continuous":true,"connectionProperties":[{"key":"service_account","value":" SERVICE_ACCOUNT_EMAIL "}]}}}' \
--compressed
Replace the following:
PROJECT_ID : your project ID.
QUERY : the SQL statement for the
continuous query. The SQL statement must only contain
supported operations .
SERVICE_ACCOUNT_EMAIL : the service
account email. You can get the service account email on the
Service accounts page
of the Google Cloud console.
Create a custom job ID
Every query job is assigned a job ID that you can use to search for and
manage the job. By default, job IDs are randomly generated. To make it easier
to search for the job ID of a continuous query using
job history or
jobs explorer , you can assign
a custom job ID prefix:
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the query editor, click More .
In the Choose query mode section, choose Continuous query .
Click Confirm .
In the query editor, click More > Query settings .
In the Custom job ID prefix section, enter a custom name prefix.
Click Save .
Stateful processing with JOIN s and windowing aggregations
Stateful operations let continuous queries perform complex analysis by retaining
information across multiple rows or time intervals. These operations include
JOIN s and windowing aggregations.
For detailed information about how to use these stateful operations, see the
following topics:
Continuous query JOIN s perform
real-time correlations between multiple time-oriented data streams.
Windowing aggregations group streaming
data into consistent time intervals for analysis using aggregation
functions.
Examples
The following SQL examples show common use cases for continuous queries.
Export data to a Pub/Sub topic
The following example shows a continuous query that filters data from a
BigQuery table that is receiving streaming taxi ride information,
and publishes the data for cancelled rides to a Pub/Sub topic
in real time with message attributes:
EXPORT DATA
OPTIONS (
format = 'CLOUD_PUBSUB' ,
uri = 'https://pubsub.googleapis.com/projects/myproject/topics/taxi-real-time-rides' )
AS (
SELECT
TO_JSON_STRING (
STRUCT (
ride_id ,
timestamp ,
latitude ,
longitude )) AS message ,
TO_JSON (
STRUCT (
CAST ( passenger_comment AS STRING ) AS passenger_comment ))
FROM
CHANGES ( TABLE `myproject.real_time_taxi_streaming.taxi_rides` ,
-- Configure the CHANGES TVF start_timestamp to specify when you want to
-- start processing data using your continuous query.
-- This example starts processing at 10 minutes before the current time.
CURRENT_TIMESTAMP () - INTERVAL 10 MINUTE )
WHERE _CHANGE_TYPE = 'DELETE'
);
Export data to a Bigtable table
The following example shows a continuous query that filters data from a
BigQuery table that is receiving streaming taxi ride information,
and exports the data into a Bigtable table in real time:
EXPORT DATA
OPTIONS (
format = 'CLOUD_BIGTABLE' ,
truncate = TRUE ,
overwrite = TRUE ,
uri = 'https://bigtable.googleapis.com/projects/myproject/instances/mybigtableinstance/tables/taxi-real-time-rides' )
AS (
SELECT
CAST ( CONCAT ( ride_id , timestamp , latitude , longitude ) AS STRING ) AS rowkey ,
STRUCT (
timestamp ,
latitude ,
longitude ,
meter_reading ,
ride_status ,
passenger_count ) AS features
FROM
APPENDS ( TABLE `myproject.real_time_taxi_streaming.taxirides` ,
-- Configure the APPENDS TVF start_timestamp to specify when you want to
-- start processing data using your continuous query.
-- This example starts processing at 10 minutes before the current time.
CURRENT_TIMESTAMP () - INTERVAL 10 MINUTE )
WHERE ride_status = 'enroute'
);
Export data to a Spanner table
The following example shows a continuous query that filters data from a
BigQuery table that is receiving streaming taxi ride information,
and then exports the data into a Spanner table in real time:
EXPORT DATA
OPTIONS (
format = 'CLOUD_SPANNER' ,
uri = 'https://spanner.googleapis.com/projects/myproject/instances/myspannerinstance/databases/taxi-real-time-rides' ,
spanner_options = " "" {
" table ": " rides ",
-- To ensure data is written to Spanner in the correct sequence
-- during a continuous export, use the change_timestamp_column
-- option. This should be mapped to a timestamp column from your
-- BigQuery data. If your source data lacks a timestamp, the
-- _CHANGE_TIMESTAMP pseudocolumn provided by the APPENDS function
-- will be automatically mapped to the " change_timestamp " column.
" change_timestamp_column ": " change_timestamp "
} "" "
)
AS (
SELECT
ride_id ,
latitude ,
longitude ,
meter_reading ,
ride_status ,
passenger_count ,
_CHANGE_TIMESTAMP as change_timestamp
FROM APPENDS (
TABLE `myproject.real_time_taxi_streaming.taxirides` ,
-- Configure the APPENDS TVF start_timestamp to specify when you want to
-- start processing data using your continuous query.
-- This example starts processing at 10 minutes before the current time.
CURRENT_TIMESTAMP () - INTERVAL 10 MINUTE )
WHERE ride_status = 'enroute'
);
Write data to a BigQuery table
The following example shows a continuous query that filters and transforms data
from a BigQuery table that is receiving streaming taxi ride
information, and then writes the data to another BigQuery table
in real time. This makes the data available for further downstream analysis.
INSERT INTO `myproject.real_time_taxi_streaming.transformed_taxirides`
SELECT
timestamp ,
meter_reading ,
ride_status ,
passenger_count ,
ST_Distance (
ST_GeogPoint ( pickup_longitude , pickup_latitude ),
ST_GeogPoint ( dropoff_longitude , dropoff_latitude )) AS euclidean_trip_distance ,
SAFE_DIVIDE ( meter_reading , passenger_count ) AS cost_per_passenger
FROM
APPENDS ( TABLE `myproject.real_time_taxi_streaming.taxirides` ,
-- Configure the APPENDS TVF start_timestamp to specify when you want to
-- start processing data using your continuous query.
-- This example starts processing at 10 minutes before the current time.
CURRENT_TIMESTAMP () - INTERVAL 10 MINUTE )
WHERE
ride_status = 'dropoff' ;
Process data by using a Vertex AI model
The following example shows a continuous query which uses a
Vertex AI model to generate an advertisement for taxi riders
based on their current latitude and longitude, and then exports the results
into a Pub/Sub topic in real time:
EXPORT DATA
OPTIONS (
format = 'CLOUD_PUBSUB' ,
uri = 'https://pubsub.googleapis.com/projects/myproject/topics/taxi-real-time-rides' )
AS (
SELECT
TO_JSON_STRING (
STRUCT (
ride_id ,
timestamp ,
latitude ,
longitude ,
prompt ,
result )) AS message
FROM
AI . GENERATE_TEXT (
MODEL `myproject.real_time_taxi_streaming.taxi_ml_generate_model` ,
(
SELECT
timestamp ,
ride_id ,
latitude ,
longitude ,
CONCAT (
'Generate an ad based on the current latitude of ' ,
latitude ,
' and longitude of ' ,
longitude ) AS prompt
FROM
APPENDS ( TABLE `myproject.real_time_taxi_streaming.taxirides` ,
-- Configure the APPENDS TVF start_timestamp to specify when you
-- want to start processing data using your continuous query.
-- This example starts processing at 10 minutes before the current time.
CURRENT_TIMESTAMP () - INTERVAL 10 MINUTE )
WHERE ride_status = 'enroute'
),
STRUCT (
50 AS max_output_tokens ,
1.0 AS temperature ,
40 AS top_k ,
1.0 AS top_p ))
AS ml_output
);
Perform JOIN s and windowing aggregations
The following example shows a continuous query that performs a JOIN
and windowing aggregations.
Suppose you want to join a taxi rides table to a taxi requests table to
understand taxi health in each neighborhood every five minutes. Using aggregate
functions, you can capture the taxi demand volume per neighborhood and the
minimum, maximum, average, and standard deviation distance a rider was from a
taxi when they requested a ride.
INSERT INTO
`real_time_taxi_streaming.neighborhood_taxi_health`
WITH potential_matches AS (
SELECT
requests . _CHANGE_TIMESTAMP AS bq_changed_ts ,
requests . geohash ,
requests . latitude ,
requests . longitude ,
ST_DISTANCE (
ST_GEOGPOINT ( requests . longitude , requests . latitude ),
ST_GEOGPOINT ( taxis . longitude , taxis . latitude )
) AS distance_in_meters
FROM
APPENDS ( TABLE `real_time_taxi_streaming.ride_requests` ,
CURRENT_TIMESTAMP () - INTERVAL 10 MINUTE ) AS requests
INNER JOIN
APPENDS ( TABLE `real_time_taxi_streaming.taxirides` ,
CURRENT_TIMESTAMP () - INTERVAL 10 MINUTE ) AS taxis
ON requests . geohash = taxis . geohash
WHERE
taxis . ride_status = 'available'
AND taxis . _CHANGE_TIMESTAMP BETWEEN ( requests . _CHANGE_TIMESTAMP - INTERVAL 5 MINUTE ) AND requests . _CHANGE_TIMESTAMP
AND ST_Dwithin (
ST_GEOGPOINT ( requests . longitude , requests . latitude ),
ST_GEOGPOINT ( taxis . longitude , taxis . latitude ),
2000 -- Distance in meters
)
)
SELECT
window_end ,
geohash ,
ROUND ( AVG ( latitude ), 6 ) AS avg_latitude ,
ROUND ( AVG ( longitude ), 6 ) AS avg_longitude ,
COUNT ( * ) AS taxi_demand_volume ,
ROUND ( AVG ( distance_in_meters ), 2 ) AS avg_proximity_meters ,
ROUND ( MIN ( distance_in_meters ), 2 ) AS min_proximity_meters ,
ROUND ( MAX ( distance_in_meters ), 2 ) AS max_proximity_meters ,
ROUND ( STDDEV ( distance_in_meters ), 2 ) AS proximity_stddev
FROM
TUMBLE ( TABLE potential_matches , "bq_changed_ts" , INTERVAL 5 MINUTE )
GROUP BY
window_end ,
geohash ;
Modify the SQL of a continuous query
You can't update the SQL used in a continuous query while the continuous query
job is running. You must cancel the continuous query job, modify the SQL,
and then start a new continuous query job from the point where you stopped
the original continuous query job.
Follow these steps to modify the SQL used in a continuous query:
View the job details for the
continuous query job that you want to update, and note the job ID.
If possible, pause collection of upstream data. If you can't do this, you
might get some data duplication when the continuous query is restarted.
Cancel the continuous query
that you want to modify.
Get the end_time value for the original continuous query job by using the
INFORMATION_SCHEMA JOBS view :
SELECT end_time
FROM ` PROJECT_ID .region- REGION ` . INFORMATION_SCHEMA . JOBS_BY_PROJECT
WHERE
EXTRACT ( DATE FROM creation_time ) = current_date ()
AND error_result . reason = 'stopped'
AND job_id = ' JOB_ID ' ;
Replace the following:
PROJECT_ID : your project ID.
REGION : the region used by your project.
JOB_ID : the continuous query job ID that you
identified in Step 1.
Modify the continuous query SQL statement to
start the continuous query from a particular point in time ,
using the end_time value that you retrieved in Step 5 as the starting
point.
Modify the continuous query SQL statement to reflect your needed changes.
Run the modified continuous query.
Cancel a continuous query
You can cancel a continuous query
job just like any other job. It might take up to a minute for the query to
stop running after the job is cancelled.
If you cancel and then restart a query, the restarted query behaves like a new,
independent query. The restarted query doesn't start processing data where the
previous job stopped and can't reference the previous query's results. See
Start a continuous query from a particular point in time .
Monitor queries and handle errors
A continuous query might be interrupted due to factors such as data
inconsistencies, schema changes, temporary service disruptions, or maintenance.
Although BigQuery handles some transient errors, best practices
for improving job resiliency include the following:
Monitor continuous queries .
Alert on failed queries .
Retry failed queries .
What's next
Monitor continuous queries
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
