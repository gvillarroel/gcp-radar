---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:40:42.106Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: "Modern networking stack"
feature_slug: "modern-networking-stack"
latest_feature_date: "2016-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/understanding-firewalls"
  - "https://docs.cloud.google.com/appengine/docs/flexible/communicating-between-services"
  - "https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users"
keywords:
  - "modern"
  - "networking"
  - "stack"
  - "provides"
  - "increased"
  - "network"
  - "throughput"
  - "flexible"
---

# Modern networking stack

Product: App Engine flexible environment Python
Coverage: MEDIUM

## Step 02 Summary

The modern networking stack provides increased network throughput for flexible environment applications.

## Extended Definition

The modern networking stack provides increased network throughput for flexible environment applications.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/python/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/python/understanding-firewalls)
- [https://docs.cloud.google.com/appengine/docs/flexible/communicating-between-services](https://docs.cloud.google.com/appengine/docs/flexible/communicating-between-services)
- [https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users](https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users)

## Supporting Pages

### "Understanding the App Engine firewall \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/python/understanding-firewalls)
- Source ID: `site-docs-reference-2`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- If your App Engine flexible app uses Shared VPC , the App Engine flexible environment does not automatically create firewall rules. if you need to control access and allow traffic on the VPC network, you can create firewall rules on the Shared VPC network.
- In cases where your app is configured to use other networking services or products, you might need to create rules for controlling incoming traffic in both the App Engine firewall and the firewall or security settings of other products.
- These hidden firewall rules allow serving traffic and health check traffic to the flexible environment: Network name : The network specified in app.yaml , or the default network if no network is configured.
- Shared VPC The App Engine flexible environment can create firewall(s) depending on whether your app is configured to use a VPC network through Shared VPC .

### "Communicating between your services \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/communicating-between-services](https://docs.cloud.google.com/appengine/docs/flexible/communicating-between-services)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- In the flexible environment, deploy each client version to the same Shared VPC network.
- Learn how to authorize the requests between your services and other Google Cloud services: Provide credentials for Application Default Credentials Using user-managed service accounts Your App Engine services can also communicate using Pub/Sub , which provides reliable asynchronous many-to-many messaging between processes, including App Engine.
- Private Communication Communication between services in the same project You can allow an App Engine flexible service to communicate with another App Engine service in the same project without having to expose the destination service to the public internet.
- Communication between services in different projects You can have private access between Google Cloud projects when apps running in projects belong to a Shared VPC network that is configured to invoke an app running in the Shared VPC network's host project.

### "Authenticating users \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users](https://docs.cloud.google.com/appengine/docs/flexible/authenticating-users)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Similar to Identity Platform, Firebase Authentication supports multiple authentication methods (SAML, OIDC, email/password, social, mobile, and custom auth) to provide flexible integration options for any identity solution.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Authenticating users Stay organized with collections Save and categorize content based on your preferences.
- Identity Platform is built on Google Cloud's global scale, performance, network, and security, and comes with an enterprise-grade support and SLA to meet the demands of virtually any app or service.
- Identity Platform supports multiple authentication methods (SAML, OIDC, email/password, social, phone, and custom auth) to provide flexible integration options for any identity solution.

