---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:17.169Z"
product_name: "Secure Web Proxy"
product_slug: "secure-web-proxy"
feature_name: "TLS inspection for Secure Web Proxy"
feature_slug: "tls-inspection-for-secure-web-proxy"
latest_feature_date: "2023-03-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/secure-web-proxy/docs/tls-inspection-overview"
  - "https://docs.cloud.google.com/secure-web-proxy/docs/enable-tls-inspection"
  - "https://docs.cloud.google.com/secure-web-proxy/docs/tls-rule-evaluation"
  - "https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules"
keywords:
  - "tls"
  - "inspection"
  - "for"
  - "secure"
  - "web"
  - "proxy"
  - "can"
  - "intercept"
---

# TLS inspection for Secure Web Proxy

Product: Secure Web Proxy
Coverage: MEDIUM

## Step 02 Summary

Secure Web Proxy can intercept and inspect encrypted TLS traffic and enforce security policies.

## Extended Definition

Secure Web Proxy can intercept and inspect encrypted TLS traffic and enforce security policies.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/secure-web-proxy/docs/tls-inspection-overview](https://docs.cloud.google.com/secure-web-proxy/docs/tls-inspection-overview)
- [https://docs.cloud.google.com/secure-web-proxy/docs/enable-tls-inspection](https://docs.cloud.google.com/secure-web-proxy/docs/enable-tls-inspection)
- [https://docs.cloud.google.com/secure-web-proxy/docs/tls-rule-evaluation](https://docs.cloud.google.com/secure-web-proxy/docs/tls-rule-evaluation)
- [https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules](https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules)

## Supporting Pages

### TLS inspection overview \_|\_ Secure Web Proxy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secure-web-proxy/docs/tls-inspection-overview](https://docs.cloud.google.com/secure-web-proxy/docs/tls-inspection-overview)
- Source ID: `site-iam-reference`
- Final score: 352
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Key features The Secure Web Proxy TLS inspection service offers a flexible, scalable framework for managing encrypted traffic through the following capabilities: Integrated private trust : built-in integration with CA Service provides a highly available, Google-managed repository for your private CAs.
- Note: If you want to use ApplicationMatcher in your security rules for HTTPS traffic, then you must enable TLS Inspection for your Secure Web Proxy instance.
- Scalable policy architecture : Dedicated policies : assign a unique TLS inspection policy and CA pool to each Secure Web Proxy policy for strict isolation.
- Secure Web Proxy provides an integrated TLS inspection service that lets you intercept and decrypt HTTPS traffic.

### Enable TLS inspection \_|\_ Secure Web Proxy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secure-web-proxy/docs/enable-tls-inspection](https://docs.cloud.google.com/secure-web-proxy/docs/enable-tls-inspection)
- Source ID: `site-docs-root`
- Final score: 338
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To retrieve the PROJECT NUMBER by using the PROJECT ID of the CA pool project, use the following command: gcloud projects describe PROJECT ID --format="value(projectNumber)" For the service account that you created, grant permissions to generate certificates with your CA pool. gcloud privateca pools add-iam-policy-binding CA POOL \ --member='serviceAccount: SERVICE ACCOUNT ' \ --role='roles/privateca.certificateManager' \ --location=' REGION ' Configure Secure Web Proxy for TLS inspection You can proceed with the tasks in this section only after you have completed the prerequisite tasks listed in the Before you begin section.
- Secure Web Proxy offers a TLS inspection service that lets you intercept the TLS traffic, inspect the encrypted request, and enforce security policies.
- Cloud Shell Create the file policy.yaml : description : basic Secure Web Proxy policy name : projects/ PROJECT ID /locations/ REGION /gatewaySecurityPolicies/policy1 tlsInspectionPolicy : projects/ PROJECT ID /locations/ REGION /tlsInspectionPolicies/ TLS INSPECTION NAME Create the Secure Web Proxy policy: gcloud network-security gateway-security-policies import policy1 \ --source=policy.yaml --location= REGION Create the file rule.yaml : name : projects/ PROJECT ID /locations/ REGION /gatewaySecurityPolicies/policy1/rules/allow-example-com description : Allow example.com enabled : true priority : 1 basicProfile : ALLOW sessionMatcher : host() == 'example.com' applicationMatcher : request.path.contains('index.html') tlsInspectionEnabled : true Note: You must enable TLS inspection for each rule.
- To create a root CA, do the following: Create a root CA Create a subordinate CA pool by using an existing root CA stored within CA Service Create a service account A service account helps provide the necessary permissions for TLS inspection without compromising either the security of your user accounts or your Secure Web Proxy instance itself.

### Rule evaluation order \_|\_ Secure Web Proxy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secure-web-proxy/docs/tls-rule-evaluation](https://docs.cloud.google.com/secure-web-proxy/docs/tls-rule-evaluation)
- Source ID: `site-iam-reference`
- Final score: 306
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example 2 Consider the following two rules: Rule 1 description: allow to specific GitHub repository (TLS inspect to match specific path) priority: 10 basicProfile: ALLOW sessionMatcher: true tlsInspectionEnabled: true applicationMatcher: request.url().startsWith('github.com/grpc/grpc') Rule 2 description: allow TCP proxying from tag 12345 to example.com priority: 20 basicProfile: ALLOW sessionMatcher: host() == 'bankofamerica.com' In this example, Secure Web Proxy interprets the two rules as follows: All traffic, including that destined for bankofamerica.com , is inspected for TLS to match the request.url() of the high priority rule 1.
- Consider the following two rules: Rule 1 description: do not allow POST requests priority: 10 basicProfile: DENY sessionMatcher: true tlsInspectionEnabled: true applicationMatcher: request.method == 'POST' Rule 2 description: allow TCP proxying from tag 12345 to example.com priority: 20 basicProfile: ALLOW sessionMatcher: source.matchTag('tagValues/12345') && host() == 'example.com' In this example, Secure Web Proxy interprets the two rules as follows: Allowing TCP traffic but disallowing a specific type of HTTP request is mutually exclusive because the TCP traffic can contain a POST request.
- Before you configure TLS inspection You must understand the following rule-evaluation scenarios before you configure TLS inspection: A client can send an HTTP request to the proxy server.
- Rules that allow TLS (including HTTPS) traffic but do not perform TLS inspection can be interpreted as TCP proxy rules.

### Configure rules \_|\_ Secure Web Proxy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules](https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules)
- Source ID: `site-iam-reference`
- Final score: 280
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table provides more information about the various attributes that you can use in a TCP proxy rule: Attribute Attribute type Description source.ip string IP address of the client that sent the request. source.port string Client port that sent the request. destination.port string Upstream port to which your Secure Web Proxy instance sends the traffic. source.matchTag( SECURE TAG ) boolean True , if the source is associated with SECURE TAG .
- Configure TCP proxy rules You can configure Transmission Control Protocol (TCP) proxy rules for your application to secure non-web traffic and enforce security policies for applications that don't use standard HTTP/S, such as for ports 80 and 443 .
- Encrypted HTTPS (without TLS inspection) Secure Web Proxy checks the hostname against the SNI header in the outbound request, which is visible even if the rest of the traffic is encrypted.
- For more information, see TLS inspection overview and Enable TLS inspection . name : projects/ PROJECT ID /locations/ REGION /gatewaySecurityPolicies/policy1/rules/ RULE NAME description : Allow wikipedia.org enabled : true priority : 1 basicProfile : ALLOW sessionMatcher : host() == 'www.wikipedia.org' applicationMatcher : request.path.contains('index.html') tlsInspectionEnabled : true For more information about matching TCP traffic, see Configure TCP proxy rules .

