# Additional subnets for VPC-native clusters

Product: Google Kubernetes Engine
Feature slug: `additional-subnets-for-vpc-native-clusters`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Additional subnets let VPC-native clusters create new node pools whose node and Pod IPv4 addresses come from the added subnet ranges.

## Lifecycle

- Latest feature date: 2025-10-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- certificate
- credential
- encrypt
- firewall
- iam
- identity
- key
- permission
- policy
- role
- secret
- token

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/cloudnativepg](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/cloudnativepg)
