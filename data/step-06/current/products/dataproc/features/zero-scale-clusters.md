---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.018Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Zero-scale clusters"
feature_slug: "zero-scale-clusters"
latest_feature_date: "2025-05-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore"
keywords:
  - "zero"
  - "scale"
  - "clusters"
  - "dataproc"
  - "supports"
  - "that"
  - "use"
  - "only"
---

# Zero-scale clusters

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc supports zero-scale clusters that use only secondary workers and can scale down to zero when idle.

## Extended Definition

Dataproc supports zero-scale clusters that use only secondary workers and can scale down to zero when idle.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- This feature provides a cost-effective way to use Dataproc clusters, as they utilize only secondary workers that can be scaled down to zero when not in use.
- Fixed Forced distcp settings to match mapred-site.xml settings to provide additional fixes for the distcp command (see this related JIRA ) Ensured that workers created during an update do not join the cluster until after custom initialization actions are complete Ensured that workers always disconnect from a cluster when the Cloud Dataproc agent is shutdown Fixed a race condition in the API frontend that occurred when validating a request and marking cluster as updating Enhanced validation checks for quota, Cloud Dataproc image, and initialization actions when updating clusters Improved handling of jobs when the Cloud Dataproc agent is restarted GCP Console Allowed duplicate arguments when submitting a job Replaced generic Failed to load message with details about the cause of an error when an error occurs that is not related to Cloud Dataproc When a single jar file for a job is submitted, allowed it to be listed only in the Main class or jar field on the Submit a Job form, and no longer required it to also be listed in the Jar files field November 18, 2015 Change Core service improvements If set, a project's default zone setting is now used as the default value for the zone in the create-cluster form in the GCP Console.
- January 05, 2024 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.44 2.0.52 2.1.31 2.2.0-RC4 January 04, 2024 Announcement The following previously released sub-minor versions of Dataproc images have been rolled back and can only be used when updating existing clusters that already use them: 2.0.88-debian10, 2.0.88-rocky8, 2.0.88-ubuntu18 2.1.36-debian11, 2.1.36-rocky8, 2.1.36-ubuntu20, 2.1.36-ubuntu20-arm 2.2.2-debian12, 2.2.2-rocky9, 2.2.2-ubuntu22 January 02, 2024 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.88-debian10, 2.0.88-rocky8, 2.0.88-ubuntu18 2.1.36-debian11, 2.1.36-rocky8, 2.1.36-ubuntu20, 2.1.36-ubuntu20-arm 2.2.2-debian12, 2.2.2-rocky9, 2.2.2-ubuntu22 Rollback Notice : See the January 4, 2024 release note rollback notice.
- April 04, 2024 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.57 1.2.1 2.0.65 2.1.44 2.2.1 Change Added bigframes Python package by default in the Dataproc Serverless for Spark runtime versions 1.2 and 2.2 April 02, 2024 Announcement The following previously released sub-minor versions of Dataproc on Compute Engine images have been rolled back and can only be used when updating existing clusters that already use them: 2.0.97-debian10, 2.0.97-rocky8, 2.0.97-ubuntu18 2.1.45-debian11, 2.1.45-rocky8, 2.1.45-ubuntu20, 2.1.45-ubuntu20-arm 2.2.11-debian12, 2.2.11-rocky9, 2.2.11-ubuntu22 March 29, 2024 Breaking Dataproc Serverless for Spark: runtime version 2.2 will become the default Dataproc Serverless for Spark runtime version on May 3, 2024.

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- The config specifies the type of identity (service account or user) that com. google. cloud. dataproc. v1.
- The config specifies the type of identity (service account or user) that com. google. cloud. dataproc. v1.
- Autoscaling policies in use by one or more clusters will not be deleted. com. google. cloud. dataproc. v1.
- Autoscaling policies in use by one or more clusters will not be deleted. com. google. cloud. dataproc. v1.

