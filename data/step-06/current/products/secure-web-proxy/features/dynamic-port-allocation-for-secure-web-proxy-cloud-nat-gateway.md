---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:17.167Z"
product_name: "Secure Web Proxy"
product_slug: "secure-web-proxy"
feature_name: "Dynamic port allocation for Secure Web Proxy Cloud NAT gateway"
feature_slug: "dynamic-port-allocation-for-secure-web-proxy-cloud-nat-gateway"
latest_feature_date: "2025-01-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/secure-web-proxy/docs/assign-static-ip-addresses-for-egress-traffic"
  - "https://docs.cloud.google.com/secure-web-proxy/docs/overview"
  - "https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules"
  - "https://docs.cloud.google.com/secure-web-proxy/docs/deploy-next-hop"
keywords:
  - "dynamic"
  - "port"
  - "allocation"
  - "for"
  - "secure"
  - "web"
  - "proxy"
  - "nat"
---

# Dynamic port allocation for Secure Web Proxy Cloud NAT gateway

Product: Secure Web Proxy
Coverage: MEDIUM

## Step 02 Summary

The auto-provisioned Cloud NAT gateway for Secure Web Proxy now uses dynamic port allocation to reduce IP address consumption.

## Extended Definition

The auto-provisioned Cloud NAT gateway for Secure Web Proxy now uses dynamic port allocation to reduce IP address consumption.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/secure-web-proxy/docs/assign-static-ip-addresses-for-egress-traffic](https://docs.cloud.google.com/secure-web-proxy/docs/assign-static-ip-addresses-for-egress-traffic)
- [https://docs.cloud.google.com/secure-web-proxy/docs/overview](https://docs.cloud.google.com/secure-web-proxy/docs/overview)
- [https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules](https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules)
- [https://docs.cloud.google.com/secure-web-proxy/docs/deploy-next-hop](https://docs.cloud.google.com/secure-web-proxy/docs/deploy-next-hop)

## Supporting Pages

### "Assign static IP addresses for outbound traffic \_|\_ Secure Web Proxy \_\

- URL: [https://docs.cloud.google.com/secure-web-proxy/docs/assign-static-ip-addresses-for-egress-traffic](https://docs.cloud.google.com/secure-web-proxy/docs/assign-static-ip-addresses-for-egress-traffic)
- Source ID: `site-iam-reference`
- Final score: 332
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DPA mode enables your Secure Web Proxy instance to use the assigned IP addresses. gcloud compute routers nats update swg-autogen-nat \ --router= ROUTER NAME \ --min-ports-per-vm=2048 \ --max-ports-per-vm=4096 \ --enable-dynamic-port-allocation \ --region= REGION For the --min-ports-per-vm and --max-ports-per-vm flags, we recommend that you set their values to 2048 and 4096 , respectively.
- Cloud Shell To identify the Cloud Router name that was assigned while provisioning your Secure Web Proxy instance, use the gcloud compute routers list command . gcloud compute routers list \ --region REGION \ --filter="network:( NETWORK NAME ) AND name:(swg-autogen-router- )" \ --format="get(name)" Replace the following: REGION : region where the Cloud Router is deployed for your Secure Web Proxy instance NETWORK NAME : name of your VPC network The output is similar to the following: swg-autogen-router-1 To list the external automatically provisioned IP addresses that were assigned while provisioning your Secure Web Proxy instance, use the gcloud compute routers get-status command . gcloud compute routers get-status ROUTER NAME \ --region= REGION The output is similar to the following: kind : compute#routerStatusResponse result : natStatus : - autoAllocatedNatIps : - 34.144.80.46 - 34.144.83.75 - 34.144.88.111 - 34.144.94.113 minExtraNatIpsNeeded : 0 name : swg-autogen-nat numVmEndpointsWithNatMappings : 3 network : https://www.googleapis.com/compute/projects/ PROJECT NAME /global/networks/ NETWORK NAME This output includes the following values: PROJECT NAME : name of your Google Cloud project NETWORK NAME : name of your VPC network Note: In the preceding output, the swg-autogen-nat Cloud NAT gateway has four automatically provisioned IP addresses.
- Verify that you have the Google Cloud CLI version 406.0.0 or later installed: gcloud version head -n1 If you have an earlier gcloud CLI version installed, update the version: gcloud components update --version=406.0.0 Configure static IP addresses for Secure Web Proxy Console In the Google Cloud console, go to the Cloud Nat page.
- Use Cloud NAT for Secure Web Proxy Use tags to create policies Use URL lists to create policies Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Secure Web Proxy overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secure-web-proxy/docs/overview](https://docs.cloud.google.com/secure-web-proxy/docs/overview)
- Source ID: `site-docs-root`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Secure Web Proxy also supports HTTP and HTTPS CONNECT for client-initiated, end-to-end TLS connections to the destination server.
- Here are the key features of Secure Web Proxy rules: Each rule is a highly specific if-then statement that checks a web request against multiple criteria: Who is asking: the source identity, such as a specific VM or service account Where are they trying to go: the destination URL or domain, like trusted-partner.com What action needs to be taken: allow or deny the traffic Secure Web Proxy rules provide granular control, letting you enforce different security standards for different parts of your organization by using clear, structured definitions.
- Supported features Secure Web Proxy supports the following features: Autoscaling Secure Web Proxy Envoy proxies : Secure Web Proxy supports automatically adjusting the Envoy proxy pool size and the pool's capacity in a region, which enables consistent performance during high-demand periods at the lowest cost.
- Cloud Audit Logs and Google Cloud Observability integration : by using Google Cloud Observability, Cloud Audit Logs records both administrative actions (policy changes) and access requests and metrics (proxy transaction logs) for Secure Web Proxy.

### Configure rules \_|\_ Secure Web Proxy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules](https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules)
- Source ID: `site-iam-reference`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table provides more information about the various attributes that you can use in a TCP proxy rule: Attribute Attribute type Description source.ip string IP address of the client that sent the request. source.port string Client port that sent the request. destination.port string Upstream port to which your Secure Web Proxy instance sends the traffic. source.matchTag( SECURE TAG ) boolean True , if the source is associated with SECURE TAG .
- Here's an example of how to define a more specific TCP proxy rule: // Allow port 22 from only a specific source IP range sessionMatcher: "destination.port == 22 && inIpRange(source.ip, '10.0.0.0/24')" Secure Web Proxy doesn't support the ability to configure proxy rules for User Datagram Protocol (UDP) applications.
- Host matching in the explicit proxy mode works for different types of web traffic in the following manner: Traffic type Matching mechanism Rule configuration Unencrypted HTTP Secure Web Proxy checks the destination hostname against the host field in the standard CONNECT header of the HTTP request.
- Host matching in the next hop mode works for different types of web traffic in the following manner: Traffic type Matching mechanism Rule configuration Unencrypted HTTP Secure Web Proxy checks the destination hostname against the host field in the standard HTTP request header.

### Deploy Secure Web Proxy as next hop \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secure-web-proxy/docs/deploy-next-hop](https://docs.cloud.google.com/secure-web-proxy/docs/deploy-next-hop)
- Source ID: `site-iam-reference`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Make sure that the priority of your route is numerically lower than the default internet route, which is typically 1000 TAGS : comma-separated list of tags that you you'll use with your Secure Web Proxy instance PROJECT : ID of your project Create a VM in the appropriate subnet with network tags specified in the route gcloud compute instances create swp-nexthop-test-vm \ --subnet= SUBNETWORK \ --zone= ZONE \ --image-project=debian-cloud \ --image-family=debian-11 \ --tags= TAGS Replace the following: SUBNETWORK : subnetwork that you configured for the web proxy ZONE : zone of your test VM instance TAGS : comma-separated list of tags that you'll use with your Secure Web Proxy instance Create policy-based routes Important: Misconfigured policy-based routes can severely disrupt the flow of traffic through your network.
- For more information about how static routes work in Google Cloud, see Static routes . gcloud Use the following command to create a static route. gcloud compute routes create STATIC ROUTE NAME \ --network= NETWORK NAME \ --next-hop-ilb= SWP IP \ --destination-range= DESTINATION RANGE \ --priority= PRIORITY \ --tags= TAGS \ --project= PROJECT Replace the following: STATIC ROUTE NAME : name of your static route NETWORK NAME : name of your network SWP IP : IP address of your SecureWebProxy instance in the subnetwork specified in the gateway.yaml file DESTINATION RANGE : range of IP addresses to which you want to redirect the traffic.
- Use the following example to create a policy-based route that directs traffic to your Secure Web Proxy instance. gcloud Use the following command to create the policy-based route. gcloud network-connectivity policy-based-routes create POLICY BASED ROUTE NAME \ --network="projects/ PROJECT /global/networks/ NETWORK NAME " \ --next-hop-ilb-ip= SWP IP \ --protocol-version="IPV4" \ --destination-range= DESTINATION RANGE \ --source-range= SOURCE RANGE \ --priority=2 \ --project= PROJECT Replace the following: POLICY BASED ROUTE NAME : name of your policy-based route NETWORK NAME : name of your network SWP IP : IP address of your Secure Web Proxy instance DESTINATION RANGE : range of IP addresses to which you want to redirect the traffic SOURCE RANGE : range of IP addresses from which you want to redirect the traffic PROJECT : ID of your project Next, use the following steps to create the default-routing policy-based route. gcloud Use the following command to create the default-routing policy-based route. gcloud network-connectivity policy-based-routes create DEFAULT POLICY BASED ROUTE NAME \ --network="projects/ PROJECT /global/networks/ NETWORK NAME " \ --next-hop-other-routes="DEFAULT ROUTING" \ --protocol-version="IPV4" \ --destination-range= DESTINATION RANGE \ --source-range= SOURCE RANGE \ --priority=1 \ --project= PROJECT Replace the following: DEFAULT POLICY BASED ROUTE NAME : name of your policy-based route NETWORK NAME : name of your network DESTINATION RANGE : range of IP addresses to which you want to redirect the traffic SOURCE RANGE : range of IP addresses from which you want to redirect the traffic PROJECT : ID of your project Post-deployment checklist Make sure that you complete the following tasks after configuring either a static route or a policy-based route with your Secure Web Proxy instance as next hop: Confirm that there is a default route to the internet gateway .
- Cloud Shell Create the gateway.yaml file. name : projects/ PROJECT ID /locations/ REGION /gateways/swp1 type : SECURE WEB GATEWAY addresses : [ " IP ADDRESS " ] ports : [ 443 , 80 ] gatewaySecurityPolicy : projects/ PROJECT ID /locations/ REGION /gatewaySecurityPolicies/policy1 network : projects/ PROJECT ID /global/networks/ NETWORK subnetwork : projects/ PROJECT ID /regions/ REGION /subnetworks/ SUBNETWORK routingMode : NEXT HOP ROUTING MODE Create a Secure Web Proxy instance. gcloud network-services gateways import swp1 \ --source=gateway.yaml \ --location= REGION A Secure Web Proxy instance can take several minutes to deploy.

