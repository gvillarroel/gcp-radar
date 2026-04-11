---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.017Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dynamic multi-tenant cluster updates"
feature_slug: "dynamic-multi-tenant-cluster-updates"
latest_feature_date: "2025-07-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore"
keywords:
  - "dynamic"
  - "multi"
  - "tenant"
  - "cluster"
  - "updates"
  - "dataproc"
  - "supports"
  - "for"
---

# Dynamic multi-tenant cluster updates

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc supports dynamic updates for multi-tenant clusters.

## Extended Definition

Dataproc supports dynamic updates for multi-tenant clusters.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- October 03, 2025 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.150-debian10, 2.0.150-ubuntu18, 2.0.150-rocky8 2.1.99-debian11, 2.1.99-ubuntu20, 2.1.99-ubuntu20-arm, 2.1.99-rocky8 2.2.67-debian12, 2.2.67-ubuntu22, 2.2.67-ubuntu22-arm, 2.2.67-rocky9 2.3.14-debian12, 2.3.14-ubuntu22, 2.3.14-ubuntu22-arm, 2.3.14-ml-ubuntu22, 2.3.14-rocky9 September 15, 2025 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.149-debian10, 2.0.149-ubuntu18, 2.0.149-rocky8 2.1.98-debian11, 2.1.98-ubuntu20, 2.1.98-ubuntu20-arm, 2.1.98-rocky8 2.2.66-debian12, 2.2.66-ubuntu22, 2.2.66-ubuntu22-arm, 2.2.66-rocky9 2.3.13-debian12, 2.3.13-ubuntu22, 2.3.13-ubuntu22-arm, 2.3.13-ml-ubuntu22, 2.3.13-rocky9 September 11, 2025 Announcement New Serverless for Apache Spark runtime versions : 1.2.61 2.2.61 2.3.12 3.0.0-RC4 September 08, 2025 Announcement Announcing the Preview release of Dataproc on Compute Engine image version 3.0.0-RC1 : Spark 4.0.0 Hadoop 3.4.1 Hive 4.1.0 Tez 0.10.5 Cloud Storage Connector 3.1.4 Conda 24.11 Java 17 Python 3.11 R 4.3 Scala 2.13 Announcement Announcing the Preview release of Serverless for Apache Spark 3.0.0-RC3 runtime : Spark 4.0.0 BigQuery Spark Connector 0.42.3 Cloud Storage Connector 3.1.5 Conda 25.3.0 Java 21 Python 3.12 R 4.4 Scala 2.13 Announcement New Dataproc on Compute Engine subminor image versions : 2.3.11-debian12, 2.3.11-ubuntu22, 2.3.11-ubuntu22-arm, 2.3.11-ml-ubuntu22, 2.3.11-rocky9 September 05, 2025 Announcement New Dataproc Serverless for Spark runtime versions: 1.2.60 2.2.60 2.3.11 September 02, 2025 Feature Multi-tenant clusters are now available in Preview.
- January 27, 2016 Fixed Fixed two issues which would sometimes cause virtual machines to remain active after a cluster deletion request was submitted The Spark maxExecutors setting is now set to 10000 to avoid the AppMaster failing on jobs with many tasks Improved handling for aggressive job submission by making several changes to the Cloud Dataproc agent, including: Limiting the number of concurrent jobs so they are proportional to the memory of the master node Checking free memory before scheduling new jobs Rate limiting how many jobs can be scheduled per cycle Improved how HDFS capacity is calculated before commissioning or decommissioning nodes to prevent excessively long updates Feature Two new options have been added to the Cloud Dataproc gcloud command-line tool for adding tags and metadata to virtual machines used in Cloud Dataproc clusters.
- Change Dataproc Serverless for Spark now uses runtime version 1.0.15 , which upgrades the following Spark dependencies to the following versions: Jackson 2.13.3 Jetty 9.4.46.v20220331 ORC 1.7.4 Parquet 1.12.3 Protobuf 3.19.4 RoaringBitmap 0.9.28 Breaking FallbackHiveAuthorizerFactory is now set by default on newly created 1.5 and 2.0 image clusters that have the any of the following features enabled: Kerberos security Personal Cluster Authentication Secure Multi-Tenancy If you encounter a Cannot modify <PARAM> or similar runtime error when running a SET statement in a Hive query, this means the parameter is not in list of allowable runtime parameters.
- October 14, 2025 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.151-debian10, 2.0.151-ubuntu18, 2.0.151-rocky8 2.1.100-debian11, 2.1.100-ubuntu20, 2.1.100-ubuntu20-arm, 2.1.100-rocky8 2.2.68-debian12, 2.2.68-ubuntu22, 2.2.68-ubuntu22-arm, 2.2.68-rocky9 2.3.15-debian12, 2.3.15-ubuntu22, 2.3.15-ubuntu22-arm, 2.3.15-ml-ubuntu22, 2.3.15-rocky9 Fixed Fixed startup race condition in multi-tenant clusters using the dataproc:pip.packages property that could cause authentication failures while starting Jupyter notebook kernels.

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets ).
- If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- The Dataproc service account (also see VM Data Plane identity ) used by Dataproc cluster VM instances to access Google Cloud Platform services.

