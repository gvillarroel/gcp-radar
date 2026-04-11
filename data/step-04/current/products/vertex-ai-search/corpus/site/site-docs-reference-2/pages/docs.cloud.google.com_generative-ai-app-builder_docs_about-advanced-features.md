---
title: "About advanced features \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/generative-ai-app-builder/docs/about-advanced-features
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control
source_metadata:
  url: https://docs.cloud.google.com/generative-ai-app-builder/docs/about-advanced-features
  title: "About advanced features \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Search
Send feedback
About advanced features
Stay organized with collections
Save and categorize content based on your preferences.
When you are creating search apps and data stores, you have the option to turn
on various advanced settings to get additional features. Here are the advanced
features that are available:
Enterprise edition features
Generative responses
Advanced website indexing
Overview
The following table shows Vertex AI Search features and indicates the
advanced settings that are required for each feature:
Feature
Requires
Website search (basic website search and advanced website indexing)
Enterprise edition
CMEK (customer-managed encryption keys)
Enterprise edition
Snippets for unstructured search
No requirements
Extractive answers for unstructured search
Enterprise edition
Extractive segments for unstructured search
Enterprise edition
Core generative answer features *
Enterprise edition
Advanced generative answer features †
Advanced LLM features
Search summarization without advanced generative answer features †
Enterprise edition
Search summarization with advanced generative answer features †
Advanced LLM features
Search tuning for unstructured data stores
Enterprise edition
* Core generative answer features include all answer generation
features except for advanced generative answer features, such as related
questions, query simplification, multi-step queries,
multi-turn queries, and multimodal answers that return images and charts.
† Advanced generative answer features include all answer generation
features including related questions, query simplification, multi-step
queries, multi-turn queries, and multimodal answers that return images and
charts.
Enterprise edition features
Enterprise edition features add functionality at the app level. Enterprise tier
features incur additional cost. For more information, see Pricing .
Turning on Enterprise edition features is required for the following features:
Extractive answers .
Extractive segments .
Search tuning .
Core generative answer features .
In addition, turning on Enterprise edition features is required for website
search. That is, Enterprise edition features are required for any
Vertex AI Search app that uses website data (basic website search and
advanced website indexing). This
setting can't be turned off for apps that are attached to website data
stores.
If you turn off Enterprise edition for an existing app, any features in your app
that require Enterprise edition will no longer work.
To change this setting for an existing app, see
Turn Enterprise edition on or off .
Generative responses
Generative responses include the following advanced LLM features. You must turn
on the Generative responses option to obtain search
responses with these features:
Search summarization . For website search, this also
requires advanced website indexing .
Advanced generative answer features .
For website search, this also requires
advanced website indexing .
Generative responses incur additional costs. For more information, see
Pricing .
If you turn off the Generative responses option for an
existing app, any functionality in your app that requires advanced LLM features
no longer works.
To change this setting for an existing app, see
Turn generative responses on or off .
Advanced website indexing
Turning on advanced website indexing generates an index for the websites that
you specify when you create your data store. This requires domain
verification and imposes a quota on the number of pages
that you can index. You can upgrade this quota if
necessary. Advanced website indexing incurs additional cost. For more
information, see Pricing and
Quota for web page indexing .
Advanced website indexing enables the features listed in the following table.
The table also indicates other advanced settings that are needed to enable a
feature.
Enterprise edition features are required for any
Vertex AI Search app that uses website data for
basic website search or advanced website indexing.
Feature
Requires
Search summarization using the answer
or the search method
Advanced LLM features and advanced website indexing
Search with follow-ups using the answer
or the converse method
Advanced LLM features and advanced website indexing
Extractive segments and answers
Advanced website indexing
Search for an image using an image query
Advanced website indexing
Sitemap-based index and refresh
Advanced website indexing
Automatic index refresh
Advanced website indexing
Manual web page refresh
Advanced website indexing
Add structured data to data store
schema
Advanced website indexing
Lower search latency than basic website search
Advanced website indexing
Blended search (multiple data stores in a single app)
Advanced website indexing
Search tuning
Advanced website indexing
You have the option to turn on advanced website indexing when
you create your data store and when you upgrade your data store.
To learn more about the upgrade process, see
Turn on advanced website indexing .
You cannot turn off advanced website indexing for an existing data store.
Instead, you must create a new data store, and during the data store creation
process, don't select the Advanced website indexing option.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
