---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.028Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Monitoring Admin Role"
feature_slug: "monitoring-admin-role"
latest_feature_date: "2017-07-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/access-control"
  - "https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring"
keywords:
  - "monitoring"
  - "admin"
  - "role"
  - "grants"
  - "administrative"
  - "iam"
  - "permissions"
---

# Monitoring Admin Role

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The Monitoring Admin role grants administrative IAM permissions for Monitoring.

## Extended Definition

The Monitoring Admin role grants administrative IAM permissions for Monitoring.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control)
- [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring](https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring)

## Supporting Pages

### "Set up Google Cloud Observability for Application Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Only configure scopes To get the permissions that you need to configure the observability scope, ask your administrator to grant you the following IAM roles: Observability Editor ( roles/observability.editor ) on your App Hub host project or management project Logs Configuration Writer ( roles/logging.configWriter ) on your App Hub host project or management project Monitoring admin ( roles/monitoring.admin ) on your App Hub host project or management project and on each project that you want to add to the metrics scope Cloud Trace User ( roles/cloudtrace.user ) on your App Hub host project or management project App Hub viewer ( roles/apphub.viewer ) on your App Hub host project or management project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Configure sink and scopes To get the permissions that you need to configure observability scopes and to create an aggregated log sink, ask your administrator to grant you the Organization Administrator ( roles/resourcemanager.organizationAdmin ) IAM role on your organization.
- Configure and set the default trace scope Do the following: For each project that will store your application's trace data, we recommend that you enable the Observability API: Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- For principals who don't need to create alerting policies, consider granting the Monitoring Viewer role ( roles/monitoring.viewer ).

### Control access with IAM \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control)
- Source ID: `site-iam-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Monitoring roles The following roles grant general permissions for Monitoring: Name Title Includes permissions roles/monitoring.viewer Monitoring Viewer Grants read-only access to Monitoring in the Google Cloud console and the Cloud Monitoring API. roles/monitoring.editor Monitoring Editor Grants read-write access to Monitoring in the Google Cloud console and the Cloud Monitoring API. roles/monitoring.admin Monitoring Admin Grants full access to Monitoring in the Google Cloud console and the Cloud Monitoring API.
- Metrics scope configuration roles The following roles grant general permissions for metrics scopes : Name Title Description roles/monitoring.metricsScopesViewer Monitoring metrics scopes Viewer Grants read-only access to metrics scopes. roles/monitoring.metricsScopesAdmin Monitoring metrics scopes Admin Grants read-write access to metrics scopes.
- Incident roles The following roles grant permissions only for incidents: Name Title Description roles/monitoring.cloudConsoleIncidentViewer Monitoring Cloud Console Incident Viewer Grants access to view incidents by using the Google Cloud console. roles/monitoring.cloudConsoleIncidentEditor Monitoring Cloud Console Incident Editor Grants access to view, acknowledge, and close incidents by using the Google Cloud console.
- Uptime-check configuration roles The following roles grant permissions only for uptime-check configurations: Name Title Description roles/monitoring.uptimeCheckConfigViewer Monitoring Uptime Check Configurations Viewer Grants read-only access to uptime-check configurations. roles/monitoring.uptimeCheckConfigEditor Monitoring Uptime Check Configurations Editor Grants read-write access to uptime-check configurations.

### Troubleshoot Application Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring](https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- To get the permissions that you need to save changes to a custom dashboard, ask your administrator to grant you the Monitoring Editor ( roles/monitoring.editor ) IAM role on your App Hub host project or the management project for your app-enabled folder.
- To resolve this failure, do the following: To get the permissions that you need to view log data, ask your administrator to grant you the following IAM roles: Logs Viewer ( roles/logging.viewer ) on your App Hub host project or the management project for your app-enabled folder and any other projects listed its default log scope.
- This role grants access to most log entries in the Default log bucket.
- To associate an alerting policy with a workload or service by using the Google Cloud console, do the following: In the Google Cloud console, go to the notifications Alerting page: Go to Alerting If you use the search bar to find this page, then select the result whose subheading is Monitoring .

