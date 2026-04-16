---
title: "DNS setup quickstart \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/dns-quickstart
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/locations
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/hybrid/v1.11/dns-quickstart
  title: "DNS setup quickstart \_|\_ Apigee \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Guides
Send feedback
DNS setup quickstart
Stay organized with collections
Save and categorize content based on your preferences.
You are currently viewing version 1.11 of the
Apigee hybrid documentation. This version is end of life. You should upgrade to a
newer version. For more information, see
Supported versions .
Version 1.11 keyboard_arrow_down
Supported versions:
v1.16 (latest)
v1.15
v1.14
List of supported versions
Unsupported versions:
v1.13
v1.12
v1.11
v1.10
v1.9
v1.8
v1.7
v1.6
v1.5
v1.4
v1.3
v1.2
v1.1
This topic offers an example showing how to use Google Cloud DNS to configure
a DNS zone with a record set that points to your Apigee hybrid ingress IP address.
Note: If you already have your own domain and DNS zone
to use, you do not need to do these steps. You can simply configure your own zone with
a new record set pointing to your ingress load balancer.
Create a managed zone and record set
This section explains how to create a DNS zone and record set in Google Cloud DNS.
Create a managed zone and record set for your domain. This is the address you will use
to make API proxy calls to hybrid.
Create a managed public zone. For instructions, see
Create a managed public zone .
Create a new record set with the following selections. For instructions, see
Create a new record .
DNS Name : The name of the endpoint external API calls communicate with, like
api-services or example-endpoint
Resource Record Type : A
TTL and TTL Unit : Accept defaults
IP Address : The static IP you created
In the Zone details view, copy the DNS name of the A record
you just created and save it to a DOMAIN environment variable. Be
careful to not include the period at the end.
export DOMAIN= dns_name_of_record
Add your DNS servers to Cloud DNS
In this step, you copy the DNS servers from your domain to Google Cloud DNS .
Doing so allows Google Cloud to manage the DNS for your Google Cloud Project.
The Zone details view lists four DNS servers as the NS data for your new
zone. Copy the DNS record data as shown in the following example:
Configure your domain to use the Google Cloud name servers
Go to your domain registrar and edit your domain's DNS settings to use the Google Cloud Name servers.
The following screenshot shows an example of entering the Google Cloud name servers in Google Domains :
Google Cloud DNS now manages the DNS records for your domain.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
