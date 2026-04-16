---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.061Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Alerting Policy Editor UI"
feature_slug: "alerting-policy-editor-ui"
latest_feature_date: "2016-10-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceClient"
keywords:
  - "alerting"
  - "policy"
  - "editor"
  - "ui"
  - "streamlined"
  - "user"
  - "interface"
  - "supports"
---

# Alerting Policy Editor UI

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

A streamlined user interface supports creating and editing alerting policies.

## Extended Definition

A streamlined user interface supports creating and editing alerting policies.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceClient)

## Supporting Pages

### "Set up Google Cloud Observability for Application Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- These labels identify your application and your service or workload: apphub application location apphub application id apphub service id or apphub workload id You can also add user labels to an alerting policy by using the Google Cloud CLI, Terraform, or the Cloud Monitoring API.
- Only configure scopes To get the permissions that you need to configure the observability scope, ask your administrator to grant you the following IAM roles: Observability Editor ( roles/observability.editor ) on your App Hub host project or management project Logs Configuration Writer ( roles/logging.configWriter ) on your App Hub host project or management project Monitoring admin ( roles/monitoring.admin ) on your App Hub host project or management project and on each project that you want to add to the metrics scope Cloud Trace User ( roles/cloudtrace.user ) on your App Hub host project or management project App Hub viewer ( roles/apphub.viewer ) on your App Hub host project or management project For more information about granting roles, see Manage access to projects, folders, and organizations .
- To associate an alerting policy with a workload or service by using the Google Cloud console, do the following: In the Google Cloud console, go to the notifications Alerting page: Go to Alerting If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- Associate an alerting policy with an App Hub application To view your alerting policies from the context of Application Monitoring, you must associate them with a service or workload by adding application-specific labels to the alerting policy.

### "Class AlertPolicyServiceAsyncClient (2.30.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- The format is: :: projects/[PROJECT ID OR NUMBER] Note that this field names the parent container in which the alerting policy will be written, not the name of the created policy. name\ must be a host project of a Metrics Scope, otherwise INVALID ARGUMENT error will return.
- If this field is not empty, each listed field in the existing alerting policy is set to the value of the corresponding field in the supplied policy ( alert policy ), or to the field's default value if the field is not in the supplied alerting policy.
- The alerting policy that is returned will have a name that contains a normalized representation of this name as a prefix but adds a suffix of the form /alertPolicies/[ALERT POLICY ID] , identifying the policy in the container.
- An alerting policy is a description of the conditions under which some aspect of your system is considered to be "unhealthy" and the ways to notify people or services about this state.

### "Class AlertPolicyServiceClient (2.30.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceClient)
- Source ID: `site-python-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- The format is: :: projects/[PROJECT ID OR NUMBER] Note that this field names the parent container in which the alerting policy will be written, not the name of the created policy. name\ must be a host project of a Metrics Scope, otherwise INVALID ARGUMENT error will return.
- If this field is not empty, each listed field in the existing alerting policy is set to the value of the corresponding field in the supplied policy ( alert policy ), or to the field's default value if the field is not in the supplied alerting policy.
- The alerting policy that is returned will have a name that contains a normalized representation of this name as a prefix but adds a suffix of the form /alertPolicies/[ALERT POLICY ID] , identifying the policy in the container.
- An alerting policy is a description of the conditions under which some aspect of your system is considered to be "unhealthy" and the ways to notify people or services about this state.

