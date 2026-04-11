---
title: "Common use cases for security policies \_|\_ Google Cloud Armor \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/armor/docs/common-use-cases
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/armor/docs/address-groups-using
source_metadata:
  url: https://docs.cloud.google.com/armor/docs/common-use-cases
  title: "Common use cases for security policies \_|\_ Google Cloud Armor \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Google Cloud Armor
Guides
Send feedback
Common use cases for security policies
Stay organized with collections
Save and categorize content based on your preferences.
This page features common use cases for Google Cloud Armor security policies.
Cloud Armor security policies can protect your application with
features like IP address allowlists and denylists, and preconfigured
rules to deter common web attacks.
Control access to your web applications and services
This section presents several ways to use Cloud Armor security policies
to control access to your applications or services.
Enable access for users at specific IP addresses with allowlists
A typical use case for placing user IP addresses on an allowlist is when your
global external Application Load Balancer or classic Application Load Balancer is accessed only by a
specific set of users. In the following
example, only users from your organization are allowed access to services behind
your load balancer. These users have IP addresses or address blocks assigned by
your organization. You can place these IP addresses or CIDR ranges on an
allowlist so that only these users have access to the load balancer.
Restricting load balancer access by using an allowlist
(click to enlarge).
You control access to the global external Application Load Balancer or the classic Application Load Balancer by
configuring an allowlist with
client IP addresses or client CIDR ranges from which access to your load
balancer is permitted. The following section further describes this
configuration.
In this configuration, you only want to allow users from your organization with
IP addresses from an IP range to access the global external Application Load Balancer or the
classic Application Load Balancer. You want
all other traffic to be denied.
To create this configuration, follow these steps:
Create a Cloud Armor security policy.
In the security policy, add a rule that adds the range to the allowlist
as the first rule. This rule has the description allow [RANGE] ,
where [RANGE] is the desired IP range.
Modify the default rule in the policy from an allow rule to a
deny rule. The default rule governs traffic that does not match any of
the preceding rules. It is the last rule in the policy. Changing the rule
from allow to deny blocks all traffic that does not originate in the
range on the allowlist.
Associate this policy with the global external Application Load Balancer or the
classic Application Load Balancer's backend service.
If your organization uses a third-party security provider to scrub traffic, you
can add the security provider's IP address to an allowlist to ensure that only
scrubbed traffic can access the global external Application Load Balancer or the
classic Application Load Balancer and backends.
In the following illustration, the third-party provider is identified by the
CIDR range 192.0.2.0/24, and this range is on an allowlist.
Restricting load balancer access by using an allowlist to
restrict traffic from a third-party security provider
(click to enlarge).
Block access for users at specific IP addresses with denylists
Use denylists to create Cloud Armor security policies that reject
traffic from an IP address or CIDR range. In the following illustration, the
Cloud Armor security policy has a deny rule that blocks traffic
from the IP address 198.51.100.1, where a malicious user has been identified.
Restricting load balancer access by using a denylist
(click to enlarge).
Custom rules to filter based on Layer 3 through Layer 7 parameters
Use the Cloud Armor custom rules language to define one or more
expressions in a rule's match condition. When Cloud Armor receives a
request, it evaluates the request against these expressions. If there is a
match, the rule's action takes effect, either denying or allowing the incoming
traffic.
The following examples are expressions that are written in the
Cloud Armor extension of the Common Expression Language
(CEL) .
For more information, see the
Custom rules language reference .
To define expressions in a rule, use the gcloud --expression flag or the
Google Cloud console. For more information, see
Creating Cloud Armor security policies, rules, and expressions .
In the following example, requests from 2001:db8::/32 (such as your alpha
testers) in the AU region match the following expression:
origin.region_code == "AU" && inIpRange(origin.ip, '2001:db8::/32')
The following example matches with requests from 192.0.2.0/24 and with a user
agent that contains the string WordPress :
inIpRange(origin.ip, '192.0.2.0/24') && has(request.headers['user-agent']) && request.headers['user-agent'].contains('WordPress')
For additional examples, see Example
expressions in the
custom rules language reference.
Protect your deployment against application layer attacks and help mitigate OWASP Top 10 risks
You can use Cloud Armor to protect a Cloud CDN origin server
from application layer (L7) attacks such as SQL injection (SQLi) and
cross-site scripting (XSS). Content in a cache is static and presumably does not
pose a risk of a targeted attack from the web. However, the underlying content
origin server might be a dynamic application with known or potential web-app
vulnerabilities. Your security or compliance requirements might require you to
mitigate these risks to prevent vulnerability exploits from the internet from
successfully attacking the origin server.
To mitigate the risks, follow these steps:
Create or identify a backend service with CDN enabled.
Create a Cloud Armor security policy.
Create one or more rules in the security policy to deny L7 attacks.
Configure one of the targets of the security policy to be the backend
service that you created or identified in step 1.
You can also use preconfigured rules to detect and block common application layer
attacks. Preconfigured rules are predefined expression sets that you can add to
a Cloud Armor security policy. To add these expression sets to a rule,
use the gcloud --expression flag or Google Cloud console.
For more information, see
Creating security policies, rules, and expressions .
A preconfigured rule inspects up to the first 8 kB of a request body by default. However, you can
configure this limit per policy. For more information about configuring this
inspection limit for a request body when using preconfigured
WAF rules, see
Request body inspection limitation .
For more information about preconfigured rules, see Preconfigured
rules in the custom
rules language reference.
The following example uses a preconfigured rule to mitigate cross-site
scripting (XSS) attacks:
evaluatePreconfiguredWaf('xss-v422-stable')
The following example uses a preconfigured rule to mitigate SQL injection
(SQLi) attacks:
evaluatePreconfiguredWaf('sqli-v422-stable')
You can also combine preconfigured rules with other expressions. The following
example uses a preconfigured rule to mitigate SQLi attacks from the
192.0.2.1/24 IP address range:
inIpRange(origin.ip, '192.0.2.1/24') && evaluatePreconfiguredWaf('sqli-v422-stable')
OWASP Top 10 mitigation for hybrid workloads
Cloud Armor offers mitigations for the following attacks, whether they
are deployed in Google Cloud,on-premises, or in a third-party provider:
SQL injection (SQLi)
Cross-site scripting (XSS)
Local File Inclusion (LFI)
Remote File Inclusion (RFI)
Remote Code Execution (RCE)
You can use these capabilities to address some of the most common web
application security risks, including those risks identified in the
OWASP Top 10
list.
Cloud Armor's preconfigured WAF rules can be
added to a security policy to detect and deny unwelcome layer 7 requests
containing SQLi or XSS attempts. Cloud Armor detects malicious requests
and drops them at the edge of Google's infrastructure. The requests are not
proxied to the backend service, regardless of where the backend service is
deployed.
To defend a non-Google Cloud-hosted workload from these attacks
at the edge of Google's network, follow these steps:
Configure a global external Application Load Balancer or a classic Application Load Balancer with a
backend service that has an internet
NEG as a backend.
Create a Cloud Armor security policy.
Add preconfigured SQLi and XSS rules to the policy.
Attach the security policy to the backend service that you created in step 1.
Monitor Cloud Armor activity by using Cloud Logging,
Cloud Monitoring, and the findings sent to Security Command Center.
Cloud CDN external origin server DDoS defense and layer 7 monitoring
Cloud CDN deployments with an external origin server can have
Google's edge infrastructure as the frontend for proxying, caching, and
Cloud Armor layer 7 filtering. Using internet NEGs, the origin
server can be located on-premises or with a third-party infrastructure
provider.
Cloud Armor and the rest of Google's edge infrastructure mitigates
and drops L3/L4 attacks, alerts on suspicious Layer 7 activity, and stands
ready to deny unwelcome layer 7 requests with custom rules. Cloud Armor
logging and telemetry across Cloud Logging, Cloud Monitoring, and
Security Command Center provide actionable insight for protected
applications regardless of where they are deployed.
To enable Cloud Armor protection for CDN external origins servers,
follow these steps:
Configure a global external Application Load Balancer or a classic Application Load Balancer with a
backend service that has an internet
NEG as a backend.
Enable Cloud CDN for this backend service.
Create a Cloud Armor security policy.
Attach the security policy to the backend service that you created in step 1.
Access Cloud Armor alerts, logging and telemetry in
Security Command Center, Cloud Logging, and Cloud Monitoring.
In addition, you can use edge security policies to protect content stored in
cache. For more information on edge security policies, see the
Security policy overview .
Layer 7 access controls and cache-busting attacks
Depending on the application architecture, you can configure one backend service
to serve requests for various URLs, including cacheable and non-cacheable
content. In such deployment scenarios, create Cloud Armor security
policies that deny unwelcome traffic on certain request paths, but allow all
clients to access static content on a different request path.
In other situations, even though the content is being efficiently served from
cache, a malicious or faulty client might generate a high volume of requests
that result in a cache miss and require the underlying origin server to fetch or
generate the requested content. This can strain limited resources and have a
negative impact on the availability of the application for all users. You can
create a Cloud Armor security policy to match the signature of
any clients that are causing the issue and deny the requests before they reach
the origin server and affect performance.
To accomplish this, follow these steps:
Create a Cloud Armor security policy.
Configure a rule; for example, the following rule denies access to "/admin" :
request.path.contains ( "/admin" ) && !inIpRange ( origin.ip, '<allowed_ip_range>' )
Attach the security policy from step 1 to the backend service that has
Cloud CDN enabled.
What's next
Configure security policies
Learn about the custom rules language
Tune WAF rules
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
