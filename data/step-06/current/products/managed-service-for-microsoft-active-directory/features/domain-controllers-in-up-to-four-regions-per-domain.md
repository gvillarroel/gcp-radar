---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:10.003Z"
product_name: "Managed Service for Microsoft Active Directory"
product_slug: "managed-service-for-microsoft-active-directory"
feature_name: "Domain controllers in up to four regions per domain"
feature_slug: "domain-controllers-in-up-to-four-regions-per-domain"
latest_feature_date: "2020-02-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/managed-microsoft-ad/docs/add-remove-regions"
  - "https://docs.cloud.google.com/managed-microsoft-ad/docs/create-domain"
  - "https://docs.cloud.google.com/managed-microsoft-ad/docs/overview"
keywords:
  - "domain"
  - "controllers"
  - "up"
  - "four"
  - "regions"
  - "per"
  - "same"
  - "ad"
---

# Domain controllers in up to four regions per domain

Product: Managed Service for Microsoft Active Directory
Coverage: MEDIUM

## Step 02 Summary

Domain controllers for the same AD domain can be deployed across up to four regions.

## Extended Definition

Domain controllers for the same AD domain can be deployed across up to four regions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/managed-microsoft-ad/docs/add-remove-regions](https://docs.cloud.google.com/managed-microsoft-ad/docs/add-remove-regions)
- [https://docs.cloud.google.com/managed-microsoft-ad/docs/create-domain](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-domain)
- [https://docs.cloud.google.com/managed-microsoft-ad/docs/overview](https://docs.cloud.google.com/managed-microsoft-ad/docs/overview)

## Supporting Pages

### "Deploy domain controllers in additional regions \_|\_ Managed Service for\

- URL: [https://docs.cloud.google.com/managed-microsoft-ad/docs/add-remove-regions](https://docs.cloud.google.com/managed-microsoft-ad/docs/add-remove-regions)
- Source ID: `site-docs-reference-required-1`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Before you add or remove domain controllers to additional regions, make sure that you have any one of the following IAM user roles: Google Cloud Managed Identities Domain Admin ( roles/managedidentities.domainAdmin ) Google Cloud Managed Identities Admin ( roles/managedidentities.admin ) For more information, see Cloud Managed Identities roles .
- Home Documentation Access and resource management Managed Microsoft AD Guides Send feedback Deploy domain controllers in additional regions Stay organized with collections Save and categorize content based on your preferences.
- However, to increase availability and be resilient to regional outages , we recommend that you deploy domain controllers in additional regions.
- You can only add domain controllers to the supported regions .

### "Quickstart: Create a domain \_|\_ Managed Service for Microsoft Active Directory\

- URL: [https://docs.cloud.google.com/managed-microsoft-ad/docs/create-domain](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-domain)
- Source ID: `site-docs-reference-required-1`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Join a Windows VM to a domain Join a Linux VM to a domain Connect to a Managed Microsoft AD domain Configure domain peering Deploy domain controllers in additional regions Deploy Managed Microsoft AD with cross-project access using domain peering Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- After you create the domain, you can add domain controllers to additional regions to increase availability and be resilient to regional outages .
- If you want to increase the number of independent domains that you can create in the same project, you can contact Google Cloud support .
- In the Regions section, select a region from the list in which you want to deploy the domain controller.

### "Managed Microsoft AD overview \_|\_ Managed Service for Microsoft Active\

- URL: [https://docs.cloud.google.com/managed-microsoft-ad/docs/overview](https://docs.cloud.google.com/managed-microsoft-ad/docs/overview)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can extend the domain to up to four supported regions to be resilient to regional outages and easily horizontally scale, by deploying domain controllers in additional regions as needed.
- How Managed Microsoft AD works Managed Microsoft AD runs actual Microsoft Active Directory domain controllers on Windows virtual machines to ensure application compatibility.
- To maintain high availability and improve fault tolerance , Managed Microsoft AD deploys two domain controllers to each region in non-overlapping Google Cloud zones.
- This flexibility means that you neither need to deploy Managed Microsoft AD in the same region as the infrastructure, nor create a separate domain for each region.

