---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:43:03.651Z"
product_name: "Access Context Manager"
product_slug: "access-context-manager"
feature_name: "Egress rules for VPC Service Controls"
feature_slug: "egress-rules-for-vpc-service-controls"
latest_feature_date: "2021-04-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage"
  - "https://docs.cloud.google.com/access-context-manager/docs/overview"
  - "https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups"
keywords:
  - "controlling"
  - "outbound"
  - "egress"
  - "rules"
  - "controls"
---

# Egress rules for VPC Service Controls

Product: Access Context Manager
Coverage: MEDIUM

## Step 02 Summary

VPC Service Controls now support egress rules for controlling outbound service access.

## Extended Definition

VPC Service Controls now support egress rules for controlling outbound service access.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage)
- [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview)
- [https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups](https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups)

## Supporting Pages

### Access Context Manager Overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview)
- Source ID: `site-docs-root`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- You can configure and enforce Access Context Manager policies across the following Chrome Enterprise Premium solution components: VPC Service Controls Identity-Aware Proxy Context-Aware Access for Google Workspace Identity and Access Management (IAM) conditions Benefits Many companies rely on a perimeter security model such as a firewall to secure internal resources.
- For example, you can use this scenario to enable a Cloud Function to access data protected by VPC Service Controls.
- Policy is configured and enforced across various points, such as VPC Service Controls .
- This scenario is often used together with Service Accounts and VPC Service Controls .

### "Apply policies to user groups using access bindings \_|\_ Access Context\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups](https://docs.cloud.google.com/access-context-manager/docs/apply-policies-to-user-groups)
- Source ID: `site-iam-reference`
- Final score: 48
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Preview — Session controls feature only This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Define configurations for specific applications This method lets you apply different access levels and session controls to different applications.
- If you also define session controls in the YAML file, those session controls override the default settings for those specific applications.
- Working with session controls To set default session controls for all applications, use --session-length and --session-reauth-method .

### LaunchStage | Access Context Manager | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage)
- Source ID: `feature-recovery-direct-http`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- LaunchStage | Access Context Manager | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español – América Latina Français Português – Brasil 中文 – 简体 日本語 한국어 Sign in Access Context Manager Start free Overview Guides Reference Resources Technology areas More Overview Guides Reference Resources Cross-product tools More Console Access Context Manager All APIs & references Context-Aware Access audit logging gcloud reference REST reference Overview v1 Overview REST Resources accessPolicies Overview create delete get getIamPolicy list patch setIamPolicy testIamPermissions accessPolicies.accessLevels Overview create delete get list patch replaceAll testIamPermissions accessPolicies.authorizedOrgsDescs Overview create delete get list patch accessPolicies.servicePerimeters Overview commit create delete get list patch replaceAll testIamPermissions operations Overview cancel delete get list organizations.gcpUserAccessBindings Overview create delete get list patch services Overview get list Types LevelFormat MethodSelector v1alpha Overview REST Resources accessPolicies Overview create delete get getIamPolicy list patch setIamPolicy testIamPermissions accessPolicies.accessLevels Overview create delete get list patch replaceAll testIamPermissions accessPolicies.authorizedOrgsDescs Overview create delete get list patch accessPolicies.servicePerimeters Overview commit create delete get list patch replaceAll testIamPermissions operations Overview get organizations.gcpUserAccessBindings Overview create delete get list patch services Overview get list Types LevelFormat MethodSelector Shared types Overview Types AuditConfig Binding DeviceEncryptionStatus DeviceManagementLevel GetIamPolicyRequest GetOperationRequest LaunchStage LogType Operation OsType Policy SetIamPolicyRequest TestIamPermissionsRequest TestIamPermissionsResponse RPC reference Overview google.api google.iam.v1 google.identity.accesscontextmanager.type google.identity.accesscontextmanager.v1 google.identity.accesscontextmanager.v1alpha google.longrunning google.rpc google.type Access level attributes Example access level YAML Custom access level specification AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Security Access Context Manager Reference Send feedback LaunchStage Stay organized with collections Save and categorize content based on your preferences.

