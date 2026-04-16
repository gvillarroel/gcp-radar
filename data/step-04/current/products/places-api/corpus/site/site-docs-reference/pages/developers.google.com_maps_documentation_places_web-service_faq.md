---
title: "Places Web Service Frequently Asked Questions \_|\_ Places API \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/faq
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/faq
  title: "Places Web Service Frequently Asked Questions \_|\_ Places API \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Web Services
Places API
Resources
Send feedback
Places Web Service Frequently Asked Questions
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This document provides answers to common questions about the Places API, covering topics like searching, place data, and troubleshooting.
Place results are sorted by prominence within a radius by default, but you can sort by distance instead; also, some places may be uncategorized or ranked too low to appear in results.
You can manage business listings using Business Profile, suggest edits for places you don't own, and understand potential reasons for "REQUEST_DENIED" errors.
The Places API returns nearby establishments and up to two location results, with location type filtering potentially removing establishment results from the response.
This document contains answers to frequently asked questions about the
Places API. If you are unable to find the answer to your question here, you
may find some of the following pages helpful.
Google Maps Developer FAQ
Google Maps Platform Terms of Service
Places API Developer Policies
The Places API also has a vibrant developer community. If you have questions
about your code, we recommend that you post your question to the community. More
information about asking questions can be found in the Support page .
Search for places
Why are some places not returned when I filter by type?
It's possible that the place you are looking for has not yet been categorized.
All places are categorized as the generic type " establishment " until Google
has enough data about a place to categorize it as one of the supported place
types .
As a workaround you can pass the place type to the keyword parameter. The
keyword parameter is matched to: name, type, address, and customer reviews.
If you would like to add the category type to a place listing yourself,
submit a place edit . Once the edit has been
approved and published it will appear using the correct type filtering.
Why are some nearby places not returned?
By default, the Places API sorts results by prominence within the supplied
radius . A Nearby Search request can return up to 60 results,
split across three pages. If a place ranks 22nd in prominence , it will appear
on the second page of results which you can access through
paging .
If a placeranks greater than 60th in prominence it won't be included in the
search result, even if it is closer to the center of your search.
You can sort your results by distance instead of prominence by setting the
rankby parameter in your query to distance and omitting the radius
parameter. Relevance will be ignored and places will be returned in order of
distance from location .
If you are filtering your request by type, some results may be filtered out of
the response. For more information, see the FAQ entry: Why are some places not
returned when I filter by
type? .
Why do I receive at most two results when filtering by some types ?
The Places API is designed to return a list of nearby establishments
(anything from the
first table
in the supported place types) and up to two location (anything from the
second table
of supported place types) results to to help identify the area you are
performing a Nearby Search request for.
Filtering your Nearby Search request by a location type , like
locality or political , will filter out the establishment results.
Place data
How can I add or edit places?
If you are the owner of a business, you can add, verify and manage your business
listings on Google Maps using Business Profile .
If you don't own the place, you can still suggest
changes .
Troubleshooting
Why do I keep receiving "status": "REQUEST_DENIED"?
The "status": "REQUEST_DENIED" is returned by the Places API
when:
You have not activated the Places API in the Google Cloud console .
The key parameter is missing from your request.
The key parameter does not match the your API key in the Google Cloud console .
Your API key has not been correctly set up in the Google Cloud console :
If you are using a browser-restricted API key, check that your allowed
referer(s) are correct.
If you are using a server-restricted API key, check that your allowed
IP(s) are correct.
API keys with Android or iOS restrictions are not supported. Use a
generic (unrestricted) API key, or a key with browser or server
restrictions.
The request was not sent as an HTTPS request, HTTPS is required for all
Places API requests.
The incorrect HTTP method was used to send the request.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["The Places API categorizes new places as \"establishment\" until it gathers sufficient data. To find uncategorized places, use the `keyword` parameter. Nearby searches prioritize results by `prominence`, with up to 60 results across three pages, but can be sorted by `distance` using `rankby`. Filtering by location `types` limits results to locations. To add or edit places, owners use Business Profile, while others can suggest changes. \"REQUEST_DENIED\" errors occur due to API key issues, incorrect request methods, or non-HTTPS requests.\n"]]
