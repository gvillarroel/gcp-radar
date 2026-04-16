---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.207Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "High availability mode"
feature_slug: "high-availability-mode"
latest_feature_date: "2016-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
keywords:
  - "creates"
  - "three"
  - "high"
  - "availability"
  - "master"
  - "mode"
  - "clusters"
---

# High availability mode

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

High availability mode creates Dataproc clusters with three master nodes to provide HDFS and YARN high availability.

## Extended Definition

High availability mode creates Dataproc clusters with three master nodes to provide HDFS and YARN high availability.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)

## Supporting Pages

### Disaster recovery for Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- Source ID: `site-docs-root-2`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- This tutorial is designed for Google Cloud customers who require high availability for their Hive data and metadata.
- Create a new DPMS instance in the standby region: gcloud metastore services create ${ DPMS STANDBY INSTANCE } \ --location= ${ DPMS STANDBY REGION } \ --hive-metastore-version=3.1.2 Set the Hive data bucket as the default warehouse directory: gcloud metastore services update ${ DPMS STANDBY INSTANCE } \ --location= ${ DPMS STANDBY REGION } \ --update-hive-metastore-configs="hive.metastore.warehouse.dir=gs:// ${ PROJECT } -warehouse" Retrieve the path of the latest metadata backup: IMPORT DIR=gcloud storage ls gs:// ${ BACKUP BUCKET } sort -k 1 tail -1 IMPORT SQL=" ${ IMPORT DIR } hive.sql" echo ${ IMPORT SQL } Import the backed-up metadata into the new Managed Service for Apache Spark Metastore instance: gcloud metastore services import gcs $ { DPMS STANDBY INSTANCE } \ -- location = $ { DPMS STANDBY REGION } \ -- dump - type = mysql \ -- database - dump = $ { IMPORT SQL } \ -- import - id = import - $ ( date + "%Y-%m- %d -%H-%M-%S" ) Create a Managed Service for Apache Spark cluster in the standby region (region B): gcloud dataproc clusters create ${ HADOOP STANDBY } \ --dataproc-metastore=projects/ ${ PROJECT } /locations/ ${ DPMS STANDBY REGION } /services/ ${ DPMS STANDBY INSTANCE } \ --region= ${ DPMS STANDBY REGION } \ --image-version=2.0 Verify that the metadata was correctly imported: gcloud dataproc jobs submit hive \ --cluster ${ HADOOP STANDBY } \ --region ${ DPMS STANDBY REGION } \ --execute "select count( ) as num orders from orders;" The num orders output is most important to the tutorial.
- Create a Managed Service for Apache Spark cluster In Cloud Shell, create a Managed Service for Apache Spark cluster and attach it to the DPMS instance: gcloud dataproc clusters create ${ HADOOP PRIMARY } \ --dataproc-metastore=projects/ ${ PROJECT } /locations/ ${ DPMS PRIMARY REGION } /services/ ${ DPMS PRIMARY INSTANCE } \ --region= ${ DPMS PRIMARY REGION } \ --image-version=2.0 Specify the cluster image as version 2.0 , which is the latest version available as of June 2021.
- Managed Service for Apache Spark Metastore is a fully-managed, highly-available, auto-scaled, auto-healing, OSS-native metastore service that greatly simplifies technical metadata management.

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Instance Group Config The config settings for Compute Engine resources in an instance group, such as a master or worker group. com. google. cloud. dataproc. v1.
- Cluster Controller Grpc The ClusterControllerService provides methods to manage clusters of Compute Engine instances. com. google. cloud. dataproc. v1.
- Instance Flexibility Policy Instance flexibility Policy allowing a mixture of VM shapes and provisioning models. com. google. cloud. dataproc. v1.
- Builder The config settings for Compute Engine resources in an instance group, such as a master or worker group. com. google. cloud. dataproc. v1.

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Example: gcloud dataproc clusters create CLUSTER-NAME \ --image= CUSTOM IMAGE URI \ --region= REGION \ ... other flags REST API Create a cluster with a custom image by specifying custom image URI in the InstanceGroupConfig.imageUri field in the masterConfig , workerConfig , and, if applicable, secondaryWorkerConfig object included in a cluster.create API request.
- POST /v1/projects/ PROJECT ID /regions/ REGION /clusters/ { "clusterName": " CLUSTER NAME ", "config": { "masterConfig": { "imageUri": "projects/ PROJECT ID /global/images/ CUSTOM IMAGE NAME " }, "workerConfig": { "imageUri": "projects/ PROJECT ID /global/images/ CUSTOM IMAGE NAME " } } } Console Open the Managed Service for Apache Spark Create a cluster page.
- The REST response lists additional information about the image, including the selfLink , which is the image URI. { ... "name": "my-custom-image", "selfLink": "projects/ PROJECT ID /global/images/ CUSTOM IMAGE NAME " , "sourceDisk": ..., ... } Create a cluster with a custom image create a cluster with using the gcloud CLI, the Managed Service for Apache Spark API, or the Google Cloud console. gcloud CLI Create a Managed Service for Apache Spark cluster with a custom image using the dataproc clusters create command with the --image flag.
- Sample dataproc.custom.properties file: dataproc.conscrypt.provider.enable= VALUE dataproc.logging.stackdriver.enable= VALUE Sample customization script file-creation snippet to override two cluster properties: cat <<EOF >/etc/google-dataproc/dataproc.custom.properties dataproc.conscrypt.provider.enable=true dataproc.logging.stackdriver.enable=false EOF Create a cluster with an expired custom image Managed Service for Apache Spark cannot guarantee support of issues that arise with clusters created with expired custom images.

