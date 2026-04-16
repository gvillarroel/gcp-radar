---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:24.229Z"
product_name: "Guest Environment"
product_slug: "guest-environment"
feature_name: "Snapshot module NGUID support"
feature_slug: "snapshot-module-nguid-support"
latest_feature_date: "2025-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/tutorials/configuring-sql-server-ag-netapp-volumes-iscsi"
  - "https://docs.cloud.google.com/compute/docs/tutorials/migrate-workload-to-stateful-mig"
  - "https://docs.cloud.google.com/compute/docs/tutorials/creating-sql-server-instance-using-netapp"
  - "https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory"
keywords:
  - "snapshot"
  - "module"
  - "nguid"
  - "the"
  - "can"
  - "use"
  - "nguids"
  - "to"
---

# Snapshot module NGUID support

Product: Guest Environment
Coverage: MEDIUM

## Step 02 Summary

The snapshot module can use NGUIDs to identify disks, expanding support across more VM families.

## Extended Definition

The snapshot module can use NGUIDs to identify disks, expanding support across more VM families.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/compute/docs/tutorials/configuring-sql-server-ag-netapp-volumes-iscsi](https://docs.cloud.google.com/compute/docs/tutorials/configuring-sql-server-ag-netapp-volumes-iscsi)
- [https://docs.cloud.google.com/compute/docs/tutorials/migrate-workload-to-stateful-mig](https://docs.cloud.google.com/compute/docs/tutorials/migrate-workload-to-stateful-mig)
- [https://docs.cloud.google.com/compute/docs/tutorials/creating-sql-server-instance-using-netapp](https://docs.cloud.google.com/compute/docs/tutorials/creating-sql-server-instance-using-netapp)
- [https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory](https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory)

## Supporting Pages

### "Use Google Cloud NetApp Volumes block storage to configure a SQL Server\

- URL: [https://docs.cloud.google.com/compute/docs/tutorials/configuring-sql-server-ag-netapp-volumes-iscsi](https://docs.cloud.google.com/compute/docs/tutorials/configuring-sql-server-ag-netapp-volumes-iscsi)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use the following PowerShell command: Add-LocalGroupMember -Group "Administrators" -Member " DOMAIN \sqlsvc" Open PowerShell as an administrator and run the following commands to install required Windows features: Install Failover Clustering and tools Install-WindowsFeature Failover-Clustering, RSAT-Clustering-PowerShell, RSAT-Clustering-CmdInterface -IncludeAllSubFeature -IncludeManagementTools Install and enable MPIO for iSCSI Install-WindowsFeature -Name Multipath-IO Enable-MSDSMAutomaticClaim -BusType "iSCSI" Install .NET and other SQL prereqs Install-WindowsFeature NET-Framework-45-Core, NET-Framework-45-Features Install-WindowsFeature RSAT-AD-PowerShell To get the iSCSI Qualified Name (IQN) for the VM, run iscsicpl.exe , go to the Configuration tab, and copy the Initiator Name .
- Create logins for the service account and grant it necessary permissions: USE [master]; GO CREATE LOGIN [ DOMAIN \sqlsvc] FROM WINDOWS WITH DEFAULT DATABASE=[master], DEFAULT LANGUAGE=[us english]; GO ALTER SERVER ROLE [sysadmin] ADD MEMBER [ DOMAIN \sqlsvc]; GO Run the following script in SSMS to redirect the default database, log, backup, and tempdb paths to the iSCSI volumes you mounted: USE [master]; GO EXEC xp instance regwrite N'HKEY LOCAL MACHINE', N'Software\Microsoft\MSSQLServer\MSSQLServer', N'BackupDirectory', REG SZ, N'F:\MSSQL\Backup'; GO EXEC xp instance regwrite N'HKEY LOCAL MACHINE', N'Software\Microsoft\MSSQLServer\MSSQLServer', N'DefaultData', REG SZ, N'D:\MSSQL\DATA'; GO EXEC xp instance regwrite N'HKEY LOCAL MACHINE', N'Software\Microsoft\MSSQLServer\MSSQLServer', N'DefaultLog', REG SZ, N'E:\MSSQL\Log'; GO -- Modify model and msdb paths ALTER DATABASE model MODIFY FILE (NAME = modeldev, FILENAME = 'D:\MSSQL\DATA\model.mdf'); ALTER DATABASE model MODIFY FILE (NAME = modellog, FILENAME = 'E:\MSSQL\Log\modellog.ldf'); ALTER DATABASE msdb MODIFY FILE (NAME = MSDBData, FILENAME = 'D:\MSSQL\DATA\MSDBData.mdf'); ALTER DATABASE msdb MODIFY FILE (NAME = MSDBLog, FILENAME = 'E:\MSSQL\Log\MSDBLog.ldf'); GO -- Modify tempdb paths ALTER DATABASE tempdb MODIFY FILE (NAME = tempdev, FILENAME = 'G:\MSSQL\Temp\tempdb.mdf'); ALTER DATABASE tempdb MODIFY FILE (NAME = templog, FILENAME = 'G:\MSSQL\Temp\templog.ldf'); GO Stop the SQL Server (MSSQLSERVER) service.
- In Cloud Shell, run the following command for each volume you need to create: gcloud netapp volumes create VOLUME NAME --project= PROJECT ID --location= ZONE --storage-pool= POOL NAME --capacity=200 --protocols=ISCSI --block-devices="name= VOLUME NAME ,host-groups=projects/ PROJECT ID /locations/ LOCATION /hostGroups/ HOST GROUP NAME ,os-type=WINDOWS" --snapshot-directory=false Replace VOLUME NAME with a unique name for each volume.
- Costs This tutorial uses the following billable components of Google Cloud: Compute Engine NetApp Volumes To generate a cost estimate based on your projected usage, use the pricing calculator .

### "Migrate an existing workload to a stateful managed instance group \_|\_\

- URL: [https://docs.cloud.google.com/compute/docs/tutorials/migrate-workload-to-stateful-mig](https://docs.cloud.google.com/compute/docs/tutorials/migrate-workload-to-stateful-mig)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Describe the existing VM. gcloud compute instances describe my-instance-1 Make a note of items that you want to preserve from the existing VM, which can include the following: Instance name Boot disk Secondary disks Instance metadata Stop the existing VM. gcloud compute instances stop my-instance-1 Detach all stateful disks, including the boot disk if you plan to reuse it. gcloud compute instances detach-disk my-instance-1 --disk= my-data-disk-1 Delete the existing VM so that you can create another one with the same name.
- Edit the values below for use throughout this tutorial. - Machine type: n2-standard-2 - Project: my-project - Zone: europe-west1-c - Name of one of the VMs to migrate: my-instance-1 Create a custom image If your application or any of its requirements are already configured on an existing boot disk, create a custom image that you can reuse.
- NAME LOCATION SCOPE BASE INSTANCE NAME SIZE TARGET SIZE INSTANCE TEMPLATE AUTOSCALED my-mig europe-west1-c zone my-mig 0 0 my-instance-template no After creating that resource you can use it to interact with the MIG, for example to set policies on the group, and to add or remove instances from the group.
- If you need to use an existing boot disk for a specific VM, you can explicitly specify the boot disk for that VM with a per-instance configuration, when you convert that VM to a managed instance, as explained later in this document.

### "Use Google Cloud NetApp Volumes file storage to configure a SQL Server failover\

- URL: [https://docs.cloud.google.com/compute/docs/tutorials/creating-sql-server-instance-using-netapp](https://docs.cloud.google.com/compute/docs/tutorials/creating-sql-server-instance-using-netapp)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create an unmanaged instance group , and add the two nodes to the group: REGION=$(gcloud config get-value compute/region) gcloud compute instance-groups unmanaged create wsfc-group-a \ --zone $REGION-a gcloud compute instance-groups unmanaged add-instances wsfc-group-a \ --zone $REGION-a --instances node-1 gcloud compute instance-groups unmanaged create wsfc-group-b \ --zone $REGION-b gcloud compute instance-groups unmanaged add-instances wsfc-group-b \ --zone $REGION-b --instances node-2 Create a health check that the load balancer can use to determine which is the active node. gcloud compute health-checks create tcp wsfc-healthcheck \ --check-interval="2s" \ --healthy-threshold=1 \ --unhealthy-threshold=2 \ --port=59997 \ --timeout="1s" The health check probes port 59997 , which is the port you previously configured as ProbePort for the WSFC cluster IP address.
- Return to the PowerShell session on witness and grant the virtual computer object of the cluster permission to access the file share: icacls C:\QWitness\ /grant 'windows-fci$:(OI)(CI)(M)' Grant-SmbShareAccess -Name QWitness -AccountName 'windows-fci$' -AccessRight Full -Force Return to the PowerShell session on node-1 and configure the cluster to use the file share on witness as a cluster quorum: Set-ClusterQuorum -FileShareWitness \\witness\QWitness Verify that the cluster was created successfully: Test-Cluster You might see some warnings that can be safely ignored: WARNING: System Configuration - Validate All Drivers Signed: The test reported some warnings..
- If you're using Managed AD, add the computer account used by WSFC to the Cloud Service Domain Join Accounts group so that it can join VM instances to the domain: Add-ADGroupMember -Identity "Cloud Service Domain Join Accounts" -Members windows-fci$ Remove the default SQL Server installation You will now remove the default SQL Server installation from the two nodes and replace it with a new FCI configuration.
- Configure health checks As a final step, configure the cluster to expose a health check endpoint that can be used by an internal load balancer: Return to the PowerShell session on node-2 Initialize a variable with the IP address of the load balancer. $LoadBalancerIP = ' IP ADDRESS ' Replace IP ADDRESS with the IP address of the wsfc address that you reserved earlier.

### "Deploy an Active Directory forest on Compute Engine \_|\_ Cloud Architecture\

- URL: [https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory](https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Import-Module "${Env:ProgramFiles}\Google\Compute Engine\sysprep\gce base.psm1" $ActiveDirectoryDnsDomain = Get-MetaData -Property "attributes/ActiveDirectoryDnsDomain" -instance only $ActiveDirectoryNetbiosDomain = Get-MetaData -Property "attributes/ActiveDirectoryNetbiosDomain" -instance only $ActiveDirectoryFirstDc = Get-MetaData -Property "attributes/ActiveDirectoryFirstDc" -instance only $ProjectId = Get-MetaData -Property "project-id" -project only $Hostname = Get-MetaData -Property "hostname" -instance only $AccessToken = (Get-MetaData -Property "service-accounts/default/token" ConvertFrom-Json).access token Read the DSRM password from secret manager. $Secret = (Invoke-RestMethod -Headers @{ "Metadata-Flavor" = "Google"; "x-goog-user-project" = $ProjectId; "Authorization" = "Bearer $AccessToken"} -Uri "https://secretmanager.googleapis.com/v1/projects/$ProjectId/secrets/ad-password/versions/latest:access") $DsrmPassword = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($Secret.payload.data)) $DsrmPassword = ConvertTo-SecureString -AsPlainText $DsrmPassword -force Promote.
- Example: $VpcName = "ad" $Region = "us-central1" $SubnetRangeDomainControllers = "10.0.0.0/28" $SubnetRangeResources = "10.0.1.0/24" Create the VPC and configure it to be used as a Shared VPC network: $ProjectId = gcloud config get-value core/project & gcloud compute networks create $VpcName --subnet-mode custom & gcloud compute shared-vpc enable $ProjectId Create the subnets and enable Private Google Access so that Windows can activate without internet access. & gcloud compute networks subnets create domain-controllers --network $VpcName --range $SubnetRangeDomainControllers --region $Region --enable-private-ip-google-access & gcloud compute networks subnets create resources --network $VpcName --range $SubnetRangeResources --region $Region --enable-private-ip-google-access Deploy subnets and firewall rules You now create firewall rules to allow Active Directory communication within the VPC.
- The logs can be useful for diagnosing connectivity problems, but they might produce a significant volume of log data. & gcloud compute firewall-rules create deny-ingress-from-all --direction INGRESS --action deny --rules tcp:0-65535,udp:0-65535 --enable-logging --source-ranges 0.0.0.0/0 --network $VpcName --priority 65000 Deploy the Active Directory forest In this section, you create a new service project and attach it to the Shared VPC host project that you created previously.
- You then grant the domain controller VMs temporary access to this secret so that they can use it to deploy the Active Directory forest.

