---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.914Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build GitHub App repository-to-project mapping"
feature_slug: "cloud-build-github-app-repository-to-project-mapping"
latest_feature_date: "2019-02-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github"
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise"
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/connect-repo-github-enterprise"
keywords:
  - "mapping"
  - "project"
  - "repository"
  - "repositories"
  - "github"
  - "added"
---

# Cloud Build GitHub App repository-to-project mapping

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

The Cloud Build GitHub App added support for mapping repositories to Google Cloud projects.

## Extended Definition

The Cloud Build GitHub App added support for mapping repositories to Google Cloud projects.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)
- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise)
- [https://docs.cloud.google.com/build/docs/automating-builds/github/connect-repo-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/connect-repo-github-enterprise)

## Supporting Pages

### Building repositories from GitHub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)
- Source ID: `site-docs-root-2`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create GitHub triggers using gcloud commands, see the gcloud commands for Creating a build trigger . gcloud CLI To create GitHub triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer - connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.
- You can adjust status check configurations to look for your trigger name by: Disabling any Cloud Build-specific required checks on the GitHub repository Ensuring that data sharing is enabled in Cloud Build Executing a new build in Cloud Build that posts statuses to your repository Re-enabling required status checks, selecting trigger name Note: Enabling data sharing for a project is not reversible.
- GitHub legacy triggers : When you create a GitHub legacy trigger, Cloud Build mirrors your GitHub repository in Cloud Source Repositories and uses the mirrored repository for all its operations.
- Home Documentation Application development Cloud Build Guides Send feedback Building repositories from GitHub Stay organized with collections Save and categorize content based on your preferences.

### Building repositories from GitHub Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise)
- Source ID: `site-docs-root-2`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create GitHub triggers using gcloud commands, see the gcloud commands for Creating a build trigger . gcloud CLI To create GitHub Enterprise triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer - connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.
- You can adjust status check configurations to look for your trigger name by: Disabling any Cloud Build-specific required checks on the GitHub Enterprise repository Ensuring that data sharing is enabled in Cloud Build Executing a new build in Cloud Build that posts statuses to your repository Re-enabling required status checks, selecting trigger name Note: Enabling data sharing for a project is not reversible.
- API To create a GitHub Enterprise trigger with the API, use the following JSON template: { "filename" : "cloudbuild.yaml" , "name" : " TRIGGER NAME " , "description" : " TRIGGER DESCRIPTION " , "serviceAccount" : " SERVICE ACCOUNT " , "github" : { "owner" : " OWNER " , "name" : " REPO NAME " , "push" : { "branch" : ". " }, "enterprise config resource name" : "projects/ PROJECT NUMBER /githubEnterpriseConfigs/ CONNECTION ID " }, "include build logs" : i n clude - build - logs - value } Where: TRIGGER NAME is a name for the trigger.
- Home Documentation Application development Cloud Build Guides Send feedback Building repositories from GitHub Enterprise Stay organized with collections Save and categorize content based on your preferences.

### "Connect to a GitHub Enterprise repository \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/connect-repo-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/connect-repo-github-enterprise)
- Source ID: `site-docs-root-2`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Terraform To add a GitHub Enterprise repository to your connection, add the following code snippet to your Terraform configuration: resource "google cloudbuildv2 repository" "my-repository" { project = " PROJECT ID " name = " REPO NAME " location = : REGION " parent connection = google cloudbuildv2 connection.my-connection.name remote uri = " REMOTE URI ' } Where: PROJECT ID is your Google Cloud project ID.
- You have now successfully linked your GitHub Enterprise repository to your connection. gcloud To add a GitHub Enterprise repository to your connection, enter the following command: gcloud builds repositories create REPO NAME \ -- remote - uri = REPO URI \ -- connection = CONNECTION NAME -- region = REGION Where: REPO NAME is the name of your repository.
- Connect to a GitHub Enterprise repository Console To connect a GitHub Enterprise repository to a host connection, complete the following steps: Open the Repositories page in the Google Cloud console.
- Home Documentation Application development Cloud Build Guides Send feedback Connect to a GitHub Enterprise repository Stay organized with collections Save and categorize content based on your preferences.

