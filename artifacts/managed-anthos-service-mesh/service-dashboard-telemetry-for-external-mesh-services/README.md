# Service dashboard telemetry for external mesh services

Product: Managed Anthos Service Mesh
Feature slug: `service-dashboard-telemetry-for-external-mesh-services`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Service dashboard can display telemetry from external mesh services that have a canonical service label; The Service dashboard can display telemetry from external mesh services that have a canonical service label.

## Lifecycle

- Latest feature date: 2023-04-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies), [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial), [https://docs.cloud.google.com/service-mesh/docs/canonical-service](https://docs.cloud.google.com/service-mesh/docs/canonical-service), [https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices](https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices))
- allow (evidence: [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies), [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial), [https://docs.cloud.google.com/service-mesh/docs/canonical-service](https://docs.cloud.google.com/service-mesh/docs/canonical-service), [https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices](https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices))
- audit (evidence: [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies), [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial), [https://docs.cloud.google.com/service-mesh/docs/canonical-service](https://docs.cloud.google.com/service-mesh/docs/canonical-service), [https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices](https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices))
- auth (evidence: [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies), [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial), [https://docs.cloud.google.com/service-mesh/docs/canonical-service](https://docs.cloud.google.com/service-mesh/docs/canonical-service), [https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices](https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices))
- authorization (evidence: [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies), [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial), [https://docs.cloud.google.com/service-mesh/docs/canonical-service](https://docs.cloud.google.com/service-mesh/docs/canonical-service), [https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices](https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices))
- identity (evidence: [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies), [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial), [https://docs.cloud.google.com/service-mesh/docs/canonical-service](https://docs.cloud.google.com/service-mesh/docs/canonical-service), [https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices](https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices))
- logging (evidence: [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies), [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial), [https://docs.cloud.google.com/service-mesh/docs/canonical-service](https://docs.cloud.google.com/service-mesh/docs/canonical-service), [https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices](https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices))
- policy (evidence: [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies), [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial), [https://docs.cloud.google.com/service-mesh/docs/canonical-service](https://docs.cloud.google.com/service-mesh/docs/canonical-service), [https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices](https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices))
- private (evidence: [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies), [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial), [https://docs.cloud.google.com/service-mesh/docs/canonical-service](https://docs.cloud.google.com/service-mesh/docs/canonical-service), [https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices](https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices))
- security (evidence: [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies), [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial), [https://docs.cloud.google.com/service-mesh/docs/canonical-service](https://docs.cloud.google.com/service-mesh/docs/canonical-service), [https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices](https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices))

## Official Evidence

- [https://docs.cloud.google.com/service-mesh/docs/canonical-service](https://docs.cloud.google.com/service-mesh/docs/canonical-service)
- [https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices](https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices)
- [https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial](https://docs.cloud.google.com/service-mesh/docs/security/egress-gateway-gke-tutorial)
- [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz-audit-policies)
