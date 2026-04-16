---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:19:51.812Z"
product_name: "Binary Authorization"
product_slug: "binary-authorization"
feature_name: "Binary Authorization global policy evaluation mode"
feature_slug: "binary-authorization-global-policy-evaluation-mode"
latest_feature_date: "2019-04-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/binary-authorization/docs/configure-policy-gke"
  - "https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-cli"
  - "https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-rest"
keywords:
  - "evaluation"
  - "global"
  - "added"
  - "mode"
  - "policy"
---

# Binary Authorization global policy evaluation mode

Product: Binary Authorization
Coverage: MEDIUM

## Step 02 Summary

Binary Authorization added support for global policy evaluation mode.

## Extended Definition

Binary Authorization added support for global policy evaluation mode.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/binary-authorization/docs/configure-policy-gke](https://docs.cloud.google.com/binary-authorization/docs/configure-policy-gke)
- [https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-cli](https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-cli)
- [https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-rest](https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-rest)

## Supporting Pages

### "Quickstart: Configure a Binary Authorization policy with GKE \_|\_ Google\

- URL: [https://docs.cloud.google.com/binary-authorization/docs/configure-policy-gke](https://docs.cloud.google.com/binary-authorization/docs/configure-policy-gke)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- The policy YAML file should appear as follows: globalPolicyEvaluationMode: ENABLE defaultAdmissionRule: evaluationMode: ALWAYS DENY enforcementMode: ENFORCED BLOCK AND AUDIT LOG name: projects/ PROJECT ID /policy Import the policy YAML file back into Binary Authorization: gcloud container binauthz policy import /tmp/policy.yaml REST API To modify the policy, do the following: Create a text file with the updated policy in JSON format: cat > /tmp/policy.json /policy", "globalPolicyEvaluationMode": "ENABLE", "defaultAdmissionRule": { "evaluationMode": "ALWAYS DENY", "enforcementMode": "ENFORCED BLOCK AND AUDIT LOG" } } EOM Send the updated policy to the REST API: curl -X PUT \ -H "Content-Type: application/json" \ -H "Authorization: Bearer $(gcloud auth application-default print-access-token)" \ -H "x-goog-user-project: ${PROJECT ID}" \ --data-binary @/tmp/policy.json \ "https://binaryauthorization.googleapis.com/v1/projects/${PROJECT ID}/policy" Retest the policy Again, test the policy by deploying a sample container image to the cluster.
- REST API To view the default policy, retrieve it in JSON format as follows: curl \ -H "Authorization: Bearer $(gcloud auth application-default print-access-token)" \ -H "x-goog-user-project: ${PROJECT ID}" \ "https://binaryauthorization.googleapis.com/v1/projects/${PROJECT ID}/policy" The command produces the following output: { "name": "projects/ PROJECT ID /policy", "globalPolicyEvaluationMode": "ENABLE", "defaultAdmissionRule": { "evaluationMode": "ALWAYS ALLOW", "enforcementMode": "ENFORCED BLOCK AND AUDIT LOG" } } Note: globalPolicyEvaluationMode: ENABLE means that Google-managed system images are exempted.
- In Project Default Rule , the option Allow All Images is selected. gcloud To view the default policy, export the policy YAML file as follows: gcloud container binauthz policy export By default, the file has the following contents: globalPolicyEvaluationMode: ENABLE defaultAdmissionRule: evaluationMode: ALWAYS ALLOW enforcementMode: ENFORCED BLOCK AND AUDIT LOG name: projects/ PROJECT ID /policy Note: globalPolicyEvaluationMode: ENABLE means that Google-managed system images are exempted.
- For details, see globalPolicyEvaluationMode .

### "Configure a policy using the gcloud CLI \_|\_ Binary Authorization \_|\_\

- URL: [https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-cli](https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-cli)
- Source ID: `site-iam-reference`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Set a rule for a Cloud Service Mesh service identity To set a rule for a Cloud Service Mesh service identity, edit your policy.yaml file and add an istioServiceIdentityAdmissionRules block, for example: defaultAdmissionRule : enforcementMode : ENFORCED BLOCK AND AUDIT LOG evaluationMode : ALWAYS DENY globalPolicyEvaluationMode : ENABLE istioServiceIdentityAdmissionRules : SERVICE IDENTITY ID : enforcementMode : ENFORCED BLOCK AND AUDIT LOG evaluationMode : ENFORCEMENT MODE requireAttestationsBy : - < var>ATTESTOR</var> - ... name : projects/ PROJECT ID /policy Replace the following: SERVICE IDENTITY ID : the Cloud Service Mesh service identity to scope this rule to.
- Set a rule for a Kubernetes service account To set a rule for a Kubernetes service account, edit your policy.yaml file and add a kubernetesServiceAccountAdmissionRules block, for example: defaultAdmissionRule : enforcementMode : ENFORCED BLOCK AND AUDIT LOG evaluationMode : ALWAYS DENY globalPolicyEvaluationMode : ENABLE kubernetesServiceAccountAdmissionRules : KUBERNETES SERVICE ACCOUNT ID : enforcementMode : ENFORCED BLOCK AND AUDIT LOG evaluationMode : ENFORCEMENT MODE requireAttestationsBy : - < var>ATTESTOR</var> - ... name : projects/ PROJECT ID /policy Replace the following: KUBERNETES SERVICE ACCOUNT ID : The Kubernetes service account to scope the rule to.
- Set a rule for a Kubernetes namespace To set a rule for a Kubernetes namespace, edit your policy.yaml file and add a kubernetesNamespaceAdmissionRules block, for example: defaultAdmissionRule : enforcementMode : ENFORCED BLOCK AND AUDIT LOG evaluationMode : ALWAYS DENY globalPolicyEvaluationMode : ENABLE kubernetesNamespaceAdmissionRules : KUBERNETES NAMESPACE : enforcementMode : ENFORCED BLOCK AND AUDIT LOG evaluationMode : EVALUATION MODE requireAttestationsBy : - < var>ATTESTOR</var> - ... name : projects/ PROJECT ID /policy Replace the following: KUBERNETES NAMESPACE : The Kubernetes namespace to scope this rule to.
- To update the policy, first export it to a local YAML file, as follows: gcloud container binauthz policy export > /tmp/policy.yaml By default, the file contents look similar to the following: defaultAdmissionRule: enforcementMode: ENFORCED BLOCK AND AUDIT LOG evaluationMode: ALWAYS ALLOW globalPolicyEvaluationMode: ENABLE name: projects/ PROJECT ID /policy To modify the policy, edit the file and add or update sections, as described later in this guide.

### "Configure a policy using the REST API \_|\_ Binary Authorization \_|\_ Google\

- URL: [https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-rest](https://docs.cloud.google.com/binary-authorization/docs/configuring-policy-rest)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Export the policy to a JSON file on your local system: curl \ -H "Authorization: Bearer $(gcloud auth application-default print-access-token)" \ -H "x-goog-user-project: ${PROJECT ID}" \ "https://binaryauthorization.googleapis.com/v1/projects/${PROJECT ID}/policy" \ -o "/tmp/policy.json" By default, the file has the following contents: { "name": "projects/ PROJECT ID /policy", "globalPolicyEvaluationMode": "ENABLE", "defaultAdmissionRule": { "evaluationMode": "ALWAYS ALLOW", "enforcementMode": "ENFORCED BLOCK AND AUDIT LOG" } } Manage exempt images This section applies to GKE, Distributed Cloud, Cloud Run, and Cloud Service Mesh .
- You can view the contents of the system policy using the following command: gcloud alpha container binauthz policy export-system-policy To enable system policy evaluation mode, add the following top-level node to the policy JSON file: "globalPolicyEvaluationMode": "ENABLE" To disable system policy evaluation mode, add the following: "globalPolicyEvaluationMode": "DISABLE" Note: For reliability reasons, the system policy is updated one region at a time.
- To add a cluster-specific rule: In the policy JSON file, add a clusterAdmissionRules node: "clusterAdmissionRules": { "us-central1-a.test-cluster": { "evaluationMode": "REQUIRE ATTESTATION", "requireAttestationsBy": [ " ATTESTOR ", ... ], "enforcementMode": "ENFORCED BLOCK AND AUDIT LOG" } }, where CLUSTER SPECIFIER is the resource ID of the cluster to which the rule applies.
- To set the default rule, edit the defaultAdmissionRule node in the policy JSON file as required: "defaultAdmissionRule": { "evaluationMode": " EVAL MODE ", "enforcementMode": " ENFORCEMENT MODE " requireAttestationsBy: [ ATTESTOR , ... ] } where: EVAL MODE specifies the type of constraint that Binary Authorization evaluates before allowing a container image to be deployed.

