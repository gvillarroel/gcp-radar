---
title: "Enrichment \_|\_ Document AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/document-ai/docs/enrichment
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/document-ai/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/document-ai/docs/enrichment
  title: "Enrichment \_|\_ Document AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Document AI
Guides
Send feedback
Enrichment
Stay organized with collections
Save and categorize content based on your preferences.
Document AI uses Enterprise Knowledge Graph to normalize and
enrich entity extraction results (for supported fields). For example, the addresses
123 Main St Apt 1 and 123 Main street # 1 could be normalized to the same
standardized address.
For each supported field, Document AI also returns a normalizedValue
in addition to the raw extracted field, normalizing the literal text.
This contains the data in a standardized format to reduce post-processing.
Most data belongs to one of the following categories:
Money
Date
Timestamp
Address
Boolean
Integer
Float
Sample response
The enriched values can be found in the
entities.normalizedValue
field as shown in the following truncated sample:
{
"entities" : [
{
"textAnchor" : {
"textSegments" : [ ... ],
"content" : "Google Singapore"
},
"type" : "employer_name" ,
"mentionText" : "Google Singapore" ,
"confidence" : 0.69933707 ,
"pageAnchor" : {
"pageRefs" : [
{
"boundingPoly" : {
"normalizedVertices" : [ ... ]
}
}
]
},
"id" : "9" ,
"normalizedValue" : {
"text" : "Google Asia Pacific, Singapore"
}
}
]
}
In the sample, the original employer_name "Google Singapore" has been
normalized to "Google Asia Pacific, Singapore".
In the Google Cloud console, the enriched and normalized fields are annotated with G . For example:
Sample normalized field shown in the web application.
Supported processors
Here are the processors and fields that support entity enrichment.
Note: Enriched fields are subject to change with new processor versions. Follow
the Release notes for Document AI updates.
Processors
Enriched fields
Bank Statement Parser
Category
Pretrained
Solution type
Lending
Functions
OCR, Entity Extraction
Release stage
General availability
Access status
Public
lock_open
Full processor details
Detailed entry
bank_address
bank_name
W2 Parser
Category
Pretrained
Solution type
Lending
Functions
OCR, Entity Extraction
Release stage
General availability
Access status
Public
lock_open
Full processor details
Detailed entry
EmployerNameAndAddress
EIN
Pay Slip Parser
Category
Pretrained
Solution type
Lending
Functions
OCR, Entity Extraction
Release stage
General availability
Access status
Public
lock_open
Full processor details
Detailed entry
employer_address
employer_name
Expense Parser
Category
Pretrained
Solution type
Procurement
Functions
OCR, Entity Extraction
Release stage
General availability
Access status
Public
lock_open
Full processor details
Detailed entry
supplier_address
supplier_name
supplier_phone
Invoice Parser
Category
Pretrained
Solution type
Procurement
Functions
OCR, Entity Extraction
Release stage
General availability
Access status
Public
lock_open
Full processor details
Detailed entry
supplier_address
supplier_name
supplier_phone
Previous
arrow_back
Setup
Next
Normalization
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
