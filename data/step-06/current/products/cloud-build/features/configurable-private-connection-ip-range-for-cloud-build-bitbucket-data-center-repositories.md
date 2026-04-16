---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.824Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Configurable private connection IP range for Cloud Build Bitbucket Data Center repositories"
feature_slug: "configurable-private-connection-ip-range-for-cloud-build-bitbucket-data-center-repositories"
latest_feature_date: "2023-10-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network"
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center"
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center"
keywords:
  - "configurable"
  - "range"
  - "connection"
  - "bitbucket"
  - "center"
  - "private"
---

# Configurable private connection IP range for Cloud Build Bitbucket Data Center repositories

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build now supports configuring private-connection IP range size and starting address for Bitbucket Data Center using peeredNetworkIpRange.

## Extended Definition

Cloud Build now supports configuring private-connection IP range size and starting address for Bitbucket Data Center using peeredNetworkIpRange.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center)

## Supporting Pages

### "Build repositories from Bitbucket Data Center in a private network \_|\_\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network)
- Source ID: `site-docs-root-2`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Build repositories from Bitbucket Data Center in a private network If your Bitbucket Data Center instance is hosted in a private network and not reachable over a public internet connection, you must create a private connection between your VPC network and the service producer network .
- To create a Bitbucket Data Center trigger to build in a private network: Create a private connection between the VPC network and your service producer network by completing the following steps: Create a new VPC network or select an existing VPC network .
- Home Documentation Application development Cloud Build Guides Send feedback Build repositories from Bitbucket Data Center in a private network Stay organized with collections Save and categorize content based on your preferences.
- Allocate an internal IP range in the VPC that the Cloud Build producer network can use to allocate to VMs maintaining a connection with private repositories.

### "Connect to a Bitbucket Data Center host \_|\_ Cloud Build \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center)
- Source ID: `site-docs-root-2`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If your Bitbucket Data Center instance is hosted in a private network, see Build repositories from Bitbucket Data Center in a private network to learn about additional IAM roles required to configure a host connection.
- Unlike connecting your host using the Google Cloud console, you'll need to manually store your personal access tokens and webhook secret in Secret Manager before running the following command: gcloud alpha builds enterprise-config bitbucket-data-center create --name = CONFIG NAME \ --user-name = USERNAME \ --host-uri = HOST URI \ --admin-access-token-secret-version = ADMIN ACCESS TOKEN SECRET VERSION \ --read-access-token-secret-version = READ ACCESS TOKEN SECRET VERSION \ --webhook-secret-secret-version = WEBHOOK SECRET SECRET VERSION \ --api-key = API KEY \ --peered-network = PEERED NETWORK \ --peered-network-ip-range = PEERED NETWORK IP RANGE \ --ssl-ca-file = SSL CA FILE Where: CONFIG NAME is the name of your Bitbucket Data Center configuration.
- Unlike connecting your host using the Google Cloud console, you need to manually store your personal access tokens and webhook secret in Secret Manager before calling the API: { "hostUri" : " HOST URI " , "username" : " USERNAME " , "apiKey" : " API KEY " , "secrets" : { "adminAccessTokenVersionName" : " ADMIN ACCESS TOKEN SECRET VERSION " , "readAccessTokenVersionName" : " READ ACCESS TOKEN SECRET VERSION " , "webhookSecretVersionName" : " WEBHOOK SECRET SECRET VERSION " , }, "peeredNetwork" : " PEERED NETWORK " , "peeredNetworkIpRange" : " PEERED NETWORK IP RANGE " , "sslCa" : " SSL CERTIFICATE " } Where: HOST URI is the host URI of your Bitbucket Data Center instance.
- To rotate an old or expired token for your connection, do the following: Find the secrets associated with your host connection: Run the following command: gcloud builds connections describe CONNECTION PATH --region = REGION Where: CONNECTION PATH is the path of your Bitbucket Data Center host connection in Cloud Build, in the format projects/ PROJECT ID /locations/ REGION /connections/ CONNECTION NAME .

### Build repositories from Bitbucket Data Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center)
- Source ID: `site-docs-root-2`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Create to create your Bitbucket Cloud trigger. gcloud CLI To create Bitbucket Data Center triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.
- If you want to use Bitbucket Data Center triggers in a private network, see Building repositories from Bitbucket Data Center in a private network for further instructions.
- Enable the APIs To create a trigger for a Bitbucket Data Center repository, you must have a connection between Google Cloud and your repository.
- To create a connection through the Bitbucket Data Center app in Google Cloud, see Connect to a Bitbucket Data Center repository .

