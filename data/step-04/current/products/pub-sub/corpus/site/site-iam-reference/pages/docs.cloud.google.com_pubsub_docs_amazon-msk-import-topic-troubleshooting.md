---
title: "Troubleshooting an Amazon Managed Streaming for Apache Kafka import topic\
  \ \_|\_ Pub/Sub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/docs/amazon-msk-import-topic-troubleshooting
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/pubsub/docs/amazon-msk-import-topic-troubleshooting
  title: "Troubleshooting an Amazon Managed Streaming for Apache Kafka import topic\
    \ \_|\_ Pub/Sub \_|\_ Google Cloud Documentation"
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
Troubleshooting an Amazon Managed Streaming for Apache Kafka import topic
Stay organized with collections
Save and categorize content based on your preferences.
This document provides some common troubleshooting tips for
Amazon Managed Streaming for Apache Kafka (Amazon MSK) import topics.
After you configure the import topic and start ingesting messages, you can
check the relevant Cloud Monitoring metrics to see
if data is ingested. Perform the following steps:
In the console, go to the Topics page.
Go to Topics
Click the Amazon MSK import topic that you want to troubleshoot.
In the topic details page, click the Metrics tab.
Check the chart for the metric Ingestion byte count .
If no data is being ingested, in the topic details page,
check to see if there is an error for the Topic state field.
You can also check the metric Ingestion data source state .
To do so, in the topic details page, click the Metrics tab.
Here is a list of errors that you might encounter:
Error Code
Description
Fix
MSK_PERMISSION_DENIED
Error consuming Amazon MSK data due to
permission issues.
Verify the AWS role ARN for accuracy and check that the
AWS role has the required read permissions. For more
information, see Create
a policy in AWS.
Ensure that a service account exists and that it is
correctly configured as described in the procedure Create a role in AWS using a custom trust policy. For more information about how to create a service account, see Create
a service account in Google Cloud.
Verify that the Pub/Sub service account has
the iam.serviceAccounts.getOpenIdToken permission.
For more information, see Add
the Service Account Token Creator role to the Pub/Sub
service account.
Verify that you have added the service account user
role to the service account. For more information, see Add the service account user role to the service account.
PUBLISH_PERMISSION_DENIED
Error publishing to the Pub/Sub topic due to permission
issues.
Grant the Pub/Sub service account the necessary publish
permissions . For more information, see Add the
Pub/Sub publisher role to the Pub/Sub
service account.
CLUSTER_NOT_FOUND
The provided cluster wasn't found.
Verify the cluster ARN for accuracy. Ensure that the cluster exists and is accessible.
Cluster is not public
The provided cluster can't be accessed
Non-public clusters behind VPCs aren't supported. You must use a public cluster.
TOPIC_NOT_FOUND
The provided Kafka topic wasn't found.
Verify the topic name for accuracy. Ensure that the topic exists within the specified cluster.
If there are no errors till this point, check the best practices in
Maintain a healthy publisher .
You can also enable platform logs for an
import topic. These logs help you troubleshoot issues
when you have issues ingesting objects into Pub/Sub
import topics.
Apache Kafka® is a registered
trademark of The Apache Software Foundation or its affiliates in the United
States and/or other countries.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
