---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.428Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Go 1.25 runtime"
feature_slug: "go-1-25-runtime"
latest_feature_date: "2025-08-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest"
keywords:
  - "workloads"
  - "deployed"
  - "runtime"
  - "supports"
---

# Go 1.25 runtime

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports the Go 1.25 runtime for services; Cloud Run supports the Go 1.25 runtime for deployed workloads.

## Extended Definition

Cloud Run supports the Go 1.25 runtime for services; Cloud Run supports the Go 1.25 runtime for deployed workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api)
- [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest)

## Supporting Pages

### Authenticate to Cloud Run Admin API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Python Client for Cloud Run \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest)
- Source ID: `site-python-reference`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- For functions deployed with Cloud Run, you can use one of the Cloud Run runtime base images that are published by Google Cloud's buildpacks to receive automatic security and maintenance updates.
- Container requirements When deploying containers to Cloud Run, the following requirements must be met: Container deployed to services must listen for requests on the correct port A Cloud Run service starts Cloud Run instances to handle incoming requests.
- Home Documentation Application hosting Cloud Run Guides Send feedback Container runtime contract Stay organized with collections Save and categorize content based on your preferences.
- Container sandbox If you use the first generation execution environment , the Cloud Run containers are sandboxed using the gVisor container runtime sandbox.

