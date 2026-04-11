---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.096Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "JupyterHub integration"
feature_slug: "jupyterhub-integration"
latest_feature_date: "2019-08-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore"
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements"
keywords:
  - "jupyterhub"
  - "integration"
  - "dataproc"
  - "can"
  - "enable"
  - "singleuser"
  - "for"
  - "the"
---

# JupyterHub integration

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc can enable jupyterhub-singleuser for the Jupyter optional component and populate related hub environment and argument properties for DataprocSpawner.

## Extended Definition

Dataproc can enable jupyterhub-singleuser for the Jupyter optional component and populate related hub environment and argument properties for DataprocSpawner.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements](https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements)

## Supporting Pages

### Disaster recovery for Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- Source ID: `site-docs-root-2`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Update the environment variables based on these new roles: export DPMS PRIMARY REGION = us - east1 export DPMS STANDBY REGION = us - central1 ] export DPMS PRIMARY INSTANCE = dpms2 export DPMS STANDBY INSTANCE = dpms1 export HADOOP PRIMARY = dataproc - cluster2 export HADOOP STANDBY = dataproc - cluster1 Verify that you can write to the new primary Managed Service for Apache Spark Metastore in region B: gcloud dataproc jobs submit hive \ --cluster ${ DPMS PRIMARY INSTANCE } \ --region ${ DPMS PRIMARY REGION } \ --execute "create view completed orders as select from orders where order status = 'COMPLETE';" gcloud dataproc jobs submit hive \ --cluster ${ HADOOP PRIMARY } \ --region ${ DPMS PRIMARY REGION } \ --execute "select from completed orders limit 5;" The output contains the following: +----------------------------+------------------------------+-------------------------------------+--------------------------------+ completed orders.order id completed orders.order date completed orders.order customer id completed orders.order status +----------------------------+------------------------------+-------------------------------------+--------------------------------+ 3 2013-07-25 00:00:00.0 12111 COMPLETE 5 2013-07-25 00:00:00.0 11318 COMPLETE 6 2013-07-25 00:00:00.0 7130 COMPLETE 7 2013-07-25 00:00:00.0 4530 COMPLETE 15 2013-07-25 00:00:00.0 2568 COMPLETE +----------------------------+------------------------------+-------------------------------------+--------------------------------+ The failover is now complete.
- Clone the tutorial's GitHub repository: git clone https://github.com/GoogleCloudPlatform/metastore-disaster-recovery.git Enable the following Google Cloud APIs: gcloud services enable dataproc.googleapis.com metastore.googleapis.com Set some environment variables: export PROJECT =$ ( gcloud info -- format = 'value(config.project)' ) export WAREHOUSE BUCKET =$ { PROJECT } - warehouse export BACKUP BUCKET =$ { PROJECT } - dpms - backups export DPMS PRIMARY REGION = us - central1 export DPMS STANDBY REGION = us - east1 export DPMS PRIMARY INSTANCE = dpms1 export DPMS STANDBY INSTANCE = dpms2 export HADOOP PRIMARY = dataproc - cluster1 export HADOOP STANDBY = dataproc - cluster2 Creating storage for Hive data and Hive Metastore backups In this section, you create Cloud Storage buckets to host the Hive data and Hive Metastore backups.
- In Cloud Shell, export the metadata from the DPMS instance: gcloud metastore services export gcs $ { DPMS PRIMARY INSTANCE } \ -- location =$ { DPMS PRIMARY REGION } \ -- destination - folder = gs : //$ { BACKUP BUCKET } Retrieve the path of the latest metadata backup: IMPORT DIR=gcloud storage ls gs:// ${ BACKUP BUCKET } sort -k 1 tail -1 IMPORT SQL=" ${ IMPORT DIR } hive.sql" echo ${ IMPORT SQL } Import the metadata into the standby DPMS instance in the original region (region A): gcloud metastore services import gcs $ { DPMS STANDBY INSTANCE } \ -- location = $ { DPMS STANDBY REGION } \ -- dump - type = mysql \ -- database - dump = $ { IMPORT SQL } \ -- import - id = import - $ ( date + "%Y-%m- %d -%H-%M-%S" ) Verify that the metadata was correctly imported: gcloud dataproc jobs submit hive \ --cluster ${ HADOOP STANDBY } \ --region ${ DPMS STANDBY REGION } \ --execute "select from completed orders limit 5;" The output includes the following: +----------------------------+------------------------------+-------------------------------------+--------------------------------+ completed orders.order id completed orders.order date completed orders.order customer id completed orders.order status +----------------------------+------------------------------+-------------------------------------+--------------------------------+ 3 2013-07-25 00:00:00.0 12111 COMPLETE 5 2013-07-25 00:00:00.0 11318 COMPLETE 6 2013-07-25 00:00:00.0 7130 COMPLETE 7 2013-07-25 00:00:00.0 4530 COMPLETE 15 2013-07-25 00:00:00.0 2568 COMPLETE +----------------------------+------------------------------+-------------------------------------+--------------------------------+ The primary Managed Service for Apache Spark Metastore and standby Managed Service for Apache Spark Metastore have swapped roles again.
- Populate the metastore In Cloud Shell, update the sample retail.hql provided in this tutorial's repository with the name of the Hive data bucket: sed -i -- 's/ ${ WAREHOUSE BUCKET } /'" $WAREHOUSE BUCKET "'/g' retail.hql Run the queries contained in the retail.hql file to create the table definitions in the metastore: gcloud dataproc jobs submit hive \ --cluster= ${ HADOOP PRIMARY } \ --region= ${ DPMS PRIMARY REGION } \ --file=retail.hql Verify that the table definitions were correctly created: gcloud dataproc jobs submit hive \ --cluster= ${ HADOOP PRIMARY } \ --region= ${ DPMS PRIMARY REGION } \ --execute=" desc departments; desc categories; desc products; desc order items; desc orders; desc customers; select count( ) as num departments from departments; select count( ) as num categories from categories; select count( ) as num products from products; select count( ) as num order items from order items; select count( ) as num orders from orders; select count( ) as num customers from customers; " The output resembles the following: +------------------+------------+----------+ col name data type comment +------------------+------------+----------+ department id int department name string +------------------+------------+----------+ The output also contains the number of elements in each table—for example: +----------------+ num customers +----------------+ 12435 +----------------+ Failing over to the standby region This section provides the steps to failover from the primary region (region A) to the standby region (region B).

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Feature Image 1.4: The property dataproc:jupyter.hub.enabled can now be used to enable jupyterhub-singleuser (version 1.0.0) when using the JUPYTER optional component.
- February 24, 2025 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.93 1.2.37 2.2.37 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.133-debian10, 2.0.133-rocky8, 2.0.133-ubuntu18 2.1.81-debian11, 2.1.81-rocky8, 2.1.81-ubuntu20, 2.1.81-ubuntu20-arm 2.2.47-debian12, 2.2.47-rocky9, 2.2.47-ubuntu22 February 17, 2025 Announcement New Dataproc on Compute Engine subminor image versions: 2.0.132-debian10, 2.0.132-rocky8, 2.0.132-ubuntu18 2.1.80-debian11, 2.1.80-rocky8, 2.1.80-ubuntu20, 2.1.80-ubuntu20-arm 2.2.46-debian12, 2.2.46-rocky9, 2.2.46-ubuntu22 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.92 1.2.36 2.2.36 February 11, 2025 Announcement Data Lineage for Dataproc Hive is now in Public Preview, which can be enabled using the Hive Lineage initialization action .
- Change Dataproc Serverless for Spark now uses runtime version 1.0.15 , which upgrades the following Spark dependencies to the following versions: Jackson 2.13.3 Jetty 9.4.46.v20220331 ORC 1.7.4 Parquet 1.12.3 Protobuf 3.19.4 RoaringBitmap 0.9.28 Breaking FallbackHiveAuthorizerFactory is now set by default on newly created 1.5 and 2.0 image clusters that have the any of the following features enabled: Kerberos security Personal Cluster Authentication Secure Multi-Tenancy If you encounter a Cannot modify <PARAM> or similar runtime error when running a SET statement in a Hive query, this means the parameter is not in list of allowable runtime parameters.
- February 10, 2025 Announcement Dataproc on Compute Engine: To help diagnose Dataproc clusters, you can set the following cluster properties to true when you create a cluster : dataproc:diagnostic.capture.enabled : When set to true , enables the collection of checkpoint data in the cluster temp bucket . dataproc:dataproc.logging.extended.enabled : When set to true , enables the collection of logs for the Knox, Zeppelin, Solr, Trino, Presto, Ranger-usersync, Jupyter notebook components and the Spark History-Server in Cloud Logging . dataproc:dataproc.logging.syslog.enabled : When set to true , enables the collection of VM syslogs in Cloud Logging .

