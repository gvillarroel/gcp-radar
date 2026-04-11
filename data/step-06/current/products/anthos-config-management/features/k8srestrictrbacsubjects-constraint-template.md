---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.234Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "K8sRestrictRbacSubjects constraint template"
feature_slug: "k8srestrictrbacsubjects-constraint-template"
latest_feature_date: "2022-12-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
keywords:
  - "restrict RBAC subjects"
  - "subject restriction policy"
  - "RBAC subject constraint"
  - "RBAC subject template"
  - "restrict RBAC"
  - "K8sRestrictRbacSubjects template"
  - "K8sRestrictRbacSubjects"
  - "Constraint Template Library"
---

# K8sRestrictRbacSubjects constraint template

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

The Constraint Template Library added the K8sRestrictRbacSubjects template.

## Extended Definition

The Constraint Template Library added the K8sRestrictRbacSubjects template.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)

## Supporting Pages

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- 1.16.1 Fixed The constraint template library's K8sRestrictRbacSubjects template now returns all violation messages for ClusterRoleBinding or RoleBinding with more than one violation.
- 1.14.0 Feature The constraint template library includes a new template: K8sRestrictRbacSubjects .
- 1.16.3 Change The constraint template library's K8sPSPAllowedUsers , K8sPSPAllowPrivilegeEscalationContainer , K8sPSPAutomountServiceAccountTokenPod , K8sPSPCapabilities , K8sPSPFlexVolumes , K8sPSPForbiddenSysctls , K8sPSPFSGroup , K8sPSPHostFilesystem , K8sPSPHostNamespace , K8sPSPHostNetworkingPorts , K8sPSPPrivilegedContainer , K8sPSPProcMount , K8sPSPReadOnlyRootFilesystem , K8sPSPSELinuxV2 , K8sPSPVolumeTypes , and K8sRequiredProbes no longer raise violations during updates of existing objects for immutable fields.
- Those templates are: K8sPSPAllowPrivilegeEscalationContainer K8sPSPAppArmor K8sPSPCapabilities K8sContainerLimits K8sContainerRatios K8sPSPHostNetworkingPorts K8sImageDigests K8sPSPPrivilegedContainer K8sPSPProcMount K8sPSPReadOnlyRootFilesystem K8sPSPSeccomp K8sPSPSELinuxV2 K8sPSPAllowedUsers K8sContainerLimits 1.10.2 Feature The constraint template library includes new templates: K8sPSPAutomountServiceAccountTokenPod, RestrictNetworkExclusions, and K8sDisallowAnonymous.

