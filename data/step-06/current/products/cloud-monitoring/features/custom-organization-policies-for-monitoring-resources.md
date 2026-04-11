---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.085Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Custom organization policies for Monitoring resources"
feature_slug: "custom-organization-policies-for-monitoring-resources"
latest_feature_date: "2025-02-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/custom-constraints"
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
keywords:
  - "custom"
  - "organization"
  - "policies"
  - "for"
  - "monitoring"
  - "resources"
  - "supports"
  - "alerting"
---

# Custom organization policies for Monitoring resources

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Cloud Monitoring supports custom organization policies for alerting policies, notification channels, and snoozes.

## Extended Definition

Cloud Monitoring supports custom organization policies for alerting policies, notification channels, and snoozes.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/custom-constraints](https://docs.cloud.google.com/monitoring/docs/custom-constraints)
- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)

## Supporting Pages

### "Use custom organization policies \_|\_ Cloud Monitoring \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/docs/custom-constraints](https://docs.cloud.google.com/monitoring/docs/custom-constraints)
- Source ID: `site-docs-reference`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Description Constraint syntax Alerting policies must have only one condition actionType : DENY condition : "resource.conditions.size() > 1" description : Requires alerting policies to have only one condition. displayName : Alerting policies must have only one condition methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.oneCondition resourceTypes : - monitoring.googleapis.com/AlertPolicy Alerting policies must use at least two notification channels actionType : DENY condition : "resource.notificationChannels.size() < 2" description : Alerting policies must use at least two notification channels. displayName : Policies must have a backup notification channel methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.alertOnTwoChannels resourceTypes : - monitoring.googleapis.com/AlertPolicy Only allow email notification channels actionType : DENY condition : "resource.type != 'email'" description : Requires notification channels to use only the email channel type. displayName : Always use email for notification channels methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.emailChannelsOnly resourceTypes : - monitoring.googleapis.com/NotificationChannel Snoozes must be less than one hour actionType : DENY condition : "int(resource.interval.endTime) > int(resource.interval.startTime) + 3600" description : Requires snoozes to be under 1 hour. displayName : Snooze must be less than 1 hour methodTypes : - CREATE - UPDATE name : organizations/ ORGANIZATION ID /customConstraints/custom.setMaxSnooze resourceTypes : - monitoring.googleapis.com/Snooze Cloud Monitoring supported resources The following table lists the Cloud Monitoring resources that you can reference in custom constraints.
- Apply the constraint: gcloud org-policies set-custom-constraint /constraint-alert-doc-has-project.yaml Verify that the constraint exists: gcloud org-policies list-custom-constraints --organization = ORGANIZATION ID The output is similar to the following: CUSTOM CONSTRAINT: custom.alertDocHasProject ACTION TYPE: DENY METHOD TYPES: CREATE,UPDATE RESOURCE TYPES: monitoring.googleapis.com/AlertPolicy DISPLAY NAME: Alerting policy documentation must include the project name.
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: monitoring.googleapis.com/AlertPolicy monitoring.googleapis.com/NotificationChannel monitoring.googleapis.com/Snooze To learn more about Organization Policy, see Custom organization policies .
- The output is the following: Operation denied by custom org policies: ["customConstraints/alertDocHasProject": "Alerting policy documentation must include project name."] Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Change The Metrics management page in Cloud Monitoring now lets you create alerting policies and charts for metrics that have no associated alerting policies or custom dashboards.
- For more information about SQL-based alerting policies, see the following documents: Monitor your SQL query results with an alerting policy Incidents for SQL-based alerting policies October 14, 2024 Feature You can now use the Monitoring API to configure a metric-based alerting policy to send notifications when incidents are closed.
- For information about dashboards, see the following: Create and manage custom dashboards Install a dashboard template Import Grafana dashboards April 09, 2025 Feature Application Monitoring lets you monitor the resources and infrastructure from the perspective of an App Hub application.
- February 17, 2023 Feature You can now install pre-defined alerting policies for services integrated with Cloud Monitoring from the Monitoring Integrations page and from the Observability tab on the pages for Kubernetes Engine clusters and workloads.

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- For principals who don't need to create or modify alerting policies or dashboards, consider granting the Monitoring Viewer role ( roles/monitoring.viewer ).
- This is the project that you use to view your application's telemetry data: To get the permissions that you need to view log and metric data, and to create alerting policies and customize dashboards, ask your administrator to grant you the following IAM roles: Logs Viewer ( roles/logging.viewer ) on your App Hub host project or management project and any other projects listed in its default log scope.
- To get more information about your incidents and alerting policies, do the following: To find details about the alerting policy that caused the incident, click the policy name.
- Explore incidents The Incidents section of a dashboard lists open incidents for alerting policies that are associated with your application.

