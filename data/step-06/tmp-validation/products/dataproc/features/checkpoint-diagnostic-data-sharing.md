---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.098Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Checkpoint diagnostic data sharing"
feature_slug: "checkpoint-diagnostic-data-sharing"
latest_feature_date: "2025-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/support/diagnose-command"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster"
keywords:
  - "checkpoint"
  - "sharing"
  - "share"
  - "diagnostic"
  - "compute"
  - "engine"
---

# Checkpoint diagnostic data sharing

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc on Compute Engine can share checkpoint diagnostic data from the temp bucket with Google Cloud support through a cluster property.

## Extended Definition

Dataproc on Compute Engine can share checkpoint diagnostic data from the temp bucket with Google Cloud support through a cluster property.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/support/diagnose-command](https://docs.cloud.google.com/dataproc/docs/support/diagnose-command)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster)

## Supporting Pages

### "View cluster diagnostic data \_|\_ Managed Service for Apache Spark \_|\_\

- URL: [https://docs.cloud.google.com/dataproc/docs/support/diagnose-command](https://docs.cloud.google.com/dataproc/docs/support/diagnose-command)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Item(s) included Location in diagnostics folder Managed Service for Apache Spark properties .../configs/dataproc/dataproc.properties All files in /etc/google-dataproc/ .../configs/dataproc/ All files in /etc/hadoop/conf/ .../configs/hadoop/ All files in /etc/hive/conf/ .../configs/hive/ All files in /etc/hive-hcatalog/conf/ .../configs/hive-hcatalog/ All files in /etc/knox/conf/ .../configs/knox/ All files in /etc/pig/conf/ .../configs/pig/ All files in /etc/presto/conf/ .../configs/presto/ All files in /etc/spark/conf/ .../configs/spark/ All files in /etc/tez/conf/ .../configs/tez/ All files in /etc/zookeeper/conf/ .../configs/zookeeper/ Share checkpoint diagnostic data with support You can enable sharing checkpoint diagnostic data with Google Cloud support in the following ways: Enable sharing at cluster creation : Add the following optional cluster property when you create a cluster : dataproc:diagnostic.capture.access=GOOGLE DATAPROC DIAGNOSE This property automatically shares collected checkpoint diagnostic data with Google Cloud support so that you don't have to manually share after cluster creation each time.
- Enable sharing after cluster creation : You can enable sharing checkpoint data with Google Cloud support after cluster creation by providing read access to checkpoint data to the service account used by the Google Cloud support, as follows: If uniform bucket-level access is enabled on the temp bucket, add IAM policy binding: gcloud storage buckets add-iam-policy-binding gs:// TEMP BUCKET \ --member=serviceAccount:cloud-diagnose@cloud-dataproc.iam.gserviceaccount.com \ --role=roles/storage.objectViewer If object-level access control is enabled on the temp bucket, run the following command to share checkpoint diagnostic data: gcloud storage objects update \ gs:// TEMP BUCKET /google-cloud-dataproc-diagnostic/ CLUSTER UUID \ --add-acl-grant=entity=user-cloud-diagnose@cloud-dataproc.iam.gserviceaccount.com,role=READER --recursive Disable checkpoint diagnostic data collection To disable the collection of checkpoint diagnostic data on a cluster, set dataproc:diagnostic.capture.enabled=false when you create the cluster.
- Note: If you enable uniform bucket-level access on the cluster temp bucket, all of the temp bucket contents, including collected checkpoint diagnostic data and ephemeral data, such as MapReduce job history files, aggregated YARN logs, and Spark event logs, is shared with Google Cloud support.
- If object-level access control is enabled on the cluster temp bucket, only collected checkpoint diagnostic data (data in the checkpoint diagnostic data folder in Cloud Storage) is shared.

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Gce Cluster Config Common config settings for resources of Compute Engine cluster instances, applicable to all instances in the cluster. com. google. cloud. dataproc. v1.
- Node Group Controller Grpc The NodeGroupControllerService provides methods to manage node groups of Compute Engine managed instances. com. google. cloud. dataproc. v1.
- Instance Group Config The config settings for Compute Engine resources in an instance group, such as a master or worker group. com. google. cloud. dataproc. v1.
- Builder Common config settings for resources of Compute Engine cluster instances, applicable to all instances in the cluster. com. google. cloud. dataproc. v1.

### "Run a Spark job on Google Kubernetes Engine \_|\_ Managed Service for Apache\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- User roles To get the permissions that you need to create a Managed Service for Apache Spark cluster, ask your administrator to grant you the following IAM roles: Dataproc Editor ( roles/dataproc.editor ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the Compute Engine default service account Service account role To ensure that the Compute Engine default service account has the necessary permissions to create a Managed Service for Apache Spark cluster, ask your administrator to grant the Dataproc Worker ( roles/dataproc.worker ) IAM role to the Compute Engine default service account on the project.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- It's a virtual resource, and unlike a Managed Service for Apache Spark on Compute Engine cluster, does not include separate Managed Service for Apache Spark master and worker VMs.
- Important: You must grant this role to the Compute Engine default service account, not to your user account.

