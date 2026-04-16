---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.874Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "CPU Utilization metric in App Engine standard environment"
feature_slug: "cpu-utilization-metric-in-app-engine-standard-environment"
latest_feature_date: "2021-03-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/config/appref"
keywords:
  - "cpu"
  - "utilization"
  - "metric"
  - "app"
  - "engine"
  - "standard"
  - "environment"
  - "introduced"
---

# CPU Utilization metric in App Engine standard environment

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

App Engine standard environment introduced a CPU Utilization metric that reports average CPU utilization across active instances.

## Extended Definition

App Engine standard environment introduced a CPU Utilization metric that reports average CPU utilization across active instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)

## Supporting Pages

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- However, if you create a connector in a service project and the connector targets a Shared VPC network in the host project, you must add firewall rules to allow necessary traffic for the connector's operation from the following ranges: Serverless infrastructure IP range : 35.199.224.0/19 Health check probe IP ranges : 35.191.0.0/16 , 35.191.192.0/18 , and 130.211.0.0/22 These ranges are used by the Google infrastructure underlying Cloud Run, Cloud Run functions, and App Engine standard environment.
- This page shows how to use Serverless VPC Access to connect your App Engine services in the standard environment directly to your VPC network, allowing access to Compute Engine VM instances, Memorystore instances, and any other resources with an internal IP address.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Connecting to a VPC network Stay organized with collections Save and categorize content based on your preferences.
- Learn how to connect to Memorystore from the App Engine standard environment.

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference-2`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- One of the benefits App Engine standard environment's "pay for only what you need" platform as described earlier in Scaling Down is that the system autoscales the number of instances down to zero when there is no traffic.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How instances are managed Stay organized with collections Save and categorize content based on your preferences.
- Note: For new projects you create after March 2025, App Engine sets the automatic scaling maximum instances default for standard environment deployments to 20.
- NTP with App Engine standard environment The App Engine standard environment has network time protocol (NTP) services which use Google NTP servers.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback App Engine app.yaml reference Stay organized with collections Save and categorize content based on your preferences.
- Note: For new projects you create after March 2025, App Engine sets the maximum instances default for standard environment deployments to 20.
- App Engine calculates the number of instances necessary to serve your current application traffic based on scaling settings such as target cpu utilization and target throughput utilization .
- A high maximum means users might wait longer for their requests to be served (if there are pending requests and no idle instances to serve them), but your application will cost less to run. min pending latency An optional element you can set to specify the minimum amount of time that App Engine should allow a request to wait in the pending queue before starting a new instance to handle it.

