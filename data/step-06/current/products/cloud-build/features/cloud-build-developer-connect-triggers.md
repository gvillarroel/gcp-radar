---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.813Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build Developer Connect triggers"
feature_slug: "cloud-build-developer-connect-triggers"
latest_feature_date: "2025-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud"
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center"
keywords:
  - "offers"
  - "developer"
  - "connect"
  - "generally"
  - "available"
  - "triggers"
---

# Cloud Build Developer Connect triggers

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build now offers generally available build triggers that run from repositories connected via Developer Connect across Console, gcloud, API, and Terraform; Cloud Build now supports creating build triggers for repositories connected through Developer Connect.

## Extended Definition

Cloud Build now offers generally available build triggers that run from repositories connected via Developer Connect across Console, gcloud, API, and Terraform; Cloud Build now supports creating build triggers for repositories connected through Developer Connect.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center)

## Supporting Pages

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- This page explains how to connect to source repositories such as GitHub and Bitbucket, and create build triggers to build the code in the repositories.
- You can directly create triggers for your repositories in Cloud Source Repositories without manually connecting to them.
- Complete the following steps to connect to GitHub or Bitbucket: Open the Triggers page in the Google Cloud console.
- Admin permissions are not required to create triggers in a repository that is already connected to Cloud Build.

### Build repositories from Bitbucket Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud)
- Source ID: `site-docs-root-2`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Create to create your Bitbucket Cloud trigger. gcloud CLI To create Bitbucket Cloud triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.
- Terraform For sample Terraform code about creating a build trigger and connecting it to your Bitbucket Cloud installation using Developer Connect, see the following topics in the Terraform documentation: Create a Developer Connect push trigger Create a Developer Connect pull trigger Data sharing The data sent to Bitbucket Cloud from Cloud Build helps you identify triggers by name and see build results on your Bitbucket Cloud repositories.
- 2nd gen Developer Connect Cloud Build lets you create triggers to build from repositories hosted on Bitbucket Cloud .
- Repository generation : Select Developer Connect as your source.

### Build repositories from Bitbucket Data Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center)
- Source ID: `site-docs-root-2`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Create to create your Bitbucket Cloud trigger. gcloud CLI To create Bitbucket Data Center triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.
- Terraform For sample Terraform code about creating a build trigger and connecting it to your Bitbucket Data Center installation using Developer Connect, see the following topics in the Terraform documentation: Create a Developer Connect push trigger Create a Developer Connect pull trigger Data sharing The data sent to Bitbucket Data Center from Cloud Build helps you identify triggers by name and see build results on your Bitbucket Data Center repositories.
- 1st gen 2nd gen Developer Connect Cloud Build lets you create triggers to build from repositories hosted on Bitbucket Data Center .
- Repository generation : Select Developer Connect as your source.

