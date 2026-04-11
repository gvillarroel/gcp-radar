---
title: "Create Data Guard's standby database \_|\_ Bare Metal Solution \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/data-guard-setup/db-setup-standby
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/bare-metal/docs/bms-overview
source_metadata:
  url: https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/data-guard-setup/db-setup-standby
  title: "Create Data Guard's standby database \_|\_ Bare Metal Solution \_|\_ Google\
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
Create Data Guard's standby database
After the primary database has been prepared for Data Guard ,
it's ready to be duplicated to the standby site. The following guide uses
active duplication
to create a consistent copy of the database.
As a reminder, the following examples are used throughout this guide:
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
The Bare Metal Solution servers running Oracle in this guide are configured with the
following environment variables:
Environment variable name
Value
ORACLE_BASE
/apps/oracle/oracle_base
ORACLE_HOME
/apps/oracle/19.0.0/db_home1
You might need to modify the environment variable paths depending on your setup.
Set up the standby database
Configure the database connectivity
Log in to each Bare Metal Solution server in the standby location and modify
the $ORACLE_HOME/network/admin/tsnames.ora file to update the net service
configuration:
DBDG_SITE2 =
(DESCRIPTION =
(ADDRESS = (PROTOCOL = TCP)(HOST = DBDG_SITE2_SCAN_HOSTNAME )(PORT = 1521))
(CONNECT_DATA =
(SERVER = DEDICATED)
(SERVICE_NAME = DBDG_SITE2 ) (UR=A)
)
)
DBDG_SITE1 =
(DESCRIPTION =
(ADDRESS = (PROTOCOL = TCP)(HOST = DBDG_SITE1_SCAN_HOSTNAME )(PORT = 1521))
(CONNECT_DATA =
(SERVER = DEDICATED)
(SERVICE_NAME = DBDG_SITE1 )
)
)
Configure a temporary listener
To avoid restarting the listener used for other database connections, database
duplication is performed using a temporary listener. This example uses port
1523, but you can use any port that is open for communication between the
clusters. You delete this temporary listener after database duplication.
Log in to the first Bare Metal Solution server in the standby location to be used
during the database duplication process. Modify the
$ORACLE_HOME/network/admin/listener.ora file to update the net service
configuration:
LISTENER_ DBDG_SITE2 =
(DESCRIPTION_LIST =
(DESCRIPTION =
(ADDRESS = (PROTOCOL = TCP)(HOST = site1db1 )(PORT = 1523))
)
)
SID_LIST_LISTENER_ DBDG_SITE2 =
(SID_LIST =
(SID_DESC =
(GLOBAL_DBNAME = DBDG_SITE2 _DGMGRL)
(ORACLE_HOME = ORACLE_HOME )
(SID_NAME = DBDG_SITE21 )
)
)
ADR_BASE_LISTENER = /apps/oracle/oracle_base
Start the temporary listener:
lsnrctl start LISTENER_ DBDG_SITE2
Prepare the standby database
Each database instance requires a directory to store audit logs. Create the
audit file directory on each Bare Metal Solution server in the standby database
location:
mkdir -p /apps/oracle/oracle_base /admin/ DBDG_SITE2 /adump
Modify the $ORACLE_HOME/dbs/init DBDG_SITE21 .ora
file that was copied to the standby database server earlier:
Set the db_unique_name to the new standby database name.
Modify any instance-specific parameters to reflect the instance names for
the standby database. Some examples are:
instance_number
thread
undo_tablespace
Set the audit_file_dest parameter to use the directory created in the
previous step.
If the ASM diskgroups in each location use different names, modify the
db_file_name_convert and log_file_name_convert parameters to match
the new file locations.
Comment out the control_files parameter.
The following example shows an updated database parameter file with
modifications using the examples provided in this guide. Note that your
parameter file will contain additional parameters that are specific to your
database setup. Only the parameters that require modification for the
standby are shown:
*.db_unique_name=' DBDG_SITE2 '
DBDG_SITE21 .instance_number=1
DBDG_SITE22 .instance_number=2
DBDG_SITE21 .thread=1
DBDG_SITE22 .thread=2
DBDG_SITE21 .undo_tablespace='UNDOTBS1'
DBDG_SITE22 .undo_tablespace='UNDOTBS2'
*.audit_file_dest='/apps/oracle/oracle_base/admin/ DBDG_SITE2 /adump'
#* .control_files='+DATA/ DBDG_SITE1 /CONTROLFILE/current.258.1091317089','+RECO/ DBDG_SITE1 /CONTROLFILE/current.257.1091317089'
In the /etc/oratab file, add an entry so the oraenv command can set
environment variables for the standby database:
DBDG_SITE21 : ORACLE_HOME : N
Create the standby database
Set the ORACLE_SID environment variable so you can connect to the standby
database:
source oraenv <<< " DBDG_SITE21 "
You should receive the response
The Oracle base has been set to /apps/oracle/oracle_base .
Before duplicating the primary database, you must manually start the standby
instance on one node. Log in to the first Bare Metal Solution server in the standby
location, start SQL*Plus, then startup the standby database in
nomount mode by using the pfile :
sqlplus / as sysdba
STARTUP NOMOUNT PFILE = ' /apps/oracle/19.0.0/db_home1 /dbs/init DBDG_SITE21 .ora' ;
If successful, you should receive a response similar to the following
example:
ORACLE instance started.
Total System Global Area 1.2885E+10 bytes
Fixed Size 15988824 bytes
Variable Size 1845493760 bytes
Database Buffers 1.1006E+10 bytes
Redo Buffers 17563648 bytes
Exit SQL*Plus after starting the instance:
EXIT;
Verify connectivity to the standby database service. From each Bare Metal Solution
server in the primary database location, attempt to connect to the standby
instance by using SQL*Plus. Enter the SYS remote login password manually
to successfully connect to the instance.
sqlplus sys@ DBDG_SITE2_FOR_DUPLICATION as sysdba
If successful, you should receive a standard SQL*Plus prompt, where you can
check the instance parameters:
SHOW PARAMETER DB_UNIQUE_NAME ;
You should receive a response similar to the following:
NAME TYPE VALUE
---------------- ----------- ------------------------------
db_unique_name string DBDG_SITE2
Exit SQL*Plus after checking the DB_UNIQUE_NAME parameter:
EXIT;
Connect to Recovery Manager, then run the duplicate command to duplicate
the standby from the active primary database:
rman TARGET sys @ DBDG_SITE1 AUXILIARY sys @ DBDG_SITE2_FOR_DUPLICATION
DUPLICATE TARGET DATABASE FOR STANDBY FROM ACTIVE DATABASE NOFILENAMECHECK;
If successful, after processing you should receive a message similar to the
following example:
Finished Duplicate Db at ...
Exit Recovery Manager:
EXIT;
Finalize the standby database creation
During database duplication, ASM creates new control files for the standby
database. Connect to the new standby instance and get the new control file
name(s). The following example shows two control files stored in the +DATA
and +RECO diskgroups:
sqlplus / as sysdba
SET LINESIZE 140
COLUMN NAME FORMAT a15
COLUMN VALUE FORMAT a125
SELECT NAME , VALUE FROM V$PARAMETER WHERE NAME = 'control_files' ;
The control file name(s) are shown in the "Value" field:
NAME VALUE
--------------- ----------------------------------------------------------------------------------------------------
control_files + DATA/ DBDG_SITE2 /CONTROLFILE/current . 258 . 1091317089 , + RECO/ DBDG_SITE2 /CONTROLFILE/current . 257 . 1091317089
Record the control file names from the previous step, and replace any
entries for the control_files parameter in
$ORACLE_HOME/dbs/init DBDG_SITE21 .ora with the new
values. If there are multiple control files, encapsulate each in single
quotes, separated by a comma:
*.control_files='+DATA/ DBDG_SITE2 /CONTROLFILE/current.258.1091317089','+RECO/ DBDG_SITE2 /CONTROLFILE/current.257.1091317089'
Connect to the standby database with SQL*Plus and create a new spfile from the modified pfile :
sqlplus / as sysdba
CREATE SPFILE = '+DATA/ DBDG_SITE2 /spfile DBDG_SITE2 ' FROM PFILE = ' /apps/oracle/19.0.0/db_home1 /dbs/init DBDG_SITE21 .ora' ;
Copy the password file to the ASM diskgroup by using the asmcmd command:
asmcmd cp /apps/oracle/19.0.0/db_home1 /dbs/orapw DBDG_SITE21 .ora +DATA/ DBDG_SITE2 /orapw DBDG_SITE2
Shut down the standby database instance and delete the temporary pfile and
password file:
sqplus / as sysdba
SHUTDOWN IMMEDIATE ;
EXIT ;
rm $ORACLE_HOME /dbs/orapw DBDG_SITE21 .ora $ORACLE_HOME /dbs/init DBDG_SITE2 .ora
Stop the temporary listener used for database duplication on the first
Bare Metal Solution server in the standby database location:
lsnrctl stop LISTENER_ DBDG_SITE2
Remove the temporary entries in the $ORACLE_HOME/network/admin/listener.ora
file on the first Bare Metal Solution server in the standby database location.
Add the new standby database and instances to the cluster registry by using
the srvctl command:
srvctl add database \
-db DBDG_SITE2 \
-oraclehome /apps/oracle/19.0.0/db_home1 \
-spfile +DATA/ DBDG_SITE2 /spfile DBDG_SITE2 \
-pwfile +DATA/ DBDG_SITE2 /orapw DBDG_SITE2 \
-role PHYSICAL_STANDBY \
-startoption MOUNT
srvctl add instance \
-db DBDG_SITE2 \
-instance DBDG_SITE21 \
-node site2db1
srvctl add instance \
-db DBDG_SITE2 \
-instance DBDG_SITE22 \
-node site2db2
Start the standby database by using the srvctl command:
srvctl start database -db DBDG_SITE2
Next steps
Next, configure and enable the Data Guard broker .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
