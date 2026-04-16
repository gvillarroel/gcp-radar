---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:20.940Z"
product_name: "Google Cloud Armor"
product_slug: "google-cloud-armor"
feature_name: "Preconfigured WAF rule tuning"
feature_slug: "preconfigured-waf-rule-tuning"
latest_feature_date: "2022-09-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/armor/docs/rule-tuning"
  - "https://docs.cloud.google.com/armor/docs/configure-waf"
  - "https://docs.cloud.google.com/armor/docs/rules-language-reference"
  - "https://docs.cloud.google.com/armor/docs/configure-security-policies"
keywords:
  - "preconfigured"
  - "waf"
  - "rule"
  - "tuning"
  - "armor"
  - "provides"
  - "advanced"
  - "controls"
---

# Preconfigured WAF rule tuning

Product: Google Cloud Armor
Coverage: MEDIUM

## Step 02 Summary

Cloud Armor provides advanced tuning controls for preconfigured WAF rules.

## Extended Definition

Cloud Armor provides advanced tuning controls for preconfigured WAF rules.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/armor/docs/rule-tuning](https://docs.cloud.google.com/armor/docs/rule-tuning)
- [https://docs.cloud.google.com/armor/docs/configure-waf](https://docs.cloud.google.com/armor/docs/configure-waf)
- [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference)
- [https://docs.cloud.google.com/armor/docs/configure-security-policies](https://docs.cloud.google.com/armor/docs/configure-security-policies)

## Supporting Pages

### "Tune Cloud Armor preconfigured WAF rules \_|\_ Google Cloud Armor \_|\_\

- URL: [https://docs.cloud.google.com/armor/docs/rule-tuning](https://docs.cloud.google.com/armor/docs/rule-tuning)
- Source ID: `site-docs-root`
- Final score: 266
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Armor provides preconfigured WAF rules , each consisting of multiple signatures sourced from the OWASP Core Rule Set 4.22 CRS .
- This excludes request URIs that contain /bad-path from inspection: gcloud compute security-policies rules add-preconfig-waf-exclusion PRIORITY \ --security-policy POLICY 4 \ --target-rule-set "lfi-v422-stable" \ --target-rule-ids "owasp-crs-v042200-id930100-lfi" \ --request-uri-to-exclude "op=CONTAINS,val=/bad-path" Replace the following: PRIORITY : the priority of the rule POLICY 4 : the name of the security policy The fifth example updates the rule in the security policy POLICY 5 at PRIORITY to remove all the request field exclusions for the rule IDs owasp-crs-v042200-id942110-sqli and owasp-crs-v042200-id942120-sqli under sqli-v422-stable . gcloud compute security-policies rules remove-preconfig-waf-exclusion PRIORITY \ --security-policy POLICY 5 \ --target-rule-set "sqli-v422-stable" \ --target-rule-ids "owasp-crs-v042200-id942110-sqli,owasp-crs-v042200-id942120-sqli" Replace the following: PRIORITY : the priority of the rule POLICY 5 : the name of the security policy Apply parsing on custom Content-Type header values When Cloud Armor evaluates the request body against preconfigured WAF rules, the Content-Type header indicates the format of the data in the request body.
- Home Documentation Networking Google Cloud Armor Guides Send feedback Tune Cloud Armor preconfigured WAF rules Stay organized with collections Save and categorize content based on your preferences.
- Note: You can tune preconfigured WAF rules in hierarchical security policies that you own, but the owners of services that inherit a hierarchical security policy can't perform rule tuning.

### "Set up preconfigured WAF rules \_|\_ Google Cloud Armor \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/armor/docs/configure-waf](https://docs.cloud.google.com/armor/docs/configure-waf)
- Source ID: `site-iam-reference`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note that you can only opt in rule signatures when you set the sensitivity level to 0 : Console Select Advanced mode , then use the following example expression in the Match field: evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 0, 'opt in rule ids': ['owasp-crs-v042200-id941150-xss']}) gcloud gcloud compute security-policies rules create PRIORITY \ --security-policy POLICY NAME \ --expression "evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 0, 'opt in rule ids': ['owasp-crs-v042200-id941150-xss']})" \ --action deny-403 Replace the following: PRIORITY : the priority of the security policy POLICY NAME : the name of the security policy that you want to set up If you want to include two or more signatures from a rule, provide a comma-separated list of signatures with the opt in rule ids argument, as follows: Console Select Advanced mode , then use the following example expression in the Match field: evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 0, 'opt in rule ids': ['owasp-crs-v042200-id941150-xss', 'owasp-crs-v042200-id941320-xss']}) gcloud gcloud compute security-policies rules create PRIORITY \ --security-policy POLICY NAME \ --expression "evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 0, 'opt in rule ids': ['owasp-crs-v042200-id941150-xss', 'owasp-crs-v042200-id941320-xss']})" \ --action deny-403 Replace the following: PRIORITY : the priority of the security policy POLICY NAME : the name of the security policy that you want to set up What's next For more information about WAF rule tuning, see Tune Cloud Armor preconfigured WAF rules Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Therefore, you create the rule at sensitivity level 2 and use the opt out rule ids argument to opt out of the owasp-crs-v042200-id941370-xss signature: Console Select Advanced mode , then use the following example expression in the Match field: evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 2, 'opt out rule ids': ['owasp-crs-v042200-id941370-xss']}) gcloud gcloud compute security-policies rules create PRIORITY \ --security-policy POLICY NAME \ --expression "evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 2, 'opt out rule ids': ['owasp-crs-v042200-id941370-xss']})" \ --action deny-403 Replace the following: PRIORITY : the priority of the security policy POLICY NAME : the name of the security policy that you want to set up To exclude two or more signatures from a rule, provide a comma-separated list of signatures with the opt out rule ids argument, as follows: Console Select Advanced mode , then use the following example expression in the Match field: evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 2, 'opt out rule ids': ['owasp-crs-v042200-id941370-xss', 'owasp-crs-v042200-id941380-xss']}) gcloud gcloud compute security-policies rules create PRIORITY \ --security-policy POLICY NAME \ --expression "evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 2, 'opt out rule ids': ['owasp-crs-v042200-id941370-xss', 'owasp-crs-v042200-id941380-xss']})" \ --action deny-403 Replace the following: PRIORITY : the priority of the security policy POLICY NAME : the name of the security policy that you want to set up Create a rule that opts in one or more signatures This example uses only the signature owasp-crs-v042200-id941150-xss from the xss-v422-stable WAF rule.
- This means that these two signatures aren't evaluated when the WAF rule is evaluated: Console Select Advanced mode , then use the following example expression in the Match field: evaluatePreconfiguredWaf(' RULE NAME ', {'sensitivity': SENSITIVITY , 'opt out rule ids': [' SIGNATURE 1 ', ' SIGNATURE 2 ']}) gcloud gcloud compute security-policies rules create PRIORITY \ --security-policy POLICY NAME \ --expression "evaluatePreconfiguredWaf(' RULE NAME ', {'sensitivity': SENSITIVITY , 'opt out rule ids': [' SIGNATURE 1 ', ' SIGNATURE 2 ']})" \ --action deny-403 Replace the following: PRIORITY : the priority of the security policy POLICY NAME : the name of the security policy that you want to set up RULE NAME : the name of the WAF rule that you want to set up SENSITIVITY : the sensitivity level of the WAF rule SIGNATURE 1 : the name of the WAF signature that you want to opt out SIGNATURE 2 : the name of the WAF signature that you want to opt out The third example is similar to the second, but instead of opting out two signatures, you opt in two rule signatures.
- Note that you can only opt in rule signatures when you set the sensitivity level to 0 : Console Select Advanced mode , then use the following example expression in the Match field: evaluatePreconfiguredWaf(' RULE NAME ', {'sensitivity': 0, 'opt in rule ids': [' SIGNATURE 1 ', ' SIGNATURE 2 ']}) gcloud gcloud compute security-policies rules create PRIORITY \ --security-policy POLICY NAME \ --expression "evaluatePreconfiguredWaf(' RULE NAME ', {'sensitivity': 0, 'opt in rule ids': [' SIGNATURE 1 ', ' SIGNATURE 2 ']})" \ --action deny-403 Replace the following: PRIORITY : the priority of the security policy POLICY NAME : the name of the security policy that you want to set up RULE NAME : the name of the WAF rule that you want to set up SIGNATURE 1 : the name of the WAF signature that you want to opt out SIGNATURE 2 : the name of the WAF signature that you want to opt out In all of the previous examples, you use only one expression per rule.

