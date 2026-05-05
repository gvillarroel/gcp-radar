# Zone selection for Oracle Database@Google Cloud resources

Product: Oracle Database@Google Cloud
Feature slug: `zone-selection-for-oracle-database-google-cloud-resources`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

You can select a zone when provisioning Exadata Infrastructure, VM clusters, ODB Networks, and DB systems in supported regions.

## Lifecycle

- Latest feature date: 2025-09-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/oracle/database/docs/available-configurations](https://docs.cloud.google.com/oracle/database/docs/available-configurations), [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview), [https://docs.cloud.google.com/oracle/database/docs/create-odb-network](https://docs.cloud.google.com/oracle/database/docs/create-odb-network), [https://docs.cloud.google.com/oracle/database/docs/create-base-db-system](https://docs.cloud.google.com/oracle/database/docs/create-base-db-system))
- allow (evidence: [https://docs.cloud.google.com/oracle/database/docs/available-configurations](https://docs.cloud.google.com/oracle/database/docs/available-configurations), [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview), [https://docs.cloud.google.com/oracle/database/docs/create-odb-network](https://docs.cloud.google.com/oracle/database/docs/create-odb-network), [https://docs.cloud.google.com/oracle/database/docs/create-base-db-system](https://docs.cloud.google.com/oracle/database/docs/create-base-db-system))
- auth (evidence: [https://docs.cloud.google.com/oracle/database/docs/available-configurations](https://docs.cloud.google.com/oracle/database/docs/available-configurations), [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview), [https://docs.cloud.google.com/oracle/database/docs/create-odb-network](https://docs.cloud.google.com/oracle/database/docs/create-odb-network), [https://docs.cloud.google.com/oracle/database/docs/create-base-db-system](https://docs.cloud.google.com/oracle/database/docs/create-base-db-system))
- authorization (evidence: [https://docs.cloud.google.com/oracle/database/docs/available-configurations](https://docs.cloud.google.com/oracle/database/docs/available-configurations), [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview), [https://docs.cloud.google.com/oracle/database/docs/create-odb-network](https://docs.cloud.google.com/oracle/database/docs/create-odb-network), [https://docs.cloud.google.com/oracle/database/docs/create-base-db-system](https://docs.cloud.google.com/oracle/database/docs/create-base-db-system))
- iam (evidence: [https://docs.cloud.google.com/oracle/database/docs/available-configurations](https://docs.cloud.google.com/oracle/database/docs/available-configurations), [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview), [https://docs.cloud.google.com/oracle/database/docs/create-odb-network](https://docs.cloud.google.com/oracle/database/docs/create-odb-network), [https://docs.cloud.google.com/oracle/database/docs/create-base-db-system](https://docs.cloud.google.com/oracle/database/docs/create-base-db-system))
- identity (evidence: [https://docs.cloud.google.com/oracle/database/docs/available-configurations](https://docs.cloud.google.com/oracle/database/docs/available-configurations), [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview), [https://docs.cloud.google.com/oracle/database/docs/create-odb-network](https://docs.cloud.google.com/oracle/database/docs/create-odb-network), [https://docs.cloud.google.com/oracle/database/docs/create-base-db-system](https://docs.cloud.google.com/oracle/database/docs/create-base-db-system))
- key (evidence: [https://docs.cloud.google.com/oracle/database/docs/available-configurations](https://docs.cloud.google.com/oracle/database/docs/available-configurations), [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview), [https://docs.cloud.google.com/oracle/database/docs/create-odb-network](https://docs.cloud.google.com/oracle/database/docs/create-odb-network), [https://docs.cloud.google.com/oracle/database/docs/create-base-db-system](https://docs.cloud.google.com/oracle/database/docs/create-base-db-system))
- permission (evidence: [https://docs.cloud.google.com/oracle/database/docs/available-configurations](https://docs.cloud.google.com/oracle/database/docs/available-configurations), [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview), [https://docs.cloud.google.com/oracle/database/docs/create-odb-network](https://docs.cloud.google.com/oracle/database/docs/create-odb-network), [https://docs.cloud.google.com/oracle/database/docs/create-base-db-system](https://docs.cloud.google.com/oracle/database/docs/create-base-db-system))
- role (evidence: [https://docs.cloud.google.com/oracle/database/docs/available-configurations](https://docs.cloud.google.com/oracle/database/docs/available-configurations), [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview), [https://docs.cloud.google.com/oracle/database/docs/create-odb-network](https://docs.cloud.google.com/oracle/database/docs/create-odb-network), [https://docs.cloud.google.com/oracle/database/docs/create-base-db-system](https://docs.cloud.google.com/oracle/database/docs/create-base-db-system))
- token (evidence: [https://docs.cloud.google.com/oracle/database/docs/available-configurations](https://docs.cloud.google.com/oracle/database/docs/available-configurations), [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview), [https://docs.cloud.google.com/oracle/database/docs/create-odb-network](https://docs.cloud.google.com/oracle/database/docs/create-odb-network), [https://docs.cloud.google.com/oracle/database/docs/create-base-db-system](https://docs.cloud.google.com/oracle/database/docs/create-base-db-system))

## Official Evidence

- [https://docs.cloud.google.com/oracle/database/docs/available-configurations](https://docs.cloud.google.com/oracle/database/docs/available-configurations)
- [https://docs.cloud.google.com/oracle/database/docs/create-base-db-system](https://docs.cloud.google.com/oracle/database/docs/create-base-db-system)
- [https://docs.cloud.google.com/oracle/database/docs/create-odb-network](https://docs.cloud.google.com/oracle/database/docs/create-odb-network)
- [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview)
