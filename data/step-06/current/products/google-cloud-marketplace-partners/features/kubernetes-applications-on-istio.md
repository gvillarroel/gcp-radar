---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:29.091Z"
product_name: "Google Cloud Marketplace Partners"
product_slug: "google-cloud-marketplace-partners"
feature_name: "Kubernetes applications on Istio"
feature_slug: "kubernetes-applications-on-istio"
latest_feature_date: "2019-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/marketplace/docs/partners/kubernetes"
  - "https://docs.cloud.google.com/marketplace/docs/partners/access-control"
  - "https://docs.cloud.google.com/marketplace/docs/partners/container-setup"
  - "https://docs.cloud.google.com/marketplace/docs/partners/data/choose-pricing"
keywords:
  - "kubernetes"
  - "applications"
  - "on"
  - "istio"
  - "marketplace"
  - "supports"
  - "distributing"
  - "that"
---

# Kubernetes applications on Istio

Product: Google Cloud Marketplace Partners
Coverage: MEDIUM

## Step 02 Summary

Google Cloud Marketplace supports distributing Kubernetes applications that run on Istio-enabled clusters.

## Extended Definition

Google Cloud Marketplace supports distributing Kubernetes applications that run on Istio-enabled clusters.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/marketplace/docs/partners/kubernetes](https://docs.cloud.google.com/marketplace/docs/partners/kubernetes)
- [https://docs.cloud.google.com/marketplace/docs/partners/access-control](https://docs.cloud.google.com/marketplace/docs/partners/access-control)
- [https://docs.cloud.google.com/marketplace/docs/partners/container-setup](https://docs.cloud.google.com/marketplace/docs/partners/container-setup)
- [https://docs.cloud.google.com/marketplace/docs/partners/data/choose-pricing](https://docs.cloud.google.com/marketplace/docs/partners/data/choose-pricing)

## Supporting Pages

### "Offering Kubernetes apps \_|\_ Google Cloud Marketplace Partners \_|\_ Google\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/kubernetes](https://docs.cloud.google.com/marketplace/docs/partners/kubernetes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: Starting January 20, 2025, Google Cloud Marketplace is requiring that all new or updated deployments of Google Kubernetes Engine app product listings contain an annotation in their image manifest that identifies the service name of the product.
- The Kubernetes app that you submit to Cloud Marketplace is a bundle of container images, configuration files, and display metadata.
- Home Documentation Access and resource management Google Cloud Marketplace Partners Develop Send feedback Offering Kubernetes apps Stay organized with collections Save and categorize content based on your preferences.
- The Cloud Marketplace team reviews your app, which includes verifying that your app installs and uninstalls successfully, running unit tests, and scanning your containers for vulnerabilities using Artifact Analysis .

### "Configure access control for Producer Portal users \_|\_ Google Cloud Marketplace\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/access-control](https://docs.cloud.google.com/marketplace/docs/partners/access-control)
- Source ID: `site-iam-reference`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you used the VM guided configuration to create your VM product's deployment package, grant your users the following roles for the Cloud Storage bucket where you store your product's deployment package: Storage Object Viewer Storage Object Creator Access control for previewing your products in Cloud Marketplace If you want users to be able to preview your product's listing as your customers see it in Cloud Marketplace, you must grant them the following role: Service Management Consumer Access control for creating and managing private offers in Producer Portal For users to create and manage private offers in the Private offers tab of Producer Portal, grant them the following roles: Commerce Price Management Private Offers Admin Commerce Producer Viewer Access control for viewing key events for private offers For users to view the history of an offer that your organization has published, grant them the Commerce Price Management Events Viewer role.
- Access control for viewing which resellers are allowed to resell your products For users to view which resellers are allowed to resell your Cloud Marketplace products, or which resellers have been disallowed from reselling your products, grant them one of the following roles: Commerce Business Enablement Configuration Viewer ( roles/commercebusinessenablement.viewer ) Commerce Business Enablement Configuration Admin ( roles/commercebusinessenablement.admin ) Access control for managing which resellers are allowed to resell your products For users to manage which resellers are allowed to resell your Cloud Marketplace products, grant them the Commerce Business Enablement Configuration Admin ( roles/commercebusinessenablement.admin ) role.
- Access control for managing your Partner Advantage account and your organization For users to manage your Partner Advantage account and your organization-level settings, grant them one of the following two roles: Commerce Business Enablement Configuration Admin ( roles/commercebusinessenablement.admin ) Commerce Business Enablement Configuration Viewer ( roles/commercebusinessenablement.viewer ) Access control for viewing product listings For users to view in-progress product listings that you create in Producer Portal, grant them the Commerce Producer Viewer role.
- Home Documentation Access and resource management Google Cloud Marketplace Partners Develop Send feedback Configure access control for Producer Portal users Stay organized with collections Save and categorize content based on your preferences.

### "Setting up the technical components \_|\_ Google Cloud Marketplace Partners\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/container-setup](https://docs.cloud.google.com/marketplace/docs/partners/container-setup)
- Source ID: `site-iam-reference`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create your product's Cloud Marketplace entry: Open Producer Portal in the Google Cloud console: https://console.cloud.google.com/producer-portal?project= YOUR PUBLIC PROJECT ID Replace YOUR PUBLIC PROJECT ID with the ID for the public project that you created for Cloud Marketplace—for example, my-organization-public .
- This page outlines how to create the key technical components required for distributing your container image product with Google Cloud Marketplace.
- Tag the image via Docker with latest . docker tag image name staging repo path :tag For example, docker tag test-image us-docker.pkg.dev/testpartner/testsolution:latest Note that the image tagged latest is pulled if a user does not specify a tag.
- Home Documentation Access and resource management Google Cloud Marketplace Partners Develop Send feedback Setting up the technical components Stay organized with collections Save and categorize content based on your preferences.

### "Add pricing information to a config \_|\_ Google Cloud Marketplace Partners\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/data/choose-pricing](https://docs.cloud.google.com/marketplace/docs/partners/data/choose-pricing)
- Source ID: `site-iam-reference`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Add features to your pricing plans For each of your pricing plans that supports private offers, under Add features , add at least one feature.
- Home Documentation Access and resource management Google Cloud Marketplace Partners Develop Send feedback Add pricing information to a config Stay organized with collections Save and categorize content based on your preferences.
- The direct link to Producer Portal is: https://console.cloud.google.com/producer-portal?project= YOUR PROJECT ID Note: If you don't see the link, or can't access the URL, verify that you've selected the correct project.
- Free products For data products that you're offering with a free pricing plan, complete the following steps: Under Add subscriptions , for Subscription period 1 , select how long you want subscription periods to last.

