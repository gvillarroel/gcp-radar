---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.360Z"
product_name: "Anthos clusters on AWS"
product_slug: "anthos-clusters-on-aws"
feature_name: "Binary Authorization integration"
feature_slug: "binary-authorization-integration"
latest_feature_date: "2023-09-06"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/security"
keywords:
  - "deploy-time enforcement"
  - "Binary Authorization"
  - "signature validation"
  - "Binauthz integration"
  - "policy attestation"
  - "binary-authz"
  - "image signature"
  - "image signing"
---

# Binary Authorization integration

Product: Anthos clusters on AWS
Coverage: HIGH

## Step 02 Summary

Anthos clusters on AWS add Binary Authorization support to enforce trusted image signing and signature validation at deploy time.

## Extended Definition

On Anthos clusters on AWS, Binary Authorization performs deploy-time verification of container images by retrieving the image's digital signature from the registry and validating it against registered public keys and policy rules. The system denies container deployment when signature verification fails or any policy criterion is unmet, and allows deployment only when all checks pass.

## Evidence Summary

The cited security overview explains the deploy-time decision flow for Binary Authorization, including signature retrieval, public-key-based verification, and policy-based allow/deny outcomes.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/security](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/security)

## Supporting Pages

### Security overview \_|\_ GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/security](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/security)
- Source ID: `site-iam-reference`
- Final score: 28
- Re-rank relevance: WEAK
- Re-rank rationale: The page is a general security overview and does not describe Binary Authorization, but it broadly discusses workload and container security responsibilities.

Evidence snippets:
- If the digital signature can't be successfully verified using the public key and the image data, or if the image doesn't meet other criteria defined in the policy, the Binary Authorization system denies the container deployment.
- If the digital signature can be successfully verified using the public key and the image data, and the image meets all other criteria defined in the policy, the Binary Authorization system allows the container to be deployed.
- When a request to deploy a container is made, the Binary Authorization system retrieves the digital signature attached to the image in the registry.
- The public key is then registered with the Binary Authorization system so that the system can use the public key for signature verification.

