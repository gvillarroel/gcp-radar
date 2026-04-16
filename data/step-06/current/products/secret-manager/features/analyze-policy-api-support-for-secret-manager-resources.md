---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:16.884Z"
product_name: "Secret Manager"
product_slug: "secret-manager"
feature_name: "Analyze Policy API support for Secret Manager resources"
feature_slug: "analyze-policy-api-support-for-secret-manager-resources"
latest_feature_date: "2021-08-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient"
  - "https://docs.cloud.google.com/secret-manager/docs/analyze-resources"
  - "https://docs.cloud.google.com/secret-manager/docs/cmek"
keywords:
  - "analyze"
  - "policy"
  - "api"
  - "for"
  - "secret"
  - "manager"
  - "resources"
  - "the"
---

# Analyze Policy API support for Secret Manager resources

Product: Secret Manager
Coverage: MEDIUM

## Step 02 Summary

The Analyze Policy API added support for Secret Manager secret and secret version resource types.

## Extended Definition

The Analyze Policy API added support for Secret Manager secret and secret version resource types.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)
- [https://docs.cloud.google.com/secret-manager/docs/analyze-resources](https://docs.cloud.google.com/secret-manager/docs/analyze-resources)
- [https://docs.cloud.google.com/secret-manager/docs/cmek](https://docs.cloud.google.com/secret-manager/docs/cmek)

## Supporting Pages

### "Class SecretManagerServiceAsyncClient (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 315
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample test iam permissions(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample get iam policy(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample set iam policy(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 async def sample destroy secret version(): Create a client client = secretmanager v1 .

### "Class SecretManagerServiceClient (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)
- Source ID: `site-python-reference`
- Final score: 315
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore def sample test iam permissions(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore def sample get iam policy(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore def sample set iam policy(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 def sample destroy secret version(): Create a client client = secretmanager v1 .

### "Analyze secrets with Cloud Asset Inventory \_|\_ Secret Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/secret-manager/docs/analyze-resources](https://docs.cloud.google.com/secret-manager/docs/analyze-resources)
- Source ID: `site-iam-reference`
- Final score: 310
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- KMS KEY NAME : the ID of the key or fully qualified identifier for the key gcloud NOW = $ ( TZ = GMT date + "%Y-%m-%dT%H:%M:%SZ" ) gcloud asset list -- project = PROJECT ID \ -- asset - types = ' secretmanager . googleapis . com / Secret ' \ -- snapshot - time = $ NOW \ -- content - type = ' resource ' \ -- filter = "resource.data.replication.userManaged.replicas.customerManagedEncryption.kmsKeyName= KMS KEY NAME " Replace the following: PROJECT ID : the ID of the project containing the secrets to be analyzed KMS KEY NAME : the ID of the key or fully qualified identifier for the key Secret versions without CMEK configured Find all enabled secret versions that are not encrypted with CMEK.
- Limitations Using Cloud Asset Inventory to analyze Secret Manager resources has the following limitation: Cloud Asset Inventory supports exporting and listing snapshots for only the past five weeks.
- BigQuery SELECT FROM BIGQUERY TABLE WHERE asset type = 'secretmanager.googleapis.com/SecretVersion' AND ( JSON VALUE ( resource . data , "$.replicationStatus.automatic.customerManagedEncryption.kmsKeyVersionName" ) IS NULL AND JSON VALUE ( resource . data , "$.replicationStatus.userManaged.replicas[0].customerManagedEncryption.kmsKeyVersionName" ) IS NULL ) AND JSON VALUE ( resource . data , "$.state" ) = "ENABLED" ; Replace BIGQUERY TABLE with the full path to the BigQuery table that you have exported all the assets to in the Export assets to BigQuery section of this document. gcloud NOW = $ ( TZ = GMT date + "%Y-%m-%dT%H:%M:%SZ" ) gcloud asset list -- project = PROJECT ID \ -- asset - types = ' secretmanager . googleapis . com / SecretVersion ' \ -- snapshot - time = $ NOW \ -- content - type = ' resource ' \ -- filter = "(resource.data.replicationStatus.userManaged.replicas.customerManagedEncryption = NULL OR resource.data.replicationStatus.automatic.customerManagedEncryption=NULL) AND resource.data.state=ENABLED" Replace PROJECT ID with the ID of the project containing the secrets to be analyzed.
- Secrets without CMEK configured List all secrets that are not encrypted with customer-manager encryption keys (CMEK): BigQuery SELECT FROM BIGQUERY TABLE WHERE asset type = 'secretmanager.googleapis.com/Secret' AND ( JSON VALUE ( resource . data , "$.replication.automatic.customerManagedEncryption.kmsKeyName" ) IS NULL AND JSON VALUE ( resource . data , "$.replication.userManaged.replicas[0].customerManagedEncryption.kmsKeyName" ) IS NULL ); Replace BIGQUERY TABLE with the full path to the BigQuery table that you have exported all the assets to in the Export assets to BigQuery section of this document. gcloud NOW = $ ( TZ = GMT date + "%Y-%m-%dT%H:%M:%SZ" ) gcloud asset list -- project = PROJECT ID \ -- asset - types = ' secretmanager . googleapis . com / SecretVersion ' \ -- snapshot - time = $ NOW \ -- content - type = ' resource ' \ -- filter = "resource.data.createTime < P6M AND resource.data.state=ENABLED" Replace PROJECT ID with the ID of the project containing the secrets to be analyzed.

### "Enable customer-managed encryption keys for Secret Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/secret-manager/docs/cmek](https://docs.cloud.google.com/secret-manager/docs/cmek)
- Source ID: `site-iam-reference`
- Final score: 271
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . curl "https://secretmanager.googleapis.com/v1/projects/ SM PROJECT ID /secrets/ SECRET ID /versions/latest" \ --request "GET" \ --header "Authorization: Bearer ACCESS TOKEN " \ --header "Content-Type: application/json" This returns the full Cloud KMS resource name of the key version used to encrypt the secret version. { "name" : "projects/ PROJECT NUMBER /secrets/ SECRET ID /versions/1" , "createTime" : "2021-07-..." , "state" : "ENABLED" , "replicationStatus" : { "automatic" : { "customerManagedEncryption" : { "kmsKeyVersionName" : "projects/ KMS PROJECT ID /locations/global/keyRings/secret-manager-cmek/cryptoKeys/my-cmek-key/cryptoKeyVersions/1" } } } } Add a Cloud EKM key to a CMEK policy This section covers adding a Cloud EKM key to a CMEK policy.
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . cat <<EOF > ./replication-policy.json { "userManaged" : { "replicas" : [ { "location" : "us-east1" , "customerManagedEncryption" : { "kmsKeyName" : "projects/ KMS PROJECT ID /locations/us-east1/keyRings/secret-manager-cmek/cryptoKeys/my-cmek-key" } } , { "location" : "us-central1" , "customerManagedEncryption" : { "kmsKeyName" : "projects/ KMS PROJECT ID /locations/us-central1/keyRings/secret-manager-cmek/cryptoKeys/my-cmek-key" } } ] } } EOF gcloud secrets create "my-ummr-secret" \ --replication-policy-file ./replication-policy.json \ --project " SM PROJECT ID " API These examples use curl to demonstrate using the API.
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . gcloud secrets create " SECRET ID " \ --replication-policy "automatic" \ --kms-key-name "projects/ KMS PROJECT ID /locations/global/keyRings/secret-manager-cmek/cryptoKeys/my-cmek-key" \ --project " SM PROJECT ID " API These examples use curl to demonstrate using the API.
- Secret Manager is only compatible with Cloud KMS Autokey when creating resources using Terraform or the REST API.

