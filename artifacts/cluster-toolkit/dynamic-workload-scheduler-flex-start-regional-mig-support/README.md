# Dynamic Workload Scheduler Flex-start regional MIG support

Product: Cluster Toolkit
Feature slug: `dynamic-workload-scheduler-flex-start-regional-mig-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cluster Toolkit migrates Dynamic Workload Scheduler Flex-start to regional managed instance groups.

## Lifecycle

- Latest feature date: 2025-08-26
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint](https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint), [https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices](https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices), [https://docs.cloud.google.com/cluster-toolkit/docs/simcenter-star-ccm/run-workload](https://docs.cloud.google.com/cluster-toolkit/docs/simcenter-star-ccm/run-workload), [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d))
- allow (evidence: [https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint](https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint), [https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices](https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices), [https://docs.cloud.google.com/cluster-toolkit/docs/simcenter-star-ccm/run-workload](https://docs.cloud.google.com/cluster-toolkit/docs/simcenter-star-ccm/run-workload), [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d))
- iam (evidence: [https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint](https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint), [https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices](https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices), [https://docs.cloud.google.com/cluster-toolkit/docs/simcenter-star-ccm/run-workload](https://docs.cloud.google.com/cluster-toolkit/docs/simcenter-star-ccm/run-workload), [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d))
- key (evidence: [https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint](https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint), [https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices](https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices), [https://docs.cloud.google.com/cluster-toolkit/docs/simcenter-star-ccm/run-workload](https://docs.cloud.google.com/cluster-toolkit/docs/simcenter-star-ccm/run-workload), [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d))
- logging (evidence: [https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint](https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint), [https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices](https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices), [https://docs.cloud.google.com/cluster-toolkit/docs/simcenter-star-ccm/run-workload](https://docs.cloud.google.com/cluster-toolkit/docs/simcenter-star-ccm/run-workload), [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d))
- permission (evidence: [https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint](https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint), [https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices](https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices), [https://docs.cloud.google.com/cluster-toolkit/docs/simcenter-star-ccm/run-workload](https://docs.cloud.google.com/cluster-toolkit/docs/simcenter-star-ccm/run-workload), [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d))
- private (evidence: [https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint](https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint), [https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices](https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices), [https://docs.cloud.google.com/cluster-toolkit/docs/simcenter-star-ccm/run-workload](https://docs.cloud.google.com/cluster-toolkit/docs/simcenter-star-ccm/run-workload), [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d))
- role (evidence: [https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint](https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint), [https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices](https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices), [https://docs.cloud.google.com/cluster-toolkit/docs/simcenter-star-ccm/run-workload](https://docs.cloud.google.com/cluster-toolkit/docs/simcenter-star-ccm/run-workload), [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d))

## Official Evidence

- [https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d](https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-h4d)
- [https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint](https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint)
- [https://docs.cloud.google.com/cluster-toolkit/docs/simcenter-star-ccm/run-workload](https://docs.cloud.google.com/cluster-toolkit/docs/simcenter-star-ccm/run-workload)
- [https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices](https://docs.cloud.google.com/cluster-toolkit/docs/tutorials/best-practices)
