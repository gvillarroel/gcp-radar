---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.810Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build service"
feature_slug: "cloud-build-service"
latest_feature_date: "2016-01-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.stub.CloudBuildStubSettings.Builder"
  - "https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts"
keywords:
  - "build"
  - "was"
  - "released"
  - "in"
  - "beta"
---

# Cloud Build service

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build was released in beta.

## Extended Definition

Cloud Build was released in beta.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.stub.CloudBuildStubSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.stub.CloudBuildStubSettings.Builder)
- [https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts](https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts)

## Supporting Pages

### "Class CloudBuildSettings.Builder (3.90.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder)
- Source ID: `site-java-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Inheritance java.lang.Object > ClientSettings.Builder > CloudBuildSettings.Builder Inherited Members ClientSettings.Builder.applyToAllUnaryMethods(Iterable<UnaryCallSettings.Builder<?,?>>,ApiFunction<UnaryCallSettings.Builder<?,?>,Void>) ClientSettings.Builder.build() ClientSettings.Builder.getApiKey() ClientSettings.Builder.getBackgroundExecutorProvider() ClientSettings.Builder.getClock() ClientSettings.Builder.getCredentialsProvider() ClientSettings.Builder.getEndpoint() ClientSettings.Builder.getExecutorProvider() ClientSettings.Builder.getGdchApiAudience() ClientSettings.Builder.getHeaderProvider() ClientSettings.Builder.getInternalHeaderProvider() ClientSettings.Builder.getQuotaProjectId() ClientSettings.Builder.getStubSettings() ClientSettings.Builder.getTransportChannelProvider() ClientSettings.Builder.getWatchdogCheckInterval() ClientSettings.Builder.getWatchdogCheckIntervalDuration() ClientSettings.Builder.getWatchdogProvider() ClientSettings.Builder.self() ClientSettings.Builder.setApiKey(String) ClientSettings.Builder.setBackgroundExecutorProvider(ExecutorProvider) ClientSettings.Builder.setClock(ApiClock) ClientSettings.Builder.setCredentialsProvider(CredentialsProvider) ClientSettings.Builder.setEndpoint(String) ClientSettings.Builder.setExecutorProvider(ExecutorProvider) ClientSettings.Builder.setGdchApiAudience(String) ClientSettings.Builder.setHeaderProvider(HeaderProvider) ClientSettings.Builder.setInternalHeaderProvider(HeaderProvider) ClientSettings.Builder.setQuotaProjectId(String) ClientSettings.Builder.setTransportChannelProvider(TransportChannelProvider) ClientSettings.Builder.setUniverseDomain(String) ClientSettings.Builder.setWatchdogCheckInterval(Duration) ClientSettings.Builder.setWatchdogCheckIntervalDuration(Duration) ClientSettings.Builder.setWatchdogProvider(WatchdogProvider) ClientSettings.Builder.toString() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Constructors Builder() protected Builder () Builder(ClientContext clientContext) protected Builder ( ClientContext clientContext ) Parameter Name Description clientContext ClientContext Builder(CloudBuildSettings settings) protected Builder ( CloudBuildSettings settings ) Parameter Name Description settings CloudBuildSettings Builder(CloudBuildStubSettings.Builder stubSettings) protected Builder ( CloudBuildStubSettings .
- 3.90.0 (latest) 3.89.0 3.87.0 3.85.0 3.84.0 3.83.0 3.82.0 3.80.0 3.78.0 3.77.0 3.76.0 3.75.0 3.74.0 3.72.0 3.70.0 3.69.0 3.66.0 3.65.0 3.64.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.6 3.4.1 3.3.12 public static class CloudBuildSettings .
- Returns Type Description Builder < ApproveBuildRequest , Operation > build() public CloudBuildSettings build () Returns Type Description CloudBuildSettings Overrides ClientSettings.Builder<SettingsT,B>.build() Exceptions Type Description IOException cancelBuildSettings() public UnaryCallSettings .
- Builder stubSettings ) Parameter Name Description stubSettings CloudBuildStubSettings.Builder Methods applyToAllUnaryMethods(ApiFunction<UnaryCallSettings.Builder<?,?>,Void> settingsUpdater) public CloudBuildSettings .

### "Class CloudBuildStubSettings.Builder (3.90.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.stub.CloudBuildStubSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.stub.CloudBuildStubSettings.Builder)
- Source ID: `site-java-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Inheritance java.lang.Object > StubSettings.Builder > CloudBuildStubSettings.Builder Inherited Members StubSettings.Builder.<B>build() StubSettings.Builder.applyToAllUnaryMethods(Iterable<UnaryCallSettings.Builder<?,?>>,ApiFunction<UnaryCallSettings.Builder<?,?>,Void>) StubSettings.Builder.getApiKey() StubSettings.Builder.getBackgroundExecutorProvider() StubSettings.Builder.getClock() StubSettings.Builder.getCredentialsProvider() StubSettings.Builder.getEndpoint() StubSettings.Builder.getExecutorProvider() StubSettings.Builder.getGdchApiAudience() StubSettings.Builder.getHeaderProvider() StubSettings.Builder.getInternalHeaderProvider() StubSettings.Builder.getMtlsEndpoint() StubSettings.Builder.getQuotaProjectId() StubSettings.Builder.getStreamWatchdogCheckInterval() StubSettings.Builder.getStreamWatchdogCheckIntervalDuration() StubSettings.Builder.getStreamWatchdogProvider() StubSettings.Builder.getTracerFactory() StubSettings.Builder.getTransportChannelProvider() StubSettings.Builder.self() StubSettings.Builder.setApiKey(String) StubSettings.Builder.setBackgroundExecutorProvider(ExecutorProvider) StubSettings.Builder.setClock(ApiClock) StubSettings.Builder.setCredentialsProvider(CredentialsProvider) StubSettings.Builder.setEndpoint(String) StubSettings.Builder.setExecutorProvider(ExecutorProvider) StubSettings.Builder.setGdchApiAudience(String) StubSettings.Builder.setHeaderProvider(HeaderProvider) StubSettings.Builder.setInternalHeaderProvider(HeaderProvider) StubSettings.Builder.setMtlsEndpoint(String) StubSettings.Builder.setQuotaProjectId(String) StubSettings.Builder.setStreamWatchdogCheckInterval(Duration) StubSettings.Builder.setStreamWatchdogCheckIntervalDuration(Duration) StubSettings.Builder.setStreamWatchdogProvider(WatchdogProvider) StubSettings.Builder.setSwitchToMtlsEndpointAllowed(boolean) StubSettings.Builder.setTracerFactory(ApiTracerFactory) StubSettings.Builder.setTransportChannelProvider(TransportChannelProvider) StubSettings.Builder.setUniverseDomain(String) StubSettings.Builder.toString() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Constructors Builder() protected Builder () Builder(ClientContext clientContext) protected Builder ( ClientContext clientContext ) Parameter Name Description clientContext ClientContext Builder(CloudBuildStubSettings settings) protected Builder ( CloudBuildStubSettings settings ) Parameter Name Description settings CloudBuildStubSettings Methods applyToAllUnaryMethods(ApiFunction<UnaryCallSettings.Builder<?,?>,Void> settingsUpdater) public CloudBuildStubSettings .
- 3.90.0 (latest) 3.89.0 3.87.0 3.85.0 3.84.0 3.83.0 3.82.0 3.80.0 3.78.0 3.77.0 3.76.0 3.75.0 3.74.0 3.72.0 3.70.0 3.69.0 3.66.0 3.65.0 3.64.0 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.6 3.4.1 3.3.12 public static class CloudBuildStubSettings .
- Returns Type Description Builder < ApproveBuildRequest , Operation > build() public CloudBuildStubSettings build () Returns Type Description CloudBuildStubSettings Overrides StubSettings.Builder<SettingsT,B>.<B>build() Exceptions Type Description IOException cancelBuildSettings() public UnaryCallSettings .
- Parameter Name Description settingsUpdater ApiFunction < Builder < ? , ? >, java.lang.Void > Returns Type Description CloudBuildStubSettings.Builder approveBuildOperationSettings() public OperationCallSettings .

