---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:19.028Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "Instance replication"
feature_slug: "instance-replication"
latest_feature_date: "2025-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances/create"
  - "https://docs.cloud.google.com/filestore/docs/creating-instances"
  - "https://docs.cloud.google.com/nodejs/docs/reference/filestore/latest"
keywords:
  - "instance"
  - "replication"
  - "enables"
  - "filestore"
  - "instances"
  - "to"
  - "replicate"
  - "replicas"
---

# Instance replication

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

Instance replication enables Filestore instances to replicate data to replicas.

## Extended Definition

Instance replication enables Filestore instances to replicate data to replicas.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances/create](https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances/create)
- [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- [https://docs.cloud.google.com/nodejs/docs/reference/filestore/latest](https://docs.cloud.google.com/nodejs/docs/reference/filestore/latest)

## Supporting Pages

### Method: projects.locations.instances.create | Filestore | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances/create](https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances/create)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Method: projects.locations.instances.create Filestore Google Cloud Documentation Source URL: https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances/create Documentation · Storage · Filestore · Reference · Send feedback · HTTP request · Path parameters · Query parameters · Request body · Response body · Authorization scopes · Try it!
- When creating from a backup, the capacity of the new instance needs to be equal ...

### Create an instance | Filestore | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create an instance Filestore Google Cloud Documentation Source URL: https://docs.cloud.google.com/filestore/docs/creating-instances The name of your Filestore instance, or instance ID, is used to identify the instance and is used in gcloud commands.
- The instance ID must be unique in the Google Cloud project and zone where it&#x27;s located.
- Instance IDs must comply with the &lt;label&gt; element of RFC 1035.

### Filestore: Node.js Client bookmark_border

- URL: [https://docs.cloud.google.com/nodejs/docs/reference/filestore/latest](https://docs.cloud.google.com/nodejs/docs/reference/filestore/latest)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Filestore: Node.js Client bookmark border Source URL: https://docs.cloud.google.com/nodejs/docs/reference/filestore/latest / // const projectId = &#x27;my-project&#x27;; // const location = &#x27;us-central1-a&#x27;; // Imports the Google Cloud Some API library const {CloudFilestoreManagerClient} = require(&#x27;@google-cloud/filestore&#x27;); const client = new CloudFilestoreManagerClient(); async function listInstances() { for await (const instance of client.listInstancesAsync({ parent: projects/${projectId}/locations/${location}, })) { console.info(instance); } } listInstances();

