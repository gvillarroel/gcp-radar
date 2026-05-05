# pg_wait_sampling.profile_pid flag

Product: Cloud SQL for PostgreSQL
Feature slug: `pg-wait-sampling-profile-pid-flag`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The pg_wait_sampling.profile_pid flag controls whether wait profiles are collected per process or across all processes.

## Lifecycle

- Latest feature date: 2023-09-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags), [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights), [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions))
- allow (evidence: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags), [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights), [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions))
- audit (evidence: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags), [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights), [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags), [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights), [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags), [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights), [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions))
- certificate (evidence: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags), [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights), [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags), [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights), [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags), [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights), [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags), [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights), [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions))
- key (evidence: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags), [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights), [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions))
- permission (evidence: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags), [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights), [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions))
- private (evidence: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags), [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights), [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions))
- role (evidence: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags), [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights), [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions))
- secret (evidence: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags), [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights), [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions))
- security (evidence: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags), [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights), [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions))
- token (evidence: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags), [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights), [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions)
- [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags)
- [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights)
