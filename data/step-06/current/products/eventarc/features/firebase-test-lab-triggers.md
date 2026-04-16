---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:58.545Z"
product_name: "Eventarc"
product_slug: "eventarc"
feature_name: "Firebase Test Lab triggers"
feature_slug: "firebase-test-lab-triggers"
latest_feature_date: "2022-03-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient"
  - "https://docs.cloud.google.com/eventarc/docs/locations"
  - "https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.pagers.ListTriggersAsyncPager"
keywords:
  - "firebase"
  - "test"
  - "lab"
  - "triggers"
  - "eventarc"
  - "can"
  - "trigger"
  - "on"
---

# Firebase Test Lab triggers

Product: Eventarc
Coverage: MEDIUM

## Step 02 Summary

Eventarc can trigger on Firebase Test Lab events.

## Extended Definition

Eventarc can trigger on Firebase Test Lab events.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient)
- [https://docs.cloud.google.com/eventarc/docs/locations](https://docs.cloud.google.com/eventarc/docs/locations)
- [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.pagers.ListTriggersAsyncPager](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.pagers.ListTriggersAsyncPager)

## Supporting Pages

### "Class EventarcAsyncClient (1.20.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient)
- Source ID: `site-python-reference`
- Final score: 281
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import eventarc v1 async def sample list triggers(): Create a client client = eventarc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import eventarc v1 async def sample create trigger(): Create a client client = eventarc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import eventarc v1 async def sample delete trigger(): Create a client client = eventarc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import eventarc v1 async def sample update trigger(): Create a client client = eventarc v1 .

### "Class EventarcClient (1.20.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient)
- Source ID: `site-python-reference`
- Final score: 281
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import eventarc v1 def sample list triggers(): Create a client client = eventarc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import eventarc v1 def sample create trigger(): Create a client client = eventarc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import eventarc v1 def sample delete trigger(): Create a client client = eventarc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import eventarc v1 def sample update trigger(): Create a client client = eventarc v1 .

### Eventarc locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/eventarc/docs/locations](https://docs.cloud.google.com/eventarc/docs/locations)
- Source ID: `site-docs-root`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Audit Logs events Triggers for Cloud Audit Logs events are available in single-region locations and you can create a global Eventarc trigger; however, triggers are not supported in dual-region and multi-region locations.
- Firebase Realtime Database Eventarc triggers for Firebase Realtime Database events are available only in the following locations: asia-southeast1 europe-west1 us-central1 For more information, see Realtime Database locations .
- Cloud Storage Triggers for Cloud Storage events are available in single-region, dual-region, and multi-region locations; you can't create a global Eventarc trigger.
- Pub/Sub messages Triggers for Pub/Sub messages are only available in single-region locations and you can't create a global Eventarc trigger.

### "Class ListTriggersAsyncPager (1.20.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.pagers.ListTriggersAsyncPager](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.pagers.ListTriggersAsyncPager)
- Source ID: `site-python-reference`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.eventarc v1.types.ListTriggersRequest The initial request object. response google.cloud.eventarc v1.types.ListTriggersResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListTriggersResponse ], ], request : google . cloud . eventarc v1 . types . eventarc .
- ListTriggersResponse ], ], request : google . cloud . eventarc v1 . types . eventarc .
- ListTriggersRequest , response : google . cloud . eventarc v1 . types . eventarc .

