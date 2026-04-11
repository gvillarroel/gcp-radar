---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.193Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "ssh-rsa SSH host key algorithm"
feature_slug: "ssh-rsa-ssh-host-key-algorithm"
latest_feature_date: "2024-11-21"
deprecation_date: "2024-11-21"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-sap-hana"
keywords:
  - "algorithm"
  - "ssh"
  - "rsa"
  - "key"
  - "host"
  - "an"
  - "as"
  - "for"
---

# ssh-rsa SSH host key algorithm

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Support for ssh-rsa as an SSH Host Key algorithm is being deprecated; deprecated on 2024-11-21.

## Extended Definition

Support for ssh-rsa as an SSH Host Key algorithm is being deprecated; deprecated on 2024-11-21.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-sap-hana](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-sap-hana)

## Supporting Pages

### "Set up and plan a backup/recovery appliance deployment \_|\_ Backup and\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Management console supported regions While Backup and DR Service can be used to back up supported workloads in any Google Cloud region, the appliance management console can be activated only in the following regions: Geographic Area Region Name Region Description North America northamerica-northeast1 Montréal Low CO 2 northamerica-northeast2 Toronto Low CO 2 us-central1 Iowa Low CO 2 us-east1 South Carolina us-east4 Northern Virginia us-east5 Columbus us-south1 Dallas Low CO 2 us-west1 Oregon Low CO 2 us-west2 Los Angeles us-west3 Salt Lake City us-west4 Las Vegas northamerica-south1 Querétaro South America southamerica-east1 São Paulo Low CO 2 southamerica-west1 Santiago Low CO 2 Europe europe-central2 Warsaw europe-north1 Finland Low CO 2 europe-north2 Stockholm Low CO 2 europe-southwest1 Madrid Low CO 2 europe-west1 Belgium Low CO 2 europe-west2 London Low CO 2 europe-west3 Frankfurt europe-west4 Netherlands Low CO 2 europe-west6 Zürich Low CO 2 europe-west8 Milan europe-west9 Paris Low CO 2 europe-west10 Berlin europe-west12 Turin Middle East me-central1 Doha me-central2 Dammam me-west1 Israel Africa africa-south1 Johannesburg Asia Pacific asia-east1 Taiwan asia-east2 Hong Kong asia-northeast1 Tokyo asia-northeast2 Osaka asia-northeast3 Seoul asia-southeast1 Singapore asia-southeast2 Jakarta australia-southeast1 Sydney australia-southeast2 Melbourne India asia-south1 Mumbai asia-south2 Delhi Querétaro (northamerica-south1), Montréal (northamerica-northeast1), and Osaka (asia-northeast2) don't support zone separation.
- Purpose Source Target Port (TCP) Support traffic (support to appliance) SSH CLIENT IP Backup/recovery appliance 26 iSCSI backup (host to appliance) AGENT HOST IP Backup/recovery appliance 3260 StreamSnap traffic (appliance to appliance) SOURCE APPLIANCE IP Backup/recovery appliance 5107 Backup/recovery appliance connectivity to management console APPLIANCE IP .backupdr.googleusercontent.com 443 Replace the following: SSH CLIENT IP: the IP address of the host running the SSH client.
- Set up Backup and DR Service in the Google Cloud console Go to the Google Cloud console to activate the Backup and DR Service API and set up permissions for your account: Activate Google Cloud Backup and DR Backup/recovery appliance types Backup and DR Service provides appliance types that are optimized for different workloads—Compute Engine VMs, VMware VMs, databases, and file systems.

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Deprecated This release deprecates support for ssh-rsa as the ssh Host Key algorithm.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- For cases when no host is reachable or the primary backup appliance is down, the UI was improved by showing a spinning wheel to avoid waiting for longer than necessary while attempting to restore from an imported image.
- January 24, 2025 Fixed Fixes for Oracle databases backed up to OnVault and backup vault Hosts from both source and remote backup appliances are now listed in the restore page.

### Prepare SAP HANA for Backup and DR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-sap-hana](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/prepare-sap-hana)
- Source ID: `site-api-reference`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Procedure Connect to the HANA database system using SSH and log into (sid)adm: su - (sid)adm Change directory: cd exe Create entries in hdbuserstore using command hdbuserstore : ./hdbuserstore SET (key name) (host name):(port) (DB user name) (DB user password) In this example: ` ./hdbuserstore SET ACTBACKUP s4hana:30013 ACTBACKUP (DB user password) Check the keystore: ./hdbuserstore list Set up the log mode and log backup in HANA Studio Using the HANA Studio set the HANA log mode and log backup location for Backup and DR to take backups of HANA DB transaction logs: In SAP HANA HDB studio, make sure log backup is set correctly under DATABASE (SYSTEMDB FOR HANA 2.0) > Backup > Configuration page: Destination type is File .
- To allow the Backup and DR agent to perform host-side operations, use an SAP HANA hdbuserstore key instead of a username and password to communicate with HANA database using the SAP HANA secure userstore.
- You can find additional information in the following pages: Backup and DR for SAP HANA Prepare SAP HANA databases for backup Add an SAP HANA database host, and discover and protect its databases Configure staging disk format and backup method for SAP HANA databases Set application details and settings for SAP HANA databases Back up a discovered HANA database Back up HANA 1+n and HANA scale-out databases Restore and recover SAP HANA databases Mount an SAP HANA backup image as a standard mount Mount an SAP HANA backup image as a virtual database Mount and migrate an SAP HANA backup image for instant recovery to any target Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

