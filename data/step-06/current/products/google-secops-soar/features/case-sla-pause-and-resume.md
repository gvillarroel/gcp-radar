---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:22.813Z"
product_name: "Google SecOps SOAR"
product_slug: "google-secops-soar"
feature_name: "Case SLA pause and resume"
feature_slug: "case-sla-pause-and-resume"
latest_feature_date: "2025-03-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform"
  - "https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview"
  - "https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users"
  - "https://docs.cloud.google.com/chronicle/docs/administration/audit-logging"
keywords:
  - "case"
  - "sla"
  - "pause"
  - "and"
  - "resume"
  - "users"
  - "can"
  - "level"
---

# Case SLA pause and resume

Product: Google SecOps SOAR
Coverage: MEDIUM

## Step 02 Summary

Users can pause and resume service level agreement timers on cases.

## Extended Definition

Users can pause and resume service level agreement timers on cases.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform)
- [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview)
- [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- [https://docs.cloud.google.com/chronicle/docs/administration/audit-logging](https://docs.cloud.google.com/chronicle/docs/administration/audit-logging)

## Supporting Pages

### "Map users in the Google SecOps platform \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform)
- Source ID: `site-iam-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Use Case: Assign unique permission fields to each IdP group The following example illustrates how to use this feature to help onboard and provision users according to your company's needs.
- This enables a more granular level of mapping and can be helpful for large customers.
- These groups determine which modules and submodules users can view or edit.
- Users can see cases assigned to them, their role, or additional roles.

### Cases overview \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Each case entry shows key metadata, such as: Case name and unique ID Case timestamp Number of associated alerts Assigned analyst (with avatar) Case priority and stage (optional, depending on view) Analysts can toggle between these views: Default view : Shows case cards with essential information.
- Case top bar The Case Top Bar displays case-level context and available actions, as follows: The case queue header displays the case title, ID, priority, stage , timestamp, change environment, and tags .
- When you open this tab, you can view case-related information such as tasks, user comments, pinned chat messages, manual and system actions, and file attachments (up to 50 MB per file).
- Analysts can also: Automatically group additional alerts into existing cases based on shared entities and configurable rules.

### "Configure data RBAC for users \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- Source ID: `site-docs-root-2`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create and manage scopes You can create and manage data scopes within the Google SecOps user interface, and then assign those scopes to users or groups through IAM.
- Through the creation and assignment of data scopes, which are defined by labels, you can ensure that data is only accessible to authorized users.
- You can assign the appropriate scopes to users who require global access so that the users can view and interact with all the data.
- Important: Before data RBAC is enabled, all users, regardless of assigned scopes, have global access and can view all data.

### "Google SecOps audit logs \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/audit-logging](https://docs.cloud.google.com/chronicle/docs/administration/audit-logging)
- Source ID: `site-docs-root-2`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Listing actions taken by a specific user To find the actions taken by a given user, run the following query in the Logs Explorer : resource.type="audited resource" resource.labels.service="malachitefrontend-pa.googleapis.com" protoPayload.authenticationInfo.principalSubject=USER Identifying users who took a specific action To find the users who updated an access control subject, run the following query in the Logs Explorer : resource.type="audited resource" resource.labels.service="malachitefrontend-pa.googleapis.com" protoPayload.methodName="malachite.frontend.v1.MalachiteFrontendService.UpdateSubject" To find the users who updated an access control role, run the following query in the Logs Explorer : resource.type="audited resource" resource.labels.service="malachitefrontend-pa.googleapis.com" protoPayload.methodName="malachite.frontend.v1.MalachiteFrontendService.UpdateRole" To find the users who updated a detection rule, run the following query in the Logs Explorer : resource.type="audited resource" resource.labels.service="malachitefrontend-pa.googleapis.com" protoPayload.methodName="malachite.frontend.v1.MalachiteFrontendService.UpdateRule" What's next Cloud Audit Logs overview Understand audit logs Available audit logs Google Cloud Observability pricing: Cloud Logging Need more help?
- Listing actions taken by a specific user To find the actions taken by a given user, run the following query in the Logs Explorer : resource.type="audited resource" resource.labels.service="chronicle.googleapis.com" protoPayload.authenticationInfo.principalSubject=USER Identifying users who took a specific action To find the users who updated a detection rule, run the following query in the Logs Explorer : resource.type="audited resource" resource.labels.service="chronicle.googleapis.com" protoPayload.methodName="google.cloud.chronicle.v1main.RuleService.UpdateRule" Example: cloudresourcemanager.googleapis.com service name log To find the users who updated an access control role or subject, run the following query in the Logs Explorer : resource.type="project" resource.labels.service="cloudresourcemanager.googleapis.com" protoPayload.methodName="SetIamPolicy" Examples: malachitefrontend-pa.googleapis.com service name logs The following sections describe common use cases for Cloud Audit Logs that use the malachitefrontend-pa.googleapis.com service name.
- Enable the data read setting for your Google Cloud project to record SIEM search queries run by users. chronicle.googleapis.com/feeds.get chronicle.googleapis.com/rules.list chronicle.googleapis.com/curatedRuleSets.countCuratedRuleSetDetections Logs with service name chronicleservicemanager.googleapis.com Google SecOps audit logs written using the chronicleservicemanager.googleapis.com service name are only available at the organization level, not at the project level.
- The following example shows log names for project-level Admin Activity audit logs and Data Access audit logs.

