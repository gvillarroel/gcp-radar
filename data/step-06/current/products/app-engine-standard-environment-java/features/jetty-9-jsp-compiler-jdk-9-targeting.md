---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.242Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Jetty 9 JSP compiler JDK 9 targeting"
feature_slug: "jetty-9-jsp-compiler-jdk-9-targeting"
latest_feature_date: "2017-10-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/authenticating-users"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project"
keywords:
  - "targets"
  - "targeting"
  - "compiler"
  - "jetty"
---

# Jetty 9 JSP compiler JDK 9 targeting

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

The Jetty 9 JSP compiler now targets Java 1.8 when running on JDK 9.

## Extended Definition

The Jetty 9 JSP compiler now targets Java 1.8 when running on JDK 9.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project)

## Supporting Pages

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- However, if you create a connector in a service project and the connector targets a Shared VPC network in the host project, you must add firewall rules to allow necessary traffic for the connector's operation from the following ranges: Serverless infrastructure IP range : 35.199.224.0/19 Health check probe IP ranges : 35.191.0.0/16 , 35.191.192.0/18 , and 130.211.0.0/22 These ranges are used by the Google infrastructure underlying Cloud Run, Cloud Run functions, and App Engine standard environment.
- You can accomplish these restrictions using one of the following strategies: Create ingress rules whose targets represent the resources that you want to limit connector VM access to and whose sources represent the connector VMs.
- Use the allow and target-tags flags to create an ingress firewall rule targeting the resource in your VPC network that you want the VPC connector to access.
- Use the allow and target-tags flags to create an ingress firewall rule targeting the resource in your VPC network that you want the VPC connector to access.

### "Authenticating users \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

### "Configure connectors in the Shared VPC host project \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project)
- Source ID: `site-docs-reference-4`
- Final score: 30
- Re-rank relevance: N/A

