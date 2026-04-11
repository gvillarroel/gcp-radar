---
title: "Infrastructure Manager locations \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/infrastructure-manager/docs/locations
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/infrastructure-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/infrastructure-manager/docs/locations
  title: "Infrastructure Manager locations \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Infrastructure as code
Infrastructure Manager
Resources
Send feedback
Infrastructure Manager locations
Stay organized with collections
Save and categorize content based on your preferences.
Infrastructure Manager can deploy Google Cloud resources to any
region or zone where those
resources are available. For example, see
Cloud Run locations for the list of locations
where Cloud Run is available.
The resource's deployment location is specified when you create a deployment
using Google Cloud console , in the Terraform configuration
directly, or as a variable that can be set as part of the
gcloud CLI create a deployment command .
If you use a storage bucket to store the Terraform configuration, this storage
bucket can be in any bucket location. For more details see
Bucket locations .
The Infra Manager service is available in the following regions. These
regions are where Infra Manager runs the
Cloud Build jobs and where it creates a storage bucket and stores
generated artifacts and logs.
Note: Depending on usage, projects can be restricted to certain regions
for Cloud Build . Due to Infra Manager dependencies
on Cloud Build, regions restricted for Cloud Build are also restricted
for Infra Manager.
For more information about regions and
zones, see Geography and regions .
Regions
Infra Manager is available in the following
regions. For more information about regions and
zones, see Geography and regions .
Asia Pacific
The following table lists the available regions in Asia Pacific.
Region description
Region name
Tokyo, Japan
asia-northeast1
Osaka, Japan
asia-northeast2
Seoul, South Korea
asia-northeast3
Taiwan
asia-east1
Hong Kong
asia-east2
Mumbai, India
asia-south1
Delhi, India
asia-south2
Singapore
asia-southeast1
Jakarta, Indonesia
asia-southeast2
Sydney, Australia
australia-southeast1
Melbourne, Australia
australia-southeast2
Europe
The following table lists the available regions in Europe.
Region description
Region name
Hamina, Finland
europe-north1
Stockholm, Sweden
europe-north2
Warsaw, Poland
europe-central2
St. Ghislain, Belgium
europe-west1
London, England
europe-west2
Frankfurt, Germany
europe-west3
Milan, Italy
europe-west8
Paris, France
europe-west9
Berlin, Germany
europe-west10
Turin, Italy
europe-west12
Eemshaven, Netherlands
europe-west4
Zurich, Switzerland
europe-west6
Madrid, Spain
europe-southwest1
Americas
The following table lists the available regions in the Americas.
Region description
Region name
Moncks Corner, South Carolina
us-east1
Columbus, Ohio
us-east5
Ashburn, Virginia
us-east4
The Dalles, Oregon
us-west1
Los Angeles, California
us-west2
Salt Lake City, Utah
us-west3
Las Vegas, Nevada
us-west4
Council Bluffs, Iowa
us-central1
Dallas, Texas
us-south1
Montréal, Canada
northamerica-northeast1
Toronto, Canada
northamerica-northeast2
Queretaro, Mexico
northamerica-south1
São Paulo, Brazil
southamerica-east1
Santiago, Chile
southamerica-west1
Middle-East and Africa
The following table lists the available regions in the Middle-East and Africa.
Region description
Region name
Johannesburg, South Africa
africa-south1
Doha, Qatar
me-central1
Dammam, Saudi Arabia
me-central2
Tel Aviv, Israel
me-west1
What's next
Learn more about
Geography and regions in Google Cloud.
See the full list of
Cloud locations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
