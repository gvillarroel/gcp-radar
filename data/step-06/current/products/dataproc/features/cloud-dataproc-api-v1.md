---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.132Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Cloud Dataproc API v1"
feature_slug: "cloud-dataproc-api-v1"
latest_feature_date: "2016-02-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/authentication"
keywords:
  - "dataproc"
  - "api"
  - "v1"
  - "the"
  - "provides"
  - "live"
  - "general"
  - "with"
---

# Cloud Dataproc API v1

Product: Dataproc
Coverage: LOW

## Step 02 Summary

The v1 Cloud Dataproc API provides the live general API with regional support and related fixes.

## Extended Definition

The v1 Cloud Dataproc API provides the live general API with regional support and related fixes.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc-metastore/docs/authentication](https://docs.cloud.google.com/dataproc-metastore/docs/authentication)

## Supporting Pages

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Node Group Controller Grpc The NodeGroupControllerService provides methods to manage node groups of Compute Engine managed instances. com. google. cloud. dataproc. v1.
- Instance Selection Result Defines a mapping from machine types to the number of VMs that are created with each machine type. com. google. cloud. dataproc. v1.
- Async Service The NodeGroupControllerService provides methods to manage node groups of Compute Engine managed instances. com. google. cloud. dataproc. v1.
- Cluster Controller Grpc The ClusterControllerService provides methods to manage clusters of Compute Engine instances. com. google. cloud. dataproc. v1.

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- This release also includes new versions of the Cloud Storage and Google BigQuery connectors . v1 API - The v1 API for Cloud Dataproc is now live.
- Fixed Forced distcp settings to match mapred-site.xml settings to provide additional fixes for the distcp command (see this related JIRA ) Ensured that workers created during an update do not join the cluster until after custom initialization actions are complete Ensured that workers always disconnect from a cluster when the Cloud Dataproc agent is shutdown Fixed a race condition in the API frontend that occurred when validating a request and marking cluster as updating Enhanced validation checks for quota, Cloud Dataproc image, and initialization actions when updating clusters Improved handling of jobs when the Cloud Dataproc agent is restarted GCP Console Allowed duplicate arguments when submitting a job Replaced generic Failed to load message with details about the cause of an error when an error occurs that is not related to Cloud Dataproc When a single jar file for a job is submitted, allowed it to be listed only in the Main class or jar field on the Submit a Job form, and no longer required it to also be listed in the Jar files field November 18, 2015 Change Core service improvements If set, a project's default zone setting is now used as the default value for the zone in the create-cluster form in the GCP Console.
- October 28, 2022 Announcement The following preview Dataproc image versions are available: 2.1.0-RC2-debian11 2.1.0-RC2-rocky8 2.1.0-RC2-ubuntu20 The following component versions are available for use with the 2.1.0-RC2 images (the HBase and Druid components are not supported in 2.1 image versions): Apache Atlas 2.2.0 Apache Flink 1.15.0 Apache Hadoop 3.3.3 Apache Hive 3.1.3 Apache Hive WebHCat 3.1.3 Apache Kafka 3.1.0 Apache Pig 0.18.0-SNAPSHOT Apache Spark 3.3.0 Apache Sqoop v1 1.5.0-SNAPSHOT Apache Sqoop v2 1.99.6 Apache Tez 0.10.1 Cloud Storage Connector hadoop3-2.2.8 Conscrypt 2.5.2 Docker 20.10 Hue 4.10.0 Java temurin-11-jdk JupyterLab Notebook 3.4 Oozie 5.2.1 Presto 376 Python 3.10 R 4.1 Ranger 2.2.0 Scala 2.12.14 Solr 9.0.0 Zeppelin Notebook 0.10.1 Zookeeper 3.8.0 Security Dataproc Serverless for Spark runtime version 2.0.1 upgrades Apache Commons Text to 1.10.0 , addressing CVE-2022-42889 Libraries Dataproc Serverless for Spark runtime version 2.0.1 upgrades the following components: Spark to 3.3.1 SLF4J to 2.0.3 Announcement Dataproc Serverless for Spark now now uses runtime version 1.0.21 and 2.0.1 .
- February 04, 2026 Announcement Upcoming Spark data lineage changes See the upcoming May, 2026 Dataproc and Serverless for Apache Spark release notes for an announcement of a change that will automatically enable Dataproc Spark data lineage and Serverless for Apache Spark data lineage when you enable the Data Lineage API (see Control lineage ingestion for a service ) without requiring additional project, cluster, batch workload, or interactive session settings.

### Authenticate to Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/authentication](https://docs.cloud.google.com/dataproc-metastore/docs/authentication)
- Source ID: `site-docs-root-2`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Google Cloud CLI When you use the gcloud CLI to access Dataproc Metastore, you log in to the gcloud CLI with a user account, which provides the credentials used by the gcloud CLI commands.
- To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Execute the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" PowerShell (Windows) Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" Select-Object -Expand Content For more information about authenticating using REST and gRPC, see Authenticate for using REST .
- You can access the API in the following ways: Client libraries Google Cloud CLI REST Client libraries The Dataproc Metastore client libraries provide high-level language support for authenticating to Dataproc Metastore programmatically.
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Authenticate to Dataproc Metastore Stay organized with collections Save and categorize content based on your preferences.

