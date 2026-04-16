---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.885Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Functions build visibility in Cloud Build History"
feature_slug: "cloud-functions-build-visibility-in-cloud-build-history"
latest_feature_date: "2021-01-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/automate-builds"
  - "https://docs.cloud.google.com/docs/buildpacks/service-specific-configs"
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
keywords:
  - "regionalized"
  - "functions"
  - "visible"
  - "visibility"
  - "history"
  - "builds"
---

# Cloud Functions build visibility in Cloud Build History

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Regionalized Cloud Functions builds are now visible in the Cloud Build History UI.

## Extended Definition

Regionalized Cloud Functions builds are now visible in the Cloud Build History UI.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automate-builds](https://docs.cloud.google.com/build/docs/automate-builds)
- [https://docs.cloud.google.com/docs/buildpacks/service-specific-configs](https://docs.cloud.google.com/docs/buildpacks/service-specific-configs)
- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)

## Supporting Pages

### Quickstart: Automate builds by using Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automate-builds](https://docs.cloud.google.com/build/docs/automate-builds)
- Source ID: `site-docs-root`
- Final score: 75
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to automate builds by using Cloud Build, ask your administrator to grant you the following IAM roles on the Cloud Build service account: Cloud Build Editor ( roles/cloudbuild.builds.editor ) Storage Object User ( roles/storage.objectUser ) Storage Bucket Viewer ( roles/storage.bucketViewer ) Cloud Build Connection Admin ( roles/cloudbuild.connectionAdmin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Automate builds by using Cloud Build This page explains how to use Cloud Build to automate builds.
- You will see the Build history page: In the Build column, click the name of a build.
- In the Google Cloud console navigation menu, click Cloud Build > History .

### "Configure Cloud Run and Cloud Run functions services \_|\_ Buildpacks \_\

- URL: [https://docs.cloud.google.com/docs/buildpacks/service-specific-configs](https://docs.cloud.google.com/docs/buildpacks/service-specific-configs)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For configuration details about a specific language, see: Go Java Node.js Python Ruby PHP Cloud Run and Cloud Run functions environment variables The following configurations support building services for both applications and functions.
- Supported values: true , True , or 1 Additional Cloud Run functions environment variables The following configurations are only available for source code built as functions that use Functions Framework and Cloud Run functions.
- Home Documentation Application hosting Buildpacks Guides Send feedback Configure Cloud Run and Cloud Run functions services Stay organized with collections Save and categorize content based on your preferences.
- Supported values: true , True , 1 GOOGLE CLEAR SOURCE For functions and Go or Java applications: Clears source after the application is built.

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- This is done for efficiency, so that builds don't have to wait to fetch the whole repository and history just to build a single commit.
- To create a trigger if your source code is in GitHub : gcloud builds triggers create github \ -- name = TRIGGER NAME \ -- region = REGION \ -- repo - name = REPO NAME \ -- repo - owner = REPO OWNER \ -- branch - pattern = BRANCH PATTERN \ # or -- tag - pattern = TAG PATTERN -- build - config = BUILD CONFIG FILE \ -- service - account = SERVICE ACCOUNT \ -- require - approval -- include - logs - with - status Where: REGION is the region for your trigger.
- Click Create to save your build trigger. gcloud To create a trigger if your source code is in Cloud Source Repositories : gcloud builds triggers create cloud-source-repositories \ --repo= REPO NAME \ --branch-pattern= BRANCH PATTERN \ # or --tag-pattern= TAG PATTERN --build-config= BUILD CONFIG FILE \ --service-account= SERVICE ACCOUNT \ --require-approval Where: REPO NAME is the name of your repository.
- See the gcloud instructions for how to update a build trigger to show or hide build logs for GitHub or GitHub Enterprise triggers. gcloud To update a trigger: Export the trigger you would like to update: gcloud beta builds triggers export TRIGGER NAME -- destination = EXPORT PATH Where: TRIGGER NAME is the name of your trigger.

