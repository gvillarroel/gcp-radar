---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:19.041Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "User-project container image builds"
feature_slug: "user-project-container-image-builds"
latest_feature_date: "2020-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/functions/docs/building"
  - "https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions"
  - "https://docs.cloud.google.com/functions/docs/concepts/iam"
keywords:
  - "user"
  - "project"
  - "container"
  - "image"
  - "builds"
  - "runtimes"
  - "can"
  - "build"
---

# User-project container image builds

Product: Cloud Run functions
Coverage: MEDIUM

## Step 02 Summary

Supported runtimes can build container images in the user's project for direct build log access and without the preset build-time quota.

## Extended Definition

Supported runtimes can build container images in the user's project for direct build log access and without the preset build-time quota.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
- [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam)

## Supporting Pages

### Build process overview \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- Source ID: `site-iam-reference`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View your build image logs A key benefit of having the build image process in your user project is access to build logs.
- Cloud Build then automatically builds your code into a container image and pushes that image to an image registry .
- If your private worker pool is in a different project than your function, you need to grant the Cloud Functions Service Agent Service Account ( service-FUNCTION PROJECT NUMBER@gcf-admin-robot.iam.gserviceaccount.com ) the cloudbuild.workerPoolUser role so that the Cloud Build service can access the worker pool. gcloud projects add-iam-policy-binding PRIVATE POOL PROJECT ID \ --member serviceAccount:service- FUNCTION PROJECT NUMBER @gcf-admin-robot.iam.gserviceaccount.com --role roles/cloudbuild.workerPoolUser Replace FUNCTION PROJECT NUMBER with the number of the project where the function runs and PRIVATE POOL PROJECT ID with the ID of the project in which the worker pool is located.
- You can alternatively provide your own artifact repository through dockerRepository field. roles/storage.objectViewer — Required to retrieve the function source from the Cloud Storage bucket, and to store build images in Container Registry.

### "REST Resource: projects.locations.functions \_|\_ Cloud Run functions \_\

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
- Source ID: `site-docs-root`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "name" : string , "description" : string , "status" : enum ( CloudFunctionStatus ) , "entryPoint" : string , "runtime" : string , "timeout" : string , "availableMemoryMb" : integer , "serviceAccountEmail" : string , "updateTime" : string , "versionId" : string , "labels" : { string : string , ... } , "environmentVariables" : { string : string , ... } , "buildEnvironmentVariables" : { string : string , ... } , "network" : string , "maxInstances" : integer , "minInstances" : integer , "vpcConnector" : string , "vpcConnectorEgressSettings" : enum ( VpcConnectorEgressSettings ) , "ingressSettings" : enum ( IngressSettings ) , "kmsKeyName" : string , "buildWorkerPool" : string , "buildId" : string , "buildName" : string , "secretEnvironmentVariables" : [ { object ( SecretEnvVar ) } ] , "secretVolumes" : [ { object ( SecretVolume ) } ] , "sourceToken" : string , "dockerRepository" : string , "dockerRegistry" : enum ( DockerRegistry ) , "buildServiceAccount" : string , "satisfiesPzs" : boolean , "satisfiesPzi" : boolean , // Union field source code can be only one of the following: "sourceArchiveUrl" : string , "sourceRepository" : { object ( SourceRepository ) } , "sourceUploadUrl" : string // End of list of possible types for union field source code . // Union field trigger can be only one of the following: "httpsTrigger" : { object ( HttpsTrigger ) } , "eventTrigger" : { object ( EventTrigger ) } // End of list of possible types for union field trigger . // Union field runtime update policy can be only one of the following: "automaticUpdatePolicy" : { object ( AutomaticUpdatePolicy ) } , "onDeployUpdatePolicy" : { object ( OnDeployUpdatePolicy ) } // End of list of possible types for union field runtime update policy . } Fields name string A user-defined name of the function.
- The Cloud Build Name of the function deployment. projects/<project-number>/locations/<region>/builds/<build-id> . secretEnvironmentVariables[] object ( SecretEnvVar ) Secret environment variables configuration. secretVolumes[] object ( SecretVolume ) Secret volumes configuration. sourceToken string Input only.
- Google Cloud Functions delegates access to service agents to protect function resources in internal projects that are not accessible by the end user. buildWorkerPool string Name of the Cloud Build Custom Worker Pool that should be used to build the function.
- Disclaimer: This field is only supported for Firebase function deployments. dockerRepository string User-managed repository created in Artifact Registry to which the function's Docker image will be pushed after it is built by Cloud Build.

### Access control with IAM \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam)
- Source ID: `site-iam-reference`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here's a few of the notable permissions that the cloudfunctions.serviceAgent uses: Permission Description roles/artifactregistry.admin Manage repositories and store build images in Artifact Registry. roles/cloudbuild.builds.editor Required to use Cloud Build to perform builds in user project. roles/cloudbuild.customworkers.builder Create builds in Cloud Build custom workers. compute.globalOperations.get , compute.networks.access , vpcaccess.connectors.{get, use} Provision functions with access to the consumer projects VPC. roles/eventarc.developer Manage Eventarc triggers for functions. firebasedatabase.instances.{get, update} Create functions triggered by the Firebase Realtime Database. iam.serviceAccounts.{actAs, getAccessToken, signBlob} Ability to get runtime service account credentials. iam.serviceAccounts.getOpenIdToken Needed for the agent to get an OpenID token on a user-specified authority.
- In addition, all runtimes carry out container image building and storage within your project.
- The following service accounts are used for Cloud Run functions: Name Member ID Role Compute Engine default service account PROJECT NUMBER-compute@developer.gserviceaccount.com Editor Google Cloud Functions Service Agent service-PROJECT NUMBER@gcf-admin-robot.iam.gserviceaccount.com Google Cloud Functions Service Agent Legacy Cloud Build service account 1 PROJECT NUMBER@cloudbuild.gserviceaccount.com Cloud Build Service Account Cloud Build Service Account service-PROJECT NUMBER@gcp-sa-cloudbuild.iam.gserviceaccount.com Cloud Build Service Agent Google Container Registry Service Agent service-PROJECT NUMBER@containerregistry.iam.gserviceaccount.com Container Registry Service Agent Artifact Registry Service Agent service-PROJECT NUMBER@gcp-sa-artifactregistry.iam.gserviceaccount.com Artifact Registry Service Agent Note: The iam.automaticIamGrantsForDefaultServiceAccounts organization policy constraint prevents the Editor role from being automatically granted to default service accounts.
- To support this, you also need to provision the following: The legacy Cloud Build service account 1 ( PROJECT NUMBER@cloudbuild.gserviceaccount.com ) The Cloud Build Service Agent service account ( service-PROJECT NUMBER@gcp-sa-cloudbuild.iam.gserviceaccount.com ) The Google Container Registry Service Agent service account ( service-PROJECT NUMBER@containerregistry.iam.gserviceaccount.com ) These service accounts should have the roles listed in the earlier table .

