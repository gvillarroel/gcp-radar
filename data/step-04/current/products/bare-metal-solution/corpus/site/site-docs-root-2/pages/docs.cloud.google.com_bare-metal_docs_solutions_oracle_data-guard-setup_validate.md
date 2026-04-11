---
title: "Validate the Data Guard deployment \_|\_ Bare Metal Solution \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/data-guard-setup/validate
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/bare-metal/docs/bms-overview
source_metadata:
  url: https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/data-guard-setup/validate
  title: "Validate the Data Guard deployment \_|\_ Bare Metal Solution \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The availability of Bare Metal Solution is transitioning to a specialized, allowlist-only model. If you are an existing customer, please contact your Google account team to explore the value of migrating to new Oracle and Google Cloud strategic partnership offerings .
Home
Documentation
Distributed, hybrid, and multicloud
Bare Metal
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Validate the Data Guard deployment
After you've set up the Data Guard broker ,
you need to verify that redo was copied from the primary database and applied on
the standby database. The following procedure can be used to check the Data
Guard status from within the primary and standby databases.
The following examples are used throughout this guide:
Database unique name
Server hostnames
RAC instance names
Role
DBDG_SITE1
site1db1 , site1db2
DBDG_SITE11 , DBDG_SITE12
Primary
DBDG_SITE2
site2db1 , site2db2
DBDG_SITE21 , DBDG_SITE22
Standby
Validate the Data Guard deployment
Log in to the first Bare Metal Solution server that hosts the primary database,
then set the ORACLE_SID environment variable so you can connect to the
primary database:
source oraenv <<< " DBDG_SITE11 "
Start SQL*Plus, then determine the latest sequence number for archived redo
logs:
sqlplus / as sysdba
SELECT THREAD # , max ( SEQUENCE # ) "Last Primary Seq Archived"
FROM V$ARCHIVED_LOG VAL , V$DATABASE VDB WHERE VAL . RESETLOGS_CHANGE # =
VDB . RESETLOGS_CHANGE # GROUP BY THREAD # ORDER BY 1 ;
The following output has maximum sequence number of 40 for thread 1 and a
maximum sequence number of 33 for thread 2:
THREAD# Last Primary Seq Archived
---------- -------------------------
1 40
2 33
Record the results to compare with the standby database. Sequence numbers on
the standby database are expected to match the primary database.
Log in to the first Bare Metal Solution server that hosts the standby database, then
set the ORACLE_SID environment variable so you can connect to the standby
database:
source oraenv <<< " DBDG_SITE21 "
Start SQL*Plus, then validate that the latest sequence number received and
applied for archived redo logs matches the latest sequence number on the
primary database:
sqlplus / as sysdba
SELECT THREAD # , max ( SEQUENCE # ) "Last Standby Seq Received"
FROM V$ARCHIVED_LOG VAL , V$DATABASE VDB WHERE VAL . RESETLOGS_CHANGE # =
VDB . RESETLOGS_CHANGE # GROUP BY THREAD # ORDER BY 1 ;
SELECT THREAD # , max ( SEQUENCE # ) "Last Standby Seq Applied"
FROM V$ARCHIVED_LOG VAL , V$DATABASE VDB WHERE VAL . RESETLOGS_CHANGE # =
VDB . RESETLOGS_CHANGE # AND VAL . APPLIED IN ( 'YES' , 'IN-MEMORY' ) GROUP BY
THREAD # ORDER BY 1 ;
The following output has sequence numbers that match the prior query run
against the standby database:
THREAD# Last Standby Seq Received
---------- -------------------------
1 40
2 33
THREAD# Last Standby Seq Applied
---------- ------------------------
1 40
2 33
Check that the status of the managed recovery process is APPLYING_LOG :
SELECT PROCESS , STATUS FROM V$MANAGED_STANDBY WHERE PROCESS LIKE '%MRP%' ;
The following example shows a single managed recovery process named MRP0
with status of APPLYING_LOG :
PROC ESS STATUS
--------- ------------
MRP0 APPLYING_LOG
Check for any transport or apply lag on the standby database:
COLUMN NAME FORMAT a20
COLUMN VALUE FORMAT a30
SELECT NAME , VALUE FROM V$DATAGUARD_STATS WHERE NAME LIKE '%lag%' ;
The following output shows no lag on the standby database:
NAME VALUE
-------------------- ------------------------------
transport lag +00 00:00:00
apply lag +00 00:00:00
If there is lag, consult Oracle's Data Guard troubleshooting documentation .
Database switchover using the Data Guard broker
A switchover is a role reversal in which the primary database becomes a standby
database, and vice versa. During the switchover process, database clients are
disconnected from the primary database. Depending on how your application
connects to the database, a switchover can disrupt application traffic. Oracle
offers options to maintain application continuity
during role transitions. You can test your disaster recovery readiness by
performing a database switchover with the following instructions:
Log in to the Bare Metal Solution server that hosts the primary database.
Launch the Data Guard command line interface, and connect to the standby
database:
dgmgrl
CONNECT SYS @ DBDG_SITE2
When prompted for a password, enter your SYS remote login password for the
database.
Validate that the database is ready for a switchover.
VALIDATE DATABASE DBDG_SITE2 ;
A successful result will report that the database is ready for switchover.
If successful, perform the switchover command:
SWITCHOVER TO DBDG_SITE2 ;
If the command succeeds, you'll receive a message that DBDG_SITE2
is the new primary database in the configuration.
Run the following command to confirm that the database roles are swapped:
SHOW CONFIGURATION;
Run the following command to return to the original configuration:
SWITCHOVER TO DBDG_SITE1 ;
Note: Running the switchover command while connected to the primary database
might result in the connection being dropped. This is due to the primary
database being restarted during the switchover process.
Database failover using Data Guard broker
A failover is a role transition in which one of the standby databases moves to
the primary role due to a complete site outage. Redo will not be shipped to the
standby database until the standby database has been reinstated.
Warning: A failover typically involves data loss.
Perform the failover
Log in to the first Bare Metal Solution server that hosts the standby database.
Connect to the Data Guard command line interface, then failover the primary
to the standby database:
dgmgrl
CONNECT SYS @ DBDG_SITE2
When prompted for a password, enter your SYS remote login password for the
database.
Initiate the failover:
FAILOVER TO DBDG_SITE2
Run show configuration; to verify that DBDG_SITE2
is now the primary database, and DBDG_SITE1
needs to be reinstated.
Reinstate the primary database
You can only reinstate the primary database after a failover if
flashback database
is enabled. To reinstate the failed primary database:
Log in to the first Bare Metal Solution server that hosts the primary database.
Connect to the Data Guard command line interface, log in to the primary
databases, then reinstate the failed database:
dgmgrl
CONNECT SYS @ DBDG_SITE2
When prompted for a password, enter your SYS remote login password for the
database.
Reinstate the database:
REINSTATE DATABASE DBDG_SITE1 ;
EXIT;
Next steps
Next, set up a Data Guard observer on Compute Engine .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
