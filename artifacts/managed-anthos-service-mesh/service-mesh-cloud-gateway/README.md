# Service mesh cloud gateway

Product: Managed Anthos Service Mesh
Feature slug: `service-mesh-cloud-gateway`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Service mesh cloud gateway lets you configure Anthos Service Mesh ingress gateway with Cloud Load Balancing through the Kubernetes Gateway API; Service mesh cloud gateway lets you configure Anthos Service Mesh ingress gateway with Cloud Load Balancing through the Kubernetes Gateway API.

## Lifecycle

- Latest feature date: 2023-01-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial), [https://docs.cloud.google.com/service-mesh/docs/data-plane-extensibility](https://docs.cloud.google.com/service-mesh/docs/data-plane-extensibility), [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz), [https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls](https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls))
- allow (evidence: [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial), [https://docs.cloud.google.com/service-mesh/docs/data-plane-extensibility](https://docs.cloud.google.com/service-mesh/docs/data-plane-extensibility), [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz), [https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls](https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls))
- audit (evidence: [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial), [https://docs.cloud.google.com/service-mesh/docs/data-plane-extensibility](https://docs.cloud.google.com/service-mesh/docs/data-plane-extensibility), [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz), [https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls](https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls))
- auth (evidence: [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial), [https://docs.cloud.google.com/service-mesh/docs/data-plane-extensibility](https://docs.cloud.google.com/service-mesh/docs/data-plane-extensibility), [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz), [https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls](https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls))
- authorization (evidence: [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial), [https://docs.cloud.google.com/service-mesh/docs/data-plane-extensibility](https://docs.cloud.google.com/service-mesh/docs/data-plane-extensibility), [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz), [https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls](https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls))
- credential (evidence: [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial), [https://docs.cloud.google.com/service-mesh/docs/data-plane-extensibility](https://docs.cloud.google.com/service-mesh/docs/data-plane-extensibility), [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz), [https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls](https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls))
- firewall (evidence: [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial), [https://docs.cloud.google.com/service-mesh/docs/data-plane-extensibility](https://docs.cloud.google.com/service-mesh/docs/data-plane-extensibility), [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz), [https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls](https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls))
- iam (evidence: [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial), [https://docs.cloud.google.com/service-mesh/docs/data-plane-extensibility](https://docs.cloud.google.com/service-mesh/docs/data-plane-extensibility), [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz), [https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls](https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls))
- key (evidence: [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial), [https://docs.cloud.google.com/service-mesh/docs/data-plane-extensibility](https://docs.cloud.google.com/service-mesh/docs/data-plane-extensibility), [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz), [https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls](https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls))
- security (evidence: [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial), [https://docs.cloud.google.com/service-mesh/docs/data-plane-extensibility](https://docs.cloud.google.com/service-mesh/docs/data-plane-extensibility), [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz), [https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls](https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls))

## Official Evidence

- [https://docs.cloud.google.com/service-mesh/docs/data-plane-extensibility](https://docs.cloud.google.com/service-mesh/docs/data-plane-extensibility)
- [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial)
- [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz)
- [https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls](https://docs.cloud.google.com/service-mesh/docs/tutorials/mtls)
