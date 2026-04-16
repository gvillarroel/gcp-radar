---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:05.561Z"
product_name: "Developer Connect"
product_slug: "developer-connect"
feature_name: "VPC Service Controls support"
feature_slug: "vpc-service-controls-support"
latest_feature_date: "2024-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectClient"
  - "https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise-private"
  - "https://docs.cloud.google.com/developer-connect/docs/connect-repo"
keywords:
  - "vpc"
  - "controls"
  - "developer"
  - "connect"
  - "supports"
---

# VPC Service Controls support

Product: Developer Connect
Coverage: MEDIUM

## Step 02 Summary

Developer Connect supports VPC Service Controls.

## Extended Definition

Developer Connect supports VPC Service Controls.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectClient)
- [https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise-private](https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise-private)
- [https://docs.cloud.google.com/developer-connect/docs/connect-repo](https://docs.cloud.google.com/developer-connect/docs/connect-repo)

## Supporting Pages

### "Class DeveloperConnectAsyncClient (0.5.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectAsyncClient)
- Source ID: `site-python-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- CreateAccountConnectorRequest ( parent="parent value", account connector id="account connector id value", account connector=account connector, ) Make the request operation = client. create account connector (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.developerconnect v1.types.CreateAccountConnectorRequest , dict]] The request object. parent str Required.
- CreateGitRepositoryLinkRequest ( parent="parent value", git repository link=git repository link, git repository link id="git repository link id value", ) Make the request operation = client. create git repository link (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.developerconnect v1.types.CreateGitRepositoryLinkRequest , dict]] The request object.
- CreateConnectionRequest ( parent="parent value", connection id="connection id value", connection=connection, ) Make the request operation = client. create connection (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.developerconnect v1.types.CreateConnectionRequest , dict]] The request object.
- UpdateAccountConnectorRequest ( account connector=account connector, ) Make the request operation = client. update account connector (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.developerconnect v1.types.UpdateAccountConnectorRequest , dict]] The request object.

### "Class DeveloperConnectClient (0.5.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectClient)
- Source ID: `site-python-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- CreateAccountConnectorRequest ( parent="parent value", account connector id="account connector id value", account connector=account connector, ) Make the request operation = client. create account connector (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.developerconnect v1.types.CreateAccountConnectorRequest , dict] The request object. parent str Required.
- CreateGitRepositoryLinkRequest ( parent="parent value", git repository link=git repository link, git repository link id="git repository link id value", ) Make the request operation = client. create git repository link (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.developerconnect v1.types.CreateGitRepositoryLinkRequest , dict] The request object.
- CreateConnectionRequest ( parent="parent value", connection id="connection id value", connection=connection, ) Make the request operation = client. create connection (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.developerconnect v1.types.CreateConnectionRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import developerconnect v1 def sample fetch linkable git repositories(): Create a client client = developerconnect v1 .

### "Connect to GitLab Enterprise repositories in a private network \_|\_ Developer\

- URL: [https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise-private](https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise-private)
- Source ID: `site-iam-reference`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Grant permissions to use Service Directory Complete the following steps to let Developer Connect use Service Directory, and to let Service Directory access your VPC network resource.
- Note: Developer Connect also supports GitLab Community Edition.
- Run the gcloud developer-connect connections create command to create a connection to GitLab Enterprise: gcloud beta developer-connect connections create CONNECTION NAME \ --location = REGION \ --gitlab-config-read-authorizer-credential-user-token-secret-version = projects/ PROJECT ID /secrets/ READ SECRET NAME /versions/ VERSION \ --gitlab-config-authorizer-credential-user-token-secret-version = projects/ PROJECT ID /secrets/ API SECRET NAME /versions/ VERSION \ --gitlab-enterprise-config-host-uri = HOST URI --gitlab-enterprise-config-webhook-secret-version = projects/ PROJECT ID /secrets/ WEBHOOK SECRET NAME /versions/ VERSION --git-proxy-config-enabled Replace the following: CONNECTION NAME : the name of your connection.
- Grant permissions for the Developer Connect service account to use Service Directory by running the following commands: PROJECT NUMBER = $( gcloud projects describe PROJECT ID --format = "value(projectNumber)" ) SERVICE ACCOUNT = "service- ${ PROJECT NUMBER } @gcp-sa-devconnect.iam.gserviceaccount.com" gcloud projects add-iam-policy-binding SERVICE DIRECTORY RESOURCE PROJECT ID \ --member = "serviceAccount: ${ SERVICE ACCOUNT } " \ --role = "roles/servicedirectory.viewer" Replace the following: PROJECT ID : your Google Cloud project ID.

### "Quickstart: Connect a source code repository \_|\_ Developer Connect \_\

- URL: [https://docs.cloud.google.com/developer-connect/docs/connect-repo](https://docs.cloud.google.com/developer-connect/docs/connect-repo)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For a list of all the integrations that Developer Connect supports, see Developer Connect overview .
- Enable the APIs Make sure that you have the following role or roles on the project: Developer Connect Admin Check for the roles In the Google Cloud console, go to the IAM page.
- Enable the APIs Make sure that you have the following role or roles on the project: Developer Connect Admin Check for the roles In the Google Cloud console, go to the IAM page.
- Home Documentation Application development Developer Connect Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