### "Managed Service for Apache Spark Spark performance enhancements \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements](https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements)
- Source ID: `site-iam-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- PROPERTIES : To enable Spark optimization enhancements, specify: spark.dataproc.enhanced.optimizer.enabled = true To enable Spark execution enhancements, specify: spark.dataproc.enhanced.execution.enabled = true To enable Spark optimization and execution enhancements, specify: spark.dataproc.enhanced.optimizer.enabled = true,spark.dataproc.enhanced.execution.enabled = true API Specify the following properties for a SparkJob , PySparkJob , SparkSqlJob , or SparkRJob as part of a jobs.submit request: To enable Spark optimization enhancements, specify: "spark.dataproc.enhanced.optimizer.enabled=true" To enable Spark execution enhancements, specify: "spark.dataproc.enhanced.execution.enabled=true" To enable Spark optimization and execution enhancements, specify: "spark.dataproc.enhanced.execution.enabled=true,spark.dataproc.enhanced.optimizer.enabled=true" Note: You can click Equivalent Command Line or Equivalent REST at the bottom of the left panel of the Create a Managed Service for Apache Spark cluster page in the Google Cloud console to have the console construct an equivalent gcloud tool command or API REST request that you can use from the command line or in your code to create a cluster.
- PROPERTIES : To enable Spark optimization enhancements, specify: spark:spark.dataproc.enhanced.optimizer.enabled = true To enable Spark execution enhancements, specify: spark:spark.dataproc.enhanced.execution.enabled = true To enable Spark optimization and execution enhancements, specify: spark:spark.dataproc.enhanced.optimizer.enabled = true,spark:spark.dataproc.enhanced.execution.enabled = true API Specify the following SoftwareConfig.properties as part of a clusters.create request: To enable Spark optimization enhancements, specify: "spark:spark.dataproc.enhanced.optimizer.enabled" : "true" To enable Spark execution enhancements, specify: "spark:spark.dataproc.enhanced.execution.enabled" : "true" To enable Spark optimization and execution enhancements, specify: "spark:spark.dataproc.enhanced.optimizer.enabled" : "true" , "spark:spark.dataproc.enhanced.execution.enabled" : "true" Enable or disable enhancements at job submission You can use the Google Cloud console, Google Cloud CLI, and the Managed Service for Apache Spark API to enable or disable Spark performance enhancements on a Spark job submitted to Managed Service for Apache Spark.
- Enable enhancements at cluster creation You can use the Google Cloud console, Google Cloud CLI, and the Managed Service for Apache Spark API to enable Managed Service for Apache Spark Spark performance enhancements when you create a Managed Service for Apache Spark cluster with image versions 2.0.69+, 2.1.17+, 2.2.0+, and later image releases.
- You can enable Spark performance enhancements on a cluster or on a Spark job: Spark performance enhancements enabled on a cluster apply, by default, to all Spark jobs run on the cluster, whether submitted to the Managed Service for Apache Spark service or submitted directly to the cluster .

