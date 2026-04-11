---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.695Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build repositories (1st generation) Bitbucket trigger support"
feature_slug: "cloud-build-repositories-1st-generation-bitbucket-trigger-support"
latest_feature_date: "2023-09-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network"
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud"
keywords:
  - "build"
  - "repositories"
  - "1st"
  - "generation"
  - "bitbucket"
  - "trigger"
  - "now"
  - "manual"
---

# Cloud Build repositories (1st generation) Bitbucket trigger support

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build repositories (1st generation) now support manual, webhook, and Pub/Sub triggers for Bitbucket Server and Bitbucket Data Center repos.

## Extended Definition

Cloud Build repositories (1st generation) now support manual, webhook, and Pub/Sub triggers for Bitbucket Server and Bitbucket Data Center repos.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud)

## Supporting Pages

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- This page explains how to connect to source repositories such as GitHub and Bitbucket, and create build triggers to build the code in the repositories.
- Click Create to save your build trigger. gcloud To create a trigger if your source code is in Cloud Source Repositories : gcloud builds triggers create cloud-source-repositories \ --repo= REPO NAME \ --branch-pattern= BRANCH PATTERN \ # or --tag-pattern= TAG PATTERN --build-config= BUILD CONFIG FILE \ --service-account= SERVICE ACCOUNT \ --require-approval Where: REPO NAME is the name of your repository.
- Your file will look similar to the following: createTime: '2022-05-26T21:56:11.830784153Z' filename: cloudbuild.yaml github: name: cloud-build-example owner: main push: branch: master id: 86201062-3b14-4b6a-a2fb-4ee924e8b1dd remove field name and value to not show build logs includeBuildLogs: INCLUDE BUILD LOGS WITH STATUS name: trigger-001 Manually edit your file to update your trigger.
- If you select GitHub (mirrored) or Bitbucket (mirrored) as your source repository, then Cloud Build mirrors your repository in Cloud Source Repositories and uses the mirrored repository for all its operations.

### "Build repositories from Bitbucket Data Center in a private network \_|\_\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network)
- Source ID: `site-docs-root-2`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- 1st gen 2nd gen Cloud Build enables you to create triggers to build from repositories hosted on Bitbucket Data Center , allowing you to execute builds in response to events such as commit pushes or pull requests associated with your Bitbucket Data Center repository.
- Your Bitbucket Data Center trigger will now automatically invoke builds on your Bitbucket Data Center instance based on your configuration.
- Create a Bitbucket Data Center trigger to build repositories hosted on a Bitbucket Data Center instance.
- Build repositories from Bitbucket Data Center in a private network If your Bitbucket Data Center instance is hosted in a private network and not reachable over a public internet connection, you must create a private connection between your VPC network and the service producer network .

### Build repositories from Bitbucket Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud)
- Source ID: `site-docs-root-2`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Terraform For sample Terraform code about creating a build trigger and connecting it to your Bitbucket Cloud installation using Developer Connect, see the following topics in the Terraform documentation: Create a Developer Connect push trigger Create a Developer Connect pull trigger Data sharing The data sent to Bitbucket Cloud from Cloud Build helps you identify triggers by name and see build results on your Bitbucket Cloud repositories.
- 2nd gen Developer Connect Cloud Build lets you create triggers to build from repositories hosted on Bitbucket Cloud .
- Click Create to create your Bitbucket Cloud trigger. gcloud CLI To create Bitbucket Cloud triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.
- API To create a Bitbucket Cloud trigger with the API, use the following JSON template: { "filename" : "cloudbuild.yaml" , "name" : "curl-trigger" , "description" : "curl trigger" , "bitbucket server trigger config" : { "repo slug" : " REPO SLUG " , "project key" : " PROJECT KEY " , "push" : { "branch" : " BRANCH NAME " # "tag" : " TAG NAME " }, "bitbucket server config resource" : "projects/ PROJECT NUMBER /locations/ REGION /bitbucketServerConfigs/ ID " "comment control" : " COMMENT SETTING " } } Where: REPO SLUG is the slug of your Bitbucket Server repository.

