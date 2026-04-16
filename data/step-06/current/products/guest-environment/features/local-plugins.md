---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:24.226Z"
product_name: "Guest Environment"
product_slug: "guest-environment"
feature_name: "Local plugins"
feature_slug: "local-plugins"
latest_feature_date: "2026-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/tutorials/creating-sql-server-instance-using-netapp"
  - "https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory"
  - "https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering"
  - "https://docs.cloud.google.com/compute/docs/tutorials/configuring-sql-server-ag-netapp-volumes-iscsi"
keywords:
  - "local"
  - "plugins"
  - "the"
  - "enable"
  - "setting"
  - "now"
  - "defaults"
  - "to"
---

# Local plugins

Product: Guest Environment
Coverage: MEDIUM

## Step 02 Summary

The enable_local_plugins setting now defaults to true, enabling local plugins by default.

## Extended Definition

The enable_local_plugins setting now defaults to true, enabling local plugins by default.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/compute/docs/tutorials/creating-sql-server-instance-using-netapp](https://docs.cloud.google.com/compute/docs/tutorials/creating-sql-server-instance-using-netapp)
- [https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory](https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory)
- [https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering](https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering)
- [https://docs.cloud.google.com/compute/docs/tutorials/configuring-sql-server-ag-netapp-volumes-iscsi](https://docs.cloud.google.com/compute/docs/tutorials/configuring-sql-server-ag-netapp-volumes-iscsi)

## Supporting Pages

### "Use Google Cloud NetApp Volumes file storage to configure a SQL Server failover\

- URL: [https://docs.cloud.google.com/compute/docs/tutorials/creating-sql-server-instance-using-netapp](https://docs.cloud.google.com/compute/docs/tutorials/creating-sql-server-instance-using-netapp)
- Source ID: `site-docs-reference`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On the two VMs that serve as WSFC nodes, attach an additional data disk and enable the Windows Server Failover Clustering by setting the metadata key enable-wsfc to true : REGION=$(gcloud config get-value compute/region) PD SIZE=200 MACHINE TYPE=n2-standard-8 gcloud compute instances create node-1 \ --zone $REGION-a \ --machine-type $MACHINE TYPE \ --subnet $SUBNET NAME \ --image-family sql-ent-2022-win-2022 \ --image-project windows-sql-cloud \ --tags wsfc,wsfc-node \ --boot-disk-size 50 \ --boot-disk-type pd-ssd \ --boot-disk-device-name "node-1" \ --metadata enable-wsfc=true \ --metadata-from-file=sysprep-specialize-script-ps1=specialize-node.ps1 gcloud compute instances create node-2 \ --zone $REGION-b \ --machine-type $MACHINE TYPE \ --subnet $SUBNET NAME \ --image-family sql-ent-2022-win-2022 \ --image-project windows-sql-cloud \ --tags wsfc,wsfc-node \ --boot-disk-size 50 \ --boot-disk-type pd-ssd \ --boot-disk-device-name "node-2" \ --metadata enable-wsfc=true \ --metadata-from-file=sysprep-specialize-script-ps1=specialize-node.ps1 gcloud compute instances create "witness" \ --zone $REGION-c \ --machine-type n2-standard-2 \ --subnet $SUBNET NAME \ --image-family=windows-2022 \ --image-project=windows-cloud \ --tags wsfc \ --boot-disk-size 50 \ --boot-disk-type pd-ssd \ --metadata sysprep-specialize-script-ps1="add-windowsfeature FS-FileServer" Note: Depending on your performance requirements , consider using a machine type larger than n2-standard-8 for the WSFC nodes.
- Configure the Failover Cluster to respond to the health check service: $SqlGroup = Get-ClusterGroup Where-Object {$ .Name.StartsWith("SQL Server")} $SqlIpAddress = Get-ClusterResource Where-Object {$ .Name.StartsWith("SQL IP Address")} $SqlIpAddress Set-ClusterParameter -Multiple @{ 'Address'=$LoadBalancerIP; 'ProbePort'= 59997; 'SubnetMask'='255.255.255.255'; 'Network'= (Get-ClusterNetwork).Name; 'EnableDhcp'=0; } Restart the cluster resource: $SqlIpAddress Stop-ClusterResource $SqlIpAddress Start-ClusterResource Restart the cluster group: $SqlGroup Stop-ClusterGroup $SqlGroup Start-ClusterGroup Create an internal load balancer To provide a single endpoint for SQL Server clients, you will now deploy an internal load balancer .
- SUBNET CIDR=$(gcloud compute networks subnets describe $SUBNET NAME --format=value\('ipCidrRange'\)) gcloud compute firewall-rules create allow-all-between-wsfc-nodes \ --direction=INGRESS \ --action=allow \ --rules=tcp,udp,icmp \ --enable-logging \ --source-tags=wsfc \ --target-tags=wsfc \ --network=$VPC NAME \ --priority 10000 gcloud compute firewall-rules create allow-sql-to-wsfc-nodes \ --direction=INGRESS \ --action=allow \ --rules=tcp:1433 \ --enable-logging \ --source-ranges=$SUBNET CIDR \ --target-tags=wsfc-node \ --network=$VPC NAME \ --priority 10000 Create a firewall rule that allows health checks from the IP ranges of the Google Cloud probers : gcloud compute firewall-rules create allow-health-check-to-wsfc-nodes \ --direction=INGRESS \ --action=allow \ --rules=tcp \ --source-ranges=130.211.0.0/22,35.191.0.0/16 \ --target-tags=wsfc-node \ --network=$VPC NAME \ --priority 10000 Note: Depending on how you've deployed Active Directory, you might need to create additional firewall rules to allow servers to join the domain.
- The script installs the necessary Windows feature and creates firewall rules for WSFC and SQL Server: cat < specialize-node.ps1 $ErrorActionPreference = "stop" Install required Windows features Install-WindowsFeature Failover-Clustering -IncludeManagementTools Install-WindowsFeature RSAT-AD-PowerShell Open firewall for WSFC netsh advfirewall firewall add rule name="Allow SQL Server health check" dir=in action=allow protocol=TCP localport=59997 Open firewall for SQL Server netsh advfirewall firewall add rule name="Allow SQL Server" dir=in action=allow protocol=TCP localport=1433 Open firewall for SQL Server replication netsh advfirewall firewall add rule name="Allow SQL Server replication" dir=in action=allow protocol=TCP localport=5022 EOF Create the VM instances.

### "Deploy an Active Directory forest on Compute Engine \_|\_ Cloud Architecture\

- URL: [https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory](https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory)
- Source ID: `site-docs-root`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example: $VpcName = "ad" $Region = "us-central1" $SubnetRangeDomainControllers = "10.0.0.0/28" $SubnetRangeResources = "10.0.1.0/24" Create the VPC and configure it to be used as a Shared VPC network: $ProjectId = gcloud config get-value core/project & gcloud compute networks create $VpcName --subnet-mode custom & gcloud compute shared-vpc enable $ProjectId Create the subnets and enable Private Google Access so that Windows can activate without internet access. & gcloud compute networks subnets create domain-controllers --network $VpcName --range $SubnetRangeDomainControllers --region $Region --enable-private-ip-google-access & gcloud compute networks subnets create resources --network $VpcName --range $SubnetRangeResources --region $Region --enable-private-ip-google-access Deploy subnets and firewall rules You now create firewall rules to allow Active Directory communication within the VPC.
- Allow Active Directory replication between domain controllers: & gcloud compute firewall-rules create allow-replication-between-addc --direction INGRESS --action allow --rules "icmp,tcp:53,udp:53,tcp:88,udp:88,udp:123,tcp:135,tcp:389,udp:389,tcp:445,udp:445,tcp:49152-65535" --enable-logging --source-tags ad-domaincontroller --target-tags ad-domaincontroller --network $VpcName --priority 10000 Allow Active Directory logons from VMs that are in the resources subnet to domain controllers: & gcloud compute firewall-rules create allow-logon-ingress-to-addc --direction INGRESS --action allow --rules "icmp,tcp:53,udp:53,tcp:88,udp:88,udp:123,tcp:135,tcp:389,udp:389,tcp:445,udp:445,tcp:464,udp:464,tcp:3268,udp:3268,tcp:9389,tcp:49152-65535" --enable-logging --source-ranges $SubnetRangeResources --target-tags ad-domaincontroller --network $VpcName --priority 10000 If you plan to configure Secure LDAP, allow Secure LDAP connections from VMs that are in the resources subnet to domain controllers: & gcloud compute firewall-rules create allow-ldaps-ingress-to-addc --direction INGRESS --action allow --rules tcp:636 --enable-logging --source-ranges $SubnetRangeResources --target-tags ad-domaincontroller --network $VpcName --priority 10000 You only need this firewall rule if you plan to configure Secure LDAP. (Optional) Create a firewall rule that logs all failed access attempts.
- Attach the project to the Shared VPC network: $ProjectId = gcloud config get-value core/project & gcloud compute shared-vpc associated-projects add $ProjectId --host-project $VpcProjectId Reserve two static internal IP addresses in the domain controllers subnet: $AddressOfDc1 = gcloud compute addresses create dc-1 --region $Region --subnet "projects/$VpcProjectId/regions/$Region/subnetworks/domain-controllers" --format value(address) $AddressOfDc2 = gcloud compute addresses create dc-2 --region $Region --subnet "projects/$VpcProjectId/regions/$Region/subnetworks/domain-controllers" --format value(address) Create a Cloud DNS private forwarding zone in the VPC host project and configure the zone to forward DNS queries to the two reserved IP addresses: & gcloud dns managed-zones create $AdDnsDomain.Replace(".", "-") --project $VpcProjectId --dns-name $AdDnsDomain --description "Active Directory forwarding zone" --networks $VpcName --visibility private --forwarding-targets "$AddressOfDc1,$AddressOfDc2" Create a DSRM password You now define the Directory Service Restore Mode (DSRM) password and store it in Secret Manager .
- Write-Host "Setting administrator password..." Set-LocalUser -Name Administrator -Password $DsrmPassword if ($ActiveDirectoryFirstDc -eq $env:COMPUTERNAME) { Write-Host "Creating a new forest $ActiveDirectoryDnsDomain ($ActiveDirectoryNetbiosDomain)..." Install-ADDSForest -DomainName $ActiveDirectoryDnsDomain -DomainNetbiosName $ActiveDirectoryNetbiosDomain -SafeModeAdministratorPassword $DsrmPassword -DomainMode Win2008R2 -ForestMode Win2008R2 -InstallDns -CreateDnsDelegation:$False -NoRebootOnCompletion:$True -Confirm:$false } else { do { Write-Host "Waiting for domain to become available..." Start-Sleep -s 60 & ipconfig /flushdns Out-Null & nltest /dsgetdc:$ActiveDirectoryDnsDomain Out-Null } while ($LASTEXITCODE -ne 0) Write-Host "Adding DC to $ActiveDirectoryDnsDomain ($ActiveDirectoryNetbiosDomain)..." Install-ADDSDomainController -DomainName $ActiveDirectoryDnsDomain -SafeModeAdministratorPassword $DsrmPassword -InstallDns -Credential (New-Object System.Management.Automation.PSCredential ("Administrator@$ActiveDirectoryDnsDomain", $DsrmPassword)) -NoRebootOnCompletion:$true -Confirm:$false } Configure DNS.

### "Running Windows Server Failover Clustering \_|\_ Compute Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering](https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering)
- Source ID: `site-docs-root`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Otherwise, you can now move on to setting up the internal load balancer, which is required in order to route network traffic to the current host server in the cluster.
- Setting up Active Directory Now, set up the domain controller.
- Enable the local Administrator account.
- Tip: You can use the gcloud CLI to check which instance is healthy, where [REGION] is your region: gcloud compute backend-services get-health wsfc-lb --region=[REGION] The output looks like the following: backend: https://compute.googleapis.com/compute/v1/projects/exampleproject/zones/us-central1-a/instanceGroups/wsfc-group-1 status: healthStatus: - healthState: HEALTHY instance: https://compute.googleapis.com/compute/v1/projects/exampleproject/zones/us-central1-a/instances/wsfc-1 ipAddress: 10.0.0.4 port: 80 kind: compute#backendServiceGroupHealth --- backend: https://compute.googleapis.com/compute/v1/projects/exampleproject/zones/us-central1-b/instanceGroups/wsfc-group-2 status: healthStatus: - healthState: UNHEALTHY instance: https://compute.googleapis.com/compute/v1/projects/exampleproject/zones/us-central1-b/instances/wsfc-2 ipAddress: 10.0.0.5 port: 80 kind: compute#backendServiceGroupHealth Installing your application Now that you have a cluster, you can set up your application on each node and configure it for running in a clustered environment.

### "Use Google Cloud NetApp Volumes block storage to configure a SQL Server\

- URL: [https://docs.cloud.google.com/compute/docs/tutorials/configuring-sql-server-ag-netapp-volumes-iscsi](https://docs.cloud.google.com/compute/docs/tutorials/configuring-sql-server-ag-netapp-volumes-iscsi)
- Source ID: `site-docs-reference`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use the following PowerShell command: Add-LocalGroupMember -Group "Administrators" -Member " DOMAIN \sqlsvc" Open PowerShell as an administrator and run the following commands to install required Windows features: Install Failover Clustering and tools Install-WindowsFeature Failover-Clustering, RSAT-Clustering-PowerShell, RSAT-Clustering-CmdInterface -IncludeAllSubFeature -IncludeManagementTools Install and enable MPIO for iSCSI Install-WindowsFeature -Name Multipath-IO Enable-MSDSMAutomaticClaim -BusType "iSCSI" Install .NET and other SQL prereqs Install-WindowsFeature NET-Framework-45-Core, NET-Framework-45-Features Install-WindowsFeature RSAT-AD-PowerShell To get the iSCSI Qualified Name (IQN) for the VM, run iscsicpl.exe , go to the Configuration tab, and copy the Initiator Name .
- In the Advanced Settings dialog: Local adapter : Select Microsoft iSCSI Initiator .
- Create logins for the service account and grant it necessary permissions: USE [master]; GO CREATE LOGIN [ DOMAIN \sqlsvc] FROM WINDOWS WITH DEFAULT DATABASE=[master], DEFAULT LANGUAGE=[us english]; GO ALTER SERVER ROLE [sysadmin] ADD MEMBER [ DOMAIN \sqlsvc]; GO Run the following script in SSMS to redirect the default database, log, backup, and tempdb paths to the iSCSI volumes you mounted: USE [master]; GO EXEC xp instance regwrite N'HKEY LOCAL MACHINE', N'Software\Microsoft\MSSQLServer\MSSQLServer', N'BackupDirectory', REG SZ, N'F:\MSSQL\Backup'; GO EXEC xp instance regwrite N'HKEY LOCAL MACHINE', N'Software\Microsoft\MSSQLServer\MSSQLServer', N'DefaultData', REG SZ, N'D:\MSSQL\DATA'; GO EXEC xp instance regwrite N'HKEY LOCAL MACHINE', N'Software\Microsoft\MSSQLServer\MSSQLServer', N'DefaultLog', REG SZ, N'E:\MSSQL\Log'; GO -- Modify model and msdb paths ALTER DATABASE model MODIFY FILE (NAME = modeldev, FILENAME = 'D:\MSSQL\DATA\model.mdf'); ALTER DATABASE model MODIFY FILE (NAME = modellog, FILENAME = 'E:\MSSQL\Log\modellog.ldf'); ALTER DATABASE msdb MODIFY FILE (NAME = MSDBData, FILENAME = 'D:\MSSQL\DATA\MSDBData.mdf'); ALTER DATABASE msdb MODIFY FILE (NAME = MSDBLog, FILENAME = 'E:\MSSQL\Log\MSDBLog.ldf'); GO -- Modify tempdb paths ALTER DATABASE tempdb MODIFY FILE (NAME = tempdev, FILENAME = 'G:\MSSQL\Temp\tempdb.mdf'); ALTER DATABASE tempdb MODIFY FILE (NAME = templog, FILENAME = 'G:\MSSQL\Temp\templog.ldf'); GO Stop the SQL Server (MSSQLSERVER) service.
- On sqlnode1 and sqlnode2 , open PowerShell as an administrator and run the following commands: New-NetFirewallRule -DisplayName 'Failover Clusters (UDP-In)' -Direction Inbound -Protocol UDP -LocalPort 3343 -Action Allow New-NetFirewallRule -DisplayName 'Failover Clusters (TCP-In)' -Direction Inbound -Protocol TCP -LocalPort 3343 -Action Allow New-NetFirewallRule -DisplayName 'RPC Endpoint Mapper' -Direction Inbound -Protocol TCP -LocalPort 135 -Action Allow New-NetFirewallRule -DisplayName 'File and Printer Sharing (SMB-In)' -Direction Inbound -Protocol TCP -LocalPort 445 -Action Allow New-NetFirewallRule -DisplayName 'Failover Cluster Manager RPC' -Direction Inbound -Protocol TCP -LocalPort 49152-65535 -Action Allow New-NetFirewallRule -DisplayName 'iSCSI' -Direction Inbound -Protocol TCP -LocalPort 3260 -Action Allow New-NetFirewallRule -DisplayName 'SQL Server' -Direction Inbound -Protocol TCP -LocalPort 1433 -Action Allow New-NetFirewallRule -DisplayName 'SQL Server AG Endpoint' -Direction Inbound -Protocol TCP -LocalPort 5022 -Action Allow Create the cluster On sqlnode1 , open Failover Cluster Manager ( cluadmin.msc ).

