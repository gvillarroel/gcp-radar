# Ingress HTTPS redirects

Product: Google Kubernetes Engine
Feature slug: `ingress-https-redirects`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Adds support for redirecting HTTP requests to HTTPS on the same external load balancer IP.

## Lifecycle

- Latest feature date: 2020-11-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- iam (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/full-stack-scale](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/full-stack-scale))
- identity (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/full-stack-scale](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/full-stack-scale))
- permission (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/full-stack-scale](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/full-stack-scale))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/full-stack-scale](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/full-stack-scale))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/full-stack-scale](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/full-stack-scale))
- secret (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/full-stack-scale](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/full-stack-scale))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/full-stack-scale](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/full-stack-scale))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/full-stack-scale](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/full-stack-scale)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
