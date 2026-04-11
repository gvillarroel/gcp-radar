---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.701Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Terraform support for Cloud Build repositories (2nd generation)"
feature_slug: "terraform-support-for-cloud-build-repositories-2nd-generation"
latest_feature_date: "2023-07-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise"
  - "https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events"
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center"
keywords:
  - "terraform"
  - "for"
  - "build"
  - "repositories"
  - "2nd"
  - "generation"
  - "gained"
  - "end"
---

# Terraform support for Cloud Build repositories (2nd generation)

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build repositories (2nd generation) gained end-to-end Terraform support.

## Extended Definition

Cloud Build repositories (2nd generation) gained end-to-end Terraform support.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise)
- [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center)

## Supporting Pages

### Building repositories from GitHub Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise)
- Source ID: `site-docs-root-2`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Terraform For sample Terraform code about creating a build trigger and connecting it to your GitHub Enterprise installation using Developer Connect, see the following topics in the Terraform documentation: Create a Developer Connect push trigger Create a Developer Connect pull trigger Data sharing The data sent to GitHub Enterprise from Cloud Build helps you identify triggers by name and see build results on GitHub Enterprise.
- Home Documentation Application development Cloud Build Guides Send feedback Building repositories from GitHub Enterprise Stay organized with collections Save and categorize content based on your preferences.
- If you want to use GitHub Enterprise triggers in a private network, see Building repositories from GitHub Enterprise in a private network for further instructions.
- 1st gen 2nd gen Developer Connect Cloud Build lets you create triggers to build from repositories hosted on GitHub Enterprise .

### "Automate builds in response to Pub/Sub events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- Source ID: `site-docs-root-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- To disable this behavior, we recommend using manual approvals to gate builds when making pull requests on public repositories.
- To disable this behavior, we recommend using manual approvals to gate builds when making pull requests on public repositories.
- Risks associated with an unfiltered trigger If you have not configured filters on your Pub/Sub trigger, your trigger may end up invoking an infinite number of builds if your trigger modifies an artifact or object which unintentionally publishes a new message to the topic it's listening to.
- Home Documentation Application development Cloud Build Guides Send feedback Automate builds in response to Pub/Sub events Stay organized with collections Save and categorize content based on your preferences.

### Build repositories from Bitbucket Data Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center)
- Source ID: `site-docs-root-2`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Terraform For sample Terraform code about creating a build trigger and connecting it to your Bitbucket Data Center installation using Developer Connect, see the following topics in the Terraform documentation: Create a Developer Connect push trigger Create a Developer Connect pull trigger Data sharing The data sent to Bitbucket Data Center from Cloud Build helps you identify triggers by name and see build results on your Bitbucket Data Center repositories.
- Home Documentation Application development Cloud Build Guides Send feedback Build repositories from Bitbucket Data Center Stay organized with collections Save and categorize content based on your preferences.
- If you want to use Bitbucket Data Center triggers in a private network, see Building repositories from Bitbucket Data Center in a private network for further instructions.
- 1st gen 2nd gen Developer Connect Cloud Build lets you create triggers to build from repositories hosted on Bitbucket Data Center .

