---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:10.002Z"
product_name: "Managed Service for Microsoft Active Directory"
product_slug: "managed-service-for-microsoft-active-directory"
feature_name: "Default domain functional level for new domains"
feature_slug: "default-domain-functional-level-for-new-domains"
latest_feature_date: "2020-02-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust"
  - "https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory"
  - "https://docs.cloud.google.com/managed-microsoft-ad/docs/create-domain"
keywords:
  - "default"
  - "domain"
  - "functional"
  - "level"
  - "domains"
  - "managed"
  - "microsoft"
  - "ad"
---

# Default domain functional level for new domains

Product: Managed Service for Microsoft Active Directory
Coverage: MEDIUM

## Step 02 Summary

New Managed Microsoft AD domains default to the Windows Server 2012 R2 domain functional level.

## Extended Definition

New Managed Microsoft AD domains default to the Windows Server 2012 R2 domain functional level.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust)
- [https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory](https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory)
- [https://docs.cloud.google.com/managed-microsoft-ad/docs/create-domain](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-domain)

## Supporting Pages

### "Create a trust with an on-premises domain \_|\_ Managed Service for Microsoft\

- URL: [https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust)
- Source ID: `site-docs-reference-required-1`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It can take up to 10 minutes for setup to complete. gcloud To create a one-way trust, run the following gcloud CLI command: gcloud active-directory domains trusts create DOMAIN \ --target-dns-ip-addresses= TARGET DNS IP ADDRESSES \ --target-domain-name= TARGET DOMAIN NAME \ --direction=OUTBOUND Replace the following: DOMAIN : The FQDN of the Managed Microsoft AD domain.
- This page shows you how to create a trust relationship between on-premises domains and a Managed Service for Microsoft Active Directory domain.
- Home Documentation Access and resource management Managed Microsoft AD Guides Send feedback Create a trust with an on-premises domain Stay organized with collections Save and categorize content based on your preferences.
- Configure the Managed Microsoft AD domain To establish the trust on the Managed Microsoft AD domain, complete the following steps: Console Open the Managed Microsoft AD page in the Google Cloud console.

### "Deploy an Active Directory resource forest \_|\_ Managed Service for Microsoft\

- URL: [https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory](https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AD DNS DOMAIN=[AD-DNS-NAME] For example: AD DNS DOMAIN=cloud.example.com Enable Cloud DNS in the VPC host project: gcloud services enable dns.googleapis.com --project $VPCHOST PROJECT ID Enable Managed Microsoft AD API in the VPC host project: gcloud services enable managedidentities.googleapis.com --project $VPCHOST PROJECT ID Provision the domain controllers and create a new forest: gcloud active - directory domains create $AD DNS DOMAIN \ -- admin - name = SetupAdmin \ -- reserved - ip - range = $SUBNET RANGE MANAGEDAD \ -- region = $SUBNET REGION \ -- authorized - networks = projects / $VPCHOST PROJECT ID / global / networks / $SHAREDVPC NAME \ -- project = $VPCHOST PROJECT ID Allow 15 to 20 minutes for the command to complete.
- Run the following command to delete the Active Directory forest and domain, replacing [AD DNS DOMAIN] with the DNS domain name used for Managed Microsoft AD domain, and [VPCHOST PROJECT ID] with the ID of your VPC host project: gcloud active - directory domains delete [ AD DNS DOMAIN ] \ --project=[VPCHOST PROJECT ID] Deleting the management project In the Google Cloud console, go to the Projects page.
- Protecting the project against accidental deletion Deleting a project also deletes any Managed Microsoft AD domains deployed inside it.
- You can extend the VPC and your domain to cover additional regions at any time. [MANAGEMENT-RANGE] with the subnet range to use for the management subnet . [RESOURCES-RANGE] with the subnet range to use for the resource subnet . [MANAGED-AD-RANGE] with the subnet range to use for the Managed Microsoft AD subnet . [ONPREM-AD-RANGE] with the subnet range to use for the on-prem AD subnet .

### "Quickstart: Create a domain \_|\_ Managed Service for Microsoft Active Directory\

- URL: [https://docs.cloud.google.com/managed-microsoft-ad/docs/create-domain](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-domain)
- Source ID: `site-docs-reference-required-1`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Join a Windows VM to a domain Join a Linux VM to a domain Connect to a Managed Microsoft AD domain Configure domain peering Deploy domain controllers in additional regions Deploy Managed Microsoft AD with cross-project access using domain peering Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to complete this quickstart: managedidentities.domains.create compute.networks.list You might also be able to get these permissions with custom roles or other predefined roles .
- The full resource name of the authorized VPC network, which is in the following format: projects/ PROJECT ID /global/networks/ VPC NETWORK NAME Create the domain To create a domain, complete the following steps: Console Go to the Managed Microsoft AD page.
- However, after you create a Managed Microsoft AD domain, you can create a trust relationship between the Managed Microsoft AD domain and any other non-Managed Microsoft AD domain.

