---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:20.942Z"
product_name: "Google Cloud Armor"
product_slug: "google-cloud-armor"
feature_name: "Cloud Armor JSON body parsing for preconfigured WAF rules"
feature_slug: "cloud-armor-json-body-parsing-for-preconfigured-waf-rules"
latest_feature_date: "2021-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/armor/docs/content-parsing"
  - "https://docs.cloud.google.com/armor/docs/rule-tuning"
  - "https://docs.cloud.google.com/armor/docs/configure-waf"
  - "https://docs.cloud.google.com/armor/docs/best-practices"
keywords:
  - "armor"
  - "json"
  - "body"
  - "parsing"
  - "for"
  - "preconfigured"
  - "waf"
  - "rules"
---

# Cloud Armor JSON body parsing for preconfigured WAF rules

Product: Google Cloud Armor
Coverage: MEDIUM

## Step 02 Summary

Cloud Armor can parse JSON content in POST bodies when evaluating preconfigured WAF rules.

## Extended Definition

Cloud Armor can parse JSON content in POST bodies when evaluating preconfigured WAF rules.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/armor/docs/content-parsing](https://docs.cloud.google.com/armor/docs/content-parsing)
- [https://docs.cloud.google.com/armor/docs/rule-tuning](https://docs.cloud.google.com/armor/docs/rule-tuning)
- [https://docs.cloud.google.com/armor/docs/configure-waf](https://docs.cloud.google.com/armor/docs/configure-waf)
- [https://docs.cloud.google.com/armor/docs/best-practices](https://docs.cloud.google.com/armor/docs/best-practices)

## Supporting Pages

### "Request body content parsing \_|\_ Google Cloud Armor \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/armor/docs/content-parsing](https://docs.cloud.google.com/armor/docs/content-parsing)
- Source ID: `site-iam-reference`
- Final score: 294
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Armor can parse and apply preconfigured WAF rules to JSON-formatted content (including properly formatted GraphQL over HTTP requests) when JSON parsing is enabled with a matching Content-Type header value.
- If the JSON content is larger than the configured inspection limit, then Cloud Armor applies JSON parsing up to this limit, which is then inspected by any of the preconfigured WAF rules.
- By default, Cloud Armor evaluates the full content of a request body as a uniform string (subject to body size limitations ) against the signatures in your preconfigured WAF rules.
- For more information about configuring the inspection limit for the request body when using preconfigured WAF rules, see Request body inspection limitation .

### "Tune Cloud Armor preconfigured WAF rules \_|\_ Google Cloud Armor \_|\_\

- URL: [https://docs.cloud.google.com/armor/docs/rule-tuning](https://docs.cloud.google.com/armor/docs/rule-tuning)
- Source ID: `site-docs-root`
- Final score: 292
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This excludes request URIs that contain /bad-path from inspection: gcloud compute security-policies rules add-preconfig-waf-exclusion PRIORITY \ --security-policy POLICY 4 \ --target-rule-set "lfi-v422-stable" \ --target-rule-ids "owasp-crs-v042200-id930100-lfi" \ --request-uri-to-exclude "op=CONTAINS,val=/bad-path" Replace the following: PRIORITY : the priority of the rule POLICY 4 : the name of the security policy The fifth example updates the rule in the security policy POLICY 5 at PRIORITY to remove all the request field exclusions for the rule IDs owasp-crs-v042200-id942110-sqli and owasp-crs-v042200-id942120-sqli under sqli-v422-stable . gcloud compute security-policies rules remove-preconfig-waf-exclusion PRIORITY \ --security-policy POLICY 5 \ --target-rule-set "sqli-v422-stable" \ --target-rule-ids "owasp-crs-v042200-id942110-sqli,owasp-crs-v042200-id942120-sqli" Replace the following: PRIORITY : the priority of the rule POLICY 5 : the name of the security policy Apply parsing on custom Content-Type header values When Cloud Armor evaluates the request body against preconfigured WAF rules, the Content-Type header indicates the format of the data in the request body.
- By default, Cloud Armor treats the contents of the request body as one string, all of which is eligible for inspection and matching on your preconfigured WAF rules.
- This excludes request query parameters (parsed from the URI query string or the body payload) that are equal to bad-param from inspection: gcloud compute security-policies rules add-preconfig-waf-exclusion PRIORITY \ --security-policy POLICY 3 \ --target-rule-set "sqli-v422-stable" \ --request-query-param-to-exclude "op=EQUALS,val=bad-param" Replace the following: PRIORITY : the priority of the rule POLICY 3 : the name of the security policy The fourth example updates the rule in the security policy POLICY 4 at PRIORITY to add an exclusion configuration for sigature owasp-crs-v042200-id930100-lfi under the lfi-v422-stable preconfigured WAF rule.
- Cloud Armor supports the following encoding types: JSON GraphQL For more information, see Request body content parsing .

### "Set up preconfigured WAF rules \_|\_ Google Cloud Armor \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/armor/docs/configure-waf](https://docs.cloud.google.com/armor/docs/configure-waf)
- Source ID: `site-iam-reference`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Mitigate risk on request body that exceeds configured inspection limit When a preconfigured WAF rule is evaluated in a Cloud Armor security policy, up to the first 64 kB (either 8 kB, 16 kB, 32 kB, 48 kB, or 64 kB) of a request body is inspected for signature matches against the WAF rules.
- Update inspection limit for preconfigured WAF rules Cloud Armor preconfigured WAF rules can only inspect up to the first 64 kB (either 8 kB, 16 kB, 32 kB, 48 kB, or 64 kB) of a request body.
- Note that you can only opt in rule signatures when you set the sensitivity level to 0 : Console Select Advanced mode , then use the following example expression in the Match field: evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 0, 'opt in rule ids': ['owasp-crs-v042200-id941150-xss']}) gcloud gcloud compute security-policies rules create PRIORITY \ --security-policy POLICY NAME \ --expression "evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 0, 'opt in rule ids': ['owasp-crs-v042200-id941150-xss']})" \ --action deny-403 Replace the following: PRIORITY : the priority of the security policy POLICY NAME : the name of the security policy that you want to set up If you want to include two or more signatures from a rule, provide a comma-separated list of signatures with the opt in rule ids argument, as follows: Console Select Advanced mode , then use the following example expression in the Match field: evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 0, 'opt in rule ids': ['owasp-crs-v042200-id941150-xss', 'owasp-crs-v042200-id941320-xss']}) gcloud gcloud compute security-policies rules create PRIORITY \ --security-policy POLICY NAME \ --expression "evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 0, 'opt in rule ids': ['owasp-crs-v042200-id941150-xss', 'owasp-crs-v042200-id941320-xss']})" \ --action deny-403 Replace the following: PRIORITY : the priority of the security policy POLICY NAME : the name of the security policy that you want to set up What's next For more information about WAF rule tuning, see Tune Cloud Armor preconfigured WAF rules Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For more information about the inspection limits of the preconfigured WAF rules, see Request body inspection limitation . gcloud compute security-policies update POLICY NAME \ --request-body-inspection-size=8kB Replace POLICY NAME with the name of the security policy that you want to set up.

### Cloud Armor best practices \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/best-practices](https://docs.cloud.google.com/armor/docs/best-practices)
- Source ID: `site-iam-reference`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you don't enable JSON parsing, Cloud Armor does not parse the JSON content of request bodies for preconfigured WAF rules, and the results can be noisy and generate false positives.
- For this example, we recommend the following structure of rule priority, from greatest-priority to least-priority: Explicit deny rules (ASN, region, IP ranges) Trusted explicit allow rules (scanners, trusted systems - use with extreme caution) Security rules (OWASP, custom rules) Explicit allow rules (ASN, presence of header value, IP range) Default deny rules Use reCAPTCHA for bot management Cloud Armor integrates with Google's reCAPTCHA for bot detection at the WAF layer.
- The following sections contain best practices and recommendations for tuning the preconfigured WAF rules.
- Use stable or canary rules There are two types of Cloud Armor preconfigured WAF rules: stable and canary.

