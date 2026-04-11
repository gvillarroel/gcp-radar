---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.086Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "GKE cluster configuration for Dataproc"
feature_slug: "gke-cluster-configuration-for-dataproc"
latest_feature_date: "2020-03-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-scale-cluster"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster"
keywords:
  - "gke"
  - "cluster"
  - "configuration"
  - "for"
  - "dataproc"
  - "supports"
  - "creating"
  - "clusters"
---

# GKE cluster configuration for Dataproc

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc supports creating clusters on GKE by specifying GkeClusterConfig instead of GceClusterConfig in the Beta API.

## Extended Definition

Dataproc supports creating clusters on GKE by specifying GkeClusterConfig instead of GceClusterConfig in the Beta API.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-scale-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-scale-cluster)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster)

## Supporting Pages

### "Diagnose GKE clusters \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- System information Item Archive location GKE node metrics where virtual Managed Service for Apache Spark on GKE pods run: CPU usage Memory usage /system/ NODE NAME .json Network metrics and file system status of running pods: CPU usage Memory usage Network status Filesystem status /system/ POD NAME .json Configuration information Item Archive location Cluster configmap /conf/configmap Kubernetes deployment /conf/deployment Role Based Access Control (RBAC) /conf/role /conf/rolebind /conf/serviceaccount Logs Item Archive location Agent log /logs/agent.log Spark engine log /logs/sparkengine.log Spark driver running and completed job logs over the last 24 hours /logs/ DRIVER ID Job and pod information Item Archive location JobAttempt object /jobattempts Kubernetes Pod object /pods What's next See Diagnose Managed Service for Apache Spark clusters .
- Managed Service for Apache Spark provides a gcloud CLI dataproc clusters diagnose command to help you troubleshoot Managed Service for Apache Spark on GKE cluster and job issues.
- This command gathers and archives cluster-related configuration files, logs, and outputs into an archive file. and then uploads the archive to the Cloud Storage staging bucket you specified when you created your Managed Service for Apache Spark on GKE cluster .
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Diagnose GKE clusters Stay organized with collections Save and categorize content based on your preferences.

### "Scale GKE clusters \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-scale-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-scale-cluster)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Use the following GKE gcloud container node-pools update command to change the autoscaling configuration of a Managed Service for Apache Spark on GKE node pool. gcloud container node-pools update NODE POOL NAME \ --cluster= GKE CLUSTER NAME \ --region= region \ --enable-autoscaling \ --min-nodes= min nodes (must be <= max-nodes) \ --max-nodes= max nodes (must be >= min-nodes) \ How Spark autoscaling works When a job is submitted, the driver pod is scheduled to run on the node pool associated with the Spark driver role .
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Scale GKE clusters Stay organized with collections Save and categorize content based on your preferences.
- To scale a Managed Service for Apache Spark on GKE cluster, update the autoscaler configuration of the node pool(s) associated with the Spark driver or Spark executor roles.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).

### "Recreate and update a Google Kubernetes Engine virtual cluster \_|\_ Managed\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Delete the existing Managed Service for Apache Spark on GKE virtual cluster if you will create a cluster that has the same name as the cluster it is updating (if you are replacing the original cluster). curl -X DELETE -H "Authorization: Bearer $(gcloud auth print-access-token)" "https://dataproc.googleapis.com/v1/projects/${PROJECT}/regions/${REGION}/clusters/${CLUSTER}" Wait for the previous delete operation to finish, and then import the updated cluster configuration to create a new Managed Service for Apache Spark on GKE virtual cluster with the updated settings. curl -i -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json; charset=utf-8" -d "@${CLUSTER}-config.json" "https://dataproc.googleapis.com/v1/projects/${PROJECT}/regions/${REGION}/clusters?alt=json" Console The Google Cloud console does not support recreating a Managed Service for Apache Spark on GKE virtual cluster by importing an existing cluster's configuration.
- Wait for the previous delete operation to finish, and then import the updated cluster configuration to create a new Managed Service for Apache Spark on GKE virtual cluster with the updated config settings. gcloud dataproc clusters import $CLUSTER \ --region=$REGION \ --source="${CLUSTER}-config.yaml" API Set environment variables: CLUSTER= existing Managed Service for Apache Spark on GKE cluster name \ REGION= region Export the existing Managed Service for Apache Spark on GKE cluster configuration to a YAML file. curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" "https://dataproc.googleapis.com/v1/projects/${PROJECT}/regions/${REGION}/clusters/${CLUSTER}?alt=json" > "${CLUSTER}-config.json" Update the configuration.
- Recreate and update a Managed Service for Apache Spark on GKE cluster gcloud Set environment variables: CLUSTER= existing Managed Service for Apache Spark on GKE cluster name \ REGION= region Export the existing Managed Service for Apache Spark on GKE cluster configuration to a YAML file. gcloud dataproc clusters export $CLUSTER \ --region=$REGION > "${CLUSTER}-config.yaml" Update the configuration.
- Sample jq command to remove kubernetesNamespace field: jq 'del(.virtualClusterConfig.kubernetesClusterConfig.kubernetesNamespace)' Make additional changes to update Managed Service for Apache Spark on GKE virtual cluster configuration settings, such as changing the Spark componentVersion .

