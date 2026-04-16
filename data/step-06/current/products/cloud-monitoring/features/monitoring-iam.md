---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.029Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Monitoring IAM"
feature_slug: "monitoring-iam"
latest_feature_date: "2017-07-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/custom-constraints"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
keywords:
  - "monitoring"
  - "iam"
  - "provides"
  - "complete"
  - "including"
  - "predefined"
  - "custom"
  - "roles"
---

# Monitoring IAM

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Monitoring provides complete IAM support including predefined and custom roles.

## Extended Definition

Monitoring provides complete IAM support including predefined and custom roles.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/custom-constraints](https://docs.cloud.google.com/monitoring/docs/custom-constraints)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)

## Supporting Pages

### "Use custom organization policies \_|\_ Cloud Monitoring \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/docs/custom-constraints](https://docs.cloud.google.com/monitoring/docs/custom-constraints)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- You might also be able to get the required permissions through custom roles or other predefined roles .
- Description Constraint syntax Alerting policies must have only one condition actionType : DENY condition : "resource.conditions.size() > 1" description : Requires alerting policies to have only one condition. displayName : Alerting policies must have only one condition methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.oneCondition resourceTypes : - monitoring.googleapis.com/AlertPolicy Alerting policies must use at least two notification channels actionType : DENY condition : "resource.notificationChannels.size() < 2" description : Alerting policies must use at least two notification channels. displayName : Policies must have a backup notification channel methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.alertOnTwoChannels resourceTypes : - monitoring.googleapis.com/AlertPolicy Only allow email notification channels actionType : DENY condition : "resource.type != 'email'" description : Requires notification channels to use only the email channel type. displayName : Always use email for notification channels methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.emailChannelsOnly resourceTypes : - monitoring.googleapis.com/NotificationChannel Snoozes must be less than one hour actionType : DENY condition : "int(resource.interval.endTime) > int(resource.interval.startTime) + 3600" description : Requires snoozes to be under 1 hour. displayName : Snooze must be less than 1 hour methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.setMaxSnooze resourceTypes : - monitoring.googleapis.com/Snooze Cloud Monitoring supported resources The following table lists the Cloud Monitoring resources that you can reference in custom constraints.
- Create the constraint Save the following file as constraint-alert-doc-has-project.yaml : actionType : DENY condition : resource.documentation.content.contains('${resource.project}') description : Requires documentation to include the project name. displayName : Alerting policy documentation must include project name. methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.alertDocHasProject resourceTypes : - monitoring.googleapis.com/AlertPolicy Replace ORGANIZATION ID with your organization ID.
- Apply the constraint: gcloud org-policies set-custom-constraint /constraint-alert-doc-has-project.yaml Verify that the constraint exists: gcloud org-policies list-custom-constraints --organization = ORGANIZATION ID The output is similar to the following: CUSTOM CONSTRAINT: custom.alertDocHasProject ACTION TYPE: DENY METHOD TYPES: CREATE,UPDATE RESOURCE TYPES: monitoring.googleapis.com/AlertPolicy DISPLAY NAME: Alerting policy documentation must include the project name.

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- You might also be able to get the required permissions through custom roles or other predefined roles .
- This is the project that you use to view your application's telemetry data: To get the permissions that you need to view log and metric data, and to create alerting policies and customize dashboards, ask your administrator to grant you the following IAM roles: Logs Viewer ( roles/logging.viewer ) on your App Hub host project or management project and any other projects listed in its default log scope.
- The Application Monitoring dashboards display the following: Details about your registered applications, including their location, criticality, and registered services ( ) and workloads ( ).
- For principals who don't need to create or modify alerting policies or dashboards, consider granting the Monitoring Viewer role ( roles/monitoring.viewer ).

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Metrics used or not used in a custom dashboard in the current Google Cloud project.These filters don't include metrics that are used in predefined dashboards provided by Cloud Monitoring.
- You might also be able to get the required permissions through custom roles or other predefined roles .
- You might also be able to get the required permissions through custom roles or other predefined roles .
- What's next Use the Ops Agent to collect metrics: Configure the Ops Agent Monitor third-party applications Collect Prometheus metrics Collect OTLP telemetry Use the Google Cloud Managed Service for Prometheus to collect metrics: Use managed collection Use self-deployed collection Use the OpenTelemetry Collector Use custom metrics in Cloud Run Collect on-premises and hybrid-cloud metrics by using BindPlane Create user-defined metrics by using the Monitoring API Google Cloud Observability pricing Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

