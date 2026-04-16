---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:24.229Z"
product_name: "Guest Environment"
product_slug: "guest-environment"
feature_name: "Windows plugin-based architecture"
feature_slug: "windows-plugin-based-architecture"
latest_feature_date: "2025-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/images/guest-agent"
  - "https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering"
  - "https://docs.cloud.google.com/compute/docs/images/guest-environment"
  - "https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory"
keywords:
  - "windows"
  - "plugin"
  - "based"
  - "architecture"
  - "the"
  - "guest"
  - "agent"
  - "reintroduces"
---

# Windows plugin-based architecture

Product: Guest Environment
Coverage: MEDIUM

## Step 02 Summary

The guest agent reintroduces the plugin-based architecture for Windows; The guest agent introduces the plugin-based architecture for Windows.

## Extended Definition

The guest agent reintroduces the plugin-based architecture for Windows; The guest agent introduces the plugin-based architecture for Windows.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/compute/docs/images/guest-agent](https://docs.cloud.google.com/compute/docs/images/guest-agent)
- [https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering](https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering)
- [https://docs.cloud.google.com/compute/docs/images/guest-environment](https://docs.cloud.google.com/compute/docs/images/guest-environment)
- [https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory](https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory)

## Supporting Pages

### About the guest agent \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/images/guest-agent](https://docs.cloud.google.com/compute/docs/images/guest-agent)
- Source ID: `site-docs-reference`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Plugin-based agent binaries This table lists the file paths for the plugin-based guest agent binaries on Linux and Windows instances: Component Path on Linux Path on Windows Guest agent manager /usr/bin/google guest agent manager C:\ProgramData\Google\Compute Engine\agent\GCEWindowsAgentManager.exe Core plugin binary /usr/lib/google/guest agent/core plugin C:\Program Files\Google\Compute Engine\agent\CorePlugin.exe Metadata script runner /usr/bin/gce metadata script runner C:\Program Files\Google\Compute Engine\agent\GCEMetadataScriptRunner.exe Monolithic agent binaries The following table lists the file paths for the monolithic guest agent binaries on Linux and Windows instances: Component Path on Linux Path on Windows Guest agent /usr/bin/google guest agent C:\Program Files\Google\Compute Engine\agent\GCEWindowsAgent.exe Metadata script runner /usr/bin/google metadata script runner C:\Program Files\Google\Compute Engine\metadata scripts\GCEMetadataScripts.exe Authorized keys Not applicable C:\Program Files\Google\Compute Engine\agent\GCEAuthorizedKeys.exe Guest agent daemon services The following tables list the guest agent daemon services installed on Linux and Windows instances.
- These components are not part of the plugin-based architecture and activate only if you manually choose to revert to the monolithic agent by setting the metadata attribute enable-guest-agent-core-plugin to false .
- Guest agent architecture Starting with version 20250901.00 , the guest agent architecture is updated from a monolithic design to a modern, plugin-based system.
- Plugin-based architecture : starting with version 20250901.00 , the guest agent is divided into distinct, independent plugins managed by a central manager.

### "Running Windows Server Failover Clustering \_|\_ Compute Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering](https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Replace [YOUR ZONE 3] with the name of your zone: gcloud compute instances create wsfc - dc --zone [YOUR ZONE 3] --machine-type n1-standard-2 --image-project windows-cloud --image-family windows-2016 --scopes https://www.googleapis.com/auth/compute --can-ip-forward --private-network-ip 10.0.0.6 --network wsfcnet --subnet wsfcnetsub1 View your instances You can see the details about the instances you created. gcloud compute instances list You will see output similar to the following: NAME ZONE MACHINE TYPE PREEMPTIBLE INTERNAL IP EXTERNAL IP STATUS wsfc-1 us-central1-a n1-standard-2 10.0.0.4 35.203.131.133 RUNNING wsfc-2 us-central1-b n1-standard-2 10.0.0.5 35.203.130.194 RUNNING wsfc-dc us-central1-c n1-standard-2 10.0.0.6 35.197.27.2 RUNNING Connecting to your VMs To connect to a Windows-based VM, you must first generate a password for the VM.
- Putting it together Now that you've reviewed some of the concepts, here are some details to notice about the architecture diagram: The Compute Engine agent for the VM named wsfc-2 is responding to the health check with the value 1, indicating it is the active cluster node.
- Here's how internal load balancing detects the correct node: Each VM instance runs a Compute Engine agent instance that provides support for Windows failover clustering.
- View your firewall rules: gcloud compute firewall-rules list You should see output similar to the following: NAME NETWORK DIRECTION PRIORITY ALLOW DENY DISABLED allow-all-subnet wsfcnet INGRESS 1000 all False allow-rdp wsfcnet INGRESS 1000 tcp:3389 False Enabling failover clustering in Compute Engine To enable failover clustering in the Compute Engine agent, you need to add the flag enable-wsfc=true to your VM definitions either by specifying it as custom metadata for the VM or by creating a configuration file on each VM, as described in the Compute Engine documentation .

### Guest environment \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/images/guest-environment](https://docs.cloud.google.com/compute/docs/images/guest-environment)
- Source ID: `site-docs-root`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The guest agent is available for both Linux and Windows operating systems, with the following package names: Linux: google-guest-agent Windows: google-compute-engine-windows For detailed information about the guest agent, including its features, architecture, and how to manage the agent, see Guest agent .
- Reads data from and writes data to the VM metadata Sends logs to the Windows Application Event Log, serial port, and Cloud Logging guest-agent google-compute-engine-sysprep Contains scripts for generalizing a Windows instance in preparation for creating an OS image.
- The Windows guest environment includes the following key packages: Package name Description Key interactions Link to source code on GitHub google-compute-engine-windows This package is the guest agent for the Windows environment.
- To review the operations completed by the agent, see VM Manager audit logging . guest-osconfig Windows components All Google-provided Windows OS images are preconfigured with the GooGet tool and Google Cloud repositories.

### "Deploy an Active Directory forest on Compute Engine \_|\_ Cloud Architecture\

- URL: [https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory](https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about configuring the guest agent, see Enabling and disabling Windows instance features .
- This architecture lets you do the following: Deploy additional Windows workloads in separate projects, and let them use the Shared VPC network and Active Directory forest.
- Configure the guest agent to disable the account manager.
- Create a VM instance for the first domain controller: $Subnet = "projects/$VpcProjectId/regions/$Region/subnetworks/domain-controllers" $Metadata = "ActiveDirectoryDnsDomain=$AdDnsDomain", "ActiveDirectoryNetbiosDomain=$AdNetbiosDomain", "ActiveDirectoryFirstDc=dc-1", "sysprep-specialize-script-ps1=Install-WindowsFeature AD-Domain-Services; Install-WindowsFeature DNS", "disable-account-manager=true" -join "," & gcloud compute instances create dc-1 --image-family windows-2022 --image-project windows-cloud --machine-type n2-standard-8 --tags ad-domaincontroller --metadata "$Metadata" --metadata-from-file windows-startup-script-ps1=dc-startup.ps1 --no-address --network-interface "no-address,private-network-ip=$AddressOfDc1,subnet=$Subnet" --service-account $DcServiceAccount --scopes cloud-platform --zone $Zones[0] --shielded-integrity-monitoring --shielded-secure-boot --shielded-vtpm --deletion-protection This command does the following: Create a shielded Windows Server 2022 VM.

