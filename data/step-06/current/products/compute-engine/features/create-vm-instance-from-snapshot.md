---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.280Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "Create VM instance from snapshot"
feature_slug: "create-vm-instance-from-snapshot"
latest_feature_date: "2019-10-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/compute/docs/instances/create-start-instance"
  - "https://docs.cloud.google.com/compute/docs/instances/create-start-instance"
  - "https://docs.cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances"
keywords:
  - "create"
  - "vm"
  - "instance"
  - "snapshot"
  - "compute"
  - "engine"
  - "can"
  - "directly"
---

# Create VM instance from snapshot

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Compute Engine can create a VM instance directly from a persistent disk snapshot using the API or gcloud.

## Extended Definition

Compute Engine can create a VM instance directly from a persistent disk snapshot using the API or gcloud.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/compute/docs/instances/create-start-instance](https://developers.google.com/compute/docs/instances/create-start-instance)
- [https://docs.cloud.google.com/compute/docs/instances/create-start-instance](https://docs.cloud.google.com/compute/docs/instances/create-start-instance)
- [https://docs.cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances](https://docs.cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances)

## Supporting Pages

### Create and start a Compute Engine instance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/instances/create-start-instance](https://docs.cloud.google.com/compute/docs/instances/create-start-instance)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create instances: compute.instances.create on the project To use a custom image to create the VM: compute.images.useReadOnly on the image To use a snapshot to create the VM: compute.snapshots.useReadOnly on the snapshot To use an instance template to create the VM: compute.instanceTemplates.useReadOnly on the instance template To specify a subnet for your VM: compute.subnetworks.use on the project or on the chosen subnet To specify a static IP address for the VM: compute.addresses.use on the project To assign an external IP address to the VM when using a VPC network: compute.subnetworks.useExternalIp on the project or on the chosen subnet To assign a legacy network to the VM: compute.networks.use on the project To assign an external IP address to the VM when using a legacy network: compute.networks.useExternalIp on the project To set VM instance metadata for the VM: compute.instances.setMetadata on the project To set tags for the VM: compute.instances.setTags on the VM To set labels for the VM: compute.instances.setLabels on the VM To set a service account for the VM to use: compute.instances.setServiceAccount on the VM To create a new disk for the VM: compute.disks.create on the project To attach an existing disk in read-only or read-write mode: compute.disks.use on the disk To attach an existing disk in read-only mode: compute.disks.useReadOnly on the disk You might also be able to get these permissions with custom roles or other predefined roles .
- Home Documentation Compute Compute Engine Guides Send feedback Create and start a Compute Engine instance Stay organized with collections Save and categorize content based on your preferences.
- Methods to create and start an instance This section describes the basic methods that you can use to create and start a Compute Engine instance.
- Compute Engine lets you create and run instances on Google infrastructure.

### Create and start a Compute Engine instance \_|\_ Google Cloud Documentation

- URL: [https://developers.google.com/compute/docs/instances/create-start-instance](https://developers.google.com/compute/docs/instances/create-start-instance)
- Source ID: `site-docs-root-3`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create instances: compute.instances.create on the project To use a custom image to create the VM: compute.images.useReadOnly on the image To use a snapshot to create the VM: compute.snapshots.useReadOnly on the snapshot To use an instance template to create the VM: compute.instanceTemplates.useReadOnly on the instance template To specify a subnet for your VM: compute.subnetworks.use on the project or on the chosen subnet To specify a static IP address for the VM: compute.addresses.use on the project To assign an external IP address to the VM when using a VPC network: compute.subnetworks.useExternalIp on the project or on the chosen subnet To assign a legacy network to the VM: compute.networks.use on the project To assign an external IP address to the VM when using a legacy network: compute.networks.useExternalIp on the project To set VM instance metadata for the VM: compute.instances.setMetadata on the project To set tags for the VM: compute.instances.setTags on the VM To set labels for the VM: compute.instances.setLabels on the VM To set a service account for the VM to use: compute.instances.setServiceAccount on the VM To create a new disk for the VM: compute.disks.create on the project To attach an existing disk in read-only or read-write mode: compute.disks.use on the disk To attach an existing disk in read-only mode: compute.disks.useReadOnly on the disk You might also be able to get these permissions with custom roles or other predefined roles .
- Home Documentation Compute Compute Engine Guides Send feedback Create and start a Compute Engine instance Stay organized with collections Save and categorize content based on your preferences.
- Methods to create and start an instance This section describes the basic methods that you can use to create and start a Compute Engine instance.
- Compute Engine lets you create and run instances on Google infrastructure.

### "Create a VM that uses a user-managed service account \_|\_ Compute Engine\

- URL: [https://docs.cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances](https://docs.cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances)
- Source ID: `site-docs-reference-required-6`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create VMs that use service accounts: To create service accounts: All the permissions in the iam.serviceAccountCreator role To grant permissions to the service account: All the permissions in the resourcemanager.projectIamAdmin role To create VMs: compute.instances.create on the project To use a custom image to create the VM: compute.images.useReadOnly on the image To use a snapshot to create the VM: compute.snapshots.useReadOnly on the snapshot To use an instance template to create the VM: compute.instanceTemplates.useReadOnly on the instance template To assign a legacy network to the VM: compute.networks.use on the project To specify a static IP address for the VM: compute.addresses.use on the project To assign an external IP address to the VM when using a legacy network: compute.networks.useExternalIp on the project To specify a subnet for the VM: compute.subnetworks.use on the project or on the chosen subnet To assign an external IP address to the VM when using a VPC network: compute.subnetworks.useExternalIp on the project or on the chosen subnet To set VM instance metadata for the VM: compute.instances.setMetadata on the project To set tags for the VM: compute.instances.setTags on the VM To set labels for the VM: compute.instances.setLabels on the VM To set a service account for the VM to use: compute.instances.setServiceAccount on the VM To create a new disk for the VM: compute.disks.create on the project To attach an existing disk in read-only or read-write mode: compute.disks.use on the disk To attach an existing disk in read-only mode: compute.disks.useReadOnly on the disk You might also be able to get these permissions with custom roles or other predefined roles .
- POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE /instances { "machineType":"zones/ MACHINE TYPE ZONE /machineTypes/ MACHINE TYPE ", "name":" VM NAME ", "disks":[ { "initializeParams":{ "sourceImage":"projects/ IMAGE PROJECT /global/images/ IMAGE " }, "boot":true } ], "networkInterfaces":[ { "network":"global/networks/ NETWORK NAME " } ], "serviceAccounts": [ { "email": " SERVICE ACCOUNT EMAIL ", "scopes": ["https://www.googleapis.com/auth/cloud-platform"] } ], "shieldedInstanceConfig":{ "enableSecureBoot":" ENABLE SECURE BOOT " } } Replace the following: PROJECT ID : ID of the project to create the VM in ZONE : zone to create the VM in MACHINE TYPE ZONE : zone containing the machine type to use for the new VM MACHINE TYPE : machine type, predefined or custom , for the new VM VM NAME : name of the new VM IMAGE PROJECT : project containing the image For example, if you specify debian-10 as the image family, specify debian-cloud as the image project.
- To create and start the instance, click Create . gcloud To create a new VM instance and configure it to use a custom service account by using the Google Cloud CLI, use the gcloud compute instances create command and provide the service account email and the cloud-platform access scope to the VM instance. gcloud compute instances create VM NAME \ --service-account= SERVICE ACCOUNT EMAIL \ --scopes=https://www.googleapis.com/auth/cloud-platform Replace the following: SERVICE ACCOUNT EMAIL : the email address for the service account that you created.
- Required roles To get the permissions that you need to create VMs that use service accounts, ask your administrator to grant you the following IAM roles on the project: Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 ) Create Service Accounts ( roles/iam.serviceAccountCreator ) Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

