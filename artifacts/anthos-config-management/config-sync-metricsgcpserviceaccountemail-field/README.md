# Config Sync metricsGcpServiceAccountEmail field

Product: Anthos Config Management
Feature slug: `config-sync-metricsgcpserviceaccountemail-field`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The gcloud apply spec adds the spec.configSync.metricsGcpServiceAccountEmail field to simplify exporting Config Sync metrics to Cloud Monitoring with Workload Identity.

## Lifecycle

- Latest feature date: 2023-08-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- identity
- policy
- secret

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/gcloud-apply-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/gcloud-apply-fields)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/gcloud-configuration-field-behavior](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/gcloud-configuration-field-behavior)
