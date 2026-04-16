---
title: "Import data to a Redis instance \_|\_ Memorystore for Redis \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/memorystore/docs/redis/import-data
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/redis/release-notes
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/redis/import-data
  title: "Import data to a Redis instance \_|\_ Memorystore for Redis \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Redis
Guides
Send feedback
Import data to a Redis instance
Stay organized with collections
Save and categorize content based on your preferences.
Note: You should only run an import operation if you are willing to
overwrite all current instance data. If the operation fails, you could lose all
current instance data.
Follow the instructions on this page to import an RDB backup into your
Memorystore for Redis instance.
Importing a Redis backup allows you to migrate data from another instance or
restore your instance data from a previous RDB backup. For additional
information about imports, exports, and best practices, see Import and export overview .
Before you begin
Have a Cloud Storage bucket that contains the RDB backup file that you
want to import. We recommend that you import from a bucket in the same region
as your Memorystore instance.
To create a Cloud Storage bucket, see Create buckets .
To upload a file into a Cloud Storage bucket, see Exporting data from a Redis instance or Upload objects from a filesystem .
Have sufficient permissions
to perform the import.
Import an RDB backup file into a Redis instance
Console
Go to the Memorystore for Redis page in the Google Cloud console.
Memorystore for Redis
Click your instance ID to view the instance details page.
Click the Import button in the top bar.
Click the Browse button and navigate to the Cloud Storage
bucket that stores the RDB file you want to import.
Click the RDB file and then click the Select button.
Click the Import button.
Confirm that you want to import, and click the Import button.
Gcloud
Import the RDB file from the Cloud Storage bucket referred to
in step one of Before you begin
by executing the following command:
gcloud redis instances import gs://[BUCKET_NAME]/[FILE_NAME].rdb [INSTANCE_ID] --region=[REGION] --project=[PROJECT_ID]
Stop an ongoing import operation
Console
Go to the Memorystore for Redis page in the Google Cloud console.
Memorystore for Redis
Click the Instance ID to view its information.
Click the Stop import button.
Gcloud
To stop an import operation, first you need to find the operation ID by
running the following command:
gcloud redis operations list --region=[REGION] -project=[PROJECT]
Once you have the operation ID, run the following command:
gcloud redis operations cancel [OPERATION_ID] --region=[REGION] --project=[PROJECT]
Instance availability and behavior while importing
Importing overwrites all current instance data, so make sure that you are okay
with your data being overwritten before you start an import.
Your Redis instance is unavailable during the import process. You cannot
access instance data or modify the instance until the import is complete.
The import can take anywhere from a few minutes to a few hours. For example,
if you import an 8 GB RDB file into a 10GB instance, the import can take 5
minutes, and if you import a 100GB RDB file into a 120GB instance, the import
can take an hour. To monitor the progress of the import, check the instance
details page, which displays the status of the operation.
An instance can only import backups from older Redis versions. An instance
running Redis 5.0 can import an RDB exported from Redis 4.0, but an instance
running Redis 4.0 cannot import an RDB from Redis 5.0.
What's next
Learn about import and export feature behavior and best practices with Import and export overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
