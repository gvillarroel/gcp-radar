---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.628Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Enhanced Flexibility Mode"
feature_slug: "enhanced-flexibility-mode"
latest_feature_date: "2020-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
  - "https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster"
keywords:
  - "enhanced"
  - "flexibility"
  - "mode"
  - "dataproc"
  - "manages"
  - "shuffle"
  - "reduce"
  - "job"
---

# Enhanced Flexibility Mode

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc Enhanced Flexibility Mode manages shuffle data to reduce job delays when nodes are removed from a running cluster; Enhanced Flexibility Mode improves cluster stability and scalability by preserving stateful node data such as MapReduce shuffle data in HDFS.

## Extended Definition

Dataproc Enhanced Flexibility Mode manages shuffle data to reduce job delays when nodes are removed from a running cluster; Enhanced Flexibility Mode improves cluster stability and scalability by preserving stateful node data such as MapReduce shuffle data in HDFS.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- [https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster)

## Supporting Pages

### "Recreate and update a cluster \_|\_ Managed Service for Apache Spark \_\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster)
- Source ID: `site-iam-reference`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example uses jq to update the cluster name and the image version. jq ".clusterName = \"${NEW CLUSTER}\" .config.softwareConfig.imageVersion=\"${NEW IMAGE VERSION}\" del(.config.workerConfig.imageUri) del(.config.masterConfig.imageUri)" "${OLD CLUSTER}-config.json" > "${NEW CLUSTER}-config-updated.json" Import the updated cluster configuration to create a new cluster with the updated configuration. curl -i -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json; charset=utf-8" -d "@${NEW CLUSTER}-config-updated.json" "https://dataproc.googleapis.com/v1/projects/${PROJECT}/regions/${REGION}/clusters?alt=json" After confirming your workloads run in the new cluster without issues, delete the existing (old) cluster.
- The following example uses sed to update the image version. sed -E "s (^[[:blank:]]+)imageVersion: .+ \1imageVersion: ${NEW IMAGE VERSION} g" "${OLD CLUSTER}-config.yaml" sed -E '/^[[:blank:]]+imageUri: /d' > "${NEW CLUSTER}-config-updated.yaml" Create a new cluster with a new name and the updated configuration. gcloud dataproc clusters import $NEW CLUSTER \ --project=$PROJECT \ --region=$REGION \ --source="${NEW CLUSTER}-config-updated.yaml" After confirming your workloads run in the new cluster without issues, delete the existing (old) cluster.
- Set variables. export PROJECT= project-id export REGION= region export OLD CLUSTER= old-cluster-name export NEW CLUSTER= new-cluster-name export NEW IMAGE VERSION= image-version (for example, '2.2-debian12') Export the existing (old) cluster configuration to a JSON file. curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" "https://dataproc.googleapis.com/v1/projects/${PROJECT}/regions/${REGION}/clusters/${OLD CLUSTER}?alt=json" > "${OLD CLUSTER}-config.json" Update the configuration.
- Set variables. export PROJECT= project-id export REGION= region export OLD CLUSTER= old-cluster-name export NEW CLUSTER= new-cluster-name export NEW IMAGE VERSION= image-version (for example, '2.2-debian12') Export the existing (old) cluster configuration to a YAML file. gcloud dataproc clusters export $OLD CLUSTER \ --project=$PROJECT \ --region=$REGION > "${OLD CLUSTER}-config.yaml" Update the configuration.

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Instance Flexibility Policy Instance flexibility Policy allowing a mixture of VM shapes and provisioning models. com. google. cloud. dataproc. v1.
- Builder Instance flexibility Policy allowing a mixture of VM shapes and provisioning models. com. google. cloud. dataproc. v1.
- Provisioning Model Mix Defines how Dataproc should create VMs with a mixture of provisioning models. com. google. cloud. dataproc. v1.
- Builder Defines how Dataproc should create VMs with a mixture of provisioning models. com. google. cloud. dataproc. v1.

### "Recreate and update a Google Kubernetes Engine virtual cluster \_|\_ Managed\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Delete the existing Managed Service for Apache Spark on GKE virtual cluster if you will create a cluster that has the same name as the cluster it is updating (if you are replacing the original cluster). curl -X DELETE -H "Authorization: Bearer $(gcloud auth print-access-token)" "https://dataproc.googleapis.com/v1/projects/${PROJECT}/regions/${REGION}/clusters/${CLUSTER}" Wait for the previous delete operation to finish, and then import the updated cluster configuration to create a new Managed Service for Apache Spark on GKE virtual cluster with the updated settings. curl -i -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json; charset=utf-8" -d "@${CLUSTER}-config.json" "https://dataproc.googleapis.com/v1/projects/${PROJECT}/regions/${REGION}/clusters?alt=json" Console The Google Cloud console does not support recreating a Managed Service for Apache Spark on GKE virtual cluster by importing an existing cluster's configuration.
- Wait for the previous delete operation to finish, and then import the updated cluster configuration to create a new Managed Service for Apache Spark on GKE virtual cluster with the updated config settings. gcloud dataproc clusters import $CLUSTER \ --region=$REGION \ --source="${CLUSTER}-config.yaml" API Set environment variables: CLUSTER= existing Managed Service for Apache Spark on GKE cluster name \ REGION= region Export the existing Managed Service for Apache Spark on GKE cluster configuration to a YAML file. curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" "https://dataproc.googleapis.com/v1/projects/${PROJECT}/regions/${REGION}/clusters/${CLUSTER}?alt=json" > "${CLUSTER}-config.json" Update the configuration.
- Recreate and update a Managed Service for Apache Spark on GKE cluster gcloud Set environment variables: CLUSTER= existing Managed Service for Apache Spark on GKE cluster name \ REGION= region Export the existing Managed Service for Apache Spark on GKE cluster configuration to a YAML file. gcloud dataproc clusters export $CLUSTER \ --region=$REGION > "${CLUSTER}-config.yaml" Update the configuration.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).

