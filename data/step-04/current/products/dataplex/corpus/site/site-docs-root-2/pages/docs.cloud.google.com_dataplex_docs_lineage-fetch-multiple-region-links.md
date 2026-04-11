---
title: "Fetch lineage links from multiple regions \_|\_ Knowledge Catalog \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/lineage-fetch-multiple-region-links
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs/introduction
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/lineage-fetch-multiple-region-links
  title: "Fetch lineage links from multiple regions \_|\_ Knowledge Catalog \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

As of April 10, 2026, Dataplex Universal Catalog is now called Knowledge Catalog. The API, client library, CLI, and IAM names remain unchanged.
Home
Documentation
Data analytics
Knowledge Catalog
Guides
Send feedback
Fetch lineage links from multiple regions
Stay organized with collections
Save and categorize content based on your preferences.
Fetch data lineage links across multiple Google Cloud regions using
a fan-out approach. You use the Data Lineage API to retrieve and aggregate
lineage data from all available regions. This is useful when your data assets are
distributed across different locations and you need a unified view of their
lineage.
Procedure
The procedure makes parallel requests to the projects.locations.searchLinks
endpoint in each region. You collect results, handle pagination across regions,
and aggregate the found links. Manage a regionalPageToken to ensure consistent
pagination for subsequent calls, accounting for unreachable regions.
The following pseudocode outlines a procedure you can follow using
the Data Lineage API to fetch data lineage links
from all available regions.
Input setup:
linksToFetch = 5 (number of links to fetch from all regions)
regionalPageToken = "" (last received regional page token used for pagination)
Create:
list of all regions to fan-out called regions .
list of unreachable regions called unreachable .
an empty list of found links called foundLinks .
an empty variable nextPageToken and nextRegionalPageToken .
an empty variable lastRegion .
an empty variable lastRegionLinksCount .
Sort regions alphabetically.
Parse regionalPageToken
If it is empty then continue to step 5
If it is not empty then
parse regionalPageToken by splitting it by first dot into two segments
filter out regions by taking only the ones that are after (in alphabetical order) the first segment from parsed regionalPageToken .
store the second segment aside to use it in all projects.locations.searchLinks calls.
Make a call to projects.locations.searchLinks
in each region in the regions list in parallel.
Wait for all requests to complete.
Filter out successful responses and store failed region names in the unreachable list.
For each of the responses (starting with first region in alphabetical order)
if no links were returned along with a non empty page token
store region name in lastRegion .
save received pageToken in nextPageToken .
ignore the remaining responses.
otherwise
store region name in lastRegion .
save received links in foundLinks (up to linksToFetch ).
save received pageToken in nextPageToken .
store number of taken links from the response in lastRegionLinksCount .
if foundLinks is less than linksToFetch
continue the pseudocode with the next received response in the alphabetical order.
if foundLinks equals linksToFetch
make another request to projects.locations.searchLinks
endpoint in the same region but set the pageSize parameter to the value of lastRegionLinksCount .
store received pageToken in nextPageToken .
continue to step 9
Prepend nextPageToken with the lastRegion (i.e. [region].[receivedNextPageToken] ) to create nextRegionalPageToken to handle pagination in consecutive calls.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
