---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.949Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Vertex AI Search media recommendations"
feature_slug: "vertex-ai-search-media-recommendations"
latest_feature_date: "2023-10-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/check-media-data-quality"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media-recommendations-types"
keywords:
  - "vertex"
  - "ai"
  - "search"
  - "media"
  - "recommendations"
  - "introduces"
  - "capability"
  - "for"
---

# Vertex AI Search media recommendations

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Vertex AI Search introduces a media recommendations capability for building apps that recommend media content such as videos, news, and music, including migration of existing Discovery for Media data and models.

## Extended Definition

Vertex AI Search introduces a media recommendations capability for building apps that recommend media content such as videos, news, and music, including migration of existing Discovery for Media data and models.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/check-media-data-quality](https://docs.cloud.google.com/generative-ai-app-builder/docs/check-media-data-quality)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media-recommendations-types](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media-recommendations-types)

## Supporting Pages

### "Introduction to media search and recommendations \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media)
- Source ID: `site-api-reference`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Vertex AI Search includes two capabilities specific for the media industry: Media recommendations.
- This page introduces and describes the capabilities of Vertex AI Search for media.
- Home Documentation AI and ML Vertex AI Search Send feedback Introduction to media search and recommendations Stay organized with collections Save and categorize content based on your preferences.
- The page also provides links to more information, tutorials and checklists, to get you started with Vertex AI Search for media.

### "Check data quality for media recommendations \_|\_ Vertex AI Search \_|\_\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/check-media-data-quality](https://docs.cloud.google.com/generative-ai-app-builder/docs/check-media-data-quality)
- Source ID: `site-api-reference`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Search Send feedback Check data quality for media recommendations Stay organized with collections Save and categorize content based on your preferences.
- AI Applications Click the name of the media recommendations app that you want check data quality for.
- Example command and result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" -H "X-GFE-SSL: yes" -H "X-Goog-User-Project: my-project-123" "https://discoveryengine.googleapis.com/v1alpha/projects/my-project-123/locations/global/requirements:checkRequirement" -d '{ "location": "projects/123456/locations/global", "requirementType": "discoveryengine.googleapis.com/media recs/general/all/warning", "resources": [ { "labels": { "branch id": "0", "collection id": "default collection", "datastore id": "my-data-store", "location id": "global", "project number": "123456" }, "type": "discoveryengine.googleapis.com/Branch" }, { "labels": { "collection id": "default collection", "datastore id": "my-data-store", "location id": "global", "project number": "123456" }, "type": "discoveryengine.googleapis.com/DataStore" } ] }' { "requirement": { "type": "discoveryengine.googleapis.com/media recs/general/all/warning", "displayName": "Warning level requirements for all models and all business objectives.", "description": "Requirements for the media recommendations model that will result in performance issue if not met for all media recommendations models and all business objectives.", "condition": { "expression": "doc with same title percentage \u003c doc with same title percentage threshold && most common visitor id percentage \u003c most common visitor id percentage threshold && short term unjoined events percentage \u003c short term unjoined events percentage threshold && long term unjoined events percentage \u003c long term unjoined events percentage threshold" }, "metricBindings": [ { "variableId": "doc with same title percentage", "resourceType": "discoveryengine.googleapis.com/Branch", "metricFilter": "metric.type = 'discoveryengine.googleapis.com/branch/documents/items with same title' AND metric.labels.is percentage = 'True' AND resource.labels.project number = '123456' AND resource.labels.branch id = '0' AND resource.labels.datastore id = 'my-data-store' AND resource.labels.location id = 'global' AND resource.labels.collection id = 'default collection'", "description": "The percentage of the documents with the same title in a branch.", "category": "Document" }, { "variableId": "most common visitor id percentage", "resourceType": "discoveryengine.googleapis.com/DataStore", "metricFilter": "metric.type = 'discoveryengine.googleapis.com/branch/datastore/user events/most used visitor id events' AND metric.labels.is percentage = 'True' AND resource.labels.datastore id = 'my-data-store' AND resource.labels.project number = '123456' AND resource.labels.location id = 'global' AND resource.labels.collection id = 'default collection'", "description": "The percentage of the events with the same visitor id.", "category": "DataStore" }, { "variableId": "short term unjoined events percentage", "resourceType": "discoveryengine.googleapis.com/DataStore", "metricFilter": "metric.type = 'discoveryengine.googleapis.com/datastore/user events/unjoined events for document ids' AND metric.labels.is percentage = 'True' AND metric.conditions.time range = 'WEEK' AND resource.labels.datastore id = 'my-data-store' AND resource.labels.project number = '123456' AND resource.labels.location id = 'global' AND resource.labels.collection id = 'default collection'", "description": "The percentage of events refers to a document id that is not in the catalog in the last 7 days.", "category": "DataStore" }, { "variableId": "long term unjoined events percentage", "resourceType": "discoveryengine.googleapis.com/DataStore", "metricFilter": "metric.type = 'discoveryengine.googleapis.com/datastore/user events/unjoined events for document ids' AND metric.labels.is percentage = 'True' AND metric.conditions.time range = 'NINETY DAYS' AND resource.labels.datastore id = 'my-data-store' AND resource.labels.project number = '123456' AND resource.labels.location id = 'global' AND resource.labels.collection id = 'default collection'", "description": "The percentage of events refers to a document id that is not in the catalog in the last 90 days.", "category": "DataStore" } ], "thresholdBindings": [ { "variableId": "doc with same title percentage threshold", "threshold values": { "severity": "WARNING", "value": 1.0 } "description": "The threshold for the percentage of the documents with the same title in a branch." }, { "variableId": "most common visitor id percentage threshold", "threshold values": { "severity": "WARNING", "value": 5.0 } "description": "The threshold for the percentage of the events with the same visitor id." }, { "variableId": "short term unjoined events percentage threshold", "threshold values": { "severity": "WARNING", "value": 5.0 } "description": "The threshold for the percentage of the events refers to a document id that is not in the catalog in the last 7 days." }, { "variableId": "long term unjoined events percentage threshold", "threshold values": { "severity": "WARNING", "value": 2.0 } "description": "The threshold for the percentage of the events refers to a document id that is not in the catalog in the last 90 days" } ] }, "result": "WARNING", "requirementCondition": { "expression": "doc with same title percentage \u003c doc with same title percentage threshold && most common visitor id percentage \u003c most common visitor id percentage threshold && short term unjoined events percentage \u003c short term unjoined events percentage threshold && long term unjoined events percentage \u003c long term unjoined events percentage threshold" }, "metricResults": [ { "name": "short term unjoined events percentage", "value": { "doubleValue": 0 }, "timestamp": "2024-06-06T03:03:13.416900898Z", "unit": "%", "metricType": "discoveryengine.googleapis.com/datastore/user events/unjoined events for document ids" }, { "name": "long term unjoined events percentage", "value": { "doubleValue": 0 }, "timestamp": "2024-06-06T03:03:13.417962744Z", "unit": "%", "metricType": "discoveryengine.googleapis.com/datastore/user events/unjoined events for document ids" }, { "name": "most common visitor id percentage", "value": { "doubleValue": 0.8 }, "timestamp": "2024-06-06T03:03:16.090037135Z", "unit": "%", "metricType": "discoveryengine.googleapis.com/datastore/user events/most used visitor id events" }, { "name": "doc with same title percentage", "value": { "doubleValue": 30.47 }, "timestamp": "2024-06-06T03:03:17.599458357Z", "unit": "%", "metricType": "discoveryengine.googleapis.com/documents/items with same title" } ], "oldestMetricTimestamp": "2024-06-06T03:03:13.416900898Z" } Review the output: Look for the value of result : If the value is SUCCESS , then your data passes the general requirements; continue to step 4.
- Example command and result This example is for the More Like This model and the watch duration objective: curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" -H "X-GFE-SSL: yes" -H "X-Goog-User-Project: my-project-123" "https://discoveryengine.googleapis.com/v1alpha/projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/branches/0/requirements:checkRequirement" -d '{ "location": "projects/my-project-123/locations/global", "requirementType": "discoveryengine.googleapis.com/media recs/mlt/wdps/warning", "resources": [ { "labels": { "branch id": "0", "collection id": "default collection", "datastore id": "my-data-store", "location id": "global", "project number": "my-project-123" }, "type": "discoveryengine.googleapis.com/Branch" }, { "labels": { "collection id": "default collection", "datastore id": "my-data-store", "location id": "global", "project number": "my-project-123" }, "type": "discoveryengine.googleapis.com/DataStore" } ] }' { "requirement": { "type": "discoveryengine.googleapis.com/media recs/mlt/wdps/warning", "displayName": "Warning level requirements for 'More Like This' models and 'Watch duration per session' business objectives.", "description": "Requirements for the media recommendations model that will result in performance issue if not met for the 'More Like This' model and the 'Watch duration per session' business objective.", "condition": { "expression": "invalid sequence percentage \u003c= invalid sequence percentage threshold" }, "metricBindings": [ { "variableId": "invalid sequence percentage", "resourceType": "discoveryengine.googleapis.com/DataStore", "metricFilter": "metric.type = 'discoveryengine.googleapis.com/datastore/user events/invalid sequences media play media complete' AND metric.labels.is percentage = 'True' AND resource.labels.location id = 'global' AND resource.labels.collection id = 'default collection' AND resource.labels.project number = '123456' AND resource.labels.datastore id = 'my-data-store'", "description": "The percentage of invalid sequences for media play and media complete events sampled by randomly selected visitor ids.", "category": "DataStore" } ], "thresholdBindings": [ { "variableId": "invalid sequence percentage threshold", "thresholdValues": [ { "severity": "WARNING", "value": 50 } ], "description": "The threshold for the percentage of invalid sequences sampled among all media play and media complete events." } ] }, "result": "SUCCESS", "requirementCondition": { "expression": "invalid sequence percentage \u003c= invalid sequence percentage threshold" }, "metricResults": [ { "name": "invalid sequence percentage", "value": { "doubleValue": 0 }, "timestamp": "2024-06-06T02:32:00.460056386Z", "unit": "%", "metricType": "discoveryengine.googleapis.com/datastore/user events/invalid sequences media play media complete" } ], "oldestMetricTimestamp": "2024-06-06T02:32:00.460056386Z" } Review the output: Look for the value of result : If the value is SUCCESS , then your data is good enough.

### "Vertex AI APIs for building search and RAG experiences \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)
- Source ID: `site-api-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Vertex AI Search works as an out-of-the-box semantic & keyword search engine for RAG with the ability to process a variety of document types and with connectors to a variety of source systems including BigQuery and many third party systems.
- Retrieval Choose the best retrieval method for your needs: Vertex AI Search: Vertex AI Search is a Google Search-quality information retrieval engine that can be a component of any generative AI application that uses your enterprise data.
- Home Documentation AI and ML Vertex AI Search Send feedback Vertex AI APIs for building search and RAG experiences Stay organized with collections Save and categorize content based on your preferences.
- Build your own retrieval: If you want to build your semantic search, you can rely on Vertex AI APIs for components of your custom RAG system.

### "About media app recommendations types \_|\_ Vertex AI Search \_|\_ Google\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media-recommendations-types](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media-recommendations-types)
- Source ID: `site-api-reference`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Search Send feedback About media app recommendations types Stay organized with collections Save and categorize content based on your preferences.
- Default optimization objective: click-through rate Default serving config: N/A Available customizations: Business objective Supported pages for app deployment: Detail page Home page (requires a context item) User event requirements: view-item or media-play for click-through rate objective ( media-play or view-item ) and media-complete for conversion rate objective and watch duration per session objective Most Popular The Most Popular recommendations type recommends media that has been most popular among all users in recent days.
- Recommendations types The following recommendations types are available with media recommendations apps: Others You May Like Recommended for You More Like This Most Popular Others You May Like The Others You May Like recommendations type recommends the next document that a user is most likely to engage with.
- User event requirements: view-item or media-play for click-through rate objective media-complete and either media-play or view-item for conversion rate objective and watch duration per session objective Recommended for You The Recommended for You recommendations type predicts the next document that a user is most likely to engage with based on the engagement history of that user.

