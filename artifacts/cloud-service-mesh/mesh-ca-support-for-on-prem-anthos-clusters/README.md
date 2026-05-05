# Mesh CA support for on-prem Anthos clusters

Product: Cloud Service Mesh
Feature slug: `mesh-ca-support-for-on-prem-anthos-clusters`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Mesh CA support for on-prem Anthos clusters enables new Anthos Service Mesh installations on VMware and bare metal to use Mesh CA; Mesh CA support for on-prem Anthos clusters enables new Anthos Service Mesh installations on VMware and bare metal to use Mesh CA.

## Lifecycle

- Latest feature date: 2021-06-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane), [https://docs.cloud.google.com/service-mesh/docs/canonical-service](https://docs.cloud.google.com/service-mesh/docs/canonical-service), [https://docs.cloud.google.com/service-mesh/docs/canonical-service-migrate-from-in-cluster-controller](https://docs.cloud.google.com/service-mesh/docs/canonical-service-migrate-from-in-cluster-controller), [https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices](https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices))
- auth (evidence: [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane), [https://docs.cloud.google.com/service-mesh/docs/canonical-service](https://docs.cloud.google.com/service-mesh/docs/canonical-service), [https://docs.cloud.google.com/service-mesh/docs/canonical-service-migrate-from-in-cluster-controller](https://docs.cloud.google.com/service-mesh/docs/canonical-service-migrate-from-in-cluster-controller), [https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices](https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices))
- certificate (evidence: [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane), [https://docs.cloud.google.com/service-mesh/docs/canonical-service](https://docs.cloud.google.com/service-mesh/docs/canonical-service), [https://docs.cloud.google.com/service-mesh/docs/canonical-service-migrate-from-in-cluster-controller](https://docs.cloud.google.com/service-mesh/docs/canonical-service-migrate-from-in-cluster-controller), [https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices](https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices))
- iam (evidence: [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane), [https://docs.cloud.google.com/service-mesh/docs/canonical-service](https://docs.cloud.google.com/service-mesh/docs/canonical-service), [https://docs.cloud.google.com/service-mesh/docs/canonical-service-migrate-from-in-cluster-controller](https://docs.cloud.google.com/service-mesh/docs/canonical-service-migrate-from-in-cluster-controller), [https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices](https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices))
- identity (evidence: [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane), [https://docs.cloud.google.com/service-mesh/docs/canonical-service](https://docs.cloud.google.com/service-mesh/docs/canonical-service), [https://docs.cloud.google.com/service-mesh/docs/canonical-service-migrate-from-in-cluster-controller](https://docs.cloud.google.com/service-mesh/docs/canonical-service-migrate-from-in-cluster-controller), [https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices](https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices))
- permission (evidence: [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane), [https://docs.cloud.google.com/service-mesh/docs/canonical-service](https://docs.cloud.google.com/service-mesh/docs/canonical-service), [https://docs.cloud.google.com/service-mesh/docs/canonical-service-migrate-from-in-cluster-controller](https://docs.cloud.google.com/service-mesh/docs/canonical-service-migrate-from-in-cluster-controller), [https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices](https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices))
- policy (evidence: [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane), [https://docs.cloud.google.com/service-mesh/docs/canonical-service](https://docs.cloud.google.com/service-mesh/docs/canonical-service), [https://docs.cloud.google.com/service-mesh/docs/canonical-service-migrate-from-in-cluster-controller](https://docs.cloud.google.com/service-mesh/docs/canonical-service-migrate-from-in-cluster-controller), [https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices](https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices))
- role (evidence: [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane), [https://docs.cloud.google.com/service-mesh/docs/canonical-service](https://docs.cloud.google.com/service-mesh/docs/canonical-service), [https://docs.cloud.google.com/service-mesh/docs/canonical-service-migrate-from-in-cluster-controller](https://docs.cloud.google.com/service-mesh/docs/canonical-service-migrate-from-in-cluster-controller), [https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices](https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices))
- security (evidence: [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane), [https://docs.cloud.google.com/service-mesh/docs/canonical-service](https://docs.cloud.google.com/service-mesh/docs/canonical-service), [https://docs.cloud.google.com/service-mesh/docs/canonical-service-migrate-from-in-cluster-controller](https://docs.cloud.google.com/service-mesh/docs/canonical-service-migrate-from-in-cluster-controller), [https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices](https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices))

## Official Evidence

- [https://docs.cloud.google.com/service-mesh/docs/canonical-service](https://docs.cloud.google.com/service-mesh/docs/canonical-service)
- [https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices](https://docs.cloud.google.com/service-mesh/docs/canonical-service-best-practices)
- [https://docs.cloud.google.com/service-mesh/docs/canonical-service-migrate-from-in-cluster-controller](https://docs.cloud.google.com/service-mesh/docs/canonical-service-migrate-from-in-cluster-controller)
- [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
