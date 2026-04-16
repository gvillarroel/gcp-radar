---
title: "Authorization policy overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/load-balancing/docs
source_metadata:
  url: https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview
  title: "Authorization policy overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Load Balancing
Guides
Send feedback
Authorization policy overview
Stay organized with collections
Save and categorize content based on your preferences.
An authorization policy ( AuthzPolicy ) applied on the forwarding rule of Application Load Balancers defines rules specifying the source of
incoming traffic and the operations permitted or restricted for that source.
Additionally, the authorization policy outlines the conditions under which a
rule applies and specifies an action to either allow, deny, or further evaluate
the traffic.
Authorization policies let you establish access control checks for incoming
traffic to Application Load Balancers. Requests that pass these checks are routed
to backend services. Requests that fail these checks are terminated with an
unauthorized response.
Authorization policies can be configured on the forwarding rule of all
Application Load Balancers with a load balancing scheme of EXTERNAL_MANAGED or
INTERNAL_MANAGED .
The following Application Load Balancers support authorization policies:
Global external Application Load Balancers
Regional external Application Load Balancers
Regional internal Application Load Balancers
Cross-region internal Application Load Balancers
In Application Load Balancers, authorization policies are invoked after
evaluating route extensions, network security policies (evaluated by
Google Cloud Armor), cross-origin resource sharing (CORS) policies and
Identity-Aware Proxy (IAP) policies, but before executing traffic management
actions.
To learn more about when authorization policies are invoked in the
request processing path, see Extensibility points in the load balancing data
path .
If you want to use authorization policies for services deployed with
Cloud Service Mesh, see Set up service security with
Envoy .
Authorization policy rules
An authorization policy consists of a list of HTTP rules to match against the
incoming request.
For an authorization policy with an ALLOW or DENY action, an HTTP rule
( AuthzRule ) defines the conditions that determine whether traffic is allowed
to pass through the load balancer. At least one HTTP rule is required.
For an authorization policy with a CUSTOM action, an HTTP rule ( AuthzRule )
defines the conditions that determine whether traffic is delegated to the custom
provider for authorization. A custom provider is required while HTTP rules are
optional.
A policy match occurs when at least one HTTP rule matches the request or when no
HTTP rules are defined in the policy.
An authorization policy HTTP rule consists of the following fields:
from : specifies the identity of the client that is allowed by the rule.
The identity can be derived from a client certificate in a mutual TLS
connection, or it can be the ambient identity associated with the client
virtual machine (VM) instance, such as from a service account or a secure tag.
to : specifies the operations allowed by the rule, such as the URLs that
can be accessed or the HTTP methods allowed.
when : specifies additional constraints that must be met. You can use
Common Expression Language
(CEL) expressions
to define the constraints.
Authorization policy actions
When evaluating a request, an authorization policy specifies the action
( AuthzAction ) to be applied on the request. An authorization policy needs to
have at least one action, which can be one of the following:
ALLOW : allows the request to pass through to the backend if the request
matches any of the rules specified within an ALLOW policy. If ALLOW
policies exist, but there is no match, the request is denied. In other
words, the request is denied if none of the configured
authorization policies with an ALLOW action match the request. In
Cloud Logging, this action is logged as
denied_as_no_allow_policies_matched_request .
For an ALLOW action to be applied, you need at least one HTTP rule.
DENY : denies the request if the request matches any of the rules specified
within a DENY policy. If DENY policies exist, but there is no match, the
request is allowed. In other words, the request is allowed if none of the
configured authorization policies with a DENY action match the request. In
Cloud Logging, this action is logged as
allowed_as_no_deny_policies_matched_request .
For a DENY action to be applied, you need at least one HTTP rule.
CUSTOM : delegates the authorization decision to a custom authorization
provider, such as IAP or service extensions. To learn more,
see Use authorization policies to delegate authorization decisions .
Note: You can define only one authorization policy with the CUSTOM action
for a given forwarding rule or gateway.
If there are HTTP rules configured for a CUSTOM policy, the request needs
to match the HTTP rules to invoke the custom provider. However, if no HTTP
rules are defined, then the authorization policy always delegates the
authorization decision to a custom authorization provider. To learn more,
see the following example where no HTTP rules are defined and the
authorization policy delegates the authorization decision to an
IAP:
Create the authorization policy and enable
IAP
Authorization policy evaluation order
An authorization policy supports CUSTOM , DENY , and ALLOW policies for
access control. When multiple authorization policies are associated with a
single resource, the CUSTOM policy is evaluated first, then the DENY policy,
and finally the ALLOW policy. The evaluation is determined by the following
rules:
If there is a CUSTOM policy that matches the request, the CUSTOM policy
is evaluated using the custom authorization providers and the request is
denied if the provider rejects the request. DENY or ALLOW policies
aren't evaluated, even if any are configured.
If there are any DENY policies that match the request, the request is
denied. Any ALLOW policies aren't evaluated, even if they are configured.
If no ALLOW policies exist, the request is allowed.
If any of the ALLOW policies match the request, allow the request.
If ALLOW policies exist, but there is no match, the request is denied. In
other words, the request is denied by default if none of the configured
AuthzPolicies with ALLOW action match the request.
Use authorization policies to delegate authorization decisions
For complex authorization decisions that can't be expressed using the
authorization policy, delegate the authorization decision to custom
authorization providers, such as Identity-Aware Proxy (IAP), or create your own
authorization extension built using
Service Extensions .
This is useful when you want to use your on-premises authorization engine or
third-party identity providers through IAP.
IAP: configure IAP to control access to
applications behind Application Load Balancer forwarding rules.
IAP verifies user identity and context to determine access.
It can also authenticate Identity and Access Management (IAM) service account tokens
and evaluate IAM policies, protecting access to backend
buckets exposed from the Application Load Balancer. For more information, see
Delegate authorization to IAP and
IAM .
You might choose to delegate authentication to IAP and
IAM in the following scenarios:
Use IAM for permission management.
Implement Context-Aware Access.
Use browser-based authentication for web applications that require
interactive authentication.
Service Extensions: delegate authorization decisions to your
custom authorization engine running on Google Cloud VM instances or
on-premises. This provides flexibility for complex authorization policies
that aren't covered by built-in policies. For more information, see
Configure an authorization extension .
Authorization policy based on principals
Note: Authorization policy based on principals is not supported on
global external Application Load Balancers.
To identify the source of traffic with high granularity, you can configure
authorization policies based on identities derived from a client's certificate.
This method requires frontend mTLS to be enabled on
the load balancer and uses the following certificate attributes as a principal
selector for identification:
Client certificate URI SANs ( CLIENT_CERT_URI_SAN )
Client certificate DNS Name SANs ( CLIENT_CERT_DNS_NAME_SAN )
Client certificate Common Name ( CLIENT_CERT_COMMON_NAME )
If no principal selector is specified for identification, CLIENT_CERT_URI_SAN
is used as the default principal selector. This means that the client
certificate's URI SANs are evaluated when making authorization decisions.
For principal-based authorization to work, the following conditions must apply:
Frontend mTLS must be enabled . If frontend mTLS isn't enabled,
the client doesn't present a certificate. As a result,
any principal-based rules in the authorization policy find no
certificate information to evaluate.
For example, a rule checking CLIENT_CERT_URI_SAN sees an empty value.
There must be a valid client certificate . Even with mTLS enabled, a
client certificate isn't used for authorization if the connection was
established with a missing or an invalid certificate. This scenario occurs
when the mTLS client validation mode is set to the permissive mode
ALLOW_INVALID_OR_MISSING_CLIENT_CERT .
In this case as well,
any principal-based rules in the authorization policy find no
certificate information to evaluate.
For example, a rule checking CLIENT_CERT_URI_SAN sees an empty value.
Impact of attribute size limits
Authorization decisions are sensitive to the size of client certificate
attributes. A request is rejected if an attribute exceeds its size limit and
the policy is configured to validate that specific attribute.
A rejection can occur under the following conditions:
The policy validates against CLIENT_CERT_URI_SAN , and the certificate's URI
SANs exceed the size limit.
The policy validates against CLIENT_CERT_DNS_NAME_SAN , and the certificate's
DNS Name SANs exceed the size limit.
The policy validates against CLIENT_CERT_COMMON_NAME , and the certificate's
Subject (which contains the Common Name) exceeds the size limit.
If a certificate's attribute exceeds its size limit but is not explicitly
validated by the policy's principal selector, the request is still evaluated
against the configured principal rules. For example, if a policy is configured
to validate only the CLIENT_CERT_DNS_NAME_SAN , a request from a client with
oversized URI SANs is not rejected for that reason. The policy proceeds to
evaluate the request based on its DNS Name SANs.
To see an example of an authorization policy based on principals,
see Authorization policy to deny requests .
Authorization policy based on service accounts or tags
You can use attributes such as service accounts or tags to identify the source of traffic
for internal Application Load Balancers.
For internal Application Load Balancers, you can apply authorization policies based on service
accounts or tags attached to Google Cloud resources. Any traffic
originating from these Google Cloud resources that are linked to a
specific service account or tag can be either allowed, denied, or delegated
to an external service.
Note: Applying authorization policies based on service accounts or tags
isn't supported for external Application Load Balancers.
The following table lists the source resources that support the use of
service accounts and tags.
Source
Service account support
Tag support
VM
GKE node
GKE container
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
3
3
Network Load Balancer
3
3
1 Not supported by Google Cloud.
2 Source IP address is unique and can be used instead.
3 Service accounts and tags aren't supported when
Application Load Balancers and Network Load Balancers
serve as sources of traffic in a tiered architecture.
The following table lists the different
Virtual Private Cloud (VPC) architectures that support the use of
service accounts and tags.
VPC
VPC architecture
Support
Within VPC
Cross project (Shared VPC)
Within VPC
Cross region
Cross VPC
Cross peering link (peer VPC)
Cross VPC
Cross Private Service Connect
Cross VPC
Cross Network Connectivity Center spokes
To learn more about setting up an authorization policy that is based on service
accounts and tags attached to a Google Cloud VM resource, see
Authorization policy based on service accounts or
tags .
Quotas
For information about quotas for authorization policies, see quotas and
limits for authorization policies .
Pricing
For pricing information, see Pricing .
What's next
Set up authorization policies for
Application Load Balancers
Delegate authorization to IAP and
IAM
Configure an authorization extension
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
