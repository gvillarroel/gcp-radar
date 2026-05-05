# App Hub support for GKE workload resources

Product: App Hub
Feature slug: `app-hub-support-for-gke-workload-resources`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

App Hub now includes Google Kubernetes Engine (GKE) workloads as supported resources in Preview.

## Lifecycle

- Latest feature date: 2025-03-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/app-hub/docs/key-concepts](https://docs.cloud.google.com/app-hub/docs/key-concepts), [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources))
- auth (evidence: [https://docs.cloud.google.com/app-hub/docs/key-concepts](https://docs.cloud.google.com/app-hub/docs/key-concepts), [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources))
- certificate (evidence: [https://docs.cloud.google.com/app-hub/docs/key-concepts](https://docs.cloud.google.com/app-hub/docs/key-concepts), [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources))
- key (evidence: [https://docs.cloud.google.com/app-hub/docs/key-concepts](https://docs.cloud.google.com/app-hub/docs/key-concepts), [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources))
- logging (evidence: [https://docs.cloud.google.com/app-hub/docs/key-concepts](https://docs.cloud.google.com/app-hub/docs/key-concepts), [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources))
- permission (evidence: [https://docs.cloud.google.com/app-hub/docs/key-concepts](https://docs.cloud.google.com/app-hub/docs/key-concepts), [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources))
- policy (evidence: [https://docs.cloud.google.com/app-hub/docs/key-concepts](https://docs.cloud.google.com/app-hub/docs/key-concepts), [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources))
- role (evidence: [https://docs.cloud.google.com/app-hub/docs/key-concepts](https://docs.cloud.google.com/app-hub/docs/key-concepts), [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources))
- secret (evidence: [https://docs.cloud.google.com/app-hub/docs/key-concepts](https://docs.cloud.google.com/app-hub/docs/key-concepts), [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1), [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources))

## Official Evidence

- [https://docs.cloud.google.com/app-hub/docs/key-concepts](https://docs.cloud.google.com/app-hub/docs/key-concepts)
- [https://docs.cloud.google.com/app-hub/docs/supported-resources](https://docs.cloud.google.com/app-hub/docs/supported-resources)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:support_matrix_only_evidence` The feature is backed only by broad support-matrix style evidence, not a dedicated page for the supported target.
