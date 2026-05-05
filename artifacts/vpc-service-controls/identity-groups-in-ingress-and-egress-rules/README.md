# Identity groups in ingress and egress rules

Product: VPC Service Controls
Feature slug: `identity-groups-in-ingress-and-egress-rules`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Lets service perimeter ingress and egress rules use identity groups to allow access to protected resources.

## Lifecycle

- Latest feature date: 2024-12-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups](https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups), [https://docs.cloud.google.com/vpc-service-controls/docs/identity-groups-examples](https://docs.cloud.google.com/vpc-service-controls/docs/identity-groups-examples), [https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules](https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules), [https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles](https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles))
- allow (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups](https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups), [https://docs.cloud.google.com/vpc-service-controls/docs/identity-groups-examples](https://docs.cloud.google.com/vpc-service-controls/docs/identity-groups-examples), [https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules](https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules), [https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles](https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles))
- audit (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups](https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups), [https://docs.cloud.google.com/vpc-service-controls/docs/identity-groups-examples](https://docs.cloud.google.com/vpc-service-controls/docs/identity-groups-examples), [https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules](https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules), [https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles](https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles))
- auth (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups](https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups), [https://docs.cloud.google.com/vpc-service-controls/docs/identity-groups-examples](https://docs.cloud.google.com/vpc-service-controls/docs/identity-groups-examples), [https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules](https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules), [https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles](https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles))
- iam (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups](https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups), [https://docs.cloud.google.com/vpc-service-controls/docs/identity-groups-examples](https://docs.cloud.google.com/vpc-service-controls/docs/identity-groups-examples), [https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules](https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules), [https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles](https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles))
- identity (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups](https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups), [https://docs.cloud.google.com/vpc-service-controls/docs/identity-groups-examples](https://docs.cloud.google.com/vpc-service-controls/docs/identity-groups-examples), [https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules](https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules), [https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles](https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles))
- logging (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups](https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups), [https://docs.cloud.google.com/vpc-service-controls/docs/identity-groups-examples](https://docs.cloud.google.com/vpc-service-controls/docs/identity-groups-examples), [https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules](https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules), [https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles](https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles))
- permission (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups](https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups), [https://docs.cloud.google.com/vpc-service-controls/docs/identity-groups-examples](https://docs.cloud.google.com/vpc-service-controls/docs/identity-groups-examples), [https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules](https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules), [https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles](https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles))
- policy (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups](https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups), [https://docs.cloud.google.com/vpc-service-controls/docs/identity-groups-examples](https://docs.cloud.google.com/vpc-service-controls/docs/identity-groups-examples), [https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules](https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules), [https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles](https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles))
- role (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups](https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups), [https://docs.cloud.google.com/vpc-service-controls/docs/identity-groups-examples](https://docs.cloud.google.com/vpc-service-controls/docs/identity-groups-examples), [https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules](https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules), [https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles](https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles))

## Official Evidence

- [https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles](https://docs.cloud.google.com/vpc-service-controls/docs/configure-iam-roles)
- [https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups](https://docs.cloud.google.com/vpc-service-controls/docs/configure-identity-groups)
- [https://docs.cloud.google.com/vpc-service-controls/docs/identity-groups-examples](https://docs.cloud.google.com/vpc-service-controls/docs/identity-groups-examples)
- [https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules](https://docs.cloud.google.com/vpc-service-controls/docs/ingress-egress-rules)
