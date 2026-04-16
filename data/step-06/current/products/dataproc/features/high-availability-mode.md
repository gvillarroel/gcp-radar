---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.690Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "High availability mode"
feature_slug: "high-availability-mode"
latest_feature_date: "2016-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/create-cluster"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore"
keywords:
  - "high"
  - "availability"
  - "mode"
  - "creates"
  - "dataproc"
  - "clusters"
  - "three"
  - "master"
---

# High availability mode

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

High availability mode creates Dataproc clusters with three master nodes to provide HDFS and YARN high availability.

## Extended Definition

High availability mode creates Dataproc clusters with three master nodes to provide HDFS and YARN high availability.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/create-cluster)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)

## Supporting Pages

### Create a cluster | Managed Service for Apache Spark | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/create-cluster)
- Source ID: `feature-recovery-direct-http`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Quickstart guide Compare serverless and cluster deployments Key Concepts Get started Create a cluster Submit a Spark job to a cluster Use Gemini to develop Spark applications Run Spark using Kubernetes Develop Data processing Configure Spark Manage Spark dependencies Customize Spark environment Enable concurrent writes Enhance Spark performance Tune Spark Run Spark jobs Use the console Use the command line Use the REST APIs Explorer Create a cluster Run a Spark job Update a cluster Delete a cluster Use client libraries Run Hadoop jobs Write and run Spark Scala jobs Run Trino Run Flink Run Hive Run Pig Run HBase Run Python Configure the Python environment Use Cloud Client Libraries for Python Use data connectors Use the Spark BigQuery connector Overview BigQuery connector code samples Use the Cloud Storage connector Use the Spark Spanner connector Data lakes and lake houses Explore and extract data Transform data Load data into BigQuery Create a lake house with Spark and BigQuery Configure metastores Create an Apache Iceberg table with metadata in BigLake metastore Use Iceberg Use Delta Use Hudi Data science notebooks and UIs Use notebooks Overview Run a Jupyter notebook on a cluster Run a genomics analysis on a notebook Use the JupyterLab extension to develop serverless Spark workloads Use the Component Gateway Data sources and storage Connect to data sources Connect to Cloud Storage Connect to BigQuery Connect Hive to BigQuery Connect to Bigtable Connect to Pub/Sub Lite Cluster creation Overview Configure a network Overview Use secure tags Configure Private Service Connect Select a cluster region Enable auto zone placement Schedule cluster deletion Use initialization actions Set cluster metadata Set cluster properties Enable cluster web interfaces Create a high availability cluster Create a node group cluster Create a partial cluster Create a single-node cluster Create sole-tenant cluster Create a custom image Cluster management Set labels for filtering Scale clusters Autoscale clusters Start and stop clusters Schedule cluster stop Start and stop a cluster manually Recreate a cluster Rotate clusters Update and delete a cluster Use SSH to connect to a cluster Follow best practices Manage cluster data Hadoop data storage Select storage type Cache cluster data Offload shuffle data View cluster logs Cluster resources Components Overview Delta Lake Docker Flink HBase Hive WebHCat Hudi Iceberg Jupyter Pig Presto Ranger Install Ranger Use Ranger Use Ranger with Kerberos Use Ranger with caching and downscoping Back up and restore a Ranger schema Solr Trino Zeppelin Zookeeper Managed Service for Apache Spark services Managed Service for Apache Spark versions Overview 3.0.x release versions 2.3.x release versions 2.2.x release versions 2.1.x release versions 2.0.x release versions Cluster image version lists Compute options Machine types GPUs Minimum CPU platform Flexible VMs Secondary workers Local solid state drives Boot disks Attached hyperdisks Create and manage Kubernetes cluster Overview Release versions Recreate a cluster Create node pools Create a custom image Scale clusters Delete a cluster Job management and orchestration Life of a job Restart jobs Monitor jobs Use workflow templates Overview Parameterization Use YAML files Use cluster selectors Use inline workflows Orchestrate workflows GitHub templates Workflow scheduling solutions Use workflow templates Use Cloud Composer Use Cloud Functions Use Cloud Scheduler Administration and data governance Fleet management Lineage Enable Spark data lineage Enable Hive data lineage Monitor and troubleshoot Managed Service for Apache Spark metrics Create metric alerts Profile resource usage Google Cloud Assist Analyze logs Managed Service for Apache Spark logs Job output logs Audit logs Troubleshoot clusters View cluster diagnostic data Troubleshoot cluster creation issues Diagnose Kubernetes clusters Enable Kubernetes logging Troubleshoot jobs Troubleshoot jobs Troubleshoot memory errors Troubleshoot job delays View job history Troubleshoot workflow templates Tutorials and examples Analyze public datasets with Spark Sentiment analysis with Spark MLlib Security and compliance Shared Responsibility Model Security best practices Authenticate users Authenticate to Managed Service for Apache Spark Authenticate personal clusters Workforce identity federation Assign roles and permissions Roles and permissions Managed Service for Apache Spark principals Granular IAM Assign roles for Kubernetes Service accounts Secure clusters Secure multi-tenancy using Kerberos Secure multi-tenancy using service accounts Encrypt memory Manage data encryption keys Enable Ranger authorization service Use the Secret Manager credential provider Create and secure a Hive metastore cluster Custom constraints Assured Workloads FedRAMP Compliance IAM and access control Use Kerberos VPC Service Controls Set Workforce access Developer resources Code samples AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Create a cluster with an ARM machine type . gcloud To create a Managed Service for Apache Spark cluster on the command line, run the gcloud dataproc clusters create command locally in a terminal window or in Cloud Shell . gcloud dataproc clusters create CLUSTER_NAME \ --region= REGION The command creates a cluster with default Managed Service for Apache Spark service settings for your master and worker virtual machine instances, disk sizes and types, network type, region and zone where your cluster is deployed, and other cluster settings.
- HTTP method and URL: POST https://dataproc.googleapis.com/v1/projects/ PROJECT /regions/ REGION /clusters Request JSON body: { "project_id":" PROJECT ", "cluster_name":" CLUSTER_NAME ", "config":{ "master_config":{ "num_instances":1, "machine_type_uri":"n1-standard-2", "image_uri":"" }, "softwareConfig": { "imageVersion": "", "properties": {}, "optionalComponents": [] }, "worker_config":{ "num_instances":2, "machine_type_uri":"n1-standard-2", "image_uri":"" }, "gce_cluster_config":{ "zone_uri":" ZONE " } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT /regions/ REGION /clusters" | Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT /regions/ REGION /operations/b5706e31......", "metadata": { "@type": "type.googleapis.com/google.cloud.dataproc.v1.ClusterOperationMetadata", "clusterName": " CLUSTER_NAME ", "clusterUuid": "5fe882b2-...", "status": { "state": "PENDING", "innerState": "PENDING", "stateStartTime": "2019-11-21T00:37:56.220Z" }, "operationType": "CREATE", "description": "Create cluster with 2 workers", "warnings": [ "For PD-Standard without local SSDs, we strongly recommend provisioning 1TB ..."" ] } } Note: You can click the Equivalent REST or command line links at the bottom of the left panel of the Managed Service for Apache Spark Google Cloud console Create a cluster page to have the Console construct an equivalent API REST request or gcloud tool command to use in your code or from the command line to create a cluster.

