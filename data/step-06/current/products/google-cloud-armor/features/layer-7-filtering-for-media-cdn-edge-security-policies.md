---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:20.930Z"
product_name: "Google Cloud Armor"
product_slug: "google-cloud-armor"
feature_name: "Layer 7 filtering for Media CDN edge security policies"
feature_slug: "layer-7-filtering-for-media-cdn-edge-security-policies"
latest_feature_date: "2024-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/armor/docs/security-policy-overview"
  - "https://docs.cloud.google.com/armor/docs/common-use-cases"
  - "https://docs.cloud.google.com/armor/docs/example-policies"
  - "https://docs.cloud.google.com/armor/docs/configure-security-policies"
keywords:
  - "layer"
  - "filtering"
  - "for"
  - "media"
  - "cdn"
  - "edge"
  - "security"
  - "policies"
---

# Layer 7 filtering for Media CDN edge security policies

Product: Google Cloud Armor
Coverage: MEDIUM

## Step 02 Summary

Cloud Armor layer 7 filtering is generally available for globally scoped edge security policies used with Media CDN; Cloud Armor layer 7 filtering is available in preview for globally scoped edge security policies used with Media CDN.

## Extended Definition

Cloud Armor layer 7 filtering is generally available for globally scoped edge security policies used with Media CDN; Cloud Armor layer 7 filtering is available in preview for globally scoped edge security policies used with Media CDN.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview)
- [https://docs.cloud.google.com/armor/docs/common-use-cases](https://docs.cloud.google.com/armor/docs/common-use-cases)
- [https://docs.cloud.google.com/armor/docs/example-policies](https://docs.cloud.google.com/armor/docs/example-policies)
- [https://docs.cloud.google.com/armor/docs/configure-security-policies](https://docs.cloud.google.com/armor/docs/configure-security-policies)

## Supporting Pages

### Security policy overview \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- Globally scoped security policies Backend security policy Edge security policy Internal service security policy Frontend type Global external Application Load Balancer Classic Application Load Balancer (global only) Global external proxy Network Load Balancer Classic proxy Network Load Balancer Global external Application Load Balancer Classic Application Load Balancer (global only) Global external proxy Network Load Balancer Classic proxy Network Load Balancer Cloud Service Mesh clients Attachment point (protected resource) Backend service Backend service Backend service Backend bucket Cloud Service Mesh endpoint policy Rule actions Allow Deny Redirect ( GOOGLE RECAPTCHA and EXTERNAL 302 ) Throttle Rate-based ban Allow Deny Throttle Rate-based ban Allow Deny Fairshare Client IP address Client geography Client ASN Media CDN only Rate limiting TLS fingerprinting (JA3 and JA4) Bot management HTTP filtering Media CDN only WAF Adaptive Protection Address Group Google Threat Intelligence Media CDN only Security Command Center Cloud Monitoring Request logging Regionally scoped security policies Regional backend security policy Network edge security policy Frontend type Regional external Application Load Balancer Regional internal Application Load Balancer External passthrough Network Load Balancer External protocol forwarding VMs with NICs that have external IP addresses Attachment point (protected resource) Backend service (regional) Backend service (regional) Target pool Target instance Backend service (regional) Instance Rule actions Allow Deny Throttle Rate-based ban Allow Deny Throttle Rate-based ban Allow Deny Client IP address Client geography Client ASN Rate limiting TLS fingerprinting (JA3 and JA4) JA3 only JA3 only Bot management HTTP filtering WAF Adaptive Protection Address Group Google Threat Intelligence Byte offset filtering Security Command Center Cloud Monitoring Request logging Backend security policies Backend security policies are used with backend services exposed by the following load balancer types: Global external Application Load Balancer Classic Application Load Balancer Regional external Application Load Balancer Regional internal Application Load Balancer Global external proxy Network Load Balancer Classic proxy Network Load Balancer You use backend security policies to filter requests and protect backend services that reference instance groups or any of the supported NEG types behind the previously listed load balancer types.
- Edge security policies Edge security policies enable users to configure filtering and access control policies for content that is stored in cache; this includes endpoints like Cloud CDN-enabled backend services and Cloud Storage buckets.
- You can configure network edge security policies for the following resources: External passthrough Network Load Balancers Protocol forwarding VMs with public IP addresses Network edge security policies support filtering based on some of the same parameters as backend security policies, and are the only security policy type to support byte offset filtering .
- Google Cloud Armor security policies protect your application by providing Layer 7 filtering and by scrubbing incoming requests for common web attacks or other Layer 7 attributes to potentially block traffic before it reaches your load-balanced backend services or backend buckets.

### "Common use cases for security policies \_|\_ Google Cloud Armor \_|\_ Google\

- URL: [https://docs.cloud.google.com/armor/docs/common-use-cases](https://docs.cloud.google.com/armor/docs/common-use-cases)
- Source ID: `site-iam-reference`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud CDN external origin server DDoS defense and layer 7 monitoring Cloud CDN deployments with an external origin server can have Google's edge infrastructure as the frontend for proxying, caching, and Cloud Armor layer 7 filtering.
- For more information on edge security policies, see the Security policy overview .
- Configure a rule; for example, the following rule denies access to "/admin" : request.path.contains ( "/admin" ) && !inIpRange ( origin.ip, '<allowed ip range>' ) Attach the security policy from step 1 to the backend service that has Cloud CDN enabled.
- Home Documentation Networking Google Cloud Armor Guides Send feedback Common use cases for security policies Stay organized with collections Save and categorize content based on your preferences.

### Example security policies \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/example-policies](https://docs.cloud.google.com/armor/docs/example-policies)
- Source ID: `site-iam-reference`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- Click Create policy . gcloud Create the Cloud Armor security policies: gcloud compute security-policies create mobile-clients-policy \ --description "policy for external users" gcloud compute security-policies create internal-users-policy \ --description "policy for internal test users" Update the default rules to the security policies to deny traffic: gcloud compute security-policies rules update 2147483647 \ --security-policy mobile-clients-policy \ --action "deny-404" gcloud compute security-policies rules update 2147483647 \ --security-policy internal-users-policy \ --action "deny-502" Add rules to the security policies: gcloud compute security-policies rules create 1000 \ --security-policy mobile-clients-policy \ --description "allow traffic from 192.0.2.0/24" \ --src-ip-ranges "192.0.2.0/24" \ --action "allow" gcloud compute security-policies rules create 1000 \ --security-policy internal-users-policy \ --description "allow traffic from 198.51.100.0/24" \ --src-ip-ranges "198.51.100.0/24" \ --action "allow" Attach the security policies to the backend services: gcloud compute backend-services update games \ --security-policy mobile-clients-policy gcloud compute backend-services update test-network \ --security-policy internal-users-policy Optionally, enable Adaptive Protection: gcloud compute security-policies update mobile-clients-policy \ --enable-layer7-ddos-defense gcloud compute security-policies update internal-users-policy \ --enable-layer7-ddos-defense Create security policies You can use the Google Cloud console or the gcloud CLI to create security policies.
- The type flag is optional; if no type is specified, a backend security policy is created by default: gcloud compute security-policies create NAME \ [--type=CLOUD ARMOR CLOUD ARMOR EDGE] \ [--file-format= FILE FORMAT --description= DESCRIPTION ] \ [--file-name= FILE NAME ] Replace the following: NAME : the name of the security policy FILE FORMAT : the format of the file specified in --file-name ; specify yaml or json DESCRIPTION : the description of the security policy FILE NAME : the name of a file that contains either a YAML or JSON export of the security policy The following command updates a policy that you previously created, turns JSON parsing on, and changes the log level to VERBOSE : gcloud compute security-policies update my-policy \ --json-parsing=STANDARD \ --log-level=VERBOSE To add rules to a security policy, use the gcloud compute security-policies rules create PRIORITY command. gcloud compute security-policies rules create PRIORITY \ [--security-policy POLICY NAME ] \ [--description DESCRIPTION ] \ --src-ip-ranges IP RANGE,... --expression EXPRESSION \ --action=[ allow deny-403 deny-404 deny-502 ] \ [--preview] Replace the following: PRIORITY : the priority to assign to the rule in the policy.
- The following command adds a rule to allow traffic from the IP address 1.2.3.4 and contains the string example in the user-agent header: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "inIpRange(origin.ip, '1.2.3.4/32') && has(request.headers['user-agent']) && request.headers['user-agent'].contains('example')" \ --action allow \ --description "Block User-Agent 'example'" The following command adds a rule to block requests if the request's cookie contains a specific value: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "has(request.headers['cookie']) && request.headers['cookie'].contains('cookie name=cookie value')" \ --action "deny-403" \ --description "Cookie Block" The following command adds a rule to block requests from the region AU : gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "origin.region code == 'AU'" \ --action "deny-403" \ --description "AU block" The following command adds a rule to block requests from the region AU that are not in the specified IP range: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "origin.region code == 'AU' && !inIpRange(origin.ip, '1.2.3.0/24')" \ --action "deny-403" \ --description "country and IP block" The following command adds a rule to block requests with a URI that matches a regular expression: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "request.path.matches('/example path/')" \ --action "deny-403" \ --description "regex block" The following command adds a rule to block requests if the Base64 decoded value of the user-id header contains a specific value: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "has(request.headers['user-id']) && request.headers['user-id'].base64Decode().contains('myValue')" \ --action "deny-403" \ --description "country and IP block" The following command adds a rule that uses a preconfigured expression set to mitigate SQLi attacks: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "evaluatePreconfiguredWaf('sqli-v422-stable')" \ --action "deny-403" The following command adds a rule that uses a preconfigured expression to allow access from all IP addresses on a named IP address list: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "evaluatePreconfiguredWaf('sourceiplist-fastly')" \ --action "allow" Configure security policies for regional external Application Load Balancers This section contains information about configuring regionally scoped Cloud Armor security policies for regional external Application Load Balancers.
- You can add WAF rules and other advanced rules to your policy while satisfying the requirement by using the following example commands: Add a WAF rule to the policy: gcloud compute security-policies rules create 1000 --action=deny-404 \ --expression="evaluatePreconfiguredWaf('xss-v422-stable', ['owasp-crs-v042200-id941100-xss', 'owasp-crs-v042200-id941160-xss'])" \ --security-policy= POLICY NAME \ --region= REGION Replace the following: POLICY NAME : the name of the security policy REGION : the region of the security policy Add an advanced rule to the policy: gcloud compute security-policies rules create 1000 --action=allow \ --expression="has(request.headers['cookie']) && request.headers['cookie'].contains('80=EXAMPLE')" \ --security-policy= POLICY NAME \ --region= REGION Add a rate limiting rule to the policy: gcloud compute security-policies rules create 1000 --action=throttle \ --src-ip-ranges="1.1.1.1/32" \ --rate-limit-threshold-count=1000 \ --rate-limit-threshold-interval-sec=120 \ --conform-action="allow" \ --exceed-action="deny-429" \ --enforce-on-key=IP \ --ban-duration-sec=999 \ --ban-threshold-count=5000 \ --ban-threshold-interval-sec=60 \ --security-policy= POLICY NAME \ --region= REGION Replace the following: POLICY NAME : the name of the security policy REGION : the region of the security policy What's next Configure Cloud Armor security policies Learn more about rate limiting .

### "Configure Cloud Armor security policies \_|\_ Google Cloud Armor \_|\_ Google\

- URL: [https://docs.cloud.google.com/armor/docs/configure-security-policies](https://docs.cloud.google.com/armor/docs/configure-security-policies)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- For example, you can modify the the priorities of the existing rules and add a new rule: description: my description fingerprint: PWfLGDWQDLY= id: '123' name: my-policy rules: - action: deny(404) description: my-rule-1 match: expr: expression: evaluatePreconfiguredWaf('xss-stable') versionedExpr: SRC IPS V1 preview: false priority: 1 - action: allow description: my-new-rule match: config: srcIpRanges: - '1.2.3.1' versionedExpr: SRC IPS V1 preview: false priority: 10 - action: allow description: my-rule-2 match: config: srcIpRanges: - '1.2.3.4' versionedExpr: SRC IPS V1 preview: false priority: 11 - action: deny description: default rule kind: compute#securityPolicyRule match: config: srcIpRanges: - ' ' versionedExpr: SRC IPS V1 preview: false priority: 2147483647 selfLink: https://www.googleapis.com/compute/v1/projects/my-project/global/securityPolicies/my-policy Create a new Cloud Armor security policy and specify the modified filename and format, as shown in the following example: gcloud compute security-policies create new-policy \ --file-name modified-policy \ --file-format yaml Remove the old security policy from the relevant backend service, as shown in the following example: gcloud compute backend-services update my-backend \ --security-policy "" Add the new security policy to the backend service, as shown in the following example: gcloud compute backend-services update my-backend \ --security-policy new-policy If the old policy is unused, delete it: gcloud compute security-policies delete my-policy Delete rules from a security policy Use these instructions to delete rules from a Cloud Armor security policy.
- The Policy details page is displayed, and the policy rules are listed on the Rules tab in the middle of the page. gcloud Use the following gcloud command to list all rules in a single security policy along with a description of the policy: gcloud compute security-policies describe NAME \ Use the following gcloud command to list all rules in a single security policy in a specified region along with a description of the policy: gcloud compute security-policies describe NAME \ --region REGION Use the following gcloud command to describe a rule with the specified priority in the specified security policy: gcloud compute security-policies rules describe PRIORITY \ --security-policy POLICY NAME For example, the following command describes the rule with priority 1000 in the security policy my-policy : gcloud compute security-policies rules describe 1000 \ --security-policy my-policy Output: action: deny(403) description: block traffic from 192.0.2.0/24 and 198.51.100.0/24 kind: compute#securityPolicyRule match: srcIpRanges: - '192.0.2.0/24' - '198.51.100.0/24' preview: false priority: 1000 For more information, see gcloud compute security-policies describe .
- Use the modified file to create a new security policy, and then switch the security policy for the relevant backend services. gcloud Export the policy to update, as shown in the following example: gcloud compute security-policies export my-policy \ --file-name my-file \ --file-format yaml The exported policy will look similar to the following example: description: my description fingerprint: PWfLGDWQDLY= id: '123' name: my-policy rules: - action: deny(404) description: my-rule-1 match: expr: expression: evaluatePreconfiguredWaf('xss-stable') versionedExpr: SRC IPS V1 preview: false priority: 1 - action: allow description: my-rule-2 match: config: srcIpRanges: - '1.2.3.4' versionedExpr: SRC IPS V1 preview: false priority: 2 - action: deny description: default rule kind: compute#securityPolicyRule match: config: srcIpRanges: - ' ' versionedExpr: SRC IPS V1 preview: false priority: 2147483647 selfLink: https://www.googleapis.com/compute/v1/projects/my-project/global/securityPolicies/my-policy Use any text editor to modify the policy.
- Set up IAM permissions for Cloud Armor security policies The following operations require the Identity and Access Management (IAM) Compute Security Admin role ( roles/compute.securityAdmin ): Configuring, modifying, updating, and deleting a Cloud Armor security policy Using the following API methods: SecurityPolicies insert SecurityPolicies delete SecurityPolicies patch SecurityPolicies addRule SecurityPolicies patchRule SecurityPolicies removeRule A user with the Compute Network Admin role ( roles/compute.networkAdmin ) can perform the following operations: Setting a Cloud Armor security policy for a backend service Using the following API methods: BackendServices setSecurityPolicy BackendServices list ( gcloud only) Users with the Security Admin role ( roles/iam.securityAdmin ) and the Compute Network Admin role ( roles/compute.networkAdmin ) can view Cloud Armor security policies by using the SecurityPolicies API methods get , list , and getRule .

