---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.790Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Playbook permissions for API key roles"
feature_slug: "playbook-permissions-for-api-key-roles"
latest_feature_date: "2025-06-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/onboard"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview"
keywords:
  - "playbook"
  - "permissions"
  - "key"
  - "roles"
  - "now"
  - "soc"
  - "associated"
  - "keys"
---

# Playbook permissions for API key roles

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Playbook permissions now support SOC roles associated with API keys in addition to user SOC roles.

## Extended Definition

Playbook permissions now support SOC roles associated with API keys in addition to user SOC roles.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/onboard](https://docs.cloud.google.com/chronicle/docs/onboard)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview)

## Supporting Pages

### "Onboard a Google SecOps instance \_|\_ Google Security Operations \_|\_\

- URL: [https://docs.cloud.google.com/chronicle/docs/onboard](https://docs.cloud.google.com/chronicle/docs/onboard)
- Source ID: `site-iam-reference`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Grant the onboarding SME the roles and permissions listed in these following sections: Permissions in the Google billing account Predefined IAM roles Permissions to create an Assured Workloads folder Permissions to add a Google Cloud project Permissions to configure an identity provider Permissions to configure Cloud Identity or Google Workspace Permissions to configure a third-party identity provider Permissions to link a Google SecOps instance to Google Cloud services Permissions to configure feature access control using IAM Permissions to configure data access control Google SecOps advanced capabilities requirements Permissions in the Google billing account Grant the onboarding SME the billing.resourceAssociations.list permission for the Google billing account specified in the contract.
- If the onboarding SME doesn't have project creator permissions at the organization level, grant the following project-level IAM roles: Chronicle Service Admin ( roles/chroniclesm.admin ) (if this role was not granted earlier) Editor ( roles/editor ) Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) Permissions to configure an identity provider You can use an IdP to manage users, groups, and authentication.
- Grant permissions to perform onboarding For each new Google SecOps instance, grant the required onboarding roles and permissions to the onboarding SME, as described in Required roles and permissions .
- Grant the onboarding SME the Assured Workloads Administrator ( roles/assuredworkloads.admin ) role, which contains the minimum IAM permissions to create and manage Assured Workloads folders.

### Data RBAC overview \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Predefined scoped read-only access Chronicle API Restricted Data Access ( roles/chronicle.restrictedDataAccess ) and Chronicle API Restricted Data Access Viewer ( roles/chronicle.restrictedDataAccessViewer ) Chronicle API Restricted Data Access Viewer Custom scoped access Chronicle API Restricted Data Access ( roles/chronicle.restrictedDataAccess ) and custom role (for feature RBAC definition) Custom permissions within features Custom global access chronicle.globalDataAccessScopes.permit permission and Chronicle API Global Data Access ( roles/globalDataAccess ) Global permissions within features The following is a description of each access type presented in the table: Predefined global access: this access is typically required for users who need access to all the data.
- Plan your implementation To plan your implementation, review the list of Google Security Operations predefined Google SecOps roles and permissions and align them with your organization's needs.
- The following roles can be assigned to users: Access type Roles Permissions Predefined global access Global users can be granted any of the predefined IAM roles .
- These permissions might be included if you've used the prebuilt Chronicle API Editor or Chronicle API Admin as a starting point for your custom roles.

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Impact of changing your linked Cloud Project on data feeds If you are updating the Google Cloud project associated with your Google SecOps instance, all feeds ingesting data using the following connectors will stop, and must be re-created manually: AMAZON S3 V2 AMAZON SQS V2 GOOGLE CLOUD STORAGE V2 AZURE BLOBSTORE V2 GOOGLE CLOUD STORAGE EVENT DRIVEN For all other feeds that are not utilizing these connectors, ingestion continues without any interruption.
- To grant read permission to multiple files , grant access at the bucket level as follows: For "feedSourceType": "GOOGLE CLOUD STORAGE" : Add the Google SecOps service account as a principal to your storage bucket and grant it the IAM Storage Object Viewer ( roles/storage.objectViewer ) role.
- The following table describes the error messages that you might encounter when working with data feeds: Error Code Cause Troubleshooting ACCESS DENIED The authentication account provided in the feed configuration lacks required permissions.
- For "feedSourceType": "GOOGLE CLOUD STORAGE V2" , grant a role from both step a and step b : Grant either of these roles: Storage Object Viewer ( roles/storage.objectViewer ) if the transfer is to another Cloud Storage bucket.

