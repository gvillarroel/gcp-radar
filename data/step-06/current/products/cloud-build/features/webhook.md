---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.708Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "webhook"
feature_slug: "webhook"
latest_feature_date: "2023-05-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automate-builds-webhook-events"
  - "https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events"
  - "https://docs.cloud.google.com/build/docs/release-notes"
keywords:
  - "webhook"
  - "build"
  - "repositories"
  - "2nd"
  - "generation"
  - "added"
  - "for"
  - "creating"
---

# webhook

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build repositories (2nd generation) added support for creating manual triggers, webhook triggers, and Pub/Sub triggers.

## Extended Definition

Cloud Build repositories (2nd generation) added support for creating manual triggers, webhook triggers, and Pub/Sub triggers.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events)
- [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)

## Supporting Pages

### "Automate builds in response to webhook events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events)
- Source ID: `site-docs-root-2`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Repository triggers that use Cloud Build repositories (2nd gen) can be configured programmatically and are natively integrated with source providers, including support for GitHub and GitLab.
- Cloud Build repositories (2nd gen) also manage authentication tokens and information on your behalf using Secret Manager.
- With webhook triggers, you can define an inline build configuration file rather than specify a source when creating your trigger.
- 1st gen 2nd gen Cloud Build lets you define webhook triggers , which can authenticate and accept incoming webhook events.

### "Automate builds in response to Pub/Sub events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- Source ID: `site-docs-root-2`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- To clone and build repositories through your external source code management system, see Creating and managing build triggers to learn how to specify a build configuration inline.
- Creating a build trigger that responds to Cloud Storage events You can create a Pub/Sub trigger that responds to Cloud Storage events such as when a new binary is pushed to an existing storage bucket.
- Click Create to create your build trigger. gcloud To create a trigger that listens for a new tag pushed to an existing image in Artifact Registry using the gcloud commands: Open a terminal window.
- Creating a build trigger that responds to Artifact Registry events You can create a Pub/Sub trigger that responds to Artifact Registry events such as when images are pushed, tagged, or deleted.

### Cloud Build release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Build repositories (2nd gen) integrates directly with GitHub , GitHub Enterprise , GitLab , and GitLab Enterprise Edition and comes with end-to-end Terraform support.
- February 08, 2023 Feature You can now create and manage repository connections using Terraform when using Cloud Build repositories (2nd gen).
- May 11, 2023 Feature You can now create manual triggers , webhook triggers , or Pub/Sub triggers using Cloud Build repositories (2nd gen).
- Cloud Build repositories (2nd gen) is available for GitHub and GitHub Enterprise repositories at the preview release stage.