### "Configure custom rules language attributes \_|\_ Google Cloud Armor \_|\_\

- URL: [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference)
- Source ID: `site-docs-reference`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Armor provides several predefined preconfigured WAF rules.
- Examples The following expression matches the incoming request against the Google Threat Intelligence iplist-known-malicious-ips feed for protection from the known list of malicious IPs: evaluateThreatIntelligence('iplist-known-malicious-ips') The following expression matches the incoming request against the Google Threat Intelligence iplist-known-malicious-ips feed for protection from the known list of malicious IPs except for IPs in 203.0.113.0/24 : evaluateThreatIntelligence('iplist-known-malicious-ips', ['203.0.113.0/24']) The following expression matches the custom request header for user IP against the address group named my-own-list-of-bad-ips : evaluateAddressGroup('my-own-list-of-bad-ips', origin.user ip) What's next Configure Cloud Armor security policies Tune Cloud Armor preconfigured WAF rules Troubleshoot Cloud Armor issues Quotas and limit Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For information about the core rule set and tuning at different sensitivity levels, see Tuning Google Cloud Armor WAF rules .
- For a complete list of preconfigured WAF rules, see the Cloud Armor preconfigured WAF rules overview .

### "Configure Cloud Armor security policies \_|\_ Google Cloud Armor \_|\_ Google\

