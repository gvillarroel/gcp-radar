---
title: "Get started with Mainframe Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/mainframe-connector/docs/get-started
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/mainframe-connector/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/mainframe-connector/docs/get-started
  title: "Get started with Mainframe Connector \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Mainframe Connector
Guides
Send feedback
Get started with Mainframe Connector
Stay organized with collections
Save and categorize content based on your preferences.
Before you install Mainframe Connector, you must perform the initial
setup, including granting the required roles to your service account, setting
up security for your assets, and setting up network connectivity between your
mainframe and Google Cloud. The following sections describe each task in detail.
Grant service account permissions
Ensure that the following roles are granted to your service account. You can
grant multiple roles to your service account using the Google Cloud console or
grant the roles programmatically .
At the project level, assign the following roles:
Logs Writer
BigQuery Job User
On your Cloud Storage bucket, assign the following roles:
Storage Object Admin
BigQuery Data Editor
BigQuery Read Session User
Set up security for your assets
Ensure that the following permissions required by Java Cryptography Extension Common Cryptographic Architecture (IBMJCECCA) ( Java 8 or Java 17 )
are granted for your mainframe. Transport layer security (TLS) is used on all
requests made from your mainframe to Google Cloud APIs. If these permissions are
not granted, you will see an INSUFFICIENT ACCESS AUTHORITY error
message.
ICSF Query Facility (CSFIQF)
Random Number Generate (CSFRNG)
Random Number Generate Long (CSFRNGL)
PKA Key Import (CSFPKI)
Digital Signature Generate (CSFDSG)
Digital Signature Verify (CSFDSV)
Set up network connectivity
Mainframe Connector interacts with Cloud Storage, BigQuery,
and Cloud Logging APIs. Ensure Cloud Interconnect
and VPC Service Controls (VPC-SC) is
configured to allow access to specific BigQuery, Cloud Storage, and
Cloud Logging resources from specified IP ranges, based on your enterprise
policy. You can also use Pub/Sub, Dataflow, and Managed Service for Apache Spark
APIs for additional integration between IBM z/OS batch jobs and data pipelines
on Google Cloud.
Ensure that your network administration team has access to the following:
IP subnets assigned to the IBM z/OS logical partitions (LPARs)
Google Cloud service accounts used by IBM z/OS batch jobs
Google Cloud project IDs containing resources accessed by IBM z/OS batch jobs
Configure firewalls, routers, and Domain Name Systems
Configure your mainframe IP files to include rules in firewalls, routers, and
Domain Name Systems (DNSs) to allow traffic to and from Google Cloud. You can
install either userid.ETC.IPNODES or userid.HOSTS.LOCAL as
hosts file to resolve the standard Cloud Storage API endpoints as the VPC-SC
endpoint. The sample file userid.TCPIP.DATA is deployed to configure
DNS to use the hosts file entries.
- ETC . IPNODES
- 199.36.153.4 www . googleapis . com
- 199.36.153.5 www . googleapis . com
- 199.36.153.6 www . googleapis . com
- 199.36.153.7 www . googleapis . com
- 199.36.153.4 oauth2 . googleapis . com
- 199.36.153.5 oauth2 . googleapis . com
- 199.36.153.6 oauth2 . googleapis . com
- 199.36.153.7 oauth2 . googleapis . com
- 127.0.0.1 LPAR1 ( based on LPAR configuration )
- 127.0.0.1 LPAR2
- 127.0.0.1 LPAR3
- HOSTS . LOCAL
- HOST : 199.36.153.4 , 199.36.153.5 , 199.36.153.6 , 199.36.153.7 : WWW . GOOGLEAPIS . COM ::::
- HOST : 199.36.153.4 , 199.36.153.5 , 199.36.153.6 , 199.36.153.7 : OAUTH2 . GOOGLEAPIS . COM ::::
- TCPIP . DATA
- LOOKUP LOCAL DNS
Configure your network to enforce VPC-SC
To enforce VPC-SC on your on-premises network, configure it as follows:
Configure the on-premises routers to route IBM z/OS outbound traffic to
destination subnets within the VPC networks and the restricted.googleapis.com
special domain using Cloud Interconnect or a virtual private network (VPN).
Configure the on-premises firewalls to allow outbound traffic to VPC subnets
or VM instances and Google API endpoints - restricted.googleapis.com 199.36.153.4/30 .
Configure the on-premises firewalls to deny all other outbound traffic to
prevent bypass of VPC-SC.
Configure the on-premises firewalls to allow outbound traffic to https://www.google-analytics.com .
What's next
Install Mainframe Connector
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
