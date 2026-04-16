---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:17.166Z"
product_name: "Secure Web Proxy"
product_slug: "secure-web-proxy"
feature_name: "VPC Service Controls support for Secure Web Proxy"
feature_slug: "vpc-service-controls-support-for-secure-web-proxy"
latest_feature_date: "2025-08-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/secure-web-proxy/docs/quickstart"
  - "https://docs.cloud.google.com/secure-web-proxy/docs/policies-and-rules-overview"
  - "https://docs.cloud.google.com/secure-web-proxy/docs/overview"
  - "https://docs.cloud.google.com/secure-web-proxy/docs/use-tags"
keywords:
  - "vpc"
  - "controls"
  - "for"
  - "secure"
  - "web"
  - "proxy"
  - "can"
  - "be"
---

# VPC Service Controls support for Secure Web Proxy

Product: Secure Web Proxy
Coverage: MEDIUM

## Step 02 Summary

Secure Web Proxy can be used with VPC Service Controls.

## Extended Definition

Secure Web Proxy can be used with VPC Service Controls.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/secure-web-proxy/docs/quickstart](https://docs.cloud.google.com/secure-web-proxy/docs/quickstart)
- [https://docs.cloud.google.com/secure-web-proxy/docs/policies-and-rules-overview](https://docs.cloud.google.com/secure-web-proxy/docs/policies-and-rules-overview)
- [https://docs.cloud.google.com/secure-web-proxy/docs/overview](https://docs.cloud.google.com/secure-web-proxy/docs/overview)
- [https://docs.cloud.google.com/secure-web-proxy/docs/use-tags](https://docs.cloud.google.com/secure-web-proxy/docs/use-tags)

## Supporting Pages

### Quickstart: Deploy a Secure Web Proxy instance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secure-web-proxy/docs/quickstart](https://docs.cloud.google.com/secure-web-proxy/docs/quickstart)
- Source ID: `site-docs-reference`
- Final score: 298
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Shell gcloud compute instances delete swp-test-vm What's next Deploy Secure Web Proxy as next hop Deploy Secure Web Proxy as a Private Service Connect service Enable TLS inspection Configure VPC Service Controls for Secure Web Proxy Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The policy can then serve as the container for all security rules that govern traffic flow through the Secure Web Proxy.
- Secure Web Proxy instances in explicit routing mode can be deployed as a Private Service Connect service .
- Note: To improve the security of your Secure Web Proxy instance, configure VPC Service Controls .

### Policies and rules \_|\_ Secure Web Proxy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secure-web-proxy/docs/policies-and-rules-overview](https://docs.cloud.google.com/secure-web-proxy/docs/policies-and-rules-overview)
- Source ID: `site-iam-reference`
- Final score: 290
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can assign your enterprise IP addresses (or static Google Cloud IP addresses) that Secure Web Proxy uses for outbound traffic.
- Policies overview A Secure Web Proxy policy is the core security item that defines access controls for all outbound web traffic.
- The following table shows whether various Virtual Private Cloud (VPC) architectures are supported when using source identity-based security policies: VPC VPC architecture Support Within VPC Cross project (Shared VPC) Cross VPC Cross peering link (peer VPC) Cross VPC Cross Private Service Connect Cross VPC Cross Network Connectivity Center spokes Destination attributes Secure Web Proxy policies determine whether a destination is approved by analyzing the following attributes of the target website or service: Destination domain : the website's address, such as example.com .
- The following table shows the various Google Cloud services that support these source identity-based policies: Google Cloud services Service account support Secure tag support Compute Engine virtual machine (VM) Google Kubernetes Engine (GKE) node Google Kubernetes Engine (GKE) container 1 1 Direct VPC for Cloud Run 1 Serverless VPC Access connector 2 2 Cloud VPN 1 1 Cloud Interconnect on premises 1 1 Application Load Balancer Network Load Balancer 1 Not supported by Google Cloud.

### Secure Web Proxy overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secure-web-proxy/docs/overview](https://docs.cloud.google.com/secure-web-proxy/docs/overview)
- Source ID: `site-docs-root`
- Final score: 288
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Internal workloads must comply with Secure Web Proxy security rules before they can reach the internet.
- Here are the key features of Secure Web Proxy rules: Each rule is a highly specific if-then statement that checks a web request against multiple criteria: Who is asking: the source identity, such as a specific VM or service account Where are they trying to go: the destination URL or domain, like trusted-partner.com What action needs to be taken: allow or deny the traffic Secure Web Proxy rules provide granular control, letting you enforce different security standards for different parts of your organization by using clear, structured definitions.
- Secure Web Proxy policies A Secure Web Proxy policy defines the overall security standard for a specific region or set of workloads because it's the main container that stores all your security instructions.
- Secure Web Proxy lets you create highly specific rules, such as "Only members of the Finance team can access this banking website." Unified traffic logging and auditing .

### Use tags to create policies \_|\_ Secure Web Proxy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secure-web-proxy/docs/use-tags](https://docs.cloud.google.com/secure-web-proxy/docs/use-tags)
- Source ID: `site-docs-root`
- Final score: 281
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Add the following to the gateway.yaml file: name : projects/ PROJECT NAME /locations/ REGION /gateways/ GATEWAY NAME type : SECURE WEB GATEWAY ports : [ GATEWAY PORT NUMBERS ] certificateUrls : [ CERTIFICATE URLS ] gatewaySecurityPolicy : projects/ PROJECT NAME /locations/ REGION /gatewaySecurityPolicies/ POLICY NAME network : projects/ PROJECT NAME /global/networks/ NETWORK NAME subnetwork : projects/ PROJECT NAME /regions/ REGION /subnetworks/ SUBNETWORK addresses : [ GATEWAY IP ADDRESS ] scope : samplescope Replace the following: GATEWAY NAME : name of this Secure Web Proxy instance GATEWAY PORT NUMBERS : list of port numbers for this gateway, such as [80,443] CERTIFICATE URLS : list of SSL certificate URLs SUBNETWORK : VPC subnet that you previously created as part of the initial setup steps GATEWAY IP ADDRESS : optional list of IP addresses for your Secure Web Proxy instances within the proxy subnets that you previously created in the initial setup steps If you choose not to list IP addresses, omit the field to let the web proxy choose an IP address for you.
- Create the Secure Web Proxy instance by using the gcloud network-services gateways import command : gcloud network-services gateways import GATEWAY NAME \ --source=gateway.yaml \ --location= REGION Test connectivity To test connectivity, use the curl command from any virtual machine (VM) instance within your Virtual Private Cloud (VPC) network: curl -x https:// GATEWAY IP ADDRESS : PORT NUMBER https://www.example.com --proxy-insecure If everything is working correctly, then your Secure Web Proxy instance returns a 403 Forbidden status code.
- For example, you can create a policy rule that says: "Only the traffic that originates from resources that have the tag segment=production tag can access a specific set of URLs." This page shows you how to do the following: Create a Secure Web Proxy instance with an empty policy Create and attach a Resource Manager tag to a VM instance Create a Secure Web Proxy rule Test the connectivity of your entire Secure Web Proxy configuration Before you begin Configure the initial setup steps .
- Import the rules that you created by using the gcloud network-security gateway-security-policies rules import command : gcloud network-security gateway-security-policies rules import RULE NAME \ --source= RULE FILE .yaml \ --location= REGION \ --gateway-security-policy= POLICY NAME Test the policy configuration You can test connectivity again to validate that your Secure Web Proxy policy, which relies on Resource Manager tags for identity, is working as intended.

