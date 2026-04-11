---
title: "Use URL lists to create policies \_|\_ Secure Web Proxy \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/secure-web-proxy/docs/use-url-list
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/secure-web-proxy/docs
source_metadata:
  url: https://docs.cloud.google.com/secure-web-proxy/docs/use-url-list
  title: "Use URL lists to create policies \_|\_ Secure Web Proxy \_|\_ Google Cloud\
    \ Documentation"
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
Use URL lists to create policies
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to use URL lists to create and manage granular access
policies for your outbound web traffic within your Secure Web Proxy instance.
Instead of creating individual rules for every website, URL lists let you define
a reusable, centralized collection of domains, hostnames, and specific URL
patterns.
Here are a few key benefits of using URL lists:
Simplify policy management : you can apply a large set of allow or deny
rules with a single reference in your security policy.
Enforce precise control : you can use specific syntax to match entire
domains, subdomains, or exact URL paths. This helps ensure that your workloads
can access only authorized destinations.
Secure web access : you can efficiently secure and audit web access across
your Google Cloud environment.
Before you begin
Complete the
initial setup steps .
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
Create and configure a URL list
Console
In the Google Cloud console, go to the URL Lists page.
Go to URL Lists
Click add_box Create a URL list .
The Create URL list page opens.
In the Name field, enter a name for the URL list, such
as example-org-allowed-list .
In the Description field, enter a description for the URL list, such
as My new URL list .
For Regions , select the region where you want to create the URL list,
such as us-central1 .
To add the list of hosts, URLs, or patterns to match, in the URL list
field, either enter the details or click Upload list to upload a
custom list of URLs. For more information, see
UrlList syntax reference .
Click Create .
Cloud Shell
Use your preferred text editor to create the url_list.yaml file.
Add the following to the url_list.yaml file:
name : projects/ PROJECT_ID /locations/ REGION /urlLists/ URL_LIST_NAME
values : URL_LIST
Replace the following:
PROJECT_ID : unique ID of your Google Cloud
project
REGION : region where your URL list is created,
such as us-central1
URL_LIST_NAME : name of the URL list
URL_LIST : list of hosts, URLs, or patterns to
match
For more information, see
UrlList syntax reference .
The following is an example of a URL list rule file:
name : projects/PROJECT_ID/locations/REGION/urlLists/example-org-allowed-list
values :
- www.example.com
- about.example.com
- "*.google.com"
- "github.com/example-org/*"
The asterisk ( * ) character has a special meaning in YAML. You must add
quotation marks around URLs that include an * character.
Import the URL list that you created by using the
gcloud network-security url-lists import command
so that your Secure Web Proxy rule can reference it.
gcloud network-security url-lists import URL_LIST_NAME \
--location= REGION \
--project= PROJECT_ID \
--source=url_list.yaml
Add a Secure Web Proxy rule
Console
In the Google Cloud console, go to the SWP Policies page.
Go to SWP Policies
Click the name of your policy, such as myswppolicy .
Click add_box Add rule .
For each rule, do the following:
For Priority , enter a numeric evaluation order for the rule.
Rules are evaluated from highest to lowest priority, where 0 is the
highest priority.
In the Name field, enter a name for the rule, such as
allow-org-url-list .
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
In the Session Match section, specify the unique name of the URL
list that you created in the previous section. For example:
sessionMatcher: "inUrlList(host(), 'projects/ PROJECT_ID /locations/ REGION /urlLists/ URL_LIST_NAME )"
For more information about the syntax for
SessionMatcher , see
CEL matcher language reference .
In the Application Match section, specify the criteria for
matching the request.
Click Add rule .
Cloud Shell
Use your preferred text editor to create a rule.yaml file.
Add the following to the rule.yaml file:
name : projects/ PROJECT_ID /locations/ REGION /gatewaySecurityPolicies/ POLICY_NAME /rules/ RULE_NAME
basicProfile : ALLOW
enabled : true
priority : RULE_PRIORITY
description : RULE_DESCRIPTION
sessionMatcher : SESSION_CEL_EXPRESSION
applicationMatcher : APPLICATION_CEL_EXPRESSION
Replace the following:
PROJECT_ID : unique ID of your Google Cloud
project
REGION : region that this rule applies to
POLICY_NAME : name of an existing security policy
that your Secure Web Proxy instance uses
RULE_NAME : name of the rule
PRIORITY_VALUE : priority of the rule;
a lower number corresponds to a higher priority
RULE_DESCRIPTION : description for the rule
SESSION_CEL_EXPRESSION : a Common Expression
Language (CEL) expression. For more information, see
CEL matcher language reference .
APPLICATION_CEL_EXPRESSION : a CEL expression for
your application
The following is an example of a rule file:
name : projects/PROJECT_ID/locations/REGION/urlLists/allow-repos
basicProfile : ALLOW
enabled : true
priority : 100
description : Allow access to our list of known code repos.
sessionMatcher : "inUrlList(host(), 'projects/PROJECT_ID/locations/REGION/urlLists/URL_LIST_NAME')"
Import the rule that you created by using the
gcloud network-security gateway-security-policies rules import command .
gcloud network-security gateway-security-policies rules import RULE_NAME \
--location= REGION \
--project= PROJECT_ID \
--source=rule.yaml \
--gateway-security-policy= POLICY_NAME
Test the policy configuration
You can test connectivity again to validate that the URL list-based access rules
are correctly configured and actively enforced by your Secure Web Proxy
instance.
To test connectivity, use the following curl command:
curl -x https:// SWP_IP_ADDRESS : SWP_PORT_NUMBER HTTP_TEST_ADDRESS
--proxy-insecure
Replace the following:
SWP_IP_ADDRESS : IP address of your Secure Web Proxy
instance
SWP_PORT_NUMBER : port number of your web proxy, such as
443
HTTP_TEST_ADDRESS : an address to test, such as
https://www.example.com . It matches a host or URL entry in your
url_list .
If everything works correctly, then you receive a 200 OK response. This
response confirms that the outbound traffic to a URL that's
listed in your URL list and referenced by the security policy rule is
successfully allowed through your Secure Web Proxy instance.
What's next
Use tags to create policies
Use service accounts to create policies
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