### Deploying to Cloud Run using Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts](https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- To automate your deployment: In your repository root, add a config file named cloudbuild.yaml with steps to build the image, push the image to Artifact Registry, and then invoke the gcloud run deploy command: steps : Build the image - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE / SERVICE NAME :$COMMIT SHA' , '.' ] Push the image to Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE / SERVICE NAME :$COMMIT SHA' ] Deploy image to Cloud Run - name : 'gcr.io/google.com/cloudsdktool/cloud-sdk' entrypoint : gcloud args : - 'run' - 'deploy' - ' SERVICE NAME ' - '--image' - ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE / SERVICE NAME :$COMMIT SHA' - '--region' - ' SERVICE REGION ' images : - ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE / SERVICE NAME :$COMMIT SHA' Where: REPOSITORY is the name of the Artifact Registry repository from where you deploy your image.
- In the build config file, add docker build steps to build the image and push it to Artifact Registry, and then add a gcloud build step to invoke the gcloud run deploy command to deploy the image on Cloud Run: steps : Build the image - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE ' , '.' ] Push the image to Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE ' ] Deploy image to Cloud Run - name : 'gcr.io/google.com/cloudsdktool/cloud-sdk' entrypoint : gcloud args : [ 'run' , 'deploy' , ' SERVICE NAME ' , '--image' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE ' , '--region' , ' SERVICE REGION ' ] images : - ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE ' Where: REPOSITORY is the name of the Artifact Registry repository from where you deploy your image.
- Required Identity and Access Management permissions In the Google Cloud console, go to the settings Cloud Build Permissions page: Go to Permissions For your specified Cloud Build service account or default Cloud Build service account , set the status of the following roles to Enabled : Cloud Run Admin ( roles/run.admin ) Lets Cloud Build deploy new services to Cloud Run.
- Code examples Here are some sample repositories, each of which contains a sample application and a build config file to deploy application to Cloud Run: deploy-prebuilt : A code example that shows how to deploy a prebuilt image to Cloud Run. run-example-builddeploy : A code example that shows how to build and deploy an image to Cloud Run.

