---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.609Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc regional availability in us-south1"
feature_slug: "dataproc-regional-availability-in-us-south1"
latest_feature_date: "2022-06-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/quotas"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/create-service"
keywords:
  - "dataproc"
  - "regional"
  - "availability"
  - "us"
  - "south1"
  - "available"
  - "dallas"
  - "texas"
---

# Dataproc regional availability in us-south1

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc is available in the us-south1 (Dallas, Texas) region.

## Extended Definition

Dataproc is available in the us-south1 (Dallas, Texas) region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/quotas](https://docs.cloud.google.com/dataproc-metastore/docs/quotas)
- [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)

## Supporting Pages

### Quotas and limits \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/quotas](https://docs.cloud.google.com/dataproc-metastore/docs/quotas)
- Source ID: `site-docs-root-2`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- For example, you might have sufficient quota to create a new regional, external IP address in the us-central1 region, but that would not be possible if there were no available external IP addresses in that region.
- Resource availability Each quota represents a maximum number for a particular type of resource that you can create, provided that resource is available.
- Metadata storage for Dataproc Metastore services Item Quotas and limits Notes Metadata storage per Developer tier service 10 GB Metadata storage per Enterprise tier service 1 TB Queries per second for Dataproc Metastore projects Item Quotas and limits Notes Queries per second (QPS) per project 20 QPS Queries per second (QPS) per project per user 5 QPS Maintenance queries per second (QPS) per project 20 QPS The following Hive Metastore requests consume this quota: createTable createDatabase deleteTable deleteDatabase Job timeout limit for Dataproc Metastore Item Quotas and limits Notes Job timeout limit for export/backup/restore 1 hour Job timeout limit for import 3 hours Quotas management Dataproc Metastore enforces quotas on resource usage for a variety of reasons.
- Situations where resources are unavailable in an entire region are rare; however, resources within a zone can be depleted from time to time, typically without impact to the service level agreement (SLA) for the type of resource.

### Disaster recovery for Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- Source ID: `site-docs-root-2`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- Create a Managed Service for Apache Spark cluster In Cloud Shell, create a Managed Service for Apache Spark cluster and attach it to the DPMS instance: gcloud dataproc clusters create ${ HADOOP PRIMARY } \ --dataproc-metastore=projects/ ${ PROJECT } /locations/ ${ DPMS PRIMARY REGION } /services/ ${ DPMS PRIMARY INSTANCE } \ --region= ${ DPMS PRIMARY REGION } \ --image-version=2.0 Specify the cluster image as version 2.0 , which is the latest version available as of June 2021.
- In Cloud Shell, export the metadata from the DPMS instance: gcloud metastore services export gcs $ { DPMS PRIMARY INSTANCE } \ -- location =$ { DPMS PRIMARY REGION } \ -- destination - folder = gs : //$ { BACKUP BUCKET } Retrieve the path of the latest metadata backup: IMPORT DIR=gcloud storage ls gs:// ${ BACKUP BUCKET } sort -k 1 tail -1 IMPORT SQL=" ${ IMPORT DIR } hive.sql" echo ${ IMPORT SQL } Import the metadata into the standby DPMS instance in the original region (region A): gcloud metastore services import gcs $ { DPMS STANDBY INSTANCE } \ -- location = $ { DPMS STANDBY REGION } \ -- dump - type = mysql \ -- database - dump = $ { IMPORT SQL } \ -- import - id = import - $ ( date + "%Y-%m- %d -%H-%M-%S" ) Verify that the metadata was correctly imported: gcloud dataproc jobs submit hive \ --cluster ${ HADOOP STANDBY } \ --region ${ DPMS STANDBY REGION } \ --execute "select from completed orders limit 5;" The output includes the following: +----------------------------+------------------------------+-------------------------------------+--------------------------------+ completed orders.order id completed orders.order date completed orders.order customer id completed orders.order status +----------------------------+------------------------------+-------------------------------------+--------------------------------+ 3 2013-07-25 00:00:00.0 12111 COMPLETE 5 2013-07-25 00:00:00.0 11318 COMPLETE 6 2013-07-25 00:00:00.0 7130 COMPLETE 7 2013-07-25 00:00:00.0 4530 COMPLETE 15 2013-07-25 00:00:00.0 2568 COMPLETE +----------------------------+------------------------------+-------------------------------------+--------------------------------+ The primary Managed Service for Apache Spark Metastore and standby Managed Service for Apache Spark Metastore have swapped roles again.
- Populate the metastore In Cloud Shell, update the sample retail.hql provided in this tutorial's repository with the name of the Hive data bucket: sed -i -- 's/ ${ WAREHOUSE BUCKET } /'" $WAREHOUSE BUCKET "'/g' retail.hql Run the queries contained in the retail.hql file to create the table definitions in the metastore: gcloud dataproc jobs submit hive \ --cluster= ${ HADOOP PRIMARY } \ --region= ${ DPMS PRIMARY REGION } \ --file=retail.hql Verify that the table definitions were correctly created: gcloud dataproc jobs submit hive \ --cluster= ${ HADOOP PRIMARY } \ --region= ${ DPMS PRIMARY REGION } \ --execute=" desc departments; desc categories; desc products; desc order items; desc orders; desc customers; select count( ) as num departments from departments; select count( ) as num categories from categories; select count( ) as num products from products; select count( ) as num order items from order items; select count( ) as num orders from orders; select count( ) as num customers from customers; " The output resembles the following: +------------------+------------+----------+ col name data type comment +------------------+------------+----------+ department id int department name string +------------------+------------+----------+ The output also contains the number of elements in each table—for example: +----------------+ num customers +----------------+ 12435 +----------------+ Failing over to the standby region This section provides the steps to failover from the primary region (region A) to the standby region (region B).
- Update the environment variables based on these new roles: export DPMS PRIMARY REGION = us - east1 export DPMS STANDBY REGION = us - central1 ] export DPMS PRIMARY INSTANCE = dpms2 export DPMS STANDBY INSTANCE = dpms1 export HADOOP PRIMARY = dataproc - cluster2 export HADOOP STANDBY = dataproc - cluster1 Verify that you can write to the new primary Managed Service for Apache Spark Metastore in region B: gcloud dataproc jobs submit hive \ --cluster ${ DPMS PRIMARY INSTANCE } \ --region ${ DPMS PRIMARY REGION } \ --execute "create view completed orders as select from orders where order status = 'COMPLETE';" gcloud dataproc jobs submit hive \ --cluster ${ HADOOP PRIMARY } \ --region ${ DPMS PRIMARY REGION } \ --execute "select from completed orders limit 5;" The output contains the following: +----------------------------+------------------------------+-------------------------------------+--------------------------------+ completed orders.order id completed orders.order date completed orders.order customer id completed orders.order status +----------------------------+------------------------------+-------------------------------------+--------------------------------+ 3 2013-07-25 00:00:00.0 12111 COMPLETE 5 2013-07-25 00:00:00.0 11318 COMPLETE 6 2013-07-25 00:00:00.0 7130 COMPLETE 7 2013-07-25 00:00:00.0 4530 COMPLETE 15 2013-07-25 00:00:00.0 2568 COMPLETE +----------------------------+------------------------------+-------------------------------------+--------------------------------+ The failover is now complete.

### Create a Dataproc Metastore service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- Source ID: `site-docs-root-2`
- Final score: 47
- Re-rank relevance: N/A

Evidence snippets:
- When creating a metastore, the VPC network you are using might run out of available RFC 1918 addresses required by Dataproc Metastore services.
- For more information about selecting the appropriate region, see Available regions and zones and Regional endpoint .
- For more information about selecting the appropriate region, see Available regions and zones and Regional endpoint .
- For more information about selecting the appropriate region, see Available regions and zones and Regional endpoint .

