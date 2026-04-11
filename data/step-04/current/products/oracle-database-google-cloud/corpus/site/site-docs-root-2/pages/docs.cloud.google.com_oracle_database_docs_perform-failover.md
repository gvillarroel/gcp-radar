---
title: "Perform a failover \_|\_ Oracle Database at Google Cloud \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/oracle/database/docs/perform-failover
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/oracle/database/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/oracle/database/docs/perform-failover
  title: "Perform a failover \_|\_ Oracle Database at Google Cloud \_|\_ Google Cloud\
    \ Documentation"
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
Perform a failover
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to perform a failover operation for an Autonomous AI Database
in Google Cloud.
For your Autonomous AI Database, Oracle Database@Google Cloud lets you failover to a standby
peer database.
Caution: If your primary database is accessible, we recommend that you
perform a switchover . Perform a
failover only in the event of a disaster when your primary
database becomes inaccessible, because a failover operation is irreversible, and
might result in data loss and disconnection of all clients.
Before you begin
Ensure that you have the following roles and permissions required to perform a
failover:
roles/autonomousDatabaseAdmin
Perform a failover
To failover to a standby peer database, do the following:
Console
In the event of a disaster, if your primary database is inaccessible,
follow these steps:
Go to the Autonomous AI Database page.
Go to Autonomous AI Database
Click the name of the standby peer for which you want
to perform the failover operation.
On the Autonomous AI Database details page, click Failover .
In the Confirm failover to peer dialog, do the
following:
If your primary database is not automatically detected, select the
region of your primary database.
Enter the ID of your primary database.
Click Confirm .
If your primary database is accessible, follow these steps:
Go to the Autonomous AI Database page.
Go to Autonomous AI Database
Click the name of the primary database for which you want to perform
the failover operation.
On the Autonomous AI Database details page, select the Disaster recovery
tab.
For the peer database to which you want to failover, click
more_vert View actions ,
and then click Failover .
In the Confirm failover to peer dialog,
enter the ID of your primary database.
Click Confirm .
After the failover is complete, the peer database becomes the "Primary"
and its Status field shows "Available".
gcloud
Use the gcloud oracle-database autonomous-databases failover
command to perform a failover.
gcloud oracle-database autonomous-databases failover PEER_DATABASE_ID
--project= PROJECT_ID
--location= PEER_REGION
--peer-autonomous-database=projects/ PROJECT_ID /locations/ PRIMARY_REGION /autonomousDatabases/ PRIMARY_DATABASE_ID
Replace the following:
PEER_DATABASE_ID : the ID of your peer database.
PROJECT_ID : the ID of your Google Cloud project.
PEER_REGION : the region of your peer database.
PRIMARY_REGION : the region of your primary database.
PRIMARY_DATABASE_ID : the ID of your primary database.
API
To perform a failover operation, run the following curl command:
curl -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
"https://oracledatabase.googleapis.com/v1/projects/ PROJECT_ID /locations/ PEER_REGION /autonomousDatabases/ PEER_DATABASE_ID :failover" \
-d \
'{
"peer_autonomous_database": "projects/ PROJECT_ID /locations/ PRIMARY_REGION /autonomousDatabases/ PRIMARY_DATABASE_ID "
}'
Replace the following:
PROJECT_ID : the ID of your Google Cloud project which
contains your primary database.
PEER_REGION : the region of your peer database.
PEER_DATABASE_ID : the ID of your peer database.
PRIMARY_REGION : the region of your primary database.
PRIMARY_DATABASE_ID : the ID of your primary database.
What's next
Perform a switchover .
View peer database details .
Create a peer database .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
