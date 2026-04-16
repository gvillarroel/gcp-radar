---
title: "Global and regional endpoints for Sensitive Data Protection \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/api-endpoints
knowledge_key: corpus
source_id: site-docs-reference-required-10
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/common-discovery-configurations
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/api-endpoints
  title: "Global and regional endpoints for Sensitive Data Protection \_|\_ Google\
    \ Cloud Documentation"
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
Global and regional endpoints for Sensitive Data Protection
Stay organized with collections
Save and categorize content based on your preferences.
This document describes the different types of API endpoints available with
Sensitive Data Protection. This document also provides points to consider
when deciding which
endpoint type to use in your Sensitive Data Protection requests. For general
information about the different types of API endpoints, see
Google Cloud API endpoint overview .
An API endpoint (or service endpoint ) is a base URL that specifies the network
address of a Google Cloud API service like Sensitive Data Protection.
Sensitive Data Protection has global and regional endpoints.
Global API endpoint
The global endpoint of Sensitive Data Protection is dlp.googleapis.com .
Globally scoped endpoints provide highly available service endpoints
that terminate the TLS session as close to the client as possible, which
minimizes latency when serving API calls from a dispersed client population
over the internet.
When you send a request to a global endpoint, you can specify the location where
you want to process the request.
Requests to a global endpoint with no location specified
If you don't specify a location in your request—or if you specify the
global region—then the request is processed in the global region. For
example, if you send a POST request to the following URL, the request is sent
to the global endpoint and processed in the global region.
https://dlp.googleapis.com/v2/projects/example-project/content:inspect
Requests to a global endpoint with a location specified
If you specify a location in your request to a global endpoint, the request
is sent to the global endpoint and processed in the region or multi-region that
you specified.
For example, if you send a POST request to the following
URL, the request is sent to the global endpoint and processed in the us-west1
region.
https://dlp.googleapis.com/v2/projects/example-project/locations/us-west1/content:inspect
There is no guarantee that the data in transit remains in the processing region
that you specified. If you aren't required to keep in-transit data within a
specific region, then calling the global endpoint in this manner is sufficient.
Regional API endpoints
Regional endpoints (REP) let you keep in-transit data within a specific
region. A regional endpoint specifies the location as a subdomain—for
example, dlp.us-west1.rep.googleapis.com .
A regional endpoint for Sensitive Data Protection follows this format:
dlp. REP_REGION .rep.googleapis.com
Replace REP_REGION with a regional endpoint available
for Sensitive Data Protection .
Regional endpoints terminate TLS sessions in the location specified by the
endpoint for requests received from the public internet or from private
connectivity.
Regional endpoints guarantee data
residency by ensuring that your data at
rest, in use, and in transit isn't moved out of the location specified by the
endpoint. This guarantee excludes Service Data. For more information, see
Note on Customer Data and Service
Data .
Choose between the global and regional endpoints
Consider the following when choosing between global and regional endpoints:
If your organization is required to keep data at rest, in use, and in transit
within a specific region, then you must use regional endpoints. If you aren't
required to keep in-transit data within a specific region, then you can use
global endpoints.
Regional endpoints are supported by a limited number of locations. For a full
list of regions and multi-regions where Sensitive Data Protection is
available, see Sensitive Data Protection
locations .
Sensitive Data Protection has separate sets of
quotas for the following:
Requests to the global endpoint with no location specified (processed in
the global region)
Requests to the global endpoint where a processing location is specified
(processed in the specified region)
Requests to regional endpoints
The quotas for regional endpoints are lower than the quotas for the other two.
If your client application is configured to use global endpoints and you want
to start using regional endpoints, you need to configure your client
application to specify the REP-supported region or multi-region in the
subdomain and the path of each hostname that you use in your requests. For
more information, see Specify a region in a request to a regional
endpoint .
Restrict global API endpoint usage
To help enforce the use of regional endpoints, use the
constraints/gcp.restrictEndpointUsage organization policy constraint to block
requests to the global API endpoint. For more information, see
Restrict endpoint usage in
the Assured Workloads documentation.
What's next
Refer to a list of locations where Sensitive Data Protection is
available .
Learn how to specify a location in your
request .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
