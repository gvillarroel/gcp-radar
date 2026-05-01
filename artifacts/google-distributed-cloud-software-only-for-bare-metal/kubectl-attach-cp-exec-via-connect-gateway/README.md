# kubectl attach/cp/exec via Connect Gateway

Product: Google Distributed Cloud (software only) for bare metal
Feature slug: `kubectl-attach-cp-exec-via-connect-gateway`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The connect gateway preview feature enables kubectl attach, cp, and exec commands through gcloud beta container fleet memberships get-credentials.

## Lifecycle

- Latest feature date: 2024-08-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- credential
- key
- private
- role
- secret

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
