---
title: "Configure an Amazon Aurora MySQL database for CDC \_|\_ Datastream \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/datastream/docs/configure-amazon-aurora-mysql
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/configure-amazon-aurora-mysql
  title: "Configure an Amazon Aurora MySQL database for CDC \_|\_ Datastream \_|\_\
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
Configure an Amazon Aurora MySQL database for CDC
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to configure change data capture (CDC) to
stream data from an Amazon Aurora MySQL database to a supported destination ,
such as BigQuery or Cloud Storage.
Before configuring CDC for your Amazon Aurora MySQL database, make sure that you have an existing Aurora cluster and that you have connected to the Writer endpoint of your primary database server.
Create a parameter group
Launch your Amazon RDS Dashboard.
In the Navigation Drawer , click Parameter Groups .
Click Create Parameter Group . The Create Parameter Group page appears.
Use the following table to populate the fields of this page:
Field Description
Parameter group family Select the family that matches your database.
Type Select DB Cluster Parameter Group .
Group name Provide a name for the parameter group.
Description Provide a description for the parameter group.
Click Create .
Select the checkbox to the left of your newly created parameter group.
Under Parameter group actions , click Edit .
Set the following parameter values:
For GTID-based replication:
Parameter Value
binlog_format ROW
log_bin_use_v1_row_events 1
read_only 0
net_read_timeout 3600
net_write_timeout 3600
wait_timeout 86400
expire-logs-days 7
binlog_row_image FULL
max_allowed_packet 1G (recommended value)
log-replica-updates 1
enforce-gtid-consistency ON
gtid_mode ON
You can only set this
parameter to ON after you set enforce-gtid-consistency
to ON . In general, gtid_mode can have the following
values:
OFF
OFF_PERMISSIVE
ON_PERMISSIVE
ON
You can only change the values of the gtid_mode parameter one
step at a time. For example, if the current mode is set to OFF ,
do the following:
Change the setting to OFF_PERMISSIVE .
Change the setting to ON_PERMISSIVE .
Change the setting to ON .
For more information, see
MySQL documentation .
For binlog-based replication:
Parameter Value
binlog_format ROW
Click Save Changes .
Assign the parameter group to the database instance
Launch your Amazon RDS Dashboard.
In the Navigation Drawer , click Databases , and then select your database instance.
From the Instance Actions menu, select Modify . The Modify DB Instance dialog appears.
In the Additional configuration section, select the database cluster parameter group that you created .
Set the Backup retention period to 7 days .
Click Continue .
In the Scheduling of Modifications pane, select the Apply immediately option.
Set the binary log retention period
Enter the following MySQL command:
call mysql . rds_set_configuration ( 'binlog retention hours' , 168 );
You're entering this command because you want to ensure proper replication by configuring your system to retain binary logs for a minimum of 7 days (or 168 hours).
Restart your MySQL server so that the changes you made can take effect.
Create a Datastream user
Create a Datastream user:
CREATE USER 'datastream' @ '%' IDENTIFIED BY ' YOUR_PASSWORD ' ;
Grant the following privileges to them:
GRANT REPLICATION SLAVE , SELECT , REPLICATION CLIENT ON * . * TO 'datastream' @ '%' ;
GRANT EXECUTE ON PROCEDURE mysql . rds_show_configuration TO 'datastream' @ '%' ;
FLUSH PRIVILEGES ;
What's next
Learn more about how Datastream works with MySQL sources .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
