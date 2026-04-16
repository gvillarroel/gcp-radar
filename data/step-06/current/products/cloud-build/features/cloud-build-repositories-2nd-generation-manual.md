---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.839Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build repositories (2nd generation) manual"
feature_slug: "cloud-build-repositories-2nd-generation-manual"
latest_feature_date: "2023-05-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
  - "https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events"
  - "https://docs.cloud.google.com/build/docs/automate-builds-webhook-events"
keywords:
  - "generation"
  - "repositories"
  - "creating"
  - "manual"
  - "triggers"
  - "added"
---

# Cloud Build repositories (2nd generation) manual

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build repositories (2nd generation) added support for creating manual triggers, webhook triggers, and Pub/Sub triggers.

## Extended Definition

Cloud Build repositories (2nd generation) added support for creating manual triggers, webhook triggers, and Pub/Sub triggers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events)

## Supporting Pages

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can directly create triggers for your repositories in Cloud Source Repositories without manually connecting to them.
- Click Create to save your build trigger. gcloud To create a trigger if your source code is in Cloud Source Repositories : gcloud builds triggers create cloud-source-repositories \ --repo= REPO NAME \ --branch-pattern= BRANCH PATTERN \ # or --tag-pattern= TAG PATTERN --build-config= BUILD CONFIG FILE \ --service-account= SERVICE ACCOUNT \ --require-approval Where: REPO NAME is the name of your repository.
- This page explains how to connect to source repositories such as GitHub and Bitbucket, and create build triggers to build the code in the repositories.
- What's next Learn how to start builds manually or set up deployments that require manual invocation by manually building code in source repositories .

### "Automate builds in response to Pub/Sub events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- Source ID: `site-docs-root-2`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To clone and build repositories through your external source code management system, see Creating and managing build triggers to learn how to specify a build configuration inline.
- Note: Pub/Sub triggers cannot build GitHub Enterprise, Bitbucket Data Center, and Bitbucket Server repositories through Cloud Build's native integration.
- To disable this behavior, we recommend using manual approvals to gate builds when making pull requests on public repositories.
- To disable this behavior, we recommend using manual approvals to gate builds when making pull requests on public repositories.

### "Automate builds in response to webhook events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events)
- Source ID: `site-docs-root-2`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Repository triggers that use Cloud Build repositories (2nd gen) can be configured programmatically and are natively integrated with source providers, including support for GitHub and GitLab.
- Note: If you're creating a trigger that automates builds on repository events, we recommend using Cloud Build repository triggers.
- With webhook triggers, you can define an inline build configuration file rather than specify a source when creating your trigger.
- To disable this behavior, we recommend using manual approvals to gate builds when making pull requests on public repositories.

