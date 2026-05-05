# Landing zone blueprint deployment

Product: Config Controller
Feature slug: `landing-zone-blueprint-deployment`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Config Controller can be used to deploy a landing zone blueprint.

## Lifecycle

- Latest feature date: 2021-06-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/availability](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/availability), [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions), [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/locations](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/locations), [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/scalability](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/scalability))
- audit (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/availability](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/availability), [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions), [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/locations](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/locations), [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/scalability](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/scalability))
- certificate (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/availability](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/availability), [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions), [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/locations](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/locations), [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/scalability](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/scalability))
- credential (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/availability](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/availability), [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions), [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/locations](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/locations), [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/scalability](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/scalability))
- iam (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/availability](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/availability), [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions), [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/locations](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/locations), [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/scalability](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/scalability))
- permission (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/availability](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/availability), [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions), [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/locations](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/locations), [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/scalability](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/scalability))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/availability](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/availability), [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions), [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/locations](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/locations), [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/scalability](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/scalability))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/availability](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/availability), [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions), [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/locations](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/locations), [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/scalability](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/scalability))
- secret (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/availability](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/availability), [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions), [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/locations](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/locations), [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/scalability](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/scalability))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/availability](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/availability), [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions), [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/locations](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/locations), [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/scalability](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/scalability))
- token (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/availability](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/availability), [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions), [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/locations](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/locations), [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/scalability](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/scalability))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/availability](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/availability)
- [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/locations](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/locations)
- [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions)
- [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/scalability](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/scalability)
