# Managed organization policy constraint iam.managed.allowedPolicyMembers

Product: Resource Manager
Feature slug: `managed-organization-policy-constraint-iam-managed-allowedpolicymembers`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

This managed organization policy constraint implements domain restricted sharing by controlling allowed policy members.

## Lifecycle

- Latest feature date: 2024-12-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints](https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints), [https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-domains](https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-domains), [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints))
- allow (evidence: [https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints](https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints), [https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-domains](https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-domains), [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints))
- auth (evidence: [https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints](https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints), [https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-domains](https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-domains), [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints))
- constraint (evidence: [https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints](https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints), [https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-domains](https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-domains), [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints))
- credential (evidence: [https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints](https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints), [https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-domains](https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-domains), [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints))
- iam (evidence: [https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints](https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints), [https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-domains](https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-domains), [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints))
- identity (evidence: [https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints](https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints), [https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-domains](https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-domains), [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints))
- key (evidence: [https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints](https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints), [https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-domains](https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-domains), [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints))
- logging (evidence: [https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints](https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints), [https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-domains](https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-domains), [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints))
- policy (evidence: [https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints](https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints), [https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-domains](https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-domains), [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints))
- role (evidence: [https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints](https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints), [https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-domains](https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-domains), [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints))
- security (evidence: [https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints](https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints), [https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-domains](https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-domains), [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints))

## Official Evidence

- [https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints](https://docs.cloud.google.com/organization-policy/reference/org-policy-constraints)
- [https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints](https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints)
- [https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-domains](https://docs.cloud.google.com/resource-manager/docs/organization-policy/restricting-domains)
