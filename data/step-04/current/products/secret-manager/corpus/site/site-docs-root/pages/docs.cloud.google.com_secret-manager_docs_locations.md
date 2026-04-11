---
title: "Secret Manager locations \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secret-manager/docs/locations
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/secret-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/secret-manager/docs/locations
  title: "Secret Manager locations \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Secret Manager
Resources
Send feedback
Secret Manager locations
Stay organized with collections
Save and categorize content based on your preferences.
Secret Manager resources can be created in one of many locations. For
more information about locations within Google Cloud, see
Geography and regions .
Secret Manager does not support zones, dual-regional locations, or
multi-regional locations.
How locations work in Secret Manager
Secrets and secret versions can be accessed globally across Google Cloud.
A secret's replication policy determines where the secret and its versions are
stored in Google Cloud.
Secrets that use the automatic replication policy are replicated without
restriction. Automatic replication is recommended for most users.
If you need more control over the locations where a secret is stored, you can
choose the user-managed replication policy. With user-managed replication, you
select one or more geographic locations where the secret will be replicated. For
specific instructions, see
Creating secrets .
For more information about availability of Secret Manager resources,
refer to the service-level agreement SLA .
Regional endpoints for Secret Manager
If your data is subject to data residency zone (DRZ) regulations or other compliance
requirements, create and store your Secret Manager resources in
a Google Cloud location that supports regional endpoints.
Regional endpoints are request endpoints that only allow requests to proceed
if the affected resource exists in the location specified by the endpoint. For
example, when you use the endpoint https://secretmanager.me-central2.rep.googleapis.com
in a delete secret request, the request only proceeds if the secret is located in
ME-CENTRAL2 . Regional endpoints ensure that your data at rest and in transit
remains in a specific Google Cloud location. To enforce the use of regional
endpoints, you can set an organization policy. Learn more in Restricting
endpoint usage . For
information about creating regional secrets, see Create regional
secrets .
Parameter Manager regional endpoint locations
Parameter Manager is
an extension to the Secret Manager service that lets you create, store,
and manage your application parameters. You can create Parameter Manager
resources in a
global
location, a multi-regional location, or
in a specific data location with the help of a regional endpoint .
The following table lists the regions
or specific geographical locations where you can access the Secret Manager
global service. Additionally, it identifies the locations where the regionalized
Secret Manager and Parameter Manager services are available.
Locations in Asia Pacific
The following table lists the locations in Asia Pacific where
Secret Manager and Parameter Manager resources can be stored.
Region
Regional Secret Manager
Parameter Manager
asia-south2 (Delhi)
Yes
Yes
asia-east2 (Hong Kong)
Yes
Yes
asia-southeast2 (Jakarta)
Yes
No
australia-southeast2 (Melbourne)
Yes
Yes
asia-south1 (Mumbai)
Yes
Yes
asia-northeast2 (Osaka)
Yes
Yes
asia-northeast3 (Seoul)
Yes
Yes
asia-southeast1 (Singapore)
Yes
No
australia-southeast1 (Sydney)
Yes
Yes
asia-east1 (Taiwan)
Yes
Yes
asia-northeast1 (Tokyo)
Yes
Yes
asia-southeast3 (Bangkok)
Yes
No
Locations in Europe
The following table lists the locations in Europe where Secret Manager
and Parameter Manager resources can be stored.
Region
Regional Secret Manager
Parameter Manager
europe-west1 (Belgium)
Yes
Yes
europe-west10 (Berlin)
Yes
No
europe-north1 (Finland)
No
No
europe-north2 (Stockholm)
Yes
No
europe-west3 (Frankfurt)
Yes
Yes
europe-west2 (London)
Yes
Yes
europe-southwest1 (Madrid)
Yes
Yes
europe-west8 (Milan)
Yes
Yes
europe-west4 (Netherlands)
Yes
Yes
europe-west12 (Turin)
Yes
No
europe-west9 (Paris)
Yes
Yes
europe-central2 (Warsaw)
Yes
Yes
europe-west6 (Zurich)
Yes
Yes
Locations in North America
The following table lists the locations in North America where
Secret Manager and Parameter Manager resources can be stored.
Region
Regional Secret Manager
Parameter Manager
us-central1 (Iowa)
Yes
Yes
us-west4 (Las Vegas)
Yes
Yes
us-west2 (Los Angeles)
Yes
Yes
northamerica-south1 (Mexico)
Yes
Yes
northamerica-northeast1 (Montréal)
Yes
Yes
us-east4 (Northern Virginia)
Yes
Yes
us-west1 (Oregon)
Yes
Yes
us-west3 (Salt Lake City)
Yes
Yes
us-east1 (South Carolina)
Yes
Yes
northamerica-northeast2 (Toronto)
Yes
Yes
us-east5 (Columbus)
Yes
Yes
us-south1 (Dallas)
Yes
Yes
Locations in South America
The following table lists the locations in South America where
Secret Manager resources can be stored.
Region
Regional Secret Manager
Parameter Manager
southamerica-east1 (São Paulo)
Yes
Yes
southamerica-west1 (Santiago)
Yes
Yes
Locations in Middle East
The following table lists the locations in the Middle East where
Secret Manager and Parameter Manager resources can be stored.
Region
Regional Secret Manager
Parameter Manager
me-central2 (Dammam)
Yes
No
me-central1 (Doha)
Yes
Yes
me-west1 (Tel Aviv)
Yes
Yes
Locations in Africa
The following table lists the locations in Africa where
Secret Manager resources can be stored.
Region
Regional Secret Manager
Parameter Manager
africa-south1 (Johannesburg)
Yes
Yes
Available multi-regions
Multi-region location data centers are spread across a general
geographical area. For example, a resource created in the europe multi-region
is stored in multiple data centers within the European Union. You cannot
configure the selected data centers or their location within the multi-region.
Multi-Region Name
Multi-Region Description
Regional Secret Manager
Parameter Manager
us
Data centers in the United States
No
Yes
eu
Data centers in the European Union
No
Yes
What's next
Learn more about locations
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
