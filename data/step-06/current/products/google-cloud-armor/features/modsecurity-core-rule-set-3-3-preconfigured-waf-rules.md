---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:20.939Z"
product_name: "Google Cloud Armor"
product_slug: "google-cloud-armor"
feature_name: "ModSecurity Core Rule Set 3.3 preconfigured WAF rules"
feature_slug: "modsecurity-core-rule-set-3-3-preconfigured-waf-rules"
latest_feature_date: "2022-09-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/armor/docs/rule-tuning"
  - "https://docs.cloud.google.com/armor/docs/configure-waf"
  - "https://docs.cloud.google.com/armor/docs/rules-language-reference"
  - "https://docs.cloud.google.com/armor/docs/troubleshooting"
keywords:
  - "modsecurity"
  - "core"
  - "rule"
  - "set"
  - "preconfigured"
  - "waf"
  - "rules"
  - "armor"
---

# ModSecurity Core Rule Set 3.3 preconfigured WAF rules

Product: Google Cloud Armor
Coverage: MEDIUM

## Step 02 Summary

Cloud Armor preconfigured WAF rules include ModSecurity Core Rule Set (CRS) 3.3.

## Extended Definition

Cloud Armor preconfigured WAF rules include ModSecurity Core Rule Set (CRS) 3.3.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/armor/docs/rule-tuning](https://docs.cloud.google.com/armor/docs/rule-tuning)
- [https://docs.cloud.google.com/armor/docs/configure-waf](https://docs.cloud.google.com/armor/docs/configure-waf)
- [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference)
- [https://docs.cloud.google.com/armor/docs/troubleshooting](https://docs.cloud.google.com/armor/docs/troubleshooting)

## Supporting Pages

### "Tune Cloud Armor preconfigured WAF rules \_|\_ Google Cloud Armor \_|\_\

- URL: [https://docs.cloud.google.com/armor/docs/rule-tuning](https://docs.cloud.google.com/armor/docs/rule-tuning)
- Source ID: `site-docs-root`
- Final score: 314
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Armor provides preconfigured WAF rules , each consisting of multiple signatures sourced from the OWASP Core Rule Set 4.22 CRS .
- This excludes request URIs that contain /bad-path from inspection: gcloud compute security-policies rules add-preconfig-waf-exclusion PRIORITY \ --security-policy POLICY 4 \ --target-rule-set "lfi-v422-stable" \ --target-rule-ids "owasp-crs-v042200-id930100-lfi" \ --request-uri-to-exclude "op=CONTAINS,val=/bad-path" Replace the following: PRIORITY : the priority of the rule POLICY 4 : the name of the security policy The fifth example updates the rule in the security policy POLICY 5 at PRIORITY to remove all the request field exclusions for the rule IDs owasp-crs-v042200-id942110-sqli and owasp-crs-v042200-id942120-sqli under sqli-v422-stable . gcloud compute security-policies rules remove-preconfig-waf-exclusion PRIORITY \ --security-policy POLICY 5 \ --target-rule-set "sqli-v422-stable" \ --target-rule-ids "owasp-crs-v042200-id942110-sqli,owasp-crs-v042200-id942120-sqli" Replace the following: PRIORITY : the priority of the rule POLICY 5 : the name of the security policy Apply parsing on custom Content-Type header values When Cloud Armor evaluates the request body against preconfigured WAF rules, the Content-Type header indicates the format of the data in the request body.
- Examples The first example updates the rule in the security policy POLICY 1 at PRIORITY to add an exclusion configuration for all signatures under the sqli-v422-stable preconfigured WAF rule, to exclude all request cookies from inspection: gcloud compute security-policies rules add-preconfig-waf-exclusion PRIORITY \ --security-policy POLICY 1 \ --target-rule-set "sqli-v422-stable" \ --request-cookie-to-exclude "op=EQUALS ANY" Replace the following: PRIORITY : the priority of the rule POLICY 1 : the name of the security policy The second example updates the rule in the security policy POLICY 2 at PRIORITY to add an exclusion configuration for signatures owasp-crs-v042200-id941140-xss and owasp-crs-v042200-id941270-xss under the xss-v422-stable preconfigured WAF rule, to exclude request headers that either start with abc or end with xyz from inspection: gcloud compute security-policies rules add-preconfig-waf-exclusion PRIORITY \ --security-policy POLICY 2 \ --target-rule-set "xss-v422-stable" \ --target-rule-ids "owasp-crs-v042200-id941140-xss,owasp-crs-v042200-id941270-xss" \ --request-header-to-exclude "op=STARTS WITH,val=abc" \ --request-header-to-exclude "op=ENDS WITH,val=xyz" Replace the following: PRIORITY : the priority of the rule POLICY 2 : the name of the security policy The third example updates the rule in the security policy POLICY 3 at PRIORITY to add an exclusion configuration for all signatures under the sqli-v422-stable preconfigured WAF rule.
- This excludes request query parameters (parsed from the URI query string or the body payload) that are equal to bad-param from inspection: gcloud compute security-policies rules add-preconfig-waf-exclusion PRIORITY \ --security-policy POLICY 3 \ --target-rule-set "sqli-v422-stable" \ --request-query-param-to-exclude "op=EQUALS,val=bad-param" Replace the following: PRIORITY : the priority of the rule POLICY 3 : the name of the security policy The fourth example updates the rule in the security policy POLICY 4 at PRIORITY to add an exclusion configuration for sigature owasp-crs-v042200-id930100-lfi under the lfi-v422-stable preconfigured WAF rule.

### "Set up preconfigured WAF rules \_|\_ Google Cloud Armor \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/armor/docs/configure-waf](https://docs.cloud.google.com/armor/docs/configure-waf)
- Source ID: `site-iam-reference`
- Final score: 285
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note that you can only opt in rule signatures when you set the sensitivity level to 0 : Console Select Advanced mode , then use the following example expression in the Match field: evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 0, 'opt in rule ids': ['owasp-crs-v042200-id941150-xss']}) gcloud gcloud compute security-policies rules create PRIORITY \ --security-policy POLICY NAME \ --expression "evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 0, 'opt in rule ids': ['owasp-crs-v042200-id941150-xss']})" \ --action deny-403 Replace the following: PRIORITY : the priority of the security policy POLICY NAME : the name of the security policy that you want to set up If you want to include two or more signatures from a rule, provide a comma-separated list of signatures with the opt in rule ids argument, as follows: Console Select Advanced mode , then use the following example expression in the Match field: evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 0, 'opt in rule ids': ['owasp-crs-v042200-id941150-xss', 'owasp-crs-v042200-id941320-xss']}) gcloud gcloud compute security-policies rules create PRIORITY \ --security-policy POLICY NAME \ --expression "evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 0, 'opt in rule ids': ['owasp-crs-v042200-id941150-xss', 'owasp-crs-v042200-id941320-xss']})" \ --action deny-403 Replace the following: PRIORITY : the priority of the security policy POLICY NAME : the name of the security policy that you want to set up What's next For more information about WAF rule tuning, see Tune Cloud Armor preconfigured WAF rules Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Networking Google Cloud Armor Guides Send feedback Set up preconfigured WAF rules Stay organized with collections Save and categorize content based on your preferences.
- Use these instructions to set up and tune Cloud Armor preconfigured web application firewall (WAF) rules to help protect your application against attacks.
- Therefore, you create the rule at sensitivity level 2 and use the opt out rule ids argument to opt out of the owasp-crs-v042200-id941370-xss signature: Console Select Advanced mode , then use the following example expression in the Match field: evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 2, 'opt out rule ids': ['owasp-crs-v042200-id941370-xss']}) gcloud gcloud compute security-policies rules create PRIORITY \ --security-policy POLICY NAME \ --expression "evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 2, 'opt out rule ids': ['owasp-crs-v042200-id941370-xss']})" \ --action deny-403 Replace the following: PRIORITY : the priority of the security policy POLICY NAME : the name of the security policy that you want to set up To exclude two or more signatures from a rule, provide a comma-separated list of signatures with the opt out rule ids argument, as follows: Console Select Advanced mode , then use the following example expression in the Match field: evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 2, 'opt out rule ids': ['owasp-crs-v042200-id941370-xss', 'owasp-crs-v042200-id941380-xss']}) gcloud gcloud compute security-policies rules create PRIORITY \ --security-policy POLICY NAME \ --expression "evaluatePreconfiguredWaf('xss-v422-stable', {'sensitivity': 2, 'opt out rule ids': ['owasp-crs-v042200-id941370-xss', 'owasp-crs-v042200-id941380-xss']})" \ --action deny-403 Replace the following: PRIORITY : the priority of the security policy POLICY NAME : the name of the security policy that you want to set up Create a rule that opts in one or more signatures This example uses only the signature owasp-crs-v042200-id941150-xss from the xss-v422-stable WAF rule.

