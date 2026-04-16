---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:24.227Z"
product_name: "Guest Environment"
product_slug: "guest-environment"
feature_name: "Dynamic local extension startup"
feature_slug: "dynamic-local-extension-startup"
latest_feature_date: "2026-03-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/images/guest-agent"
  - "https://docs.cloud.google.com/compute/docs/images/guest-environment"
  - "https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes"
  - "https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory"
keywords:
  - "dynamic"
  - "local"
  - "extension"
  - "startup"
  - "the"
  - "guest"
  - "agent"
  - "can"
---

# Dynamic local extension startup

Product: Guest Environment
Coverage: MEDIUM

## Step 02 Summary

The guest agent can dynamically start locally installed extensions when local plugins are enabled.

## Extended Definition

The guest agent can dynamically start locally installed extensions when local plugins are enabled.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/compute/docs/images/guest-agent](https://docs.cloud.google.com/compute/docs/images/guest-agent)
- [https://docs.cloud.google.com/compute/docs/images/guest-environment](https://docs.cloud.google.com/compute/docs/images/guest-environment)
- [https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes](https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes)
- [https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory](https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory)

## Supporting Pages

### About the guest agent \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/images/guest-agent](https://docs.cloud.google.com/compute/docs/images/guest-agent)
- Source ID: `site-docs-reference`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Extensions (Optional plugins) : you can provision these extensions to integrate with other Google Cloud services to perform tasks such as: Monitoring and logging: enable the Ops Agent to collect metrics and logs for Cloud Monitoring.
- Lifecycle management for extensions includes the following: Installation and updates: the guest agent manager installs, starts, stops, and configures extensions based on instructions from VM Extension Manager.
- Health monitoring: the guest agent manager monitors the health and status of extensions, including their CPU and memory usage, and reports this information back to VM Extension Manager.
- Reduced overhead for extensions : the guest agent manager automatically handles the installation and updates of extensions, reducing the manual effort required to keep them up-to-date.

### Guest environment \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/images/guest-environment](https://docs.cloud.google.com/compute/docs/images/guest-environment)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This module lets the system use Google Cloud IAM permissions to control whether the system can log into an instance or perform operations as root (with sudo ). google oslogin nss cache : a utility for updating the local user and group cache. selinux : a package that contains SELinux policy definition files and a compiled policy package for configuring SELinux to support OS Login.
- The guest agent is available for both Linux and Windows operating systems, with the following package names: Linux: google-guest-agent Windows: google-compute-engine-windows For detailed information about the guest agent, including its features, architecture, and how to manage the agent, see Guest agent .
- Reads data from and writes data to the VM metadata Sends logs to the Windows Application Event Log, serial port, and Cloud Logging guest-agent google-compute-engine-sysprep Contains scripts for generalizing a Windows instance in preparation for creating an OS image.
- Works with the following packages to configure instances. google-guest-agent google-compute-engine-oslogin guest-configs google-compute-engine-oslogin Contains the necessary binaries, modules, and scripts to manage instance access using OS Login.

### "Setting and querying guest attributes \_|\_ Compute Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes](https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes)
- Source ID: `site-iam-reference`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, guest attributes work well for the following use cases: Startup scripts that can signal successful initialization by setting a custom status value in guest attributes.
- Inventory management agents that can publish list of packages installed in the VM instance to guest attributes.
- For example, you can retrieve all of the values for the VM as follows: gcloud compute instances get-guest-attributes VM NAME \ --zone= ZONE To retrieve all of the values under a specific namespace, include the --query-path flag and the namespace that you defined: gcloud compute instances get-guest-attributes VM NAME \ --query-path= NAMESPACE \ --zone= ZONE To retrieve all of the values under a specific namespace, include the --query-path flag, the namespace, and the key for the value that you defined: gcloud compute instances get-guest-attributes VM NAME \ --query-path= NAMESPACE / KEY \ --zone= ZONE Replace the following: VM NAME : the name of the VM from which you want to read the guest attribute metadata value NAMESPACE : the namespace for the guest-attributes key that you want to query KEY : the path within guest-attributes metadata where the value is stored ZONE : the zone where the VM is located REST Use the compute.instances.getguestattributes method : GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE /instances/ VM NAME /getGuestAttributes?queryPath= NAMESPACE / KEY Replace the following: PROJECT ID : your project ID ZONE : the zone where your VM is located VM NAME : the name of the VM from which you want to read the guest attribute metadata value NAMESPACE : the namespace for the guest-attributes key that you want to query KEY : the path within guest-attributes metadata where the value is stored To retrieve all of the keys for a NAMESPACE , omit the KEY : GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE /instances/ VM NAME /getGuestAttributes?queryPath= NAMESPACE To retrieve all of the keys in each namespace on the VM, omit the NAMESPACE : GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE /instances/ VM NAME /getGuestAttributes?queryPath= Alternatively, if you have an OAuth token, you can use curl : curl -H "Authorization: Bearer OAUTH TOKEN " https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE /instances/ VM NAME /getGuestAttributes?queryPath= NAMESPACE / KEY Replace the following: OAUTH TOKEN : your OAuth token PROJECT ID : your project ID ZONE : the zone where your VM is located VM NAME : the name of the VM from which you want to read the guest attribute metadata value NAMESPACE : the namespace for the guest-attributes key that you want to query KEY : the path within guest-attributes metadata where the value is stored Deleting guest attributes Use the following instructions to remove guest attributes from within a VM.
- For example, use Invoke-RestMethod to delete a specific key: PS C:\> $value = (Invoke-RestMethod -Method DELETE -Headers @{'Metadata-Flavor' = 'Google'} -Uri "http://metadata.google.internal/computeMetadata/v1/instance/guest-attributes/ NAMESPACE / KEY ") $value Replace the following: NAMESPACE : the namespace for the guest-attributes key that you want to delete KEY : the path within guest-attributes where the value is stored Disabling guest attributes on your organization or folder If you don't want any of the VMs in your organization or folder to enable guest attributes, you can override and disable the feature completely.

### "Deploy an Active Directory forest on Compute Engine \_|\_ Cloud Architecture\

- URL: [https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory](https://docs.cloud.google.com/compute/docs/tutorials/setup-active-directory)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about configuring the guest agent, see Enabling and disabling Windows instance features .
- Configure the guest agent to disable the account manager.
- Create a VM instance for the first domain controller: $Subnet = "projects/$VpcProjectId/regions/$Region/subnetworks/domain-controllers" $Metadata = "ActiveDirectoryDnsDomain=$AdDnsDomain", "ActiveDirectoryNetbiosDomain=$AdNetbiosDomain", "ActiveDirectoryFirstDc=dc-1", "sysprep-specialize-script-ps1=Install-WindowsFeature AD-Domain-Services; Install-WindowsFeature DNS", "disable-account-manager=true" -join "," & gcloud compute instances create dc-1 --image-family windows-2022 --image-project windows-cloud --machine-type n2-standard-8 --tags ad-domaincontroller --metadata "$Metadata" --metadata-from-file windows-startup-script-ps1=dc-startup.ps1 --no-address --network-interface "no-address,private-network-ip=$AddressOfDc1,subnet=$Subnet" --service-account $DcServiceAccount --scopes cloud-platform --zone $Zones[0] --shielded-integrity-monitoring --shielded-secure-boot --shielded-vtpm --deletion-protection This command does the following: Create a shielded Windows Server 2022 VM.
- Example: $VpcName = "ad" $Region = "us-central1" $SubnetRangeDomainControllers = "10.0.0.0/28" $SubnetRangeResources = "10.0.1.0/24" Create the VPC and configure it to be used as a Shared VPC network: $ProjectId = gcloud config get-value core/project & gcloud compute networks create $VpcName --subnet-mode custom & gcloud compute shared-vpc enable $ProjectId Create the subnets and enable Private Google Access so that Windows can activate without internet access. & gcloud compute networks subnets create domain-controllers --network $VpcName --range $SubnetRangeDomainControllers --region $Region --enable-private-ip-google-access & gcloud compute networks subnets create resources --network $VpcName --range $SubnetRangeResources --region $Region --enable-private-ip-google-access Deploy subnets and firewall rules You now create firewall rules to allow Active Directory communication within the VPC.

