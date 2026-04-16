---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.499Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Compute flexible committed use discounts"
feature_slug: "compute-flexible-committed-use-discounts"
latest_feature_date: "2024-07-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/resources"
  - "https://docs.cloud.google.com/run/docs/tutorials/eventarc"
  - "https://docs.cloud.google.com/run/docs/quickstarts/jobs/create-execute"
keywords:
  - "eligible"
  - "flexible"
  - "compute"
  - "committed"
  - "discounts"
---

# Compute flexible committed use discounts

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Compute flexible committed use discounts let eligible Cloud Run services and jobs share flexible commitments across Compute Engine, GKE, and Cloud Run.

## Extended Definition

Compute flexible committed use discounts let eligible Cloud Run services and jobs share flexible commitments across Compute Engine, GKE, and Cloud Run.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/resources](https://docs.cloud.google.com/run/docs/resources)
- [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc)
- [https://docs.cloud.google.com/run/docs/quickstarts/jobs/create-execute](https://docs.cloud.google.com/run/docs/quickstarts/jobs/create-execute)

## Supporting Pages

### Resources \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/resources](https://docs.cloud.google.com/run/docs/resources)
- Source ID: `site-api-reference`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Compute flexible committed use discounts Flexible CUD details for Cloud Run.

### "Use Eventarc to receive events from Cloud Storage \_|\_ Cloud Run \_|\_\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc)
- Source ID: `site-docs-root-2`
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Grant the Eventarc Event Receiver role ( roles/eventarc.eventReceiver ) on the project to the Compute Engine default service account so that the Eventarc trigger can receive events from event providers. gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com \ --role = roles/eventarc.eventReceiver Optional role for the Pub/Sub service agent If you enabled the Cloud Pub/Sub service agent on or before April 8, 2021, to support authenticated Pub/Sub push requests, grant the Service Account Token Creator role ( roles/iam.serviceAccountTokenCreator ) to the service agent.
- Create a trigger that filters Cloud Storage events: gcloud eventarc triggers create ${ SERVICE NAME } \ --destination-run-service = ${ SERVICE NAME } \ --destination-run-region = ${ REGION } \ --location = ${ REGION } \ --event-filters = "type=google.cloud.storage.object.v1.finalized" \ --event-filters = "bucket= PROJECT ID -bucket" \ --service-account = PROJECT NUMBER -compute@developer.gserviceaccount.com This creates a trigger called helloworld-events .
- This grants the role on all Cloud Run services and jobs in a project. gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com \ --role = roles/run.invoker Note that if you create a trigger for an authenticated Cloud Run service without granting the Cloud Run Invoker role, the trigger is created successfully and is active.
- This service account is automatically created after enabling or using a Google Cloud service that uses Compute Engine, and with the following email format: PROJECT NUMBER -compute@developer.gserviceaccount.com Replace PROJECT NUMBER with your Google Cloud project number.

### Quickstart: Create and execute a job in Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/jobs/create-execute](https://docs.cloud.google.com/run/docs/quickstarts/jobs/create-execute)
- Source ID: `site-docs-reference-required-10`
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

