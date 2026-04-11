---
title: "Manage network bandwidth \_|\_ Storage Transfer Service \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/storage-transfer/docs/obtaining-bandwidth-on-prem
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/storage-transfer/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/storage-transfer/docs/obtaining-bandwidth-on-prem
  title: "Manage network bandwidth \_|\_ Storage Transfer Service \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Storage Transfer Service
Send feedback
Manage network bandwidth
Stay organized with collections
Save and categorize content based on your preferences.
This article discusses options for obtaining more network bandwidth for
agent-driven transfers. Increasing your network bandwidth helps decrease
transfer times, especially for large data sets.
Control bandwidth usage for agent-driven transfers
Bandwidth limits are helpful if you need to limit how much data
Storage Transfer Service uses to transfer data. Using a bandwidth
limit helps ensure that:
Your network is not saturated as a result of using Storage Transfer Service.
Your organization's existing application behavior doesn't degrade during the
transfer.
You don't cause a sudden price increase if you're on a network connection
that charges by peak bandwidth usage.
Bandwidth limits are applied at an agent pool level and are divided by all
agents in the pool. Bandwidth limits are enforced as an average value over one
minute, so you may still experience short bursts that exceed the per-second
limit that you specify.
Set a bandwidth limit
To set a bandwidth limit:
In the Google Cloud console, go to the Agent pools page.
Go to Agent pools
Select the agent pool to update.
Click Set bandwidth limit .
Enter the desired network limit in megabytes per second (MB/s) and click
Set limit .
Edit a bandwidth limit
To edit an existing bandwidth limit:
In the Google Cloud console, go to the Agent pools page.
Go to Agent pools
Select the agent pool to update.
Click Edit limit .
Enter the desired network limit in megabytes per second (MB/s) and click
Set limit .
To remove a limit, click Use all bandwidth .
Options for obtaining more network bandwidth
There are several options for obtaining more network bandwidth for agent-driven
transfers:
Peering with Google —Peering is where you directly interconnect with
Google to support traffic exchange. We have
direct peering locations world-wide. To learn
about the benefits and our policies, see
Peering .
Cloud Interconnect —Cloud Interconnect is similar to peering,
but you'll use an interconnect to connect to Google. There are two types of
interconnects to choose from :
Dedicated Interconnect — You connect directly from
your data center to a Google data center via a private, dedicated
connection. For more information, see
Dedicated Interconnect overview .
Partner Interconnect —You work with a service provider
to establish a connection to a Google data center via a service
partner's network. For more information, see
Partner Interconnect overview .
Obtain bandwidth from your ISP —Your internet service provider (ISP) may
be able to offer more bandwidth for your needs. Consider contacting them to
ask what options they have available.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
