---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.222Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Network ingress controls"
feature_slug: "network-ingress-controls"
latest_feature_date: "2020-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/ingress-settings"
  - "https://docs.cloud.google.com/appengine/docs/standard/application-security"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
keywords:
  - "ingress"
  - "accept"
  - "controls"
  - "network"
  - "only"
  - "requests"
---

# Network ingress controls

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

Network ingress controls let an app accept only requests routed through Cloud Load Balancing.

## Extended Definition

Network ingress controls let an app accept only requests routed through Cloud Load Balancing.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)
- [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)

## Supporting Pages

### "Ingress settings \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: To update the default service of an App Engine app to accept traffic only from Cloud Load Balancing and VPC networks that are in the same project: gcloud app services update default --ingress = internal-and-cloud-load-balancing To update a service named "internal-requests" to accept traffic only from VPC networks that are in the same project: gcloud app services update internal-requests --ingress = internal-only Egress settings Note: Egress settings are not available for the PHP runtimes.
- Only requests to RFC 1918 and RFC 6598 IP address ranges or internal DNS names are routed to your VPC network.
- Internal and Cloud Load Balancing Allows requests from the following resources: Resources allowed by the more restrictive Internal setting External Application Load Balancer Use the Internal and Cloud Load Balancing setting to accept requests from an external Application Load Balancer but not directly from the internet.
- For requests from other App Engine services or from Cloud Run or Cloud Run functions in the same project, connect the service or function to a VPC network and route all egress through the connector, as described in Connecting to a Shared VPC network .

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 139
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Test the custom constraint To test the example that restricts ingress settings, deploy a connector in the project with network set to default : gcloud compute networks vpc-access connectors create org-policy-test \ --project = PROJECT ID \ --region = REGION ID \ --network = default The output is the following: Operation denied by custom org policies: ["customConstraints/custom.defaultNetworkConstraint": "Require network to not be set to default."] Example custom organization policies for common use cases The following table provides examples of custom constraints that you might find useful with Serverless VPC Access connectors: Description Constraint syntax Require that Serverless VPC Access connectors can only use a specific network. name : organizations/ ORGANIZATION ID /customConstraints/custom.allowlistNetworks resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : "resource.network == 'allowlisted-network'" actionType : ALLOW displayName : allowlistNetworks description : Require connectors to use a specific network.
- Create an ingress firewall rule on your VPC network to allow requests from connectors that target this network: gcloud compute firewall-rules create vpc-connector-requests \ --allow tcp,udp,icmp \ --direction = INGRESS \ --source-tags vpc-connector \ --network = VPC NETWORK This rule gives the connector access to every resource in the network.
- Only requests to RFC 1918 and RFC 6598 IP address ranges or internal DNS names are routed to your VPC network.
- Don't change the specified ports. gcloud compute firewall-rules create serverless-to-vpc-connector \ --allow tcp:667,udp:665-666,icmp \ --source-ranges = 35 .199.224.0/19 \ --direction = INGRESS \ --target-tags vpc-connector \ --network = VPC NETWORK gcloud compute firewall-rules create vpc-connector-to-serverless \ --allow tcp:667,udp:665-666,icmp \ --destination-ranges = 35 .199.224.0/19 \ --direction = EGRESS \ --target-tags vpc-connector \ --network = VPC NETWORK gcloud compute firewall-rules create vpc-connector-health-checks \ --allow tcp:667 \ --source-ranges = 35 .191.0.0/16,35.191.192.0/18,130.211.0.0/22 \ --direction = INGRESS \ --target-tags vpc-connector \ --network = VPC NETWORK Replace VPC NETWORK with the name of the VPC network to attach your connector to.

### "Overview of app security \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- Source ID: `site-docs-reference`
- Final score: 139
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can add IP addresses or subnetworks to a denylist, so that requests routed from those addresses and subnetworks are denied before they reach your App Engine app.
- Create a firewall to: Allow only traffic from within a specific network Ensure that only a certain range of IP addresses from specific networks can access your app.
- For example, create rules to allow only the range of IP addresses from within your company's private network during your app's testing phase.
- Ingress controls You can use Ingress controls to restrict inbound traffic to your App Engine app.

