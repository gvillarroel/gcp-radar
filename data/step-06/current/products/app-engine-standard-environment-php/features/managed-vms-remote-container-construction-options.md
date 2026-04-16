---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.332Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "Managed VMs remote container construction options"
feature_slug: "managed-vms-remote-container-construction-options"
latest_feature_date: "2016-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml"
keywords:
  - "managed"
  - "vms"
  - "remote"
  - "container"
  - "construction"
  - "options"
  - "vm"
  - "deployments"
---

# Managed VMs remote container construction options

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

Managed VM deployments now support remote container builds via either a transient Compute Engine VM with Docker or Google Cloud Build when enabled.

## Extended Definition

Managed VM deployments now support remote container builds via either a transient Compute Engine VM with Docker or Google Cloud Build when enabled.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)

## Supporting Pages

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How instances are managed Stay organized with collections Save and categorize content based on your preferences.
- Note: For new projects you create after March 2025, App Engine sets the automatic scaling maximum instances default for standard environment deployments to 20.
- Your app does not need to respond to this event, but it can use this to perform any necessary clean-up actions before the container is shut down.
- App Engine normally sends a STOP ( SIGTERM ) signal to the app container.

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- Effective March 18, 2025, Container Registry is shut down, and writing images to Container Registry is unavailable.
- For details on the deprecation and how to migrate to Artifact Registry, see Container Registry deprecation .
- When you deploy, Cloud Build builds a container image, and stores the image in the Artifact Registry .
- Deployments In each App Engine application, you can deploy up to 10,000 times per day.

### "Configure Datastore indexes with index.yaml \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

