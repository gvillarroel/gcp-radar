---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.841Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "webhook"
feature_slug: "webhook"
latest_feature_date: "2023-05-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/automate-builds-webhook-events"
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
  - "https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events"
keywords:
  - "generation"
  - "repositories"
  - "creating"
  - "webhook"
  - "manual"
  - "added"
---

# webhook

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build repositories (2nd generation) added support for creating manual triggers, webhook triggers, and Pub/Sub triggers.

## Extended Definition

Cloud Build repositories (2nd generation) added support for creating manual triggers, webhook triggers, and Pub/Sub triggers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events)
- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)

## Supporting Pages

### "Automate builds in response to webhook events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events)
- Source ID: `site-docs-root-2`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- With webhook triggers, you can define an inline build configuration file rather than specify a source when creating your trigger.
- To disable this behavior, we recommend using manual approvals to gate builds when making pull requests on public repositories.
- Click Create to create your build trigger. gcloud To create a webhook trigger: gcloud builds triggers create webhook \ -- name = TRIGGER NAME \ -- repo = PATH TO REPO \ -- repo - type = REPO TYPE \ -- secret = PATH TO SECRET \ -- substitutions = SUB ONE = '$ ( body . message . test ) ' , SUB TWO = '$ ( body . message . output ) ' \ -- subscription - filter = ' SUB ONE == "prod" ' \ -- inline - config = PATH TO INLINE BUILD CONFIG \ -- tag = TAG NAME -- build - config = PATH TO BUILD CONFIG \ -- branch = BRANCH NAME Where: + TRIGGER NAME is the name of your trigger. + PATH TO REPO is the path to the repository to invoke a build on.
- Use the following command to invoke a webhook event: curl -X POST -H "Content-type: application/json" "https://cloudbuild.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ REGION } /triggers/ ${ TRIGGER NAME } :webhook?key= ${ API KEY } & secret= ${ SECRET VALUE } & trigger= ${ TRIGGER NAME } & projectId= ${ PROJECT ID } " -d "{}" After completing these steps, the Secret Manager Secret Accessor role will automatically be granted to your Cloud Build service agent, service-${PROJECT NUMBER}@gcp-sa-cloudbuild.iam.gserviceaccount.com .

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- What's next Learn how to start builds manually or set up deployments that require manual invocation by manually building code in source repositories .
- You can directly create triggers for your repositories in Cloud Source Repositories without manually connecting to them.
- You can only connect repositories from GitHub and GitHub Enterprise when selecting 2nd generation as your source.
- Click Create to save your build trigger. gcloud To create a trigger if your source code is in Cloud Source Repositories : gcloud builds triggers create cloud-source-repositories \ --repo= REPO NAME \ --branch-pattern= BRANCH PATTERN \ # or --tag-pattern= TAG PATTERN --build-config= BUILD CONFIG FILE \ --service-account= SERVICE ACCOUNT \ --require-approval Where: REPO NAME is the name of your repository.

### "Automate builds in response to Pub/Sub events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- Source ID: `site-docs-root-2`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- To clone and build repositories through your external source code management system, see Creating and managing build triggers to learn how to specify a build configuration inline.
- To disable this behavior, we recommend using manual approvals to gate builds when making pull requests on public repositories.
- To disable this behavior, we recommend using manual approvals to gate builds when making pull requests on public repositories.
- Creating a build trigger that responds to Cloud Storage events You can create a Pub/Sub trigger that responds to Cloud Storage events such as when a new binary is pushed to an existing storage bucket.

