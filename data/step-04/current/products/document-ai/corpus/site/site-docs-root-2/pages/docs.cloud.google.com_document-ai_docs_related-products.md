---
title: "Related Google Cloud products \_|\_ Document AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/document-ai/docs/related-products
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/document-ai/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/document-ai/docs/related-products
  title: "Related Google Cloud products \_|\_ Document AI \_|\_ Google Cloud Documentation"
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
Related Google Cloud products
Stay organized with collections
Save and categorize content based on your preferences.
The following products share capabilities with Document AI. However,
these products perform a specific text and analysis function. Depending on your
use case, these products might provide the specific capabilities you need.
Convert images to text
You can convert content in images to text using either:
Enterprise Document OCR .
Cloud Vision API (using the TEXT_DETECTION or DOCUMENT_TEXT_DETECTION enums). See:
Cloud Vision API Quickstarts
Detect text (OCR)
Detect handwriting (OCR)
PDF/TIFF Document text detection
Detect visual artifacts
You can use AutoML Vision object detection to
convert sections of images into text documents. For details, see Image data .
Classify documents
With document plain text and running OCR beforehand, you can categorize and label
documents using the following products:
The pretrained Natural Language API helps you classify content using a generalized
list of categories.
Use AutoML Natural Language classification to create a custom machine learning model,
and classify content with your own category labels.
While there may be exceptions, AutoML Vision classification is not
generally recommended for document classification because its tends to be less
accurate than text-based methods. However, you can use it for classifying image content.
This is not generally a recommended method for classification of documents, as its accuracy tends to be less than text based methods, but there may be exceptions
Natural Language API
Cloud Natural Language API Quickstarts
Classifying content
AutoML Natural Language classification
Text model type
AutoML Vision classification
Image model type
Analyze and extract entities
You can identify known entities in documents (proper nouns such as public
figures, company branding, and so on) and entities that follow common patterns
such as phone numbers and addresses with using
Form Parser or any of the
pretrained processors for your use case.
You can also use the Natural Language API to identify common, public entities.
AutoML Natural Language products are for entity extraction. Use them to create a custom machine learning model to identify entities specific to your company or use case.
Natural Language API
Natural language API quickstart
Analyzing entities
AutoML Natural Language Entity Extraction
Text model type
Other products
Integrate these complimentary products with Document AI to create a
complete document processing and analysis solution.
Vertex AI : Brings AutoML and AI Platform together into a unified API, client library, and platform.
Cloud Translation API : Dynamically translates text between thousands of language pairs through pretrained models. Provides a document translation API for directly translating documents in formats such as PDF and DOCX. See Translate documents .
Workflows : Combines Google Cloud services and APIs to build reliable applications, process automation, and data and machine learning pipelines.
AppSheet Automation : Creates custom automations and applications with an open cloud.
Drive scanner by Google Drive : The Google Drive Android app lets you scan and upload documents to Google Drive and offers intelligent title suggestions powered by Document AI.
Google Translate : This service instantly translates words, phrases, and web pages between English and over 100 other languages.
Find a partner
Take advantage of our growing partner ecosystem to help you create and manage
your document analysis solution. For a list of partners and the
services that they provide, see
Document AI partners .
What's next?
Learn how to set up Document AI.
Find specific guides in How-to .
Previous
arrow_back
Try Document AI
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
