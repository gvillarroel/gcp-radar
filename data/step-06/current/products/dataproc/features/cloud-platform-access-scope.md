---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.707Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Cloud-platform access scope"
feature_slug: "cloud-platform-access-scope"
latest_feature_date: "2016-01-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/attach-dataproc"
  - "https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage"
keywords:
  - "platform"
  - "access"
  - "scope"
  - "cluster"
  - "creation"
  - "can"
  - "enable"
  - "oauth"
---

# Cloud-platform access scope

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Cluster creation can enable the cloud-platform OAuth scope to allow access across Google Cloud services.

## Extended Definition

Cluster creation can enable the cloud-platform OAuth scope to allow access across Google Cloud services.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc-metastore/docs/attach-dataproc](https://docs.cloud.google.com/dataproc-metastore/docs/attach-dataproc)
- [https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage](https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage)

## Supporting Pages

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- EndpointConfig Endpoint config for this cluster JSON representation { "httpPorts" : { string : string , ... } , "enableHttpPortAccess" : boolean } Fields httpPorts map (key: string, value: string) Output only.
- The Dataproc service account (also see VM Data Plane identity ) used by Dataproc cluster VM instances to access Google Cloud Platform services.
- BIDIRECTIONAL Enables bidirectional private IPv6 access between Google Services and the Dataproc cluster.
- OUTBOUND Enables outbound private IPv6 access to Google Services from the Dataproc cluster.

### "Attach a Managed Service for Apache Spark cluster or a self-managed cluster\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/attach-dataproc](https://docs.cloud.google.com/dataproc-metastore/docs/attach-dataproc)
- Source ID: `site-docs-root-2`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Project Access section, select Enable the cloud-platform scope for this cluster .
- Required Roles To get the permissions that you need to create a Dataproc Metastore and a Managed Service for Apache Spark cluster, ask your administrator to grant you the following IAM roles: To grant full control of Dataproc Metastore resources, either: Dataproc Metastore Editor ( roles/metastore.editor ) on the user account or service account Dataproc Metastore Admin ( roles/metastore.admin ) on the user account or service account To create a Managed Service for Apache Spark cluster: ( roles/dataproc.worker ) on the Managed Service for Apache Spark VM service account To grant read and write permissions to the Hive warehouse directory: ( roles/storage.objectAdmin ) on the Managed Service for Apache Spark VM service account For more information about granting roles, see Manage access to projects, folders, and organizations .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a Dataproc Metastore and a Managed Service for Apache Spark cluster: To create a Dataproc Metastore: metastore.services.create on the user account or service account To create a Managed Service for Apache Spark cluster: dataproc.clusters.create on the user account or service account To access the Hive warehouse directory: orgpolicy.policy.get1 , resourcemanager.projects.get , resourcemanager.projects.list , storage.objects. , storage.multipartUploads. on the Managed Service for Apache Spark VM service account You might also be able to get these permissions with custom roles or other predefined roles .
- When it's ready for use, the status changes to Running . gcloud CLI To create a cluster and attach a Dataproc Metastore, run the following gcloud dataproc clusters create command: gcloud dataproc clusters create CLUSTER NAME \ --dataproc-metastore=projects/ PROJECT ID /locations/ LOCATION /services/ SERVICE \ --region= LOCATION \ --scopes= SCOPES Replace the following: CLUSTER NAME : the name of your new Managed Service for Apache Spark cluster.

### "Using Spark data lineage \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage](https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage)
- Source ID: `site-iam-reference`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enable Spark data lineage at the project level, set the following custom project metadata : Key Value DATAPROC LINEAGE ENABLED true DATAPROC CLUSTER SCOPES https://www.googleapis.com/auth/cloud-platform Setting this VM access scope is only necessary for 2.0 image version clusters.
- Set scope on 2.0 image version clusters: Managed Service for Apache Spark cluster VM access cloud-platform scope is required for Spark data lineage.
- If you specify Managed Service for Apache Spark image version 2.0 when you create a cluster, set the scope to cloud-platform .
- Managed Service for Apache Spark image version clusters created with image version 2.1 and later have cloud-platform enabled.

