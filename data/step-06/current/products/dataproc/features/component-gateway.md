---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.663Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Component Gateway"
feature_slug: "component-gateway"
latest_feature_date: "2019-04-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore"
  - "https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups"
  - "https://docs.cloud.google.com/dataproc/docs/support/diagnose-command"
keywords:
  - "component"
  - "gateway"
  - "provides"
  - "console"
  - "accessible"
  - "links"
  - "web"
  - "interfaces"
---

# Component Gateway

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Component Gateway provides console-accessible links to web interfaces for default and optional cluster components; Component Gateway provides secure access to Dataproc core and optional component web endpoints without SSH tunnels or inbound firewall changes.

## Extended Definition

Component Gateway provides console-accessible links to web interfaces for default and optional cluster components; Component Gateway provides secure access to Dataproc core and optional component web endpoints without SSH tunnels or inbound firewall changes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore](https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore)
- [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- [https://docs.cloud.google.com/dataproc/docs/support/diagnose-command](https://docs.cloud.google.com/dataproc/docs/support/diagnose-command)

## Supporting Pages

### "Create an Apache Iceberg table with metadata in BigLake metastore \_|\_\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore](https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore)
- Source ID: `site-iam-reference`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click the Web Interfaces tab display a list of Component Gateway links to the web interfaces of default and optional components installed on the cluster.
- In a local terminal window or in Cloud Shell , run the following curl command to download the iceberg-spark-runtime-3.5 2.12-1.6.1 JAR file to the current directory. curl -o iceberg-spark-runtime-3.5 2.12-1.6.1.jar https://storage-download.googleapis.com/maven-central/maven2/org/apache/iceberg/iceberg-spark-runtime-3.5 2.12/1.6.1/iceberg-spark-runtime-3.5 2.12-1.6.1.jar Uses the gcloud CLI to copy the local iceberg-spark-runtime-3.5 2.12-1.6.1 JAR file from the current directory to your bucket in Cloud Storage. gcloud storage cp iceberg-spark-runtime-3.5 2.12-1.6.1.jar gs:// BUCKET / Submit the Spark SQL job Select a tab to follow the instructions to submit the Spark SQL job to the Managed Service for Apache Spark service using the gcloud CLI, Google Cloud console, or Managed Service for Apache Spark REST API. gcloud Run the following gcloud dataproc jobs submit spark-sql command locally in a local terminal window or in Cloud Shell to submit the Spark SQL job to create the Iceberg table. gcloud dataproc jobs submit spark-sql \ --project= PROJECT ID \ --cluster= CLUSTER NAME \ --region= REGION \ --jars="gs:// BUCKET /1.6.1/iceberg-spark-runtime-3.5 2.12-1.6.1.jar, BIGLAKE ICEBERG CATALOG JAR " \ --properties="spark.sql.catalog.
- OSS database to BigQuery dataset mapping Note the following mapping between open source database and BigQuery dataset terms: OSS database BigQuery dataset Namespace, Database Dataset Partitioned or Unpartitioned Table Table View View Create an Iceberg table This section shows you how to create an Iceberg table with metadata in BigLake metastore by submitting a Spark SQL code to the Managed Service for Apache Spark service , the Spark SQL CLI , and the Zeppelin component web interface, which run on a Managed Service for Apache Spark cluster.
- USER catalog.warehouse": "gs:// BUCKET / WAREHOUSE FOLDER " }, "jarFileUris": [ "gs:// BUCKET /iceberg-spark-runtime-3.5 2.12-1.6.1.jar", " BIGLAKE ICEBERG CATALOG JAR " ] }, "driverControlFilesUri": "gs://dataproc-...", "driverOutputResourceUri": "gs://dataproc-.../driveroutput", "jobUuid": "...", "region": " REGION " } To monitor job progress and view job output, go to the Managed Service for Apache Spark Jobs page in the Google Cloud console, then click the Job ID to open the Job details page.

### Managed Service for Apache Spark driver node groups \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- Source ID: `site-iam-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Recommended flag: --enable-component-gateway : Add this flag to enable the Managed Service for Apache Spark Component Gateway , which provides access to the YARN web interface.
- Set the EndpointConfig.enableHttpPortAccess property to true to enable the Managed Service for Apache Spark Component Gateway , which provides access to the YARN web interface.
- Run the following gcloud CLI command to list the location of driver logs in Cloud Storage: gcloud dataproc jobs describe JOB ID \ --region= REGION The Cloud Storage location of driver logs is listed as the driverOutputResourceUri in the command output in the following format: driverOutputResourceUri: gs:// CLUSTER STAGING BUCKET /google-cloud-dataproc-metainfo/ CLUSTER UUID /jobs/ JOB ID Console To view node group cluster logs: Enable Logging .
- Client () . get bucket ( matches . group ( 1 )) . blob ( f " { matches . group ( 2 ) } .000000000" ) . download as bytes () . decode ( "utf-8" ) ) print ( f "Job finished successfully: { output } " ) View job logs To view job status and help debug job issues, you can view driver logs using the gcloud CLI or the Google Cloud console. gcloud Job driver logs are streamed to the gcloud CLI output or Google Cloud console during job execution.

### "View cluster diagnostic data \_|\_ Managed Service for Apache Spark \_|\_\

- URL: [https://docs.cloud.google.com/dataproc/docs/support/diagnose-command](https://docs.cloud.google.com/dataproc/docs/support/diagnose-command)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Component gateway logs from journalctl -u google-dataproc-component-gateway /logs/google-dataproc-component-gateway.log Configuration files Item(s) included Location in archive VM metadata /conf/dataproc/metadata Environment variables in /etc/environment /conf/dataproc/environment Managed Service for Apache Spark properties /conf/dataproc/dataproc.properties All files in /etc/google-dataproc/ /conf/dataproc/ All files in /etc/hadoop/conf/ /conf/hadoop/ All files in /etc/hive/conf/ /conf/hive/ All files in /etc/hive-hcatalog/conf/ /conf/hive-hcatalog/ All files in /etc/knox/conf/ /conf/knox/ All files in /etc/pig/conf/ /conf/pig/ All files in /etc/presto/conf/ /conf/presto/ All files in /etc/spark/conf/ /conf/spark/ All files in /etc/tez/conf/ /conf/tez/ All files in /etc/zookeeper/conf/ /conf/zookeeper/ Share the archive file Sensitive log information: If you pass sensitive information in arguments, metadata, or driver output, your logs may contain sensitive information.
- REGION : The cluster's region, for example, us-central1 . --tarball-access = GOOGLE DATAPROC DIAGNOSE This flag provides access to the diagnostic tar file to Google Cloud support .
- It provides an overview of cluster status, including YARN, HDFS, disk, and networking status, and includes warnings to alert you to potential problems.

