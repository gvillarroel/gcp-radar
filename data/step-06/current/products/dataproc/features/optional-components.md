---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.665Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Optional Components"
feature_slug: "optional-components"
latest_feature_date: "2019-03-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
keywords:
  - "optional"
  - "components"
  - "let"
  - "users"
  - "specify"
  - "additional"
  - "software"
  - "install"
---

# Optional Components

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Optional Components let users specify additional software components to install when creating Dataproc clusters; Optional Components let users specify additional software components to install when creating Dataproc clusters.

## Extended Definition

Optional Components let users specify additional software components to install when creating Dataproc clusters; Optional Components let users specify additional software components to install when creating Dataproc clusters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)

## Supporting Pages

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If your project is part of a shared VPC , you must specify the full subnetwork URL in the following format: projects/ HOST PROJECT ID /regions/ REGION /subnetworks/ SUBNET . --optional-components : This flag is available only when using base image versions 2.3 and later.
- A list of optional components , such as SOLR, RANGER, TRINO, DOCKER, FLINK, HIVE WEBHCAT, ZEPPELIN, HUDI, ICEBERG, and PIG (PIG is available as an optional component in image versions 2.3 and later), to install in the image.
- Using optional components: 2.2 and earlier base images: By default, all of the Managed Service for Apache Spark optional components (OS packages and configs) are installed on the custom image.
- 2.3 and later base images: Only the selected optional components are installed on the custom image (see the generate custom image.py --optional-components flag ).

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "clusterType" : enum ( ClusterType ) , "clusterTier" : enum ( ClusterTier ) , "configBucket" : string , "tempBucket" : string , "gceClusterConfig" : { object ( GceClusterConfig ) } , "masterConfig" : { object ( InstanceGroupConfig ) } , "workerConfig" : { object ( InstanceGroupConfig ) } , "secondaryWorkerConfig" : { object ( InstanceGroupConfig ) } , "softwareConfig" : { object ( SoftwareConfig ) } , "initializationActions" : [ { object ( NodeInitializationAction ) } ] , "encryptionConfig" : { object ( EncryptionConfig ) } , "autoscalingConfig" : { object ( AutoscalingConfig ) } , "securityConfig" : { object ( SecurityConfig ) } , "lifecycleConfig" : { object ( LifecycleConfig ) } , "endpointConfig" : { object ( EndpointConfig ) } , "metastoreConfig" : { object ( MetastoreConfig ) } , "dataprocMetricConfig" : { object ( DataprocMetricConfig ) } , "auxiliaryNodeGroups" : [ { object ( AuxiliaryNodeGroup ) } ] } Fields clusterType enum ( ClusterType ) Optional.
- JSON representation { "imageVersion" : string , "properties" : { string : string , ... } , "optionalComponents" : [ enum ( Component ) ] } Fields imageVersion string Optional.
- The Compute Engine config settings for a cluster's secondary worker instances softwareConfig object ( SoftwareConfig ) Optional.
- Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } . optionalComponents[] enum ( Component ) Optional.

### "Run a Spark job on Google Kubernetes Engine \_|\_ Managed Service for Apache\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- BUCKET : (Optional) You can specify the name of a Cloud Storage bucket , which Managed Service for Apache Spark will use to stage artifacts.
- Note: If you installed the gcloud CLI previously, make sure you have the latest version by running gcloud components update .
- Note: If you installed the gcloud CLI previously, make sure you have the latest version by running gcloud components update .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https://dataproc.googleapis.com/v1/projects/ project-id /regions/ region /clusters" Select-Object -Expand Content You should receive a JSON response similar to the following: { "projectId":" PROJECT ", "clusterName":" DP CLUSTER ", "status":{ "state":"RUNNING", "stateStartTime":"2022-04-01T19:16:39.865716Z" }, "clusterUuid":"98060b77-...", "statusHistory":[ { "state":"CREATING", "stateStartTime":"2022-04-01T19:14:27.340544Z" } ], "labels":{ "goog-dataproc-cluster-name":" DP CLUSTER ", "goog-dataproc-cluster-uuid":"98060b77-...", "goog-dataproc-location":" REGION ", "goog-dataproc-environment":"prod" }, "virtualClusterConfig":{ "stagingBucket":" BUCKET ", "kubernetesClusterConfig":{ "kubernetesNamespace":"dp-cluster", "gkeClusterConfig":{ "gkeClusterTarget":"projects/ PROJECT /locations/ REGION /clusters/ GKE CLUSTER ", "nodePoolTarget":[ { "nodePool":"projects/ PROJECT /locations/ REGION /clusters/ GKE CLUSTER /nodePools/ NODE POOL ", "roles":[ "DEFAULT" ] } ] }, "kubernetesSoftwareConfig":{ "componentVersion":{ "SPARK":"3.1-..." }, "properties":{ "dpgke:dpgke.unstable.outputOnly.endpoints.sparkHistoryServer":"https://...", "spark:spark.eventLog.dir":"gs:// BUCKET /.../spark-job-history", "spark:spark.eventLog.enabled":"true" } } }, "auxiliaryServicesConfig":{ "sparkHistoryServerConfig":{ "dataprocCluster":"projects/ PROJECT /regions/ REGION /clusters/ PHS CLUSTER " } } } Submit a Spark job After your Managed Service for Apache Spark on GKE virtual cluster is running, submit a Spark job using the Google Cloud console, gcloud CLI , or the Managed Service for Apache Spark jobs.submit API (by using direct HTTP requests or the Cloud Client Libraries ).

