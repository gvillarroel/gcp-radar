---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.668Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Cluster import/export from YAML"
feature_slug: "cluster-import-export-from-yaml"
latest_feature_date: "2018-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster"
  - "https://docs.cloud.google.com/dataproc/docs/guides/create-cluster"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster"
keywords:
  - "cluster"
  - "import"
  - "export"
  - "yaml"
  - "lets"
  - "users"
  - "configuration"
  - "create"
---

# Cluster import/export from YAML

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Cluster import and export from YAML lets users export a cluster configuration to YAML and create a cluster by importing that YAML file.

## Extended Definition

Cluster import and export from YAML lets users export a cluster configuration to YAML and create a cluster by importing that YAML file.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster)
- [https://docs.cloud.google.com/dataproc/docs/guides/create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/create-cluster)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster)

## Supporting Pages

### "Recreate and update a cluster \_|\_ Managed Service for Apache Spark \_\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster)
- Source ID: `site-iam-reference`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example uses sed to update the image version. sed -E "s (^[[:blank:]]+)imageVersion: .+ \1imageVersion: ${NEW IMAGE VERSION} g" "${OLD CLUSTER}-config.yaml" sed -E '/^[[:blank:]]+imageUri: /d' > "${NEW CLUSTER}-config-updated.yaml" Create a new cluster with a new name and the updated configuration. gcloud dataproc clusters import $NEW CLUSTER \ --project=$PROJECT \ --region=$REGION \ --source="${NEW CLUSTER}-config-updated.yaml" After confirming your workloads run in the new cluster without issues, delete the existing (old) cluster.
- The following example uses jq to update the cluster name and the image version. jq ".clusterName = \"${NEW CLUSTER}\" .config.softwareConfig.imageVersion=\"${NEW IMAGE VERSION}\" del(.config.workerConfig.imageUri) del(.config.masterConfig.imageUri)" "${OLD CLUSTER}-config.json" > "${NEW CLUSTER}-config-updated.json" Import the updated cluster configuration to create a new cluster with the updated configuration. curl -i -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json; charset=utf-8" -d "@${NEW CLUSTER}-config-updated.json" "https://dataproc.googleapis.com/v1/projects/${PROJECT}/regions/${REGION}/clusters?alt=json" After confirming your workloads run in the new cluster without issues, delete the existing (old) cluster.
- Set variables. export PROJECT= project-id export REGION= region export OLD CLUSTER= old-cluster-name export NEW CLUSTER= new-cluster-name export NEW IMAGE VERSION= image-version (for example, '2.2-debian12') Export the existing (old) cluster configuration to a YAML file. gcloud dataproc clusters export $OLD CLUSTER \ --project=$PROJECT \ --region=$REGION > "${OLD CLUSTER}-config.yaml" Update the configuration.
- Set variables. export PROJECT= project-id export REGION= region export OLD CLUSTER= old-cluster-name export NEW CLUSTER= new-cluster-name export NEW IMAGE VERSION= image-version (for example, '2.2-debian12') Export the existing (old) cluster configuration to a JSON file. curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" "https://dataproc.googleapis.com/v1/projects/${PROJECT}/regions/${REGION}/clusters/${OLD CLUSTER}?alt=json" > "${OLD CLUSTER}-config.json" Update the configuration.

### "Create a cluster \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/create-cluster)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a cluster with a YAML file Run the following gcloud command to export the configuration of an existing Managed Service for Apache Spark cluster into a cluster.yaml file. gcloud dataproc clusters export EXISTING CLUSTER NAME \ --region= REGION \ --destination= cluster.yaml Create a new cluster by importing the YAML file configuration. gcloud dataproc clusters import NEW CLUSTER NAME \ --region= REGION \ --source= cluster.yaml Note: During the export operation, cluster-specific fields, such as cluster name, output-only fields, and automatically applied labels are filtered.
- These fields are disallowed in the imported YAML file used to create a cluster.
- InstanceGroupConfig ; import java.io.IOException ; import java.util.concurrent.ExecutionException ; public class CreateCluster { public static void createCluster () throws IOException , InterruptedException { // TODO(developer): Replace these variables before running the sample.
- See Setting Up a Python Development Environment . from google.cloud import dataproc v1 as dataproc def create cluster ( project id , region , cluster name ): """This sample walks a user through creating a Cloud Dataproc cluster using the Python client library.

### "Recreate and update a Google Kubernetes Engine virtual cluster \_|\_ Managed\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Wait for the previous delete operation to finish, and then import the updated cluster configuration to create a new Managed Service for Apache Spark on GKE virtual cluster with the updated config settings. gcloud dataproc clusters import $CLUSTER \ --region=$REGION \ --source="${CLUSTER}-config.yaml" API Set environment variables: CLUSTER= existing Managed Service for Apache Spark on GKE cluster name \ REGION= region Export the existing Managed Service for Apache Spark on GKE cluster configuration to a YAML file. curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" "https://dataproc.googleapis.com/v1/projects/${PROJECT}/regions/${REGION}/clusters/${CLUSTER}?alt=json" > "${CLUSTER}-config.json" Update the configuration.
- Recreate and update a Managed Service for Apache Spark on GKE cluster gcloud Set environment variables: CLUSTER= existing Managed Service for Apache Spark on GKE cluster name \ REGION= region Export the existing Managed Service for Apache Spark on GKE cluster configuration to a YAML file. gcloud dataproc clusters export $CLUSTER \ --region=$REGION > "${CLUSTER}-config.yaml" Update the configuration.
- Delete the existing Managed Service for Apache Spark on GKE virtual cluster if you will create a cluster that has the same name as the cluster it is updating (if you are replacing the original cluster). curl -X DELETE -H "Authorization: Bearer $(gcloud auth print-access-token)" "https://dataproc.googleapis.com/v1/projects/${PROJECT}/regions/${REGION}/clusters/${CLUSTER}" Wait for the previous delete operation to finish, and then import the updated cluster configuration to create a new Managed Service for Apache Spark on GKE virtual cluster with the updated settings. curl -i -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json; charset=utf-8" -d "@${CLUSTER}-config.json" "https://dataproc.googleapis.com/v1/projects/${PROJECT}/regions/${REGION}/clusters?alt=json" Console The Google Cloud console does not support recreating a Managed Service for Apache Spark on GKE virtual cluster by importing an existing cluster's configuration.
- Sample sed command to remove the kubernetesNamespace field: sed -E "s/kubernetesNamespace: .+$//g" ${CLUSTER}-config.yaml Make additional changes to update Managed Service for Apache Spark on GKE virtual cluster configuration settings, such as changing the Spark componentVersion .

