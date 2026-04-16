---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:11:52.461Z"
product_name: "API Gateway"
product_slug: "api-gateway"
feature_name: "Data residency support for API Gateway data at rest"
feature_slug: "data-residency-support-for-api-gateway-data-at-rest"
latest_feature_date: "2025-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/api-gateway/docs/about-api-gateway"
  - "https://docs.cloud.google.com/api-gateway/docs/architecture-overview"
  - "https://docs.cloud.google.com/api-gateway/docs/reference/rest"
keywords:
  - "requirements"
  - "residency"
  - "stored"
  - "customer"
  - "supports"
  - "rest"
---

# Data residency support for API Gateway data at rest

Product: API Gateway
Coverage: MEDIUM

## Step 02 Summary

API Gateway now supports data residency requirements for customer data stored at rest.

## Extended Definition

API Gateway now supports data residency requirements for customer data stored at rest.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/api-gateway/docs/about-api-gateway](https://docs.cloud.google.com/api-gateway/docs/about-api-gateway)
- [https://docs.cloud.google.com/api-gateway/docs/architecture-overview](https://docs.cloud.google.com/api-gateway/docs/architecture-overview)
- [https://docs.cloud.google.com/api-gateway/docs/reference/rest](https://docs.cloud.google.com/api-gateway/docs/reference/rest)

## Supporting Pages

### About API Gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/api-gateway/docs/about-api-gateway](https://docs.cloud.google.com/api-gateway/docs/about-api-gateway)
- Source ID: `site-docs-reference-required-2`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- A consistent API: Makes it convenient for app developers to consume your services Lets you change the backend service implementation without affecting the public API Lets you take advantage of the scaling, monitoring, and security features built into the Google Cloud The following image shows app developers making requests to your backend services through API Gateway: Using API Gateway, app developers consume your REST APIs to implement apps.
- API Gateway supports the same authentication mechanism and syntax as used by Cloud Endpoints , including using: API keys Authentication methods at Google Google ID tokens You can also use the Google Cloud console to share your API with other developers so they can enable your API and generate API keys to call it.
- For example, the following table describes an example of a REST API that could return information about a book: Property Value Description URL https://www.mybooksapi.com/books/info Return the title, author, and publishing date of a book based on its International Standard Book Number (ISBN).
- API Gateway API Gateway enables you to provide secure access to your services through a well-defined REST API that is consistent across all of your services, regardless of service implementation.

### API Gateway Architecture \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/api-gateway/docs/architecture-overview](https://docs.cloud.google.com/api-gateway/docs/architecture-overview)
- Source ID: `site-docs-reference-required-2`
- Final score: 43
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The OpenAPI spec defines the publicly facing URL of the REST endpoint for the API, the backend service accessed by the API, and any other characteristics of the API such as authentication, data format, and response options.
- The API client only needs to know the URL of the API, the request verb (such as GET , PUT , POST , DELETE ), any authentication requirements, and the format of any data sent to or received from the API.
- API Gateway provides secure access to your backend services through a well-defined REST API that is consistent across all of your services, regardless of the service implementation.
- An API client can be any app capable of making a REST call, such as a browser, mobile app, or web app.

### API Gateway API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/api-gateway/docs/reference/rest](https://docs.cloud.google.com/api-gateway/docs/reference/rest)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Resource: v1beta.projects.locations REST Resource: v1beta.projects.locations.apis REST Resource: v1beta.projects.locations.apis.configs REST Resource: v1beta.projects.locations.gateways REST Resource: v1beta.projects.locations.operations REST Resource: v1alpha2.projects.locations REST Resource: v1alpha2.projects.locations.apis REST Resource: v1alpha2.projects.locations.apis.configs REST Resource: v1alpha2.projects.locations.gateways REST Resource: v1alpha2.projects.locations.operations REST Resource: v1alpha1.projects.locations REST Resource: v1alpha1.projects.locations.apis REST Resource: v1alpha1.projects.locations.apis.configs REST Resource: v1alpha1.projects.locations.gateways REST Resource: v1alpha1.projects.locations.operations REST Resource: v1.projects.locations REST Resource: v1.projects.locations.apis REST Resource: v1.projects.locations.apis.configs REST Resource: v1.projects.locations.gateways REST Resource: v1.projects.locations.operations Service: apigateway.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v1beta.projects.locations.apis.configs Methods create POST /v1beta/{parent=projects/ /locations/ /apis/ }/configs Creates a new ApiConfig in a given project and location. delete DELETE /v1beta/{name=projects/ /locations/ /apis/ /configs/ } Deletes a single ApiConfig. get GET /v1beta/{name=projects/ /locations/ /apis/ /configs/ } Gets details of a single ApiConfig. getIamPolicy GET /v1beta/{resource=projects/ /locations/ /apis/ /configs/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1beta/{parent=projects/ /locations/ /apis/ }/configs Lists ApiConfigs in a given project and location. patch PATCH /v1beta/{apiConfig.name=projects/ /locations/ /apis/ /configs/ } Updates the parameters of a single ApiConfig. setIamPolicy POST /v1beta/{resource=projects/ /locations/ /apis/ /configs/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1beta/{resource=projects/ /locations/ /apis/ /configs/ }:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v1.projects.locations.apis.configs Methods create POST /v1/{parent=projects/ /locations/ /apis/ }/configs Creates a new ApiConfig in a given project and location. delete DELETE /v1/{name=projects/ /locations/ /apis/ /configs/ } Deletes a single ApiConfig. get GET /v1/{name=projects/ /locations/ /apis/ /configs/ } Gets details of a single ApiConfig. getIamPolicy GET /v1/{resource=projects/ /locations/ /apis/ /configs/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent=projects/ /locations/ /apis/ }/configs Lists ApiConfigs in a given project and location. patch PATCH /v1/{apiConfig.name=projects/ /locations/ /apis/ /configs/ } Updates the parameters of a single ApiConfig. setIamPolicy POST /v1/{resource=projects/ /locations/ /apis/ /configs/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1/{resource=projects/ /locations/ /apis/ /configs/ }:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v1beta.projects.locations.gateways Methods create POST /v1beta/{parent=projects/ /locations/ }/gateways Creates a new Gateway in a given project and location. delete DELETE /v1beta/{name=projects/ /locations/ /gateways/ } Deletes a single Gateway. get GET /v1beta/{name=projects/ /locations/ /gateways/ } Gets details of a single Gateway. getIamPolicy GET /v1beta/{resource=projects/ /locations/ /gateways/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1beta/{parent=projects/ /locations/ }/gateways Lists Gateways in a given project and location. patch PATCH /v1beta/{gateway.name=projects/ /locations/ /gateways/ } Updates the parameters of a single Gateway. setIamPolicy POST /v1beta/{resource=projects/ /locations/ /gateways/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1beta/{resource=projects/ /locations/ /gateways/ }:testIamPermissions Returns permissions that a caller has on the specified resource.

