---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:43:03.650Z"
product_name: "Access Context Manager"
product_slug: "access-context-manager"
feature_name: "Scoped policies for VPC Service Controls administration"
feature_slug: "scoped-policies-for-vpc-service-controls-administration"
latest_feature_date: "2022-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups"
  - "https://docs.cloud.google.com/access-context-manager/docs/overview"
  - "https://docs.cloud.google.com/access-context-manager/docs/create-access-policy"
keywords:
  - "administration"
  - "delegation"
  - "enable"
  - "policies"
  - "scoped"
  - "perimeter"
  - "controls"
---

# Scoped policies for VPC Service Controls administration

Product: Access Context Manager
Coverage: MEDIUM

## Step 02 Summary

Scoped policies enable delegation of VPC Service Controls perimeter and access-level administration to folder- and project-level administrators.

## Extended Definition

Scoped policies enable delegation of VPC Service Controls perimeter and access-level administration to folder- and project-level administrators.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups](https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups)
- [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview)
- [https://docs.cloud.google.com/access-context-manager/docs/create-access-policy](https://docs.cloud.google.com/access-context-manager/docs/create-access-policy)

## Supporting Pages

### "Apply policies to user groups using access bindings \_|\_ Access Context\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups](https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups)
- Source ID: `site-iam-reference`
- Final score: 127
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- API Create a JSON body: { "groupKey": " GROUP ID ", // // Optional; if specified, all applications that aren't defined in // scopedAccessSettings have these access levels applied. // // If more than one access level is specified, the user is // granted access if any one resolves to TRUE (OR logic, not AND). // // If you omit this key entirely, then no policy enforcement is // applied by default. // "accessLevels": [ " DEFAULT ACCESS LEVEL " ], "scopedAccessSettings": [ { "scope": { "clientScope": { "restrictedClientApplication": { "clientId": " CLIENT ID " } } }, "activeSettings": { "accessLevels": [ " ACCESS LEVEL A " ], "sessionSettings": [ { "sessionLength": " SESSION LENGTH ", "sessionReauthMethod": " SESSION REAUTH METHOD ", "sessionLengthEnabled": true } ] } }, { "scope": { "clientScope": { "restrictedClientApplication": { "name": " CLIENT NAME " } }, "activeSettings": { "accessLevels": [ " ACCESS LEVEL B " ] } } } ] } Replace the following: GROUP ID : The group ID.
- For each application that you want to map to a specific access level, include a clientScope entry. scopedAccessSettings: - scope: clientScope: restrictedClientApplication: clientId: CLIENT ID activeSettings: accessLevels: - ACCESS LEVEL A sessionSettings: - sessionLength: SESSION LENGTH sessionReauthMethod: SESSION REAUTH METHOD sessionLengthEnabled: true - scope: clientScope: restrictedClientApplication: because this app is specified by name, it won't work with sessionSettings. if you add sessionSettings, make sure to replace the name key with clientId, and use the OAuth client ID as the value. name: CLIENT NAME activeSettings: accessLevels: - ACCESS LEVEL B Replace the following: CLIENT ID : The OAuth client ID.
- API Create a JSON body: { "group key": " GROUP ID ", // // Optional; if specified, all applications that aren't defined in // scopedAccessSettings have these access levels applied. // // If more than one access level is specified, the user is // granted access if any one resolves to TRUE (OR logic, not AND). // // If you omit this key entirely, then no policy enforcement is // be applied by default. // "access levels": [ " DEFAULT ACCESS LEVEL " ], // // Optional; if specified, all applications that aren't defined in // scopedAccessSettings will have these dry run access levels applied. // "dry run access levels": [ " DEFAULT DRY RUN ACCESS LEVEL " ], "scoped access settings": [ { "scope": { "client scope": { "restricted client application": { "name": " CLIENT NAME " } } }, "active settings": { "access levels": [ " ACCESS LEVEL A " ] }, "dry run settings": { "access levels": [ " DRY RUN ACCESS LEVEL 1 " ] } }, { "scope": { "client scope": { "restricted client application": { "client id": " CLIENT ID " } } }, "active settings": { "access levels": [ " DRY RUN ACCESS LEVEL 2 " ] } } ] } Replace the following: GROUP ID : The group ID.
- Create a dry run binding You can define dry run access levels alongside regular access levels in the same binding, or you can use separate bindings for dry runs. gcloud Configure the access settings. scopedAccessSettings: - scope: clientScope: restrictedClientApplication: name: CLIENT NAME activeSettings: accessLevels: - ACCESS LEVEL A dryRunSettings: accessLevels: - DRY RUN ACCESS LEVEL 1 - scope: clientScope: restrictedClientApplication: clientId: CLIENT ID dryRunSettings: accessLevels: - DRY RUN ACCESS LEVEL 2 Replace the following: CLIENT NAME : The client name.

### Access Context Manager Overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can configure and enforce Access Context Manager policies across the following Chrome Enterprise Premium solution components: VPC Service Controls Identity-Aware Proxy Context-Aware Access for Google Workspace Identity and Access Management (IAM) conditions Benefits Many companies rely on a perimeter security model such as a firewall to secure internal resources.
- To delegate administration of an access policy, you can create a scoped access policy and set the scope of the policy at the folder or project level.
- Access policies An access policy is a container for all of your Access Context Manager resources, such as access levels and service perimeters .
- For example, you can use this scenario to enable a Cloud Function to access data protected by VPC Service Controls.

### "Create an access policy \_|\_ Access Context Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/create-access-policy](https://docs.cloud.google.com/access-context-manager/docs/create-access-policy)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To delegate administration by binding a principal and role with a scoped access policy, use the add-iam-policy-binding command. gcloud access-context-manager policies add-iam-policy-binding \ [ POLICY ] --member = PRINCIPAL --role = ROLE Where: POLICY is ID of the policy or fully qualified identifier for the policy.
- On the Create access policy page, click Create access policy . gcloud To create a scoped access policy, use the gcloud access-context-manager policies create command. gcloud access-context-manager policies create \ --organization ORGANIZATION ID [ --scopes = SCOPE ] --title POLICY TITLE Where: ORGANIZATION ID is the numeric ID of your organization.
- To delegate administration of the scoped access policy, do the following: Create a request body. { "policy" : " IAM POLICY " , } Where: IAM POLICY is a collection of bindings.
- Warning: If an organization-level access policy doesn't exist for your organization, scoped policies that you create at the folder or project-level will not operate.

