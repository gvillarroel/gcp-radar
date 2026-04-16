---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.789Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Markdown support for Slack notification documentation"
feature_slug: "markdown-support-for-slack-notification-documentation"
latest_feature_date: "2025-03-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.NotificationChannelServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.pagers.ListNotificationChannelsAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.pagers.ListNotificationChannelsPager"
keywords:
  - "markdown"
  - "slack"
  - "notification"
  - "documentation"
  - "channels"
  - "supports"
  - "formatting"
---

# Markdown support for Slack notification documentation

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Documentation for Slack notification channels supports Markdown formatting.

## Extended Definition

Documentation for Slack notification channels supports Markdown formatting.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.NotificationChannelServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.NotificationChannelServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.pagers.ListNotificationChannelsAsyncPager](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.pagers.ListNotificationChannelsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.pagers.ListNotificationChannelsPager](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.pagers.ListNotificationChannelsPager)

## Supporting Pages

### "Class ListNotificationChannelsAsyncPager (2.30.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.pagers.ListNotificationChannelsAsyncPager](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.pagers.ListNotificationChannelsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Class ListNotificationChannelsAsyncPager (2.30.0) Stay organized with collections Save and categorize content based on your preferences.
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.monitoring v3.types.ListNotificationChannelsRequest The initial request object. response google.cloud.monitoring v3.types.ListNotificationChannelsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- 2.30.0 (latest) 2.29.1 2.28.0 2.27.2 2.26.0 2.25.0 2.24.0 2.23.1 2.22.2 2.21.0 2.20.0 2.19.4 2.18.0 2.17.0 2.16.0 2.15.1 2.14.2 2.13.0 2.12.0 2.11.3 2.10.1 2.9.2 2.8.0 2.7.0 2.6.0 2.5.2 2.4.2 2.3.0 2.2.1 2.1.0 2.0.1 1.1.2 1.0.0 0.36.2 0.35.0 0.34.0 0.33.0 0.32.0 ListNotificationChannelsAsyncPager ( method : typing .
- If there are more pages, the aiter method will make additional ListNotificationChannels requests and continue to iterate through the notification channels field on the corresponding responses.

### "Class ListNotificationChannelsPager (2.30.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.pagers.ListNotificationChannelsPager](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.pagers.ListNotificationChannelsPager)
- Source ID: `site-python-reference`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Class ListNotificationChannelsPager (2.30.0) Stay organized with collections Save and categorize content based on your preferences.
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.monitoring v3.types.ListNotificationChannelsRequest The initial request object. response google.cloud.monitoring v3.types.ListNotificationChannelsResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- 2.30.0 (latest) 2.29.1 2.28.0 2.27.2 2.26.0 2.25.0 2.24.0 2.23.1 2.22.2 2.21.0 2.20.0 2.19.4 2.18.0 2.17.0 2.16.0 2.15.1 2.14.2 2.13.0 2.12.0 2.11.3 2.10.1 2.9.2 2.8.0 2.7.0 2.6.0 2.5.2 2.4.2 2.3.0 2.2.1 2.1.0 2.0.1 1.1.2 1.0.0 0.36.2 0.35.0 0.34.0 0.33.0 0.32.0 ListNotificationChannelsPager ( method : typing .
- If there are more pages, the iter method will make additional ListNotificationChannels requests and continue to iterate through the notification channels field on the corresponding responses.

### "Class NotificationChannelServiceAsyncClient (2.30.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.NotificationChannelServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.NotificationChannelServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Class NotificationChannelServiceAsyncClient (2.30.0) Stay organized with collections Save and categorize content based on your preferences.
- The format is: :: projects/[PROJECT ID OR NUMBER]/notificationChannels/[CHANNEL ID] This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import monitoring v3 async def sample list notification channels(): Create a client client = monitoring v3 .
- The expected syntax is: :: projects/[PROJECT ID OR NUMBER] Note that this names https://cloud.google.com/monitoring/api/v3#project name the parent container in which to look for the descriptors; to retrieve a single descriptor by name, use the GetNotificationChannelDescriptor][google.monitoring.v3.NotificationChannelService.GetNotificationChannelDescriptor] operation, instead.

