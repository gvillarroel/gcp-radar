---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.107Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Underprovisioned instance recommender"
feature_slug: "underprovisioned-instance-recommender"
latest_feature_date: "2025-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/monitor-health-clusters-instances"
  - "https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration"
  - "https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale"
keywords:
  - "underprovisioned"
  - "need"
  - "recommender"
  - "identify"
  - "instances"
  - "instance"
  - "helps"
---

# Underprovisioned instance recommender

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

The Underprovisioned instance recommender helps identify AlloyDB instances that need more capacity.

## Extended Definition

The Underprovisioned instance recommender helps identify AlloyDB instances that need more capacity.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/monitor-health-clusters-instances](https://docs.cloud.google.com/alloydb/docs/monitor-health-clusters-instances)
- [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)
- [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale)

## Supporting Pages

### "Monitor the health of your clusters and instances \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/monitor-health-clusters-instances](https://docs.cloud.google.com/alloydb/docs/monitor-health-clusters-instances)
- Source ID: `site-docs-reference-2`
- Final score: 121
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before you begin To monitor AlloyDB health issues in the Google Cloud console, you must have the following (Identity and Access Management (IAM)) roles: AlloyDB Administrator ( roles/alloydb.admin ) alloydb.instances.list alloydb.clusters.get Monitoring Viewer ( roles/monitoring.viewer ) monitoring.timeSeries.list Note: This role is required to view insight charts in the Clusters page, but it isn't required to view Database Center health issues.
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Monitor the health of your clusters and instances Stay organized with collections Save and categorize content based on your preferences.
- Filter the cluster list by issue The Issues column in the AlloyDB cluster list displays the highest priority issue affecting that cluster or any of its primary and read pool instances.
- You can use this information to monitor and improve the health of your AlloyDB for PostgreSQL clusters and instances.

### "Manage your AlloyDB resources using Knowledge Catalog \_|\_ AlloyDB for\

- URL: [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)
- Source ID: `site-iam-reference`
- Final score: 111
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Knowledge Catalog automatically retrieves the following metadata from AlloyDB clusters, instances, databases, tables, columns, and views: Name Location (Region) Labels (for clusters and instances) Dataplex Integration Enabled (for clusters) Database Version Machine CPU Count (for instances) Availability Type (for instances) Charset (for databases) Collation (for databases) Owner Description (for table, views, columns, and foreign keys) Type (for clusters, instances, and machines) Columns Data Type Mode Primary Key Foreign Keys Referenced Table Column Mappings Creation Time Last modification Time Note: Knowledge Catalog refers to resources in AlloyDB and in other Google Cloud services as assets .
- The format of the query string is as follows: type = "projects/dataplex-types/locations/global/entryTypes/ QUERY STRING " Replace the following: QUERY STRING : use the following list to identify a query string based on the type of AlloyDB asset that you want to query: alloydb-database alloydb-cluster alloydb-instance alloydb-table alloydb-schema alloydb-view An example query might look like the following: type="projects/1234567890/locations/global/entryTypes/alloydb-cluster" Search by aspect type Knowledge Catalog includes a few built-in aspect types that help you perform searches.
- Knowledge Catalog operation AlloyDB resource Roles or permissions required Search for AlloyDB resources Cluster alloydb.clusters.get Columns alloydb.databases.get Instance alloydb.instances.get Database alloydb.databases.get Tables alloydb.databases.get Views alloydb.databases.get Caution: If you grant the roles/alloydb.viewer role at the project level, principals with this role can view the metadata for all AlloyDB instances in the project.
- Because AlloyDB syncs in near real-time to Knowledge Catalog, the following resources are available: Clusters Columns Databases Instances Tables Views After discovery is complete, search for these assets— customers table and active users —in the Knowledge Catalog page of the Google Cloud console or by using the API.

### Scale an instance \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale](https://docs.cloud.google.com/alloydb/docs/instance-read-pool-scale)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- Create a read pool instance with a schedule-based policy To create a read pool instance with a schedule-based automatic scaling policy that defines a minimum number of nodes for a specific time window, run the following command: Note: If you have an existing autoscaling policy that has --autoscaler-max-node-count set , then this becomes an optional field. gcloud beta alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --read-pool-node-count = NODE COUNT \ --region = REGION ID \ --cluster = CLUSTER ID \ --project = PROJECT ID \ --enable-autoscaler \ --autoscaler-max-node-count = MAX NODE COUNT \ --autoscaler-set-schedule = SCHEDULE NAME \ --autoscaler-schedule-cron-exp = CRON EXPRESSION \ --autoscaler-schedule-duration-seconds = DURATION SECONDS \ --autoscaler-schedule-time-zone = TIME ZONE \ --autoscaler-schedule-min-node-count = MIN NODE COUNT \ --autoscaler-schedule-description = " DESCRIPTION " { --cpu-count = CPU COUNT --machine-type = MACHINE TYPE } Replace the following: MAX NODE COUNT : the maximum number of nodes that the autoscaler can create in the read pool instance.
- Create a read pool instance with CPU and schedule-based policies To create a read pool instance with both CPU-based and schedule-based automatic scaling policies, run the following command: gcloud beta alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --read-pool-node-count = NODE COUNT \ --region = REGION ID \ --cluster = CLUSTER ID \ --project = PROJECT ID \ --enable-autoscaler \ --autoscaler-max-node-count = MAX NODE COUNT \ --autoscaler-target-cpu-usage = TARGET CPU USAGE \ --autoscaler-set-schedule = SCHEDULE NAME \ --autoscaler-schedule-cron-exp = CRON EXPRESSION \ --autoscaler-schedule-duration-seconds = DURATION SECONDS \ --autoscaler-schedule-time-zone = TIME ZONE \ --autoscaler-schedule-min-node-count = MIN NODE COUNT \ --autoscaler-schedule-description = " DESCRIPTION " { --cpu-count = CPU COUNT --machine-type = MACHINE TYPE } Replace TARGET CPU USAGE with the target CPU utilization for your read pool instance, expressed as a decimal value between 0.0 and 1.0.
- Create a read pool instance with a CPU-based policy To create a read pool instance with an automatic scaling policy based on a target CPU utilization, run the following command: gcloud beta alloydb instances create INSTANCE ID \ --instance-type = READ POOL \ --read-pool-node-count = NODE COUNT \ --region = REGION ID \ --cluster = CLUSTER ID \ --project = PROJECT ID \ --enable-autoscaler \ --autoscaler-max-node-count = MAX NODE COUNT \ --autoscaler-target-cpu-usage = TARGET CPU USAGE \ { --cpu-count = CPU COUNT --machine-type = MACHINE TYPE } Replace the following: INSTANCE ID : the ID of the read pool instance.
- Otherwise, it creates a new schedule. gcloud beta alloydb instances update INSTANCE ID \ --region = REGION ID \ --cluster = CLUSTER ID \ --project = PROJECT ID \ --autoscaler-set-schedule = NEW SCHEDULE NAME \ --autoscaler-schedule-cron-exp = CRON EXPRESSION \ --autoscaler-schedule-duration-seconds = DURATION SECONDS \ --autoscaler-schedule-min-node-count = MIN NODE COUNT Replace NEW SCHEDULE NAME with the unique name for the new or updated scaling schedule.

