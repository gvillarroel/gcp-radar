---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.992Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Pub/Sub alert notifications"
feature_slug: "pub-sub-alert-notifications"
latest_feature_date: "2020-02-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceClient"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.pagers.ListAlertPoliciesAsyncPager"
keywords:
  - "pub"
  - "sub"
  - "alert"
  - "notifications"
  - "alerting"
  - "policies"
  - "can"
  - "send"
---

# Pub/Sub alert notifications

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Alerting policies can send notifications to Cloud Pub/Sub topics.

## Extended Definition

Alerting policies can send notifications to Cloud Pub/Sub topics.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceClient)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.pagers.ListAlertPoliciesAsyncPager](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.pagers.ListAlertPoliciesAsyncPager)

## Supporting Pages

### "Class AlertPolicyServiceAsyncClient (2.30.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The alerting policy that is returned will have a name that contains a normalized representation of this name as a prefix but adds a suffix of the form /alertPolicies/[ALERT POLICY ID] , identifying the policy in the container.
- For an overview of alerting policies, see Introduction to Alerting. get mtls endpoint and cert source get mtls endpoint and cert source ( client options : typing .
- The format is: :: projects/[PROJECT ID OR NUMBER] Note that this field names the parent container in which the alerting policies to be listed are stored.
- For an overview of alerting policies, see Introduction to Alerting. delete alert policy delete alert policy ( request : typing .

### "Class AlertPolicyServiceClient (2.30.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceClient)
- Source ID: `site-python-reference`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The alerting policy that is returned will have a name that contains a normalized representation of this name as a prefix but adds a suffix of the form /alertPolicies/[ALERT POLICY ID] , identifying the policy in the container.
- For an overview of alerting policies, see Introduction to Alerting. get mtls endpoint and cert source get mtls endpoint and cert source ( client options : typing .
- The format is: :: projects/[PROJECT ID OR NUMBER] Note that this field names the parent container in which the alerting policies to be listed are stored.
- For an overview of alerting policies, see Introduction to Alerting. delete alert policy delete alert policy ( request : typing .

### "Class ListAlertPoliciesAsyncPager (2.30.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.pagers.ListAlertPoliciesAsyncPager](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.pagers.ListAlertPoliciesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Class ListAlertPoliciesAsyncPager (2.30.0) Stay organized with collections Save and categorize content based on your preferences.
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.monitoring v3.types.ListAlertPoliciesRequest The initial request object. response google.cloud.monitoring v3.types.ListAlertPoliciesResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- 2.30.0 (latest) 2.29.1 2.28.0 2.27.2 2.26.0 2.25.0 2.24.0 2.23.1 2.22.2 2.21.0 2.20.0 2.19.4 2.18.0 2.17.0 2.16.0 2.15.1 2.14.2 2.13.0 2.12.0 2.11.3 2.10.1 2.9.2 2.8.0 2.7.0 2.6.0 2.5.2 2.4.2 2.3.0 2.2.1 2.1.0 2.0.1 1.1.2 1.0.0 0.36.2 0.35.0 0.34.0 0.33.0 0.32.0 ListAlertPoliciesAsyncPager ( method : typing .
- If there are more pages, the aiter method will make additional ListAlertPolicies requests and continue to iterate through the alert policies field on the corresponding responses.

