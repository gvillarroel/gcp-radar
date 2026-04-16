---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.903Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Alerting policy user labels in console"
feature_slug: "alerting-policy-user-labels-in-console"
latest_feature_date: "2022-06-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient"
keywords:
  - "alerting"
  - "policy"
  - "user"
  - "labels"
  - "console"
  - "preview"
  - "interface"
  - "supports"
---

# Alerting policy user labels in console

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The preview alerting interface in the Cloud console supports adding, editing, and removing user labels on alerting policies.

## Extended Definition

The preview alerting interface in the Cloud console supports adding, editing, and removing user labels on alerting policies.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient)

## Supporting Pages

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- To create an alerting policy that monitors a metric collection rate, do the following: In the Google Cloud console, go to the query stats Metrics management page: Go to Metrics management If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- Authorization To get the permissions that you need to view dashboards and create alerting policies by using the Google Cloud console or to create, edit, and delete metric-exclusion rules, ask your administrator to grant you the Monitoring Editor ( roles/monitoring.editor ) IAM role on your project.
- You can list metrics that appear in no alerting policy or in no custom dashboard defined in the current Google Cloud project by selecting the No alert policies or No custom dashboards quick filter.
- If you have metrics that aren't used in an alerting policy or a custom dashboard and are never queried, then you might be paying for metrics and not be getting any observability benefit from them.

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- The dashboard that opens displays detailed information about the alerting policy, including a chart that displays the monitored data and the labels.
- To make this association, add labels to the alerting policy.
- To get more information about your incidents and alerting policies, do the following: To find details about the alerting policy that caused the incident, click the policy name.
- Google Cloud console navigation when using an app-enabled folder App Hub supports two configurations: app-enabled folder and App Hub host projects.

### "Class AlertPolicyServiceAsyncClient (2.30.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The format is: :: projects/[PROJECT ID OR NUMBER] Note that this field names the parent container in which the alerting policy will be written, not the name of the created policy. name\ must be a host project of a Metrics Scope, otherwise INVALID ARGUMENT error will return.
- If this field is not empty, each listed field in the existing alerting policy is set to the value of the corresponding field in the supplied policy ( alert policy ), or to the field's default value if the field is not in the supplied alerting policy.
- The alerting policy that is returned will have a name that contains a normalized representation of this name as a prefix but adds a suffix of the form /alertPolicies/[ALERT POLICY ID] , identifying the policy in the container.
- Examples of valid field masks include display name , documentation , documentation.content , documentation.mime type , user labels , user label.nameofkey , enabled , conditions , combiner , etc.

