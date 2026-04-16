---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:05.558Z"
product_name: "Developer Connect"
product_slug: "developer-connect"
feature_name: "Secure Source Manager connectivity"
feature_slug: "secure-source-manager-connectivity"
latest_feature_date: "2026-02-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/developer-connect/docs/connect-secure-source-manager"
  - "https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise-private"
  - "https://docs.cloud.google.com/developer-connect/docs/connect-bitbucket-data-center-private"
  - "https://docs.cloud.google.com/developer-connect/docs/connect-github-enterprise-private"
keywords:
  - "secure"
  - "source"
  - "manager"
  - "connectivity"
  - "developer"
  - "connect"
  - "can"
  - "to"
---

# Secure Source Manager connectivity

Product: Developer Connect
Coverage: MEDIUM

## Step 02 Summary

Developer Connect can connect to Secure Source Manager.

## Extended Definition

Developer Connect can connect to Secure Source Manager.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/developer-connect/docs/connect-secure-source-manager](https://docs.cloud.google.com/developer-connect/docs/connect-secure-source-manager)
- [https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise-private](https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise-private)
- [https://docs.cloud.google.com/developer-connect/docs/connect-bitbucket-data-center-private](https://docs.cloud.google.com/developer-connect/docs/connect-bitbucket-data-center-private)
- [https://docs.cloud.google.com/developer-connect/docs/connect-github-enterprise-private](https://docs.cloud.google.com/developer-connect/docs/connect-github-enterprise-private)

## Supporting Pages

### "Connect to Secure Source Manager \_|\_ Developer Connect \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/developer-connect/docs/connect-secure-source-manager](https://docs.cloud.google.com/developer-connect/docs/connect-secure-source-manager)
- Source ID: `site-iam-reference`
- Final score: 359
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: triggers : - name : test-trigger project : my-project configFilePath : cloudbuild.yaml eventType : push serviceAccount : projects/my-project/serviceAccounts/my-sa@my-project. iam.gserviceaccount.com devConnectGitRepositoryLink : projects/my-project/locations/us-central1/connections/my-ssm-connection/gitRepositoryLinks/my-repo-link Operational scope and limitations After you configure the connection, you can perform secure git read operations, such as a clone , on Secure Source Manager instances by using the Developer Connect proxy URI.
- You can update other configs of the connection, for example to enable or disable the Developer Connect proxy, but you cannot point the existing connection to a different Secure Source Manager instance.
- INSTANCE ID is the ID of your Secure Source Manager instance. curl To create a Developer Connect connection with curl , make the following API call: curl -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ https://developerconnect.googleapis.com/v1/projects/ CONNECTION PROJECT ID /locations/ REGION /connections?connection id = CONNECTION ID \ -X POST -H "Content-Type: application/json" \ -d '{"secure source manager instance config":{"instance":"projects/ INSTANCE PROJECT ID /locations/ REGION /instances/ INSTANCE ID "}}' Where: CONNECTION ID is the ID of the Developer Connect connection you want to create.
- Developer Connect creates the repository links and displays them in the Google Cloud console. gcloud To create a Developer Connect connection with Google Cloud CLI, run the following command: gcloud developer-connect connections create CONNECTION ID \ --location = REGION \ --project = CONNECTION PROJECT ID \ --secure-source-manager-instance-config = projects/ INSTANCE PROJECT ID /locations/ REGION /instances/ INSTANCE ID Where: CONNECTION ID is the ID of the Developer Connect connection you want to create.

### "Connect to GitLab Enterprise repositories in a private network \_|\_ Developer\

- URL: [https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise-private](https://docs.cloud.google.com/developer-connect/docs/connect-gitlab-enterprise-private)
- Source ID: `site-iam-reference`
- Final score: 286
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can create the Service Directory service resource in the same project that you're using with Developer Connect, or you can use a different project.
- Grant permissions for the Developer Connect service account to use Service Directory by running the following commands: PROJECT NUMBER = $( gcloud projects describe PROJECT ID --format = "value(projectNumber)" ) SERVICE ACCOUNT = "service- ${ PROJECT NUMBER } @gcp-sa-devconnect.iam.gserviceaccount.com" gcloud projects add-iam-policy-binding SERVICE DIRECTORY RESOURCE PROJECT ID \ --member = "serviceAccount: ${ SERVICE ACCOUNT } " \ --role = "roles/servicedirectory.viewer" Replace the following: PROJECT ID : your Google Cloud project ID.
- If your administrator won't allow you to have the Project IAM Admin role, then ask your administrator to grant Secret Manager Admin ( roles/secretmanager.admin ) on the Developer Connect Service Account ( service-{projectNumber}@gcp-sa-devconnect.iam.gserviceaccount.com ).
- WEBHOOK SECRET NAME : the name of the Secret Manager secret that contains your webhook secret. --git-proxy-config-enabled is an optional flag that allows Developer Connect to as a proxy for Git calls to GitLab Enterprise.

### "Connect to Bitbucket Data Center repositories hosted in a private network\

- URL: [https://docs.cloud.google.com/developer-connect/docs/connect-bitbucket-data-center-private](https://docs.cloud.google.com/developer-connect/docs/connect-bitbucket-data-center-private)
- Source ID: `site-iam-reference`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can create the Service Directory service resource in the same project that you're using with Developer Connect, or you can use a different project.
- Grant permissions for the Developer Connect service account to use Service Directory by running the following commands: PROJECT NUMBER = $( gcloud projects describe PROJECT ID --format = "value(projectNumber)" ) SERVICE ACCOUNT = "service- ${ PROJECT NUMBER } @gcp-sa-devconnect.iam.gserviceaccount.com" gcloud projects add-iam-policy-binding SERVICE DIRECTORY RESOURCE PROJECT ID \ --member = "serviceAccount: ${ SERVICE ACCOUNT } " \ --role = "roles/servicedirectory.viewer" Replace the following: PROJECT ID : your Google Cloud project ID.
- If your administrator won't allow you to have the Project IAM Admin role, then ask your administrator to grant Secret Manager Admin ( roles/secretmanager.admin ) on the Developer Connect Service Account ( service-{projectNumber}@gcp-sa-devconnect.iam.gserviceaccount.com ).
- If you plan to use a CMEK to encrypt the secrets that Developer Connect creates: Cloud KMS CryptoKey Encrypter/Decrypter ( roles/cloudkms.cryptoKeyEncrypterDecrypter ) on the Secret Manager Service Account.

### "Connect to GitHub Enterprise repositories hosted in a private network \_\

- URL: [https://docs.cloud.google.com/developer-connect/docs/connect-github-enterprise-private](https://docs.cloud.google.com/developer-connect/docs/connect-github-enterprise-private)
- Source ID: `site-iam-reference`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can create the Service Directory service resource in the same project that you're using with Developer Connect, or you can use a different project.
- Grant permissions for the Developer Connect service account to use Service Directory by running the following commands: PROJECT NUMBER = $( gcloud projects describe PROJECT ID --format = "value(projectNumber)" ) SERVICE ACCOUNT = "service- ${ PROJECT NUMBER } @gcp-sa-devconnect.iam.gserviceaccount.com" gcloud projects add-iam-policy-binding SERVICE DIRECTORY RESOURCE PROJECT ID \ --member = "serviceAccount: ${ SERVICE ACCOUNT } " \ --role = "roles/servicedirectory.viewer" Replace the following: PROJECT ID : your Google Cloud project ID.
- Run the gcloud developer-connect connections create command to create a connection to GitHub Enterprise: gcloud developer-connect connections create CONNECTION NAME \ --location = REGION \ --project = PROJECT ID \ --github-enterprise-config-host-uri = HOST URI --github-enterprise-config-service-directory = SERVICE DIRECTORY RESOURCE --git-proxy-config-enabled Replace the following: CONNECTION NAME : the name for your connection.
- SERVICE DIRECTORY RESOURCE : your Service Directory resource path, in the format projects/PROJECT ID/locations/REGION/namespaces/NAMESPACE/services/SERVICE . --git-proxy-config-enabled is an optional flag that allows Developer Connect to as a proxy for Git calls to GitHub Enterprise.

