---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:44:03.412Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Task Queue queue-depth suppression for invalid/deleted queues"
feature_slug: "task-queue-queue-depth-suppression-for-invalid-deleted-queues"
latest_feature_date: "2015-12-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes"
keywords:
  - "queues marked for deletion"
  - "queue depth disablement"
  - "queue table outages"
  - "non-existent queues"
  - "queue depth suppression"
  - "deleted queue handling"
  - "Task Queue queue depth"
  - "invalid queue handling"
---

# Task Queue queue-depth suppression for invalid/deleted queues

Product: App Engine standard environment Java
Coverage: LOW

## Step 02 Summary

Task Queue no longer calculates or stores queue depth for non-existent queues, queues marked for deletion, or during queue table outages.

## Extended Definition

Task Queue no longer calculates or stores queue depth for non-existent queues, queues marked for deletion, or during queue table outages.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes)

## Supporting Pages

### "App Engine standard environment for Java gen2 release notes \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Feature Version 1.9.29 Feature Stop calculating and storing queue depth for non-existent queues, queues marked for deletion, and in the case of queue table outages.

