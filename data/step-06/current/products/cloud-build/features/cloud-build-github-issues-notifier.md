---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.731Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build GitHub Issues notifier"
feature_slug: "cloud-build-github-issues-notifier"
latest_feature_date: "2022-09-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github"
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise"
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise-private-network"
keywords:
  - "build"
  - "github"
  - "issues"
  - "notifier"
  - "includes"
  - "that"
  - "creates"
  - "in"
---

# Cloud Build GitHub Issues notifier

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build includes a GitHub Issues notifier that creates GitHub issues in response to build events.

## Extended Definition

Cloud Build includes a GitHub Issues notifier that creates GitHub issues in response to build events.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)
- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise)
- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise-private-network](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise-private-network)

## Supporting Pages

### Building repositories from GitHub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)
- Source ID: `site-docs-root-2`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- You can adjust status check configurations to look for your trigger name by: Disabling any Cloud Build-specific required checks on the GitHub repository Ensuring that data sharing is enabled in Cloud Build Executing a new build in Cloud Build that posts statuses to your repository Re-enabling required status checks, selecting trigger name Note: Enabling data sharing for a project is not reversible.
- Warning: Any user with read access to the repository can submit a pull request, which may execute a build that includes changes to the source code in the pull request.
- The following table compares GitHub legacy triggers, GitHub triggers, and GitHub Enterprise triggers: Feature GitHub legacy triggers GitHub triggers GitHub Enterprise triggers Execute builds on pushes to the source code Yes Yes Yes Execute builds on pull requests No Yes Yes Create trigger using Google Cloud console Yes Yes Yes Create trigger using the Cloud Build API No Yes Yes Create trigger using the Cloud Build GitHub app No Yes Yes View build status on Google Cloud console Yes Yes Yes View build status on GitHub No Yes Yes Data sharing The data sent to GitHub from Cloud Build helps you identify triggers by name and see build results on GitHub.
- To create GitHub triggers using gcloud commands, see the gcloud commands for Creating a build trigger . gcloud CLI To create GitHub triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer - connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.

### Building repositories from GitHub Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise)
- Source ID: `site-docs-root-2`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- You can adjust status check configurations to look for your trigger name by: Disabling any Cloud Build-specific required checks on the GitHub Enterprise repository Ensuring that data sharing is enabled in Cloud Build Executing a new build in Cloud Build that posts statuses to your repository Re-enabling required status checks, selecting trigger name Note: Enabling data sharing for a project is not reversible.
- Warning: Any user with read access to the repository can submit a pull request, which may execute a build that includes changes to the source code in the pull request.
- To create GitHub triggers using gcloud commands, see the gcloud commands for Creating a build trigger . gcloud CLI To create GitHub Enterprise triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer - connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.
- API To create a GitHub Enterprise trigger with the API, use the following JSON template: { "filename" : "cloudbuild.yaml" , "name" : " TRIGGER NAME " , "description" : " TRIGGER DESCRIPTION " , "serviceAccount" : " SERVICE ACCOUNT " , "github" : { "owner" : " OWNER " , "name" : " REPO NAME " , "push" : { "branch" : ". " }, "enterprise config resource name" : "projects/ PROJECT NUMBER /githubEnterpriseConfigs/ CONNECTION ID " }, "include build logs" : i n clude - build - logs - value } Where: TRIGGER NAME is a name for the trigger.

### "Build repositories from GitHub Enterprise in a private network \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise-private-network](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise-private-network)
- Source ID: `site-docs-root-2`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Build repositories from GitHub Enterprise in a private network Complete the following steps to connect your GitHub Enterprise instance to Cloud Build from a private network: Grant Service Directory access to the Cloud Build service agent: export PROJECT NUMBER = $( gcloud projects describe PROJECT ID --format = "value(projectNumber)" ) export CLOUD BUILD SERVICE AGENT = "service- $PROJECT NUMBER @gcp-sa-cloudbuild.iam.gserviceaccount.com" gcloud projects add-iam-policy-binding PROJECT ID CONTAINING SERVICE DIRECTORY \ --member = "serviceAccount: $CLOUD BUILD SERVICE AGENT " \ --role = "roles/servicedirectory.viewer" Replace the following: PROJECT ID is your Cloud Build project ID.
- This page explains how you can use GitHub Enterprise triggers to invoke builds in response to commits or pull requests from a GitHub Enterprise instance and explains how you can build repositories from GitHub Enterprise if your instance is hosted in a private network.
- Home Documentation Application development Cloud Build Guides Send feedback Build repositories from GitHub Enterprise in a private network Stay organized with collections Save and categorize content based on your preferences.
- Create a GitHub Enterprise trigger to build repositories hosted on your GitHub Enterprise instance.

