---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.499Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry Pub/Sub notifications for repository changes"
feature_slug: "artifact-registry-pub-sub-notifications-for-repository-changes"
latest_feature_date: "2020-08-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/configure-notifications"
  - "https://docs.cloud.google.com/artifact-registry/docs/configure-monitoring-notifications"
  - "https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr"
keywords:
  - "notifications"
  - "changes"
  - "repository"
  - "adds"
---

# Artifact Registry Pub/Sub notifications for repository changes

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Artifact Registry adds Pub/Sub-based notifications for changes in Docker repositories.

## Extended Definition

Artifact Registry adds Pub/Sub-based notifications for changes in Docker repositories.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/configure-notifications](https://docs.cloud.google.com/artifact-registry/docs/configure-notifications)
- [https://docs.cloud.google.com/artifact-registry/docs/configure-monitoring-notifications](https://docs.cloud.google.com/artifact-registry/docs/configure-monitoring-notifications)
- [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)

## Supporting Pages

### "Configuring Pub/Sub notifications \_|\_ Artifact Registry \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/configure-notifications](https://docs.cloud.google.com/artifact-registry/docs/configure-notifications)
- Source ID: `site-docs-root-2`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Applications that subscribe to Pub/Sub topics receive these messages and receive notifications when a repository's state changes.
- You can receive notifications from Pub/Sub for the changes to a Docker repository.
- Artifact Registry publishes messages for the following changes: Image uploads New tags added to images Image deletion Additionally, you can configure roles and permissions for publishing or subscribing to notifications.
- Creating a subscription After you have created a topic for repository changes, you can configure a subscription to it that uses either push delivery or pull delivery .

### "Configure monitoring notifications for repository growth \_|\_ Artifact\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/configure-monitoring-notifications](https://docs.cloud.google.com/artifact-registry/docs/configure-monitoring-notifications)
- Source ID: `site-docs-root-2`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application development Artifact Registry Guides Send feedback Configure monitoring notifications for repository growth Stay organized with collections Save and categorize content based on your preferences.
- The alerting policy monitors the size of your repository and when that size exceeds the threshold you specify, notifications are sent to all notification channels attached to the alerting policy.
- Rolling window function max Configure alert trigger Field Value Condition type Threshold Alert trigger Any time series violates Threshold position Above threshold Threshold value Set to the size of the repository in bytes that triggers the alert.
- To create an alerting policy, do the following: In the Google Cloud console, go to the notifications Alerting page: Go to Alerting If you use the search bar to find this page, then select the result whose subheading is Monitoring .

### "Transition from Container Registry \_|\_ Artifact Registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Pub/Sub notifications Publishes changes to the gcr topic.
- Operation Container Registry Artifact Registry Create a repository Not applicable. gcloud artifacts repositories create Delete a repository Not applicable. gcloud artifacts repositories delete List images gcloud container images list gcloud artifacts docker images list List tags gcloud container images list-tags gcloud artifacts docker tags list Add a tag gcloud container images add-tag gcloud artifacts docker tags add Delete a tag gcloud container images untag gcloud artifacts docker tags delete Describe images gcloud container images describe gcloud artifacts docker images list --include-tags Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For example, you can separately control access to images in us-docker.pkg.dev/my-project/team1 and us-docker.pkg.dev/my-project/team2 Grant conditional access with IAM and repository tags Authentication Provides several authentication methods for pushing and pulling images with a third-party client.
- Summary of new features Artifact Registry extends the capabilities of Container Registry with the following features: Repository-level access control .

