---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:37:27.537Z"
product_name: "Binary Authorization"
product_slug: "binary-authorization"
feature_name: "Binary Authorization policy rules"
feature_slug: "binary-authorization-policy-rules"
latest_feature_date: "2024-08-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-cli"
  - "https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-console"
  - "https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-rest"
keywords:
  - "specific"
  - "setting"
  - "rules"
  - "supports"
  - "policy"
  - "authorization"
  - "now"
  - "binary"
---

# Binary Authorization policy rules

Product: Binary Authorization
Coverage: LOW

## Step 02 Summary

Binary Authorization now supports setting specific policy rules, which became generally available on September 28, 2023.

## Extended Definition

Binary Authorization now supports setting specific policy rules, which became generally available on September 28, 2023.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-cli](https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-cli)
- [https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-console](https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-console)
- [https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-rest](https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-rest)

## Supporting Pages

### "Configure a policy using the gcloud CLI \_|\_ Binary Authorization \_|\_\

- URL: [https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-cli](https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-cli)
- Source ID: `site-iam-reference`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: This page describes how to configure a policy for the container-based platforms that Binary Authorization supports, including Google Kubernetes Engine (GKE), Distributed Cloud, Cloud Run, and Cloud Service Mesh.
- System policy evaluation mode is a policy setting that causes Binary Authorization to evaluate a system policy before evaluating the policy that you configure.
- Set the project ID to the project in which you enabled Binary Authorization: PROJECT ID= PROJECT ID gcloud config set project ${PROJECT ID} Export the policy YAML file This section applies to GKE, Distributed Cloud, Cloud Run, and Cloud Service Mesh .
- To add a cluster-specific rule: In the policy.yaml file, add a clusterAdmissionRules node: clusterAdmissionRules: CLUSTER SPECIFIER : evaluationMode: EVALUATION MODE enforcementMode: ENFORCEMENT MODE requireAttestationsBy: - ATTESTOR - ...

### "Configure a policy using the Google Cloud console \_|\_ Binary Authorization\

- URL: [https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-console](https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-console)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: This page describes how to configure a policy for the container-based platforms that Binary Authorization supports, including Google Kubernetes Engine (GKE), Distributed Cloud, Cloud Run, and Cloud Service Mesh.
- When this setting is enabled at deploy time, Binary Authorization exempts a list of Google-maintained system images that are required by GKE from further policy evaluation.
- Trust all Google-provided system images is a policy setting that enables the Binary Authorization system policy.
- Home Documentation Security Binary Authorization Guides Send feedback Configure a policy using the Google Cloud console Stay organized with collections Save and categorize content based on your preferences.

### "Configure a policy using the REST API \_|\_ Binary Authorization \_|\_ Google\

- URL: [https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-rest](https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-rest)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: This page describes how to configure a policy for the container-based platforms that Binary Authorization supports, including Google Kubernetes Engine (GKE), Distributed Cloud, Cloud Run, and Cloud Service Mesh.
- System policy evaluation mode is a policy setting that causes Binary Authorization to evaluate a system policy before evaluating the policy that you configure.
- Export the policy to a JSON file on your local system: curl \ -H "Authorization: Bearer $(gcloud auth application-default print-access-token)" \ -H "x-goog-user-project: ${PROJECT ID}" \ "https://binaryauthorization.googleapis.com/v1/projects/${PROJECT ID}/policy" \ -o "/tmp/policy.json" By default, the file has the following contents: { "name": "projects/ PROJECT ID /policy", "globalPolicyEvaluationMode": "ENABLE", "defaultAdmissionRule": { "evaluationMode": "ALWAYS ALLOW", "enforcementMode": "ENFORCED BLOCK AND AUDIT LOG" } } Manage exempt images This section applies to GKE, Distributed Cloud, Cloud Run, and Cloud Service Mesh .
- Import the policy JSON file back into Binary Authorization by entering the following: curl -X PUT \ -H "Content-Type: application/json" \ -H "Authorization: Bearer $(gcloud auth application-default print-access-token)" \ -H "x-goog-user-project: ${PROJECT ID}" \ --data-binary @/tmp/policy.json \ "https://binaryauthorization.googleapis.com/v1/projects/${PROJECT ID}/policy" Note: It can take a few minutes for the policy to take effect.

