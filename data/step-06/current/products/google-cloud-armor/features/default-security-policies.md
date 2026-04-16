---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:20.939Z"
product_name: "Google Cloud Armor"
product_slug: "google-cloud-armor"
feature_name: "Default security policies"
feature_slug: "default-security-policies"
latest_feature_date: "2022-10-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/armor/docs/configure-security-policies"
  - "https://docs.cloud.google.com/armor/docs/security-policy-overview"
  - "https://docs.cloud.google.com/armor/docs/example-policies"
  - "https://docs.cloud.google.com/armor/docs/common-use-cases"
keywords:
  - "default"
  - "security"
  - "policies"
  - "armor"
  - "supports"
  - "for"
  - "load"
  - "balancer"
---

# Default security policies

Product: Google Cloud Armor
Coverage: MEDIUM

## Step 02 Summary

Cloud Armor supports default security policies for load balancer security policy setup.

## Extended Definition

Cloud Armor supports default security policies for load balancer security policy setup.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/armor/docs/configure-security-policies](https://docs.cloud.google.com/armor/docs/configure-security-policies)
- [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview)
- [https://docs.cloud.google.com/armor/docs/example-policies](https://docs.cloud.google.com/armor/docs/example-policies)
- [https://docs.cloud.google.com/armor/docs/common-use-cases](https://docs.cloud.google.com/armor/docs/common-use-cases)

## Supporting Pages

### "Configure Cloud Armor security policies \_|\_ Google Cloud Armor \_|\_ Google\

- URL: [https://docs.cloud.google.com/armor/docs/configure-security-policies](https://docs.cloud.google.com/armor/docs/configure-security-policies)
- Source ID: `site-docs-root`
- Final score: 285
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, you can modify the the priorities of the existing rules and add a new rule: description: my description fingerprint: PWfLGDWQDLY= id: '123' name: my-policy rules: - action: deny(404) description: my-rule-1 match: expr: expression: evaluatePreconfiguredWaf('xss-stable') versionedExpr: SRC IPS V1 preview: false priority: 1 - action: allow description: my-new-rule match: config: srcIpRanges: - '1.2.3.1' versionedExpr: SRC IPS V1 preview: false priority: 10 - action: allow description: my-rule-2 match: config: srcIpRanges: - '1.2.3.4' versionedExpr: SRC IPS V1 preview: false priority: 11 - action: deny description: default rule kind: compute#securityPolicyRule match: config: srcIpRanges: - ' ' versionedExpr: SRC IPS V1 preview: false priority: 2147483647 selfLink: https://www.googleapis.com/compute/v1/projects/my-project/global/securityPolicies/my-policy Create a new Cloud Armor security policy and specify the modified filename and format, as shown in the following example: gcloud compute security-policies create new-policy \ --file-name modified-policy \ --file-format yaml Remove the old security policy from the relevant backend service, as shown in the following example: gcloud compute backend-services update my-backend \ --security-policy "" Add the new security policy to the backend service, as shown in the following example: gcloud compute backend-services update my-backend \ --security-policy new-policy If the old policy is unused, delete it: gcloud compute security-policies delete my-policy Delete rules from a security policy Use these instructions to delete rules from a Cloud Armor security policy.
- If you don't provide the file format, Cloud Armor uses the default YAML. gcloud compute security-policies export NAME \ --file-name FILE NAME \ --file-format FILE FORMAT The following example exports the my-policy security policy to the my-file file in the YAML format: gcloud compute security-policies export my-policy \ --file-name my-file \ --file-format yaml The following example shows an exported security policy: description: my description fingerprint: PWfLGDWQDLY= id: '123' name: my-policy rules: - action: allow description: default rule match: config: srcIpRanges: - ' ' versionedExpr: SRC IPS V1 preview: false priority: 2147483647 selfLink: https://www.googleapis.com/compute/v1/projects/my-project/global/securityPolicies/my-policy You can modify the exported file with any text editor, and then import it back to Google Cloud by using the import command.
- Before you begin Before you configure security policies, do the following: Make sure that you are familiar with external Application Load Balancer concepts.
- Use the modified file to create a new security policy, and then switch the security policy for the relevant backend services. gcloud Export the policy to update, as shown in the following example: gcloud compute security-policies export my-policy \ --file-name my-file \ --file-format yaml The exported policy will look similar to the following example: description: my description fingerprint: PWfLGDWQDLY= id: '123' name: my-policy rules: - action: deny(404) description: my-rule-1 match: expr: expression: evaluatePreconfiguredWaf('xss-stable') versionedExpr: SRC IPS V1 preview: false priority: 1 - action: allow description: my-rule-2 match: config: srcIpRanges: - '1.2.3.4' versionedExpr: SRC IPS V1 preview: false priority: 2 - action: deny description: default rule kind: compute#securityPolicyRule match: config: srcIpRanges: - ' ' versionedExpr: SRC IPS V1 preview: false priority: 2147483647 selfLink: https://www.googleapis.com/compute/v1/projects/my-project/global/securityPolicies/my-policy Use any text editor to modify the policy.

### Security policy overview \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview)
- Source ID: `site-docs-root`
- Final score: 267
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Armor security policies are available for the following load balancer and endpoint types: All external Application Load Balancers, including classic Application Load Balancers Regional internal Application Load Balancer Global external proxy Network Load Balancer (TCP/SSL) Classic proxy Network Load Balancer (TCP/SSL) External passthrough Network Load Balancer (TCP/UDP) External protocol forwarding VMs with external IPv4 addresses or external IPv6 address ranges assigned to a network interface (NIC) The load balancer can be in Premium Tier or Standard Tier .
- You can use Cloud Armor with load balancers that are in either of the following Network Service Tiers: Premium Tier Standard Tier You can use backend security policies with GKE and the default ingress controller.
- Globally scoped security policies Backend security policy Edge security policy Internal service security policy Frontend type Global external Application Load Balancer Classic Application Load Balancer (global only) Global external proxy Network Load Balancer Classic proxy Network Load Balancer Global external Application Load Balancer Classic Application Load Balancer (global only) Global external proxy Network Load Balancer Classic proxy Network Load Balancer Cloud Service Mesh clients Attachment point (protected resource) Backend service Backend service Backend service Backend bucket Cloud Service Mesh endpoint policy Rule actions Allow Deny Redirect ( GOOGLE RECAPTCHA and EXTERNAL 302 ) Throttle Rate-based ban Allow Deny Throttle Rate-based ban Allow Deny Fairshare Client IP address Client geography Client ASN Media CDN only Rate limiting TLS fingerprinting (JA3 and JA4) Bot management HTTP filtering Media CDN only WAF Adaptive Protection Address Group Google Threat Intelligence Media CDN only Security Command Center Cloud Monitoring Request logging Regionally scoped security policies Regional backend security policy Network edge security policy Frontend type Regional external Application Load Balancer Regional internal Application Load Balancer External passthrough Network Load Balancer External protocol forwarding VMs with NICs that have external IP addresses Attachment point (protected resource) Backend service (regional) Backend service (regional) Target pool Target instance Backend service (regional) Instance Rule actions Allow Deny Throttle Rate-based ban Allow Deny Throttle Rate-based ban Allow Deny Client IP address Client geography Client ASN Rate limiting TLS fingerprinting (JA3 and JA4) JA3 only JA3 only Bot management HTTP filtering WAF Adaptive Protection Address Group Google Threat Intelligence Byte offset filtering Security Command Center Cloud Monitoring Request logging Backend security policies Backend security policies are used with backend services exposed by the following load balancer types: Global external Application Load Balancer Classic Application Load Balancer Regional external Application Load Balancer Regional internal Application Load Balancer Global external proxy Network Load Balancer Classic proxy Network Load Balancer You use backend security policies to filter requests and protect backend services that reference instance groups or any of the supported NEG types behind the previously listed load balancer types.
- You can use a default security policy that throttles traffic over a user-specified threshold when you configure one of the following load balancers: Global external Application Load Balancer Classic Application Load Balancer Regional external Application Load Balancer Regional internal Application Load Balancer Global external proxy Network Load Balancer (TCP/SSL) Classic proxy Network Load Balancer (TCP/SSL) In addition, you can configure Google Cloud Armor preconfigured WAF rules, which are complex web application firewall (WAF) rules with dozens of signatures that are compiled from open source industry standards.

### Example security policies \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/example-policies](https://docs.cloud.google.com/armor/docs/example-policies)
- Source ID: `site-iam-reference`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following command adds a rule to allow traffic from the IP address 1.2.3.4 and contains the string example in the user-agent header: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "inIpRange(origin.ip, '1.2.3.4/32') && has(request.headers['user-agent']) && request.headers['user-agent'].contains('example')" \ --action allow \ --description "Block User-Agent 'example'" The following command adds a rule to block requests if the request's cookie contains a specific value: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "has(request.headers['cookie']) && request.headers['cookie'].contains('cookie name=cookie value')" \ --action "deny-403" \ --description "Cookie Block" The following command adds a rule to block requests from the region AU : gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "origin.region code == 'AU'" \ --action "deny-403" \ --description "AU block" The following command adds a rule to block requests from the region AU that are not in the specified IP range: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "origin.region code == 'AU' && !inIpRange(origin.ip, '1.2.3.0/24')" \ --action "deny-403" \ --description "country and IP block" The following command adds a rule to block requests with a URI that matches a regular expression: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "request.path.matches('/example path/')" \ --action "deny-403" \ --description "regex block" The following command adds a rule to block requests if the Base64 decoded value of the user-id header contains a specific value: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "has(request.headers['user-id']) && request.headers['user-id'].base64Decode().contains('myValue')" \ --action "deny-403" \ --description "country and IP block" The following command adds a rule that uses a preconfigured expression set to mitigate SQLi attacks: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "evaluatePreconfiguredWaf('sqli-v422-stable')" \ --action "deny-403" The following command adds a rule that uses a preconfigured expression to allow access from all IP addresses on a named IP address list: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "evaluatePreconfiguredWaf('sourceiplist-fastly')" \ --action "allow" Configure security policies for regional external Application Load Balancers This section contains information about configuring regionally scoped Cloud Armor security policies for regional external Application Load Balancers.
- Configure security policies for external Application Load Balancers The following are the high-level steps for configuring Google Cloud Armor security policies to enable rules that allow or deny traffic to the global external Application Load Balancer or the classic Application Load Balancer: Create a Cloud Armor security policy.
- Click Create policy . gcloud Create the Cloud Armor security policies: gcloud compute security-policies create mobile-clients-policy \ --description "policy for external users" gcloud compute security-policies create internal-users-policy \ --description "policy for internal test users" Update the default rules to the security policies to deny traffic: gcloud compute security-policies rules update 2147483647 \ --security-policy mobile-clients-policy \ --action "deny-404" gcloud compute security-policies rules update 2147483647 \ --security-policy internal-users-policy \ --action "deny-502" Add rules to the security policies: gcloud compute security-policies rules create 1000 \ --security-policy mobile-clients-policy \ --description "allow traffic from 192.0.2.0/24" \ --src-ip-ranges "192.0.2.0/24" \ --action "allow" gcloud compute security-policies rules create 1000 \ --security-policy internal-users-policy \ --description "allow traffic from 198.51.100.0/24" \ --src-ip-ranges "198.51.100.0/24" \ --action "allow" Attach the security policies to the backend services: gcloud compute backend-services update games \ --security-policy mobile-clients-policy gcloud compute backend-services update test-network \ --security-policy internal-users-policy Optionally, enable Adaptive Protection: gcloud compute security-policies update mobile-clients-policy \ --enable-layer7-ddos-defense gcloud compute security-policies update internal-users-policy \ --enable-layer7-ddos-defense Create security policies You can use the Google Cloud console or the gcloud CLI to create security policies.
- The type flag is optional; if no type is specified, a backend security policy is created by default: gcloud compute security-policies create NAME \ [--type=CLOUD ARMOR CLOUD ARMOR EDGE] \ [--file-format= FILE FORMAT --description= DESCRIPTION ] \ [--file-name= FILE NAME ] Replace the following: NAME : the name of the security policy FILE FORMAT : the format of the file specified in --file-name ; specify yaml or json DESCRIPTION : the description of the security policy FILE NAME : the name of a file that contains either a YAML or JSON export of the security policy The following command updates a policy that you previously created, turns JSON parsing on, and changes the log level to VERBOSE : gcloud compute security-policies update my-policy \ --json-parsing=STANDARD \ --log-level=VERBOSE To add rules to a security policy, use the gcloud compute security-policies rules create PRIORITY command. gcloud compute security-policies rules create PRIORITY \ [--security-policy POLICY NAME ] \ [--description DESCRIPTION ] \ --src-ip-ranges IP RANGE,... --expression EXPRESSION \ --action=[ allow deny-403 deny-404 deny-502 ] \ [--preview] Replace the following: PRIORITY : the priority to assign to the rule in the policy.

### "Common use cases for security policies \_|\_ Google Cloud Armor \_|\_ Google\

- URL: [https://docs.cloud.google.com/armor/docs/common-use-cases](https://docs.cloud.google.com/armor/docs/common-use-cases)
- Source ID: `site-iam-reference`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example uses a preconfigured rule to mitigate SQLi attacks from the 192.0.2.1/24 IP address range: inIpRange(origin.ip, '192.0.2.1/24') && evaluatePreconfiguredWaf('sqli-v422-stable') OWASP Top 10 mitigation for hybrid workloads Cloud Armor offers mitigations for the following attacks, whether they are deployed in Google Cloud,on-premises, or in a third-party provider: SQL injection (SQLi) Cross-site scripting (XSS) Local File Inclusion (LFI) Remote File Inclusion (RFI) Remote Code Execution (RCE) You can use these capabilities to address some of the most common web application security risks, including those risks identified in the OWASP Top 10 list.
- To enable Cloud Armor protection for CDN external origins servers, follow these steps: Configure a global external Application Load Balancer or a classic Application Load Balancer with a backend service that has an internet NEG as a backend.
- Home Documentation Networking Google Cloud Armor Guides Send feedback Common use cases for security policies Stay organized with collections Save and categorize content based on your preferences.
- Block access for users at specific IP addresses with denylists Use denylists to create Cloud Armor security policies that reject traffic from an IP address or CIDR range.

