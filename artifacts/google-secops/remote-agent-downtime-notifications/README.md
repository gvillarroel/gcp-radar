# Remote agent downtime notifications

Product: Google SecOps
Feature slug: `remote-agent-downtime-notifications`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Users can opt in to in-app or email notifications when a remote agent is down.

## Lifecycle

- Latest feature date: 2025-03-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp), [https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent](https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent), [https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial](https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial))
- audit (evidence: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp), [https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent](https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent), [https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial](https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial))
- auth (evidence: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp), [https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent](https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent), [https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial](https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial))
- firewall (evidence: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp), [https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent](https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent), [https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial](https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial))
- iam (evidence: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp), [https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent](https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent), [https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial](https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial))
- identity (evidence: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp), [https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent](https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent), [https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial](https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial))
- key (evidence: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp), [https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent](https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent), [https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial](https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial))
- permission (evidence: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp), [https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent](https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent), [https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial](https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial))
- security (evidence: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp), [https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent](https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent), [https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial](https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial))
- threat (evidence: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp), [https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent](https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent), [https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial](https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial))
- token (evidence: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp), [https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent](https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent), [https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial](https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial))

## Official Evidence

- [https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial](https://docs.cloud.google.com/chronicle/docs/agentic-soc/trial)
- [https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent](https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent)
- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)
