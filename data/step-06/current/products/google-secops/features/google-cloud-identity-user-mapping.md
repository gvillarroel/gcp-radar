---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.818Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Google Cloud Identity user mapping"
feature_slug: "google-cloud-identity-user-mapping"
latest_feature_date: "2025-03-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp"
  - "https://docs.cloud.google.com/chronicle/docs/administration/rbac"
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide"
keywords:
  - "identity"
  - "user"
  - "mapping"
  - "administrators"
  - "can"
  - "bulk"
  - "provision"
  - "map"
---

# Google Cloud Identity user mapping

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Administrators can bulk provision and map users into the platform using Google Cloud Identity email groups.

## Extended Definition

Administrators can bulk provision and map users into the platform using Google Cloud Identity email groups.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)
- [https://docs.cloud.google.com/chronicle/docs/administration/rbac](https://docs.cloud.google.com/chronicle/docs/administration/rbac)
- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide)

## Supporting Pages

### "SOAR migration overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)
- Source ID: `site-api-reference`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Assign the following predefined IAM roles in Google Cloud to the onboarding SME: Chronicle API Admin Chronicle Service Admin Chronicle SOAR Admin Project IAM Admin Service Usage Admin Assign one of the following predefined IAM roles to all existing SOAR users: Chronicle API Admin Chronicle API Editor Chronicle API Viewer Chronicle API Limited Viewer Complete the authentication setup in SOAR by mapping each user (including administrators) to an email user group .
- Chronicle API Admin Chronicle Service Admin Chronicle SOAR Admin Project IAM Admin Service Usage Admin Assign one of the following roles in IAM to all existing SOAR users: Chronicle API Admin Chronicle API Editor Chronicle API Viewer Chronicle API Limited Viewer Complete the authentication setup in SOAR by mapping all the IdP groups that need access to SOAR .
- Option 2: Configure Workforce Identity Federation Authentication in Google Cloud This scenario is applicable if you manage your user identities using third party IdPs such as Microsoft Azure Active Directory, Okta, Ping Identity and AD FS.
- Option 1: Configure Cloud Identity Authentication in Google Cloud (Google Managed accounts) This scenario is applicable if you manage user accounts directly within Cloud Identity using Google-managed usernames and passwords.

### "Migrate SOAR endpoints to Chronicle API \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more detailed information on mapping users and service accounts, see Map users in the platform using third-party identity or Map users in the platform using Cloud Identity .
- This mapping is required to provide the service account or workload identity with the necessary access to SOC Roles and Environments.
- Map the service account or workload identity to SOAR parameters If you are using a service account or workload identity federation to authenticate to the Chronicle API, you must authorize it within the platform to ensure it can successfully communicate with Google SecOps.
- In the Add Role dialog, enter the full email address of your service account or the Workload Identity principal string in the IAM Role / IdP group field.

### "Role-Based Access Control (RBAC) User Guide \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/rbac](https://docs.cloud.google.com/chronicle/docs/administration/rbac)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you delete users and groups that are administrators, and the only remaining administrators are not in your IDP, you will lose administrator access.
- As you assign roles, be aware of the following: When adding users or groups, make sure they exist in your identity provider (IdP).
- Google Security Operations manages the mapping between users and groups and roles.
- Permissions Permissions provide the authorization needed to perform a single controlled action in Google Security Operations, including (see the user interface for the complete list of permissions): View rule Modify rule Edit feedback Edit reference list View RBAC permissions If a user does not have permissions for an action, the associated feature is disabled.

