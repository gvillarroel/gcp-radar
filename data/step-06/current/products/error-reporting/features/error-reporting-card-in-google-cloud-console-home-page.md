---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:09:42.698Z"
product_name: "Error Reporting"
product_slug: "error-reporting"
feature_name: "Error Reporting card in Google Cloud Console home page"
feature_slug: "error-reporting-card-in-google-cloud-console-home-page"
latest_feature_date: "2016-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/error-reporting/docs/notifications"
  - "https://docs.cloud.google.com/error-reporting/docs/check-app-crash"
  - "https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_stats_service.pagers.ListEventsAsyncPager"
keywords:
  - "error"
  - "reporting"
  - "card"
  - "console"
  - "home"
  - "page"
  - "now"
  - "includes"
---

# Error Reporting card in Google Cloud Console home page

Product: Error Reporting
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud console home page now includes an Error Reporting card.

## Extended Definition

The Google Cloud console home page now includes an Error Reporting card.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/error-reporting/docs/notifications](https://docs.cloud.google.com/error-reporting/docs/notifications)
- [https://docs.cloud.google.com/error-reporting/docs/check-app-crash](https://docs.cloud.google.com/error-reporting/docs/check-app-crash)
- [https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_stats_service.pagers.ListEventsAsyncPager](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_stats_service.pagers.ListEventsAsyncPager)

## Supporting Pages

### "Configure and manage notifications \_|\_ Error Reporting \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/error-reporting/docs/notifications](https://docs.cloud.google.com/error-reporting/docs/notifications)
- Source ID: `site-docs-reference-required-1`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Google Cloud console, go to the Error Reporting page: Go to Error Reporting You can also find this page by using the search bar.
- Webhook schema To view the Webhook schema structure for Error Reporting, click the following: Schema structure, version 1.0 { "version" : "1.0", "subject" : string, description of the new or reopened error group. "group info" : { "project id" : string, project that owns the error group. "detail link" : string, link to the Error Reporting Details page for the error group. }, "exception info" : { "type" : string, type of the exception logged in the event. "message" : string, exception message for the event. }, "event info" : { "log message" : string "request method" : string "request url" : string "referrer" : string "user agent" : string "service" : string "version" : string "response status" : string }, } Basic authentication In addition to the webhook request sent by Cloud Monitoring, basic authentication utilizes the HTTP specification for the username and password.
- Select notification channels through the Google Cloud console To select an existing notification channel, you must have one of the following roles: Error Reporting User Error Reporting Admin Project Editor Project Owner To select where you want to send notifications when new error groups occur, complete the following steps.
- Home Documentation Observability Error Reporting Guides Send feedback Configure and manage notifications Stay organized with collections Save and categorize content based on your preferences.

### "Quickstart: Check a crashed app for errors by using Error Reporting \_|\_\

- URL: [https://docs.cloud.google.com/error-reporting/docs/check-app-crash](https://docs.cloud.google.com/error-reporting/docs/check-app-crash)
- Source ID: `site-docs-reference-required-1`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Notifications aren't sent when there are new occurrences of existing errors: In the Google Cloud console, go to the Error Reporting page: Go to Error Reporting You can also find this page by using the search bar.
- View the errors in Error Reporting In the Google Cloud console, go to the Error Reporting page: Go to Error Reporting You can also find this page by using the search bar.
- The following screenshot shows a sample error reporting page: Click the error name to view the error details page, which contains all of the available information about an error.
- Home Documentation Observability Error Reporting Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### "Class ListEventsAsyncPager (1.15.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_stats_service.pagers.ListEventsAsyncPager](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_stats_service.pagers.ListEventsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.errorreporting v1beta1.types.ListEventsRequest The initial request object. response google.cloud.errorreporting v1beta1.types.ListEventsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Home Documentation Developer tools Python Client libraries Send feedback Class ListEventsAsyncPager (1.15.0) Stay organized with collections Save and categorize content based on your preferences.
- If there are more pages, the aiter method will make additional ListEvents requests and continue to iterate through the error events field on the corresponding responses.
- ListEventsResponse ], ], request : google . cloud . errorreporting v1beta1 . types . error stats service .

