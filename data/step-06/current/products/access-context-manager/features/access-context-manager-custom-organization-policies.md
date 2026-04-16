---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:43:03.646Z"
product_name: "Access Context Manager"
product_slug: "access-context-manager"
feature_name: "Access Context Manager custom organization policies"
feature_slug: "access-context-manager-custom-organization-policies"
latest_feature_date: "2025-03-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage"
  - "https://docs.cloud.google.com/access-context-manager/docs/create-custom-access-level"
  - "https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec"
keywords:
  - "organization"
  - "policies"
  - "supports"
  - "custom"
---

# Access Context Manager custom organization policies

Product: Access Context Manager
Coverage: MEDIUM

## Step 02 Summary

Access Context Manager now supports custom organization policies for defining access constraints.

## Extended Definition

Access Context Manager now supports custom organization policies for defining access constraints.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage)
- [https://docs.cloud.google.com/access-context-manager/docs/create-custom-access-level](https://docs.cloud.google.com/access-context-manager/docs/create-custom-access-level)
- [https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec](https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec)

## Supporting Pages

### LaunchStage | Access Context Manager | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage)
- Source ID: `feature-recovery-direct-http`
- Final score: 115
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- LaunchStage | Access Context Manager | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español – América Latina Français Português – Brasil 中文 – 简体 日本語 한국어 Sign in Access Context Manager Start free Overview Guides Reference Resources Technology areas More Overview Guides Reference Resources Cross-product tools More Console Access Context Manager All APIs & references Context-Aware Access audit logging gcloud reference REST reference Overview v1 Overview REST Resources accessPolicies Overview create delete get getIamPolicy list patch setIamPolicy testIamPermissions accessPolicies.accessLevels Overview create delete get list patch replaceAll testIamPermissions accessPolicies.authorizedOrgsDescs Overview create delete get list patch accessPolicies.servicePerimeters Overview commit create delete get list patch replaceAll testIamPermissions operations Overview cancel delete get list organizations.gcpUserAccessBindings Overview create delete get list patch services Overview get list Types LevelFormat MethodSelector v1alpha Overview REST Resources accessPolicies Overview create delete get getIamPolicy list patch setIamPolicy testIamPermissions accessPolicies.accessLevels Overview create delete get list patch replaceAll testIamPermissions accessPolicies.authorizedOrgsDescs Overview create delete get list patch accessPolicies.servicePerimeters Overview commit create delete get list patch replaceAll testIamPermissions operations Overview get organizations.gcpUserAccessBindings Overview create delete get list patch services Overview get list Types LevelFormat MethodSelector Shared types Overview Types AuditConfig Binding DeviceEncryptionStatus DeviceManagementLevel GetIamPolicyRequest GetOperationRequest LaunchStage LogType Operation OsType Policy SetIamPolicyRequest TestIamPermissionsRequest TestIamPermissionsResponse RPC reference Overview google.api google.iam.v1 google.identity.accesscontextmanager.type google.identity.accesscontextmanager.v1 google.identity.accesscontextmanager.v1alpha google.longrunning google.rpc google.type Access level attributes Example access level YAML Custom access level specification AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Security Access Context Manager Reference Send feedback LaunchStage Stay organized with collections Save and categorize content based on your preferences.
- Alpha releases don't have to be feature complete, no SLAs are provided, and there are no technical support obligations, but they will be far enough along that customers can actually use them in test environments or for limited-use tests -- just like they would in normal production cases.
- Alpha customers need to apply for access, agree to applicable terms, and have their projects allowlisted.
- BETA Beta is the point at which we are ready to open a release for any customer to use.

### "Creating a custom access level \_|\_ Access Context Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/create-custom-access-level](https://docs.cloud.google.com/access-context-manager/docs/create-custom-access-level)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example { "name" : "example custom level" , "title" : "Example custom level" , "description" : "An example custom access level." , "custom" : { "expr" : { "expression" : "device.is corp owned == true (device.os type != OsType.OS UNSPECIFIED && device.is admin approved device == true)" , "title" : "Check for known devices" , "description" : "Permits requests from corp-owned devices and admin-approved devices with a known OS." } } } RPC Before you begin If it doesn't exist yet, create an access policy for your organization.
- Example YAML file expression: "device.encryption status == DeviceEncryptionStatus.ENCRYPTED && (origin.region code in ['US'] device.is admin approved device)" Example command gcloud access-context-manager levels create Custom Trust \ --custom-level-spec = customspec.yaml \ --description = "Custom access level for corp." \ --title = "Custom Trust Level" \ --policy = 1521580097614100 REST Before you begin If it doesn't exist yet, create an access policy for your organization.
- To create a custom access level, use the accessPolicies.accessLevels.create method.
- Request body In the request body for the call, include an instance of the AccessLevel object. { "name" : s tr i n g , "title" : s tr i n g , "description" : s tr i n g , "custom" : { "expr" : { "expression" : s tr i n g , "title" : s tr i n g , "description" : s tr i n g } } } For the custom field, create an object that includes the CEL expressions for your custom access level.

### "Custom access level specification \_|\_ Access Context Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec](https://docs.cloud.google.com/access-context-manager/docs/custom-access-level-spec)
- Source ID: `site-api-reference`
- Final score: 105
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To reference device state , use the format key-acme where acme is the organization's customer ID.
- Example 2 ( device.os type == OsType.DESKTOP WINDOWS && device.is corp owned device ) ( device.os type == OsType.DESKTOP MAC && device.is admin approved device && device.versionAtLeast ( "10.11.0" )) This example represents an access level that requires the following conditions be met in order to allow a request: One of the following is true: The device that the request originated from uses a desktop Windows operating system and is owned by your organization.
- Example: // Checks if the enterprise certificate associated with the origin matches the device. device.certificates.exists ( cert , cert.is valid && cert.cert fingerprint == origin.clientCertFingerprint ()) Macros for CEL expressions You can use the following macros in the CEL expressions for custom access levels: Macro Description has(e.f) Tests whether a field is available.
- Example: // Checks if the device has at least one valid enterprise certificate. device.certificates.exists ( cert , cert.is valid == true ) Functions Access Context Manager provides the following functions for use in the CEL expressions for custom access levels.

