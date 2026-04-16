---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:16.882Z"
product_name: "Secret Manager"
product_slug: "secret-manager"
feature_name: "Secret Manager regional availability in europe-west12"
feature_slug: "secret-manager-regional-availability-in-europe-west12"
latest_feature_date: "2023-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/secret-manager/docs/secret-manager-secrets-comparison"
  - "https://docs.cloud.google.com/secret-manager/docs/locations"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient"
keywords:
  - "secret"
  - "manager"
  - "regional"
  - "availability"
  - "in"
  - "europe"
  - "west12"
  - "became"
---

# Secret Manager regional availability in europe-west12

Product: Secret Manager
Coverage: MEDIUM

## Step 02 Summary

Secret Manager became available in the europe-west12 region.

## Extended Definition

Secret Manager became available in the europe-west12 region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/secret-manager/docs/secret-manager-secrets-comparison](https://docs.cloud.google.com/secret-manager/docs/secret-manager-secrets-comparison)
- [https://docs.cloud.google.com/secret-manager/docs/locations](https://docs.cloud.google.com/secret-manager/docs/locations)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)

## Supporting Pages

### "Compare global and regional service \_|\_ Secret Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/secret-manager/docs/secret-manager-secrets-comparison](https://docs.cloud.google.com/secret-manager/docs/secret-manager-secrets-comparison)
- Source ID: `site-docs-root`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For organizations with stringent data sovereignty and compliance requirements, Secret Manager offers a regional service where you can choose to store your data solely within specific geographical locations or data residency zones (DRZs).
- This page explains the key differences between the global and regional service of Secret Manager.
- Home Documentation Security Secret Manager Guides Send feedback Compare global and regional service Stay organized with collections Save and categorize content based on your preferences.
- What's next Enable the Secret Manager API Create and access a secret Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Secret Manager locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secret-manager/docs/locations](https://docs.cloud.google.com/secret-manager/docs/locations)
- Source ID: `site-docs-root`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Region Regional Secret Manager Parameter Manager europe-west1 (Belgium) Yes Yes europe-west10 (Berlin) Yes No europe-north1 (Finland) No No europe-north2 (Stockholm) Yes No europe-west3 (Frankfurt) Yes Yes europe-west2 (London) Yes Yes europe-southwest1 (Madrid) Yes Yes europe-west8 (Milan) Yes Yes europe-west4 (Netherlands) Yes Yes europe-west12 (Turin) Yes No europe-west9 (Paris) Yes Yes europe-central2 (Warsaw) Yes Yes europe-west6 (Zurich) Yes Yes Locations in North America The following table lists the locations in North America where Secret Manager and Parameter Manager resources can be stored.
- Region Regional Secret Manager Parameter Manager asia-south2 (Delhi) Yes Yes asia-east2 (Hong Kong) Yes Yes asia-southeast2 (Jakarta) Yes No australia-southeast2 (Melbourne) Yes Yes asia-south1 (Mumbai) Yes Yes asia-northeast2 (Osaka) Yes Yes asia-northeast3 (Seoul) Yes Yes asia-southeast1 (Singapore) Yes No australia-southeast1 (Sydney) Yes Yes asia-east1 (Taiwan) Yes Yes asia-northeast1 (Tokyo) Yes Yes asia-southeast3 (Bangkok) Yes No Locations in Europe The following table lists the locations in Europe where Secret Manager and Parameter Manager resources can be stored.
- Multi-Region Name Multi-Region Description Regional Secret Manager Parameter Manager us Data centers in the United States No Yes eu Data centers in the European Union No Yes What's next Learn more about locations Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Region Regional Secret Manager Parameter Manager us-central1 (Iowa) Yes Yes us-west4 (Las Vegas) Yes Yes us-west2 (Los Angeles) Yes Yes northamerica-south1 (Mexico) Yes Yes northamerica-northeast1 (Montréal) Yes Yes us-east4 (Northern Virginia) Yes Yes us-west1 (Oregon) Yes Yes us-west3 (Salt Lake City) Yes Yes us-east1 (South Carolina) Yes Yes northamerica-northeast2 (Toronto) Yes Yes us-east5 (Columbus) Yes Yes us-south1 (Dallas) Yes Yes Locations in South America The following table lists the locations in South America where Secret Manager resources can be stored.

### "Class SecretManagerServiceAsyncClient (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample test iam permissions(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample get iam policy(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample set iam policy(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 async def sample destroy secret version(): Create a client client = secretmanager v1 .

### "Class SecretManagerServiceClient (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)
- Source ID: `site-python-reference`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore def sample test iam permissions(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore def sample get iam policy(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore def sample set iam policy(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 def sample destroy secret version(): Create a client client = secretmanager v1 .

