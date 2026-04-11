---
title: "Prerequisites for backing up an Oracle database in the appliance management\
  \ console \_|\_ Backup and DR \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle-prerequisites
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-oracle-prerequisites
  title: "Prerequisites for backing up an Oracle database in the appliance management\
    \ console \_|\_ Backup and DR \_|\_ Google Cloud Documentation"
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
Prerequisites for backing up an Oracle database in the appliance management console
Stay organized with collections
Save and categorize content based on your preferences.
The prerequisites for Oracle database protection with Backup and DR
include:
Review the concepts in OS authentication versus database authentication
and
Oracle RMAN backup in a file system or in an ASM disk group .
Prepare the database according to the steps in Prepare Oracle databases for protection .
Step
Where
What
These procedures are in:
1
The database server
Install or upgrade the Backup and DR agent. Always use the most recent
Backup and DR agent.
Obtain the right Backup and DR agent for your host
2
Management console > Manage
> Hosts
The database server must be added as a host or as a VM.
Add host.
3
Appliance management console Oracle databases wizard
Use the onboarding wizard to discover and protect the database.
Discover and protect Oracle applications.
4
Backup plans
You need one or more suitable backup templates and resource
profiles for the database.
Policy overrides for Oracle databases
5
App manager
There are many Oracle-specific Application Details & Settings
that must be set.
Application details and settings for Oracle databases
Oracle OS user
The database instance should be running as Oracle OS user who owns the Oracle
binary. If the database instance is running as different OS user account than
the Oracle OS owner, make sure the OS user running the database instance
has the same group access privileges as the Oracle OS owner.
Note: In an SAP environment, sometimes the Oracle database instance gets
started as sapadmin instead of as the Oracle OS owner account. The right
configuration is to start and run the database instance as an Oracle OS user
who owns the Oracle binary. If the database instance must run as a different
user such as sapadmin , then sapadmin and the Oracle OS user should have all
the same group access privileges.
OS authentication versus database authentication
The following sections provide information on the differences between
Backup and DR using OS authentication versus database authentication.
By default, a host uses OS authentication. You can choose to use OS or DB
authentication for a Linux host. For a Windows host, only OS authentication
is available.
Backup and DR using OS authentication
OS authentication requires no database user account and no service name.
Backup and DR uses / as sysdba to connect to the database.
From the appliance management console Application Details and Settings , you can
validate the authentication configuration.
Backup and DR using database authentication
Oracle database authentication uses Oracle database credentials.
With Oracle database authentication, you must provide database credentials
to connect to the database with sysdba privilege—or sysbackup for Oracle
12c and later.
Note: Database authentication is not supported in Windows environments.
Use the following instructions to enable Oracle database authentication:
In the appliance management console, click the Manage drop-down menu and select
Hosts .
Right-click the database server to authenticate against and click Edit .
On the Edit Host page, slide the Use Oracle Database Authentication
button to the right. Backup jobs use Database Authentication
for all databases on that database server. This requires a database
user account under Application Details & Settings for the backup to
succeed.
Go to the App Manager and right-click a database on the host that
you just enabled for database authentication then select
Manage Backup Plan .
At the top of the page, click Details and Settings .
Scroll to Authentication and enter the credentials. Validate the
configuration, and then fill in other settings as required.
Repeat step four through step six for each database that is managed from this
database server.
Note: By default, the user to connect to the database is sysdba .
In an Oracle 12c+ environment you can choose sysbackup if the
database user is granted sysbackup instead of sysdba.
Oracle RMAN backup in a file system or in an ASM disk group
Oracle database backup has different properties depending on whether the images
are protected from:
File system : For all source database configurations other than Oracle
ASM, the backup is under a file system.
See Back up an Oracle database with data files on a file system .
ASM disk group : If a source database configuration is using ASM,
the backup is in an ASM disk group. For more information on protecting an
Oracle database under an Oracle ASM disk group, see
Back up an Oracle database with data files on an ASM disk group .
Be sure to refer to Application details and settings .
Note: Oracle backup to ASM is supported on VMware Engine, but
Oracle backup to ASM is not supported on VMware VMs when the transport method
is using NFS datastore using the ESX server. Use RDM directly to the VM.
Back up an Oracle database with data files on a file system
This section provides information on backing up an Oracle database with data
files on a file system.
Backup and DR staging disk on the file system
When you back up an Oracle database with data files on a file system, a
Backup and DR staging disk is mapped to the Oracle
server—protected node. A new file system based on the file system on the
OS is created on the Backup and DR staging disk—for example, if
the source database is on Linux ext4, an ext4 file system is created.
RMAN image copies of all data files for the entire database is captured on
a Backup and DR presented file system. A snapshot of the staging disk
is taken.
dNFS is supported, see
Configure dNFS for protecting and mounting virtual Oracle databases .
Backup and DR staging disk on an ASM disk group
To protect a specific file system database to ASM Disk group format, in
Application Details & Settings check the
Convert file system format to Oracle ASM format checkbox. This requires
ASM to be installed and running on the protected database node.
When you capture a file system Oracle database image under an Oracle ASM disk
group, a Backup and DR staging disk is mapped to the Oracle database
server and presented to the Oracle ASM layer. An ASM backup disk group is
created under ASM using a mapped disk.
Back up an Oracle database with data files on an ASM disk group
This section provides information on backing up an Oracle database with data
files on an ASM disk group.
Backup and DR staging disk on an ASM disk group
When you back up an Oracle database that has data files on an ASM disk group,
a Backup and DR staging disk is mapped to the Oracle database server
and presented to the Oracle ASM layer. An ASM backup disk group is created under
ASM using a mapped disk.
The RMAN image copy of all data files for the entire database is captured on a
Backup and DR-presented ASM disk group retaining the ASM header
information. A snapshot of the staging disk with ASM header information is
taken.
The Application Details & Settings to present the Backup and DR
staging disk to individual or all RAC member nodes are the following:
Auto discover RAC members : Select this setting if you want
Backup and DR to auto-discover RAC nodes rather than enter the
public IP addresses manually. If auto discovery is selected, then the
Backup and DR staging disk is presented to all RAC member nodes.
RAC member nodes : Provide the public IP addresses of the RAC member
nodes that you want to present the Backup and DR staging disk to.
This is not necessary if you use Auto discover RAC members .
To learn more, see Application details and settings for Oracle databases .
To run the backup from more than one node, configure tnsnames as described in
Configure Parallel RMAN Image Copy from Multiple Nodes . For best results,
pay attention to
ASM scalability and limits (from Oracle Doc ID 370921.1)
Backup and DR staging disk on a file system
To protect an ASM database to a file system format, go to
Application Details & Settings and select Yes under
Convert ASM format to filesystem format .
The Backup and DR staging disk is mapped to the Oracle server—protected
node. A new file system based on the file system on the OS is created on the
Backup and DR staging disk—for example, if the source database is on Linux
ext4, an ext4 file system is created.
RMAN image copies of all data files for the entire database are captured on
a Backup and DR presented file system. A snapshot of the staging disk
is taken.
dNFS is supported, see
Configure dNFS for protecting and mounting virtual Oracle databases .
The Oracle DBA guide
Backup and DR for Oracle databases
Prerequisites for protecting an Oracle database
Oracle patches and known issues
Prepare Oracle databases for protection
Discover and protect an Oracle database
Details and settings for Oracle databases
Use dNFS with Backup and DR
Protect a discovered Oracle database
Mount an Oracle database as a standard mount
Create an instant virtual copy of an Oracle database
Restore and recover an Oracle database
Instant recovery of an Oracle database using Mount and Migrate
Provision an environment with a Backup and DR workflow
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
