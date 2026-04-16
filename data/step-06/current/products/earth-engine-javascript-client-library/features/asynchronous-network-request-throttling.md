---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:11:20.988Z"
product_name: "Earth Engine JavaScript Client Library"
product_slug: "earth-engine-javascript-client-library"
feature_name: "Asynchronous network request throttling"
feature_slug: "asynchronous-network-request-throttling"
latest_feature_date: "2016-02-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/apidocs"
  - "https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image"
  - "https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table"
keywords:
  - "asynchronous"
  - "network"
  - "request"
  - "throttling"
  - "adds"
  - "requests"
  - "made"
  - "client"
---

# Asynchronous network request throttling

Product: Earth Engine JavaScript Client Library
Coverage: MEDIUM

## Step 02 Summary

Adds throttling for asynchronous network requests made by the client library.

## Extended Definition

Adds throttling for asynchronous network requests made by the client library.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/apidocs](https://developers.google.com/earth-engine/apidocs)
- [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image)
- [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table)

## Supporting Pages

### API Reference \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/apidocs](https://developers.google.com/earth-engine/apidocs)
- Source ID: `site-docs-reference`
- Final score: 51
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See this reference for methods available through the client libraries: The ee package for formulating requests to Earth Engine.
- Client Libraries (JavaScript and Python) translate code into server requests.
- Client Libraries The open source JavaScript and Python Client libraries ( GitHub repo ) translate Earth Engine code into request objects sent to Earth Engine servers.
- The REST API section offers reference for the Earth Engine restful API with information on endpoints, requests, and responses.

### "Image computations with the Earth Engine REST API \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image)
- Source ID: `site-docs-reference`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- Make a GET request through the session to check that the credentials work. from google.auth.transport.requests import AuthorizedSession from google.oauth2 import service account credentials = service account .
- Before sending a request to compute something, the computation needs to be put into the Earth Engine expression graph format by serializing the computation defined with the client API.
- Making compute requests through the REST API corresponds to a POST request to one of the compute endpoints, for example computePixels , computeFeatures , or the generic value.compute .
- Authenticate to Google Cloud The first thing to do is login so that you can make authenticated requests to Google Cloud.

### "Table computations with the Earth Engine REST API \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table)
- Source ID: `site-docs-reference`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- Authentication is required to make requests to Google Cloud and Earth Engine, which can be done by logging in with your Google Cloud project and using a service account key file to obtain credentials for an authorized session.
- Make a GET request through the session to check that the credentials work. from google.auth.transport.requests import AuthorizedSession from google.oauth2 import service account credentials = service account .
- Authenticate to Google Cloud The first thing to do is login so that you can make authenticated requests to Google Cloud.
- Use the credentials to create an authorized session to make HTTP requests.

