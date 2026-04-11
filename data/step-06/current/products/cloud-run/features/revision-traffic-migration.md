---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.929Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Revision traffic migration"
feature_slug: "revision-traffic-migration"
latest_feature_date: "2020-02-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.RevisionsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.RevisionsClient"
keywords:
  - "revision"
  - "traffic"
  - "migration"
  - "run"
  - "supports"
  - "controls"
  - "between"
  - "revisions"
---

# Revision traffic migration

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports traffic migration controls between service revisions.

## Extended Definition

Cloud Run supports traffic migration controls between service revisions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.RevisionsAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.RevisionsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.RevisionsClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.RevisionsClient)

## Supporting Pages

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- March 16, 2020 Feature Cloud Run (fully managed) now supports deploying container images from Cloud Artifact Registry February 12, 2020 Feature Cloud Run (fully managed) now supports rollbacks, gradual rollouts (blue/green deployments), and other traffic migration manipulations between revisions.
- February 27, 2023 Change When session affinity is enabled on a Cloud Run service that is splitting traffic between multiple revisions, requests from the same clients are now routed to the same revision .
- September 20, 2022 Feature Cloud Run now supports workforce identity federation September 14, 2022 Feature Startup CPU boost for revisions is now available to provide additional CPU during container instance startup time.
- May 03, 2023 Feature CPU allocation recommender now automatically recommends CPU allocation changes based on traffic received by your Cloud Run service over the past month. (In Preview) April 26, 2023 Announcement Cloud Run source deployment now supports Ubuntu 22 LTS base images.

### "Class RevisionsAsyncClient (0.16.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.RevisionsAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.RevisionsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 149
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import run v2 async def sample list revisions(): Create a client client = run v2 .
- ListRevisionsRequest ( parent="parent value", ) Make the request page result = client. list revisions (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.run v2.types.ListRevisionsRequest , dict]] The request object.
- Returns Type Description google.cloud.run v2.services.revisions.pagers.ListRevisionsAsyncPager Response message containing a list of Revisions.
- Union [ str , bytes ]]] = () ) - > google . cloud . run v2 . services . revisions . pagers .

### "Class RevisionsClient (0.16.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.RevisionsClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.RevisionsClient)
- Source ID: `site-python-reference`
- Final score: 149
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import run v2 def sample list revisions(): Create a client client = run v2 .
- ListRevisionsRequest ( parent="parent value", ) Make the request page result = client. list revisions (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.run v2.types.ListRevisionsRequest , dict] The request object.
- Returns Type Description google.cloud.run v2.services.revisions.pagers.ListRevisionsPager Response message containing a list of Revisions.
- Union [ str , bytes ]]] = () ) - > google . cloud . run v2 . services . revisions . pagers .

