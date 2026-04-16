---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.166Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc on Google Kubernetes Engine"
feature_slug: "dataproc-on-google-kubernetes-engine"
latest_feature_date: "2020-04-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images"
keywords:
  - "kubernetes"
  - "create"
  - "clusters"
  - "engine"
  - "users"
  - "lets"
---

# Dataproc on Google Kubernetes Engine

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc on Google Kubernetes Engine lets users create Dataproc clusters to run Spark jobs on Kubernetes through the Dataproc jobs API.

## Extended Definition

Dataproc on Google Kubernetes Engine lets users create Dataproc clusters to run Spark jobs on Kubernetes through the Dataproc jobs API.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images)

## Supporting Pages

### "Run a Spark job on Google Kubernetes Engine \_|\_ Managed Service for Apache\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Run the command: gcloud dataproc clusters gke create ${DP CLUSTER} \ --region=${REGION} \ --gke-cluster=${GKE CLUSTER} \ --spark-engine-version=latest \ --staging-bucket=${BUCKET} \ --pools="name=${DP POOLNAME},roles=default" \ --setup-workload-identity \ --history-server-cluster=${PHS CLUSTER} Notes: --spark-engine-version : The Spark image version used on the Managed Service for Apache Spark cluster.
- Each virtual cluster: is created with separate properties, including Spark engine version and workload identity is isolated within a separate GKE namespace on the GKE cluster Note: Deletion of one or more Managed Service for Apache Spark on GKE clusters does not delete associated node pools.
- To initialize the gcloud CLI, run the following command: gcloud init You must have created a standard (not autopilot) Google Kubernetes Engine (GKE) zonal or regional cluster that has Workload Identity enabled on the cluster.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https://dataproc.googleapis.com/v1/projects/ project-id /regions/ region /clusters" Select-Object -Expand Content You should receive a JSON response similar to the following: { "projectId":" PROJECT ", "clusterName":" DP CLUSTER ", "status":{ "state":"RUNNING", "stateStartTime":"2022-04-01T19:16:39.865716Z" }, "clusterUuid":"98060b77-...", "statusHistory":[ { "state":"CREATING", "stateStartTime":"2022-04-01T19:14:27.340544Z" } ], "labels":{ "goog-dataproc-cluster-name":" DP CLUSTER ", "goog-dataproc-cluster-uuid":"98060b77-...", "goog-dataproc-location":" REGION ", "goog-dataproc-environment":"prod" }, "virtualClusterConfig":{ "stagingBucket":" BUCKET ", "kubernetesClusterConfig":{ "kubernetesNamespace":"dp-cluster", "gkeClusterConfig":{ "gkeClusterTarget":"projects/ PROJECT /locations/ REGION /clusters/ GKE CLUSTER ", "nodePoolTarget":[ { "nodePool":"projects/ PROJECT /locations/ REGION /clusters/ GKE CLUSTER /nodePools/ NODE POOL ", "roles":[ "DEFAULT" ] } ] }, "kubernetesSoftwareConfig":{ "componentVersion":{ "SPARK":"3.1-..." }, "properties":{ "dpgke:dpgke.unstable.outputOnly.endpoints.sparkHistoryServer":"https://...", "spark:spark.eventLog.dir":"gs:// BUCKET /.../spark-job-history", "spark:spark.eventLog.enabled":"true" } } }, "auxiliaryServicesConfig":{ "sparkHistoryServerConfig":{ "dataprocCluster":"projects/ PROJECT /regions/ REGION /clusters/ PHS CLUSTER " } } } Submit a Spark job After your Managed Service for Apache Spark on GKE virtual cluster is running, submit a Spark job using the Google Cloud console, gcloud CLI , or the Managed Service for Apache Spark jobs.submit API (by using direct HTTP requests or the Cloud Client Libraries ).

### "Recreate and update a Google Kubernetes Engine virtual cluster \_|\_ Managed\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Recreate and update a Google Kubernetes Engine virtual cluster Stay organized with collections Save and categorize content based on your preferences.
- Delete the existing Managed Service for Apache Spark on GKE virtual cluster if you will create a cluster that has the same name as the cluster it is updating (if you are replacing the original cluster). curl -X DELETE -H "Authorization: Bearer $(gcloud auth print-access-token)" "https://dataproc.googleapis.com/v1/projects/${PROJECT}/regions/${REGION}/clusters/${CLUSTER}" Wait for the previous delete operation to finish, and then import the updated cluster configuration to create a new Managed Service for Apache Spark on GKE virtual cluster with the updated settings. curl -i -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json; charset=utf-8" -d "@${CLUSTER}-config.json" "https://dataproc.googleapis.com/v1/projects/${PROJECT}/regions/${REGION}/clusters?alt=json" Console The Google Cloud console does not support recreating a Managed Service for Apache Spark on GKE virtual cluster by importing an existing cluster's configuration.
- Wait for the previous delete operation to finish, and then import the updated cluster configuration to create a new Managed Service for Apache Spark on GKE virtual cluster with the updated config settings. gcloud dataproc clusters import $CLUSTER \ --region=$REGION \ --source="${CLUSTER}-config.yaml" API Set environment variables: CLUSTER= existing Managed Service for Apache Spark on GKE cluster name \ REGION= region Export the existing Managed Service for Apache Spark on GKE cluster configuration to a YAML file. curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" "https://dataproc.googleapis.com/v1/projects/${PROJECT}/regions/${REGION}/clusters/${CLUSTER}?alt=json" > "${CLUSTER}-config.json" Update the configuration.
- Recreate and update a Managed Service for Apache Spark on GKE cluster gcloud Set environment variables: CLUSTER= existing Managed Service for Apache Spark on GKE cluster name \ REGION= region Export the existing Managed Service for Apache Spark on GKE cluster configuration to a YAML file. gcloud dataproc clusters export $CLUSTER \ --region=$REGION > "${CLUSTER}-config.yaml" Update the configuration.

### "Create a Google Kubernetes Engine custom container image \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: The spark: file prefix is needed when creating a cluster, but omitted when submitting a job (see Cluster properties ). gcloud CLI cluster creation example: gcloud dataproc clusters gke create "${DP CLUSTER}" \ --properties=spark:spark.kubernetes.container.image= custom-image \ ... other args ... gcloud CLI job submit example: gcloud dataproc jobs submit spark \ --properties=spark.kubernetes.container.image= custom-image \ ... other args ...
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Create a Google Kubernetes Engine custom container image Stay organized with collections Save and categorize content based on your preferences.
- Use a custom container image To use a Managed Service for Apache Spark on GKE custom container image, set the spark.kubernetes.container.image property when you create a Managed Service for Apache Spark on GKE virtual cluster or submit a Spark job to the cluster.
- Create a Python example file. cat >test util.py <<'EOF' def hello(name): print("hello {}".format(name)) def read lines(path): with open(path) as f: return f.readlines() EOF Create an example init script. cat >init-script.sh <<EOF echo "hello world" >/tmp/init-script.out EOF Build and push the image. docker build -t "${IMAGE}" . && docker push "${IMAGE}" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

