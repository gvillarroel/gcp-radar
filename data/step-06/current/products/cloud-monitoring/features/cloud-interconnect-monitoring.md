---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.024Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Cloud Interconnect Monitoring"
feature_slug: "cloud-interconnect-monitoring"
latest_feature_date: "2017-09-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/custom-constraints"
keywords:
  - "interconnect"
  - "monitoring"
  - "supports"
  - "custom"
  - "dashboards"
  - "alerting"
  - "resources"
---

# Cloud Interconnect Monitoring

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Monitoring supports custom dashboards and alerting for Cloud Interconnect resources.

## Extended Definition

Monitoring supports custom dashboards and alerting for Cloud Interconnect resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/custom-constraints](https://docs.cloud.google.com/monitoring/docs/custom-constraints)

## Supporting Pages

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Query languages for Cloud Monitoring When you create an alerting policy or a chart, you must provide a query that describes the data that you want to monitor or chart: Google Cloud console: You can build your query by making selections from menus, or you can write a query.
- Data visualization As you instantiate Google Cloud resources or register applications with App Hub , the dashboard service automatically creates Google Cloud-managed dashboards .
- The alerting, testing, and visualization services provided by Cloud Monitoring help you answer important questions like the following: What is the load on my service?
- Incidents and notifications in Cloud Monitoring To be notified when the value of a performance metric meets criteria that you define, create an alerting policy .

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- This is the project that you use to view your application's telemetry data: To get the permissions that you need to view log and metric data, and to create alerting policies and customize dashboards, ask your administrator to grant you the following IAM roles: Logs Viewer ( roles/logging.viewer ) on your App Hub host project or management project and any other projects listed in its default log scope.
- For principals who don't need to create or modify alerting policies or dashboards, consider granting the Monitoring Viewer role ( roles/monitoring.viewer ).
- The Application Monitoring dashboards display the following: Details about your registered applications, including their location, criticality, and registered services ( ) and workloads ( ).
- This document describes how to view the dashboards that Application Monitoring creates for your App Hub applications, services, and workloads.

### "Use custom organization policies \_|\_ Cloud Monitoring \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/docs/custom-constraints](https://docs.cloud.google.com/monitoring/docs/custom-constraints)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Description Constraint syntax Alerting policies must have only one condition actionType : DENY condition : "resource.conditions.size() > 1" description : Requires alerting policies to have only one condition. displayName : Alerting policies must have only one condition methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.oneCondition resourceTypes : - monitoring.googleapis.com/AlertPolicy Alerting policies must use at least two notification channels actionType : DENY condition : "resource.notificationChannels.size() < 2" description : Alerting policies must use at least two notification channels. displayName : Policies must have a backup notification channel methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.alertOnTwoChannels resourceTypes : - monitoring.googleapis.com/AlertPolicy Only allow email notification channels actionType : DENY condition : "resource.type != 'email'" description : Requires notification channels to use only the email channel type. displayName : Always use email for notification channels methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.emailChannelsOnly resourceTypes : - monitoring.googleapis.com/NotificationChannel Snoozes must be less than one hour actionType : DENY condition : "int(resource.interval.endTime) > int(resource.interval.startTime) + 3600" description : Requires snoozes to be under 1 hour. displayName : Snooze must be less than 1 hour methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.setMaxSnooze resourceTypes : - monitoring.googleapis.com/Snooze Cloud Monitoring supported resources The following table lists the Cloud Monitoring resources that you can reference in custom constraints.
- Create the constraint Save the following file as constraint-alert-doc-has-project.yaml : actionType : DENY condition : resource.documentation.content.contains('${resource.project}') description : Requires documentation to include the project name. displayName : Alerting policy documentation must include project name. methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.alertDocHasProject resourceTypes : - monitoring.googleapis.com/AlertPolicy Replace ORGANIZATION ID with your organization ID.
- Apply the constraint: gcloud org-policies set-custom-constraint /constraint-alert-doc-has-project.yaml Verify that the constraint exists: gcloud org-policies list-custom-constraints --organization = ORGANIZATION ID The output is similar to the following: CUSTOM CONSTRAINT: custom.alertDocHasProject ACTION TYPE: DENY METHOD TYPES: CREATE,UPDATE RESOURCE TYPES: monitoring.googleapis.com/AlertPolicy DISPLAY NAME: Alerting policy documentation must include the project name.
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: monitoring.googleapis.com/AlertPolicy monitoring.googleapis.com/NotificationChannel monitoring.googleapis.com/Snooze To learn more about Organization Policy, see Custom organization policies .

