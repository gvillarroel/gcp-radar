---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.851Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "and webhook"
feature_slug: "and-webhook"
latest_feature_date: "2022-12-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center"
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-server"
  - "https://docs.cloud.google.com/build/docs/automate-builds-webhook-events"
keywords:
  - "webhooks"
  - "notifications"
  - "email"
  - "webhook"
---

# and webhook

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build notifications for email, BigQuery, and webhooks can now be customized using notifier templates.

## Extended Definition

Cloud Build notifications for email, BigQuery, and webhooks can now be customized using notifier templates.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-server](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-server)
- [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events)

## Supporting Pages

### "Connect to a Bitbucket Data Center host \_|\_ Cloud Build \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center)
- Source ID: `site-docs-root-2`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Unlike connecting your host using the Google Cloud console, you need to manually store your personal access tokens and webhook secret in Secret Manager before calling the API: { "hostUri" : " HOST URI " , "username" : " USERNAME " , "apiKey" : " API KEY " , "secrets" : { "adminAccessTokenVersionName" : " ADMIN ACCESS TOKEN SECRET VERSION " , "readAccessTokenVersionName" : " READ ACCESS TOKEN SECRET VERSION " , "webhookSecretVersionName" : " WEBHOOK SECRET SECRET VERSION " , }, "peeredNetwork" : " PEERED NETWORK " , "peeredNetworkIpRange" : " PEERED NETWORK IP RANGE " , "sslCa" : " SSL CERTIFICATE " } Where: HOST URI is the host URI of your Bitbucket Data Center instance.
- Unlike connecting your host using the Google Cloud console, you'll need to manually store your personal access tokens and webhook secret in Secret Manager before running the following command: gcloud alpha builds enterprise-config bitbucket-data-center create --name = CONFIG NAME \ --user-name = USERNAME \ --host-uri = HOST URI \ --admin-access-token-secret-version = ADMIN ACCESS TOKEN SECRET VERSION \ --read-access-token-secret-version = READ ACCESS TOKEN SECRET VERSION \ --webhook-secret-secret-version = WEBHOOK SECRET SECRET VERSION \ --api-key = API KEY \ --peered-network = PEERED NETWORK \ --peered-network-ip-range = PEERED NETWORK IP RANGE \ --ssl-ca-file = SSL CA FILE Where: CONFIG NAME is the name of your Bitbucket Data Center configuration.
- After creating a host connection, your personal access tokens and webhook secret will be securely stored in Secret Manager.
- WEBHOOK SECRET SECRET VERSION is the resource name of your of your webhook secret stored in Secret Manager.

### "Connect to a Bitbucket Server host \_|\_ Cloud Build \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-server](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-server)
- Source ID: `site-docs-root-2`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Unlike connecting your host using the Google Cloud console, you need to manually store your personal access tokens and webhook secret in Secret Manager before calling the API: { "hostUri" : " HOST URI " , "username" : " USERNAME " , "apiKey" : " API KEY " , "secrets" : { "adminAccessTokenVersionName" : " ADMIN ACCESS TOKEN SECRET VERSION " , "readAccessTokenVersionName" : " READ ACCESS TOKEN SECRET VERSION " , "webhookSecretVersionName" : " WEBHOOK SECRET SECRET VERSION " , }, "peeredNetwork" : " PEERED NETWORK " , "peeredNetworkIpRange" : " PEERED NETWORK IP RANGE " , "sslCa" : " SSL CERTIFICATE " } Where: HOST URI is the host URI of your Bitbucket Server instance.
- Unlike connecting your host using the Google Cloud console, you'll need to manually store your personal access tokens and webhook secret in Secret Manager before running the following command: gcloud alpha builds enterprise-config bitbucketserver create --name = CONFIG NAME \ --user-name = USERNAME \ --host-uri = HOST URI \ --admin-access-token-secret-version = ADMIN ACCESS TOKEN SECRET VERSION \ --read-access-token-secret-version = READ ACCESS TOKEN SECRET VERSION \ --webhook-secret-secret-version = WEBHOOK SECRET SECRET VERSION \ --api-key = API KEY \ --peered-network = PEERED NETWORK \ --peered-network-ip-range = PEERED NETWORK IP RANGE \ --ssl-ca-file = SSL CA FILE Where: CONFIG NAME is the name of your Bitbucket Server configuration.
- After creating a host connection, your personal access tokens and webhook secret will be securely stored in Secret Manager.
- WEBHOOK SECRET SECRET VERSION is the resource name of your of your webhook secret stored in Secret Manager.

### "Automate builds in response to webhook events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events)
- Source ID: `site-docs-root-2`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Click Create to create your build trigger. gcloud To create a webhook trigger: gcloud builds triggers create webhook \ -- name = TRIGGER NAME \ -- repo = PATH TO REPO \ -- repo - type = REPO TYPE \ -- secret = PATH TO SECRET \ -- substitutions = SUB ONE = '$ ( body . message . test ) ' , SUB TWO = '$ ( body . message . output ) ' \ -- subscription - filter = ' SUB ONE == "prod" ' \ -- inline - config = PATH TO INLINE BUILD CONFIG \ -- tag = TAG NAME -- build - config = PATH TO BUILD CONFIG \ -- branch = BRANCH NAME Where: + TRIGGER NAME is the name of your trigger. + PATH TO REPO is the path to the repository to invoke a build on.
- Use the following command to invoke a webhook event: curl -X POST -H "Content-type: application/json" "https://cloudbuild.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ REGION } /triggers/ ${ TRIGGER NAME } :webhook?key= ${ API KEY } & secret= ${ SECRET VALUE } & trigger= ${ TRIGGER NAME } & projectId= ${ PROJECT ID } " -d "{}" After completing these steps, the Secret Manager Secret Accessor role will automatically be granted to your Cloud Build service agent, service-${PROJECT NUMBER}@gcp-sa-cloudbuild.iam.gserviceaccount.com .
- These events, sent to a custom URL, allow you to directly connect external systems and external source code management systems such as Bitbucket.com, Bitbucket Server, or GitLab, to Cloud Build through webhook events.
- Home Documentation Application development Cloud Build Guides Send feedback Automate builds in response to webhook events Stay organized with collections Save and categorize content based on your preferences.

