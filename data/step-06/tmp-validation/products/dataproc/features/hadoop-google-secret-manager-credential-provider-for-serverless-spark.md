---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.103Z"
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
  - "credential"
  - "provider"
  - "secret"
  - "manager"
  - "serverless"
  - "hadoop"
  - "spark"
---

# Hadoop Google Secret Manager Credential Provider for Serverless Spark

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc Serverless for Spark supports the Hadoop Google Secret Manager Credential Provider in 1.2 and 2.2 runtimes.

## Extended Definition

Dataproc Serverless for Spark supports the Hadoop Google Secret Manager Credential Provider in 1.2 and 2.2 runtimes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/hadoop-google-secret-manager-credential-provider](https://docs.cloud.google.com/dataproc/docs/guides/hadoop-google-secret-manager-credential-provider)
- [https://docs.cloud.google.com/dataproc/docs/guides/connect-to-data-sources](https://docs.cloud.google.com/dataproc/docs/guides/connect-to-data-sources)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)

## Supporting Pages

### "Use Secret Manager credential provider \_|\_ Managed Service for Apache\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/hadoop-google-secret-manager-credential-provider](https://docs.cloud.google.com/dataproc/docs/guides/hadoop-google-secret-manager-credential-provider)
- Source ID: `site-iam-reference`
- Final score: 294
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Submit a Managed Service for Apache Spark with Secret Manager credential provider Run the following command locally or in Cloud Shell to submit a Managed Service for Apache Spark job with the required properties. gcloud dataproc jobs submit CLUSTER NAME \ --region= REGION \ --properties="hadoop.security.credential.provider.path=gsm://projects/ PROJECT ID ,hadoop.security.credstore.google-secret-manager.secret-id.substitute-dot-operator=true" \ ...other flags as needed... \ -- job-args Notes: CLUSTER NAME : the name of the cluster that will run the job.
- Create a Managed Service for Apache Spark cluster with Secret Manager credential provider Run the following command locally or in Cloud Shell to create a Managed Service for Apache Spark cluster with the required properties. gcloud dataproc clusters create CLUSTER NAME \ --region= REGION \ --properties="hadoop:hadoop.security.credential.provider.path=gsm://projects/ PROJECT ID ,hadoop:hadoop.security.credstore.google-secret-manager.secret-id.substitute-dot-operator=true" \ ...other flags as needed...
- Use this cluster to run Hive jobs that connect to the external metastore on another Managed Service for Apache Spark cluster. gcloud dataproc clusters create CLUSTER NAME \ --region= REGION \ --properties="hive:javax.jdo.option.ConnectionURL=jdbc:mysql:// METASTORE CLUSTER NAME -m/metastore,hive:hadoop.security.credential.provider.path=gsm://projects/ PROJECT ID ,hive:hadoop.security.credstore.google-secret-manager.secret-id.substitute-dot-operator=true" \ ...other flags as needed...
- Example properties: hadoop.security.credential.provider.path=gsm://projects/ PROJECT ID hadoop.security.credstore.google-secret-manager.secret-id.substitute-dot-operator=true Restart Hive Metastore. sudo systemctl restart hive-metastore Create a cluster with an external Hive Metastore Run the following command locally or in Cloud Shell to create a Managed Service for Apache Spark cluster with the following cluster properties.

### Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/connect-to-data-sources](https://docs.cloud.google.com/dataproc/docs/guides/connect-to-data-sources)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use a service like Secret Manager to handle sensitive credentials. db properties = { "user" : " USERNAME " , "password" : " PASSWORD " , "driver" : "org.postgresql.Driver" } jdbc url = "jdbc:postgresql:// DB HOST : DB PORT / DATABASE " spark = SparkSession . builder . appName ( "Postgres JDBC Example" ) . getOrCreate () Read data from a PostgreSQL table df = spark . read . jdbc ( url = jdbc url , table = "public.my table" , properties = db properties ) df . printSchema () df . show () Write data to a new PostgreSQL table ( df . write . jdbc ( url = jdbc url , table = "public.new table" , mode = "overwrite" , properties = db properties )) if name == " main " : main () Connect to external databases using ODBC To connect to data sources where a JDBC driver is unavailable, use an Open Database Connectivity (ODBC) driver.
- Use Secret Manager to store credentials securely and access them from your Managed Service for Apache Spark jobs.
- Create the connection string. connection string = f 'DRIVER= { driver } ;SERVER=tcp: { server } ,1433;DATABASE= { database } ;UID= { username } ;PWD= { password } ;Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;' sql query = "SELECT FROM Sales.Customer" Fetch data as a Pandas DataFrame. pandas df = get sql data ( connection string , sql query ) Convert the Pandas DataFrame to a Spark DataFrame for distributed processing. spark df = spark . createDataFrame ( pandas df ) print ( "Successfully read data from SQL Server:" ) spark df . printSchema () spark df . show ( 5 ) You can now perform distributed operations on the Spark DataFrame. print ( f "Total number of customers: { spark df . count () } " ) if name == " main " : main () Best practices This section describes best practices for managing credentials and dependencies.
- Set up the BigQuery connector. spark . conf . set ( "spark.sql.sources.provider" , "bigquery" ) spark . conf . set ( "viewsEnabled" , "true" ) spark . conf . set ( "materializationDataset" , " YOUR BQ DATASET " ) Read a BigQuery table into a Spark DataFrame, df = spark . read . format ( "bigquery" ) \ . option ( "table" , "bigquery-public-data.samples.shakespeare" ) \ . load () df . createOrReplaceTempView ( "shakespeare" ) Perform a query on the data, word counts = spark . sql ( "SELECT word, SUM(word count) as count FROM shakespeare GROUP BY word ORDER BY count DESC" ) word counts . show () Connect to external databases using JDBC You can connect Managed Service for Apache Spark to a database that provides a Java Database Connectivity (JDBC) driver, such as PostgreSQL or MySQL, using the Spark built-in JDBC data source.

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 151
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Using secure boot MOK (Machine Owner Key) secrets: To enable secure boot with your Managed Service for Apache Spark custom image, do the following: Enable the Secret Manager API ( secretmanager.googleapis.com .
- To disable secure boot: By default, the Managed Service for Apache Spark custom image scripts generate and manage a key pair using Secret Manager when run from a Managed Service for Apache Spark cluster.
- Managed Service for Apache Spark generates and manages a key pair using the Secret Manager service.
- Sample dataproc.custom.properties file: dataproc.conscrypt.provider.enable= VALUE dataproc.logging.stackdriver.enable= VALUE Sample customization script file-creation snippet to override two cluster properties: cat <<EOF >/etc/google-dataproc/dataproc.custom.properties dataproc.conscrypt.provider.enable=true dataproc.logging.stackdriver.enable=false EOF Create a cluster with an expired custom image Managed Service for Apache Spark cannot guarantee support of issues that arise with clusters created with expired custom images.

