---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.722Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "and webhook"
feature_slug: "and-webhook"
latest_feature_date: "2022-12-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automate-builds-webhook-events"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.stub.CloudBuildStubSettings.Builder"
keywords:
  - "and"
  - "webhook"
  - "build"
  - "notifications"
  - "for"
  - "email"
  - "webhooks"
  - "can"
---

# and webhook

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build notifications for email, BigQuery, and webhooks can now be customized using notifier templates.

## Extended Definition

Cloud Build notifications for email, BigQuery, and webhooks can now be customized using notifier templates.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.stub.CloudBuildStubSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.stub.CloudBuildStubSettings.Builder)

## Supporting Pages

### "Automate builds in response to webhook events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Repository triggers that use Cloud Build repositories (2nd gen) can be configured programmatically and are natively integrated with source providers, including support for GitHub and GitLab.
- 1st gen 2nd gen Cloud Build lets you define webhook triggers , which can authenticate and accept incoming webhook events.
- Use the following command to invoke a webhook event: curl -X POST -H "Content-type: application/json" "https://cloudbuild.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ REGION } /triggers/ ${ TRIGGER NAME } :webhook?key= ${ API KEY } & secret= ${ SECRET VALUE } & trigger= ${ TRIGGER NAME } & projectId= ${ PROJECT ID } " -d "{}" After completing these steps, the Secret Manager Secret Accessor role will automatically be granted to your Cloud Build service agent, service-${PROJECT NUMBER}@gcp-sa-cloudbuild.iam.gserviceaccount.com .
- These events, sent to a custom URL, allow you to directly connect external systems and external source code management systems such as Bitbucket.com, Bitbucket Server, or GitLab, to Cloud Build through webhook events.

### "Class CloudBuildSettings.Builder (3.90.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.CloudBuildSettings.Builder)
- Source ID: `site-java-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Builder<ReceiveTriggerWebhookRequest , ReceiveTriggerWebhookResponse > receiveTriggerWebhookSettings () Returns the builder for the settings used for calls to receiveTriggerWebhook.
- Returns Type Description Builder < ListWorkerPoolsRequest , ListWorkerPoolsResponse , ListWorkerPoolsPagedResponse > receiveTriggerWebhookSettings() public UnaryCallSettings .
- Builder<CancelBuildRequest , Build > cancelBuildSettings () Returns the builder for the settings used for calls to cancelBuild.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]

### "Class CloudBuildStubSettings.Builder (3.90.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.stub.CloudBuildStubSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/com.google.cloud.devtools.cloudbuild.v1.stub.CloudBuildStubSettings.Builder)
- Source ID: `site-java-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Builder<ReceiveTriggerWebhookRequest , ReceiveTriggerWebhookResponse > receiveTriggerWebhookSettings () Returns the builder for the settings used for calls to receiveTriggerWebhook.
- Returns Type Description Builder < ListWorkerPoolsRequest , ListWorkerPoolsResponse , ListWorkerPoolsPagedResponse > receiveTriggerWebhookSettings() public UnaryCallSettings .
- Builder<CancelBuildRequest , Build > cancelBuildSettings () Returns the builder for the settings used for calls to cancelBuild.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]

