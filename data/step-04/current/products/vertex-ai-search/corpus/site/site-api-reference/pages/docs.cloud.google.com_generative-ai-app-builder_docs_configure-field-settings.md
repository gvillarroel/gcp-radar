---
title: "Configure field settings \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-field-settings
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis
source_metadata:
  url: https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-field-settings
  title: "Configure field settings \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation"
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
Configure field settings
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to configure the schema fields to set up an app for structured
data, for unstructured data with metadata, or for website data with custom, structured
attributes.
Field settings help determine how Vertex AI Search uses fields in
its results. You can use the Schema tab in the
Google Cloud console to configure field settings.
Configuring field settings is available only for apps with data stores containing
either structured data or unstructured data with metadata.
Field settings
The following field settings are available for many field types in your
search or recommendations data, but not for all data types. A schema contains multiple field settings for individual fields, and the next table contains settings which can be applied to a field within a schema. Using structured data is highly recommended for these field settings:
Setting
Definition
Purpose
Use case example
Indexable Setting fields to indexable allows for operations like filtering, boosting, and faceting on structured fields within a document.
Fields of type Object
can't be set to Indexable .
Marking a field as Indexable allows quicker lookups.
Note that marking a field as Indexable increases
the size of the search index and can slow down indexing.
In a hotel data store, you can set a field,
such as hotel_chain , as indexable. This lets you apply ranking, filtering, and boosting operations on hotel_chain . For example, you can apply a filter so that the search will turn up only search results containing the filtered hotel chain.
Searchable Fields that are most likely to be related to searches are
designated as Searchable . A field can be searchable without being indexable or retrievable.
Only fields with text values can be marked searchable. Thus, a numeric price field can be indexable (for filtering or faceting) but cannot be searchable as full text.
Setting a field to
Searchable improves recall for that field in
search queries, allowing users to find content, such as web pages, by
querying the text within these fields. Marking a field as searchable allows ranking to be applied. Consequently, marking an excessive number of fields as searchable can negatively affect search precision by oversaturating the ranking algorithm and returning too many results. This could lead to irrelevant search returns. An internet service provider's
support ticket system stores each ticket as a structured document.
If these documents contain Searchable text fields, such as issue_description or resolution_notes , a support agent can perform a query related to the content in those fields, such as how to fix slow internet speeds after modem reset.
The system would then surface the documents that contain any of those search terms, including modem , internet , speed , in either one or both issue_description or resolution_notes fields.
Dynamic facetable
Provides context-aware
filters to better target searches for users. Setting a field as
Dynamic Facetable allows the system to automatically
generate interactive filters (facets) based on the unique values present in
the field.
Setting a field to Dynamic
facetable enables users to dynamically refine search results by
selecting categories or attributes directly derived from your ingested data,
without having to manually pre-define every possible filter option. This
allows the user to narrow down their search to highly specific
web content.
Use Dynamic Facetable with Searchable to
achieve better results, which improves both the recall of your search and
the quality of the facets offered to the user.
Pages in an internal corporate knowledge base,
such as HR policies, are
ingested with data like department ,
document_type , or last_modified_date . If
these fields are tagged as dynamic facetable , an
employee search for a term like expense reimbursement dynamically
generates interactive filters based on the relevant results
found. In such case, the web interface could display facets for
Department: Finance, Travel , Document Type: Policy,
FAQ , or Last Modified Date: This Quarter, Last
Year .
Retrievable When a search query hits matching
content, the search engine can pull the values of retrievable fields to
display or for use in the application, meaning that information from
the original document is displayed as part of the search results. Key fields (unique identifiers for documents) are set up as retrievable.
Retrievable fields provide search context
by distinguishing fields whose values can be displayed from
those that are only to be used in the search logic but whose raw values are not meant
to be shown to the end-user. For a product search on a merchant site,
product_id , name , price , and an
image_url are typical fields that you want to set as
retrievable. On the other hand, the internal_tracking_code can
be indexed and filterable for administrative purposes only, but not
retrievable in public search results.
Completable
Allows a field's contents to used for search query suggestions. For more
information, see Configure
autocomplete . This setting enables values within that field
to be used for providing real-time query suggestions as users type. This feature helps guide your users to relevant content and accelerates the search process. Certain
factors such as use of natural language filtering can
impact this performance.
If the
completable field is set for product_name ,
brand , and category , when the user types
Tech, the autocomplete suggestions can show:
TechCo (from the brand field)
TechCo UltraBook X1 (from the product_name
field)
Technology GameMaster Pro (another product
from the category field)
Filterable
Allows recommendations to use a field to filter
recommended results, determining which search results your users see. For information about filtering recommendations,
see Filter
recommendations .
Setting a field to Filterable helps customize recommendations for users. Note that filtering limits apply.
A filter setting by language and drama could look like: language_code: ANY("en", "fr") OR categories: ANY("drama") .
Differences between commonly used settings
There are key differences between the indexable, searchable, and retrievable field settings. The table summarizes these differences.
Feature
Indexable
Searchable
Retrievable
Primary Role
Makes field content available to search engine
Allows full-text querying against field content
Allows field's value to be returned in search results
Analysis
Content is processed and put into an index.
Typically undergoes extensive lexical analysis.
Value is stored as-is for display.
Can it be...
...Searchable?
Yes (often a prerequisite)
N/A
Not necessarily (can be retrievable without being searchable)
...Retrievable?
Not necessarily
Not necessarily
N/A
...Filterable/Sortable/Facetable?
Yes (generally a prerequisite for these too)
Not directly; these are separate attributes often built on an indexable field.
Not directly; these attributes relate to how the field is indexed and queried, not just displayed.
In practice, many fields that are crucial for user experience (such as titles, descriptions, and identifying information) are often set to be indexable , searchable , and retrievable .
Note: The exact terminology and behavior can sometimes vary slightly between different search engine technologies (such as Elasticsearch, Apache Solr, Azure AI Search, Google Cloud Search), but the core concepts remain largely the same.
Limitations
Field settings have the following limitations:
You can configure up to 50 fields as indexable, searchable, retrievable, or
dynamic facetable.
To configure a field as dynamic facetable, it must first be configured as
indexable.
Changing the indexable setting requires re-indexing the data, which can take
hours, especially for large data stores.
If you are configuring fields for a media search app and want detailed
information about the fields in the schema, see About media documents and data
stores .
Update field settings
To update field settings:
In the Google Cloud console, go to the AI Applications page.
AI Applications
Click the name of the app that you want to edit.
Click Data .
Click the Schema tab. This tab shows current field settings.
You won't see the Schema tab if your data store contains basic website
data or unstructured data
without metadata .
Click Edit .
Select or clear field settings that you need to update. Some field
settings are not supported. For example, numerical fields cannot be set to
Searchable .
Click Save to apply your changes.
What's next
Update a schema for structured data
Configure search results
Preview search results
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
