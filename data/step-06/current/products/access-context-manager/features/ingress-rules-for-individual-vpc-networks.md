---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:43:03.649Z"
product_name: "Access Context Manager"
product_slug: "access-context-manager"
feature_name: "Ingress rules for individual VPC networks"
feature_slug: "ingress-rules-for-individual-vpc-networks"
latest_feature_date: "2023-02-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage"
  - "https://docs.cloud.google.com/access-context-manager/docs/overview"
  - "https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file"
keywords:
  - "individual"
  - "networks"
  - "ingress"
  - "perimeters"
  - "rules"
  - "controls"
---

# Ingress rules for individual VPC networks

Product: Access Context Manager
Coverage: MEDIUM

## Step 02 Summary

VPC Service Controls perimeters now support ingress rules that authorize access for individual VPC networks; VPC Service Controls preview adds ingress rules that authorize specific individual VPC networks to access a perimeter.

## Extended Definition

VPC Service Controls perimeters now support ingress rules that authorize access for individual VPC networks; VPC Service Controls preview adds ingress rules that authorize specific individual VPC networks to access a perimeter.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage)
- [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview)
- [https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file](https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file)

## Supporting Pages

### Access Context Manager Overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/access-context-manager/docs/overview](https://docs.cloud.google.com/access-context-manager/docs/overview)
- Source ID: `site-docs-root`
- Final score: 68
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can configure and enforce Access Context Manager policies across the following Chrome Enterprise Premium solution components: VPC Service Controls Identity-Aware Proxy Context-Aware Access for Google Workspace Identity and Access Management (IAM) conditions Benefits Many companies rely on a perimeter security model such as a firewall to secure internal resources.
- Examples include the following: Device type and operating system IP address User identity Service perimeters define sandboxes of resources, which can freely exchange data within the perimeter but are not allowed to export data outside of the perimeter.
- Access policies An access policy is a container for all of your Access Context Manager resources, such as access levels and service perimeters .
- For example, you might create an access level called High Level that will permit requests from a small group of highly-privileged individuals.

### LaunchStage | Access Context Manager | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage](https://docs.cloud.google.com/access-context-manager/docs/reference/rest/Shared.Types/LaunchStage)
- Source ID: `feature-recovery-direct-http`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- LaunchStage | Access Context Manager | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español – América Latina Français Português – Brasil 中文 – 简体 日本語 한국어 Sign in Access Context Manager Start free Overview Guides Reference Resources Technology areas More Overview Guides Reference Resources Cross-product tools More Console Access Context Manager All APIs & references Context-Aware Access audit logging gcloud reference REST reference Overview v1 Overview REST Resources accessPolicies Overview create delete get getIamPolicy list patch setIamPolicy testIamPermissions accessPolicies.accessLevels Overview create delete get list patch replaceAll testIamPermissions accessPolicies.authorizedOrgsDescs Overview create delete get list patch accessPolicies.servicePerimeters Overview commit create delete get list patch replaceAll testIamPermissions operations Overview cancel delete get list organizations.gcpUserAccessBindings Overview create delete get list patch services Overview get list Types LevelFormat MethodSelector v1alpha Overview REST Resources accessPolicies Overview create delete get getIamPolicy list patch setIamPolicy testIamPermissions accessPolicies.accessLevels Overview create delete get list patch replaceAll testIamPermissions accessPolicies.authorizedOrgsDescs Overview create delete get list patch accessPolicies.servicePerimeters Overview commit create delete get list patch replaceAll testIamPermissions operations Overview get organizations.gcpUserAccessBindings Overview create delete get list patch services Overview get list Types LevelFormat MethodSelector Shared types Overview Types AuditConfig Binding DeviceEncryptionStatus DeviceManagementLevel GetIamPolicyRequest GetOperationRequest LaunchStage LogType Operation OsType Policy SetIamPolicyRequest TestIamPermissionsRequest TestIamPermissionsResponse RPC reference Overview google.api google.iam.v1 google.identity.accesscontextmanager.type google.identity.accesscontextmanager.v1 google.identity.accesscontextmanager.v1alpha google.longrunning google.rpc google.type Access level attributes Example access level YAML Custom access level specification AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Security Access Context Manager Reference Send feedback LaunchStage Stay organized with collections Save and categorize content based on your preferences.

### "Example YAML for an access level \_|\_ Access Context Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file](https://docs.cloud.google.com/access-context-manager/docs/example-yaml-file)
- Source ID: `site-api-reference`
- Final score: 54
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See identities in Ingress and egress rules for how to allow perimeters to communicate with each other.
- Attributes can be included in any order in the condition - devicePolicy : Must include at least one of the following: allowedEncryptionStatuses : Must include at least one of the following: - ENCRYPTION UNSUPPORTED - ENCRYPTED - UNENCRYPTED osConstraints : Must include at least one of the following: - osType : DESKTOP CHROME OS minimumVersion : 11316.165.0 minimumVersion must be formatted as x.x.x requireVerifiedChromeOs : true - osType : DESKTOP MAC - osType : DESKTOP WINDOWS minimumVersion is not required requireScreenlock : true requireScreenlock defaults to false if not included requireAdminApproval : true requireAdminApproval defaults to false if not included requireCorpOwned : true requireCorpOwned defaults to false if not included ipSubnetworks : Must include one or more IPv4 and IPv6 CIDRs - 252.0.2.0/24 - 2001:db8::/32 regions : Must include one or more regions as ISO 3166-1 alpha-2 codes - US - CH - SG requiredAccessLevels : Must include one or more existing access levels Must be formatted as accessPolicies/policy-name/accessLevels/level-name - accessPolicies/247332951433/accessLevels/Device Trust members : Must include one or more valid IAM users or service accounts - user:exampleuser@example.com - serviceAccount:exampleaccount@example. iam.gserviceaccount.com negate : true negate is not required and can only be included with other attributes If negate is included, none of the attributes included in the condition can be true for the condition to be met.
- You can include more than one condition in the .yaml file - ipSubnetworks : - 176.0.2.0/24 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

