---
title: "Configure an Amazon RDS MySQL database for CDC \_|\_ Datastream \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/datastream/docs/configure-amazon-rds-mysql
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/configure-spanner
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/configure-amazon-rds-mysql
  title: "Configure an Amazon RDS MySQL database for CDC \_|\_ Datastream \_|\_ Google\
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
Configure an Amazon RDS MySQL database for CDC
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to configure change data capture (CDC) to
stream data from an Amazon RDS for MySQL database to a supported destination ,
such as BigQuery or Cloud Storage.
Create a parameter group
Launch your Amazon RDS Dashboard.
In the Navigation Drawer , click Parameter Groups .
Click Create Parameter Group . The Create Parameter Group page appears.
Select the database family that matches your database, provide a name and
description for the parameter group.
Click Create .
Select the checkbox to the left of your newly created parameter group.
Under Parameter group actions , click Edit .
Use the following table to set the parameters for your group.
For binlog-based replication:
Parameter Value
binlog_format ROW
log_bin_use_v1_row_events 1
read_only 0
net_read_timeout 3600
net_write_timeout 3600
wait_timeout 86400
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
Click Save Changes .
Create a read replica
Although this is an optional step, we highly
recommend using a read replica because it significantly decreases the load of
replication on your MySQL database.
If you choose to replicate directly from the main server, then proceed to
the instructions in Configure the
source database and the read replica .
Launch your Amazon RDS Dashboard.
In the Navigation Drawer , click Databases .
Select the main database instance to which you want Datastream to
connect.
Expand the Actions button, and then click Create read replica .
Configure the read replica, as necessary.
Click Create read replica .
Configure the source database and the read replica
If you chose to replicate directly from the main server, configure the source
database using the steps that follow.
If you chose to use a read replica, configure both the source database and the
read replica using the steps that follow.
Launch your Amazon RDS Dashboard.
In the Navigation Drawer , click Databases .
Select the instance that you want to configure and then click Modify .
Go to the Additional configuration section.
Select the parameter group that you created .
Set the Backup retention period to 7 days .
Click Continue .
Under Scheduling of modifications , select Apply immediately .
Wait until the changes to your parameter group are applied
before proceeding.
Verify that the parameter group is assigned to the database instance
Launch your Amazon RDS Dashboard.
In the Navigation Drawer , click Databases , and then select your
database instance.
Click the Configurations tab.
Verify that you see the parameter group that you created ,
and that its status is pending-reboot .
Reboot your database instance to complete the configuration. To reboot the
instance:
In the Navigation Drawer , click Instances .
Select your database instance.
From the Instance Actions menu, select Reboot .
After you reboot your database instance, its status
changes to **in-sync**.
Set the binary log retention period
Enter the following MySQL command:
call mysql . rds_set_configuration ( 'binlog retention hours' , 168 );
You're entering this command because you want to ensure
proper replication by configuring your system to retain binary logs for a
minimum of 7 days (or 168 hours).
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
