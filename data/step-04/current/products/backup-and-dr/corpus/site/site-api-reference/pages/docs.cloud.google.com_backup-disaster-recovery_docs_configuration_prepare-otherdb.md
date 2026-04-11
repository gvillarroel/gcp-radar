---
title: "Prepare other self-managed databases for Backup and DR \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-otherdb
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/backup-disaster-recovery/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-otherdb
  title: "Prepare other self-managed databases for Backup and DR \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Backup and DR
Reference
Send feedback
Prepare other self-managed databases for Backup and DR
Stay organized with collections
Save and categorize content based on your preferences.
Before you can back up the following self-managed database instances and data,
you must add the database server as a host to Backup and DR Service. For this to
work, most databases require some settings and other preparation steps.
The procedures on this page are for most self-managed databases:
For
Review
Then use
IBM Db2
Backup and DR for IBM Db2
Db2 database prerequisites
PostgreSQL
Backup and DR for PostgreSQL
PostgreSQL database prerequisites
SAP ASE
Backup and DR for SAP ASE
SAP ASE database prerequisites
SAP IQ
Backup and DR for SAP IQ
SAP IQ database prerequisites
SAP MaxDB
Backup and DR for SAP MaxDB
SAP MaxDB database prerequisites
SAP HANA
Backup and DR for SAP HANA
Prepare SAP HANA databases for backup
Microsoft SQL Server
Backup and DR for SQL Server
Prepare SQL server databases for Backup and DR Service
Oracle
Backup and DR for Oracle
Prerequisites for backing up an Oracle database and its following pages
For all other Backup and DR supported databases, follow these procedures.
Db2 database prerequisites
Each database must be using Automatic storage mode , or else only instances
are discovered.
Each database must be in archive log mode, and LOGARCHMETH1 must be set to
local disk. To learn if the database is in circular mode or archive log mode,
run the command db2 get db cfg for <database name>| grep LOGARCHMETH1
If the database is in circular mode, then change the logging to archive mode
before continuing. To set the LOGARCHMETH1 parameter, use the following:
db2 update db cfg for <dbname> LOGARCHMETH1 using 'DISK:<location>'
For HADR-standby database the reads on standby option must be enabled,
that is the DB2_HADR_ROS parameter must be set to ON .
Note: Third-party log backup location is not supported. Log backup location
( LOGARCHMETH1 ) must be set to local disk for backup and recovery to
succeed. Note: If you are using Pacemaker HADR, then see Configure Pacemaker-aware snapshots for IBM Db2 HADR .
PostgreSQL database prerequisites
This section includes information about the PostgreSQL database prerequisites.
Protect PostgreSQL from the primary node
Create a backup user:
create user actuser;
Provide privilege for backup:
alter user actuser with superuser ;
alter user actuser with Replication ;
PostgreSQL archive mode—archive_mode—must be set to ON to take
log backups.
To configure the archive log mode option, update the postgresql.conf file in
the data directory of the instance and reload the PostgreSQL.
archive_mode = on
// Command to reload PostgreSQL
pg_ctl reload -D <Postgres_datadir_path>
Example : pg_ctl reload -D /pgdata
Protect PostgreSQL from a standby node
Create a backup user:
create user actuser;
Provide privilege for backup:
alter user actuser with superuser ;
alter user actuser with Replication ;
PostgreSQL archive mode—WAL—setup on standby node:
Create the directory where we want to keep the WALs.
Example assumes /pglog is the directory. Run the following steps as root user.
mkdir /pglog
chown -R postgres:postgres /pglog
Configure the parameters for archiving.
Example assumes $PGDATA is /pgdata/11/data . Run these steps as postgres user.
Add or update the parameters in the file /pgdata/11/data/postgresql.conf
wal_level = replica
archive_mode = always
archive_command = 'test ! -f /pglog/%f && cp %p /pglog/%f'
Restart the PostgreSQL:
/usr/pgsql-11/bin/pg_ctl stop -D /pgdata/11/data
/usr/pgsql-11/bin/pg_ctl start -D /pgdata/11/data
Add or update entry in pg_hba.conf on Primary to accept database connection from standby.
host postgres <db-user> <standby-ip/32> <connection method>
Example: host postgres postgres 10.128.0.29/32 trust
Test the archive generation (as postgres user):
ls -l /pglog/
Run this log switch command:
/usr/pgsql-11/bin/psql -h 10 .128.0.28 -p5432 -c "select pg_switch_wal();"
sleep 5 # log shipping may take some time depending on network
ls -l /pglog/
SAP ASE database prerequisites
Before you begin, on the SAP ASE server complete the following:
A backup user account must be created with backup privilege—either
oper_role or sa_role . A backup username and password must
be configured with host configuration. Create the user with or without
a password to run the quiesce command on the source with
sa_role/or with quiesce privileges. To create the user with a password,
run the following:
isql -Usa -P<password> -S<SAP ASE_Server_Name>
1>sp_addlogin actuser, '<password>'
2go
1>grant role sa_role to actuser
2>go
To configure the user login without a password requirement,
set the password to null, then run the following command:
1 > sp_configure "minimum password length" , 0
2 > go
1 > sp_modifylogin actuser , "min passwd length" ,
"0"
2 > go
3 > exit
isql - Uactuser - P '<password>' - S<server_name>
> sp_password '<password>' , NULL
> go
> sp_configure "minimum password length" , 8
> go
Note: If there are multiple SAP ASE instances running on a server,
then the backup username and password must be common for all
SAP ASE instance running on that server.
Install the Backup and DR agent on the SAP ASE server.
To enable transaction log backup, Truncate on chkpt false
must be set at the database level for each database of
the SAP ASE instance.
The following is true for volume level backups:
The SAP ASE instance must reside under LVM and it must
not be the boot volume.
The LVM volume from which the SAP ASE volumes are provisioned
should have at least 20% free space.
Note: SAP ASE discovery and backup jobs may stop responding due to a known issue
with sp_spaceused. The reasons and the resolution for long running sp_spaceused
procedures are explained in the SAP note:
"2443782 - execute sp_spaceused takes too long - SAP ASE".
SAP IQ database prerequisites
Before you begin, review the following on the SAP IQ server:
SAP IQ PITR logging must be ON to take log backup. To configure
PITR log option, you need these SAP IQ API:
ALTER DBSPACE IQ_SYSTEM_LOG RENAME /<pitr_log_location>
SET OPTION PUBLIC.IQ_POINT_IN_TIME_RECOVERY_LOGGING = ON`
After enabling PITR logging, a database full backup is needed.
The utility database needs to start by specifying the username and password,
and dbname should be utility_db .
For example: start_iq -n utility_db -su act,passwd
The database backup username and password should be the same as the utility_db
username and password and it must have DBA privileges. To create the backup
user, for example:
create user actuser identified by 'mypassword' ;
grant dba to actuser ;
Note: If there are multiple SAP IQ instances running on a server, then the
backup username and password must be common for all SAP IQ instances running on
that server.
Install the Backup and DR agent on the SAP IQ server host.
SAP MaxDB database prerequisites
Before you begin, on the SAP MaxDB server:
If there are multiple MaxDB instances running on a server,
then the DB username and password must be common for all MaxDB instance
running on that server.
Autolog backup must be enabled. Use the following command to
enable auto log backup:
dbmcli - d < DBSID > - u < DBM_USERNAME > , < DBM_PASSWD > autolog_on
< autolog_backup_template_name >
For enabling the autolog backup, you need an autolog backup template.
To create a backup template, use the following command.
dbmcli - d < DBSID > - u < DBM_USERNAME > , < DBM_PASSWD > backup_template_create
< BACKUP_TEMPLATE_NAME > to file < FULL_PATH_WITH_FILE_NAME > content log
Log Overwrite area must be deactivated to enable autolog backup enable.
To deactivate log overwrite, use the following command:
dbmcli - d < DBSID > - u < DBM_USERNAME > , < DBM_PASSWD > db_execute SET LOG AUTO
OVERWRITE OFF .
Install the Backup and DR agent on the SAP MaxDB server host.
What's next
After the database is prepared for Backup and DR, you can
add the host and discover the databases .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
