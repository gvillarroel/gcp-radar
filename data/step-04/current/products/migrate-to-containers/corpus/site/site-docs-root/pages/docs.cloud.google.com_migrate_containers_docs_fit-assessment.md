---
title: "Migration Center discovery client CLI overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migrate/containers/docs/fit-assessment
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/migrate/containers/docs
source_metadata:
  url: https://docs.cloud.google.com/migrate/containers/docs/fit-assessment
  title: "Migration Center discovery client CLI overview \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migration Center
Guides
Send feedback
Migration Center discovery client CLI overview
Stay organized with collections
Save and categorize content based on your preferences.
The Migration Center discovery client CLI ( mcdc CLI) is an offline
tool that lets you run different types of asset discoveries on your
infrastructure. These asset discoveries scan the physical servers, virtual
machine (VM) instances, and databases in your infrastructure to collect
the necessary information for a successful migration assessment to
Google Cloud.
Migration Center provides advanced migration
recommendations and planning capabilities, however, if you're working with
sensitive data and don't want to upload it to Google Cloud, you can
choose to run an offline assessment
instead.
The mcdc CLI has the following advantages:
It doesn't require installation.
It runs on Linux and Windows host machines.
It creates offline assessment reports.
You can use the data collected by running a mcdc CLI
discovery to perform the following actions:
Run an offline assessment .
Export this data to Migration Center where
you can perform these actions:
View and understand insights
Group assets .
Generate total cost of ownership (TCO) reports
Note: The mcdc CLI doesn't upload the collected data
to Google Cloud until you choose to export it to
Migration Center.
Available collection methods
Using the mcdc CLI, you can run the following collection
methods:
Inventory discovery scans and lists all of the VMware VM instances, Amazon
Elastic Compute Cloud (EC2) instances,
Amazon Relational Database Service (RDS)
and Azure Virtual Machine instances ( Preview ).
Guest discovery scans VM instances and physical servers, collecting data
about the running applications. This data includes information about machine
configurations, hardware, network, open files, services, and processes. Guest
discovery also scans and lists Microsoft SQL Server, PostgreSQL, and MySQL databases
that are running on-premises and on AWS.
IP range scan detects all assets in your network, verifies credentials,
and scans the detected assets. It collects data using guest discovery. Use
IP range scan when you have several machines in an IP address range or when
you are unfamiliar with the infrastructure that you want to scan.
Limitations
The mcdc CLI can export data of only up to 10,000 machines
to Migration Center.
What's next
Review the
requirements for downloading and running mcdc CLI .
Learn more about the following discovery methods:
Inventory discovery
Guest discovery
IP range scan
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
