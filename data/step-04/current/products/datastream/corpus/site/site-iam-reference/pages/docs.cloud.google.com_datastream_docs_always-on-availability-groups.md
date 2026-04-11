---
title: "Work with Always On availability groups \_|\_ Datastream \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/datastream/docs/always-on-availability-groups
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/configure-spanner
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/always-on-availability-groups
  title: "Work with Always On availability groups \_|\_ Datastream \_|\_ Google Cloud\
    \ Documentation"
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
Work with Always On availability groups
Stay organized with collections
Save and categorize content based on your preferences.
This page describes what Always-On availability groups in SQL Server are and how
Datastream supports them for failover and data recovery scenarios.
Overview of Always On availability groups
In SQL Server, Always On availability groups are a high-availability solution
that lets you prepare your databases for disaster recovery scenarios.
Always On availability groups maximize database availability for businesses.
Availability groups support a replicated environment for a selected set of
databases, known as availability databases. Each group includes one set of
primary databases for read and write tasks, and up to eight sets of corresponding
secondary databases. The secondary databases can optionally allow read-only
access or backup operations.
For more information about Always On availability groups, see
What is an Always On availability group? in the SQL Server
documentation.
For information about Always On Availability group prerequisites for a SQL
Server instance, see the SQL Server documentation .
Configure Datastream for use with Always On availability groups
Datastream supports synchronous-commit availability mode with the
change tables CDC method. Under this mode, the secondary database stays
synchronised with the corresponding primary until data synchronization stops.
The confirmation of a transaction is only sent to the client when the secondary
replica writes the incoming transaction log records to a disk.
For information about availability modes, see
Differences between availability modes for an Always On availability group .
To configure your SQL Server instance for use with Always On availability groups,
you need to enable SQL Server Agent to capture logs when there's a failover, and
then run a clean up job. Before you can do this, you need to modify the CDC
Agent job steps to check if the current replica is actually the primary. This is
done using the sys.fn_hadr_is_primary_replica function.
Use the following commands to set up your instance:
-- Check if the current replica is a primary for the corresponding database.
USE [ DATABASE_NAME ];
DECLARE @ DatabaseName SYSNAME = DB_NAME ();
IF ( SELECT sys . fn_hadr_is_primary_replica ( @ DatabaseName )) = 1
BEGIN
-- If the replica isn't a primary, the code block that follows is skipped
EXECUTE sys . sp_cdc_add_job @ job_type = 'capture' ;
EXECUTE sys . sp_cdc_add_job @ job_type = 'cleanup' ;
END
What's next
Learn more about how Datastream works with SQL Server sources .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
