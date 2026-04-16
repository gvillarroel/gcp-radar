---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.883Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build webhook triggers"
feature_slug: "cloud-build-webhook-triggers"
latest_feature_date: "2021-04-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/automate-builds-webhook-events"
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server-private-network"
keywords:
  - "enable"
  - "automated"
  - "hosted"
  - "repositories"
  - "webhook"
  - "triggers"
  - "builds"
---

# Cloud Build webhook triggers

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build webhook triggers enable automated builds from repositories hosted on GitLab, Bitbucket Cloud, and Bitbucket Server; Cloud Build now supports triggers that run builds from webhook events, including events from external source code management systems.

## Extended Definition

Cloud Build webhook triggers enable automated builds from repositories hosted on GitLab, Bitbucket Cloud, and Bitbucket Server; Cloud Build now supports triggers that run builds from webhook events, including events from external source code management systems.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events)
- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server-private-network](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server-private-network)

## Supporting Pages

### "Automate builds in response to webhook events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events)
- Source ID: `site-docs-root-2`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Create to create your build trigger. gcloud To create a webhook trigger: gcloud builds triggers create webhook \ -- name = TRIGGER NAME \ -- repo = PATH TO REPO \ -- repo - type = REPO TYPE \ -- secret = PATH TO SECRET \ -- substitutions = SUB ONE = '$ ( body . message . test ) ' , SUB TWO = '$ ( body . message . output ) ' \ -- subscription - filter = ' SUB ONE == "prod" ' \ -- inline - config = PATH TO INLINE BUILD CONFIG \ -- tag = TAG NAME -- build - config = PATH TO BUILD CONFIG \ -- branch = BRANCH NAME Where: + TRIGGER NAME is the name of your trigger. + PATH TO REPO is the path to the repository to invoke a build on.
- This page outlines how you can create webhook triggers to automate builds in response to webhook events.
- Use the following command to invoke a webhook event: curl -X POST -H "Content-type: application/json" "https://cloudbuild.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ REGION } /triggers/ ${ TRIGGER NAME } :webhook?key= ${ API KEY } & secret= ${ SECRET VALUE } & trigger= ${ TRIGGER NAME } & projectId= ${ PROJECT ID } " -d "{}" After completing these steps, the Secret Manager Secret Accessor role will automatically be granted to your Cloud Build service agent, service-${PROJECT NUMBER}@gcp-sa-cloudbuild.iam.gserviceaccount.com .
- Home Documentation Application development Cloud Build Guides Send feedback Automate builds in response to webhook events Stay organized with collections Save and categorize content based on your preferences.

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Create to save your build trigger. gcloud To create a trigger if your source code is in Cloud Source Repositories : gcloud builds triggers create cloud-source-repositories \ --repo= REPO NAME \ --branch-pattern= BRANCH PATTERN \ # or --tag-pattern= TAG PATTERN --build-config= BUILD CONFIG FILE \ --service-account= SERVICE ACCOUNT \ --require-approval Where: REPO NAME is the name of your repository.
- To create a trigger if your source code is in GitHub : gcloud builds triggers create github \ -- name = TRIGGER NAME \ -- region = REGION \ -- repo - name = REPO NAME \ -- repo - owner = REPO OWNER \ -- branch - pattern = BRANCH PATTERN \ # or -- tag - pattern = TAG PATTERN -- build - config = BUILD CONFIG FILE \ -- service - account = SERVICE ACCOUNT \ -- require - approval -- include - logs - with - status Where: REGION is the region for your trigger.
- See the gcloud instructions for how to update a build trigger to show or hide build logs for GitHub or GitHub Enterprise triggers. gcloud To update a trigger: Export the trigger you would like to update: gcloud beta builds triggers export TRIGGER NAME -- destination = EXPORT PATH Where: TRIGGER NAME is the name of your trigger.
- Before you begin To ensure that has the necessary permissions to create and manage build triggers, ask your administrator to grant the Cloud Build Editor ( roles/cloudbuild.builds.editor ) IAM role to on the account for your project.

### "Build repositories from Bitbucket Server in a private network \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server-private-network](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server-private-network)
- Source ID: `site-docs-root-2`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Build enables you to create triggers to build from repositories hosted on Bitbucket Server , allowing you to execute builds in response to events such as commit pushes or pull requests associated with your Bitbucket Server repository.
- Building repositories from Bitbucket Server in a private network If your Bitbucket Server instance is hosted in a private network and not reachable over a public internet connection, you must create a private connection between your VPC network and the service producer network .
- This page explains how you can enable trigger functionality on a Bitbucket Server instance if your instance is hosted in a private network.
- Create a Bitbucket Server trigger to build repositories hosted on a Bitbucket Server instance.

