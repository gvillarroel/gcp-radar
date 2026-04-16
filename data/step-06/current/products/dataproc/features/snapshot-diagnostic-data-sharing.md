---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.576Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Snapshot diagnostic data sharing"
feature_slug: "snapshot-diagnostic-data-sharing"
latest_feature_date: "2026-02-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/support/diagnose-command"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
  - "https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse"
keywords:
  - "snapshot"
  - "diagnostic"
  - "sharing"
  - "dataproc"
  - "compute"
  - "engine"
  - "can"
  - "share"
---

# Snapshot diagnostic data sharing

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc on Compute Engine can share snapshot diagnostic data from cluster diagnose output with Google Cloud support using the tarball access flag.

## Extended Definition

Dataproc on Compute Engine can share snapshot diagnostic data from cluster diagnose output with Google Cloud support using the tarball access flag.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/support/diagnose-command](https://docs.cloud.google.com/dataproc/docs/support/diagnose-command)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- [https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse](https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse)

## Supporting Pages

### "View cluster diagnostic data \_|\_ Managed Service for Apache Spark \_|\_\

- URL: [https://docs.cloud.google.com/dataproc/docs/support/diagnose-command](https://docs.cloud.google.com/dataproc/docs/support/diagnose-command)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Item(s) included Location in diagnostics folder Managed Service for Apache Spark properties .../configs/dataproc/dataproc.properties All files in /etc/google-dataproc/ .../configs/dataproc/ All files in /etc/hadoop/conf/ .../configs/hadoop/ All files in /etc/hive/conf/ .../configs/hive/ All files in /etc/hive-hcatalog/conf/ .../configs/hive-hcatalog/ All files in /etc/knox/conf/ .../configs/knox/ All files in /etc/pig/conf/ .../configs/pig/ All files in /etc/presto/conf/ .../configs/presto/ All files in /etc/spark/conf/ .../configs/spark/ All files in /etc/tez/conf/ .../configs/tez/ All files in /etc/zookeeper/conf/ .../configs/zookeeper/ Share checkpoint diagnostic data with support You can enable sharing checkpoint diagnostic data with Google Cloud support in the following ways: Enable sharing at cluster creation : Add the following optional cluster property when you create a cluster : dataproc:diagnostic.capture.access=GOOGLE DATAPROC DIAGNOSE This property automatically shares collected checkpoint diagnostic data with Google Cloud support so that you don't have to manually share after cluster creation each time.
- Enable sharing after cluster creation : You can enable sharing checkpoint data with Google Cloud support after cluster creation by providing read access to checkpoint data to the service account used by the Google Cloud support, as follows: If uniform bucket-level access is enabled on the temp bucket, add IAM policy binding: gcloud storage buckets add-iam-policy-binding gs:// TEMP BUCKET \ --member=serviceAccount:cloud-diagnose@cloud-dataproc.iam.gserviceaccount.com \ --role=roles/storage.objectViewer If object-level access control is enabled on the temp bucket, run the following command to share checkpoint diagnostic data: gcloud storage objects update \ gs:// TEMP BUCKET /google-cloud-dataproc-diagnostic/ CLUSTER UUID \ --add-acl-grant=entity=user-cloud-diagnose@cloud-dataproc.iam.gserviceaccount.com,role=READER --recursive Disable checkpoint diagnostic data collection To disable the collection of checkpoint diagnostic data on a cluster, set dataproc:diagnostic.capture.enabled=false when you create the cluster.
- Command executed Location in diagnostic folder yarn node -list -all .../nodes/ timestamp /yarn-nodes.log hdfs dfsadmin -report -live -decommissioning .../nodes/ timestamp /hdfs-nodes.log cp gs:// STAGING BUCKET /google-cloud-dataproc-metainfo/ CLUSTER UUID /nodes exclude.xml .../nodes/ timestamp /nodes exclude.xml Note: Node detail snapshots capture cluster updates.
- As an alternative to running the diagnose command, you can use SSH to connect to the cluster then run the script locally on the master node. gcloud compute ssh HOSTNAME gcloud storage cp gs://dataproc-diagnostic-scripts/diagnostic-script.sh . sudo bash diagnostic-script.sh The diagnostic archive tar file is saved in a local directory.

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Gce Cluster Config Common config settings for resources of Compute Engine cluster instances, applicable to all instances in the cluster. com. google. cloud. dataproc. v1.
- Node Group Controller Grpc The NodeGroupControllerService provides methods to manage node groups of Compute Engine managed instances. com. google. cloud. dataproc. v1.
- Instance Group Config The config settings for Compute Engine resources in an instance group, such as a master or worker group. com. google. cloud. dataproc. v1.
- Builder Common config settings for resources of Compute Engine cluster instances, applicable to all instances in the cluster. com. google. cloud. dataproc. v1.

### Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse](https://docs.cloud.google.com/dataproc/docs/guides/create-lakehouse)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- User roles To get the permissions that you need to create a Managed Service for Apache Spark cluster, ask your administrator to grant you the following IAM roles: Dataproc Editor ( roles/dataproc.editor ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the Compute Engine default service account Service account role To ensure that the Compute Engine default service account has the necessary permissions to create a Managed Service for Apache Spark cluster, ask your administrator to grant the Dataproc Worker ( roles/dataproc.worker ) IAM role to the Compute Engine default service account on the project.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Important: You must grant this role to the Compute Engine default service account, not to your user account.
- Create a base table in Iceberg format and insert data. spark . sql ( "DROP TABLE IF EXISTS base table PURGE" ) spark . sql ( "CREATE TABLE base table (id LONG) USING iceberg" ) spark . sql ( "INSERT INTO base table VALUES 0, 1, 2, 3, 4" ) spark . sql ( "SELECT FROM base table" ) . show () The output is similar to the following: +---+ id +---+ 0 1 2 3 4 +---+ Create a second table for new data. spark . sql ( "DROP TABLE IF EXISTS newdata PURGE" ) spark . sql ( "CREATE TABLE newdata(id LONG) USING iceberg" ) spark . sql ( "INSERT INTO newdata VALUES 3, 4, 5, 6" ) spark . sql ( "SELECT FROM newdata" ) . show () The output is similar to the following: +---+ id +---+ 3 4 5 6 +---+ Merge the new data into the base table. spark . sql ( """MERGE INTO base table USING newdata ON base table.id = newdata.id WHEN MATCHED THEN UPDATE SET base table.id = newdata.id WHEN NOT MATCHED THEN INSERT """ ) spark . sql ( "SELECT FROM base table" ) . show () The output is similar to the following: +---+ id +---+ 0 1 2 3 4 5 6 +---+ Update records in the base table. spark . sql ( "UPDATE base table SET id = (id + 100) WHERE (id % 2 == 0)" ) spark . sql ( "SELECT FROM base table" ) . show () The output is similar to the following: +---+ id +---+ 3 104 5 106 100 102 1 +---+ Delete records from the base table. spark . sql ( "DELETE FROM base table WHERE (id % 2 == 0)" ) spark . sql ( "SELECT FROM base table" ) . show () The output is similar to the following: +---+ id +---+ 3 5 1 +---+ Query a historical snapshot Retrieve a previous version of a table by querying a specific snapshot ID.

