---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:57.854Z"
product_name: "Service Directory"
product_slug: "service-directory"
feature_name: "Service Directory integration with Traffic Director"
feature_slug: "service-directory-integration-with-traffic-director"
latest_feature_date: "2022-02-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-directory/docs/samples/servicedirectory-create-service"
  - "https://docs.cloud.google.com/service-directory/docs/configuring-service-directory"
  - "https://docs.cloud.google.com/service-directory/docs/reference/rest/v1/projects.locations/list"
keywords:
  - "directory"
  - "integration"
  - "with"
  - "traffic"
  - "director"
  - "is"
  - "integrated"
  - "in"
---

# Service Directory integration with Traffic Director

Product: Service Directory
Coverage: MEDIUM

## Step 02 Summary

Service Directory is integrated with Traffic Director in Preview, exposing registered services to mesh applications and Traffic Director gateways.

## Extended Definition

Service Directory is integrated with Traffic Director in Preview, exposing registered services to mesh applications and Traffic Director gateways.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-directory/docs/samples/servicedirectory-create-service](https://docs.cloud.google.com/service-directory/docs/samples/servicedirectory-create-service)
- [https://docs.cloud.google.com/service-directory/docs/configuring-service-directory](https://docs.cloud.google.com/service-directory/docs/configuring-service-directory)
- [https://docs.cloud.google.com/service-directory/docs/reference/rest/v1/projects.locations/list](https://docs.cloud.google.com/service-directory/docs/reference/rest/v1/projects.locations/list)

## Supporting Pages

### Create service | Service Directory | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-directory/docs/samples/servicedirectory-create-service](https://docs.cloud.google.com/service-directory/docs/samples/servicedirectory-create-service)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment. # project = &quot;Your Google Cloud project ID&quot; # location = &quot;The Google Cloud region containing the namespace&quot; # namespace = &quot;The name of the parent namespace&quot; # service = &quot;The name of the service you are creating&quot; require &quot;google/cloud/service directory&quot; # Initialize the client registration service = Google::Cloud::ServiceDirectory.registration service # The parent path of the service parent = registration service.namespace path( project: project, location: location, namespace: namespace ) # Use the Service Directory API to create the service response = registration service.create service parent: parent, service id: service puts &quot;Created service: #{response.name}&quot;
- Create service Service Directory Google Cloud Documentation Source URL: https://docs.cloud.google.com/service-directory/docs/samples/servicedirectory-create-service To authenticate to Service Directory, set up Application Default Credentials.

### Configure Service Directory | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-directory/docs/configuring-service-directory](https://docs.cloud.google.com/service-directory/docs/configuring-service-directory)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure Service Directory Google Cloud Documentation Source URL: https://docs.cloud.google.com/service-directory/docs/configuring-service-directory Within a region, projects can have multiple namespaces, and those namespaces can be in different regions.
- In the Google Cloud console, go to the Service Directory namespaces page.
- A single namespace can&#x27;t span multiple regions.

### Method: projects.locations.list | Service Directory | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-directory/docs/reference/rest/v1/projects.locations/list](https://docs.cloud.google.com/service-directory/docs/reference/rest/v1/projects.locations/list)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Method: projects.locations.list Service Directory Google Cloud Documentation Source URL: https://docs.cloud.google.com/service-directory/docs/reference/rest/v1/projects.locations/list Lists information about the supported locations for this service · GET https://servicedirectory.googleapis.com/v1/{name=projects/ }/locations

