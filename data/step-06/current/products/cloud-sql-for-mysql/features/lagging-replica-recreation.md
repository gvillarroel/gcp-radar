---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.823Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Lagging replica recreation"
feature_slug: "lagging-replica-recreation"
latest_feature_date: "2025-02-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica"
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups"
keywords:
  - "lagging"
  - "replica"
  - "recreation"
  - "lets"
  - "sql"
  - "for"
  - "mysql"
  - "recreate"
---

# Lagging replica recreation

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Lagging replica recreation lets Cloud SQL for MySQL recreate a replica when replication falls behind a predefined threshold.

## Extended Definition

Lagging replica recreation lets Cloud SQL for MySQL recreate a replica when replication falls behind a predefined threshold.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica)
- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups)

## Supporting Pages

### Create read replicas \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- Create the new replica by specifying your primary replica as the primary instance using the --master-instance-name flag: gcloud sql instances create REPLICA NAME \ --master-instance-name = PARENT REPLICA NAME \ Replace the following: REPLICA NAME : the unique ID for the replica that you are creating PARENT REPLICA NAME : the name of the parent replica After you create the cascading replica, you can see that the changes made to the primary instance are replicated through all the replicas in the cascading replicas chain. curl If you are using MySQL version 5.7 or later, enable binary logging: To enable binary logging, save the following JSON in a file named request.JSON, then invoke the curl command to enable binary logging. { "settings" : { "backupConfiguration" : { "enabled" : false, "binaryLogEnabled" : true } } } To create a replica under the parent replica, edit the following JSON code sample, and save it to a file called request.json : { "masterInstanceName" : " PARENT REPLICA NAME " , "project" : " PROJECT ID " , "name" : " REPLICA NAME " , "region" : " REPLICA REGION " , "settings" : { "tier" : " MACHINE TYPE " , } } Run the following command: curl -X POST -H "Authorization: Bearer " $( gcloud auth print-access-token ) -H "Content-Type: application/json; charset=utf-8" -d @request.json "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances" Troubleshoot Issue Troubleshooting Read replica didn't start replicating on creation.
- Terraform To create a read replica, use Terraform resource . resource "google sql database instance" "read replica" { name = "mysql-replica-instance-name" master instance name = google sql database instance.primary.name region = "europe-west4" database version = "MYSQL 8 0" replica configuration { failover target = false } settings { tier = "db-n1-standard-2" availability type = "ZONAL" disk size = "100" } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Enable binary logging on a replica with the same gcloud CLI command, using the replica's instance name instead of the primary's instance name. gcloud sql instances patch REPLICA INSTANCE NAME \ --enable-bin-log \ --enforce-new-sql-network-architecture Binary logging durability on the replica (but not on the primary) instance can be set with the sync binlog flag, which controls how often the MySQL server synchronizes the binary log to disk.
- Before using any of the request data, make the following replacements: project-id : The project ID database-version : Enum version string (for example, MYSQL 8 0) primary-instance-name : The name of the primary instance primary-instance-region : The region of the primary instance replica-region : The region of the replica instance replica-name : The name of the replica instance machine-type : Enum string of the machine type.

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- February 13, 2025 Feature Cloud SQL for MySQL lets you recreate a lagging replica when replication falls behind a predefined length of time.
- This feature automates read pool scale in and scale out operations based on one or both of the following conditions: Allowed CPU usage of the read pool Allowed number of client connections to the read pool November 13, 2025 Feature Cloud SQL for MySQL now lets you have more control over the number of results that are returned when you perform an ANN vector search with filters.
- Model endpoint management lets you register and manage model endpoints for your MySQL instance, making your interactions with a wider range of ML models seamless.
- You will not be able to create new instances for MySQL 8.0.29, upgrade existing instances to MySQL 8.0.29, or promote an existing MySQL 8.0.29 replica to primary.

### "Cloud SQL backups overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- MySQL PostgreSQL SQL Server Cloud SQL lets you back up your instances on-demand, or automatically using a backup schedule.
- Backup options Cloud SQL offers two backup service options to manage your instance's backups: Enhanced backups : backups are managed and stored in a centralized backup management project that leverages the Backup and DR Service, and provides enforced retention, granular scheduling, and monitoring.
- Relevant log files include: cloudsql.googlapis.com/mysql-general.log cloudsql.googleapis.com/mysql.err If Cloud Audit Logs is enabled and you have the required permissions to view them, cloudaudit.googleapis.com/activity may also be available.
- For standard backups, since instance names can be used after an instance is deleted in Cloud SQL, retained backups are stored in your Google Cloud project with a field called instance deletion time .

