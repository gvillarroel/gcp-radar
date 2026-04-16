---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.928Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Compute Engine VM creation integration for backup policy assignment"
feature_slug: "compute-engine-vm-creation-integration-for-backup-policy-assignment"
latest_feature_date: "2024-09-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms"
  - "https://docs.cloud.google.com/compute/docs/access/organization-policies"
  - "https://docs.cloud.google.com/compute/docs/containers/migrate-containers"
keywords:
  - "assignment"
  - "policy"
  - "creation"
  - "integration"
  - "compute"
  - "engine"
---

# Compute Engine VM creation integration for backup policy assignment

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Added integration with Compute Engine VM creation to apply Backup and DR policies during VM creation.

## Extended Definition

Added integration with Compute Engine VM creation to apply Backup and DR policies during VM creation.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms](https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms)
- [https://docs.cloud.google.com/compute/docs/access/organization-policies](https://docs.cloud.google.com/compute/docs/access/organization-policies)
- [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers)

## Supporting Pages

### "Prevent creation of VMs that use the container metadata \_|\_ Compute Engine\

- URL: [https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms](https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms)
- Source ID: `site-docs-reference-2`
- Final score: 167
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This document describes how to do the following: Enforce an organization policy to disable the creation of Compute Engine instances that use the container startup agent.
- Home Documentation Compute Compute Engine Guides Send feedback Prevent creation of VMs that use the container metadata Stay organized with collections Save and categorize content based on your preferences.
- Select the Disable creation of Compute Engine instances that use the deprecated container startup agent (konlet) constraint from the list of constraints.
- Monitor usage of the deprecated metadata by enforcing the policy in dry-run mode Instead of directly enforcing the policy, which blocks the creation of instances that use the container declaration metadata, you can apply the policy in dry-run mode.

### Organization policies for Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/access/organization-policies](https://docs.cloud.google.com/compute/docs/access/organization-policies)
- Source ID: `site-docs-reference-2`
- Final score: 157
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This constraint does not affect internal IPv6 addresses in VPC networks. compute.enableComplianceMemoryProtection Enables memory protection features on Compute Engine virtual machines. compute.requireConfidentialVm Requires that all new Compute Engine VM instances use Confidential VM. compute.requireGuestAttributes Requires Compute Engine guest attributes, which can be used to publish hostnames, IP addresses, and other instance-related information from within a virtual machine instance. compute.requireOsLogin Requires all new Compute Engine VM instances to enable OS Login. compute.requireShieldedVm Requires that all new VM instances are Shielded VMs. compute.restrictCloudNATUsage Restricts Cloud NAT usage to only specified VPC networks. compute.restrictDedicatedInterconnectUsage Restricts Dedicated Interconnect usage to only specified VPC networks. compute.restrictLoadBalancerCreationForTypes Restricts creation of load balancers to only allowed types. compute.restrictPartnerInterconnectUsage Restricts Partner Interconnect usage to only specified VPC networks. compute.restrictProtocolForwardingCreationForTypes Restricts creation of protocol forwarding to internal or external target instances. compute.restrictSharedVpcHostProjects Restricts the set of host projects that projects in scope can attach to. compute.restrictSharedVpcSubnetworks Restricts the set of Shared VPC subnetworks that projects in scope can use. compute.restrictVpcPeering Restricts VPC Network Peering to only allowed VPC networks. compute.restrictVpnPeerIPs Restricts VPN peer IPs to only allowed IPs. compute.setNewProjectDefaultToZonalDnsOnly When set to true , new projects default to Zonal DNS only; VMs created in these projects have zonal DNS names ( .zone.c.project-id.internal ).
- However, if there are IPV4 IPV6 stack type subnetworks in the project when this constraint is activated, you must delete them before you can create an IPV4 ONLY stack type subnetwork in the same region, even if you are using a different VPC network. compute.disableGuestAttributes Disables Compute Engine guest attributes, which can be used to publish hostnames, IP addresses, and other instance-related information from within a virtual machine instance. compute.disableInstanceDataAccessApis Disables access to Compute Engine instance metadata APIs needed to access sensitive instance metadata, such as sshKeys, serialPortLogging, and startup-/shutdown-scripts. compute.disableInternetNetworkEndpointGroup Disables creation of Internet Network Endpoint Groups. compute.disableNestedVirtualization When set to true , disables hardware-accelerated nested virtualization for all Compute Engine VMs in the project. compute.disableSerialPortAccess Disables serial port access to Compute Engine VMs. compute.disableSerialPortLogging Disables serial port logging to Google Cloud Observability from Compute Engine VMs. compute.disableVpcExternalIpv6 If this constraint is active, you cannot create VPC networks with ULA internal IPv6 ranges, or assign external IPv6 addresses to VMs in VPC networks.
- Projects for which Global DNS is disabled cannot be reverted to Global DNS. compute.skipDefaultNetworkCreation Skips the automatic creation of the default VPC network and related resources during Google Cloud Project creation. compute.storageResourceUseRestrictions Restricts the use of Compute Engine storage resources (such as PD-Standard, PD-SSD, PD-Balanced, Local-SSD) based on location. compute.trustedImageProjects Restricts image access to only trusted images from the specified projects. compute.vmCanIpForward Restricts which VM instances can enable IP forwarding. compute.vmExternalIpAccess Restricts VM instances that are allowed to use external IP addresses.
- Managed constraints Managed constraints for Compute Engine simplify governance for common security scenarios and integrate with safe rollout tools, such as dry-run and Policy Simulator, which let you test their impact before enforcement.

### "Migrate containers that were deployed on VMs during VM creation \_|\_ Compute\

- URL: [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers)
- Source ID: `site-docs-reference-2`
- Final score: 155
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Deprecated options for configuring containers on VMs When you configure a container during VM creation, Compute Engine uses the container startup agent to read the gce-container-declaration metadata that stores the container information, and to deploy the container on the VM.
- Home Documentation Compute Compute Engine Guides Send feedback Migrate containers that were deployed on VMs during VM creation Stay organized with collections Save and categorize content based on your preferences.
- Example: Create the instance template that uses a startup script gcloud compute instance-templates create startup-template \ --machine-type=e2-medium \ --image-family=cos-stable \ --image-project=cos-cloud \ --metadata-from-file=startup-script=./startup script.sh Create the managed instance group gcloud compute instance-groups managed create startup-mig \ --template=startup-template \ --size=2 \ --zone=us-central1-a Terraform Use the google compute instance template and google compute instance group manager resources to create an instance template and a MIG, as shown in the following example: Example : resource "google compute instance template" "startup template" { name prefix = "startup-template-" machine type = "e2-medium" disk { source image = "cos-cloud/cos-stable" auto delete = true boot = true } network interface { network = "default" } metadata = { startup-script = file("./startup script.sh") } } resource "google compute instance group manager" "startup mig" { name = "startup-mig" base instance name = "startup-vm" zone = "us-central1-a" version { instance template = google compute instance template.startup template.id } target size = 2 } Test and clean up After successful creation of a VM or a MIG, validate that your application is running on the container and working as expected.
- Get your existing VM instance configuration in yaml format gcloud compute instances describe VM NAME --format = "(metadata.items)" The output is similar to the following: metadata: items: - key: gce-container-declaration value: spec: containers: - args: - '"hello world!"' command: - echo env: - name: ONE value: '1' image: docker.io/library/busybox name: my-instance securityContext: privileged: true stdin: true tty: true restartPolicy: Always - key: google-logging-enabled value: 'true' Use the following table to map existing specification to docker run commands: gcloud CLI flag VM metadata key Docker run command --container-image containers.image Specify as an argument without any flag.

