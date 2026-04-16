---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.978Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Parallel replication"
feature_slug: "parallel-replication"
latest_feature_date: "2020-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica"
  - "https://docs.cloud.google.com/sql/docs/mysql/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/mysql/pricing"
keywords:
  - "parallel"
  - "replication"
  - "sql"
  - "mysql"
  - "offers"
  - "generally"
  - "available"
  - "improve"
---

# Parallel replication

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL for MySQL offers generally available parallel replication to improve replication performance.

## Extended Definition

Cloud SQL for MySQL offers generally available parallel replication to improve replication performance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica)
- [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing)

## Supporting Pages

### Troubleshoot \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- On the primary instance that's displaying the error message, set the parallel replication flags: Modify the binlog transaction dependency tracking and transaction write set extraction flags: binlog transaction dependency tracking=COMMIT ORDER transaction write set extraction=OFF Add the slave pending jobs size max flag: slave pending jobs size max=33554432 Modify the transaction write set extraction flag: transaction write set extraction=XXHASH64 Modify the binlog transaction dependency tracking flag: binlog transaction dependency tracking=WRITESET Replica creation fails with timeout.
- MySQL PostgreSQL SQL Server Check if your question or problem has already been addressed on one of the following pages: FAQ Known issues Error messages Diagnose issues Debug connection issues Orphan tables Issues updating storage capacity Topics in this page include: Backup and recovery Cancel import and export Cloning Connectivity Creating instances External primary External replica Flags High availability Import and export Logging Managing instances Private Service Connect Replication Backup and recovery Issue Troubleshooting You can't see the current operation's status.
- To avoid a long transaction, some possible solutions include: Break the transaction into multiple small transactions Chunk a single large write query into smaller batches Try to separate long SELECT queries from a transaction mixed with DMLs Changing parallel replication flags results in an error.
- Relevant log files include: cloudsql.googlapis.com/mysql-general.log cloudsql.googleapis.com/mysql.err If Cloud Audit Logs is enabled and you have the required permissions to view them, cloudaudit.googleapis.com/activity may also be available.

### Create read replicas \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Note: For information about using parallel replication for performance improvements, see Configuring parallel replication .
- HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "masterInstanceName": " PRIMARY INSTANCE NAME ", "project": " PROJECT ID ", "databaseVersion": "MYSQL 8 0", "name": " REPLICA INSTANCE NAME ", "region": " REGION NAME ", "kind": "sql#instance", "settings": { "tier": " MACHINE TYPE ", "availabilityType": " AVAILABILITY TYPE ", "settingsVersion": 0, "ipConfiguration": { "ipv4Enabled": false, "pscConfig": { "allowedConsumerProjects": [ ALLOWED PROJECTS ], "pscEnabled": true } }, "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "ASYNCHRONOUS", "tier": " MACHINE TYPE " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "masterInstanceName": " PRIMARY INSTANCE NAME ", "project": " PROJECT ID ", "databaseVersion": "MYSQL 8 0", "name": " REPLICA INSTANCE NAME ", "region": " REGION NAME ", "kind": "sql#instance", "settings": { "tier": " MACHINE TYPE ", "availabilityType": " AVAILABILITY TYPE ", "settingsVersion": 0, "ipConfiguration": { "ipv4Enabled": false, "pscConfig": { "allowedConsumerProjects": [ ALLOWED PROJECTS ], "pscEnabled": true } }, "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "ASYNCHRONOUS", "tier": " MACHINE TYPE " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- On the primary instance that's displaying the error message, set the parallel replication flags: Modify the binlog transaction dependency tracking and transaction write set extraction flags: binlog transaction dependency tracking=COMMIT ORDER transaction write set extraction=OFF Add the slave pending jobs size max flag: slave pending jobs size max=33554432 Modify the transaction write set extraction flag: transaction write set extraction=XXHASH64 Modify the binlog transaction dependency tracking flag: binlog transaction dependency tracking=WRITESET Replica creation fails with timeout.

### Cloud SQL pricing | Google Cloud

- URL: [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Pricing for Cloud SQL depends on your instance type: MySQL and PostgreSQL SQL Server MySQL and PostgreSQL pricing Cloud SQL pricing is composed of the following charges: CPU and memory pricing Storage and networking pricing Instance pricing Cloud DNS pricing Extended support pricing CPU and memory pricing For dedicated-core instances, you choose the number of CPUs and the amount of memory you want, up to 96 CPUs and 624 GiB of memory for Enterprise edition and up to 128 CPUs and 864 GiB of memory for Enterprise Plus edition.
- Blockchain RPC Enterprise-grade RPC for building on the blockchain. close Save money with our transparent approach to pricing Google Cloud's pay-as-you-go pricing offers automatic savings based on monthly usage and discounted rates for prepaid resources.
- Cloud SQL also offers committed use discounts (CUDs) that provide deeply discounted prices in exchange for your commitment to continuously use database instances in a particular region for a one- or three-year term.
- Cloud SQL also offers committed use discounts (CUDs) that provide deeply discounted prices in exchange for your commitment to continuously use database instances in a particular region for a one- or three-year term.

