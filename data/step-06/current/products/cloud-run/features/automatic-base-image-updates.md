---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.905Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Automatic base image updates"
feature_slug: "automatic-base-image-updates"
latest_feature_date: "2025-02-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesClient"
keywords:
  - "automatic"
  - "base"
  - "image"
  - "updates"
  - "run"
  - "source"
  - "deployed"
  - "services"
---

# Automatic base image updates

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run source-deployed services and functions support automatic base image updates.

## Extended Definition

Cloud Run source-deployed services and functions support automatic base image updates.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesClient)

## Supporting Pages

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Feature Support for configuring automatic base image updates for Cloud Run source deployed services and functions is now in general availability (GA).
- August 21, 2024 Feature Cloud Run now provides security updates for services that are deployed from source when you specify the runtime base image (Preview).
- May 03, 2023 Feature CPU allocation recommender now automatically recommends CPU allocation changes based on traffic received by your Cloud Run service over the past month. (In Preview) April 26, 2023 Announcement Cloud Run source deployment now supports Ubuntu 22 LTS base images.
- October 30, 2025 Feature For Cloud Run source deployed services and functions with GPU enabled , Cloud Run defaults to using Cloud Build's e2-highcpu-8 machine type for the build process when using the gcloud CLI or the Google Cloud console.

### "Class ServicesAsyncClient (0.16.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient)
- Source ID: `site-python-reference`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Callable [ [ ... ], google . cloud . run v2 . services . services . transports . base .
- Callable [ [ ... ], google . cloud . run v2 . services . services . transports . base .
- Union [ str , google . cloud . run v2 . services . services . transports . base .
- Union [ str , google . cloud . run v2 . services . services . transports . base .

### "Class ServicesClient (0.16.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesClient)
- Source ID: `site-python-reference`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Callable [ [ ... ], google . cloud . run v2 . services . services . transports . base .
- Callable [ [ ... ], google . cloud . run v2 . services . services . transports . base .
- Union [ str , google . cloud . run v2 . services . services . transports . base .
- Union [ str , google . cloud . run v2 . services . services . transports . base .

