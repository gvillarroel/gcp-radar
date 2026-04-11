---
title: "Introduction to media search and recommendations \_|\_ Vertex AI Search \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media
  title: "Introduction to media search and recommendations \_|\_ Vertex AI Search\
    \ \_|\_ Google Cloud Documentation"
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
Introduction to media search and recommendations
Stay organized with collections
Save and categorize content based on your preferences.
This page introduces and describes the capabilities of Vertex AI Search
for media. The page also provides links to more information,
tutorials and checklists, to get you started with
Vertex AI Search for media.
Vertex AI Search includes two capabilities specific for the media
industry:
Media recommendations. Get recommendations for media content such as
videos, news, and music. With media recommendations, audiences can discover
more personalized content, like what to watch or read next, with
Google-quality results customized using optimization objectives.
Media search. Get Google-quality search results with advanced query and
document understanding designed for media content.
Note: Don't be misled by the product name. With Vertex AI Search,
you can create recommendations apps as well as search apps.
Key features of media apps
There are many similarities between media apps and custom apps
in Vertex AI Search. Here are some key features of media
apps:
Media apps require user events. You upload user events to personalize
recommendations and rank search results for your audience.
Media apps require media metadata to conform to a predefined schema or
to use a custom schema that contains a minimum set of key properties.
Predefined schema. This lets recommendations and search ranking
use Google-defined, media-specific fields such as content ratings,
aggregated ratings, persons, and production year to help generate results
based on media engagement.
Custom schema. The custom schema gives you more
flexibility than the predefined schema. However, your schema fields must
map to the following required key properties: title , category , uri ,
media_available_time , and media_duration . The category property
must be an array of strings, and the other four properties are strings.
In addition to the required key properties, Google recommends that you
map as many other schema fields as possible to the suggested key
properties. The suggested key properties represent similar media metadata
to that in the predefined schema—for example, content ratings, aggregated
ratings, persons, and production year.
Media recommendations apps offer you a choice of recommendation type.
Media recommendations apps let you choose what kind of recommendation to
generate, such as recommending other content that users might like, similar
items, or the most popular items.
Media recommendations apps offer you a choice of optimization objectives.
For example, you can decide whether to optimize recommendations for
click-through-rate to increase the number of interactions with content or
for conversion rate to increase the consumption of content.
The following table outlines some functional differences between media and
custom data stores.
Media apps and data stores
Custom apps and data stores
Data stores are always structured.
Data stores can be of any type
(website, unstructured, structured).
Require structured data with a
predefined schema or a custom schema
where you map your data fields to
some required key properties.
No key properties are required for
structured data.
For media apps, user
events are required.
For custom recommendations, user
events are highly recommended but not
required.
Imported historical user events are
joined synchronously.
Imported historical user events are
joined asynchronously.
For more information, see About media data stores and
documents and About apps and data
stores .
Getting started tutorials
If you are new to Vertex AI Search, try out the getting
started tutorials. These tutorials guide you step-by-step through the creation
of an app. Data (documents and user events) are provided for the tutorials so
all you need is a Google Cloud project and a billing account to create your
first app:
Get started with media recommendations
Get started with media search
Checklists
There is a lot of commonality between working with media apps and working with
custom apps, but some features apply only to custom apps and
other features only to media apps.
Use the following checklists to guide you through typical workflows specific
to media:
Media search checklist
Media recommendations checklist
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
