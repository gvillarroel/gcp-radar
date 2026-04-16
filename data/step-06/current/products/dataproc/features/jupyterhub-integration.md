---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.660Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "JupyterHub integration"
feature_slug: "jupyterhub-integration"
latest_feature_date: "2019-08-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/enable-service"
keywords:
  - "jupyterhub"
  - "integration"
  - "dataproc"
  - "can"
  - "enable"
  - "singleuser"
  - "jupyter"
  - "optional"
---

# JupyterHub integration

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc can enable jupyterhub-singleuser for the Jupyter optional component and populate related hub environment and argument properties for DataprocSpawner.

## Extended Definition

Dataproc can enable jupyterhub-singleuser for the Jupyter optional component and populate related hub environment and argument properties for DataprocSpawner.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse](https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc-metastore/docs/enable-service](https://docs.cloud.google.com/dataproc-metastore/docs/enable-service)

## Supporting Pages

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- The remote realm the Dataproc on-cluster KDC will trust, should the user enable cross realm trust. crossRealmTrustKdc string Optional.
- An optional list of Compute Engine zones where the Dataproc cluster will not be located when Auto Zone is enabled.
- JSON representation { "clusterType" : enum ( ClusterType ) , "clusterTier" : enum ( ClusterTier ) , "configBucket" : string , "tempBucket" : string , "gceClusterConfig" : { object ( GceClusterConfig ) } , "masterConfig" : { object ( InstanceGroupConfig ) } , "workerConfig" : { object ( InstanceGroupConfig ) } , "secondaryWorkerConfig" : { object ( InstanceGroupConfig ) } , "softwareConfig" : { object ( SoftwareConfig ) } , "initializationActions" : [ { object ( NodeInitializationAction ) } ] , "encryptionConfig" : { object ( EncryptionConfig ) } , "autoscalingConfig" : { object ( AutoscalingConfig ) } , "securityConfig" : { object ( SecurityConfig ) } , "lifecycleConfig" : { object ( LifecycleConfig ) } , "endpointConfig" : { object ( EndpointConfig ) } , "metastoreConfig" : { object ( MetastoreConfig ) } , "dataprocMetricConfig" : { object ( DataprocMetricConfig ) } , "auxiliaryNodeGroups" : [ { object ( AuxiliaryNodeGroup ) } ] } Fields clusterType enum ( ClusterType ) Optional.
- JSON representation { "enableKerberos" : boolean , "rootPrincipalPasswordUri" : string , "kmsKeyUri" : string , "keystoreUri" : string , "truststoreUri" : string , "keystorePasswordUri" : string , "keyPasswordUri" : string , "truststorePasswordUri" : string , "crossRealmTrustRealm" : string , "crossRealmTrustKdc" : string , "crossRealmTrustAdminServer" : string , "crossRealmTrustSharedPasswordUri" : string , "kdcDbKeyUri" : string , "tgtLifetimeHours" : integer , "realm" : string } Fields enableKerberos boolean Optional.

### Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse](https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create the cluster, run the following gcloud command: gcloud beta dataproc clusters create CLUSTER NAME \ --project = PROJECT ID \ --region = REGION \ --image-version = 2 .3-debian12 \ --optional-components = ICEBERG,JUPYTER \ --enable-component-gateway Replace the following: CLUSTER NAME : the name for your Managed Service for Apache Spark cluster.
- Configure a Spark session In your Jupyter Notebook, create a Spark session configured to use the BigQuery Iceberg REST Catalog. import pyspark from pyspark.context import SparkContext from pyspark.sql import SparkSession catalog name = " CATALOG NAME " spark = SparkSession . builder . appName ( " APP NAME " ) \ . config ( f 'spark.sql.catalog. { catalog name } ' , 'org.apache.iceberg.spark.SparkCatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .type' , 'rest' ) \ . config ( f 'spark.sql.catalog. { catalog name } .uri' , 'https://biglake.googleapis.com/iceberg/v1beta/restcatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .warehouse' , 'gs:// GCS BUCKET ' ) \ . config ( f 'spark.sql.catalog. { catalog name } .header.x-goog-user-project' , ' PROJECT ID ' ) \ . config ( f 'spark.sql.catalog. { catalog name } .rest.auth.type' , 'org.apache.iceberg.gcp.auth.GoogleAuthManager' ) \ . config ( f 'spark.sql.catalog. { catalog name } .io-impl' , 'org.apache.iceberg.hadoop.HadoopFileIO' ) \ . config ( f 'spark.sql.catalog. { catalog name } .rest-metrics-reporting-enabled' , 'false' ) \ . config ( 'spark.sql.extensions' , 'org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions' ) \ . config ( 'spark.sql.defaultCatalog' , ' CATALOG NAME ' ) \ . getOrCreate () Replace the following: CATALOG NAME : a name for your Iceberg catalog, for example, bq iceberg catalog .
- Create a Managed Service for Apache Spark cluster Create a Managed Service for Apache Spark cluster with the Iceberg and Jupyter optional components.
- Enable the Dataproc, BigQuery, and Cloud Storage APIs.

### Enable and disable Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/enable-service](https://docs.cloud.google.com/dataproc-metastore/docs/enable-service)
- Source ID: `site-docs-root-2`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to enable and disable the Dataproc Metastore API: serviceusage.services.disable serviceusage.services.enable You might also be able to get these permissions with custom roles or other predefined roles .
- Required Roles To get the permissions that you need to enable and disable the Dataproc Metastore API, ask your administrator to grant you the Service Usage Administrator ( roles/serviceusage.serviceUsageAdmin ) IAM role on your project.
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Enable and disable Dataproc Metastore Stay organized with collections Save and categorize content based on your preferences.
- Enable the API Disable Dataproc Metastore Before you disable the Dataproc Metastore API, make sure you Delete all of your metastore services .

