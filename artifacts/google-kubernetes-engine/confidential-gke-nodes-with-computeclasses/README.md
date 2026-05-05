# Confidential GKE Nodes with ComputeClasses

Product: Google Kubernetes Engine
Feature slug: `confidential-gke-nodes-with-computeclasses`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

ComputeClasses can provision Confidential GKE Nodes with any supported Confidential Computing type.

## Lifecycle

- Latest feature date: 2025-09-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- confidential (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes))
- encrypt (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes))
- key (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes)
