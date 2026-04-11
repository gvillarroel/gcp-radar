---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.707Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build repositories (2nd generation) manual"
feature_slug: "cloud-build-repositories-2nd-generation-manual"
latest_feature_date: "2023-05-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events"
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
  - "https://docs.cloud.google.com/build/docs/automate-builds-webhook-events"
keywords:
  - "build"
  - "repositories"
  - "2nd"
  - "generation"
  - "manual"
  - "added"
  - "for"
  - "creating"
---

# Cloud Build repositories (2nd generation) manual

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build repositories (2nd generation) added support for creating manual triggers, webhook triggers, and Pub/Sub triggers.

## Extended Definition

Cloud Build repositories (2nd generation) added support for creating manual triggers, webhook triggers, and Pub/Sub triggers.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events)

## Supporting Pages

### "Automate builds in response to Pub/Sub events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- Source ID: `site-docs-root-2`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- To clone and build repositories through your external source code management system, see Creating and managing build triggers to learn how to specify a build configuration inline.
- To disable this behavior, we recommend using manual approvals to gate builds when making pull requests on public repositories.
- To disable this behavior, we recommend using manual approvals to gate builds when making pull requests on public repositories.
- Creating a build trigger that responds to Cloud Storage events You can create a Pub/Sub trigger that responds to Cloud Storage events such as when a new binary is pushed to an existing storage bucket.

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- If you select GitHub (mirrored) or Bitbucket (mirrored) as your source repository, then Cloud Build mirrors your repository in Cloud Source Repositories and uses the mirrored repository for all its operations.
- What's next Learn how to start builds manually or set up deployments that require manual invocation by manually building code in source repositories .
- Connect to source repositories You must first connect Cloud Build to your source repository before building the code in that repository.
- Click Create a trigger to continue creating a build trigger to automate builds for the source code in the repository, or click Done .

### "Automate builds in response to webhook events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events)
- Source ID: `site-docs-root-2`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Repository triggers that use Cloud Build repositories (2nd gen) can be configured programmatically and are natively integrated with source providers, including support for GitHub and GitLab.
- Cloud Build repositories (2nd gen) also manage authentication tokens and information on your behalf using Secret Manager.
- To disable this behavior, we recommend using manual approvals to gate builds when making pull requests on public repositories.
- If you use an existing secret, you may need to manually grant the Secret Manager Secret Accessor role to your Cloud Build service account, service-${PROJECT NUMBER}@gcp-sa-cloudbuild.iam.gserviceaccount.com .

