# All ports for internal load balancer Services

Product: Google Kubernetes Engine
Feature slug: `all-ports-for-internal-load-balancer-services`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

All ports lets internal TCP/UDP load balancer Services use more than five ports.

## Lifecycle

- Latest feature date: 2021-03-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- certificate
- key
- permission
- policy
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/create-cluster-using-terraform](https://docs.cloud.google.com/kubernetes-engine/docs/quickstarts/create-cluster-using-terraform)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
