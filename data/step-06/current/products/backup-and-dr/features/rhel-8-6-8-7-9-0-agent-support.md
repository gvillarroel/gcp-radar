---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.946Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "RHEL 8.6/8.7/9.0 agent support"
feature_slug: "rhel-8-6-8-7-9-0-agent-support"
latest_feature_date: "2023-04-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems"
  - "https://docs.cloud.google.com/compute/docs/containers/migrate-containers"
keywords:
  - "expanded"
  - "include"
  - "agent"
  - "rhel"
---

# RHEL 8.6/8.7/9.0 agent support

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Backup and DR agent support was expanded to include RHEL 8.6, RHEL 8.7, and RHEL 9.0.

## Extended Definition

Backup and DR agent support was expanded to include RHEL 8.6, RHEL 8.7, and RHEL 9.0.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr](https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems)
- [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers)

## Supporting Pages

### Support matrix \_|\_ Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr](https://docs.cloud.google.com/backup-disaster-recovery/docs/supportmatrix-backupdr)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Oracle family Config types Supported OSes Min required Backup and DR agent version Oracle 21c All Versions Standalone RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 RAC RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 Exadata 1 RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 Non Active Data Guard 2 RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 Active Data Guard 2 RHEL 8.4 Rocky Linux 8.7 Windows 2016, 2019 V11.0.7 Oracle 19c 3 All Versions Standalone OEL 7.x, 8.x, 9.0, 9.6 RHEL 8.x, SLES 12, 15 Windows 2016, 2019 RHEL 8.10 RHEL 9.5 with kernel 5.14.0-503.23.1 V11.0.1 V11.0.15 ASM Standalone OEL 9.6 V11.0.17 Rocky Linux 8.7 V11.0.7 RAC OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Rocky Linux 8.7 V11.0.7 Exadata 1 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Rocky Linux 8.7 V11.0.7 Non Active Data Guard 2 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Rocky Linux 8.7 V11.0.7 Active Data Guard 2 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Rocky Linux 8.7 V11.0.7 Oracle 18c 3 All Versions Standalone OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 RAC OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Exadata 1 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Non Active Data Guard 2 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 Active Data Guard 3 OEL 7.x, 8.x, 9.0 RHEL 8.x SLES 12, 15 Windows 2016, 2019 V11.0.1 1 Oracle Exadata system is supported with iSCSI and NFS 2 Oracle database RMAN change block tracking is available on Active Data Guard only 3 Data capture of Oracle 18c and later is at container level (that includes all PDBs).
- Supported Configuration SAP HANA SavePoint API 2 SAP file-based (HDBSQL/Backint) 3 Supported OSes Min required Backup and DR agent version Scale-out HANA 2.0, non shared storage Yes (preferred) 1 Yes RHEL 8.4 SLES 12 SP5 SLES 15 SP3 V11.0.1 Yes (preferred) 1 Yes RHEL 8.6 SLES 15 SP4 V11.0.4 Yes (preferred) 1 Yes RHEL 8.8 V11.0.16 Yes (preferred) 1 Yes RHEL 8.10 V11.0.14 Yes (preferred) 1 Yes RHEL 9.2 V11.0.15 Yes (preferred) 1 Yes RHEL 9.4 V11.0.15 Yes (preferred) 1 Yes RHEL 9.5 V11.0.14 Yes (preferred) 1 Yes RHEL 9.6 V11.0.16 Yes (preferred) 1 Yes SLES 15 SP5 V11.0.9 Yes (preferred) 1 Yes SLES 15 SP7 V11.0.16 Scale-out HANA 2.0, shared storage 4 Not Supported Yes RHEL 8.4 SLES 12 SP5 SLES 15 SP3 V11.0.1 Not Supported Yes RHEL 8.6 SLES 15 SP4 V11.0.4 Yes (preferred) 1 Yes SLES 15 SP5 V11.0.9 SAP HANA 2.0 Standalone or HA (1+1) Yes (preferred) 1 Yes RHEL 8.4 SLES 12 SP5 SLES 15 SP3 V11.0.1 Yes (preferred) 1 Yes RHEL 8.6 SLES 15 SP4 V11.0.4 Yes (preferred) 1 Yes SLES 15 SP5 V11.0.9 Single Container System (HANA 1.0) 5 Yes (preferred) Yes RHEL 8.4 SLES 12 SP5 SLES 15 SP3 V11.0.1 Yes (preferred) Yes RHEL 8.6 SLES 15 SP4 V11.0.4 Yes (preferred) 1 Yes SLES 15 SP5 V11.0.9 1 Requires SAP HANA 2.0 SPS 04 or later 2 In this table, 'SAP HANA SavePoint API' is referring to SAP HANA backup leveraging Backup and DR CBT and its supporting incremental-forever and app-aware instant mount feature with log roll-forward option.
- OS Version Basic Backup and DR agent Support Change Block Tracking Support Min required Backup and DR agent Version RHEL 1,4 8.4 Yes Yes V11.0.1 8.6 Yes Yes V11.0.4 8.8 Yes Yes V11.0.15 8.10 Yes Yes V11.0.12 9.0 Yes No V11.0.4 9.2 Yes Yes V11.0.15 9.4 Yes Yes V11.0.15 9.5 Yes Yes V11.0.15 9.6 Yes Yes V11.0.16 9.7 Yes Yes V11.0.16 RHEL for SAP 1 8.4 Yes Yes V11.0.1 8.6 Yes Yes V11.0.4 8.8 Yes Yes V11.0.15 9.0 Yes No V11.0.8 9.2 Yes Yes V11.0.14 9.4 Yes Yes V11.0.14 SLES 1, 3 12 SP5 Yes Yes V11.0.1 15 SP2 Yes Yes V11.0.1 15 SP3 Yes Yes V11.0.1 15 SP4 Yes Yes V11.0.4 15 SP5 Yes Yes V11.0.9 15 SP6 Yes Yes V11.0.15 15 SP7 Yes Yes V11.0.16 SLES for SAP 1, 3 12 SP5 Yes Yes V11.0.1 15 SP2 Yes Yes V11.0.1 15 SP3 Yes Yes V11.0.1 15 SP4 Yes Yes V11.0.4 15 SP5 Yes Yes V11.0.9 15 SP6 Yes Yes V11.0.15 15 SP7 Yes Yes V11.0.16 Rocky Linux 9.3 Yes Yes V11.0.15 Rocky Linux optimized for Google Cloud 9.3 Yes No V11.0.9 Ubuntu 20.04 LTS Yes No V11.0.1 22.04 LTS Yes No V11.0.1 Oracle Linux 1, 2 7.0-7.6 Yes No V11.0.1 7.7 Yes No V11.0.1 7.8 Yes No V11.0.1 7.9 Yes No V11.0.1 8.0-8.1 Yes No V11.0.1 8.2 Yes No V11.0.1 8.3 Yes No V11.0.1 8.4 Yes No V11.0.1 8.5 Yes No V11.0.1 8.6 Yes No V11.0.1 8.7 Yes No V11.0.4 8.8 5 Yes No V11.0.8 9.0 Yes No V11.0.4 9.1 5 Yes No V11.0.8 9.2 5 Yes No V11.0.8 9.6 5 Yes No V11.0.16 1 Symantec (Veritas) Dynamic Multi Pathing (DMP) is NOT supported.
- Supported PostgreSQL versions Supported OSes Min required Backup and DR Service agent version 10.23 RHEL 8.4 V11.0.1 RHEL 8.6 V11.0.4 11.x RHEL 8.4 V11.0.1 RHEL 8.6 V11.0.4 12.x RHEL 8.4 V11.0.1 RHEL 8.6 V11.0.4 13.x RHEL 8.4 V11.0.1 RHEL 8.6 V11.0.4 14.x RHEL 8.4 V11.0.1 RHEL 8.6 V11.0.4 RHEL 8.8, 8.10 Rocky Linux 9 V11.0.16 15.x RHEL 8.4 V11.0.1 RHEL 8.6 V11.0.4 RHEL 8.8, 8.10, RHEL 9.x SLES 15 SP7 V11.0.16 16.x RHEL 8.10 V11.0.13-14 with hotfixes RHEL 8.10, RHEL 9.x Rocky Linux 9, SLES 15 SP7 V11.0.16 SAP Backup and DR Service supports SAP on all the databases supported in this document.

