---
title: "Use Google Cloud NetApp Volumes block storage to configure a SQL Server Always\
  \ On availability groups \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/tutorials/configuring-sql-server-ag-netapp-volumes-iscsi
knowledge_key: corpus
source_id: site-docs-reference-required-7
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/tutorials/configuring-sql-server-ag-netapp-volumes-iscsi
  title: "Use Google Cloud NetApp Volumes block storage to configure a SQL Server\
    \ Always On availability groups \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Guides
Send feedback
Use Google Cloud NetApp Volumes block storage to configure a SQL Server Always On availability groups
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial explains how to deploy a Microsoft SQL Server Always On availability group on Compute Engine virtual machine (VM) instances by using Google Cloud NetApp Volumes block storage with the Internet Small Computer System Interface (iSCSI) protocol. Using NetApp Volumes for your SQL Server storage provides access to a high-performance, fully managed storage service with advanced data management features such as snapshots and cloning.
Objectives
This tutorial guides you through the following tasks:
Provision Compute Engine VMs for SQL Server .
Create NetApp Volumes block storage volumes .
Configure SQL Server on each node .
Configure Windows Server Failover Clustering (WSFC) .
Create and configure a SQL Server Always On availability group .
Costs
This tutorial uses the following billable components of Google Cloud:
Compute Engine
NetApp Volumes
To generate a cost estimate based on your projected usage, use the pricing calculator .
Before you begin
Before you begin, ensure you have the following:
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
A Google Cloud project with administrative permissions for Compute Engine, Networking, Identity and Access Management, and Cloud Storage.
A VPC network with a subnet in your target region.
Active Directory and DNS services established within the region.
An Active Directory user with permissions to join computers to the domain and access VMs using RDP.
Ensure that VPC firewall rules allow traffic between nodes for iSCSI (TCP 3260), WSFC (UDP/TCP 3343), SQL Server (TCP 1433), SQL Server AG endpoints (TCP 5022), SMB (TCP 445), and RPC (TCP 135, TCP 49152-65535).
Enable the NetApp Volumes API .
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
Configure domain accounts
Configure two Active Directory accounts for SQL Server:
Installation account : An account with domain administrator privileges (for example, DOMAIN \DomainAdmin) to sign in to VMs and configure the cluster and availability group.
Service account : An account (for example, DOMAIN \sqlsvc) for the SQL Server service and SQL Agent Service on both SQL Server VMs.
Create Compute Engine VMs for SQL Server
Create two Compute Engine instances ( sqlnode1 and sqlnode2 ) running SQL Server 2022 Enterprise on Windows Server 2025:
In the Google Cloud console, go to the Create an instance page.
Go to Create an instance
For Name , enter sqlnode1 .
In the Machine configuration section, select General Purpose , and then do the following:
In the Series list, select N4 .
In the Machine type list, select n4-highmem-8 (8vCPU, 64 GB memory) .
Select the Region and Zone where you configured your VPC.
In the Boot disk section, click Change , and then do the following:
On the Public images tab, select SQL Server on Windows Server from the Operating system list.
From the Version list, select SQL Server 2022 Enterprise on Windows Server 2025 Datacenter .
In the Boot disk type list, select Hyperdisk Balanced .
Set the Size (GB) to 50 .
To save the boot disk configuration, click Select .
Expand the Advanced options section, then expand Networking .
For Network interfaces , select the VPC and Subnet for your project.
In the Network Interface Card type list, select gVNIC .
For Network Service Tier , select Premium .
Click Create .
Repeat these steps to create a second instance named sqlnode2 .
Join servers to the domain and prepare for clustering
Perform these steps on both sqlnode1 and sqlnode2 :
Connect to the VM using a local administrator account.
In the Server Manager , select Local Server .
Select the WORKGROUP link.
In the Computer Name section, select Change .
Select the Domain checkbox, enter your domain name (for example cvsdemo.internal ), and click OK .
In the Windows Security dialog, enter the credentials for your domain administrator account, and click OK .
When the welcome message appears for the domain, complete the following steps:
a. Click OK .
b. Click Close , and then select Restart Now .
After the VM restarts, connect to it using your domain administrator account.
Add the DOMAIN \sqlsvc account to the local Administrators group on the VM. You can use the following PowerShell command:
Add-LocalGroupMember -Group "Administrators" -Member " DOMAIN \sqlsvc"
Open PowerShell as an administrator and run the following commands to install required Windows features:
# Install Failover Clustering and tools
Install-WindowsFeature Failover-Clustering, RSAT-Clustering-PowerShell, RSAT-Clustering-CmdInterface -IncludeAllSubFeature -IncludeManagementTools
# Install and enable MPIO for iSCSI
Install-WindowsFeature -Name Multipath-IO
Enable-MSDSMAutomaticClaim -BusType "iSCSI"
# Install .NET and other SQL prereqs
Install-WindowsFeature NET-Framework-45-Core, NET-Framework-45-Features
Install-WindowsFeature RSAT-AD-PowerShell
To get the iSCSI Qualified Name (IQN) for the VM, run iscsicpl.exe , go to the Configuration tab, and copy the Initiator Name . Alternatively, run the following PowerShell command:
Get-InitiatorPort | Select-Object NodeAddress
Record the IQN for both sqlnode1 and sqlnode2 . You need these in the next section. Example: iqn.1991-05.com.microsoft:sqlnode1.cvsdemo.internal .
Create NetApp Volumes block storage volumes
Follow these steps to create a host group, storage pool, and iSCSI volumes.
Create a host group
A host group ensures that only the specified hosts (your SQL Server VMs) can access the volumes you create.
In Cloud Shell, create a host group containing the IQNs of sqlnode1 and sqlnode2 :
gcloud netapp host-groups create HOST_GROUP_NAME
--location= LOCATION
--type=ISCSI_INITIATOR
--hosts= SQLNODE1_IQN , SQLNODE2_IQN
--os-type=WINDOWS
--description="SQL Server AG nodes"
Replace the following information:
HOST_GROUP_NAME : The name for the host group, for example, sql-ag-hosts .
LOCATION : The region for your host group, for example, us-west1 .
SQLNODE1_IQN : The IQN of sqlnode1 .
SQLNODE2_IQN : The IQN of sqlnode2 .
Provision a storage pool
In Cloud Shell, create a storage pool for your volumes:
gcloud netapp storage-pools create POOL_NAME
--project= PROJECT_ID
--location= ZONE
--service-level=Flex
--type=Unified
--capacity=1024
--total-throughput=64
--total-iops=1024
--network=name= VPC_NAME ,psa-range= PSA_RANGE_NAME
Replace the following information:
POOL_NAME : The name for the storage pool, for example, sql-pool .
PROJECT_ID : Your Google Cloud project ID.
ZONE : The zone for your storage pool, which must match the zone of your VMs, for example, us-west1-b .
VPC_NAME : The name of your VPC network.
PSA_RANGE_NAME : The name of the allocated range of your Private Services Access connection.
Create volumes
Create separate volumes for SQL Server data, logs, tempdb, and backups for each node.
In Cloud Shell, run the following command for each volume you need to create:
gcloud netapp volumes create VOLUME_NAME
--project= PROJECT_ID
--location= ZONE
--storage-pool= POOL_NAME
--capacity=200
--protocols=ISCSI
--block-devices="name= VOLUME_NAME ,host-groups=projects/ PROJECT_ID /locations/ LOCATION /hostGroups/ HOST_GROUP_NAME ,os-type=WINDOWS"
--snapshot-directory=false
Replace VOLUME_NAME with a unique name for each volume. For this two-node tutorial, you need to run the command eight times to create volumes for data, logs, tempdb, and backups for each node (for example, sqlnode1-data , sqlnode1-log , sqlnode1-temp , sqlnode1-backup , sqlnode2-data , sqlnode2-log , sqlnode2-temp , and sqlnode2-backup ).
Mount iSCSI volumes on each SQL VM
For each VM ( sqlnode1 and sqlnode2 ), mount the volumes you created for that specific node.
In the Google Cloud console, go to the Volumes page for NetApp Volumes .
Go to Volumes
Select a volume assigned to the node you are configuring. Note the Target portal IP addresses listed in the iSCSI Target details section. You need these addresses to connect to the volume.
On the VM, open PowerShell as an administrator and run the following command, replacing the example IPs with the target portal IPs for your volume:
"10.165.128.216","10.165.128.217" | ForEach-Object { New-IscsiTargetPortal -TargetPortalAddress $_ }
Run iscsicpl.exe to open iSCSI Initiator Properties .
Go to the Targets tab, select one of your volume targets from the list, and click Connect .
In the Connect to Target dialog, select Enable multi-path and click Advanced .
In the Advanced Settings dialog:
Local adapter : Select Microsoft iSCSI Initiator .
Initiator IP : Select an IP address on the VM.
Target portal IP : Select one of the portal IPs you discovered.
Click OK .
In the Connect to Target dialog, click OK .
Repeat the connection steps for all targets associated with the VM.
To configure MPIO for iSCSI devices, open MPIO Properties from Control Panel or Server Manager .
Click the Discover Multi-Paths tab.
Select Add support for iSCSI devices and click Add . Reboot the VM if prompted.
After rebooting, open Device Manager and expand Disk drives . Your iSCSI disk appears as a multi-path device.
Open Disk Management ( compmgmt.msc ). For each new disk:
Bring the disk online.
Initialize the disk (GPT).
Create a new volume, assign a drive letter (for example, D for data, E for logs, F for backups, G for tempdb), and format it using NTFS with an Allocation unit size of 64K .
Create the directory structure for SQL Server on the newly formatted drives. For example:
$paths = "D:\MSSQL\DATA","E:\MSSQL\Log","F:\MSSQL\Backup","G:\MSSQL\Temp"
$paths | ForEach-Object { New-Item -ItemType Directory -Path $_ -Force }
Configure SQL Server
Perform these steps on both sqlnode1 and sqlnode2 after mounting their respective volumes.
Open SQL Server Configuration Manager .
In the left pane, select SQL Server Services .
In the right pane, right-click SQL Server (MSSQLSERVER) , select Properties , go to the Log On tab, and change the Account Name to your service account ( DOMAIN \sqlsvc). Enter the password and click OK .
Repeat the previous step for SQL Server Agent (MSSQLSERVER) .
Connect to the SQL Server instance using SQL Server Management Studio (SSMS) with your domain administrator account.
Create logins for the service account and grant it necessary permissions:
USE [master];
GO
CREATE LOGIN [ DOMAIN \sqlsvc] FROM WINDOWS WITH DEFAULT_DATABASE=[master], DEFAULT_LANGUAGE=[us_english];
GO
ALTER SERVER ROLE [sysadmin] ADD MEMBER [ DOMAIN \sqlsvc];
GO
Run the following script in SSMS to redirect the default database, log, backup, and tempdb paths to the iSCSI volumes you mounted:
USE [master];
GO
EXEC xp_instance_regwrite N'HKEY_LOCAL_MACHINE', N'Software\Microsoft\MSSQLServer\MSSQLServer', N'BackupDirectory', REG_SZ, N'F:\MSSQL\Backup';
GO
EXEC xp_instance_regwrite N'HKEY_LOCAL_MACHINE', N'Software\Microsoft\MSSQLServer\MSSQLServer', N'DefaultData', REG_SZ, N'D:\MSSQL\DATA';
GO
EXEC xp_instance_regwrite N'HKEY_LOCAL_MACHINE', N'Software\Microsoft\MSSQLServer\MSSQLServer', N'DefaultLog', REG_SZ, N'E:\MSSQL\Log';
GO
-- Modify model and msdb paths
ALTER DATABASE model MODIFY FILE (NAME = modeldev, FILENAME = 'D:\MSSQL\DATA\model.mdf');
ALTER DATABASE model MODIFY FILE (NAME = modellog, FILENAME = 'E:\MSSQL\Log\modellog.ldf');
ALTER DATABASE msdb MODIFY FILE (NAME = MSDBData, FILENAME = 'D:\MSSQL\DATA\MSDBData.mdf');
ALTER DATABASE msdb MODIFY FILE (NAME = MSDBLog, FILENAME = 'E:\MSSQL\Log\MSDBLog.ldf');
GO
-- Modify tempdb paths
ALTER DATABASE tempdb MODIFY FILE (NAME = tempdev, FILENAME = 'G:\MSSQL\Temp\tempdb.mdf');
ALTER DATABASE tempdb MODIFY FILE (NAME = templog, FILENAME = 'G:\MSSQL\Temp\templog.ldf');
GO
Stop the SQL Server (MSSQLSERVER) service.
Move the existing model , msdb , and tempdb files from their old locations (for example, C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA ) to their new locations on drives D:, E:, and G:.
To move the master database and ERRORLOG :
Open SQL Server Configuration Manager .
Right-click SQL Server (MSSQLSERVER) , select Properties , and go to the Startup Parameters tab.
For each existing parameter -d , -e , and -l pointing to the C: drive, select it and click Remove .
Add the following parameters, clicking Add for each:
-dD:\MSSQL\DATA\master.mdf
-lE:\MSSQL\Log\mastlog.ldf
-eE:\MSSQL\Log\ERRORLOG
Click OK .
Manually move master.mdf and mastlog.ldf from C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA to D:\MSSQL\DATA\` and E:\MSSQL\Log` respectively.
Move the ERRORLOG file from its old location to `E:\MSSQL\Log`.
Start the SQL Server (MSSQLSERVER) service.
Set up Windows Server Failover Clustering
Follow these steps to create the cluster and configure a quorum witness.
Configure Windows Firewall
Before creating the cluster, ensure Windows Firewall on each node allows traffic for WSFC, SQL Server, and iSCSI.
On sqlnode1 and sqlnode2 , open PowerShell as an administrator and run the following commands:
New-NetFirewallRule -DisplayName 'Failover Clusters (UDP-In)' -Direction Inbound -Protocol UDP -LocalPort 3343 -Action Allow
New-NetFirewallRule -DisplayName 'Failover Clusters (TCP-In)' -Direction Inbound -Protocol TCP -LocalPort 3343 -Action Allow
New-NetFirewallRule -DisplayName 'RPC Endpoint Mapper' -Direction Inbound -Protocol TCP -LocalPort 135 -Action Allow
New-NetFirewallRule -DisplayName 'File and Printer Sharing (SMB-In)' -Direction Inbound -Protocol TCP -LocalPort 445 -Action Allow
New-NetFirewallRule -DisplayName 'Failover Cluster Manager RPC' -Direction Inbound -Protocol TCP -LocalPort 49152-65535 -Action Allow
New-NetFirewallRule -DisplayName 'iSCSI' -Direction Inbound -Protocol TCP -LocalPort 3260 -Action Allow
New-NetFirewallRule -DisplayName 'SQL Server' -Direction Inbound -Protocol TCP -LocalPort 1433 -Action Allow
New-NetFirewallRule -DisplayName 'SQL Server AG Endpoint' -Direction Inbound -Protocol TCP -LocalPort 5022 -Action Allow
Create the cluster
On sqlnode1 , open Failover Cluster Manager ( cluadmin.msc ).
In the Management section, select Validate Configuration . Follow the wizard to validate sqlnode1 and sqlnode2 . Ensure all tests pass before proceeding.
After validation, select Create Cluster .
In the Create Cluster Wizard , add sqlnode1 and sqlnode2 as cluster nodes.
For Access Point for Administering the Cluster , enter a Cluster Name (for example, sqlcluster ) and provide a static IP address for the cluster.
Follow the prompts to create the cluster.
Create a file share for cluster quorum
We recommend creating a file share on a third VM, preferably in a different zone, to serve as the cluster quorum witness.
Connect to the VM you intend to use as the file share witness.
In the Server Manager window, select Tools > Computer Management .
Expand System Tools > Shared Folders , right-click Shares , and select New Share .
Follow the Create a Shared Folder Wizard . On the Folder Path page, browse to or create a folder for the share.
On the Permissions page, select Customize permissions .
Click Add , and grant Full control to the cluster name object (CNO) account (for example, sqlcluster$ ).
Complete the wizard to create the share.
Configure cluster quorum
On sqlnode1 , open Failover Cluster Manager .
Right-click the cluster name, and select More Actions > Configure Cluster Quorum Settings .
In the Configure Cluster Quorum Wizard , select Next .
On the Select Quorum Configuration Option page, choose Select the quorum witness , and click Next .
On the Select Quorum Witness page, choose Configure a file share witness , and click Next .
For File Share Path , enter the path to the share you created (for example, \\witness-server\quorum ), and click Next .
Confirm your settings and click Next , then click Finish .
Configure Always On availability groups
Apply the steps in this section to both SQL Server VMs to enable and configure the availability group.
Enable availability groups in SQL Server
Open SQL Server Configuration Manager .
In the browser tree, select SQL Server Services .
Right-click SQL Server (MSSQLSERVER) , and then select Properties .
Select the Always On High Availability tab, and select Enable Always On availability groups .
Click Apply , then OK . Restart the SQL Server service.
Create a database for the availability group
Connect to sqlnode1 using SSMS.
In the Object Explorer pane, right-click Databases and select New Database .
Enter MyDB1 for the Database name , and click OK .
Right-click MyDB1 , select Tasks > Back Up . Perform a Full backup. Ensure the database recovery model is Full .
Right-click MyDB1 , select Tasks > Back Up . Perform a Transaction Log backup.
Copy the full and transaction log backup files to sqlnode2 .
Connect to sqlnode2 using SSMS. Right-click Databases and select Restore Database .
Restore the full backup of MyDB1 from sqlnode1 , specifying RESTORE WITH NORECOVERY in the Options page.
Right-click MyDB1 on sqlnode2 , select Tasks > Restore > Transaction Log . Restore the transaction log backup, also specifying RESTORE WITH NORECOVERY .
Create the availability group
Connect to sqlnode1 using SSMS.
In Object Explorer , right-click Always On High Availability and select New Availability Group Wizard .
Specify an availability group name, for example sql-ag .
Select MyDB1 as the database to include.
On the Specify Replicas page, click Add Replica and connect to sqlnode2 .
Enable Automatic Failover for both replicas, set Availability Mode to Synchronous commit , and Readable Secondary to Yes .
Go to the Endpoints tab and ensure port 5022 is used.
On the Select Initial Data Synchronization page, select Join only .
Complete the wizard to create the availability group.
Create a DNN resource for the availability group
Instead of a load balancer, use a Distributed Network Name (DNN) to route client traffic to the availability group listener.
Open Failover Cluster Manager , expand Roles , and select your availability group role.
In the Resources , right-click the availability group resource, and select Add Resource > Client Access Point .
Provide a Name for the DNN listener and complete the wizard.
Bring the new DNN resource online.
By default, the cluster binds the DNN DNS name to all nodes in the cluster. If you have nodes in the cluster that don't host SQL Server replicas, you must exclude them from the DNN's possible owners:
Right-click the DNN resource you created and select Properties .
Clear the checkbox for any nodes that aren't availability group replicas.
Click OK .
Update your application connection strings to connect to the DNN listener name and include MultiSubnetFailover=True .
Test failover
Connect to sqlnode1 or sqlnode2 using SSMS and run the following query to check which replica is primary and that both replicas are configured for synchronous commit and automatic failover:
-- Check primary replica
SELECT ag.name AS AG_Name, ar.replica_server_name as PrimaryReplica
FROM sys.dm_hadr_availability_replica_states AS ars
JOIN sys.availability_groups AS ag ON ag.group_id = ars.group_id
JOIN sys.availability_replicas ar ON ar.replica_id = ars.replica_id
WHERE ars.role_desc = 'PRIMARY';
-- Check replica configuration
SELECT replica_server_name, availability_mode_desc, failover_mode_desc
FROM sys.availability_replicas
WHERE group_id = (SELECT group_id FROM sys.availability_groups WHERE name = N'sql-ag');
To initiate a manual failover, connect to the secondary replica in SSMS and run:
ALTER AVAILABILITY GROUP [sql-ag] FAILOVER;
After failover, verify the new primary by running SELECT @@SERVERNAME; or by reconnecting to the DNN listener and checking the server name.
You can also view the availability group status in SSMS by right-clicking the availability group under Always On High Availability and selecting Show Dashboard .
Clean up
Delete the project
To avoid incurring charges to your Google Cloud project for the resources used in this tutorial, delete your project. For more information, see Shutting down projects .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
