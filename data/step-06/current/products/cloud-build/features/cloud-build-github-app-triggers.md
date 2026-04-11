---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.768Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build GitHub App triggers"
feature_slug: "cloud-build-github-app-triggers"
latest_feature_date: "2020-02-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github"
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise"
keywords:
  - "build"
  - "github"
  - "app"
  - "triggers"
  - "became"
  - "generally"
  - "available"
  - "moved"
---

# Cloud Build GitHub App triggers

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build GitHub App triggers became generally available; Cloud Build GitHub App triggers moved to beta release status.

## Extended Definition

Cloud Build GitHub App triggers became generally available; Cloud Build GitHub App triggers moved to beta release status.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)
- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise)

## Supporting Pages

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- To create a trigger if your source code is in GitHub : gcloud builds triggers create github \ -- name = TRIGGER NAME \ -- region = REGION \ -- repo - name = REPO NAME \ -- repo - owner = REPO OWNER \ -- branch - pattern = BRANCH PATTERN \ # or -- tag - pattern = TAG PATTERN -- build - config = BUILD CONFIG FILE \ -- service - account = SERVICE ACCOUNT \ -- require - approval -- include - logs - with - status Where: REGION is the region for your trigger.
- Click Create to save your build trigger. gcloud To create a trigger if your source code is in Cloud Source Repositories : gcloud builds triggers create cloud-source-repositories \ --repo= REPO NAME \ --branch-pattern= BRANCH PATTERN \ # or --tag-pattern= TAG PATTERN --build-config= BUILD CONFIG FILE \ --service-account= SERVICE ACCOUNT \ --require-approval Where: REPO NAME is the name of your repository.
- See the gcloud instructions for how to update a build trigger to show or hide build logs for GitHub or GitHub Enterprise triggers. gcloud To update a trigger: Export the trigger you would like to update: gcloud beta builds triggers export TRIGGER NAME -- destination = EXPORT PATH Where: TRIGGER NAME is the name of your trigger.
- If you're using GitHub pull request triggers, any user with read access to the repository can submit a pull request, which may execute a build that includes changes to the code in the pull request.

### Building repositories from GitHub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)
- Source ID: `site-docs-root-2`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- The following table compares GitHub legacy triggers, GitHub triggers, and GitHub Enterprise triggers: Feature GitHub legacy triggers GitHub triggers GitHub Enterprise triggers Execute builds on pushes to the source code Yes Yes Yes Execute builds on pull requests No Yes Yes Create trigger using Google Cloud console Yes Yes Yes Create trigger using the Cloud Build API No Yes Yes Create trigger using the Cloud Build GitHub app No Yes Yes View build status on Google Cloud console Yes Yes Yes View build status on GitHub No Yes Yes Data sharing The data sent to GitHub from Cloud Build helps you identify triggers by name and see build results on GitHub.
- GitHub triggers : This type of trigger uses the Cloud Build GitHub app to configure and authenticate to GitHub.
- To create GitHub triggers using gcloud commands, see the gcloud commands for Creating a build trigger . gcloud CLI To create GitHub triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer - connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.
- Enter the following curl command in your terminal: curl - X POST - H "Authorization: Bearer " $ ( gcloud auth print - access - token ) - H "Content-Type: application/json; charset=utf-8" - H "x-goog-user-project: PROJECT NUMBER " https : // cloudbuild . googleapis . com / v1 / projects / PROJECT ID / triggers - d @trigger . json Where: PROJECT NUMBER is your Google Cloud project number.

### Building repositories from GitHub Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise)
- Source ID: `site-docs-root-2`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- To create GitHub triggers using gcloud commands, see the gcloud commands for Creating a build trigger . gcloud CLI To create GitHub Enterprise triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer - connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.
- Terraform For sample Terraform code about creating a build trigger and connecting it to your GitHub Enterprise installation using Developer Connect, see the following topics in the Terraform documentation: Create a Developer Connect push trigger Create a Developer Connect pull trigger Data sharing The data sent to GitHub Enterprise from Cloud Build helps you identify triggers by name and see build results on GitHub Enterprise.
- Enter the following curl command in your terminal: curl - X POST - H "Authorization: Bearer " $ ( gcloud auth print - access - token ) - H "Content-Type: application/json; charset=utf-8" - H "x-goog-user-project: PROJECT NUMBER " https : // cloudbuild . googleapis . com / v1 / projects / PROJECT ID / triggers - d @trigger . json Where: PROJECT NUMBER is your Google Cloud project number.
- Home Documentation Application development Cloud Build Guides Send feedback Building repositories from GitHub Enterprise Stay organized with collections Save and categorize content based on your preferences.

