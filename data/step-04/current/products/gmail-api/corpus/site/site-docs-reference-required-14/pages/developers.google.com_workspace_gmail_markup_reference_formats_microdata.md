---
title: "Microdata \_|\_ Gmail \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/markup/reference/formats/microdata
knowledge_key: corpus
source_id: site-docs-reference-required-14
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/markup/reference/one-click-action
source_metadata:
  url: https://developers.google.com/workspace/gmail/markup/reference/formats/microdata
  title: "Microdata \_|\_ Gmail \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Gmail
Reference
Send feedback
Microdata
Stay organized with collections
Save and categorize content based on your preferences.
Microdata
is a specification to embed machine-readable data in HTML documents. Microdata consists of name-value pairs (known as items ) defined according to a vocabulary. A collection of commonly used markup vocabularies are provided by schema.org .
The basic syntax includes the itemscope attribute to define an item and the itemprop attribute to describe one of the item's properties. Types are specified using the itemtype attribute and can assume values defined in the vocabulary of choice. For instance, schema.org defines types such as http://schema.org/Person or http://schema.org/PostalAddress .
The following example (from Wikipedia ) shows how to use microdata to describe a person:
< section itemscope itemtype = "http://schema.org/Person" >
Hello , my name is
< span itemprop = "name" > John Doe < / span > ,
I am a
< span itemprop = "jobTitle" > Graduate research assistant < / span >
at the
< span itemprop = "affiliation" > University of Dreams < / span >
My friends call me
< span itemprop = "additionalName" > Johnny < / span >
You can visit my homepage at
< a href = "http://www.example.com.com" itemprop = "url" > www . example . com < / a >
< section itemprop = "address" itemscope itemtype = "http://schema.org/PostalAddress" >
I live at
< span itemprop = "streetAddress" > 1234 Peach Drive < / span >
< span itemprop = "addressLocality" > Warner Robins < / span >
< span itemprop = "addressRegion" > Georgia < / span > .
< / section >
< / section >
Check the Schema Validator tool to debug your markup and validate it against the supported schema.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
