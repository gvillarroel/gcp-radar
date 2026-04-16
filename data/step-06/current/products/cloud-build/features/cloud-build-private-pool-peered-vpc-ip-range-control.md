---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.850Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build private pool peered VPC IP range control"
feature_slug: "cloud-build-private-pool-peered-vpc-ip-range-control"
latest_feature_date: "2023-01-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network"
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server-private-network"
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise-private-network"
keywords:
  - "peered"
  - "range"
  - "control"
  - "pool"
  - "private"
---

# Cloud Build private pool peered VPC IP range control

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build private pools can now set peeredNetworkIpRange to consume fewer IP addresses in peered VPCs.

## Extended Definition

Cloud Build private pools can now set peeredNetworkIpRange to consume fewer IP addresses in peered VPCs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server-private-network](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server-private-network)
- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise-private-network](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise-private-network)

## Supporting Pages

### "Build repositories from Bitbucket Data Center in a private network \_|\_\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network)
- Source ID: `site-docs-root-2`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Allocate an internal IP range in the VPC that the Cloud Build producer network can use to allocate to VMs maintaining a connection with private repositories.
- To learn how to run builds using a private pool, see Running builds in a private pool .
- If you have not created a private pool, see create a new private pool .
- Allocate a named IP range in the VPC network for your peered network.

### "Build repositories from Bitbucket Server in a private network \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server-private-network](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server-private-network)
- Source ID: `site-docs-root-2`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This is to accommodate, at a minimum, both your triggers and your worker pools, because each service connection tries to claim an IP range with a prefix length of /24 .
- Allocate an internal IP range in the VPC that the Cloud Build producer network can use to allocate to VMs maintaining a connection with private repositories.
- Enable the APIs If you have not created a private pool, follow the instructions in Create and manage private pools to create a private pool.
- To learn how to run builds using a private pool, see Running builds in a private pool .

### "Build repositories from GitHub Enterprise in a private network \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise-private-network](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise-private-network)
- Source ID: `site-docs-root-2`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable the APIs If you have not created a private pool, follow the instructions in Create and manage private pools to create a private pool.
- Additionally, your private network needs to be configured to route this range through the Cloud VPN or Cloud Interconnect connection.
- If your connection uses a Cloud Router, you can configure your connection to communicate the range to your private network.
- You will need a private pool to build in a private network.

