---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:58.547Z"
product_name: "Eventarc"
product_slug: "eventarc"
feature_name: "Cloud Asset Inventory resource type support"
feature_slug: "cloud-asset-inventory-resource-type-support"
latest_feature_date: "2021-07-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/eventarc/standard/docs/disable-eventarc-advanced"
  - "https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient"
  - "https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.pagers.ListGoogleApiSourcesAsyncPager"
keywords:
  - "asset"
  - "inventory"
  - "resource"
  - "type"
  - "eventarc"
  - "is"
  - "supported"
  - "as"
---

# Cloud Asset Inventory resource type support

Product: Eventarc
Coverage: MEDIUM

## Step 02 Summary

Eventarc is supported as a Cloud Asset Inventory resource type.

## Extended Definition

Eventarc is supported as a Cloud Asset Inventory resource type.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/eventarc/standard/docs/disable-eventarc-advanced](https://docs.cloud.google.com/eventarc/standard/docs/disable-eventarc-advanced)
- [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient)
- [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.pagers.ListGoogleApiSourcesAsyncPager](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.pagers.ListGoogleApiSourcesAsyncPager)

## Supporting Pages

### "Disable Eventarc Advanced resources \_|\_ Eventarc Standard \_|\_ Google\

- URL: [https://docs.cloud.google.com/eventarc/standard/docs/disable-eventarc-advanced](https://docs.cloud.google.com/eventarc/standard/docs/disable-eventarc-advanced)
- Source ID: `site-iam-reference`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you have entered a value into each field, the equivalent YAML configuration for this custom constraint appears on the right. gcloud To create a custom constraint, create a YAML file using the following format: name : organizations/ ORGANIZATION ID /customConstraints/ CONSTRAINT NAME resourceTypes : RESOURCE NAME methodTypes : - CREATE condition : " CONDITION " actionType : ACTION displayName : DISPLAY NAME description : DESCRIPTION Replace the following: ORGANIZATION ID : your organization ID, such as 123456789 .
- You can create a custom constraint using the following Eventarc Advanced resource types: Enrollment GoogleApiSource MessageBus Pipeline Set up a custom constraint Console To create a custom constraint, do the following: In the Google Cloud console, go to the Organization policies page.
- Home Documentation Application development Eventarc Standard Guides Send feedback Disable Eventarc Advanced resources Stay organized with collections Save and categorize content based on your preferences.
- A custom constraint can only contain letters (including upper and lowercase) or numbers, for example, custom.disableEventarcAdvancedResources .

### "Class EventarcAsyncClient (1.20.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient)
- Source ID: `site-python-reference`
- Final score: 246
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.eventarc v1.types.Trigger A representation of the trigger resource. google api source path google api source path ( project : str , location : str , google api source : str ) - > str Returns a fully-qualified google api source string. google channel config path google channel config path ( project : str , location : str ) - > str Returns a fully-qualified google channel config string. list channel connections list channel connections ( request : typing .
- ListMessageBusEnrollmentsRequest ( parent="parent value", ) Make the request page result = client. list message bus enrollments (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.eventarc v1.types.ListMessageBusEnrollmentsRequest , dict]] The request object.
- ListChannelConnectionsRequest ( parent="parent value", ) Make the request page result = client. list channel connections (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.eventarc v1.types.ListChannelConnectionsRequest , dict]] The request object.
- ListGoogleApiSourcesRequest ( parent="parent value", ) Make the request page result = client. list google api sources (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.eventarc v1.types.ListGoogleApiSourcesRequest , dict]] The request object.

### "Class EventarcClient (1.20.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient)
- Source ID: `site-python-reference`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.eventarc v1.types.Trigger A representation of the trigger resource. google api source path google api source path ( project : str , location : str , google api source : str ) - > str Returns a fully-qualified google api source string. google channel config path google channel config path ( project : str , location : str ) - > str Returns a fully-qualified google channel config string. list channel connections list channel connections ( request : typing .
- Returns Type Description google.cloud.eventarc v1.types.GoogleChannelConfig A GoogleChannelConfig is a resource that stores the custom settings respected by Eventarc first-party triggers in the matching region.
- Returns Type Description google.cloud.eventarc v1.types.GoogleChannelConfig A GoogleChannelConfig is a resource that stores the custom settings respected by Eventarc first-party triggers in the matching region.
- CreateGoogleApiSourceRequest ( parent="parent value", google api source=google api source, google api source id="google api source id value", ) Make the request operation = client. create google api source (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.eventarc v1.types.CreateGoogleApiSourceRequest , dict] The request object.

### "Class ListGoogleApiSourcesAsyncPager (1.20.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.pagers.ListGoogleApiSourcesAsyncPager](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.pagers.ListGoogleApiSourcesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.eventarc v1.types.ListGoogleApiSourcesRequest The initial request object. response google.cloud.eventarc v1.types.ListGoogleApiSourcesResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListGoogleApiSourcesResponse ], ], request : google . cloud . eventarc v1 . types . eventarc .
- ListGoogleApiSourcesResponse ], ], request : google . cloud . eventarc v1 . types . eventarc .
- ListGoogleApiSourcesRequest , response : google . cloud . eventarc v1 . types . eventarc .

