---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:43:03.653Z"
product_name: "Access Context Manager"
product_slug: "access-context-manager"
feature_name: "Access Context Manager Bulk API"
feature_slug: "access-context-manager-bulk-api"
latest_feature_date: "2020-06-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage"
  - "https://docs.cloud.google.com/access-context-manager/docs/bulk-operations"
  - "https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec"
keywords:
  - "generally"
  - "replacing"
  - "bulk"
  - "available"
---

# Access Context Manager Bulk API

Product: Access Context Manager
Coverage: MEDIUM

## Step 02 Summary

The Access Context Manager Bulk API is generally available for replacing all access levels in an organization in a single operation; The Access Context Manager Bulk API is available in beta for bulk replacement of organizational access levels.

## Extended Definition

The Access Context Manager Bulk API is generally available for replacing all access levels in an organization in a single operation; The Access Context Manager Bulk API is available in beta for bulk replacement of organizational access levels.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage)
- [https://docs.cloud.google.com/access-context-manager/docs/bulk-operations](https://docs.cloud.google.com/access-context-manager/docs/bulk-operations)
- [https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec](https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec)

## Supporting Pages

### "Making bulk changes to access levels \_|\_ Access Context Manager \_|\_\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/bulk-operations](https://docs.cloud.google.com/access-context-manager/docs/bulk-operations)
- Source ID: `site-iam-reference`
- Final score: 58
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If existing access levels aren't included in the operation, those access levels are deleted. gcloud To bulk replace all access levels, use the replace-all command. gcloud access-context-manager levels replace-all \ --source-file = FILE \ --etag = ETAG \ [ --policy = POLICY NAME ] Where: FILE is the name of a .yaml file that defines the new conditions for your existing access levels.
- Home Documentation Security Access Context Manager Guides Send feedback Making bulk changes to access levels Stay organized with collections Save and categorize content based on your preferences.
- Using Access Context Manager, you can make bulk updates to resources that belong to your organization's access policy , such as access levels and service perimeters .
- Before you begin Because bulk operations affect all access levels for your organization, you may want to obtain a complete list of your access levels.

### "Custom access level specification \_|\_ Access Context Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec](https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec)
- Source ID: `site-api-reference`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- Example: // Checks if the enterprise certificate associated with the origin matches the device. device.certificates.exists ( cert , cert.is valid && cert.cert fingerprint == origin.clientCertFingerprint ()) Macros for CEL expressions You can use the following macros in the CEL expressions for custom access levels: Macro Description has(e.f) Tests whether a field is available.
- Example: device.chrome.is file download analysis enabled == true false chrome.is bulk data entry analysis enabled Type boolean Description Is the bulk text (paste) analysis connector enabled.
- Example: device.chrome.is bulk data entry analysis enabled == true false chrome.is security event analysis enabled Type boolean Description Is the security event reporting connector enabled.
- Following are the available Chrome management states: State UNMANAGED The browser or profile is not managed by any customer.

### LaunchStage | Access Context Manager | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage)
- Source ID: `feature-recovery-direct-http`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- LaunchStage | Access Context Manager | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español – América Latina Français Português – Brasil 中文 – 简体 日本語 한국어 Sign in Access Context Manager Start free Overview Guides Reference Resources Technology areas More Overview Guides Reference Resources Cross-product tools More Console Access Context Manager All APIs & references Context-Aware Access audit logging gcloud reference REST reference Overview v1 Overview REST Resources accessPolicies Overview create delete get getIamPolicy list patch setIamPolicy testIamPermissions accessPolicies.accessLevels Overview create delete get list patch replaceAll testIamPermissions accessPolicies.authorizedOrgsDescs Overview create delete get list patch accessPolicies.servicePerimeters Overview commit create delete get list patch replaceAll testIamPermissions operations Overview cancel delete get list organizations.gcpUserAccessBindings Overview create delete get list patch services Overview get list Types LevelFormat MethodSelector v1alpha Overview REST Resources accessPolicies Overview create delete get getIamPolicy list patch setIamPolicy testIamPermissions accessPolicies.accessLevels Overview create delete get list patch replaceAll testIamPermissions accessPolicies.authorizedOrgsDescs Overview create delete get list patch accessPolicies.servicePerimeters Overview commit create delete get list patch replaceAll testIamPermissions operations Overview get organizations.gcpUserAccessBindings Overview create delete get list patch services Overview get list Types LevelFormat MethodSelector Shared types Overview Types AuditConfig Binding DeviceEncryptionStatus DeviceManagementLevel GetIamPolicyRequest GetOperationRequest LaunchStage LogType Operation OsType Policy SetIamPolicyRequest TestIamPermissionsRequest TestIamPermissionsResponse RPC reference Overview google.api google.iam.v1 google.identity.accesscontextmanager.type google.identity.accesscontextmanager.v1 google.identity.accesscontextmanager.v1alpha google.longrunning google.rpc google.type Access level attributes Example access level YAML Custom access level specification AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Security Access Context Manager Reference Send feedback LaunchStage Stay organized with collections Save and categorize content based on your preferences.

