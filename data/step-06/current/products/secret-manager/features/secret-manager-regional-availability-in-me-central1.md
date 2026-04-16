---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:16.881Z"
product_name: "Secret Manager"
product_slug: "secret-manager"
feature_name: "Secret Manager regional availability in me-central1"
feature_slug: "secret-manager-regional-availability-in-me-central1"
latest_feature_date: "2023-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/secret-manager/docs/secret-manager-secrets-comparison"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient"
  - "https://docs.cloud.google.com/secret-manager/docs/locations"
keywords:
  - "secret"
  - "manager"
  - "regional"
  - "availability"
  - "in"
  - "me"
  - "central1"
  - "became"
---

# Secret Manager regional availability in me-central1

Product: Secret Manager
Coverage: MEDIUM

## Step 02 Summary

Secret Manager became available in the me-central1 region.

## Extended Definition

Secret Manager became available in the me-central1 region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/secret-manager/docs/secret-manager-secrets-comparison](https://docs.cloud.google.com/secret-manager/docs/secret-manager-secrets-comparison)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)
- [https://docs.cloud.google.com/secret-manager/docs/locations](https://docs.cloud.google.com/secret-manager/docs/locations)

## Supporting Pages

### "Compare global and regional service \_|\_ Secret Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/secret-manager/docs/secret-manager-secrets-comparison](https://docs.cloud.google.com/secret-manager/docs/secret-manager-secrets-comparison)
- Source ID: `site-docs-root`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For organizations with stringent data sovereignty and compliance requirements, Secret Manager offers a regional service where you can choose to store your data solely within specific geographical locations or data residency zones (DRZs).
- Home Documentation Security Secret Manager Guides Send feedback Compare global and regional service Stay organized with collections Save and categorize content based on your preferences.
- This page explains the key differences between the global and regional service of Secret Manager.
- Use cases General secret management Your data doesn't have to be stored in a specific region.

### "Class SecretManagerServiceAsyncClient (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 251
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample test iam permissions(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample get iam policy(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample set iam policy(): Create a client client = secretmanager v1 .
- SecretManagerServiceAsyncClient () Initialize request argument(s) request = iam policy pb2.TestIamPermissionsRequest( resource="resource value", permissions=['permissions value1', 'permissions value2'], ) Make the request response = await client. test iam permissions (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.iam.v1.iam policy pb2.TestIamPermissionsRequest , dict]] The request object.

### "Class SecretManagerServiceClient (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)
- Source ID: `site-python-reference`
- Final score: 251
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore def sample test iam permissions(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore def sample get iam policy(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore def sample set iam policy(): Create a client client = secretmanager v1 .
- SecretManagerServiceClient () Initialize request argument(s) request = iam policy pb2.TestIamPermissionsRequest( resource="resource value", permissions=['permissions value1', 'permissions value2'], ) Make the request response = client. test iam permissions (request=request) Handle the response print(response) Parameters Name Description request Union[ google.iam.v1.iam policy pb2.TestIamPermissionsRequest , dict] The request object.

### Secret Manager locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/locations](https://docs.cloud.google.com/secret-manager/docs/locations)
- Source ID: `site-docs-root`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Region Regional Secret Manager Parameter Manager us-central1 (Iowa) Yes Yes us-west4 (Las Vegas) Yes Yes us-west2 (Los Angeles) Yes Yes northamerica-south1 (Mexico) Yes Yes northamerica-northeast1 (Montréal) Yes Yes us-east4 (Northern Virginia) Yes Yes us-west1 (Oregon) Yes Yes us-west3 (Salt Lake City) Yes Yes us-east1 (South Carolina) Yes Yes northamerica-northeast2 (Toronto) Yes Yes us-east5 (Columbus) Yes Yes us-south1 (Dallas) Yes Yes Locations in South America The following table lists the locations in South America where Secret Manager resources can be stored.
- Region Regional Secret Manager Parameter Manager me-central2 (Dammam) Yes No me-central1 (Doha) Yes Yes me-west1 (Tel Aviv) Yes Yes Locations in Africa The following table lists the locations in Africa where Secret Manager resources can be stored.
- Region Regional Secret Manager Parameter Manager europe-west1 (Belgium) Yes Yes europe-west10 (Berlin) Yes No europe-north1 (Finland) No No europe-north2 (Stockholm) Yes No europe-west3 (Frankfurt) Yes Yes europe-west2 (London) Yes Yes europe-southwest1 (Madrid) Yes Yes europe-west8 (Milan) Yes Yes europe-west4 (Netherlands) Yes Yes europe-west12 (Turin) Yes No europe-west9 (Paris) Yes Yes europe-central2 (Warsaw) Yes Yes europe-west6 (Zurich) Yes Yes Locations in North America The following table lists the locations in North America where Secret Manager and Parameter Manager resources can be stored.
- Region Regional Secret Manager Parameter Manager asia-south2 (Delhi) Yes Yes asia-east2 (Hong Kong) Yes Yes asia-southeast2 (Jakarta) Yes No australia-southeast2 (Melbourne) Yes Yes asia-south1 (Mumbai) Yes Yes asia-northeast2 (Osaka) Yes Yes asia-northeast3 (Seoul) Yes Yes asia-southeast1 (Singapore) Yes No australia-southeast1 (Sydney) Yes Yes asia-east1 (Taiwan) Yes Yes asia-northeast1 (Tokyo) Yes Yes asia-southeast3 (Bangkok) Yes No Locations in Europe The following table lists the locations in Europe where Secret Manager and Parameter Manager resources can be stored.

