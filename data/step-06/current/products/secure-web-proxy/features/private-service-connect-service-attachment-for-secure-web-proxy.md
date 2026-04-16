---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:17.168Z"
product_name: "Secure Web Proxy"
product_slug: "secure-web-proxy"
feature_name: "Private Service Connect service attachment for Secure Web Proxy"
feature_slug: "private-service-connect-service-attachment-for-secure-web-proxy"
latest_feature_date: "2024-06-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/secure-web-proxy/docs/deploy-service-attachment"
  - "https://docs.cloud.google.com/secure-web-proxy/docs/overview"
  - "https://docs.cloud.google.com/secure-web-proxy/docs/tls-inspection-overview"
  - "https://docs.cloud.google.com/secure-web-proxy/docs/policies-and-rules-overview"
keywords:
  - "private"
  - "connect"
  - "attachment"
  - "for"
  - "secure"
  - "web"
  - "proxy"
  - "can"
---

# Private Service Connect service attachment for Secure Web Proxy

Product: Secure Web Proxy
Coverage: MEDIUM

## Step 02 Summary

Secure Web Proxy can be published as a Private Service Connect service attachment to centralize egress security policy.

## Extended Definition

Secure Web Proxy can be published as a Private Service Connect service attachment to centralize egress security policy.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/secure-web-proxy/docs/deploy-service-attachment](https://docs.cloud.google.com/secure-web-proxy/docs/deploy-service-attachment)
- [https://docs.cloud.google.com/secure-web-proxy/docs/overview](https://docs.cloud.google.com/secure-web-proxy/docs/overview)
- [https://docs.cloud.google.com/secure-web-proxy/docs/tls-inspection-overview](https://docs.cloud.google.com/secure-web-proxy/docs/tls-inspection-overview)
- [https://docs.cloud.google.com/secure-web-proxy/docs/policies-and-rules-overview](https://docs.cloud.google.com/secure-web-proxy/docs/policies-and-rules-overview)

## Supporting Pages

### "Publish Secure Web Proxy as a Private Service Connect service \_|\_ Google\

- URL: [https://docs.cloud.google.com/secure-web-proxy/docs/deploy-service-attachment](https://docs.cloud.google.com/secure-web-proxy/docs/deploy-service-attachment)
- Source ID: `site-iam-reference`
- Final score: 342
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Shell Use the gcloud compute service-attachments create command . gcloud compute service-attachments create SERVICE ATTACHMENT NAME \ --target-service= SWP INSTANCE URI \ --connection-preference=ACCEPT AUTOMATIC \ --nat-subnets= NAT SUBNET NAME \ --region= REGION \ --project= PROJECT \ Replace the following: SERVICE ATTACHMENT NAME : the name of the service attachment SWP INSTANCE URI : the URI of the Secure Web Proxy instance, in the following form: //networkservices.googleapis.com/projects/ PROJECT ID /locations/ REGION /gateways/ INSTANCE NAME NAT SUBNET NAME : the name of the Private Service Connect subnet REGION : the region of the Secure Web Proxy deployment PROJECT : the project of the Secure Web Proxy deployment Create endpoints Create an endpoint in each VPC network and region that needs to send egress traffic through the centralized Secure Web Proxy instance.
- To centralize your Secure Web Proxy deployment across multiple VPC networks, you can make Secure Web Proxy available through a Private Service Connect service attachment.
- Publishing Secure Web Proxy as a Private Service Connect service lets you centralize egress traffic management for workloads across multiple VPC networks. (click to enlarge).
- Publish Secure Web Proxy as a Private Service Connect service To publish Secure Web Proxy as a service, create a Private Service Connect subnet and service attachment.

### Secure Web Proxy overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secure-web-proxy/docs/overview](https://docs.cloud.google.com/secure-web-proxy/docs/overview)
- Source ID: `site-docs-root`
- Final score: 300
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- By deploying Secure Web Proxy as a Private Service Connect service attachment, you can resolve those scaling-related limitations.
- Private Service Connect service attachment mode With this mode, you can centralize your web proxy deployments across a complex, multi-Virtual Private Cloud (VPC) architecture.
- Deploy Secure Web Proxy as a Private Service Connect service attachment (click to enlarge).
- In this way, Secure Web Proxy acts as an intermediary, establishing new TCP connections for the client and ensuring that every connection meets the requirements of the administered security policy.

### TLS inspection overview \_|\_ Secure Web Proxy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secure-web-proxy/docs/tls-inspection-overview](https://docs.cloud.google.com/secure-web-proxy/docs/tls-inspection-overview)
- Source ID: `site-iam-reference`
- Final score: 284
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Key features The Secure Web Proxy TLS inspection service offers a flexible, scalable framework for managing encrypted traffic through the following capabilities: Integrated private trust : built-in integration with CA Service provides a highly available, Google-managed repository for your private CAs.
- Private trust anchor : Because Secure Web Proxy presents certificates that are signed by your internal CA rather than a public CA, clients trust the connection only if your private root CA is pre-installed.
- By gaining visibility into the encrypted request, Secure Web Proxy can apply advanced security policies—such as URL filtering on the full request path and HTTP header inspection—to protect your environment from threats hidden within encrypted tunnels.
- Result of certificate pinning : when Secure Web Proxy presents its signed certificate, the application detects that the certificate doesn't match its hardcoded expectations and terminates the connection.

### Policies and rules \_|\_ Secure Web Proxy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secure-web-proxy/docs/policies-and-rules-overview](https://docs.cloud.google.com/secure-web-proxy/docs/policies-and-rules-overview)
- Source ID: `site-iam-reference`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table shows whether various Virtual Private Cloud (VPC) architectures are supported when using source identity-based security policies: VPC VPC architecture Support Within VPC Cross project (Shared VPC) Cross VPC Cross peering link (peer VPC) Cross VPC Cross Private Service Connect Cross VPC Cross Network Connectivity Center spokes Destination attributes Secure Web Proxy policies determine whether a destination is approved by analyzing the following attributes of the target website or service: Destination domain : the website's address, such as example.com .
- You can assign your enterprise IP addresses (or static Google Cloud IP addresses) that Secure Web Proxy uses for outbound traffic.
- Application Matcher includes the following items: Full URL path Request method—for example, block all DELETE actions Specific HTTP headers Host matching rules Secure Web Proxy uses hostname matching to verify the destination domain, which varies slightly depending on how your proxy is deployed as shown in the following table.
- Source attributes To enforce granular security, Secure Web Proxy policies identify the source of the traffic by using the following cloud identity and network location data: Service accounts : unique identities that are assigned to your applications or workloads.

