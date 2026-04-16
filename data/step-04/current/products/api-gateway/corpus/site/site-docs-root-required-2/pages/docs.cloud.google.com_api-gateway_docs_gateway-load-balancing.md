---
title: "Load balancing for API Gateway \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/api-gateway/docs/gateway-load-balancing
knowledge_key: corpus
source_id: site-docs-root-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/api-gateway/docs/about-api-gateway
source_metadata:
  url: https://docs.cloud.google.com/api-gateway/docs/gateway-load-balancing
  title: "Load balancing for API Gateway \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
API Gateway
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Load balancing for API Gateway
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
The integration of Global external Application Load Balancer and Classic Application Load Balancer support for API Gateway enables your serverless backends to take advantage of all the features provided by Cloud Load Balancing. By combining API Gateway with a global external Application Load Balancer or classic Application Load Balancer using a serverless Network Endpoint Group (serverless NEG) , you can:
Host gateways with custom branded domains
Configure TLS for gateways using certificates issued by a preferred certificate authority
Create a common entry point for a gateway routing to multiple backends
Deploy gateways in multiple geographic regions for high availability without managing URLs for each region
Protect gateways with Cloud Armor
Improve gateway response time by leveraging Cloud CDN
Using a serverless NEG for API Gateway
A network endpoint group (NEG) specifies a group of backend endpoints for a load balancer. A serverless NEG is a backend that points to a Google-hosted serverless backend like Cloud Run , App Engine , or API Gateway.
A serverless NEG backend for API Gateway can represent:
An API Gateway instance
A group of gateways configured with the same API config
The following figure shows how serverless NEGs can be used in the Cloud Load Balancing model:
As illustrated in an earlier example, a backend service can be managed by several serverless NEGs. Each serverless NEG can contain a single API Gateway instance or use a URL mask to point to multiple gateways. Because all NEGs acting as a backend service are used for load balancing, they should represent functionally equivalent gateway deployments. For example, all NEGs should have the same API config deployed to each gateway in different regions. If a backend service contains several NEGs, the load balancer will balance traffic between these NEGs while minimizing request latency.
Limitations on serverless NEGs and API Gateway
A few limitations should be considered when using serverless NEGs to integrate Cloud Load Balancing for API Gateway. Most notably:
Serverless NEGs cannot have any Network Endpoints , such as IP addresses or ports, attached.
Serverless NEGs can only point to API Gateway instances residing in the same region where the NEG is created.
Serverless NEGs can only point to API Gateway instances created in the same project as the load balancer using the Serverless NEG backend.
API Gateway doesn't support Ingress control settings. As a result, there is no way to disable access to your API Gateway using a service-generated gateway URL and ensure that all traffic is handled by the load balancer.
For more information on restrictions pertaining to serverless NEGs and backend services generally, see Limitations .
Limitations on serverless NEGs in backend service configurations
A backend service defines how Cloud Load Balancing distributes traffic. The backend service configuration contains a set of values, such as the protocol used to connect to backends, various distribution and session settings, health checks, and timeouts. For serverless NEGs used as a backend service for API Gateway, these settings provide fine-grained control over how your load balancer behaves.
The resource definition of a backend service has the following implications for your load balancing design:
Serverless NEGs cannot be used with other types of NEGs in the same backend service. For example, you cannot route to a GKE cluster and an API Gateway instance from the same backend service.
All serverless NEGs combined in a backend service must use the same type of backend. This means API Gateway serverless NEGs can only be combined with other API Gateway serverless NEGs, App Engine serverless NEGs can only be combined with App Engine serverless NEGs.
A backend service may only contain one Serverless NEG per region.
When defining a backend service configuration that routes to a serverless NEG, the following field limitations apply:
The balancingMode cannot be specified
The healthCheck field must be empty and cannot be specified
Ports cannot be specified
Only HTTP and HTTPS protocols are supported.
Values specified in utilization or connection -related fields are not supported.
The IAP , cdnPolicy , and securityPolicy fields in the backend service configuration are valid for serverless NEGs. These fields can be used to set up Identity-Aware Proxy , Cloud CDN , and Cloud Armor respectively with your API Gateway service.
What's next?
Configure a load balancer with Getting started with global external Application Load Balancer for API Gateway
Walk through Creating multi-region deployments for API Gateway
Learn more about Using custom domains
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
