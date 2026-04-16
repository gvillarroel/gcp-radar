---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.703Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Preview image version"
feature_slug: "preview-image-version"
latest_feature_date: "2016-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-best-practices"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-versions"
keywords:
  - "preview"
  - "image"
  - "version"
  - "dataproc"
  - "provides"
  - "newer"
  - "hadoop"
  - "ecosystem"
---

# Preview image version

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

A preview Dataproc image version provides newer Hadoop ecosystem components ahead of the next stable distribution release.

## Extended Definition

A preview Dataproc image version provides newer Hadoop ecosystem components ahead of the next stable distribution release.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-best-practices](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-best-practices)
- [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-versions](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-versions)

## Supporting Pages

### "Managed Service for Apache Spark best practices for production \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-best-practices](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-best-practices)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For production environments, associate your cluster with a specific major.minor Managed Service for Apache Spark image version, as shown in the following gcloud CLI command. gcloud dataproc clusters create CLUSTER NAME \ --region= region \ --image-version=2.0 Dataproc resolves the major.minor version to the latest sub-minor version version ( 2.0 is resolved to 2.0.x ).
- Managed Service for Apache Spark preview image versions New minor versions of Managed Service for Apache Spark images are available in a preview version prior to release in the standard minor image version track.
- Use a preview image to test and validate your jobs against a new minor image version prior to adopting the standard minor image version in production.
- Failed action ... see output in: gs://dataproc-<BUCKETID>-us-central1/google-cloud-dataproc-metainfo/CLUSTERID/<CLUSTER ID>\dataproc-initialization-script-0 output Use the gcloud CLI to view staging bucket contents: gcloud storage cat gs:// STAGING BUCKET Sample output: + readonly RANGER VERSION=1.2.0 ...

### "Managed Service for Apache Spark on GKE release versions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-versions](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-versions)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Component 2.4-dataproc-17 2.4-dataproc-16 2.4-dataproc-15 2.4-dataproc-14 Apache Spark 2.4.8 2.4.8 2.4.8 2.4.8 Hadoop Libraries 2.10.2 2.10.2 2.10.2 2.10.2 Cloud Storage Connector hadoop2-2.1.9 hadoop2-2.1.9 hadoop2-2.1.9 hadoop2-2.1.9 Java 8 8 8 8 Python 3.7.4 3.7.4 3.7.4 3.7.4 Conda 4.7.12 22.11.1 22.11.1 22.1.0 R 3.6.3 3.6.3 3.6.3 3.6.3 Spark version formats on Managed Service for Apache Spark on GKE A fully qualified Spark engine release version is expressed as: 3.1-dataproc-[NUMBER] or 3.5-dataproc-[NUMBER] , for example, 3.1-dataproc-17 or 3.5-dataproc-17 .
- 3.5 - Most recent version of Spark engine with a Spark major.minor version of 3.5. dataproc-2.2 - Most recent version of Spark engine that is compatible with Managed Service for Apache Spark 2.2 images. latest - Most recent version of Spark engine.
- Spark Engine 3.5 Component 3.5-dataproc-22 3.5-dataproc-17 Apache Spark 3.5.0 3.5.0 Hadoop Libraries 3.3.6 3.3.6 Cloud Storage Connector 3.0.0 3.0.0 Java 11 11 Python 3.8.5 3.8.5 Conda 4.9.2 4.9.2 R 4.3.0 4.3.0 Spark Engine 3.1(Deprecated) Component 3.1-dataproc-17 3.1-dataproc-16 3.1-dataproc-15 3.1-dataproc-14 Apache Spark 3.1.3 3.1.3 3.1.3 3.1.3 Hadoop Libraries 3.2.3 3.2.3 3.2.3 3.2.3 Cloud Storage Connector hadoop3-2.2.13 hadoop3-2.2.13 hadoop3-2.2.11 hadoop3-2.2.11 Java 8 8 8 8 Python 3.8.5 3.8.5 3.8.5 3.8.5 Conda 4.9.2 23.5.0 4.9.2 4.9.2 R 4.3.0 4.3.0 4.2.3 4.2.3 Spark Engine 2.4(Deprecated) Spark 2.4 has reached EOL for support in DPGKE.
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Managed Service for Apache Spark on GKE release versions Stay organized with collections Save and categorize content based on your preferences.

