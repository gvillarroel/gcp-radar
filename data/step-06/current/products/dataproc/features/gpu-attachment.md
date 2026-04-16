---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.684Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "GPU attachment"
feature_slug: "gpu-attachment"
latest_feature_date: "2017-03-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/authentication"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/attach-dataproc"
keywords:
  - "gpu"
  - "attachment"
  - "lets"
  - "dataproc"
  - "clusters"
  - "attach"
  - "compute"
  - "engine"
---

# GPU attachment

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

GPU attachment lets Dataproc clusters attach 1 to 8 Compute Engine GPUs to master and worker nodes.

## Extended Definition

GPU attachment lets Dataproc clusters attach 1 to 8 Compute Engine GPUs to master and worker nodes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/authentication](https://docs.cloud.google.com/dataproc-metastore/docs/authentication)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster)
- [https://docs.cloud.google.com/dataproc-metastore/docs/attach-dataproc](https://docs.cloud.google.com/dataproc-metastore/docs/attach-dataproc)

## Supporting Pages

### "Attach a Managed Service for Apache Spark cluster or a self-managed cluster\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/attach-dataproc](https://docs.cloud.google.com/dataproc-metastore/docs/attach-dataproc)
- Source ID: `site-docs-root-2`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- There are two ways that you can attach a Managed Service for Apache Spark cluster using the ENDPOINT URI and WAREHOUSE DIR properties: Option 1: While creating a Managed Service for Apache Spark cluster When creating a Managed Service for Apache Spark cluster, use the properties flag with the following Hive configuration. gcloud dataproc clusters create CLUSTER NAME \ --properties="hive:hive.metastore.uris= ENDPOINT URI ,hive:hive.metastore.warehouse.dir= WAREHOUSE DIR /hive-warehouse" Replace the following: CLUSTER NAME : the name of your new Managed Service for Apache Spark cluster.
- When it's ready for use, the status changes to Running . gcloud CLI To create a cluster and attach a Dataproc Metastore, run the following gcloud dataproc clusters create command: gcloud dataproc clusters create CLUSTER NAME \ --dataproc-metastore=projects/ PROJECT ID /locations/ LOCATION /services/ SERVICE \ --region= LOCATION \ --scopes= SCOPES Replace the following: CLUSTER NAME : the name of your new Managed Service for Apache Spark cluster.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a Dataproc Metastore and a Managed Service for Apache Spark cluster: To create a Dataproc Metastore: metastore.services.create on the user account or service account To create a Managed Service for Apache Spark cluster: dataproc.clusters.create on the user account or service account To access the Hive warehouse directory: orgpolicy.policy.get1 , resourcemanager.projects.get , resourcemanager.projects.list , storage.objects. , storage.multipartUploads. on the Managed Service for Apache Spark VM service account You might also be able to get these permissions with custom roles or other predefined roles .
- Attach a self-managed cluster Set the following values in your client configuration file: hive.metastore.uris= ENDPOINT URI hive.metastore.warehouse.dir= WAREHOUSE DIR Replace the following: ENDPOINT URI : The endpoint URI of your Dataproc Metastore service.

### Authenticate to Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/authentication](https://docs.cloud.google.com/dataproc-metastore/docs/authentication)
- Source ID: `site-docs-root-2`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Compute Engine is an exception—it lets you attach a service account to a VM instance at any time.
- On Google Cloud To authenticate a workload running on Google Cloud, you use the credentials of the service account attached to the compute resource where your code is running, such as a Compute Engine virtual machine (VM) instance .
- For example, if you use Compute Engine: Create a Compute Engine instance.
- Grant the required role to the principal that will attach the service account to other resources. gcloud iam service-accounts add-iam-policy-binding SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com --member = "user: USER EMAIL " --role = roles/iam.serviceAccountUser Replace the following: SERVICE ACCOUNT NAME : the name of the service account PROJECT ID : the project ID where you created the service account USER EMAIL : the email address for a Google Account Create the resource that will run your code, and attach the service account to that resource.

### "Run a Spark job on Google Kubernetes Engine \_|\_ Managed Service for Apache\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/quickstarts/dataproc-gke-quickstart-create-cluster)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- User roles To get the permissions that you need to create a Managed Service for Apache Spark cluster, ask your administrator to grant you the following IAM roles: Dataproc Editor ( roles/dataproc.editor ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the Compute Engine default service account Service account role To ensure that the Compute Engine default service account has the necessary permissions to create a Managed Service for Apache Spark cluster, ask your administrator to grant the Dataproc Worker ( roles/dataproc.worker ) IAM role to the Compute Engine default service account on the project.
- Run the command: gcloud dataproc clusters gke create ${DP CLUSTER} \ --region=${REGION} \ --gke-cluster=${GKE CLUSTER} \ --spark-engine-version=latest \ --staging-bucket=${BUCKET} \ --pools="name=${DP POOLNAME},roles=default" \ --setup-workload-identity \ --history-server-cluster=${PHS CLUSTER} Notes: --spark-engine-version : The Spark image version used on the Managed Service for Apache Spark cluster.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https://dataproc.googleapis.com/v1/projects/ project-id /regions/ region /clusters" Select-Object -Expand Content You should receive a JSON response similar to the following: { "projectId":" PROJECT ", "clusterName":" DP CLUSTER ", "status":{ "state":"RUNNING", "stateStartTime":"2022-04-01T19:16:39.865716Z" }, "clusterUuid":"98060b77-...", "statusHistory":[ { "state":"CREATING", "stateStartTime":"2022-04-01T19:14:27.340544Z" } ], "labels":{ "goog-dataproc-cluster-name":" DP CLUSTER ", "goog-dataproc-cluster-uuid":"98060b77-...", "goog-dataproc-location":" REGION ", "goog-dataproc-environment":"prod" }, "virtualClusterConfig":{ "stagingBucket":" BUCKET ", "kubernetesClusterConfig":{ "kubernetesNamespace":"dp-cluster", "gkeClusterConfig":{ "gkeClusterTarget":"projects/ PROJECT /locations/ REGION /clusters/ GKE CLUSTER ", "nodePoolTarget":[ { "nodePool":"projects/ PROJECT /locations/ REGION /clusters/ GKE CLUSTER /nodePools/ NODE POOL ", "roles":[ "DEFAULT" ] } ] }, "kubernetesSoftwareConfig":{ "componentVersion":{ "SPARK":"3.1-..." }, "properties":{ "dpgke:dpgke.unstable.outputOnly.endpoints.sparkHistoryServer":"https://...", "spark:spark.eventLog.dir":"gs:// BUCKET /.../spark-job-history", "spark:spark.eventLog.enabled":"true" } } }, "auxiliaryServicesConfig":{ "sparkHistoryServerConfig":{ "dataprocCluster":"projects/ PROJECT /regions/ REGION /clusters/ PHS CLUSTER " } } } Submit a Spark job After your Managed Service for Apache Spark on GKE virtual cluster is running, submit a Spark job using the Google Cloud console, gcloud CLI , or the Managed Service for Apache Spark jobs.submit API (by using direct HTTP requests or the Cloud Client Libraries ).

