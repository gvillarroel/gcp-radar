---
title: "Cloud Armor Enterprise overview \_|\_ Google Cloud Armor \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/armor/docs/armor-enterprise-overview
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/armor/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/armor/docs/armor-enterprise-overview
  title: "Cloud Armor Enterprise overview \_|\_ Google Cloud Armor \_|\_ Google Cloud\
    \ Documentation"
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
Cloud Armor Enterprise overview
Stay organized with collections
Save and categorize content based on your preferences.
Google Cloud Armor Enterprise is the application protection
service that helps protect your web applications and services from distributed
denial-of-service (DDoS) attacks and other threats from the internet.
Cloud Armor Enterprise helps protect applications deployed on Google Cloud,
on-premises, or on other infrastructure providers.
Cloud Armor Standard versus Cloud Armor Enterprise
Note: If you use
cross-project service referencing ,
both the frontend and backend service projects must be under the same billing
account that is associated with the Cloud Armor Enterprise subscription
and enrolled in Cloud Armor Enterprise.
Google Cloud Armor is offered in two service tiers, Standard and
Cloud Armor Enterprise.
Cloud Armor Standard includes the following:
A pay-as-you go pricing model
Always-on protection from volumetric and protocol-based DDoS attacks, with
automated inline mitigations in real time and with no latency impact across
the following infrastructure types:
Global external Application Load Balancer (HTTP/HTTPS)
Classic Application Load Balancer (HTTP/HTTPS)
Regional external Application Load Balancer (HTTP/HTTPS)
External passthrough Network Load Balancer
Global external proxy Network Load Balancer (TCP/SSL)
Cloud CDN
Media CDN
Integration with Cloud CDN and Media CDN
Access to Cloud Armor web application firewall (WAF) rule capabilities,
including preconfigured WAF rules for OWASP Top 10
protection
Cloud Armor Enterprise includes the following:
All the features of Cloud Armor Standard
Choice of pricing models: Cloud Armor Enterprise Annual or Paygo
Bundled Cloud Armor WAF usage, including rules, policy, and requests
Third-party named IP address lists
Google Threat Intelligence for Cloud Armor
Adaptive Protection for
Layer 7 endpoints
Advanced network DDoS protection for pass-through
endpoints—external passthrough Network Load Balancers, protocol forwarding, and public
IP addresses for virtual machine (VM) instances
Access to DDoS attack visibility
Hierarchical security policies
(Cloud Armor Enterprise Annual only): Access to DDoS bill protection
and DDoS response team services (additional conditions apply, see
Eligibility for DDoS response team )
All Google Cloud projects that include an external Application Load Balancer or an external proxy Network Load Balancer
are automatically enrolled in Cloud Armor
Standard. After subscribing to Cloud Armor Enterprise at the
billing account level, users can choose to enroll individual projects attached
to the billing account in Cloud Armor Enterprise.
The following table summarizes the two service tiers.
Cloud Armor Standard
Cloud Armor Enterprise
Paygo
Annual
Billing method
Pay-as-you-go
Pay-as-you-go
Subscription with 12-month commitment
Pricing
Per policy, per rule, per request (see
Pricing )
$200/month per project
$200/month per protected resource after first 2 resources
$3000/month per billing account
$30/month per protected resource after first 100 resources
DDoS attack protection
External Application Load Balancer
External proxy Network Load Balancer
External Application Load Balancer
External proxy Network Load Balancer
External passthrough Network Load Balancer
Protocol forwarding
Public IP addresses (VMs)
External Application Load Balancer
External proxy Network Load Balancer
External passthrough Network Load Balancer
Protocol forwarding
Public IP addresses (VMs)
Cloud Armor WAF
Per policy, per rule, per request (see
Pricing )
Included with Paygo
Included with Annual
Resource limits
Up to quota limit
Up to quota limit
Up to quota limit
Time commitment
One year
Adaptive Protection
Alerting only
Advanced network DDoS protection
Network edge security policies
Address Group
Google Threat Intelligence
Hierarchical security policies
DDoS attack visibility
DDoS response support
Eligibility requirements
DDoS bill protection
Note: Customers who subscribed to Cloud Armor Enterprise after
September 3, 2024 aren't eligible for DDoS Response Support
until they have successfully completed a DDoS posture review. To schedule your
review,
open a support ticket .
Subscribe to Cloud Armor Enterprise
Subscribing to Cloud Armor Enterprise Annual requires a one-year
(12-month) commitment. Only users with the billing account role and permissions
can subscribe the billing account to Cloud Armor Enterprise Annual.
Alternatively, you can enroll in Cloud Armor Enterprise Paygo with no
commitment.
To use the additional services and capabilities in Cloud Armor Enterprise,
you must first enroll in Cloud Armor Enterprise. You can subscribe to
Cloud Armor Enterprise Annual and enroll individual projects, or you
can enroll a project directly in Cloud Armor Enterprise Paygo.
We recommend that you enroll your projects in
Cloud Armor Enterprise as soon as possible because activation can take
up to one hour. Upgrading from Cloud Armor Standard to Enterprise
typically won't disrupt your application's availability. However, when you make
changes to your security policies you must carefully consider the billing
implications.
Note: If you use
cross-project service referencing ,
both the frontend and backend service projects must be under the same billing
account that is associated with the Cloud Armor Enterprise subscription
and enrolled in Cloud Armor Enterprise.
External Application Load Balancer and external proxy Network Load Balancer
After a project is enrolled in Cloud Armor Enterprise, the forwarding
rules within the project are added to the enrollment. In addition, all backend
services and backend buckets are counted as protected resources and are metered
for the Cloud Armor Enterprise protected resources cost. The backend services
and backend buckets in Cloud Armor Enterprise Annual are aggregated across
all enrolled projects in a billing account, whereas the backend services and
backend buckets in Cloud Armor Enterprise Paygo are aggregated within
the project.
Note: Regional internal Application Load Balancer backends are counted as protected
resources only if a security policy is attached.
External passthrough Network Load Balancer, protocol forwarding, and public IP addresses (VMs)
Cloud Armor offers the following options to protect these endpoints
against DDoS attacks:
Standard network DDoS protection : basic always-on protection for
external passthrough Network Load Balancers, protocol forwarding, or VMs with public IP addresses.
This includes forwarding rule enforcement and automatic rate limiting. This is
covered under Cloud Armor Standard and does not require any
additional subscriptions.
Advanced network DDoS protection : additional protections for
Cloud Armor Enterprise subscribers. Advanced network DDoS protection is
configured on a per-region basis. When enabled for a particular region,
Cloud Armor provides always-on volumetric attack detection and
targeted mitigation for external passthrough Network Load Balancers, protocol forwarding, and VMs with
public IP addresses in that region.
Note: For projects enrolled in Cloud Armor Enterprise, resources—such
as external passthrough Network Load Balancer backend services, target pools, target instances, and VM
instances with public IP addresses—are metered as protected resources only
when advanced network DDoS protection has been enabled for the region in which
the resources are located.
Hierarchical security policies
When you attach a hierarchical security policy, each of the projects that
inherit the hierarchical security policy must be enrolled in
Cloud Armor Enterprise. This includes all of the projects in an
organization or folder with a hierarchical security policy that aren't
explicitly excluded, and all projects with a hierarchical security policy
attached directly to the project.
Projects that are linked to a Cloud Billing account with a
subscription to Cloud Armor Enterprise Annual are automatically
enrolled in Cloud Armor Enterprise Annual if they aren't already
enrolled.
Without a Cloud Armor Enterprise Annual subscription, projects are
automatically enrolled in Cloud Armor Enterprise Paygo when they
inherit a hierarchical security policy. If you subscribe the billing account
to Cloud Armor Enterprise Annual after your project was automatically
enrolled in Cloud Armor Enterprise Paygo, the project isn't
automatically enrolled to Annual. For more information about
Cloud Armor Enterprise Paygo, see
Cloud Armor Standard versus Cloud Armor Enterprise .
If you update a hierarchical security policy to exclude a project after the
project has been automatically enrolled in Cloud Armor Enterprise,
the project isn't automatically unenrolled. To manually unenroll your
project, see
Remove a project from Cloud Armor Enterprise .
You can't remove a project from Cloud Armor Enterprise while it has
any inherited hierarchical security policies.
Auto-enrollment can take up to the next business day to complete. During this
time, your hierarchical security policies are effective and no
Cloud Armor Enterprise costs are incurred. When your project is
enrolled, audit logs are updated to reflect the project's
Cloud Armor Enterprise status. You also see the new project tier in the
Google Cloud console.
Projects are auto-enrolled only when at least one backend service for global
external load balancers uses HTTP, HTTPS, HTTP2, H2C, or GRPC.
For more information about hierarchical security policies, see the
hierarchical security policies overview .
DDoS response support
Note: Customers who subscribed to Cloud Armor Enterprise after
September 3, 2024 aren't eligible for DDoS Response Support
until they have successfully completed a DDoS posture review. To schedule your
review,
open a support ticket .
DDoS Response support provides 24/7 help and potential custom mitigations from
DDoS attacks from the same team that protects all Google services. You can engage
response support during an attack to help mitigate the attack, or you can reach
out proactively to plan for an upcoming high volume or potentially viral event
(one which might attract an unusually high amount of visitors).
Proactive support is available for all Cloud Armor Enterprise
customers, even if they haven't completed a DDoS posture review. Proactive
support lets us apply preconfigured rules that target common DDoS attack types
before the attack reaches Cloud Armor. To engage DDoS response support,
see Get support for a DDoS case .
DDoS posture review
The goal of the DDoS posture review is to improve the efficiency and efficacy
of the DDoS response process. During the review process we learn about your
unique use case and architecture, and verify that your Cloud Armor
security policies are configured according to our
best practices . This helps you increase your
preemptive resilience to DDoS attacks.
The DDoS posture review is provided to customers who subscribe to
Cloud Armor Enterprise Annual and have a
Premium account for Cloud Customer Care.
Eligibility for DDoS response support
The following criteria qualify you to open a case and receive
help from the Cloud Armor DDoS response support team:
Your billing account has an active Cloud Armor Enterprise Annual
subscription.
Your billing account has a Premium account for
Cloud Customer Care.
The Google Cloud project with the workload that is under attack is
enrolled in Cloud Armor Enterprise Annual.
If you use
cross-project service referencing ,
both the frontend and backend service projects must be enrolled in
Cloud Armor Enterprise Annual.
For customers who subscribed to Cloud Armor Enterprise Annual after
September 3, 2024: The project with the workload that is under attack
must have undergone an annual DDoS posture review.
Even when customers don't qualify for support, our Cloud Customer Care team
provides assistance during an attack by helping with rule debugging, behavior
clarification, and specific concerns with existing policies.
To engage DDoS response support, see
Get support for a DDoS case .
DDoS bill protection
Cloud Armor DDoS bill protection requires your project to be enrolled
in Cloud Armor Enterprise Annual. It provides credits for future
Google Cloud usage for some increases in the bills from Cloud Load Balancing,
Cloud Armor, and network internet, inter-region, and
inter-zone outbound data transfer as a result of a verified DDoS attack. If a claim is
recognized and a credit is provided, the credit cannot be used to offset
existing usage; the credit can only apply to future usage. The following table
demonstrates what resources are covered by DDos bill protection:
Endpoint Type
Covered Usage Increase
External Application Load Balancer
External proxy Network Load Balancer
Cloud Armor
Cloud Armor Enterprise data processing fee
Network
Outbound data transfer
Inter-region
Inter-zone
Carrier Peering
Load balancer
Inbound data processing fee
Outbound data processing fee
Cloud CDN
Cloud CDN egress fee
Cache data transfer out
Cache fill
HTTP/HTTPS cache lookup requests
Media CDN
Media CDN egress fee
Cache data transfer out
External passthrough Network Load Balancer
Protocol forwarding
Public IP addresses (VMs)
Cloud Armor
Cloud Armor Enterprise data processing fee
Network
Outbound data transfer
Inter-region
Inter-zone
Carrier Peering
Load balancer
Inbound data processing fee
Outbound data processing fee
To engage DDoS bill protection, see
Engaging DDoS bill protection .
Migrating projects between billing accounts
Beginning September 3, 2024, if you migrate your project from one
billing account to another while subscribed to Cloud Armor Enterprise
Annual, but your new billing account isn't subscribed to
Cloud Armor Enterprise Annual, your project reverts to
Cloud Armor Standard after the migration completes—unless your
project has effective hierarchical security policies, in which case your project is
downgraded to Cloud Armor Enterprise Paygo. Therefore, if you want to
keep your project in Cloud Armor Enterprise Annual without downtime, we
recommend that you subscribe your new billing account to
Cloud Armor Enterprise Annual before you begin the migration process.
You can also migrate your subscription from one billing account to the other by
reaching out to
Cloud Billing support .
Projects enrolled in Cloud Armor Enterprise Paygo are not affected by
billing account migration.
Downgrading from Cloud Armor Enterprise
Note: You can't downgrade from Cloud Armor Enterprise while you have
hierarchical security policies. To delete a hierarchical security policy, see
Delete a hierarchical security policy .
When you
remove a project from Cloud Armor Enterprise ,
any security policies that use rules with Cloud Armor Enterprise-exclusive
features (advanced rules) become frozen. Frozen security policies have the
following properties:
Cloud Armor continues to evaluate traffic against rules in the
policy, including any advanced rules.
You cannot attach the security policy to new targets.
You can only perform the following operations on the security policy:
You can delete security policy rules .
If you don't change the rule priority, you can update advanced rules so
that they no longer use Cloud Armor Enterprise-exclusive features. If
you modify all advanced rules in this way, your policy is no longer frozen.
For more information about updating security policy rules, see
Update a single rule in a security policy .
You can also re-enroll in Cloud Armor Enterprise Annual or
Cloud Armor Enterprise Paygo to restore access to your frozen security
policies.
Advanced network DDoS protection
Advanced network DDoS protection is only available to projects enrolled in
Cloud Armor Enterprise. When you remove a project with an active advanced
network DDoS policy from Cloud Armor Enterprise, you are still billed for
the feature based on
Cloud Armor Enterprise pricing .
We recommend that you delete any advanced network DDoS protection rules before
you unenroll your project from Cloud Armor Enterprise, but you can also
delete advanced network DDoS protection rules after downgrading.
Terms and limitations
Cloud Armor Enterprise has the following terms and limitations:
Generally : If a Project enrolled in Cloud Armor Enterprise experiences a
third-party denial of service attack on a protected endpoint ("Qualified
Attack") and the conditions described in the next section are met, Google
provides a credit equivalent to the Covered Fees, provided that the Covered
Fees incurred exceed the Minimum Threshold. Load tests and security
assessments performed by or on behalf of Customer are not Qualified Attacks.
Conditions : Customer must submit a request to Cloud Billing Support within
30 days after the end of the Qualified Attack. The request must include
evidence of the Qualified Attack, such as logs or other telemetry indicating
the timing of the attack and the Projects and resources that were attacked,
and an estimate of the Covered Fees incurred. Google will reasonably determine
whether credits are due and the appropriate amount. Other conditions for
particular Cloud Armor features are included in the Documentation.
Credits : Any credits provided to Customer in connection with this Section
have no cash value and can only be applied to offset future Fees for the
Services. These credits expire 12 months after being issued or upon
termination or expiration of the Agreement.
Definitions :
Covered Fees : Any Fees incurred by Customer as a direct result of the
Qualified Attack for the following:
Ingress and outbound data processing for the Google Cloud Load
Balancer Service.
Google Cloud Armor Enterprise data processing for the Cloud Armor
Service.
Network egress, including inter-region, inter-zone, internet, and
Carrier Peering egress.
Minimum Threshold : The minimum amount of Covered Fees that are
eligible to be credited under this Section as determined by Google from
time to time and disclosed to Customer on request.
What's next
Subscribe and enroll projects in Cloud Armor Enterprise
Troubleshoot issues
Use the custom rules language reference
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
