---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:19:51.809Z"
product_name: "Binary Authorization"
product_slug: "binary-authorization"
feature_name: "Binary Authorization policy rules"
feature_slug: "binary-authorization-policy-rules"
latest_feature_date: "2024-08-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-rest"
  - "https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-cli"
  - "https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-console"
keywords:
  - "specific"
  - "setting"
  - "rules"
  - "supports"
  - "policy"
---

# Binary Authorization policy rules

Product: Binary Authorization
Coverage: MEDIUM

## Step 02 Summary

Binary Authorization now supports setting specific policy rules, which became generally available on September 28, 2023.

## Extended Definition

Binary Authorization now supports setting specific policy rules, which became generally available on September 28, 2023.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-rest](https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-rest)
- [https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-cli](https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-cli)
- [https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-console](https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-console)

## Supporting Pages

### "Configure a policy using the gcloud CLI \_|\_ Binary Authorization \_|\_\

- URL: [https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-cli](https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-cli)
- Source ID: `site-iam-reference`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To add a cluster-specific rule: In the policy.yaml file, add a clusterAdmissionRules node: clusterAdmissionRules: CLUSTER SPECIFIER : evaluationMode: EVALUATION MODE enforcementMode: ENFORCEMENT MODE requireAttestationsBy: - ATTESTOR - ...
- Cluster-specific rules are defined in clusterAdmissionRules nodes in the policy YAML file.
- Cluster-specific rules are an optional part of a policy.
- Set a rule for a Cloud Service Mesh service identity To set a rule for a Cloud Service Mesh service identity, edit your policy.yaml file and add an istioServiceIdentityAdmissionRules block, for example: defaultAdmissionRule : enforcementMode : ENFORCED BLOCK AND AUDIT LOG evaluationMode : ALWAYS DENY globalPolicyEvaluationMode : ENABLE istioServiceIdentityAdmissionRules : SERVICE IDENTITY ID : enforcementMode : ENFORCED BLOCK AND AUDIT LOG evaluationMode : ENFORCEMENT MODE requireAttestationsBy : - < var>ATTESTOR</var> - ... name : projects/ PROJECT ID /policy Replace the following: SERVICE IDENTITY ID : the Cloud Service Mesh service identity to scope this rule to.

### "Configure a policy using the Google Cloud console \_|\_ Binary Authorization\

- URL: [https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-console](https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-console)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- A policy can also have one or more cluster-specific rules .
- Cluster-specific rules are an optional part of a policy.
- Add specific rules Note : This feature can only be enabled on clusters running on the following GKE releases: 1.18.12-gke.700+ 1.19.4-gke.700+ 1.20.0-gke.600+ 1.21+ You can create rules that are scoped to either a mesh service identity, a Kubernetes service account, or a Kubernetes namespace.
- Note: This page describes how to configure a policy for the container-based platforms that Binary Authorization supports, including Google Kubernetes Engine (GKE), Distributed Cloud, Cloud Run, and Cloud Service Mesh.

### "Configure a policy using the REST API \_|\_ Binary Authorization \_|\_ Google\

- URL: [https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-rest](https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-rest)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To add a cluster-specific rule: In the policy JSON file, add a clusterAdmissionRules node: "clusterAdmissionRules": { "us-central1-a.test-cluster": { "evaluationMode": "REQUIRE ATTESTATION", "requireAttestationsBy": [ " ATTESTOR ", ... ], "enforcementMode": "ENFORCED BLOCK AND AUDIT LOG" } }, where CLUSTER SPECIFIER is the resource ID of the cluster to which the rule applies.
- Configuring a policy requires you to: Export a policy JSON file Add any additional exempt images (optional) Set the default rule Add any cluster-specific rules (optional) Import the policy JSON file Most real-world policies check to see whether all required attestors have verified that a container image is ready to be deployed.
- Cluster-specific rules are defined in clusterAdmissionRules nodes in the policy JSON file.
- Cluster-specific rules are an optional part of a policy.

