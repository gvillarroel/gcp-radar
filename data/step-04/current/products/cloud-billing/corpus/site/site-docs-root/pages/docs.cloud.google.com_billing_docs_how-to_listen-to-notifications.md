---
title: "Listen to your Pub/Sub notifications \_|\_ Cloud Billing \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/billing/docs/how-to/listen-to-notifications
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/billing/docs
source_metadata:
  url: https://docs.cloud.google.com/billing/docs/how-to/listen-to-notifications
  title: "Listen to your Pub/Sub notifications \_|\_ Cloud Billing \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Costs and usage management
Cloud Billing
Guides
Send feedback
Listen to your Pub/Sub notifications
Stay organized with collections
Save and categorize content based on your preferences.
Example reference architecture
Figure 1 : An example of using budget alerts
to automate cost control responses using Pub/Sub for programmatic
notifications and Cloud Run functions to automate a response.
This document explains how to listen to your programmatic budget
notifications by subscribing to your Pub/Sub topic with
Cloud Run function
triggers. Without a subscriber, Pub/Sub drops published messages
and you can't retrieve them later. In this document, you'll learn how to
complete the following tasks:
Create a Cloud Run function that listens to notifications.
View Cloud Run function events.
Test a Cloud Run function.
Note: Although there are many ways you can
subscribe to your topic ,
the examples on this page use
Cloud Run functions .
Cloud Run functions lets you create functions that
respond to cloud events without needing to manage a server or runtime
environment.
Before you begin
Before you begin, you must complete the following tasks:
Create a budget
Set up programmatic notifications
Create a Cloud Run function
To create a Cloud Run function, complete the following steps:
In the Google Cloud console, go to the Cloud Run functions page.
Go to Cloud Run functions
Click Write a function .
Select Use an inline editor to create a function .
Enter a Service name that's meaningful to
your budget notification.
Select the region
where your Cloud Run functions will run. You can't edit this setting
after you deploy your function.
Click Add trigger and select Cloud Pub/Sub .
If prompted, enable any required APIs.
In the Eventarc trigger panel, complete the following steps:
Enter a Trigger name .
Set Trigger type to Google sources .
Set Event provider to Cloud Pub/Sub .
Select the Cloud Pub/Sub topic that you configured on your
budget.
Select a Region .
Click Save trigger .
Edit the Identity-Aware Proxy , Billing , Service scaling ,
Ingress , and Container(s), Volume, Networking, Security settings
as needed, then click Create .
Write code using the inline editor or upload a file that tells your function
how to handle notifications.
See the following examples for code samples:
Send notifications to Slack
Control resource usage with notifications
Disable billing usage with notifications
For details about the notifications your code will receive, see
Notification format .
Set Function entry point to the correct function to execute:
Click DEPLOY .
View Cloud Run function events
After you deploy the Cloud Run function, click LOGS to view
the logs from your function invocations.
Test a Cloud Run function
As notifications are sent to Pub/Sub, subscribers receive the
messages. To test a sample notification and ensure that your function is working
as expected,
publish a message in Pub/Sub
with the following object as the message body:
{
"budgetDisplayName": "name-of-budget",
"alertThresholdExceeded": 1.0,
"costAmount": 100.01,
"costIntervalStart": "2019-01-01T00:00:00Z",
"budgetAmount": 100.00,
"budgetAmountType": "SPECIFIED_AMOUNT",
"currencyCode": "USD"
}
You can also add message attributes such as the billing account ID. For more
information, see
Notification format .
What's next
To learn more about how you can use programmatic notifications, review the
following examples of programmatic cost control responses:
Send notifications to Slack
Control resource usage with notifications
Disable billing usage with notifications
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
