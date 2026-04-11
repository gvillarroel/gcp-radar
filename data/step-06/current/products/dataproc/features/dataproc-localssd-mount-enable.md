---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.123Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "dataproc.localssd.mount.enable"
feature_slug: "dataproc-localssd-mount-enable"
latest_feature_date: "2016-10-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos"
  - "https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups"
keywords:
  - "dataproc"
  - "localssd"
  - "mount"
  - "enable"
  - "the"
  - "property"
  - "lets"
  - "users"
---

# dataproc.localssd.mount.enable

Product: Dataproc
Coverage: LOW

## Step 02 Summary

The dataproc.localssd.mount.enable property lets users prevent Dataproc from mounting local SSDs for HDFS and temporary Hadoop directories.

## Extended Definition

The dataproc.localssd.mount.enable property lets users prevent Dataproc from mounting local SSDs for HDFS and temporary Hadoop directories.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos)
- [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- For more information, review the Cloud Storage or BigQuery change notes in the GitHub repository. dataproc.localssd.mount.enable – Added the new property dataproc.localssd.mount.enable that can be set at cluster deployment time to make Cloud Dataproc ignore local SSDs.
- This property can be set by using the argument --properties dataproc:dataproc.localssd.mount.enable=false when creating a Cloud Dataproc cluster.
- Users can overwrite the locations of job history file persistence through the following properties: mapreduce.jobhistory.done-dir mapreduce.jobhistory.intermediate-done-dir spark.eventLog.dir spark.history.fs.logDirectory Feature Customers can now enable the Cloud Profiler when submitting a Dataproc job by setting the cloud.profiler.enable property.
- November 13, 2025 Announcement New Serverless for Apache Spark runtime versions : 1.2.62 2.2.62 2.3.15 Feature Serverless for Apache Spark: Added the dataproc.artifacts.remove property, which lets users remove default artifacts, such as spark-bigquery-connector , iceberg , and delta-lake from a Serverless for Apache Spark runtime.

### "Configure Kerberos for Dataproc Metastore Thrift endpoints \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos)
- Source ID: `site-docs-root-2`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the SSH session, open the /etc/hive/conf/hive-site.xml file. sudo vim /etc/hive/conf/hive-site.xml Modify /etc/hive/conf/hive-site.xml on the Managed Service for Apache Spark cluster. < property > < name>hive . metastore . uris < / name > < ! -- Update this value . -- > < value> ENDPOINT URI < / value > < / property > < ! -- Add this property entry . -- > < property > < name>hive . metastore . warehouse . dir < / name > < value> WAREHOUSE DIR < / value > < / property > Restart HiveServer2: sudo systemctl restart hive-server2.service Configure Managed Service for Apache Spark before submitting jobs To run your Managed Service for Apache Spark jobs , you must add the hive user to the allowed.system.users property in the Hadoop container-executor.cfg file.
- In the SSH session, open the Hadoop container-executor.cfg file. sudo vim /etc/hadoop/conf/container-executor.cfg Add the following line on every Managed Service for Apache Spark node. allowed.system.users=hive Get a Kerberos ticket Get the Kerberos ticket, before connecting to the Dataproc Metastore instance. sudo klist -kte /etc/security/keytab/metastore.service.keytab sudo kinit -kt /etc/security/keytab/metastore.service.keytab PRINCIPAL NAME sudo klist # gets the ticket information. sudo hive Replace the following: PRINCIPAL NAME : the name of your principal.
- Create a Managed Service for Apache Spark cluster and enable Kerberos gcloud To set up a Managed Service for Apache Spark cluster with Kerberos, run the following gcloud dataproc clusters create command: gcloud dataproc clusters create CLUSTER NAME \ --image-version=2.0 \ --enable-kerberos \ --scopes 'https://www.googleapis.com/auth/cloud-platform' Replace the following: CLUSTER NAME : the name of your Managed Service for Apache Spark cluster.
- Enable Kerberos for Dataproc Metastore The following instructions show you how to configure Kerberos for a Dataproc Metastore service that is attached to a Managed Service for Apache Spark cluster.

### Managed Service for Apache Spark driver node groups \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- Source ID: `site-iam-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters Request JSON body: { "clusterName":" CLUSTER NAME ", "config": { "softwareConfig": { "imageVersion":"" }, "endpointConfig": { "enableHttpPortAccess": true }, "auxiliaryNodeGroups": [{ "nodeGroup":{ "roles":["DRIVER"], "nodeGroupConfig": { "numInstances": SIZE } }, "nodeGroupId": " NODE GROUP ID " }] } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Run the following gcloud CLI command to list the location of driver logs in Cloud Storage: gcloud dataproc jobs describe JOB ID \ --region= REGION The Cloud Storage location of driver logs is listed as the driverOutputResourceUri in the command output in the following format: driverOutputResourceUri: gs:// CLUSTER STAGING BUCKET /google-cloud-dataproc-metainfo/ CLUSTER UUID /jobs/ JOB ID Console To view node group cluster logs: Enable Logging .
- Driver node group metric Description yarn:ResourceManager:DriverPoolsQueueMetrics:AvailableMB The amount available memory in Mebibytes in dataproc-driverpool-driver-queue under the dataproc-driverpool partition. yarn:ResourceManager:DriverPoolsQueueMetrics:PendingContainers The number of pending (queued) containers in dataproc-driverpool-driver-queue under the dataproc-driverpool partition.
- Set the EndpointConfig.enableHttpPortAccess property to true to enable the Managed Service for Apache Spark Component Gateway , which provides access to the YARN web interface.

