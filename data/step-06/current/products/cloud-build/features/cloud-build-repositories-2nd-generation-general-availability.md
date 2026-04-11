---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.699Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build repositories (2nd generation) general availability"
feature_slug: "cloud-build-repositories-2nd-generation-general-availability"
latest_feature_date: "2023-07-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events"
  - "https://docs.cloud.google.com/build/docs/release-notes"
  - "https://docs.cloud.google.com/build/docs/automate-builds-webhook-events"
keywords:
  - "build"
  - "repositories"
  - "2nd"
  - "generation"
  - "general"
  - "availability"
  - "reached"
---

# Cloud Build repositories (2nd generation) general availability

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build repositories (2nd generation) reached general availability.

## Extended Definition

Cloud Build repositories (2nd generation) reached general availability.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events)

## Supporting Pages

### "Automate builds in response to Pub/Sub events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- Source ID: `site-docs-root-2`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- To clone and build repositories through your external source code management system, see Creating and managing build triggers to learn how to specify a build configuration inline.
- Note: Pub/Sub triggers cannot build GitHub Enterprise, Bitbucket Data Center, and Bitbucket Server repositories through Cloud Build's native integration.
- 1st gen 2nd gen Cloud Build Pub/Sub triggers enable you to execute builds in response to Google Cloud events published over Pub/Sub.
- To disable this behavior, we recommend using manual approvals to gate builds when making pull requests on public repositories.

### Cloud Build release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- July 20, 2023 Feature Cloud Build repositories (2nd gen) is now generally available .
- January 23, 2023 Feature Cloud Build repositories (2nd gen) lets you easily create and manage repository connections, not only through Cloud Console but also through gcloud and the Cloud Build API.
- Cloud Build repositories (2nd gen) integrates directly with GitHub , GitHub Enterprise , GitLab , and GitLab Enterprise Edition and comes with end-to-end Terraform support.
- February 08, 2023 Feature You can now create and manage repository connections using Terraform when using Cloud Build repositories (2nd gen).

### "Automate builds in response to webhook events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events)
- Source ID: `site-docs-root-2`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Repository triggers that use Cloud Build repositories (2nd gen) can be configured programmatically and are natively integrated with source providers, including support for GitHub and GitLab.
- Cloud Build repositories (2nd gen) also manage authentication tokens and information on your behalf using Secret Manager.
- To disable this behavior, we recommend using manual approvals to gate builds when making pull requests on public repositories.
- 1st gen 2nd gen Cloud Build lets you define webhook triggers , which can authenticate and accept incoming webhook events.

