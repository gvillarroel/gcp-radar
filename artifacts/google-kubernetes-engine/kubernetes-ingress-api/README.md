# Kubernetes Ingress API

Product: Google Kubernetes Engine
Feature slug: `kubernetes-ingress-api`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Kubernetes Ingress API graduated to general availability in Kubernetes 1.19.

## Lifecycle

- Latest feature date: 2021-01-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/highavailabilityapplication](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/highavailabilityapplication), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication))
- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/highavailabilityapplication](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/highavailabilityapplication), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication))
- credential (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/highavailabilityapplication](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/highavailabilityapplication), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication))
- iam (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/highavailabilityapplication](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/highavailabilityapplication), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication))
- permission (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/highavailabilityapplication](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/highavailabilityapplication), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/highavailabilityapplication](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/highavailabilityapplication), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/highavailabilityapplication](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/highavailabilityapplication), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication))
- secret (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/highavailabilityapplication](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/highavailabilityapplication), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/highavailabilityapplication](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/highavailabilityapplication), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/api-server-authentication)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/highavailabilityapplication](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/highavailabilityapplication)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer)
