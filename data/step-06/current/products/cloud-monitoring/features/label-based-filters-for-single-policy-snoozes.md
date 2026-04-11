---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.082Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Label-based filters for single-policy snoozes"
feature_slug: "label-based-filters-for-single-policy-snoozes"
latest_feature_date: "2025-05-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient"
keywords:
  - "label"
  - "based"
  - "filters"
  - "for"
  - "single"
  - "policy"
  - "snoozes"
  - "alerting"
---

# Label-based filters for single-policy snoozes

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Single alerting policy snoozes can use resource, metric, and metadata labels to filter applicable incidents.

## Extended Definition

Single alerting policy snoozes can use resource, metric, and metadata labels to filter applicable incidents.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- May 06, 2025 Feature When you create a snooze for a single alerting policy, you can now use resource, metric, and metadata label types to filter applicable incidents.
- For more information about SQL-based alerting policies, see the following documents: Monitor your SQL query results with an alerting policy Incidents for SQL-based alerting policies October 14, 2024 Feature You can now use the Monitoring API to configure a metric-based alerting policy to send notifications when incidents are closed.
- To learn how you can create user-defined labels that contain severity information and attach those labels to alerting policies or incidents, see Add severity levels to an alerting policy .
- December 12, 2024 Feature You can now override the validation that checks for metric existence when you create a PromQL-based alerting policy.

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Create alerts based on metric ingestion To be notified of a spike, dip, or trend in the metric collection rates for your billable metrics, create an alerting policy.
- For example, to list active metrics that appear in no alerting policies and in no custom dashboards, add the following filters to the filter bar: Status: Active Alert Policies: (Empty) Custom Dashboards: (Empty) By default, when you add multiple filters, the table includes a row when the row meets all filters.
- If you have metrics that aren't used in an alerting policy or a custom dashboard and are never queried, then you might be paying for metrics and not be getting any observability benefit from them.
- You can only select one quick filter at a time, so you can't list only active metrics that appear in neither an alerting policy or a custom dashboard by using quick filters.

### "Class AlertPolicyServiceAsyncClient (2.30.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The format is: :: projects/[PROJECT ID OR NUMBER] Note that this field names the parent container in which the alerting policy will be written, not the name of the created policy. name\ must be a host project of a Metrics Scope, otherwise INVALID ARGUMENT error will return.
- The alerting policy that is returned will have a name that contains a normalized representation of this name as a prefix but adds a suffix of the form /alertPolicies/[ALERT POLICY ID] , identifying the policy in the container.
- To retrieve a single alerting policy by name, use the GetAlertPolicy][google.monitoring.v3.AlertPolicyService.GetAlertPolicy] operation, instead.
- For an overview of alerting policies, see Introduction to Alerting. delete alert policy delete alert policy ( request : typing .

