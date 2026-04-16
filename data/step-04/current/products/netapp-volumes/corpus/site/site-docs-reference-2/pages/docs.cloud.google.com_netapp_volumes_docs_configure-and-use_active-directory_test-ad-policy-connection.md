---
title: "Test the Active Directory policy connection \_|\_ NetApp Volumes \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/active-directory/test-ad-policy-connection
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/netapp/volumes/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/active-directory/test-ad-policy-connection
  title: "Test the Active Directory policy connection \_|\_ NetApp Volumes \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
NetApp Volumes
Guides
Send feedback
Test the Active Directory policy connection
Stay organized with collections
Save and categorize content based on your preferences.
This page provides instructions for how to test your Active Directory policy
connection.
Before you begin
Make sure you have entered the parameters of your Active Directory policy
correctly.
Make sure you have associated an Active Directory policy with a storage pool
of the Standard, Premium, or Extreme service level. The Flex service levels
aren't supported. You can create an SMB volume instead. If connectivity
breaks, the volume creation fails with an error message that describes the
problem.
For Flex Unified ONTAP-mode, see Display information about ONTAP SMB discovered servers after you set up SMB access.
Use the following instructions to test if an Active Directory policy is
correctly connected to the Active Directory service using the Google Cloud console.
The test is optional but recommended for troubleshooting the errors in your
Active Directory policy configuration such as the following:
DNS IP address is incorrect or not reachable
Domain controller lookup fails or site setting is incorrect
Domain controller can't be reached
Active Directory administrative user permissions are incorrect
Incorrect organizational unit for machine account
Make sure that the test only verifies the connection at the point of time
the test is run. Many components, like the domain controllers or network setup,
are outside of NetApp Volumes control and the service might lose
connection if you make changes to your infrastructure, like retiring the
specified DNS servers or changing networking or firewall settings.
Test the Active Directory policy connection
Use the following instructions to test if an Active Directory policy is
connected to the Active Directory service using the Google Cloud console.
Go to the NetApp Volumes page in the Google Cloud console.
Go to NetApp Volumes
Select Active Directory policies .
In the list of Active Directory policies, select the name of the Active
Directory policy you want to test. The Active Directory details page
appears.
If the policy doesn't already have an associated storage pool, in the
Associated storage pools section, click Assign .
Click Storage pool drop-down list to select a storage pool. The
Associated storage pools list appears.
In the Associated storage pools list, click Test Active Directory
Connection for the pool associated with the Active Directory policy you
want to test. You can only test one policy at a time. A message appears
indicating that the test is in progress.
Based on your test status, perform one of the following steps:
If the test fails, click Edit Active Directory Policy . Check your
configuration, and perform the test again.
If the test succeeds, you will receive a success message. You should
continue testing the connection to all other associated storage pools.
What's next
Manage Active Directory policies .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
