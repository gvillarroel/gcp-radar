# Service account access token lifetime extension organization policy constraint

Product: Resource Manager
Feature slug: `service-account-access-token-lifetime-extension-organization-policy-constraint`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Allows organizations to extend the maximum lifetime of OAuth 2.0 access tokens created for a service account.

## Lifecycle

- Latest feature date: 2020-08-14
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

- access (evidence: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints), [https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts](https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts))
- allow (evidence: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints), [https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts](https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts))
- auth (evidence: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints), [https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts](https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts))
- authorization (evidence: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints), [https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts](https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts))
- constraint (evidence: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints), [https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts](https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts))
- credential (evidence: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints), [https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts](https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts))
- iam (evidence: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints), [https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts](https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts))
- key (evidence: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints), [https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts](https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts))
- permission (evidence: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints), [https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts](https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts))
- policy (evidence: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints), [https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts](https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts))
- private (evidence: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints), [https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts](https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts))
- role (evidence: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints), [https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts](https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts))
- security (evidence: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints), [https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts](https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts))
- token (evidence: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints), [https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts](https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts))

## Official Evidence

- [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org)
- [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints)
- [https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts](https://docs.cloud.google.com/resource-manager/docs/manage-essential-contacts)
