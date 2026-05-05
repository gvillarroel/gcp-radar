# Data products

Product: Dataplex
Feature slug: `data-products`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Dataplex Universal Catalog supports curated data products that package data assets for specific business use cases.

## Lifecycle

- Latest feature date: 2025-11-21
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

- access (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/data-products-overview](https://docs.cloud.google.com/dataplex/docs/data-products-overview), [https://docs.cloud.google.com/dataplex/docs/create-data-products](https://docs.cloud.google.com/dataplex/docs/create-data-products), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles))
- allow (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/data-products-overview](https://docs.cloud.google.com/dataplex/docs/data-products-overview), [https://docs.cloud.google.com/dataplex/docs/create-data-products](https://docs.cloud.google.com/dataplex/docs/create-data-products), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles))
- audit (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/data-products-overview](https://docs.cloud.google.com/dataplex/docs/data-products-overview), [https://docs.cloud.google.com/dataplex/docs/create-data-products](https://docs.cloud.google.com/dataplex/docs/create-data-products), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles))
- auth (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/data-products-overview](https://docs.cloud.google.com/dataplex/docs/data-products-overview), [https://docs.cloud.google.com/dataplex/docs/create-data-products](https://docs.cloud.google.com/dataplex/docs/create-data-products), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles))
- authorization (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/data-products-overview](https://docs.cloud.google.com/dataplex/docs/data-products-overview), [https://docs.cloud.google.com/dataplex/docs/create-data-products](https://docs.cloud.google.com/dataplex/docs/create-data-products), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles))
- constraint (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/data-products-overview](https://docs.cloud.google.com/dataplex/docs/data-products-overview), [https://docs.cloud.google.com/dataplex/docs/create-data-products](https://docs.cloud.google.com/dataplex/docs/create-data-products), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles))
- encrypt (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/data-products-overview](https://docs.cloud.google.com/dataplex/docs/data-products-overview), [https://docs.cloud.google.com/dataplex/docs/create-data-products](https://docs.cloud.google.com/dataplex/docs/create-data-products), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles))
- iam (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/data-products-overview](https://docs.cloud.google.com/dataplex/docs/data-products-overview), [https://docs.cloud.google.com/dataplex/docs/create-data-products](https://docs.cloud.google.com/dataplex/docs/create-data-products), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles))
- key (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/data-products-overview](https://docs.cloud.google.com/dataplex/docs/data-products-overview), [https://docs.cloud.google.com/dataplex/docs/create-data-products](https://docs.cloud.google.com/dataplex/docs/create-data-products), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles))
- logging (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/data-products-overview](https://docs.cloud.google.com/dataplex/docs/data-products-overview), [https://docs.cloud.google.com/dataplex/docs/create-data-products](https://docs.cloud.google.com/dataplex/docs/create-data-products), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles))
- permission (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/data-products-overview](https://docs.cloud.google.com/dataplex/docs/data-products-overview), [https://docs.cloud.google.com/dataplex/docs/create-data-products](https://docs.cloud.google.com/dataplex/docs/create-data-products), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles))
- policy (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/data-products-overview](https://docs.cloud.google.com/dataplex/docs/data-products-overview), [https://docs.cloud.google.com/dataplex/docs/create-data-products](https://docs.cloud.google.com/dataplex/docs/create-data-products), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles))
- role (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/data-products-overview](https://docs.cloud.google.com/dataplex/docs/data-products-overview), [https://docs.cloud.google.com/dataplex/docs/create-data-products](https://docs.cloud.google.com/dataplex/docs/create-data-products), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles))
- token (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/data-products-overview](https://docs.cloud.google.com/dataplex/docs/data-products-overview), [https://docs.cloud.google.com/dataplex/docs/create-data-products](https://docs.cloud.google.com/dataplex/docs/create-data-products), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles))

## Official Evidence

- [https://docs.cloud.google.com/dataplex/docs/create-data-products](https://docs.cloud.google.com/dataplex/docs/create-data-products)
- [https://docs.cloud.google.com/dataplex/docs/data-products-overview](https://docs.cloud.google.com/dataplex/docs/data-products-overview)
- [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
