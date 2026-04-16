---
title: "Sensitive Data Protection locations \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/locations
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/locations
  title: "Sensitive Data Protection locations \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Data Loss Prevention (Cloud DLP) is now a part of Sensitive Data Protection. The API name remains the same: Cloud Data Loss Prevention API (DLP API). For information about the services that make up Sensitive Data Protection, see Sensitive Data Protection overview .
Home
Documentation
Security
Sensitive Data Protection
Guides
Send feedback
Sensitive Data Protection locations
Stay organized with collections
Save and categorize content based on your preferences.
Sensitive Data Protection is available in the following regions and multi-regions.
For more information about regions and zones, see Geography and
regions .
To learn how to specify a region or multi-region for Sensitive Data Protection to
process your data in, see Specifying processing
locations .
Regional endpoints
If you are required to keep in-transit data within a specific location, use a
region or multi-region that supports regional endpoints (REP). In the tables on
this page, support for regional endpoints is indicated in columns with the REP
support heading.
For more information, see Global and regional endpoints for
Sensitive Data Protection .
Available locations
The following sections list the Sensitive Data Protection locations available for
processing your data.
Note: All Sensitive Data Protection features are accessible globally. That is, you
can always access all Sensitive Data Protection features without specifying a
region.
Africa
The following table lists the regions in Africa where Sensitive Data Protection is
available.
Region name
Region description
REP support
africa-south1
Johannesburg
Yes
Americas
The following table lists the regions in the Americas where
Sensitive Data Protection is available.
Region name
Region description
REP support
northamerica-northeast1
Montréal
Yes
northamerica-northeast2
Toronto
Yes
northamerica-south1
Mexico
Yes
us-central1
Iowa
Yes
us-east1
South Carolina
Yes
us-east4
Northern Virginia
Yes
us-east5
Columbus
Yes
us-south1
Dallas
Yes
us-west1
Oregon
Yes
us-west2
Los Angeles
Yes
us-west3
Salt Lake City
Yes
us-west4
Las Vegas
Yes
southamerica-east1
São Paulo
Yes
southamerica-west1
Santiago
Yes
Asia Pacific
The following table lists the regions in Asia Pacific where
Sensitive Data Protection is available.
Region name
Region description
REP support
asia-east1
Taiwan
Yes
asia-east2
Hong Kong
Yes
asia-northeast1
Tokyo
Yes
asia-northeast2
Osaka
Yes
asia-northeast3
Seoul
Yes
asia-south1
Mumbai
Yes
asia-south2
Delhi
Yes
asia-southeast1
Singapore
Yes
asia-southeast2
Jakarta
Yes
asia-southeast3
Bangkok
Yes
australia-southeast1
Sydney
Yes
australia-southeast2
Melbourne
Yes
Europe
The following table lists the regions in Europe where
Sensitive Data Protection is available.
Region name
Region description
REP support
europe-central2
Warsaw
Yes
europe-north1
Finland
Yes
europe-north2
Stockholm
Yes
europe-southwest1
Madrid
Yes
europe-west1
Belgium
Yes
europe-west2
London
Yes
europe-west3
Frankfurt
Yes
europe-west4
Netherlands
Yes
europe-west6
Zürich
Yes
europe-west8
Milan
Yes
europe-west9
Paris
Yes
europe-west10
Berlin
Yes
europe-west12
Turin
Yes
Middle East
The following table lists the regions in the Middle East where
Sensitive Data Protection is available.
Region name
Region description
REP support
me-central1
Doha
Yes
me-central2
Dammam
Yes
me-west1
Tel Aviv
Yes
Multi-regions
Multi-region name
Multi-region description
REP support
asia
Data centers in Asia
No
europe
Data centers within
member
states of the European Union 1 . For the REP endpoint, use
eu .
Yes
in
Data centers in India
Yes
us
Data centers in the United States
Yes
1 Data sent to the europe multi-region is not processed in the
europe-west2 (London) or europe-west6 (Zürich) regions.
Locations that support image scanning
Image inspection and
redaction are supported
only in the following locations:
global
asia
europe
us
If you attempt to inspect images or documents that contain images in a
region that doesn't support image scanning, Sensitive Data Protection scans
those files as binary files. The following alternative options are available:
In inspection operations, you can configure your scan job to skip these files
by enabling sampling .
In discovery operations, you can set a fallback location for processing
images and documents.
Locations that support storage inspection
The storage inspection
feature works with various Google Cloud storage services. However, support
in a specific region depends on the availability of the particular storage
service that you want to inspect. For example, if a storage service like
BigQuery is not available in a certain region, then you can't
use Sensitive Data Protection to inspect data within BigQuery in
that region.
What's next
Learn more about geography and zones .
Learn how to specify a region or multi-region for Sensitive Data Protection
to process your data in, see Specifying processing
locations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
