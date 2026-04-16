---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.925Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Compute Engine VM policy assignment during creation"
feature_slug: "compute-engine-vm-policy-assignment-during-creation"
latest_feature_date: "2024-12-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/containers/migrate-containers"
  - "https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery"
keywords:
  - "assignment"
  - "policy"
  - "during"
  - "creation"
  - "compute"
  - "engine"
---

# Compute Engine VM policy assignment during creation

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Backup and DR policies can now be applied when creating Compute Engine VMs during the VM creation workflow.

## Extended Definition

Backup and DR policies can now be applied when creating Compute Engine VMs during the VM creation workflow.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers)
- [https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms](https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)

## Supporting Pages

### "Migrate containers that were deployed on VMs during VM creation \_|\_ Compute\

- URL: [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers)
- Source ID: `site-docs-reference-2`
- Final score: 199
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Deprecated options for configuring containers on VMs When you configure a container during VM creation, Compute Engine uses the container startup agent to read the gce-container-declaration metadata that stores the container information, and to deploy the container on the VM.
- Home Documentation Compute Compute Engine Guides Send feedback Migrate containers that were deployed on VMs during VM creation Stay organized with collections Save and categorize content based on your preferences.
- Example: Create the instance template that uses a startup script gcloud compute instance-templates create startup-template \ --machine-type=e2-medium \ --image-family=cos-stable \ --image-project=cos-cloud \ --metadata-from-file=startup-script=./startup script.sh Create the managed instance group gcloud compute instance-groups managed create startup-mig \ --template=startup-template \ --size=2 \ --zone=us-central1-a Terraform Use the google compute instance template and google compute instance group manager resources to create an instance template and a MIG, as shown in the following example: Example : resource "google compute instance template" "startup template" { name prefix = "startup-template-" machine type = "e2-medium" disk { source image = "cos-cloud/cos-stable" auto delete = true boot = true } network interface { network = "default" } metadata = { startup-script = file("./startup script.sh") } } resource "google compute instance group manager" "startup mig" { name = "startup-mig" base instance name = "startup-vm" zone = "us-central1-a" version { instance template = google compute instance template.startup template.id } target size = 2 } Test and clean up After successful creation of a VM or a MIG, validate that your application is running on the container and working as expected.
- Get your existing VM instance configuration in yaml format gcloud compute instances describe VM NAME --format = "(metadata.items)" The output is similar to the following: metadata: items: - key: gce-container-declaration value: spec: containers: - args: - '"hello world!"' command: - echo env: - name: ONE value: '1' image: docker.io/library/busybox name: my-instance securityContext: privileged: true stdin: true tty: true restartPolicy: Always - key: google-logging-enabled value: 'true' Use the following table to map existing specification to docker run commands: gcloud CLI flag VM metadata key Docker run command --container-image containers.image Specify as an argument without any flag.

### "Prevent creation of VMs that use the container metadata \_|\_ Compute Engine\

- URL: [https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms](https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms)
- Source ID: `site-docs-reference-2`
- Final score: 179
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This document describes how to do the following: Enforce an organization policy to disable the creation of Compute Engine instances that use the container startup agent.
- Home Documentation Compute Compute Engine Guides Send feedback Prevent creation of VMs that use the container metadata Stay organized with collections Save and categorize content based on your preferences.
- Select the Disable creation of Compute Engine instances that use the deprecated container startup agent (konlet) constraint from the list of constraints.
- Monitor usage of the deprecated metadata by enforcing the policy in dry-run mode Instead of directly enforcing the policy, which blocks the creation of instances that use the container declaration metadata, you can apply the policy in dry-run mode.

### "Protect and recover SAP HANA databases in Compute Engine instances \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)
- Source ID: `site-docs-reference`
- Final score: 173
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Advanced Policy Settings specific to HANA databases on Compute Engine Persistent Disks The policy template needs these specific advanced settings.
- Deploy Backup and DR Service first Before you begin, you must read and complete the following procedures: Plan a Backup and DR deployment Prepare to deploy Backup and DR Deploy Backup and DR See how Backup and DR Service works Then see how Backup and DR Service works by going through Get started with Backup and DR: protect and recover a Compute Engine instance .
- Install the Backup and DR agent on the Compute Engine Create a backup plan for the SAP HANA database Discover and protect SAP HANA databases Mount an SAP HANA backup image as a standard mount Restore SAP HANA databases Install the Backup and DR agent on the host The Backup and DR agent connects the Compute Engine instance to the backup/recovery appliance.
- All SAP HANA servers (Compute Engine) that have HANA data to be protected by Backup and DR Service must have been onboarded to Backup and DR Service All SAP HANA servers (Compute Engine) that have HANA data to be protected by Backup and DR Service must have the Backup and DR agent installed.

