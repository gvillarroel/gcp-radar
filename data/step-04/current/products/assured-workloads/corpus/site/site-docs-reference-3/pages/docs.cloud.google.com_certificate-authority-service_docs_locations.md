---
title: "Locations \_|\_ Certificate Authority Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/certificate-authority-service/docs/locations
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-authority-service/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/certificate-authority-service/docs/locations
  title: "Locations \_|\_ Certificate Authority Service \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Certificate Authority Service
Resources
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Locations
Within a project, you can create certificates, certificate authorities (CAs),
and CA pools in one of many locations . These locations
represent the geographical regions where a Certificate Authority Service
(CA Service) resource is stored and can be accessed. The location
of a CA pool impacts the latency of applications that use that resource.
You can create CA Service resources in several different locations
in Google Cloud, depending on your availability requirements. For specific
information about each location, see Locations .
For information on how to select a location, see Choosing the best type of location .
Asia Pacific
The following table lists the regions in Asia Pacific where
CA Service resources can be stored.
Region
Region description
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
asia-southeast3
Bangkok
australia-southeast1
Sydney
australia-southeast2
Melbourne
Europe
The following table lists the regions in Europe where CA Service
resources can be stored.
Region
Region description
europe-central2
Warsaw
europe-north1
Finland
europe-north2
Stockholm
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
Middle East
The following table lists the regions in the Middle East where
CA Service resources can be stored.
Region
Region description
me-central1
Doha
me-central2
Dammam
me-west1
Tel Aviv
Americas
The following table lists the Americas regions where
CA Service resources can be stored.
Region
Region description
northamerica-northeast1
Montréal
northamerica-northeast2
Toronto
northamerica-south1
Mexico
southamerica-east1
São Paulo
southamerica-west1
Santiago
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
Africa
The following table lists the regions in Africa where
CA Service resources can be stored.
Region
Region description
africa-south1
Johannesburg
Determining available regions
You can also check the list of supported locations by running the following gcloud command.
gcloud privateca locations list
Choosing the best type of location
The location of your CA pools is an important aspect of your application's design. As a rule, design your application so that all of its components are
geographically near each other and near your application's clients. You cannot move or export a CA pool after it has been created.
What's next
See all the Google Cloud locations .
Learn more about Geography and regions in Google Cloud.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
