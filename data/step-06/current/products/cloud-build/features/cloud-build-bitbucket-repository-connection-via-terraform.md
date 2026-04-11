---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.689Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build Bitbucket repository connection via Terraform"
feature_slug: "cloud-build-bitbucket-repository-connection-via-terraform"
latest_feature_date: "2024-07-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud"
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center"
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server"
keywords:
  - "build"
  - "bitbucket"
  - "repository"
  - "connection"
  - "via"
  - "terraform"
  - "users"
  - "can"
---

# Cloud Build Bitbucket repository connection via Terraform

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build users can connect to Bitbucket Cloud and Bitbucket Data Center hosts and add repositories using the Google Cloud Terraform provider.

## Extended Definition

Cloud Build users can connect to Bitbucket Cloud and Bitbucket Data Center hosts and add repositories using the Google Cloud Terraform provider.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server)

## Supporting Pages

### Build repositories from Bitbucket Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud)
- Source ID: `site-docs-root-2`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Click Create to create your Bitbucket Cloud trigger. gcloud CLI To create Bitbucket Cloud triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.
- You can execute builds in response to events such as commit pushes or merge requests associated with your Bitbucket Cloud repository.
- API To create a Bitbucket Cloud trigger with the API, use the following JSON template: { "filename" : "cloudbuild.yaml" , "name" : "curl-trigger" , "description" : "curl trigger" , "bitbucket server trigger config" : { "repo slug" : " REPO SLUG " , "project key" : " PROJECT KEY " , "push" : { "branch" : " BRANCH NAME " # "tag" : " TAG NAME " }, "bitbucket server config resource" : "projects/ PROJECT NUMBER /locations/ REGION /bitbucketServerConfigs/ ID " "comment control" : " COMMENT SETTING " } } Where: REPO SLUG is the slug of your Bitbucket Server repository.
- Terraform For sample Terraform code about creating a build trigger and connecting it to your Bitbucket Cloud installation using Developer Connect, see the following topics in the Terraform documentation: Create a Developer Connect push trigger Create a Developer Connect pull trigger Data sharing The data sent to Bitbucket Cloud from Cloud Build helps you identify triggers by name and see build results on your Bitbucket Cloud repositories.

### Build repositories from Bitbucket Data Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center)
- Source ID: `site-docs-root-2`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Click Create to create your Bitbucket Cloud trigger. gcloud CLI To create Bitbucket Data Center triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.
- You can execute builds in response to events such as commit pushes or merge requests associated with your Bitbucket Data Center repository.
- API To create a Bitbucket Data Center trigger with the API, use the following JSON template: { "filename" : "cloudbuild.yaml" , "name" : "curl-trigger" , "description" : "curl trigger" , "bitbucket server trigger config" : { "repo slug" : " REPO SLUG " , "project key" : " PROJECT KEY " , "push" : { "branch" : " BRANCH NAME " # "tag" : " TAG NAME " }, "bitbucket server config resource" : "projects/ PROJECT NUMBER /locations/ REGION /bitbucketServerConfigs/ ID " "comment control" : " COMMENT SETTING " } } Where: REPO SLUG is the slug of your Bitbucket Server repository.
- Terraform For sample Terraform code about creating a build trigger and connecting it to your Bitbucket Data Center installation using Developer Connect, see the following topics in the Terraform documentation: Create a Developer Connect push trigger Create a Developer Connect pull trigger Data sharing The data sent to Bitbucket Data Center from Cloud Build helps you identify triggers by name and see build results on your Bitbucket Data Center repositories.

### Build repositories from Bitbucket Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server)
- Source ID: `site-docs-root-2`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Click Create to create your Bitbucket Cloud trigger. gcloud CLI To create Bitbucket Server triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.
- You can execute builds in response to events such as commit pushes or merge requests associated with your Bitbucket Server repository.
- API To create a Bitbucket Server trigger with the API, use the following JSON template: { "filename" : "cloudbuild.yaml" , "name" : "curl-trigger" , "description" : "curl trigger" , "bitbucket server trigger config" : { "repo slug" : " REPO SLUG " , "project key" : " PROJECT KEY " , "push" : { "branch" : " BRANCH NAME " # "tag" : " TAG NAME " }, "bitbucket server config resource" : "projects/ PROJECT NUMBER /locations/ REGION /bitbucketServerConfigs/ ID " "comment control" : " COMMENT SETTING " } } Where: REPO SLUG is the slug of your Bitbucket Server repository.
- Terraform For sample Terraform code about creating a build trigger and connecting it to your Bitbucket Server installation using Developer Connect, see the following topics in the Terraform documentation: Create a Developer Connect push trigger Create a Developer Connect pull trigger Data sharing The data sent to Bitbucket Server from Cloud Build helps you identify triggers by name and see build results on Bitbucket Server.

