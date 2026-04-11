---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:19.025Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "Filestore CSI driver regional instance creation"
feature_slug: "filestore-csi-driver-regional-instance-creation"
latest_feature_date: "2025-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/creating-instances"
  - "https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances/create"
  - "https://docs.cloud.google.com/nodejs/docs/reference/filestore/latest"
keywords:
  - "filestore"
  - "csi"
  - "driver"
  - "regional"
  - "instance"
  - "creation"
  - "the"
  - "can"
---

# Filestore CSI driver regional instance creation

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

The Filestore CSI driver can create Filestore regional instances.

## Extended Definition

The Filestore CSI driver can create Filestore regional instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- [https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances/create](https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances/create)
- [https://docs.cloud.google.com/nodejs/docs/reference/filestore/latest](https://docs.cloud.google.com/nodejs/docs/reference/filestore/latest)

## Supporting Pages

### Create an instance | Filestore | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Create an instance Filestore Google Cloud Documentation Source URL: https://docs.cloud.google.com/filestore/docs/creating-instances The name of your Filestore instance, or instance ID, is used to identify the instance and is used in gcloud commands.
- The instance ID must be unique in the Google Cloud project and zone where it&#x27;s located.
- Instance IDs must comply with the &lt;label&gt; element of RFC 1035.
- Specifically, they must: Be between 1-63 characters long.

### Method: projects.locations.instances.create | Filestore | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances/create](https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances/create)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Method: projects.locations.instances.create Filestore Google Cloud Documentation Source URL: https://docs.cloud.google.com/filestore/docs/reference/rest/v1/projects.locations.instances/create Documentation · Storage · Filestore · Reference · Send feedback · HTTP request · Path parameters · Query parameters · Request body · Response body · Authorization scopes · Try it!
- When creating from a backup, the capacity of the new instance needs to be equal ...

### Filestore: Node.js Client bookmark_border

- URL: [https://docs.cloud.google.com/nodejs/docs/reference/filestore/latest](https://docs.cloud.google.com/nodejs/docs/reference/filestore/latest)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Filestore: Node.js Client bookmark border Source URL: https://docs.cloud.google.com/nodejs/docs/reference/filestore/latest / // const projectId = &#x27;my-project&#x27;; // const location = &#x27;us-central1-a&#x27;; // Imports the Google Cloud Some API library const {CloudFilestoreManagerClient} = require(&#x27;@google-cloud/filestore&#x27;); const client = new CloudFilestoreManagerClient(); async function listInstances() { for await (const instance of client.listInstancesAsync({ parent: projects/${projectId}/locations/${location}, })) { console.info(instance); } } listInstances();

