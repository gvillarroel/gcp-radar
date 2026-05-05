# RESERVATIONS_TIMELINE per_second_details field

Product: BigQuery
Feature slug: `reservations-timeline-per-second-details-field`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The INFORMATION_SCHEMA.RESERVATIONS_TIMELINE view includes a per_second_details field for per-second capacity, usage, and autoscale details.

## Lifecycle

- Latest feature date: 2025-09-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-reservation-timeline](https://docs.cloud.google.com/bigquery/docs/information-schema-reservation-timeline), [https://docs.cloud.google.com/bigquery/docs/reservations-monitoring](https://docs.cloud.google.com/bigquery/docs/reservations-monitoring), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements))
- audit (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-reservation-timeline](https://docs.cloud.google.com/bigquery/docs/information-schema-reservation-timeline), [https://docs.cloud.google.com/bigquery/docs/reservations-monitoring](https://docs.cloud.google.com/bigquery/docs/reservations-monitoring), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements))
- constraint (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-reservation-timeline](https://docs.cloud.google.com/bigquery/docs/information-schema-reservation-timeline), [https://docs.cloud.google.com/bigquery/docs/reservations-monitoring](https://docs.cloud.google.com/bigquery/docs/reservations-monitoring), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements))
- credential (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-reservation-timeline](https://docs.cloud.google.com/bigquery/docs/information-schema-reservation-timeline), [https://docs.cloud.google.com/bigquery/docs/reservations-monitoring](https://docs.cloud.google.com/bigquery/docs/reservations-monitoring), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements))
- encrypt (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-reservation-timeline](https://docs.cloud.google.com/bigquery/docs/information-schema-reservation-timeline), [https://docs.cloud.google.com/bigquery/docs/reservations-monitoring](https://docs.cloud.google.com/bigquery/docs/reservations-monitoring), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-reservation-timeline](https://docs.cloud.google.com/bigquery/docs/information-schema-reservation-timeline), [https://docs.cloud.google.com/bigquery/docs/reservations-monitoring](https://docs.cloud.google.com/bigquery/docs/reservations-monitoring), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-reservation-timeline](https://docs.cloud.google.com/bigquery/docs/information-schema-reservation-timeline), [https://docs.cloud.google.com/bigquery/docs/reservations-monitoring](https://docs.cloud.google.com/bigquery/docs/reservations-monitoring), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements))
- kms (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-reservation-timeline](https://docs.cloud.google.com/bigquery/docs/information-schema-reservation-timeline), [https://docs.cloud.google.com/bigquery/docs/reservations-monitoring](https://docs.cloud.google.com/bigquery/docs/reservations-monitoring), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-reservation-timeline](https://docs.cloud.google.com/bigquery/docs/information-schema-reservation-timeline), [https://docs.cloud.google.com/bigquery/docs/reservations-monitoring](https://docs.cloud.google.com/bigquery/docs/reservations-monitoring), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/information-schema-reservation-timeline](https://docs.cloud.google.com/bigquery/docs/information-schema-reservation-timeline), [https://docs.cloud.google.com/bigquery/docs/reservations-monitoring](https://docs.cloud.google.com/bigquery/docs/reservations-monitoring), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/information-schema-reservation-timeline](https://docs.cloud.google.com/bigquery/docs/information-schema-reservation-timeline)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/load-statements)
- [https://docs.cloud.google.com/bigquery/docs/reservations-monitoring](https://docs.cloud.google.com/bigquery/docs/reservations-monitoring)
