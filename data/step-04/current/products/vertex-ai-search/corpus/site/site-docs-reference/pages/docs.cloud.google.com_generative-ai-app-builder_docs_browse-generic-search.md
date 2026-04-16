---
title: "Get personalized browse results \_|\_ Vertex AI Search \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/generative-ai-app-builder/docs/browse-generic-search
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control
source_metadata:
  url: https://docs.cloud.google.com/generative-ai-app-builder/docs/browse-generic-search
  title: "Get personalized browse results \_|\_ Vertex AI Search \_|\_ Google Cloud\
    \ Documentation"
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
Get personalized browse results
Stay organized with collections
Save and categorize content based on your preferences.
Browsing is a navigational search that has no query. Browsing uses navigational
methods to display search results that match the end user's selected categories
or filters. When used in collaboration with user engagement, you can offer your
users personalized browsing . Personalized browsing provides real-time,
user-specific feeds based on user interaction history and content features. It
aims to optimize search results for defined KPIs while adhering to your
strategic controls. For example, a real-estate website can get different
homepages for its users in London, UK, and in Sydney, Australia; a shopping
website can cater tailor-made results depending upon the user profile.
This page describes how to get browse results for custom search data stores
and some best practices to set up your search app.
About personalized browse
The Vertex AI Search personalized browse uses neural networks to
rank documents based on predicted user
engagement and conversion. For example, with personalized browsing, you can
serve ranked entries in a hotel catalog or articles in a website and return them
to the users based on predicted likelihood of clicks or inquiry.
At its core, personalized browse is a sophisticated model that learns the
intricate relationships between user navigation patterns, the contents and
features of your documents, and user conversion events. Some important features
are as follows:
Ranking: The model ranks items based on predicted performance against your
defined objective that's subject to the configured search parameters, such as
filters, custom ranking, and serving controls (like boost, promote, or
synonyms).
Training and refining: After the initial training, the model is continuously
refined using live, user-event streams. The model adapts and improves over time.
Diversity: The model implicitly learns about diversity because it records
negative signals from non-interaction, such as ignored links, time spent on a
page, and jump rates.
How browse differs from search
The following table presents the differences between searching and browsing.
Feature
Search
Browse
Purpose
Find specific information
Explore and discover content
Example
Searching for "best Korean
restaurants in Vancouver"
on Google Search
Browsing for a restaurant based on the
categories where it might belong,
such as "Restaurants > Korean >
Vancouver > 4 star and above"
User
Intent
Typically goal-oriented
Exploratory
Starting
point
A query or keyword
typically in a search bar
A specific website or platform typically
using a menu, breadcrumbs, links, or
other navigation methods like facets
Method
Entering keywords or
phrases and applying
search and serving
configuration
Searching with an empty query, applying
search and serving configuration
Results
A list of relevant results
All the documents in the data store that
match the filters
Workflow and best practices
Personalized browse is a Google-managed service and Google handles the
underlying deep learning models and data pipelines. To get the best out of this
service, when you develop your search app, your primary technical
responsibilities include the following:
Data provisioning: Collect and supply a comprehensive data store of documents
and user events.
Objective definition: Specify KPIs for optimization, such as click-through
rate (CTR), high-value actions, and revenue per session with the provided user
events. Make sure that the types of user events that you collect support the
objectives.
Search parameters: Define and configure search parameters and serving
controls in your search request. For example, date ranges to filter the
listings or articles that are allowed or boost controls to reorder blogs
according to their ratings.
In a Vertex AI Search search app, to browse is to search with
no query or an empty query. To get browse results, in a custom search data
store, you can call the
search method leaving the query empty.
Broadly, these are the steps to get the best results for personalized browse:
Have correct and consistent data :
Accurate timestamp for every user event.
Consistent user IDs across all user events.
Document IDs that match between user events and the data store. If you're
using a sitemap, then its URLs must match the URLs in the user events.
Filters to serve the exact content on your browsed pages.
For more information, see
Filter website search and
Filter custom search for structured and unstructured data .
Prepare and ingest your documents :
Define your schema with as many attributes as you can. The more the
attributes, the better the personalization.
If you're crawling your websites,
turn on advanced indexing and
enrich your web pages with structured data .
Prepare your data for ingestion using the instructions in
Prepare data for ingesting .
Create a search data store to ingest
your data. Alternatively,
create and update documents
that can manage the data that needs to be searched or browsed.
If you're using sitemaps for your website data, maintain them to index the
most up-to-date web pages. Either alternatively or additionally, run
manual refresh for
specific pages that are recently updated. Keeping the index fresh yields
better results.
Prepare and ingest user events :
Prepare at least 30 days of user events for the initial model training.
You can use either or both
historical user events and
user events in real time. .
Real-time events yield better personalization results.
Record and share the search event (used to capture browse data),
the view-item event, and the conversion event.
All user events must include the following:
eventType such as search for search and
browse, view-item , and conversion .
userPseudoId , which is a consistent pseudonymized user
identifier.
eventTime , which is an ISO 8601 timestamp (UTC) for when
the event was recorded.
documents.id shown in the order they appear to the user
that matches document IDs.
searchInfo.searchQuery to register the user's search
query.
pageInfo.pageCategory that adds a context, such as
"HomepageCarousel", "Properties > VIC > Richmond".
filter that describes the filter logic used to generate
the impression list. This is often captured by the pageCategory
field or through system understanding.
For more information, see userEvents .
Enable model training and model pipeline :
After preparing your data and gathering the user events, contact your Google
Customer Engineer (CE). The CE can review your data and activate the
personalization model for your app.
Get personalized browse results
Add more fields to your search request like filters and ranking adjustments,
such as boost or custom ranking.
Maintain and keep your data fresh :
Over time, keep your the documents in your data store up-to-date and keep
uploading fresh user events. This ensures the model can access the latest
documents and user interactions for personalized results.
Get browse results for an app with website data
To use the API to get browse results for an app with website data, do the
following:
Find your app ID. If you already have your app ID, skip to the next step.
In the Google Cloud console, go to the AI Applications page.
Go to Apps
On the Apps page, find the name of your app and get the app's ID from
the ID column.
Call the engines.servingConfigs.search method with an
empty query or no query as follows:
REST
Key Term: In Vertex AI Search, the term app can be used
interchangeably with the term engine in the context of APIs.
curl -X POST -H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json" \
"https://discoveryengine.googleapis.com/v1/projects/ PROJECT_ID /locations/global/collections/default_collection/engines/ APP_ID /servingConfigs/default_search:search" \
-d '{
"servingConfig": "projects/ PROJECT_ID /locations/global/collections/default_collection/engines/ APP_ID /servingConfigs/default_search",
"orderBy": " ORDER_BY ",
"params": {
"searchType": "0"
},
"filter": " FILTER ",
"boostSpec": " BOOST_SPEC ",
}'
Replace the following:
PROJECT_ID : the ID of your Google Cloud project.
APP_ID : the ID of the Vertex AI Search app that you
want to query.
ORDER_BY : optional. The order in which the results are arranged. The
attribute to sort on must have a numerical interpretation—for example,
date . For more information, see Order web search
results .
FILTER : optional but recommended. A text field for filtering your search using a
filter expression. The default value is an empty string. For more
information about using the filter field, see
Filter website search .
BOOST_SPEC : optional. A specification to
boost or bury documents. Values:
BOOST :
a floating point number in the range [-1,1]. When the value is
negative, results are demoted (they appear lower down in the
results). When the value is positive, results are promoted
(they appear higher up in the results).
CONDITION :
a text filter expression to select the documents to which boost is applied. The
filter must evaluate to a boolean value. For examples of filter expressions,
see Filter expression syntax and Syntax for advanced indexing .
To learn about boost for structured search, see Boost search results .
You should receive a JSON response similar to the following truncated response.
The response contains itemized search results listed in the order that's
determined by the fields set in the search request.
Response
{
"results": [
{
"id": " DOCUMENT_ID ",
"document": {
"name": "projects/ PROJECT_ID /locations/global/collections/default_collection/dataStores/ DATA_STORE_ID /branches/0/documents/ DOCUMENT_ID ",
"id": " DOCUMENT_ID ",
"structData": {},
"derivedStructData": {
"displayLink": " LINK_TO_BE_DISPLAYED ",
"link": " DOCUMENT_URL ",
…
}
}
},
{
"id": " DOCUMENT_ID ",
"document": {
"name": "projects/ PROJECT_ID /locations/global/collections/default_collection/dataStores/ DATA_STORE_ID /branches/0/documents/ DOCUMENT_ID ",
"id": " DOCUMENT_ID ",
"structData": {},
"derivedStructData": {
"displayLink": " LINK_TO_BE_DISPLAYED ",
"link": " DOCUMENT_URL ",
…
}
}
}
…
]
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
