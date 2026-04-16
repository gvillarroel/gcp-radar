---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.678Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Cluster Scheduled Deletion"
feature_slug: "cluster-scheduled-deletion"
latest_feature_date: "2017-09-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos"
keywords:
  - "cluster"
  - "scheduled"
  - "deletion"
  - "lets"
  - "users"
  - "configure"
  - "clusters"
  - "deleted"
---

# Cluster Scheduled Deletion

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Cluster Scheduled Deletion lets users configure clusters to be deleted after a duration, at a specific time, or after inactivity.

## Extended Definition

Cluster Scheduled Deletion lets users configure clusters to be deleted after a duration, at a specific time, or after inactivity.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc)
- [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos)

## Supporting Pages

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Examples: https://www.googleapis.com/compute/v1/projects/[projectId]/zones/[zone]/nodeGroups/node-group-1 projects/[projectId]/zones/[zone]/nodeGroups/node-group-1 node-group-1 ShieldedInstanceConfig Shielded Instance Config for clusters using Compute Engine Shielded VMs .
- SINGLE NODE https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/single-node-clusters ZERO SCALE Clusters that can use only secondary workers and be scaled down to zero secondary worker nodes.
- ConfidentialInstanceConfig Confidential Instance Config for clusters using Confidential VMs JSON representation { "enableConfidentialCompute" : boolean } Fields enableConfidentialCompute boolean Optional.
- Either the exact time the cluster should be deleted at or the cluster maximum age. ttl can be only one of the following: autoDeleteTime string ( Timestamp format) Optional.

### "Configure Kerberos for Dataproc Metastore gRPC endpoints \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc)
- Source ID: `site-docs-root-2`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a Dataproc Metastore service with the gRPC endpoint To create a Dataproc Metastore that uses the gRPC endpoint, run the following gcloud metastore services create command: gcloud gcloud metastore services create SERVICE \ --instance-size=medium \ --endpoint-protocol=grpc Replace: SERVICE : The name of your Dataproc Metastore service Create a Managed Service for Apache Spark cluster and connect to your service To create a Managed Service for Apache Spark configured with Kerberos, run the following gcloud dataproc clusters create command.
- These values are all created using default names and settings set by the Managed Service for Apache Spark cluster. gcloud gcloud dataproc clusters create CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --image-version 2.0-debian10 \ --dataproc-metastore DATAPROC METASTORE NAME \ --enable-kerberos \ --scopes 'https://www.googleapis.com/auth/cloud-platform' Replace: CLUSTER NAME : the name of your Managed Service for Apache Spark cluster.
- Configure Managed Service for Apache Spark before submitting jobs To run your Managed Service for Apache Spark jobs , you must add the hive user to the allowed.system.users property in the Hadoop container-executor.cfg file.
- After, you create a Managed Service for Apache Spark cluster configured with Kerberos and connect to it.

### "Configure Kerberos for Dataproc Metastore Thrift endpoints \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos)
- Source ID: `site-docs-root-2`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the SSH session, open the /etc/hive/conf/hive-site.xml file. sudo vim /etc/hive/conf/hive-site.xml Modify /etc/hive/conf/hive-site.xml on the Managed Service for Apache Spark cluster. < property > < name>hive . metastore . uris < / name > < ! -- Update this value . -- > < value> ENDPOINT URI < / value > < / property > < ! -- Add this property entry . -- > < property > < name>hive . metastore . warehouse . dir < / name > < value> WAREHOUSE DIR < / value > < / property > Restart HiveServer2: sudo systemctl restart hive-server2.service Configure Managed Service for Apache Spark before submitting jobs To run your Managed Service for Apache Spark jobs , you must add the hive user to the allowed.system.users property in the Hadoop container-executor.cfg file.
- Create a Managed Service for Apache Spark cluster and enable Kerberos gcloud To set up a Managed Service for Apache Spark cluster with Kerberos, run the following gcloud dataproc clusters create command: gcloud dataproc clusters create CLUSTER NAME \ --image-version=2.0 \ --enable-kerberos \ --scopes 'https://www.googleapis.com/auth/cloud-platform' Replace the following: CLUSTER NAME : the name of your Managed Service for Apache Spark cluster.
- Configure the Managed Service for Apache Spark cluster for Kerberos The following instructions show you how to use SSH to connect to a primary Managed Service for Apache Spark cluster that's associated with your Dataproc Metastore service.
- Enable Kerberos for Dataproc Metastore The following instructions show you how to configure Kerberos for a Dataproc Metastore service that is attached to a Managed Service for Apache Spark cluster.

