# User cluster log and metric export to Google Cloud observability

Product: Anthos clusters on AWS (previous generation)
Feature slug: `user-cluster-log-and-metric-export-to-google-cloud-observability`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Anthos clusters on AWS user clusters can export logs and metrics to Cloud Logging and Cloud Monitoring.

## Lifecycle

- Latest feature date: 2021-03-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- audit (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster), [https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster), [https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster))
- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster), [https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster), [https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster))
- authorization (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster), [https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster), [https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster))
- encrypt (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster), [https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster), [https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster))
- iam (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster), [https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster), [https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster))
- identity (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster), [https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster), [https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster))
- key (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster), [https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster), [https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster))
- kms (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster), [https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster), [https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster))
- logging (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster), [https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster), [https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster), [https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster), [https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster), [https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster), [https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster))
- secret (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster), [https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster), [https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster), [https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster), [https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster)
- [https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster)
- [https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster)
