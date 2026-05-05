# Looker (Google Cloud core) backups

Product: Looker
Feature slug: `looker-google-cloud-core-backups`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Backups for Looker (Google Cloud core) instances can now be created, viewed, restored, and deleted in the Google Cloud console.

## Lifecycle

- Latest feature date: 2026-03-02
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

- access (evidence: [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control), [https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition](https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition), [https://docs.cloud.google.com/looker/docs/reference/rest](https://docs.cloud.google.com/looker/docs/reference/rest))
- allow (evidence: [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control), [https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition](https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition), [https://docs.cloud.google.com/looker/docs/reference/rest](https://docs.cloud.google.com/looker/docs/reference/rest))
- auth (evidence: [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control), [https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition](https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition), [https://docs.cloud.google.com/looker/docs/reference/rest](https://docs.cloud.google.com/looker/docs/reference/rest))
- iam (evidence: [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control), [https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition](https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition), [https://docs.cloud.google.com/looker/docs/reference/rest](https://docs.cloud.google.com/looker/docs/reference/rest))
- permission (evidence: [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control), [https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition](https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition), [https://docs.cloud.google.com/looker/docs/reference/rest](https://docs.cloud.google.com/looker/docs/reference/rest))
- role (evidence: [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control), [https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition](https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition), [https://docs.cloud.google.com/looker/docs/reference/rest](https://docs.cloud.google.com/looker/docs/reference/rest))

## Official Evidence

- [https://docs.cloud.google.com/looker/docs/looker-core-access-control](https://docs.cloud.google.com/looker/docs/looker-core-access-control)
- [https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition](https://docs.cloud.google.com/looker/docs/looker-core-quickstart-public-ip-standard-edition)
- [https://docs.cloud.google.com/looker/docs/reference/rest](https://docs.cloud.google.com/looker/docs/reference/rest)
