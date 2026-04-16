---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:32.907Z"
product_name: "Live Stream API"
product_slug: "live-stream-api"
feature_name: "DVR sessions"
feature_slug: "dvr-sessions"
latest_feature_date: "2024-11-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/livestream/docs/how-to/create-and-manage-dvr-sessions"
  - "https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient"
  - "https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.pagers.ListDvrSessionsAsyncPager"
keywords:
  - "dvr"
  - "sessions"
  - "allows"
  - "creating"
  - "for"
  - "past"
  - "current"
  - "or"
---

# DVR sessions

Product: Live Stream API
Coverage: MEDIUM

## Step 02 Summary

Allows creating DVR sessions for past, current, or future live streams.

## Extended Definition

Allows creating DVR sessions for past, current, or future live streams.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/livestream/docs/how-to/create-and-manage-dvr-sessions](https://docs.cloud.google.com/livestream/docs/how-to/create-and-manage-dvr-sessions)
- [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient)
- [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.pagers.ListDvrSessionsAsyncPager](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.pagers.ListDvrSessionsAsyncPager)

## Supporting Pages

### "Create and manage DVR sessions \_|\_ Live Stream API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/livestream/docs/how-to/create-and-manage-dvr-sessions](https://docs.cloud.google.com/livestream/docs/how-to/create-and-manage-dvr-sessions)
- Source ID: `site-iam-reference`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Prerequisites You must create the following resources before creating a DVR session: Create an input endpoint Create a channel with a retention config and manifest key Create a DVR session To create a DVR session, use the projects.locations.channels.dvrSessions.create method.
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "dvrManifests":[ { "manifestKey": "manifest hls" } ], "dvrWindows":[ { "timeInterval": { "startTime": " INTERVAL START TIME ", "endTime": " INTERVAL END TIME " } } ] } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://livestream.googleapis.com/v1/projects/ PROJECT NUMBER /locations/ LOCATION /channels/ CHANNEL ID /dvrSessions?dvr session id= DVR SESSION ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.video.livestream.v1.OperationMetadata", "createTime": CREATE TIME , "target": "projects/ PROJECT NUMBER /locations/ LOCATION /channels/ CHANNEL ID /dvrSessions/ DVR SESSION ID ", "verb": "create", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } This command creates a long-running operation (LRO) that you can use to track the progress of your request.
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "dvrWindows":[ { "timeInterval": { "startTime": " INTERVAL START TIME ", "endTime": " INTERVAL END TIME " } } ] } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://livestream.googleapis.com/v1/projects/ PROJECT NUMBER /locations/ LOCATION /channels/ CHANNEL ID /dvrSessions/ DVR SESSION ID ?updateMask=dvrWindows" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.video.livestream.v1.OperationMetadata", "createTime": CREATE TIME , "target": "projects/ PROJECT NUMBER /locations/ LOCATION /channels/ CHANNEL ID /dvrSessions/ DVR SESSION ID ", "verb": "update", "requestedCancellation": false, "apiVersion": "v1" }, "done": false } This command creates a long-running operation (LRO) that you can use to track the progress of your request.
- Run the following command in the terminal to create or overwrite this file in the current directory: cat > request.json INTERVAL START TIME ", "endTime": " INTERVAL END TIME " } } ] } EOF Then execute the following command to send your REST request: curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://livestream.googleapis.com/v1/projects/ PROJECT NUMBER /locations/ LOCATION /channels/ CHANNEL ID /dvrSessions/ DVR SESSION ID ?updateMask=dvrWindows" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

### "Class LivestreamServiceAsyncClient (1.16.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.video import live stream v1 async def sample list dvr sessions(): Create a client client = live stream v1 .
- Parent value for ListDvrSessionsRequest This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.video import live stream v1 async def sample create dvr session(): Create a client client = live stream v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.video import live stream v1 async def sample delete dvr session(): Create a client client = live stream v1 .

### "Class LivestreamServiceClient (1.16.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.LivestreamServiceClient)
- Source ID: `site-python-reference`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.video import live stream v1 def sample list dvr sessions(): Create a client client = live stream v1 .
- Parent value for ListDvrSessionsRequest This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.video import live stream v1 def sample create dvr session(): Create a client client = live stream v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.video import live stream v1 def sample delete dvr session(): Create a client client = live stream v1 .

### "Class ListDvrSessionsAsyncPager (1.16.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.pagers.ListDvrSessionsAsyncPager](https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.services.livestream_service.pagers.ListDvrSessionsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.video.live stream v1.types.ListDvrSessionsRequest The initial request object. response google.cloud.video.live stream v1.types.ListDvrSessionsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Union [ str , bytes ]]] = () ) A pager for iterating through list dvr sessions requests.
- Home Documentation Developer tools Python Client libraries Send feedback Class ListDvrSessionsAsyncPager (1.16.0) Stay organized with collections Save and categorize content based on your preferences.
- If there are more pages, the aiter method will make additional ListDvrSessions requests and continue to iterate through the dvr sessions field on the corresponding responses.

