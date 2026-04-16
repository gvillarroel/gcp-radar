---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:05.560Z"
product_name: "Developer Connect"
product_slug: "developer-connect"
feature_name: "Bitbucket Data Center connectivity"
feature_slug: "bitbucket-data-center-connectivity"
latest_feature_date: "2025-02-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/developer-connect/docs/connect-bitbucket-data-center-private"
  - "https://docs.cloud.google.com/developer-connect/docs/connect-bitbucket-dc"
  - "https://docs.cloud.google.com/developer-connect/docs/connect-bitbucket-cloud"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-developerconnect/latest/com.google.cloud.developerconnect.v1"
keywords:
  - "bitbucket"
  - "center"
  - "connectivity"
  - "developer"
  - "connect"
  - "supports"
  - "with"
---

# Bitbucket Data Center connectivity

Product: Developer Connect
Coverage: MEDIUM

## Step 02 Summary

Developer Connect supports connectivity with Bitbucket Data Center.

## Extended Definition

Developer Connect supports connectivity with Bitbucket Data Center.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/developer-connect/docs/connect-bitbucket-data-center-private](https://docs.cloud.google.com/developer-connect/docs/connect-bitbucket-data-center-private)
- [https://docs.cloud.google.com/developer-connect/docs/connect-bitbucket-dc](https://docs.cloud.google.com/developer-connect/docs/connect-bitbucket-dc)
- [https://docs.cloud.google.com/developer-connect/docs/connect-bitbucket-cloud](https://docs.cloud.google.com/developer-connect/docs/connect-bitbucket-cloud)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-developerconnect/latest/com.google.cloud.developerconnect.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-developerconnect/latest/com.google.cloud.developerconnect.v1)

## Supporting Pages

### "Connect to Bitbucket Data Center repositories hosted in a private network\

- URL: [https://docs.cloud.google.com/developer-connect/docs/connect-bitbucket-data-center-private](https://docs.cloud.google.com/developer-connect/docs/connect-bitbucket-data-center-private)
- Source ID: `site-iam-reference`
- Final score: 274
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application development Developer Connect Guides Send feedback Connect to Bitbucket Data Center repositories hosted in a private network Stay organized with collections Save and categorize content based on your preferences.
- Run the gcloud developer-connect connections create command to create a connection to Bitbucket Data Center: gcloud developer-connect connections create CONNECTION NAME \ --location = REGION \ --bitbucket-data-center-config-host-uri = HOST URI \ --bitbucket-data-center-config-authorizer-credential-user-token-secret-version = projects/ PROJECT ID /secrets/ ADMIN SECRET NAME /versions/ VERSION \ --bitbucket-data-center-config-read-authorizer-credential-user-token-secret-version = projects/ PROJECT ID /secrets/ READ SECRET NAME /versions/ VERSION \ --bitbucket-data-center-config-webhook-secret-version = projects/ PROJECT ID /secrets/ WEBHOOK SECRET NAME /versions/ VERSION --git-proxy-config-enabled Replace the following: CONNECTION NAME : a name for your connection.
- Developer Connect creates the repository links and displays them in the Google Cloud console. gcloud Create a link to your Bitbucket Data Center repository by running the following command: gcloud developer-connect connections git-repository-links create REPO NAME \ --clone-uri = REPO URI \ --connection = CONNECTION NAME \ --location = REGION Replace the following: REPO NAME : a name for the new link between Developer Connect and your Bitbucket Data Center repository.
- To create a new Bitbucket Data Center connection, select one of the following options: Console Initiate a connection by completing the following steps: In the Google Cloud console, open Developer Connect .

### "Connect to Bitbucket Data Center \_|\_ Developer Connect \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/developer-connect/docs/connect-bitbucket-dc](https://docs.cloud.google.com/developer-connect/docs/connect-bitbucket-dc)
- Source ID: `site-iam-reference`
- Final score: 271
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application development Developer Connect Guides Send feedback Connect to Bitbucket Data Center Stay organized with collections Save and categorize content based on your preferences.
- Run the gcloud developer-connect connections create command to create a connection to Bitbucket Data Center: gcloud developer-connect connections create CONNECTION NAME \ --location = REGION \ --bitbucket-data-center-config-host-uri = HOST URI \ --bitbucket-data-center-config-authorizer-credential-user-token-secret-version = projects/ PROJECT ID /secrets/ ADMIN SECRET NAME /versions/ VERSION \ --bitbucket-data-center-config-read-authorizer-credential-user-token-secret-version = projects/ PROJECT ID /secrets/ READ SECRET NAME /versions/ VERSION \ --bitbucket-data-center-config-webhook-secret-version = projects/ PROJECT ID /secrets/ WEBHOOK SECRET NAME /versions/ VERSION --git-proxy-config-enabled Replace the following: CONNECTION NAME : a name for your connection.
- Developer Connect creates the repository links and displays them in the Google Cloud console. gcloud Create a link to your Bitbucket Data Center repository by running the following command: gcloud developer-connect connections git-repository-links create REPO NAME \ --clone-uri = REPO URI \ --connection = CONNECTION NAME \ --location = REGION Replace the following: REPO NAME : a name for the new link between Developer Connect and your Bitbucket Data Center repository.
- To create a new Bitbucket Data Center connection, select one of the following options: Console Initiate a connection by completing the following steps: In the Google Cloud console, open Developer Connect .

### Connect to Bitbucket Cloud \_|\_ Developer Connect \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/developer-connect/docs/connect-bitbucket-cloud](https://docs.cloud.google.com/developer-connect/docs/connect-bitbucket-cloud)
- Source ID: `site-iam-reference`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application development Developer Connect Guides Send feedback Connect to Bitbucket Cloud Stay organized with collections Save and categorize content based on your preferences.
- Run the gcloud developer-connect connections create command to create a connection to Bitbucket Cloud: gcloud developer-connect connections create CONNECTION NAME \ --location = REGION \ --bitbucket-cloud-config-authorizer-credential-user-token-secret-version = projects/ PROJECT ID /secrets/ AUTHORIZER SECRET NAME /versions/ VERSION \ --bitbucket-cloud-config-read-authorizer-credential-user-token-secret-version = projects/ PROJECT ID /secrets/ READ SECRET NAME /versions/ VERSION \ --bitbucket-cloud-config-webhook-secret-version = projects/ PROJECT ID /secrets/ WEBHOOK SECRET NAME /versions/ VERSION --git-proxy-config-enabled Replace the following: CONNECTION NAME : a name for your connection.
- Developer Connect creates the repository links and displays them in the Google Cloud console. gcloud Create a link to your Bitbucket Cloud repository by running the following command: gcloud developer-connect connections git-repository-links create REPO NAME \ --clone-uri = REPO URI \ --connection = CONNECTION NAME \ --location = REGION Replace the following: REPO NAME : a name for the new link between Developer Connect and your Bitbucket Cloud repository.
- To create a new Bitbucket Cloud connection, select one of the following options: Console Initiate a connection by completing the following steps: In the Google Cloud console, open Developer Connect .

### "Package com.google.cloud.developerconnect.v1 (0.45.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-developerconnect/latest/com.google.cloud.developerconnect.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-developerconnect/latest/com.google.cloud.developerconnect.v1)
- Source ID: `site-java-reference`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Bitbucket Data Center Config Configuration for connections to an instance of Bitbucket Data Center. com. google. cloud. developerconnect. v1.
- Builder Configuration for connections to an instance of Bitbucket Data Center. com. google. cloud. developerconnect. v1.
- Bitbucket Data Center Config Or Builder com. google. cloud. developerconnect. v1.
- Home Documentation Developer tools Java Client libraries Send feedback Package com.google.cloud.developerconnect.v1 (0.45.0) Stay organized with collections Save and categorize content based on your preferences.

