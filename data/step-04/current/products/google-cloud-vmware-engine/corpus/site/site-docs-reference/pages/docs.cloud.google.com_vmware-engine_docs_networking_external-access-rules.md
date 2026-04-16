---
title: "Manage external access rules \_|\_ Google Cloud VMware Engine \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/vmware-engine/docs/networking/external-access-rules
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vmware-engine/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/vmware-engine/docs/networking/external-access-rules
  title: "Manage external access rules \_|\_ Google Cloud VMware Engine \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
VMware Engine
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Manage external access rules
Google Cloud VMware Engine uses firewall rules to control access to external IP
addresses. For all other access controls, manage firewall settings in NSX Data
Center. For details, see
Firewall rule in Manager Mode .
Note: Firewalls created in NSX aren't visible in Google Cloud VMware Engine.
Before you begin
In the network policy that applies to your private
cloud, enable the internet access service and the external IP address service.
Allocate an External IP .
Create an external access rule
To create an external access rule using the Google Cloud console, Google Cloud CLI or
VMware Engine API, do the following:
Console
To create an external access rule using the Google Cloud console, do the
following:
In the Google Cloud console, go to the External access rules
page.
Go to External access rules
Click Create .
Enter details for the new firewall rule; review properties of the firewall rule for more info.
Click Create to add the new firewall rule to the list of firewall
rules in your project.
gcloud
Create an external access rule using the Google Cloud CLI by entering the
gcloud vmware network-policies create command :
gcloud vmware network-policies external-access-rules create RULE_NAME \
--location= REGION \
--network-policy= NETWORK_POLICY_NAME \
--priority=1000 \
--ip-protocol=TCP \
--destination-ranges=0.0.0.0/0 \
--source-ports=22,10000-11000 \
--destination-ports=22 \
--action= ACTION
Replace the following:
RULE_NAME : the name for this rule
REGION : the region for this request
NETWORK_POLICY_NAME : the network policy for
this request
ACTION : the action to take, such as ACCESS or
DENY .
API
To create an external access rule using the VMware Engine API, make a
POST request:
POST "https://vmwareengine.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /networkPolicies/ NETWORK_POLICY_NAME -network-policy/externalAccessRules?external_access_rule_id= RULE_NAME "
'{
"priority": 1000,
"action": " ACTION ",
"ip_protocol": "tcp",
"destination_ip_ranges": [{"ip_address_range": "0.0.0.0/0"}],
"destination_ports": ["22"],
"source_ip_ranges": [{"ip_address_range": "34.148.30.114/32"}],
"source_ports": ["22", "10000-11000"]
}'
Replace the following:
PROJECT_ID : the project for this request
REGION : the region for this request
NETWORK_POLICY_NAME : the network policy for
this request
RULE_NAME : the name for this rule
ACTION : the action to take, such as ACCESS or
DENY .
List external access rules
To list external access rules using the Google Cloud console, Google Cloud CLI or
VMware Engine API, do the following:
Console
To list external access rules using the Google Cloud console, do the following:
In the Google Cloud console, go to the External access rules
page.
Go to External access rules
The Summary page contains a table with all external access rules
listed. Any changes to attributes are described on this summary page.
gcloud
To list external access rules using the Google Cloud CLI, use the gcloud vmware network-policies external-access-rules list command :
gcloud vmware network-policies external-access-rules list \
--network-policy= NETWORK_POLICY_NAME \
--location= REGION
Replace the following:
NETWORK_POLICY_NAME : the network policy for
this request
REGION : the region for this request.
API
To list external access rules using the VMware Engine API, make a GET
request:
GET "https://vmwareengine.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /networkPolicies/ NETWORK_POLICY_NAME /externalAccessRules"
Replace the following:
PROJECT_ID : the ID for this project
REGION : the region for this request
NETWORK_POLICY_NAME : the network policy for
this request
Edit external access rules
To edit external access rules using the Google Cloud console, Google Cloud CLI or
VMware Engine API, do the following:
Console
To edit an external access rule using the Google Cloud console, do the
following:
In the Google Cloud console, go to the External access rules
page.
Go to External access rules
Click the More more_vert
icon at the end of a row and select Edit .
gcloud
To edit an external access rule using the Google Cloud CLI, use the gcloud vmware network-policies update command :
gcloud vmware network-policies external-access-rules update RULE_NAME \
--network-policy= NETWORK_POLICY_NAME \
--location= REGION \
--action= ACTION \
--ip-protocol UDP \
--priority 999
Replace the following:
RULE_NAME : the name for this rule
NETWORK_POLICY_NAME : the network policy for
this request
REGION : the region for this request
API
To edit an external access rule using the VMware Engine API, make a
PATCH request:
PATCH "https://vmwareengine.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /networkPolicies/ NETWORK_POLICY_NAME /externalAccessRules/ RULE_NAME ?update_mask=action,ip_protocol,priority"
'{
"action": " ACTION ",
"ip_protocol": "udp",
"priority": 999
}'
Replace the following:
PROJECT_ID : the ID for this project
REGION : the region for this request
NETWORK_POLICY_NAME : the network policy for
this request
RULE_NAME : the name for this rule
ACTION : the action to take, such as ACCESS or
DENY .
Delete external access rules
To delete an external access rule using the Google Cloud console, Google Cloud CLI or
VMware Engine API, do the following:
Console
To delete an external access rule using the Google Cloud console, do the
following:
In the Google Cloud console, go to the External access rules
page.
Go to External access rules
Click the Delete delete
icon at the end of a row and select Delete .
gcloud
To delete an external access rule using the Google Cloud CLI, use˜ the
gcloud vmware network-policies external-access-rules delete command :
gcloud vmware network-policies external-access-rules delete RULE_NAME \
--network-policy= NETWORK_POLICY_NAME \
--location= REGION
Replace the following:
RULE_NAME : the name for this rule
NETWORK_POLICY_NAME : the network policy for
this request
REGION : the region for this request
API
To delete an external access rule using the VMware Engine API, make a
DELETE request:
DELETE "https://vmwareengine.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /networkPolicies/ NETWORK_POLICY_NAME /externalAccessRules/ RULE_NAME "
Replace the following:
PROJECT_ID : the ID for this project
REGION : the region for this request
NETWORK_POLICY_NAME : the network policy for
this request
RULE_NAME : the name for this rule
Firewall rule properties
Firewall rules have the following properties:
Rule name
A name that uniquely identifies the firewall rule and its purpose.
Network policy
The network policy to associate the firewall rule with. The
firewall rule applies to traffic to or from VMware Engine
networks that use this network policy.
Description
A description for this network policy.
Priority
A number between 100 and 4096, with 100 being the highest priority.
Rules are processed from highest to lowest priority. When traffic encounters
a rule match, rule processing stops. Rules with lower priorities that have
the same attributes as rules with higher priorities aren't processed.
Priority does not need to be unique.
Action on match
Whether the firewall rule allows or denies traffic based on a
successful rule match.
Protocol
The internet protocol covered by the firewall rule.
Source IPs
Traffic source IP addresses for the firewall rule to match against.
Values can be IP addresses or classless inter-domain routing (CIDR) blocks
(10.0.0.0/24, for example).
Source port
Traffic source port for the firewall rule to match against. Values
can be individual ports or a range of ports, such as 443 or 8000-8080.
Destination IPs
Traffic destination IP addresses for the firewall rule to
match against. Values can be IP addresses or all External IP addresses that
have been allocated.
Destination port
Traffic destination port for the firewall rule to match
against. Values can be individual ports or a range of ports, such as 443 or
8000-8080. Specifying a range lets you create fewer security rules.
Note: The maximum number of ports in a single rule is 15. Port range counts as
two ports in the limit of 15.
What's next
Manage your private cloud resources and activity .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
