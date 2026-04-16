---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:22.835Z"
product_name: "Google SecOps SOAR"
product_slug: "google-secops-soar"
feature_name: "Python logs retrieval API"
feature_slug: "python-logs-retrieval-api"
latest_feature_date: "2023-07-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp"
  - "https://docs.cloud.google.com/chronicle/docs/administration/audit-logging"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview"
keywords:
  - "python"
  - "logs"
  - "retrieval"
  - "api"
  - "admin"
  - "users"
  - "can"
  - "retrieve"
---

# Python logs retrieval API

Product: Google SecOps SOAR
Coverage: MEDIUM

## Step 02 Summary

Admin users can retrieve raw Python logs directly from the platform through an external API.

## Extended Definition

Admin users can retrieve raw Python logs directly from the platform through an external API.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)
- [https://docs.cloud.google.com/chronicle/docs/administration/audit-logging](https://docs.cloud.google.com/chronicle/docs/administration/audit-logging)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview)

## Supporting Pages

### "SOAR migration overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)
- Source ID: `site-api-reference`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Assign the following predefined IAM roles in Google Cloud to the onboarding SME: Chronicle API Admin Chronicle Service Admin Chronicle SOAR Admin Project IAM Admin Service Usage Admin Assign one of the following predefined IAM roles to all existing SOAR users: Chronicle API Admin Chronicle API Editor Chronicle API Viewer Chronicle API Limited Viewer Complete the authentication setup in SOAR by mapping each user (including administrators) to an email user group .
- Chronicle API Admin Chronicle Service Admin Chronicle SOAR Admin Project IAM Admin Service Usage Admin Assign one of the following roles in IAM to all existing SOAR users: Chronicle API Admin Chronicle API Editor Chronicle API Viewer Chronicle API Limited Viewer Complete the authentication setup in SOAR by mapping all the IdP groups that need access to SOAR .
- For more information, refer to Migrate endpoints to Chronicle API Migrate Remote Agents You can migrate the Remote Agents to Google Cloud by doing the following: Create a Service Account instead of an API key for the remote agent.
- Migrate SOAR APIs to Chronicle API If you use SOAR API programmatically using API calls or through integrations, you can migrate it to the new SOAR v1 beta endpoints available as part of Chronicle API.

### "Google SecOps audit logs \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/audit-logging](https://docs.cloud.google.com/chronicle/docs/administration/audit-logging)
- Source ID: `site-docs-root-2`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Listing actions taken by a specific user To find the actions taken by a given user, run the following query in the Logs Explorer : resource.type="audited resource" resource.labels.service="malachitefrontend-pa.googleapis.com" protoPayload.authenticationInfo.principalSubject=USER Identifying users who took a specific action To find the users who updated an access control subject, run the following query in the Logs Explorer : resource.type="audited resource" resource.labels.service="malachitefrontend-pa.googleapis.com" protoPayload.methodName="malachite.frontend.v1.MalachiteFrontendService.UpdateSubject" To find the users who updated an access control role, run the following query in the Logs Explorer : resource.type="audited resource" resource.labels.service="malachitefrontend-pa.googleapis.com" protoPayload.methodName="malachite.frontend.v1.MalachiteFrontendService.UpdateRole" To find the users who updated a detection rule, run the following query in the Logs Explorer : resource.type="audited resource" resource.labels.service="malachitefrontend-pa.googleapis.com" protoPayload.methodName="malachite.frontend.v1.MalachiteFrontendService.UpdateRule" What's next Cloud Audit Logs overview Understand audit logs Available audit logs Google Cloud Observability pricing: Cloud Logging Need more help?
- Listing actions taken by a specific user To find the actions taken by a given user, run the following query in the Logs Explorer : resource.type="audited resource" resource.labels.service="chronicle.googleapis.com" protoPayload.authenticationInfo.principalSubject=USER Identifying users who took a specific action To find the users who updated a detection rule, run the following query in the Logs Explorer : resource.type="audited resource" resource.labels.service="chronicle.googleapis.com" protoPayload.methodName="google.cloud.chronicle.v1main.RuleService.UpdateRule" Example: cloudresourcemanager.googleapis.com service name log To find the users who updated an access control role or subject, run the following query in the Logs Explorer : resource.type="project" resource.labels.service="cloudresourcemanager.googleapis.com" protoPayload.methodName="SetIamPolicy" Examples: malachitefrontend-pa.googleapis.com service name logs The following sections describe common use cases for Cloud Audit Logs that use the malachitefrontend-pa.googleapis.com service name.
- Enable the data read setting for your Google Cloud project to record SIEM search queries run by users. chronicle.googleapis.com/feeds.get chronicle.googleapis.com/rules.list chronicle.googleapis.com/curatedRuleSets.countCuratedRuleSetDetections Logs with service name chronicleservicemanager.googleapis.com Google SecOps audit logs written using the chronicleservicemanager.googleapis.com service name are only available at the organization level, not at the project level.
- Actions in Google SecOps that generate this type of log include creating a Google Cloud Association and updating Google Cloud log filters. chronicleservicemanager.googleapis.com/gcpAssociations.create chronicleservicemanager.googleapis.com/gcpAssociations.delete chronicleservicemanager.googleapis.com/gcpSettings.delete Data Access audit logs Includes admin read operations that read metadata or configuration information.

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-root-2`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- The following table outlines the different file sizes that Google SecOps feeds transformation supports: Operation Input type Recommended size Expected duration Max size Data Modeling CSV 10 GB Data Modeling CSV 30 min 10 GB Data Modeling CSV TBD TBD 2 GB Data Modeling XML / JSON 2 GB Data Modeling XLS / XLSX 1 min 50 MB Merge Files Any Varies on number of files 100 GB Decompress Files Non-ZIP Varies on number of files 10 GB (uncompressed) Decompress Files ZIP - Varies on number of files 4 GB (uncompressed) Log line limits and delimiters When ingesting text-based logs (JSON, CSV, or Syslog), ensure your data adheres to these specific ingestion limits: Maximum Line Size : A single log line cannot exceed 4MB .
- You can select from the following feed source types: Amazon Data Firehose Amazon S3 (Deprecated) Amazon S3 (V2) Amazon SQS (Deprecated) Amazon SQS (V2) Azure Blob Storage (Deprecated) Azure Blob Storage (V2) Google Cloud Pub/Sub Cloud Storage (Deprecated) Cloud Storage (V2) Cloud Storage Event Driven Third party API Webhook Important: When using Amazon S3 (Deprecated), Amazon SQS (Deprecated), Azure Blob Storage (Deprecated), and Google Cloud Cloud Storage (Deprecated) feeds, make sure that you have a valid directory path.
- If your webhook client doesn't support custom headers, you can specify the API key and secret key by using query parameters in the following format: ENDPOINT URL ?key= API KEY &secret= SECRET Replace the following: ENDPOINT URL : the feed endpoint URL.
- You can also reuse your existing API key to authenticate to Google SecOps.

### Data RBAC overview \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview)
- Source ID: `site-docs-root-2`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- With data RBAC, administrators can define scopes and assign them to users to help ensure that users can access only the necessary data for their job functions.
- The scopes added to the Chronicle API Restricted Data Access role specify the data that the users can access in the features.
- Data RBAC administrators can create scopes and assign them to users to control their data access within Google SecOps.
- Predefined scoped read-only access Chronicle API Restricted Data Access ( roles/chronicle.restrictedDataAccess ) and Chronicle API Restricted Data Access Viewer ( roles/chronicle.restrictedDataAccessViewer ) Chronicle API Restricted Data Access Viewer Custom scoped access Chronicle API Restricted Data Access ( roles/chronicle.restrictedDataAccess ) and custom role (for feature RBAC definition) Custom permissions within features Custom global access chronicle.globalDataAccessScopes.permit permission and Chronicle API Global Data Access ( roles/globalDataAccess ) Global permissions within features The following is a description of each access type presented in the table: Predefined global access: this access is typically required for users who need access to all the data.

