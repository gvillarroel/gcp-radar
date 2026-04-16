---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.636Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Delta Lake 0.5.0 support"
feature_slug: "delta-lake-0-5-0-support"
latest_feature_date: "2020-04-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
  - "https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/create-federation"
keywords:
  - "delta"
  - "lake"
  - "dataproc"
  - "image"
  - "includes"
  - "version"
---

# Delta Lake 0.5.0 support

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc image 1.5 includes Delta Lake version 0.5.0.

## Extended Definition

Dataproc image 1.5 includes Delta Lake version 0.5.0.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore](https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore)
- [https://docs.cloud.google.com/dataproc-metastore/docs/create-federation](https://docs.cloud.google.com/dataproc-metastore/docs/create-federation)

## Supporting Pages

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Advanced usage: If you use your own process to create a custom Managed Service for Apache Spark image, you must add the goog-dataproc-version label manually to your custom image, as follows: Extract the goog-dataproc-version label from the base Managed Service for Apache Spark image used to create the custom image. gcloud compute images describe ${BASE DATAPROC IMAGE} \ --project cloud-dataproc \ --format="value(labels.goog-dataproc-version)" Set the label on the custom image. gcloud compute images add-labels IMAGE NAME --labels= [KEY=VALUE,...] Use a custom image You specify the custom image when you create a Managed Service for Apache Spark cluster.
- Attempt to create a Managed Service for Apache Spark cluster with an expired custom image or a custom image that will expire within 10 days. gcloud dataproc clusters create CLUSTER-NAME \ --image= CUSTOM-IMAGE-NAME \ --region= REGION \ ... other flags The gcloud CLI will issue an error message that includes the cluster dataproc:dataproc.custom.image.expiration.token property name and token value. dataproc:dataproc.custom.image.expiration.token= TOKEN VALUE Copy the TOKEN VALUE string to the clipboard.
- Then, run the generate custom image.py script to have Managed Service for Apache Spark generate and save your custom image. python3 generate custom image.py \ --image-name= CUSTOM IMAGE NAME \ [--family= CUSTOM IMAGE FAMILY NAME ] \ --dataproc-version= IMAGE VERSION \ --customization-script= LOCAL PATH \ --zone= ZONE \ --gcs-bucket= gs:// BUCKET NAME \ [--no-smoke-test] Required flags --image-name : the output name for your custom image.
- Note: The image name must match the regular expression a-z with no underscores or spaces, and less than 64 characters. --dataproc-version : the Managed Service for Apache Spark image version to use in your custom image.

### "Create an Apache Iceberg table with metadata in BigLake metastore \_|\_\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore](https://docs.cloud.google.com/dataproc/docs/guides/iceberg-metadata-biglake-metastore)
- Source ID: `site-iam-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- In a local terminal window or in Cloud Shell , run the following curl command to download the iceberg-spark-runtime-3.5 2.12-1.6.1 JAR file to the current directory. curl -o iceberg-spark-runtime-3.5 2.12-1.6.1.jar https://storage-download.googleapis.com/maven-central/maven2/org/apache/iceberg/iceberg-spark-runtime-3.5 2.12/1.6.1/iceberg-spark-runtime-3.5 2.12-1.6.1.jar Uses the gcloud CLI to copy the local iceberg-spark-runtime-3.5 2.12-1.6.1 JAR file from the current directory to your bucket in Cloud Storage. gcloud storage cp iceberg-spark-runtime-3.5 2.12-1.6.1.jar gs:// BUCKET / Submit the Spark SQL job Select a tab to follow the instructions to submit the Spark SQL job to the Managed Service for Apache Spark service using the gcloud CLI, Google Cloud console, or Managed Service for Apache Spark REST API. gcloud Run the following gcloud dataproc jobs submit spark-sql command locally in a local terminal window or in Cloud Shell to submit the Spark SQL job to create the Iceberg table. gcloud dataproc jobs submit spark-sql \ --project= PROJECT ID \ --cluster= CLUSTER NAME \ --region= REGION \ --jars="gs:// BUCKET /1.6.1/iceberg-spark-runtime-3.5 2.12-1.6.1.jar, BIGLAKE ICEBERG CATALOG JAR " \ --properties="spark.sql.catalog.
- HTTP method and URL: POST https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /jobs:submit Request JSON body: { "projectId": " PROJECT ID ", "job": { "placement": { "clusterName": " CLUSTER NAME " }, "statusHistory": [], "reference": { "jobId": "", "projectId": " PROJECT ID " }, "sparkSqlJob": { "properties": { "spark.sql.catalog." CATALOG NAME ": "org.apache.iceberg.spark.SparkCatalog", "spark.sql.catalog." CATALOG NAME ".catalog-impl": "org.apache.iceberg.gcp.bigquery.BigQueryMetastoreCatalog", "spark.sql.catalog." CATALOG NAME ".gcp project": " PROJECT ID ", "spark.sql.catalog." CATALOG NAME ".gcp location": " LOCATION ", "spark.sql.catalog." CATALOG NAME ".warehouse": "gs:// BUCKET / WAREHOUSE FOLDER " }, "jarFileUris": [ "gs:// BUCKET /iceberg-spark-runtime-3.5 2.12-1.6.1.jar, BIGLAKE ICEBERG CATALOG JAR " ], "scriptVariables": {}, "queryFileUri": "gs:// BUCKET /iceberg-table.sql" } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- USER catalog.warehouse": "gs:// BUCKET / WAREHOUSE FOLDER " }, "jarFileUris": [ "gs:// BUCKET /iceberg-spark-runtime-3.5 2.12-1.6.1.jar", " BIGLAKE ICEBERG CATALOG JAR " ] }, "driverControlFilesUri": "gs://dataproc-...", "driverOutputResourceUri": "gs://dataproc-.../driveroutput", "jobUuid": "...", "region": " REGION " } To monitor job progress and view job output, go to the Managed Service for Apache Spark Jobs page in the Google Cloud console, then click the Job ID to open the Job details page.
- By default, Managed Service for Apache Spark cluster VMs, created with a 2.2 (default) or later image version, have internal IP addresses only .

### "Create a metadata federation service \_|\_ Dataproc Metastore \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/create-federation](https://docs.cloud.google.com/dataproc-metastore/docs/create-federation)
- Source ID: `site-docs-root-2`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: The following command doesn't support the --dataproc-metastore flag. gcloud dataproc clusters create CLUSTER NAME \ --region= LOCATION \ --project= PROJECT ID \ --scopes=https://www.googleapis.com/auth/cloud-platform \ --image-version= IMAGE VERSION \ --service-account= SERVICE ACCOUNT \ --optional-components=DOCKER \ --initialization-actions=gs://metastore-init-actions/metastore-grpc-proxy/metastore-grpc-proxy.sh \ --metadata="proxy-uri= FEDERATION URI ,hive-version= FEDERATION VERSION " \ --properties="hive:hive.metastore.uris=thrift://localhost:9083,hive:hive.metastore.warehouse.dir= WAREHOUSE DIR " Replace the following: CLUSTER NAME : the name of your new Managed Service for Apache Spark cluster.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a federation service and attach a Managed Service for Apache Spark cluster, following the principle of least privilege: To create a Dataproc Metastore: metastore.services.create on the user account or service account To list, get, create, update, and delete a federation service: metastore.federations.create, metastore.federations.update, metastore.federations.delete, metastore.federations.get metastore.federations.list on the user account or service account To complete metadata operations on a Dataproc Metastore: metastore.services.get, metastore.services.use, metastore.databases.create, metastore.databases.update, metastore.databases.deletemetastore.databases.get,metastore.databases.list, metastore.databases.getIamPolicy, metastore.tables.create, metastore.tables.update, metastore.tables.delete, metastore.tables.get, metastore.tables.list, metastore.tables.getIamPolicy on the user account or service account (Optional) To access BigQuery datasets: For more information, see BigQuery permissions on the user account or service account (Optional) To access Dataplex Universal Catalog Lakes ( Preview ): For more information, see Dataplex Universal Catalog permissions on the user account or service account You might also be able to get these permissions with custom roles or other predefined roles .
- Required Roles To get the permissions that you need to create a federation service and attach a Managed Service for Apache Spark cluster, following the principle of least privilege, ask your administrator to grant you the following IAM roles: To access the federation service: Federation accessor ( roles/metastore.federationAccessor ) on the user account or service account To grant full control of all Dataproc Metastore resources: Dataproc Metastore editor ( roles/metastore.editor ) on the user account or service account To complete metadata operations on a Dataproc Metastore configured with a federation service: Metastore owner ( metastore.metadataEditor ) on the user account or service account To create a Managed Service for Apache Spark cluster: Managed Service for Apache Spark worker ( roles/dataproc.worker ) on on the Managed Service for Apache Spark VM service account (Optional) To access BigQuery datasets: Use an appropriate BigQuery predefined role applicable for your use case on the user account or service account (Optional) To access Dataplex Universal Catalog Lakes ( Preview ): Use an appropriate Dataplex Universal Catalog predefined role applicable for your use case on the user account or service account For more information about granting roles, see Manage access to projects, folders, and organizations .
- You can now attach your federation service to a Managed Service for Apache Spark cluster . gcloud CLI To create a federation with Dataproc Metastore, run the following command. gcloud metastore federations create FEDERATION \ --location LOCATION \ --backends RANK = BACKEND METASTORE \ --hive-metastore-version HIVE VERSION Replace the following: FEDERATION : The name of your Dataproc Metastore federation service.

