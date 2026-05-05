# Unconditional TTL for Dataproc Serverless for Spark batches

Product: Dataproc
Feature slug: `unconditional-ttl-for-dataproc-serverless-for-spark-batches`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Dataproc Serverless for Spark batches support an unconditional TTL that terminates workloads when the TTL expires.

## Lifecycle

- Latest feature date: 2023-02-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging), [https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark](https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob))
- audit (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging), [https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark](https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob))
- credential (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging), [https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark](https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob))
- iam (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging), [https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark](https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob))
- identity (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging), [https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark](https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob))
- key (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging), [https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark](https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob))
- logging (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging), [https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark](https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob))
- permission (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging), [https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark](https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob))
- policy (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging), [https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark](https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob))
- role (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging), [https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark](https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob))
- secret (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging), [https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark](https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob))

## Official Evidence

- [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging)
- [https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark](https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob)
