---
title: "Natural Language release notes \_|\_ Cloud Natural Language API \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/natural-language/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/natural-language/docs
source_metadata:
  url: https://docs.cloud.google.com/natural-language/docs/release-notes
  title: "Natural Language release notes \_|\_ Cloud Natural Language API \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Natural Language API
Resources
Send feedback
Natural Language release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Natural Language. We recommend
that Natural Language developers periodically check this list for any
new announcements. Major changes will also be announced via the
cloud-nl-discuss
mailing list.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
August 28, 2023
Feature
The Natural Language API v2 is now available in Public Preview . This new version of the API supports Sentiment Analysis, Entity Analysis, Text Moderation, and Content Classification. This version has major updates for Sentiment Analysis and Entity Analysis, which include performance upgrades and general improvements. All API calls now return language_code .
Change
Entity analysis uses a new PaLM-based model for improved quality. Please note the following updates:
language field is now called "language_code"
No salience field.
No wikipedia_url as metadata.
Parsing improvements for the following entity types: PHONE_NUMBER, ADDRESS, DATE, NUMBER, PRICE
New probability score field is returned for all entities where NUMBER, PHONE_NUMBER, ADDRESS, PRICE, DATE will always be 1.0.
Change
Sentiment analysis uses a new PaLM-based model for improved quality. The language field is now called language_code .
January 31, 2023
Feature
Natural Language Content Classification v2 model is now Generally Available . This model supports an expanded taxonomy with 1091 content categories and 11 languages. The model is distilled from a Large Language Model with improved performance over the v1 offering.
October 18, 2022
Feature
Natural Language Content Classification v2 model is now in Public Preview . This model supports an expanded taxonomy with 1091 content categories and 11 languages. The model is distilled from a Large Language Model with improved performance over the v1 offering.
March 20, 2020
Change
The Natural Language API now supports additional languages for sentiment analysis.
February 20, 2020
Feature
The Natural Language API now offers two multiregion endpoints ( us-language.googleapis.com and eu-language.googleapis.com ).
Using a multiregion endpoint enables you to configure the Natural Language API to
store and perform machine learning on your data in the United States or European Union.
May 03, 2019
Feature
The Natural Language API now supports Spanish for entity sentiment analysis.
April 04, 2019
Feature
The Natural Language API now supports Russian for entity analysis and syntactic analysis, and Japanese for entity sentiment analysis.
Feature
The analyzeEntities method identifies and returns additional entity types : phone numbers, addresses, dates, prices, and numbers.
November 16, 2017
Feature
The Natural Language API has released the new classifyText method that analyzes text content and returns a content category for the content. For more information, see Content Classification .
Feature
Cloud Natural Language API version 1.2 GA release.
September 19, 2017
Feature
The Natural Language API v1 now supports entity sentiment analysis with the analyzeEntitySentiment method. Entity sentiment analysis is currently only available for the English language. For more information, see Entity Sentiment Analysis .
Feature
The Natural Language API v1beta2 has added beta support for a new classifyText method that analyzes text content and returns a content category for the content. For more information, see Content Classification .
August 04, 2017
Feature
The following languages are now fully supported for entity, sentiment, and syntax analysis:
* Chinese (Simplified and Traditional)
* French
* German
* Italian
* Korean
* Portuguese
Change
Sentiment analysis has been updated. You might see minor differences in score and magnitude from the same request made to previous releases.
Change
Entity analysis has been updated. You might see minor differences in metadata (Wikipedia URLs, knowledge graph MIDs) of entities identified in a block of text from the same request made to the previous releases.
May 02, 2017
Feature
Cloud Natural Language API v1beta2 release. Added beta support for entity, sentiment, and syntax analysis for the following languages:
* Chinese (Simplified and Traditional)
* French
* German
* Italian
* Korean
* Portuguese
Feature
Added beta support for entity sentiment analysis ( analyzeEntitySentiment ). Entity sentiment analysis is currently only available for the English language. For more information, see Entity Sentiment Analysis .
Change
The v1beta2 release includes updated document sentiment analysis. You might see differing results from the same request made to the Natural Language API v1 and v1beta2 releases.
Change
The v1beta2 release includes updated entity analysis. You might see minor differences in metadata (Wikipedia URLs, knowledge graph MIDs) from the same request made to the Natural Language API v1 and v1beta2 releases.
Deprecated
The Natural Language API v1beta1 release has been deprecated.
November 15, 2016
Feature
Promoted the Cloud Natural Language API from Beta (v1beta1) to General Availability (v1).
Updates for v1 from the previous v1beta1 API endpoint include the features listed below.
Feature
The sentiment analysis feature has these enhancements:
* Support for Japanese ( ja ) and Spanish ( es )
* Availability of sentence level sentiment
* Support for EncodingType within a Sentiment Analysis request to calculate offsets for sentence-level sentiment
*Addition of a score field within the Sentiment type to replace the previous polarity field
Feature
Syntactic analysis has these enhancements:
* Added a new analyzeSyntax method
* Added morphology support to returned tokens
Feature
The entity analysis feature has these enhancements:
* Added Google Knowledge Graph MID values, if available, to the metadata field for each Entity returned
* Returns Entity Mention Types for both proper nouns and common nouns (known as "nominals")
Deprecated
Removed the polarity field within the Sentiment type in favor of the new score field.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
