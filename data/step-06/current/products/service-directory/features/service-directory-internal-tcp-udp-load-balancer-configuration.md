---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:57.852Z"
product_name: "Service Directory"
product_slug: "service-directory"
feature_name: "Service Directory internal TCP/UDP load balancer configuration"
feature_slug: "service-directory-internal-tcp-udp-load-balancer-configuration"
latest_feature_date: "2022-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-directory/docs/sd-lb-overview"
  - "https://docs.cloud.google.com/service-directory/docs/sd-td-overview"
  - "https://docs.cloud.google.com/service-directory/docs/samples/servicedirectory-create-service"
keywords:
  - "directory"
  - "internal"
  - "tcp"
  - "udp"
  - "load"
  - "balancer"
  - "configuration"
  - "supports"
---

# Service Directory internal TCP/UDP load balancer configuration

Product: Service Directory
Coverage: MEDIUM

## Step 02 Summary

Service Directory supports configuring internal TCP/UDP load balancers in GA.

## Extended Definition

Service Directory supports configuring internal TCP/UDP load balancers in GA.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-directory/docs/sd-lb-overview](https://docs.cloud.google.com/service-directory/docs/sd-lb-overview)
- [https://docs.cloud.google.com/service-directory/docs/sd-td-overview](https://docs.cloud.google.com/service-directory/docs/sd-td-overview)
- [https://docs.cloud.google.com/service-directory/docs/samples/servicedirectory-create-service](https://docs.cloud.google.com/service-directory/docs/samples/servicedirectory-create-service)

## Supporting Pages

### Service Directory and load balancers | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-directory/docs/sd-lb-overview](https://docs.cloud.google.com/service-directory/docs/sd-lb-overview)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Service Directory and load balancers Google Cloud Documentation Source URL: https://docs.cloud.google.com/service-directory/docs/sd-lb-overview See standalone services, endpoints, and your load balancer endpoints with a single command in the Service Directory API.

### Service Directory for Cloud Service Mesh | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-directory/docs/sd-td-overview](https://docs.cloud.google.com/service-directory/docs/sd-td-overview)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This includes Google Cloud services such as GKE, internal passthrough Network Load Balancers, internal Application Load Balancers, and on-premises ...
- Service Directory for Cloud Service Mesh Google Cloud Documentation Source URL: https://docs.cloud.google.com/service-directory/docs/sd-td-overview Service Directory makes it easier to access and track your services in a single central registry.

### Create service | Service Directory | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-directory/docs/samples/servicedirectory-create-service](https://docs.cloud.google.com/service-directory/docs/samples/servicedirectory-create-service)
- Source ID: `site-docs-root`
- Final score: 69
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment. # project = &quot;Your Google Cloud project ID&quot; # location = &quot;The Google Cloud region containing the namespace&quot; # namespace = &quot;The name of the parent namespace&quot; # service = &quot;The name of the service you are creating&quot; require &quot;google/cloud/service directory&quot; # Initialize the client registration service = Google::Cloud::ServiceDirectory.registration service # The parent path of the service parent = registration service.namespace path( project: project, location: location, namespace: namespace ) # Use the Service Directory API to create the service response = registration service.create service parent: parent, service id: service puts &quot;Created service: #{response.name}&quot;
- Create service Service Directory Google Cloud Documentation Source URL: https://docs.cloud.google.com/service-directory/docs/samples/servicedirectory-create-service To authenticate to Service Directory, set up Application Default Credentials.

