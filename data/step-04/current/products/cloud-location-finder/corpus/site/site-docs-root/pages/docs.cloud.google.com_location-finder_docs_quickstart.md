---
title: "Quickstart: Enable Cloud Location Finder and run a query \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/location-finder/docs/quickstart
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/location-finder/docs
source_metadata:
  url: https://docs.cloud.google.com/location-finder/docs/quickstart
  title: "Quickstart: Enable Cloud Location Finder and run a query \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Quickstart: Enable Cloud Location Finder and run a query | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español – América Latina
Français
Indonesia
Italiano
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Cloud Location Finder
Start free
Overview
Guides
Reference
Resources
More
Technology areas
More
Overview
Guides
Reference
Resources
Cross-product tools
More
Console
Discover
Product overview
Get started
Quickstart: Enable the API and write your first query
Write queries
Understand query and filter syntax
Review the REST API reference
Review the gcloud reference
Troubleshoot
Troubleshoot connection issues
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Before you begin
Explore common Cloud Location Finder queries Find the nearest cloud zone
Find all Google Distributed Cloud connected zones in a region
Find regions within a specific territory
List cloud locations that minimize carbon footprint
What's next
Home
Documentation
Distributed, hybrid, and multicloud
Cloud Location Finder
Guides
Was this helpful?
Send feedback
On this page
Before you begin
Explore common Cloud Location Finder queries Find the nearest cloud zone
Find all Google Distributed Cloud connected zones in a region
Find regions within a specific territory
List cloud locations that minimize carbon footprint
What's next
Quickstart: Enable Cloud Location Finder and run a query
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA products are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This page shows you how to enable Cloud Location Finder using the
Google Cloud CLI and find cloud locations by proximity, jurisdiction, and carbon
footprint. You can find locations using HTTP requests or Google Cloud CLI
commands.
Before you begin
Install the Google Cloud CLI.
To initialize the Google Cloud CLI,
run the following command:
gcloud init
If you've already installed Google Cloud CLI previously, make sure you have the
latest available version by running gcloud components update .
Enable the Cloud Location Finder API:
gcloud services enable cloudlocationfinder.googleapis.com --project PROJECT
Add the cloudlocationfinder.viewer role:
gcloud projects add-iam-policy-binding PROJECT \
--member USER_IDENTIFIER \
--role roles/cloudlocationfinder.viewer
Replace PROJECT with your project ID.
Replace USER_IDENTIFIER with the identifier for your user account. For example, user:myemail@example.com.
If you plan to find Google Distributed Cloud connected locations using Cloud Location Finder,
enable the GDC Hardware Management API
and add the gdchardwaremanagement.reader role:
gcloud projects add-iam-policy-binding PROJECT \
--member USER_IDENTIFIER \
--role roles/gdchardwaremanagement.reader
Explore common Cloud Location Finder queries
Cloud Location Finder lets you query the cloud location repository to
identify nearby cloud locations based on proximity ,
territory code , or Google carbon free energy (CFE%)
consumption. The following sections provide common examples of how to interact
with the Cloud Location Finder repository.
Cloud Location Finder uses gRPC Transcoding syntax .
Replace PROJECT with your project ID.
Replace CLOUD_REGION with the source cloud
region to find the closest location to, including the cloud provider prefix.
For example, gcp-us-central1 or aws-us-east-1 .
Replace CLOUD_PROVIDER with the cloud
provider to find the closest location to. For example, AWS or GCP .
Find the nearest cloud zone
Use this query to identify the nearest Google Cloud zone to a cloud location
using proximity data for a cloud provider that you specify.
HTTP gcloud
More
curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "X-Goog-User-Project: PROJECT "https://cloudlocationfinder.googleapis.com/v1alpha/projects/ PROJECT /locations/global/cloudLocations:search?source_cloud_location=projects/ PROJECT /locations/global/cloudLocations/ CLOUD_REGION &query=cloud_provider=CLOUD_PROVIDER_ CLOUD_PROVIDER %20AND%20cloud_location_type=CLOUD_LOCATION_TYPE_ZONE&page_size=1"
gcloud alpha cloudlocationfinder cloud-locations search \
--source-cloud-location= CLOUD_REGION \
--query="cloud_provider=CLOUD_PROVIDER_ CLOUD_PROVIDER AND cloud_location_type=CLOUD_LOCATION_TYPE_ZONE" \
--limit=1
Find all Google Distributed Cloud connected zones in a region
Use this query to list Distributed Cloud connected zones within
a specific region.
HTTP gcloud
More
curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "X-Goog-User-Project: PROJECT 'https://cloudlocationfinder.googleapis.com/v1alpha/projects/ PROJECT /locations/global/cloudLocations?filter=containing_cloud_location="projects/ PROJECT /locations/global/cloudLocations/ CLOUD_REGION %20AND%20cloud_provider=CLOUD_PROVIDER_GCP%20AND%20cloud_location_type=CLOUD_LOCATION_TYPE_GDCC_ZONE"'
gcloud cloudlocationfinder cloud-locations list --filter='cloud_provider=CLOUD_PROVIDER_GCP AND cloud_location_type=CLOUD_LOCATION_TYPE_GDCC_ZONE AND containing_cloud_location="projects/ PROJECT /locations/global/cloudLocations/ CLOUD_REGION "'
Find regions within a specific territory
Use this query to identify regions within a specific territory, or jurisdiction,
using a territory code that you provide.
HTTP gcloud
More
curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "X-Goog-User-Project: PROJECT "https://cloudlocationfinder.googleapis.com/v1alpha/projects/ PROJECT /locations/global/cloudLocations:search?source_cloud_location=projects/ PROJECT /locations/global/cloudLocations/ CLOUD_REGION &query=cloud_provider=CLOUD_PROVIDER_ CLOUD_PROVIDER %20AND%20cloud_location_type=CLOUD_LOCATION_TYPE_REGION%20AND%20territory_code= TERRITORY_CODE &page_size=1"
gcloud alpha cloudlocationfinder cloud-locations search \
--source-cloud-location= CLOUD_REGION \
--filter="cloud_provider=CLOUD_PROVIDER_ CLOUD_PROVIDER AND cloud_location_type=CLOUD_LOCATION_TYPE_REGION" AND filter="territory_code=\" TERRITORY_CODE \"" \
--limit=1
List cloud locations that minimize carbon footprint
Use this query to identify regions with the lowest carbon footprint based on
Carbon free energy for Google Cloud regions .
Note: CFE data is available for only Google Cloud locations.
HTTP gcloud
More
curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "X-Goog-User-Project: PROJECT "https://cloudlocationfinder.googleapis.com/v1alpha/projects/ PROJECT /locations/global/cloudLocations?query=cloud_provider=CLOUD_PROVIDER_ CLOUD_PROVIDER %20AND%20cloud_location_type=CLOUD_LOCATION_TYPE_REGION&page_size=5"
gcloud alpha cloudlocationfinder cloud-locations list \
--filter="cloud_provider=CLOUD_PROVIDER_ CLOUD_PROVIDER AND cloud_location_type=CLOUD_LOCATION_TYPE_REGION" \
--limit=5
What's next
Review supported locations
Learn about the location search query syntax
Check out the API reference
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español – América Latina
Français
Indonesia
Italiano
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
