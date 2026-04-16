---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.793Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Custom organization policies for Monitoring resources"
feature_slug: "custom-organization-policies-for-monitoring-resources"
latest_feature_date: "2025-02-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/custom-constraints"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.NotificationChannelServiceClient"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies"
keywords:
  - "custom"
  - "organization"
  - "policies"
  - "monitoring"
  - "resources"
  - "supports"
  - "alerting"
  - "notification"
---

# Custom organization policies for Monitoring resources

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Cloud Monitoring supports custom organization policies for alerting policies, notification channels, and snoozes.

## Extended Definition

Cloud Monitoring supports custom organization policies for alerting policies, notification channels, and snoozes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/custom-constraints](https://docs.cloud.google.com/monitoring/docs/custom-constraints)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.NotificationChannelServiceClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.NotificationChannelServiceClient)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)

## Supporting Pages

### "Class NotificationChannelServiceClient (2.30.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.NotificationChannelServiceClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.notification_channel_service.NotificationChannelServiceClient)
- Source ID: `site-python-reference`
- Final score: 41
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If false, this operation will fail if the notification channel is referenced by existing alerting policies.
- Exiting the with block will CLOSE the transport and may cause errors in other clients! common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create notification channel create notification channel ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import monitoring v3 def sample send notification channel verification code(): Create a client client = monitoring v3 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import monitoring v3 def sample get notification channel verification code(): Create a client client = monitoring v3 .

### "Use custom organization policies \_|\_ Cloud Monitoring \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/docs/custom-constraints](https://docs.cloud.google.com/monitoring/docs/custom-constraints)
- Source ID: `site-docs-reference`
- Final score: 41
- Re-rank relevance: N/A

Evidence snippets:
- Description Constraint syntax Alerting policies must have only one condition actionType : DENY condition : "resource.conditions.size() > 1" description : Requires alerting policies to have only one condition. displayName : Alerting policies must have only one condition methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.oneCondition resourceTypes : - monitoring.googleapis.com/AlertPolicy Alerting policies must use at least two notification channels actionType : DENY condition : "resource.notificationChannels.size() < 2" description : Alerting policies must use at least two notification channels. displayName : Policies must have a backup notification channel methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.alertOnTwoChannels resourceTypes : - monitoring.googleapis.com/AlertPolicy Only allow email notification channels actionType : DENY condition : "resource.type != 'email'" description : Requires notification channels to use only the email channel type. displayName : Always use email for notification channels methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.emailChannelsOnly resourceTypes : - monitoring.googleapis.com/NotificationChannel Snoozes must be less than one hour actionType : DENY condition : "int(resource.interval.endTime) > int(resource.interval.startTime) + 3600" description : Requires snoozes to be under 1 hour. displayName : Snooze must be less than 1 hour methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.setMaxSnooze resourceTypes : - monitoring.googleapis.com/Snooze Cloud Monitoring supported resources The following table lists the Cloud Monitoring resources that you can reference in custom constraints.
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: monitoring.googleapis.com/AlertPolicy monitoring.googleapis.com/NotificationChannel monitoring.googleapis.com/Snooze To learn more about Organization Policy, see Custom organization policies .
- Apply the constraint: gcloud org-policies set-custom-constraint /constraint-alert-doc-has-project.yaml Verify that the constraint exists: gcloud org-policies list-custom-constraints --organization = ORGANIZATION ID The output is similar to the following: CUSTOM CONSTRAINT: custom.alertDocHasProject ACTION TYPE: DENY METHOD TYPES: CREATE,UPDATE RESOURCE TYPES: monitoring.googleapis.com/AlertPolicy DISPLAY NAME: Alerting policy documentation must include the project name.
- Resource Field monitoring.googleapis.com/AlertPolicy resource.alertStrategy.autoClose resource.alertStrategy.notificationChannelStrategy.notificationChannelNames resource.alertStrategy.notificationChannelStrategy.renotifyInterval resource.alertStrategy.notificationRateLimit.period resource.combiner resource.conditions.conditionAbsent.aggregations.alignmentPeriod resource.conditions.conditionAbsent.aggregations.crossSeriesReducer resource.conditions.conditionAbsent.aggregations.groupByFields resource.conditions.conditionAbsent.aggregations.perSeriesAligner resource.conditions.conditionAbsent.duration resource.conditions.conditionAbsent.filter resource.conditions.conditionAbsent.trigger.count resource.conditions.conditionAbsent.trigger.percent resource.conditions.conditionMatchedLog.filter resource.conditions.conditionMatchedLog.labelExtractors resource.conditions.conditionMonitoringQueryLanguage.duration resource.conditions.conditionMonitoringQueryLanguage.evaluationMissingData resource.conditions.conditionMonitoringQueryLanguage.query resource.conditions.conditionMonitoringQueryLanguage.trigger.count resource.conditions.conditionMonitoringQueryLanguage.trigger.percent resource.conditions.conditionPrometheusQueryLanguage.alertRule resource.conditions.conditionPrometheusQueryLanguage.duration resource.conditions.conditionPrometheusQueryLanguage.evaluationInterval resource.conditions.conditionPrometheusQueryLanguage.labels resource.conditions.conditionPrometheusQueryLanguage.query resource.conditions.conditionPrometheusQueryLanguage.ruleGroup resource.conditions.conditionSql.booleanTest.column resource.conditions.conditionSql.daily.periodicity resource.conditions.conditionSql.hourly.minuteOffset resource.conditions.conditionSql.hourly.periodicity resource.conditions.conditionSql.minutes.periodicity resource.conditions.conditionSql.query resource.conditions.conditionSql.rowCountTest.comparison resource.conditions.conditionSql.rowCountTest.threshold resource.conditions.conditionThreshold.aggregations.alignmentPeriod resource.conditions.conditionThreshold.aggregations.crossSeriesReducer resource.conditions.conditionThreshold.aggregations.groupByFields resource.conditions.conditionThreshold.aggregations.perSeriesAligner resource.conditions.conditionThreshold.comparison resource.conditions.conditionThreshold.denominatorAggregations.alignmentPeriod resource.conditions.conditionThreshold.denominatorAggregations.crossSeriesReducer resource.conditions.conditionThreshold.denominatorAggregations.groupByFields resource.conditions.conditionThreshold.denominatorAggregations.perSeriesAligner resource.conditions.conditionThreshold.denominatorFilter resource.conditions.conditionThreshold.duration resource.conditions.conditionThreshold.evaluationMissingData resource.conditions.conditionThreshold.filter resource.conditions.conditionThreshold.forecastOptions.forecastHorizon resource.conditions.conditionThreshold.thresholdValue resource.conditions.conditionThreshold.trigger.count resource.conditions.conditionThreshold.trigger.percent resource.conditions.displayName resource.conditions.name resource.displayName resource.documentation.content resource.documentation.links.displayName resource.documentation.links.url resource.documentation.mimeType resource.documentation.subject resource.enabled resource.name resource.notificationChannels resource.severity monitoring.googleapis.com/NotificationChannel resource.description resource.displayName resource.enabled resource.type monitoring.googleapis.com/Snooze resource.criteria.policies resource.displayName resource.interval.endTime resource.interval.startTime What's next Learn more about Organization Policy Service .

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-iam-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Grant roles required to use VM Extension Manager To get the permissions that you need to create, view, modify, and delete VM extension policies, ask your administrator to grant you the following IAM roles on the project: To create extension policies: VM Extension Policy Admin ( roles/compute.vmExtensionPolicyAdmin ) To view extension policies: VM Extension Policy Viewer ( roles/compute.vmExtensionPolicyViewer ) VM Extension Policy Admin ( roles/compute.vmExtensionPolicyAdmin ) To modify extension policies: VM Extension Policy Admin ( roles/compute.vmExtensionPolicyAdmin ) To delete extension policies: VM Extension Policy Admin ( roles/compute.vmExtensionPolicyAdmin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create, view, modify, and delete VM extension policies: To create extension policies: compute.vmExtensionPolicies.create To view extension policies: compute.vmExtensionPolicies.list To view details of an extension policy: compute.vmExtensionPolicies.get To modify extension policies: compute.vmExtensionPolicies.update To delete extension policies: compute.vmExtensionPolicies.delete You might also be able to get these permissions with custom roles or other predefined roles .
- To update an extension policy that uses a custom rollout plan, use the following gcloud beta compute global-vm-extension-policies update command: gcloud beta compute global-vm-extension-policies update POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --rollout-custom-plan=projects/ PROJECT ID /locations/global/rolloutPlans/ NEW CUSTOM PLAN NAME \ --rollout-retry-uuid= UUID Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.
- Enable the APIs Grant roles required to use the Ops Agent To get the permissions that you need to use the Ops Agent to write logs and metrics, ask your administrator to grant you the following IAM roles on your service account: To write logs: Logging Logs Writer ( roles/logging.logWriter ) To write metrics: Monitoring Metric Writer ( roles/monitoring.metricWriter ) For more information about granting roles, see Manage access to projects, folders, and organizations .

