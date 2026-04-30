# Local SSD default ephemeral storage

Product: Google Kubernetes Engine
Feature slug: `local-ssd-default-ephemeral-storage`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GKE uses Local SSD volumes as ephemeral storage by default on third-generation machine series and makes the Local NVMe SSD block count optional.

## Lifecycle

- Latest feature date: 2023-10-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- constraint
- key
- logging
- policy
- secret
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cloud-storage-fuse-csi-driver-perf)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads)
