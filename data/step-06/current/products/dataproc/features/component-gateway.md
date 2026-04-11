---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.098Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Component Gateway"
feature_slug: "component-gateway"
latest_feature_date: "2019-04-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore"
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial"
keywords:
  - "component"
  - "gateway"
  - "provides"
  - "console"
  - "accessible"
  - "links"
  - "to"
  - "web"
---

# Component Gateway

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Component Gateway provides console-accessible links to web interfaces for default and optional cluster components; Component Gateway provides secure access to Dataproc core and optional component web endpoints without SSH tunnels or inbound firewall changes.

## Extended Definition

Component Gateway provides console-accessible links to web interfaces for default and optional cluster components; Component Gateway provides secure access to Dataproc core and optional component web endpoints without SSH tunnels or inbound firewall changes.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore](https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- After enabling this feature, the Web Interfaces tab on the Cluster details form on the GCP console lists the Component Gateway links to the web interfaces of default and optional components installed on the cluster.
- March 26, 2019 Feature Announcing the Alpha release of Cloud Dataproc Component Gateway , which provides secure access to web endpoints for Cloud Dataproc core and optional components without relying on SSH tunnels or modifying firewall rules to allow inbound traffic (applies to clusters created with image version 1.3.29 and later).
- July 07, 2020 Feature Announcing the General Availability (GA) release of Dataproc Component Gateway , which provides secure access to web endpoints for Dataproc default and optional components.
- May 01, 2020 Feature Announcing the Beta release of Dataproc Component Gateway , which provides secure access to web endpoints for Dataproc default and optional components.

### "Create an Apache Iceberg table with metadata in BigLake metastore \_|\_\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore](https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore)
- Source ID: `site-iam-reference`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Click the Web Interfaces tab display a list of Component Gateway links to the web interfaces of default and optional components installed on the cluster.
- OSS database to BigQuery dataset mapping Note the following mapping between open source database and BigQuery dataset terms: OSS database BigQuery dataset Namespace, Database Dataset Partitioned or Unpartitioned Table Table View View Create an Iceberg table This section shows you how to create an Iceberg table with metadata in BigLake metastore by submitting a Spark SQL code to the Managed Service for Apache Spark service , the Spark SQL CLI , and the Zeppelin component web interface, which run on a Managed Service for Apache Spark cluster.
- If you want to run the Zeppelin web interface example in this guide, you must use or create a Managed Service for Apache Spark cluster with the Zeppelin optional component enabled .
- In a local terminal window or in Cloud Shell , run the following curl command to download the iceberg-spark-runtime-3.5 2.12-1.6.1 JAR file to the current directory. curl -o iceberg-spark-runtime-3.5 2.12-1.6.1.jar https://storage-download.googleapis.com/maven-central/maven2/org/apache/iceberg/iceberg-spark-runtime-3.5 2.12/1.6.1/iceberg-spark-runtime-3.5 2.12-1.6.1.jar Uses the gcloud CLI to copy the local iceberg-spark-runtime-3.5 2.12-1.6.1 JAR file from the current directory to your bucket in Cloud Storage. gcloud storage cp iceberg-spark-runtime-3.5 2.12-1.6.1.jar gs:// BUCKET / Submit the Spark SQL job Select a tab to follow the instructions to submit the Spark SQL job to the Managed Service for Apache Spark service using the gcloud CLI, Google Cloud console, or Managed Service for Apache Spark REST API. gcloud Run the following gcloud dataproc jobs submit spark-sql command locally in a local terminal window or in Cloud Shell to submit the Spark SQL job to create the Iceberg table. gcloud dataproc jobs submit spark-sql \ --project= PROJECT ID \ --cluster= CLUSTER NAME \ --region= REGION \ --jars="gs:// BUCKET /1.6.1/iceberg-spark-runtime-3.5 2.12-1.6.1.jar, BIGLAKE ICEBERG CATALOG JAR " \ --properties="spark.sql.catalog.

### "Use the Cloud Storage connector with Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Costs In this document, you use the following billable components of Google Cloud: Compute Engine Managed Service for Apache Spark Cloud Storage To generate a cost estimate based on your projected usage, use the pricing calculator .
- To initialize the gcloud CLI, run the following command: gcloud init In the Google Cloud console, on the project selector page, select or create a Google Cloud project.
- All Managed Service for Apache Spark cluster image versions have the Spark components needed for this tutorial already installed.
- Delete the Cloud Storage bucket Google Cloud console In the Google Cloud console, go to the Cloud Storage Buckets page.

