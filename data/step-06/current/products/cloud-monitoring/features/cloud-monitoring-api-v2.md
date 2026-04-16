---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.020Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Cloud Monitoring API v2"
feature_slug: "cloud-monitoring-api-v2"
latest_feature_date: "2017-11-05"
deprecation_date: "2017-08"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.NotificationChannelServiceClient"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.query.Query"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient"
keywords:
  - "monitoring"
  - "v2"
  - "was"
  - "deprecated"
  - "later"
  - "turned"
  - "down"
  - "2017"
---

# Cloud Monitoring API v2

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Cloud Monitoring API v2 was deprecated and later turned down; deprecated on 2017-08.

## Extended Definition

Cloud Monitoring API v2 was deprecated and later turned down; deprecated on 2017-08.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.NotificationChannelServiceClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.NotificationChannelServiceClient)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.query.Query](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.query.Query)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient)

## Supporting Pages

### "Class NotificationChannelServiceClient (2.30.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.NotificationChannelServiceClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.NotificationChannelServiceClient)
- Source ID: `site-python-reference`
- Final score: 59
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- There is no guarantee that the verification codes returned by this method will be of a similar structure or form as the ones that are delivered to the channel via SendNotificationChannelVerificationCode; while VerifyNotificationChannel() will recognize both the codes delivered via SendNotificationChannelVerificationCode() and returned from GetNotificationChannelVerificationCode(), it is typically the case that the verification codes delivered via SendNotificationChannelVerificationCode() will be shorter and also have a shorter expiration (e.g. codes such as "G-123456") whereas GetVerificationCode() will typically return a much longer, websafe base 64 encoded string that has a longer expiration time.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import monitoring v3 def sample send notification channel verification code(): Create a client client = monitoring v3 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import monitoring v3 def sample get notification channel verification code(): Create a client client = monitoring v3 .

### Class Query (2.30.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.query.Query](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.query.Query)
- Source ID: `site-python-reference`
- Final score: 59
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
- For example, you could request an aggregated time series for each combination of project and zone as follows:: from google.cloud import monitoring query = query . reduce (monitoring.Aggregation.Reducer.REDUCE MEAN, 'resource.project id', 'resource.zone') Parameters Name Description cross series reducer str or Reducer The approach to be used to combine time series.
- Example:: from google.cloud import monitoring query = query . align ( monitoring.Aggregation.Aligner.ALIGN MEAN, minutes=5) It is also possible to specify the aligner as a literal string:: query = query.align('ALIGN MEAN', minutes=5) Parameters Name Description per series aligner str or Aligner The approach to be used to align individual time series.
- Returns Type Description Query The new query object. .. defined resource types: https://cloud.google.com/monitoring/api/v3/monitored-resources Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Class MetricServiceClient (2.30.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient)
- Source ID: `site-python-reference`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- A monitoring filter https://cloud.google.com/monitoring/api/v3/filters that specifies which time series should be returned.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import monitoring v3 def sample list monitored resource descriptors(): Create a client client = monitoring v3 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import monitoring v3 def sample get monitored resource descriptor(): Create a client client = monitoring v3 .

