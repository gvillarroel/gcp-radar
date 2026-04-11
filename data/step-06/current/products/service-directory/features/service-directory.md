---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:57.857Z"
product_name: "Service Directory"
product_slug: "service-directory"
feature_name: "Service Directory"
feature_slug: "service-directory"
latest_feature_date: "2020-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-directory/docs/samples/servicedirectory-create-service"
  - "https://docs.cloud.google.com/service-directory/docs/reference/rest/v1/projects.locations/list"
  - "https://docs.cloud.google.com/iam/docs/roles-permissions/servicedirectory"
keywords:
  - "directory"
  - "is"
  - "now"
  - "available"
  - "in"
  - "beta"
---

# Service Directory

Product: Service Directory
Coverage: MEDIUM

## Step 02 Summary

Service Directory is now available in Beta.

## Extended Definition

Service Directory is now available in Beta.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-directory/docs/samples/servicedirectory-create-service](https://docs.cloud.google.com/service-directory/docs/samples/servicedirectory-create-service)
- [https://docs.cloud.google.com/service-directory/docs/reference/rest/v1/projects.locations/list](https://docs.cloud.google.com/service-directory/docs/reference/rest/v1/projects.locations/list)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/servicedirectory](https://docs.cloud.google.com/iam/docs/roles-permissions/servicedirectory)

## Supporting Pages

### Create service | Service Directory | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-directory/docs/samples/servicedirectory-create-service](https://docs.cloud.google.com/service-directory/docs/samples/servicedirectory-create-service)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment. # project = &quot;Your Google Cloud project ID&quot; # location = &quot;The Google Cloud region containing the namespace&quot; # namespace = &quot;The name of the parent namespace&quot; # service = &quot;The name of the service you are creating&quot; require &quot;google/cloud/service directory&quot; # Initialize the client registration service = Google::Cloud::ServiceDirectory.registration service # The parent path of the service parent = registration service.namespace path( project: project, location: location, namespace: namespace ) # Use the Service Directory API to create the service response = registration service.create service parent: parent, service id: service puts &quot;Created service: #{response.name}&quot;
- Create service Service Directory Google Cloud Documentation Source URL: https://docs.cloud.google.com/service-directory/docs/samples/servicedirectory-create-service To authenticate to Service Directory, set up Application Default Credentials.

### Method: projects.locations.list | Service Directory | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-directory/docs/reference/rest/v1/projects.locations/list](https://docs.cloud.google.com/service-directory/docs/reference/rest/v1/projects.locations/list)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Method: projects.locations.list Service Directory Google Cloud Documentation Source URL: https://docs.cloud.google.com/service-directory/docs/reference/rest/v1/projects.locations/list Lists information about the supported locations for this service · GET https://servicedirectory.googleapis.com/v1/{name=projects/ }/locations

### Service Directory roles and permissions | Identity and Access Management (IAM) | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/iam/docs/roles-permissions/servicedirectory](https://docs.cloud.google.com/iam/docs/roles-permissions/servicedirectory)
- Source ID: `site-iam-reference`
- Final score: 119
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Service Directory roles and permissions Identity and Access Management (IAM) Google Cloud Documentation Source URL: https://docs.cloud.google.com/iam/docs/roles-permissions/servicedirectory This page lists the IAM roles and permissions for Service Directory.

