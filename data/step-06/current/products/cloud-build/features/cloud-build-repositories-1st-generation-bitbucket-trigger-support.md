---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.826Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build repositories (1st generation) Bitbucket trigger support"
feature_slug: "cloud-build-repositories-1st-generation-bitbucket-trigger-support"
latest_feature_date: "2023-09-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud"
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center"
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server"
keywords:
  - "bitbucket"
  - "generation"
  - "repositories"
  - "manual"
  - "trigger"
---

# Cloud Build repositories (1st generation) Bitbucket trigger support

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build repositories (1st generation) now support manual, webhook, and Pub/Sub triggers for Bitbucket Server and Bitbucket Data Center repos.

## Extended Definition

Cloud Build repositories (1st generation) now support manual, webhook, and Pub/Sub triggers for Bitbucket Server and Bitbucket Data Center repos.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server)

## Supporting Pages

### Build repositories from Bitbucket Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud)
- Source ID: `site-docs-root-2`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Terraform For sample Terraform code about creating a build trigger and connecting it to your Bitbucket Cloud installation using Developer Connect, see the following topics in the Terraform documentation: Create a Developer Connect push trigger Create a Developer Connect pull trigger Data sharing The data sent to Bitbucket Cloud from Cloud Build helps you identify triggers by name and see build results on your Bitbucket Cloud repositories.
- 2nd gen Developer Connect Cloud Build lets you create triggers to build from repositories hosted on Bitbucket Cloud .
- Click Create to create your Bitbucket Cloud trigger. gcloud CLI To create Bitbucket Cloud triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.
- API To create a Bitbucket Cloud trigger with the API, use the following JSON template: { "filename" : "cloudbuild.yaml" , "name" : "curl-trigger" , "description" : "curl trigger" , "bitbucket server trigger config" : { "repo slug" : " REPO SLUG " , "project key" : " PROJECT KEY " , "push" : { "branch" : " BRANCH NAME " # "tag" : " TAG NAME " }, "bitbucket server config resource" : "projects/ PROJECT NUMBER /locations/ REGION /bitbucketServerConfigs/ ID " "comment control" : " COMMENT SETTING " } } Where: REPO SLUG is the slug of your Bitbucket Server repository.

### Build repositories from Bitbucket Data Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center)
- Source ID: `site-docs-root-2`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Terraform For sample Terraform code about creating a build trigger and connecting it to your Bitbucket Data Center installation using Developer Connect, see the following topics in the Terraform documentation: Create a Developer Connect push trigger Create a Developer Connect pull trigger Data sharing The data sent to Bitbucket Data Center from Cloud Build helps you identify triggers by name and see build results on your Bitbucket Data Center repositories.
- Create a Bitbucket Data Center trigger This section explains how you can connect your Bitbucket Data Center repositories to Cloud Build and create a trigger to automatically invoke builds on your connected repositories.
- If you want to use Bitbucket Data Center triggers in a private network, see Building repositories from Bitbucket Data Center in a private network for further instructions.
- 1st gen 2nd gen Developer Connect Cloud Build lets you create triggers to build from repositories hosted on Bitbucket Data Center .

### Build repositories from Bitbucket Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server)
- Source ID: `site-docs-root-2`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a Bitbucket Server trigger This sections explains how you can connect your Bitbucket Server repositories to Cloud Build and create a trigger to automatically invoke builds on your connected repositories.
- If you want to use Bitbucket Server triggers in a private network, see Building repositories from Bitbucket Server in a private network for further instructions.
- 1st gen 2nd gen Developer Connect Cloud Build lets you create triggers to build from repositories hosted on Bitbucket Server .
- Click Create to create your Bitbucket Cloud trigger. gcloud CLI To create Bitbucket Server triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.

