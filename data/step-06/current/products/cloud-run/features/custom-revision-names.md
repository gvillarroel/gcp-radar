---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.930Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Custom revision names"
feature_slug: "custom-revision-names"
latest_feature_date: "2020-01-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.RevisionsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.RevisionsClient"
  - "https://docs.cloud.google.com/run/docs/release-notes"
keywords:
  - "custom"
  - "revision"
  - "names"
  - "run"
  - "supports"
  - "through"
  - "the"
  - "suffix"
---

# Custom revision names

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports custom revision names through the revision suffix flag.

## Extended Definition

Cloud Run supports custom revision names through the revision suffix flag.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.RevisionsAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.RevisionsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.RevisionsClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.RevisionsClient)
- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)

## Supporting Pages

### "Class RevisionsAsyncClient (0.16.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.RevisionsAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.RevisionsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import run v2 async def sample delete revision(): Create a client client = run v2 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import run v2 async def sample list revisions(): Create a client client = run v2 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import run v2 async def sample get revision(): Create a client client = run v2 .
- DeleteRevisionRequest ( name="name value", ) Make the request operation = client. delete revision (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.run v2.types.DeleteRevisionRequest , dict]] The request object.

### "Class RevisionsClient (0.16.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.RevisionsClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.RevisionsClient)
- Source ID: `site-python-reference`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import run v2 def sample delete revision(): Create a client client = run v2 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import run v2 def sample list revisions(): Create a client client = run v2 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import run v2 def sample get revision(): Create a client client = run v2 .
- DeleteRevisionRequest ( name="name value", ) Make the request operation = client. delete revision (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.run v2.types.DeleteRevisionRequest , dict] The request object.

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Feature Use custom revision names with the --revision-suffix command line flag.
- March 16, 2020 Feature Cloud Run (fully managed) now supports deploying container images from Cloud Artifact Registry February 12, 2020 Feature Cloud Run (fully managed) now supports rollbacks, gradual rollouts (blue/green deployments), and other traffic migration manipulations between revisions.
- May 12, 2021 Feature Cloud Run now provides UI, command line, and YAML support for referencing Secret Manager Secrets . (Available in public preview.) Feature Customer managed encryption keys are now available for use with Cloud Run. (Available in public preview.) Feature Recommender now provides recommendations for securing Cloud Run services by creating dedicated service accounts. (Available in public preview.) Feature Committed use discounts are now available for Cloud Run . (Available in public preview.) Feature You can now use Binary authorization with Cloud Run to enforce policy-based deployment of Cloud Run services. (Available in public preview.) May 03, 2021 Feature You can now use Identity-aware Proxy with Cloud Run to use identity and context to guard access to your applications. (Available in public preview.) Change By default, the memory allocated to each container instance of a new service is 512MiB.
- October 23, 2020 Feature Cloud Run services can now be triggered using Eventarc (available in public preview) October 19, 2020 Feature Cloud Run is now available in the following regions: asia-east2 (Hong Kong) asia-northeast3 (Seoul, South Korea) asia-southeast2 (Jakarta) asia-south1 (Mumbai, India) europe-west2 (London, UK) europe-west3 (Frankfurt, Germany) europe-west6 (Zurich, Switzerland) southamerica-east1 (Sao Paulo, Brazil) Feature You can now purchase a custom domain via Cloud Domains using the Cloud Run user interface.

