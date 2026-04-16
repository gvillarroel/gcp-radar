---
title: "Product overview \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/armor/docs/cloud-armor-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/armor/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/armor/docs/cloud-armor-overview
  title: "Product overview \_|\_ Google Cloud Armor \_|\_ Google Cloud Documentation"
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
Product overview
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Armor helps you protect your Google Cloud deployments from
multiple types of threats, including distributed denial-of-service (DDoS)
attacks and application attacks like cross-site scripting (XSS) and SQL
injection (SQLi). Cloud Armor features
some automatic protections and some that you need to configure manually.
This document provides a high-level overview of these features, several of which
are only available for global external Application Load Balancers and classic Application Load Balancers.
Security policies
Use Cloud Armor security policies to protect applications running
behind a load balancer from distributed denial-of-service (DDoS) and other
web-based attacks, whether the applications are deployed on Google Cloud, in a
hybrid deployment, or in a multi-cloud architecture.
Security policies can be configured manually, with configurable match conditions
and actions in a security policy. Cloud Armor also features
preconfigured security policies, which cover a variety of use cases. For more
information, see
Cloud Armor security policy overview .
Rules language
Cloud Armor lets you define prioritized rules with configurable
match conditions and actions in a security policy. A rule takes effect, meaning
that the configured action is applied, if the rule is the highest priority rule
whose attributes match the attributes of the incoming request.
For more information, see
Cloud Armor custom rules language reference .
Preconfigured WAF rules
Cloud Armor preconfigured WAF rules are complex web application firewall (WAF)
rules with dozens of signatures that are compiled from open source industry
standards. Each signature corresponds to an attack detection
rule in the rule set. These rules are offered as-is. The rules allow
Cloud Armor to evaluate dozens of distinct traffic signatures by
referring to conveniently named rules, rather than requiring you to define
each signature manually.
Cloud Armor preconfigured rules help protect your web applications
and services from common attacks from the internet and help mitigate the
OWASP Top 10 risks .
The rule source is OWASP Core Rule Set 4.22 .
These preconfigured rules can be tuned to disable noisy or otherwise unnecessary
signatures. For more information, see
Tuning Cloud Armor WAF rules .
Note: XML body parsing is not supported by Cloud Armor preconfigured WAF rule.
Google Cloud Armor Enterprise
Cloud Armor Enterprise is the managed application protection service that helps
protect your web applications and services from distributed denial-of-service
(DDoS) attacks and other threats from the internet. Cloud Armor Enterprise
features always-on protections for your load balancer, and gives you access to
WAF rules.
DDoS protection is automatically provided for global external Application Load Balancers,
classic Application Load Balancers, and external proxy Network Load Balancers, regardless of
tier. The HTTP, HTTPS, HTTP/2, and QUIC protocols are all supported. In addition,
Cloud Armor Enterprise subscribers can
Access DDoS attack visibility telemetry .
For more information, see
Cloud Armor Enterprise overview .
Google Threat Intelligence
Cloud Armor Google Threat Intelligence lets you secure your
traffic by allowing or blocking traffic to your global external Application Load Balancers and
classic Application Load Balancers based on several categories of threat intelligence data.
For more information about Google Threat Intelligence, see
Apply Google Threat Intelligence .
Google Cloud Armor Adaptive Protection
Adaptive Protection helps you protect your applications and services from L7
distributed denial-of-service (DDoS) attacks by analyzing patterns of traffic to
your backend services, detecting and alerting on suspected attacks, and
generating suggested WAF rules to mitigate such attacks. These rules can be
tuned to meet your needs. Adaptive Protection can be enabled on a per-
security policy basis, but it requires an active Cloud Armor Enterprise
subscription in the project.
For more information, see
Google Cloud Armor Adaptive Protection overview .
Advanced network DDoS protection
Advanced network DDoS protection provides additional protections for
Managed Protection Plus subscribers who use network load balancers,
protocol forwarding, or VMs with public IP addresses. Advanced network DDoS protection
provides always-on attack monitoring and alerting, targeted attack mitigations,
and mitigation telemetry. For more information, see
Configure advanced network DDoS protection .
How Cloud Armor works
Cloud Armor provides always-on DDoS protection against network or
protocol-based volumetric DDoS attacks. This protection is for applications or
services behind load balancers. It is able to detect and mitigate
network attacks in order to allow only well-formed requests through the load
balancing proxies. The security policies enforce custom Layer 7
filtering policies, including pre-configured WAF rules that mitigate OWASP top
10 web application vulnerability risks. You can attach security policies to the
backend services of the following load balancers:
All external Application Load Balancers, including classic Application Load Balancers
Regional internal Application Load Balancer
Global external proxy Network Load Balancer (TCP/SSL)
Classic proxy Network Load Balancer (TCP/SSL)
External passthrough Network Load Balancer (TCP/UDP)
Cloud Armor security policies enable you to allow or deny access to
your deployment at the Google Cloud edge, as close as possible to
the source of incoming traffic. This prevents unwelcome traffic from consuming
resources or entering your Virtual Private Cloud (VPC) networks.
The following diagram illustrates the location of the global external Application Load Balancers,
classic Application Load Balancers, the Google network, and Google data centers.
Cloud Armor policy at network edge (click to
enlarge)
You can use some or all of these features to protect your application. You can
use security policies to match against known conditions, create WAF rules to
protect against common attacks like those found in the OWASP Core Rule
Set 4.22 ,
and use Google Cloud Armor Enterprise's built-in protections against DDoS attacks.
What's next
Examine common use cases for Cloud Armor
Learn about Google Cloud Armor Enterprise
Learn about Google Cloud Armor Adaptive Protection
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
