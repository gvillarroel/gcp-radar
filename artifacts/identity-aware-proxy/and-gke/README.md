# and GKE

Product: Identity-Aware Proxy
Feature slug: `and-gke`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Identity-Aware Proxy provides identity-based access protection for App Engine standard environment, Compute Engine, and GKE.

## Lifecycle

- Latest feature date: 2017-08-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/iap/docs/enabling-kubernetes-howto](https://docs.cloud.google.com/iap/docs/enabling-kubernetes-howto), [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto), [https://docs.cloud.google.com/iap/docs/concepts-overview](https://docs.cloud.google.com/iap/docs/concepts-overview), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing))
- allow (evidence: [https://docs.cloud.google.com/iap/docs/enabling-kubernetes-howto](https://docs.cloud.google.com/iap/docs/enabling-kubernetes-howto), [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto), [https://docs.cloud.google.com/iap/docs/concepts-overview](https://docs.cloud.google.com/iap/docs/concepts-overview), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing))
- audit (evidence: [https://docs.cloud.google.com/iap/docs/enabling-kubernetes-howto](https://docs.cloud.google.com/iap/docs/enabling-kubernetes-howto), [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto), [https://docs.cloud.google.com/iap/docs/concepts-overview](https://docs.cloud.google.com/iap/docs/concepts-overview), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing))
- auth (evidence: [https://docs.cloud.google.com/iap/docs/enabling-kubernetes-howto](https://docs.cloud.google.com/iap/docs/enabling-kubernetes-howto), [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto), [https://docs.cloud.google.com/iap/docs/concepts-overview](https://docs.cloud.google.com/iap/docs/concepts-overview), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing))
- authorization (evidence: [https://docs.cloud.google.com/iap/docs/enabling-kubernetes-howto](https://docs.cloud.google.com/iap/docs/enabling-kubernetes-howto), [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto), [https://docs.cloud.google.com/iap/docs/concepts-overview](https://docs.cloud.google.com/iap/docs/concepts-overview), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing))
- iam (evidence: [https://docs.cloud.google.com/iap/docs/enabling-kubernetes-howto](https://docs.cloud.google.com/iap/docs/enabling-kubernetes-howto), [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto), [https://docs.cloud.google.com/iap/docs/concepts-overview](https://docs.cloud.google.com/iap/docs/concepts-overview), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing))
- identity (evidence: [https://docs.cloud.google.com/iap/docs/enabling-kubernetes-howto](https://docs.cloud.google.com/iap/docs/enabling-kubernetes-howto), [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto), [https://docs.cloud.google.com/iap/docs/concepts-overview](https://docs.cloud.google.com/iap/docs/concepts-overview), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing))
- logging (evidence: [https://docs.cloud.google.com/iap/docs/enabling-kubernetes-howto](https://docs.cloud.google.com/iap/docs/enabling-kubernetes-howto), [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto), [https://docs.cloud.google.com/iap/docs/concepts-overview](https://docs.cloud.google.com/iap/docs/concepts-overview), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing))
- permission (evidence: [https://docs.cloud.google.com/iap/docs/enabling-kubernetes-howto](https://docs.cloud.google.com/iap/docs/enabling-kubernetes-howto), [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto), [https://docs.cloud.google.com/iap/docs/concepts-overview](https://docs.cloud.google.com/iap/docs/concepts-overview), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing))
- policy (evidence: [https://docs.cloud.google.com/iap/docs/enabling-kubernetes-howto](https://docs.cloud.google.com/iap/docs/enabling-kubernetes-howto), [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto), [https://docs.cloud.google.com/iap/docs/concepts-overview](https://docs.cloud.google.com/iap/docs/concepts-overview), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing))
- role (evidence: [https://docs.cloud.google.com/iap/docs/enabling-kubernetes-howto](https://docs.cloud.google.com/iap/docs/enabling-kubernetes-howto), [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto), [https://docs.cloud.google.com/iap/docs/concepts-overview](https://docs.cloud.google.com/iap/docs/concepts-overview), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing))
- security (evidence: [https://docs.cloud.google.com/iap/docs/enabling-kubernetes-howto](https://docs.cloud.google.com/iap/docs/enabling-kubernetes-howto), [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto), [https://docs.cloud.google.com/iap/docs/concepts-overview](https://docs.cloud.google.com/iap/docs/concepts-overview), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing))
- token (evidence: [https://docs.cloud.google.com/iap/docs/enabling-kubernetes-howto](https://docs.cloud.google.com/iap/docs/enabling-kubernetes-howto), [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto), [https://docs.cloud.google.com/iap/docs/concepts-overview](https://docs.cloud.google.com/iap/docs/concepts-overview), [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing))

## Official Evidence

- [https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto](https://docs.cloud.google.com/iap/docs/cloud-iap-context-aware-access-howto)
- [https://docs.cloud.google.com/iap/docs/concepts-overview](https://docs.cloud.google.com/iap/docs/concepts-overview)
- [https://docs.cloud.google.com/iap/docs/customizing](https://docs.cloud.google.com/iap/docs/customizing)
- [https://docs.cloud.google.com/iap/docs/enabling-kubernetes-howto](https://docs.cloud.google.com/iap/docs/enabling-kubernetes-howto)
