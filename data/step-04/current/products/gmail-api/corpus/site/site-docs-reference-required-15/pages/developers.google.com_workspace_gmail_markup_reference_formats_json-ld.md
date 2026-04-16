---
title: "JSON-LD \_|\_ Gmail \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/markup/reference/formats/json-ld
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/markup/reference/go-to-action
source_metadata:
  url: https://developers.google.com/workspace/gmail/markup/reference/formats/json-ld
  title: "JSON-LD \_|\_ Gmail \_|\_ Google for Developers"
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
JSON-LD
Stay organized with collections
Save and categorize content based on your preferences.
JSON-LD is an easy-to-use JSON-based linked data format that defines the concept of context to specify the vocabulary for types and properties. Gmail supports JSON-LD data embedded in HTML documents with the @context of schema.org , as in the following example:
< script type = "application/ld+json" >
{
"@context" : "http://schema.org" ,
"@type" : "Person" ,
"name" : "John Doe" ,
"jobTitle" : "Graduate research assistant" ,
"affiliation" : "University of Dreams" ,
"additionalName" : "Johnny" ,
"url" : "http://www.example.com" ,
"address" : {
"@type" : "PostalAddress" ,
"streetAddress" : "1234 Peach Drive" ,
"addressLocality" : "Wonderland" ,
"addressRegion" : "Georgia"
}
}
< / script >
Note: the @type key is a reserved key name and should contain either a full type URI or a URI fragment (in which case a http://schema.org/ prefix, derived from the supplied data-context attribute, is assumed).
The full specifications and requirements for the JSON-LD syntax are available on json-ld.org , and you can also use our Schema Validator tool to try out JSON-LD and debug your markup.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
