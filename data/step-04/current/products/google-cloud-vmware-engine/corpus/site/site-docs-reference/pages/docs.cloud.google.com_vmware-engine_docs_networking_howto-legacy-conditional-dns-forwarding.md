---
title: "(Legacy networks) Create DNS forwarding rules \_|\_ Google Cloud VMware Engine\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vmware-engine/docs/networking/howto-legacy-conditional-dns-forwarding
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vmware-engine/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/vmware-engine/docs/networking/howto-legacy-conditional-dns-forwarding
  title: "(Legacy networks) Create DNS forwarding rules \_|\_ Google Cloud VMware\
    \ Engine \_|\_ Google Cloud Documentation"
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
(Legacy networks) Create DNS forwarding rules
Caution: You can only use conditional DNS forwarding rules for private clouds
attached to Legacy VMware Engine networks. To configure DNS
resolution for management appliances in private clouds attached to
Standard VMware Engine networks, see
Configure DNS Bindings .
Your private cloud's DNS forwarding rules determines how Google Cloud VMware Engine forwards DNS
requests from management appliances to the DNS servers of your on-premises
services.
You can configure multiple conditional DNS forwarding rules each with one or
more DNS servers associated with the domains.
Here are some example processes that require conditional DNS forwarding rules:
Forwarding syslog messages from your private cloud vCenter to your syslog
collection server by server name.
Using an on-premises Active Directory deployment as an identity source
for your private cloud.
Using VMware Site Recovery Manager (SRM) for disaster recovery .
Using Zerto Virtual Replication for disaster recovery .
Before you begin
The steps in this document assume that you have done the following:
Establish a connection between your private cloud and on-premises networks
Make your on-premises DNS server accessible to your private cloud network
Create DNS forwarding rules
To create DNS forwarding rules in your project, use one of the following
methods.
Console
To create a DNS forwarding rule for a private cloud by using the
Google Cloud console, complete the following steps:
In the Google Cloud console, go to the Private clouds page.
Go to Private clouds
Click Select a project and then select the organization, folder, or project
where you want to create the DNS forwarding rule.
Select the private cloud to create a rule for.
On the private clouds summary page, click DNS .
Click Add rule .
Specify the domain you want to forward for and specify one or more IPv4
addresses that can resolve the domain, provided as a comma-separated
list.
gcloud
To create a DNS forwarding rule for a private cloud, use the
gcloud vmware private-clouds dns-forwarding update command . You can specify multiple rules by using multiple --rule
flags for each request.
gcloud vmware private-clouds dns-forwarding update \
--project= PROJECT_ID \
--location= ZONE \
--private-cloud= PRIVATE_CLOUD_NAME \
--rule=domain= DOMAIN ,name-servers= DNS_SERVER_IP1,DNS_SERVER_IP2,.... \
--rule=domain= DOMAIN ,name-servers= DNS_SERVER_IP1,DNS_SERVER_IP2,....
Replace the following:
PROJECT_ID : the ID for your project where the
private cloud is located
ZONE : the zone for the private cloud
PRIVATE_CLOUD_NAME : the name of the private cloud
DOMAIN : the domain to be forwarded
DNS_SERVER_IP1,DNS_SERVER_IP2,.... : a
comma-separated list of IPv4 addresses for the authoritative DNS server
API
Create a POST request. You can add one or more rules to each request.
curl -X POST -H "Authorization: Bearer
TOKEN
" -H "Content-Type: application/json; charset=utf-8"
https://vmwareengine.googleapis.com/v1/projects/ PROJECT_ID /locations/ ZONE /privateClouds/ PRIVATE_CLOUD_NAME /dnsForwarding -d '{"forwardingRules": [
{
"domain": " DOMAIN ",
"nameServers": [
" DNS_SERVER_IP1 ",
" DNS_SERVER_IP2 "
]
},
{
"domain": " DOMAIN ",
"nameServers": [
" DNS_SERVER_IP1 ",
" DNS_SERVER_IP2 "
]
}
]}
Replace the following:
PROJECT_ID : the ID for your project where the
private cloud is located
ZONE : the zone for the private cloud
PRIVATE_CLOUD_NAME : the name of the private cloud
DOMAIN : the domain to be forwarded
DNS_SERVER_IP1,DNS_SERVER_IP2,.... : a
comma-separated list of IPv4 addresses for the authoritative DNS server
Describe DNS forwarding rules
To describe DNS forwarding rules in your project, use one of the following
methods.
Console
To describe a DNS forwarding rule for a private cloud by using the
Google Cloud console, complete the following steps:
In the Google Cloud console, go to the Private clouds page.
Go to Private clouds
Click Select a project and then select the organization, folder, or project that contains the private cloud you want to DNS forwarding rules for.
Select the private cloud to create a rule for.
On the private clouds summary page, click DNS .
gcloud
To create a DNS forwarding rule for a private cloud, use the
gcloud vmware private-clouds dns-forwarding describe command :
gcloud vmware private-clouds dns-forwarding describe \
--project= PROJECT_ID \
--location= ZONE \
--private-cloud= PRIVATE_CLOUD_NAME
Replace the following:
PROJECT_ID : the ID for your project where the
private cloud is located
ZONE : the zone for the private cloud
PRIVATE_CLOUD_NAME : the name of the private cloud
API
Create a POST request.
POST https://vmwareengine.googleapis.com/v1/projects/ PROJECT_ID /locations/ ZONE /privateClouds/ PRIVATE_CLOUD_ID /dnsForwarding
Replace the following:
PROJECT_ID : the ID for your project where the
private cloud is located
ZONE : the zone for the private cloud
PRIVATE_CLOUD_NAME : the name of the private cloud
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
