---
title: "Google Cloud MCP servers release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/mcp/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/mcp
source_metadata:
  url: https://docs.cloud.google.com/mcp/release-notes
  title: "Google Cloud MCP servers release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Google Cloud MCP servers
Resources
Send feedback
Google Cloud MCP servers release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Google Cloud MCP servers.
Check this page for announcements about new or updated features, bug fixes,
known issues, and deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
April 10, 2026
Feature
You can use Cloud Trace to get answers about your MCP server use, tool
failures, and latency causes. To get started, see
Use Cloud Trace to monitor MCP use .
March 17, 2026
Deprecated
The custom constraint gcp.managed.allowedMCPServices and organization policy
control of MCP use is deprecated and will no longer work.
You can use Identity and Access Management deny policies to control MCP use. For more information,
see Control MCP use with Identity and Access Management .
Change
Starting March 17, 2026, you no longer need to separately enable Model Context
Protocol (MCP) servers. Remote MCP endpoints are available by default when you
enable a supported product in your project. This
update is rolling out gradually across regions.
February 17, 2026
Change
After March 17, 2026, Google and Google Cloud remote Model Context Protocol
(MCP) servers are automatically enabled when you enable a
supported service .
Deprecated
The custom constraint gcp.managed.allowedMCPServices and organization policy
control of MCP use is deprecated. If you created an organization policy to
control MCP use prior to February 17, 2026, then it won't work after
March 17, 2026. If you don't use the gcp.managed.allowedMCPServices
constraint, then effective February 17, 2026, you aren't able to use it.
You can use Identity and Access Management deny policies to control MCP use. For more information,
see Control MCP use with Identity and Access Management
December 10, 2025
Announcement
Support for Model Context Protocol (MCP) use is available in Preview for select
Google and Google Cloud services.
To see a demo and read about why we're offering remote MCP servers available
over HTTP instead of local MCP servers,
read
Announcing official Model Context Protocol (MCP) support for Google services .
For more information, see
Google Cloud MCP servers overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
