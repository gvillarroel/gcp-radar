---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.637Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Delta Lake Hive Connector"
feature_slug: "delta-lake-hive-connector"
latest_feature_date: "2020-04-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/create-federation"
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial"
keywords:
  - "delta"
  - "lake"
  - "hive"
  - "connector"
  - "dataproc"
  - "image"
  - "includes"
---

# Delta Lake Hive Connector

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc image 1.5 includes the Delta Lake Hive Connector 0.1.0.

## Extended Definition

Dataproc image 1.5 includes the Delta Lake Hive Connector 0.1.0.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage](https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage)
- [https://docs.cloud.google.com/dataproc-metastore/docs/create-federation](https://docs.cloud.google.com/dataproc-metastore/docs/create-federation)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)

## Supporting Pages

### "Enable Hive data lineage \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage](https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage)
- Source ID: `site-iam-reference`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a Managed Service for Apache Spark cluster Run the following command in a local terminal window or in Cloud Shell to create a Managed Service for Apache Spark cluster . gcloud dataproc clusters create CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --image-version IMAGE VERSION \ --initialization-actions gs://goog-dataproc-initialization-actions- REGION /connectors/connectors.sh, gs://goog-dataproc-initialization-actions- REGION /hive-lineage/hive-lineage.sh \ --metadata hive-bigquery-connector-version= HIVE BQ VERSION Notes: CLUSTER NAME : The name of the cluster.
- Note: See Important considerations and guidelines when using initialization actions in production. gcloud CLI cluster creation example: gcloud dataproc clusters create CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --image-version IMAGE VERSION \ --initialization-actions gs://goog-dataproc-initialization-actions- REGION /hive-lineage/hive-lineage.sh Replace the following: CLUSTER NAME : The name of the cluster.
- IMAGE VERSION The intended image version for the cluster. --initialization-actions : These installation actions, located in Cloud Storage, install the Hive-BigQuery connector and enable Hive data lineage .
- Submit a Hive job When you submit a Hive job to a Managed Service for Apache Spark cluster that was created with Hive data lineage enabled , Managed Service for Apache Spark captures and reports the data lineage information to Dataplex Universal Catalog. gcloud CLI Hive job submission example: gcloud dataproc jobs submit hive \ --cluster = CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --properties = hive.openlineage.namespace = CUSTOM NAMESPACE \ --execute HIVE QUERY Replace the following: CLUSTER NAME : The name of the cluster.

### "Use the Cloud Storage connector with Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Replace the version placeholders in the file to show the Spark and Scala library versions used by your cluster's image version . scalaVersion := " Scala version, for example, 2.11.8 " name := "word-count" organization := "dataproc.codelab" version := "1.0" libraryDependencies ++ = Seq ( "org.scala-lang" % "scala-library" % scalaVersion . value % "provided" , "org.apache.spark" %% "spark-core" % " Spark version, for example, 2.3.1 " % "provided" ) Copy word-count.scala to your local machine.
- Run the command, below, to create a single-node Managed Service for Apache Spark cluster in the specified Compute Engine zone . gcloud dataproc clusters create ${CLUSTER} \ --project=${PROJECT} \ --region=${REGION} \ --single-node The above command installs the default cluster image version .
- When a Spark job accesses Cloud Storage cluster files (files with URIs that start with gs:// ), the system automatically uses the Cloud Storage connector to access the files in Cloud Storage Check your cluster image version.
- When a Spark job accesses Cloud Storage cluster files (files with URIs that start with gs:// ), the system automatically uses the Cloud Storage connector to access the files in Cloud Storage Check your cluster image verison.

### "Create a metadata federation service \_|\_ Dataproc Metastore \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/create-federation](https://docs.cloud.google.com/dataproc-metastore/docs/create-federation)
- Source ID: `site-docs-root-2`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: The following command doesn't support the --dataproc-metastore flag. gcloud dataproc clusters create CLUSTER NAME \ --region= LOCATION \ --project= PROJECT ID \ --scopes=https://www.googleapis.com/auth/cloud-platform \ --image-version= IMAGE VERSION \ --service-account= SERVICE ACCOUNT \ --optional-components=DOCKER \ --initialization-actions=gs://metastore-init-actions/metastore-grpc-proxy/metastore-grpc-proxy.sh \ --metadata="proxy-uri= FEDERATION URI ,hive-version= FEDERATION VERSION " \ --properties="hive:hive.metastore.uris=thrift://localhost:9083,hive:hive.metastore.warehouse.dir= WAREHOUSE DIR " Replace the following: CLUSTER NAME : the name of your new Managed Service for Apache Spark cluster.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a federation service and attach a Managed Service for Apache Spark cluster, following the principle of least privilege: To create a Dataproc Metastore: metastore.services.create on the user account or service account To list, get, create, update, and delete a federation service: metastore.federations.create, metastore.federations.update, metastore.federations.delete, metastore.federations.get metastore.federations.list on the user account or service account To complete metadata operations on a Dataproc Metastore: metastore.services.get, metastore.services.use, metastore.databases.create, metastore.databases.update, metastore.databases.deletemetastore.databases.get,metastore.databases.list, metastore.databases.getIamPolicy, metastore.tables.create, metastore.tables.update, metastore.tables.delete, metastore.tables.get, metastore.tables.list, metastore.tables.getIamPolicy on the user account or service account (Optional) To access BigQuery datasets: For more information, see BigQuery permissions on the user account or service account (Optional) To access Dataplex Universal Catalog Lakes ( Preview ): For more information, see Dataplex Universal Catalog permissions on the user account or service account You might also be able to get these permissions with custom roles or other predefined roles .
- Required Roles To get the permissions that you need to create a federation service and attach a Managed Service for Apache Spark cluster, following the principle of least privilege, ask your administrator to grant you the following IAM roles: To access the federation service: Federation accessor ( roles/metastore.federationAccessor ) on the user account or service account To grant full control of all Dataproc Metastore resources: Dataproc Metastore editor ( roles/metastore.editor ) on the user account or service account To complete metadata operations on a Dataproc Metastore configured with a federation service: Metastore owner ( metastore.metadataEditor ) on the user account or service account To create a Managed Service for Apache Spark cluster: Managed Service for Apache Spark worker ( roles/dataproc.worker ) on on the Managed Service for Apache Spark VM service account (Optional) To access BigQuery datasets: Use an appropriate BigQuery predefined role applicable for your use case on the user account or service account (Optional) To access Dataplex Universal Catalog Lakes ( Preview ): Use an appropriate Dataplex Universal Catalog predefined role applicable for your use case on the user account or service account For more information about granting roles, see Manage access to projects, folders, and organizations .
- You can now attach your federation service to a Managed Service for Apache Spark cluster . gcloud CLI To create a federation with Dataproc Metastore, run the following command. gcloud metastore federations create FEDERATION \ --location LOCATION \ --backends RANK = BACKEND METASTORE \ --hive-metastore-version HIVE VERSION Replace the following: FEDERATION : The name of your Dataproc Metastore federation service.