### "Backup and DR Service for Filestore and file systems on self-managed storage\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems)
- Source ID: `site-api-reference`
- Final score: 55
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When configuring a backup plan for a file system, you have the following settings to help ensure that you get exactly what you need: Exclude Patterns and Include Patterns: You can exclude or include certain file types.
- Service access point IP address: This allows the backup/recovery appliance to connect to the Backup and DR agent using the cluster resource IP and to back up the file system from the active cluster node.
- The following steps describe the process for how to perform data backup and recovery with volume-based backup images and CBT: The Backup and DR agent has CBT to track changed blocks in the file system.
- Agent copies changed blocks to backup/recovery appliance, which then deletes the snapshot and catalogs the backup.

### "Migrate containers that were deployed on VMs during VM creation \_|\_ Compute\

- URL: [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers)
- Source ID: `site-docs-reference-2`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- If the output of the command from the preceding step lists instances that use the gce-container-declaration metadata key, run the following command to get more details about the container declaration on your VMs: gcloud compute instances list \ --filter = 'metadata.items.key:gce-container-declaration AND (metadata.items.value "image:")' \ --format = "table(name, zone, metadata.items.filter(key='gce-container-declaration').extract(value).slice(0):label=CONTAINER DECLARATION)" Based on the output of the command, consider the following: If the metadata contains the definition for the deprecated container startup agent, then you must migrate the container deployment to an alternative solution as described in this document.
- Alternatively, if you want to change the logging driver, you can include the --log-driver parameter with your docker run command: Use Cloud Logging logging driver docker run --log-driver = gcplogs nginx:latest For more information, see Using Cloud Logging with Container-Optimized OS Configure internal firewall Container-Optimized OS denies incoming traffic by default, so you must add iptables rules to allow that traffic.
- Google Kubernetes Engine When you transition from the Compute Engine container startup agent to an alternative solution, consider the following required changes and the potential effort of implementing them: VMs running Container-Optimized OS : Take full ownership of VM and container runtime setup, configuration, security, and maintenance, which often involves scripting with startup scripts or cloud-init .
- Deprecated options for configuring containers on VMs When you configure a container during VM creation, Compute Engine uses the container startup agent to read the gce-container-declaration metadata that stores the container information, and to deploy the container on the VM.

