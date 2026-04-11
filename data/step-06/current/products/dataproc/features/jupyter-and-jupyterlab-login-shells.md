---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.070Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Jupyter and JupyterLab login shells"
feature_slug: "jupyter-and-jupyterlab-login-shells"
latest_feature_date: "2020-07-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface"
keywords:
  - "jupyter"
  - "and"
  - "jupyterlab"
  - "login"
  - "shells"
  - "terminals"
  - "launched"
  - "from"
---

# Jupyter and JupyterLab login shells

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Terminals launched from Jupyter and JupyterLab use login shells that behave like SSH sessions as root.

## Extended Definition

Terminals launched from Jupyter and JupyterLab use login shells that behave like SSH sessions as root.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- [https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface](https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- July 24, 2020 Feature Terminals started in Jupyter and JupyterLab now use login shells.
- October 28, 2022 Announcement The following preview Dataproc image versions are available: 2.1.0-RC2-debian11 2.1.0-RC2-rocky8 2.1.0-RC2-ubuntu20 The following component versions are available for use with the 2.1.0-RC2 images (the HBase and Druid components are not supported in 2.1 image versions): Apache Atlas 2.2.0 Apache Flink 1.15.0 Apache Hadoop 3.3.3 Apache Hive 3.1.3 Apache Hive WebHCat 3.1.3 Apache Kafka 3.1.0 Apache Pig 0.18.0-SNAPSHOT Apache Spark 3.3.0 Apache Sqoop v1 1.5.0-SNAPSHOT Apache Sqoop v2 1.99.6 Apache Tez 0.10.1 Cloud Storage Connector hadoop3-2.2.8 Conscrypt 2.5.2 Docker 20.10 Hue 4.10.0 Java temurin-11-jdk JupyterLab Notebook 3.4 Oozie 5.2.1 Presto 376 Python 3.10 R 4.1 Ranger 2.2.0 Scala 2.12.14 Solr 9.0.0 Zeppelin Notebook 0.10.1 Zookeeper 3.8.0 Security Dataproc Serverless for Spark runtime version 2.0.1 upgrades Apache Commons Text to 1.10.0 , addressing CVE-2022-42889 Libraries Dataproc Serverless for Spark runtime version 2.0.1 upgrades the following components: Spark to 3.3.1 SLF4J to 2.0.3 Announcement Dataproc Serverless for Spark now now uses runtime version 1.0.21 and 2.0.1 .
- Change New sub-minor versions of Cloud Dataproc images: 1.2.86-debian9, 1.3.46-debian9, 1.4.17-debian9, 1.5.0-RC2-debian9, 1.3.46-ubuntu18, 1.4.17-ubuntu18, 1.5.0-RC2-ubuntu18 Change Added a warning when clusters are created with component gateway and kerberos as they are not currently supported together Change 1.3 image update - Upgraded Hive to version 2.3.6 Change 1.4 image update - Fixed a bug in the Jupyter component that prevented creating text files using the Jupyter and JupyterLab UIs Change 1.5 preview image update: Updated Anaconda to version 2019.10 Updated Miniconda to version 4.7.12.1 Upgrade Hue to version 4.5.0 Upgraded Scala to version 2.12.10 Upgrade Hadoop to version 2.10.0 Unset java.net.preferIPv4Stack=true property in Hadoop November 26, 2019 Issue 1.3 and 1.4 images: Cloud Dataproc images in the 1.3 and 1.4 minor version tracks are affected by an issue that causes the YARN Timeline Server to excessively log without proper rotation.
- Change Image 1.5 and 2.0 Updated Oozie version to 5.2.1 The Jupyter optional component now uses the "GCS" subdirectory as the initial working directory when you open the JupyterLab UI.

### Managed Service for Apache Spark driver node groups \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- Source ID: `site-iam-reference`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME nodeGroups/ Node GROUP ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME /nodeGroups/ NODE GROUP ID ", "roles": [ "DRIVER" ], "nodeGroupConfig": { "numInstances": 5, "imageUri": "https://www.googleapis.com/compute/v1/projects/cloud-dataproc-ci/global/images/dataproc-2-0-deb10-...-rc01", "machineTypeUri": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ REGION -a/machineTypes/n1-standard-4", "diskConfig": { "bootDiskSizeGb": 1000, "bootDiskType": "pd-standard" }, "managedGroupConfig": { "instanceTemplateName": "dataproc-driver-pool-mcia3j656h2fy", "instanceGroupManagerName": "dataproc-driver-pool-mcia3j656h2fy" }, "minCpuPlatform": "AUTOMATIC", "preemptibility": "NON PREEMPTIBLE" } } Resize a driver node group You can use the gcloud dataproc node-groups resize command or the Managed Service for Apache Spark API to add or remove driver nodes from a cluster driver node group. gcloud gcloud dataproc node-groups resize NODE GROUP ID \ --cluster= CLUSTER NAME \ --region= REGION \ --size= SIZE Required flags: NODE GROUP ID : You can run gcloud dataproc clusters describe CLUSTER NAME to list the node group ID.
- HTTP method and URL: POST https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /jobs:submit Request JSON body: { "job": { "placement": { "clusterName": " CLUSTER NAME ", }, "driverSchedulingConfig": { " memoryMb ]": DRIVER MEMORY , " vcores ": DRIVER VCORES }, "sparkJob": { "jarFileUris": "file:///usr/lib/spark/examples/jars/spark-examples.jar", "args": [ "10000" ], "mainClass": "org.apache.spark.examples.SparkPi" } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters Request JSON body: { "clusterName":" CLUSTER NAME ", "config": { "softwareConfig": { "imageVersion":"" }, "endpointConfig": { "enableHttpPortAccess": true }, "auxiliaryNodeGroups": [{ "nodeGroup":{ "roles":["DRIVER"], "nodeGroupConfig": { "numInstances": SIZE } }, "nodeGroupId": " NODE GROUP ID " }] } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Example: { "size": SIZE , "gracefulDecommissionTimeout": " TIMEOUT DURATION " } HTTP method and URL: POST https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME /nodeGroups/ Node GROUP ID :resize Request JSON body: { "size": SIZE , } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Dataproc Metastore administrator interface \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface](https://docs.cloud.google.com/dataproc-metastore/docs/admin-interface)
- Source ID: `site-docs-root-2`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows a sample command that runs a select query from a database named DBS. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" -X POST -d '{"query": "select from DBS;"}' \ https://metastore.googleapis.com/projects/dpms/locations/us-central1/services/dpms1:queryMetadata Interpret the output of a query metadata operation When you first run a query metadata command, Dataproc Metastore automatically creates a Google Cloud folder in your artifacts Google Cloud bucket.
- This process involves following fewer steps than the typical workflow, such as creating a Managed Service for Apache Spark cluster, connecting to the cluster using SSH, starting a Hive instance, and then finally running a query (for example, SELECT FROM table name ).
- Required roles To get the permissions that you need to use the Dataproc Metastore administrator interface, ask your administrator to grant you the following IAM roles on your project, based on the principle of least privilege: To query Dataproc Metastore metadata: Metadata query administrator ( roles/metastore.metadataQueryAdmin ) on the user account or service account To alter the resource location of your metadata, including databases, tables and partitions, or move a table to another database: Metadata mutate administrator ( roles/metastore.metadataMutateAdmin ) on the user account or service account Dataproc Metastore Editor ( roles/metastore.editor ) on the user account or service account For more information about granting roles, see Manage access to projects, folders, and organizations .
- The following example shows a sample command that moves a database called called testdb1 to a different database called testdb2 . curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" -X POST -d '{"table name": "testtb1", "db name": "testdb1", "destination db name": "testdb2"}' https://metastore.googleapis.com/projects/dpms/locations/asia-northeast2/services/dpms1:moveTableToDatabase What's next Export metadata Update a metastore Back up a metastore Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

