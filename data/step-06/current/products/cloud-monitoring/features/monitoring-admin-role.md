---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.151Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Monitoring Admin Role"
feature_slug: "monitoring-admin-role"
latest_feature_date: "2017-07-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/access-control"
  - "https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring"
  - "https://docs.cloud.google.com/monitoring/agent/monitoring/authorization"
keywords:
  - "monitoring"
  - "admin"
  - "role"
  - "the"
  - "grants"
  - "administrative"
  - "iam"
  - "permissions"
---

# Monitoring Admin Role

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

The Monitoring Admin role grants administrative IAM permissions for Monitoring.

## Extended Definition

The Monitoring Admin role grants administrative IAM permissions for Monitoring.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control)
- [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)
- [https://docs.cloud.google.com/monitoring/agent/monitoring/authorization](https://docs.cloud.google.com/monitoring/agent/monitoring/authorization)

## Supporting Pages

### Control access with IAM \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control)
- Source ID: `site-iam-reference`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Monitoring roles The following roles grant general permissions for Monitoring: Name Title Includes permissions roles/monitoring.viewer Monitoring Viewer Grants read-only access to Monitoring in the Google Cloud console and the Cloud Monitoring API. roles/monitoring.editor Monitoring Editor Grants read-write access to Monitoring in the Google Cloud console and the Cloud Monitoring API. roles/monitoring.admin Monitoring Admin Grants full access to Monitoring in the Google Cloud console and the Cloud Monitoring API.
- Metrics scope configuration roles The following roles grant general permissions for metrics scopes : Name Title Description roles/monitoring.metricsScopesViewer Monitoring metrics scopes Viewer Grants read-only access to metrics scopes. roles/monitoring.metricsScopesAdmin Monitoring metrics scopes Admin Grants read-write access to metrics scopes.
- Incident roles The following roles grant permissions only for incidents: Name Title Description roles/monitoring.cloudConsoleIncidentViewer Monitoring Cloud Console Incident Viewer Grants access to view incidents by using the Google Cloud console. roles/monitoring.cloudConsoleIncidentEditor Monitoring Cloud Console Incident Editor Grants access to view, acknowledge, and close incidents by using the Google Cloud console.
- Uptime-check configuration roles The following roles grant permissions only for uptime-check configurations: Name Title Description roles/monitoring.uptimeCheckConfigViewer Monitoring Uptime Check Configurations Viewer Grants read-only access to uptime-check configurations. roles/monitoring.uptimeCheckConfigEditor Monitoring Uptime Check Configurations Editor Grants read-write access to uptime-check configurations.

### "Set up Google Cloud Observability for Application Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Only configure scopes To get the permissions that you need to configure the observability scope, ask your administrator to grant you the following IAM roles: Observability Editor ( roles/observability.editor ) on your App Hub host project or management project Logs Configuration Writer ( roles/logging.configWriter ) on your App Hub host project or management project Monitoring admin ( roles/monitoring.admin ) on your App Hub host project or management project and on each project that you want to add to the metrics scope Cloud Trace User ( roles/cloudtrace.user ) on your App Hub host project or management project App Hub viewer ( roles/apphub.viewer ) on your App Hub host project or management project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Configure sink and scopes To get the permissions that you need to configure observability scopes and to create an aggregated log sink, ask your administrator to grant you the Organization Administrator ( roles/resourcemanager.organizationAdmin ) IAM role on your organization.
- Configure and set the default trace scope Do the following: For each project that will store your application's trace data, we recommend that you enable the Observability API: Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- The required IAM roles depend upon whether you plan to create an aggregated sink , which lets you centralized the storage of log data.

### Authorize the Monitoring agent \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring/authorization](https://docs.cloud.google.com/monitoring/agent/monitoring/authorization)
- Source ID: `site-iam-reference`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Verify and modify roles of an existing service account You can use the Google Cloud console to determine which roles an existing service account has, and to add any necessary roles that are missing: In the Google Cloud console, go to the IAM page: Go to IAM If you use the search bar to find this page, then select the result whose subheading is IAM & Admin .
- If https://www.googleapis.com/auth/cloud-platform isn't listed, then you require two access scopes, one from each of the following "logging" and "monitoring" pairs: https://www.googleapis.com/auth/logging.write or https://www.googleapis.com/auth/logging.admin https://www.googleapis.com/auth/monitoring.write or https://www.googleapis.com/auth/monitoring.admin To modify your access scopes, do the following: In the Google Cloud console, go to the VM instances page: Go to VM instances If you use the search bar to find this page, then select the result whose subheading is Compute Engine .
- In PowerShell, run the following commands as administrator to set the GOOGLE APPLICATION CREDENTIALS system environment variable for the Ops Agent to use: [ Environment ]:: SetEnvironmentVariable ( "GOOGLE APPLICATION CREDENTIALS" , " PATH TO CREDENTIAL FILE " , "Machine" ) Restart the agent by running the following command on your VM instance: Restart-Service -Name StackdriverMonitoring Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- If your service account does not have the necessary roles for the Monitoring agent , then use the following steps to add the roles described in Create a service account : Click edit Edit in the entry for the service account.

