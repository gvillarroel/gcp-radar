---
title: "Cloud Location Finder overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/location-finder/docs/overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/location-finder/docs
source_metadata:
  url: https://docs.cloud.google.com/location-finder/docs/overview
  title: "Cloud Location Finder overview \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Cloud Location Finder overview | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español – América Latina
Français
Indonesia
Italiano
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
Cloud Location Finder
Start free
Overview
Guides
Reference
Resources
More
Technology areas
More
Overview
Guides
Reference
Resources
Cross-product tools
More
Console
Discover
Product overview
Get started
Quickstart: Enable the API and write your first query
Write queries
Understand query and filter syntax
Review the REST API reference
Review the gcloud reference
Troubleshoot
Troubleshoot connection issues
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
What Cloud Location Finder provides
Supported locations
Location sorting
Home
Documentation
Distributed, hybrid, and multicloud
Cloud Location Finder
Guides
Send feedback
Cloud Location Finder overview
Stay organized with collections
Save and categorize content based on your preferences.
On this page
What Cloud Location Finder provides
Supported locations
Location sorting
Preview
This product is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA products are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Cloud Location Finder is a public API that offers a repository of all
Google Cloud and Google Distributed Cloud locations, as well as
cloud locations for other cloud providers .
What Cloud Location Finder provides
Cloud Location Finder provides a cloud location repository for cloud locations
across providers. It automatically updates its locations to prevent issues with
outdated, hard-coded lists.
With Cloud Location Finder, you can do the following:
Identify locations to deploy workloads that are close to existing workloads
Filter for locations within a designated country for compliance reasons
Sort locations based on their carbon footprint
You can identify cloud locations based on the following filters. For more
information about how to use these filters, see
Query and filter syntax for Cloud Location Finder .
Cloud location filtering type
Description
Proximity
Deploy workloads in locations that minimize latency between endpoints across
cloud providers. Proximity is based on network latency. Cloud Location Finder
measures network latency as the round-trip time between a pair of locations. The
nearest location to a given source location is based on network latency
observed between a pair of locations.
Territory code
Identify relevant territories for compliance requirements. Cloud Location Finder uses
two-letter ISO 3166-1 alpha-2
codes to identify locations. Filtering locations by territory code helps you
determine whether a location meets security, tax, data regulatory, or other
requirements. To see the list of country codes, visit the
ISO Online Browsing Platform .
Carbon free energy (CFE) usage
Minimize the carbon footprint of your applications to meet sustainability goals.
Cloud Location Finder measures a location's carbon footprint using
Google Cloud's
CFE consumption data. Carbon footprint data is
available only for Google Cloud locations.
Cloud provider
Find the nearest location across each cloud provider you use.
Cloud region or zone
Drill down within a region to find location information about specific zones.
Supported locations
Cloud Location Finder includes public locations from each of these location sources:
Google Cloud public regions and zones
Google Distributed Cloud infrastructure
Google Distributed Cloud connected zones within specified regions
Amazon Web Services public regions and zones
Amazon Web Services public local zones
Microsoft Azure geographies
Oracle Cloud Infrastructure public regions and availability domains
Important: Data for supported third-party cloud locations outside of
Google Cloud is based on publicly-available resources, and Google Cloud isn't
responsible for the accuracy of results. Data is updated every 24 hours.
Location sorting
In the Google Cloud CLI, the list
command sorts by both CFE and cloud location ID. The
search command sorts by proximity,
CFE%, and cloud location ID.
Results for proximity use an ascending sort, meaning the smallest distance
appears first. Results for CFE% use a descending sort, meaning the largest
CFE% appears first.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español – América Latina
Français
Indonesia
Italiano
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
