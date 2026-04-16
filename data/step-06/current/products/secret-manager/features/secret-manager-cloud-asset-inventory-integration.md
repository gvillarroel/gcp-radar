---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:16.886Z"
product_name: "Secret Manager"
product_slug: "secret-manager"
feature_name: "Secret Manager Cloud Asset Inventory integration"
feature_slug: "secret-manager-cloud-asset-inventory-integration"
latest_feature_date: "2020-10-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/secret-manager/docs/analyze-resources"
  - "https://docs.cloud.google.com/secret-manager/docs/best-practices"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient"
keywords:
  - "secret"
  - "manager"
  - "asset"
  - "inventory"
  - "integration"
  - "metadata"
  - "can"
  - "be"
---

# Secret Manager Cloud Asset Inventory integration

Product: Secret Manager
Coverage: MEDIUM

## Step 02 Summary

Secret Manager metadata can be queried in Cloud Asset Inventory.

## Extended Definition

Secret Manager metadata can be queried in Cloud Asset Inventory.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/secret-manager/docs/analyze-resources](https://docs.cloud.google.com/secret-manager/docs/analyze-resources)
- [https://docs.cloud.google.com/secret-manager/docs/best-practices](https://docs.cloud.google.com/secret-manager/docs/best-practices)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)

## Supporting Pages

### "Analyze secrets with Cloud Asset Inventory \_|\_ Secret Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/secret-manager/docs/analyze-resources](https://docs.cloud.google.com/secret-manager/docs/analyze-resources)
- Source ID: `site-iam-reference`
- Final score: 284
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The integration between Secret Manager and Cloud Asset Inventory helps you do the following: Run queries : Search for specific secrets or identify patterns across your secrets.
- Before reading this page, we recommend that you read the following: Secret Manager overview to understand the key concepts and features of Secret Manager Cloud Asset Inventory overview to understand Cloud Asset Inventory and to see its comprehensive asset management features Querying Secret Manager To analyze your secrets with SQL-like queries, we recommend that you export your secret and secret versions to BigQuery.
- BigQuery SELECT FROM BIGQUERY TABLE WHERE asset type = 'secretmanager.googleapis.com/SecretVersion' AND ( JSON VALUE ( resource . data , "$.replicationStatus.automatic.customerManagedEncryption.kmsKeyVersionName" ) IS NULL AND JSON VALUE ( resource . data , "$.replicationStatus.userManaged.replicas[0].customerManagedEncryption.kmsKeyVersionName" ) IS NULL ) AND JSON VALUE ( resource . data , "$.state" ) = "ENABLED" ; Replace BIGQUERY TABLE with the full path to the BigQuery table that you have exported all the assets to in the Export assets to BigQuery section of this document. gcloud NOW = $ ( TZ = GMT date + "%Y-%m-%dT%H:%M:%SZ" ) gcloud asset list -- project = PROJECT ID \ -- asset - types = ' secretmanager . googleapis . com / SecretVersion ' \ -- snapshot - time = $ NOW \ -- content - type = ' resource ' \ -- filter = "(resource.data.replicationStatus.userManaged.replicas.customerManagedEncryption = NULL OR resource.data.replicationStatus.automatic.customerManagedEncryption=NULL) AND resource.data.state=ENABLED" Replace PROJECT ID with the ID of the project containing the secrets to be analyzed.
- Secrets without CMEK configured List all secrets that are not encrypted with customer-manager encryption keys (CMEK): BigQuery SELECT FROM BIGQUERY TABLE WHERE asset type = 'secretmanager.googleapis.com/Secret' AND ( JSON VALUE ( resource . data , "$.replication.automatic.customerManagedEncryption.kmsKeyName" ) IS NULL AND JSON VALUE ( resource . data , "$.replication.userManaged.replicas[0].customerManagedEncryption.kmsKeyName" ) IS NULL ); Replace BIGQUERY TABLE with the full path to the BigQuery table that you have exported all the assets to in the Export assets to BigQuery section of this document. gcloud NOW = $ ( TZ = GMT date + "%Y-%m-%dT%H:%M:%SZ" ) gcloud asset list -- project = PROJECT ID \ -- asset - types = ' secretmanager . googleapis . com / SecretVersion ' \ -- snapshot - time = $ NOW \ -- content - type = ' resource ' \ -- filter = "resource.data.createTime < P6M AND resource.data.state=ENABLED" Replace PROJECT ID with the ID of the project containing the secrets to be analyzed.

### Secret Manager best practices \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/best-practices](https://docs.cloud.google.com/secret-manager/docs/best-practices)
- Source ID: `site-iam-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following are some reasons for using other methods for handling secrets: When a secret is accessible on the file system, application vulnerabilities like directory traversal attacks can become higher severity as the attacker may gain the ability to read the secret material.
- All of these methods are preferred to exporting a service account credential because they don't require securely storing and accessing an additional secret outside of the Secret Manager API.
- Home Documentation Security Secret Manager Guides Send feedback Secret Manager best practices Stay organized with collections Save and categorize content based on your preferences.
- In addition to IAM controls, you can limit access to the Secret Manager API with network-based controls by setting up a VPC Service Controls perimeter for your organization.

### "Class SecretManagerServiceAsyncClient (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 243
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.secretmanager v1.types.Secret A Secret is a logical secret whose value and versions can be accessed.
- Returns Type Description google.cloud.secretmanager v1.types.Secret A Secret is a logical secret whose value and versions can be accessed.
- Returns Type Description google.cloud.secretmanager v1.types.Secret A Secret is a logical secret whose value and versions can be accessed.
- The resource name of the project associated with the Secrets , in the format projects/ or projects//locations/ This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Class SecretManagerServiceClient (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)
- Source ID: `site-python-reference`
- Final score: 243
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.secretmanager v1.types.Secret A Secret is a logical secret whose value and versions can be accessed.
- Returns Type Description google.cloud.secretmanager v1.types.Secret A Secret is a logical secret whose value and versions can be accessed.
- Returns Type Description google.cloud.secretmanager v1.types.Secret A Secret is a logical secret whose value and versions can be accessed.
- The resource name of the project associated with the Secrets , in the format projects/ or projects//locations/ This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

