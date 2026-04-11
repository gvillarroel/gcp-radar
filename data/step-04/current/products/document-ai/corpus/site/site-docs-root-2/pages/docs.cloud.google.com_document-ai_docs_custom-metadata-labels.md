---
title: "Custom metadata labels \_|\_ Document AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/document-ai/docs/custom-metadata-labels
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/document-ai/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/document-ai/docs/custom-metadata-labels
  title: "Custom metadata labels \_|\_ Document AI \_|\_ Google Cloud Documentation"
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
Custom metadata labels
Stay organized with collections
Save and categorize content based on your preferences.
Document AI supports adding user-defined labels or key-value pairs (KVPs) as metadata
sent to the processor to ProcessDocument , BatchProcessDocuments
requests.
This metadata about the request (along with the usage data, like number of pages)
is forwarded to the Cloud Billing system. It's populated in the billing
system, where you can break down your billing charges by filtering using these metadata labels.
Use case
An important use case for labels involves customers who provide document processing
services to many clients. A single project can be used for multiple clients.
For billing purposes, it's important to associate specific requests with their
respective clients. That's where these metadata labels come in. They're for filtering
reports in Google Cloud.
Requirements for labels
The labels applied to a request must meet the following requirements:
Each request can have multiple labels, up to a maximum of 64.
Each label must be a KVP.
Keys have a minimum length of 1 character and maximum 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters.
Keys and values contain only lowercase letters, numeric characters, underscores,
and dashes. All characters must use UTF-8 encoding, and international characters are allowed.
The key portion of a label must be unique within a single request (for example, {'country':'india'} is fine, but {'country':'india','country':'sweden'} is not allowed).
Keys must start with a lowercase letter or international character.
Usage with API
The Sync Process code sample shows you how to send a request to a processor using a label.
curl - X POST \
- H "Authorization: Bearer $(gcloud auth print-access-token)" \
- H "Content-Type: application/json; charset=utf-8" \
- d @docai_request . json \
"https://us-documentai.googleapis.com/v1/projects/514064100333/locations/us/processors/3bb61571a9731982:process"
Sample Request
{
"skipHumanReview": true,
"rawDocument": {
"mimeType": "application/pdf",
"content" : "PDF/IMAGE CONTENT"
},
"labels": {"country": "india" },
"processOptions": {
"individualPageSelector" : {
"pages": [1]
}
}
}
The Async Process code sample shows you how to send a request to a processor using a label.
curl - X POST \
- H "Authorization: Bearer $(gcloud auth print-access-token)" \
- H "Content-Type: application/json; charset=utf-8" \
- d @batch_docai_request . json \
"https://us-documentai.googleapis.com/v1/projects/514064100333/locations/us/processors/3bb61571a9731982:batchProcess"
Sample Request
{
"inputDocuments": {
"gcsPrefix": {
"gcsUriPrefix": "gs://atul_dai_test/ravi/GCS_DWH_work_flows_docs/Small_pdf/"
}
},
"documentOutputConfig": {
"gcsOutputConfig": {
"gcsUri": "gs://atul_dai_test/ravi/GCS_DWH_work_flows_docs/test/docai_config/"
}
},
"labels": {"country": "india" },
"skipHumanReview": true
}
Pricing report
You can use these labels to view request usage.
Go to the Cloud Billing console .
From the console, select the
Menu at the upper left, and select Billing from the drop-down. If you have multiple billing accounts
a page appears that asks you to make a selection. Select Go to linked billing account .
From the billing page, select Reports in the left-hand navigation pane.
Use the filters in the right-hand pane to check usage of requests.
Previous
arrow_back
Long-running operations (LRO)
Next
Build a document processing pipeline with Workflows
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
