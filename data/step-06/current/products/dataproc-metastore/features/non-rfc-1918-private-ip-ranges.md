---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:00.728Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "Non-RFC 1918 private IP ranges"
feature_slug: "non-rfc-1918-private-ip-ranges"
latest_feature_date: "2021-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/access-service"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/create-service"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient"
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
Coverage: MEDIUM

## Step 02 Summary

This networking capability lets Dataproc Metastore services use non-RFC 1918 private IP address ranges.

## Extended Definition

This networking capability lets Dataproc Metastore services use non-RFC 1918 private IP address ranges.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/access-service](https://docs.cloud.google.com/dataproc-metastore/docs/access-service)
- [https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting](https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting)
- [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)

## Supporting Pages

### Dataproc Metastore networking overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/access-service](https://docs.cloud.google.com/dataproc-metastore/docs/access-service)
- Source ID: `site-iam-reference`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Using these ranges means that Connections to a Dataproc Metastore service using an internal IP address use RFC 1918 address ranges .
- Connections to a Dataproc Metastore service using a internal IP address use RFC 1918 address ranges .
- Note that the allocation of non-RFC 1918 blocks doesn't take into account whether or not those addresses are in use in your VPC network or on-premises.
- If RFC 1918 address blocks aren't found, then Dataproc Metastore finds suitable non-RFC 1918 address blocks instead.

### Troubleshooting \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting](https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To check the list of RFC 1918 and non-RFC 1918 private IP addresses reserved by Dataproc Metastore: gcloud compute addresses list \ --project NETWORK PROJECT ID \ --filter = "purpose:VPC PEERING AND name cluster resourcegroup" If a conflict is determined and cannot be mitigated by re-configuring the on-premises network, delete the offending Dataproc Metastore service and re-create it again after 2 hours.
- For a list of supported non-RFC 1918 private ranges, see Valid ranges in the VPC network documentation.} service uses a network belonging to a different project, and Compute Engine is protected by the service perimeter, then the metastore project and network project must be in the same perimeter.
- Non-RFC 1918 private IP addresses used in Dataproc Metastore may conflict with a range in an on-premises network that is connected to the provided VPC network.
- If that happens, Dataproc Metastore will attempt to reserve private IP address ranges outside of the RFC 1918 ranges for service creation.

### Create a Dataproc Metastore service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- When creating a metastore, the VPC network you are using might run out of available RFC 1918 addresses required by Dataproc Metastore services.
- If this happens, you can resolve the issue by attempting to create a service using a non-existent network in the service project.
- A keytab file must contain the entry for the service principal created for this Hive metastore.
- For more information about fixing this issue, see Allocated IP range is exhausted .

### "Class DataprocMetastoreAsyncClient (1.22.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)
- Source ID: `site-python-reference`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description DataprocMetastoreAsyncClient The constructed client. from service account json from service account json ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Returns Type Description DataprocMetastoreAsyncClient The constructed client. from service account info from service account info ( info : dict , args , kwargs ) Creates an instance of this client using the provided credentials info.
- Parameter Name Description filename str The path to the service account private key json file.
- Parameter Name Description filename str The path to the service account private key json file.

