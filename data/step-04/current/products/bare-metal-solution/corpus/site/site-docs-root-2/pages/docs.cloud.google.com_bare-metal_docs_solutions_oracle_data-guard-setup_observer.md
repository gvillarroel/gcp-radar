---
title: "Set up a Data Guard observer on Google Cloud Compute Engine \_|\_ Bare Metal\
  \ Solution \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/data-guard-setup/observer
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/bare-metal/docs/bms-overview
source_metadata:
  url: https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/data-guard-setup/observer
  title: "Set up a Data Guard observer on Google Cloud Compute Engine \_|\_ Bare Metal\
    \ Solution \_|\_ Google Cloud Documentation"
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
Set up a Data Guard observer on Google Cloud
Compute Engine
Depending on your high availability requirements .
you might want to automate failover between databases. After you've
validated your Data Guard deployment ,
you have the option to set up a Data Guard observer on Compute Engine to do this.
An observer is a process that monitors a Data Guard configuration to initiate
an automated failover if conditions warrant it.
This guide covers installing the Oracle 19c database client on an observer
virtual machine (VM) and configuring Fast-Start Failover.
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
Install the Oracle Database client software
Create a virtual machine (VM) on Compute Engine
that meets the following criteria:
Operating system. Red Hat Enterprise Linux 7.
Networking. A subnet with firewall rules that allow access from your
Virtual Private Cloud to the Bare Metal Solution hosts running the primary and standby
databases.
Storage. -- At least 20 GB allocated to the boot disk.
Log in to the VM and verify that the SCAN hostname of each database cluster
resolves in DNS:
host DBDG_SITE1_SCAN_HOSTNAME
host DBDG_SITE2_SCAN_HOSTNAME
If the hostnames don't resolve, add the IP addresses for each SCAN hostname
to the /etc/hosts file on the VM. Replace the example IP addresses with
the IP addresses for each cluster:
# Site 1 SCAN Hosts
192.0.2.10 DBDG_SITE1_SCAN_HOSTNAME
192.0.2.11 DBDG_SITE1_SCAN_HOSTNAME
192.0.2.12 DBDG_SITE1_SCAN_HOSTNAME
# Site 2 SCAN Hosts
198.51.100.10 DBDG_SITE2_SCAN_HOSTNAME
198.51.100.11 DBDG_SITE2_SCAN_HOSTNAME
198.51.100.12 DBDG_SITE2_SCAN_HOSTNAME
Install the Oracle Database RPM .
Install only the software. There's no need to configure a database on the
observer VM.
The Oracle Database RPM installs software in a predefined directory. Add the
following entries to /home/oracle/.bash_profile to add the Oracle software
home to the path:
cat >> / home / oracle /. bash_profile << EOL
export ORACLE_HOME =/ opt / oracle / product / 19 c / dbhome_1
export PATH = \ $ PATH : \ $ ORACLE_HOME / bin
EOL
Source the Oracle environment variables in your terminal session:
source ~/.bash_profile
Configure the database connectivity
Configure the Oracle Net settings in the $ORACLE_HOME/network/admin/tsnames.ora
file:
DBDG_SITE1 =
(DESCRIPTION =
(ADDRESS = (PROTOCOL = TCP)(HOST = DBDG_SITE1_SCAN_HOSTNAME )(PORT = 1521))
(CONNECT_DATA =
(SERVER = DEDICATED)
(SERVICE_NAME = DBDG_SITE1 ) (UR=A)
)
)
DBDG_SITE2 =
(DESCRIPTION =
(ADDRESS = (PROTOCOL = TCP)(HOST = DBDG_SITE2_SCAN_HOSTNAME )(PORT = 1521))
(CONNECT_DATA =
(SERVER = DEDICATED)
(SERVICE_NAME = DBDG_SITE2 ) (UR=A)
)
)
Oracle Database version 12.2 and higher includes support for the observer to
run in background mode. To do so, a wallet must be created to perform
passwordless authentication to the database. Log in as the oracle user on
the observer VM and perform the following tasks to create a wallet:
Add the following entries to $ORACLE_HOME/network/admin/sqlnet.ora :
WALLET_LOCATION =
(SOURCE =
(METHOD = FILE)
(METHOD_DATA = (DIRECTORY = /home/oracle/wallet))
)
SQLNET.WALLET_OVERRIDE = TRUE
Create the wallet directory on the VM hosting the observer:
mkdir /home/oracle/wallet
Initialize the wallet, then supply a password for the wallet when
prompted:
mkstore -wrl /home/oracle/wallet -create
Create an entry in the wallet for each database in the Data Guard
configuration. The mkstore command will request the SYS password for the
database, followed by the wallet password provided in the previous step:
mkstore -wrl /home/oracle/wallet -createCredential DBDG_SITE1 sys
mkstore -wrl /home/oracle/wallet -createCredential DBDG_SITE2 sys
Confirm that the wallet contains credentials for each database in the
Data Guard configuration. The -listCredential argument for mkstore
will request the wallet password:
mkstore -wrl /home/oracle/wallet -listCredential
Log in to the observer VM as Oracle and then test connectivity to the
primary and standby databases. Connect to the primary and secondary
databases with SQL*Plus by using the wallet credentials:
sqlplus /@ DBDG_SITE1 as sysdba
sqlplus /@ DBDG_SITE2 as sysdba
If the wallet configuration is successful, the sqlplus command directly
logs in to the database without asking for a password.
Configure and enable Fast-Start Failover
Create a directory to store the observer configuration and log files:
mkdir /home/oracle/fsfo
Connect to the Data Guard broker on the primary database using the wallet:
dgmgrl
CONNECT /@ DBDG_SITE1 ;
View the Data Guard status to check that the configuration is marked as
SUCCESS :
SHOW CONFIGURATION;
Enable Fast-Start Failover (FSFO):
ENABLE FAST_START FAILOVER;
Enabling FSFO does not make the configuration ready for automatic failover.
Automatic failover requires an observer.
Start Data Guard Observer:
START OBSERVER observer1 IN BACKGROUND FILE IS ' / home / oracle / fsfo / observer1_DBDG . dat ' LOGFILE IS ' / home / oracle / fsfo / observer1_DBDG . log ' ;
In a separate terminal session, verify the configuration:
SHOW CONFIGURATION VERBOSE;
The following example shows the verbose mode of the show configuration
command. If the configuration status is SUCCESS , your setup is complete.
Configuration - DBDG
Protection Mode : MaxAvailability
Members :
DBDG_SITE1 - Primary database
DBDG_SITE2 - Physical standby database
( * ) Fast - Start Failover target
Properties :
FastStartFailoverThreshold = ' 30 '
OperationTimeout = ' 30 '
TraceLevel = ' USER '
FastStartFailoverLagLimit = ' 45 '
CommunicationTimeout = ' 180 '
ObserverReconnect = '0'
FastStartFailoverAutoReinstate = ' TRUE '
FastStartFailoverPmyShutdown = ' TRUE '
BystandersFollowRoleChange = ' ALL '
ObserverOverride = ' FALSE '
ExternalDestination1 = ''
ExternalDestination2 = ''
PrimaryLostWriteAction = ' CONTINUE '
ConfigurationWideServiceName = ' DBDG_CFG '
Fast - Start Failover : Enabled in Potential Data Loss Mode
Lag Limit : 45 seconds
Threshold : 30 seconds
Active Target : DBDG_SITE2
Potential Targets : " DBDG_SITE2 "
DBDG_SITE2 valid
Observer : observer1
Shutdown Primary : TRUE
Auto - reinstate : TRUE
Observer Reconnect : ( none )
Observer Override : FALSE
Configuration Status :
SUCCESS
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
