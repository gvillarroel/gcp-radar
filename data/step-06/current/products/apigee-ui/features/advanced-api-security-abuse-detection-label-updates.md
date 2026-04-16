---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:10:02.162Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "Advanced API Security abuse detection label updates"
feature_slug: "advanced-api-security-abuse-detection-label-updates"
latest_feature_date: "2023-05-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/get-started/what-apigee"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy"
keywords:
  - "advanced"
  - "security"
  - "abuse"
  - "detection"
  - "label"
  - "updates"
  - "view"
  - "uses"
---

# Advanced API Security abuse detection label updates

Product: Apigee UI
Coverage: MEDIUM

## Step 02 Summary

The Advanced API Security abuse detection view uses updated labels for detection metrics and fields.

## Extended Definition

The Advanced API Security abuse detection view uses updated labels for detection metrics and fields.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview)
- [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/what-apigee](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/what-apigee)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy)

## Supporting Pages

### UI overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview)
- Source ID: `site-docs-reference-required-14`
- Final score: 87
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- API security Identify security threats and vulnerabilities with Advanced API Security .
- Whether you are a Pay-as-you-go or Subscription customer, this view provides you with a snapshot of key resource usage, as well as shortcuts to other monitoring and identity management resources for your organization, including: Cloud Monitoring Cloud Billing Identity and Access Management Explore Apigee API management features From the main navigation menu, you can explore the range of Apigee API management features available for your organization, as described in the table below: Main navigation menu Purpose Proxy development Develop and deploy API proxies .
- Apigee API management From the Overview page, you can: Get started as a new Apigee user Test your Apigee runtime View key resource usage metrics Explore Apigee API management features Get started as a new Apigee user If you just are new to Apigee, you can begin your API management journey with quickstart learning options launched from the Overview page: Begin by deploying your first proxy : Watch a video tutorial that walks you through the steps required to create and deploy an API proxy.
- For more advanced use cases, follow along with step-by-step video walkthroughs showcased in the Tutorials section of the page: Test your Apigee runtime If you just completed provisioning a new Apigee organization, use the Test your Apigee runtime card to deploy and call a proxy, as described below: Pay-as-you-go organization If you have a Pay-as-you-go organization: Click Deploy API to deploy the sample Hello World proxy to the test-env environment in your new runtime instance.

### What is Apigee? \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/what-apigee](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/what-apigee)
- Source ID: `site-docs-reference-required-14`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- API insights Apigee offers Advanced API security , API monitoring , and analytics features that enable API producers to secure access to their services, monitor uptime and traffic with alerting, and gain insight into how their APIs are being used.
- Challenges for API producers API producers face a specific set of challenges when exposing backend services, such as: Security : Because API producers make their services available over the web, they must take all necessary steps to secure and protect their services from unauthorized access.
- API discoverability Apigee offers API producers a developer-focused portal where client app developers can discover your APIs, find the documentation required to build applications using them, and register as an app developer to stay in sync with any updates or changes.
- Apigee provides a rich array of policies that allow you to add security, traffic management, data mediation, extensions, and other features to the API proxy layer for a robust, enterprise-grade API management solution.

### Building a simple API proxy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy)
- Source ID: `site-docs-reference-required-14`
- Final score: 79
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see OpenAPI spec for the helloworld sample . openapi : 3.0.0 info : description : OpenAPI Specification for the Apigee mock target service endpoint . version : 1.0.0 title : Mock Target API paths : / : get : summary : View personalized greeting operationId : View a personalized greeting description : View a personalized greeting for the specified or guest user . parameters : - name : user in : query description : Your user name . required : false schema : type : string responses : "200" : description : Success / help : get : summary : Get help operationId : Get help description : View help information about available resources in HTML format . responses : "200" : description : Success ...
- Otherwise, create a YAML file at /tmp/apigee-map.yaml with this configuration. defaultService : projects / dg - runtime - test1 / global / backendServices / YOUR BACKEND 1 name : matcher1 routeRules : - matchRules : - headerMatches : - headerName : Content - Type prefixMatch : application / grpc prefixMatch : / priority : 100 routeAction : weightedBackendServices : - backendService : projects / dg - runtime - test1 / global / backendServices / YOUR BACKEND 2 weight : 100 Apply the new YAML for gRPC routing gcloud compute url - maps import APIGEE URL MAP NAME \ -- source / tmp / apigee - map . yaml \ -- global - project $ PROJECT ID Adding security Proxy security is achieved by adding a policy to your proxy.
- Importing an API proxy from an API proxy bundle Note: When importing an API proxy from an API proxy bundle, you are responsible for configuring security in and adding policies to the bundle.
- You need to provide only the network address for the backend service, along with some information that Apigee uses to create the API proxy that is exposed to developers.

