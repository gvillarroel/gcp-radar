---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.024Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Ranger Cloud Storage token caching"
feature_slug: "ranger-cloud-storage-token-caching"
latest_feature_date: "2024-02-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_controller.SessionControllerAsyncClient"
keywords:
  - "ranger"
  - "storage"
  - "token"
  - "caching"
  - "dataproc"
  - "on"
  - "compute"
  - "engine"
---

# Ranger Cloud Storage token caching

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc on Compute Engine Ranger Cloud Storage integration supports caching tokens in a local cache.

## Extended Definition

Dataproc on Compute Engine Ranger Cloud Storage integration supports caching tokens in a local cache.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_controller.SessionControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_controller.SessionControllerAsyncClient)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Feature Dataproc on Compute Engine Ranger Cloud Storage enhancement: Enabled downscoping Added caching of tokens in local cache Both settings are configurable and can be enabled by customers: see Use Ranger with caching and downscoping .
- December 11, 2023 Announcement Announcing the GA release of Dataproc on Compute Engine image version 2.2 : 2.2.0-debian12, 2.2.0-rocky9, 2.2.0-ubuntu22 The 2.2.0 release includes the following components: Debian-12 / Ubuntu-2204 / RockyLinux 9 Apache Hadoop 3.3.6 Apache Spark 3.5.0 Spark-BigQuery Connector 0.34.0 Cloud Storage Connector 3.0.0 Trino 432 Apache Flink 1.17.0 Apache Ranger 2.4.0 Apache Solr 9.2.1 R 4.2 Hue 4.11.0 JupyterLab Notebook 3.6 Change Monitoring-agent-defaults metrics are not available in Dataproc on Compute Engine image version 2.2 clusters unless the Ops Agent is installed.
- Announcement New Dataproc on Compute Engine subminor image versions: 2.0.137-debian10, 2.0.137-rocky8, 2.0.137-ubuntu18 2.1.85-debian11, 2.1.85-rocky8, 2.1.85-ubuntu20, 2.1.85-ubuntu20-arm 2.2.53-debian12, 2.2.53-rocky9, 2.2.53-ubuntu22 April 09, 2025 Announcement Dataproc Serverless for Spark: Gemini Cloud Assist Investigations is available in Preview for the following runtimes: 1.1 1.2 2.2 April 08, 2025 Fixed Dataproc on Compute Engine: Fixed an issue with the retrieval of an Access token when using the ranger-gcs-plugin with 2.2 images.
- October 03, 2025 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.150-debian10, 2.0.150-ubuntu18, 2.0.150-rocky8 2.1.99-debian11, 2.1.99-ubuntu20, 2.1.99-ubuntu20-arm, 2.1.99-rocky8 2.2.67-debian12, 2.2.67-ubuntu22, 2.2.67-ubuntu22-arm, 2.2.67-rocky9 2.3.14-debian12, 2.3.14-ubuntu22, 2.3.14-ubuntu22-arm, 2.3.14-ml-ubuntu22, 2.3.14-rocky9 September 15, 2025 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.149-debian10, 2.0.149-ubuntu18, 2.0.149-rocky8 2.1.98-debian11, 2.1.98-ubuntu20, 2.1.98-ubuntu20-arm, 2.1.98-rocky8 2.2.66-debian12, 2.2.66-ubuntu22, 2.2.66-ubuntu22-arm, 2.2.66-rocky9 2.3.13-debian12, 2.3.13-ubuntu22, 2.3.13-ubuntu22-arm, 2.3.13-ml-ubuntu22, 2.3.13-rocky9 September 11, 2025 Announcement New Serverless for Apache Spark runtime versions : 1.2.61 2.2.61 2.3.12 3.0.0-RC4 September 08, 2025 Announcement Announcing the Preview release of Dataproc on Compute Engine image version 3.0.0-RC1 : Spark 4.0.0 Hadoop 3.4.1 Hive 4.1.0 Tez 0.10.5 Cloud Storage Connector 3.1.4 Conda 24.11 Java 17 Python 3.11 R 4.3 Scala 2.13 Announcement Announcing the Preview release of Serverless for Apache Spark 3.0.0-RC3 runtime : Spark 4.0.0 BigQuery Spark Connector 0.42.3 Cloud Storage Connector 3.1.5 Conda 25.3.0 Java 21 Python 3.12 R 4.4 Scala 2.13 Announcement New Dataproc on Compute Engine subminor image versions : 2.3.11-debian12, 2.3.11-ubuntu22, 2.3.11-ubuntu22-arm, 2.3.11-ml-ubuntu22, 2.3.11-rocky9 September 05, 2025 Announcement New Dataproc Serverless for Spark runtime versions: 1.2.60 2.2.60 2.3.11 September 02, 2025 Feature Multi-tenant clusters are now available in Preview.

