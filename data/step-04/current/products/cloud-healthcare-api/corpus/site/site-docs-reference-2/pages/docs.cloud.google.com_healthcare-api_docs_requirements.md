---
title: "Requirements \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/healthcare-api/docs/requirements
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/healthcare-api/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/healthcare-api/docs/requirements
  title: "Requirements \_|\_ Cloud Healthcare API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Industry solutions
Cloud Healthcare API
Resources
Send feedback
Requirements
Stay organized with collections
Save and categorize content based on your preferences.
This page lists Cloud Healthcare API requirements and related information.
Regions and versions
Cloud regions
Only these Google Cloud regions are available:
Regional locations
Region name
Region description
Americas
northamerica-northeast1
Montréal
northamerica-northeast2
Toronto
us-central1
Iowa
us-east1
South Carolina
us-east4
North Virginia
us-west1
Oregon
us-west2
Los Angeles
us-west3
Salt Lake City
southamerica-east1
São Paulo
Asia Pacific
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
asia-southeast1
Singapore
asia-southeast2
Jakarta
australia-southeast1
Sydney
australia-southeast2
Melbourne
Europe
europe-north1
Finland
europe-west2
London
europe-west3
Frankfurt
europe-west4
Netherlands
europe-west6
Zurich
Middle East
me-west1
Tel Aviv
me-central1
Doha
me-central2
Dammam
Multi-regional locations
Multi-region name
Multi-region description
us
Data centers in the United States
eu
Data centers in Europe
Google Cloud CLI
Cloud Healthcare API requires version 236.0.0 or higher of the
Google Cloud CLI .
Permitted characters and size requirements
Resources in the Cloud Healthcare API are limited to certain
characters and might be limited to certain lengths.
The following table lists the permitted characters and sizes for each
resource:
Resource
Limitations
Datasets and FHIR, DICOM, and HL7v2 store names
Permitted characters: Any string consisting of unicode numbers, unicode letters, ASCII underscores, dashes, and periods
Minimum length: 1 character
Maximum length: 256 characters
Requirements as a regular expression: [\p{L}\p{N}_-.]{1,256}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
