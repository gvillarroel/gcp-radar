# Ingress HTTP access logging

Product: Google Kubernetes Engine
Feature slug: `ingress-http-access-logging`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

HTTP access logging for newly created GKE Ingress resources is being deprecated; Ingress access logging became a configurable feature named logging and can be toggled through BackendConfig; deprecated on 2020-05-12.

## Lifecycle

- Latest feature date: 2020-04-10
- Deprecation date: 2020-05-12
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- armor
- audit
- certificate
- firewall
- logging
- permission
- policy
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/elk-stack](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/elk-stack)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
