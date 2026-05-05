# Cloud Data Fusion 6.9 support

Product: Cloud Data Fusion
Feature slug: `cloud-data-fusion-6-9-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Data Fusion version 6.9 support was deprecated and is no longer supported; deprecated on 2025-03-31.

## Lifecycle

- Latest feature date: 2025-03-31
- Deprecation date: 2025-03-31
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- token (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsFixedSizeCollection), [https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsPage), [https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsPagedResponse](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsPagedResponse))

## Official Evidence

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsFixedSizeCollection)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsPage)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsPagedResponse](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsPagedResponse)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
