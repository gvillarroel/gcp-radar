---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.934Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build triggers"
feature_slug: "cloud-build-triggers"
latest_feature_date: "2017-03-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts"
  - "https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run"
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
keywords:
  - "released"
  - "were"
  - "beta"
  - "triggers"
---

# Cloud Build triggers

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build triggers were released in beta.

## Extended Definition

Cloud Build triggers were released in beta.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts](https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts)
- [https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run](https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run)
- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)

## Supporting Pages

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- See the gcloud instructions for how to update a build trigger to show or hide build logs for GitHub or GitHub Enterprise triggers. gcloud To update a trigger: Export the trigger you would like to update: gcloud beta builds triggers export TRIGGER NAME -- destination = EXPORT PATH Where: TRIGGER NAME is the name of your trigger.
- Select Disable . gcloud To disable a trigger: Export the trigger you would like to disable: gcloud beta builds triggers export TRIGGER NAME -- destination = EXPORT PATH Where: TRIGGER NAME is the name of your trigger.
- To create a trigger if your source code is in GitHub : gcloud builds triggers create github \ -- name = TRIGGER NAME \ -- region = REGION \ -- repo - name = REPO NAME \ -- repo - owner = REPO OWNER \ -- branch - pattern = BRANCH PATTERN \ # or -- tag - pattern = TAG PATTERN -- build - config = BUILD CONFIG FILE \ -- service - account = SERVICE ACCOUNT \ -- require - approval -- include - logs - with - status Where: REGION is the region for your trigger.
- Click Create to save your build trigger. gcloud To create a trigger if your source code is in Cloud Source Repositories : gcloud builds triggers create cloud-source-repositories \ --repo= REPO NAME \ --branch-pattern= BRANCH PATTERN \ # or --tag-pattern= TAG PATTERN --build-config= BUILD CONFIG FILE \ --service-account= SERVICE ACCOUNT \ --require-approval Where: REPO NAME is the name of your repository.

### Deploying to Cloud Run using Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts](https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts)
- Source ID: `site-docs-root`
- Final score: 70
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a build trigger with the config file created in the previous step: Open the Triggers page: Go to the Triggers page Click Create Trigger .
- Continuous deployment You can automate the deployment of your software to Cloud Run by creating Cloud Build triggers.
- For more information on creating Cloud Build triggers, see Creating and managing build triggers .
- You can configure your triggers to build and deploy images whenever you update your source code.

### Deploying to Cloud Run using Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run](https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run)
- Source ID: `site-docs-root`
- Final score: 70
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a build trigger with the config file created in the previous step: Open the Triggers page: Go to the Triggers page Click Create Trigger .
- Continuous deployment You can automate the deployment of your software to Cloud Run by creating Cloud Build triggers.
- For more information on creating Cloud Build triggers, see Creating and managing build triggers .
- You can configure your triggers to build and deploy images whenever you update your source code.

