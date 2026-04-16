---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:20.928Z"
product_name: "Google Cloud Armor"
product_slug: "google-cloud-armor"
feature_name: "Internal service security policies"
feature_slug: "internal-service-security-policies"
latest_feature_date: "2025-07-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/armor/docs/security-policy-overview"
  - "https://docs.cloud.google.com/armor/docs/example-policies"
  - "https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api"
  - "https://docs.cloud.google.com/armor/docs/common-use-cases"
keywords:
  - "internal"
  - "security"
  - "policies"
  - "for"
  - "mesh"
  - "that"
  - "enforce"
  - "global"
---

# Internal service security policies

Product: Google Cloud Armor
Coverage: MEDIUM

## Step 02 Summary

Security policies for service mesh that enforce global server-side rate limiting per client.

## Extended Definition

Security policies for service mesh that enforce global server-side rate limiting per client.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview)
- [https://docs.cloud.google.com/armor/docs/example-policies](https://docs.cloud.google.com/armor/docs/example-policies)
- [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)
- [https://docs.cloud.google.com/armor/docs/common-use-cases](https://docs.cloud.google.com/armor/docs/common-use-cases)

## Supporting Pages

### Security policy overview \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/security-policy-overview](https://docs.cloud.google.com/armor/docs/security-policy-overview)
- Source ID: `site-docs-root`
- Final score: 284
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Globally scoped security policies Backend security policy Edge security policy Internal service security policy Frontend type Global external Application Load Balancer Classic Application Load Balancer (global only) Global external proxy Network Load Balancer Classic proxy Network Load Balancer Global external Application Load Balancer Classic Application Load Balancer (global only) Global external proxy Network Load Balancer Classic proxy Network Load Balancer Cloud Service Mesh clients Attachment point (protected resource) Backend service Backend service Backend service Backend bucket Cloud Service Mesh endpoint policy Rule actions Allow Deny Redirect ( GOOGLE RECAPTCHA and EXTERNAL 302 ) Throttle Rate-based ban Allow Deny Throttle Rate-based ban Allow Deny Fairshare Client IP address Client geography Client ASN Media CDN only Rate limiting TLS fingerprinting (JA3 and JA4) Bot management HTTP filtering Media CDN only WAF Adaptive Protection Address Group Google Threat Intelligence Media CDN only Security Command Center Cloud Monitoring Request logging Regionally scoped security policies Regional backend security policy Network edge security policy Frontend type Regional external Application Load Balancer Regional internal Application Load Balancer External passthrough Network Load Balancer External protocol forwarding VMs with NICs that have external IP addresses Attachment point (protected resource) Backend service (regional) Backend service (regional) Target pool Target instance Backend service (regional) Instance Rule actions Allow Deny Throttle Rate-based ban Allow Deny Throttle Rate-based ban Allow Deny Client IP address Client geography Client ASN Rate limiting TLS fingerprinting (JA3 and JA4) JA3 only JA3 only Bot management HTTP filtering WAF Adaptive Protection Address Group Google Threat Intelligence Byte offset filtering Security Command Center Cloud Monitoring Request logging Backend security policies Backend security policies are used with backend services exposed by the following load balancer types: Global external Application Load Balancer Classic Application Load Balancer Regional external Application Load Balancer Regional internal Application Load Balancer Global external proxy Network Load Balancer Classic proxy Network Load Balancer You use backend security policies to filter requests and protect backend services that reference instance groups or any of the supported NEG types behind the previously listed load balancer types.
- Cloud Armor security policies are available for the following load balancer and endpoint types: All external Application Load Balancers, including classic Application Load Balancers Regional internal Application Load Balancer Global external proxy Network Load Balancer (TCP/SSL) Classic proxy Network Load Balancer (TCP/SSL) External passthrough Network Load Balancer (TCP/UDP) External protocol forwarding VMs with external IPv4 addresses or external IPv6 address ranges assigned to a network interface (NIC) The load balancer can be in Premium Tier or Standard Tier .
- When edge security policies and backend security policies are attached to the same backend service, backend security policies are enforced only for cache miss requests that have passed edge security policies.
- You can use a default security policy that throttles traffic over a user-specified threshold when you configure one of the following load balancers: Global external Application Load Balancer Classic Application Load Balancer Regional external Application Load Balancer Regional internal Application Load Balancer Global external proxy Network Load Balancer (TCP/SSL) Classic proxy Network Load Balancer (TCP/SSL) In addition, you can configure Google Cloud Armor preconfigured WAF rules, which are complex web application firewall (WAF) rules with dozens of signatures that are compiled from open source industry standards.

### Example security policies \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/armor/docs/example-policies](https://docs.cloud.google.com/armor/docs/example-policies)
- Source ID: `site-iam-reference`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The rule has priority 1000, and it is a rule in a policy called my-policy . gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --description "block traffic from 192.0.2.0/24 and 198.51.100.0/24" \ --src-ip-ranges "192.0.2.0/24","198.51.100.0/24" \ --action "deny-403" With the --preview flag added, the rule is added to the policy, but not enforced, and any traffic that triggers the rule is only logged. gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --description "block traffic from 192.0.2.0/24 and 198.51.100.0/24" \ --src-ip-ranges "192.0.2.0/24","198.51.100.0/24" \ --action "deny-403" \ --preview Use the --expression flag to specify a custom condition.
- Configure security policies for external Application Load Balancers The following are the high-level steps for configuring Google Cloud Armor security policies to enable rules that allow or deny traffic to the global external Application Load Balancer or the classic Application Load Balancer: Create a Cloud Armor security policy.
- The following command adds a rule to allow traffic from the IP address 1.2.3.4 and contains the string example in the user-agent header: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "inIpRange(origin.ip, '1.2.3.4/32') && has(request.headers['user-agent']) && request.headers['user-agent'].contains('example')" \ --action allow \ --description "Block User-Agent 'example'" The following command adds a rule to block requests if the request's cookie contains a specific value: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "has(request.headers['cookie']) && request.headers['cookie'].contains('cookie name=cookie value')" \ --action "deny-403" \ --description "Cookie Block" The following command adds a rule to block requests from the region AU : gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "origin.region code == 'AU'" \ --action "deny-403" \ --description "AU block" The following command adds a rule to block requests from the region AU that are not in the specified IP range: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "origin.region code == 'AU' && !inIpRange(origin.ip, '1.2.3.0/24')" \ --action "deny-403" \ --description "country and IP block" The following command adds a rule to block requests with a URI that matches a regular expression: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "request.path.matches('/example path/')" \ --action "deny-403" \ --description "regex block" The following command adds a rule to block requests if the Base64 decoded value of the user-id header contains a specific value: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "has(request.headers['user-id']) && request.headers['user-id'].base64Decode().contains('myValue')" \ --action "deny-403" \ --description "country and IP block" The following command adds a rule that uses a preconfigured expression set to mitigate SQLi attacks: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "evaluatePreconfiguredWaf('sqli-v422-stable')" \ --action "deny-403" The following command adds a rule that uses a preconfigured expression to allow access from all IP addresses on a named IP address list: gcloud compute security-policies rules create 1000 \ --security-policy my-policy \ --expression "evaluatePreconfiguredWaf('sourceiplist-fastly')" \ --action "allow" Configure security policies for regional external Application Load Balancers This section contains information about configuring regionally scoped Cloud Armor security policies for regional external Application Load Balancers.
- Click Create policy . gcloud Create the Cloud Armor security policies: gcloud compute security-policies create mobile-clients-policy \ --description "policy for external users" gcloud compute security-policies create internal-users-policy \ --description "policy for internal test users" Update the default rules to the security policies to deny traffic: gcloud compute security-policies rules update 2147483647 \ --security-policy mobile-clients-policy \ --action "deny-404" gcloud compute security-policies rules update 2147483647 \ --security-policy internal-users-policy \ --action "deny-502" Add rules to the security policies: gcloud compute security-policies rules create 1000 \ --security-policy mobile-clients-policy \ --description "allow traffic from 192.0.2.0/24" \ --src-ip-ranges "192.0.2.0/24" \ --action "allow" gcloud compute security-policies rules create 1000 \ --security-policy internal-users-policy \ --description "allow traffic from 198.51.100.0/24" \ --src-ip-ranges "198.51.100.0/24" \ --action "allow" Attach the security policies to the backend services: gcloud compute backend-services update games \ --security-policy mobile-clients-policy gcloud compute backend-services update test-network \ --security-policy internal-users-policy Optionally, enable Adaptive Protection: gcloud compute security-policies update mobile-clients-policy \ --enable-layer7-ddos-defense gcloud compute security-policies update internal-users-policy \ --enable-layer7-ddos-defense Create security policies You can use the Google Cloud console or the gcloud CLI to create security policies.

### "Forwarder Management \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)
- Source ID: `site-docs-root-2`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SERVICE ACCOUNT FILE is the full path to the apikeys-demo.json file ToDo: Replace this with the full path to your OAuth2 credentials SERVICE ACCOUNT FILE = '/customer-keys/apikeys-demo.json' Create a credential using the Google Developer Service Account Credential and Backstory API Scope. credentials = service account.Credentials.from service account file(SERVICE ACCOUNT FILE, scopes=SCOPES) Build a requests Session Object to make authorized OAuth requests. http session = requests.AuthorizedSession(credentials) Your endpoint GET POST PATCH etc. code will vary below Reference List example (for US region) url = 'https://backstory.googleapis.com/v2/lists/COLDRIVER SHA256' You might need another regional endpoint for your API call; see https://cloud.google.com/chronicle/docs/reference/ingestion-api#regional endpoints requests GET example response = http session.request("GET", url) POST example uses json body = { "foo": "bar" } response = http session.request("POST", url, json=body) PATCH example uses params and json params = { "foo": "bar" } response = http session.request("PATCH", url, params=params, json=body) For more complete examples, see: https://github.com/chronicle/api-samples-python/ Backstory API query limits The Backstory API enforces limits on the volume of requests that can be made by any one customer against the Google SecOps platform.
- Note: This is a global setting that applies to the forwarder and the forwarder's collectors, unless it is overridden at the collector level. metadata.labels.key string Optional The key for a field in the metadata labels list. metadata.labels.value string Optional The value for a field in the metadata labels list. regex filters.description string Optional Describes what is being filtered and why. regex filters.regexp string Optional The regular expression used to match against each incoming line. regex filters.behavior enum Optional Specifies the state of the server functionality.
- Note: This is a global setting that applies to the forwarder and the forwarder's collectors, unless it is overridden at the collector level. metadata.labels.key string Optional The key for a field in the metadata labels list. metadata.labels.value string Optional The value for a field in the metadata labels list. regex filters.description string Optional Describes what is being filtered and why. regex filters.regexp string Optional The regular expression used to match against each incoming line. regex filters.behavior enum Optional Specifies the state of the server functionality.
- When developing applications for the Backstory API, Google recommends that you enforce rate limits within your system to avoid resource exhaustion.

### "Common use cases for security policies \_|\_ Google Cloud Armor \_|\_ Google\

- URL: [https://docs.cloud.google.com/armor/docs/common-use-cases](https://docs.cloud.google.com/armor/docs/common-use-cases)
- Source ID: `site-iam-reference`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- Block access for users at specific IP addresses with denylists Use denylists to create Cloud Armor security policies that reject traffic from an IP address or CIDR range.
- If your organization uses a third-party security provider to scrub traffic, you can add the security provider's IP address to an allowlist to ensure that only scrubbed traffic can access the global external Application Load Balancer or the classic Application Load Balancer and backends.
- Configure a rule; for example, the following rule denies access to "/admin" : request.path.contains ( "/admin" ) && !inIpRange ( origin.ip, '<allowed ip range>' ) Attach the security policy from step 1 to the backend service that has Cloud CDN enabled.
- To enable Cloud Armor protection for CDN external origins servers, follow these steps: Configure a global external Application Load Balancer or a classic Application Load Balancer with a backend service that has an internet NEG as a backend.