### Disaster recovery for Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- Source ID: `site-docs-root-2`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- In Cloud Shell, export the metadata from the DPMS instance: gcloud metastore services export gcs $ { DPMS PRIMARY INSTANCE } \ -- location =$ { DPMS PRIMARY REGION } \ -- destination - folder = gs : //$ { BACKUP BUCKET } Retrieve the path of the latest metadata backup: IMPORT DIR=gcloud storage ls gs:// ${ BACKUP BUCKET } sort -k 1 tail -1 IMPORT SQL=" ${ IMPORT DIR } hive.sql" echo ${ IMPORT SQL } Import the metadata into the standby DPMS instance in the original region (region A): gcloud metastore services import gcs $ { DPMS STANDBY INSTANCE } \ -- location = $ { DPMS STANDBY REGION } \ -- dump - type = mysql \ -- database - dump = $ { IMPORT SQL } \ -- import - id = import - $ ( date + "%Y-%m- %d -%H-%M-%S" ) Verify that the metadata was correctly imported: gcloud dataproc jobs submit hive \ --cluster ${ HADOOP STANDBY } \ --region ${ DPMS STANDBY REGION } \ --execute "select from completed orders limit 5;" The output includes the following: +----------------------------+------------------------------+-------------------------------------+--------------------------------+ completed orders.order id completed orders.order date completed orders.order customer id completed orders.order status +----------------------------+------------------------------+-------------------------------------+--------------------------------+ 3 2013-07-25 00:00:00.0 12111 COMPLETE 5 2013-07-25 00:00:00.0 11318 COMPLETE 6 2013-07-25 00:00:00.0 7130 COMPLETE 7 2013-07-25 00:00:00.0 4530 COMPLETE 15 2013-07-25 00:00:00.0 2568 COMPLETE +----------------------------+------------------------------+-------------------------------------+--------------------------------+ The primary Managed Service for Apache Spark Metastore and standby Managed Service for Apache Spark Metastore have swapped roles again.
- Populate the metastore In Cloud Shell, update the sample retail.hql provided in this tutorial's repository with the name of the Hive data bucket: sed -i -- 's/ ${ WAREHOUSE BUCKET } /'" $WAREHOUSE BUCKET "'/g' retail.hql Run the queries contained in the retail.hql file to create the table definitions in the metastore: gcloud dataproc jobs submit hive \ --cluster= ${ HADOOP PRIMARY } \ --region= ${ DPMS PRIMARY REGION } \ --file=retail.hql Verify that the table definitions were correctly created: gcloud dataproc jobs submit hive \ --cluster= ${ HADOOP PRIMARY } \ --region= ${ DPMS PRIMARY REGION } \ --execute=" desc departments; desc categories; desc products; desc order items; desc orders; desc customers; select count( ) as num departments from departments; select count( ) as num categories from categories; select count( ) as num products from products; select count( ) as num order items from order items; select count( ) as num orders from orders; select count( ) as num customers from customers; " The output resembles the following: +------------------+------------+----------+ col name data type comment +------------------+------------+----------+ department id int department name string +------------------+------------+----------+ The output also contains the number of elements in each table—for example: +----------------+ num customers +----------------+ 12435 +----------------+ Failing over to the standby region This section provides the steps to failover from the primary region (region A) to the standby region (region B).
- Update the environment variables based on these new roles: export DPMS PRIMARY REGION = us - east1 export DPMS STANDBY REGION = us - central1 ] export DPMS PRIMARY INSTANCE = dpms2 export DPMS STANDBY INSTANCE = dpms1 export HADOOP PRIMARY = dataproc - cluster2 export HADOOP STANDBY = dataproc - cluster1 Verify that you can write to the new primary Managed Service for Apache Spark Metastore in region B: gcloud dataproc jobs submit hive \ --cluster ${ DPMS PRIMARY INSTANCE } \ --region ${ DPMS PRIMARY REGION } \ --execute "create view completed orders as select from orders where order status = 'COMPLETE';" gcloud dataproc jobs submit hive \ --cluster ${ HADOOP PRIMARY } \ --region ${ DPMS PRIMARY REGION } \ --execute "select from completed orders limit 5;" The output contains the following: +----------------------------+------------------------------+-------------------------------------+--------------------------------+ completed orders.order id completed orders.order date completed orders.order customer id completed orders.order status +----------------------------+------------------------------+-------------------------------------+--------------------------------+ 3 2013-07-25 00:00:00.0 12111 COMPLETE 5 2013-07-25 00:00:00.0 11318 COMPLETE 6 2013-07-25 00:00:00.0 7130 COMPLETE 7 2013-07-25 00:00:00.0 4530 COMPLETE 15 2013-07-25 00:00:00.0 2568 COMPLETE +----------------------------+------------------------------+-------------------------------------+--------------------------------+ The failover is now complete.
- Create a new DPMS instance in the standby region: gcloud metastore services create ${ DPMS STANDBY INSTANCE } \ --location= ${ DPMS STANDBY REGION } \ --hive-metastore-version=3.1.2 Set the Hive data bucket as the default warehouse directory: gcloud metastore services update ${ DPMS STANDBY INSTANCE } \ --location= ${ DPMS STANDBY REGION } \ --update-hive-metastore-configs="hive.metastore.warehouse.dir=gs:// ${ PROJECT } -warehouse" Retrieve the path of the latest metadata backup: IMPORT DIR=gcloud storage ls gs:// ${ BACKUP BUCKET } sort -k 1 tail -1 IMPORT SQL=" ${ IMPORT DIR } hive.sql" echo ${ IMPORT SQL } Import the backed-up metadata into the new Managed Service for Apache Spark Metastore instance: gcloud metastore services import gcs $ { DPMS STANDBY INSTANCE } \ -- location = $ { DPMS STANDBY REGION } \ -- dump - type = mysql \ -- database - dump = $ { IMPORT SQL } \ -- import - id = import - $ ( date + "%Y-%m- %d -%H-%M-%S" ) Create a Managed Service for Apache Spark cluster in the standby region (region B): gcloud dataproc clusters create ${ HADOOP STANDBY } \ --dataproc-metastore=projects/ ${ PROJECT } /locations/ ${ DPMS STANDBY REGION } /services/ ${ DPMS STANDBY INSTANCE } \ --region= ${ DPMS STANDBY REGION } \ --image-version=2.0 Verify that the metadata was correctly imported: gcloud dataproc jobs submit hive \ --cluster ${ HADOOP STANDBY } \ --region ${ DPMS STANDBY REGION } \ --execute "select count( ) as num orders from orders;" The num orders output is most important to the tutorial.

