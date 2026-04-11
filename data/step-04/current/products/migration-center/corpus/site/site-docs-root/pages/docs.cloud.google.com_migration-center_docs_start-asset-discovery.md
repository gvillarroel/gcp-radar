---
title: "Start an asset discovery \_|\_ Migration Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migration-center/docs/start-asset-discovery
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/migration-center/docs
source_metadata:
  url: https://docs.cloud.google.com/migration-center/docs/start-asset-discovery
  title: "Start an asset discovery \_|\_ Migration Center \_|\_ Google Cloud Documentation"
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
Start an asset discovery
Stay organized with collections
Save and categorize content based on your preferences.
With Google Cloud Migration Center, you can discover physical servers and virtual machine
(VM) instances in your infrastructure hosted on-premises or on other cloud
providers, and gather detailed information about every component.
Collection methods
Migration Center lets you collect data from your infrastructure in
different ways to give you the flexibility to balance speed and depth of
discovery.
Migration Center supports three approaches:
Automated one-time collection
Automated continuous collection
Manual data import
The following sections help you decide which method and tools to use
depending on your use case.
Automated one-time collection
Automated one-time collection lets you get a snapshot of your
infrastructure at a given time.
You can use this to quickly collect performance data from your physical or
virtual machine (VM) instances. You can also collect historical performance
and networking information, if this is available at the hypervisor level.
To perform an automated one-time collection, download and run the
Migration Center discovery client CLI, then scan your infrastructure.
Finally, export the collected configuration and performance data to
Migration Center.
To learn how data collection works with the mcdc CLI, see
Migration Center discovery client CLI overview .
Automated continuous collection
Automated continuous collection lets you get the full information about
your infrastructure over a period of time with scheduled collection
capabilities.
To perform continuous collection, install the discovery client on a
Windows machine and allow it to periodically scan your infrastructure and
gather configuration and performance data.
To learn how automatic data collection works, see
Migration Center discovery client overview .
Manual data import
Manual data import lets you fully control which data to upload to
Migration Center.
You can manually import data into Migration Center with the
following methods:
Collect data from your infrastructure hosted on other cloud providers
with automated scripts, and upload it to Migration Center.
For more details, see how to import data from other cloud
providers .
Manually fill in template tables with your infrastructure data, including
specifications, performance, and disk data, and upload them to
Migration Center.
For more details, see how to upload manually generated
tables .
Upload your infrastructure data generated with RVTools directly into
Migration Center. For more details, see
how to import data from RVTools .
Choose your data collection tool
The following table can help you choose between the data collection tools that
Migration Center offers. You can also use multiple tools for your
assessment.
For example, you can start with a manual or one-time collection,
then switch to the continuous collection after you get an initial view of
your infrastructure.
Or, you might have a heterogeneous environment that requires different methods
to assess everything that you want to migrate.
Collected environment
Collection method
Automated (one-time)
Automated (continuous)
Manual collection and import
Virtual machines on vCenter
mcdc CLI
Discovery client
Upload RVTools data
Virtual machines on other hypervisors
mcdc CLI 1
Discovery client
Manually create and upload data tables
Physical servers
mcdc CLI 1
Discovery client
Manually create and upload data tables
AWS EC2s
mcdc CLI
Discovery client 2
Not available
AWS assets
mcdc CLI
Not available
Not available
Azure virtual machines ( Preview)
mcdc CLI
Discovery client 2
Not available
Databases
mcdc CLI
Not available
Discover and import databases
1 Use the mcdc CLI for Windows if you need to collect
data directly from Windows hosts.
2 Using Discovery client IP range scan .
Security and privacy
For every server in your existing environment, Migration Center collects
the following information:
Machine information
Configuration data
Utilization data
Network dependencies
Installed software
The breadth of data collected depends on the collection method you select,
as well as any security settings that are applied during setup.
Other than IP addresses, Migration Center doesn't collect personally
identifiable information (PII) or data subject to PCI or
HIPAA compliance requirements.
Migration Center doesn't collect data from within your applications
or file storage.
For more information about the data collected, see
Collection methods .
All collected data is used solely to analyze your IT infrastructure for a
cloud assessment and migration plan.
Your data is never sold to any third parties.
What's next
Learn how data collection works with the
discovery client .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
