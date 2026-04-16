---
title: "Migrate a CDC table to another region \_|\_ Datastream \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/datastream/docs/best-practices-move-table-to-another-region
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/best-practices-move-table-to-another-region
  title: "Migrate a CDC table to another region \_|\_ Datastream \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Datastream
Resources
Send feedback
Migrate a CDC table to another region
Stay organized with collections
Save and categorize content based on your preferences.
This page describes best practices for a use case where you've set up
Datastream replication to BigQuery but configured the
destination dataset in an incorrect region. You then want to move the dataset to
another region (or multi-region) without having to re-synchronise all of the data
from the source database to BigQuery.
Querying the secondary region during the migration
procedure might return incorrect or incomplete results. For more information
about the limitations related to the migration procedure described on this page,
see Cross-region dataset replication .
Before you begin
Before you start migrating your data to another region, consider the
following:
Migration takes time, and you must temporarily pause the stream during the
operation. To maintain data integrity, the source database must retain the
change logs when the stream is paused. To estimate how long to pause the stream,
combine the value of max_staleness in the dataset and the longest-running
merge operation:
For information about how long it might take for merge operations to
finish, see Recommended table max_staleness value .
To find the maximum max_staleness in the dataset, see
Determine the current max_staleness value of a table
and adjust the query to your specific needs.
If the estimated pause is too long for your source database to support,
you might want to consider temporarily reducing the value of max_staleness
for the tables in the dataset.
Verify that the user performing the migration has sufficient BigQuery
resources in the destination region (query reservation and
background reservation). For more information about reservations, see
Reservation assignments .
Verify that the user performing the migration has sufficient permissions to
perform this operation, such as Identity and Access Management (IAM) controls or
VPC Service Controls .
Migration steps
To initiate dataset migration ,
use BigQuery data replication:
In the Google Cloud console, go to the BigQuery Studio page.
Go to BigQuery Studio
Create a BigQuery dataset replica in the new region:
ALTER SCHEMA DATASET_NAME
ADD REPLICA ' NEW_REGION '
OPTIONS ( location = ' NEW_REGION ' );
Replace the following:
DATASET_NAME : the name of the dataset that you want to create.
NEW_REGION : the name of the region where you want to create your
dataset. For example, region-us .
Monitor the migration progress, and wait until the copy watermark in the
replica is within a few minutes of the primary. You can run this query on
the BigQuery INFORMATION_SCHEMA
to check the migration progress:
SELECT
catalog_name as project_id ,
schema_name as dataset_name ,
replication_time as dataset_replica_staleness
FROM
' NEW_REGION ' . INFORMATION_SCHEMA . SCHEMATA_REPLICAS
WHERE
catalog_name = PROJECT_ID
AND schema_name = DATASET_NAME
AND location = NEW_REGION ;
Replace the following:
PROJECT_ID : the ID of your Google Cloud project.
DATASET_NAME : the name of your dataset.
DATASET_REPLICA_STALENESS : the staleness configuration of the
tables in the dataset replica that you created.
NEW_REGION : the region where you created your dataset.
Pause the existing Datastream stream. For more information, see
Pause the stream .
Wait for the stream to drain and take note of the time when the stream entered the
PAUSED state.
Confirm that the latest CDC changes have been applied to the BigQuery
table by checking the upsert_stream_apply_watermark
for the table. Run the following query and ensure that the watermark timestamp
is 10 minutes later then when the stream was paused:
SELECT table_name , upsert_stream_apply_watermark
FROM DATASET_NAME . INFORMATION_SCHEMA . TABLES
To run the query only for a specific table, add the following WHERE clause:
WHERE table_name = ' TABLE_NAME '
Replace the following:
DATASET_NAME : the name of your dataset.
TABLE_NAME : optional. The table for which you want to check the
upsert_stream_apply_watermark .
Use the query from step 3 to verify that the new region copy watermark is
later than the upsert_stream_apply_watermark captured in step 6.
Optionally, manually compare several tables in the primary dataset in the
original region with the replica in the new region to verify that all data
is correctly copied.
Promote the BigQuery dataset replica by running the following
command in BigQuery Studio:
ALTER SCHEMA DATASET_NAME
SET OPTIONS ( primary_replica = ' NEW_REGION ' );
Replace the following:
DATASET_NAME : the name of your dataset.
NEW_REGION : the region where you created your dataset.
Optionally, if you no longer need the original dataset (now the replica), and
don't want to incur extra charges, then go to BigQuery Studio and drop
the original BigQuery dataset:
ALTER SCHEMA DATASET_NAME DROP REPLICA IF EXISTS ORIGINAL_REGION ;
Replace the following:
DATASET_NAME : the name of the original dataset.
ORIGINAL_REGION : the region of the original dataset.
Create a new stream with the exact same configuration but with new BigQuery
destination location.
Start the new stream.
To prevent replicating duplicate events, start
the stream from a specific position:
For MySQL and Oracle sources: you can identify the log position
by examining the logs of the original stream and finding the last position
from which the stream read successfully. For information about starting the
stream from a specific position, see Manage streams .
For PostgreSQL sources: the new stream starts reading changes from the first
log sequence number (LSN) in the replication slot. Because the original stream
might have already processed some of these changes, manually change the pointer
of the replication slot to the last LSN from which Datastream read.
You can find this LSN in the Datastream consumer logs.
Optionally, delete the original stream.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
