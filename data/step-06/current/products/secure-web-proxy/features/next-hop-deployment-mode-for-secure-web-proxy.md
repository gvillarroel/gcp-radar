---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:17.168Z"
product_name: "Secure Web Proxy"
product_slug: "secure-web-proxy"
feature_name: "Next hop deployment mode for Secure Web Proxy"
feature_slug: "next-hop-deployment-mode-for-secure-web-proxy"
latest_feature_date: "2024-10-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/secure-web-proxy/docs/deploy-next-hop"
  - "https://docs.cloud.google.com/secure-web-proxy/docs/troubleshoot-next-hop-deployment-errors"
  - "https://docs.cloud.google.com/secure-web-proxy/docs/overview"
  - "https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules"
keywords:
  - "next"
  - "hop"
  - "deployment"
  - "mode"
  - "for"
  - "secure"
  - "web"
  - "proxy"
---

# Next hop deployment mode for Secure Web Proxy

Product: Secure Web Proxy
Coverage: MEDIUM

## Step 02 Summary

Secure Web Proxy instances can be deployed as a next hop for web traffic using policy-based or static routes.

## Extended Definition

Secure Web Proxy instances can be deployed as a next hop for web traffic using policy-based or static routes.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/secure-web-proxy/docs/deploy-next-hop](https://docs.cloud.google.com/secure-web-proxy/docs/deploy-next-hop)
- [https://docs.cloud.google.com/secure-web-proxy/docs/troubleshoot-next-hop-deployment-errors](https://docs.cloud.google.com/secure-web-proxy/docs/troubleshoot-next-hop-deployment-errors)
- [https://docs.cloud.google.com/secure-web-proxy/docs/overview](https://docs.cloud.google.com/secure-web-proxy/docs/overview)
- [https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules](https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules)

## Supporting Pages

### Deploy Secure Web Proxy as next hop \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secure-web-proxy/docs/deploy-next-hop](https://docs.cloud.google.com/secure-web-proxy/docs/deploy-next-hop)
- Source ID: `site-iam-reference`
- Final score: 348
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the following example to create a policy-based route that directs traffic to your Secure Web Proxy instance. gcloud Use the following command to create the policy-based route. gcloud network-connectivity policy-based-routes create POLICY BASED ROUTE NAME \ --network="projects/ PROJECT /global/networks/ NETWORK NAME " \ --next-hop-ilb-ip= SWP IP \ --protocol-version="IPV4" \ --destination-range= DESTINATION RANGE \ --source-range= SOURCE RANGE \ --priority=2 \ --project= PROJECT Replace the following: POLICY BASED ROUTE NAME : name of your policy-based route NETWORK NAME : name of your network SWP IP : IP address of your Secure Web Proxy instance DESTINATION RANGE : range of IP addresses to which you want to redirect the traffic SOURCE RANGE : range of IP addresses from which you want to redirect the traffic PROJECT : ID of your project Next, use the following steps to create the default-routing policy-based route. gcloud Use the following command to create the default-routing policy-based route. gcloud network-connectivity policy-based-routes create DEFAULT POLICY BASED ROUTE NAME \ --network="projects/ PROJECT /global/networks/ NETWORK NAME " \ --next-hop-other-routes="DEFAULT ROUTING" \ --protocol-version="IPV4" \ --destination-range= DESTINATION RANGE \ --source-range= SOURCE RANGE \ --priority=1 \ --project= PROJECT Replace the following: DEFAULT POLICY BASED ROUTE NAME : name of your policy-based route NETWORK NAME : name of your network DESTINATION RANGE : range of IP addresses to which you want to redirect the traffic SOURCE RANGE : range of IP addresses from which you want to redirect the traffic PROJECT : ID of your project Post-deployment checklist Make sure that you complete the following tasks after configuring either a static route or a policy-based route with your Secure Web Proxy instance as next hop: Confirm that there is a default route to the internet gateway .
- Make sure that the priority of your route is numerically lower than the default internet route, which is typically 1000 TAGS : comma-separated list of tags that you you'll use with your Secure Web Proxy instance PROJECT : ID of your project Create a VM in the appropriate subnet with network tags specified in the route gcloud compute instances create swp-nexthop-test-vm \ --subnet= SUBNETWORK \ --zone= ZONE \ --image-project=debian-cloud \ --image-family=debian-11 \ --tags= TAGS Replace the following: SUBNETWORK : subnetwork that you configured for the web proxy ZONE : zone of your test VM instance TAGS : comma-separated list of tags that you'll use with your Secure Web Proxy instance Create policy-based routes Important: Misconfigured policy-based routes can severely disrupt the flow of traffic through your network.
- For more information about how static routes work in Google Cloud, see Static routes . gcloud Use the following command to create a static route. gcloud compute routes create STATIC ROUTE NAME \ --network= NETWORK NAME \ --next-hop-ilb= SWP IP \ --destination-range= DESTINATION RANGE \ --priority= PRIORITY \ --tags= TAGS \ --project= PROJECT Replace the following: STATIC ROUTE NAME : name of your static route NETWORK NAME : name of your network SWP IP : IP address of your SecureWebProxy instance in the subnetwork specified in the gateway.yaml file DESTINATION RANGE : range of IP addresses to which you want to redirect the traffic.
- Cloud Shell Create the gateway.yaml file. name : projects/ PROJECT ID /locations/ REGION /gateways/swp1 type : SECURE WEB GATEWAY addresses : [ " IP ADDRESS " ] ports : [ 443 , 80 ] gatewaySecurityPolicy : projects/ PROJECT ID /locations/ REGION /gatewaySecurityPolicies/policy1 network : projects/ PROJECT ID /global/networks/ NETWORK subnetwork : projects/ PROJECT ID /regions/ REGION /subnetworks/ SUBNETWORK routingMode : NEXT HOP ROUTING MODE Create a Secure Web Proxy instance. gcloud network-services gateways import swp1 \ --source=gateway.yaml \ --location= REGION A Secure Web Proxy instance can take several minutes to deploy.

### "Troubleshoot next hop deployment errors \_|\_ Secure Web Proxy \_|\_ Google\

- URL: [https://docs.cloud.google.com/secure-web-proxy/docs/troubleshoot-next-hop-deployment-errors](https://docs.cloud.google.com/secure-web-proxy/docs/troubleshoot-next-hop-deployment-errors)
- Source ID: `site-iam-reference`
- Final score: 331
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Networking Secure Web Proxy Guides Send feedback Troubleshoot next hop deployment errors Stay organized with collections Save and categorize content based on your preferences.
- For a Virtual Private Cloud network in a region, you can deploy only one Secure Web Proxy instance as a next hop.
- Secure Web Proxy as next hop gateway fails to deploy To fix this issue, do the following: Verify whether an existing Secure Web Proxy instance is deployed as a next hop in the same region.
- This page describes how to diagnose and resolve common issues that might occur when you deploy Secure Web Proxy as next hop.

### Secure Web Proxy overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secure-web-proxy/docs/overview](https://docs.cloud.google.com/secure-web-proxy/docs/overview)
- Source ID: `site-docs-root`
- Final score: 296
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Next hop mode In this mode, you can configure your Secure Web Proxy deployment to act as a next hop for the routing in your network.
- For more information, see Deploy Secure Web Proxy as next hop .
- The following diagram shows the role of Secure Web Proxy as a centralized, mandatory gateway for traffic flowing out of the Google Cloud environment: Deploy Secure Web Proxy in the explicit proxy routing mode (click to enlarge).
- In this deployment, Secure Web Proxy (the hub) manages the outbound traffic for workloads in all connected VPC networks (the spokes).

### Configure rules \_|\_ Secure Web Proxy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules](https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules)
- Source ID: `site-iam-reference`
- Final score: 290
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This section explains how to configure host-matching rules for the following Secure Web Proxy deployment modes: Explicit proxy mode Next hop mode Explicit proxy mode When deploying Secure Web Proxy as an explicit proxy, configure host-matching rules to verify that the host information sent by the client is correctly extracted and checked against your defined security rules.
- Host matching in the next hop mode works for different types of web traffic in the following manner: Traffic type Matching mechanism Rule configuration Unencrypted HTTP Secure Web Proxy checks the destination hostname against the host field in the standard HTTP request header.
- This is particularly useful when your workloads use Secure Web Proxy as next hop for non-web protocols.
- Next hop mode When deploying Secure Web Proxy as next hop, you must configure host-matching rules.

