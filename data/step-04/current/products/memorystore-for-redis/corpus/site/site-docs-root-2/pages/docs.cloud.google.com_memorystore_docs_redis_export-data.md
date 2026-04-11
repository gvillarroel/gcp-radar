---
title: "Export data from a Redis instance \_|\_ Memorystore for Redis \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/redis/export-data
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/redis/export-data
  title: "Export data from a Redis instance \_|\_ Memorystore for Redis \_|\_ Google\
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
Export data from a Redis instance
Stay organized with collections
Save and categorize content based on your preferences.
Follow the instructions on this page to export an RDB backup of your
Memorystore for Redis instance.
Exporting your Redis instance creates an RDB backup file of your data. The
export operation stores the RDB backup in a Cloud Storage bucket. Your
instance's performance may be temporarily slower for the duration of the
export.
Before you begin
Have a Cloud Storage bucket. We recommend that you export to a bucket
located in the same region as your Redis instance.
To create a Cloud Storage bucket, see Create buckets .
Have sufficient permissions
to perform the export.
Export an RDB backup file to a Cloud Storage bucket
Console
Go to the Memorystore for Redis page in the Google Cloud console.
Memorystore for Redis
Click your instance ID to view the instance details page.
Click the Export button in the top bar.
Click the Browse button and navigate to the Cloud Storage
bucket to which you want to export your RDB file.
Use the default export file name, or enter your own file name that
includes the .rdb file extension. For example:
myexport.rdb
Click the Select button.
Click the Export button.
Confirm that you want to export, and click the Export button.
Gcloud
Export an RDB file to the Cloud Storage bucket referred to
in step one of Before you begin
by executing the following command:
gcloud redis instances export gs://[BUCKET_NAME]/[FILE_NAME].rdb [INSTANCE_ID] --region=[REGION] --project=[PROJECT_ID]
Stop an ongoing export operation
Console
Go to the Memorystore for Redis page in the Google Cloud console.
Memorystore for Redis
Click the Instance ID to view its information.
Click the Stop export button.
Gcloud
To stop an export operation, first you need to find the operation ID by
running the following command:
gcloud redis operations list --region=[REGION] -project=[PROJECT]
Once you have the operation ID, run the following command:
gcloud redis operations cancel [OPERATION_ID] --region=[REGION] --project=[PROJECT]
Instance availability and behavior while exporting
During the export process you can read and write to your Redis instance,
however you cannot run admin operations on your instance such as scaling or
upgrading.
Your instance may experience increased latency during the export operation.
The export can take anywhere from a few minutes to a few hours. For example,
if you export a 10 GB instance with 8 GB of used memory, the export can take 5
minutes, and if you export a 120 GB instance with 100 GB of used memory, the
export can take an hour. To monitor the progress of the export, check the
instance details page, which displays the status of the operation.
What's next
Learn about import and export feature behavior and best practices with Import and export overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
