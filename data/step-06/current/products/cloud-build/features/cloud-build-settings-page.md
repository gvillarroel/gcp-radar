---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.777Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build settings page"
feature_slug: "cloud-build-settings-page"
latest_feature_date: "2019-08-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.stub.CloudBuildStubSettings.Builder"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings"
keywords:
  - "build"
  - "settings"
  - "page"
  - "added"
  - "in"
  - "the"
  - "console"
  - "for"
---

# Cloud Build settings page

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build added a Settings page in the Google Cloud Console for managing service account permissions.

## Extended Definition

Cloud Build added a Settings page in the Google Cloud Console for managing service account permissions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.stub.CloudBuildStubSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.stub.CloudBuildStubSettings.Builder)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings)

## Supporting Pages

### "Class CloudBuildSettings.Builder (3.90.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder)
- Source ID: `site-java-reference`
- Final score: 242
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ListBuildTriggersPagedResponse > listBuildTriggersSettings () Returns the builder for the settings used for calls to listBuildTriggers.
- ListWorkerPoolsPagedResponse > listWorkerPoolsSettings () Returns the builder for the settings used for calls to listWorkerPools.
- ListBuildsPagedResponse > listBuildsSettings () Returns the builder for the settings used for calls to listBuilds.
- Builder<CreateWorkerPoolRequest , WorkerPool , CreateWorkerPoolOperationMetadata > createWorkerPoolOperationSettings () Returns the builder for the settings used for calls to createWorkerPool.

### "Class CloudBuildStubSettings.Builder (3.90.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.stub.CloudBuildStubSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.stub.CloudBuildStubSettings.Builder)
- Source ID: `site-java-reference`
- Final score: 242
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ListBuildTriggersPagedResponse > listBuildTriggersSettings () Returns the builder for the settings used for calls to listBuildTriggers.
- ListWorkerPoolsPagedResponse > listWorkerPoolsSettings () Returns the builder for the settings used for calls to listWorkerPools.
- ListBuildsPagedResponse > listBuildsSettings () Returns the builder for the settings used for calls to listBuilds.
- Builder<CreateWorkerPoolRequest , WorkerPool , CreateWorkerPoolOperationMetadata > createWorkerPoolOperationSettings () Returns the builder for the settings used for calls to createWorkerPool.

### "Class CloudBuildSettings (3.90.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings)
- Source ID: `site-java-reference`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ListBuildTriggersPagedResponse > listBuildTriggersSettings () Returns the object with the settings used for calls to listBuildTriggers.
- ListBuildsPagedResponse > listBuildsSettings () Returns the object with the settings used for calls to listBuilds.
- Builder cloudBuildSettingsBuilder = CloudBuildSettings . newBuilder (); cloudBuildSettingsBuilder . getBuildSettings () . setRetrySettings ( cloudBuildSettingsBuilder . getBuildSettings () . getRetrySettings () . toBuilder () . setInitialRetryDelayDuration ( Duration . ofSeconds ( 1 )) . setInitialRpcTimeoutDuration ( Duration . ofSeconds ( 5 )) . setMaxAttempts ( 5 ) . setMaxRetryDelayDuration ( Duration . ofSeconds ( 30 )) . setMaxRpcTimeoutDuration ( Duration . ofSeconds ( 60 )) . setRetryDelayMultiplier ( 1.3 ) . setRpcTimeoutMultiplier ( 1.5 ) . setTotalTimeoutDuration ( Duration . ofSeconds ( 300 )) . build ()); CloudBuildSettings cloudBuildSettings = cloudBuildSettingsBuilder . build (); Please refer to the Client Side Retry Guide for additional support in setting retries.
- For example, to configure the RetrySettings for createBuild: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library CloudBuildSettings .

