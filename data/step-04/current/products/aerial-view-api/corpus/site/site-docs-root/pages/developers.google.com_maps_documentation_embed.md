---
title: "The Maps Embed API overview \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/embed
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/aerial-view
source_metadata:
  url: https://developers.google.com/maps/documentation/embed
  title: "The Maps Embed API overview \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Web
Maps Embed API
Guides
Send feedback
The Maps Embed API overview
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Easily embed interactive maps and Street View panoramas on your web page using the Maps Embed API with a simple HTTP request.
Configure the src attribute of an iframe with a URL containing parameters like place name, address, or Place ID to specify the map location.
The Maps Embed API is free to use with unlimited usage, offering a quick and straightforward way to integrate Google Maps content.
Get started quickly with an iframe generator, set up your Google Cloud project for development, or explore detailed documentation on embedding maps.
Place an interactive map or Street View panorama on your web page with
Maps Embed API. Use a simple HTTP request; no JavaScript required.
Note: Street View imagery comes
from two sources : Google (non-public developer-controlled imagery), and the public
(UGC, or public user-generated content). Note that there is no way to use only one source of Street
View imagery over the other. Learn more about our
Street view imagery privacy policy .
You can set the Maps Embed API URL as the src attribute of an
iframe. When configuring a src property, the required q parameter can support a URL-escaped place name, address, plus code, or Place ID :
<iframe
width="600"
height="450"
style="border:0"
loading="lazy"
allowfullscreen
referrerpolicy="no-referrer-when-downgrade"
src="https://www.google.com/maps/embed/v1/place?key= API_KEY
&q=Space+Needle,Seattle+WA">
</iframe>
Note: All Maps Embed API requests are available at no charge with
unlimited usage. For more information, see Usage and Billing .
Getting started
Use an automatic iframe generator to embed a map into your webpage:
Go to Quickstart
Start developing with the Maps Embed API by setting up your
Google Cloud project:
Set up in Cloud console
For an index of all the possible parameters for the Maps Embed API request, see the Embedding a map guide:
Go to Embedding a map
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