### Disaster recovery for Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- Source ID: `site-docs-root-2`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Create a new DPMS instance in the standby region: gcloud metastore services create ${ DPMS STANDBY INSTANCE } \ --location= ${ DPMS STANDBY REGION } \ --hive-metastore-version=3.1.2 Set the Hive data bucket as the default warehouse directory: gcloud metastore services update ${ DPMS STANDBY INSTANCE } \ --location= ${ DPMS STANDBY REGION } \ --update-hive-metastore-configs="hive.metastore.warehouse.dir=gs:// ${ PROJECT } -warehouse" Retrieve the path of the latest metadata backup: IMPORT DIR=gcloud storage ls gs:// ${ BACKUP BUCKET } sort -k 1 tail -1 IMPORT SQL=" ${ IMPORT DIR } hive.sql" echo ${ IMPORT SQL } Import the backed-up metadata into the new Managed Service for Apache Spark Metastore instance: gcloud metastore services import gcs $ { DPMS STANDBY INSTANCE } \ -- location = $ { DPMS STANDBY REGION } \ -- dump - type = mysql \ -- database - dump = $ { IMPORT SQL } \ -- import - id = import - $ ( date + "%Y-%m- %d -%H-%M-%S" ) Create a Managed Service for Apache Spark cluster in the standby region (region B): gcloud dataproc clusters create ${ HADOOP STANDBY } \ --dataproc-metastore=projects/ ${ PROJECT } /locations/ ${ DPMS STANDBY REGION } /services/ ${ DPMS STANDBY INSTANCE } \ --region= ${ DPMS STANDBY REGION } \ --image-version=2.0 Verify that the metadata was correctly imported: gcloud dataproc jobs submit hive \ --cluster ${ HADOOP STANDBY } \ --region ${ DPMS STANDBY REGION } \ --execute "select count( ) as num orders from orders;" The num orders output is most important to the tutorial.
- Create a Managed Service for Apache Spark cluster In Cloud Shell, create a Managed Service for Apache Spark cluster and attach it to the DPMS instance: gcloud dataproc clusters create ${ HADOOP PRIMARY } \ --dataproc-metastore=projects/ ${ PROJECT } /locations/ ${ DPMS PRIMARY REGION } /services/ ${ DPMS PRIMARY INSTANCE } \ --region= ${ DPMS PRIMARY REGION } \ --image-version=2.0 Specify the cluster image as version 2.0 , which is the latest version available as of June 2021.
- Populate the metastore In Cloud Shell, update the sample retail.hql provided in this tutorial's repository with the name of the Hive data bucket: sed -i -- 's/ ${ WAREHOUSE BUCKET } /'" $WAREHOUSE BUCKET "'/g' retail.hql Run the queries contained in the retail.hql file to create the table definitions in the metastore: gcloud dataproc jobs submit hive \ --cluster= ${ HADOOP PRIMARY } \ --region= ${ DPMS PRIMARY REGION } \ --file=retail.hql Verify that the table definitions were correctly created: gcloud dataproc jobs submit hive \ --cluster= ${ HADOOP PRIMARY } \ --region= ${ DPMS PRIMARY REGION } \ --execute=" desc departments; desc categories; desc products; desc order items; desc orders; desc customers; select count( ) as num departments from departments; select count( ) as num categories from categories; select count( ) as num products from products; select count( ) as num order items from order items; select count( ) as num orders from orders; select count( ) as num customers from customers; " The output resembles the following: +------------------+------------+----------+ col name data type comment +------------------+------------+----------+ department id int department name string +------------------+------------+----------+ The output also contains the number of elements in each table—for example: +----------------+ num customers +----------------+ 12435 +----------------+ Failing over to the standby region This section provides the steps to failover from the primary region (region A) to the standby region (region B).
- 1 \ -- python - version 3 The composer image composer-1.17.0-preview.1-airflow-2.0.1 is the latest version as of publication.

