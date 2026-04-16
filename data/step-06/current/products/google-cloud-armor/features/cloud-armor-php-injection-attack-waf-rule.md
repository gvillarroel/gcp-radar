---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:20.944Z"
product_name: "Google Cloud Armor"
product_slug: "google-cloud-armor"
feature_name: "Cloud Armor PHP injection attack WAF rule"
feature_slug: "cloud-armor-php-injection-attack-waf-rule"
latest_feature_date: "2020-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/armor/docs/rule-tuning"
  - "https://docs.cloud.google.com/armor/docs/rules-language-reference"
  - "https://docs.cloud.google.com/armor/docs/configure-waf"
  - "https://docs.cloud.google.com/armor/docs/common-use-cases"
keywords:
  - "armor"
  - "php"
  - "injection"
  - "attack"
  - "waf"
  - "rule"
  - "added"
  - "preconfigured"
---

# Cloud Armor PHP injection attack WAF rule

Product: Google Cloud Armor
Coverage: MEDIUM

## Step 02 Summary

Cloud Armor added a preconfigured WAF rule for PHP injection attacks.

## Extended Definition

Cloud Armor added a preconfigured WAF rule for PHP injection attacks.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/armor/docs/rule-tuning](https://docs.cloud.google.com/armor/docs/rule-tuning)
- [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference)
- [https://docs.cloud.google.com/armor/docs/configure-waf](https://docs.cloud.google.com/armor/docs/configure-waf)
- [https://docs.cloud.google.com/armor/docs/common-use-cases](https://docs.cloud.google.com/armor/docs/common-use-cases)

## Supporting Pages

### "Tune Cloud Armor preconfigured WAF rules \_|\_ Google Cloud Armor \_|\_\

- URL: [https://docs.cloud.google.com/armor/docs/rule-tuning](https://docs.cloud.google.com/armor/docs/rule-tuning)
- Source ID: `site-docs-root`
- Final score: 223
- Re-rank relevance: N/A

Evidence snippets:
- This excludes request URIs that contain /bad-path from inspection: gcloud compute security-policies rules add-preconfig-waf-exclusion PRIORITY \ --security-policy POLICY 4 \ --target-rule-set "lfi-v422-stable" \ --target-rule-ids "owasp-crs-v042200-id930100-lfi" \ --request-uri-to-exclude "op=CONTAINS,val=/bad-path" Replace the following: PRIORITY : the priority of the rule POLICY 4 : the name of the security policy The fifth example updates the rule in the security policy POLICY 5 at PRIORITY to remove all the request field exclusions for the rule IDs owasp-crs-v042200-id942110-sqli and owasp-crs-v042200-id942120-sqli under sqli-v422-stable . gcloud compute security-policies rules remove-preconfig-waf-exclusion PRIORITY \ --security-policy POLICY 5 \ --target-rule-set "sqli-v422-stable" \ --target-rule-ids "owasp-crs-v042200-id942110-sqli,owasp-crs-v042200-id942120-sqli" Replace the following: PRIORITY : the priority of the rule POLICY 5 : the name of the security policy Apply parsing on custom Content-Type header values When Cloud Armor evaluates the request body against preconfigured WAF rules, the Content-Type header indicates the format of the data in the request body.
- Home Documentation Networking Google Cloud Armor Guides Send feedback Tune Cloud Armor preconfigured WAF rules Stay organized with collections Save and categorize content based on your preferences.
- By default, Cloud Armor treats the contents of the request body as one string, all of which is eligible for inspection and matching on your preconfigured WAF rules.
- Cloud Armor provides preconfigured WAF rules , each consisting of multiple signatures sourced from the OWASP Core Rule Set 4.22 CRS .

### "Configure custom rules language attributes \_|\_ Google Cloud Armor \_|\_\

- URL: [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference)
- Source ID: `site-docs-reference`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Preconfigured WAF rule examples The following expression uses the xss-v422-stable preconfigured WAF rule to mitigate XSS attacks: evaluatePreconfiguredWaf('xss-v422-stable') The following expression uses all the expressions from the xss-v422-stable preconfigured WAF rule except for member IDs 941100 and 941110 : evaluatePreconfiguredWaf('xss-v422-stable', {'opt out rule ids': ['owasp-crs-v042200-id941100-xss', 'owasp-crs-v042200-id941110-xss']}) The following expression uses a preconfigured WAF rule to mitigate SQLi attacks from the 198.51.100.0/24 IP address range: inIpRange(origin.ip, '198.51.100.0/24') && evaluatePreconfiguredWaf('sqli-v422-stable') The following expression uses the xss-v422-stable preconfigured WAF rule to mitigate XSS attacks for requests to example.com , excluding paths that start with /login/api/ : request.headers['host'].lower() == 'example.com' && !request.path.startswith('/login/api/') && evaluatePreconfiguredWaf('xss-v422-stable') Other operators Expressions Description evaluateThreatIntelligence(string) evaluateThreatIntelligence(string, LIST) evaluateThreatIntelligence(string, string, LIST) Returns true if the client IP address matches any of the IP ranges in the given IP list, unless explicitly excluded with the exclusion list.
- Examples The following expression matches the incoming request against the Google Threat Intelligence iplist-known-malicious-ips feed for protection from the known list of malicious IPs: evaluateThreatIntelligence('iplist-known-malicious-ips') The following expression matches the incoming request against the Google Threat Intelligence iplist-known-malicious-ips feed for protection from the known list of malicious IPs except for IPs in 203.0.113.0/24 : evaluateThreatIntelligence('iplist-known-malicious-ips', ['203.0.113.0/24']) The following expression matches the custom request header for user IP against the address group named my-own-list-of-bad-ips : evaluateAddressGroup('my-own-list-of-bad-ips', origin.user ip) What's next Configure Cloud Armor security policies Tune Cloud Armor preconfigured WAF rules Troubleshoot Cloud Armor issues Quotas and limit Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You can choose to use opt in rule ids if you want to review and manually opt in new WAF signatures that are added later into an existing rule set. evaluatePreconfiguredExpr(string, LIST) Caution: evaluatePreconfiguredExpr() is deprecated.
- For more information about preconfigured WAF rules, see the use case Mitigate application layer attacks by using preconfigured WAF rules .

### "Set up preconfigured WAF rules \_|\_ Google Cloud Armor \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/armor/docs/configure-waf](https://docs.cloud.google.com/armor/docs/configure-waf)
- Source ID: `site-iam-reference`
- Final score: 209
- Re-rank relevance: N/A

Evidence snippets:
- Use these instructions to set up and tune Cloud Armor preconfigured web application firewall (WAF) rules to help protect your application against attacks.
- Note that you can only opt in rule signatures when you set the sensitivity level to 0 : Console Select Advanced mode , then use the following example expression in the Match field: evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 0, 'opt in rule ids': ['owasp-crs-v042200-id941150-xss']}) gcloud gcloud compute security-policies rules create PRIORITY \ --security-policy POLICY NAME \ --expression "evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 0, 'opt in rule ids': ['owasp-crs-v042200-id941150-xss']})" \ --action deny-403 Replace the following: PRIORITY : the priority of the security policy POLICY NAME : the name of the security policy that you want to set up If you want to include two or more signatures from a rule, provide a comma-separated list of signatures with the opt in rule ids argument, as follows: Console Select Advanced mode , then use the following example expression in the Match field: evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 0, 'opt in rule ids': ['owasp-crs-v042200-id941150-xss', 'owasp-crs-v042200-id941320-xss']}) gcloud gcloud compute security-policies rules create PRIORITY \ --security-policy POLICY NAME \ --expression "evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 0, 'opt in rule ids': ['owasp-crs-v042200-id941150-xss', 'owasp-crs-v042200-id941320-xss']})" \ --action deny-403 Replace the following: PRIORITY : the priority of the security policy POLICY NAME : the name of the security policy that you want to set up What's next For more information about WAF rule tuning, see Tune Cloud Armor preconfigured WAF rules Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Mitigate risk on request body that exceeds configured inspection limit When a preconfigured WAF rule is evaluated in a Cloud Armor security policy, up to the first 64 kB (either 8 kB, 16 kB, 32 kB, 48 kB, or 64 kB) of a request body is inspected for signature matches against the WAF rules.
- Update inspection limit for preconfigured WAF rules Cloud Armor preconfigured WAF rules can only inspect up to the first 64 kB (either 8 kB, 16 kB, 32 kB, 48 kB, or 64 kB) of a request body.

