# GPU workloads on Confidential GKE Nodes

Product: Google Kubernetes Engine
Feature slug: `gpu-workloads-on-confidential-gke-nodes`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Confidential GKE Nodes can run A3 High GPU workloads with NVIDIA H100 GPUs using manual or automatic driver installation; GKE supports running GPU workloads on Confidential GKE Nodes with A3 High machine types and NVIDIA H100 GPUs.

## Lifecycle

- Latest feature date: 2025-08-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- confidential (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes))
- encrypt (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes))
- key (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/gpus)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes](https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ConfidentialNodes)
