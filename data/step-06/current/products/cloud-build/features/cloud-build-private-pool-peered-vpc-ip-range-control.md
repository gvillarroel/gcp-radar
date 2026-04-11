---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.721Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build private pool peered VPC IP range control"
feature_slug: "cloud-build-private-pool-peered-vpc-ip-range-control"
latest_feature_date: "2023-01-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network"
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server-private-network"
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise-private-network"
keywords:
  - "build"
  - "private"
  - "pool"
  - "peered"
  - "vpc"
  - "ip"
  - "range"
  - "control"
---

# Cloud Build private pool peered VPC IP range control

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build private pools can now set peeredNetworkIpRange to consume fewer IP addresses in peered VPCs.

## Extended Definition

Cloud Build private pools can now set peeredNetworkIpRange to consume fewer IP addresses in peered VPCs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server-private-network](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server-private-network)
- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise-private-network](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise-private-network)

## Supporting Pages

### "Build repositories from Bitbucket Data Center in a private network \_|\_\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network)
- Source ID: `site-docs-root-2`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Allocate an internal IP range in the VPC that the Cloud Build producer network can use to allocate to VMs maintaining a connection with private repositories.
- Allocate a named IP range in the VPC network for your peered network.
- Build repositories from Bitbucket Data Center in a private network If your Bitbucket Data Center instance is hosted in a private network and not reachable over a public internet connection, you must create a private connection between your VPC network and the service producer network .
- To create a Bitbucket Data Center trigger to build in a private network: Create a private connection between the VPC network and your service producer network by completing the following steps: Create a new VPC network or select an existing VPC network .

### "Build repositories from Bitbucket Server in a private network \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server-private-network](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server-private-network)
- Source ID: `site-docs-root-2`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Allocate an internal IP range in the VPC that the Cloud Build producer network can use to allocate to VMs maintaining a connection with private repositories.
- Allocate a named IP range in the VPC network for your peered network.
- Building repositories from Bitbucket Server in a private network If your Bitbucket Server instance is hosted in a private network and not reachable over a public internet connection, you must create a private connection between your VPC network and the service producer network .
- To create a Bitbucket Server trigger to build in a private network: Create a private connection between the VPC network and your service producer network by completing the following steps: Create a new VPC network or select an existing VPC network .

### "Build repositories from GitHub Enterprise in a private network \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise-private-network](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise-private-network)
- Source ID: `site-docs-root-2`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You will need a private pool to build in a private network.
- Build repositories from GitHub Enterprise in a private network Complete the following steps to connect your GitHub Enterprise instance to Cloud Build from a private network: Grant Service Directory access to the Cloud Build service agent: export PROJECT NUMBER = $( gcloud projects describe PROJECT ID --format = "value(projectNumber)" ) export CLOUD BUILD SERVICE AGENT = "service- $PROJECT NUMBER @gcp-sa-cloudbuild.iam.gserviceaccount.com" gcloud projects add-iam-policy-binding PROJECT ID CONTAINING SERVICE DIRECTORY \ --member = "serviceAccount: $CLOUD BUILD SERVICE AGENT " \ --role = "roles/servicedirectory.viewer" Replace the following: PROJECT ID is your Cloud Build project ID.
- Grant VPC network resource access to the Cloud Build service agent: export PROJECT NUMBER = $( gcloud projects describe PROJECT ID --format = "value(projectNumber)" ) export CLOUD BUILD SERVICE AGENT = "service- $PROJECT NUMBER @gcp-sa-cloudbuild.iam.gserviceaccount.com" gcloud projects add-iam-policy-binding PROJECT ID CONTAINING NETWORK RESOURCE \ --member = "serviceAccount: $CLOUD BUILD SERVICE AGENT " \ --role = "roles/servicedirectory.pscAuthorizedService" Replace the following: PROJECT ID is your Cloud Build project ID.
- Use Cloud Load Balancing to reach hosts outside Google Cloud If your network configuration does not allow you to route the Service Directory IP address range 35.199.192.0/19 to the Cloud VPN or Cloud Interconnect, you can create a load balancer using Cloud Load Balancing that directs traffic to your host.

