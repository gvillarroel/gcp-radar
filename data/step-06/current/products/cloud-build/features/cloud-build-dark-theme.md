---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.678Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build dark theme"
feature_slug: "cloud-build-dark-theme"
latest_feature_date: "2025-09-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/release-notes"
  - "https://docs.cloud.google.com/build/docs/access-github-from-build"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder"
keywords:
  - "build"
  - "dark"
  - "theme"
  - "now"
  - "supports"
  - "in"
  - "the"
  - "console"
---

# Cloud Build dark theme

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build now supports a dark theme in the console interface.

## Extended Definition

Cloud Build now supports a dark theme in the console interface.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- [https://docs.cloud.google.com/build/docs/access-github-from-build](https://docs.cloud.google.com/build/docs/access-github-from-build)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder)

## Supporting Pages

### Cloud Build release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- You can now create build triggers that build from repositories connected to Developer Connect using the Google Cloud Console, gcloud , the Cloud Build API, and Terraform.
- October 11, 2022 Feature Cloud Build now displays build security information for artifacts stored in Artifact Registry in the Google Cloud console.
- December 08, 2025 Change In build config files, the mavenArtifacts field now supports the deployFolder field.
- To enable the dark theme, in the Google Cloud console, click Settings and utilities > Preferences .

### "Accessing GitHub from a build via SSH keys \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/access-github-from-build](https://docs.cloud.google.com/build/docs/access-github-from-build)
- Source ID: `site-docs-root-2`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Access the id github file from Secret Manager , and setup SSH steps : - name : 'gcr.io/cloud-builders/git' secretEnv : [ 'SSH KEY' ] entrypoint : 'bash' args : - - c - echo "$$SSH KEY" >> / root / . ssh / id rsa chmod 400 / root / . ssh / id rsa cp known hosts . github / root / . ssh / known hosts volumes : - name : 'ssh' path : / root / . ssh Clone the repository - name : 'gcr.io/cloud-builders/git' args : - clone - --recurse-submodules - git @github . com : GIT USERNAME / GIT REPOSITORY volumes : - name : 'ssh' path : / root / . ssh availableSecrets : secretManager : - versionName : projects / PROJECT ID / secrets / SECRET NAME / versions / latest env : 'SSH KEY' Replace the placeholder values in the above commands with the following: GIT USERNAME : The GitHub username of the repository owner.
- In your workingdir directory, create a file named known hosts.github and add the public SSH key to this file: ssh-keyscan -t rsa github.com > known hosts.github In the next section when you configure the build, you'll add instructions in the Cloud Build config file to copy the contents of known hosts.github to the known hosts file in Cloud Build's build environment.
- Configure the build To configure the build: Create a build config file named cloudbuild.yaml with two steps: the first gcloud step accesses the SSH key in Secret Manager and saves it as id rsa in a volume named ssh , along with a copy of the known hosts.github .
- You can do this by adding the key to a temporary known hosts.github file, and then copying the contents of known hosts.github to the known hosts file in Cloud Build's build environment.

### "Class CloudBuildSettings.Builder (3.90.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder)
- Source ID: `site-java-reference`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- Inheritance java.lang.Object > ClientSettings.Builder > CloudBuildSettings.Builder Inherited Members ClientSettings.Builder.applyToAllUnaryMethods(Iterable<UnaryCallSettings.Builder<?,?>>,ApiFunction<UnaryCallSettings.Builder<?,?>,Void>) ClientSettings.Builder.build() ClientSettings.Builder.getApiKey() ClientSettings.Builder.getBackgroundExecutorProvider() ClientSettings.Builder.getClock() ClientSettings.Builder.getCredentialsProvider() ClientSettings.Builder.getEndpoint() ClientSettings.Builder.getExecutorProvider() ClientSettings.Builder.getGdchApiAudience() ClientSettings.Builder.getHeaderProvider() ClientSettings.Builder.getInternalHeaderProvider() ClientSettings.Builder.getQuotaProjectId() ClientSettings.Builder.getStubSettings() ClientSettings.Builder.getTransportChannelProvider() ClientSettings.Builder.getWatchdogCheckInterval() ClientSettings.Builder.getWatchdogCheckIntervalDuration() ClientSettings.Builder.getWatchdogProvider() ClientSettings.Builder.self() ClientSettings.Builder.setApiKey(String) ClientSettings.Builder.setBackgroundExecutorProvider(ExecutorProvider) ClientSettings.Builder.setClock(ApiClock) ClientSettings.Builder.setCredentialsProvider(CredentialsProvider) ClientSettings.Builder.setEndpoint(String) ClientSettings.Builder.setExecutorProvider(ExecutorProvider) ClientSettings.Builder.setGdchApiAudience(String) ClientSettings.Builder.setHeaderProvider(HeaderProvider) ClientSettings.Builder.setInternalHeaderProvider(HeaderProvider) ClientSettings.Builder.setQuotaProjectId(String) ClientSettings.Builder.setTransportChannelProvider(TransportChannelProvider) ClientSettings.Builder.setUniverseDomain(String) ClientSettings.Builder.setWatchdogCheckInterval(Duration) ClientSettings.Builder.setWatchdogCheckIntervalDuration(Duration) ClientSettings.Builder.setWatchdogProvider(WatchdogProvider) ClientSettings.Builder.toString() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Constructors Builder() protected Builder () Builder(ClientContext clientContext) protected Builder ( ClientContext clientContext ) Parameter Name Description clientContext ClientContext Builder(CloudBuildSettings settings) protected Builder ( CloudBuildSettings settings ) Parameter Name Description settings CloudBuildSettings Builder(CloudBuildStubSettings.Builder stubSettings) protected Builder ( CloudBuildStubSettings .
- Builder<CreateWorkerPoolRequest , WorkerPool , CreateWorkerPoolOperationMetadata > createWorkerPoolOperationSettings () Returns the builder for the settings used for calls to createWorkerPool.
- Builder<UpdateWorkerPoolRequest , WorkerPool , UpdateWorkerPoolOperationMetadata > updateWorkerPoolOperationSettings () Returns the builder for the settings used for calls to updateWorkerPool.
- Builder<DeleteWorkerPoolRequest , Empty , DeleteWorkerPoolOperationMetadata > deleteWorkerPoolOperationSettings () Returns the builder for the settings used for calls to deleteWorkerPool.

