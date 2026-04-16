---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:37.377Z"
product_name: "Cloud Location Finder"
product_slug: "cloud-location-finder"
feature_name: "Latency data between location types"
feature_slug: "latency-data-between-location-types"
latest_feature_date: "2025-12-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.services.cloud_location_finder.CloudLocationFinderAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.services.cloud_location_finder.CloudLocationFinderClient"
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.services.cloud_location_finder.pagers.ListCloudLocationsAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.services.cloud_location_finder.pagers.ListCloudLocationsPager"
keywords:
  - "latency"
  - "between"
  - "location"
  - "types"
  - "finder"
  - "provides"
  - "for"
  - "first"
---

# Latency data between location types

Product: Cloud Location Finder
Coverage: MEDIUM

## Step 02 Summary

Cloud Location Finder provides latency data for first-party to first-party and third-party to third-party locations.

## Extended Definition

Cloud Location Finder provides latency data for first-party to first-party and third-party to third-party locations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.services.cloud_location_finder.CloudLocationFinderAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.services.cloud_location_finder.CloudLocationFinderAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.services.cloud_location_finder.CloudLocationFinderClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.services.cloud_location_finder.CloudLocationFinderClient)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.services.cloud_location_finder.pagers.ListCloudLocationsAsyncPager](https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.services.cloud_location_finder.pagers.ListCloudLocationsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.services.cloud_location_finder.pagers.ListCloudLocationsPager](https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.services.cloud_location_finder.pagers.ListCloudLocationsPager)

## Supporting Pages

### "Class CloudLocationFinderAsyncClient (0.4.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.services.cloud_location_finder.CloudLocationFinderAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.services.cloud_location_finder.CloudLocationFinderAsyncClient)
- Source ID: `site-python-reference`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SearchCloudLocationsRequest ( parent="parent value", source cloud location="source cloud location value", ) Make the request page result = client. search cloud locations (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.locationfinder v1.types.SearchCloudLocationsRequest , dict]] The request object.
- ListCloudLocationsRequest ( parent="parent value", ) Make the request page result = client. list cloud locations (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.locationfinder v1.types.ListCloudLocationsRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import locationfinder v1 async def sample search cloud locations(): Create a client client = locationfinder v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import locationfinder v1 async def sample list cloud locations(): Create a client client = locationfinder v1 .

### "Class CloudLocationFinderClient (0.4.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.services.cloud_location_finder.CloudLocationFinderClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.services.cloud_location_finder.CloudLocationFinderClient)
- Source ID: `site-python-reference`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SearchCloudLocationsRequest ( parent="parent value", source cloud location="source cloud location value", ) Make the request page result = client. search cloud locations (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.locationfinder v1.types.SearchCloudLocationsRequest , dict] The request object.
- ListCloudLocationsRequest ( parent="parent value", ) Make the request page result = client. list cloud locations (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.locationfinder v1.types.ListCloudLocationsRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import locationfinder v1 def sample search cloud locations(): Create a client client = locationfinder v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import locationfinder v1 def sample list cloud locations(): Create a client client = locationfinder v1 .

### "Class ListCloudLocationsAsyncPager (0.4.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.services.cloud_location_finder.pagers.ListCloudLocationsAsyncPager](https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.services.cloud_location_finder.pagers.ListCloudLocationsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.locationfinder v1.types.ListCloudLocationsRequest The initial request object. response google.cloud.locationfinder v1.types.ListCloudLocationsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListCloudLocationsResponse ], ], request : google . cloud . locationfinder v1 . types . cloud location .
- ListCloudLocationsResponse ], ], request : google . cloud . locationfinder v1 . types . cloud location .
- ListCloudLocationsRequest , response : google . cloud . locationfinder v1 . types . cloud location .

### "Class ListCloudLocationsPager (0.4.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.services.cloud_location_finder.pagers.ListCloudLocationsPager](https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.services.cloud_location_finder.pagers.ListCloudLocationsPager)
- Source ID: `site-python-reference`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.locationfinder v1.types.ListCloudLocationsRequest The initial request object. response google.cloud.locationfinder v1.types.ListCloudLocationsResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListCloudLocationsResponse , ], request : google . cloud . locationfinder v1 . types . cloud location .
- ListCloudLocationsResponse , ], request : google . cloud . locationfinder v1 . types . cloud location .
- ListCloudLocationsRequest , response : google . cloud . locationfinder v1 . types . cloud location .

