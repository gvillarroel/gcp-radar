---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.126Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "New alerting policy creation UI"
feature_slug: "new-alerting-policy-creation-ui"
latest_feature_date: "2021-08-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceClient"
keywords:
  - "new"
  - "alerting"
  - "policy"
  - "creation"
  - "ui"
  - "interface"
  - "provides"
  - "finer"
---

# New alerting policy creation UI

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

A new alerting policy creation interface provides finer-grained control over metric selection in alerting conditions.

## Extended Definition

A new alerting policy creation interface provides finer-grained control over metric selection in alerting conditions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceClient)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- The new interface provides a style update and simplifies building a query by automatically configuring your aggregation settings.
- The new interface provides a style update and simplifies building a query by automatically configuring your aggregation settings.
- July 13, 2021 Change Metrics Explorer, a stand-alone charting tool that lets you quickly chart and explore time-series data, has a new interface and supports enhanced aggregation options.
- June 03, 2022 Feature You can now add, edit, and remove alerting policy user labels by using the Cloud console when you use the preview alerting interface.

### "Class AlertPolicyServiceAsyncClient (2.30.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- This gives you continuity with the former policy in your notifications and incidents. - Conditions in the new policy will keep their former [CONDITION ID] if the supplied condition includes the name field with that [CONDITION ID] .
- You can either replace the entire policy with a new one or replace only certain fields in the current alerting policy by specifying the fields to be updated via updateMask .
- AlertPolicy Creates a new alerting policy.
- Exceptions Type Description google.auth.exceptions.MutualTlsChannelError If mutual TLS transport creation failed for any reason. alert policy condition path alert policy condition path ( project : str , alert policy : str , condition : str ) - > str Returns a fully-qualified alert policy condition string. alert policy path alert policy path ( project : str , alert policy : str ) - > str Returns a fully-qualified alert policy string. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create alert policy create alert policy ( request : typing .

### "Class AlertPolicyServiceClient (2.30.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceClient)
- Source ID: `site-python-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- This gives you continuity with the former policy in your notifications and incidents. - Conditions in the new policy will keep their former [CONDITION ID] if the supplied condition includes the name field with that [CONDITION ID] .
- You can either replace the entire policy with a new one or replace only certain fields in the current alerting policy by specifying the fields to be updated via updateMask .
- AlertPolicy Creates a new alerting policy.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import monitoring v3 def sample create alert policy(): Create a client client = monitoring v3 .

