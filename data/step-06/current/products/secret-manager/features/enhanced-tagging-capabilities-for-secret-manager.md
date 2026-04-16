---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:16.877Z"
product_name: "Secret Manager"
product_slug: "secret-manager"
feature_name: "Enhanced tagging capabilities for Secret Manager"
feature_slug: "enhanced-tagging-capabilities-for-secret-manager"
latest_feature_date: "2025-07-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient"
  - "https://docs.cloud.google.com/secret-manager/docs/secret-manager-secrets-comparison"
  - "https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets"
keywords:
  - "enhanced"
  - "tagging"
  - "capabilities"
  - "for"
  - "secret"
  - "manager"
  - "you"
  - "can"
---

# Enhanced tagging capabilities for Secret Manager

Product: Secret Manager
Coverage: MEDIUM

## Step 02 Summary

You can add tags when creating secrets, including regional secrets.

## Extended Definition

You can add tags when creating secrets, including regional secrets.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)
- [https://docs.cloud.google.com/secret-manager/docs/secret-manager-secrets-comparison](https://docs.cloud.google.com/secret-manager/docs/secret-manager-secrets-comparison)
- [https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets](https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets)

## Supporting Pages

### "Class SecretManagerServiceAsyncClient (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 235
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample test iam permissions(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample get iam policy(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample set iam policy(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 async def sample destroy secret version(): Create a client client = secretmanager v1 .

### "Class SecretManagerServiceClient (2.27.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)
- Source ID: `site-python-reference`
- Final score: 235
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore def sample test iam permissions(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore def sample get iam policy(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore def sample set iam policy(): Create a client client = secretmanager v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import secretmanager v1 def sample destroy secret version(): Create a client client = secretmanager v1 .

### "Compare global and regional service \_|\_ Secret Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/secret-manager/docs/secret-manager-secrets-comparison](https://docs.cloud.google.com/secret-manager/docs/secret-manager-secrets-comparison)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For organizations with stringent data sovereignty and compliance requirements, Secret Manager offers a regional service where you can choose to store your data solely within specific geographical locations or data residency zones (DRZs).
- Home Documentation Security Secret Manager Guides Send feedback Compare global and regional service Stay organized with collections Save and categorize content based on your preferences.
- The secret data is replicated across multiple regions and secrets can be accessed from any region where Google Cloud platform operates.
- The global service is the default configuration for Secret Manager.

### "Set an expiration date for a secret \_|\_ Secret Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets](https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets)
- Source ID: `site-iam-reference`
- Final score: 219
- Re-rank relevance: N/A

Evidence snippets:
- Update the expiration date and time, and click Update secret . gcloud Update a secret's expiration using a timestamp Before using any of the command data below, make the following replacements: SECRET ID : the ID of the secret TIMESTAMP : the expiration time in RFC 3339 format, for example 2100-01-01T09:00:00-05:00 Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets update SECRET ID \ --expire-time " TIMESTAMP " Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets update SECRET ID --expire-time " TIMESTAMP " Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets update SECRET ID ^ --expire-time " TIMESTAMP " Update a secret's expiration using a duration Before using any of the command data below, make the following replacements: SECRET ID : the ID of the secret DURATION : the expiration duration in seconds, for example 86400s Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets update SECRET ID \ --ttl " DURATION " Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets update SECRET ID --ttl " DURATION " Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets update SECRET ID ^ --ttl " DURATION " REST Update a secret's expiration using a timestamp Before using any of the request data, make the following replacements: PROJECT ID : the Google Cloud project ID SECRET ID : the ID of the secret TOKEN : your own Oauth2.0 access token TIMESTAMP : the expiration time in RFC 3339 format, for example 2100-01-01T09:00:00-05:00 HTTP method and URL: PATCH https://secretmanager.googleapis.com/v1/projects/ PROJECT ID /secrets/ SECRET ID ?updateMask=expire time Request JSON body: {"expire time": " TIMESTAMP "} To send your request, choose one of these options: curl Save the request body in a file named request.json , and execute the following command: curl -X PATCH \ -H "Authorization: Bearer TOKEN " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://secretmanager.googleapis.com/v1/projects/ PROJECT ID /secrets/ SECRET ID ?updateMask=expire time" PowerShell Save the request body in a file named request.json , and execute the following command: $headers = @{ "Authorization" = "Bearer TOKEN " } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://secretmanager.googleapis.com/v1/projects/ PROJECT ID /secrets/ SECRET ID ?updateMask=expire time" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ LOCATION /secrets/ SECRET ID ", "createTime": "2024-09-04T03:58:38.200877Z", "expireTime": "2024-09-04T09:25:39Z", "etag": "\"162143305d282d\"" } Update a secret's expiration using a duration Before using any of the request data, make the following replacements: PROJECT ID : the Google Cloud project ID SECRET ID : the ID of the secret DURATION : the expiration duration in seconds, for example 86400s HTTP method and URL: PATCH https://secretmanager.googleapis.com/v1/projects/ PROJECT ID /secrets/ SECRET ID ?updateMask=ttl Request JSON body: {"ttl": " DURATION "} To send your request, choose one of these options: curl Save the request body in a file named request.json , and execute the following command: curl -X PATCH \ -H "Authorization: Bearer TOKEN " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://secretmanager.googleapis.com/v1/projects/ PROJECT ID /secrets/ SECRET ID ?updateMask=ttl" PowerShell Save the request body in a file named request.json , and execute the following command: $headers = @{ "Authorization" = "Bearer TOKEN " } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://secretmanager.googleapis.com/v1/projects/ PROJECT ID /secrets/ SECRET ID ?updateMask=ttl" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ LOCATION /secrets/ SECRET ID ", "createTime": "2024-09-04T03:58:38.200877Z", "expireTime": "2024-09-04T09:25:39Z", "etag": "\"162143305d282d\"" } Remove a secret's expiration date To remove the secret's expiration date and time, use one of the following methods: Console In the Google Cloud console, go to the Secret Manager page.
- Click Create secret . gcloud Create an expiring secret using a timestamp Before using any of the command data below, make the following replacements: SECRET ID : the ID of the secret TIMESTAMP : the expiration time in RFC 3339 format, for example 2100-01-01T09:00:00-05:00 Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets create SECRET ID \ --replication-policy "automatic" \ --expire-time " TIMESTAMP " Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets create SECRET ID --replication-policy "automatic" --expire-time " TIMESTAMP " Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets create SECRET ID ^ --replication-policy "automatic" ^ --expire-time " TIMESTAMP " Create an expiring secret using a duration Before using any of the command data below, make the following replacements: SECRET ID : the ID of the secret DURATION : the expiration duration in seconds, for example 86400s Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets create SECRET ID \ --replication-policy "automatic" \ --ttl " DURATION " Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets create SECRET ID --replication-policy "automatic" --ttl " DURATION " Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets create SECRET ID ^ --replication-policy "automatic" ^ --ttl " DURATION " REST Create an expiring secret using a timestamp Before using any of the request data, make the following replacements: PROJECT ID : the Google Cloud project ID SECRET ID : the ID of the secret TIMESTAMP : the expiration time in RFC 3339 format, for example 2100-01-01T09:00:00-05:00 HTTP method and URL: POST https://secretmanager.googleapis.com/v1/projects/$ PROJECT ID /secrets?secretId=$ SECRET ID Request JSON body: { "replication": {"automatic": {}}, "expire time": " TIMESTAMP " } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Clear the Set expiration date checkbox, and then click Update secret . gcloud Before using any of the command data below, make the following replacements: SECRET ID : the ID of the secret Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets update SECRET ID \ --remove-expiration Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets update SECRET ID --remove-expiration Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud secrets update SECRET ID ^ --remove-expiration REST Before using any of the request data, make the following replacements: PROJECT ID : the Google Cloud project ID SECRET ID : the ID of the secret TOKEN : your own Oauth2.0 access token HTTP method and URL: PATCH https://secretmanager.googleapis.com/v1/projects/ PROJECT ID /secrets/ SECRET ID ?updateMask=expire time Request JSON body: {} To send your request, choose one of these options: curl Save the request body in a file named request.json , and execute the following command: curl -X PATCH \ -H "Authorization: Bearer TOKEN " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://secretmanager.googleapis.com/v1/projects/ PROJECT ID /secrets/ SECRET ID ?updateMask=expire time" PowerShell Save the request body in a file named request.json , and execute the following command: $headers = @{ "Authorization" = "Bearer TOKEN " } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://secretmanager.googleapis.com/v1/projects/ PROJECT ID /secrets/ SECRET ID ?updateMask=expire time" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ LOCATION /secrets/ SECRET ID ", "createTime": "2024-09-04T03:58:38.200877Z", "etag": "\"162143305d282d\"" } Expiration logging Cloud Audit Logs are not produced when a secret automatically expires.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://secretmanager.googleapis.com/v1/projects/$ PROJECT ID /secrets?secretId=$ SECRET ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ LOCATION /secrets/ SECRET ID ", "createTime": "2024-09-04T03:58:38.200877Z", "expireTime": "2024-09-04T09:25:39Z", "etag": "\"162143305d282d\"" } Create an expiring secret using a duration Before using any of the request data, make the following replacements: PROJECT ID : the Google Cloud project ID SECRET ID : the ID of the secret DURATION : the expiration duration in seconds, for example 86400s HTTP method and URL: POST https://secretmanager.googleapis.com/v1/projects/ PROJECT ID /secrets?secretId= SECRET ID Request JSON body: { "replication": {"automatic": {}}, "ttl": " DURATION " } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

