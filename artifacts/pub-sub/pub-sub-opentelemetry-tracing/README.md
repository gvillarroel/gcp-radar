# Pub/Sub OpenTelemetry tracing

Product: Pub/Sub
Feature slug: `pub-sub-opentelemetry-tracing`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

OpenTelemetry tracing lets you identify and trace latency for Pub/Sub client library operations.

## Lifecycle

- Latest feature date: 2024-10-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.Publisher.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.Publisher.Builder), [https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.OpenTelemetryPubsubTracer](https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.OpenTelemetryPubsubTracer), [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console), [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library))
- credential (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.Publisher.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.Publisher.Builder), [https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.OpenTelemetryPubsubTracer](https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.OpenTelemetryPubsubTracer), [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console), [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library))
- iam (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.Publisher.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.Publisher.Builder), [https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.OpenTelemetryPubsubTracer](https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.OpenTelemetryPubsubTracer), [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console), [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library))
- permission (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.Publisher.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.Publisher.Builder), [https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.OpenTelemetryPubsubTracer](https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.OpenTelemetryPubsubTracer), [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console), [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library))
- role (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.Publisher.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.Publisher.Builder), [https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.OpenTelemetryPubsubTracer](https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.OpenTelemetryPubsubTracer), [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console), [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library))

## Official Evidence

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.OpenTelemetryPubsubTracer](https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.OpenTelemetryPubsubTracer)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.Publisher.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsub/latest/com.google.cloud.pubsub.v1.Publisher.Builder)
- [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-client-library)
- [https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console](https://docs.cloud.google.com/pubsub/docs/publish-receive-messages-console)