### Disaster recovery for Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- Source ID: `site-docs-root-2`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Create a new DPMS instance in the standby region: gcloud metastore services create ${ DPMS STANDBY INSTANCE } \ --location= ${ DPMS STANDBY REGION } \ --hive-metastore-version=3.1.2 Set the Hive data bucket as the default warehouse directory: gcloud metastore services update ${ DPMS STANDBY INSTANCE } \ --location= ${ DPMS STANDBY REGION } \ --update-hive-metastore-configs="hive.metastore.warehouse.dir=gs:// ${ PROJECT } -warehouse" Retrieve the path of the latest metadata backup: IMPORT DIR=gcloud storage ls gs:// ${ BACKUP BUCKET } sort -k 1 tail -1 IMPORT SQL=" ${ IMPORT DIR } hive.sql" echo ${ IMPORT SQL } Import the backed-up metadata into the new Managed Service for Apache Spark Metastore instance: gcloud metastore services import gcs $ { DPMS STANDBY INSTANCE } \ -- location = $ { DPMS STANDBY REGION } \ -- dump - type = mysql \ -- database - dump = $ { IMPORT SQL } \ -- import - id = import - $ ( date + "%Y-%m- %d -%H-%M-%S" ) Create a Managed Service for Apache Spark cluster in the standby region (region B): gcloud dataproc clusters create ${ HADOOP STANDBY } \ --dataproc-metastore=projects/ ${ PROJECT } /locations/ ${ DPMS STANDBY REGION } /services/ ${ DPMS STANDBY INSTANCE } \ --region= ${ DPMS STANDBY REGION } \ --image-version=2.0 Verify that the metadata was correctly imported: gcloud dataproc jobs submit hive \ --cluster ${ HADOOP STANDBY } \ --region ${ DPMS STANDBY REGION } \ --execute "select count( ) as num orders from orders;" The num orders output is most important to the tutorial.
- Populate the metastore In Cloud Shell, update the sample retail.hql provided in this tutorial's repository with the name of the Hive data bucket: sed -i -- 's/ ${ WAREHOUSE BUCKET } /'" $WAREHOUSE BUCKET "'/g' retail.hql Run the queries contained in the retail.hql file to create the table definitions in the metastore: gcloud dataproc jobs submit hive \ --cluster= ${ HADOOP PRIMARY } \ --region= ${ DPMS PRIMARY REGION } \ --file=retail.hql Verify that the table definitions were correctly created: gcloud dataproc jobs submit hive \ --cluster= ${ HADOOP PRIMARY } \ --region= ${ DPMS PRIMARY REGION } \ --execute=" desc departments; desc categories; desc products; desc order items; desc orders; desc customers; select count( ) as num departments from departments; select count( ) as num categories from categories; select count( ) as num products from products; select count( ) as num order items from order items; select count( ) as num orders from orders; select count( ) as num customers from customers; " The output resembles the following: +------------------+------------+----------+ col name data type comment +------------------+------------+----------+ department id int department name string +------------------+------------+----------+ The output also contains the number of elements in each table—for example: +----------------+ num customers +----------------+ 12435 +----------------+ Failing over to the standby region This section provides the steps to failover from the primary region (region A) to the standby region (region B).
- Create both dual-region buckets such that they use the same regions as the Hadoop clusters that access the data.
- In Cloud Shell, export the metadata from the DPMS instance: gcloud metastore services export gcs $ { DPMS PRIMARY INSTANCE } \ -- location =$ { DPMS PRIMARY REGION } \ -- destination - folder = gs : //$ { BACKUP BUCKET } Retrieve the path of the latest metadata backup: IMPORT DIR=gcloud storage ls gs:// ${ BACKUP BUCKET } sort -k 1 tail -1 IMPORT SQL=" ${ IMPORT DIR } hive.sql" echo ${ IMPORT SQL } Import the metadata into the standby DPMS instance in the original region (region A): gcloud metastore services import gcs $ { DPMS STANDBY INSTANCE } \ -- location = $ { DPMS STANDBY REGION } \ -- dump - type = mysql \ -- database - dump = $ { IMPORT SQL } \ -- import - id = import - $ ( date + "%Y-%m- %d -%H-%M-%S" ) Verify that the metadata was correctly imported: gcloud dataproc jobs submit hive \ --cluster ${ HADOOP STANDBY } \ --region ${ DPMS STANDBY REGION } \ --execute "select from completed orders limit 5;" The output includes the following: +----------------------------+------------------------------+-------------------------------------+--------------------------------+ completed orders.order id completed orders.order date completed orders.order customer id completed orders.order status +----------------------------+------------------------------+-------------------------------------+--------------------------------+ 3 2013-07-25 00:00:00.0 12111 COMPLETE 5 2013-07-25 00:00:00.0 11318 COMPLETE 6 2013-07-25 00:00:00.0 7130 COMPLETE 7 2013-07-25 00:00:00.0 4530 COMPLETE 15 2013-07-25 00:00:00.0 2568 COMPLETE +----------------------------+------------------------------+-------------------------------------+--------------------------------+ The primary Managed Service for Apache Spark Metastore and standby Managed Service for Apache Spark Metastore have swapped roles again.

