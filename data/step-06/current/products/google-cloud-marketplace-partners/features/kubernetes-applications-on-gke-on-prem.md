---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:29.091Z"
product_name: "Google Cloud Marketplace Partners"
product_slug: "google-cloud-marketplace-partners"
feature_name: "Kubernetes applications on GKE On-Prem"
feature_slug: "kubernetes-applications-on-gke-on-prem"
latest_feature_date: "2019-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/marketplace/docs/partners/access-control"
  - "https://docs.cloud.google.com/marketplace/docs/partners/kubernetes"
  - "https://docs.cloud.google.com/marketplace/docs/partners/get-started"
  - "https://docs.cloud.google.com/marketplace/docs/partners/container-setup"
keywords:
  - "kubernetes"
  - "applications"
  - "on"
  - "gke"
  - "prem"
  - "marketplace"
  - "supports"
  - "distributing"
---

# Kubernetes applications on GKE On-Prem

Product: Google Cloud Marketplace Partners
Coverage: MEDIUM

## Step 02 Summary

Google Cloud Marketplace supports distributing Kubernetes applications that run on GKE On-Prem clusters.

## Extended Definition

Google Cloud Marketplace supports distributing Kubernetes applications that run on GKE On-Prem clusters.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/marketplace/docs/partners/access-control](https://docs.cloud.google.com/marketplace/docs/partners/access-control)
- [https://docs.cloud.google.com/marketplace/docs/partners/kubernetes](https://docs.cloud.google.com/marketplace/docs/partners/kubernetes)
- [https://docs.cloud.google.com/marketplace/docs/partners/get-started](https://docs.cloud.google.com/marketplace/docs/partners/get-started)
- [https://docs.cloud.google.com/marketplace/docs/partners/container-setup](https://docs.cloud.google.com/marketplace/docs/partners/container-setup)

## Supporting Pages

### "Configure access control for Producer Portal users \_|\_ Google Cloud Marketplace\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/access-control](https://docs.cloud.google.com/marketplace/docs/partners/access-control)
- Source ID: `site-iam-reference`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you used the VM guided configuration to create your VM product's deployment package, grant your users the following roles for the Cloud Storage bucket where you store your product's deployment package: Storage Object Viewer Storage Object Creator Access control for previewing your products in Cloud Marketplace If you want users to be able to preview your product's listing as your customers see it in Cloud Marketplace, you must grant them the following role: Service Management Consumer Access control for creating and managing private offers in Producer Portal For users to create and manage private offers in the Private offers tab of Producer Portal, grant them the following roles: Commerce Price Management Private Offers Admin Commerce Producer Viewer Access control for viewing key events for private offers For users to view the history of an offer that your organization has published, grant them the Commerce Price Management Events Viewer role.
- Access control for viewing which resellers are allowed to resell your products For users to view which resellers are allowed to resell your Cloud Marketplace products, or which resellers have been disallowed from reselling your products, grant them one of the following roles: Commerce Business Enablement Configuration Viewer ( roles/commercebusinessenablement.viewer ) Commerce Business Enablement Configuration Admin ( roles/commercebusinessenablement.admin ) Access control for managing which resellers are allowed to resell your products For users to manage which resellers are allowed to resell your Cloud Marketplace products, grant them the Commerce Business Enablement Configuration Admin ( roles/commercebusinessenablement.admin ) role.
- Home Documentation Access and resource management Google Cloud Marketplace Partners Develop Send feedback Configure access control for Producer Portal users Stay organized with collections Save and categorize content based on your preferences.
- Access control for reselling of your Cloud Marketplace products If you've allowed resellers to resell your Cloud Marketplace products, you can refer to the following guidelines for granting roles within your Google Cloud organization.

### "Offering Kubernetes apps \_|\_ Google Cloud Marketplace Partners \_|\_ Google\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/kubernetes](https://docs.cloud.google.com/marketplace/docs/partners/kubernetes)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: Starting January 20, 2025, Google Cloud Marketplace is requiring that all new or updated deployments of Google Kubernetes Engine app product listings contain an annotation in their image manifest that identifies the service name of the product.
- Home Documentation Access and resource management Google Cloud Marketplace Partners Develop Send feedback Offering Kubernetes apps Stay organized with collections Save and categorize content based on your preferences.
- If you already have a Kubernetes app on Cloud Marketplace and want to learn about maintaining it, see the guidelines for maintaining your app after it's live .
- The Kubernetes app that you submit to Cloud Marketplace is a bundle of container images, configuration files, and display metadata.

### "Requirements for Google Cloud Marketplace \_|\_ Google Cloud Marketplace\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/get-started](https://docs.cloud.google.com/marketplace/docs/partners/get-started)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Access and resource management Google Cloud Marketplace Partners Guides Send feedback Requirements for Google Cloud Marketplace Stay organized with collections Save and categorize content based on your preferences.
- Note: Google offers a standard revenue share for products you sell through Cloud Marketplace that meet all of the listed requirements and pass a business case review during Google's internal product validation process.
- Pattern 2: Your product's compute or data plane runs on Google Cloud, but smaller control planes or support infrastructure, such as logging or AI inference, run on-premises or on another cloud.
- Pattern 3: Your storage, backup, replication, or data recovery (DR) product must replicate all data to Google Cloud, while the product's control plane can run on-premises or on other clouds.

### "Setting up the technical components \_|\_ Google Cloud Marketplace Partners\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/container-setup](https://docs.cloud.google.com/marketplace/docs/partners/container-setup)
- Source ID: `site-iam-reference`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page outlines how to create the key technical components required for distributing your container image product with Google Cloud Marketplace.
- To create your product's Cloud Marketplace entry: Open Producer Portal in the Google Cloud console: https://console.cloud.google.com/producer-portal?project= YOUR PUBLIC PROJECT ID Replace YOUR PUBLIC PROJECT ID with the ID for the public project that you created for Cloud Marketplace—for example, my-organization-public .
- Home Documentation Access and resource management Google Cloud Marketplace Partners Develop Send feedback Setting up the technical components Stay organized with collections Save and categorize content based on your preferences.
- If you don't know who your assigned Partner Engineer is, use the Partner Support Desk to request assistance, and include the word "Marketplace" in your description.