### "Configure custom rules language attributes \_|\_ Google Cloud Armor \_|\_\

- URL: [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference)
- Source ID: `site-docs-reference`
- Final score: 278
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For information about the core rule set and tuning at different sensitivity levels, see Tuning Google Cloud Armor WAF rules .
- The available preconfigured WAF rules are based on the OWASP Core Rule Set 4.22 .
- Examples The following expression matches the incoming request against the Google Threat Intelligence iplist-known-malicious-ips feed for protection from the known list of malicious IPs: evaluateThreatIntelligence('iplist-known-malicious-ips') The following expression matches the incoming request against the Google Threat Intelligence iplist-known-malicious-ips feed for protection from the known list of malicious IPs except for IPs in 203.0.113.0/24 : evaluateThreatIntelligence('iplist-known-malicious-ips', ['203.0.113.0/24']) The following expression matches the custom request header for user IP against the address group named my-own-list-of-bad-ips : evaluateAddressGroup('my-own-list-of-bad-ips', origin.user ip) What's next Configure Cloud Armor security policies Tune Cloud Armor preconfigured WAF rules Troubleshoot Cloud Armor issues Quotas and limit Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Operator for preconfigured WAF rules Expressions Description evaluatePreconfiguredWaf(string, MAP<string, dyn>) Returns true if any one of the WAF signatures inside the specified WAF rule set returns true.

