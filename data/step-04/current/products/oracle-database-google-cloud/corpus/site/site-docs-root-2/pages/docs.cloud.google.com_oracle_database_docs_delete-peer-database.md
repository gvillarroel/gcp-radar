---
title: "Delete a peer database \_|\_ Oracle Database at Google Cloud \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/oracle/database/docs/delete-peer-database
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/oracle/database/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/oracle/database/docs/delete-peer-database
  title: "Delete a peer database \_|\_ Oracle Database at Google Cloud \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Oracle Database at Google Cloud
Guides
Send feedback
Delete a peer database
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to delete a peer database in Google Cloud.
You can't delete a peer database during a switchover operation.
Before you begin
Ensure that you have the following roles and permissions required to delete a
peer database:
roles/autonomousDatabaseAdmin
Delete a peer database
To delete a peer database, do the following:
Console
Go to the Autonomous AI Database page.
Go to Autonomous AI Database
Click the name of the Autonomous AI Database for which you want to delete a
peer database.
On the Autonomous AI Database details page, click the
Disaster Recovery tab.
In the Peer database section, for the peer database that you want to
delete, click more_vert View actions ,
and then click Delete .
In the Delete database instance dialog, enter the peer database
ID and click Confirm .
The deletion of the peer database might take a few hours. On the
Disaster recovery tab, in the Peer database section, the
Status field shows you the progress of the delete operation. When the
peer database is deleted, it's removed from the peer database list.
gcloud
You can use the gcloud oracle-database autonomous-databases delete
command to delete a peer database.
gcloud oracle-database autonomous-databases delete DATABASE_ID
--location= REGION_ID
Replace the following:
DATABASE_ID : the identifier for the peer database.
REGION_ID : the region of the peer database.
What's next
Learn how to switchover to a
a peer database.
View peer database details .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
