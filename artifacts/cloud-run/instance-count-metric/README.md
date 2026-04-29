# Instance count metric

Product: Cloud Run
Feature slug: `instance-count-metric`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Run provides a Cloud Monitoring metric that counts container instances by state, such as active or idle.

## Lifecycle

- Latest feature date: 2021-03-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- certificate
- iam
- identity
- key
- permission
- policy
- role

## Official Evidence

- [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus)
- [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub)
- [https://docs.cloud.google.com/run/docs/tutorials/custom-metrics-opentelemetry-sidecar](https://docs.cloud.google.com/run/docs/tutorials/custom-metrics-opentelemetry-sidecar)
