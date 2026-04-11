---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:58.257Z"
product_name: "Service Extensions"
product_slug: "service-extensions"
feature_name: "Service Extensions Wasm plugin uploads to Artifact Registry generic repositories"
feature_slug: "service-extensions-wasm-plugin-uploads-to-artifact-registry-generic-repositories"
latest_feature_date: "2025-07-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1/projects.locations.wasmPlugins/patch"
  - "https://docs.cloud.google.com/service-extensions/docs/plugins-overview"
  - "https://docs.cloud.google.com/service-extensions/docs/manage-plugins"
keywords:
  - "extensions"
  - "wasm"
  - "plugin"
  - "uploads"
  - "to"
  - "artifact"
  - "registry"
  - "generic"
---

# Service Extensions Wasm plugin uploads to Artifact Registry generic repositories

Product: Service Extensions
Coverage: MEDIUM

## Step 02 Summary

Service Extensions allows uploading Wasm plugin code to Artifact Registry using generic format repositories in addition to Docker repositories.

## Extended Definition

Service Extensions allows uploading Wasm plugin code to Artifact Registry using generic format repositories in addition to Docker repositories.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1/projects.locations.wasmPlugins/patch](https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1/projects.locations.wasmPlugins/patch)
- [https://docs.cloud.google.com/service-extensions/docs/plugins-overview](https://docs.cloud.google.com/service-extensions/docs/plugins-overview)
- [https://docs.cloud.google.com/service-extensions/docs/manage-plugins](https://docs.cloud.google.com/service-extensions/docs/manage-plugins)

## Supporting Pages

### Method: projects.locations.wasmPlugins.patch | Service Extensions | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1/projects.locations.wasmPlugins/patch](https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1/projects.locations.wasmPlugins/patch)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Method: projects.locations.wasmPlugins.patch Service Extensions Google Cloud Documentation Source URL: https://docs.cloud.google.com/service-extensions/docs/reference/rest/v1/projects.locations.wasmPlugins/patch Documentation · Networking · Service Extensions · Reference · Send feedback · HTTP request · Path parameters · Query parameters · Request body · Response body · IAM Permissions · Updates the parameters of the specified WasmPlugin resource.
- PATCH https://networkservices.googleapis.com/v1/{wasmPlugin.name=projects/ /locations/ /wasmPlugins/ } The URL uses gRPC Transcoding syntax.

### Plugins overview | Service Extensions | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-extensions/docs/plugins-overview](https://docs.cloud.google.com/service-extensions/docs/plugins-overview)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Upload your compiled plugin code to an Artifact Registry repository.
- Plugins overview Service Extensions Google Cloud Documentation Source URL: https://docs.cloud.google.com/service-extensions/docs/plugins-overview You can use Service Extensions with Application Load Balancers and Media CDN as follows: ...
- Compile your code into a Wasm module.
- Create a plugin that contains the uploaded plugin code.

### Manage plugins | Service Extensions | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-extensions/docs/manage-plugins](https://docs.cloud.google.com/service-extensions/docs/manage-plugins)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Manage plugins Service Extensions Google Cloud Documentation Source URL: https://docs.cloud.google.com/service-extensions/docs/manage-plugins Documentation · Networking · Service Extensions · Guides · Send feedback · This page describes how you can view, edit, and delete plugins created using Service Extensions.
- For a product overview, see Service Extensions overview.
- The plugins feature is in Preview for Media CDN.