- URL: [https://docs.cloud.google.com/armor/docs/configure-security-policies](https://docs.cloud.google.com/armor/docs/configure-security-policies)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Note that the actual output would include all of the rules that are listed in Tuning Cloud Armor WAF rules . gcloud compute security-policies list-preconfigured-expression-sets EXPRESSION SET sqli-canary RULE ID SENSITIVITY owasp-crs-v042200-id942120-sqli 2 … xss-canary RULE ID SENSITIVITY owasp-crs-v042200-id941110-xss 1 owasp-crs-v042200-id941120-xss 2 … sourceiplist-fastly sourceiplist-cloudflare sourceiplist-imperva What's next Tune web application firewall (WAF) rules Troubleshoot issues Use the custom rules language reference Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Function support : the builder provides specific UI controls for function-based expressions, such as preconfigured WAF rules, address groups, and Threat Intelligence.
- The following command adds a rule to allow traffic from the IP address 1.2.3.4 and contains the string example in the user-agent header: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "inIpRange(origin.ip, '1.2.3.4/32') && has(request.headers['user-agent']) && request.headers['user-agent'].contains('example')" \ --action allow \ --description "Block User-Agent 'example'" The following command adds a rule to block requests if the request's cookie contains a specific value: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "has(request.headers['cookie']) && request.headers['cookie'].contains('80=BLAH')" \ --action deny-403 \ --description "Cookie Block" The following command adds a rule to block requests from the region AU : gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "origin.region code == 'AU'" \ --action deny-403 \ --description "AU block" The following command adds a rule to block requests from the region AU that are not in the specified IP range: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "origin.region code == "AU" && !inIpRange(origin.ip, '1.2.3.0/24')" \ --action deny-403 \ --description "country and IP block" The following command adds a rule to block requests with a URI that matches a regular expression: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "request.path.matches('/example path/')" \ --action deny-502 \ --description "regex block" The following command adds a rule to block requests if the Base64 decoded value of the user-id header contains a specific value: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "has(request.headers['user-id']) && request.headers['user-id'].base64Decode().contains('myValue')" \ --action deny-403 \ --description "country and IP block" The following command adds a rule that uses a preconfigured expression set to mitigate SQLi attacks: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "evaluatePreconfiguredWaf('sqli-stable')" \ --action deny-403 Update a single rule in a security policy Use these instructions to update a single rule in a Cloud Armor security policy.
- For example, you can modify the the priorities of the existing rules and add a new rule: description: my description fingerprint: PWfLGDWQDLY= id: '123' name: my-policy rules: - action: deny(404) description: my-rule-1 match: expr: expression: evaluatePreconfiguredWaf('xss-stable') versionedExpr: SRC IPS V1 preview: false priority: 1 - action: allow description: my-new-rule match: config: srcIpRanges: - '1.2.3.1' versionedExpr: SRC IPS V1 preview: false priority: 10 - action: allow description: my-rule-2 match: config: srcIpRanges: - '1.2.3.4' versionedExpr: SRC IPS V1 preview: false priority: 11 - action: deny description: default rule kind: compute#securityPolicyRule match: config: srcIpRanges: - ' ' versionedExpr: SRC IPS V1 preview: false priority: 2147483647 selfLink: https://www.googleapis.com/compute/v1/projects/my-project/global/securityPolicies/my-policy Create a new Cloud Armor security policy and specify the modified filename and format, as shown in the following example: gcloud compute security-policies create new-policy \ --file-name modified-policy \ --file-format yaml Remove the old security policy from the relevant backend service, as shown in the following example: gcloud compute backend-services update my-backend \ --security-policy "" Add the new security policy to the backend service, as shown in the following example: gcloud compute backend-services update my-backend \ --security-policy new-policy If the old policy is unused, delete it: gcloud compute security-policies delete my-policy Delete rules from a security policy Use these instructions to delete rules from a Cloud Armor security policy.

