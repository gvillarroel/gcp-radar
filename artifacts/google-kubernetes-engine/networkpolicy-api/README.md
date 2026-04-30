# NetworkPolicy API

Product: Google Kubernetes Engine
Feature slug: `networkpolicy-api`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The extensions/v1beta1 NetworkPolicy API is no longer served in GKE v1.16 and should be migrated to networking.k8s.io/v1; deprecated on 2020-02-25.

## Lifecycle

- Latest feature date: 2020-02-25
- Deprecation date: 2020-02-25
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- armor
- auth
- authorization
- certificate
- permission
- policy
- role
- secret
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
