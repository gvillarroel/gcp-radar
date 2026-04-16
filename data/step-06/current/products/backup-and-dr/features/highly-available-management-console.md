---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.936Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Highly available management console"
feature_slug: "highly-available-management-console"
latest_feature_date: "2023-12-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-plan"
keywords:
  - "highly"
  - "within"
  - "available"
  - "management"
  - "console"
---

# Highly available management console

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

The Backup and DR management console is now highly available within the deployed region to improve resilience to zonal outages.

## Extended Definition

The Backup and DR management console is now highly available within the deployed region to improve resilience to zonal outages.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-plan)

## Supporting Pages

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Run an on-demand backup job from the appliance management console To run an on-demand capture of a managed application from the Manage Backup Plan page: Click the App Manager tab and select the Applications option from the drop-down list.
- Home Documentation Storage Backup and DR Guides Send feedback Monitor jobs in the appliance management console Stay organized with collections Save and categorize content based on your preferences.
- From the Monitor tab, you can view and manage jobs (cancel active jobs or change the job priority of a queued job) from backup/recovery appliances managed by the appliance management console.
- Timezone By default, in the appliance management console, all time stamps shown in the jobs and events menus are in the user's local timezone as detected by the web browser.

### "Set up and plan a backup/recovery appliance deployment \_|\_ Backup and\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-plan)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- The appliance management console is deployed in the backup administration project and is highly available within the deployed region, providing resilience against zonal outages.
- Management console supported regions While Backup and DR Service can be used to back up supported workloads in any Google Cloud region, the appliance management console can be activated only in the following regions: Geographic Area Region Name Region Description North America northamerica-northeast1 Montréal Low CO 2 northamerica-northeast2 Toronto Low CO 2 us-central1 Iowa Low CO 2 us-east1 South Carolina us-east4 Northern Virginia us-east5 Columbus us-south1 Dallas Low CO 2 us-west1 Oregon Low CO 2 us-west2 Los Angeles us-west3 Salt Lake City us-west4 Las Vegas northamerica-south1 Querétaro South America southamerica-east1 São Paulo Low CO 2 southamerica-west1 Santiago Low CO 2 Europe europe-central2 Warsaw europe-north1 Finland Low CO 2 europe-north2 Stockholm Low CO 2 europe-southwest1 Madrid Low CO 2 europe-west1 Belgium Low CO 2 europe-west2 London Low CO 2 europe-west3 Frankfurt europe-west4 Netherlands Low CO 2 europe-west6 Zürich Low CO 2 europe-west8 Milan europe-west9 Paris Low CO 2 europe-west10 Berlin europe-west12 Turin Middle East me-central1 Doha me-central2 Dammam me-west1 Israel Africa africa-south1 Johannesburg Asia Pacific asia-east1 Taiwan asia-east2 Hong Kong asia-northeast1 Tokyo asia-northeast2 Osaka asia-northeast3 Seoul asia-southeast1 Singapore asia-southeast2 Jakarta australia-southeast1 Sydney australia-southeast2 Melbourne India asia-south1 Mumbai asia-south2 Delhi Querétaro (northamerica-south1), Montréal (northamerica-northeast1), and Osaka (asia-northeast2) don't support zone separation.
- Purpose Source Target Port (TCP) Support traffic (support to appliance) SSH CLIENT IP Backup/recovery appliance 26 iSCSI backup (host to appliance) AGENT HOST IP Backup/recovery appliance 3260 StreamSnap traffic (appliance to appliance) SOURCE APPLIANCE IP Backup/recovery appliance 5107 Backup/recovery appliance connectivity to management console APPLIANCE IP .backupdr.googleusercontent.com 443 Replace the following: SSH CLIENT IP: the IP address of the host running the SSH client.
- Components of the backup/recovery appliance architecture The Backup and DR Service architecture is delivered through the following components: Google Cloud console : The Google Cloud console includes the Backup and DR product for central management of your Persistent Disk vaulted backups, backup plans for Compute Engine instances, and enhanced backup for Cloud SQL in those products.

### "Set up and plan a backup/recovery appliance deployment \_|\_ Backup and\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/deployment-plan)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- The appliance management console is deployed in the backup administration project and is highly available within the deployed region, providing resilience against zonal outages.
- Management console supported regions While Backup and DR Service can be used to back up supported workloads in any Google Cloud region, the appliance management console can be activated only in the following regions: Geographic Area Region Name Region Description North America northamerica-northeast1 Montréal Low CO 2 northamerica-northeast2 Toronto Low CO 2 us-central1 Iowa Low CO 2 us-east1 South Carolina us-east4 Northern Virginia us-east5 Columbus us-south1 Dallas Low CO 2 us-west1 Oregon Low CO 2 us-west2 Los Angeles us-west3 Salt Lake City us-west4 Las Vegas northamerica-south1 Querétaro South America southamerica-east1 São Paulo Low CO 2 southamerica-west1 Santiago Low CO 2 Europe europe-central2 Warsaw europe-north1 Finland Low CO 2 europe-north2 Stockholm Low CO 2 europe-southwest1 Madrid Low CO 2 europe-west1 Belgium Low CO 2 europe-west2 London Low CO 2 europe-west3 Frankfurt europe-west4 Netherlands Low CO 2 europe-west6 Zürich Low CO 2 europe-west8 Milan europe-west9 Paris Low CO 2 europe-west10 Berlin europe-west12 Turin Middle East me-central1 Doha me-central2 Dammam me-west1 Israel Africa africa-south1 Johannesburg Asia Pacific asia-east1 Taiwan asia-east2 Hong Kong asia-northeast1 Tokyo asia-northeast2 Osaka asia-northeast3 Seoul asia-southeast1 Singapore asia-southeast2 Jakarta australia-southeast1 Sydney australia-southeast2 Melbourne India asia-south1 Mumbai asia-south2 Delhi Querétaro (northamerica-south1), Montréal (northamerica-northeast1), and Osaka (asia-northeast2) don't support zone separation.
- Purpose Source Target Port (TCP) Support traffic (support to appliance) SSH CLIENT IP Backup/recovery appliance 26 iSCSI backup (host to appliance) AGENT HOST IP Backup/recovery appliance 3260 StreamSnap traffic (appliance to appliance) SOURCE APPLIANCE IP Backup/recovery appliance 5107 Backup/recovery appliance connectivity to management console APPLIANCE IP .backupdr.googleusercontent.com 443 Replace the following: SSH CLIENT IP: the IP address of the host running the SSH client.
- Components of the backup/recovery appliance architecture The Backup and DR Service architecture is delivered through the following components: Google Cloud console : The Google Cloud console includes the Backup and DR product for central management of your Persistent Disk vaulted backups, backup plans for Compute Engine instances, and enhanced backup for Cloud SQL in those products.

