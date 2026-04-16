---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.937Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Basic connector OS support expansion"
feature_slug: "basic-connector-os-support-expansion"
latest_feature_date: "2023-11-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/containers/migrate-containers"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control"
keywords:
  - "expansion"
  - "basic"
  - "additional"
  - "connector"
  - "added"
---

# Basic connector OS support expansion

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Backup and DR added basic connector support for additional Linux distributions and versions, including Rocky Linux, RHEL, SLES, and OEL variants.

## Extended Definition

Backup and DR added basic connector support for additional Linux distributions and versions, including Rocky Linux, RHEL, SLES, and OEL variants.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control)

## Supporting Pages

### "Migrate containers that were deployed on VMs during VM creation \_|\_ Compute\

- URL: [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers)
- Source ID: `site-docs-reference-2`
- Final score: 49
- Re-rank relevance: N/A

Evidence snippets:
- Example 1 Run a standalone container in a VM based on Container-Optimized OS: #!/bin/bash A name for the container CONTAINER NAME = "my-app-container" Stop and remove the container if it exists docker stop $CONTAINER NAME true docker rm $CONTAINER NAME true Pull the latest version of the container image from Docker Hub docker pull busybox:latest Run docker container from image in docker hub docker run busybox:latest \ echo "hello world!" Example 2 Run a web server container in a VM based on Container-Optimized OS: #!/bin/bash Enable incoming traffic iptables -A INPUT -j ACCEPT A name for the container CONTAINER NAME = "my-app-container" Stop and remove the container if it exists docker stop $CONTAINER NAME true docker rm $CONTAINER NAME true Pull the latest version of the container image from Docker Hub docker pull nginx:latest Run docker container from image in docker hub docker run \ --name = $CONTAINER NAME \ --privileged \ --restart = always \ --tty \ --detach \ --network = "host" \ nginx:latest Additional configuration options for container deployment This section describes the additional configuration parameters for deploying containers on your VMs.
- For troubleshooting other issues, see the following documents: Cloud Logging overview Using Cloud Logging with Container-Optimized OS Troubleshooting the Docker daemon Troubleshoot and diagnose Troubleshoot Terraform Troubleshooting when running a basic web server Set up and manage network address translation with Public NAT Use cloud-init with Container-Optimized OS You can use cloud-init , an industry-standard and cross-platform solution, to deploy containers on VMs running Container-Optimized OS.
- For more information about deploying containers on Batch, see the following documents: Get started Create and run a basic job GKE If you are running complex applications, microservices, continuous operation and need fine-grained control and scalability, Google Kubernetes Engine (GKE) (GKE) is the offering that is best suited.
- Additionally, you must configure your Virtual Private Cloud (VPC) firewall to allow that traffic to the new VM For more information, see Use VPC firewall rules .

### "Protect and recover SAP HANA databases in Compute Engine instances \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)
- Source ID: `site-docs-reference`
- Final score: 47
- Re-rank relevance: N/A

Evidence snippets:
- You can mount snapshot backup images of an SAP HANA database as a standard mount for: Any manual operation or To Mount a backup for an integrity check Pre checks during mount Connector connectivity status: Verify that the Backup and DR agent is installed and secret is applied for host connectivity between the backup/recovery appliance and the Backup and DR agent.
- Note that the minimum billing period for the archive snapshot is 90 days irrespective of the retention period defined in the policy and that an archive type snapshot also has an additional retrieval charge if it is used in a mount or a restore job.
- Discover and protect SAP HANA databases Note: If you are protecting a HANA database that has already been added and that already has LVM backup images, then you must change the capture method from LVM to Persistent Disk.
- If a node is removed or added after discovery and protection, the configuration doesn't update automatically in Backup and DR metadata, and might cause backup issues.

### Control access with IAM \_|\_ Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control)
- Source ID: `site-api-reference`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- See Basic roles for additional details.
- Warning: Do not grant service agent roles to any principals except service agents . alloydb.operations.get cloudsql. instances. createBackupDrBackup cloudsql.instances.get compute.addresses.list compute.addresses.use compute.addresses.useInternal compute.diskTypes. compute.diskTypes.get compute.diskTypes.list compute.disks.create compute.disks.createSnapshot compute.disks.createTagBinding compute.disks.delete compute.disks.get compute.disks.list compute.disks.setLabels compute.disks.use compute.disks.useReadOnly compute.firewalls.list compute.globalOperations.get compute.images.create compute.images.delete compute.images.get compute.images.useReadOnly compute.instances.attachDisk compute.instances.create compute. instances. createTagBinding compute.instances.delete compute.instances.detachDisk compute.instances.get compute.instances.list compute. instances. listEffectiveTags compute. instances. pscInterfaceCreate compute. instances. setDeletionProtection compute.instances.setLabels compute.instances.setMetadata compute. instances. setServiceAccount compute.instances.setTags compute.instances.start compute.instances.stop compute. instances. updateDisplayDevice compute.instances.useReadOnly compute.machineTypes. compute.machineTypes.get compute.machineTypes.list compute.networks.list compute.nodeGroups.get compute.nodeGroups.list compute.nodeTemplates.get compute.projects.get compute.regionOperations.get compute.regions. compute.regions.get compute.regions.list compute.resourcePolicies.use compute.snapshots.create compute.snapshots.delete compute.snapshots.get compute.snapshots.setLabels compute.snapshots.useReadOnly compute.storagePools.use compute.subnetworks.list compute.subnetworks.use compute. subnetworks. useExternalIp compute.zoneOperations.get compute.zones.list file.backups.create file. instances. createCrossProjectBackup file.instances.get iam.serviceAccounts.actAs iam.serviceAccounts.get iam.serviceAccounts.list resourcemanager.projects.get resourcemanager.projects.list Basic roles Basic roles are project-level roles that predate IAM.
- Basic roles include broad permissions that apply to all of your Google Cloud resources; in contrast, Backup and DR's predefined roles include fine-grained permissions that apply only to Backup and DR.
- Although Backup and DR supports the following basic roles, you should use one of the predefined roles whenever possible.

