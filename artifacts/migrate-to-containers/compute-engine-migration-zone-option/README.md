# Compute Engine migration zone option

Product: Migrate to Containers
Feature slug: `compute-engine-migration-zone-option`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The --zone option for creating a Compute Engine migration was removed; deprecated on 2020-07-28.

## Lifecycle

- Latest feature date: 2020-07-28
- Deprecation date: 2020-07-28
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system))
- allow (evidence: [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system))
- auth (evidence: [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system))
- certificate (evidence: [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system))
- credential (evidence: [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system))
- key (evidence: [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system))
- private (evidence: [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system))
- security (evidence: [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system))
- token (evidence: [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system))

## Official Evidence

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/apache/apache-customizing-a-migration-plan)
- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/copy-file-system)
- [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm)
