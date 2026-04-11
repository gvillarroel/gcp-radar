---
title: "Configure a self-managed MySQL database for CDC \_|\_ Datastream \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/datastream/docs/configure-self-managed-mysql
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/configure-self-managed-mysql
  title: "Configure a self-managed MySQL database for CDC \_|\_ Datastream \_|\_ Google\
    \ Cloud Documentation"
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
Configure a self-managed MySQL database for CDC
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to configure change data capture (CDC) to
stream data from a self-managed MySQL database to a supported destination ,
such as BigQuery or Cloud Storage.
These instructions also work for databases such as MariaDB, Percona Server for
MySQL or Alibaba Cloud PolarDB.
Verify the configuration and retention period of the binary log
Confirm that the binary log is configured correctly by entering the following MySQL command:
SHOW GLOBAL VARIABLES LIKE '%binlog_format%' ;
Verify that the value for the binlog_format variable is set to ROW .
Datastream doesn't support MIXED or STATEMENT binary log
formats.
Confirm that the row format for the binary log is set to FULL by entering
the following MySQL command:
SHOW GLOBAL VARIABLES LIKE 'binlog_row_image' ;
For MySQL versions 8.0 and later, confirm that the binlog_row_value_options
variable is set to an empty value by entering the following MySQL command:
SHOW GLOBAL VARIABLES LIKE 'binlog_row_value_options' ;
Verify that the replica updates option for the binary log is set to ON by
entering the following MySQL command:
SHOW GLOBAL VARIABLES LIKE 'log_replica_updates' ;
For MySQL versions earlier than 8.0.26, enter the following command instead:
SHOW GLOBAL VARIABLES LIKE 'log_slave_updates' ;
Verify that the retention period of the binary log is set to 604800
seconds ( 7 days) by entering the following MySQL command:
SHOW GLOBAL VARIABLES LIKE 'binlog_expire_logs_seconds' ;
For MySQL versions earlier than 8.0.3, enter the following command instead:
SHOW GLOBAL VARIABLES LIKE 'expire_logs_days' ;
If your MySQL database isn't set to full row-based replication and a 7-day retention period, then you'll need to change the configuration of the binary log, as follows:
Navigate to the /etc/mysql/ directory.
Using an editor, open the my.cnf file.
Add the following lines to the file:
[ mysqld ]
log-bin = mysql-bin
server-id = 1
binlog_format = ROW
binlog_row_value_options = ''
# For MySQL versions 8.0 and later.
log-replica-updates = 1
# For MySQL versions earlier than 8.0.26, use log-slave-updates=true
# instead.
binlog_expire_logs_seconds = 604800
# For MySQL versions earlier than 8.0.3, use expire_logs_days=7 instead.
max_allowed_packet = 1G
# '1G' is the recommended value.
For GTID-based replication, also add the following lines:
[mysqld]
gtid_mode=ON
enforce-gtid-consistency=ON
Save your changes to the my.cnf file, and then close the file.
Restart your MySQL server so that the changes you made can take effect.
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
