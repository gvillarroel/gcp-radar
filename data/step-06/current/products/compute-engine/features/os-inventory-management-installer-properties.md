---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.222Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "OS inventory management installer properties"
feature_slug: "os-inventory-management-installer-properties"
latest_feature_date: "2021-09-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server"
  - "https://docs.cloud.google.com/compute/docs/tutorials/creating-high-performance-sql-server-instance"
  - "https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering"
keywords:
  - "os"
  - "inventory"
  - "management"
  - "installer"
  - "properties"
  - "can"
  - "expose"
  - "windows"
---

# OS inventory management installer properties

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

OS inventory management can expose installer properties for Windows applications.

## Extended Definition

OS inventory management can expose installer properties for Windows applications.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server](https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server)
- [https://docs.cloud.google.com/compute/docs/tutorials/creating-high-performance-sql-server-instance](https://docs.cloud.google.com/compute/docs/tutorials/creating-high-performance-sql-server-instance)
- [https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering](https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering)

## Supporting Pages

### "Performing an in-place upgrade of Windows\_Server \_|\_ Compute Engine \_\

- URL: [https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server](https://docs.cloud.google.com/compute/docs/tutorials/performing-in-place-upgrade-windows-server)
- Source ID: `site-docs-reference-required-6`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Detach the installation disk You can now detach the installation disk from the VM instance: In Cloud Shell, detach the installation disk from your VM instance, replacing VM NAME with the name of your VM instance: gcloud compute instances detach-disk VM NAME --disk=win-installers Install updates and restore access After the upgrade is complete, run Windows Update to download and install any security updates.
- Replace ZONE with the name of the zone where the VM is located: gcloud compute disks create win-installers --image-family=windows-install-media --image-project=compute-image-tools --zone= ZONE This command adds a disk named win-installers to your project.
- Analyze log files offline If you can't connect to the instance by using Windows Remote Management (WinRM), you can cancel the upgrade and analyze the log files from a different VM instance.
- Connect to the Emergency Management Services console Both during and after running Windows Setup, you can connect to the Emergency Management Services (EMS) console .

### "Creating a high-performance SQL Server instance \_|\_ Compute Engine \_\

- URL: [https://docs.cloud.google.com/compute/docs/tutorials/creating-high-performance-sql-server-instance](https://docs.cloud.google.com/compute/docs/tutorials/creating-high-performance-sql-server-instance)
- Source ID: `site-docs-reference-required-6`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here is a helper script to run in Management Studio: ALTER DATABASE model MODIFY FILE ( NAME = modeldev , FILENAME = 'D:\SQLData\model.mdf' ) ALTER DATABASE model MODIFY FILE ( NAME = modellog , FILENAME = 'D:\SQLData\modellog.ldf' ) ALTER DATABASE msdb MODIFY FILE ( NAME = MSDBData , FILENAME = 'D:\SQLData\MSDBData.mdf' ) ALTER DATABASE msdb MODIFY FILE ( NAME = MSDBlog , FILENAME = 'D:\SQLData\MSDBLog.ldf' ) After you execute these commands: Use the services.msc snap-in to stop the SQL Server database service.
- Grant full security access to the "NT Service\MSSQLSERVER" user account: icacls p : \ tempdb / Grant "NT Service\MSSQLServer:(OI)(CI)F" Run the following script inside SQL Server Management Studio, to move the tempdb data file and log file: USE master GO ALTER DATABASE [tempdb] MODIFY FILE (NAME = tempdev, FILENAME = 'p:\tempdb\tempdb.mdf') GO ALTER DATABASE [tempdb] MODIFY FILE (NAME = templog, FILENAME = 'p:\tempdb\templog.ldf') GO Restart SQL Server.
- The log contains an entry such as, "Using locked pages in the memory manager." Granting the Perform volume maintenance tasks permission By default, when an application requests a slice of disk space from Windows, the operating system locates an appropriately sized chunk of disk space, and then zeroes out the entire chunk of disk, before handing it back to the application.
- Enter the following command to grant full access to NT Service\MSSQLSERVER : icacls D : \ SQLData / Grant "NT Service\MSSQLServer:(OI)(CI)F" Use Management Studio and the following guides to move your system databases and change the default file locations for new databases.

### "Running Windows Server Failover Clustering \_|\_ Compute Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering](https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering)
- Source ID: `site-docs-reference-required-6`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Using the Windows Computer Management desktop app, set a password for the local Administrator account .
- Replace [YOUR ZONE 3] with the name of your zone: gcloud compute instances create wsfc - dc --zone [YOUR ZONE 3] --machine-type n1-standard-2 --image-project windows-cloud --image-family windows-2016 --scopes https://www.googleapis.com/auth/compute --can-ip-forward --private-network-ip 10.0.0.6 --network wsfcnet --subnet wsfcnetsub1 View your instances You can see the details about the instances you created. gcloud compute instances list You will see output similar to the following: NAME ZONE MACHINE TYPE PREEMPTIBLE INTERNAL IP EXTERNAL IP STATUS wsfc-1 us-central1-a n1-standard-2 10.0.0.4 35.203.131.133 RUNNING wsfc-2 us-central1-b n1-standard-2 10.0.0.5 35.203.130.194 RUNNING wsfc-dc us-central1-c n1-standard-2 10.0.0.6 35.197.27.2 RUNNING Connecting to your VMs To connect to a Windows-based VM, you must first generate a password for the VM.
- Run the following command, replacing [YOUR ZONE 1] with the name of your first zone: gcloud compute instances create wsfc - 1 --zone [YOUR ZONE 1] --machine-type n1-standard-2 --image-project windows-cloud --image-family windows-2016 --scopes https://www.googleapis.com/auth/compute --can-ip-forward --private-network-ip 10.0.0.4 --network wsfcnet --subnet wsfcnetsub1 --metadata enable-wsfc=true Create the second cluster-node server For the second server, follow the same steps, except: Set the instance name to: wsfc-2 .
- Replace [YOUR ZONE 2] with the name of your second zone: gcloud compute instances create wsfc - 2 --zone [YOUR ZONE 2] --machine-type n1-standard-2 --image-project windows-cloud --image-family windows-2016 --scopes https://www.googleapis.com/auth/compute --can-ip-forward --private-network-ip 10.0.0.5 --network wsfcnet --subnet wsfcnetsub1 --metadata enable-wsfc=true Create the third server for Active Directory For the domain controller, follow the same steps, except: Set the instance name to: wsfc-dc .

