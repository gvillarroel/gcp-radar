# Network tags for GKE nodes

Product: Google Kubernetes Engine
Feature slug: `network-tags-for-gke-nodes`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Network tags let you dynamically apply firewall rules to nodes in GKE Autopilot clusters and auto-provisioned Standard node pools.

## Lifecycle

- Latest feature date: 2022-03-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- confidential (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-network-tags](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-network-tags), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass))
- firewall (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-network-tags](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-network-tags), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass))
- iam (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-network-tags](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-network-tags), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass))
- key (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-network-tags](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-network-tags), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass))
- kms (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-network-tags](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-network-tags), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass))
- logging (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-network-tags](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-network-tags), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-network-tags](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-network-tags), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass))
- private (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-network-tags](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-network-tags), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-network-tags](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-network-tags), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/allocate-network-resources-dra)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-network-tags](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-network-tags)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
