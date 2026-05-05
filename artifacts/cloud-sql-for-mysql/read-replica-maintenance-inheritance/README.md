# Read replica maintenance inheritance

Product: Cloud SQL for MySQL
Feature slug: `read-replica-maintenance-inheritance`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL read replicas follow the primary instance maintenance settings and are maintained before the primary instance; Cloud SQL read replicas follow the primary instance maintenance settings and are maintained before the primary instance.

## Lifecycle

- Latest feature date: 2023-03-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica), [https://docs.cloud.google.com/sql/docs/mysql/about-read-pools](https://docs.cloud.google.com/sql/docs/mysql/about-read-pools), [https://docs.cloud.google.com/sql/docs/mysql/high-availability](https://docs.cloud.google.com/sql/docs/mysql/high-availability))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica), [https://docs.cloud.google.com/sql/docs/mysql/about-read-pools](https://docs.cloud.google.com/sql/docs/mysql/about-read-pools), [https://docs.cloud.google.com/sql/docs/mysql/high-availability](https://docs.cloud.google.com/sql/docs/mysql/high-availability))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica), [https://docs.cloud.google.com/sql/docs/mysql/about-read-pools](https://docs.cloud.google.com/sql/docs/mysql/about-read-pools), [https://docs.cloud.google.com/sql/docs/mysql/high-availability](https://docs.cloud.google.com/sql/docs/mysql/high-availability))
- certificate (evidence: [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica), [https://docs.cloud.google.com/sql/docs/mysql/about-read-pools](https://docs.cloud.google.com/sql/docs/mysql/about-read-pools), [https://docs.cloud.google.com/sql/docs/mysql/high-availability](https://docs.cloud.google.com/sql/docs/mysql/high-availability))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica), [https://docs.cloud.google.com/sql/docs/mysql/about-read-pools](https://docs.cloud.google.com/sql/docs/mysql/about-read-pools), [https://docs.cloud.google.com/sql/docs/mysql/high-availability](https://docs.cloud.google.com/sql/docs/mysql/high-availability))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica), [https://docs.cloud.google.com/sql/docs/mysql/about-read-pools](https://docs.cloud.google.com/sql/docs/mysql/about-read-pools), [https://docs.cloud.google.com/sql/docs/mysql/high-availability](https://docs.cloud.google.com/sql/docs/mysql/high-availability))
- logging (evidence: [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica), [https://docs.cloud.google.com/sql/docs/mysql/about-read-pools](https://docs.cloud.google.com/sql/docs/mysql/about-read-pools), [https://docs.cloud.google.com/sql/docs/mysql/high-availability](https://docs.cloud.google.com/sql/docs/mysql/high-availability))
- token (evidence: [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica), [https://docs.cloud.google.com/sql/docs/mysql/about-read-pools](https://docs.cloud.google.com/sql/docs/mysql/about-read-pools), [https://docs.cloud.google.com/sql/docs/mysql/high-availability](https://docs.cloud.google.com/sql/docs/mysql/high-availability))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/about-read-pools](https://docs.cloud.google.com/sql/docs/mysql/about-read-pools)
- [https://docs.cloud.google.com/sql/docs/mysql/high-availability](https://docs.cloud.google.com/sql/docs/mysql/high-availability)
- [https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica](https://docs.cloud.google.com/sql/docs/mysql/replication/create-replica)
