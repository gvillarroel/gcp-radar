---
title: "Troubleshooting an Azure Event Hubs import topic \_|\_ Pub/Sub \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/docs/azure-event-hub-import-topic-troubleshooting
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/pubsub/docs/azure-event-hub-import-topic-troubleshooting
  title: "Troubleshooting an Azure Event Hubs import topic \_|\_ Pub/Sub \_|\_ Google\
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
Troubleshooting an Azure Event Hubs import topic
Stay organized with collections
Save and categorize content based on your preferences.
This document provides some common troubleshooting tips for
Azure Event Hubs import topics.
After you configure the import topic and start ingesting messages, you can
check the relevant Cloud Monitoring metrics to see
if data is ingested. Perform the following steps:
In the console, go to the Topics page.
Go to Topics
Click the Azure Event Hubs import topic that you want to troubleshoot.
In the topic details page, click the Metrics tab.
Check the chart for the metric Ingestion byte count .
If no data is being ingested, in the topic details page,
check to see if there is an error for the
Topic state field.
You can also check the metric Ingestion data source state .
To do so, in the topic details page, click the Metrics tab.
Here is a list of errors that you might encounter:
Error Code
Description
Fix
EVENT_HUBS_PERMISSION_DENIED
Error consuming data from Azure Event Hubs due to permission issues.
Verify the roles assigned to the registered Azure app and ensure the necessary permissions are granted .
Ensure that a service account exists and that it is
correctly configured as described in the procedure Create an App registration with identity federation. For more information about how to create a service account, see Create
a service account in Google Cloud.
Verify that the Pub/Sub service account has
the iam.serviceAccounts.getOpenIdToken permission.
For more information, see Add
the Service Account Token Creator role to the Pub/Sub
service account.
Verify that you have added the service account user
role to the service account. For more information, see Add the service account user role to the service account.
PUBLISH_PERMISSION_DENIED
Error publishing to the topic due to permission issues.
Grant the Pub/Sub service account the necessary publish
permissions . For more information, see Add the
Pub/Sub publisher role to the Pub/Sub
service account.
EVENT_HUB_NOT_FOUND
The provided Azure event hub couldn't be found.
Verify the Azure event hub for accuracy. Ensure that the Azure event hub exists and is accessible.
SUBSCRIPTION_NOT_FOUND
The provided Azure Event Hubs subscription couldn't be found.
Verify the subscription for accuracy. Ensure that the subscription exists.
RESOURCE_GROUP_NOT_FOUND
The provided Azure Event Hubs resource group couldn't be found.
Verify the resource group for accuracy. Ensure that the resource group exists within the specified subscription.
If there are no errors till this point, check the best practices in
Maintain a healthy publisher .
You can also enable platform logs for a
import topic. These logs help you troubleshoot issues
when you have issues ingesting objects into Pub/Sub import topics.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
