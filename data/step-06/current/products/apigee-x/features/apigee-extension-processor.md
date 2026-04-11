---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:42.840Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee Extension Processor"
feature_slug: "apigee-extension-processor"
latest_feature_date: "2025-04-10"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
keywords:
  - "third-party service integration"
  - "AP extension processor"
  - "Cloud Load Balancing"
  - "Google Cloud services via extension"
  - "Extension Processor integration"
  - "Apigee Extension Processor"
  - "Extension Processor"
  - "extension processor"
---

# Apigee Extension Processor

Product: Apigee X
Coverage: HIGH

## Step 02 Summary

The Apigee Extension Processor is generally available, enabling API management capabilities for Google Cloud and third-party services exposed through Cloud Load Balancing.

## Extended Definition

The Apigee Extension Processor is a traffic extension (a type of service extension) that uses Cloud Load Balancing to route callouts from the application load balancer’s data-processing path to the processor. It is used to extend API request handling, including authorization and authentication flows, such as injecting Google auth tokens for backend services like Vertex AI.

## Evidence Summary

The cited Apigee quickstart page defines the feature’s role as a Cloud Load Balancing-linked service extension and gives an integration use case for request auth and token injection to backend APIs.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)

## Supporting Pages

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: STRONG
- Re-rank rationale: The page is a getting-started guide specifically for configuring the Apigee Extension Processor and using it with a Service Extensions-enabled load balancer.

Evidence snippets:
- The Apigee Extension Processor is a traffic extension (a type of Service Extension) that lets you use Cloud Load Balancing to send callouts from the data processing path of the application load balancer to the Apigee Extension Processor.
- Go to the VPC Networks page in the Google Cloud console: Go to VPC Networks Required roles To get the permissions that you need to install the Apigee Extension Processor, ask your administrator to grant you the following IAM roles: Create and manage service accounts: Service Account Admin ( roles/iam.serviceAccountAdmin ) on organization Create and manage service extensions: Service Extensions Admin ( roles/networkservices.serviceExtensionsAdmin ) on organization Create and manage network endpoint groups (NEGs): Compute Instance Admin ( roles/compute.instanceAdmin ) on organization Create and manage networking resources: Compute Network Admin ( roles/compute.networkAdmin ) on organization Create and manage backend services: Compute Load Balancer Admin ( roles/compute.loadBalancerAdmin ) on organization Create and manage Apigee resources: Apigee Org Admin ( roles/apigee.admin ) on organization Create and manage traffic extensions: Apigee APIM Service Extension Admin ( roles/apigee.apimServiceExtensionAdmin ) on organization View traffic extensions: Apigee APIM Service Extension Viewer ( roles/apigee.apimServiceExtensionViewer ) on organization Manage long-running operations: Apigee APIM Service Extension Service Agent ( roles/apigee.apimServiceExtensionServiceAgent ) on the service agent in the Google Cloud project For more information about granting roles, see Manage access to projects, folders, and organizations .
- This scenario would be useful for API providers using the Apigee Extension Processor to authorize and authenticate requests to their Apigee services and seamlessly inject the Google auth tokens required for a backend service like Vertex AI.
- Home Documentation Application development Apigee Guides Send feedback Get started with the Apigee Extension Processor Stay organized with collections Save and categorize content based on your preferences.

