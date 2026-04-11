---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.693Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Configurable private connection IP range for Cloud Build Bitbucket Data Center repositories"
feature_slug: "configurable-private-connection-ip-range-for-cloud-build-bitbucket-data-center-repositories"
latest_feature_date: "2023-10-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network"
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server-private-network"
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center"
keywords:
  - "configurable"
  - "private"
  - "connection"
  - "ip"
  - "range"
  - "for"
  - "build"
  - "bitbucket"
---

# Configurable private connection IP range for Cloud Build Bitbucket Data Center repositories

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build now supports configuring private-connection IP range size and starting address for Bitbucket Data Center using peeredNetworkIpRange.

## Extended Definition

Cloud Build now supports configuring private-connection IP range size and starting address for Bitbucket Data Center using peeredNetworkIpRange.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server-private-network](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server-private-network)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center)

## Supporting Pages

### "Build repositories from Bitbucket Data Center in a private network \_|\_\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network)
- Source ID: `site-docs-root-2`
- Final score: 248
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Allocate an internal IP range in the VPC that the Cloud Build producer network can use to allocate to VMs maintaining a connection with private repositories.
- Build repositories from Bitbucket Data Center in a private network If your Bitbucket Data Center instance is hosted in a private network and not reachable over a public internet connection, you must create a private connection between your VPC network and the service producer network .
- To create a Bitbucket Data Center trigger to build in a private network: Create a private connection between the VPC network and your service producer network by completing the following steps: Create a new VPC network or select an existing VPC network .
- Home Documentation Application development Cloud Build Guides Send feedback Build repositories from Bitbucket Data Center in a private network Stay organized with collections Save and categorize content based on your preferences.

### "Build repositories from Bitbucket Server in a private network \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server-private-network](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server-private-network)
- Source ID: `site-docs-root-2`
- Final score: 248
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Allocate an internal IP range in the VPC that the Cloud Build producer network can use to allocate to VMs maintaining a connection with private repositories.
- Building repositories from Bitbucket Server in a private network If your Bitbucket Server instance is hosted in a private network and not reachable over a public internet connection, you must create a private connection between your VPC network and the service producer network .
- To create a Bitbucket Server trigger to build in a private network: Create a private connection between the VPC network and your service producer network by completing the following steps: Create a new VPC network or select an existing VPC network .
- Home Documentation Application development Cloud Build Guides Send feedback Build repositories from Bitbucket Server in a private network Stay organized with collections Save and categorize content based on your preferences.

### "Connect to a Bitbucket Data Center host \_|\_ Cloud Build \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center)
- Source ID: `site-docs-root-2`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Unlike connecting your host using the Google Cloud console, you'll need to manually store your personal access tokens and webhook secret in Secret Manager before running the following command: gcloud alpha builds enterprise-config bitbucket-data-center create --name = CONFIG NAME \ --user-name = USERNAME \ --host-uri = HOST URI \ --admin-access-token-secret-version = ADMIN ACCESS TOKEN SECRET VERSION \ --read-access-token-secret-version = READ ACCESS TOKEN SECRET VERSION \ --webhook-secret-secret-version = WEBHOOK SECRET SECRET VERSION \ --api-key = API KEY \ --peered-network = PEERED NETWORK \ --peered-network-ip-range = PEERED NETWORK IP RANGE \ --ssl-ca-file = SSL CA FILE Where: CONFIG NAME is the name of your Bitbucket Data Center configuration.
- Unlike connecting your host using the Google Cloud console, you need to manually store your personal access tokens and webhook secret in Secret Manager before calling the API: { "hostUri" : " HOST URI " , "username" : " USERNAME " , "apiKey" : " API KEY " , "secrets" : { "adminAccessTokenVersionName" : " ADMIN ACCESS TOKEN SECRET VERSION " , "readAccessTokenVersionName" : " READ ACCESS TOKEN SECRET VERSION " , "webhookSecretVersionName" : " WEBHOOK SECRET SECRET VERSION " , }, "peeredNetwork" : " PEERED NETWORK " , "peeredNetworkIpRange" : " PEERED NETWORK IP RANGE " , "sslCa" : " SSL CERTIFICATE " } Where: HOST URI is the host URI of your Bitbucket Data Center instance.
- To rotate an old or expired token for your connection, do the following: Find the secrets associated with your host connection: Run the following command: gcloud builds connections describe CONNECTION PATH --region = REGION Where: CONNECTION PATH is the path of your Bitbucket Data Center host connection in Cloud Build, in the format projects/ PROJECT ID /locations/ REGION /connections/ CONNECTION NAME .
- If your Bitbucket Data Center instance is hosted in a private network, see Build repositories from Bitbucket Data Center in a private network to learn about additional IAM roles required to configure a host connection.

