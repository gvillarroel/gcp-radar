---
title: "Deploy domain controllers in additional regions \_|\_ Managed Service for\
  \ Microsoft Active Directory \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-microsoft-ad/docs/add-remove-regions
knowledge_key: corpus
source_id: site-docs-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/managed-microsoft-ad/docs/hardening
source_metadata:
  url: https://docs.cloud.google.com/managed-microsoft-ad/docs/add-remove-regions
  title: "Deploy domain controllers in additional regions \_|\_ Managed Service for\
    \ Microsoft Active Directory \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Managed Microsoft AD
Guides
Send feedback
Deploy domain controllers in additional regions
Stay organized with collections
Save and categorize content based on your preferences.
This page provides a list of regions that you can add to your domain in
Managed Service for Microsoft Active Directory (Managed Microsoft AD). This page also shows you how to
add or remove a region from your domain.
Managed Microsoft AD supports multiple regions. Combined with the multi-regional
nature of Virtual Private Clouds, you can quickly scale your Active Directory
infrastructure across Google Cloud. For more information about regions,
see Geography and regions .
Before you begin
Before you add or remove domain controllers to additional regions, make sure that you have any one of the following IAM user roles:
Google Cloud Managed Identities Domain Admin ( roles/managedidentities.domainAdmin )
Google Cloud Managed Identities Admin ( roles/managedidentities.admin )
For more information, see Cloud Managed Identities roles .
For information about granting an IAM role to a principal, see Grant a single role .
Regions
Managed Microsoft AD supports the following regions:
Region name
Region description
africa-south1
Johannesburg
asia-east1
Taiwan
asia-east2
Hong Kong
asia-northeast1
Tokyo
asia-northeast2
Osaka
asia-northeast3
Seoul
asia-south1
Mumbai
asia-south2
Delhi
asia-southeast1
Singapore
asia-southeast2
Jakarta
australia-southeast1
Sydney
australia-southeast2
Melbourne
europe-central2
Warsaw
europe-north1
Finland
europe-southwest1
Madrid
europe-west1
Belgium
europe-west2
London
europe-west3
Frankfurt
europe-west4
Netherlands
europe-west6
Zürich
europe-west8
Milan
europe-west9
Paris
europe-west10
Berlin
europe-west12
Turin
me-central1
Doha
me-central2
Dammam
me-west1
Tel Aviv
northamerica-northeast1
Montréal
northamerica-northeast2
Toronto
southamerica-east1
São Paulo
us-central1
Iowa
us-east1
South Carolina
us-east4
Northern Virginia
us-east5
Columbus
us-south1
Dallas
us-west1
Oregon
us-west2
Los Angeles
us-west3
Salt Lake City
us-west4
Las Vegas
Add a region
Managed Microsoft AD uses a single
Active Directory site .
The site is not constrained to a specific VPC subnet; it spans
all regions and subnets of your VPC. For example, consider you have domain
controllers located in us-west1 and your VPC spans
us-west1 , us-east1 , and us-central1 . Your domain is available in all
these three regions and not limited to us-west1 .
However, to increase availability and be resilient to regional
outages ,
we recommend that you deploy domain controllers in additional regions. Each
domain supports up to 4 regions.
You can only add domain controllers to the supported
regions . Note that
doesn't affect the access to your Managed Microsoft AD domain, which is
available in all regions where your VPC has a presence.
To add domain controllers to an additional region, do the following:
Console
In the Google Cloud console, go to the Managed Microsoft AD page.
Go to Managed Microsoft AD
Select the domain to add a region to, then click
edit Edit .
Click Add Region and choose the region to add from the menu.
Select Save Changes .
gcloud
Run the following command:
gcloud active - directory domains update DOMAIN_NAME \
-- add - region = REGION
Replace the following:
DOMAIN_NAME : The
name of your domain. For example, ad.mycompany.com .
REGION : The region
to add. For example, us-west1 .
Note: You can only add a single region at a time.
Remove a region
As your business needs evolve, you can easily retire domain controllers from a region.
All the data is replicated, so removing a region doesn't result in data loss.
To remove domain controllers from a region, do the following:
Console
In the Google Cloud console, go to the Managed Microsoft AD page.
Go to Managed Microsoft AD
Select the domain to remove a region from, then click
edit Edit .
Under the Regions section, click the
delete Delete icon next to the
region that you want to remove.
Select Save Changes .
gcloud
Run the following command:
gcloud active - directory domains update DOMAIN_NAME \
-- remove - region = REGION
Replace the following:
DOMAIN_NAME : The
name of your domain. For example, ad.mycompany.com .
REGION : The region
to remove. For example, us-west1 .
Note: You can only remove a single region at a time, and there must always be at least
1 region associated with a domain.
What's next
Create a domain
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
