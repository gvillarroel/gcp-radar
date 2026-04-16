---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:43:03.653Z"
product_name: "Access Context Manager"
product_slug: "access-context-manager"
feature_name: "Access Context Manager mobile access level support"
feature_slug: "access-context-manager-mobile-access-level-support"
latest_feature_date: "2020-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes"
  - "https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage"
  - "https://docs.cloud.google.com/access-context-manager/docs/use-mobile-devices"
keywords:
  - "creating"
  - "added"
  - "beta"
  - "mobile"
  - "level"
---

# Access Context Manager mobile access level support

Product: Access Context Manager
Coverage: MEDIUM

## Step 02 Summary

Access Context Manager added beta support for creating access levels that target iOS and Android devices.

## Extended Definition

Access Context Manager added beta support for creating access levels that target iOS and Android devices.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes](https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes)
- [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage)
- [https://docs.cloud.google.com/access-context-manager/docs/use-mobile-devices](https://docs.cloud.google.com/access-context-manager/docs/use-mobile-devices)

## Supporting Pages

### "Use mobile devices with access levels \_|\_ Access Context Manager \_|\_\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/use-mobile-devices](https://docs.cloud.google.com/access-context-manager/docs/use-mobile-devices)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Overview Limitations Getting started Troubleshooting Overview Access Context Manager supports using Google basic mobile management and advanced mobile management to create access levels that check for certain characteristics of mobile devices.
- While changes to access levels usually come into effect within a few minutes, enforcement of mobile device attributes can be delayed while changes to your managed mobile device settings are propagated.
- Home Documentation Security Access Context Manager Guides Send feedback Use mobile devices with access levels Stay organized with collections Save and categorize content based on your preferences.
- Getting started To start using access levels to check mobile device attributes, do the following: Set up basic mobile management or advanced mobile management for your organization.

### LaunchStage | Access Context Manager | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage)
- Source ID: `feature-recovery-direct-http`
- Final score: 91
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- LaunchStage | Access Context Manager | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español – América Latina Français Português – Brasil 中文 – 简体 日本語 한국어 Sign in Access Context Manager Start free Overview Guides Reference Resources Technology areas More Overview Guides Reference Resources Cross-product tools More Console Access Context Manager All APIs & references Context-Aware Access audit logging gcloud reference REST reference Overview v1 Overview REST Resources accessPolicies Overview create delete get getIamPolicy list patch setIamPolicy testIamPermissions accessPolicies.accessLevels Overview create delete get list patch replaceAll testIamPermissions accessPolicies.authorizedOrgsDescs Overview create delete get list patch accessPolicies.servicePerimeters Overview commit create delete get list patch replaceAll testIamPermissions operations Overview cancel delete get list organizations.gcpUserAccessBindings Overview create delete get list patch services Overview get list Types LevelFormat MethodSelector v1alpha Overview REST Resources accessPolicies Overview create delete get getIamPolicy list patch setIamPolicy testIamPermissions accessPolicies.accessLevels Overview create delete get list patch replaceAll testIamPermissions accessPolicies.authorizedOrgsDescs Overview create delete get list patch accessPolicies.servicePerimeters Overview commit create delete get list patch replaceAll testIamPermissions operations Overview get organizations.gcpUserAccessBindings Overview create delete get list patch services Overview get list Types LevelFormat MethodSelector Shared types Overview Types AuditConfig Binding DeviceEncryptionStatus DeviceManagementLevel GetIamPolicyRequest GetOperationRequest LaunchStage LogType Operation OsType Policy SetIamPolicyRequest TestIamPermissionsRequest TestIamPermissionsResponse RPC reference Overview google.api google.iam.v1 google.identity.accesscontextmanager.type google.identity.accesscontextmanager.v1 google.identity.accesscontextmanager.v1alpha google.longrunning google.rpc google.type Access level attributes Example access level YAML Custom access level specification AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Security Access Context Manager Reference Send feedback LaunchStage Stay organized with collections Save and categorize content based on your preferences.
- BETA Beta is the point at which we are ready to open a release for any customer to use.
- There are no SLA or technical support obligations in a Beta release.
- Beta releases are suitable for limited production use cases.

### "Access level attributes \_|\_ Access Context Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes](https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes)
- Source ID: `site-api-reference`
- Final score: 90
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This attribute can only be included in conditions when creating or modifying an access level using the gcloud command-line tool or the Access Context Manager API.
- Supports mobile devices Yes YAML osConstraints Valid values osConstraints is a list that must include one or more instances of osType . osType can be paired with an instance of minimumVersion , but minimumVersion is not required. osType must include a list of one or more of the following values: DESKTOP MAC DESKTOP WINDOWS DESKTOP CHROME OS DESKTOP LINUX IOS ANDROID minimumVersion is optional.
- You can include the following attributes in your access level: IP subnetworks Geographic locations Access level dependencies Principals Device policy Attributes IP subnetworks Description Checks whether a request is coming from one or more IPv4 and/or IPv6 CIDR blocks that you specify.
- YAML members Valid values A list of one or more user or service accounts, formatted as: user: EMAIL serviceAccount: EMAIL Where: EMAIL is the email that corresponds to the user or service account that you want to include in the access level.

