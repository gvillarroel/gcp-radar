---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:13:26.194Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Management console deployment without private services access"
feature_slug: "management-console-deployment-without-private-services-access"
latest_feature_date: "2024-10-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
keywords:
  - "services"
  - "without"
  - "deployment"
  - "private"
  - "access"
  - "management"
  - "console"
  - "backup"
---

# Management console deployment without private services access

Product: Backup and DR
Coverage: LOW

## Step 02 Summary

Backup and DR now supports deploying the new management console without requiring private services access.

## Extended Definition

Backup and DR now supports deploying the new management console without requiring private services access.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)

## Supporting Pages

### Backup and DR Service release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes](https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- October 21, 2024 Feature Backup and DR service added support to deploy new management console without the need to create private services access.
- Announcement The Backup and DR service has added support for activating the management console and for storing backup vault data in the following regions: us-west3 (Salt Lake City), europe-west9 (Paris), me-west1 (Israel), europe-north1 (Finland), europe-west6 (Zürich), asia-northeast3 (Seoul), southamerica-west1 (Santiago).
- March 24, 2025 Announcement The Backup and DR service has added support for activating the management console , for creating backup plans , and for storing backup vault data in the following regions: northamerica-northeast1 (Montréal), northamerica-northeast2 (Toronto), and asia-east2 (Hong Kong).
- February 04, 2025 Announcement The Backup and DR service has added support for activating the management console and for storing backup vault data in the following regions: us-east5, asia-northeast1, and asia-southeast2.

### "Set up and plan a backup/recovery appliance deployment \_|\_ Backup and\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Each Backup and DR deployment includes a single appliance management console managing any number of backup/recovery appliances.
- Management console supported regions While Backup and DR Service can be used to back up supported workloads in any Google Cloud region, the appliance management console can be activated only in the following regions: Geographic Area Region Name Region Description North America northamerica-northeast1 Montréal Low CO 2 northamerica-northeast2 Toronto Low CO 2 us-central1 Iowa Low CO 2 us-east1 South Carolina us-east4 Northern Virginia us-east5 Columbus us-south1 Dallas Low CO 2 us-west1 Oregon Low CO 2 us-west2 Los Angeles us-west3 Salt Lake City us-west4 Las Vegas northamerica-south1 Querétaro South America southamerica-east1 São Paulo Low CO 2 southamerica-west1 Santiago Low CO 2 Europe europe-central2 Warsaw europe-north1 Finland Low CO 2 europe-north2 Stockholm Low CO 2 europe-southwest1 Madrid Low CO 2 europe-west1 Belgium Low CO 2 europe-west2 London Low CO 2 europe-west3 Frankfurt europe-west4 Netherlands Low CO 2 europe-west6 Zürich Low CO 2 europe-west8 Milan europe-west9 Paris Low CO 2 europe-west10 Berlin europe-west12 Turin Middle East me-central1 Doha me-central2 Dammam me-west1 Israel Africa africa-south1 Johannesburg Asia Pacific asia-east1 Taiwan asia-east2 Hong Kong asia-northeast1 Tokyo asia-northeast2 Osaka asia-northeast3 Seoul asia-southeast1 Singapore asia-southeast2 Jakarta australia-southeast1 Sydney australia-southeast2 Melbourne India asia-south1 Mumbai asia-south2 Delhi Querétaro (northamerica-south1), Montréal (northamerica-northeast1), and Osaka (asia-northeast2) don't support zone separation.
- Purpose Source Target Port (TCP) Support traffic (support to appliance) SSH CLIENT IP Backup/recovery appliance 26 iSCSI backup (host to appliance) AGENT HOST IP Backup/recovery appliance 3260 StreamSnap traffic (appliance to appliance) SOURCE APPLIANCE IP Backup/recovery appliance 5107 Backup/recovery appliance connectivity to management console APPLIANCE IP .backupdr.googleusercontent.com 443 Replace the following: SSH CLIENT IP: the IP address of the host running the SSH client.
- Components of the backup/recovery appliance architecture The Backup and DR Service architecture is delivered through the following components: Google Cloud console : The Google Cloud console includes the Backup and DR product for central management of your Persistent Disk vaulted backups, backup plans for Compute Engine instances, and enhanced backup for Cloud SQL in those products.

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Run an on-demand backup job from the appliance management console To run an on-demand capture of a managed application from the Manage Backup Plan page: Click the App Manager tab and select the Applications option from the drop-down list.
- Home Documentation Storage Backup and DR Guides Send feedback Monitor jobs in the appliance management console Stay organized with collections Save and categorize content based on your preferences.
- From the Monitor tab, you can view and manage jobs (cancel active jobs or change the job priority of a queued job) from backup/recovery appliances managed by the appliance management console.
- Job Types Backup and DR protects and accesses data through these types of jobs: Job type Monitor label Description Clean Up Mirroring cleanupmirroring Removes a StreamSnap image from a remote appliance when a backup plan is removed from an application or changed to one that does not include the same type of replication.

