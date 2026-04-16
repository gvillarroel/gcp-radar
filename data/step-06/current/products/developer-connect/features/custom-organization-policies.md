---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:05.561Z"
product_name: "Developer Connect"
product_slug: "developer-connect"
feature_name: "Custom organization policies"
feature_slug: "custom-organization-policies"
latest_feature_date: "2024-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectClient"
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectAsyncClient"
  - "https://docs.cloud.google.com/developer-connect/docs/connect-github-enterprise"
  - "https://docs.cloud.google.com/developer-connect/docs/connect-secure-source-manager"
keywords:
  - "custom"
  - "organization"
  - "policies"
  - "let"
  - "you"
  - "manage"
  - "developer"
  - "connect"
---

# Custom organization policies

Product: Developer Connect
Coverage: MEDIUM

## Step 02 Summary

Custom organization policies let you manage Developer Connect resources with organization policy controls.

## Extended Definition

Custom organization policies let you manage Developer Connect resources with organization policy controls.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectClient)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectAsyncClient)
- [https://docs.cloud.google.com/developer-connect/docs/connect-github-enterprise](https://docs.cloud.google.com/developer-connect/docs/connect-github-enterprise)
- [https://docs.cloud.google.com/developer-connect/docs/connect-secure-source-manager](https://docs.cloud.google.com/developer-connect/docs/connect-secure-source-manager)

## Supporting Pages

### "Class DeveloperConnectClient (0.5.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectClient)
- Source ID: `site-python-reference`
- Final score: 285
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CreateAccountConnectorRequest ( parent="parent value", account connector id="account connector id value", account connector=account connector, ) Make the request operation = client. create account connector (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.developerconnect v1.types.CreateAccountConnectorRequest , dict] The request object. parent str Required.
- CreateGitRepositoryLinkRequest ( parent="parent value", git repository link=git repository link, git repository link id="git repository link id value", ) Make the request operation = client. create git repository link (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.developerconnect v1.types.CreateGitRepositoryLinkRequest , dict] The request object.
- CreateConnectionRequest ( parent="parent value", connection id="connection id value", connection=connection, ) Make the request operation = client. create connection (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.developerconnect v1.types.CreateConnectionRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import developerconnect v1 def sample delete git repository link(): Create a client client = developerconnect v1 .

### "Class DeveloperConnectAsyncClient (0.5.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectAsyncClient)
- Source ID: `site-python-reference`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CreateAccountConnectorRequest ( parent="parent value", account connector id="account connector id value", account connector=account connector, ) Make the request operation = client. create account connector (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.developerconnect v1.types.CreateAccountConnectorRequest , dict]] The request object. parent str Required.
- CreateGitRepositoryLinkRequest ( parent="parent value", git repository link=git repository link, git repository link id="git repository link id value", ) Make the request operation = client. create git repository link (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.developerconnect v1.types.CreateGitRepositoryLinkRequest , dict]] The request object.
- CreateConnectionRequest ( parent="parent value", connection id="connection id value", connection=connection, ) Make the request operation = client. create connection (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.developerconnect v1.types.CreateConnectionRequest , dict]] The request object.
- UpdateAccountConnectorRequest ( account connector=account connector, ) Make the request operation = client. update account connector (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.developerconnect v1.types.UpdateAccountConnectorRequest , dict]] The request object.

### "Connect to GitHub Enterprise \_|\_ Developer Connect \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/developer-connect/docs/connect-github-enterprise](https://docs.cloud.google.com/developer-connect/docs/connect-github-enterprise)
- Source ID: `site-iam-reference`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you plan to use the gcloud CLI to complete the steps in this guide: Secret Manager Admin role ( roles/secretmanager.admin ) on the Developer Connect Service Account.
- Initiate a connection by completing the following steps: Run the gcloud developer-connect connections create command to create a connection to GitHub Enterprise: gcloud developer-connect connections create CONNECTION NAME \ --location = REGION \ --github-enterprise-config-host-uri = HOST URI --git-proxy-config-enabled Replace the following: CONNECTION NAME : the name for your connection.
- If your administrator won't allow you to have the Project IAM Admin role, then ask your administrator to grant Secret Manager Admin ( roles/secretmanager.admin ) on the Developer Connect Service Account ( service-{projectNumber}@gcp-sa-devconnect.iam.gserviceaccount.com ).
- If you plan to use a CMEK to encrypt the secrets that Developer Connect creates: Cloud KMS CryptoKey Encrypter/Decrypter ( roles/cloudkms.cryptoKeyEncrypterDecrypter ) on the Secret Manager Service Account.

### "Connect to Secure Source Manager \_|\_ Developer Connect \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/developer-connect/docs/connect-secure-source-manager](https://docs.cloud.google.com/developer-connect/docs/connect-secure-source-manager)
- Source ID: `site-iam-reference`
- Final score: 271
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This integration lets you use Developer Connect features such as dashboard views of your Secure Source Manager repositories, and use of the Developer Connect proxy to perform git operations, such as secure read operations.
- INSTANCE ID is the ID of your Secure Source Manager instance. curl To create a Developer Connect connection with curl , make the following API call: curl -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ https://developerconnect.googleapis.com/v1/projects/ CONNECTION PROJECT ID /locations/ REGION /connections?connection id = CONNECTION ID \ -X POST -H "Content-Type: application/json" \ -d '{"secure source manager instance config":{"instance":"projects/ INSTANCE PROJECT ID /locations/ REGION /instances/ INSTANCE ID "}}' Where: CONNECTION ID is the ID of the Developer Connect connection you want to create.
- For example: triggers : - name : test-trigger project : my-project configFilePath : cloudbuild.yaml eventType : push serviceAccount : projects/my-project/serviceAccounts/my-sa@my-project. iam.gserviceaccount.com devConnectGitRepositoryLink : projects/my-project/locations/us-central1/connections/my-ssm-connection/gitRepositoryLinks/my-repo-link Operational scope and limitations After you configure the connection, you can perform secure git read operations, such as a clone , on Secure Source Manager instances by using the Developer Connect proxy URI.
- Developer Connect creates the repository links and displays them in the Google Cloud console. gcloud To create a Developer Connect connection with Google Cloud CLI, run the following command: gcloud developer-connect connections create CONNECTION ID \ --location = REGION \ --project = CONNECTION PROJECT ID \ --secure-source-manager-instance-config = projects/ INSTANCE PROJECT ID /locations/ REGION /instances/ INSTANCE ID Where: CONNECTION ID is the ID of the Developer Connect connection you want to create.

