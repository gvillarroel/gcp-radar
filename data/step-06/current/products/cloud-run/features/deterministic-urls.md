---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.490Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Deterministic URLs"
feature_slug: "deterministic-urls"
latest_feature_date: "2024-09-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/triggering/https-request"
  - "https://docs.cloud.google.com/run/docs/tutorials/pubsub"
  - "https://docs.cloud.google.com/run/docs/authenticating/overview"
keywords:
  - "deterministic"
  - "predict"
  - "urls"
  - "before"
---

# Deterministic URLs

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Deterministic URLs let you predict a Cloud Run service URL before the service is created.

## Extended Definition

Deterministic URLs let you predict a Cloud Run service URL before the service is created.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/triggering/https-request](https://docs.cloud.google.com/run/docs/triggering/https-request)
- [https://docs.cloud.google.com/run/docs/tutorials/pubsub](https://docs.cloud.google.com/run/docs/tutorials/pubsub)
- [https://docs.cloud.google.com/run/docs/authenticating/overview](https://docs.cloud.google.com/run/docs/authenticating/overview)

## Supporting Pages

### Invoke with an HTTPS Request \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/triggering/https-request](https://docs.cloud.google.com/run/docs/triggering/https-request)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Non-deterministic URL Non-deterministic URLs do not have a deterministic format, meaning that because the URL's second field is a random hash, you cannot predict what the full URL will be before you deploy the services.
- Deterministic URL The deterministic URL lets you predict the service URL before the service is created, which can be useful for service-to-service communication.
- The non-deterministic URL for a Cloud Run service has the format https://[ TAG ---] SERVICE IDENTIFIER .run.app , where TAG refers to the optional traffic tag for the revision that you are requesting, and SERVICE IDENTIFIER is a stable and unique identifier for a Cloud Run service.
- You can retrieve your service's URL by clicking the service name in the Google Cloud console or by running the following command in the gcloud CLI: gcloud run services describe SERVICE --format 'value(status.url)' The deterministic URL is given priority when displayed.

### Use Pub/Sub with Cloud Run tutorial \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/pubsub](https://docs.cloud.google.com/run/docs/tutorials/pubsub)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- COPY package . json . / Install dependencies . if you need a deterministic and repeatable build create a package - lock . json file and use npm ci : RUN npm ci -- omit = dev if you need to include development dependencies during development of your application , use : RUN npm install -- dev RUN npm install -- omit = dev Copy local code to the container image .
- Integrate with Pub/Sub Important: If your project was created on or before April 8, 2021, you must grant the iam.serviceAccountTokenCreator role to the service agent service-{PROJECT NUMBER}@gcp-sa-pubsub.iam.gserviceaccount.com on the project in order to allow Pub/Sub to create tokens.
- To preserve the URLs that use the project ID, such as an appspot.com URL, delete selected resources inside the project instead of deleting the whole project.
- Before you begin Sign in to your Google Cloud account.

### Authentication overview \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/authenticating/overview](https://docs.cloud.google.com/run/docs/authenticating/overview)
- Source ID: `site-docs-reference-required-6`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

