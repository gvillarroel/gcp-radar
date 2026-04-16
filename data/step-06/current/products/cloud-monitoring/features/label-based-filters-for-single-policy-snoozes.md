---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.783Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Label-based filters for single-policy snoozes"
feature_slug: "label-based-filters-for-single-policy-snoozes"
latest_feature_date: "2025-05-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceClient"
keywords:
  - "label"
  - "based"
  - "filters"
  - "single"
  - "policy"
  - "snoozes"
  - "alerting"
  - "can"
---

# Label-based filters for single-policy snoozes

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Single alerting policy snoozes can use resource, metric, and metadata labels to filter applicable incidents.

## Extended Definition

Single alerting policy snoozes can use resource, metric, and metadata labels to filter applicable incidents.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceClient)

## Supporting Pages

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- You can only select one quick filter at a time, so you can't list only active metrics that appear in neither an alerting policy or a custom dashboard by using quick filters.
- Create alerts based on metric ingestion To be notified of a spike, dip, or trend in the metric collection rates for your billable metrics, create an alerting policy.
- For example, to list active metrics that appear in no alerting policies and in no custom dashboards, add the following filters to the filter bar: Status: Active Alert Policies: (Empty) Custom Dashboards: (Empty) By default, when you add multiple filters, the table includes a row when the row meets all filters.
- To create an alerting policy that monitors a metric collection rate, do the following: In the Google Cloud console, go to the query stats Metrics management page: Go to Metrics management If you use the search bar to find this page, then select the result whose subheading is Monitoring .

### "Class AlertPolicyServiceAsyncClient (2.30.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To retrieve a single alerting policy by name, use the GetAlertPolicy][google.monitoring.v3.AlertPolicyService.GetAlertPolicy] operation, instead.
- AlertPolicy Gets a single alerting policy.
- The format is: :: projects/[PROJECT ID OR NUMBER] Note that this field names the parent container in which the alerting policy will be written, not the name of the created policy. name\ must be a host project of a Metrics Scope, otherwise INVALID ARGUMENT error will return.
- If this field is not empty, each listed field in the existing alerting policy is set to the value of the corresponding field in the supplied policy ( alert policy ), or to the field's default value if the field is not in the supplied alerting policy.

### "Class AlertPolicyServiceClient (2.30.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceClient)
- Source ID: `site-python-reference`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To retrieve a single alerting policy by name, use the GetAlertPolicy][google.monitoring.v3.AlertPolicyService.GetAlertPolicy] operation, instead.
- AlertPolicy Gets a single alerting policy.
- The format is: :: projects/[PROJECT ID OR NUMBER] Note that this field names the parent container in which the alerting policy will be written, not the name of the created policy. name\ must be a host project of a Metrics Scope, otherwise INVALID ARGUMENT error will return.
- If this field is not empty, each listed field in the existing alerting policy is set to the value of the corresponding field in the supplied policy ( alert policy ), or to the field's default value if the field is not in the supplied alerting policy.

