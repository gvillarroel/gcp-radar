---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:20.932Z"
product_name: "Google Cloud Armor"
product_slug: "google-cloud-armor"
feature_name: "JA3 fingerprints"
feature_slug: "ja3-fingerprints"
latest_feature_date: "2024-01-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/armor/docs/rules-language-reference"
  - "https://docs.cloud.google.com/armor/docs/configure-rate-limiting"
  - "https://docs.cloud.google.com/armor/docs/armor-enterprise-overview"
  - "https://docs.cloud.google.com/armor/docs/common-use-cases"
keywords:
  - "ja3"
  - "fingerprints"
  - "armor"
  - "custom"
  - "rules"
  - "can"
  - "use"
  - "generally"
---

# JA3 fingerprints

Product: Google Cloud Armor
Coverage: MEDIUM

## Step 02 Summary

Cloud Armor custom rules can use JA3 fingerprints generally available.

## Extended Definition

Cloud Armor custom rules can use JA3 fingerprints generally available.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference)
- [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting)
- [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview)
- [https://docs.cloud.google.com/armor/docs/common-use-cases](https://docs.cloud.google.com/armor/docs/common-use-cases)

## Supporting Pages

### "Configure custom rules language attributes \_|\_ Google Cloud Armor \_|\_\

- URL: [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference)
- Source ID: `site-docs-reference`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following expression matches the incoming request against the Google Threat Intelligence iplist-known-malicious-ips feed for protection from the known list of malicious IPs: evaluateThreatIntelligence('iplist-known-malicious-ips') The following expression matches the incoming request against the Google Threat Intelligence iplist-known-malicious-ips feed for protection from the known list of malicious IPs except for IPs in 203.0.113.0/24 : evaluateThreatIntelligence('iplist-known-malicious-ips', ['203.0.113.0/24']) The following expression matches the custom request header for user IP against the address group named my-own-list-of-bad-ips : evaluateAddressGroup('my-own-list-of-bad-ips', origin.user ip) What's next Configure Cloud Armor security policies Tune Cloud Armor preconfigured WAF rules Troubleshoot Cloud Armor issues Quotas and limit Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Expressions written in the Cloud Armor custom rules language require two components: The attribute : the data to inspect The operation : how to use the data For example, the following expression uses the attributes origin.ip and 198.51.100.0/24 in the operation inIpRange .
- This page discusses advanced match conditions and the Cloud Armor custom rules language that you use to write expressions in the advanced match conditions of security policy rules.
- In the following example, requests from 1.2.3.0/24 (such as your alpha testers) in the AU region match the following expression: origin.region code == "AU" && inIpRange(origin.ip, '1.2.3.0/24') The following expression matches requests from 1.2.3.4 where a user agent contains the string WordPress : inIpRange(origin.ip, '1.2.3.4/32') && has(request.headers['user-agent']) && request.headers['user-agent'].contains('WordPress') Allow or deny traffic for a request URI that matches a regular expression The following expression matches with requests that contain the string /example path/ in the URI: request.path.matches('/example path/') The following expression matches with requests that have Chrome in the User-Agent header field: request.headers['user-agent'].matches('Chrome') The following expression shows case-insensitive matching for the User-Agent header containing wordpress ; it matches with User-Agent:WordPress/605.1.15 , User-Agent:wordPress , and other variations of wordpress : request.headers['user-agent'].matches('(?i:wordpress)') Allow or deny traffic that contains a specific base64 decoded value The following expression matches with requests that have a base64 decoded value of myValue for the user-id header: has(request.headers['user-id']) && request.headers['user-id'].base64Decode().contains('myValue') Allow or deny traffic that contains a string value of a specific length The following expression matches requests that have a URL length greater than 10 characters: size(request.path) > 10 The following expression matches requests that have a header x-data length greater than or equal to 1024 characters: size(request.headers['x-data']) >= 1024 Allow or deny traffic that has zero content-length in the HTTP body The following expression matches requests that have a zero content-length in the HTTP body: int(request.headers["content-length"]) == 0 Allow or deny traffic that contains a specific URL encoded value The following expression matches with requests that have a cookie value containing %3c : has(request.headers['cookie']) && request.headers['cookie'].urlDecode().contains('<') Allow or deny traffic that contains a specific URL encoded value of a Unicode string The following expression matches with requests that have a cookie value equal to Match%2BValue or Match%u002BValue : has(request.headers['cookie']) && request.headers['cookie'].urlDecodeUni() == 'Match+Value' Allow or deny traffic that contains a specific Unicode string of a UTF-8 text The following expression matches with requests that have a cookie value equal to ¬ : has(request.headers['cookie']) && request.headers['cookie'].utf8ToUnicode() == '%u00ac' Allow or deny traffic based on a known JA4 fingerprint The following expression matches with requests that have a JA4 fingerprint equal to t13d1516h2 8daaf6152771 b186095e22b6 : origin.tls ja4 fingerprint == 't13d1516h2 8daaf6152771 b186095e22b6' Allow or deny traffic based on a list of JA4 fingerprints The following expression matches with requests that have a JA4 fingerprint equal to any of the following JA4 fingerprints: t00d0000h0 000000000000 000000000000 t13d1516h2 8daaf6152771 b186095e22b6 origin.tls ja4 fingerprint == 't00d0000h0 000000000000 000000000000' origin.tls ja4 fingerprint == 't13d1516h2 8daaf6152771 b186095e22b6' Preconfigured WAF rules Preconfigured WAF rules use preconfigured static signatures, regular expressions, or both to match on the HTTP request body, HTTP request headers, and query parameters.

### Configure rate limiting \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/configure-rate-limiting](https://docs.cloud.google.com/armor/docs/configure-rate-limiting)
- Source ID: `site-iam-reference`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about exemption cookies and reCAPTCHA assessment, see the Cloud Armor bot management overview . gcloud compute security-policies rules create 115 \ --security-policy SECURITY POLICY \ --expression="token.recaptcha exemption.valid" \ --action=throttle \ --rate-limit-threshold-count=20 \ --rate-limit-threshold-interval-sec=300 \ --conform-action=allow \ --exceed-action=redirect \ --exceed-redirect-type=google-recaptcha \ --enforce-on-key=HTTP-COOKIE \ --enforce-on-key-name="recaptcha-ca-e" Rate limiting based on JA4 and JA3 fingerprints You can use JA4 and JA3 fingerprints as rate limiting keys.
- Set up IAM permissions for Cloud Armor security policies The following operations require the Identity and Access Management (IAM) Compute Security Admin role ( roles/compute.securityAdmin ): Configuring, modifying, updating, and deleting a Cloud Armor security policy Using the following API methods: SecurityPolicies insert SecurityPolicies delete SecurityPolicies patch SecurityPolicies addRule SecurityPolicies patchRule SecurityPolicies removeRule A user with the Compute Network Admin role ( roles/compute.networkAdmin ) can perform the following operations: Setting a Cloud Armor security policy for a backend service Using the following API methods: BackendServices setSecurityPolicy BackendServices list ( gcloud only) Users with the Security Admin role ( roles/iam.securityAdmin ) and the Compute Network Admin role ( roles/compute.networkAdmin ) can view Cloud Armor security policies by using the SecurityPolicies API methods get , list , and getRule .
- Banned requests return a status code of 429 Too Many Requests . gcloud compute security-policies rules create 102 \ --security-policy sec-policy \ --src-ip-ranges=" " \ --action rate-based-ban \ --rate-limit-threshold-count 20 \ --rate-limit-threshold-interval-sec 60 \ --ban-duration-sec 600 \ --ban-threshold-count 500 \ --ban-threshold-interval-sec 400 \ --conform-action allow \ --exceed-action deny-429 \ --enforce-on-key ALL Change a throttle rule to a rate-based ban rule You can use the following command to change the action of an existing rule from a throttle action to a rate-based ban action. gcloud compute security-policies rules update 105 \ --action=rate-based-ban \ --security-policy=sec-policy \ --ban-duration-sec=600 You can't change the action of an existing rule from a rate-based ban action to a throttle action.
- Requests that exceed the throttling limit are denied. gcloud compute security-policies rules create 1000 \ --security-policy SECURITY POLICY \ --expression "request.path.matches('/login')" \ --action throttle \ --rate-limit-threshold-count 20 \ --rate-limit-threshold-interval-sec 300 \ --conform-action allow \ --exceed-action deny-429 \ --enforce-on-key-configs tls-ja4-fingerprint Rate limiting based on user IP address When you receive requests that come through an upstream proxy, you can apply rate limiting based on the originating client's IP address.

### "Cloud Armor Enterprise overview \_|\_ Google Cloud Armor \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/armor/docs/armor-enterprise-overview](https://docs.cloud.google.com/armor/docs/armor-enterprise-overview)
- Source ID: `site-iam-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- What's next Subscribe and enroll projects in Cloud Armor Enterprise Troubleshoot issues Use the custom rules language reference Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- If you don't change the rule priority, you can update advanced rules so that they no longer use Cloud Armor Enterprise-exclusive features.
- We recommend that you delete any advanced network DDoS protection rules before you unenroll your project from Cloud Armor Enterprise, but you can also delete advanced network DDoS protection rules after downgrading.
- After subscribing to Cloud Armor Enterprise at the billing account level, users can choose to enroll individual projects attached to the billing account in Cloud Armor Enterprise.

### "Common use cases for security policies \_|\_ Google Cloud Armor \_|\_ Google\

- URL: [https://docs.cloud.google.com/armor/docs/common-use-cases](https://docs.cloud.google.com/armor/docs/common-use-cases)
- Source ID: `site-iam-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Custom rules to filter based on Layer 3 through Layer 7 parameters Use the Cloud Armor custom rules language to define one or more expressions in a rule's match condition.
- The following example uses a preconfigured rule to mitigate SQLi attacks from the 192.0.2.1/24 IP address range: inIpRange(origin.ip, '192.0.2.1/24') && evaluatePreconfiguredWaf('sqli-v422-stable') OWASP Top 10 mitigation for hybrid workloads Cloud Armor offers mitigations for the following attacks, whether they are deployed in Google Cloud,on-premises, or in a third-party provider: SQL injection (SQLi) Cross-site scripting (XSS) Local File Inclusion (LFI) Remote File Inclusion (RFI) Remote Code Execution (RCE) You can use these capabilities to address some of the most common web application security risks, including those risks identified in the OWASP Top 10 list.
- In the following example, requests from 2001:db8::/32 (such as your alpha testers) in the AU region match the following expression: origin.region code == "AU" && inIpRange(origin.ip, '2001:db8::/32') The following example matches with requests from 192.0.2.0/24 and with a user agent that contains the string WordPress : inIpRange(origin.ip, '192.0.2.0/24') && has(request.headers['user-agent']) && request.headers['user-agent'].contains('WordPress') For additional examples, see Example expressions in the custom rules language reference.
- The following example uses a preconfigured rule to mitigate cross-site scripting (XSS) attacks: evaluatePreconfiguredWaf('xss-v422-stable') The following example uses a preconfigured rule to mitigate SQL injection (SQLi) attacks: evaluatePreconfiguredWaf('sqli-v422-stable') You can also combine preconfigured rules with other expressions.

