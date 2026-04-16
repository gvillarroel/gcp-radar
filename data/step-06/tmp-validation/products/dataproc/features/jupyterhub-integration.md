---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.184Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "JupyterHub integration"
feature_slug: "jupyterhub-integration"
latest_feature_date: "2019-08-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/create-service"
  - "https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage"
keywords:
  - "jupyterhub"
  - "singleuser"
  - "integration"
  - "jupyter"
  - "enable"
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

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- [https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage](https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage)

## Supporting Pages

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "enableKerberos" : boolean , "rootPrincipalPasswordUri" : string , "kmsKeyUri" : string , "keystoreUri" : string , "truststoreUri" : string , "keystorePasswordUri" : string , "keyPasswordUri" : string , "truststorePasswordUri" : string , "crossRealmTrustRealm" : string , "crossRealmTrustKdc" : string , "crossRealmTrustAdminServer" : string , "crossRealmTrustSharedPasswordUri" : string , "kdcDbKeyUri" : string , "tgtLifetimeHours" : integer , "realm" : string } Fields enableKerberos boolean Optional.
- ConfidentialInstanceConfig Confidential Instance Config for clusters using Confidential VMs JSON representation { "enableConfidentialCompute" : boolean } Fields enableConfidentialCompute boolean Optional.
- JSON representation { "enableSecureBoot" : boolean , "enableVtpm" : boolean , "enableIntegrityMonitoring" : boolean } Fields enableSecureBoot boolean Optional.
- The remote realm the Dataproc on-cluster KDC will trust, should the user enable cross realm trust. crossRealmTrustKdc string Optional.

### Create a Dataproc Metastore service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- Source ID: `site-docs-root-2`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- Metadata integration Optional: Enable Data Catalog sync .
- You can check the active account by executing gcloud auth list . curl -X POST -s -i -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -d '{"scaling config":{"autoscaling config":{"autoscaling enabled": true,"limit config":{"max scaling factor": MAX SCALING FACTOR ,"min scaling factor": MIN SCALING FACTOR }}}}' \ -H "Content-Type:application/json" \ https://metastore.googleapis.com/v1/projects/ PROJECT ID /locations/us-central1/services?service id= SERVICE ID Replace the following: MIN INSTANCES Optional: The minimum number of instances to use in your autoscaling configuration.
- Auxiliary version config Optional: To add an auxiliary version config, click Enable .
- Dataproc Metastore AUXILIARY VERSION : Optional: Enable auxiliary versions.

### "Enable Hive data lineage \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage](https://docs.cloud.google.com/dataproc/docs/guides/hive-lineage)
- Source ID: `site-iam-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Enable the APIs Required roles To get the permissions that you need to use data lineage in Managed Service for Apache Spark, ask your administrator to grant you the following IAM roles on the Managed Service for Apache Spark cluster VM service account : View data lineage in Dataplex Universal Catalog or use the Data Lineage API: Data Lineage Viewer ( roles/datalineage.viewer ) Produce data lineage manually using the API: Data Lineage Events Producer ( roles/datalineage.producer ) Edit data lineage using the API: Data Lineage Editor ( roles/datalineage.editor ) Perform all operations on data lineage: Data Lineage Administrator ( roles/datalineage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Submit a Hive job When you submit a Hive job to a Managed Service for Apache Spark cluster that was created with Hive data lineage enabled , Managed Service for Apache Spark captures and reports the data lineage information to Dataplex Universal Catalog. gcloud CLI Hive job submission example: gcloud dataproc jobs submit hive \ --cluster = CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --properties = hive.openlineage.namespace = CUSTOM NAMESPACE \ --execute HIVE QUERY Replace the following: CLUSTER NAME : The name of the cluster.
- Hive data lineage with BigQuery example The example in this section consists of the following steps: Create a Managed Service for Apache Spark cluster that has Hive data lineage enabled and the Hive-BigQuery connector installed on the cluster.
- IMAGE VERSION The intended image version for the cluster. --initialization-actions : These installation actions, located in Cloud Storage, install the Hive-BigQuery connector and enable Hive data lineage .

