---
title: "Generate a wallet \_|\_ Oracle Database at Google Cloud \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/oracle/database/docs/generate-wallet
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/oracle/database/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/oracle/database/docs/generate-wallet
  title: "Generate a wallet \_|\_ Oracle Database at Google Cloud \_|\_ Google Cloud\
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
Generate a wallet
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to generate a wallet for an Autonomous AI Database in
Google Cloud.
You can download your client credentials by generating a wallet. The wallet
contains information for mTLS connections only. For TLS connections, you don't
need to generate a wallet.
Generating a wallet for an APEX workload type database is not supported.
Generate a wallet for an Autonomous AI Database
To generate a wallet, do the following:
Console
Go to the Autonomous AI Database page.
Go to Autonomous AI Database
Click the name of the Autonomous AI Database for which you want to generate
the wallet.
On the Autonomous AI Database details page, select the Connections tab.
In the Download client credentials (Wallet) section, click
Download wallet .
In the Download your wallet dialog, set a password for the wallet.
Click Download .
gcloud
Use the gcloud oracle-database autonomous-databases generate-wallet
command to generate the wallet.
gcloud oracle-database autonomous-databases generate-wallet DATABASE_NAME \
--location= REGION_ID \
--project= PROJECT_NAME \
--password= PASSWORD
Replace the following:
DATABASE_NAME : name of the database.
REGION_ID : the region of your database.
PROJECT_NAME : the name of your Google Cloud
project.
PASSWORD : a password for the wallet.
What's next
Learn how to manage
or delete an Autonomous AI Database.
Configure Identity and Access Management roles for an instance.
Use monitoring metrics to monitor
your instances.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
