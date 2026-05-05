# Workflow triggers within service perimeter

Product: Eventarc
Feature slug: `workflow-triggers-within-service-perimeter`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Eventarc supports triggering a workflow within a service perimeter using VPC Service Controls.

## Lifecycle

- Latest feature date: 2023-03-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/eventarc/docs/using-vpc-service-controls](https://docs.cloud.google.com/eventarc/docs/using-vpc-service-controls), [https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-cal](https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-cal), [https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-pubsub](https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-pubsub), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform))
- audit (evidence: [https://docs.cloud.google.com/eventarc/docs/using-vpc-service-controls](https://docs.cloud.google.com/eventarc/docs/using-vpc-service-controls), [https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-cal](https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-cal), [https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-pubsub](https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-pubsub), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform))
- auth (evidence: [https://docs.cloud.google.com/eventarc/docs/using-vpc-service-controls](https://docs.cloud.google.com/eventarc/docs/using-vpc-service-controls), [https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-cal](https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-cal), [https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-pubsub](https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-pubsub), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform))
- iam (evidence: [https://docs.cloud.google.com/eventarc/docs/using-vpc-service-controls](https://docs.cloud.google.com/eventarc/docs/using-vpc-service-controls), [https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-cal](https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-cal), [https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-pubsub](https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-pubsub), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform))
- identity (evidence: [https://docs.cloud.google.com/eventarc/docs/using-vpc-service-controls](https://docs.cloud.google.com/eventarc/docs/using-vpc-service-controls), [https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-cal](https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-cal), [https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-pubsub](https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-pubsub), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform))
- logging (evidence: [https://docs.cloud.google.com/eventarc/docs/using-vpc-service-controls](https://docs.cloud.google.com/eventarc/docs/using-vpc-service-controls), [https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-cal](https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-cal), [https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-pubsub](https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-pubsub), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform))
- permission (evidence: [https://docs.cloud.google.com/eventarc/docs/using-vpc-service-controls](https://docs.cloud.google.com/eventarc/docs/using-vpc-service-controls), [https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-cal](https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-cal), [https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-pubsub](https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-pubsub), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform))
- role (evidence: [https://docs.cloud.google.com/eventarc/docs/using-vpc-service-controls](https://docs.cloud.google.com/eventarc/docs/using-vpc-service-controls), [https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-cal](https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-cal), [https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-pubsub](https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-pubsub), [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform))

## Official Evidence

- [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform)
- [https://docs.cloud.google.com/eventarc/docs/using-vpc-service-controls](https://docs.cloud.google.com/eventarc/docs/using-vpc-service-controls)
- [https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-cal](https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-cal)
- [https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-pubsub](https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-pubsub)
