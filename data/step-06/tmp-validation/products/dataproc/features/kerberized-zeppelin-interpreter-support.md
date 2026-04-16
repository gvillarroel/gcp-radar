---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.159Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Kerberized Zeppelin interpreter support"
feature_slug: "kerberized-zeppelin-interpreter-support"
latest_feature_date: "2020-07-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore"
  - "https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups"
  - "https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage"
keywords:
  - "interpreters"
  - "interpreter"
  - "kerberized"
  - "shell"
  - "zeppelin"
  - "clusters"
  - "spark"
---

# Kerberized Zeppelin interpreter support

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Kerberized Dataproc clusters support Zeppelin Spark and shell interpreters by default.

## Extended Definition

Kerberized Dataproc clusters support Zeppelin Spark and shell interpreters by default.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore](https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore)
- [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- [https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage](https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage)

## Supporting Pages

### "Create an Apache Iceberg table with metadata in BigLake metastore \_|\_\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore](https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore)
- Source ID: `site-iam-reference`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Add two jars to the Zeppelin Spark interpreter, as follows: Type "Spark" in Search interpreters box to scroll to the Spark interpreter section.
- In the Zeppelin web interface, click the anonymous menu, then click Interpreter to open the Interpreters page.
- Copy the following PySpark code into your Zeppelin notebook after filling in the variables. %pyspark from pyspark.sql import SparkSession project id = " PROJECT ID " catalog = " CATALOG NAME " namespace = " NAMESPACE " location = " LOCATION " warehouse dir = "gs:// BUCKET / WAREHOUSE DIRECTORY " spark = SparkSession.builder \ .appName ( "BigQuery Metastore Iceberg" ) \ .config ( f "spark.sql.catalog.{catalog}" , "org.apache.iceberg.spark.SparkCatalog" ) \ .config ( f "spark.sql.catalog.{catalog}.catalog-impl" , "org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog" ) \ .config ( f "spark.sql.catalog.{catalog}.gcp project" , f "{project id}" ) \ .config ( f "spark.sql.catalog.{catalog}.gcp location" , f "{location}" ) \ .config ( f "spark.sql.catalog.{catalog}.warehouse" , f "{warehouse dir}" ) \ .getOrCreate () spark.sql ( f "USE {catalog};" ) spark.sql ( f "CREATE NAMESPACE IF NOT EXISTS {namespace};" ) spark.sql ( f "USE {namespace}`;" ) \# Create table and display schema ( without LOCATION ) spark.sql ( "DROP TABLE IF EXISTS example iceberg table" ) spark.sql ( "CREATE TABLE example iceberg table (id int, data string) USING ICEBERG" ) spark.sql ( "DESCRIBE example iceberg table;" ) \# Insert table data. spark.sql ( "INSERT INTO example iceberg table VALUES (1, 'first row');" ) \# Alter table, then display schema. spark.sql ( "ALTER TABLE example iceberg table ADD COLUMNS (newDoubleCol double);" ) \# Select and display the contents of the table. spark.sql ( "SELECT FROM example iceberg table" ) .show () Replace the following: PROJECT ID : Your Google Cloud project ID.
- In a local terminal window or in Cloud Shell , run the following curl command to download the iceberg-spark-runtime-3.5 2.12-1.6.1 JAR file to the current directory. curl -o iceberg-spark-runtime-3.5 2.12-1.6.1.jar https://storage-download.googleapis.com/maven-central/maven2/org/apache/iceberg/iceberg-spark-runtime-3.5 2.12/1.6.1/iceberg-spark-runtime-3.5 2.12-1.6.1.jar Uses the gcloud CLI to copy the local iceberg-spark-runtime-3.5 2.12-1.6.1 JAR file from the current directory to your bucket in Cloud Storage. gcloud storage cp iceberg-spark-runtime-3.5 2.12-1.6.1.jar gs:// BUCKET / Submit the Spark SQL job Select a tab to follow the instructions to submit the Spark SQL job to the Managed Service for Apache Spark service using the gcloud CLI, Google Cloud console, or Managed Service for Apache Spark REST API. gcloud Run the following gcloud dataproc jobs submit spark-sql command locally in a local terminal window or in Cloud Shell to submit the Spark SQL job to create the Iceberg table. gcloud dataproc jobs submit spark-sql \ --project= PROJECT ID \ --cluster= CLUSTER NAME \ --region= REGION \ --jars="gs:// BUCKET /1.6.1/iceberg-spark-runtime-3.5 2.12-1.6.1.jar, BIGLAKE ICEBERG CATALOG JAR " \ --properties="spark.sql.catalog.

### "Using Spark data lineage \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage](https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage)
- Source ID: `site-iam-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- To enable Spark data lineage on a cluster, create a Managed Service for Apache Spark cluster with the dataproc:dataproc.lineage.enabled cluster property set to true . gcloud CLI example: gcloud dataproc clusters create CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --properties 'dataproc:dataproc.lineage.enabled=true' You can disable Spark data lineage on a cluster by setting the dataproc:dataproc.lineage.enabled property to false when you create the cluster.
- Enable the APIs Upcoming Spark data lineage changes See the Managed Service for Apache Spark release notes for the announcement of a change that will automatically make Spark data lineage available to your projects and clusters when you enable the Data Lineage API (see Control lineage ingestion for a service ) without requiring additional project or cluster level settings.
- To enable Spark data lineage at the project level, set the following custom project metadata : Key Value DATAPROC LINEAGE ENABLED true DATAPROC CLUSTER SCOPES https://www.googleapis.com/auth/cloud-platform Setting this VM access scope is only necessary for 2.0 image version clusters.
- Enable Spark data lineage at the project level After you enable Spark data lineage at the project level, subsequent Spark jobs that run on Managed Service for Apache Spark clusters in the project will have Spark data lineage enabled.

### Managed Service for Apache Spark driver node groups \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- Source ID: `site-iam-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters" Select-Object -Expand Content You should receive a JSON response similar to the following: { "projectId": " PROJECT ID ", "clusterName": " CLUSTER NAME ", "config": { ... "auxiliaryNodeGroups": [ { "nodeGroup": { "name": "projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME /nodeGroups/ NODE GROUP ID ", "roles": [ "DRIVER" ], "nodeGroupConfig": { "numInstances": SIZE , "instanceNames": [ " CLUSTER NAME -np-q1gp", " CLUSTER NAME -np-xfc0" ], "imageUri": "https://www.googleapis.com/compute/v1/projects/cloud-dataproc-ci/global/images/dataproc-2-0-deb10-...-rc01", "machineTypeUri": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ REGION -a/machineTypes/n1-standard-4", "diskConfig": { "bootDiskSizeGb": 1000, "bootDiskType": "pd-standard" }, "managedGroupConfig": { "instanceTemplateName": "dataproc-2a8224d2-...", "instanceGroupManagerName": "dataproc-2a8224d2-..." }, "minCpuPlatform": "AUTOMATIC", "preemptibility": "NON PREEMPTIBLE" } }, "nodeGroupId": " NODE GROUP ID " } ] }, } Get driver node group cluster metadata You can use the gcloud dataproc node-groups describe command or the Managed Service for Apache Spark API to get driver node group metadata. gcloud gcloud dataproc node-groups describe NODE GROUP ID \ --cluster= CLUSTER NAME \ --region= REGION Required flags: NODE GROUP ID : You can run gcloud dataproc clusters describe CLUSTER NAME to list the node group ID.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME nodeGroups/ Node GROUP ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME /nodeGroups/ NODE GROUP ID ", "roles": [ "DRIVER" ], "nodeGroupConfig": { "numInstances": 5, "imageUri": "https://www.googleapis.com/compute/v1/projects/cloud-dataproc-ci/global/images/dataproc-2-0-deb10-...-rc01", "machineTypeUri": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ REGION -a/machineTypes/n1-standard-4", "diskConfig": { "bootDiskSizeGb": 1000, "bootDiskType": "pd-standard" }, "managedGroupConfig": { "instanceTemplateName": "dataproc-driver-pool-mcia3j656h2fy", "instanceGroupManagerName": "dataproc-driver-pool-mcia3j656h2fy" }, "minCpuPlatform": "AUTOMATIC", "preemptibility": "NON PREEMPTIBLE" } } Resize a driver node group You can use the gcloud dataproc node-groups resize command or the Managed Service for Apache Spark API to add or remove driver nodes from a cluster driver node group. gcloud gcloud dataproc node-groups resize NODE GROUP ID \ --cluster= CLUSTER NAME \ --region= REGION \ --size= SIZE Required flags: NODE GROUP ID : You can run gcloud dataproc clusters describe CLUSTER NAME to list the node group ID.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME /nodeGroups/ Node GROUP ID :resize" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /regions/ REGION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.dataproc.v1.NodeGroupOperationMetadata", "nodeGroupId": " NODE GROUP ID ", "clusterUuid": " CLUSTER UUID ", "status": { "state": "PENDING", "innerState": "PENDING", "stateStartTime": "2022-12-01T23:34:53.064308Z" }, "operationType": "RESIZE", "description": "Scale "up or "down" a GCE node pool to SIZE nodes." } } Delete a driver node group cluster When you delete a Managed Service for Apache Spark cluster , node groups associated with the cluster are deleted.
- HTTP method and URL: POST https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /jobs:submit Request JSON body: { "job": { "placement": { "clusterName": " CLUSTER NAME ", }, "driverSchedulingConfig": { " memoryMb ]": DRIVER MEMORY , " vcores ": DRIVER VCORES }, "sparkJob": { "jarFileUris": "file:///usr/lib/spark/examples/jars/spark-examples.jar", "args": [ "10000" ], "mainClass": "org.apache.spark.examples.SparkPi" } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

