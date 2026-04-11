---
title: "Configure field settings \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/configure-field-settings
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/configure-field-settings
  title: "Configure field settings \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Note: This documentation applies to the Standard, Plus, and Frontline editions of Gemini Enterprise. For information about the Business edition, see the Gemini Enterprise - Business edition Help Center .
Home
Documentation
AI and ML
Gemini Enterprise
Send feedback
Configure field settings
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to configure the fields to set up an app for structured
data or for unstructured data with metadata.
Field settings help determine how Gemini Enterprise uses fields in
its results. You can use the Schema tab in the
Google Cloud console to configure field settings for structured data and
unstructured data with metadata.
Configuring field settings is available only for apps with data stores that have
either structured data or unstructured data with metadata.
The following field settings are available:
Field setting
Definition
Use case
Indexable
If a field is set to Indexable ,
Gemini Enterprise can filter, order, and facet using this field.
Setting boolean and object fields to indexable is not supported.
Search
Searchable
If a field is set to Searchable , recall for that
field in Gemini Enterprise queries is improved. Only fields with
text values can be set to Searchable .
Search
Dynamic facetable
If a field is set to Dynamic Facetable ,
Gemini Enterprise can use that field as a dynamic facet. Dynamic
facets can be automatically added to a search based on previous user
behavior such as facet clicks and views. This setting is applicable only to
fields that are indexable.
Search
Retrievable
If a field is set to Retrievable ,
Gemini Enterprise returns the field in search results.
Search
Completable
If a field is set to Completable ,
Gemini Enterprise uses the field's contents as search query
suggestions. For more information, see Configure autocomplete .
Search
Limitations
Field settings have the following limitations:
You can configure up to 50 fields as indexable, searchable, retrievable, or
dynamic facetable.
To configure a field as dynamic facetable, it must first be configured as
indexable.
Changing the indexable setting requires re-indexing the data, which can take
hours, especially for large data stores.
Update field settings
To update field settings:
In the Google Cloud console, go to the Gemini Enterprise page.
Gemini Enterprise
Click the name of the app that you want to edit.
Click Data .
Click the Schema tab. This tab shows current field settings.
Click Edit .
Select or clear field settings that you need to update. Some field
settings are not supported. For example, numerical fields cannot be set to
Searchable .
Click Save to apply your changes.
What's next
Update a schema for structured data
Configure results for the UI
Preview search results
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
