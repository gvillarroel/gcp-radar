---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:09.994Z"
product_name: "Managed Service for Microsoft Active Directory"
product_slug: "managed-service-for-microsoft-active-directory"
feature_name: "Regional availability"
feature_slug: "regional-availability"
latest_feature_date: "2022-05-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/managed-microsoft-ad/docs/add-remove-regions"
  - "https://docs.cloud.google.com/managed-microsoft-ad/docs/overview"
  - "https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory"
keywords:
  - "regional"
  - "availability"
  - "managed"
  - "microsoft"
  - "ad"
  - "available"
  - "additional"
  - "regions"
---

# Regional availability

Product: Managed Service for Microsoft Active Directory
Coverage: MEDIUM

## Step 02 Summary

Managed Microsoft AD is available in additional regions.

## Extended Definition

Managed Microsoft AD is available in additional regions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/managed-microsoft-ad/docs/add-remove-regions](https://docs.cloud.google.com/managed-microsoft-ad/docs/add-remove-regions)
- [https://docs.cloud.google.com/managed-microsoft-ad/docs/overview](https://docs.cloud.google.com/managed-microsoft-ad/docs/overview)
- [https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory](https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory)

## Supporting Pages

### "Deploy domain controllers in additional regions \_|\_ Managed Service for\

- URL: [https://docs.cloud.google.com/managed-microsoft-ad/docs/add-remove-regions](https://docs.cloud.google.com/managed-microsoft-ad/docs/add-remove-regions)
- Source ID: `site-docs-reference-required-1`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Access and resource management Managed Microsoft AD Guides Send feedback Deploy domain controllers in additional regions Stay organized with collections Save and categorize content based on your preferences.
- However, to increase availability and be resilient to regional outages , we recommend that you deploy domain controllers in additional regions.
- Note that doesn't affect the access to your Managed Microsoft AD domain, which is available in all regions where your VPC has a presence.
- Regions Managed Microsoft AD supports the following regions: Region name Region description africa-south1 Johannesburg asia-east1 Taiwan asia-east2 Hong Kong asia-northeast1 Tokyo asia-northeast2 Osaka asia-northeast3 Seoul asia-south1 Mumbai asia-south2 Delhi asia-southeast1 Singapore asia-southeast2 Jakarta australia-southeast1 Sydney australia-southeast2 Melbourne europe-central2 Warsaw europe-north1 Finland europe-southwest1 Madrid europe-west1 Belgium europe-west2 London europe-west3 Frankfurt europe-west4 Netherlands europe-west6 Zürich europe-west8 Milan europe-west9 Paris europe-west10 Berlin europe-west12 Turin me-central1 Doha me-central2 Dammam me-west1 Tel Aviv northamerica-northeast1 Montréal northamerica-northeast2 Toronto southamerica-east1 São Paulo us-central1 Iowa us-east1 South Carolina us-east4 Northern Virginia us-east5 Columbus us-south1 Dallas us-west1 Oregon us-west2 Los Angeles us-west3 Salt Lake City us-west4 Las Vegas Add a region Managed Microsoft AD uses a single Active Directory site .

### "Managed Microsoft AD overview \_|\_ Managed Service for Microsoft Active\

- URL: [https://docs.cloud.google.com/managed-microsoft-ad/docs/overview](https://docs.cloud.google.com/managed-microsoft-ad/docs/overview)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Getting started with Managed Microsoft AD To get started with using Managed Microsoft AD, specify the name of the Managed Microsoft AD domain and the Google Cloud VPC networks where the Managed Microsoft AD domain is authorized to be available.
- You can extend the domain to up to four supported regions to be resilient to regional outages and easily horizontally scale, by deploying domain controllers in additional regions as needed.
- Multi-regional support Managed Microsoft AD supports multi-regional deployment of Active Directory forests when peered with Google Cloud's global low-latency Virtual Private Cloud (VPC).
- To maintain high availability and improve fault tolerance , Managed Microsoft AD deploys two domain controllers to each region in non-overlapping Google Cloud zones.

### "Deploy an Active Directory resource forest \_|\_ Managed Service for Microsoft\

- URL: [https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory](https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note that you can only deploy Managed Microsoft AD in some regions (this doesn't affect the general availability of your domain, which is available in all regions where your VPC has a presence).
- You can extend the VPC and your domain to cover additional regions at any time. [MANAGEMENT-RANGE] with the subnet range to use for the management subnet . [RESOURCES-RANGE] with the subnet range to use for the resource subnet . [MANAGED-AD-RANGE] with the subnet range to use for the Managed Microsoft AD subnet . [ONPREM-AD-RANGE] with the subnet range to use for the on-prem AD subnet .
- To make the domain controllers available for you to use, the following changes are applied to your project when you deploy Managed Microsoft AD: VPC peering is added to your VPC.
- AD DNS DOMAIN=[AD-DNS-NAME] For example: AD DNS DOMAIN=cloud.example.com Enable Cloud DNS in the VPC host project: gcloud services enable dns.googleapis.com --project $VPCHOST PROJECT ID Enable Managed Microsoft AD API in the VPC host project: gcloud services enable managedidentities.googleapis.com --project $VPCHOST PROJECT ID Provision the domain controllers and create a new forest: gcloud active - directory domains create $AD DNS DOMAIN \ -- admin - name = SetupAdmin \ -- reserved - ip - range = $SUBNET RANGE MANAGEDAD \ -- region = $SUBNET REGION \ -- authorized - networks = projects / $VPCHOST PROJECT ID / global / networks / $SHAREDVPC NAME \ -- project = $VPCHOST PROJECT ID Allow 15 to 20 minutes for the command to complete.

