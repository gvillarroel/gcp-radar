---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:23.479Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Cloud Deploy release render failure alerts"
feature_slug: "cloud-deploy-release-render-failure-alerts"
latest_feature_date: "2023-11-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/alerts"
  - "https://docs.cloud.google.com/deploy/docs/config-files"
  - "https://docs.cloud.google.com/deploy/docs/custom-targets"
  - "https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis"
keywords:
  - "deploy"
  - "release"
  - "render"
  - "failure"
  - "alerts"
  - "now"
  - "supports"
  - "configuring"
---

# Cloud Deploy release render failure alerts

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Cloud Deploy now supports configuring alerts for release render failures.

## Extended Definition

Cloud Deploy now supports configuring alerts for release render failures.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/alerts](https://docs.cloud.google.com/deploy/docs/alerts)
- [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- [https://docs.cloud.google.com/deploy/docs/custom-targets](https://docs.cloud.google.com/deploy/docs/custom-targets)
- [https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis](https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis)

## Supporting Pages

### Create Cloud Deploy alerts \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/alerts](https://docs.cloud.google.com/deploy/docs/alerts)
- Source ID: `site-docs-root-2`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Available alerts You can set up alerting policies for the following circumstances, specific to Cloud Deploy: The render operation, for a given release, has failed.
- For every release, all manifests, service definitions, and any other configs that must be rendered, are rendered for all targets before anything is deployed.
- Google Cloud Observability supports alerts generated using time-series data from Cloud Monitoring, but Cloud Deploy alerts are based on logs only .
- Home Documentation Application development Cloud Deploy Guides Send feedback Create Cloud Deploy alerts Stay organized with collections Save and categorize content based on your preferences.

### Configuration schema reference \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- Source ID: `site-docs-reference`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- The previous syntax is still supported: executionConfigs : - privatePool : workerPool : serviceAccount : artifactStorage : usages : - [ RENDER DEPLOY ] - defaultPool : serviceAccount : artifactStorage : usages : - [ RENDER DEPLOY ] When you're configuring an executionConfigs stanza for a multi-target , each child target can inherit that execution environment from that multi-target.
- When configuring the default pool, you can specify an alternate service account or storage location or both. serviceAccount The name of the service account to use for this operation ( RENDER or DEPLOY ) for this target. artifactStorage The Cloud Storage bucket to use for this operation ( RENDER or DEPLOY ) for this target, instead of the default bucket. executionTimeout Optional.
- Cloud Deploy uses the profile with skaffold render when creating the release.
- See also: Custom target type definitions For GKE targets The following YAML shows how to configure a target that deploys to a GKE cluster : apiVersion : deploy . cloud . google . com / v1 kind : Target metadata : name : annotations : labels : description : deployParameters : multiTarget : targetIds : [] requireApproval : gke : cluster : projects /[ project name ]/ locations /[ location ]/ clusters /[ cluster name ] dnsEndpoint : internalIp : proxyUrl : associatedEntities : [ KEY ] : gkeClusters : - cluster : projects /[ project name ]/ locations /[ location ]/ clusters /[ cluster name ] dnsEndpoint : [ true false ] internalIp : [ true false ] proxyUrl : executionConfigs : - usages : - [ RENDER PREDEPLOY DEPLOY VERIFY POSTDEPLOY ANALYSIS ] workerPool : serviceAccount : artifactStorage : executionTimeout : verbose : metadata.name The name of this target.

### About custom targets \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/custom-targets](https://docs.cloud.google.com/deploy/docs/custom-targets)
- Source ID: `site-docs-root-2`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- Example render results file The following is a sample results.json file output from a custom render: { "resultStatus" : "SUCCEEDED" , "manifestFile" : "gs://bucket/my-pipeline/release-001/rollout-a/01234/custom-output/manifest.yaml" , "failureMessage" : "" , "metadata" : { "key1" : "val" , "key2" : "val" } } Inputs to custom deploys For custom deploys, Cloud Deploy provides the following inputs, as environment variables: CLOUD DEPLOY PROJECT The Google Cloud project number for the project in which the custom target is created.
- Example deploy results file The following is a sample results.json file output from a custom deploy: { "resultStatus" : "SUCCEEDED" , "artifactFiles" : [ "gs://bucket/my-pipeline/release-001/rollout-a/01234/custom-output/file1.yaml" , "gs://bucket/my-pipeline/release-001/rollout-a/01234/custom-output/file2.yaml" ], "failureMessage" : "" , "skipMessage" : "" , "metadata" : { "key1" : "val" , "key2" : "val" } } Further information about custom targets Here are some things to keep in mind when setting up and using custom target types.
- A custom target type definition The CustomTargetType is a Cloud Deploy resource that identifies the tasks that targets of this type use for release render and rollout deploy activities.
- CLOUD DEPLOY INPUT GCS PATH The Cloud Storage path for the render-file archive written when the release was created.

### "Define analysis jobs that use Google Cloud Observability \_|\_ Cloud Deploy\

- URL: [https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis](https://docs.cloud.google.com/deploy/docs/analysis/cloud-monitoring-analysis)
- Source ID: `site-docs-root-2`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following is the syntax for configuring an analysis job when using a standard deployment strategy: strategy : standard : analysis : duration : DURATION googleCloud : alertPolicyChecks : - id : CHECK ID alertPolicies : - [ ALERT POLICY ID ] labels : [ KEY : VALUE ] Where: DURATION Is how long, in seconds, to run the analysis job.
- As another example, you can create a similar alerting policy on your application deployed to your staging environment, and if no alert fires during the duration of the analysis job, that job can trigger a promoteReleaseRule automation to promote the release to production.
- IAM Service Account User ( roles/iam.serviceAccountUser ) Cloud Deploy Releaser ( roles/clouddeploy.releaser ) Cloud Deploy Operator ( roles/clouddeploy.operator ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- You now have a delivery pipeline in your project, and an analysis job, which will be part of the pipeline when you create a release.

