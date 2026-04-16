---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.203Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "GPU attachment"
feature_slug: "gpu-attachment"
latest_feature_date: "2017-03-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
keywords:
  - "attachment"
  - "attach"
  - "clusters"
  - "compute"
  - "engine"
  - "lets"
---

# GPU attachment

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

GPU attachment lets Dataproc clusters attach 1 to 8 Compute Engine GPUs to master and worker nodes.

## Extended Definition

GPU attachment lets Dataproc clusters attach 1 to 8 Compute Engine GPUs to master and worker nodes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster)
- [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)

## Supporting Pages

### "Run a Spark job on Google Kubernetes Engine \_|\_ Managed Service for Apache\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- User roles To get the permissions that you need to create a Managed Service for Apache Spark cluster, ask your administrator to grant you the following IAM roles: Dataproc Editor ( roles/dataproc.editor ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the Compute Engine default service account Service account role To ensure that the Compute Engine default service account has the necessary permissions to create a Managed Service for Apache Spark cluster, ask your administrator to grant the Dataproc Worker ( roles/dataproc.worker ) IAM role to the Compute Engine default service account on the project.
- Run the command: gcloud dataproc clusters gke create ${DP CLUSTER} \ --region=${REGION} \ --gke-cluster=${GKE CLUSTER} \ --spark-engine-version=latest \ --staging-bucket=${BUCKET} \ --pools="name=${DP POOLNAME},roles=default" \ --setup-workload-identity \ --history-server-cluster=${PHS CLUSTER} Notes: --spark-engine-version : The Spark image version used on the Managed Service for Apache Spark cluster.
- Each virtual cluster: is created with separate properties, including Spark engine version and workload identity is isolated within a separate GKE namespace on the GKE cluster Note: Deletion of one or more Managed Service for Apache Spark on GKE clusters does not delete associated node pools.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Cluster Controller Grpc The ClusterControllerService provides methods to manage clusters of Compute Engine instances. com. google. cloud. dataproc. v1.
- Async Service The ClusterControllerService provides methods to manage clusters of Compute Engine instances. com. google. cloud. dataproc. v1.
- Cluster Controller Client Service Description: The ClusterControllerService provides methods to manage clusters of Compute Engine instances.
- Shielded Instance Config Shielded Instance Config for clusters using Compute Engine Shielded VMs . com. google. cloud. dataproc. v1.

### Disaster recovery for Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- Source ID: `site-docs-root-2`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Create a Managed Service for Apache Spark cluster In Cloud Shell, create a Managed Service for Apache Spark cluster and attach it to the DPMS instance: gcloud dataproc clusters create ${ HADOOP PRIMARY } \ --dataproc-metastore=projects/ ${ PROJECT } /locations/ ${ DPMS PRIMARY REGION } /services/ ${ DPMS PRIMARY INSTANCE } \ --region= ${ DPMS PRIMARY REGION } \ --image-version=2.0 Specify the cluster image as version 2.0 , which is the latest version available as of June 2021.
- Create a new DPMS instance in the standby region: gcloud metastore services create ${ DPMS STANDBY INSTANCE } \ --location= ${ DPMS STANDBY REGION } \ --hive-metastore-version=3.1.2 Set the Hive data bucket as the default warehouse directory: gcloud metastore services update ${ DPMS STANDBY INSTANCE } \ --location= ${ DPMS STANDBY REGION } \ --update-hive-metastore-configs="hive.metastore.warehouse.dir=gs:// ${ PROJECT } -warehouse" Retrieve the path of the latest metadata backup: IMPORT DIR=gcloud storage ls gs:// ${ BACKUP BUCKET } sort -k 1 tail -1 IMPORT SQL=" ${ IMPORT DIR } hive.sql" echo ${ IMPORT SQL } Import the backed-up metadata into the new Managed Service for Apache Spark Metastore instance: gcloud metastore services import gcs $ { DPMS STANDBY INSTANCE } \ -- location = $ { DPMS STANDBY REGION } \ -- dump - type = mysql \ -- database - dump = $ { IMPORT SQL } \ -- import - id = import - $ ( date + "%Y-%m- %d -%H-%M-%S" ) Create a Managed Service for Apache Spark cluster in the standby region (region B): gcloud dataproc clusters create ${ HADOOP STANDBY } \ --dataproc-metastore=projects/ ${ PROJECT } /locations/ ${ DPMS STANDBY REGION } /services/ ${ DPMS STANDBY INSTANCE } \ --region= ${ DPMS STANDBY REGION } \ --image-version=2.0 Verify that the metadata was correctly imported: gcloud dataproc jobs submit hive \ --cluster ${ HADOOP STANDBY } \ --region ${ DPMS STANDBY REGION } \ --execute "select count( ) as num orders from orders;" The num orders output is most important to the tutorial.
- Create Hive data storage In Cloud Shell, create a dual-regional bucket to host the Hive data: gcloud storage buckets create gs:// ${ WAREHOUSE BUCKET } --location=NAM4 Copy some sample data to the Hive data bucket: gcloud storage cp gs://retail csv gs:// ${ WAREHOUSE BUCKET } /retail --recursive Create storage for metadata backups In Cloud Shell, create a dual-region bucket to host the DPMS metadata backups: gcloud storage buckets create gs:// ${ BACKUP BUCKET } --location=NAM4 Deploying compute resources in the primary region In this section, you deploy all the compute resources in the primary region, including the DPMS instance and the Managed Service for Apache Spark cluster.
- In Cloud Shell, create an App Engine application, which Cloud Scheduler requires: gcloud app create --region= ${ REGION A } Create a Cloud Scheduler job to schedule the metadata exports from the primary metastore: gcloud scheduler jobs create http dpms - export \ -- schedule " /15 " \ -- http - method = post \ -- uri =$ { EXPORT RUN URL } / export \ The Cloud Scheduler job makes an http request to the Cloud Run service every 15 minutes.

