# Attribute Store

Product: Dataplex
Feature slug: `attribute-store`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Attribute Store associates attributes and behavior specifications such as resource and column access with tables and columns.

## Lifecycle

- Latest feature date: 2023-01-30
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

- access (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/openlineage-mapping](https://docs.cloud.google.com/dataplex/docs/openlineage-mapping), [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling))
- iam (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/openlineage-mapping](https://docs.cloud.google.com/dataplex/docs/openlineage-mapping), [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling))
- key (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/openlineage-mapping](https://docs.cloud.google.com/dataplex/docs/openlineage-mapping), [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling))
- logging (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/openlineage-mapping](https://docs.cloud.google.com/dataplex/docs/openlineage-mapping), [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling))
- permission (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/openlineage-mapping](https://docs.cloud.google.com/dataplex/docs/openlineage-mapping), [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling))
- policy (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/openlineage-mapping](https://docs.cloud.google.com/dataplex/docs/openlineage-mapping), [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling))
- role (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/openlineage-mapping](https://docs.cloud.google.com/dataplex/docs/openlineage-mapping), [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling))
- security (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/openlineage-mapping](https://docs.cloud.google.com/dataplex/docs/openlineage-mapping), [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling))
- token (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1), [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles), [https://docs.cloud.google.com/dataplex/docs/openlineage-mapping](https://docs.cloud.google.com/dataplex/docs/openlineage-mapping), [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling))

## Official Evidence

- [https://docs.cloud.google.com/dataplex/docs/iam-roles](https://docs.cloud.google.com/dataplex/docs/iam-roles)
- [https://docs.cloud.google.com/dataplex/docs/openlineage-mapping](https://docs.cloud.google.com/dataplex/docs/openlineage-mapping)
- [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
