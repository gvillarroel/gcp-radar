# Per-bucket observability dashboards

Product: Cloud Storage
Feature slug: `per-bucket-observability-dashboards`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Per-bucket dashboards are available in an Observability tab within each bucket's details page.

## Lifecycle

- Latest feature date: 2022-11-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage), [https://developers.google.com/workspace/drive/api/guides/long-running-operations](https://developers.google.com/workspace/drive/api/guides/long-running-operations), [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions), [https://docs.cloud.google.com/storage/docs/access-monitoring](https://docs.cloud.google.com/storage/docs/access-monitoring))
- audit (evidence: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage), [https://developers.google.com/workspace/drive/api/guides/long-running-operations](https://developers.google.com/workspace/drive/api/guides/long-running-operations), [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions), [https://docs.cloud.google.com/storage/docs/access-monitoring](https://docs.cloud.google.com/storage/docs/access-monitoring))
- auth (evidence: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage), [https://developers.google.com/workspace/drive/api/guides/long-running-operations](https://developers.google.com/workspace/drive/api/guides/long-running-operations), [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions), [https://docs.cloud.google.com/storage/docs/access-monitoring](https://docs.cloud.google.com/storage/docs/access-monitoring))
- authorization (evidence: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage), [https://developers.google.com/workspace/drive/api/guides/long-running-operations](https://developers.google.com/workspace/drive/api/guides/long-running-operations), [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions), [https://docs.cloud.google.com/storage/docs/access-monitoring](https://docs.cloud.google.com/storage/docs/access-monitoring))
- iam (evidence: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage), [https://developers.google.com/workspace/drive/api/guides/long-running-operations](https://developers.google.com/workspace/drive/api/guides/long-running-operations), [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions), [https://docs.cloud.google.com/storage/docs/access-monitoring](https://docs.cloud.google.com/storage/docs/access-monitoring))
- logging (evidence: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage), [https://developers.google.com/workspace/drive/api/guides/long-running-operations](https://developers.google.com/workspace/drive/api/guides/long-running-operations), [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions), [https://docs.cloud.google.com/storage/docs/access-monitoring](https://docs.cloud.google.com/storage/docs/access-monitoring))
- permission (evidence: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage), [https://developers.google.com/workspace/drive/api/guides/long-running-operations](https://developers.google.com/workspace/drive/api/guides/long-running-operations), [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions), [https://docs.cloud.google.com/storage/docs/access-monitoring](https://docs.cloud.google.com/storage/docs/access-monitoring))
- policy (evidence: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage), [https://developers.google.com/workspace/drive/api/guides/long-running-operations](https://developers.google.com/workspace/drive/api/guides/long-running-operations), [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions), [https://docs.cloud.google.com/storage/docs/access-monitoring](https://docs.cloud.google.com/storage/docs/access-monitoring))
- role (evidence: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage), [https://developers.google.com/workspace/drive/api/guides/long-running-operations](https://developers.google.com/workspace/drive/api/guides/long-running-operations), [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions), [https://docs.cloud.google.com/storage/docs/access-monitoring](https://docs.cloud.google.com/storage/docs/access-monitoring))
- token (evidence: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage), [https://developers.google.com/workspace/drive/api/guides/long-running-operations](https://developers.google.com/workspace/drive/api/guides/long-running-operations), [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions), [https://docs.cloud.google.com/storage/docs/access-monitoring](https://docs.cloud.google.com/storage/docs/access-monitoring))

## Official Evidence

- [https://developers.google.com/workspace/drive/api/guides/long-running-operations](https://developers.google.com/workspace/drive/api/guides/long-running-operations)
- [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions)
- [https://docs.cloud.google.com/storage/docs/access-monitoring](https://docs.cloud.google.com/storage/docs/access-monitoring)
- [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
