---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:17.168Z"
product_name: "Secure Web Proxy"
product_slug: "secure-web-proxy"
feature_name: "Cloud Run Direct VPC egress support for Secure Web Proxy"
feature_slug: "cloud-run-direct-vpc-egress-support-for-secure-web-proxy"
latest_feature_date: "2024-09-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/secure-web-proxy/docs/quickstart"
  - "https://docs.cloud.google.com/secure-web-proxy/docs/deploy-service-attachment"
  - "https://docs.cloud.google.com/secure-web-proxy/docs/policies-and-rules-overview"
  - "https://docs.cloud.google.com/secure-web-proxy/docs/assign-static-ip-addresses-for-egress-traffic"
keywords:
  - "run"
  - "direct"
  - "vpc"
  - "egress"
  - "for"
  - "secure"
  - "web"
  - "proxy"
---

# Cloud Run Direct VPC egress support for Secure Web Proxy

Product: Secure Web Proxy
Coverage: MEDIUM

## Step 02 Summary

Cloud Run Direct VPC egress can route traffic through Secure Web Proxy.

## Extended Definition

Cloud Run Direct VPC egress can route traffic through Secure Web Proxy.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/secure-web-proxy/docs/quickstart](https://docs.cloud.google.com/secure-web-proxy/docs/quickstart)
- [https://docs.cloud.google.com/secure-web-proxy/docs/deploy-service-attachment](https://docs.cloud.google.com/secure-web-proxy/docs/deploy-service-attachment)
- [https://docs.cloud.google.com/secure-web-proxy/docs/policies-and-rules-overview](https://docs.cloud.google.com/secure-web-proxy/docs/policies-and-rules-overview)
- [https://docs.cloud.google.com/secure-web-proxy/docs/assign-static-ip-addresses-for-egress-traffic](https://docs.cloud.google.com/secure-web-proxy/docs/assign-static-ip-addresses-for-egress-traffic)

## Supporting Pages

### Quickstart: Deploy a Secure Web Proxy instance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secure-web-proxy/docs/quickstart](https://docs.cloud.google.com/secure-web-proxy/docs/quickstart)
- Source ID: `site-docs-reference`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a firewall rule. gcloud compute firewall-rules create default-allow-ssh \ --direction=INGRESS \ --priority=1000 \ --network=default \ --action=ALLOW \ --rules=tcp:22 \ --source-ranges=0.0.0.0/0 Required roles Make sure that you have the following roles to complete the tasks in this tutorial: Compute Network Admin role ( roles/compute.networkAdmin ) Certificate Manager Editor role ( roles/certificatemanager.editor ) For more information, see the following: Secure Web Proxy roles and permissions Compute Engine IAM roles and permissions Create a Secure Web Proxy policy This section explains the steps to create a Secure Web Proxy policy.
- Cloud Shell gcloud compute instances delete swp-test-vm What's next Deploy Secure Web Proxy as next hop Deploy Secure Web Proxy as a Private Service Connect service Enable TLS inspection Configure VPC Service Controls for Secure Web Proxy Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For more information about how to configure Secure Web Proxy for TLS inspection and then test your Secure Web Proxy instance, see Enable TLS inspection .
- For the Status field, select one of the following options for the rule enforcement: Enabled : to enforce the rule on your Secure Web Proxy instance.

### "Publish Secure Web Proxy as a Private Service Connect service \_|\_ Google\

- URL: [https://docs.cloud.google.com/secure-web-proxy/docs/deploy-service-attachment](https://docs.cloud.google.com/secure-web-proxy/docs/deploy-service-attachment)
- Source ID: `site-iam-reference`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Shell Use the gcloud compute service-attachments create command . gcloud compute service-attachments create SERVICE ATTACHMENT NAME \ --target-service= SWP INSTANCE URI \ --connection-preference=ACCEPT AUTOMATIC \ --nat-subnets= NAT SUBNET NAME \ --region= REGION \ --project= PROJECT \ Replace the following: SERVICE ATTACHMENT NAME : the name of the service attachment SWP INSTANCE URI : the URI of the Secure Web Proxy instance, in the following form: //networkservices.googleapis.com/projects/ PROJECT ID /locations/ REGION /gateways/ INSTANCE NAME NAT SUBNET NAME : the name of the Private Service Connect subnet REGION : the region of the Secure Web Proxy deployment PROJECT : the project of the Secure Web Proxy deployment Create endpoints Create an endpoint in each VPC network and region that needs to send egress traffic through the centralized Secure Web Proxy instance.
- To update your policy with the rule that you defined in rule.yaml , use the following command: gcloud network-security gateway-security-policies rules import RULE NAME \ --source=rule.yaml \ --location= REGION \ --gateway-security-policy=policy1 Deploy a Secure Web Proxy instance Deploy a Secure Web Proxy instance in explicit routing mode in the Virtual Private Cloud (VPC) network that you want to use for egress traffic.
- Publishing Secure Web Proxy as a Private Service Connect service lets you centralize egress traffic management for workloads across multiple VPC networks. (click to enlarge).
- Cloud Shell Create a policy.yaml file. description : basic Secure Web Proxy policy name : projects/ PROJECT ID /locations/ REGION /gatewaySecurityPolicies/policy1 Replace the following: PROJECT ID : the project ID of your project REGION : the region of the policy Create a Secure Web Proxy policy based on policy.yaml . gcloud network-security gateway-security-policies import policy1 \ --source=policy.yaml \ --location= REGION Add Secure Web Proxy rules to your policy Configure Secure Web Proxy rules to allow egress traffic from each workload.

### Policies and rules \_|\_ Secure Web Proxy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secure-web-proxy/docs/policies-and-rules-overview](https://docs.cloud.google.com/secure-web-proxy/docs/policies-and-rules-overview)
- Source ID: `site-iam-reference`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table shows the various Google Cloud services that support these source identity-based policies: Google Cloud services Service account support Secure tag support Compute Engine virtual machine (VM) Google Kubernetes Engine (GKE) node Google Kubernetes Engine (GKE) container 1 1 Direct VPC for Cloud Run 1 Serverless VPC Access connector 2 2 Cloud VPN 1 1 Cloud Interconnect on premises 1 1 Application Load Balancer Network Load Balancer 1 Not supported by Google Cloud.
- The following table shows whether various Virtual Private Cloud (VPC) architectures are supported when using source identity-based security policies: VPC VPC architecture Support Within VPC Cross project (Shared VPC) Cross VPC Cross peering link (peer VPC) Cross VPC Cross Private Service Connect Cross VPC Cross Network Connectivity Center spokes Destination attributes Secure Web Proxy policies determine whether a destination is approved by analyzing the following attributes of the target website or service: Destination domain : the website's address, such as example.com .
- Application Matcher includes the following items: Full URL path Request method—for example, block all DELETE actions Specific HTTP headers Host matching rules Secure Web Proxy uses hostname matching to verify the destination domain, which varies slightly depending on how your proxy is deployed as shown in the following table.
- Source attributes To enforce granular security, Secure Web Proxy policies identify the source of the traffic by using the following cloud identity and network location data: Service accounts : unique identities that are assigned to your applications or workloads.

### "Assign static IP addresses for outbound traffic \_|\_ Secure Web Proxy \_\

- URL: [https://docs.cloud.google.com/secure-web-proxy/docs/assign-static-ip-addresses-for-egress-traffic](https://docs.cloud.google.com/secure-web-proxy/docs/assign-static-ip-addresses-for-egress-traffic)
- Source ID: `site-iam-reference`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Shell To identify the Cloud Router name that was assigned while provisioning your Secure Web Proxy instance, use the gcloud compute routers list command . gcloud compute routers list \ --region REGION \ --filter="network:( NETWORK NAME ) AND name:(swg-autogen-router- )" \ --format="get(name)" Replace the following: REGION : region where the Cloud Router is deployed for your Secure Web Proxy instance NETWORK NAME : name of your VPC network The output is similar to the following: swg-autogen-router-1 To list the external automatically provisioned IP addresses that were assigned while provisioning your Secure Web Proxy instance, use the gcloud compute routers get-status command . gcloud compute routers get-status ROUTER NAME \ --region= REGION The output is similar to the following: kind : compute#routerStatusResponse result : natStatus : - autoAllocatedNatIps : - 34.144.80.46 - 34.144.83.75 - 34.144.88.111 - 34.144.94.113 minExtraNatIpsNeeded : 0 name : swg-autogen-nat numVmEndpointsWithNatMappings : 3 network : https://www.googleapis.com/compute/projects/ PROJECT NAME /global/networks/ NETWORK NAME This output includes the following values: PROJECT NAME : name of your Google Cloud project NETWORK NAME : name of your VPC network Note: In the preceding output, the swg-autogen-nat Cloud NAT gateway has four automatically provisioned IP addresses.
- DPA mode enables your Secure Web Proxy instance to use the assigned IP addresses. gcloud compute routers nats update swg-autogen-nat \ --router= ROUTER NAME \ --min-ports-per-vm=2048 \ --max-ports-per-vm=4096 \ --enable-dynamic-port-allocation \ --region= REGION For the --min-ports-per-vm and --max-ports-per-vm flags, we recommend that you set their values to 2048 and 4096 , respectively.
- Verify that you have the Google Cloud CLI version 406.0.0 or later installed: gcloud version head -n1 If you have an earlier gcloud CLI version installed, update the version: gcloud components update --version=406.0.0 Configure static IP addresses for Secure Web Proxy Console In the Google Cloud console, go to the Cloud Nat page.
- Here are a few key benefits of assigning static IP addresses for your outbound traffic: Predictable outbound traffic source IPs : enables external services, partners, and on-premises firewalls to add your specific IP addresses to their authorized lists, ensuring that traffic from your Secure Web Proxy instance is accepted.

