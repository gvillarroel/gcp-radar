---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T17:49:26.943Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry Pub/Sub notifications for repository changes"
feature_slug: "artifact-registry-pub-sub-notifications-for-repository-changes"
latest_feature_date: "2020-08-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/configure-notifications"
  - "https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr"
  - "https://docs.cloud.google.com/artifact-registry/docs/configure-monitoring-notifications"
keywords:
  - "notifications"
  - "changes"
  - "pub"
  - "sub"
  - "repository"
  - "registry"
  - "artifact"
  - "for"
---

# Artifact Registry Pub/Sub notifications for repository changes

Product: Artifact Registry
Coverage: LOW

## Step 02 Summary

Artifact Registry adds Pub/Sub-based notifications for changes in Docker repositories.

## Extended Definition

Artifact Registry adds Pub/Sub-based notifications for changes in Docker repositories.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/configure-notifications](https://docs.cloud.google.com/artifact-registry/docs/configure-notifications)
- [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- [https://docs.cloud.google.com/artifact-registry/docs/configure-monitoring-notifications](https://docs.cloud.google.com/artifact-registry/docs/configure-monitoring-notifications)

## Supporting Pages

### "Configuring Pub/Sub notifications \_|\_ Artifact Registry \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/configure-notifications](https://docs.cloud.google.com/artifact-registry/docs/configure-notifications)
- Source ID: `site-docs-root-2`
- Final score: 270
- Re-rank relevance: N/A

Evidence snippets:
- Artifact Registry publishes messages for the following changes: Image uploads New tags added to images Image deletion Additionally, you can configure roles and permissions for publishing or subscribing to notifications.
- If an administrator has revoked the pubsub.topics.publish permissions for the Artifact Registry service account, Artifact Registry attempts to publish the message as the repository user.
- You can receive notifications from Pub/Sub for the changes to a Docker repository.
- Home Documentation Application development Artifact Registry Guides Send feedback Configuring Pub/Sub notifications Stay organized with collections Save and categorize content based on your preferences.

### "Transition from Container Registry \_|\_ Artifact Registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Pub/Sub notifications Publishes changes to the gcr topic.
- Operation Container Registry Artifact Registry Create a repository Not applicable. gcloud artifacts repositories create Delete a repository Not applicable. gcloud artifacts repositories delete List images gcloud container images list gcloud artifacts docker images list List tags gcloud container images list-tags gcloud artifacts docker tags list Add a tag gcloud container images add-tag gcloud artifacts docker tags add Delete a tag gcloud container images untag gcloud artifacts docker tags delete Describe images gcloud container images describe gcloud artifacts docker images list --include-tags Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For example, you can restrict access to us.gcr.io in the project my-project , but you cannot grant specific permissions for images under us.gcr.io/my-project/team1 and us.gcr.io/my-project/team2 Grant access using Artifact Registry roles .
- The initial setup includes automatic creation of Artifact Registry repositories for each Container Registry host in your project and redirection of gcr.io to the corresponding Artifact Registry repositories.

### "Configure monitoring notifications for repository growth \_|\_ Artifact\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/configure-monitoring-notifications](https://docs.cloud.google.com/artifact-registry/docs/configure-monitoring-notifications)
- Source ID: `site-docs-root-2`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application development Artifact Registry Guides Send feedback Configure monitoring notifications for repository growth Stay organized with collections Save and categorize content based on your preferences.
- Create an alerting policy To get notified when your Artifact Registry repository size grows beyond a specific size, create an alerting policy.
- This page describes how to create an alerting policy that can notify you when the Artifact Registry repository growth exceeds a limit.
- New condition Field Value Resource and Metric In the Resources menu, select Artifact Registry Repository .

