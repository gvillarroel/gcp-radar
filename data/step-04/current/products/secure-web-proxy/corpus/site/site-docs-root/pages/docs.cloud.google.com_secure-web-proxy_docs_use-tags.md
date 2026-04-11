---
title: "Use tags to create policies \_|\_ Secure Web Proxy \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secure-web-proxy/docs/use-tags
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/secure-web-proxy/docs
source_metadata:
  url: https://docs.cloud.google.com/secure-web-proxy/docs/use-tags
  title: "Use tags to create policies \_|\_ Secure Web Proxy \_|\_ Google Cloud Documentation"
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
Use tags to create policies
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to attach
Resource Manager tags to
Secure Web Proxy policies. Resource Manager tags are labels that you can attach to
various Google Cloud resources, such as your virtual machine (VM) instances. You
can use tags to enforce conditional access controls across your network with
existing organizational labels.
By using these tags, you can perform the following actions:
Segment workloads : you can uniquely identify different environments like
production or development and service types like frontend or database .
Centralize access control : you can base your Secure Web Proxy policies
on these tags. For example, you can create a policy rule that says: "Only the
traffic that originates from resources that have the tag segment=production
tag can access a specific set of URLs."
This page shows you how to do the following:
Create a Secure Web Proxy instance with an empty policy
Create and attach a Resource Manager tag to a VM instance
Create a Secure Web Proxy rule
Test the connectivity of your entire Secure Web Proxy configuration
Before you begin
Configure the
initial setup steps .
Have an organization administrator grant you the necessary role to create
and update tags .
Verify that you have the Google Cloud CLI version 406.0.0 or later installed:
gcloud version | head -n1
If you have an earlier gcloud CLI version installed, update the version:
gcloud components update --version=406.0.0
Create a Secure Web Proxy instance with an empty policy
To create a Secure Web Proxy instance, you must first create an empty security
policy and then create a web proxy that uses the policy.
Create an empty security policy
Console
In the Google Cloud console, go to the SWP Policies page.
Go to SWP Policies
Click add_box Create a policy .
In the Name field, enter a name for the policy, such as
myswppolicy .
In the Description field, enter a description for the policy, such
as My new swp policy .
For Regions , select the region where you want to create the
policy, such as us-central1 .
Click Create .
Cloud Shell
Use your preferred text editor to create a policy.yaml file.
Add the following to the policy.yaml file that you created:
name : projects/ PROJECT_NAME /locations/ REGION /gatewaySecurityPolicies/ POLICY_NAME
description : POLICY_DESCRIPTION
Replace the following:
PROJECT_NAME : name of your project
REGION : region where your policy is created, such
as us-central1
POLICY_NAME : name of your policy
POLICY_DESCRIPTION : description for your policy
Import the security policy by using the
gcloud network-security gateway-security-policies import command :
gcloud network-security gateway-security-policies import POLICY_NAME \
--source= POLICY_FILE .yaml \
--location= REGION
Create a web proxy
Console
In the Google Cloud console, go to the Web Proxies page.
Go to Web Proxies
Click add_box Create a secure web proxy .
In the Name field, enter a name for the web proxy, such as myswp .
In the Description field, enter a description for the web proxy,
such as My new swp .
For Routing mode , select the Explicit option.
For Regions , select the region where you want to create the
web proxy, such as us-central1 .
For Network , select the network where you want to create the
web proxy.
For Subnetwork , select the
VPC subnet
that you previously created as part of the
initial setup steps .
Optional: In the Web proxy IP address field, enter the
Secure Web Proxy IP address.
You can enter an IP
address from the range of Secure Web Proxy IP addresses that reside in
the subnetwork you created in the previous step.
If you don't enter the IP address, then your Secure Web Proxy instance
automatically chooses an IP address from the selected subnetwork.
For Certificate , select the certificate that you want to use
to create the web proxy.
For Policy , select the policy that you created to associate
the web proxy with.
Click Create .
Cloud Shell
Use your preferred text editor to create a gateway.yaml file.
Add the following to the gateway.yaml file:
name : projects/ PROJECT_NAME /locations/ REGION /gateways/ GATEWAY_NAME
type : SECURE_WEB_GATEWAY
ports : [ GATEWAY_PORT_NUMBERS ]
certificateUrls : [ CERTIFICATE_URLS ]
gatewaySecurityPolicy : projects/ PROJECT_NAME /locations/ REGION /gatewaySecurityPolicies/ POLICY_NAME
network : projects/ PROJECT_NAME /global/networks/ NETWORK_NAME
subnetwork : projects/ PROJECT_NAME /regions/ REGION /subnetworks/ SUBNETWORK
addresses : [ GATEWAY_IP_ADDRESS ]
scope : samplescope
Replace the following:
GATEWAY_NAME : name of this Secure Web Proxy
instance
GATEWAY_PORT_NUMBERS : list of port numbers
for this gateway, such as [80,443]
CERTIFICATE_URLS : list of SSL certificate
URLs
SUBNETWORK : VPC subnet that you previously created as
part of the
initial setup steps
GATEWAY_IP_ADDRESS : optional list of IP
addresses for your Secure Web Proxy instances within the proxy
subnets that you previously created in the
initial setup steps
If you choose not to list IP addresses,
omit the field to let the web proxy choose an IP address for you.
Create the Secure Web Proxy instance by using the
gcloud network-services gateways import command :
gcloud network-services gateways import GATEWAY_NAME \
--source=gateway.yaml \
--location= REGION
Test connectivity
To test connectivity, use the curl command from any virtual machine (VM)
instance within your Virtual Private Cloud (VPC) network:
curl -x https:// GATEWAY_IP_ADDRESS : PORT_NUMBER https://www.example.com --proxy-insecure
If everything is working correctly, then your Secure Web Proxy instance
returns a 403 Forbidden status code. This error confirms the following:
The Secure Web Proxy instance has been successfully deployed and is actively
receiving traffic.
The Secure Web Proxy policy is correctly enforcing the default security
posture of rejecting all traffic until you define specific allow rules in the
next sections.
Create and attach Resource Manager tags
Create secure tag keys and values
Important: When you create your tag, designate it with the GCE_FIREWALL
purpose. Google Cloud networking products, including
Secure Web Proxy, require the GCE_FIREWALL purpose to successfully apply
tags and enforce security policies based on workload identity.
Example : To create a tag for restricted environments, follow these
steps:
Create the tag key ( access-level ) by using the
gcloud resource-manager tags keys create command
with the purpose set to GCE_FIREWALL .
Retrieve the tag key ID either from the output of the creation
command or by using the
gcloud resource-manager tags keys list command .
You need this ID to link tag values to this specific tag key.
Create the tag value ( restricted ) by using the
gcloud resource-manager tags values create command , specifying the tag key ID as the parent.
# Create the tag key
# The output provides a unique ID, such as "tagKeys/1234567890"
gcloud resource-manager tags keys create "access-level" \
--parent="organizations/1234567890" \
--purpose="GCE_FIREWALL" \
--purpose-values="execution_env=ANS"
# Create the tag value and connect it to the key
# The "--parent" flag identifies to which key this value belongs
gcloud resource-manager tags values create "restricted" \
--parent="tagKeys/1234567890"
Attach tags to VM instances
Attaching these tags associates the outbound traffic from your VM instances
with a specific tag identity, which allows the proxy to recognize the
workload and enforce your security policy rules.
Example : Consider that you have a VM instance named internal-tool . You
can attach the restricted tag value to internal-tool by using the
gcloud resource-manager tags bindings create command .
This tag assignment allows your proxy to identify the traffic that
originates from the internal-tool VM instance.
# Attach the "restricted" tag to a specific VM instance
gcloud resource-manager tags bindings create \
--parent="//[compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/internal-tool](https://compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/internal-tool)" \
--tag-value="tagValues/987654321"
Create a Secure Web Proxy rule
Console
In the Google Cloud console, go to the SWP Policies page.
Go to SWP Policies
Click the name of your policy, such as myswppolicy .
Click add_box Add rule .
For each rule, do the following:
For Priority , enter a numeric evaluation order for the rule.
Rules are evaluated from highest to lowest priority, where 0 is the
highest priority.
In the Name field, enter a name for the rule.
In the Description field, enter a description for the rule.
For Action , select one of the following options:
Allow : to allow connection requests that match the rule.
Deny : to deny connection requests that match the rule.
For the Status field, select one of the following options for the
rule enforcement:
Enabled : to enforce the rule on your Secure Web Proxy
instance.
Disabled : to not enforce the rule on your Secure Web Proxy
instance.
In the Session match section, specify the unique ID of the
tag that you created in the previous section. For example:
sessionMatcher : "source.matchTag(' TAG_VALUE ') && host() == 'example.com'"
For more information about the syntax for
SessionMatcher , see CEL matcher language reference .
In the Application match section, specify the criteria for
matching the request.
Click Add rule .
Cloud Shell
Use your preferred text editor to create the rule.yaml file.
To allow access to a URL from the required tag, add the following
to the rule.yaml file:
name : projects/ PROJECT_NAME /locations/ REGION /gatewaySecurityPolicies/ POLICY_NAME /rules/ RULE_NAME
description : RULE_DESCRIPTION
enabled : true
priority : RULE_PRIORITY
sessionMatcher : CEL_EXPRESSION
basicProfile : ALLOW
Replace the following:
RULE_NAME : name of this rule
RULE_DESCRIPTION : description for the rule
RULE_PRIORITY : priority of this rule;
a lower number corresponds to a higher priority
CEL_EXPRESSION : a Common Expression
Language (CEL) expression. For more information, see
CEL matcher language reference .
For example, to allow access to example.com from the
required tag, add the following sessionMatcher line to the YAML file:
sessionMatcher : "source.matchTag(' TAG_VALUE ') && host() == 'example.com'"
Replace TAG_VALUE with the tag that you want to
allow. Make sure that the tag follows the numeric resource
identifier format; for example, tagValues/567890123456 .
Import the rules that you created by using the
gcloud network-security gateway-security-policies rules import command :
gcloud network-security gateway-security-policies rules import RULE_NAME \
--source= RULE_FILE .yaml \
--location= REGION \
--gateway-security-policy= POLICY_NAME
Test the policy configuration
You can test connectivity again to validate that your Secure Web Proxy policy,
which relies on Resource Manager tags for identity, is working as intended.
To test connectivity, use the curl command from any VM that's associated
with the appropriate TAG_VALUE tag.
curl -x https:// IPv4_ADDRESS :443 http://example.com
--proxy-insecure
Replace IPv4_ADDRESS with the IPv4 address of your
Secure Web Proxy instance.
If everything works correctly, then you receive either a 200 OK or a
403 Forbidden status code. These responses confirm the following key outcomes:
Tag-based success : a 200 OK status code validates that the traffic from
a VM with the correct Resource Manager tag attached to it matches the
policy rule and is allowed through the proxy. This verified match results in a
successful connection.
Tag-based denial : a 403 Forbidden status code verifies that the traffic
from a VM either without the specified tag or with an incorrect tag is
correctly denied access by the policy. This enforcement proves that your
tag-based segmentation and enforcement is working as intended.
What's next
Use a URL list to create policies
Use service accounts to create policies
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
