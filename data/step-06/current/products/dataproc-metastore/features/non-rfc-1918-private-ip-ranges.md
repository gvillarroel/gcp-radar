---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:49:01.306Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "Non-RFC 1918 private IP ranges"
feature_slug: "non-rfc-1918-private-ip-ranges"
latest_feature_date: "2021-02-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/access-service"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/release-notes"
keywords:
  - "non"
  - "rfc"
  - "1918"
  - "private"
  - "ip"
  - "ranges"
  - "this"
  - "networking"
---

# Non-RFC 1918 private IP ranges

Product: Dataproc Metastore
Coverage: LOW

## Step 02 Summary

This networking capability lets Dataproc Metastore services use non-RFC 1918 private IP address ranges.

## Extended Definition

This networking capability lets Dataproc Metastore services use non-RFC 1918 private IP address ranges.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/access-service](https://docs.cloud.google.com/dataproc-metastore/docs/access-service)
- [https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting](https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting)
- [https://docs.cloud.google.com/dataproc-metastore/docs/release-notes](https://docs.cloud.google.com/dataproc-metastore/docs/release-notes)

## Supporting Pages

### Dataproc Metastore networking overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/access-service](https://docs.cloud.google.com/dataproc-metastore/docs/access-service)
- Source ID: `site-iam-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Using these ranges means that Connections to a Dataproc Metastore service using an internal IP address use RFC 1918 address ranges .
- Connections to a Dataproc Metastore service using a internal IP address use RFC 1918 address ranges .
- Note that the allocation of non-RFC 1918 blocks doesn't take into account whether or not those addresses are in use in your VPC network or on-premises.
- If RFC 1918 address blocks aren't found, then Dataproc Metastore finds suitable non-RFC 1918 address blocks instead.

### Troubleshooting \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting](https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To check the list of RFC 1918 and non-RFC 1918 private IP addresses reserved by Dataproc Metastore: gcloud compute addresses list \ --project NETWORK PROJECT ID \ --filter = "purpose:VPC PEERING AND name cluster resourcegroup" If a conflict is determined and cannot be mitigated by re-configuring the on-premises network, delete the offending Dataproc Metastore service and re-create it again after 2 hours.
- For a list of supported non-RFC 1918 private ranges, see Valid ranges in the VPC network documentation.} service uses a network belonging to a different project, and Compute Engine is protected by the service perimeter, then the metastore project and network project must be in the same perimeter.
- Non-RFC 1918 private IP addresses used in Dataproc Metastore may conflict with a range in an on-premises network that is connected to the provided VPC network.
- If that happens, Dataproc Metastore will attempt to reserve private IP address ranges outside of the RFC 1918 ranges for service creation.

### Dataproc Metastore release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/release-notes](https://docs.cloud.google.com/dataproc-metastore/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- February 03, 2021 v1beta1 Feature You can create Dataproc Metastore services in cross-product networks (shared VPC) . v1beta1 Feature New Cloud Monitoring service metric is available: metastore.googleapis.com/service/request count v1beta1 Feature Dataproc Metastore suppports the use of non-RFC 1918 private IP address ranges in metastore services. v1beta1 Feature You can update the description of metadata imports under a Dataproc Metastore service. v1beta1 Fixed Fixed an issue in which a service could get stuck in the UPDATING state. v1beta1 Fixed Fixed an issue where Cloud Storage buckets with single character directories would fail request validation.
- To work around this issue, remove dns.googleapis.com from the perimeter during API calls. v1 & v1beta1 Issue The request count metric spikes due to a bug in the logic of our metrics reporting pipeline.
- Existing services configured with Private Service Connect do not inherit this change and continue to only support access from the VPC subnetworks that were specified during service creation.
- February 11, 2022 v1beta1 Fixed Performing import, export, backup, or restore on Spanner-backed services now returns a 4XX error since these operations aren't supported. v1beta1 Change Added additional mutual exclusion validation for Data Catalog and Spanner-backed services. v1 Fixed Fixed the issue causing request count metric spikes due to a bug in the logic of our metrics reporting pipeline.

