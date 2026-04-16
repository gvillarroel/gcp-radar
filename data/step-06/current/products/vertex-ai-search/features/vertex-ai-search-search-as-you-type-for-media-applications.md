---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:37.027Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Vertex AI Search search-as-you-type for media applications"
feature_slug: "vertex-ai-search-search-as-you-type-for-media-applications"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media-recommendations-types"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-media"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/check-media-data-quality"
keywords:
  - "vertex"
  - "ai"
  - "search"
  - "you"
  - "type"
  - "media"
  - "applications"
  - "introduced"
---

# Vertex AI Search search-as-you-type for media applications

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Search introduced search-as-you-type for media applications, returning results after each character via the widget UI and API.

## Extended Definition

Vertex AI Search introduced search-as-you-type for media applications, returning results after each character via the widget UI and API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media-recommendations-types](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media-recommendations-types)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-media](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-media)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/check-media-data-quality](https://docs.cloud.google.com/generative-ai-app-builder/docs/check-media-data-quality)

## Supporting Pages

### "About media app recommendations types \_|\_ Vertex AI Search \_|\_ Google\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media-recommendations-types](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media-recommendations-types)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Search Send feedback About media app recommendations types Stay organized with collections Save and categorize content based on your preferences.
- Default optimization objective: click-through rate Default serving config: N/A Available customizations: Business objective Supported pages for app deployment: Detail page Home page (requires a context item) User event requirements: view-item or media-play for click-through rate objective ( media-play or view-item ) and media-complete for conversion rate objective and watch duration per session objective Most Popular The Most Popular recommendations type recommends media that has been most popular among all users in recent days.
- User event requirements: view-item or media-play for click-through rate objective media-complete and either media-play or view-item for conversion rate objective and watch duration per session objective Recommended for You The Recommended for You recommendations type predicts the next document that a user is most likely to engage with based on the engagement history of that user.
- Recommendations types The following recommendations types are available with media recommendations apps: Others You May Like Recommended for You More Like This Most Popular Others You May Like The Others You May Like recommendations type recommends the next document that a user is most likely to engage with.

### Create media apps \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-media](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-media)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a media search app To use the Google Cloud console to create a media search app, follow these steps: Console In the Google Cloud console, go to the AI Applications page.
- Home Documentation AI and ML Vertex AI Search Send feedback Create media apps Stay organized with collections Save and categorize content based on your preferences.
- What's next For search apps: Configure search results for structured data For recommendations apps: Get media recommendations Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Create a media recommendations app To use the Google Cloud console to create a media recommendations app, follow these steps: Console In the Google Cloud console, go to the AI Applications page.

### "Check data quality for media recommendations \_|\_ Vertex AI Search \_|\_\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/check-media-data-quality](https://docs.cloud.google.com/generative-ai-app-builder/docs/check-media-data-quality)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Search Send feedback Check data quality for media recommendations Stay organized with collections Save and categorize content based on your preferences.
- Example command and result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" -H "X-GFE-SSL: yes" -H "X-Goog-User-Project: my-project-123" "https://discoveryengine.googleapis.com/v1alpha/projects/my-project-123/locations/global/requirements:checkRequirement" -d '{ "location": "projects/123456/locations/global", "requirementType": "discoveryengine.googleapis.com/media recs/general/all/warning", "resources": [ { "labels": { "branch id": "0", "collection id": "default collection", "datastore id": "my-data-store", "location id": "global", "project number": "123456" }, "type": "discoveryengine.googleapis.com/Branch" }, { "labels": { "collection id": "default collection", "datastore id": "my-data-store", "location id": "global", "project number": "123456" }, "type": "discoveryengine.googleapis.com/DataStore" } ] }' { "requirement": { "type": "discoveryengine.googleapis.com/media recs/general/all/warning", "displayName": "Warning level requirements for all models and all business objectives.", "description": "Requirements for the media recommendations model that will result in performance issue if not met for all media recommendations models and all business objectives.", "condition": { "expression": "doc with same title percentage \u003c doc with same title percentage threshold && most common visitor id percentage \u003c most common visitor id percentage threshold && short term unjoined events percentage \u003c short term unjoined events percentage threshold && long term unjoined events percentage \u003c long term unjoined events percentage threshold" }, "metricBindings": [ { "variableId": "doc with same title percentage", "resourceType": "discoveryengine.googleapis.com/Branch", "metricFilter": "metric.type = 'discoveryengine.googleapis.com/branch/documents/items with same title' AND metric.labels.is percentage = 'True' AND resource.labels.project number = '123456' AND resource.labels.branch id = '0' AND resource.labels.datastore id = 'my-data-store' AND resource.labels.location id = 'global' AND resource.labels.collection id = 'default collection'", "description": "The percentage of the documents with the same title in a branch.", "category": "Document" }, { "variableId": "most common visitor id percentage", "resourceType": "discoveryengine.googleapis.com/DataStore", "metricFilter": "metric.type = 'discoveryengine.googleapis.com/branch/datastore/user events/most used visitor id events' AND metric.labels.is percentage = 'True' AND resource.labels.datastore id = 'my-data-store' AND resource.labels.project number = '123456' AND resource.labels.location id = 'global' AND resource.labels.collection id = 'default collection'", "description": "The percentage of the events with the same visitor id.", "category": "DataStore" }, { "variableId": "short term unjoined events percentage", "resourceType": "discoveryengine.googleapis.com/DataStore", "metricFilter": "metric.type = 'discoveryengine.googleapis.com/datastore/user events/unjoined events for document ids' AND metric.labels.is percentage = 'True' AND metric.conditions.time range = 'WEEK' AND resource.labels.datastore id = 'my-data-store' AND resource.labels.project number = '123456' AND resource.labels.location id = 'global' AND resource.labels.collection id = 'default collection'", "description": "The percentage of events refers to a document id that is not in the catalog in the last 7 days.", "category": "DataStore" }, { "variableId": "long term unjoined events percentage", "resourceType": "discoveryengine.googleapis.com/DataStore", "metricFilter": "metric.type = 'discoveryengine.googleapis.com/datastore/user events/unjoined events for document ids' AND metric.labels.is percentage = 'True' AND metric.conditions.time range = 'NINETY DAYS' AND resource.labels.datastore id = 'my-data-store' AND resource.labels.project number = '123456' AND resource.labels.location id = 'global' AND resource.labels.collection id = 'default collection'", "description": "The percentage of events refers to a document id that is not in the catalog in the last 90 days.", "category": "DataStore" } ], "thresholdBindings": [ { "variableId": "doc with same title percentage threshold", "threshold values": { "severity": "WARNING", "value": 1.0 } "description": "The threshold for the percentage of the documents with the same title in a branch." }, { "variableId": "most common visitor id percentage threshold", "threshold values": { "severity": "WARNING", "value": 5.0 } "description": "The threshold for the percentage of the events with the same visitor id." }, { "variableId": "short term unjoined events percentage threshold", "threshold values": { "severity": "WARNING", "value": 5.0 } "description": "The threshold for the percentage of the events refers to a document id that is not in the catalog in the last 7 days." }, { "variableId": "long term unjoined events percentage threshold", "threshold values": { "severity": "WARNING", "value": 2.0 } "description": "The threshold for the percentage of the events refers to a document id that is not in the catalog in the last 90 days" } ] }, "result": "WARNING", "requirementCondition": { "expression": "doc with same title percentage \u003c doc with same title percentage threshold && most common visitor id percentage \u003c most common visitor id percentage threshold && short term unjoined events percentage \u003c short term unjoined events percentage threshold && long term unjoined events percentage \u003c long term unjoined events percentage threshold" }, "metricResults": [ { "name": "short term unjoined events percentage", "value": { "doubleValue": 0 }, "timestamp": "2024-06-06T03:03:13.416900898Z", "unit": "%", "metricType": "discoveryengine.googleapis.com/datastore/user events/unjoined events for document ids" }, { "name": "long term unjoined events percentage", "value": { "doubleValue": 0 }, "timestamp": "2024-06-06T03:03:13.417962744Z", "unit": "%", "metricType": "discoveryengine.googleapis.com/datastore/user events/unjoined events for document ids" }, { "name": "most common visitor id percentage", "value": { "doubleValue": 0.8 }, "timestamp": "2024-06-06T03:03:16.090037135Z", "unit": "%", "metricType": "discoveryengine.googleapis.com/datastore/user events/most used visitor id events" }, { "name": "doc with same title percentage", "value": { "doubleValue": 30.47 }, "timestamp": "2024-06-06T03:03:17.599458357Z", "unit": "%", "metricType": "discoveryengine.googleapis.com/documents/items with same title" } ], "oldestMetricTimestamp": "2024-06-06T03:03:13.416900898Z" } Review the output: Look for the value of result : If the value is SUCCESS , then your data passes the general requirements; continue to step 4.
- Example command and result This example is for the More Like This model and the watch duration objective: curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" -H "X-GFE-SSL: yes" -H "X-Goog-User-Project: my-project-123" "https://discoveryengine.googleapis.com/v1alpha/projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/branches/0/requirements:checkRequirement" -d '{ "location": "projects/my-project-123/locations/global", "requirementType": "discoveryengine.googleapis.com/media recs/mlt/wdps/warning", "resources": [ { "labels": { "branch id": "0", "collection id": "default collection", "datastore id": "my-data-store", "location id": "global", "project number": "my-project-123" }, "type": "discoveryengine.googleapis.com/Branch" }, { "labels": { "collection id": "default collection", "datastore id": "my-data-store", "location id": "global", "project number": "my-project-123" }, "type": "discoveryengine.googleapis.com/DataStore" } ] }' { "requirement": { "type": "discoveryengine.googleapis.com/media recs/mlt/wdps/warning", "displayName": "Warning level requirements for 'More Like This' models and 'Watch duration per session' business objectives.", "description": "Requirements for the media recommendations model that will result in performance issue if not met for the 'More Like This' model and the 'Watch duration per session' business objective.", "condition": { "expression": "invalid sequence percentage \u003c= invalid sequence percentage threshold" }, "metricBindings": [ { "variableId": "invalid sequence percentage", "resourceType": "discoveryengine.googleapis.com/DataStore", "metricFilter": "metric.type = 'discoveryengine.googleapis.com/datastore/user events/invalid sequences media play media complete' AND metric.labels.is percentage = 'True' AND resource.labels.location id = 'global' AND resource.labels.collection id = 'default collection' AND resource.labels.project number = '123456' AND resource.labels.datastore id = 'my-data-store'", "description": "The percentage of invalid sequences for media play and media complete events sampled by randomly selected visitor ids.", "category": "DataStore" } ], "thresholdBindings": [ { "variableId": "invalid sequence percentage threshold", "thresholdValues": [ { "severity": "WARNING", "value": 50 } ], "description": "The threshold for the percentage of invalid sequences sampled among all media play and media complete events." } ] }, "result": "SUCCESS", "requirementCondition": { "expression": "invalid sequence percentage \u003c= invalid sequence percentage threshold" }, "metricResults": [ { "name": "invalid sequence percentage", "value": { "doubleValue": 0 }, "timestamp": "2024-06-06T02:32:00.460056386Z", "unit": "%", "metricType": "discoveryengine.googleapis.com/datastore/user events/invalid sequences media play media complete" } ], "oldestMetricTimestamp": "2024-06-06T02:32:00.460056386Z" } Review the output: Look for the value of result : If the value is SUCCESS , then your data is good enough.
- If the model and objective combination used for your recommendations app appears in this table, then you also need to call the check requirement method, updated with the values for your model and objective: Model Objective MODEL OBJ Others You May Like Conversion rate oyml/cvr Recommended for You Conversion rate rfy/cvr More Like This Conversion rate mlt/cvr Most Popular Conversion rate mp/cvr Others You May Like Watch duration per session oyml/wdps Recommended for You Watch duration per session rfy/wdps More Like This Watch duration per session mlt/wdps curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -H "X-GFE-SSL: yes" \ -H "X-Goog-User-Project: PROJECT ID " \ "https://discoveryengine.googleapis.com/v1alpha/projects/ PROJECT ID /locations/global/requirements:checkRequirement" \ -d '{ "location": "projects/ PROJECT ID /locations/global", "requirementType": "discoveryengine.googleapis.com/media recs/ MODEL OBJ /warning", "resources": [ { "labels": { "branch id": "0", "collection id": "default collection", "datastore id": " DATA STORE ID ", "location id": "global", "project number": " PROJECT ID " }, "type": "discoveryengine.googleapis.com/Branch" }, { "labels": { "collection id": "default collection", "datastore id": " DATA STORE ID ", "location id": "global", "project number": " PROJECT ID " }, "type": "discoveryengine.googleapis.com/DataStore" } ] }' Replace the following: PROJECT ID : the ID of your Google Cloud project.

