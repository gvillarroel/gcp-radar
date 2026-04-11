---
title: "Quickstart: Set up DNS records for a domain name with Cloud DNS \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/dns/docs/set-up-dns-records-domain-name
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dns/docs
source_metadata:
  url: https://docs.cloud.google.com/dns/docs/set-up-dns-records-domain-name
  title: "Quickstart: Set up DNS records for a domain name with Cloud DNS \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud DNS
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Quickstart: Set up DNS records for a domain name with Cloud DNS
This page explains how to set up a Cloud DNS managed zone and a resource
record for your domain name. It guides you through an example of creating a
managed zone and then setting up Address ( A ) and Canonical Name ( CNAME )
records for the domain.
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
For more information, see the following resources:
For Cloud DNS concepts, see the
Cloud DNS overview .
For terminology related to Cloud DNS, see
Key terms .
For Virtual Private Cloud (VPC) network configuration information, see the
VPC overview .
For configuration how-tos and API information, see What's next .
Requirements
This quickstart assumes that you have the following:
A domain name through a domain name registrar. You can register a domain name
by using Cloud Domains or another
domain registrar of your choice. Cloud Domains lets you manage
domains by using the Cloud Domains API.
A Windows Server virtual machine (VM)
instance or a Linux VM
instance .
An IP address to point the A record of your zone to. A valid IP
address can be a server that you already have running with an IP address that
you can point to. For example, you can go through the
Running a basic Apache Web server
tutorial to start up a web server on a Compute Engine VM.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Make sure that you have the following role or roles on the project:
Service Usage Admin, DNS Administrator
Check for the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
In the Principal column, find all rows that identify you or a group that
you're included in. To learn which groups you're included in, contact your
administrator.
For all rows that specify or include you, check the Role column to see whether
the list of roles includes the required roles.
Grant the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
Click person_add Grant access .
In the New principals field, enter your user identifier.
This is typically the email address for a Google Account.
Click Select a role , then search for the role.
To grant additional roles, click add Add
another role and add each additional role.
Click Save .
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Make sure that you have the following role or roles on the project:
Service Usage Admin, DNS Administrator
Check for the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
In the Principal column, find all rows that identify you or a group that
you're included in. To learn which groups you're included in, contact your
administrator.
For all rows that specify or include you, check the Role column to see whether
the list of roles includes the required roles.
Grant the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
Click person_add Grant access .
In the New principals field, enter your user identifier.
This is typically the email address for a Google Account.
Click Select a role , then search for the role.
To grant additional roles, click add Add
another role and add each additional role.
Click Save .
Enable the DNS API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Create a managed public zone in Cloud DNS
In the Google Cloud console, go to the Create a DNS zone page.
Go to Create a DNS zone
To create a public DNS zone, click
Create
zone .
For Zone type , choose Public .
In the
Zone name field, enter my-new-zone .
In the DNS
name field, enter the name of the domain
that you purchased. Enter the domain name only. For example:
example.com
In the
DNSSEC drop-down list,
select Off .
Click
Create .
The Zone details page is displayed. Default NS and SOA records
have been created for you.
To edit a record, on the Zone details page, at the end of the row for the
record that you want to edit, click
edit Edit .
Create a record to point the domain to an external IP address
If your IP address is in the format #.#.#.# , you have an IPv4 address and need
to create an A record.
If your IP address is in the format #:#:#:#:#:#:#:# , you have an IPv6
address and need to create an AAAA record.
In the Google Cloud console, go to the Cloud DNS page.
Go to Cloud DNS
Click the zone where you want to add a record set.
Click Add standard .
For Resource Record Type , to create an A record, select A .
To create an AAAA record, select AAAA .
For IPv4 Address or IPv6 Address , enter the IP address that you
want to use with this domain.
Click Create .
Create a CNAME record for the www subdomain
In the Google Cloud console, go to the Cloud DNS page.
Go to Cloud DNS
Click the zone where you want to add a record set.
Click Add standard .
For DNS Name , enter www .
For Resource Record Type , select CNAME .
For Canonical name , enter the domain name, followed by a period (for
example, example.com. ).
Click Create .
The record update takes some time to propagate depending on the
time to live (TTL) values of the records. You can verify that the DNS records
are working by visiting the domain name and confirming that the domain resolves
to your IP address.
Update your domain name servers to publish your domain
Finally, you must
update your domain's name servers to use Cloud DNS
to publish your new records to the internet.
You have successfully used Cloud DNS to set up your DNS records.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
In the Google Cloud console, go to the Cloud DNS zones page.
Go to Cloud DNS zones
Click the zone name ( my-new-zone ) to get to the Zone details page.
Select the A and CNAME records that you created.
Click Delete record sets .
Go to the Cloud DNS zones page.
Go to Cloud DNS zones
To delete the zone, select the my-new-zone checkbox, and then at the end
of the row, click
delete Delete zone .
What's next
To add, delete, or update records, see
Manage records .
To work with managed zones, see
Create, modify, and delete zones .
To find solutions for common issues that you might encounter when using
Cloud DNS, see Troubleshooting .
To reference the API, see
Cloud DNS REST API .
To determine costs, see Cloud DNS Pricing .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
