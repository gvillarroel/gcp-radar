---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.485Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logging custom IAM roles"
feature_slug: "logging-custom-iam-roles"
latest_feature_date: "2017-07-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/access-control"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
keywords:
  - "logging"
  - "custom"
  - "iam"
  - "roles"
  - "includes"
---

# Logging custom IAM roles

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Cloud Logging IAM support includes custom roles.

## Extended Definition

Cloud Logging IAM support includes custom roles.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)

## Supporting Pages

### Access control with IAM \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create log-based alerting policies, to create notification channels, and to create the associated Logging notification rules : monitoring.alertPolicies.create monitoring.notificationChannels.create logging.notificationRules.create You might also be able to get these permissions with custom roles or other predefined roles .
- List and view log scopes logging.logScopes.{get, list} View the default log scope observability.scopes.get Exclude logs logging.exclusions.{list, create, get, update, delete} When creating a custom role that includes permissions to manage exclusion filters, add the logging.sinks. permissions to the role instead of adding the logging.exclusions. permissions.
- Custom roles To create a custom role with Logging permissions, do the following: For a role granting permissions for the Logging API, choose permissions from API permissions , then follow the instructions to create a custom role .
- This role includes all permissions granted by the Logs Viewer ( roles/logging.viewer ) role, and the permissions to write log entries, delete logs, and create log-based metrics.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin To get the permissions that you need to use the Logs Explorer to view log entries, ask your administrator to grant you the following IAM roles: To view log entries in the Required bucket and those in the Default view on the Default bucket, or to select a log scope: Logs Viewer ( roles/logging.viewer ) on your project, folder, or organization.
- To view and download log entries stored in a log view on a log bucket: Logs View Accessor ( roles/logging.viewAccessor ) on the project, folder, or organization that contains the log bucket.
- To view restricted LogEntry fields in a log bucket: Log Field Accessor ( roles/logging.fieldAccessor ) on the project, folder, or organization that stores the log bucket.
- To get the permissions that you need to download logs, ask your administrator to grant you the Logs View Accessor ( roles/logging.viewAccessor ) IAM role on your project.

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-docs-root-2`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create, view, modify, and delete VM extension policies: To create extension policies: compute.vmExtensionPolicies.create To view extension policies: compute.vmExtensionPolicies.list To view details of an extension policy: compute.vmExtensionPolicies.get To modify extension policies: compute.vmExtensionPolicies.update To delete extension policies: compute.vmExtensionPolicies.delete You might also be able to get these permissions with custom roles or other predefined roles .
- Enable the APIs Grant roles required to use the Ops Agent To get the permissions that you need to use the Ops Agent to write logs and metrics, ask your administrator to grant you the following IAM roles on your service account: To write logs: Logging Logs Writer ( roles/logging.logWriter ) To write metrics: Monitoring Metric Writer ( roles/monitoring.metricWriter ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- You might also be able to get the required permissions through custom roles or other predefined roles .
- Grant roles required to use VM Extension Manager To get the permissions that you need to create, view, modify, and delete VM extension policies, ask your administrator to grant you the following IAM roles on the project: To create extension policies: VM Extension Policy Admin ( roles/compute.vmExtensionPolicyAdmin ) To view extension policies: VM Extension Policy Viewer ( roles/compute.vmExtensionPolicyViewer ) VM Extension Policy Admin ( roles/compute.vmExtensionPolicyAdmin ) To modify extension policies: VM Extension Policy Admin ( roles/compute.vmExtensionPolicyAdmin ) To delete extension policies: VM Extension Policy Admin ( roles/compute.vmExtensionPolicyAdmin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

