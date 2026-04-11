---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.216Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "K8sPSPWindowsHostProcess constraint template"
feature_slug: "k8spspwindowshostprocess-constraint-template"
latest_feature_date: "2023-10-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
keywords:
  - "k8s-psp-windows-host-process"
  - "Pod Security Policy"
  - "Windows HostProcess"
  - "K8sPSPWindowsHostProcess"
  - "PSPWindowsHostProcess"
  - "ConstraintTemplate"
  - "WindowsHostProcess"
  - "Constraint Template Library"
---

# K8sPSPWindowsHostProcess constraint template

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Added the K8sPSPWindowsHostProcess constraint template to the Constraint Template Library.

## Extended Definition

Added the K8sPSPWindowsHostProcess constraint template to the Constraint Template Library.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)

## Supporting Pages

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- 1.16.2 Feature The constraint template library includes a new template: K8sPSPWindowsHostProcess .
- 1.16.3 Change The constraint template library's K8sPSPAllowedUsers , K8sPSPAllowPrivilegeEscalationContainer , K8sPSPAutomountServiceAccountTokenPod , K8sPSPCapabilities , K8sPSPFlexVolumes , K8sPSPForbiddenSysctls , K8sPSPFSGroup , K8sPSPHostFilesystem , K8sPSPHostNamespace , K8sPSPHostNetworkingPorts , K8sPSPPrivilegedContainer , K8sPSPProcMount , K8sPSPReadOnlyRootFilesystem , K8sPSPSELinuxV2 , K8sPSPVolumeTypes , and K8sRequiredProbes no longer raise violations during updates of existing objects for immutable fields.
- If you install Config Sync using Google Cloud Console or gcloud, you can enable the webhook by adding the following setting to your apply-spec.yaml configuration file: spec.configSync.preventDrift: true (requires Cloud SDK 367.0.0 or later) If you install Config Sync manually with kubectl , you can enable the webhook by adding the following setting to your config-management-operator.yaml configuration file: spec.preventDrift: true 1.10.0 Breaking Policy Controller has deprecated the K8sPSPSELinux (v1) ConstraintTemplate.
- Those templates are: K8sPSPAllowPrivilegeEscalationContainer K8sPSPAppArmor K8sPSPCapabilities K8sContainerLimits K8sContainerRatios K8sPSPHostNetworkingPorts K8sImageDigests K8sPSPPrivilegedContainer K8sPSPProcMount K8sPSPReadOnlyRootFilesystem K8sPSPSeccomp K8sPSPSELinuxV2 K8sPSPAllowedUsers K8sContainerLimits 1.10.2 Feature The constraint template library includes new templates: K8sPSPAutomountServiceAccountTokenPod, RestrictNetworkExclusions, and K8sDisallowAnonymous.

