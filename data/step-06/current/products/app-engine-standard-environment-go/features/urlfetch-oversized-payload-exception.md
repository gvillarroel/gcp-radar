---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:48.321Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "URLFetch oversized payload exception"
feature_slug: "urlfetch-oversized-payload-exception"
latest_feature_date: "2015-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/connecting-vpc"
keywords:
  - "requestpayloadtoolargeexception"
  - "oversized"
  - "exception"
  - "urlfetch"
  - "payload"
  - "when"
  - "uses"
---

# URLFetch oversized payload exception

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

URLFetch now uses RequestPayloadTooLargeException when request payloads exceed the allowed size.

## Extended Definition

URLFetch now uses RequestPayloadTooLargeException when request payloads exceed the allowed size.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/go/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/go/connecting-vpc)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- For all other resources, when the resource is depleted, an attempt in the application to consume the resource results in an exception.
- Resource Daily limit Maximum rate UrlFetch API calls 860,000,000 calls 660,000 calls/minute UrlFetch data sent 4.5 TB 3,600 MB/minute UrlFetch data received 4.5 TB 3,600 MB/minute Networking limits The following networking limits apply to App Engine: Outbound connections per second per instance: 500 (cannot be increased) Outbound DNS resolutions per second per instance: 100 (cannot be increased) Maximum packets per second per instance: 80,000 Maximum bits per second per instance: 100,000,000 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The Cloud Quotas system does the following: Monitors your consumption of Google Cloud products and services Restricts your consumption of those resources Provides a way to request changes to the quota value and automate quota adjustments In most cases, when you attempt to consume more of a resource than its quota allows, the system blocks access to the resource, and the task that you're trying to perform fails.
- Resource Free Quota F1 instances 28 free instance hours per day B1 instances 9 free instance hours per day Accrual of instance hours begins when an instance starts and ends as described below, depending on the type of scaling you specify for the instance: Basic or automatic scaling: accrual ends fifteen minutes after an instance finishes processing its last request.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- When you have entered a value into each field, the equivalent YAML configuration for this custom constraint appears on the right. gcloud To create a custom constraint, create a YAML file using the following format: name : organizations/ ORGANIZATION ID /customConstraints/ CONSTRAINT NAME resourceTypes : RESOURCE NAME methodTypes : - CREATE condition : " CONDITION " actionType : ACTION displayName : DISPLAY NAME description : DESCRIPTION Replace the following: ORGANIZATION ID : your organization ID, such as 123456789 .
- Find the current attribute values To find the current attribute values for your connector, run the following in your terminal: gcloud compute networks vpc-access connectors describe CONNECTOR NAME --region = REGION --project = PROJECT Replace the following: CONNECTOR NAME : the name of your connector REGION : the name of your connector's region PROJECT : the name of your Google Cloud project Monitor connector usage Monitoring usage over time can help you determine when to adjust a connector's settings.
- Create an egress firewall rule on your Serverless VPC Access connector to prevent it from sending outgoing traffic, with the exception of established responses, to any destination. gcloud compute firewall-rules create RULE NAME \ --action = DENY \ --rules = PROTOCOL \ --direction = EGRESS \ --target-tags = VPC CONNECTOR NETWORK TAG \ --network = VPC NETWORK \ --priority = PRIORITY Replace the following: RULE NAME : the name of your new firewall rule.
- When a connector and its VPC network are in different projects, a Shared VPC network administrator must create the connector's subnet in the Shared VPC network before you can create the connector, and you must create the connector using an existing subnet.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/go/connecting-vpc)
- Source ID: `site-docs-reference-4`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- When you have entered a value into each field, the equivalent YAML configuration for this custom constraint appears on the right. gcloud To create a custom constraint, create a YAML file using the following format: name : organizations/ ORGANIZATION ID /customConstraints/ CONSTRAINT NAME resourceTypes : RESOURCE NAME methodTypes : - CREATE condition : " CONDITION " actionType : ACTION displayName : DISPLAY NAME description : DESCRIPTION Replace the following: ORGANIZATION ID : your organization ID, such as 123456789 .
- Find the current attribute values To find the current attribute values for your connector, run the following in your terminal: gcloud compute networks vpc-access connectors describe CONNECTOR NAME --region = REGION --project = PROJECT Replace the following: CONNECTOR NAME : the name of your connector REGION : the name of your connector's region PROJECT : the name of your Google Cloud project Monitor connector usage Monitoring usage over time can help you determine when to adjust a connector's settings.
- Create an egress firewall rule on your Serverless VPC Access connector to prevent it from sending outgoing traffic, with the exception of established responses, to any destination. gcloud compute firewall-rules create RULE NAME \ --action = DENY \ --rules = PROTOCOL \ --direction = EGRESS \ --target-tags = VPC CONNECTOR NETWORK TAG \ --network = VPC NETWORK \ --priority = PRIORITY Replace the following: RULE NAME : the name of your new firewall rule.
- When a connector and its VPC network are in different projects, a Shared VPC network administrator must create the connector's subnet in the Shared VPC network before you can create the connector, and you must create the connector using an existing subnet.

