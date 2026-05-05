# VPC Service Controls support

Product: AlloyDB
Feature slug: `vpc-service-controls-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

AlloyDB supports VPC Service Controls to help mitigate data exfiltration risk.

## Lifecycle

- Latest feature date: 2022-05-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls](https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls), [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb), [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search))
- allow (evidence: [https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls](https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls), [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb), [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search))
- audit (evidence: [https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls](https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls), [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb), [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search))
- auth (evidence: [https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls](https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls), [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb), [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search))
- encrypt (evidence: [https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls](https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls), [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb), [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search))
- iam (evidence: [https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls](https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls), [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb), [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search))
- identity (evidence: [https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls](https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls), [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb), [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search))
- key (evidence: [https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls](https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls), [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb), [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search))
- logging (evidence: [https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls](https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls), [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb), [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search))
- permission (evidence: [https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls](https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls), [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb), [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search))
- policy (evidence: [https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls](https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls), [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb), [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search))
- private (evidence: [https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls](https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls), [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb), [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search))
- role (evidence: [https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls](https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls), [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb), [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search))
- secret (evidence: [https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls](https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls), [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb), [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search))
- security (evidence: [https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls](https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls), [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb), [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search))

## Official Evidence

- [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb)
- [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search)
- [https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls](https://docs.cloud.google.com/alloydb/docs/vpc-sc/configure-vpc-service-controls)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
