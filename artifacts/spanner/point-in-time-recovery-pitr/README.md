# Point-in-time recovery (PITR)

Product: Spanner
Feature slug: `point-in-time-recovery-pitr`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Adds Point-in-Time Recovery (PITR) support so Spanner data can be recovered from a specific past timestamp.

## Lifecycle

- Latest feature date: 2021-03-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/spanner/docs/pitr](https://docs.cloud.google.com/spanner/docs/pitr), [https://docs.cloud.google.com/spanner/docs/use-pitr](https://docs.cloud.google.com/spanner/docs/use-pitr), [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview))
- audit (evidence: [https://docs.cloud.google.com/spanner/docs/pitr](https://docs.cloud.google.com/spanner/docs/pitr), [https://docs.cloud.google.com/spanner/docs/use-pitr](https://docs.cloud.google.com/spanner/docs/use-pitr), [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview))
- auth (evidence: [https://docs.cloud.google.com/spanner/docs/pitr](https://docs.cloud.google.com/spanner/docs/pitr), [https://docs.cloud.google.com/spanner/docs/use-pitr](https://docs.cloud.google.com/spanner/docs/use-pitr), [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview))
- constraint (evidence: [https://docs.cloud.google.com/spanner/docs/pitr](https://docs.cloud.google.com/spanner/docs/pitr), [https://docs.cloud.google.com/spanner/docs/use-pitr](https://docs.cloud.google.com/spanner/docs/use-pitr), [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview))
- encrypt (evidence: [https://docs.cloud.google.com/spanner/docs/pitr](https://docs.cloud.google.com/spanner/docs/pitr), [https://docs.cloud.google.com/spanner/docs/use-pitr](https://docs.cloud.google.com/spanner/docs/use-pitr), [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview))
- iam (evidence: [https://docs.cloud.google.com/spanner/docs/pitr](https://docs.cloud.google.com/spanner/docs/pitr), [https://docs.cloud.google.com/spanner/docs/use-pitr](https://docs.cloud.google.com/spanner/docs/use-pitr), [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview))
- key (evidence: [https://docs.cloud.google.com/spanner/docs/pitr](https://docs.cloud.google.com/spanner/docs/pitr), [https://docs.cloud.google.com/spanner/docs/use-pitr](https://docs.cloud.google.com/spanner/docs/use-pitr), [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview))
- policy (evidence: [https://docs.cloud.google.com/spanner/docs/pitr](https://docs.cloud.google.com/spanner/docs/pitr), [https://docs.cloud.google.com/spanner/docs/use-pitr](https://docs.cloud.google.com/spanner/docs/use-pitr), [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview))
- role (evidence: [https://docs.cloud.google.com/spanner/docs/pitr](https://docs.cloud.google.com/spanner/docs/pitr), [https://docs.cloud.google.com/spanner/docs/use-pitr](https://docs.cloud.google.com/spanner/docs/use-pitr), [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview))
- security (evidence: [https://docs.cloud.google.com/spanner/docs/pitr](https://docs.cloud.google.com/spanner/docs/pitr), [https://docs.cloud.google.com/spanner/docs/use-pitr](https://docs.cloud.google.com/spanner/docs/use-pitr), [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview))
- token (evidence: [https://docs.cloud.google.com/spanner/docs/pitr](https://docs.cloud.google.com/spanner/docs/pitr), [https://docs.cloud.google.com/spanner/docs/use-pitr](https://docs.cloud.google.com/spanner/docs/use-pitr), [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview))

## Official Evidence

- [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview)
- [https://docs.cloud.google.com/spanner/docs/pitr](https://docs.cloud.google.com/spanner/docs/pitr)
- [https://docs.cloud.google.com/spanner/docs/use-pitr](https://docs.cloud.google.com/spanner/docs/use-pitr)
