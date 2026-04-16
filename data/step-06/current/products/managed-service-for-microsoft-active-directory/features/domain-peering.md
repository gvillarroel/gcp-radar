---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:09.992Z"
product_name: "Managed Service for Microsoft Active Directory"
product_slug: "managed-service-for-microsoft-active-directory"
feature_name: "Domain peering"
feature_slug: "domain-peering"
latest_feature_date: "2022-07-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/managed-microsoft-ad/docs/domain-peering"
  - "https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-peering"
  - "https://docs.cloud.google.com/managed-microsoft-ad/docs/create-domain"
keywords:
  - "domain"
  - "peering"
  - "managed"
  - "microsoft"
  - "ad"
  - "supports"
  - "multi"
  - "project"
---

# Domain peering

Product: Managed Service for Microsoft Active Directory
Coverage: MEDIUM

## Step 02 Summary

Managed Microsoft AD supports multi-project access through domain peering.

## Extended Definition

Managed Microsoft AD supports multi-project access through domain peering.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/managed-microsoft-ad/docs/domain-peering](https://docs.cloud.google.com/managed-microsoft-ad/docs/domain-peering)
- [https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-peering](https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-peering)
- [https://docs.cloud.google.com/managed-microsoft-ad/docs/create-domain](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-domain)

## Supporting Pages

### "Domain peering overview \_|\_ Managed Service for Microsoft Active Directory\

- URL: [https://docs.cloud.google.com/managed-microsoft-ad/docs/domain-peering](https://docs.cloud.google.com/managed-microsoft-ad/docs/domain-peering)
- Source ID: `site-docs-reference-required-1`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- How domain peering differs from authorized network Managed Microsoft AD domain supports adding up to 5 authorized networks from the domain resource project.
- This functionality provides the flexibility of sharing a single Managed Microsoft AD domain with multiple projects and networks outside the domain resource project.
- How domain peering works Managed Microsoft AD creates a domain peering resource in both the domain resource project and the VPC resource project.
- With Managed Microsoft AD domain peering, the authorized network originates from projects other than the domain resource project.

### "Quickstart: Configure domain peering \_|\_ Managed Service for Microsoft\

- URL: [https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-peering](https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-peering)
- Source ID: `site-docs-reference-required-1`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Console To create a peering from the domain resource project, follow these steps: In the Google Cloud console, go to the Managed Microsoft AD page.
- What's next Manage domain peerings Join a Windows VM to a domain Join a Linux VM to a domain Connect to a Managed Microsoft AD domain Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Configure domain peering This page shows you how to configure domain peering with Managed Service for Microsoft Active Directory (Managed Microsoft AD).
- DOMAIN NAME : a full resource name for your Managed Microsoft AD domain, in the form of: projects/ PROJECT ID /locations/global/domains/ DOMAIN NAME .

### "Quickstart: Create a domain \_|\_ Managed Service for Microsoft Active Directory\

- URL: [https://docs.cloud.google.com/managed-microsoft-ad/docs/create-domain](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-domain)
- Source ID: `site-docs-reference-required-1`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Join a Windows VM to a domain Join a Linux VM to a domain Connect to a Managed Microsoft AD domain Configure domain peering Deploy domain controllers in additional regions Deploy Managed Microsoft AD with cross-project access using domain peering Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The full resource name of the authorized VPC network, which is in the following format: projects/ PROJECT ID /global/networks/ VPC NETWORK NAME Create the domain To create a domain, complete the following steps: Console Go to the Managed Microsoft AD page.
- However, after you create a Managed Microsoft AD domain, you can create a trust relationship between the Managed Microsoft AD domain and any other non-Managed Microsoft AD domain.
- For information about the errors that you might encounter while creating a domain, see Unable to create a Managed Microsoft AD domain .

