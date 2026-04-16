---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.583Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Hadoop Google Secret Manager Credential Provider for Serverless Spark"
feature_slug: "hadoop-google-secret-manager-credential-provider-for-serverless-spark"
latest_feature_date: "2024-10-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/hadoop-google-secret-manager-credential-provider"
  - "https://docs.cloud.google.com/dataproc/docs/guides/connect-to-data-sources"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
keywords:
  - "hadoop"
  - "secret"
  - "manager"
  - "credential"
  - "provider"
  - "serverless"
  - "spark"
  - "dataproc"
---

# Hadoop Google Secret Manager Credential Provider for Serverless Spark

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc Serverless for Spark supports the Hadoop Google Secret Manager Credential Provider in 1.2 and 2.2 runtimes.

## Extended Definition

Dataproc Serverless for Spark supports the Hadoop Google Secret Manager Credential Provider in 1.2 and 2.2 runtimes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/hadoop-google-secret-manager-credential-provider](https://docs.cloud.google.com/dataproc/docs/guides/hadoop-google-secret-manager-credential-provider)
- [https://docs.cloud.google.com/dataproc/docs/guides/connect-to-data-sources](https://docs.cloud.google.com/dataproc/docs/guides/connect-to-data-sources)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)

## Supporting Pages

### "Use Secret Manager credential provider \_|\_ Managed Service for Apache\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/hadoop-google-secret-manager-credential-provider](https://docs.cloud.google.com/dataproc/docs/guides/hadoop-google-secret-manager-credential-provider)
- Source ID: `site-iam-reference`
- Final score: 306
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Submit a Managed Service for Apache Spark with Secret Manager credential provider Run the following command locally or in Cloud Shell to submit a Managed Service for Apache Spark job with the required properties. gcloud dataproc jobs submit CLUSTER NAME \ --region= REGION \ --properties="hadoop.security.credential.provider.path=gsm://projects/ PROJECT ID ,hadoop.security.credstore.google-secret-manager.secret-id.substitute-dot-operator=true" \ ...other flags as needed... \ -- job-args Notes: CLUSTER NAME : the name of the cluster that will run the job.
- Create a Managed Service for Apache Spark cluster with Secret Manager credential provider Run the following command locally or in Cloud Shell to create a Managed Service for Apache Spark cluster with the required properties. gcloud dataproc clusters create CLUSTER NAME \ --region= REGION \ --properties="hadoop:hadoop.security.credential.provider.path=gsm://projects/ PROJECT ID ,hadoop:hadoop.security.credstore.google-secret-manager.secret-id.substitute-dot-operator=true" \ ...other flags as needed...
- Use this cluster to run Hive jobs that connect to the external metastore on another Managed Service for Apache Spark cluster. gcloud dataproc clusters create CLUSTER NAME \ --region= REGION \ --properties="hive:javax.jdo.option.ConnectionURL=jdbc:mysql:// METASTORE CLUSTER NAME -m/metastore,hive:hadoop.security.credential.provider.path=gsm://projects/ PROJECT ID ,hive:hadoop.security.credstore.google-secret-manager.secret-id.substitute-dot-operator=true" \ ...other flags as needed...
- Example properties: hadoop.security.credential.provider.path=gsm://projects/ PROJECT ID hadoop.security.credstore.google-secret-manager.secret-id.substitute-dot-operator=true Restart Hive Metastore. sudo systemctl restart hive-metastore Create a cluster with an external Hive Metastore Run the following command locally or in Cloud Shell to create a Managed Service for Apache Spark cluster with the following cluster properties.

### Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/connect-to-data-sources](https://docs.cloud.google.com/dataproc/docs/guides/connect-to-data-sources)
- Source ID: `site-docs-root`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use a service like Secret Manager to handle sensitive credentials. db properties = { "user" : " USERNAME " , "password" : " PASSWORD " , "driver" : "org.postgresql.Driver" } jdbc url = "jdbc:postgresql:// DB HOST : DB PORT / DATABASE " spark = SparkSession . builder . appName ( "Postgres JDBC Example" ) . getOrCreate () Read data from a PostgreSQL table df = spark . read . jdbc ( url = jdbc url , table = "public.my table" , properties = db properties ) df . printSchema () df . show () Write data to a new PostgreSQL table ( df . write . jdbc ( url = jdbc url , table = "public.new table" , mode = "overwrite" , properties = db properties )) if name == " main " : main () Connect to external databases using ODBC To connect to data sources where a JDBC driver is unavailable, use an Open Database Connectivity (ODBC) driver.
- Use Secret Manager to store credentials securely and access them from your Managed Service for Apache Spark jobs.
- Submit your PySpark job and reference the driver's Cloud Storage path with the --jars flag. gcloud dataproc jobs submit pyspark my job.py \ --cluster = MY CLUSTER \ --region = REGION \ --jars = gs:// YOUR BUCKET NAME /drivers/postgresql-42.7.3.jar Use the following code in your job.py file to read from and write to the database. from pyspark.sql import SparkSession def main (): WARNING: Do not hardcode credentials.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sample dataproc.custom.properties file: dataproc.conscrypt.provider.enable= VALUE dataproc.logging.stackdriver.enable= VALUE Sample customization script file-creation snippet to override two cluster properties: cat <<EOF >/etc/google-dataproc/dataproc.custom.properties dataproc.conscrypt.provider.enable=true dataproc.logging.stackdriver.enable=false EOF Create a cluster with an expired custom image Managed Service for Apache Spark cannot guarantee support of issues that arise with clusters created with expired custom images.
- Using secure boot MOK (Machine Owner Key) secrets: To enable secure boot with your Managed Service for Apache Spark custom image, do the following: Enable the Secret Manager API ( secretmanager.googleapis.com .
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- To disable secure boot: By default, the Managed Service for Apache Spark custom image scripts generate and manage a key pair using Secret Manager when run from a Managed Service for Apache Spark cluster.

