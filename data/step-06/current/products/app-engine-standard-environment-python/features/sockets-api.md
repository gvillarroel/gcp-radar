---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.781Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Sockets API"
feature_slug: "sockets-api"
latest_feature_date: "2018-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref"
  - "https://cloud.google.com/appengine/docs/standard/communicating-between-services"
  - "https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services"
keywords:
  - "communication"
  - "sockets"
  - "socket"
  - "enables"
  - "based"
  - "network"
  - "applications"
---

# Sockets API

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

The Sockets API enables applications to use socket-based network communication on App Engine standard.

## Extended Definition

The Sockets API enables applications to use socket-based network communication on App Engine standard.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref](https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref)
- [https://cloud.google.com/appengine/docs/standard/communicating-between-services](https://cloud.google.com/appengine/docs/standard/communicating-between-services)
- [https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services](https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services)

## Supporting Pages

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref](https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Example automatic scaling : target cpu utilization : 0.65 min instances : 5 max instances : 100 min pending latency : 30ms max pending latency : automatic max concurrent requests : 50 basic scaling Applications that use an instance class of B1 or higher must specify either this element or manual scaling .
- For example, if App Engine calculates that 5 instances are necessary to serve traffic, and min idle instances is set to 2, App Engine will run 7 instances (5, calculated based on traffic, plus 2 additional per min idle instances ).
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback App Engine app.yaml reference Stay organized with collections Save and categorize content based on your preferences.
- App Engine calculates the number of instances necessary to serve your current application traffic based on scaling settings such as target cpu utilization and target throughput utilization .

### "Communicating between your services \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services](https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services)
- Source ID: `site-docs-reference`
- Final score: 79
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Communication between services in different projects You can have private access between Google Cloud projects when apps running in projects belong to a Shared VPC network that is configured to invoke an app running in the Shared VPC network's host project.
- Route the traffic over a Serverless VPC Access connector : For each App Engine version sending private traffic to other app endpoints, attach the version to a Serverless VPC Access connector belonging to one of the Google Cloud project's own networks, not a Shared VPC network.
- Private Communication Communication between services in the same project You can allow an App Engine standard service to communicate with another App Engine service in the same project without having to expose the destination service to the public internet.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Communicating between your services Stay organized with collections Save and categorize content based on your preferences.

### "Communicating between your services \_|\_ App Engine standard environment\

- URL: [https://cloud.google.com/appengine/docs/standard/communicating-between-services](https://cloud.google.com/appengine/docs/standard/communicating-between-services)
- Source ID: `site-docs-reference-3`
- Final score: 79
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Communication between services in different projects You can have private access between Google Cloud projects when apps running in projects belong to a Shared VPC network that is configured to invoke an app running in the Shared VPC network's host project.
- Route the traffic over a Serverless VPC Access connector : For each App Engine version sending private traffic to other app endpoints, attach the version to a Serverless VPC Access connector belonging to one of the Google Cloud project's own networks, not a Shared VPC network.
- Private Communication Communication between services in the same project You can allow an App Engine standard service to communicate with another App Engine service in the same project without having to expose the destination service to the public internet.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Communicating between your services Stay organized with collections Save and categorize content based on your preferences.

