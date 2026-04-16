---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:48.284Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "TLS 1.1 and earlier support"
feature_slug: "tls-1-1-and-earlier-support"
latest_feature_date: "2025-08-07"
deprecation_date: "March 2025"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
keywords:
  - "protocol"
  - "earlier"
  - "older"
  - "allows"
---

# TLS 1.1 and earlier support

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

Older TLS protocol support allows App Engine standard environment applications to accept TLS 1.1 and earlier connections; deprecated on March 2025.

## Extended Definition

Older TLS protocol support allows App Engine standard environment applications to accept TLS 1.1 and earlier connections; deprecated on March 2025.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/go/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/go/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)

## Supporting Pages

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Create an egress firewall rule on your Serverless VPC Access connector to prevent it from sending outgoing traffic, with the exception of established responses, to any destination. gcloud compute firewall-rules create RULE NAME \ --action = DENY \ --rules = PROTOCOL \ --direction = EGRESS \ --target-tags = VPC CONNECTOR NETWORK TAG \ --network = VPC NETWORK \ --priority = PRIORITY Replace the following: RULE NAME : the name of your new firewall rule.
- Set the priority for this rule to be a lower value than the priority of the rule you made in the previous step. gcloud compute firewall-rules create RULE NAME \ --allow = PROTOCOL \ --destination-ranges = RESOURCE CIDR RANGE \ --direction = EGRESS \ --network = VPC NETWORK \ --target-tags = VPC CONNECTOR NETWORK TAG \ --priority = PRIORITY Replace the following: RULE NAME : the name of your new firewall rule.
- Set the priority for this rule to be a lower value than the priority of the rule you made in the previous step. gcloud compute firewall-rules create RULE NAME \ --allow = PROTOCOL \ --source-ranges = VPC CONNECTOR CIDR RANGE \ --direction = INGRESS \ --network = VPC NETWORK \ --target-tags = RESOURCE TAG \ --priority = PRIORITY Replace the following: RULE NAME : the name of your new firewall rule.
- Set the priority for this rule to be a lower value than the priority of the rule you made in the previous step. gcloud compute firewall-rules create RULE NAME \ --allow = PROTOCOL \ --source-tags = VPC CONNECTOR NETWORK TAG \ --direction = INGRESS \ --network = VPC NETWORK \ --target-tags = RESOURCE TAG \ --priority = PRIORITY Replace the following: RULE NAME : the name of your new firewall rule.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/go/connecting-vpc)
- Source ID: `site-docs-reference-4`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Create an egress firewall rule on your Serverless VPC Access connector to prevent it from sending outgoing traffic, with the exception of established responses, to any destination. gcloud compute firewall-rules create RULE NAME \ --action = DENY \ --rules = PROTOCOL \ --direction = EGRESS \ --target-tags = VPC CONNECTOR NETWORK TAG \ --network = VPC NETWORK \ --priority = PRIORITY Replace the following: RULE NAME : the name of your new firewall rule.
- Set the priority for this rule to be a lower value than the priority of the rule you made in the previous step. gcloud compute firewall-rules create RULE NAME \ --allow = PROTOCOL \ --destination-ranges = RESOURCE CIDR RANGE \ --direction = EGRESS \ --network = VPC NETWORK \ --target-tags = VPC CONNECTOR NETWORK TAG \ --priority = PRIORITY Replace the following: RULE NAME : the name of your new firewall rule.
- Set the priority for this rule to be a lower value than the priority of the rule you made in the previous step. gcloud compute firewall-rules create RULE NAME \ --allow = PROTOCOL \ --source-ranges = VPC CONNECTOR CIDR RANGE \ --direction = INGRESS \ --network = VPC NETWORK \ --target-tags = RESOURCE TAG \ --priority = PRIORITY Replace the following: RULE NAME : the name of your new firewall rule.
- Set the priority for this rule to be a lower value than the priority of the rule you made in the previous step. gcloud compute firewall-rules create RULE NAME \ --allow = PROTOCOL \ --source-tags = VPC CONNECTOR NETWORK TAG \ --direction = INGRESS \ --network = VPC NETWORK \ --target-tags = RESOURCE TAG \ --priority = PRIORITY Replace the following: RULE NAME : the name of your new firewall rule.

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- One of the benefits App Engine standard environment's "pay for only what you need" platform as described earlier in Scaling Down is that the system autoscales the number of instances down to zero when there is no traffic.
- Setting an appropriate number of idle instances for your application based on request volume allows your application to serve every request with little latency, unless you are experiencing abnormally high request volume.
- When you start an instance of a basic scaling service, App Engine allows it to accept traffic, but the / ah/start request is not sent to an instance until it receives its first user request.
- NTP with App Engine standard environment The App Engine standard environment has network time protocol (NTP) services which use Google NTP servers.

