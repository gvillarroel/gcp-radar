---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.880Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build GitHub Enterprise triggers"
feature_slug: "cloud-build-github-enterprise-triggers"
latest_feature_date: "2021-08-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise"
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise-private-network"
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github"
keywords:
  - "create"
  - "enterprise"
  - "hosted"
  - "repositories"
  - "triggers"
  - "github"
---

# Cloud Build GitHub Enterprise triggers

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build can create triggers for repositories hosted in GitHub Enterprise, including on-premises instances.

## Extended Definition

Cloud Build can create triggers for repositories hosted in GitHub Enterprise, including on-premises instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise)
- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise-private-network](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise-private-network)
- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)

## Supporting Pages

### Building repositories from GitHub Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise)
- Source ID: `site-docs-root-2`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 1st gen 2nd gen Developer Connect Cloud Build lets you create triggers to build from repositories hosted on GitHub Enterprise .
- To create GitHub triggers using gcloud commands, see the gcloud commands for Creating a build trigger . gcloud CLI To create GitHub Enterprise triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer - connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.
- Terraform For sample Terraform code about creating a build trigger and connecting it to your GitHub Enterprise installation using Developer Connect, see the following topics in the Terraform documentation: Create a Developer Connect push trigger Create a Developer Connect pull trigger Data sharing The data sent to GitHub Enterprise from Cloud Build helps you identify triggers by name and see build results on GitHub Enterprise.
- If you want to use GitHub Enterprise triggers in a private network, see Building repositories from GitHub Enterprise in a private network for further instructions.

### "Build repositories from GitHub Enterprise in a private network \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise-private-network](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise-private-network)
- Source ID: `site-docs-root-2`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page explains how you can use GitHub Enterprise triggers to invoke builds in response to commits or pull requests from a GitHub Enterprise instance and explains how you can build repositories from GitHub Enterprise if your instance is hosted in a private network.
- Create a GitHub Enterprise trigger to build repositories hosted on your GitHub Enterprise instance.
- 1st gen 2nd gen Cloud Build enables you to create triggers on a GitHub Enterprise instance.
- Build repositories from GitHub Enterprise in a private network Complete the following steps to connect your GitHub Enterprise instance to Cloud Build from a private network: Grant Service Directory access to the Cloud Build service agent: export PROJECT NUMBER = $( gcloud projects describe PROJECT ID --format = "value(projectNumber)" ) export CLOUD BUILD SERVICE AGENT = "service- $PROJECT NUMBER @gcp-sa-cloudbuild.iam.gserviceaccount.com" gcloud projects add-iam-policy-binding PROJECT ID CONTAINING SERVICE DIRECTORY \ --member = "serviceAccount: $CLOUD BUILD SERVICE AGENT " \ --role = "roles/servicedirectory.viewer" Replace the following: PROJECT ID is your Cloud Build project ID.

### Building repositories from GitHub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)
- Source ID: `site-docs-root-2`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 1st gen 2nd gen Developer Connect Cloud Build lets you create triggers to build from repositories hosted on GitHub .
- The following table compares GitHub legacy triggers, GitHub triggers, and GitHub Enterprise triggers: Feature GitHub legacy triggers GitHub triggers GitHub Enterprise triggers Execute builds on pushes to the source code Yes Yes Yes Execute builds on pull requests No Yes Yes Create trigger using Google Cloud console Yes Yes Yes Create trigger using the Cloud Build API No Yes Yes Create trigger using the Cloud Build GitHub app No Yes Yes View build status on Google Cloud console Yes Yes Yes View build status on GitHub No Yes Yes Data sharing The data sent to GitHub from Cloud Build helps you identify triggers by name and see build results on GitHub.
- GitHub legacy triggers : When you create a GitHub legacy trigger, Cloud Build mirrors your GitHub repository in Cloud Source Repositories and uses the mirrored repository for all its operations.
- To create GitHub triggers using gcloud commands, see the gcloud commands for Creating a build trigger . gcloud CLI To create GitHub triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer - connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.

