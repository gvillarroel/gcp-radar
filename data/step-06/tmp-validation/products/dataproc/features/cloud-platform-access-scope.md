---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.216Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Cloud-platform access scope"
feature_slug: "cloud-platform-access-scope"
latest_feature_date: "2016-01-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc/docs/support/diagnose-command"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/attach-dataproc"
keywords:
  - "scope"
  - "oauth"
  - "platform"
  - "enable"
  - "creation"
  - "access"
  - "cluster"
---

# Cloud-platform access scope

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Cluster creation can enable the cloud-platform OAuth scope to allow access across Google Cloud services.

## Extended Definition

Cluster creation can enable the cloud-platform OAuth scope to allow access across Google Cloud services.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc/docs/support/diagnose-command](https://docs.cloud.google.com/dataproc/docs/support/diagnose-command)
- [https://docs.cloud.google.com/dataproc-metastore/docs/attach-dataproc](https://docs.cloud.google.com/dataproc-metastore/docs/attach-dataproc)

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

### "View cluster diagnostic data \_|\_ Managed Service for Apache Spark \_|\_\

- URL: [https://docs.cloud.google.com/dataproc/docs/support/diagnose-command](https://docs.cloud.google.com/dataproc/docs/support/diagnose-command)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Item(s) included Location in diagnostics folder Managed Service for Apache Spark properties .../configs/dataproc/dataproc.properties All files in /etc/google-dataproc/ .../configs/dataproc/ All files in /etc/hadoop/conf/ .../configs/hadoop/ All files in /etc/hive/conf/ .../configs/hive/ All files in /etc/hive-hcatalog/conf/ .../configs/hive-hcatalog/ All files in /etc/knox/conf/ .../configs/knox/ All files in /etc/pig/conf/ .../configs/pig/ All files in /etc/presto/conf/ .../configs/presto/ All files in /etc/spark/conf/ .../configs/spark/ All files in /etc/tez/conf/ .../configs/tez/ All files in /etc/zookeeper/conf/ .../configs/zookeeper/ Share checkpoint diagnostic data with support You can enable sharing checkpoint diagnostic data with Google Cloud support in the following ways: Enable sharing at cluster creation : Add the following optional cluster property when you create a cluster : dataproc:diagnostic.capture.access=GOOGLE DATAPROC DIAGNOSE This property automatically shares collected checkpoint diagnostic data with Google Cloud support so that you don't have to manually share after cluster creation each time.
- Enable sharing after cluster creation : You can enable sharing checkpoint data with Google Cloud support after cluster creation by providing read access to checkpoint data to the service account used by the Google Cloud support, as follows: If uniform bucket-level access is enabled on the temp bucket, add IAM policy binding: gcloud storage buckets add-iam-policy-binding gs:// TEMP BUCKET \ --member=serviceAccount:cloud-diagnose@cloud-dataproc.iam.gserviceaccount.com \ --role=roles/storage.objectViewer If object-level access control is enabled on the temp bucket, run the following command to share checkpoint diagnostic data: gcloud storage objects update \ gs:// TEMP BUCKET /google-cloud-dataproc-diagnostic/ CLUSTER UUID \ --add-acl-grant=entity=user-cloud-diagnose@cloud-dataproc.iam.gserviceaccount.com,role=READER --recursive Disable checkpoint diagnostic data collection To disable the collection of checkpoint diagnostic data on a cluster, set dataproc:diagnostic.capture.enabled=false when you create the cluster.
- Bucket access and scope of shared content : The access setting on the Cloud Storage bucket that contains the diagnostic tar file determines the scope of the content shared with Google Cloud support: Uniform bucket-level access : If uniform bucket-level access is enabled on the Managed Service for Apache Spark staging bucket or, if a TARBALL DIR is specified, on the bucket that contains the TARBALL DIR , all of the bucket contents are shared with Google Cloud support.
- Note: If you enable uniform bucket-level access on the cluster temp bucket, all of the temp bucket contents, including collected checkpoint diagnostic data and ephemeral data, such as MapReduce job history files, aggregated YARN logs, and Spark event logs, is shared with Google Cloud support.

### "Attach a Managed Service for Apache Spark cluster or a self-managed cluster\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/attach-dataproc](https://docs.cloud.google.com/dataproc-metastore/docs/attach-dataproc)
- Source ID: `site-docs-root-2`
- Final score: 135
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the Project Access section, select Enable the cloud-platform scope for this cluster .
- Required Roles To get the permissions that you need to create a Dataproc Metastore and a Managed Service for Apache Spark cluster, ask your administrator to grant you the following IAM roles: To grant full control of Dataproc Metastore resources, either: Dataproc Metastore Editor ( roles/metastore.editor ) on the user account or service account Dataproc Metastore Admin ( roles/metastore.admin ) on the user account or service account To create a Managed Service for Apache Spark cluster: ( roles/dataproc.worker ) on the Managed Service for Apache Spark VM service account To grant read and write permissions to the Hive warehouse directory: ( roles/storage.objectAdmin ) on the Managed Service for Apache Spark VM service account For more information about granting roles, see Manage access to projects, folders, and organizations .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a Dataproc Metastore and a Managed Service for Apache Spark cluster: To create a Dataproc Metastore: metastore.services.create on the user account or service account To create a Managed Service for Apache Spark cluster: dataproc.clusters.create on the user account or service account To access the Hive warehouse directory: orgpolicy.policy.get1 , resourcemanager.projects.get , resourcemanager.projects.list , storage.objects. , storage.multipartUploads. on the Managed Service for Apache Spark VM service account You might also be able to get these permissions with custom roles or other predefined roles .
- When it's ready for use, the status changes to Running . gcloud CLI To create a cluster and attach a Dataproc Metastore, run the following gcloud dataproc clusters create command: gcloud dataproc clusters create CLUSTER NAME \ --dataproc-metastore=projects/ PROJECT ID /locations/ LOCATION /services/ SERVICE \ --region= LOCATION \ --scopes= SCOPES Replace the following: CLUSTER NAME : the name of your new Managed Service for Apache Spark cluster.

