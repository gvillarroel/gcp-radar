---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.677Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Connectors initialization action"
feature_slug: "connectors-initialization-action"
latest_feature_date: "2018-03-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage"
  - "https://docs.cloud.google.com/dataproc/docs/guides/connect-to-data-sources"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-best-practices"
keywords:
  - "connectors"
  - "initialization"
  - "action"
  - "lets"
  - "users"
  - "update"
  - "installed"
  - "storage"
---

# Connectors initialization action

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The Connectors initialization action lets users update the installed Cloud Storage and BigQuery connectors in Dataproc clusters.

## Extended Definition

The Connectors initialization action lets users update the installed Cloud Storage and BigQuery connectors in Dataproc clusters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage](https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage)
- [https://docs.cloud.google.com/dataproc/docs/guides/connect-to-data-sources](https://docs.cloud.google.com/dataproc/docs/guides/connect-to-data-sources)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-best-practices](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-best-practices)

## Supporting Pages

### "Enable Hive data lineage \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage](https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage)
- Source ID: `site-iam-reference`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a Managed Service for Apache Spark cluster Run the following command in a local terminal window or in Cloud Shell to create a Managed Service for Apache Spark cluster . gcloud dataproc clusters create CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --image-version IMAGE VERSION \ --initialization-actions gs://goog-dataproc-initialization-actions- REGION /connectors/connectors.sh, gs://goog-dataproc-initialization-actions- REGION /hive-lineage/hive-lineage.sh \ --metadata hive-bigquery-connector-version= HIVE BQ VERSION Notes: CLUSTER NAME : The name of the cluster.
- IMAGE VERSION The intended image version for the cluster. --initialization-actions : These installation actions, located in Cloud Storage, install the Hive-BigQuery connector and enable Hive data lineage .
- IMAGE VERSION The intended image version for the cluster. --initialization-actions : Specifies an installation action located in a Cloud Storage regional location, that enables Hive data lineage .
- The --metadata flag passes the version to the connectors.sh initialization action to install the Hive-BigQuery connector on the cluster.

### Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/connect-to-data-sources](https://docs.cloud.google.com/dataproc/docs/guides/connect-to-data-sources)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you use a different Managed Service for Apache Spark image base, modify the repository setup and package names. #!/bin/bash Initialization action for installing MS SQL ODBC driver on the cluster. set -e -x Install dependencies for the driver. apt-get update apt-get install -y --no-install-recommends curl gnupg unixodbc-dev Add Microsoft's official repository. curl https://packages.microsoft.com/keys/microsoft.asc apt-key add - curl https://packages.microsoft.com/config/debian/11/prod.list > /etc/apt/sources.list.d/mssql-release.list Install the driver. apt-get update ACCEPT EULA = Y apt-get install -y msodbcsql18 Install the pyodbc library for Python. pip install pyodbc shell gsutil cp install-odbc-mssql.sh gs:// YOUR BUCKET NAME /init-actions/ ``` Create a Managed Service for Apache Spark cluster that runs the initialization action.
- When you create your cluster, point to the initialization action script in Cloud Storage. gcloud dataproc clusters create my-odbc-cluster \ --region = REGION \ --image-version = 2 .2-debian11 \ --initialization-actions = gs:// BUCKET NAME /init-actions/install-odbc-mssql.sh Connect and query using PySpark After the cluster is running, the ODBC driver and pyodbc library are available.
- Cluster-wide If all jobs on a cluster require a specific driver, use an initialization action when you create the cluster to copy the driver JAR from Cloud Storage into the Spark jars directory on every node.
- Copy initialization action scripts from public sources to your own versioned Cloud Storage bucket before you use them in production.

### "Managed Service for Apache Spark best practices for production \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-best-practices](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-best-practices)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Failed action ... see output in: gs://dataproc-<BUCKETID>-us-central1/google-cloud-dataproc-metainfo/CLUSTERID/<CLUSTER ID>\dataproc-initialization-script-0 output Use the gcloud CLI to view staging bucket contents: gcloud storage cat gs:// STAGING BUCKET Sample output: + readonly RANGER VERSION=1.2.0 ...
- Typically, the staging bucket Cloud Storage location is shown in error messages, as shown in the bold text in the following sample error message: ERROR: (gcloud.dataproc.clusters.create) Operation ... failed: ... - Initialization action failed.
- When using cluster initialization actions in a production environment, copy initialization scripts to Cloud Storage rather than sourcing them from a public repository.
- Control initialization action locations Initialization actions allow you to automatically run scripts or install components when you create a Managed Service for Apache Spark cluster (see the dataproc-initialization-actions GitHub repository for common Managed Service for Apache Spark initialization actions).

