---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.846Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Google Chat space notification channels"
feature_slug: "google-chat-space-notification-channels"
latest_feature_date: "2023-10-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.NotificationChannelServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.NotificationChannelServiceClient"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.pagers.ListNotificationChannelsAsyncPager"
keywords:
  - "chat"
  - "space"
  - "notification"
  - "channels"
  - "feature"
  - "lets"
  - "monitoring"
  - "send"
---

# Google Chat space notification channels

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

This feature lets Cloud Monitoring send notifications to Google Chat spaces.

## Extended Definition

This feature lets Cloud Monitoring send notifications to Google Chat spaces.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.NotificationChannelServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.NotificationChannelServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.NotificationChannelServiceClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.NotificationChannelServiceClient)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.pagers.ListNotificationChannelsAsyncPager](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.pagers.ListNotificationChannelsAsyncPager)

## Supporting Pages

### "Class NotificationChannelServiceAsyncClient (2.30.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.NotificationChannelServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.NotificationChannelServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import monitoring v3 async def sample send notification channel verification code(): Create a client client = monitoring v3 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import monitoring v3 async def sample list notification channels(): Create a client client = monitoring v3 .
- The expected syntax is: :: projects/[PROJECT ID OR NUMBER] Note that this names https://cloud.google.com/monitoring/api/v3#project name the parent container in which to look for the descriptors; to retrieve a single descriptor by name, use the GetNotificationChannelDescriptor][google.monitoring.v3.NotificationChannelService.GetNotificationChannelDescriptor] operation, instead.
- ListNotificationChannelsRequest ( name="name value", ) Make the request page result = client. list notification channels (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.monitoring v3.types.ListNotificationChannelsRequest , dict]] The request object.

### "Class NotificationChannelServiceClient (2.30.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.NotificationChannelServiceClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.NotificationChannelServiceClient)
- Source ID: `site-python-reference`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import monitoring v3 def sample send notification channel verification code(): Create a client client = monitoring v3 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import monitoring v3 def sample list notification channels(): Create a client client = monitoring v3 .
- The expected syntax is: :: projects/[PROJECT ID OR NUMBER] Note that this names https://cloud.google.com/monitoring/api/v3#project name the parent container in which to look for the descriptors; to retrieve a single descriptor by name, use the GetNotificationChannelDescriptor][google.monitoring.v3.NotificationChannelService.GetNotificationChannelDescriptor] operation, instead.
- ListNotificationChannelsRequest ( name="name value", ) Make the request page result = client. list notification channels (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.monitoring v3.types.ListNotificationChannelsRequest , dict] The request object.

### "Class ListNotificationChannelsAsyncPager (2.30.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.pagers.ListNotificationChannelsAsyncPager](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.pagers.ListNotificationChannelsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.monitoring v3.types.ListNotificationChannelsRequest The initial request object. response google.cloud.monitoring v3.types.ListNotificationChannelsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Home Documentation Developer tools Python Client libraries Send feedback Class ListNotificationChannelsAsyncPager (2.30.0) Stay organized with collections Save and categorize content based on your preferences.
- ListNotificationChannelsResponse ], ], request : google . cloud . monitoring v3 . types . notification service .
- ListNotificationChannelsResponse ], ], request : google . cloud . monitoring v3 . types . notification service .

