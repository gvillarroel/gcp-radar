---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:20.927Z"
product_name: "Google Cloud Armor"
product_slug: "google-cloud-armor"
feature_name: "Match Condition Builder"
feature_slug: "match-condition-builder"
latest_feature_date: "2026-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/armor/docs/configure-security-policies"
  - "https://docs.cloud.google.com/armor/docs/common-use-cases"
  - "https://docs.cloud.google.com/armor/docs/rules-language-reference"
  - "https://docs.cloud.google.com/armor/docs/custom-constraints"
keywords:
  - "match"
  - "condition"
  - "builder"
  - "visual"
  - "for"
  - "creating"
  - "complex"
  - "common"
---

# Match Condition Builder

Product: Google Cloud Armor
Coverage: MEDIUM

## Step 02 Summary

A visual builder for creating complex Common Expression Language (CEL) match expressions without writing raw code.

## Extended Definition

A visual builder for creating complex Common Expression Language (CEL) match expressions without writing raw code.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/armor/docs/configure-security-policies](https://docs.cloud.google.com/armor/docs/configure-security-policies)
- [https://docs.cloud.google.com/armor/docs/common-use-cases](https://docs.cloud.google.com/armor/docs/common-use-cases)
- [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference)
- [https://docs.cloud.google.com/armor/docs/custom-constraints](https://docs.cloud.google.com/armor/docs/custom-constraints)

## Supporting Pages

### "Configure Cloud Armor security policies \_|\_ Google Cloud Armor \_|\_ Google\

- URL: [https://docs.cloud.google.com/armor/docs/configure-security-policies](https://docs.cloud.google.com/armor/docs/configure-security-policies)
- Source ID: `site-docs-root`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- The match condition builder is the visual interface in the Google Cloud console that you can use to create complex Common Expression Language (CEL) expressions without writing raw code.
- Supported transformations include: Lowercase and Uppercase Base64 Decode URL Decode and URL Decode (Unicode) UTF-8 to Unicode Convert Bidirectional parsing : you can switch between the visual Match condition builder and the raw text Match condition editor .
- Advanced mode : Match condition builder ( Preview ): use the visual builder to create expressions without writing raw CEL code.
- Limitations The match condition builder is the default interface for advanced rule creation.

### "Common use cases for security policies \_|\_ Google Cloud Armor \_|\_ Google\

- URL: [https://docs.cloud.google.com/armor/docs/common-use-cases](https://docs.cloud.google.com/armor/docs/common-use-cases)
- Source ID: `site-iam-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- The following example uses a preconfigured rule to mitigate SQLi attacks from the 192.0.2.1/24 IP address range: inIpRange(origin.ip, '192.0.2.1/24') && evaluatePreconfiguredWaf('sqli-v422-stable') OWASP Top 10 mitigation for hybrid workloads Cloud Armor offers mitigations for the following attacks, whether they are deployed in Google Cloud,on-premises, or in a third-party provider: SQL injection (SQLi) Cross-site scripting (XSS) Local File Inclusion (LFI) Remote File Inclusion (RFI) Remote Code Execution (RCE) You can use these capabilities to address some of the most common web application security risks, including those risks identified in the OWASP Top 10 list.
- In the following example, requests from 2001:db8::/32 (such as your alpha testers) in the AU region match the following expression: origin.region code == "AU" && inIpRange(origin.ip, '2001:db8::/32') The following example matches with requests from 192.0.2.0/24 and with a user agent that contains the string WordPress : inIpRange(origin.ip, '192.0.2.0/24') && has(request.headers['user-agent']) && request.headers['user-agent'].contains('WordPress') For additional examples, see Example expressions in the custom rules language reference.
- Home Documentation Networking Google Cloud Armor Guides Send feedback Common use cases for security policies Stay organized with collections Save and categorize content based on your preferences.
- You can create a Cloud Armor security policy to match the signature of any clients that are causing the issue and deny the requests before they reach the origin server and affect performance.

### "Configure custom rules language attributes \_|\_ Google Cloud Armor \_|\_\

- URL: [https://docs.cloud.google.com/armor/docs/rules-language-reference](https://docs.cloud.google.com/armor/docs/rules-language-reference)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following expression matches the incoming request against the Google Threat Intelligence iplist-known-malicious-ips feed for protection from the known list of malicious IPs: evaluateThreatIntelligence('iplist-known-malicious-ips') The following expression matches the incoming request against the Google Threat Intelligence iplist-known-malicious-ips feed for protection from the known list of malicious IPs except for IPs in 203.0.113.0/24 : evaluateThreatIntelligence('iplist-known-malicious-ips', ['203.0.113.0/24']) The following expression matches the custom request header for user IP against the address group named my-own-list-of-bad-ips : evaluateAddressGroup('my-own-list-of-bad-ips', origin.user ip) What's next Configure Cloud Armor security policies Tune Cloud Armor preconfigured WAF rules Troubleshoot Cloud Armor issues Quotas and limit Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Basic match conditions are defined by using the --src-ip-ranges flag when creating a rule using the Google Cloud CLI.
- Advanced match conditions are defined using the --expression flag when creating a rule using the Google Cloud CLI.
- In the following example, requests from 1.2.3.0/24 (such as your alpha testers) in the AU region match the following expression: origin.region code == "AU" && inIpRange(origin.ip, '1.2.3.0/24') The following expression matches requests from 1.2.3.4 where a user agent contains the string WordPress : inIpRange(origin.ip, '1.2.3.4/32') && has(request.headers['user-agent']) && request.headers['user-agent'].contains('WordPress') Allow or deny traffic for a request URI that matches a regular expression The following expression matches with requests that contain the string /example path/ in the URI: request.path.matches('/example path/') The following expression matches with requests that have Chrome in the User-Agent header field: request.headers['user-agent'].matches('Chrome') The following expression shows case-insensitive matching for the User-Agent header containing wordpress ; it matches with User-Agent:WordPress/605.1.15 , User-Agent:wordPress , and other variations of wordpress : request.headers['user-agent'].matches('(?i:wordpress)') Allow or deny traffic that contains a specific base64 decoded value The following expression matches with requests that have a base64 decoded value of myValue for the user-id header: has(request.headers['user-id']) && request.headers['user-id'].base64Decode().contains('myValue') Allow or deny traffic that contains a string value of a specific length The following expression matches requests that have a URL length greater than 10 characters: size(request.path) > 10 The following expression matches requests that have a header x-data length greater than or equal to 1024 characters: size(request.headers['x-data']) >= 1024 Allow or deny traffic that has zero content-length in the HTTP body The following expression matches requests that have a zero content-length in the HTTP body: int(request.headers["content-length"]) == 0 Allow or deny traffic that contains a specific URL encoded value The following expression matches with requests that have a cookie value containing %3c : has(request.headers['cookie']) && request.headers['cookie'].urlDecode().contains('<') Allow or deny traffic that contains a specific URL encoded value of a Unicode string The following expression matches with requests that have a cookie value equal to Match%2BValue or Match%u002BValue : has(request.headers['cookie']) && request.headers['cookie'].urlDecodeUni() == 'Match+Value' Allow or deny traffic that contains a specific Unicode string of a UTF-8 text The following expression matches with requests that have a cookie value equal to ¬ : has(request.headers['cookie']) && request.headers['cookie'].utf8ToUnicode() == '%u00ac' Allow or deny traffic based on a known JA4 fingerprint The following expression matches with requests that have a JA4 fingerprint equal to t13d1516h2 8daaf6152771 b186095e22b6 : origin.tls ja4 fingerprint == 't13d1516h2 8daaf6152771 b186095e22b6' Allow or deny traffic based on a list of JA4 fingerprints The following expression matches with requests that have a JA4 fingerprint equal to any of the following JA4 fingerprints: t00d0000h0 000000000000 000000000000 t13d1516h2 8daaf6152771 b186095e22b6 origin.tls ja4 fingerprint == 't00d0000h0 000000000000 000000000000' origin.tls ja4 fingerprint == 't13d1516h2 8daaf6152771 b186095e22b6' Preconfigured WAF rules Preconfigured WAF rules use preconfigured static signatures, regular expressions, or both to match on the HTTP request body, HTTP request headers, and query parameters.

### "Manage Google Cloud Armor resources by using custom constraints \_|\_ Google\

- URL: [https://docs.cloud.google.com/armor/docs/custom-constraints](https://docs.cloud.google.com/armor/docs/custom-constraints)
- Source ID: `site-iam-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Security Policy : compute.googleapis.com/SecurityPolicy Name: resource.name Description: resource.description Rules: resource.rules[] Header action: resource.rules[].headerAction Request headers to add: resource.rules[].headerAction.requestHeadersToAdds[] Header name: resource.rules[].headerAction.requestHeadersToAdds[].headerName Header value: resource.rules[].headerAction.requestHeadersToAdds[].headerValue Matcher: resource.rules[].match Versioned expression: resource.rules[].match.versionedExpr Config: resource.rules[].match.config Source IP ranges: resource.rules[].match.config.srcIpRanges[] Expression: resource.rules[].match.expr Expression options: resource.rules[].match.exprOptions reCAPTCHA options: resource.rules[].match.exprOptions.recaptchaOptions Action token site keys: resource.rules[].match.exprOptions.recaptchaOptions.actionTokenSiteKeys[] Session token site keys: resource.rules[].match.exprOptions.recaptchaOptions.sessionTokenSiteKeys[] Network matcher: resource.rules[].networkMatch User defined field match: resource.rules[].networkMatch.userDefinedFieldMatch Name: resource.rules[].networkMatch.userDefinedFieldMatch.name Values: resource.rules[].networkMatch.userDefinedFieldMatch.values Source IP ranges: resource.rules[].networkMatch.srcIpRanges Destination IP ranges: resource.rules[].networkMatch.destIpRanges IP protocols: resource.rules[].networkMatch.ipProtocols Source ports: resource.rules[].networkMatch.srcPorts Destination ports: resource.rules[].networkMatch.destPorts Source region codes: resource.rules[].networkMatch.srcRegionCodes Source ASNs: resource.rules[].networkMatch.srcAsns Preconfigured WAF config: resource.rules[].preconfiguredWafConfig Exclusions: resource.rules[].preconfiguredWafConfig.exclusions[] Target rule set: resource.rules[].preconfiguredWafConfig.exclusions[].targetRuleSet Target rule IDs: resource.rules[].preconfiguredWafConfig.exclusions[].targetRuleIds[] Request headers to exclude: resource.rules[].preconfiguredWafConfig.exclusions[].requestHeadersToExclude[] Value: resource.rules[].preconfiguredWafConfig.exclusions[].requestHeadersToExclude[].val Operation: resource.rules[].preconfiguredWafConfig.exclusions[].requestHeadersToExclude[].op Request cookies to exclude: resource.rules[].preconfiguredWafConfig.exclusions[].requestCookiesToExclude[] Value: resource.rules[].preconfiguredWafConfig.exclusions[].requestCookiesToExclude[].val Operation: resource.rules[].preconfiguredWafConfig.exclusions[].requestCookiesToExclude[].op Request query params to exclude: resource.rules[].preconfiguredWafConfig.exclusions[].requestQueryParamsToExclude[] Value: resource.rules[].preconfiguredWafConfig.exclusions[].requestQueryParamsToExclude[].val Operation: resource.rules[].preconfiguredWafConfig.exclusions[].requestQueryParamsToExclude[].op Request URIs to exclude: resource.rules[].preconfiguredWafConfig.exclusions[].requestUrisToExclude[] Value: resource.rules[].preconfiguredWafConfig.exclusions[].requestUrisToExclude[].val Operation: resource.rules[].preconfiguredWafConfig.exclusions[].requestUrisToExclude[].op Redirect options: resource.rules[].redirectOptions[] Type: resource.rules[].redirectOptions[].type Target: resource.rules[].redirectOptions[].target Rate limit options: resource.rules[].rateLimitOptions[] Rate limit threshold: resource.rules[].rateLimitOptions[].rateLimitThreshold Count: resource.rules[].rateLimitOptions[].rateLimitThreshold.count Interval seconds: resource.rules[].rateLimitOptions[].rateLimitThreshold.intervalSec Conform action: resource.rules[].rateLimitOptions[].conformAction Exceed action: resource.rules[].rateLimitOptions[].exceedAction Exceed redirect options: resource.rules[].rateLimitOptions[].exceedRedirectOptions Type: resource.rules[].rateLimitOptions[].exceedRedirectOptions.type Target: resource.rules[].rateLimitOptions[].exceedRedirectOptions.target Exceed action RPC status: resource.rules[].rateLimitOptions[].exceedActionRpcStatus Code: resource.rules[].rateLimitOptions[].exceedActionRpcStatus.code Message: resource.rules[].rateLimitOptions[].exceedActionRpcStatus.message Enforce on key: resource.rules[].rateLimitOptions[].enforceOnKey Enforce on key name: resource.rules[].rateLimitOptions[].enforceOnKeyName Enforce on key configs: resource.rules[].rateLimitOptions[].enforceOnKeyConfigs Enforce on key type: resource.rules[].rateLimitOptions[].enforceOnKeyConfigs.enforceOnKeyType Enforce on key name: resource.rules[].rateLimitOptions[].enforceOnKeyConfigs.enforceOnKeyName Ban threshold: resource.rules[].rateLimitOptions[].banThreshold Count: resource.rules[].rateLimitOptions[].banThreshold.count Interval seconds: resource.rules[].rateLimitOptions[].banThreshold.intervalSec Ban duration seconds: resource.rules[].rateLimitOptions[].banDurationSec Redirect target: resource.rules[].redirectTarget Rule number: resource.rules[].ruleNumber Adaptive protection config: resource.adaptiveProtectionConfig Layer 7 DDoS defense config: resource.adaptiveProtectionConfig.layer7DdosDefenseConfig Enable: resource.adaptiveProtectionConfig.layer7DdosDefenseConfig.enable Rule visibility: resource.adaptiveProtectionConfig.layer7DdosDefenseConfig.ruleVisibility Threshold configs: resource.adaptiveProtectionConfig.layer7DdosDefenseConfig.thresholdConfigs[] Name: resource.adaptiveProtectionConfig.layer7DdosDefenseConfig.thresholdConfigs[].name Auto deploy load threshold: resource.adaptiveProtectionConfig.layer7DdosDefenseConfig.thresholdConfigs[].autoDeployLoadThreshold Auto deploy confidence threshold: resource.adaptiveProtectionConfig.layer7DdosDefenseConfig.thresholdConfigs[].autoDeployConfidenceThreshold Auto deploy impacted baseline threshold: resource.adaptiveProtectionConfig.layer7DdosDefenseConfig.thresholdConfigs[].autoDeployImpactedBaselineThreshold Auto deploy expiration seconds: resource.adaptiveProtectionConfig.layer7DdosDefenseConfig.thresholdConfigs[].autoDeployExpirationSec Detection load threshold: resource.adaptiveProtectionConfig.layer7DdosDefenseConfig.thresholdConfigs[].detectionLoadThreshold Detection absolute QPS: resource.adaptiveProtectionConfig.layer7DdosDefenseConfig.thresholdConfigs[].detectionAbsoluteQps Detection relative to baseline QPS: resource.adaptiveProtectionConfig.layer7DdosDefenseConfig.thresholdConfigs[].detectionRelativeToBaselineQps Traffic granularity configs: resource.adaptiveProtectionConfig.layer7DdosDefenseConfig.thresholdConfigs[].trafficGranularityConfigs[] Type: resource.adaptiveProtectionConfig.layer7DdosDefenseConfig.thresholdConfigs[].trafficGranularityConfigs[].type Value: resource.adaptiveProtectionConfig.layer7DdosDefenseConfig.thresholdConfigs[].trafficGranularityConfigs[].value Enable each unique value: resource.adaptiveProtectionConfig.layer7DdosDefenseConfig.thresholdConfigs[].trafficGranularityConfigs[].enableEachUniqueValue Auto deploy config: resource.adaptiveProtectionConfig.autoDeployConfig Load threshold: resource.adaptiveProtectionConfig.autoDeployConfig.loadThreshold Confidence threshold: resource.adaptiveProtectionConfig.autoDeployConfig.confidenceThreshold Impacted baseline threshold: resource.adaptiveProtectionConfig.autoDeployConfig.impactedBaselineThreshold Expiration seconds: resource.adaptiveProtectionConfig.autoDeployConfig.expirationSec Advanced options config: resource.advancedOptionsConfig JSON parsing: resource.advancedOptionsConfig.jsonParsing JSON custom config: resource.advancedOptionsConfig.jsonCustomConfig Content types: resource.advancedOptionsConfig.jsonCustomConfig.contentTypes[] Log level: resource.advancedOptionsConfig.logLevel User IP request headers: resource.advancedOptionsConfig.userIpRequestHeaders[] DDoS protection config: resource.ddosProtectionConfig DDoS protection: resource.ddosProtectionConfig.ddosProtection reCAPTCHA options config: resource.recaptchaOptionsConfig Redirect site key: resource.recaptchaOptionsConfig.redirectSiteKey Type: resource.type User defined fields: resource.userDefinedFields[] Name: resource.userDefinedFields[].name Base: resource.userDefinedFields[].base Offset: resource.userDefinedFields[].offset Size: resource.userDefinedFields[].size Mask: resource.userDefinedFields[].mask Network Edge Security Service : compute.googleapis.com/NetworkEdgeSecurityService Name: resource.name Description: resource.description Security policy: resource.securityPolicy Defining custom constraints A custom constraint is defined by the resources, methods, conditions, and actions that are supported by the service on which you are enforcing the organization policy.
- For more information about how to build conditions in custom constraints using CEL, see the CEL section of Creating and managing organization policies .
- Conditions for your custom constraints are defined using Common Expression Language (CEL) .
- Example: Create a constraint that requires all security policies to have standard JSON parsing enabled This constraint prevents security policies from being created if they don't have standard JSON parsing enabled. gcloud Create a requireStandardJsonParsing.yaml constraint file with the following information. name : organizations/ ORGANIZATION ID /customConstraints/custom.requireStandardJsonParsing resource types : compute.googleapis.com/SecurityPolicy condition : "resource.advancedOptionsConfig.jsonParsing != 'STANDARD'" action type : DENY method types : [ CREATE , UPDATE ] display name : Security policies must have standard JSON parsing enabled.

