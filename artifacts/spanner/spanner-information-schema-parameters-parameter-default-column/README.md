# Spanner INFORMATION_SCHEMA.PARAMETERS.PARAMETER_DEFAULT column

Product: Spanner
Feature slug: `spanner-information-schema-parameters-parameter-default-column`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Spanner adds a PARAMETER_DEFAULT column to INFORMATION_SCHEMA.PARAMETERS that returns default values for change stream read function parameters.

## Lifecycle

- Latest feature date: 2025-04-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/spanner/docs/fgac-change-streams](https://docs.cloud.google.com/spanner/docs/fgac-change-streams), [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema), [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg))
- audit (evidence: [https://docs.cloud.google.com/spanner/docs/fgac-change-streams](https://docs.cloud.google.com/spanner/docs/fgac-change-streams), [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema), [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg))
- auth (evidence: [https://docs.cloud.google.com/spanner/docs/fgac-change-streams](https://docs.cloud.google.com/spanner/docs/fgac-change-streams), [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema), [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg))
- constraint (evidence: [https://docs.cloud.google.com/spanner/docs/fgac-change-streams](https://docs.cloud.google.com/spanner/docs/fgac-change-streams), [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema), [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg))
- encrypt (evidence: [https://docs.cloud.google.com/spanner/docs/fgac-change-streams](https://docs.cloud.google.com/spanner/docs/fgac-change-streams), [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema), [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg))
- iam (evidence: [https://docs.cloud.google.com/spanner/docs/fgac-change-streams](https://docs.cloud.google.com/spanner/docs/fgac-change-streams), [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema), [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg))
- key (evidence: [https://docs.cloud.google.com/spanner/docs/fgac-change-streams](https://docs.cloud.google.com/spanner/docs/fgac-change-streams), [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema), [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg))
- policy (evidence: [https://docs.cloud.google.com/spanner/docs/fgac-change-streams](https://docs.cloud.google.com/spanner/docs/fgac-change-streams), [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema), [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg))
- role (evidence: [https://docs.cloud.google.com/spanner/docs/fgac-change-streams](https://docs.cloud.google.com/spanner/docs/fgac-change-streams), [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema), [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg))
- security (evidence: [https://docs.cloud.google.com/spanner/docs/fgac-change-streams](https://docs.cloud.google.com/spanner/docs/fgac-change-streams), [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema), [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg))
- token (evidence: [https://docs.cloud.google.com/spanner/docs/fgac-change-streams](https://docs.cloud.google.com/spanner/docs/fgac-change-streams), [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema), [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg))

## Official Evidence

- [https://docs.cloud.google.com/spanner/docs/fgac-change-streams](https://docs.cloud.google.com/spanner/docs/fgac-change-streams)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
