---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.918Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "AlloyDB for PostgreSQL enhanced backups with Backup and DR"
feature_slug: "alloydb-for-postgresql-enhanced-backups-with-backup-and-dr"
latest_feature_date: "2025-10-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/alloydb-quickstart"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-postgresql"
keywords:
  - "alloydb"
  - "postgresql"
  - "entered"
  - "public"
  - "enhanced"
  - "backups"
---

# AlloyDB for PostgreSQL enhanced backups with Backup and DR

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

AlloyDB for PostgreSQL enhanced backups entered public preview with Backup and DR, including backup vault support, backup plans, and centralized management.

## Extended Definition

AlloyDB for PostgreSQL enhanced backups entered public preview with Backup and DR, including backup vault support, backup plans, and centralized management.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/alloydb-quickstart](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/alloydb-quickstart)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-postgresql](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-postgresql)

## Supporting Pages

### "Backup vault for immutable and indelible backups \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- What's next Create and manage a backup vault in the Google Cloud console Manage data sources in the Google Cloud console Manage backups in the Google Cloud console Create and manage a backup vault in the Google Cloud console Back up Compute Engine instances to a backup vault Back up Cloud SQL instances to a backup vault Back up AlloyDB clusters to a backup vault Back up Filestore instances to a backup vault Back up disks to a backup vault Manage data sources in the Google Cloud console Manage backups in the Google Cloud console Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following regions are supported for cross-region backups as well ( Preview ): Geographic Area Region Name Region Description North America northamerica-northeast1 Montréal Low CO 2 northamerica-northeast2 Toronto Low CO 2 us-central1 Iowa Low CO 2 us-east1 South Carolina us-east4 Northern Virginia us-east5 Columbus us-south1 Dallas Low CO 2 us-west1 Oregon Low CO 2 us-west2 Los Angeles us-west3 Salt Lake City us-west4 Las Vegas northamerica-south1 Querétaro South America southamerica-east1 São Paulo Low CO 2 southamerica-west1 Santiago Low CO 2 Europe europe-central2 Warsaw europe-north1 Finland Low CO 2 europe-north2 Stockholm Low CO 2 europe-southwest1 Madrid Low CO 2 europe-west1 Belgium Low CO 2 europe-west2 London Low CO 2 europe-west3 Frankfurt europe-west4 Netherlands Low CO 2 europe-west6 Zürich Low CO 2 europe-west8 Milan europe-west9 Paris Low CO 2 europe-west10 Berlin europe-west12 Turin Middle East me-central1 Doha me-central2 Dammam me-west1 Israel Africa africa-south1 Johannesburg Asia Pacific asia-east1 Taiwan asia-east2 Hong Kong asia-northeast1 Tokyo asia-northeast2 Osaka asia-northeast3 Seoul asia-southeast1 Singapore asia-southeast2 Jakarta australia-southeast1 Sydney australia-southeast2 Melbourne India asia-south1 Mumbai asia-south2 Delhi Querétaro (northamerica-south1), Montréal (northamerica-northeast1), and Osaka (asia-northeast2) don't support zone separation.
- Supported backup vault regions Compute Engine instance No All supported locations including multi-region and cross-region Compute Engine disk No All supported locations including multi-region (and cross-region ( Preview )) Cloud SQL instance Yes All supported regions including multi-region AlloyDB cluster Yes Not multi-regions Filestore instance Yes Not multi-regions Google Cloud VMware Engine, Oracle database, and SQL Server database No Not multi-regions If a workload supports use of multi-region backup vaults, the source workload location must be compatible with the multi-region backup vault location.
- Workload Managed by Compute Engine instance Google Cloud console Compute Engine disk Google Cloud console Filestore instance (invitation only) Google Cloud console Cloud SQL instance Google Cloud console AlloyDB cluster Google Cloud console Google Cloud VMware Engine, Oracle database, and SQL Server database appliance management console Note: AlloyDB clusters and Filestore instances in backup vaults are not supported for multi-regions.

### Backup and DR Service for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-postgresql](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-postgresql)
- Source ID: `site-api-reference`
- Final score: 92
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- What's next Prepare the database for Backup and DR Other documentation for Backup and DR for PostgreSQL Backup and DR for PostgreSQL Prepare the database for Backup and DR Add a PostgreSQL database host and discover databases Define policy templates and resource profiles Set application details and settings Check staging disk format and backup method Protect the PostgreSQL database and its logs Mount a PostgreSQL database Recover PostgreSQL Backups Create a PostgreSQL Backup and DR Workflow Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- PostgreSQL backup API used by Backup and DR Volume level (Linux change block tracking and LVM snapshot) backups : Backup and DR uses the PostgreSQL pg start backup(label) and pg stop backup() commands when performing backups with Linux change block tracking and LVM snapshot.
- Full+Incremental (file-based traditional) backups : Backup and DR uses the PostgreSQL pg dump file-based backups commands.
- The quiesce or unquiesce command is run on the primary for a volume-level snapshot job: select pg start backup ( <label> ) ; select pg stop backup () ; The quiesce and unquiesce commands are run on a standby node for a volume-level snapshot job: If PostgreSQL version is 10.x or later: select pg wal replay pause () ; select pg wal replay resume () ; If PostgreSQL version is 9.x: select pg xlog replay pause () ; select pg xlog replay resume () ; How it works: file-based backup The following steps describe the process for how to perform data backup and recovery with file-based backup images: Backup and DR agent is deployed in the database server.

### "Protect and recover an AlloyDB cluster to a backup vault \_|\_ Backup and\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/alloydb-quickstart](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/alloydb-quickstart)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Storage Backup and DR Guides Send feedback Protect and recover an AlloyDB cluster to a backup vault Stay organized with collections Save and categorize content based on your preferences.
- The next page shows the restore details so far, and prompts you to Configure a new cluster : This creates a new AlloyDB cluster based on the configuration stored in your backup.
- Go to Vaulted backups The Vaulted backups page lists only the data resources that have backup plans applied and their backups stored in a backup vault within that project.
- For AlloyDB clusters, the service agent performs actions on behalf of the Backup and DR Service, so it needs appropriate permissions on the projects it needs to access.

