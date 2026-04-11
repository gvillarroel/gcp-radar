---
title: "Configure change streams \_|\_ Bigtable \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/change-streams-configure
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/change-streams-configure
  title: "Configure change streams \_|\_ Bigtable \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Bigtable
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Configure change streams
If you want to track data changes made to a Bigtable table, you can
enable a change stream for the table and then read it using an application
such as Dataflow. Before you read this document, read the Overview of
change streams . In particular, make
sure that you are aware of the costs incurred when streaming changes.
This page describes how to enable, disable, and change the retention period for
a change stream.
For instructions on creating a new table with a change stream enabled, see
Create a
table .
Required role
To get the permissions that you need to enable, disable, or modify a
Bigtable change stream, ask your administrator to grant you the
following IAM role.
Bigtable Administrator
( roles/bigtable.admin )
on the Bigtable instance that contains the table you plan to
stream changes from
Enable a change stream
To enable a change stream on an existing table, complete the following steps:
Console
Open the list of Bigtable instances in the Google Cloud console.
Open the instance list
Click the instance containing the table that you want to enable a change
stream for.
Click Tables in the left pane.
The Tables page displays a list of tables in the instance.
Click Edit for the table for which you want to enable a change
stream.
Click Enable change stream .
In the Expiration time field, enter a number from 1 to 7 to
configure the number of days that data stream records should be
retained.
Click Save .
gcloud
To enable a change stream on a table, use the gcloud bigtable instances
tables update
command.
gcloud bigtable instances tables update TABLE_ID \
--instance= INSTANCE_ID \
--project= PROJECT_ID \
--change-stream-retention-period= CHANGE_STREAM_RETENTION_PERIOD
Replace the following:
TABLE_ID : the ID for the table whose changes you want
to stream
INSTANCE_ID : the instance that contains the table
PROJECT_ID : the project that contains the instance
CHANGE_STREAM_RETENTION_PERIOD : the length of time that
Bigtable should keep change stream data for the table. Must
be no less than one day and no more than seven days, expressed as a number
and a letter for the unit. Acceptable units are days (d), hours (h),
minutes (m), and seconds (s). Example: 5d
Disable a change stream
You can disable a table's change stream at any time. Data stream records that
were created before you disable the change stream continue to consume storage
until the next compaction , but you are no
longer charged for that storage. You can't read a change stream after you
disable it, including changes recorded before you disable the stream.
Console
Open the list of Bigtable instances in the Google Cloud console.
Open the instance list
Click the instance whose tables you want to view.
Click Tables in the left pane.
The Tables page displays a list of tables in the instance.
Click Edit for the table whose change stream configuration you want
to disable.
Clear the checkmark from Enable change stream .
Click Save .
gcloud
To disable a change stream on a table, use the gcloud bigtable instances
tables update
command.
gcloud bigtable instances tables update TABLE_ID \
--instance= INSTANCE_ID \
--project= PROJECT_ID \
--clear-change-stream-retention-period
Replace the following:
TABLE_ID : the ID for the table whose changes you want
to stream
INSTANCE_ID : the instance that contains the table
PROJECT_ID : the project that contains the instance
Modify a change stream's retention time
You can modify the number of days that Bigtable keeps your change
stream records. If you reduce the number of days, records that were streamed
before the configuration change continue to consume storage until the next
compaction . After the configuration
change, you can only stream changes from the newly specified time period.
If you increase the retention time, it's not retroactive — change streams
are kept for the increased number of days starting when you modify the
configuration.
Console
Open the list of Bigtable instances in the Google Cloud console.
Open the instance list
Click the instance whose tables you want to view.
Click Tables in the left pane.
The Tables page displays a list of tables in the instance.
Click Edit for the table whose change stream configuration you want
to modify.
In the Expiration time field, enter a number from 1 to 7 for the number
of days that data stream records should be retained.
Click Save .
gcloud
To change the retention period for a table's change stream, use the gcloud
bigtable instances tables
update
command.
gcloud bigtable instances tables update TABLE_ID \
--instance= INSTANCE_ID \
--project= PROJECT_ID \
--change-stream-retention-period= CHANGE_STREAM_RETENTION_PERIOD
Replace the following:
TABLE_ID : the ID for the table whose changes you want to stream
INSTANCE_ID : the instance that contains the table
PROJECT_ID : the project that contains the instance
CHANGE_STREAM_RETENTION_PERIOD : the length of time that
Bigtable should keep change stream data for the table.
Must be from one to seven days, expressed as a number and a letter for
the unit. Acceptable units are days (d), hours (h), minutes (m), and
seconds (s). Example: 5d
What's next
Read a change stream with Dataflow.
Review Bigtable pricing.
Complete a quickstart to learn how to enable a change stream and view changes.
Use the Cloud Bigtable client library for Java to read change streams.
Work through a tutorial about processing a change stream.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
