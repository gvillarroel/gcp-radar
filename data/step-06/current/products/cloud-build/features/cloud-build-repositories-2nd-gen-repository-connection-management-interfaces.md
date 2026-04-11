---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.719Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build repositories 2nd gen repository connection management interfaces"
feature_slug: "cloud-build-repositories-2nd-gen-repository-connection-management-interfaces"
latest_feature_date: "2023-01-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github"
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise"
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/connect-repo-github-enterprise"
keywords:
  - "build"
  - "repositories"
  - "2nd"
  - "gen"
  - "repository"
  - "connection"
  - "management"
  - "interfaces"
---

# Cloud Build repositories 2nd gen repository connection management interfaces

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build repositories (2nd gen) now support creating and managing repository connections via Cloud Console, gcloud, and the Cloud Build API.

## Extended Definition

Cloud Build repositories (2nd gen) now support creating and managing repository connections via Cloud Console, gcloud, and the Cloud Build API.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)
- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise)
- [https://docs.cloud.google.com/build/docs/automating-builds/github/connect-repo-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/connect-repo-github-enterprise)

## Supporting Pages

### Building repositories from GitHub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)
- Source ID: `site-docs-root-2`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- 1st gen 2nd gen Developer Connect Cloud Build lets you create triggers to build from repositories hosted on GitHub .
- To create GitHub triggers using gcloud commands, see the gcloud commands for Creating a build trigger . gcloud CLI To create GitHub triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer - connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.
- GitHub legacy triggers : When you create a GitHub legacy trigger, Cloud Build mirrors your GitHub repository in Cloud Source Repositories and uses the mirrored repository for all its operations.
- You can adjust status check configurations to look for your trigger name by: Disabling any Cloud Build-specific required checks on the GitHub repository Ensuring that data sharing is enabled in Cloud Build Executing a new build in Cloud Build that posts statuses to your repository Re-enabling required status checks, selecting trigger name Note: Enabling data sharing for a project is not reversible.

### Building repositories from GitHub Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise)
- Source ID: `site-docs-root-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- 1st gen 2nd gen Developer Connect Cloud Build lets you create triggers to build from repositories hosted on GitHub Enterprise .
- To create GitHub triggers using gcloud commands, see the gcloud commands for Creating a build trigger . gcloud CLI To create GitHub Enterprise triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer - connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.
- API To create a GitHub Enterprise trigger with the API, use the following JSON template: { "filename" : "cloudbuild.yaml" , "name" : " TRIGGER NAME " , "description" : " TRIGGER DESCRIPTION " , "serviceAccount" : " SERVICE ACCOUNT " , "github" : { "owner" : " OWNER " , "name" : " REPO NAME " , "push" : { "branch" : ". " }, "enterprise config resource name" : "projects/ PROJECT NUMBER /githubEnterpriseConfigs/ CONNECTION ID " }, "include build logs" : i n clude - build - logs - value } Where: TRIGGER NAME is a name for the trigger.
- You can adjust status check configurations to look for your trigger name by: Disabling any Cloud Build-specific required checks on the GitHub Enterprise repository Ensuring that data sharing is enabled in Cloud Build Executing a new build in Cloud Build that posts statuses to your repository Re-enabling required status checks, selecting trigger name Note: Enabling data sharing for a project is not reversible.

### "Connect to a GitHub Enterprise repository \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/connect-repo-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/connect-repo-github-enterprise)
- Source ID: `site-docs-root-2`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You have now successfully linked your GitHub Enterprise repository to your connection. gcloud To add a GitHub Enterprise repository to your connection, enter the following command: gcloud builds repositories create REPO NAME \ -- remote - uri = REPO URI \ -- connection = CONNECTION NAME -- region = REGION Where: REPO NAME is the name of your repository.
- Generated : Select this option for Cloud Build to automatically generated repository names on your behalf for selected repositories.
- 1st gen 2nd gen This page explains how to connect a GitHub Enterprise repository to Cloud Build.
- Terraform To add a GitHub Enterprise repository to your connection, add the following code snippet to your Terraform configuration: resource "google cloudbuildv2 repository" "my-repository" { project = " PROJECT ID " name = " REPO NAME " location = : REGION " parent connection = google cloudbuildv2 connection.my-connection.name remote uri = " REMOTE URI ' } Where: PROJECT ID is your Google Cloud project ID.