### "Run a Spark job on Google Kubernetes Engine \_|\_ Managed Service for Apache\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- User roles To get the permissions that you need to create a Managed Service for Apache Spark cluster, ask your administrator to grant you the following IAM roles: Dataproc Editor ( roles/dataproc.editor ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the Compute Engine default service account Service account role To ensure that the Compute Engine default service account has the necessary permissions to create a Managed Service for Apache Spark cluster, ask your administrator to grant the Dataproc Worker ( roles/dataproc.worker ) IAM role to the Compute Engine default service account on the project.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https://dataproc.googleapis.com/v1/projects/ project-id /regions/ region /clusters" Select-Object -Expand Content You should receive a JSON response similar to the following: { "projectId":" PROJECT ", "clusterName":" DP CLUSTER ", "status":{ "state":"RUNNING", "stateStartTime":"2022-04-01T19:16:39.865716Z" }, "clusterUuid":"98060b77-...", "statusHistory":[ { "state":"CREATING", "stateStartTime":"2022-04-01T19:14:27.340544Z" } ], "labels":{ "goog-dataproc-cluster-name":" DP CLUSTER ", "goog-dataproc-cluster-uuid":"98060b77-...", "goog-dataproc-location":" REGION ", "goog-dataproc-environment":"prod" }, "virtualClusterConfig":{ "stagingBucket":" BUCKET ", "kubernetesClusterConfig":{ "kubernetesNamespace":"dp-cluster", "gkeClusterConfig":{ "gkeClusterTarget":"projects/ PROJECT /locations/ REGION /clusters/ GKE CLUSTER ", "nodePoolTarget":[ { "nodePool":"projects/ PROJECT /locations/ REGION /clusters/ GKE CLUSTER /nodePools/ NODE POOL ", "roles":[ "DEFAULT" ] } ] }, "kubernetesSoftwareConfig":{ "componentVersion":{ "SPARK":"3.1-..." }, "properties":{ "dpgke:dpgke.unstable.outputOnly.endpoints.sparkHistoryServer":"https://...", "spark:spark.eventLog.dir":"gs:// BUCKET /.../spark-job-history", "spark:spark.eventLog.enabled":"true" } } }, "auxiliaryServicesConfig":{ "sparkHistoryServerConfig":{ "dataprocCluster":"projects/ PROJECT /regions/ REGION /clusters/ PHS CLUSTER " } } } Submit a Spark job After your Managed Service for Apache Spark on GKE virtual cluster is running, submit a Spark job using the Google Cloud console, gcloud CLI , or the Managed Service for Apache Spark jobs.submit API (by using direct HTTP requests or the Cloud Client Libraries ).
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://dataproc.googleapis.com/v1/projects/ project-id /regions/ region /clusters" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

### "Class SessionControllerAsyncClient (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_controller.SessionControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_controller.SessionControllerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- CreateSessionRequest ( parent="parent value", session=session, session id="session id value", ) Make the request operation = client. create session (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataproc v1.types.CreateSessionRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample terminate session(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample create session(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample delete session(): Create a client client = dataproc v1 .

