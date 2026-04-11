---
title: "Pretrained overview \_|\_ Document AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/document-ai/docs/pretrained-overview
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/document-ai/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/document-ai/docs/pretrained-overview
  title: "Pretrained overview \_|\_ Document AI \_|\_ Google Cloud Documentation"
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
Pretrained overview
Stay organized with collections
Save and categorize content based on your preferences.
Document AI offers multiple products to process documents for information
for different use cases.
Pretrained parsers
For more information, go to Explore pretrained processors .
Bank statement parser
Bank statement parser extracts key-value pairs (KVP). It can extract up
to 17 generic entities. Examples include: Account number, client name, bank name,
and table items like deposits and withdrawals. You don't specify the fields
(schema) you want to extract. Bank statement parser supports Enrichment
and Normalization .
W2 parser
W2 parser extracts from the IRS Form W2 as KVP. It can extract up
to 12 generic entities, including employee name, Social Security Number,
employer, and wages. You don't specify the fields (schema) you want
to extract. W2 parser supports Enrichment .
US passport parser
US passport parser extracts KVP. It can extract up to seven generic entities. These include given names, family names, document ID, and
date of birth. You don't specify the fields (schema) you want to
extract. US passport parser supports Normalization .
Utility parser
Utility parser extracts KVP. It can extract up to 75 generic entities
from utility bills. These include supplier name, previous paid amount, and line items like amount, description, and product code and quantity. You don't specify the fields (schema) you want to extract with the
utility parser.
Identity document proofing parser
Identity document proofing parser predicts the validity of ID documents
using multiple signals.
fraud_signals_is_identity_document detection: Predicts whether an image contains a recognized identity document.
fraud_signals_suspicious_words detection: Predicts whether words are present that aren't typical on IDs.
fraud_signals_image_manipulation detection: Predicts whether the image was altered or tampered with an image editing tool.
fraud_signals_online_duplicate detection: Predicts whether the image can be found online (US only).
Pay slip parser
Pay slip parser extracts KVP. It can extract up to 26 generic entities from pay
slips. These include employee name, bonus, commissions, overtime, and pay date.
You don't specify the fields (schema) you want to extract. Pay slip parser supports Enrichment and
Normalization .
US driver license parser
US driver license parser extracts KVP. It can extract up to eight generic entities
from a driver license. Examples include: Given name, family name, document ID, and
expiration date. You don't specify the fields (schema) you want to
extract. US driver license parser supports Normalization .
Expense parser
Expense parser extracts KVP. It can extract up to 17 generic entities from expense
reports. Examples include: Expense date, supplier name, total amount, and currency.
You don't specify the fields (schema) you want to extract. Expense parser supports Enrichment and
Normalization .
Invoice Parser
Invoice Parser extracts KVP. It can extract up to 46 generic entities
from invoices. These include invoice number, supplier name, invoice amount, tax
amount, invoice date, and due date. You don't specify the fields (schema) you want to extract. Invoice Parser supports Enrichment
and Normalization .
Summarizer
Summarizer gives abstract and bullet point
summaries for short and long documents. Summarizer also lets you specify the
output length of the summary as comprehensive, medium, or brief.
Previous
arrow_back
Derived field and signature detection
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
