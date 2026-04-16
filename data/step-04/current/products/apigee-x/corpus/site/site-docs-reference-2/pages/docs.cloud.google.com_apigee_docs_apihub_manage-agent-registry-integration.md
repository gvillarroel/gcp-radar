---
title: "Manage Agent Registry integration \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/apihub/manage-agent-registry-integration
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/apihub/release-notes
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/apihub/manage-agent-registry-integration
  title: "Manage Agent Registry integration \_|\_ Apigee \_|\_ Google Cloud Documentation"
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
Manage Agent Registry integration
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
API hub allows you to automatically synchronize Model Context Protocol (MCP) tools and server metadata with Agent Registry. This integration enables AI agents to discover and utilize the MCP-styled APIs registered in your hub.
Note: This feature is enabled by default and your MCP tools and server metadata are automatically synced to Agent Registry.
Enable Agent Registry integration
Console
In the Google Cloud console, click API hub > Settings .
Select the Actions tab.
In the Agent Registry integration section, switch the Sync to Agent Registry toggle to On .
When you enable sync, it may take some time for the process to complete and for your data to be reflected in Agent Registry.
Disable Agent Registry integration
Warning: Disabling this sync stops the injection of new MCP tools and server metadata and removes all previously synced API hub-sourced content from Agent Registry.
Console
In the Google Cloud console, click API hub > Settings .
Select the Actions tab.
In the Agent Registry integration section, switch the Sync to Agent Registry toggle to Off .
In the confirmation dialog, click Confirm to stop the sync and remove existing data from the registry.
Limitations
API hub does not sync APIs to Agent Registry whose style is manually set to MCP. Also, API hub does not remove data from Agent Registry when an API is manually converted from an MCP-style to a non-MCP style.
API hub will not sync data for deployments linked to multiple API versions, because Agent Registry does not support versioning.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
