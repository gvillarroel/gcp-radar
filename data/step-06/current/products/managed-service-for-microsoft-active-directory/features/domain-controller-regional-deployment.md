---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:10.002Z"
product_name: "Managed Service for Microsoft Active Directory"
product_slug: "managed-service-for-microsoft-active-directory"
feature_name: "Domain controller regional deployment"
feature_slug: "domain-controller-regional-deployment"
latest_feature_date: "2020-02-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/managed-microsoft-ad/docs/overview"
  - "https://docs.cloud.google.com/managed-microsoft-ad/docs/add-remove-regions"
  - "https://docs.cloud.google.com/managed-microsoft-ad/docs/create-domain"
keywords:
  - "domain"
  - "controller"
  - "regional"
  - "deployment"
  - "managed"
  - "microsoft"
  - "ad"
  - "supports"
---

# Domain controller regional deployment

Product: Managed Service for Microsoft Active Directory
Coverage: MEDIUM

## Step 02 Summary

Managed Microsoft AD supports deploying domain controllers in multiple Google Cloud regions.

## Extended Definition

Managed Microsoft AD supports deploying domain controllers in multiple Google Cloud regions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/managed-microsoft-ad/docs/overview](https://docs.cloud.google.com/managed-microsoft-ad/docs/overview)
- [https://docs.cloud.google.com/managed-microsoft-ad/docs/add-remove-regions](https://docs.cloud.google.com/managed-microsoft-ad/docs/add-remove-regions)
- [https://docs.cloud.google.com/managed-microsoft-ad/docs/create-domain](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-domain)

## Supporting Pages

### "Deploy domain controllers in additional regions \_|\_ Managed Service for\

- URL: [https://docs.cloud.google.com/managed-microsoft-ad/docs/add-remove-regions](https://docs.cloud.google.com/managed-microsoft-ad/docs/add-remove-regions)
- Source ID: `site-docs-reference-required-1`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Access and resource management Managed Microsoft AD Guides Send feedback Deploy domain controllers in additional regions Stay organized with collections Save and categorize content based on your preferences.
- To add domain controllers to an additional region, do the following: Console In the Google Cloud console, go to the Managed Microsoft AD page.
- To remove domain controllers from a region, do the following: Console In the Google Cloud console, go to the Managed Microsoft AD page.
- Regions Managed Microsoft AD supports the following regions: Region name Region description africa-south1 Johannesburg asia-east1 Taiwan asia-east2 Hong Kong asia-northeast1 Tokyo asia-northeast2 Osaka asia-northeast3 Seoul asia-south1 Mumbai asia-south2 Delhi asia-southeast1 Singapore asia-southeast2 Jakarta australia-southeast1 Sydney australia-southeast2 Melbourne europe-central2 Warsaw europe-north1 Finland europe-southwest1 Madrid europe-west1 Belgium europe-west2 London europe-west3 Frankfurt europe-west4 Netherlands europe-west6 Zürich europe-west8 Milan europe-west9 Paris europe-west10 Berlin europe-west12 Turin me-central1 Doha me-central2 Dammam me-west1 Tel Aviv northamerica-northeast1 Montréal northamerica-northeast2 Toronto southamerica-east1 São Paulo us-central1 Iowa us-east1 South Carolina us-east4 Northern Virginia us-east5 Columbus us-south1 Dallas us-west1 Oregon us-west2 Los Angeles us-west3 Salt Lake City us-west4 Las Vegas Add a region Managed Microsoft AD uses a single Active Directory site .

### "Managed Microsoft AD overview \_|\_ Managed Service for Microsoft Active\

- URL: [https://docs.cloud.google.com/managed-microsoft-ad/docs/overview](https://docs.cloud.google.com/managed-microsoft-ad/docs/overview)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Multi-regional support Managed Microsoft AD supports multi-regional deployment of Active Directory forests when peered with Google Cloud's global low-latency Virtual Private Cloud (VPC).
- How Managed Microsoft AD works Managed Microsoft AD runs actual Microsoft Active Directory domain controllers on Windows virtual machines to ensure application compatibility.
- To maintain high availability and improve fault tolerance , Managed Microsoft AD deploys two domain controllers to each region in non-overlapping Google Cloud zones.
- Getting started with Managed Microsoft AD To get started with using Managed Microsoft AD, specify the name of the Managed Microsoft AD domain and the Google Cloud VPC networks where the Managed Microsoft AD domain is authorized to be available.

### "Quickstart: Create a domain \_|\_ Managed Service for Microsoft Active Directory\

- URL: [https://docs.cloud.google.com/managed-microsoft-ad/docs/create-domain](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-domain)
- Source ID: `site-docs-reference-required-1`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Join a Windows VM to a domain Join a Linux VM to a domain Connect to a Managed Microsoft AD domain Configure domain peering Deploy domain controllers in additional regions Deploy Managed Microsoft AD with cross-project access using domain peering Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The full resource name of the authorized VPC network, which is in the following format: projects/ PROJECT ID /global/networks/ VPC NETWORK NAME Create the domain To create a domain, complete the following steps: Console Go to the Managed Microsoft AD page.
- However, after you create a Managed Microsoft AD domain, you can create a trust relationship between the Managed Microsoft AD domain and any other non-Managed Microsoft AD domain.
- After you create the domain, you can add domain controllers to additional regions to increase availability and be resilient to regional outages .