### "Common use cases for security policies \_|\_ Google Cloud Armor \_|\_ Google\

- URL: [https://docs.cloud.google.com/armor/docs/common-use-cases](https://docs.cloud.google.com/armor/docs/common-use-cases)
- Source ID: `site-iam-reference`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example uses a preconfigured rule to mitigate SQLi attacks from the 192.0.2.1/24 IP address range: inIpRange(origin.ip, '192.0.2.1/24') && evaluatePreconfiguredWaf('sqli-v422-stable') OWASP Top 10 mitigation for hybrid workloads Cloud Armor offers mitigations for the following attacks, whether they are deployed in Google Cloud,on-premises, or in a third-party provider: SQL injection (SQLi) Cross-site scripting (XSS) Local File Inclusion (LFI) Remote File Inclusion (RFI) Remote Code Execution (RCE) You can use these capabilities to address some of the most common web application security risks, including those risks identified in the OWASP Top 10 list.
- The following example uses a preconfigured rule to mitigate cross-site scripting (XSS) attacks: evaluatePreconfiguredWaf('xss-v422-stable') The following example uses a preconfigured rule to mitigate SQL injection (SQLi) attacks: evaluatePreconfiguredWaf('sqli-v422-stable') You can also combine preconfigured rules with other expressions.
- Cloud Armor's preconfigured WAF rules can be added to a security policy to detect and deny unwelcome layer 7 requests containing SQLi or XSS attempts.
- Cloud Armor security policies can protect your application with features like IP address allowlists and denylists, and preconfigured rules to deter common web attacks.

