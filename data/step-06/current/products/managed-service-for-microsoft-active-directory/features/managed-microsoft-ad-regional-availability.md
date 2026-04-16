---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:09.986Z"
product_name: "Managed Service for Microsoft Active Directory"
product_slug: "managed-service-for-microsoft-active-directory"
feature_name: "Managed Microsoft AD regional availability"
feature_slug: "managed-microsoft-ad-regional-availability"
latest_feature_date: "2024-01-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/managed-microsoft-ad/docs/add-remove-regions"
  - "https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory"
  - "https://docs.cloud.google.com/managed-microsoft-ad/docs/overview"
keywords:
  - "managed"
  - "microsoft"
  - "ad"
  - "regional"
  - "availability"
  - "can"
  - "deployed"
  - "africa"
---

# Managed Microsoft AD regional availability

Product: Managed Service for Microsoft Active Directory
Coverage: MEDIUM

## Step 02 Summary

Managed Microsoft AD can be deployed in the africa-south1 (Johannesburg) region; Managed Microsoft AD can be deployed in the europe-west10 (Berlin) region.

## Extended Definition

Managed Microsoft AD can be deployed in the africa-south1 (Johannesburg) region; Managed Microsoft AD can be deployed in the europe-west10 (Berlin) region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/managed-microsoft-ad/docs/add-remove-regions](https://docs.cloud.google.com/managed-microsoft-ad/docs/add-remove-regions)
- [https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory](https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory)
- [https://docs.cloud.google.com/managed-microsoft-ad/docs/overview](https://docs.cloud.google.com/managed-microsoft-ad/docs/overview)

## Supporting Pages

### "Deploy an Active Directory resource forest \_|\_ Managed Service for Microsoft\

- URL: [https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory](https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory)
- Source ID: `site-docs-root`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note that you can only deploy Managed Microsoft AD in some regions (this doesn't affect the general availability of your domain, which is available in all regions where your VPC has a presence).
- Protecting the project against accidental deletion Deleting a project also deletes any Managed Microsoft AD domains deployed inside it.
- AD DNS DOMAIN=[AD-DNS-NAME] For example: AD DNS DOMAIN=cloud.example.com Enable Cloud DNS in the VPC host project: gcloud services enable dns.googleapis.com --project $VPCHOST PROJECT ID Enable Managed Microsoft AD API in the VPC host project: gcloud services enable managedidentities.googleapis.com --project $VPCHOST PROJECT ID Provision the domain controllers and create a new forest: gcloud active - directory domains create $AD DNS DOMAIN \ -- admin - name = SetupAdmin \ -- reserved - ip - range = $SUBNET RANGE MANAGEDAD \ -- region = $SUBNET REGION \ -- authorized - networks = projects / $VPCHOST PROJECT ID / global / networks / $SHAREDVPC NAME \ -- project = $VPCHOST PROJECT ID Allow 15 to 20 minutes for the command to complete.
- Run the following command to delete the Active Directory forest and domain, replacing [AD DNS DOMAIN] with the DNS domain name used for Managed Microsoft AD domain, and [VPCHOST PROJECT ID] with the ID of your VPC host project: gcloud active - directory domains delete [ AD DNS DOMAIN ] \ --project=[VPCHOST PROJECT ID] Deleting the management project In the Google Cloud console, go to the Projects page.

### "Deploy domain controllers in additional regions \_|\_ Managed Service for\

- URL: [https://docs.cloud.google.com/managed-microsoft-ad/docs/add-remove-regions](https://docs.cloud.google.com/managed-microsoft-ad/docs/add-remove-regions)
- Source ID: `site-docs-reference-required-1`
- Final score: 47
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Regions Managed Microsoft AD supports the following regions: Region name Region description africa-south1 Johannesburg asia-east1 Taiwan asia-east2 Hong Kong asia-northeast1 Tokyo asia-northeast2 Osaka asia-northeast3 Seoul asia-south1 Mumbai asia-south2 Delhi asia-southeast1 Singapore asia-southeast2 Jakarta australia-southeast1 Sydney australia-southeast2 Melbourne europe-central2 Warsaw europe-north1 Finland europe-southwest1 Madrid europe-west1 Belgium europe-west2 London europe-west3 Frankfurt europe-west4 Netherlands europe-west6 Zürich europe-west8 Milan europe-west9 Paris europe-west10 Berlin europe-west12 Turin me-central1 Doha me-central2 Dammam me-west1 Tel Aviv northamerica-northeast1 Montréal northamerica-northeast2 Toronto southamerica-east1 São Paulo us-central1 Iowa us-east1 South Carolina us-east4 Northern Virginia us-east5 Columbus us-south1 Dallas us-west1 Oregon us-west2 Los Angeles us-west3 Salt Lake City us-west4 Las Vegas Add a region Managed Microsoft AD uses a single Active Directory site .
- Home Documentation Access and resource management Managed Microsoft AD Guides Send feedback Deploy domain controllers in additional regions Stay organized with collections Save and categorize content based on your preferences.
- However, to increase availability and be resilient to regional outages , we recommend that you deploy domain controllers in additional regions.
- This page provides a list of regions that you can add to your domain in Managed Service for Microsoft Active Directory (Managed Microsoft AD).

### "Managed Microsoft AD overview \_|\_ Managed Service for Microsoft Active\

- URL: [https://docs.cloud.google.com/managed-microsoft-ad/docs/overview](https://docs.cloud.google.com/managed-microsoft-ad/docs/overview)
- Source ID: `site-docs-root`
- Final score: 45
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Multi-regional support Managed Microsoft AD supports multi-regional deployment of Active Directory forests when peered with Google Cloud's global low-latency Virtual Private Cloud (VPC).
- To maintain high availability and improve fault tolerance , Managed Microsoft AD deploys two domain controllers to each region in non-overlapping Google Cloud zones.
- Getting started with Managed Microsoft AD To get started with using Managed Microsoft AD, specify the name of the Managed Microsoft AD domain and the Google Cloud VPC networks where the Managed Microsoft AD domain is authorized to be available.
- You can access the Managed Microsoft AD domain using virtual machines in your authorized Google Cloud VPC networks, or via on-premises infrastructure and other cloud products that connect to Google Cloud via VPN or Cloud Interconnect.

