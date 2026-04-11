---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.210Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "K8sCronJobAllowedRepos constraint template"
feature_slug: "k8scronjoballowedrepos-constraint-template"
latest_feature_date: "2024-02-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
keywords:
  - "k8s-cronjob-allowed-repos"
  - "CronJob allowed repositories constraint"
  - "K8sCronJobAllowedRepos ConstraintTemplate"
  - "allowedRepos parameter"
  - "K8sCronJobAllowedRepos"
  - "CronJobAllowedRepos"
  - "Constraint Template Library"
---

# K8sCronJobAllowedRepos constraint template

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Added the K8sCronJobAllowedRepos constraint template to the Constraint Template Library.

## Extended Definition

Added the K8sCronJobAllowedRepos constraint template to the Constraint Template Library.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)

## Supporting Pages

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- February 22, 2024 1.17.2 Feature The constraint template library includes a new template: K8sCronJobAllowedRepos .
- 1.16.3 Change The constraint template library's K8sPSPAllowedUsers , K8sPSPAllowPrivilegeEscalationContainer , K8sPSPAutomountServiceAccountTokenPod , K8sPSPCapabilities , K8sPSPFlexVolumes , K8sPSPForbiddenSysctls , K8sPSPFSGroup , K8sPSPHostFilesystem , K8sPSPHostNamespace , K8sPSPHostNetworkingPorts , K8sPSPPrivilegedContainer , K8sPSPProcMount , K8sPSPReadOnlyRootFilesystem , K8sPSPSELinuxV2 , K8sPSPVolumeTypes , and K8sRequiredProbes no longer raise violations during updates of existing objects for immutable fields.
- Those templates are: K8sPSPAllowPrivilegeEscalationContainer K8sPSPAppArmor K8sPSPCapabilities K8sContainerLimits K8sContainerRatios K8sPSPHostNetworkingPorts K8sImageDigests K8sPSPPrivilegedContainer K8sPSPProcMount K8sPSPReadOnlyRootFilesystem K8sPSPSeccomp K8sPSPSELinuxV2 K8sPSPAllowedUsers K8sContainerLimits 1.10.2 Feature The constraint template library includes new templates: K8sPSPAutomountServiceAccountTokenPod, RestrictNetworkExclusions, and K8sDisallowAnonymous.
- This note was updated on January 10, 2024 1.17.0 Change The constraint template library's K8sNoExternalServices template now supports the "networking.gke.io/load-balancer-type": "Internal" annotation.

