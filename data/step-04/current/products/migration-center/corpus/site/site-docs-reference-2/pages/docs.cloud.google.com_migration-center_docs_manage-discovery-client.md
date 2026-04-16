---
title: "Manage the discovery client \_|\_ Migration Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migration-center/docs/manage-discovery-client
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/migration-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/migration-center/docs/manage-discovery-client
  title: "Manage the discovery client \_|\_ Migration Center \_|\_ Google Cloud Documentation"
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
Manage the discovery client
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to manage the discovery client after you
install it and how to perform basic maintenance activities.
Upgrade the discovery client
To upgrade the discovery client,
download the latest version of the discovery client
and run the MSI file as a local administrator on the machine.
When you upgrade to the latest version, all your data is preserved,
including the users you add to the MCDCUsers group.
If you encounter errors during the upgrade, see
Troubleshoot installation errors .
Review the discovery client details
In Migration Center, you can see the discovery clients that you're
using in connected mode. To review the list of clients, follow these steps:
In the Google Cloud console, go to the Data import page.
Go to Data import
If errors prevent the discovery client from connecting to Google Cloud Migration Center,
you see a list of errors and warnings.
Click Clients .
Review the list of connected discovery client applications.
The table provides the following information for each client:
Column
Description
Name
The discovery client name.
Status
The status of the discovery client. For example, Offline .
Created
The timestamp when the discovery client was first registered with Migration Center.
Last sync time
The last recorded time that the discovery client successfully
synchronized data with Migration Center.
Version
The version of the discovery client.
Errors
A short description of errors preventing the discovery client
from connecting to Google Cloud Migration Center. For more information about the error,
click View details .
To view the details about a specific discovery client, click the
name of the discovery client.
View the collected servers
If you use the discovery client in connected mode, after you collect data
from your servers, you can view the collected data in the Google Cloud console.
For more information, see
View the collected assets .
Analytics data collection
The discovery client can collect usage data and other anonymized data that
helps Google improve the product. If you agree to send analytics data to Google,
the events and statistics that the discovery client collects might include
the following:
Requests made to the discovery client service, for example when
configuring a discovery method, changing configuration, and listing assets.
The data includes the request duration and its success rate.
Periodic jobs running in the background, such as vCenter discovery, and IP
range scan.
The data includes high level statistics about the discovery method, such as
the number of VMs in scope and the collection success rate.
Rates of specific predefined errors occurring in the discovery client.
For all events, the discovery client provides information on the current
version of the application.
Manage analytics collection
To manage the discovery client analytics collection, follow these steps:
In the discovery client application, go to Settings .
In the Configure Analytics sent to Google section, toggle if you
want to enable or disable analytics data collection.
Set up a proxy connection
The discovery client and the corresponding Windows services use the default
proxy settings returned by Windows.
In some cases, the Local System user doesn't have the proxy that
is normally available for users logged into the system. In
such cases, you can set the proxy settings in the discovery client with the
following steps:
In the discovery client application, go to the Settings tab.
Click the Proxy credentials toggle to the Enabled position.
Enter the proxy host and port.
Enter the proxy credentials, if needed.
To finish, click Save proxy credentials .
What's next
Learn how to
add servers to discovery client .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
