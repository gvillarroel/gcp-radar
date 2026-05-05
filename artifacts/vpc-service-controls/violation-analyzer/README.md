# Violation analyzer

Product: VPC Service Controls
Feature slug: `violation-analyzer`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The VPC Service Controls violation analyzer diagnoses access denial events and generates evaluation reports to help troubleshoot denials.

## Lifecycle

- Latest feature date: 2025-12-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer](https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer), [https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard](https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard), [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter), [https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial](https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial))
- audit (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer](https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer), [https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard](https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard), [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter), [https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial](https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial))
- iam (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer](https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer), [https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard](https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard), [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter), [https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial](https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial))
- logging (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer](https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer), [https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard](https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard), [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter), [https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial](https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial))
- permission (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer](https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer), [https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard](https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard), [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter), [https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial](https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial))
- policy (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer](https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer), [https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard](https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard), [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter), [https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial](https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial))
- role (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer](https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer), [https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard](https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard), [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter), [https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial](https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial))
- security (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer](https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer), [https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard](https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard), [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter), [https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial](https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial))
- token (evidence: [https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer](https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer), [https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard](https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard), [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter), [https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial](https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial))

## Official Evidence

- [https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial](https://docs.cloud.google.com/vpc-service-controls/docs/protect-compute-engine-troubleshoot-denial)
- [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter)
- [https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer](https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer)
- [https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard](https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard)
