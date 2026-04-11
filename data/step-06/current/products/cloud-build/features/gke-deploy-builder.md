---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.780Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "gke-deploy builder"
feature_slug: "gke-deploy-builder"
latest_feature_date: "2019-06-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/deploying-builds/deploy-gke"
  - "https://docs.cloud.google.com/build/docs/create-custom-build-steps"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder"
keywords:
  - "gke"
  - "deploy"
  - "builder"
  - "build"
  - "introduced"
  - "the"
---

# gke-deploy builder

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build introduced the gke-deploy builder.

## Extended Definition

Cloud Build introduced the gke-deploy builder.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/deploying-builds/deploy-gke](https://docs.cloud.google.com/build/docs/deploying-builds/deploy-gke)
- [https://docs.cloud.google.com/build/docs/create-custom-build-steps](https://docs.cloud.google.com/build/docs/create-custom-build-steps)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder)

## Supporting Pages

### Deploying to GKE \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/deploying-builds/deploy-gke](https://docs.cloud.google.com/build/docs/deploying-builds/deploy-gke)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Building and deploying a new container image To build a new container image and deploy the new container image: Update your Kubernetes resource file with the new container image using the --image attribute: YAML steps : build the container image - name : "gcr.io/cloud-builders/docker" args : [ "build" , "-t" , " LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE NAME : TAG " , "." ] push container image - name : "gcr.io/cloud-builders/docker" args : [ "push" , " LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE NAME : TAG " ] deploy container image to GKE - name : "gcr.io/cloud-builders/gke-deploy" args : - run - --filename= KUBERNETES RESOURCE FILE - --image= LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE NAME : TAG - --location= CLUSTER LOCATION - --cluster= CLUSTER JSON { "steps" : [ { "name" : "gcr.io/cloud-builders/docker" , "args" : [ "build" , "-t" , " LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE NAME : TAG " , "." ] }, { "name" : "gcr.io/cloud-builders/docker" , "args" : [ "push" , " LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE NAME : TAG " ] }, { "name" : "gcr.io/cloud-builders/gke-deploy" , "args" : [ "run" , "--filename= KUBERNETES RESOURCE FILE " , "--image= LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE NAME : TAG " , "--location= CLUSTER LOCATION " , "--cluster= CLUSTER " ] } ] } Where: LOCATION is one of the supported build locations .
- If you want to deploy to a different cluster, you can use the same build configuration and only need to change the values of the substitution variables: YAML steps : ... deploy container image to GKE - name : "gcr.io/cloud-builders/gke-deploy" args : - run - --filename= KUBERNETES RESOURCE FILE - --image= LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE NAME : TAG - --location=${ CLOUDSDK COMPUTE ZONE} - --cluster=${ CLOUDSDK CONTAINER CLUSTER} JSON { "steps" : [ { "name" : "gcr.io/cloud-builders/gke-deploy" , "args" : [ "run" , "--filename= KUBERNETES RESOURCE FILE " , "--image= LOCATION -docker.pkg.dev/ PROJECT / REPOSITORY / IMAGE NAME : TAG " , "--location=${ CLOUDSDK COMPUTE ZONE}" , "--cluster=${ CLOUDSDK CONTAINER CLUSTER}" ] } ] } Where: KUBERNETES RESOURCE FILE is the path of your Kubernetes configuration file or the directory path containing your Kubernetes resource files.
- Add the gke-deploy step in your build configuration file : YAML steps : ... deploy container image to GKE - name : "gcr.io/cloud-builders/gke-deploy" args : - run - --filename= KUBERNETES RESOURCE FILE - --location= CLUSTER LOCATION - --cluster= CLUSTER JSON { "steps" : [ { "name" : "gcr.io/cloud-builders/gke-deploy" , "args" : [ "run" , "--filename= KUBERNETES RESOURCE FILE " , "--location= CLUSTER LOCATION " , "--cluster= CLUSTER " ] } ] } Where: KUBERNETES RESOURCE FILE is the path of your Kubernetes resource file or the directory path containing your Kubernetes resource files.
- Cloud Build provides a gke-deploy builder that lets you deploy a containerized application to a GKE cluster. gke-deploy is a wrapper around kubectl , the command-line interface for Kubernetes.

### "Using community-contributed builders and custom builders \_|\_ Cloud Build\

- URL: [https://docs.cloud.google.com/build/docs/create-custom-build-steps](https://docs.cloud.google.com/build/docs/create-custom-build-steps)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- The following code shows an example Dockerfile : FROM alpine RUN apk add curl CMD curl https : //httpbin.org/ip -s > myip.txt; echo " My IP is: $(cat myip.txt)" Build and push the custom builder to the Artifact Registry in your project, replacing values for project-id and image-name : gcloud builds submit -- tag gcr . io / project - id / image - name Use the custom builder image in Cloud Build by specifying the builder in the name field of a build step: YAML steps : - name : 'gcr.io/ project-id / image-name ' id : Determine IP of this build worker JSON { "steps" : [ { "name" : "gcr.io/ project-id / image-name " , "id" : "Determine IP of this build worker" } ] } Use the build config file to start the build manually or build using triggers .
- Clone the cloud-builders-community repository: git clone https : //github.com/GoogleCloudPlatform/cloud-builders-community.git Navigate to the builder image you want to use, where builder-name is the directory that contains the builder: cd cloud - builders - community / builder - name Submit the builder to your project: gcloud builds submit .
- Remove the repository from your root directory: rm - rf cloud - builders - community / In your Cloud Build config file, use the builder in a build step: YAML steps : - name : 'gcr.io/ project-id / builder-name ' args : [ ' arg1 ' , ' arg2 ' , ... ] ...
- Using community-contributed builders Prebuilt images are not available for community-contributed builders; to use these builders in a Cloud Build config file, you must first build the image and push it to Artifact Registry in your project.

### "Class CloudBuildSettings.Builder (3.90.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder)
- Source ID: `site-java-reference`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- Inheritance java.lang.Object > ClientSettings.Builder > CloudBuildSettings.Builder Inherited Members ClientSettings.Builder.applyToAllUnaryMethods(Iterable<UnaryCallSettings.Builder<?,?>>,ApiFunction<UnaryCallSettings.Builder<?,?>,Void>) ClientSettings.Builder.build() ClientSettings.Builder.getApiKey() ClientSettings.Builder.getBackgroundExecutorProvider() ClientSettings.Builder.getClock() ClientSettings.Builder.getCredentialsProvider() ClientSettings.Builder.getEndpoint() ClientSettings.Builder.getExecutorProvider() ClientSettings.Builder.getGdchApiAudience() ClientSettings.Builder.getHeaderProvider() ClientSettings.Builder.getInternalHeaderProvider() ClientSettings.Builder.getQuotaProjectId() ClientSettings.Builder.getStubSettings() ClientSettings.Builder.getTransportChannelProvider() ClientSettings.Builder.getWatchdogCheckInterval() ClientSettings.Builder.getWatchdogCheckIntervalDuration() ClientSettings.Builder.getWatchdogProvider() ClientSettings.Builder.self() ClientSettings.Builder.setApiKey(String) ClientSettings.Builder.setBackgroundExecutorProvider(ExecutorProvider) ClientSettings.Builder.setClock(ApiClock) ClientSettings.Builder.setCredentialsProvider(CredentialsProvider) ClientSettings.Builder.setEndpoint(String) ClientSettings.Builder.setExecutorProvider(ExecutorProvider) ClientSettings.Builder.setGdchApiAudience(String) ClientSettings.Builder.setHeaderProvider(HeaderProvider) ClientSettings.Builder.setInternalHeaderProvider(HeaderProvider) ClientSettings.Builder.setQuotaProjectId(String) ClientSettings.Builder.setTransportChannelProvider(TransportChannelProvider) ClientSettings.Builder.setUniverseDomain(String) ClientSettings.Builder.setWatchdogCheckInterval(Duration) ClientSettings.Builder.setWatchdogCheckIntervalDuration(Duration) ClientSettings.Builder.setWatchdogProvider(WatchdogProvider) ClientSettings.Builder.toString() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Constructors Builder() protected Builder () Builder(ClientContext clientContext) protected Builder ( ClientContext clientContext ) Parameter Name Description clientContext ClientContext Builder(CloudBuildSettings settings) protected Builder ( CloudBuildSettings settings ) Parameter Name Description settings CloudBuildSettings Builder(CloudBuildStubSettings.Builder stubSettings) protected Builder ( CloudBuildStubSettings .
- Returns Type Description Builder < UpdateWorkerPoolRequest , Operation > Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Builder<CreateWorkerPoolRequest , WorkerPool , CreateWorkerPoolOperationMetadata > createWorkerPoolOperationSettings () Returns the builder for the settings used for calls to createWorkerPool.
- Builder<UpdateWorkerPoolRequest , WorkerPool , UpdateWorkerPoolOperationMetadata > updateWorkerPoolOperationSettings () Returns the builder for the settings used for calls to updateWorkerPool.

