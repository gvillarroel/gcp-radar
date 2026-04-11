---
title: "Batch locations \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/batch/docs/locations
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/batch/docs
source_metadata:
  url: https://docs.cloud.google.com/batch/docs/locations
  title: "Batch locations \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Batch
Resources
Send feedback
Batch locations
Stay organized with collections
Save and categorize content based on your preferences.
Batch is available in the following regions. For more
information about regions and zones, see
Geography and regions .
Important: Only the following regions can be used for a job's location,
which is used for storing job metadata. However, you can create the VMs that
run your Batch job in
any location with the Compute Engine resources
by specifying the job's
allowed locations for VMs .
Otherwise, if you omit the allowedLocations[] field, the VMs that run
a job are created in the job's location.
To identify an existing job's location and the allowed locations for its VMs,
view the details of a job .
Regions
The following table lists the regions in the Americas where
Batch is available.
Region description
Region name
Details
Montréal
northamerica-northeast1
Low CO 2
Toronto
northamerica-northeast2
Low CO 2
São Paulo
southamerica-east1
Low CO 2
Santiago
southamerica-west1
Low CO 2
Iowa
us-central1
Low CO 2
South Carolina
us-east1
Northern Virginia
us-east4
Columbus
us-east5
Dallas
us-south1
Low CO 2
Oregon
us-west1
Low CO 2
Los Angeles
us-west2
Salt Lake City
us-west3
Las Vegas
us-west4
The following table lists the regions in Europe and the Middle East where
Batch is available.
Region description
Region name
Details
Warsaw
europe-central2
Finland
europe-north1
Low CO 2
Madrid
europe-southwest1
Low CO 2
Belgium
europe-west1
Low CO 2
London
europe-west2
Low CO 2
Frankfurt
europe-west3
Netherlands
europe-west4
Low CO 2
Zürich
europe-west6
Low CO 2
Milan
europe-west8
Paris
europe-west9
Low CO 2
Berlin
europe-west10
Turin
europe-west12
Doha
me-central1
Dammam
me-central2
Tel Aviv
me-west1
The following table lists the regions in Asia Pacific where
Batch is available.
Region description
Region name
Details
Taiwan
asia-east1
Hong Kong
asia-east2
Tokyo
asia-northeast1
Osaka
asia-northeast2
Seoul
asia-northeast3
Mumbai
asia-south1
Delhi
asia-south2
Singapore
asia-southeast1
Jakarta
asia-southeast2
Sydney
australia-southeast1
Melbourne
australia-southeast2
Recommended zones to obtain GPUs from Dynamic Workload Scheduler
When you create and run a job that uses GPUs
and use calendar-mode reservations ( Preview )
or Flex-start VMs ( Preview ),
which both use Dynamic Workload Scheduler, we recommend that you use the following zones.
These recommended zones have dedicated capacity for Dynamic Workload Scheduler, so using them
increases the likelihood that your requests for GPU machine type from
Dynamic Workload Scheduler are approved.
A4
A3 Ultra
A3 Mega
A3 High
GPU machine series
Recommended zones for Dynamic Workload Scheduler capacity
Details
A4
asia-southeast1-b (Singapore)
us-central1-b (Iowa)
Low CO 2
us-south1-b (Dallas)
Low CO 2
A3 Ultra
asia-south1-b (Mumbai)
asia-south2-c (Delhi)
europe-west1-b (Belgium)
Low CO 2
europe-west4-a (Netherlands)
Low CO 2
us-central1-b (Iowa)
Low CO 2
us-east4-b (Northern Virginia)
us-south1-b (Dallas)
Low CO 2
A3 Mega
europe-west1-c (Belgium)
Low CO 2
europe-west4-b (Netherlands)
Low CO 2
europe-west4-c (Netherlands)
Low CO 2
us-central1-a (Iowa)
Low CO 2
us-central1-b (Iowa)
Low CO 2
us-central1-c (Iowa)
Low CO 2
us-east4-b (Northern Virginia)
A3 High
asia-east1-c (Taiwan)
europe-west1-b (Belgium)
Low CO 2
us-central1-a (Iowa)
Low CO 2
us-central1-b (Iowa)
Low CO 2
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
