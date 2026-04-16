---
title: "API hub locations \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/apihub/locations
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/apihub/release-notes
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/apihub/locations
  title: "API hub locations \_|\_ Apigee \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Guides
Send feedback
API hub locations
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
This page provides information about data residency and the locations where API hub is available. Data residency describes where your data is stored at rest. To help comply with data residency requirements, Google Cloud gives you the ability to control where that data is stored.
API hub and data residency
Apigee API hub provides data residency to keep your data-at-rest physically within a specified geographical region or location. This ensures that your data is stored and managed within the chosen geographical boundary, helping you meet any regulatory and compliance requirements.
During the API hub instance provisioning process , you must specify locations for your instance and search data.
Important: Before provisioning API hub in your project, verify if you have an existing Apigee organization in your project. If yes, then ensure the following:
Ensure that the organization does not have the Google Cloud Platform - Resource Location Restriction organization policy constraint added.
API hub uses Cloud Scheduler for some of its features. Cloud Scheduler is not available in all Google Cloud locations. If you are provisioning API hub in a location where Cloud Scheduler is not available, it will be provisioned in a fallback location. For a list of these locations and their fallbacks, see API hub locations . If your organization has a Resource Location Restriction policy that prevents resources from being created in the fallback location, provisioning will fail.
Instance region : The physical geographic region where your core API hub instance data will be hosted.
Search data multi-region : If you enable the AI-powered Semantic search feature, this is the multi-region where your search data will be stored. When semantic search is enabled, Vertex AI is automatically provisioned within a Google Cloud region that resides within the selected multi-region. For example, if you choose US multi-region , Vertex AI could be provisioned in us-west1 , us-central1 , or any other valid region within the US multi-region .
Supported locations
The following table lists the Google Cloud regions where you can provision an API hub instance.
Americas
Region description
Region name
Details
Columbus
us-east5
Dallas
us-south1
Low CO 2
Iowa
us-central1
Low CO 2
Las Vegas
us-west4
Los Angeles
us-west2
Montreal
northamerica-northeast1
Low CO 2
Northern Virginia
us-east4
Oregon
us-west1
Low CO 2
Salt Lake City
us-west3
Santiago
southamerica-west1
Low CO 2
São Paulo
southamerica-east1
Low CO 2
South Carolina
us-east1
Toronto
northamerica-northeast2
Low CO 2
Europe
Region description
Region name
Details
Belgium
europe-west1
Low CO 2
Berlin
europe-west10
Finland
europe-north1
Low CO 2
Frankfurt
europe-west3
London
europe-west2
Madrid
europe-southwest1
Low CO 2
Milan
europe-west8
Netherlands
europe-west4
Low CO 2
Paris
europe-west9
Low CO 2
Turin
europe-west12
Warsaw
europe-central2
Zurich
europe-west6
Low CO 2
Asia-Pacific
Region description
Region name
Delhi
asia-south2
Hong Kong
asia-east2
Jakarta
asia-southeast2
Melbourne
australia-southeast2
Mumbai
asia-south1
Osaka
asia-northeast2
Seoul
asia-northeast3
Singapore
asia-southeast1
Sydney
australia-southeast1
Taiwan
asia-east1
Tokyo
asia-northeast1
Middle East
Region description
Region name
Dammam
me-central2
Doha
me-central1
Tel Aviv
me-west1
Africa
Region description
Region name
Johannesburg
africa-south1
Cloud Scheduler location fallbacks
API hub uses Cloud Scheduler for some of its features. Cloud Scheduler is not available in all Google Cloud locations. If you are provisioning API hub in one of the following locations, Cloud Scheduler will be provisioned in a different location as indicated in the table.
API hub location
Cloud Scheduler fallback location
Johannesburg ( africa-south1 )
Belgium ( europe-west1 )
Delhi ( asia-south2 )
Mumbai ( asia-south1 )
Melbourne ( australia-southeast2 )
Sydney ( australia-southeast1 )
Finland ( europe-north1 )
Warsaw ( europe-central2 )
Madrid ( europe-southwest1 )
Belgium ( europe-west1 )
Netherlands ( europe-west4 )
Belgium ( europe-west1 )
Milan ( europe-west8 )
Zurich ( europe-west6 )
Paris ( europe-west9 )
Belgium ( europe-west1 )
Berlin ( europe-west10 )
Frankfurt ( europe-west3 )
Turin ( europe-west12 )
Zurich europe-west6
Doha ( me-central1 )
Mumbai ( asia-south1 )
Dammam ( me-central2 )
Mumbai ( asia-south1 )
Tel Aviv ( me-west1 )
Frankfurt ( europe-west3 )
Toronto ( northamerica-northeast2 )
Montreal ( northamerica-northeast1 )
Santiago ( southamerica-west1 )
São Paulo ( southamerica-east1 )
Columbus ( us-east5 )
Northern Virginia ( us-east4 )
Dallas ( us-south1 )
Iowa ( us-central1 )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
