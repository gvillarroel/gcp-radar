---
title: "Query in BigQuery \_|\_ Manufacturing Data Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/access/how-to-query-in-bq
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/manufacturing-data-engine/docs/concepts/key-concepts
source_metadata:
  url: https://docs.cloud.google.com/manufacturing-data-engine/docs/guides/access/how-to-query-in-bq
  title: "Query in BigQuery \_|\_ Manufacturing Data Engine \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Manufacturing Data Engine
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Query in BigQuery
This guide explains how to query data in BigQuery for typical
Manufacturing Data Engine (MDE) use-cases.
Records join with cloud metadata
If cloud metadata materialization is disabled, you can access cloud metadata
instances by joining relevant record table with the metadata-store on the
metadata instance_id with the following SQL query:
SELECT
dnr . * ,
ms . instance
FROM
mde_data . ` RECORD_TABLE_NAME ` AS dnr
LEFT JOIN
mde_dimension . ` metadata - store ` AS ms
ON
ms . instance_id = JSON_VALUE ( cloud_metadata_ref , "$. BUCKET_NAME .instance_id" )
WHERE
DATE ( event_timestamp ) = ' EVENT_TIMESTAMP '
LIMIT 100
Replace the following:
RECORD_TABLE_NAME : Name of the record table.
BUCKET_NAME : Name of the cloud metadata bucket.
EVENT_TIMESTAMP : Timestamp of the event.
To improve query performance and since the metadata-store is partitioned on
bucket number, you can optionally specify the bucket number in the ON clause,
as the following SQL query:
SELECT
dnr . * ,
ms . instance
FROM
mde_data . ` < RECORD_TABLE_NAME > ` AS dnr
LEFT JOIN
mde_dimension . ` metadata - store ` AS ms
ON
ms . instance_id = JSON_VALUE ( cloud_metadata_ref , "$. BUCKET_NAME .instance_id" )
AND ms . bucket_number = < BUCKET_NUMBER >
WHERE
DATE ( event_timestamp ) = ' EVENT_TIMESTAMP '
LIMIT 100
Replace the following:
BUCKET_NAME : Name of the cloud metadata bucket.
EVENT_TIMESTAMP : Timestamp of the event.
Cloud metadata instance attributes access
You can access metadata instance attributes using the JSON dot notation which
always returns a JSON object, or using one of the
BigQuery JSON functions ,
such as JSON_VALUE to extract strings or other data types. See the following
example:
SELECT
dnr . * ,
ms . instance . deviceName -- this returns a double quoted JSON string
JSON_VALUE ( ms . instance , '$.deviceName' ) -- this returns a string
FROM
mde_data . ` example - record - tbl ` AS dnr
LEFT JOIN
mde_dimension . ` metadata - store ` AS ms
ON
ms . instance_id = JSON_VALUE ( cloud_metadata_ref , "$.bucket.instance_id" )
WHERE
DATE ( event_timestamp ) = '2023-01-01'
LIMIT 100
Similarly, if cloud metadata materialization is enabled, you can access metadata
instance attributes directly from the record. See the following example:
SELECT
* ( EXCEPT materialized_cloud_metadata ),
materialized_cloud_metadata . device . deviceName -- this returns a double quoted JSON string
JSON_VALUE ( materialized_cloud_metadata ., '$.device.deviceName' ) -- this returns a string
FROM
mde_data . ` example - record - tbl `
WHERE
DATE ( event_timestamp ) = '2023-01-01'
LIMIT 100
Obtaining a list of all instance IDs contained in cloud_metadata_ref
To obtain an array of all metadata instance IDs contained in
the cloud_metadata_ref field of a record follow these steps:
Create the user defined function (UDF) with the following SQL query:
CREATE OR REPLACE FUNCTION ` mde_data . get_instance_ids ` ( input JSON ) RETURNS ARRAY<STRING> LANGUAGE js AS R """
return input ? Object.keys(input).map(bucketName => input[bucketName].instance_id).filter(instance_id => instance_id != null) : [];
""" ;
Execute the function in a query:
SELECT
mde_data . get_instance_ids ( cloud_metadata_ref ) as metadata_instance_ids ,
* ,
FROM
mde_data . ` RECORD_TABLE_NAME `
WHERE
DATE ( event_timestamp ) = ' EVENT_TIMESTAMP '
LIMIT 100
Replace the following:
RECORD_TABLE_NAME : Name of the record table.
EVENT_TIMESTAMP : Timestamp of the event.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
