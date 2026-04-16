---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:05.558Z"
product_name: "Developer Connect"
product_slug: "developer-connect"
feature_name: "HTTP connections"
feature_slug: "http-connections"
latest_feature_date: "2026-02-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/developer-connect/docs/configure-http-connections"
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectClient"
  - "https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise-private"
keywords:
  - "http"
  - "connections"
  - "developer"
  - "connect"
  - "supports"
  - "to"
  - "arbitrary"
  - "endpoints"
---

# HTTP connections

Product: Developer Connect
Coverage: MEDIUM

## Step 02 Summary

Developer Connect supports HTTP connections to arbitrary HTTP endpoints.

## Extended Definition

Developer Connect supports HTTP connections to arbitrary HTTP endpoints.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/developer-connect/docs/configure-http-connections](https://docs.cloud.google.com/developer-connect/docs/configure-http-connections)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectClient)
- [https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise-private](https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise-private)

## Supporting Pages

### "Configure and use generic HTTP connections \_|\_ Developer Connect \_|\_\

- URL: [https://docs.cloud.google.com/developer-connect/docs/configure-http-connections](https://docs.cloud.google.com/developer-connect/docs/configure-http-connections)
- Source ID: `site-iam-reference`
- Final score: 316
- Re-rank relevance: N/A

Evidence snippets:
- This lets you establish and manage connections to many third-party developer tools, services, and APIs, as long as those tools are accessible using HTTP endpoints.
- To create the connection using basic authentication, run the following command: gcloud developer-connect connections create CONNECTION ID \ --location = REGION \ --project = PROJECT ID \ --http-config-host-uri = HOST URI \ --http-config-basic-authentication-username = USERNAME \ --http-config-basic-authentication-password-secret-version = PASSWORD SECRET VERSION \ --http-config-service-directory = SERVICE DIRECTORY SERVICE \ --http-config-ssl-ca-certificate = SSL CERTIFICATE FILE PATH \ --git-proxy-config-enabled \ Replace the following: CONNECTION ID with a unique ID for this new connection.
- To create the connection using bearer token authentication, run the following command: gcloud developer-connect connections create CONNECTION ID \ --location = REGION \ --project = PROJECT ID \ --http-config-host-uri = HOST URI \ --http-config-bearer-token-authentication-secret-version = TOKEN SECRET VERSION \ --http-config-service-directory = SERVICE DIRECTORY SERVICE \ --http-config-ssl-ca-certificate = SSL CERTIFICATE FILE PATH \ --git-proxy-config-enabled Replace the following: CONNECTION ID with a unique ID for this new connection.
- In addition to the Git repository connections and account connectors , you can also set up a Developer Connect connection to a generic HTTP endpoint.

### "Class DeveloperConnectAsyncClient (0.5.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectAsyncClient)
- Source ID: `site-python-reference`
- Final score: 280
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import developerconnect v1 async def sample list connections(): Create a client client = developerconnect v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import developerconnect v1 async def sample fetch linkable git repositories(): Create a client client = developerconnect v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import developerconnect v1 async def sample fetch git hub installations(): Create a client client = developerconnect v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import developerconnect v1 async def sample create git repository link(): Create a client client = developerconnect v1 .

### "Class DeveloperConnectClient (0.5.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.DeveloperConnectClient)
- Source ID: `site-python-reference`
- Final score: 280
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import developerconnect v1 def sample list connections(): Create a client client = developerconnect v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import developerconnect v1 def sample fetch linkable git repositories(): Create a client client = developerconnect v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import developerconnect v1 def sample fetch git hub installations(): Create a client client = developerconnect v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import developerconnect v1 def sample create git repository link(): Create a client client = developerconnect v1 .

### "Connect to GitLab Enterprise repositories in a private network \_|\_ Developer\

- URL: [https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise-private](https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise-private)
- Source ID: `site-iam-reference`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the gcloud developer-connect connections create command to create a connection to GitLab Enterprise: gcloud beta developer-connect connections create CONNECTION NAME \ --location = REGION \ --gitlab-config-read-authorizer-credential-user-token-secret-version = projects/ PROJECT ID /secrets/ READ SECRET NAME /versions/ VERSION \ --gitlab-config-authorizer-credential-user-token-secret-version = projects/ PROJECT ID /secrets/ API SECRET NAME /versions/ VERSION \ --gitlab-enterprise-config-host-uri = HOST URI --gitlab-enterprise-config-webhook-secret-version = projects/ PROJECT ID /secrets/ WEBHOOK SECRET NAME /versions/ VERSION --git-proxy-config-enabled Replace the following: CONNECTION NAME : the name of your connection.
- Developer Connect creates the repository links and displays them in the Google Cloud console. gcloud Link to a GitLab repository by running the following command: gcloud beta developer-connect connections git-repository-links create REPO NAME \ --clone-uri = REPO URI \ --connection = CONNECTION NAME \ --location = REGION Replace the following: REPO NAME : the name for your repository link.
- Required roles To get the permissions that you need to create connections and links, ask your administrator to grant you the following IAM roles: If you aren't the project owner: Developer Connect Admin ( roles/developerconnect.admin ) on your user account.
- To list linked repositories, run the developer-connect connections git-repository-links list command.

