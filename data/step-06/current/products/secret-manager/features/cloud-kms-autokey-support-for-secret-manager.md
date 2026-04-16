---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:16.879Z"
product_name: "Secret Manager"
product_slug: "secret-manager"
feature_name: "Cloud KMS Autokey support for Secret Manager"
feature_slug: "cloud-kms-autokey-support-for-secret-manager"
latest_feature_date: "2024-09-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/secret-manager/docs/cmek"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient"
  - "https://docs.cloud.google.com/secret-manager/docs/analyze-resources"
keywords:
  - "kms"
  - "autokey"
  - "for"
  - "secret"
  - "manager"
  - "can"
  - "use"
  - "to"
---

# Cloud KMS Autokey support for Secret Manager

Product: Secret Manager
Coverage: MEDIUM

## Step 02 Summary

Secret Manager can use Cloud KMS Autokey to manage customer-managed encryption keys.

## Extended Definition

Secret Manager can use Cloud KMS Autokey to manage customer-managed encryption keys.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/secret-manager/docs/cmek](https://docs.cloud.google.com/secret-manager/docs/cmek)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)
- [https://docs.cloud.google.com/secret-manager/docs/analyze-resources](https://docs.cloud.google.com/secret-manager/docs/analyze-resources)

## Supporting Pages

### "Enable customer-managed encryption keys for Secret Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/secret-manager/docs/cmek](https://docs.cloud.google.com/secret-manager/docs/cmek)
- Source ID: `site-iam-reference`
- Final score: 309
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CMEK with Cloud KMS Autokey You can either create CMEKs manually to protect your Secret Manager resources or use Cloud KMS Autokey.
- Set the value of replication.userManaged.replicas.customerManagedEncryption.kmsKeyName to the resource names for the CMEK keys. curl "https://secretmanager.googleapis.com/v1/projects/ SM PROJECT ID /secrets?secretId=my-ummr-secret" \ --request "POST" \ --header "Content-Type: application/json" \ --header "Authorization: Bearer ACCESS TOKEN " \ --data-binary @- <<EOF { "replication" : { "userManaged" : { "replicas" : [ { "location" : "us-east1" , "customerManagedEncryption" : { "kmsKeyName" : "projects/ KMS PROJECT ID /locations/us-east1/keyRings/secret-manager-cmek/cryptoKeys/my-cmek-key" } } , { "location" : "us-central1" , "customerManagedEncryption" : { "kmsKeyName" : "projects/ KMS PROJECT ID /locations/us-central1/keyRings/secret-manager-cmek/cryptoKeys/my-cmek-key" } } ] } } } EOF Now, each time a secret version is created in that secret, the secret version's payload is automatically encrypted using the key before being written to persistent storage, as long as the service identity has access to the CMEK key.
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . gcloud kms keyrings create "secret-manager-cmek" \ --project " KMS PROJECT ID " \ --location "us-east1" gcloud kms keys create "my-cmek-key" \ --project " KMS PROJECT ID " \ --location "us-east1" \ --keyring "secret-manager-cmek" \ --purpose "encryption" gcloud kms keyrings create "secret-manager-cmek" \ --project " KMS PROJECT ID " \ --location "us-central1" gcloud kms keys create "my-cmek-key" \ --project " KMS PROJECT ID " \ --location "us-central1" \ --keyring "secret-manager-cmek" \ --purpose "encryption" Grant the service identity for Secret Manager permission to encrypt and decrypt using the CMEK key by granting the Cloud KMS Encrypter / Decrypter role ( roles/cloudkms.cryptoKeyEncrypterDecrypter ) for each of the CMEK keys individually or for all keys in the project. gcloud To use Secret Manager on the command line, first Install or upgrade to version 378.0.0 or higher of the Google Cloud CLI .
- On Compute Engine or GKE, you must authenticate with the cloud-platform scope . curl "https://secretmanager.googleapis.com/v1/projects/ ${ SM PROJECT ID } /secrets/my-ummr-secret?updateMask=replication" \ --request "PATCH" \ --header "Authorization: Bearer ACCESS TOKEN " \ --header "Content-Type: application/json" \ --data-binary @- <<EOF { "replication" : { "userManaged" : { "replicas" : [ { "location" : "us-east1" , "customerManagedEncryption" : { "kmsKeyName" : "projects/ KMS PROJECT ID /locations/us-east1/keyRings/secret-manager-cmek/cryptoKeys/my-other-key" } } , { "location" : "us-central1" , "customerManagedEncryption" : { "kmsKeyName" : "projects/ KMS PROJECT ID /locations/us-central1/keyRings/secret-manager-cmek/cryptoKeys/my-other-key" } }] } } } EOF Warning: Updating the CMEK configuration only applies to new secret versions.

### "Class SecretManagerServiceAsyncClient (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 277
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample test iam permissions(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample get iam policy(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample set iam policy(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 async def sample destroy secret version(): Create a client client = secretmanager v1 .

### "Class SecretManagerServiceClient (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)
- Source ID: `site-python-reference`
- Final score: 277
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore def sample test iam permissions(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore def sample get iam policy(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore def sample set iam policy(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 def sample destroy secret version(): Create a client client = secretmanager v1 .

### "Analyze secrets with Cloud Asset Inventory \_|\_ Secret Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/secret-manager/docs/analyze-resources](https://docs.cloud.google.com/secret-manager/docs/analyze-resources)
- Source ID: `site-iam-reference`
- Final score: 276
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- KMS KEY NAME : the ID of the key or fully qualified identifier for the key gcloud NOW = $ ( TZ = GMT date + "%Y-%m-%dT%H:%M:%SZ" ) gcloud asset list -- project = PROJECT ID \ -- asset - types = ' secretmanager . googleapis . com / Secret ' \ -- snapshot - time = $ NOW \ -- content - type = ' resource ' \ -- filter = "resource.data.replication.userManaged.replicas.customerManagedEncryption.kmsKeyName= KMS KEY NAME " Replace the following: PROJECT ID : the ID of the project containing the secrets to be analyzed KMS KEY NAME : the ID of the key or fully qualified identifier for the key Secret versions without CMEK configured Find all enabled secret versions that are not encrypted with CMEK.
- BigQuery SELECT FROM BIGQUERY TABLE WHERE asset type = 'secretmanager.googleapis.com/SecretVersion' AND ( JSON VALUE ( resource . data , "$.replicationStatus.automatic.customerManagedEncryption.kmsKeyVersionName" ) IS NULL AND JSON VALUE ( resource . data , "$.replicationStatus.userManaged.replicas[0].customerManagedEncryption.kmsKeyVersionName" ) IS NULL ) AND JSON VALUE ( resource . data , "$.state" ) = "ENABLED" ; Replace BIGQUERY TABLE with the full path to the BigQuery table that you have exported all the assets to in the Export assets to BigQuery section of this document. gcloud NOW = $ ( TZ = GMT date + "%Y-%m-%dT%H:%M:%SZ" ) gcloud asset list -- project = PROJECT ID \ -- asset - types = ' secretmanager . googleapis . com / SecretVersion ' \ -- snapshot - time = $ NOW \ -- content - type = ' resource ' \ -- filter = "(resource.data.replicationStatus.userManaged.replicas.customerManagedEncryption = NULL OR resource.data.replicationStatus.automatic.customerManagedEncryption=NULL) AND resource.data.state=ENABLED" Replace PROJECT ID with the ID of the project containing the secrets to be analyzed.
- Secrets without CMEK configured List all secrets that are not encrypted with customer-manager encryption keys (CMEK): BigQuery SELECT FROM BIGQUERY TABLE WHERE asset type = 'secretmanager.googleapis.com/Secret' AND ( JSON VALUE ( resource . data , "$.replication.automatic.customerManagedEncryption.kmsKeyName" ) IS NULL AND JSON VALUE ( resource . data , "$.replication.userManaged.replicas[0].customerManagedEncryption.kmsKeyName" ) IS NULL ); Replace BIGQUERY TABLE with the full path to the BigQuery table that you have exported all the assets to in the Export assets to BigQuery section of this document. gcloud NOW = $ ( TZ = GMT date + "%Y-%m-%dT%H:%M:%SZ" ) gcloud asset list -- project = PROJECT ID \ -- asset - types = ' secretmanager . googleapis . com / SecretVersion ' \ -- snapshot - time = $ NOW \ -- content - type = ' resource ' \ -- filter = "resource.data.createTime < P6M AND resource.data.state=ENABLED" Replace PROJECT ID with the ID of the project containing the secrets to be analyzed.
- BigQuery SELECT FROM BIGQUERY TABLE WHERE asset type = 'secretmanager.googleapis.com/Secret' AND ( JSON VALUE ( resource . data , "$.replication.automatic.customerManagedEncryption.kmsKeyName" ) IS NOT NULL OR JSON VALUE ( resource . data , "$.replication.userManaged.replicas[0].customerManagedEncryption.kmsKeyName" ) IS NOT NULL ); Replace BIGQUERY TABLE with the full path to the BigQuery table that you have exported all the assets to in the Export assets to BigQuery section of this document. gcloud NOW = $ ( TZ = GMT date + "%Y-%m-%dT%H:%M:%SZ" ) gcloud asset list -- project = PROJECT ID \ -- asset - types = ' secretmanager . googleapis . com / Secret ' \ -- snapshot - time = $ NOW \ -- content - type = ' resource ' \ -- filter = "resource.data.replication.userManaged.replicas.customerManagedEncryption != NULL OR resource.data.replication.automatic.customerManagedEncryption!=NULL" Replace PROJECT ID with the ID of the project containing the secrets to be analyzed.

