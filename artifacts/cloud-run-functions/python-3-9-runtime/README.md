# Python 3.9 runtime

Product: Cloud Run functions
Feature slug: `python-3-9-runtime`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Python 3.9 runtime lets functions run on Python 3.9.

## Lifecycle

- Latest feature date: 2021-01-13
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

- access (evidence: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/reference/iam/roles](https://docs.cloud.google.com/functions/docs/reference/iam/roles), [https://docs.cloud.google.com/functions/docs/securing/custom-constraints](https://docs.cloud.google.com/functions/docs/securing/custom-constraints))
- audit (evidence: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/reference/iam/roles](https://docs.cloud.google.com/functions/docs/reference/iam/roles), [https://docs.cloud.google.com/functions/docs/securing/custom-constraints](https://docs.cloud.google.com/functions/docs/securing/custom-constraints))
- auth (evidence: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/reference/iam/roles](https://docs.cloud.google.com/functions/docs/reference/iam/roles), [https://docs.cloud.google.com/functions/docs/securing/custom-constraints](https://docs.cloud.google.com/functions/docs/securing/custom-constraints))
- constraint (evidence: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/reference/iam/roles](https://docs.cloud.google.com/functions/docs/reference/iam/roles), [https://docs.cloud.google.com/functions/docs/securing/custom-constraints](https://docs.cloud.google.com/functions/docs/securing/custom-constraints))
- iam (evidence: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/reference/iam/roles](https://docs.cloud.google.com/functions/docs/reference/iam/roles), [https://docs.cloud.google.com/functions/docs/securing/custom-constraints](https://docs.cloud.google.com/functions/docs/securing/custom-constraints))
- identity (evidence: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/reference/iam/roles](https://docs.cloud.google.com/functions/docs/reference/iam/roles), [https://docs.cloud.google.com/functions/docs/securing/custom-constraints](https://docs.cloud.google.com/functions/docs/securing/custom-constraints))
- logging (evidence: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/reference/iam/roles](https://docs.cloud.google.com/functions/docs/reference/iam/roles), [https://docs.cloud.google.com/functions/docs/securing/custom-constraints](https://docs.cloud.google.com/functions/docs/securing/custom-constraints))
- permission (evidence: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/reference/iam/roles](https://docs.cloud.google.com/functions/docs/reference/iam/roles), [https://docs.cloud.google.com/functions/docs/securing/custom-constraints](https://docs.cloud.google.com/functions/docs/securing/custom-constraints))
- policy (evidence: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/reference/iam/roles](https://docs.cloud.google.com/functions/docs/reference/iam/roles), [https://docs.cloud.google.com/functions/docs/securing/custom-constraints](https://docs.cloud.google.com/functions/docs/securing/custom-constraints))
- role (evidence: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/reference/iam/roles](https://docs.cloud.google.com/functions/docs/reference/iam/roles), [https://docs.cloud.google.com/functions/docs/securing/custom-constraints](https://docs.cloud.google.com/functions/docs/securing/custom-constraints))
- security (evidence: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/reference/iam/roles](https://docs.cloud.google.com/functions/docs/reference/iam/roles), [https://docs.cloud.google.com/functions/docs/securing/custom-constraints](https://docs.cloud.google.com/functions/docs/securing/custom-constraints))
- token (evidence: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/reference/iam/roles](https://docs.cloud.google.com/functions/docs/reference/iam/roles), [https://docs.cloud.google.com/functions/docs/securing/custom-constraints](https://docs.cloud.google.com/functions/docs/securing/custom-constraints))

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/reference/iam/roles](https://docs.cloud.google.com/functions/docs/reference/iam/roles)
- [https://docs.cloud.google.com/functions/docs/securing/custom-constraints](https://docs.cloud.google.com/functions/docs/securing/custom-constraints)
- [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)
