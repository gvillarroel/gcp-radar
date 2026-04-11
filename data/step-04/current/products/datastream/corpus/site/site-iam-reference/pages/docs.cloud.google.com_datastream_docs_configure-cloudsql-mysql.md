---
title: "Configure a Cloud SQL for MySQL database for CDC \_|\_ Datastream \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/datastream/docs/configure-cloudsql-mysql
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/configure-spanner
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/configure-cloudsql-mysql
  title: "Configure a Cloud SQL for MySQL database for CDC \_|\_ Datastream \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Datastream
Guides
Send feedback
Configure a Cloud SQL for MySQL database for CDC
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to configure change data capture (CDC) to
stream data from a Cloud SQL for MySQL database to a supported destination ,
such as BigQuery or Cloud Storage.
Enable binary logging
To enable binary logging for Cloud SQL for MySQL, see Enabling point-in-time recovery .
Configure database flags
In Google Cloud console, go to the Cloud SQL Instances page.
Go to Cloud SQL Instances
Select the project that contains the Cloud SQL instance for which you want
to set the database flags.
Open the instance and click Edit .
Go to the Flags section.
Click Add a database flag .
Choose the following flags from the drop-down menu, and set their values:
For GTID-based replication:
Parameter Value
net_read_timeout 3600
net_write_timeout 3600
wait_timeout 86400
binlog_row_image FULL
max_allowed_packet 1073741824 (recommended value)
For binlog-based replication:
Flag Value
net_read_timeout 3600
net_write_timeout 3600
wait_timeout 86400
Click Save to save your changes.
Create a Datastream user
To create a Datastream user, enter the following MySQL commands:
CREATE USER 'datastream' @ '%' IDENTIFIED BY ' YOUR_PASSWORD ' ;
GRANT REPLICATION SLAVE , SELECT , REPLICATION CLIENT ON * . * TO 'datastream' @ '%' ;
FLUSH PRIVILEGES ;
What's next
Learn more about how Datastream works with MySQL sources .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
