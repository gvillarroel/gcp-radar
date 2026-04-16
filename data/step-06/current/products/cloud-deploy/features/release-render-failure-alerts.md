---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.667Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Release render failure alerts"
feature_slug: "release-render-failure-alerts"
latest_feature_date: "2023-11-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/alerts"
  - "https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis"
  - "https://docs.cloud.google.com/deploy/docs/custom-targets"
keywords:
  - "release"
  - "render"
  - "failure"
  - "alerts"
  - "notify"
  - "you"
  - "when"
  - "deploy"
---

# Release render failure alerts

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Release render failure alerts notify you when Cloud Deploy release rendering fails.

## Extended Definition

Release render failure alerts notify you when Cloud Deploy release rendering fails.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/alerts](https://docs.cloud.google.com/deploy/docs/alerts)
- [https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis](https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis)
- [https://docs.cloud.google.com/deploy/docs/custom-targets](https://docs.cloud.google.com/deploy/docs/custom-targets)

## Supporting Pages

### Create Cloud Deploy alerts \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/alerts](https://docs.cloud.google.com/deploy/docs/alerts)
- Source ID: `site-docs-reference-2`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Available alerts You can set up alerting policies for the following circumstances, specific to Cloud Deploy: The render operation, for a given release, has failed.
- For every release, all manifests, service definitions, and any other configs that must be rendered, are rendered for all targets before anything is deployed.
- When using a canary deployment strategy, each canary increment is a phase in the rollout for that release and target.
- Home Documentation Application development Cloud Deploy Guides Send feedback Create Cloud Deploy alerts Stay organized with collections Save and categorize content based on your preferences.

### "Define analysis jobs that use Google Cloud Observability \_|\_ Cloud Deploy\

- URL: [https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis](https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis)
- Source ID: `site-docs-reference-required-3`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following is the syntax for configuring an analysis job when using a standard deployment strategy: strategy : standard : analysis : duration : DURATION googleCloud : alertPolicyChecks : - id : CHECK ID alertPolicies : - [ ALERT POLICY ID ] labels : [ KEY : VALUE ] Where: DURATION Is how long, in seconds, to run the analysis job.
- As another example, you can create a similar alerting policy on your application deployed to your staging environment, and if no alert fires during the duration of the analysis job, that job can trigger a promoteReleaseRule automation to promote the release to production.
- IAM Service Account User ( roles/iam.serviceAccountUser ) Cloud Deploy Releaser ( roles/clouddeploy.releaser ) Cloud Deploy Operator ( roles/clouddeploy.operator ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- You now have a delivery pipeline in your project, and an analysis job, which will be part of the pipeline when you create a release.

### About custom targets \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/custom-targets](https://docs.cloud.google.com/deploy/docs/custom-targets)
- Source ID: `site-docs-reference-2`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example deploy results file The following is a sample results.json file output from a custom deploy: { "resultStatus" : "SUCCEEDED" , "artifactFiles" : [ "gs://bucket/my-pipeline/release-001/rollout-a/01234/custom-output/file1.yaml" , "gs://bucket/my-pipeline/release-001/rollout-a/01234/custom-output/file2.yaml" ], "failureMessage" : "" , "skipMessage" : "" , "metadata" : { "key1" : "val" , "key2" : "val" } } Further information about custom targets Here are some things to keep in mind when setting up and using custom target types.
- Example render results file The following is a sample results.json file output from a custom render: { "resultStatus" : "SUCCEEDED" , "manifestFile" : "gs://bucket/my-pipeline/release-001/rollout-a/01234/custom-output/manifest.yaml" , "failureMessage" : "" , "metadata" : { "key1" : "val" , "key2" : "val" } } Inputs to custom deploys For custom deploys, Cloud Deploy provides the following inputs, as environment variables: CLOUD DEPLOY PROJECT The Google Cloud project number for the project in which the custom target is created.
- CLOUD DEPLOY INPUT GCS PATH The Cloud Storage path for the render-file archive written when the release was created.
- A custom target type definition The CustomTargetType is a Cloud Deploy resource that identifies the tasks that targets of this type use for release render and rollout deploy activities.

