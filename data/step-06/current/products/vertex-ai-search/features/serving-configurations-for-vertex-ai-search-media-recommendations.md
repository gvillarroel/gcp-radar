---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.944Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Serving configurations for Vertex AI Search media recommendations"
feature_slug: "serving-configurations-for-vertex-ai-search-media-recommendations"
latest_feature_date: "2023-12-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/check-media-data-quality"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media-recommendations-types"
keywords:
  - "serving"
  - "configurations"
  - "for"
  - "vertex"
  - "ai"
  - "search"
  - "media"
  - "recommendations"
---

# Serving configurations for Vertex AI Search media recommendations

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Allows creating, editing, and deleting multiple serving configurations for media recommendation apps and selecting different configs per request to tune demotion and diversity.

## Extended Definition

Allows creating, editing, and deleting multiple serving configurations for media recommendation apps and selecting different configs per request to tune demotion and diversity.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/check-media-data-quality](https://docs.cloud.google.com/generative-ai-app-builder/docs/check-media-data-quality)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media-recommendations-types](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media-recommendations-types)

## Supporting Pages

### "Configure serving controls for search \_|\_ Vertex AI Search \_|\_ Google\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls)
- Source ID: `site-api-reference`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Serving control types The following types of serving controls are available: Control Description Available for Boost control Changes the returned order of results Search apps with data stores that support a schema, such as data stores that contain structured data, websites with structured data (advanced website indexing), unstructured data with metadata, or media data Filter control Removes entries from returned results Search apps with data stores that support a schema, such as data stores that contain structured data, websites (advanced website indexing), unstructured data with metadata, or media data Synonyms control Associates queries with each other Search apps with website (advanced website indexing), structured, unstructured, or media data stores Redirect control Redirects to a specified URI All search apps Promote control Promotes a specified link for a query All search apps About conditions When creating a control, you can optionally define a condition that determines when the control is applied.
- Home Documentation AI and ML Vertex AI Search Send feedback Configure serving controls for search Stay organized with collections Save and categorize content based on your preferences.
- For example, suppose that you create a promote control with the following configuration in a data store with basic website search: { "conditions": [ { "queryTerms": [ { "value": "artificial intelligence", "fullMatch": true } ] } ]" ... promoteAction": { "dataStore": "https://discoveryengine.googleapis.com/v1alpha/projects/123456/locations/us/collections/default collection/dataStores/basic-website-data-store" \ "searchLinkPromotion": { "title": "What is AI?", "uri": "https://cloud.google.com/learn/what-is-artificial-intelligence", "description": "Explain what is AI" "enabled": true } } } Then, you send the following search request: curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1alpha/projects/123456/locations/us/collections/default collection/engines/basic-website-app/servingConfigs/default search:search" \ -d '{ "query": "artificial intelligence" }' You should receive a JSON response similar to the following truncated response.
- Create and attach promote serving controls A promote serving control lets you display a link as a promoted result and is available for the following types of search data stores: Website data stores with basic website search: For these data stores, you don't need to attach a promote control to the serving config of the app.

### "Introduction to media search and recommendations \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media)
- Source ID: `site-api-reference`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Vertex AI Search includes two capabilities specific for the media industry: Media recommendations.
- Home Documentation AI and ML Vertex AI Search Send feedback Introduction to media search and recommendations Stay organized with collections Save and categorize content based on your preferences.
- The page also provides links to more information, tutorials and checklists, to get you started with Vertex AI Search for media.
- This page introduces and describes the capabilities of Vertex AI Search for media.

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

### "About media app recommendations types \_|\_ Vertex AI Search \_|\_ Google\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media-recommendations-types](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media-recommendations-types)
- Source ID: `site-api-reference`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Default optimization objective: click-through rate Default serving config: N/A Available customizations: Business objective Supported pages for app deployment: Detail page Home page (requires a context item) User event requirements: view-item or media-play for click-through rate objective ( media-play or view-item ) and media-complete for conversion rate objective and watch duration per session objective Most Popular The Most Popular recommendations type recommends media that has been most popular among all users in recent days.
- Home Documentation AI and ML Vertex AI Search Send feedback About media app recommendations types Stay organized with collections Save and categorize content based on your preferences.
- Recommendations types The following recommendations types are available with media recommendations apps: Others You May Like Recommended for You More Like This Most Popular Others You May Like The Others You May Like recommendations type recommends the next document that a user is most likely to engage with.
- Supported pages for app deployment: Home page User event requirements: view-item or media-play for click-through rate objective media-complete for conversion rate objective Limitations: Most Popular doesn't support customizing serving configs or creating multiple serving configs Most Popular doesn't support filtering based on categories Optimization for business objectives The machine learning models that underlie media recommendation apps are created to optimize for a particular business objective, which determines how the model is built.

