# Access Approval

Product: Cloud SQL for MySQL
Feature slug: `access-approval`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL supports Access Approval so Google Support access to databases can require explicit customer approval.

## Lifecycle

- Latest feature date: 2021-10-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access))
- audit (evidence: [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access))
- key (evidence: [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access))
- kms (evidence: [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access))
- permission (evidence: [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access))
- private (evidence: [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access))
- role (evidence: [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access))
- token (evidence: [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access)
- [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases)
- [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview)
