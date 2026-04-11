---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:19.031Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "Enterprise single-share backups for GKE"
feature_slug: "enterprise-single-share-backups-for-gke"
latest_feature_date: "2023-10-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/filestore-for-gke"
  - "https://docs.cloud.google.com/filestore/docs/reference/rest"
  - "https://docs.cloud.google.com/nodejs/docs/reference/filestore/latest"
keywords:
  - "enterprise"
  - "single"
  - "share"
  - "backups"
  - "for"
  - "gke"
  - "filestore"
  - "kubernetes"
---

# Enterprise single-share backups for GKE

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

Filestore Enterprise single-share backups for Google Kubernetes Engine are generally available.

## Extended Definition

Filestore Enterprise single-share backups for Google Kubernetes Engine are generally available.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/filestore-for-gke](https://docs.cloud.google.com/filestore/docs/filestore-for-gke)
- [https://docs.cloud.google.com/filestore/docs/reference/rest](https://docs.cloud.google.com/filestore/docs/reference/rest)
- [https://docs.cloud.google.com/nodejs/docs/reference/filestore/latest](https://docs.cloud.google.com/nodejs/docs/reference/filestore/latest)

## Supporting Pages

### About Filestore support for Google Kubernetes Engine | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/filestore-for-gke](https://docs.cloud.google.com/filestore/docs/filestore-for-gke)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- About Filestore support for Google Kubernetes Engine Google Cloud Documentation Source URL: https://docs.cloud.google.com/filestore/docs/filestore-for-gke Filestore · Start free · Home ... instances are fully managed file servers on Google Cloud that you can use as durable storage with ReadWriteMany access for your Google Kubernetes Engine (GKE) clusters....

### Cloud Filestore API | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/reference/rest](https://docs.cloud.google.com/filestore/docs/reference/rest)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Filestore API Google Cloud Documentation Source URL: https://docs.cloud.google.com/filestore/docs/reference/rest Documentation · Storage · Filestore · Reference · Send feedback · The Cloud Filestore API is used for creating and managing cloud file servers.
- REST Resource: v1beta1.projects.locations · REST Resource: v1beta1.projects.locations.backups · REST Resource: v1beta1.projects.locations.instances ·

### Filestore: Node.js Client bookmark_border

- URL: [https://docs.cloud.google.com/nodejs/docs/reference/filestore/latest](https://docs.cloud.google.com/nodejs/docs/reference/filestore/latest)
- Source ID: `site-docs-reference`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- Filestore: Node.js Client bookmark border Source URL: https://docs.cloud.google.com/nodejs/docs/reference/filestore/latest / // const projectId = &#x27;my-project&#x27;; // const location = &#x27;us-central1-a&#x27;; // Imports the Google Cloud Some API library const {CloudFilestoreManagerClient} = require(&#x27;@google-cloud/filestore&#x27;); const client = new CloudFilestoreManagerClient(); async function listInstances() { for await (const instance of client.listInstancesAsync({ parent: projects/${projectId}/locations/${location}, })) { console.info(instance); } } listInstances();

