---
title: "Secure Web Proxy overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secure-web-proxy/docs/overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/secure-web-proxy/docs/initial-setup-steps
source_metadata:
  url: https://docs.cloud.google.com/secure-web-proxy/docs/overview
  title: "Secure Web Proxy overview \_|\_ Google Cloud Documentation"
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
Secure Web Proxy overview
Stay organized with collections
Save and categorize content based on your preferences.
Secure Web Proxy helps you secure all outbound web traffic—HTTP and
HTTPS—from your organization's internal network. When you configure your
clients to explicitly use Secure Web Proxy as a gateway, Secure Web Proxy
is a mandatory security checkpoint for any
application or service that tries to access a website outside your organization.
Benefits
Secure Web Proxy provides the following key benefits:
Zero maintenance . After you set your policies, Secure Web Proxy manages
your servers, patching, and scaling to automatically adjust capacity as your
traffic grows.
Flexible and reusable rules . With Secure Web Proxy,
security policies are separate from the proxy itself. To help ensure
consistent management, administrators create a set of access rules and apply the
set to multiple proxies across different parts of your organization.
Strong default security . Secure Web Proxy has a default
deny-all setting that blocks all outbound traffic until you
explicitly allow it. Google Cloud automatically handles all
software and infrastructure updates, which minimizes the ongoing risk of
security vulnerabilities.
Identity-aware access control . Because Secure Web Proxy checks both
where a request is coming from (the IP address) and who is making the
request (the user or service identity), access is based on the user role and
need, not just network location. Secure Web Proxy lets you create highly
specific rules, such as "Only members of the Finance team can access this
banking website."
Unified traffic logging and auditing . All web traffic that passes through
Secure Web Proxy is centrally logged and audited within Google Cloud.
This single, clear source of truth for all outbound access helps you track
activity, investigate security incidents, and meet compliance requirements.
Access control . Secure Web Proxy routes all web requests (like visiting
a website) from your cloud computers and connected offices to pass through a
central inspection point.
Supported features
Secure Web Proxy supports the following features:
Autoscaling Secure Web Proxy Envoy proxies : Secure Web Proxy
supports automatically adjusting the Envoy proxy pool size and the pool's
capacity in a region, which enables consistent performance during
high-demand periods at the lowest cost. The autoscaling feature
automatically manages capacity adjustments in a region. This means that you
don't have to manually monitor and resize your proxy fleet, ensuring
better performance with less operational time.
Modular outbound access policies : Secure Web Proxy manages outbound
traffic through the following actions:
Identifies source entities by using secure tags, service accounts, or IP
addresses.
Filters destination targets by hostnames or URLs when you enable TLS
inspection or use unencrypted HTTP.
Evaluates request attributes such as methods, headers, or URLs if the
traffic is unencrypted HTTP or if TLS inspection is enabled.
This modular nature of policies (sources, destinations, and requests) lets
various teams create and manage specific, reusable rule components. A
central administrator can define a URL list that multiple proxies can then
reference in their distinct policies.
End-to-end encryption : client-proxy tunnels can transit over TLS.
Secure Web Proxy also supports HTTP and HTTPS CONNECT for
client-initiated, end-to-end TLS connections to the destination server.
This crucial security measure is automatically managed by the service so
that traffic is secured without requiring the manual configuration or
monitoring of encryption standards.
Cloud Audit Logs and Google Cloud Observability integration : by using
Google Cloud Observability, Cloud Audit Logs records both administrative
actions (policy changes) and access requests and metrics (proxy transaction
logs) for Secure Web Proxy. This unified,
built-in view facilitates security monitoring and compliance reporting.
How Secure Web Proxy works
Secure Web Proxy acts as a mandatory security checkpoint for all web traffic
from your organization's network to the internet. Internal workloads must comply
with Secure Web Proxy security rules before they can reach the internet.
Centralized gateway : your workloads, such as virtual machines (VMs) and
containers are configured to send all outbound web requests to the
central Secure Web Proxy instance.
Policy enforcement : the proxy inspects the request and applies your
granular security policies to determine whether to allow or deny the
connection.
Secure outbound traffic : if the request is allowed, then the traffic is
securely routed out to the internet by using the Google Cloud
infrastructure, typically Cloud NAT. The proxy also uses
Cloud DNS to resolve external web addresses.
Secure Web Proxy policies
A Secure Web Proxy policy defines the overall security standard for a specific
region or set of workloads because it's the main container that stores all your
security instructions.
Here are the key features of a Secure Web Proxy policy:
A policy's default setting is to deny all outbound traffic, which ensures that
no web request leaves your network unless you specifically allow it.
You can create a single policy and reuse it across multiple Secure Web Proxy
instances, which keeps your security rules consistent and efficient.
For more information about Secure Web Proxy policies, see
Policies overview .
Secure Web Proxy rules
Within every Secure Web Proxy policy, there are one or more Secure Web Proxy
rules. These rules are the individual instructions that determine exactly what
traffic is to be allowed, denied, or logged.
Here are the key features of Secure Web Proxy rules:
Each rule is a highly specific if-then statement that checks a
web request against multiple criteria:
Who is asking: the source identity, such as a specific VM or service
account
Where are they trying to go: the destination URL or domain, like
trusted-partner.com
What action needs to be taken: allow or deny the traffic
Secure Web Proxy rules provide granular control, letting you enforce
different security standards for different parts of your organization by using
clear, structured definitions.
For more information about Secure Web Proxy rules, see
Rules overview .
Deployment modes
This section describes the various modes in which you can deploy
Secure Web Proxy.
Explicit proxy routing mode
In this mode, you must explicitly configure your workload environments and
clients to point directly to the proxy server. Secure Web Proxy then isolates
your clients from the internet. In this way, Secure Web Proxy acts as an
intermediary, establishing new TCP connections for the client and ensuring that
every connection meets the requirements of the administered security policy. For
more information about how to deploy the explicit proxy routing mode, see
Create and deploy a Secure Web Proxy instance .
The following diagram shows the role of Secure Web Proxy as a centralized,
mandatory gateway for traffic flowing out of the Google Cloud environment:
Deploy Secure Web Proxy in the explicit proxy routing mode (click to enlarge).
Private Service Connect service attachment mode
With this mode, you can centralize your web proxy deployments across a complex,
multi-Virtual Private Cloud (VPC) architecture. To centralize your
Secure Web Proxy deployment when there are multiple networks, use
Network Connectivity Center .
When you try to scale your deployment with Network Connectivity Center, there are some
limits .
By deploying Secure Web Proxy as a
Private Service Connect service attachment, you can resolve those
scaling-related limitations.
As shown in the following diagram, this deployment mode creates a hub-and-spoke
pattern. In this deployment, Secure Web Proxy (the hub) manages the outbound
traffic for workloads in all connected VPC networks (the spokes).
For more information, see
Deploy Secure Web Proxy as a service attachment .
Deploy Secure Web Proxy as a Private Service Connect service attachment (click to enlarge).
Next hop mode
In this mode, you can configure your Secure Web Proxy deployment to act as a
next hop for the routing in your network. In other words, you can configure your
network routing to automatically send outbound traffic to your Secure Web Proxy
instance. This deployment method reduces your organization's administrative
overhead because you don't have to manually configure each source workload or
client to use the proxy.
For more information, see
Deploy Secure Web Proxy as next hop .
Limitations
IP versions : Secure Web Proxy supports only IPv4, IPv6 isn't supported.
HTTP versions : Secure Web Proxy supports HTTP/0.9, 1.0, 1.1, and 2.0
versions. HTTP/3 isn't supported.
Deployment scope : Secure Web Proxy instances can be deployed only in a
host project, not in a service project.
Additional Google Cloud tools to consider
You can integrate Secure Web Proxy with the following Google Cloud tools
to enhance the overall security posture of your workloads and applications:
Use Google Cloud Armor to protect
Google Cloud deployments from multiple threats, including
distributed denial-of-service (DDoS) attacks and application attacks such as
cross-site scripting (XSS) and SQL injection (SQLi).
Specify VPC firewall rules to secure connections
either to or from your VM instances.
Implement VPC Service Controls to
prevent data exfiltration from Google Cloud services, such as
Cloud Storage and BigQuery.
Use Cloud NAT to enable unsecured outbound internet
connectivity for certain Google Cloud resources without an external IP
address.
What's next
Policies and rules
Roles and permissions
Initial setup steps
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
