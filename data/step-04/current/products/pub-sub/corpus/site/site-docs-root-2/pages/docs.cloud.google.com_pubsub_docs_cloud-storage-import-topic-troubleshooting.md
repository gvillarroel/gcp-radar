---
title: "Troubleshooting a Cloud Storage import topic \_|\_ Pub/Sub \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/pubsub/docs/cloud-storage-import-topic-troubleshooting
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/pubsub/docs/cloud-storage-import-topic-troubleshooting
  title: "Troubleshooting a Cloud Storage import topic \_|\_ Pub/Sub \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Pub/Sub
Guides
Send feedback
Troubleshooting a Cloud Storage import topic
Stay organized with collections
Save and categorize content based on your preferences.
This document provides some common troubleshooting tips for
Cloud Storage import topics.
After you configure the import topic and start ingesting messages, you can
check the relevant Cloud Monitoring metrics to see
if data is ingested. Perform the following steps:
In the console, go to the Topics page.
Go to Topics
Click the Cloud Storage import topic that you want to troubleshoot.
In the topic details page, click the Metrics tab.
Check the chart for the metric Ingestion byte count .
If no data is being ingested, in the topic details page,
check to see if there is an error and a red exclamation mark for the
Topic state field.
You can also check the metric Ingestion data source state .
To do so, in the topic details page, click the Metrics tab.
For more information about these metrics, see
Metrics to monitor import topics .
Here is a list of errors that you might encounter:
Error Code
Description
Fix
CLOUD_STORAGE_PERMISSION_DENIED
Error consuming
Cloud Storage data due to permission issues.
Verify that the Pub/Sub service account
has the necessary permissions to access the Cloud Storage
bucket. Ensure the service account has the following permissions:
storage.objects.list : To list the objects in a bucket.
storage.objects.get : To read the objects in a bucket.
storage.buckets.get : To obtain the bucket location
and that the bucket exists.
For more
information, see the prerequisites to creating a Cloud Storage topic .
PUBLISH_PERMISSION_DENIED
Error publishing to the topic due to permission
issues.
Grant the Pub/Sub service account the necessary publish
permissions . For more information, see Add the
Pub/Sub publisher role to the Pub/Sub
service account.
BUCKET_NOT_FOUND
The specified Cloud Storage bucket cannot be found.
Verify the bucket name for accuracy.
TOO_MANY_OBJECTS
The Cloud Storage bucket has too
many objects, ingestion is paused. Ingestion is resumed after the number
of objects in the bucket is fewer than 50 million.
The limit for the objects is 50 million.
Reduce the number of objects in the bucket or contact
Google Cloud support for assistance.
If there are no errors till this point, check the best practices in
Maintain a healthy publisher .
You can also enable platform logs for a
Cloud Storage import topic. These logs help you troubleshoot issues
when you have issues ingesting objects into Pub/Sub import topics.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
