---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:19:23.974Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "SLES12SP5SAP OS image support"
feature_slug: "sles12sp5sap-os-image-support"
latest_feature_date: "2025-12-29"
deprecation_date: "2025-12-29"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-planning"
keywords:
  - "sles12sp5sap"
  - "image"
  - "os"
  - "operating"
  - "system"
  - "the"
  - "for"
  - "on"
---

# SLES12SP5SAP OS image support

Product: Bare Metal Solution
Coverage: LOW

## Step 02 Summary

Support for the SLES12SP5SAP operating-system image on Bare Metal Solution is deprecated; deprecated on 2025-12-29.

## Extended Definition

Support for the SLES12SP5SAP operating-system image on Bare Metal Solution is deprecated; deprecated on 2025-12-29.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)

## Supporting Pages

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- For the OS image code, see Operating systems . curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME ?updateMask=os image" -d "{ 'osImage' : ' OS IMAGE ' }" Because this change takes awhile to complete, you can check the status by following the steps in View the status of a long-running operation .
- For the OS image code, see Operating systems . gcloud bms instances update SERVER NAME --region REGION --os-image= OS IMAGE To set up SSH keys, encryption keys, or both, use the gcloud alpha bms instances update command.
- To select one of the available OS images, visit Operating systems .
- To get the OS image code for your OS, see Operating systems .

### "Solution Guide: Google Cloud Backup and DR for Oracle on Bare Metal Solution\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- Source ID: `site-docs-root-2`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- The following output example shows that the Backup and DR agent service is running correctly: [root@test2 ]# service udsagent status Redirecting to /bin/systemctl status udsagent.service udsagent.service - Google Cloud Backup and DR service Loaded: loaded (/usr/lib/systemd/system/udsagent.service; enabled; vendor preset: disabled) Active: active (running) since Wed 2022-12-28 05:05:45 UTC; 2 days ago Process: 46753 ExecStop=/act/initscripts/udsagent.init stop (code=exited, status=0/SUCCESS) Process: 46770 ExecStart=/act/initscripts/udsagent.init start (code=exited, status=0/SUCCESS) Main PID: 46789 (udsagent) Tasks: 8 (limit: 48851) Memory: 74.0M CGroup: /system.slice/udsagent.service ├─46789 /opt/act/bin/udsagent start └─60570 /opt/act/bin/udsagent start Dec 30 05:11:30 test2 su[150713]: pam unix(su:session): session closed for user oracle Dec 30 05:11:30 test2 su[150778]: (to oracle) root on none Log messages from your backups can help you diagnose issues.
- Understand the factors that impact performance for the network and your backup servers The following items affect network I/O between Oracle on Bare Metal Solution and your backup servers in Google Cloud: Flash storage Similar to Google Cloud Persistent Disk, the flash storage arrays that provide the storage for Bare Metal Solution systems increase I/O capabilities based on how much storage you assign to the host.
- Select the optimal machine type and Persistent Disk type When using a backup/recovery appliance with an application such as a file system or a database, you can measure performance based on how quickly the host instance's data transfers between the Compute Engine instances.
- Note: When you set the Convert ASM Format to Filesystem Format field to Yes , you end up with the backup copy being created in a file system format, as opposed to an ASM disk format on the Backup and DR snapshot pool.

### Plan for Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- OS version OS image code Machine series Machine type Lifecycle stage EOL and image deprecation date RHEL 7.7 for SAP LAMBRHEL77SAP o2-ultramem-672-metal o2-ultramem-896-metal Memory-optimized servers End of Life August 2023 RHEL 7.9 RHEL7x o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose GA June 2024 RHEL 8.4 (Minor version locked) RHEL84 o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose End of Life May 2023 RHEL 8 (Latest minor release) RHEL8x o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose GA May 2029 RHEL 8.0 for SAP RHEL80SAP o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose End of Life December 2020 RHEL 8.1 for SAP RHEL81SAP o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose End of Life November 2023 RHEL 9.4 (Minor version locked) RHEL94 o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose End of Life May 2023 RHEL 9 (Latest minor release) RHEL9x o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose GA May 2032 OEL 7.9 OEL7x o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose GA July 2024 OEL 8 (Latest minor release) OEL8x o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose GA July 2029 OEL 8.8 (Minor version locked) OEL88 o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose GA June 2025 OEL 9 OEL9x o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose GA June 2032 SLES 15 SP1 SLES15SPx o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose End of Life January 2024 SLES 12 SP4 for SAP SLES12SP4SAP o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal o2-ultramem-896-metal General-purpose & Memory-optimized servers End of Life June 2023 SLES 12 SP5 for SAP SLES12SP5SAP o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal o2-ultramem-896-metal General-purpose & Memory-optimized servers End of Support October 2027 SLES 15 for SAP SLES15SAP o2-standard-48-metal o2-standard-32-metal o2-standard-112-metal o2-standard-16-metal o2-highmem-224-metal General-purpose End of Life December 2022 SLES 15 SP1 for SAP SLES15SPxSAP o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal o2-ultramem-896-metal General-purpose & Memory-optimized servers End of Support January 2024 SLES 15 SP2 for SAP LAMBSLES15SP2SAP o2-ultramem-672-metal o2-ultramem-896-metal Memory-optimized servers GA December 2024 Bring Your Own Image (BYOI) The Bare Metal Solution servers are certified to run only the OS images of the following distributions: Red Hat Enterprise Linux (RHEL) Oracle Linux (OL) SUSE Linux Enterprise Server (SLES) Any other OS hasn't been tested or certified to run on the Bare Metal Solution servers.
- Operating systems When you place an order for Bare Metal Solution, you can specify the operating system (OS) that you need installed on your servers.
- For instructions, follow: Click the server On the Server details page click EDIT On Edit Server page select Reimage server Specify the OS image .
- Remove any personally identifiable information (PII) from the OS image.

