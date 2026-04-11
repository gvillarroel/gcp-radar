---
title: "Normalization \_|\_ Document AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/document-ai/docs/normalization
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/document-ai/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/document-ai/docs/normalization
  title: "Normalization \_|\_ Document AI \_|\_ Google Cloud Documentation"
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
Normalization
Stay organized with collections
Save and categorize content based on your preferences.
For many specific supported fields, Document AI also returns an
entity.normalizedValue
in addition to the raw extracted field obtained through the textAnchor of each
entity. It normalize the literal text. Normalization often breaks the text value
up into sub-fields.
This contain the data in a standardized format to reduce post processing, and
enable conversion to whatever format is selected. The mentionText , representing
what is literally on the document, is never changed by normalization.
Normalized fields belong to one of the following categories.
Normalized values in the console
In the Google Cloud console, the normalized fields are annotated with G . For example:
Sample normalized field shown in the web application.
Supported processors
Here are the processors and fields that support entity enrichment and normalization:
Processors
Normalized fields
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
ending_balance
starting_balance
statement_date
statement_end_date
statement_start_date
table_item/transaction_deposit
table_item/transaction_deposit_date
table_item/transaction_withdrawal
table_item/transaction_withdrawal_date
US Passport Parser
Category
Pretrained
Solution type
Identity
Functions
OCR, Entity Extraction
Release stage
General availability
Access status
Public
lock_open
Full processor details
Detailed entry
Date Of Birth
Expiration Date
Issue Date
Utility Parser
Category
Pretrained
Solution type
Procurement
Functions
OCR, Entity Extraction
Release stage
General availability
Access status
Limited
security
Full processor details
Detailed entry
adjusted_amount
amount_due
balance_transfer_amount
currency
currency_exchange_rate
delivery_date
due_date
invoice_date
late_fee_amount
line_item/amount
line_item/quantity
line_item/tax_amount
line_item/unit_price
net_amount
prior_amount_due
prior_paid_amount
total_amount
total_tax_amount
Identity Document Proofing Parser
Category
Pretrained
Solution type
Identity
Functions
OCR, Quality Analysis
Release stage
General availability
Access status
Public
lock_open
Full processor details
Detailed entry
fraud_signals_image_manipulation
fraud_signals_online_duplicate (US only)
fraud_signals_is_identity_document
fraud_signals_suspicious_words
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
bonus
bonus_ytd
commissions
commissions_ytd
direct_deposit
end_date
gross_earnings
gross_earnings_ytd
holiday
holiday_ytd
net_pay
net_pay_ytd
overtime
overtime_ytd
pay_date
regular_pay
regular_pay_ytd
start_date
vacation
vacation_ytd
US Driver License Parser
Category
Pretrained
Solution type
Identity
Functions
OCR, Entity Extraction
Release stage
General availability
Access status
Public
lock_open
Full processor details
Detailed entry
Date Of Birth
Expiration Date
Issue Date
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
currency
total_amount
total_tax_amount
net_amount
receipt_date
purchase_time
start_date
end_date
line_item/amount
line_item/payment_date
line_item/payment_amount
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
amount_paid_since_last_invoice
currency
currency_exchange_rate
delivery_date
due_date
freight_amount
invoice_date
net_amount
total_amount
total_tax_amount
line_item/amount
line_item/quantity
line_item/unit_price
vat/amount
vat/tax_amount
vat/tax_rate
Extraction processors
Custom extractor supports normalization of all entities with the following Google Cloud
common data types: dateTime , currency , money ,
and number .
Processors
Normalized data types
Custom Extractor
Category
Extract
Solution type
Custom
Functions
OCR, Entity Extraction
Release stage
General availability
Access status
Public
lock_open
Full processor details
Detailed entry
dateTime as STRING
currency as STRING
money as google.type.Money
number as FLOAT or INTEGER
Previous
arrow_back
Enrichment
Next
BigQuery integration
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
