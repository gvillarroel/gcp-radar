---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.078Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Delta Lake 0.5.0 support"
feature_slug: "delta-lake-0-5-0-support"
latest_feature_date: "2020-04-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore"
keywords:
  - "delta"
  - "lake"
  - "dataproc"
  - "image"
  - "includes"
  - "version"
---

# Delta Lake 0.5.0 support

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc image 1.5 includes Delta Lake version 0.5.0.

## Extended Definition

Dataproc image 1.5 includes Delta Lake version 0.5.0.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- June 24, 2024 Change New Dataproc on Compute Engine subminor image versions : 2.0.107-debian10, 2.0.107-rocky8, 2.0.107-ubuntu18 2.1.55-debian11, 2.1.55-rocky8, 2.1.55-ubuntu20, 2.1.55-ubuntu20-arm 2.2.21-debian12, 2.2.21-rocky9, 2.2.21-ubuntu22 June 21, 2024 Breaking Dataproc Serverless for Spark: To fix compatibility with open table formats (Apache Iceberg, Apache Hudi and Delta Lake), the ANTLR version will be downgraded from 4.13.1 to 4.9.3 in Dataproc Serverless for Spark runtime versions 1.2 and 2.2 on June 26, 2024.
- March 05, 2021 Change New sub-minor versions of Dataproc images: 1.3.86-debian10 , 1.3.86-ubuntu18 , 1.4.57-debian10 , 1.4.57-ubuntu18 , 1.5.32-centos8 , 1.5.32-debian10 , 1.5.32-ubuntu18 , 2.0.5-debian10 , and 2.0.5-ubuntu18 Change Image 2.0: Upgraded Delta Lake to 0.8.0 version .
- August 22, 2022 Announcement Announcing Dataproc Serverless for Spark preview runtime version 2.0.0-RC1 , which includes the following components: Spark 3.3.0 Cloud Storage Connector 2.2.7 Java 17 Conda 4.13 Python 3.10 R 4.1 Scala 2.13 Change Dataproc Serverless for Spark now uses runtime version 1.0.16 , which upgrades the following components to the following versions: Spark 3.2.2 Avro 1.11.1 Hadoop 3.3.4 Jetty 9.4.48.v20220622 ORC 1.7.5 RoaringBitmap 0.9.31 Scala 2.12.16 August 13, 2022 Change New sub-minor versions of Dataproc images: 1.5.73-debian10 , 1.5.73-rocky8 , 1.5.73-ubuntu18 2.0.47-debian10 , 2.0.47-rocky8, 2.0.47-ubuntu18 Change Dataproc on Compute Engine images now have master VM memory protection enabled by default.
- December 11, 2023 Announcement Announcing the GA release of Dataproc on Compute Engine image version 2.2 : 2.2.0-debian12, 2.2.0-rocky9, 2.2.0-ubuntu22 The 2.2.0 release includes the following components: Debian-12 / Ubuntu-2204 / RockyLinux 9 Apache Hadoop 3.3.6 Apache Spark 3.5.0 Spark-BigQuery Connector 0.34.0 Cloud Storage Connector 3.0.0 Trino 432 Apache Flink 1.17.0 Apache Ranger 2.4.0 Apache Solr 9.2.1 R 4.2 Hue 4.11.0 JupyterLab Notebook 3.6 Change Monitoring-agent-defaults metrics are not available in Dataproc on Compute Engine image version 2.2 clusters unless the Ops Agent is installed.

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Advanced usage: If you use your own process to create a custom Managed Service for Apache Spark image, you must add the goog-dataproc-version label manually to your custom image, as follows: Extract the goog-dataproc-version label from the base Managed Service for Apache Spark image used to create the custom image. gcloud compute images describe ${BASE DATAPROC IMAGE} \ --project cloud-dataproc \ --format="value(labels.goog-dataproc-version)" Set the label on the custom image. gcloud compute images add-labels IMAGE NAME --labels= [KEY=VALUE,...] Use a custom image You specify the custom image when you create a Managed Service for Apache Spark cluster.
- Attempt to create a Managed Service for Apache Spark cluster with an expired custom image or a custom image that will expire within 10 days. gcloud dataproc clusters create CLUSTER-NAME \ --image= CUSTOM-IMAGE-NAME \ --region= REGION \ ... other flags The gcloud CLI will issue an error message that includes the cluster dataproc:dataproc.custom.image.expiration.token property name and token value. dataproc:dataproc.custom.image.expiration.token= TOKEN VALUE Copy the TOKEN VALUE string to the clipboard.
- Then, run the generate custom image.py script to have Managed Service for Apache Spark generate and save your custom image. python3 generate custom image.py \ --image-name= CUSTOM IMAGE NAME \ [--family= CUSTOM IMAGE FAMILY NAME ] \ --dataproc-version= IMAGE VERSION \ --customization-script= LOCAL PATH \ --zone= ZONE \ --gcs-bucket= gs:// BUCKET NAME \ [--no-smoke-test] Required flags --image-name : the output name for your custom image.
- Note: The image name must match the regular expression a-z with no underscores or spaces, and less than 64 characters. --dataproc-version : the Managed Service for Apache Spark image version to use in your custom image.

