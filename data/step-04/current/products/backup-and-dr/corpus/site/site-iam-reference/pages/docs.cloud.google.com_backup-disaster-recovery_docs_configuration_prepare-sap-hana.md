---
title: "Prepare SAP HANA for Backup and DR \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-sap-hana
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-sap-hana
  title: "Prepare SAP HANA for Backup and DR \_|\_ Google Cloud Documentation"
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
Prepare SAP HANA for Backup and DR
Stay organized with collections
Save and categorize content based on your preferences.
Before you can back up SAP HANA scale-out instances and data, you must add the
database server as a host to Backup and DR Service. Before you begin, be sure to
follow these preparation steps. It's also a good idea to review
Backup and DR for SAP HANA .
Prerequisites
Before you begin:
All the configured services—see SAP Note 1697613 and SAP Note 1649519—
such as nameserver and indexserver . must be running. You can check
this in the Overview of SAP HANA studio > Operational State >
Confirm all services are started.
To allow the Backup and DR agent to perform host-side operations, use an SAP
HANA hdbuserstore key instead of a username and password to communicate with
HANA database using the SAP HANA secure userstore. See Configure the HANA userstore key .
Database log_mode must be set to normal under the HANA Studio
configuration tab. See Set up the log mode and log backup in HANA Studio .
All SAP HANA servers that have HANA data to be protected by Backup and DR Service
must have been onboarded to Backup and DR Service.
All SAP HANA servers that have data to be protected by Backup and DR Service must
have the Backup and DR agent installed .
If the underlying data volumes for SAP HANA are protected as SAP HANA database
backups using LVM snapshot with CBT or file-based backup integrated with
backint , and if you are also protecting file systems on the same host, in
the file system app, you should set /hana/log & /hana/data in an exclude
path. See Linux file system .
HANA Archive log backup recommendation:
Make sure to set the HANA Archive log backup path as the basepath_logbackup
and basepath_catalogbackup in global.ini.
Don't use HANA Archive log mount to store files other than HANA Archive log
backup.
By default, archive purge runs with every database backup. To achieve best
recovery RTO, keep the default setting.
Note: If production log retention is set, then purge runs based on the
Retention of production db logs in hour setting under Application Details &
Settings. Size the HANA archive log backup disk to store archives based on the
production log retention setting.
Configure the HANA userstore key
Use the following instructions to configure the HANA userstore key:
Create the database backup user from HANA Studio .
Get the instance and SQL port numbers .
Create the SAP HANA hdbuserstore key for system DB backup users .
Step 1: Create the database backup user from HANA Studio
Choose a database username based on the company's standard. Make sure to create this user account under SYSTEMDB .
Create the user under SYSTEMDB :
From SAP HANA Studio SYSTEMDB, go to System > Security > Users > New User .
Assign a username and a password.
Set Force password change on next logon to No .
HANA 2.0 (SPS01 to SPS04): Click the System privilege tab and assign privileges by selecting the following:
Backup admin
Catalog read
Database admin
Database start
Database stop
HANA 2.0 (SPS05 and later): Click the System privilege tab and assign privileges by selecting the following:
Backup admin
Catalog read
Database backup operator
+. Database recovery operator
Database admin
Database start
Database stop
Deploy the newly created system user by clicking the green arrow .
Step 2: Get the instance and SQL port numbers
You need the HANA instance and SQL Port numbers for system DBs.
To get the instance and SQL port numbers from HANA 2.0 studio:
Go to System .
Click the Landscape tab.
Click the Services tab.
Under the Service column, navigate to the nameserver .
Get the value of SQL port. The instance number is the second and third digits of the SQL port number.
Step 3: Create the SAP HANA hdbuserstore key for system DB backup users
Use this naming convention for the userstore key name:
For SYSTEMDB, set the key name to ( Database backup username ).
For example, for database backup username ( Actbackup ), set
SYSTEMDB-key_name- ( ACTBACKUP ) .
Procedure
Connect to the HANA database system using SSH and log into (sid)adm:
su - (sid)adm
Change directory: cd exe
Create entries in hdbuserstore using command hdbuserstore :
./hdbuserstore SET (key_name) (host name):(port) (DB_user_name) (DB_user_password)
In this example:
` ./hdbuserstore SET ACTBACKUP s4hana:30013 ACTBACKUP (DB_user_password)
Check the keystore: ./hdbuserstore list
Set up the log mode and log backup in HANA Studio
Using the HANA Studio set the HANA log mode and log backup location for Backup and DR to take backups of HANA DB transaction logs:
In SAP HANA HDB studio, make sure log backup is set correctly under DATABASE (SYSTEMDB FOR HANA 2.0) > Backup > Configuration page:
Destination type is File .
Destination is set to a local file system mount path.
Backup interval is set to required RPO .
Automatic log backup is enabled.
Database log_mode must be set to normal .
Check under Database configuration: DATABASE (SYSTEMDB FOR HANA 2.0) > Configuration page. In the filter, type basepath .
Verify that basepath_logbackup is set correctly:
Set the basepath_catalogbackup to the same as basepath_logbackup .zz.
Open the basepath_catalogbackup edit page and set the New value .
to the same as basepath_logbackup . Click Save . This ensures the
backup of the catalog with log backup for point in time recovery.
On the HANA database server, run the re-config for the values to take effect:
hdbnsutil -reconfig .
Clean up SAP HANA Backint Backup
If SAP HANA Backint is protected already with Compute Engine or any other third party,
perform the following cleanup steps on the SAP HANA host before assigning a backup plan:
Delete old Backint symbolic files from /usr/sap/(HANA SID)/SYS/global/hdb/opt .
Clean up all the backint parameters from global.ini .
Uninstall and reinstall the Backup and DR agent (see next section).
Install the Backup and DR Agent on the host
The Backup and DR agent connects the Compute Engine instance to the
backup/recovery appliance. To install the Backup and DR agent, see
Install the Backup and DR agent on a Linux host .
Create a backup plan for the SAP HANA databases
The backup plan is how Backup and DR Service schedules backup jobs and manages
storage for the backup images.
You created a backup plan for the Compute Engine instance in
Get started with Backup and DR: protect and recover a Compute Engine instance .
Now you must create a backup plan for the HANA database that is running inside
the Compute Engine instance. See Create and apply a policy template .
Advanced Policy Settings specific to HANA databases on Compute Engine Persistent Disks
The policy template needs these specific advanced settings.
In the appliance management console under Backup Plans , select Templates .
Select the policy template for the HANA database and click Edit .
At Policies , click the arrow beside Snapshot , then click
Edit Policy .
At the bottom of the Create/Edit Policy section, click Advanced Policy Settings .
Within the Advanced Settings dialog, find and set the following advanced
settings:
Snapshot location : Select the region where the Persistent Disk snapshots are
to be stored. By default, Multi-regional is selected (based on the source
disk location). You can also change the snapshot storage location to a
different region than the source disk region. When storing snapshots in a
location that is different from the location of your source disk, the data
travels over the network between those locations and may incur network fees.
Snapshots incur the same fees as Cloud Storage egress. Learn more about the
Persistent Disk snapshot. . To learn the pricing
details, see disk pricing .
Snapshot type : Select the Persistent Disk snapshot type to be used for SAP
HANA backups. Snapshots incrementally back up data from Persistent Disks. During
backups, a new snapshot is created to capture the current state of the
Persistent Disk. This can later be used to create a new disk for mounts or restores.
Compute Engine stores multiple copies of each snapshot across multiple
locations with automatic checksums to ensure the integrity of your data.
Learn more about the Persistent Disk snapshot .
To know the pricing details, see disk pricing. .
Standard snapshot : By default, the standard snapshot type is selected.
Use the standard type if you want to retain the backups for less than 90 days.
Archive snapshot : Select the archive type if you want to retain backup
images for a long duration. Note that the minimum billing period for the
archive snapshot is 90 days irrespective of the retention period defined in
the policy and that an archive type snapshot also has an additional
retrieval charge if it is used in a mount or a restore job.
Truncate (Purge) Log After Backup : Specify whether to truncate (purge)
the HANA archive logs after backup. When Truncate Log after Backup is
enabled, HANA archive logs are truncated. By default archive purge runs with
every database backup. Use the default to achieve best recovery RTO.
If production log retention is set, then purge runs based on the
Retention of production db logs in hour setting under Application Details & Settings .
Do not truncate/purge log after backup : This is the default. In this
mode the archive log won't be purged.
Truncate/purge log after backup : Select this option to enable archive
log purge.
Enable Database Log Backup : Set this option to "Yes". The Enable Database
Log Backup option allows the backup plan policy to backup a database and all
associated transaction log files. The logs are backed up when the log snapshot
job runs. When set to Yes, the related options are enabled.
RPO : Specify the database log backup in minutes. When Enable Database
Log Backup is set to Yes, RPO defines the frequency for database log backup.
Frequency is set in minutes and must not exceed the database backup interval.
The smallest value that can be set (in minutes) is 15.
Log Backup Retention Period (In Days) : When Enable Database Log Backup is
set to Yes, log retention is defined separately from the retention of the
snapshot policy. Having a separate retention period lets you use logs in
conjunction with copies of the database stored in the snapshot pool.
Replicate Logs (Uses Streamsnap technology) : Set this to No .
This does not apply to SAP HANA Persistent Disk snapshot protection. This
function is enabled (set to "Yes") by default. Not setting it to "No" will
result in template creation error.
Send logs to OnVault Pool : Set this to No . This does not apply
to SAP HANA Persistent Disk snapshot protection. This function is enabled (set
to "Yes") by default. Not setting it to No will result in template creation
error.
Note: Replicate Logs (Uses Streamsnap technology) and Send logs to OnVault Pool
don't apply to SAP HANA Persistent Disk snapshot protection. These are both set
to "Yes" by default. Set them to "No". If you don't set both of these to
No , you will experience template creation errors.
What's next
Add an SAP HANA database host, and discover and protect its databases
The Backup and DR Service SAP HANA DBA guide
This page is one in a series of pages specific to protecting and recovering
SAP HANA databases with Backup and DR Service.
You can find additional information in the following pages:
Backup and DR for SAP HANA
Prepare SAP HANA databases for backup
Add an SAP HANA database host, and discover and protect its databases
Configure staging disk format and backup method for SAP HANA databases
Set application details and settings for SAP HANA databases
Back up a discovered HANA database
Back up HANA 1+n and HANA scale-out databases
Restore and recover SAP HANA databases
Mount an SAP HANA backup image as a standard mount
Mount an SAP HANA backup image as a virtual database
Mount and migrate an SAP HANA backup image for instant recovery to any target
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
