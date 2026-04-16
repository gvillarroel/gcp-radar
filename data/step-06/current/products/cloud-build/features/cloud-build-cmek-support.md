---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.911Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build CMEK support"
feature_slug: "cloud-build-cmek-support"
latest_feature_date: "2019-06-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/overview"
  - "https://docs.cloud.google.com/build/docs/automating-builds/gitlab/connect-host-gitlab-enterprise-edition"
  - "https://docs.cloud.google.com/build/docs/access-github-from-build"
keywords:
  - "encryption"
  - "compliance"
  - "managed"
  - "cmek"
  - "keys"
  - "customer"
  - "added"
---

# Cloud Build CMEK support

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build added support for customer-managed encryption keys (CMEK) for compliance.

## Extended Definition

Cloud Build added support for customer-managed encryption keys (CMEK) for compliance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/overview](https://docs.cloud.google.com/build/docs/overview)
- [https://docs.cloud.google.com/build/docs/automating-builds/gitlab/connect-host-gitlab-enterprise-edition](https://docs.cloud.google.com/build/docs/automating-builds/gitlab/connect-host-gitlab-enterprise-edition)
- [https://docs.cloud.google.com/build/docs/access-github-from-build](https://docs.cloud.google.com/build/docs/access-github-from-build)

## Supporting Pages

### Overview of Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/overview](https://docs.cloud.google.com/build/docs/overview)
- Source ID: `site-docs-root`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Customer-managed encryption keys Cloud Build provides customer-managed encryption keys (CMEK) compliance by default.
- Cloud Build provides CMEK compliance by encrypting the build-time persistent disk (PD) with an ephemeral key that is generated for each build.
- For more information, see CMEK compliance in Cloud Build .
- Private pools, similar to default pools, are hosted and fully-managed by Cloud Build and scale up and down to zero, with no infrastructure to set up, upgrade, or scale.

### "Accessing GitHub from a build via SSH keys \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/access-github-from-build](https://docs.cloud.google.com/build/docs/access-github-from-build)
- Source ID: `site-docs-root-2`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- The keys are often collected from the remote hosts when connecting to them for the first time, but they can also be added manually.
- In your workingdir directory, create a file named known hosts.github and add the public SSH key to this file: ssh-keyscan -t rsa github.com > known hosts.github In the next section when you configure the build, you'll add instructions in the Cloud Build config file to copy the contents of known hosts.github to the known hosts file in Cloud Build's build environment.
- Home Documentation Application development Cloud Build Guides Send feedback Accessing GitHub from a build via SSH keys Stay organized with collections Save and categorize content based on your preferences.
- Add the public SSH key to known hosts Most machines contain a file named known hosts , which contains known keys for remote hosts.

### "Connect to a GitLab Enterprise Edition host \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/gitlab/connect-host-gitlab-enterprise-edition](https://docs.cloud.google.com/build/docs/automating-builds/gitlab/connect-host-gitlab-enterprise-edition)
- Source ID: `site-docs-root-2`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Enable customer-managed encryption keys for Secret Manager .
- Optional: If you want to manage the encryption keys used to encrypt the access tokens for your GitLab Enterprise Edition repositories, then go to the Encryption section and choose a Cloud Key Management Service key.
- In the Host details section, select or enter the following information: GitLab host : Select Self-managed GitLab Enterprise Edition .
- Learn how to build and deploy your workloads to Google Cloud using Google-managed CI/CD components in your GitLab pipeline.

