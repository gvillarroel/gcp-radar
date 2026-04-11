---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:23:14.091Z"
product_name: "Batch"
product_slug: "batch"
feature_name: "Batch regional availability: europe-west6"
feature_slug: "batch-regional-availability-europe-west6"
latest_feature_date: "2022-09-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/batch/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.services.batch_service.BatchServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.services.batch_service.BatchServiceClient"
keywords:
  - "west6"
  - "europe"
  - "regional"
  - "availability"
  - "became"
  - "available"
  - "in"
  - "batch"
---

# Batch regional availability: europe-west6

Product: Batch
Coverage: LOW

## Step 02 Summary

Batch became available in the europe-west6 region.

## Extended Definition

Batch became available in the europe-west6 region.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/batch/docs/release-notes](https://docs.cloud.google.com/batch/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.services.batch_service.BatchServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.services.batch_service.BatchServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.services.batch_service.BatchServiceClient](https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.services.batch_service.BatchServiceClient)

## Supporting Pages

### Batch release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/batch/docs/release-notes](https://docs.cloud.google.com/batch/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Information that was previously on that page has been relocated to the following new pages: Batch locations Authenticate to Batch Create and run a job View jobs and tasks Analyze a job using logs Delete a job September 07, 2022 Feature Batch is now available in the following regions: asia-southeast1 and europe-west6 .
- For more information, see the following pages: Networking overview Specify the network for a job Block external access for a job Use VPC Service Controls April 11, 2023 Feature Batch is available in the following regions: asia-northeast1 (Tokyo) europe-west4 (Netherlands) For more information, see Locations .
- For more information, see the following pages: VM OS environment overview Specify the VM OS image for a job Customize the boot disks for a job View VM OS images for Batch Control access to VM OS images for Batch August 25, 2023 Feature Batch is available in the europe-west10 (Berlin) region.
- October 05, 2023 Feature Batch is available in the following regions: australia-southeast2 (Melbourne) europe-west8 (Milan) europe-west12 (Turin) me-west1 (Tel Aviv) northamerica-northeast2 (Toronto) southamerica-east1 (São Paulo) us-east5 (Columbus) For more information, see Locations .

### "Class BatchServiceAsyncClient (0.20.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.services.batch_service.BatchServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.services.batch_service.BatchServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import batch v1 async def sample cancel job(): Create a client client = batch v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import batch v1 async def sample create job(): Create a client client = batch v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import batch v1 async def sample delete job(): Create a client client = batch v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import batch v1 async def sample list tasks(): Create a client client = batch v1 .

### "Class BatchServiceClient (0.20.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.services.batch_service.BatchServiceClient](https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.services.batch_service.BatchServiceClient)
- Source ID: `site-python-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import batch v1 def sample cancel job(): Create a client client = batch v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import batch v1 def sample create job(): Create a client client = batch v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import batch v1 def sample delete job(): Create a client client = batch v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import batch v1 def sample list tasks(): Create a client client = batch v1 .

