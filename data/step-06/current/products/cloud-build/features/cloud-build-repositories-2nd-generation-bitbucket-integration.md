---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.823Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build repositories (2nd generation) Bitbucket integration"
feature_slug: "cloud-build-repositories-2nd-generation-bitbucket-integration"
latest_feature_date: "2024-03-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center"
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center"
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network"
keywords:
  - "integration"
  - "bitbucket"
  - "generation"
  - "repositories"
  - "center"
  - "added"
---

# Cloud Build repositories (2nd generation) Bitbucket integration

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build repositories (2nd generation) added integration support for Bitbucket Cloud and Bitbucket Data Center.

## Extended Definition

Cloud Build repositories (2nd generation) added integration support for Bitbucket Cloud and Bitbucket Data Center.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network)

## Supporting Pages

### Build repositories from Bitbucket Data Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center)
- Source ID: `site-docs-root-2`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Terraform For sample Terraform code about creating a build trigger and connecting it to your Bitbucket Data Center installation using Developer Connect, see the following topics in the Terraform documentation: Create a Developer Connect push trigger Create a Developer Connect pull trigger Data sharing The data sent to Bitbucket Data Center from Cloud Build helps you identify triggers by name and see build results on your Bitbucket Data Center repositories.
- Create a Bitbucket Data Center trigger This section explains how you can connect your Bitbucket Data Center repositories to Cloud Build and create a trigger to automatically invoke builds on your connected repositories.
- Home Documentation Application development Cloud Build Guides Send feedback Build repositories from Bitbucket Data Center Stay organized with collections Save and categorize content based on your preferences.
- If you want to use Bitbucket Data Center triggers in a private network, see Building repositories from Bitbucket Data Center in a private network for further instructions.

### "Connect to a Bitbucket Data Center host \_|\_ Cloud Build \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center)
- Source ID: `site-docs-root-2`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required IAM permissions To get the permissions that you need to connect to your Bitbucket Data Center host, ask your administrator to grant you the following IAM roles on your user account: Cloud Build Editor ( roles/cloudbuild.builds.editor ) Integrations Owner ( roles/cloudbuild.integrations.owner ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Connect to a Bitbucket Data Center host Console To connect your Bitbucket Data Center host to Cloud Build using the Google Cloud console: Open the Repositories page in the Google Cloud console: Open the Repositories page At the top of the page, select the 1st gen tab.
- If your Bitbucket Data Center instance is hosted in a private network, see Build repositories from Bitbucket Data Center in a private network to learn about additional IAM roles required to configure a host connection.
- As a result, you will see errors in the following circumstances: When you try to link a Bitbucket Data Center repository Cloud Build connection, a Failed to fetch repositories to link.

### "Build repositories from Bitbucket Data Center in a private network \_|\_\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network)
- Source ID: `site-docs-root-2`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Build repositories from Bitbucket Data Center in a private network If your Bitbucket Data Center instance is hosted in a private network and not reachable over a public internet connection, you must create a private connection between your VPC network and the service producer network .
- 1st gen 2nd gen Cloud Build enables you to create triggers to build from repositories hosted on Bitbucket Data Center , allowing you to execute builds in response to events such as commit pushes or pull requests associated with your Bitbucket Data Center repository.
- Home Documentation Application development Cloud Build Guides Send feedback Build repositories from Bitbucket Data Center in a private network Stay organized with collections Save and categorize content based on your preferences.
- Create a Bitbucket Data Center trigger to build repositories hosted on a Bitbucket Data Center instance.

