---
title: "Policies and rules \_|\_ Secure Web Proxy \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secure-web-proxy/docs/policies-and-rules-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/secure-web-proxy/docs/initial-setup-steps
source_metadata:
  url: https://docs.cloud.google.com/secure-web-proxy/docs/policies-and-rules-overview
  title: "Policies and rules \_|\_ Secure Web Proxy \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Secure Web Proxy
Guides
Send feedback
Policies and rules
Stay organized with collections
Save and categorize content based on your preferences.
Secure Web Proxy policies and rules are the foundation of your outbound web traffic
security strategy. They provide precise control over web traffic by allowing or
denying requests based on source identity—such as,
service accounts or
secure tags —and destination
attributes-such as, URL lists . You can
use these security policies and rules to ensure that only authorized traffic can
leave your network.
This page describes how to define policies, structure
specific rules to control traffic—including non-web TCP
connections—and apply granular security based on source identity and
destination attributes.
Policies overview
A Secure Web Proxy policy is the core security item that defines access
controls for all outbound web traffic. Here are the key features of
Secure Web Proxy policies:
Policy control : a policy stores the complete set of instructions
(Secure Web Proxy rules) that the proxy uses to determine whether to allow or
deny a web request.
Secure by default : Secure Web Proxy policies are deny-all
by default. This means that the proxy blocks every request (HTTP/S) until you
create a specific rule to permit it, enforcing a zero-trust architecture from
the start.
Policy logic : every policy is built on two core checks—determining
the traffic source and verifying the allowed destination.
Secure Web Proxy policies are based on the following three parameters:
Traffic source : to identify the traffic source, Secure Web Proxy uses
various attributes such as
service accounts ,
secure tags , and
IP addresses .
Allowed destination : to determine the allowed destinations,
Secure Web Proxy uses a destination domain, a full URL path (if
TLS inspection is enabled ),
URL lists , or the destination port.
Request details : Secure Web Proxy can also analyze specific
attributes of the web request itself, such as the protocol, HTTP method, or
request headers. To perform this analysis, you need to
enable TLS inspection for
encrypted traffic.
Important: For more information about the quotas and system limits that apply to
Secure Web Proxy policies, see
Quotas and limits .
Source attributes
To enforce granular security, Secure Web Proxy policies identify the source of
the traffic by using the following cloud identity and network location data:
Service accounts : unique
identities that are assigned to your applications or workloads.
This lets you create policies based on an application's specific function.
For example, "Only the backup service account can access Cloud Storage".
Secure tags : labels that you can apply
to your Google Cloud resources (like virtual machine (VM) instances).
Tags let you group workloads by function or environment. For example,
"Allow all resources labeled Production to access approved
domains."
IP addresses :
specific network address of the sender's machine. You can assign your
enterprise IP addresses (or static Google Cloud IP addresses)
that Secure Web Proxy uses for outbound traffic.
Supported identities for source attributes
Secure Web Proxy uses policies based on source identity, such as service
accounts and secure tags, to control web traffic. By using source identity-based
policies, you can apply rules based on who or what is sending the traffic,
rather than just the IP address.
The following table shows the various Google Cloud services that support these
source identity-based policies:
Google Cloud services
Service account support
Secure tag support
Compute Engine virtual machine (VM)
Google Kubernetes Engine (GKE) node
Google Kubernetes Engine (GKE) container
1
1
Direct VPC for Cloud Run
1
Serverless VPC Access connector
2
2
Cloud VPN
1
1
Cloud Interconnect on premises
1
1
Application Load Balancer
Network Load Balancer
1 Not supported by Google Cloud.
2 Source IP address is unique and can be used instead.
The following table shows whether various Virtual Private Cloud (VPC)
architectures are supported when using source identity-based security policies:
VPC
VPC architecture
Support
Within VPC
Cross project (Shared VPC)
Cross VPC
Cross peering link (peer VPC)
Cross VPC
Cross Private Service Connect
Cross VPC
Cross Network Connectivity Center spokes
Destination attributes
Secure Web Proxy policies determine whether a destination is approved by
analyzing the following attributes of the target website or service:
Destination domain : the website's address, such as
example.com .
URL lists : predefined lists of approved or blocked URLs that help make the
management of your policies more efficient.
Destination port : network port to which your Secure Web Proxy instance
sends traffic. For example, 443 for HTTPS.
Full URL path : exact path of the website. This requires TLS inspection
to be enabled to view the entire content on the specific web page.
For both HTTP and HTTPS destination traffic, you can use the host
destination attribute and various request.*
destination-related attributes like request.method for your application.
For more information about the destination attributes that you can use for HTTP
and HTTPS traffic, see
Attributes .
Rules overview
A Secure Web Proxy rule is an individual instruction within a
Secure Web Proxy policy that performs the actual matching and defines the
final action: either allow or deny. Your Secure Web Proxy instance evaluates
rules based on priority, with the lowest number checked first. The proxy stops
and acts on the first rule that matches the request.
Rules use the following two specialized matching engines to inspect traffic:
Session Matcher : checks basic information about the network connection as
it's being set up. Session Matcher includes the following items:
Source identity (service account or secure tag)
Destination hostname (the domain name)
Destination port
Application Matcher : inspects the content of the actual web request. It's
typically used to ensure granular control and requires TLS inspection to check
encrypted traffic. Application Matcher includes the following items:
Full URL path
Request method—for example, block all DELETE actions
Specific HTTP headers
Host matching rules
Secure Web Proxy uses hostname matching to verify the
destination domain, which varies slightly depending on how your proxy is
deployed as shown in the following table. For more information, see
Configure host matching rules .
Deployment mode
Host verification process
Explicit proxy mode
For unencrypted traffic, the proxy checks the hostname
against
the HTTP connection header. If you use
[Application Matcher attributes](/secure-web-proxy/docs/cel-matcher-language-reference#attributes-available-only-to-applicationmatcher)
for TLS inspection, then the proxy checks the hostname in
two steps: first at the connection level and then at the
application level.
Next hop mode
For encrypted traffic, the proxy checks the destination
hostname against the Server Name Indication (SNI) field in the
outbound request, which is visible even on secure connections.
TCP proxy rules
Transmission Control Protocol (TCP) proxy rules let you control traffic that
isn't standard web traffic, such as port 80 for HTTP and port
443 for HTTPS. By configuring TCP proxy rules, you
can either approve or block traffic on any other TCP port. This helps you block
malicious traffic and gain granular control over non-web applications that use
TCP.
If your workload (such as your applications and services) uses
Secure Web Proxy as next hop ,
then applying TCP proxy rules is beneficial. This is because using a route-based
redirection process points non-HTTP(S) and non-web traffic to your
Secure Web Proxy instance. By doing so, you can block malicious traffic from
reaching your application and control which applications or websites can access
your network.
For more information, see
Configure TCP proxy rules .
Important: Secure Web Proxy doesn't support the ability to configure TCP proxy
rules for
User Datagram Protocol (UDP)
applications. As a result, Secure Web Proxy blocks the traffic of UDP-based
applications.
What's next
Create a policy
Configure rules
Use service accounts to create policies
Use tags to create policies
Use a URL list to create policies
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
