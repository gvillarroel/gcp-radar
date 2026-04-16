---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.666Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Sample custom targets"
feature_slug: "sample-custom-targets"
latest_feature_date: "2023-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/custom-targets"
  - "https://docs.cloud.google.com/deploy/docs/create-pipeline-targets"
  - "https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.customTargetTypes"
keywords:
  - "sample"
  - "custom"
  - "targets"
  - "provide"
  - "example"
  - "implementations"
  - "target"
  - "integrations"
---

# Sample custom targets

Product: Cloud Deploy
Coverage: MEDIUM

## Step 02 Summary

Sample custom targets provide example implementations for custom target integrations such as Terraform Infrastructure Manager, GitOps, Vertex AI, and Helm.

## Extended Definition

Sample custom targets provide example implementations for custom target integrations such as Terraform Infrastructure Manager, GitOps, Vertex AI, and Helm.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/custom-targets](https://docs.cloud.google.com/deploy/docs/custom-targets)
- [https://docs.cloud.google.com/deploy/docs/create-pipeline-targets](https://docs.cloud.google.com/deploy/docs/create-pipeline-targets)
- [https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.customTargetTypes](https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.customTargetTypes)

## Supporting Pages

### About custom targets \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/custom-targets](https://docs.cloud.google.com/deploy/docs/custom-targets)
- Source ID: `site-docs-reference-2`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example deploy results file The following is a sample results.json file output from a custom deploy: { "resultStatus" : "SUCCEEDED" , "artifactFiles" : [ "gs://bucket/my-pipeline/release-001/rollout-a/01234/custom-output/file1.yaml" , "gs://bucket/my-pipeline/release-001/rollout-a/01234/custom-output/file2.yaml" ], "failureMessage" : "" , "skipMessage" : "" , "metadata" : { "key1" : "val" , "key2" : "val" } } Further information about custom targets Here are some things to keep in mind when setting up and using custom target types.
- Example render results file The following is a sample results.json file output from a custom render: { "resultStatus" : "SUCCEEDED" , "manifestFile" : "gs://bucket/my-pipeline/release-001/rollout-a/01234/custom-output/manifest.yaml" , "failureMessage" : "" , "metadata" : { "key1" : "val" , "key2" : "val" } } Inputs to custom deploys For custom deploys, Cloud Deploy provides the following inputs, as environment variables: CLOUD DEPLOY PROJECT The Google Cloud project number for the project in which the custom target is created.
- Custom target examples The cloud-deploy-samples repository contains a set of sample custom target implementations.
- Each custom target consists of the following components: Tasks , that define how to render and deploy for your custom target type Your implementations of the custom render and custom deploy consume values provided by Cloud Deploy and must fulfill a set of required outputs .

### "Create your delivery pipeline and targets \_|\_ Cloud Deploy \_|\_ Google\

- URL: [https://docs.cloud.google.com/deploy/docs/create-pipeline-targets](https://docs.cloud.google.com/deploy/docs/create-pipeline-targets)
- Source ID: `site-docs-reference-required-3`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A single-file example The command in this example registers a delivery pipeline and targets that are all defined in the same file: gcloud deploy apply -- file = clouddeploy . yaml -- region = us - central1 An example using separate files For this example, there are three targets defined in three separate files, so you run four commands: gcloud deploy apply -- file = delivery - pipeline . yaml -- region = us - central1 && \ gcloud deploy apply -- file = target dev . yaml -- region = us - central1 && \ gcloud deploy apply -- file = target staging . yaml -- region = us - central1 && \ gcloud deploy apply -- file = target prod . yaml -- region = us - central1 The --region flag is required unless you've set a default (using gcloud config set deploy/region [REGION] ).
- Create the delivery pipeline and targets using Terraform You can also use the Google Cloud Terraform provider to create delivery pipeline and target resources.
- Within a delivery pipeline, all targets must reference the same runtime type (all GKE, or all Cloud Run, for example).
- The target can point to GKE , GKE attached clusters , Cloud Run , or custom targets .

### "REST Resource: projects.locations.customTargetTypes \_|\_ Cloud Deploy \_\

- URL: [https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.customTargetTypes](https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.customTargetTypes)
- Source ID: `site-api-reference-required-1`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "name" : string , "customTargetTypeId" : string , "uid" : string , "description" : string , "annotations" : { string : string , ... } , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "etag" : string , // Union field definition can be only one of the following: "customActions" : { object ( CustomTargetSkaffoldActions ) } // End of list of possible types for union field definition . } Fields name string Identifier.
- Resource: CustomTargetType JSON representation CustomTargetSkaffoldActions JSON representation SkaffoldModules JSON representation SkaffoldGitSource JSON representation SkaffoldGCSSource JSON representation SkaffoldGCBRepoSource JSON representation Methods Resource: CustomTargetType A CustomTargetType resource in the Cloud Deploy API.
- Defines the CustomTargetType renderer and deployer. definition can be only one of the following: customActions object ( CustomTargetSkaffoldActions ) Optional.
- CustomTargetSkaffoldActions CustomTargetSkaffoldActions represents the CustomTargetType configuration using Skaffold custom actions.

