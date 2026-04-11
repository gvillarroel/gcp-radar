---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.898Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Service-level maximum instances"
feature_slug: "service-level-maximum-instances"
latest_feature_date: "2025-06-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesClient"
keywords:
  - "level"
  - "maximum"
  - "instances"
  - "run"
  - "supports"
  - "applying"
  - "instance"
  - "configuration"
---

# Service-level maximum instances

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports applying maximum instance configuration at the service level.

## Extended Definition

Cloud Run supports applying maximum instance configuration at the service level.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesClient)

## Supporting Pages

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- October 06, 2025 Feature Support for applying maximum instance configuration at the service level is in General Availability (GA).
- December 14, 2020 Feature Cloud Run container instances can now process up to 250 concurrent requests , see Configuring maximum concurrency .
- July 26, 2021 Feature Cloud Run container instances can now process up to 1,000 concurrent requests , see Setting maximum concurrency .
- June 30, 2025 Feature You can apply maximum instance configuration at the service level (in Preview).

### "Class InstancesAsyncClient (0.16.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesAsyncClient)
- Source ID: `site-python-reference`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import run v2 async def sample list instances(): Create a client client = run v2 .
- ListInstancesRequest ( parent="parent value", ) Make the request page result = client. list instances (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.run v2.types.ListInstancesRequest , dict]] The request object.
- Returns Type Description google.cloud.run v2.services.instances.pagers.ListInstancesAsyncPager Response message containing a list of Instances.
- Union [ str , bytes ]]] = () ) - > google . cloud . run v2 . services . instances . pagers .

### "Class InstancesClient (0.16.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesClient)
- Source ID: `site-python-reference`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import run v2 def sample list instances(): Create a client client = run v2 .
- ListInstancesRequest ( parent="parent value", ) Make the request page result = client. list instances (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.run v2.types.ListInstancesRequest , dict] The request object.
- Returns Type Description google.cloud.run v2.services.instances.pagers.ListInstancesPager Response message containing a list of Instances.
- Union [ str , bytes ]]] = () ) - > google . cloud . run v2 . services . instances . pagers .