### Disaster recovery for Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- Source ID: `site-docs-root-2`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Create a new DPMS instance in the standby region: gcloud metastore services create ${ DPMS STANDBY INSTANCE } \ --location= ${ DPMS STANDBY REGION } \ --hive-metastore-version=3.1.2 Set the Hive data bucket as the default warehouse directory: gcloud metastore services update ${ DPMS STANDBY INSTANCE } \ --location= ${ DPMS STANDBY REGION } \ --update-hive-metastore-configs="hive.metastore.warehouse.dir=gs:// ${ PROJECT } -warehouse" Retrieve the path of the latest metadata backup: IMPORT DIR=gcloud storage ls gs:// ${ BACKUP BUCKET } sort -k 1 tail -1 IMPORT SQL=" ${ IMPORT DIR } hive.sql" echo ${ IMPORT SQL } Import the backed-up metadata into the new Managed Service for Apache Spark Metastore instance: gcloud metastore services import gcs $ { DPMS STANDBY INSTANCE } \ -- location = $ { DPMS STANDBY REGION } \ -- dump - type = mysql \ -- database - dump = $ { IMPORT SQL } \ -- import - id = import - $ ( date + "%Y-%m- %d -%H-%M-%S" ) Create a Managed Service for Apache Spark cluster in the standby region (region B): gcloud dataproc clusters create ${ HADOOP STANDBY } \ --dataproc-metastore=projects/ ${ PROJECT } /locations/ ${ DPMS STANDBY REGION } /services/ ${ DPMS STANDBY INSTANCE } \ --region= ${ DPMS STANDBY REGION } \ --image-version=2.0 Verify that the metadata was correctly imported: gcloud dataproc jobs submit hive \ --cluster ${ HADOOP STANDBY } \ --region ${ DPMS STANDBY REGION } \ --execute "select count( ) as num orders from orders;" The num orders output is most important to the tutorial.
- Create a Managed Service for Apache Spark cluster In Cloud Shell, create a Managed Service for Apache Spark cluster and attach it to the DPMS instance: gcloud dataproc clusters create ${ HADOOP PRIMARY } \ --dataproc-metastore=projects/ ${ PROJECT } /locations/ ${ DPMS PRIMARY REGION } /services/ ${ DPMS PRIMARY INSTANCE } \ --region= ${ DPMS PRIMARY REGION } \ --image-version=2.0 Specify the cluster image as version 2.0 , which is the latest version available as of June 2021.
- This tutorial is designed for Google Cloud customers who require high availability for their Hive data and metadata.
- In Cloud Shell, export the metadata from the DPMS instance: gcloud metastore services export gcs $ { DPMS PRIMARY INSTANCE } \ -- location =$ { DPMS PRIMARY REGION } \ -- destination - folder = gs : //$ { BACKUP BUCKET } Retrieve the path of the latest metadata backup: IMPORT DIR=gcloud storage ls gs:// ${ BACKUP BUCKET } sort -k 1 tail -1 IMPORT SQL=" ${ IMPORT DIR } hive.sql" echo ${ IMPORT SQL } Import the metadata into the standby DPMS instance in the original region (region A): gcloud metastore services import gcs $ { DPMS STANDBY INSTANCE } \ -- location = $ { DPMS STANDBY REGION } \ -- dump - type = mysql \ -- database - dump = $ { IMPORT SQL } \ -- import - id = import - $ ( date + "%Y-%m- %d -%H-%M-%S" ) Verify that the metadata was correctly imported: gcloud dataproc jobs submit hive \ --cluster ${ HADOOP STANDBY } \ --region ${ DPMS STANDBY REGION } \ --execute "select from completed orders limit 5;" The output includes the following: +----------------------------+------------------------------+-------------------------------------+--------------------------------+ completed orders.order id completed orders.order date completed orders.order customer id completed orders.order status +----------------------------+------------------------------+-------------------------------------+--------------------------------+ 3 2013-07-25 00:00:00.0 12111 COMPLETE 5 2013-07-25 00:00:00.0 11318 COMPLETE 6 2013-07-25 00:00:00.0 7130 COMPLETE 7 2013-07-25 00:00:00.0 4530 COMPLETE 15 2013-07-25 00:00:00.0 2568 COMPLETE +----------------------------+------------------------------+-------------------------------------+--------------------------------+ The primary Managed Service for Apache Spark Metastore and standby Managed Service for Apache Spark Metastore have swapped roles again.

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

