---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.539Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Customer-managed encryption keys"
feature_slug: "customer-managed-encryption-keys"
latest_feature_date: "2022-08-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/cluster-create"
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster"
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "alloydb"
  - "supports"
  - "alternative"
---

# Customer-managed encryption keys

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB supports customer-managed encryption keys as an alternative to Google-managed encryption.

## Extended Definition

AlloyDB supports customer-managed encryption keys as an alternative to Google-managed encryption.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters)

## Supporting Pages

### "Create a cluster and its primary instance \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- Source ID: `site-docs-reference-2`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Optional: To encrypt this cluster using a customer-managed encryption key (CMEK) instead of the default Google-managed encryption, provide the following arguments: --kms-key= KEY ID \ --kms-keyring= KEYRING ID \ --kms-location= LOCATION ID \ --kms-project= PROJECT ID Replace the following: KEY ID : the ID of the CMEK key to use.
- Optional: To encrypt this cluster using a customer-managed encryption key (CMEK) instead of Google-managed encryption, follow these additional steps: Click Advanced encryption options .
- Select Customer-managed encryption key (CMEK) .
- In the menu that appears, select a customer-managed key.

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- If not set, defaults to 14 days. encryptionConfig object ( EncryptionConfig ) The encryption config can be specified to encrypt the backups with a customer-managed encryption key (CMEK).
- The encryption config can be specified to encrypt the data disks and other persistent data resources of a cluster with a customer-managed encryption key (CMEK).
- The encryption config can be specified to encrypt the backups with a customer-managed encryption key (CMEK).
- Name of the allocated IP range for the private IP AlloyDB cluster, for example: "google-managed-services-default".

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- If not set, defaults to 14 days. encryptionConfig object ( EncryptionConfig ) The encryption config can be specified to encrypt the backups with a customer-managed encryption key (CMEK).
- The encryption config can be specified to encrypt the data disks and other persistent data resources of a cluster with a customer-managed encryption key (CMEK).
- The encryption config can be specified to encrypt the backups with a customer-managed encryption key (CMEK).
- Name of the allocated IP range for the private IP AlloyDB cluster, for example: "google-managed-services-default".

