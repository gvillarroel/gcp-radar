---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.337Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Apache Spark demo notebook in BigQuery console"
feature_slug: "apache-spark-demo-notebook-in-bigquery-console"
latest_feature_date: "2025-06-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc"
  - "https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui"
keywords:
  - "apache"
  - "spark"
  - "demo"
  - "notebook"
  - "bigquery"
  - "console"
  - "welcome"
  - "tab"
---

# Apache Spark demo notebook in BigQuery console

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery console Welcome tab includes an Apache Spark demo notebook for learning Spark notebooks and serverless Spark in BigQuery.

## Extended Definition

The BigQuery console Welcome tab includes an Apache Spark demo notebook for learning Spark notebooks and serverless Spark in BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc](https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc)
- [https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent](https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui](https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui)

## Supporting Pages

### "Configure BigLake metastore for Managed Service for Apache Spark and Spark\

- URL: [https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc](https://docs.cloud.google.com/bigquery/docs/bqms-use-dataproc)
- Source ID: `site-docs-reference-5`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Configure the Iceberg custom catalog plugin for BigLake metastore: FLINK VERSION = 1 .19 ICEBERG VERSION = 1 .6.1 cd /usr/lib/flink sudo wget -c https://repo.maven.apache.org/maven2/org/apache/iceberg/iceberg-flink-runtime- ${ FLINK VERSION } / ${ ICEBERG VERSION } /iceberg-flink-runtime- ${ FLINK VERSION } - ${ ICEBERG VERSION } .jar -P lib sudo gcloud storage cp gs://spark-lib/bigquery/iceberg-bigquery-catalog- ${ ICEBERG VERSION } -1.0.2.jar lib/ Start the Flink session on YARN: HADOOP CLASSPATH = hadoop classpath sudo bin/yarn-session.sh -nm flink-dataproc -d sudo bin/sql-client.sh embedded \ -s yarn-session Create a catalog in Flink: CREATE CATALOG CATALOG NAME WITH ( 'type' = 'iceberg' , 'warehouse' = ' WAREHOUSE DIRECTORY ' , 'catalog-impl' = 'org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog' , 'gcp project' = ' PROJECT ID ' , 'gcp location' = ' LOCATION ' ); Replace the following: CATALOG NAME : the Flink catalog identifier, which is linked to a BigLake metastore catalog.
- Required roles To get the permissions that you need to configure BigLake metastore, ask your administrator to grant you the following IAM roles: Create a Managed Service for Apache Spark cluster: Dataproc Worker ( roles/dataproc.worker ) on the Compute Engine default service account in the project Create BigLake metastore tables: Dataproc Worker ( roles/dataproc.worker ) on the Dataproc VM service account in the project BigQuery Data Editor ( roles/bigquery.dataEditor ) on the Dataproc VM service account in the project Storage Object User ( roles/storage.objectUser ) on the Dataproc VM service account in the project Query BigLake metastore tables: BigQuery Data Viewer ( roles/bigquery.dataViewer ) on the project BigQuery User ( roles/bigquery.user ) on the project Storage Object Viewer ( roles/storage.objectViewer ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- This document explains how to configure the custom Iceberg catalog for BigQuery in BigLake metastore with either Managed Service for Apache Spark or Managed Service for Apache Spark .
- CATALOG NAME .catalog-impl" , "org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog" ) \ . config ( "spark.sql.catalog.

### "Use the Colab Enterprise Data Science Agent with BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent](https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent)
- Source ID: `site-docs-reference-5`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- You can use the DSA for: Large-scale data processing : Use BigQuery ML, BigQuery DataFrames, or Managed Service for Apache Spark to perform distributed data processing on large datasets.
- Generating a plan : Generate and modify a plan to complete a particular task using common tools such as Python, SQL, Managed Service for Apache Spark, and BigQuery DataFrames.
- Go to BigQuery On the BigQuery Studio welcome page, under Create new , click Notebook .
- Go to BigQuery On the BigQuery Studio welcome page, under Create new , click Notebook .

### Explore BigQuery in the Google Cloud console \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui](https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui)
- Source ID: `site-docs-reference-5`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- The Create new section that has options to create a new SQL query, notebook, Apache Spark notebook, data canvas, data preparation file, pipeline, or table.
- Go to Overview You can also open the BigQuery Overview page by entering the following URL in your browser: https://console.cloud.google.com/bigquery/overview Review the following sections of the Overview page: The Introduction section: gives you a quick video overview of BigQuery's capabilities.
- Note: To see how to use keyboard shortcuts in Studio, click keyboard BigQuery Studio shortcuts in the BigQuery Studio toolbar: To explore the Studio page, follow these steps: In the Google Cloud console, go to the BigQuery Studio page.
- Explore the Studio page The Studio page BigQuery is the central point for viewing your BigQuery resources and for performing common tasks such as creating datasets and creating and running notebooks.

