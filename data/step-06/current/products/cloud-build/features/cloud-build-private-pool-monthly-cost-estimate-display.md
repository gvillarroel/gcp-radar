---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.681Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build private pool monthly cost estimate display"
feature_slug: "cloud-build-private-pool-monthly-cost-estimate-display"
latest_feature_date: "2025-08-15"
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
  - "monthly"
  - "cost"
  - "estimate"
  - "display"
  - "creation"
---

# Cloud Build private pool monthly cost estimate display

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build private pool creation and editing pages now show a monthly price estimate based on the selected machine type configuration.

## Extended Definition

Cloud Build private pool creation and editing pages now show a monthly price estimate based on the selected machine type configuration.

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
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- To learn how to run builds using a private pool, see Running builds in a private pool .
- You also need a private pool to build in a private network.
- Use private pools to run your builds.
- Build repositories from Bitbucket Data Center in a private network If your Bitbucket Data Center instance is hosted in a private network and not reachable over a public internet connection, you must create a private connection between your VPC network and the service producer network .

### "Build repositories from Bitbucket Server in a private network \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server-private-network](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server-private-network)
- Source ID: `site-docs-root-2`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- To learn how to run builds using a private pool, see Running builds in a private pool .
- You will need a private pool to build in a private network.
- You also need a private pool to build in a private network.
- Use private pools to run your builds.

### "Build repositories from GitHub Enterprise in a private network \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise-private-network](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise-private-network)
- Source ID: `site-docs-root-2`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- You will need a private pool to build in a private network.
- Build repositories from GitHub Enterprise in a private network Complete the following steps to connect your GitHub Enterprise instance to Cloud Build from a private network: Grant Service Directory access to the Cloud Build service agent: export PROJECT NUMBER = $( gcloud projects describe PROJECT ID --format = "value(projectNumber)" ) export CLOUD BUILD SERVICE AGENT = "service- $PROJECT NUMBER @gcp-sa-cloudbuild.iam.gserviceaccount.com" gcloud projects add-iam-policy-binding PROJECT ID CONTAINING SERVICE DIRECTORY \ --member = "serviceAccount: $CLOUD BUILD SERVICE AGENT " \ --role = "roles/servicedirectory.viewer" Replace the following: PROJECT ID is your Cloud Build project ID.
- This page explains how you can use GitHub Enterprise triggers to invoke builds in response to commits or pull requests from a GitHub Enterprise instance and explains how you can build repositories from GitHub Enterprise if your instance is hosted in a private network.
- Home Documentation Application development Cloud Build Guides Send feedback Build repositories from GitHub Enterprise in a private network Stay organized with collections Save and categorize content based on your preferences.

