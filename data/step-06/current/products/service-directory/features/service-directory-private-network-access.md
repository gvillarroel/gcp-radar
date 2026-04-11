---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:57.854Z"
product_name: "Service Directory"
product_slug: "service-directory"
feature_name: "Service Directory private network access"
feature_slug: "service-directory-private-network-access"
latest_feature_date: "2022-01-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-directory/docs/samples/servicedirectory-create-service"
  - "https://docs.cloud.google.com/service-directory/docs/configuring-service-directory"
  - "https://googleapis.dev/python/servicedirectory/latest/servicedirectory_v1beta1/lookup_service.html"
keywords:
  - "directory"
  - "private"
  - "network"
  - "access"
  - "enables"
  - "supported"
  - "services"
  - "to"
---

# Service Directory private network access

Product: Service Directory
Coverage: MEDIUM

## Step 02 Summary

Service Directory Private Network Access enables supported Google Cloud services to connect directly to VPC networks; Service Directory now supports private network access.

## Extended Definition

Service Directory Private Network Access enables supported Google Cloud services to connect directly to VPC networks; Service Directory now supports private network access.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-directory/docs/samples/servicedirectory-create-service](https://docs.cloud.google.com/service-directory/docs/samples/servicedirectory-create-service)
- [https://docs.cloud.google.com/service-directory/docs/configuring-service-directory](https://docs.cloud.google.com/service-directory/docs/configuring-service-directory)
- [https://googleapis.dev/python/servicedirectory/latest/servicedirectory_v1beta1/lookup_service.html](https://googleapis.dev/python/servicedirectory/latest/servicedirectory_v1beta1/lookup_service.html)

## Supporting Pages

### Create service | Service Directory | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-directory/docs/samples/servicedirectory-create-service](https://docs.cloud.google.com/service-directory/docs/samples/servicedirectory-create-service)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment. # project = &quot;Your Google Cloud project ID&quot; # location = &quot;The Google Cloud region containing the namespace&quot; # namespace = &quot;The name of the parent namespace&quot; # service = &quot;The name of the service you are creating&quot; require &quot;google/cloud/service directory&quot; # Initialize the client registration service = Google::Cloud::ServiceDirectory.registration service # The parent path of the service parent = registration service.namespace path( project: project, location: location, namespace: namespace ) # Use the Service Directory API to create the service response = registration service.create service parent: parent, service id: service puts &quot;Created service: #{response.name}&quot;
- Create service Service Directory Google Cloud Documentation Source URL: https://docs.cloud.google.com/service-directory/docs/samples/servicedirectory-create-service To authenticate to Service Directory, set up Application Default Credentials.

### Configure Service Directory | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-directory/docs/configuring-service-directory](https://docs.cloud.google.com/service-directory/docs/configuring-service-directory)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure Service Directory Google Cloud Documentation Source URL: https://docs.cloud.google.com/service-directory/docs/configuring-service-directory Within a region, projects can have multiple namespaces, and those namespaces can be in different regions.
- In the Google Cloud console, go to the Service Directory namespaces page.

### LookupService — google-cloud-service-directory documentation

- URL: [https://googleapis.dev/python/servicedirectory/latest/servicedirectory_v1beta1/lookup_service.html](https://googleapis.dev/python/servicedirectory/latest/servicedirectory_v1beta1/lookup_service.html)
- Source ID: `site-python-reference`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- LookupService — google-cloud-service-directory documentation Source URL: https://googleapis.dev/python/servicedirectory/latest/servicedirectory v1beta1/lookup service.html Service Directory API for looking up service data at runtime.