### Disaster recovery for Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- Source ID: `site-docs-root-2`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Create a new DPMS instance in the standby region: gcloud metastore services create ${ DPMS STANDBY INSTANCE } \ --location= ${ DPMS STANDBY REGION } \ --hive-metastore-version=3.1.2 Set the Hive data bucket as the default warehouse directory: gcloud metastore services update ${ DPMS STANDBY INSTANCE } \ --location= ${ DPMS STANDBY REGION } \ --update-hive-metastore-configs="hive.metastore.warehouse.dir=gs:// ${ PROJECT } -warehouse" Retrieve the path of the latest metadata backup: IMPORT DIR=gcloud storage ls gs:// ${ BACKUP BUCKET } sort -k 1 tail -1 IMPORT SQL=" ${ IMPORT DIR } hive.sql" echo ${ IMPORT SQL } Import the backed-up metadata into the new Managed Service for Apache Spark Metastore instance: gcloud metastore services import gcs $ { DPMS STANDBY INSTANCE } \ -- location = $ { DPMS STANDBY REGION } \ -- dump - type = mysql \ -- database - dump = $ { IMPORT SQL } \ -- import - id = import - $ ( date + "%Y-%m- %d -%H-%M-%S" ) Create a Managed Service for Apache Spark cluster in the standby region (region B): gcloud dataproc clusters create ${ HADOOP STANDBY } \ --dataproc-metastore=projects/ ${ PROJECT } /locations/ ${ DPMS STANDBY REGION } /services/ ${ DPMS STANDBY INSTANCE } \ --region= ${ DPMS STANDBY REGION } \ --image-version=2.0 Verify that the metadata was correctly imported: gcloud dataproc jobs submit hive \ --cluster ${ HADOOP STANDBY } \ --region ${ DPMS STANDBY REGION } \ --execute "select count( ) as num orders from orders;" The num orders output is most important to the tutorial.
- Create a Managed Service for Apache Spark cluster In Cloud Shell, create a Managed Service for Apache Spark cluster and attach it to the DPMS instance: gcloud dataproc clusters create ${ HADOOP PRIMARY } \ --dataproc-metastore=projects/ ${ PROJECT } /locations/ ${ DPMS PRIMARY REGION } /services/ ${ DPMS PRIMARY INSTANCE } \ --region= ${ DPMS PRIMARY REGION } \ --image-version=2.0 Specify the cluster image as version 2.0 , which is the latest version available as of June 2021.
- In Cloud Shell, export the metadata from the DPMS instance: gcloud metastore services export gcs $ { DPMS PRIMARY INSTANCE } \ -- location =$ { DPMS PRIMARY REGION } \ -- destination - folder = gs : //$ { BACKUP BUCKET } Retrieve the path of the latest metadata backup: IMPORT DIR=gcloud storage ls gs:// ${ BACKUP BUCKET } sort -k 1 tail -1 IMPORT SQL=" ${ IMPORT DIR } hive.sql" echo ${ IMPORT SQL } Import the metadata into the standby DPMS instance in the original region (region A): gcloud metastore services import gcs $ { DPMS STANDBY INSTANCE } \ -- location = $ { DPMS STANDBY REGION } \ -- dump - type = mysql \ -- database - dump = $ { IMPORT SQL } \ -- import - id = import - $ ( date + "%Y-%m- %d -%H-%M-%S" ) Verify that the metadata was correctly imported: gcloud dataproc jobs submit hive \ --cluster ${ HADOOP STANDBY } \ --region ${ DPMS STANDBY REGION } \ --execute "select from completed orders limit 5;" The output includes the following: +----------------------------+------------------------------+-------------------------------------+--------------------------------+ completed orders.order id completed orders.order date completed orders.order customer id completed orders.order status +----------------------------+------------------------------+-------------------------------------+--------------------------------+ 3 2013-07-25 00:00:00.0 12111 COMPLETE 5 2013-07-25 00:00:00.0 11318 COMPLETE 6 2013-07-25 00:00:00.0 7130 COMPLETE 7 2013-07-25 00:00:00.0 4530 COMPLETE 15 2013-07-25 00:00:00.0 2568 COMPLETE +----------------------------+------------------------------+-------------------------------------+--------------------------------+ The primary Managed Service for Apache Spark Metastore and standby Managed Service for Apache Spark Metastore have swapped roles again.
- In Cloud Shell, enable the Cloud Composer API: gcloud services enable composer.googleapis.com Create a Cloud Composer environment: export COMPOSER ENV = comp - env gcloud beta composer environments create $ { COMPOSER ENV } \ -- location $ { DPMS PRIMARY REGION } \ -- image - version composer - 1.17 .

