---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.178Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Saxml on GKE"
feature_slug: "saxml-on-gke"
latest_feature_date: "2025-04-24"
deprecation_date: "2025-04-24"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/apis-1-16"
keywords:
  - "actively"
  - "though"
  - "saxml"
  - "updated"
  - "being"
  - "longer"
---

# Saxml on GKE

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Saxml on GKE is no longer being actively updated, though existing deployments continue to function without disruption; deprecated on 2025-04-24.

## Extended Definition

Saxml on GKE is no longer being actively updated, though existing deployments continue to function without disruption; deprecated on 2025-04-24.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies)
- [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/apis-1-16](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/apis-1-16)

## Supporting Pages

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- The following versions of GKE or later have been updated to address the providerID issue: 1.33.1-gke.1386000 1.32.4-gke.1533000 1.31.9-gke.1119000 1.30.12-gke.1208000 Optionally, if you cannot upgrade, implement the following validating admission policy on your cluster to mitigate the providerID issue: apiVersion : admissionregistration . k8s . io / v1 kind : ValidatingAdmissionPolicy metadata : name : validate - node - providerid spec : failurePolicy : Fail matchConstraints : resourceRules : - apiGroups : [ "" ] apiVersions : [ "v1" ] operations : [ "CREATE", "UPDATE" ] resources : [ "nodes" ] matchConditions : - name : "has-providerid" expression : "has(object.spec.providerID)" validations : - expression : "object.spec.providerID == '' object.spec.providerID.endsWith('/' + object.metadata.name)" message : "node.spec.providerID must match the node name" --- apiVersion : admissionregistration . k8s . io / v1 kind : ValidatingAdmissionPolicyBinding metadata : name : validate - node - providerid - binding spec : policyName : validate - node - providerid validationActions : [ Deny ] Use node restricted labels when isolating workloads to specific nodes as a security control If you are using labels for node isolation, as described in Kubernetes documentation , use node restricted labels (for example, labels of the form node-restriction.kubernetes.io/example-constraint ) in node affinity and node selector terms used for workload isolation.
- For instructions, refer to the following hardening guides: GKE Standard GKE on VMware Google Distributed Cloud Virtual for Bare Metal Update 2022-03-15: GKE on AWS Update 2022-03-15: GKE on Azure Low GCP-2022-008 Published: 2022-02-23 Updated: 2022-04-28 Reference: CVE-2022-23606 , CVE-2022-21655 , CVE-2021-43826 , CVE-2021-43825 , CVE-2021-43824 , CVE-2022-21654 , CVE-2022-21657 , CVE-2022-21656 GKE Description Severity The Envoy project recently discovered a set of vulnerabilities, CVE-2022-23606 , CVE-2022-21655 , CVE-2021-43826 , CVE-2021-43825 , CVE-2021-43824 , CVE-2022-21654 , CVE-2022-21657 , and CVE-2022-21656 which may impact GKE clusters using Anthos Service Mesh , Istio-on-GKE , or custom Istio deployments.
- Upgrade your Container-Optimized OS node pools to one of the following versions or later: 1.24.14-gke.1027001 1.25.14-gke.1351000 1.26.9-gke.1345000 1.27.5-gke.1647000 Upgrade your Ubuntu node pools to one of the following versions or later: 1.24.17-gke.2186000 1.25.15-gke.1016000 1.26.9-gke.1548000 1.27.6-gke.1551000 1.28.2-gke.1256000 High GKE on VMware Updated: 2023-11-16 Description Severity The following vulnerabilities were discovered in the Linux kernel that can lead to a privilege escalation on Container-Optimized OS and Ubuntu nodes.
- No action is needed None GCP-2023-014 Published: 2023-06-15 Updated: 2023-08-11 Reference: CVE-2023-2727 , CVE-2023-2728 2023-08-11 Update: Added patch versions for GKE on VMware, GKE on AWS, GKE on Azure, and GKE on Bare Metal GKE Description Severity Two new security issues were discovered in Kubernetes where users may be able to launch containers that bypass policy restrictions when using ephemeral containers and either ImagePolicyWebhook (CVE-2023-2727) or the ServiceAccount admission plugin (CVE-2023-2728).

### "Node upgrade strategies \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies)
- Source ID: `site-docs-reference-2`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
- Although the configurations of PDBs may vary, if you create a PDB with maxUnavailable=1 for one or more workloads running on the node pool, then only one Pod of those workloads can be evicted at a time, limiting the parallelism of the entire upgrade.
- When to choose surge upgrades for your environment If cost optimization is important for you and your workload can tolerate being shut down in less than 60 minutes, we recommend choosing surge upgrades for your node pools.
- If cluster autoscaler isn't actively scaling down underutilized nodes, see Troubleshoot cluster autoscaler not scaling down and Consider Pod scheduling and disruption .

### "Feature and API deprecations \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/apis-1-16](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/apis-1-16)
- Source ID: `site-iam-reference-required-2`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Container Registry May 15, 2023 March 18, 2025 Transition from Container Registry to Artifact Registry in GKE No GKE Compliance dashboard (Preview) January 28, 2025 June 30, 2025 Posture management feature deprecations No Workload vulnerability scanning GKE security posture dashboard Standard tier: July 23, 2024 Advanced Vulnerability Insights: June 16, 2025 Standard tier: July 31, 2025 Advanced Vulnerability Insights: June 16, 2026 Vulnerability scanning removal from GKE Standard edition Yes Supply chain concerns - Binary Authorization (Preview) GKE security posture dashboard January 28, 2025 March 31, 2025 Posture management feature deprecations No Kubernetes security posture - advanced tier (Preview) GKE security posture dashboard January 28, 2025 March 31, 2025 Posture management feature deprecations Yes containerd 1.7 features GKE version 1.32 GKE version 1.33 Migrate nodes to containerd 2 Yes Linux cgroupv1 mode GKE version 1.31 TBD Migrate nodes to Linux cgroupv2 No Vulnerability scanning removal from GKE standard edition July 23, 2024 July 31, 2025 Vulnerability scanning removal from GKE Standard edition No TLS certificates signed with SHA-1 algorithm GKE version 1.24 GKE version 1.29 SHA-1 TLS certificates support removal Yes Built-in authentication plugin for Kubernetes clients GKE version 1.22 GKE version 1.25 Deprecated authentication plugin for Kubernetes clients No PodSecurityPolicy GKE version 1.21 GKE version 1.25 PodSecurityPolicy deprecation Yes Docker-based node images GKE version 1.20 GKE version 1.24 Docker node image deprecation Yes X.509 Common Name field in webhook certificates GKE version 1.19 GKE version 1.23 Webhook certificates CN field deprecation Yes Kubernetes API deprecations The following table provides an overview of Kubernetes APIs that are deprecated and no longer served, sorted by Kubernetes version: Kubernetes version More information Does GKE detect and report usage?
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Windows Server Semi-Annual Channel (SAC) node images N/A August 9, 2022 Windows Server SAC end of servicing No Saxml for multi-host serving on TPUs and GKE N/A April 24, 2025 Release note No What's next Viewing deprecation insights and recommendations Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Kubernetes feature deprecations The following table outlines ongoing GKE feature deprecations, as well as the version in which those features are no longer supported: Name Deprecated Removed More information Does GKE detect and report usage?

