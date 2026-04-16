---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.511Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Integration deployment service account override"
feature_slug: "integration-deployment-service-account-override"
latest_feature_date: "2024-02-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/configuring"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildConfig.Builder"
  - "https://docs.cloud.google.com/run/docs/quickstarts/frameworks/deploy-angular-ssr-service"
keywords:
  - "override"
  - "account"
  - "integration"
  - "deployment"
  - "lets"
---

# Integration deployment service account override

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Integration deployment service account override lets you set and override the deployment service account for Cloud Run integrations through the Google Cloud CLI.

## Extended Definition

Integration deployment service account override lets you set and override the deployment service account for Cloud Run integrations through the Google Cloud CLI.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildConfig.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildConfig.Builder)
- [https://docs.cloud.google.com/run/docs/quickstarts/frameworks/deploy-angular-ssr-service](https://docs.cloud.google.com/run/docs/quickstarts/frameworks/deploy-angular-ssr-service)

## Supporting Pages

### "Class BuildConfig.Builder (0.88.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildConfig.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildConfig.Builder)
- Source ID: `site-java-reference`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Cloud Build name of the latest successful deployment of the function. string name = 1 [(.google.api.field behavior) = OUTPUT ONLY, (.google.api.resource reference) = { ... } Returns Type Description ByteString The bytes for name. getServiceAccount() public String getServiceAccount () Optional.
- The Cloud Build name of the latest successful deployment of the function. string name = 1 [(.google.api.field behavior) = OUTPUT ONLY, (.google.api.resource reference) = { ... } Returns Type Description BuildConfig.Builder This builder for chaining. clearServiceAccount() public BuildConfig .
- FieldAccessorTable internalGetFieldAccessorTable () Returns Type Description FieldAccessorTable Overrides GeneratedMessage.Builder<BuilderType>.internalGetFieldAccessorTable() internalGetMapFieldReflection(int number) protected MapFieldReflectionAccessor internalGetMapFieldReflection ( int number ) Parameter Name Description number int Returns Type Description com.google.protobuf.MapFieldReflectionAccessor Overrides com.google.protobuf.GeneratedMessage.Builder.internalGetMapFieldReflection(int) internalGetMutableMapFieldReflection(int number) protected MapFieldReflectionAccessor internalGetMutableMapFieldReflection ( int number ) Parameter Name Description number int Returns Type Description com.google.protobuf.MapFieldReflectionAccessor Overrides com.google.protobuf.GeneratedMessage.Builder.internalGetMutableMapFieldReflection(int) isInitialized() public final boolean isInitialized () Returns Type Description boolean Overrides GeneratedMessage.Builder<BuilderType>.isInitialized() mergeFrom(BuildConfig other) public BuildConfig .
- The format of this field is projects/{projectId}/serviceAccounts/{serviceAccountEmail} . string service account = 9 [(.google.api.field behavior) = OPTIONAL]; Returns Type Description ByteString The bytes for serviceAccount. getSourceLocation() public String getSourceLocation () The Cloud Storage bucket URI where the function source code is located. string source location = 2; Returns Type Description String The sourceLocation. getSourceLocationBytes() public ByteString getSourceLocationBytes () The Cloud Storage bucket URI where the function source code is located. string source location = 2; Returns Type Description ByteString The bytes for sourceLocation. getWorkerPool() public String getWorkerPool () Optional.

### Configure Cloud Run services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring)
- Source ID: `site-docs-reference-2`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Manual scaling lets you set a specific instance count, regardless of traffic or utilization, and without requiring redeployment.
- The following table explains the features for this section: Section Feature Description A Service account The Cloud Run service identity is the service account that is used as the authenticated account for accessing Google Cloud APIs from your Cloud Run instance container.
- D Service mesh Cloud Service Mesh lets you enable mesh advanced traffic management capabilities, such as weighted traffic splitting and global load balancing, as well as observability and security policies for traffic from one Cloud Run service to another.
- Some configurations settings require additional permissions or enabling APIs, and some additional settings will appear in the web interface if you select GitHub or Functions as your deployment option.

### "Quickstart: Build and deploy a Angular SSR web app to Google Cloud with\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/frameworks/deploy-angular-ssr-service](https://docs.cloud.google.com/run/docs/quickstarts/frameworks/deploy-angular-ssr-service)
- Source ID: `site-docs-reference-2`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Delete a Google Cloud project: gcloud projects delete PROJECT ID What's next For more information on building a container from code source and pushing to a repository, see: Developing Cloud Run services Building Containers Test a Cloud Run service locally Deploying from source code For automatic GitHub integration and optimized deployments with CDN for server-rendered Angular apps, consider using Firebase App Hosting .
- Grant the Cloud Build service account access to your project Cloud Build automatically uses the Compute Engine default service account as the default Cloud Build service account to build your source code and Cloud Run resource, unless you override this behavior.
- Note: For automatic GitHub integration and optimized deployments with CDN for server-rendered Angular apps, consider using Firebase App Hosting .
- Required roles To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles: Cloud Run Admin ( roles/run.admin ) on the project Cloud Run Source Developer ( roles/run.sourceDeveloper ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the service identity Logs Viewer ( roles/logging.viewer ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .

