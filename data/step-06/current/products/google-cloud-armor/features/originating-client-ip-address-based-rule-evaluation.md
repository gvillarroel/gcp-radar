---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:20.935Z"
product_name: "Google Cloud Armor"
product_slug: "google-cloud-armor"
feature_name: "Originating client IP address-based rule evaluation"
feature_slug: "originating-client-ip-address-based-rule-evaluation"
latest_feature_date: "2023-07-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/armor/docs/rules-language-reference"
  - "https://docs.cloud.google.com/armor/docs/address-groups-using"
  - "https://docs.cloud.google.com/armor/docs/adaptive-protection-overview"
  - "https://docs.cloud.google.com/armor/docs/configure-rate-limiting"
keywords:
  - "originating"
  - "client"
  - "ip"
  - "address"
  - "based"
  - "rule"
  - "evaluation"
  - "armor"
---

# Originating client IP address-based rule evaluation

Product: Google Cloud Armor
Coverage: MEDIUM

## Step 02 Summary

Cloud Armor can evaluate custom rules or Adaptive Protection using the originating client IP address.

## Extended Definition

Cloud Armor can evaluate custom rules or Adaptive Protection using the originating client IP address.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference)
- [https://docs.cloud.google.com/armor/docs/address-groups-using](https://docs.cloud.google.com/armor/docs/address-groups-using)
- [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview)
- [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting)

## Supporting Pages

### "Configure custom rules language attributes \_|\_ Google Cloud Armor \_|\_\

- URL: [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference)
- Source ID: `site-docs-reference`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In this case, the expression returns true if origin.ip is within the 198.51.100.0/24 IP address range. inIpRange(origin.ip, '198.51.100.0/24') Even though the previous example expression only matches on client IP address, when you use the example expression in a Cloud Armor security policy rule, the rule is considered a rule with advanced match conditions from a quota perspective.
- Cloud Armor rules and expressions explicitly use those region codes to allow or deny requests. origin.asn integer The autonomous system number (ASN) that is associated with the client IP address.
- Preconfigured WAF rule examples The following expression uses the xss-v422-stable preconfigured WAF rule to mitigate XSS attacks: evaluatePreconfiguredWaf('xss-v422-stable') The following expression uses all the expressions from the xss-v422-stable preconfigured WAF rule except for member IDs 941100 and 941110 : evaluatePreconfiguredWaf('xss-v422-stable', {'opt out rule ids': ['owasp-crs-v042200-id941100-xss', 'owasp-crs-v042200-id941110-xss']}) The following expression uses a preconfigured WAF rule to mitigate SQLi attacks from the 198.51.100.0/24 IP address range: inIpRange(origin.ip, '198.51.100.0/24') && evaluatePreconfiguredWaf('sqli-v422-stable') The following expression uses the xss-v422-stable preconfigured WAF rule to mitigate XSS attacks for requests to example.com , excluding paths that start with /login/api/ : request.headers['host'].lower() == 'example.com' && !request.path.startswith('/login/api/') && evaluatePreconfiguredWaf('xss-v422-stable') Other operators Expressions Description evaluateThreatIntelligence(string) evaluateThreatIntelligence(string, LIST) evaluateThreatIntelligence(string, string, LIST) Returns true if the client IP address matches any of the IP ranges in the given IP list, unless explicitly excluded with the exclusion list.
- Examples The following expression matches the incoming request against the Google Threat Intelligence iplist-known-malicious-ips feed for protection from the known list of malicious IPs: evaluateThreatIntelligence('iplist-known-malicious-ips') The following expression matches the incoming request against the Google Threat Intelligence iplist-known-malicious-ips feed for protection from the known list of malicious IPs except for IPs in 203.0.113.0/24 : evaluateThreatIntelligence('iplist-known-malicious-ips', ['203.0.113.0/24']) The following expression matches the custom request header for user IP against the address group named my-own-list-of-bad-ips : evaluateAddressGroup('my-own-list-of-bad-ips', origin.user ip) What's next Configure Cloud Armor security policies Tune Cloud Armor preconfigured WAF rules Troubleshoot Cloud Armor issues Quotas and limit Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Configure address groups \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/address-groups-using](https://docs.cloud.google.com/armor/docs/address-groups-using)
- Source ID: `site-iam-reference`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In POLICY 2 , create a deny rule with the following match condition, which excludes 66.249.77.32/27 and 66.249.77.64/27 : evaluateAddressGroup(' MALICIOUS IPS ', origin.ip, [66.249.77.32/27, 66.249.77.64/27]) Use an address group to match against user IP addresses To use an address group to match against originating client ("user") IP addresses, you must configure userIpRequestHeaders[] in the security policy.
- It's important to note that in the following conditions, you receive the source IP address of the request and not the IP address of the originating client because the value of origin.user ip defaults to the value of origin.ip : You don't configure the userIpRequestHeaders[] option.
- In addition, you use an upstream proxy, which includes information about the originating client IP address in the header.
- Create a hierarchical security policy, then add a deny rule with the following match condition: evaluateOrganizationAddressGroup(' MALICIOUS IPS ', origin.ip) Finally, associate the hierarchical security policy to all of the backend services in your organization, replacing POLICY NAME with the name of your hierarchical security policy and ORGANIZATION ID with the ID of your organization: gcloud compute org-security-policies associations create \ --security-policy= POLICY NAME \ --organization= ORGANIZATION ID Reuse a group of IP address ranges for all backend services within an organization For this example, imagine that you have the same list of 10,000 IP addresses as in the previous example, but that some of the IP addresses are known to be web crawlers.

### Google Cloud Armor Adaptive Protection overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/adaptive-protection-overview](https://docs.cloud.google.com/armor/docs/adaptive-protection-overview)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- The following is an example of a user-readable table that contains the signature of a potential attack: Attribute name Value Match type Attack likelihood Proportion in attack Proportion in baseline UserAgent "foo" Exact match 0.7 0.85 0.12 UserAgent "bar" Exact match 0.6 0.7 0.4 Client IP "a.b.c.d" Exact match 0.95 0.1 0.01 Client IP a.b.c.e Exact match 0.95 0.1 0.01 Client IP a.b.c.f Exact match 0.05 0.1 0.1 RegionCode UK Exact match 0.64 0.3 0.1 RegionCode IN Exact match 0.25 0.2 0.3 RequestUri /urlpart Substring 0.7 0.85 0.12 An Adaptive Protection alert and the relevant Cloud Logging event log contain the following: A unique alert ID, or alertID , which is used to refer to a specific alert when it reports user feedback (more below) The backend service under attack, or backendService The confidence score, or confidence , which is a number between 0 and 1 that indicates how strongly the Adaptive Protection system rates the detected event as a malicious attack You also receive a set of signatures and rules characterizing the detected attack.
- The signature consists of a set of attributes, such as client IP address, geographical regions, cookies, user agents, referers and other HTTP request headers, and the set of values for those attributes thought to be associated with the potential attack traffic.
- Rules in a Cloud Armor security policy are evaluated in priority order with evaluation terminating after the first matching rule is triggered and the associated rule action is taken.
- This prevents Adaptive Protection from mistakenly identifying the proxy's client IP address as participating in an attack.

### Configure rate limiting \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting)
- Source ID: `site-iam-reference`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Requests that exceed the throttling limit are denied. gcloud compute security-policies rules create 1000 \ --security-policy SECURITY POLICY \ --expression "request.path.matches('/login')" \ --action throttle \ --rate-limit-threshold-count 20 \ --rate-limit-threshold-interval-sec 300 \ --conform-action allow \ --exceed-action deny-429 \ --enforce-on-key-configs tls-ja4-fingerprint Rate limiting based on user IP address When you receive requests that come through an upstream proxy, you can apply rate limiting based on the originating client's IP address.
- The following example creates a throttle rule at priority 1000 with a rate limit of 20 requests per 5 minutes that matches on requests with the /login path, based on the originating client's IP address.
- IAM permission API methods Roles compute.securityPolicies.create SecurityPolicies insert Compute Security Admin ( roles/compute.securityAdmin ) compute.securityPolicies.delete SecurityPolicies delete Compute Security Admin ( roles/compute.securityAdmin ) compute.securityPolicies.get SecurityPolicies get SecurityPolicies getRule Security Admin ( roles/iam.securityAdmin ) compute.securityPolicies.list SecurityPolicies list Security Admin ( roles/iam.securityAdmin ) Both of the following: compute.securityPolicies.use compute.backendServices. setSecurityPolicy BackendServices setSecurityPolicy Compute Network Admin ( roles/compute.networkAdmin ) compute.securityPolicies.update SecurityPolicies patch SecurityPolicies addRule SecurityPolicies patchRule SecurityPolicies removeRule Compute Security Admin ( roles/compute.securityAdmin ) Rules for rate-based throttling Rules for rate-based throttling have the following format in the Google Cloud CLI: gcloud compute security-policies rules create PRIORITY \ --security-policy= SECURITY POLICY \ {--expression= EXPRESSION --src-ip-ranges= SRC IP RANGE } \ --action "throttle" \ --rate-limit-threshold-count= RATE LIMIT THRESHOLD COUNT \ --rate-limit-threshold-interval-sec= RATE LIMIT THRESHOLD INTERVAL SEC \ --conform-action=[allow] \ --exceed-action=[deny-403 deny-404 deny-429 deny-502 redirect] \ --exceed-redirect-type=[google-recaptcha external-302] \ --exceed-redirect-target= REDIRECT URL \ --enforce-on-key=[IP ALL HTTP-HEADER XFF-IP HTTP-COOKIE HTTP-PATH SNI REGION-CODE] \ --enforce-on-key-name=[ HTTP HEADER NAME HTTP COOKIE NAME ] Rate limiting on single keys For example, the following gcloud CLI command creates a throttle rule at priority 105 with a rate limit of 100 requests each 60 seconds for each IP address in 1.2.3.0/24 .
- Requests that exceed the throttling limit return a 429 Too Many Requests status code. gcloud compute security-policies rules create 105 \ --security-policy= POLICY NAME \ --src-ip-ranges="1.2.3.0/24" \ --action=throttle \ --rate-limit-threshold-count=100 \ --rate-limit-threshold-interval-sec=60 \ --conform-action=allow \ --exceed-action=deny-429 \ --enforce-on-key-configs="HTTP-PATH,HTTP-COOKIE=site id" Rules for rate-based bans Rules for rate-based bans have the following format in the gcloud CLI: gcloud compute security-policies rules create PRIORITY \ --security-policy= SECURITY POLICY \ {--expression= EXPRESSION --src-ip-ranges= SRC IP RANGE } \ --action "rate-based-ban" \ --rate-limit-threshold-count= RATE LIMIT THRESHOLD COUNT \ --rate-limit-threshold-interval-sec= RATE LIMIT THRESHOLD INTERVAL SEC \ --ban-duration-sec= BAN DURATION SEC \ --ban-threshold-count= BAN THRESHOLD COUNT \ --ban-threshold-interval-sec= BAN THRESHOLD INTERVAL SEC \ --conform-action=[allow] \ --exceed-action=[deny-403 deny-404 deny-429 deny-502 redirect] \ --exceed-redirect-type=[google-recaptcha external-302] \ --exceed-redirect-target= REDIRECT URL \ --enforce-on-key=[IP ALL HTTP-HEADER XFF-IP HTTP-COOKIE HTTP-PATH SNI REGION-CODE] \ --enforce-on-key-name=[ HTTP HEADER NAME HTTP COOKIE NAME ] For example, the following gcloud CLI command creates a rate-based ban rule at priority 100 for each IP address whose requests match a header fish with value tuna and ban it for 300 seconds when its rate exceeds a limit of 50 requests for each 120 seconds.