### "Troubleshoot Cloud Armor issues \_|\_ Google Cloud Armor \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/armor/docs/troubleshooting](https://docs.cloud.google.com/armor/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the requestUrl compares positively to the OWASP CRS rule ID 941180: httpRequest: remoteIp: 104.133.0.95 requestMethod: GET requestSize: '801' requestUrl: http://74.125.67.38/foo?document.cookie=1010" responseSize: '246' serverIp: 10.132.0.4 status: 200 userAgent: curl/7.35.0 insertId: ajvis5ev4i60 internalId: projectNumber: '895280006100' jsonPayload: '@type': type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry enforcedSecurityPolicy: configuredAction: ACCEPT name: POLICY NAME outcome: ACCEPT priority: 2147483647 preconfiguredExprIds: [ 'owasp-crs-v042200-id941180-xss' ] statusDetails: response sent by backend logName: projects/mydev-staging/logs/requests resource: labels: backend service name: BACKEND SERVICE forwarding rule name: mydev-forwarding-rule project id: mydev-staging target proxy name: mydev-target-http-proxy url map name: mydev-url-map zone: global type: http load balancer severity: INFO timestamp: '2017-04-18T18:57:05.845960288Z' This log includes the following values: POLICY NAME : the name of the security policy BACKEND SERVICE : the name of the backend service Exclude the OWASP CRS rule ID 941180 by updating the rule in the Cloud Armor security policy: gcloud compute security-policies rules update 1000 \ --security-policy POLICY NAME \ --expression "evaluatePreconfiguredWaf('xss-v422-stable', ['owasp-crs-v042200-id941180-xss'])" \ --action deny-403 \ --preview Replace POLICY NAME with the name of the security policy.
- To add a preconfigured rule in preview mode: Create a security policy with the preconfigured expression set in preview mode: gcloud compute security-policies rules create 1000 --security-policy POLICY NAME --expression "evaluatePreconfiguredWaf('xss-stable')" --action deny-403 --preview Replace POLICY NAME with the name of the security policy.
- Error parsing Cloud Armor rule matcher expression: sourceiplist-example isn't a valid preconfigured expression set.
- Check for the following fields and make sure that they match the rule that you configured to deny the traffic: configuredAction must match the action configured in the rule. name must match the name of the Cloud Armor security policy attached to this backend service. outcome must match configuredAction . priority must match the priority number of the rule. httpRequest: remoteIp: 104.133.0.95 requestMethod: GET requestSize: '801' requestUrl: http://74.125.67.38/ responseSize: '246' serverIp: 10.132.0.4 status: 200 userAgent: curl/7.35.0 insertId: ajvis5ev4i60 internalId: projectNumber: '895280006100' jsonPayload: '@type': type.googleapis.com/google.cloud.loadbalancing.type.LoadBalancerLogEntry enforcedSecurityPolicy: configuredAction: ACCEPT name: mydev-policy-log-test1 outcome: ACCEPT priority: 2147483647 statusDetails: response sent by backend logName: projects/mydev-staging/logs/requests resource: labels: backend service name: BACKEND SERVICE NAME forwarding rule name: FORWARDING RULE NAME project id: PROJECT ID target proxy name: TARGET HTTP PROXY NAME url map name: URL MAP NAME zone: global type: http load balancer severity: INFO timestamp: '2017-04-18T18:57:05.845960288Z' This output includes the following values: BACKEND SERVICE NAME : the name of the backend service FORWARDING RULE NAME : the name of the forwarding rule PROJECT ID : the ID of your project TARGET HTTP PROXY NAME : the name of the target HTTP proxy URL MAP NAME : the name of the URL map Review the hierarchy of rules to ensure that the correct rule is matched.

