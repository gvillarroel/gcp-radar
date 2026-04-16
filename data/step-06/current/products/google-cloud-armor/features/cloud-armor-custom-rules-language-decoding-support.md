---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:20.940Z"
product_name: "Google Cloud Armor"
product_slug: "google-cloud-armor"
feature_name: "Cloud Armor custom rules language decoding support"
feature_slug: "cloud-armor-custom-rules-language-decoding-support"
latest_feature_date: "2022-08-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/armor/docs/rules-language-reference"
  - "https://docs.cloud.google.com/armor/docs/configure-security-policies"
  - "https://docs.cloud.google.com/armor/docs/security-policy-overview"
  - "https://docs.cloud.google.com/armor/docs/bot-management"
keywords:
  - "armor"
  - "custom"
  - "rules"
  - "language"
  - "decoding"
  - "supports"
  - "url"
  - "unicode"
---

# Cloud Armor custom rules language decoding support

Product: Google Cloud Armor
Coverage: MEDIUM

## Step 02 Summary

Cloud Armor custom rules language supports URL, URL Unicode, and UTF-8 decoding.

## Extended Definition

Cloud Armor custom rules language supports URL, URL Unicode, and UTF-8 decoding.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference)
- [https://docs.cloud.google.com/armor/docs/configure-security-policies](https://docs.cloud.google.com/armor/docs/configure-security-policies)
- [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview)
- [https://docs.cloud.google.com/armor/docs/bot-management](https://docs.cloud.google.com/armor/docs/bot-management)

## Supporting Pages

### "Configure custom rules language attributes \_|\_ Google Cloud Armor \_|\_\

- URL: [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference)
- Source ID: `site-docs-reference`
- Final score: 289
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Expressions written in the Cloud Armor custom rules language require two components: The attribute : the data to inspect The operation : how to use the data For example, the following expression uses the attributes origin.ip and 198.51.100.0/24 in the operation inIpRange .
- Home Documentation Networking Google Cloud Armor Guides Send feedback Configure custom rules language attributes Stay organized with collections Save and categorize content based on your preferences.
- This page discusses advanced match conditions and the Cloud Armor custom rules language that you use to write expressions in the advanced match conditions of security policy rules.
- The Cloud Armor custom rules language is a subset of the Common Expression Language (CEL) .

### "Configure Cloud Armor security policies \_|\_ Google Cloud Armor \_|\_ Google\

- URL: [https://docs.cloud.google.com/armor/docs/configure-security-policies](https://docs.cloud.google.com/armor/docs/configure-security-policies)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Note that the actual output would include all of the rules that are listed in Tuning Cloud Armor WAF rules . gcloud compute security-policies list-preconfigured-expression-sets EXPRESSION SET sqli-canary RULE ID SENSITIVITY owasp-crs-v042200-id942120-sqli 2 … xss-canary RULE ID SENSITIVITY owasp-crs-v042200-id941110-xss 1 owasp-crs-v042200-id941120-xss 2 … sourceiplist-fastly sourceiplist-cloudflare sourceiplist-imperva What's next Tune web application firewall (WAF) rules Troubleshoot issues Use the custom rules language reference Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For more information about expressions, see the Cloud Armor custom rules language reference .
- The rule has priority 1000 and is a rule in a policy called my-policy : gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --description "block traffic from 192.0.2.0/24 and 198.51.100.0/24" \ --src-ip-ranges "192.0.2.0/24","198.51.100.0/24" \ --action "deny-403" Use the --expression flag to specify a condition in the custom rules language reference .
- For information about how to write the expressions and read the following examples, see the custom rules language reference .

### Security policy overview \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Alternatively, by using the Cloud Armor custom rules language reference , you can create custom conditions that match on various attributes of the incoming traffic, such as the URL path, request method, or request header values.
- Cloud Armor provides a custom rules language attributes for writing custom match conditions.
- Cloud Armor can parse and apply preconfigured WAF rules for default URL-encoded and JSON-formatted request bodies ( Content-Type = "application/json" ), in which case rules are independently applied on the decoded names and values in the data.
- Rules language and enforcement engine The rules language and enforcement engine provide the following: The ability to write custom rule expressions that can match on various Layer 3 through Layer 7 attributes of incoming requests.

### "Cloud Armor bot management overview \_|\_ Google Cloud Armor \_|\_ Google\

- URL: [https://docs.cloud.google.com/armor/docs/bot-management](https://docs.cloud.google.com/armor/docs/bot-management)
- Source ID: `site-iam-reference`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For information about implementing tokens in reCAPTCHA, see the following pages: Web applications Implement reCAPTCHA action-tokens Implement reCAPTCHA session-tokens Mobile applications Implement reCAPTCHA action-tokens Finally, use the Cloud Armor rules language to configure security policy rules to evaluate reCAPTCHA tokens that are attached with the request.
- What's next Configure bot management View the rules language reference View logs Troubleshoot problems Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Custom headers If you have configured Cloud Armor to insert a custom header or value with the same header name as one of the custom headers for the global external Application Load Balancer or the classic Application Load Balancer, then the header value is overwritten by the load balancer.
- If you don't tune the rate limiting rules, Cloud Armor imposes no limit on the number of uses for each reCAPTCHA exemption cookie, action-token, and session-token.

