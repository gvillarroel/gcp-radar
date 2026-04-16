---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.153Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "IPv6-only VM instances"
feature_slug: "ipv6-only-vm-instances"
latest_feature_date: "2024-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/compute/docs/instances/create-start-instance"
  - "https://docs.cloud.google.com/compute/docs/instances/create-start-instance"
  - "https://docs.cloud.google.com/network-connectivity/docs/vpn/tutorials/configure-vpn-between-onprem-cloud"
keywords:
  - "ipv6"
  - "only"
  - "vm"
  - "instances"
  - "compute"
  - "engine"
  - "can"
  - "create"
---

# IPv6-only VM instances

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Compute Engine can create VM instances that use only IPv6 addresses without IPv4 addresses.

## Extended Definition

Compute Engine can create VM instances that use only IPv6 addresses without IPv4 addresses.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/compute/docs/instances/create-start-instance](https://developers.google.com/compute/docs/instances/create-start-instance)
- [https://docs.cloud.google.com/compute/docs/instances/create-start-instance](https://docs.cloud.google.com/compute/docs/instances/create-start-instance)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/tutorials/configure-vpn-between-onprem-cloud](https://docs.cloud.google.com/network-connectivity/docs/vpn/tutorials/configure-vpn-between-onprem-cloud)

## Supporting Pages

### Create a Classic VPN connection to a remote site \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-connectivity/docs/vpn/tutorials/configure-vpn-between-onprem-cloud](https://docs.cloud.google.com/network-connectivity/docs/vpn/tutorials/configure-vpn-between-onprem-cloud)
- Source ID: `site-docs-reference-3`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the compute addresses describe command to view the result: gcloud compute addresses describe ADDRESS NAME API To create a regional IPv4 address, call the regional addresses.insert method : POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /addresses Your request body should contain the following: { "name": " ADDRESS NAME " } Replace the following: ADDRESS NAME : the name of the address REGION : the name of the region for this request PROJECT ID : the project ID for this request For global static IPv4 addresses, call the globalAddresses.insert method : POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/addresses Your request body should contain the following: { "name": " ADDRESS NAME " } For global static IPv6 addresses, call the globalAddresses.insert method : POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/addresses Your request body should contain the following: { "name": " ADDRESS NAME ", "ipVersion": "IPV6" } Use the addresses.get method to see the result.
- The example creates three regional external IPv4 addresses. module "address" { source = "terraform-google-modules/address/google" version = " > 4.0" project id = var.project id # Replace this with your service project ID in quotes region = "europe-west1" address type = "EXTERNAL" names = [ "regional-external-ip-address-1", "regional-external-ip-address-2", "regional-external-ip-address-3" ] } The following example creates a global external IPv6 address: resource "google compute global address" "default" { project = var.project id # Replace this with your service project ID in quotes name = "ipv6-address" address type = "EXTERNAL" ip version = "IPV6" } Enable IP forwarding You can enable IP forwarding when you create a VM , or by updating the canIpForward instance property on an existing VM.
- This static route creates a default route to the internet. module "google compute route" { source = "../../modules/routes" #adding local path project id = var.project id # Replace this with your project ID in quotes network name = "default" routes = [ { name = "egress-internet" description = "route through IGW to access internet" destination range = "0.0.0.0/0" tags = ["egress-inet"] next hop internet = true } ] } Create a Classic VPN using static routing The VPN setup wizard is the only Google Cloud console option for creating a Classic VPN gateway.
- Replace the ADDRESS NAME with the name for this address. gcloud compute addresses create ADDRESS NAME \ --global \ --ip-version [IPV4 IPV6] To reserve a regional IP address, use the --region field: gcloud compute addresses create ADDRESS NAME \ --region= REGION Replace the following: ADDRESS NAME : the name for this address.

### Create and start a Compute Engine instance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/instances/create-start-instance](https://docs.cloud.google.com/compute/docs/instances/create-start-instance)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create instances: compute.instances.create on the project To use a custom image to create the VM: compute.images.useReadOnly on the image To use a snapshot to create the VM: compute.snapshots.useReadOnly on the snapshot To use an instance template to create the VM: compute.instanceTemplates.useReadOnly on the instance template To specify a subnet for your VM: compute.subnetworks.use on the project or on the chosen subnet To specify a static IP address for the VM: compute.addresses.use on the project To assign an external IP address to the VM when using a VPC network: compute.subnetworks.useExternalIp on the project or on the chosen subnet To assign a legacy network to the VM: compute.networks.use on the project To assign an external IP address to the VM when using a legacy network: compute.networks.useExternalIp on the project To set VM instance metadata for the VM: compute.instances.setMetadata on the project To set tags for the VM: compute.instances.setTags on the VM To set labels for the VM: compute.instances.setLabels on the VM To set a service account for the VM to use: compute.instances.setServiceAccount on the VM To create a new disk for the VM: compute.disks.create on the project To attach an existing disk in read-only or read-write mode: compute.disks.use on the disk To attach an existing disk in read-only mode: compute.disks.useReadOnly on the disk You might also be able to get these permissions with custom roles or other predefined roles .
- Compute Engine lets you create and run instances on Google infrastructure.
- Preconfigured for you Create a Google-configured, workload-optimized instance Customized machine configuration Create an instance with a custom hostname Create an instance with a custom machine type Create an instance with attached GPUs Specify a minimum CPU platform for an instance Customized OS configuration Create an instance from a public image Create an instance from a custom image Create an instance from a shared image Create an instance using a RHEL BYOS image Customized networking configuration Create an instance in a specific subnet Create an instance that uses IPv6 addresses Create instances that use the gVNIC network interface Configure an instance with higher bandwidth Customized observability configuration Create an instance that's configured for Ops Agent monitoring and logging Enable virtual displays on an instance Customized security configuration Create an instance that uses a user-managed service account Create VMs with managed workload identities enabled Enable OS Login during VM creation Configured for disaster recovery Create an instance with a Backup and DR backup plan From a backup Create an instance from a machine image Create an instance from a disk snapshot Restore an instance from a backup vault From existing configurations Create an instance from an instance template Create an instance similar to an existing instance Configured for specific workloads Create an instance to deploy a container Create Windows Server instances Create SQL Server instances Create an instance with a high performance computing (HPC) image Customized provisioning type Create a Spot instance Create instances that consume reserved instances Multiple instances at once Create instances in bulk Create a managed instance group (MIG) Sole-tenant nodes Create instances on sole-tenant nodes Efficient instances Create an instance with an attached instance schedule Troubleshooting To find methods for resolving common instance creation errors, see Troubleshooting instance creation .
- Required roles To get the permissions that you need to create instances, ask your administrator to grant you the Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 ) IAM role on the project.

### Create and start a Compute Engine instance \_|\_ Google Cloud Documentation

- URL: [https://developers.google.com/compute/docs/instances/create-start-instance](https://developers.google.com/compute/docs/instances/create-start-instance)
- Source ID: `site-docs-root-3`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create instances: compute.instances.create on the project To use a custom image to create the VM: compute.images.useReadOnly on the image To use a snapshot to create the VM: compute.snapshots.useReadOnly on the snapshot To use an instance template to create the VM: compute.instanceTemplates.useReadOnly on the instance template To specify a subnet for your VM: compute.subnetworks.use on the project or on the chosen subnet To specify a static IP address for the VM: compute.addresses.use on the project To assign an external IP address to the VM when using a VPC network: compute.subnetworks.useExternalIp on the project or on the chosen subnet To assign a legacy network to the VM: compute.networks.use on the project To assign an external IP address to the VM when using a legacy network: compute.networks.useExternalIp on the project To set VM instance metadata for the VM: compute.instances.setMetadata on the project To set tags for the VM: compute.instances.setTags on the VM To set labels for the VM: compute.instances.setLabels on the VM To set a service account for the VM to use: compute.instances.setServiceAccount on the VM To create a new disk for the VM: compute.disks.create on the project To attach an existing disk in read-only or read-write mode: compute.disks.use on the disk To attach an existing disk in read-only mode: compute.disks.useReadOnly on the disk You might also be able to get these permissions with custom roles or other predefined roles .
- Compute Engine lets you create and run instances on Google infrastructure.
- Preconfigured for you Create a Google-configured, workload-optimized instance Customized machine configuration Create an instance with a custom hostname Create an instance with a custom machine type Create an instance with attached GPUs Specify a minimum CPU platform for an instance Customized OS configuration Create an instance from a public image Create an instance from a custom image Create an instance from a shared image Create an instance using a RHEL BYOS image Customized networking configuration Create an instance in a specific subnet Create an instance that uses IPv6 addresses Create instances that use the gVNIC network interface Configure an instance with higher bandwidth Customized observability configuration Create an instance that's configured for Ops Agent monitoring and logging Enable virtual displays on an instance Customized security configuration Create an instance that uses a user-managed service account Create VMs with managed workload identities enabled Enable OS Login during VM creation Configured for disaster recovery Create an instance with a Backup and DR backup plan From a backup Create an instance from a machine image Create an instance from a disk snapshot Restore an instance from a backup vault From existing configurations Create an instance from an instance template Create an instance similar to an existing instance Configured for specific workloads Create an instance to deploy a container Create Windows Server instances Create SQL Server instances Create an instance with a high performance computing (HPC) image Customized provisioning type Create a Spot instance Create instances that consume reserved instances Multiple instances at once Create instances in bulk Create a managed instance group (MIG) Sole-tenant nodes Create instances on sole-tenant nodes Efficient instances Create an instance with an attached instance schedule Troubleshooting To find methods for resolving common instance creation errors, see Troubleshooting instance creation .
- Required roles To get the permissions that you need to create instances, ask your administrator to grant you the Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 ) IAM role on the project.

