---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.079Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc on Google Kubernetes Engine"
feature_slug: "dataproc-on-google-kubernetes-engine"
latest_feature_date: "2020-04-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster"
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster"
keywords:
  - "dataproc"
  - "on"
  - "kubernetes"
  - "engine"
  - "lets"
  - "users"
  - "create"
  - "clusters"
---

# Dataproc on Google Kubernetes Engine

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc on Google Kubernetes Engine lets users create Dataproc clusters to run Spark jobs on Kubernetes through the Dataproc jobs API.

## Extended Definition

Dataproc on Google Kubernetes Engine lets users create Dataproc clusters to run Spark jobs on Kubernetes through the Dataproc jobs API.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster)
- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster)

## Supporting Pages

### "Run a Spark job on Google Kubernetes Engine \_|\_ Managed Service for Apache\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Run the command: gcloud dataproc clusters gke create ${DP CLUSTER} \ --region=${REGION} \ --gke-cluster=${GKE CLUSTER} \ --spark-engine-version=latest \ --staging-bucket=${BUCKET} \ --pools="name=${DP POOLNAME},roles=default" \ --setup-workload-identity \ --history-server-cluster=${PHS CLUSTER} Notes: --spark-engine-version : The Spark image version used on the Managed Service for Apache Spark cluster.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https://dataproc.googleapis.com/v1/projects/ project-id /regions/ region /clusters" Select-Object -Expand Content You should receive a JSON response similar to the following: { "projectId":" PROJECT ", "clusterName":" DP CLUSTER ", "status":{ "state":"RUNNING", "stateStartTime":"2022-04-01T19:16:39.865716Z" }, "clusterUuid":"98060b77-...", "statusHistory":[ { "state":"CREATING", "stateStartTime":"2022-04-01T19:14:27.340544Z" } ], "labels":{ "goog-dataproc-cluster-name":" DP CLUSTER ", "goog-dataproc-cluster-uuid":"98060b77-...", "goog-dataproc-location":" REGION ", "goog-dataproc-environment":"prod" }, "virtualClusterConfig":{ "stagingBucket":" BUCKET ", "kubernetesClusterConfig":{ "kubernetesNamespace":"dp-cluster", "gkeClusterConfig":{ "gkeClusterTarget":"projects/ PROJECT /locations/ REGION /clusters/ GKE CLUSTER ", "nodePoolTarget":[ { "nodePool":"projects/ PROJECT /locations/ REGION /clusters/ GKE CLUSTER /nodePools/ NODE POOL ", "roles":[ "DEFAULT" ] } ] }, "kubernetesSoftwareConfig":{ "componentVersion":{ "SPARK":"3.1-..." }, "properties":{ "dpgke:dpgke.unstable.outputOnly.endpoints.sparkHistoryServer":"https://...", "spark:spark.eventLog.dir":"gs:// BUCKET /.../spark-job-history", "spark:spark.eventLog.enabled":"true" } } }, "auxiliaryServicesConfig":{ "sparkHistoryServerConfig":{ "dataprocCluster":"projects/ PROJECT /regions/ REGION /clusters/ PHS CLUSTER " } } } Submit a Spark job After your Managed Service for Apache Spark on GKE virtual cluster is running, submit a Spark job using the Google Cloud console, gcloud CLI , or the Managed Service for Apache Spark jobs.submit API (by using direct HTTP requests or the Cloud Client Libraries ).
- HTTP method and URL: POST https://dataproc.googleapis.com/v1/projects/ project-id /regions/ region /clusters Request JSON body: { "clusterName":" DP CLUSTER ", "projectId":" PROJECT ", "virtualClusterConfig":{ "auxiliaryServicesConfig":{ "sparkHistoryServerConfig":{ "dataprocCluster":"projects/ PROJECT /regions/ REGION /clusters/ PHS CLUSTER " } }, "kubernetesClusterConfig":{ "gkeClusterConfig":{ "gkeClusterTarget":"projects/ PROJECT /locations/ REGION /clusters/ GKE CLUSTER ", "nodePoolTarget":[ { "nodePool":"projects/ PROJECT /locations/ REGION /clusters/ GKE CLUSTER /nodePools/ NODE POOL ", "roles":[ "DEFAULT" ] } ] }, "kubernetesSoftwareConfig":{ "componentVersion":{ "SPARK":"latest" } } }, "stagingBucket":" BUCKET " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- User roles To get the permissions that you need to create a Managed Service for Apache Spark cluster, ask your administrator to grant you the following IAM roles: Dataproc Editor ( roles/dataproc.editor ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the Compute Engine default service account Service account role To ensure that the Compute Engine default service account has the necessary permissions to create a Managed Service for Apache Spark cluster, ask your administrator to grant the Dataproc Worker ( roles/dataproc.worker ) IAM role to the Compute Engine default service account on the project.

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- February 10, 2025 Announcement Dataproc on Compute Engine: To help diagnose Dataproc clusters, you can set the following cluster properties to true when you create a cluster : dataproc:diagnostic.capture.enabled : When set to true , enables the collection of checkpoint data in the cluster temp bucket . dataproc:dataproc.logging.extended.enabled : When set to true , enables the collection of logs for the Knox, Zeppelin, Solr, Trino, Presto, Ranger-usersync, Jupyter notebook components and the Spark History-Server in Cloud Logging . dataproc:dataproc.logging.syslog.enabled : When set to true , enables the collection of VM syslogs in Cloud Logging .
- Announcement Dataproc on Compute Engine: Starting August 18, 2025, the following diagnostic properties will be enabled by default for newly created Dataproc clusters: dataproc:diagnostic.capture.enabled : Enables the collection of checkpoint data in the cluster temp bucket . dataproc:dataproc.logging.extended.enabled : Enables the collection of logs for the Knox, Zeppelin, Ranger-usersync, Jupyter notebook, Jupyter kernel gateway components and the Spark History-Server in Cloud Logging . dataproc:dataproc.logging.syslog.enabled : Enables the collection of VM syslogs in Cloud Logging .
- Change Dataproc on Compute Engine: The following diagnostic properties are now enabled by default for new Dataproc clusters created with 2.0+ image versions: dataproc:diagnostic.capture.enabled : Collects checkpoint diagnostic data in the cluster temp bucket . dataproc:dataproc.logging.extended.enabled : Collects logs for the Knox, Zeppelin, Ranger-usersync, Jupyter notebook, Jupyter kernel gateway components and the Spark History-Server in Cloud Logging . dataproc:dataproc.logging.syslog.enabled : Collects VM syslogs in Cloud Logging .
- Fixed Fixed the ability to delete jobs that fast-failed before some cluster and staging directories were created Fixed some remaining errors with vmem settings when using the distcp command Fixed a rare bug in which underlying Compute Engine issues could lead to VM instances failing to be deleted after the Cloud Dataproc cluster had been successfully deleted Hive command has been fixed Fixed error reporting when updating the number of workers (standard and preemptible) in a cluster Fixed some cases when Rate Limit Exceeded errors occurred The maximum cluster name length is now correctly 55 instead of 56 characters GCP Console Cluster list now includes a Created column, and the cluster configuration tab now includes a Created field, telling the creation time of the cluster In the cluster-create screen, cluster memory sizes greater than 999 GB are now displayed in TB Fields that were missing from the PySpark and Hive job configuration tab ( Additional Python Files and Jar Files ) have been added The option to add preemptible nodes when creating a cluster is now in the "expander" at the bottom of the form Machine types with insufficient memory (less than 3.5 GB) are no longer displayed in the list of machine types (previously, selecting one of these small machine types would lead to an error from the backend The placeholder text in the Arguments field of the submit-job form has been corrected October 23, 2015 Feature GCP Console: Added support for adding, editing, and removing preemptible instances in clusters.

### "Recreate and update a Google Kubernetes Engine virtual cluster \_|\_ Managed\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Delete the existing Managed Service for Apache Spark on GKE virtual cluster if you will create a cluster that has the same name as the cluster it is updating (if you are replacing the original cluster). curl -X DELETE -H "Authorization: Bearer $(gcloud auth print-access-token)" "https://dataproc.googleapis.com/v1/projects/${PROJECT}/regions/${REGION}/clusters/${CLUSTER}" Wait for the previous delete operation to finish, and then import the updated cluster configuration to create a new Managed Service for Apache Spark on GKE virtual cluster with the updated settings. curl -i -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json; charset=utf-8" -d "@${CLUSTER}-config.json" "https://dataproc.googleapis.com/v1/projects/${PROJECT}/regions/${REGION}/clusters?alt=json" Console The Google Cloud console does not support recreating a Managed Service for Apache Spark on GKE virtual cluster by importing an existing cluster's configuration.
- Wait for the previous delete operation to finish, and then import the updated cluster configuration to create a new Managed Service for Apache Spark on GKE virtual cluster with the updated config settings. gcloud dataproc clusters import $CLUSTER \ --region=$REGION \ --source="${CLUSTER}-config.yaml" API Set environment variables: CLUSTER= existing Managed Service for Apache Spark on GKE cluster name \ REGION= region Export the existing Managed Service for Apache Spark on GKE cluster configuration to a YAML file. curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" "https://dataproc.googleapis.com/v1/projects/${PROJECT}/regions/${REGION}/clusters/${CLUSTER}?alt=json" > "${CLUSTER}-config.json" Update the configuration.
- Recreate and update a Managed Service for Apache Spark on GKE cluster gcloud Set environment variables: CLUSTER= existing Managed Service for Apache Spark on GKE cluster name \ REGION= region Export the existing Managed Service for Apache Spark on GKE cluster configuration to a YAML file. gcloud dataproc clusters export $CLUSTER \ --region=$REGION > "${CLUSTER}-config.yaml" Update the configuration.
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Recreate and update a Google Kubernetes Engine virtual cluster Stay organized with collections Save and categorize content based on your preferences.

