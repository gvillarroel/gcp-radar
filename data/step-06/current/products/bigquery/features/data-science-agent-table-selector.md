---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.310Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Data Science Agent table selector"
feature_slug: "data-science-agent-table-selector"
latest_feature_date: "2025-08-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui"
  - "https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer"
keywords:
  - "science"
  - "agent"
  - "table"
  - "selector"
  - "bigquery"
  - "includes"
  - "choosing"
  - "one"
---

# Data Science Agent table selector

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The Data Science Agent in BigQuery includes a table selector for choosing one or more tables to analyze.

## Extended Definition

The Data Science Agent in BigQuery includes a table selector for choosing one or more tables to analyze.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent](https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui](https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui)
- [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)

## Supporting Pages

### "Use the Colab Enterprise Data Science Agent with BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent](https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent)
- Source ID: `site-docs-reference-5`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Data Science Agent supports the following data sources: CSV files BigQuery tables The code produced by the Data Science Agent only runs in your notebook's runtime.
- The Data Science Agent (DSA) for Colab Enterprise and BigQuery lets you automate exploratory data analysis, perform machine learning tasks, and deliver insights all within a Colab Enterprise notebook.
- Analyze BigQuery tables To analyze a BigQuery table, choose one or more tables in the table selector, provide a reference to the table in your prompt, or search for a table by using the @ symbol.
- Use the Colab Enterprise Data Science Agent with BigQuery Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

### Explore BigQuery in the Google Cloud console \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui](https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui)
- Source ID: `site-docs-reference-5`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- After you select a data source, you can do the following based on the capabilities available for your data source: Set up BigQuery table over external data ( federation ) : enables BigQuery to access external data without ingesting it into BigQuery.
- The Studio page has the following components: Explorer tab of the left pane : use the Explorer tab to work with tables, views, routines, and other BigQuery resources, and view your job history .
- Data agents contain table metadata and use case-specific query processing instructions that define the best way to answer user questions about a set of tables that you select.
- The Agents page The Agents page ( Preview ) is a central location for creating and chatting with data agents that are designed to answer questions about BigQuery resources.

### "Migrate Apache Hive Metastore tables to Google Cloud \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- Source ID: `site-api-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- The service account should belong to the same Google Cloud project where the transfer configuration and destination dataset is created. bq To schedule Hive Metastore transfer, enter the bq mk command and supply the transfer creation flag --transfer config : bq mk --transfer config --data source = hadoop display name = ' TRANSFER NAME ' --service account name = ' SERVICE ACCOUNT ' --project id = ' PROJECT ID ' location = ' REGION ' --params = '{ "transfer strategy":" TRANSFER STRATEGY ", "table name patterns":" LIST OF TABLES ", "table metadata path":"gs:// DUMPER BUCKET /hive-dumper-output.zip", "target gcs file path":"gs:// MIGRATION BUCKET ", "metastore":" METASTORE ", "destination dataproc metastore":" DATAPROC METASTORE URL ", "destination bigquery dataset":" BIGLAKE METASTORE DATASET ", "translation output gcs path":"gs:// TRANSLATION OUTPUT BUCKET /metadata/config/default database/", "storage type":" STORAGE TYPE ", "agent pool name":" AGENT POOL NAME ", "aws access key id":" AWS ACCESS KEY ID ", "aws secret access key":" AWS SECRET ACCESS KEY ", "azure sas token":" AZURE SAS TOKEN ", "partition filter gcs path":" FILTER GCS PATH " }' Replace the following: TRANSFER NAME : the display name for the transfer configuration.
- Run the API request with the following information: GET https://bigquerydatatransfer.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /transferConfigs/ CONFIG ID /transferResources Example Response (abridged) (JSON): { "transferResources": [ { "name": "projects/.../transferResources/table1", "latestStatusDetail": { "state": "RESOURCE TRANSFER SUCCEEDED", "completedPercentage": 100.0 }, "updateTime": "2026-02-03T22:42:06Z" } ] } curl command: curl -X GET "https://bigquerydatatransfer.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /transferConfigs/ CONFIG ID /transferResources" -H "Authorization: Bearer $( gcloud auth print-access-token ) " -H "Accept: application/json" You can filter the results by resource name or state.
- If you are using a service account, grant the service agent the roles/iam.serviceAccountTokenCreator role with the following command: gcloud iam service-accounts add-iam-policy-binding SERVICE ACCOUNT --member serviceAccount:service- PROJECT NUMBER @gcp-sa-bigquerydatatransfer.iam.gserviceaccount.com --role roles/iam.serviceAccountTokenCreator Grant the Storage Transfer Service service agent ( project- PROJECT NUMBER @storage-transfer-service.iam.gserviceaccount.com ) the following roles in the project: roles/storage.admin If you are migrating from on-prem/HDFS, you must also grant the roles/storagetransfer.serviceAgent role.
- 30 2 PATH TO SCRIPT \ --dumper-executable PATH TO DUMPER EXECUTABLE \ --gcs-base-path GCS PATH TO UPLOAD DUMPER OUTPUT \ --local-base-dir LOCAL PATH TO SAVE INTERMEDIARY FILES If your Hive Metastore instance requires Kerberos authentication, run the following command: Run the Hive dumper daily at 2 :30 AM for incremental BigQuery transfer with Kerberos authentication.

