---
title: "Perform a switchover \_|\_ Oracle Database at Google Cloud \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/oracle/database/docs/perform-switchover
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/oracle/database/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/oracle/database/docs/perform-switchover
  title: "Perform a switchover \_|\_ Oracle Database at Google Cloud \_|\_ Google\
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
Perform a switchover
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to perform a switchover to a peer Autonomous AI Database in
Google Cloud. You can perform a switchover through both
Google Cloud and OCI.
If the Primary Autonomous AI Database is down, you can perform a switchover from
the peer (Standby) database.
Before you begin
Ensure that you have the following roles and permissions required to perform a
switchover:
roles/autonomousDatabaseAdmin
Perform a Switchover
To switchover to a peer database, do the following:
Console
Go to the Autonomous AI Database page.
Go to Autonomous AI Database
Click the name of the primary Autonomous AI Database on which you want to
perform a switchover operation.
On the Autonomous AI Database details page, click the
Disaster Recovery tab.
In the Peer database section, for the peer database that you want to
switchover to, click more_vert View actions ,
and then click Switchover .
In the Confirm switchover to peer dialog, do the following:
If your primary database is not automatically detected, select the
region of your primary database.
Enter the ID of your peer database.
Click Confirm .
On the Disaster recovery tab, in the Peer database section, the
Status field shows you the progress of the switchover operation.
After the switchover is complete, the peer database becomes the "Primary"
and its Status field shows "Available". Whereas, the former Primary
Autonomous AI Database becomes the "Standby".
If you initiated the switchover in the OCI console, you can still see the
progress of the switchover in the Google Cloud console.
gcloud
Use the gcloud oracle-database autonomous-databases switchover
command to perform a switchover.
gcloud oracle-database autonomous-databases switchover DATABASE_ID
--project= PROJECT_ID
--location= REGION
--peer-autonomous-database=projects/ PROJECT_ID /locations/ REGION /autonomousDatabases/ PEER_DATABASE_ID
Replace the following:
DATABASE_ID : the ID of your database.
PROJECT_ID : the ID of your Google Cloud project.
REGION : the region of your peer database.
PEER_DATABASE_ID : the ID of your peer database.
What's next
View peer database details .
Create a peer database .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
