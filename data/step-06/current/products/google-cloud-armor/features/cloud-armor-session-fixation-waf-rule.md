---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:20.945Z"
product_name: "Google Cloud Armor"
product_slug: "google-cloud-armor"
feature_name: "Cloud Armor session fixation WAF rule"
feature_slug: "cloud-armor-session-fixation-waf-rule"
latest_feature_date: "2020-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/armor/docs/rule-tuning"
  - "https://docs.cloud.google.com/armor/docs/rules-language-reference"
  - "https://docs.cloud.google.com/armor/docs/configure-waf"
  - "https://docs.cloud.google.com/armor/docs/bot-management"
keywords:
  - "armor"
  - "session"
  - "fixation"
  - "waf"
  - "rule"
  - "added"
  - "preconfigured"
  - "for"
---

# Cloud Armor session fixation WAF rule

Product: Google Cloud Armor
Coverage: MEDIUM

## Step 02 Summary

Cloud Armor added a preconfigured WAF rule for session fixation attacks.

## Extended Definition

Cloud Armor added a preconfigured WAF rule for session fixation attacks.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/armor/docs/rule-tuning](https://docs.cloud.google.com/armor/docs/rule-tuning)
- [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference)
- [https://docs.cloud.google.com/armor/docs/configure-waf](https://docs.cloud.google.com/armor/docs/configure-waf)
- [https://docs.cloud.google.com/armor/docs/bot-management](https://docs.cloud.google.com/armor/docs/bot-management)

## Supporting Pages

### "Tune Cloud Armor preconfigured WAF rules \_|\_ Google Cloud Armor \_|\_\

- URL: [https://docs.cloud.google.com/armor/docs/rule-tuning](https://docs.cloud.google.com/armor/docs/rule-tuning)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: N/A

Evidence snippets:
- This excludes request URIs that contain /bad-path from inspection: gcloud compute security-policies rules add-preconfig-waf-exclusion PRIORITY \ --security-policy POLICY 4 \ --target-rule-set "lfi-v422-stable" \ --target-rule-ids "owasp-crs-v042200-id930100-lfi" \ --request-uri-to-exclude "op=CONTAINS,val=/bad-path" Replace the following: PRIORITY : the priority of the rule POLICY 4 : the name of the security policy The fifth example updates the rule in the security policy POLICY 5 at PRIORITY to remove all the request field exclusions for the rule IDs owasp-crs-v042200-id942110-sqli and owasp-crs-v042200-id942120-sqli under sqli-v422-stable . gcloud compute security-policies rules remove-preconfig-waf-exclusion PRIORITY \ --security-policy POLICY 5 \ --target-rule-set "sqli-v422-stable" \ --target-rule-ids "owasp-crs-v042200-id942110-sqli,owasp-crs-v042200-id942120-sqli" Replace the following: PRIORITY : the priority of the rule POLICY 5 : the name of the security policy Apply parsing on custom Content-Type header values When Cloud Armor evaluates the request body against preconfigured WAF rules, the Content-Type header indicates the format of the data in the request body.
- By default, Cloud Armor treats the contents of the request body as one string, all of which is eligible for inspection and matching on your preconfigured WAF rules.
- Examples The first example updates the rule in the security policy POLICY 1 at PRIORITY to add an exclusion configuration for all signatures under the sqli-v422-stable preconfigured WAF rule, to exclude all request cookies from inspection: gcloud compute security-policies rules add-preconfig-waf-exclusion PRIORITY \ --security-policy POLICY 1 \ --target-rule-set "sqli-v422-stable" \ --request-cookie-to-exclude "op=EQUALS ANY" Replace the following: PRIORITY : the priority of the rule POLICY 1 : the name of the security policy The second example updates the rule in the security policy POLICY 2 at PRIORITY to add an exclusion configuration for signatures owasp-crs-v042200-id941140-xss and owasp-crs-v042200-id941270-xss under the xss-v422-stable preconfigured WAF rule, to exclude request headers that either start with abc or end with xyz from inspection: gcloud compute security-policies rules add-preconfig-waf-exclusion PRIORITY \ --security-policy POLICY 2 \ --target-rule-set "xss-v422-stable" \ --target-rule-ids "owasp-crs-v042200-id941140-xss,owasp-crs-v042200-id941270-xss" \ --request-header-to-exclude "op=STARTS WITH,val=abc" \ --request-header-to-exclude "op=ENDS WITH,val=xyz" Replace the following: PRIORITY : the priority of the rule POLICY 2 : the name of the security policy The third example updates the rule in the security policy POLICY 3 at PRIORITY to add an exclusion configuration for all signatures under the sqli-v422-stable preconfigured WAF rule.
- This excludes request query parameters (parsed from the URI query string or the body payload) that are equal to bad-param from inspection: gcloud compute security-policies rules add-preconfig-waf-exclusion PRIORITY \ --security-policy POLICY 3 \ --target-rule-set "sqli-v422-stable" \ --request-query-param-to-exclude "op=EQUALS,val=bad-param" Replace the following: PRIORITY : the priority of the rule POLICY 3 : the name of the security policy The fourth example updates the rule in the security policy POLICY 4 at PRIORITY to add an exclusion configuration for sigature owasp-crs-v042200-id930100-lfi under the lfi-v422-stable preconfigured WAF rule.

### "Configure custom rules language attributes \_|\_ Google Cloud Armor \_|\_\

- URL: [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference)
- Source ID: `site-docs-reference`
- Final score: 229
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following expression matches the incoming request against the Google Threat Intelligence iplist-known-malicious-ips feed for protection from the known list of malicious IPs: evaluateThreatIntelligence('iplist-known-malicious-ips') The following expression matches the incoming request against the Google Threat Intelligence iplist-known-malicious-ips feed for protection from the known list of malicious IPs except for IPs in 203.0.113.0/24 : evaluateThreatIntelligence('iplist-known-malicious-ips', ['203.0.113.0/24']) The following expression matches the custom request header for user IP against the address group named my-own-list-of-bad-ips : evaluateAddressGroup('my-own-list-of-bad-ips', origin.user ip) What's next Configure Cloud Armor security policies Tune Cloud Armor preconfigured WAF rules Troubleshoot Cloud Armor issues Quotas and limit Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For a complete list of preconfigured WAF rules, see the Cloud Armor preconfigured WAF rules overview .
- In the following example, requests from 1.2.3.0/24 (such as your alpha testers) in the AU region match the following expression: origin.region code == "AU" && inIpRange(origin.ip, '1.2.3.0/24') The following expression matches requests from 1.2.3.4 where a user agent contains the string WordPress : inIpRange(origin.ip, '1.2.3.4/32') && has(request.headers['user-agent']) && request.headers['user-agent'].contains('WordPress') Allow or deny traffic for a request URI that matches a regular expression The following expression matches with requests that contain the string /example path/ in the URI: request.path.matches('/example path/') The following expression matches with requests that have Chrome in the User-Agent header field: request.headers['user-agent'].matches('Chrome') The following expression shows case-insensitive matching for the User-Agent header containing wordpress ; it matches with User-Agent:WordPress/605.1.15 , User-Agent:wordPress , and other variations of wordpress : request.headers['user-agent'].matches('(?i:wordpress)') Allow or deny traffic that contains a specific base64 decoded value The following expression matches with requests that have a base64 decoded value of myValue for the user-id header: has(request.headers['user-id']) && request.headers['user-id'].base64Decode().contains('myValue') Allow or deny traffic that contains a string value of a specific length The following expression matches requests that have a URL length greater than 10 characters: size(request.path) > 10 The following expression matches requests that have a header x-data length greater than or equal to 1024 characters: size(request.headers['x-data']) >= 1024 Allow or deny traffic that has zero content-length in the HTTP body The following expression matches requests that have a zero content-length in the HTTP body: int(request.headers["content-length"]) == 0 Allow or deny traffic that contains a specific URL encoded value The following expression matches with requests that have a cookie value containing %3c : has(request.headers['cookie']) && request.headers['cookie'].urlDecode().contains('<') Allow or deny traffic that contains a specific URL encoded value of a Unicode string The following expression matches with requests that have a cookie value equal to Match%2BValue or Match%u002BValue : has(request.headers['cookie']) && request.headers['cookie'].urlDecodeUni() == 'Match+Value' Allow or deny traffic that contains a specific Unicode string of a UTF-8 text The following expression matches with requests that have a cookie value equal to ¬ : has(request.headers['cookie']) && request.headers['cookie'].utf8ToUnicode() == '%u00ac' Allow or deny traffic based on a known JA4 fingerprint The following expression matches with requests that have a JA4 fingerprint equal to t13d1516h2 8daaf6152771 b186095e22b6 : origin.tls ja4 fingerprint == 't13d1516h2 8daaf6152771 b186095e22b6' Allow or deny traffic based on a list of JA4 fingerprints The following expression matches with requests that have a JA4 fingerprint equal to any of the following JA4 fingerprints: t00d0000h0 000000000000 000000000000 t13d1516h2 8daaf6152771 b186095e22b6 origin.tls ja4 fingerprint == 't00d0000h0 000000000000 000000000000' origin.tls ja4 fingerprint == 't13d1516h2 8daaf6152771 b186095e22b6' Preconfigured WAF rules Preconfigured WAF rules use preconfigured static signatures, regular expressions, or both to match on the HTTP request body, HTTP request headers, and query parameters.
- Preconfigured WAF rule examples The following expression uses the xss-v422-stable preconfigured WAF rule to mitigate XSS attacks: evaluatePreconfiguredWaf('xss-v422-stable') The following expression uses all the expressions from the xss-v422-stable preconfigured WAF rule except for member IDs 941100 and 941110 : evaluatePreconfiguredWaf('xss-v422-stable', {'opt out rule ids': ['owasp-crs-v042200-id941100-xss', 'owasp-crs-v042200-id941110-xss']}) The following expression uses a preconfigured WAF rule to mitigate SQLi attacks from the 198.51.100.0/24 IP address range: inIpRange(origin.ip, '198.51.100.0/24') && evaluatePreconfiguredWaf('sqli-v422-stable') The following expression uses the xss-v422-stable preconfigured WAF rule to mitigate XSS attacks for requests to example.com , excluding paths that start with /login/api/ : request.headers['host'].lower() == 'example.com' && !request.path.startswith('/login/api/') && evaluatePreconfiguredWaf('xss-v422-stable') Other operators Expressions Description evaluateThreatIntelligence(string) evaluateThreatIntelligence(string, LIST) evaluateThreatIntelligence(string, string, LIST) Returns true if the client IP address matches any of the IP ranges in the given IP list, unless explicitly excluded with the exclusion list.

### "Set up preconfigured WAF rules \_|\_ Google Cloud Armor \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/armor/docs/configure-waf](https://docs.cloud.google.com/armor/docs/configure-waf)
- Source ID: `site-iam-reference`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- Note that you can only opt in rule signatures when you set the sensitivity level to 0 : Console Select Advanced mode , then use the following example expression in the Match field: evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 0, 'opt in rule ids': ['owasp-crs-v042200-id941150-xss']}) gcloud gcloud compute security-policies rules create PRIORITY \ --security-policy POLICY NAME \ --expression "evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 0, 'opt in rule ids': ['owasp-crs-v042200-id941150-xss']})" \ --action deny-403 Replace the following: PRIORITY : the priority of the security policy POLICY NAME : the name of the security policy that you want to set up If you want to include two or more signatures from a rule, provide a comma-separated list of signatures with the opt in rule ids argument, as follows: Console Select Advanced mode , then use the following example expression in the Match field: evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 0, 'opt in rule ids': ['owasp-crs-v042200-id941150-xss', 'owasp-crs-v042200-id941320-xss']}) gcloud gcloud compute security-policies rules create PRIORITY \ --security-policy POLICY NAME \ --expression "evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 0, 'opt in rule ids': ['owasp-crs-v042200-id941150-xss', 'owasp-crs-v042200-id941320-xss']})" \ --action deny-403 Replace the following: PRIORITY : the priority of the security policy POLICY NAME : the name of the security policy that you want to set up What's next For more information about WAF rule tuning, see Tune Cloud Armor preconfigured WAF rules Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Mitigate risk on request body that exceeds configured inspection limit When a preconfigured WAF rule is evaluated in a Cloud Armor security policy, up to the first 64 kB (either 8 kB, 16 kB, 32 kB, 48 kB, or 64 kB) of a request body is inspected for signature matches against the WAF rules.
- Update inspection limit for preconfigured WAF rules Cloud Armor preconfigured WAF rules can only inspect up to the first 64 kB (either 8 kB, 16 kB, 32 kB, 48 kB, or 64 kB) of a request body.
- Therefore, you create the rule at sensitivity level 2 and use the opt out rule ids argument to opt out of the owasp-crs-v042200-id941370-xss signature: Console Select Advanced mode , then use the following example expression in the Match field: evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 2, 'opt out rule ids': ['owasp-crs-v042200-id941370-xss']}) gcloud gcloud compute security-policies rules create PRIORITY \ --security-policy POLICY NAME \ --expression "evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 2, 'opt out rule ids': ['owasp-crs-v042200-id941370-xss']})" \ --action deny-403 Replace the following: PRIORITY : the priority of the security policy POLICY NAME : the name of the security policy that you want to set up To exclude two or more signatures from a rule, provide a comma-separated list of signatures with the opt out rule ids argument, as follows: Console Select Advanced mode , then use the following example expression in the Match field: evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 2, 'opt out rule ids': ['owasp-crs-v042200-id941370-xss', 'owasp-crs-v042200-id941380-xss']}) gcloud gcloud compute security-policies rules create PRIORITY \ --security-policy POLICY NAME \ --expression "evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 2, 'opt out rule ids': ['owasp-crs-v042200-id941370-xss', 'owasp-crs-v042200-id941380-xss']})" \ --action deny-403 Replace the following: PRIORITY : the priority of the security policy POLICY NAME : the name of the security policy that you want to set up Create a rule that opts in one or more signatures This example uses only the signature owasp-crs-v042200-id941150-xss from the xss-v422-stable WAF rule.

### "Cloud Armor bot management overview \_|\_ Google Cloud Armor \_|\_ Google\

- URL: [https://docs.cloud.google.com/armor/docs/bot-management](https://docs.cloud.google.com/armor/docs/bot-management)
- Source ID: `site-iam-reference`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For information about implementing tokens in reCAPTCHA, see the following pages: Web applications Implement reCAPTCHA action-tokens Implement reCAPTCHA session-tokens Mobile applications Implement reCAPTCHA action-tokens Finally, use the Cloud Armor rules language to configure security policy rules to evaluate reCAPTCHA tokens that are attached with the request.
- If you don't tune the rate limiting rules, Cloud Armor imposes no limit on the number of uses for each reCAPTCHA exemption cookie, action-token, and session-token.
- Rate limit reCAPTCHA exemption cookies or tokens For security, we recommend that you configure rate limiting rules to prevent token abuse through multiple uses per unique reCAPTCHA action-token, session-token, or exemption cookie.
- When you associate reCAPTCHA keys with a security policy rule, Cloud Armor performs additional validation on the token by comparing the reCAPTCHA key in the token against reCAPTCHA keys that are associated with the rule.

