---
title: "Bare Metal Solution release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bare-metal/docs/release-notes
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/bare-metal/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/bare-metal/docs/release-notes
  title: "Bare Metal Solution release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The availability of Bare Metal Solution is transitioning to a specialized, allowlist-only model. If you are an existing customer, please contact your Google account team to explore the value of migrating to new Oracle and Google Cloud strategic partnership offerings .
Home
Documentation
Distributed, hybrid, and multicloud
Bare Metal
Resources
Send feedback
Bare Metal Solution release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Bare Metal Solution. Check this page for
announcements about new or updated features, bug fixes, known issues, and
deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
December 29, 2025
Deprecated
Support for OS image SLES12SP5SAP on Bare Metal Solution is now deprecated. For information, see Available OS images .
April 08, 2025
Change
The command to connect to the interactive serial console of a server is changing on May 1, 2025.
Old command:
ssh - i SSH_KEY_ID - p 9600 PROJECT_ID . REGION . SERVER_NAME . USERNAME . bms = true @ssh - serialport . googleapis . com
New command:
ssh -i SSH_KEY_ID -p 9600 PROJECT_ID.REGION.SERVER_NAME.USERNAME.bms=true@\REGION\-ssh-serialport.googleapis.com
We recommend that you update your configurations by April 30, 2025 to avoid any disruptions. For instructions, see Configure serial console .
July 01, 2024
Announcement
Performance SSD storage is now available in all Bare Metal Solution regions .
June 10, 2024
Deprecated
Support for BIOS_PUR043.37.14.021 ( TS24.02 ) and BIOS_PUR043.37.16.023 ( TS24.05 ) firmware on Bare Metal Solution is now deprecated. For information, see Available firmware .
May 28, 2024
Feature
You can now order Bare Metal Solution storage and Partner Interconnect resources on a 1 month commitment term. This feature is generally available (GA) .
May 21, 2024
Feature
You can now order Performance SSD storage for your Bare Metal Solution. For more information and availability in your region, see Performance SSD storage . This feature is generally available (GA) . To learn how to order Performance SSD storage, see Order Bare Metal Solution resources .
May 14, 2024
Announcement
You can now view information about upcoming maintenance events for Bare Metal Solution on Upcoming maintenance events page.
May 02, 2024
Feature
You can now set up Ops Agent on your Bare Metal Solution server to view Bare Metal Solution metrics. This feature is generally available (GA) .
Feature
Bare Metal Solution now supports Oracle Linux 9. This feature is generally available (GA) . For more information, see Operating systems and Change the OS for a server .
March 20, 2024
Feature
You can now create and manage VRFs for the networks in your Bare Metal Solution environment. This feature is generally available (GA) .
February 12, 2024
Feature
You can now select the pod for your Bare Metal Solution resources through the Google Cloud console intake form . This feature is generally available (GA) .
February 06, 2024
Feature
You can now view the details of the OS of your Bare Metal Solution server . This feature is generally available (GA) .
December 09, 2023
Feature
You can now set up encryption keys and SSH keys for your Bare Metal Solution server while provisioning or reimaging it. This feature is in preview .
October 02, 2023
Feature
You can now use Bare Metal Solution's self-service functionality to order your resources after executing a one-time Order Form. This feature is generally available (GA) . For more information, see Order Bare Metal Solution resources .
September 22, 2023
Feature
You can now view the pod for your Bare Metal Solution servers , networks , volumes , and NFS Shares . This feature is generally available (GA) .
September 14, 2023
Feature
You can now view the status of your server activity in the Google Cloud console. it informs you if there's an issue with your Bare Metal Solution infrastructure. This feature is generally available (GA) .
Feature
Observability for storage volumes is generally available ( GA ).
August 30, 2023
Feature
You can now view and respond to maintenance events through Google Cloud console. This feature is generally available (GA) . For more information, see Manage maintenance events .
July 14, 2023
Change
To create a client network, the Google Cloud console intake form now accepts VLAN attachment names and project number instead of pairing keys if your VLAN attachments are in a different project.
June 20, 2023
Feature
You can now rename your Bare Metal Solution resources, including servers , networks , storage volumes , and NFS shares . This feature is generally available (GA) .
Feature
You can now view storage volume and LUN metrics in the Google Cloud console. This feature is in preview .
April 11, 2023
Feature
You can now skip the cooling-off period while deleting a LUN or a storage volume. This feature is generally available (GA) . For more information, see Delete LUNs from a storage volume and Delete a storage volume .
March 31, 2023
Feature
You can now view Bare Metal Solution infrastructure metrics in the Google Cloud console. This feature is generally available (GA) .
March 23, 2023
Announcement
You can now provision multiple storage volumes to attach to the existing servers in a single configuration request through Google Cloud console intake form .
March 17, 2023
Feature
You can now use the interactive serial console to access your Bare Metal Solution servers. This feature is generally available (GA) .
December 15, 2022
Announcement
Enhancements to Bare Metal Solution resource management for SAP HANA–For Bare Metal Solution environments running SAP HANA, you can now use the Google Cloud console, gcloud CLI, and API to view and manage your Bare Metal Solution servers, storage, and networks.
For more information, see Maintaining your Bare Metal Solution environment in the SAP HANA on Bare Metal Solution deployment guide .
December 09, 2022
Feature
Operating systems updates for Bare Metal Solution servers–The following OS is now supported on general-purpose servers:
Red Hat Enterprise Linux (RHEL) 8.4
Other formatting revisions have been added to the Bare Metal Solution operating systems page and the SAP HANA on Bare Metal Solution operating systems page to make them easier to use.
November 11, 2022
Feature
New firmware version for Bare Metal Solution servers--The following is the latest firmware version available:
TS54
For more information about the features of TS54 firmware, see Firmware .
November 09, 2022
Feature
Enhancements to Bare Metal Solution resource management–Adds the following self-service functionality:
Manage networks –You can create, attach, detach, and delete networks. You can also add, update, and delete VLAN attachments.
Manage boot volume snapshots –You can create, delete, and restore boot volume snapshots.
Manage NFS file storage –You can create, update, and delete NFS storage volumes.
Advanced networking–You can add connections to multiple networks on a single server . You can now view advanced networking information through the Google Cloud console too.
Labels–You can organize your Bare Metal Solution resources by using labels. You can add labels to servers , networks , storage volumes , and NFS file storage .
Manage the power state of servers –You can turn power on and off for your server and restart your server. You can also check the status of a server .
August 22, 2022
Feature
New operating systems for Bare Metal Solution servers--The following OSes are now supported:
Red Hat Enterprise Linux (RHEL) 8.5
Oracle Linux 8.5
Deprecated
The following operating systems are no longer supported on Bare Metal Solution servers:
Oracle Linux 8.4
RHEL for SAP Solutions 7.6
RHEL for SAP Solutions 7.7
July 29, 2022
Feature
Enhancements to Bare Metal Solution resource management –Adds the following functionality:
Change the operating system for a Bare Metal Solution server
Enable hyperthreading on a Bare Metal Solution server
View advanced networking information
Implement IP address management
Provision storage volume resources
Remove storage volume resources
Change
API for long-running operations:
The API for long-running operations has changed from v1 to v2.
June 15, 2022
Feature
Advanced networking capabilities for Bare Metal Solution –Enables you to use the following features:
Add multiple VLANs on the same bonded server interface.
Configure multiple VLAN attachments over a Partner Interconnect connection to your Bare Metal Solution environment.
Connect the Bare Metal Solution environment to more than one Virtual Private Cloud (VPC) in your Google Cloud project.
Use network templates to enable a flexible network design of your choice, such as active/active and active/backup, to meet your needs for high availability, redundancy, and load balancing.
March 28, 2022
Feature
Enhancements to Bare Metal Solution resource management –Adds the following functionality:
Full support for all three user-interface options (Console, gcloud, and API) when viewing your resources. You now have improved visibility to your servers, networks, and storage devices in the method that meets your needs.
You can apply labels to your resources, and then use the labels to filter the output of resource monitoring commands.
You can monitor NFS file storage and long-running operations with gcloud and API commands.
When operating your servers, you can start a server that has stopped or restart a server that is up and running.
March 22, 2022
Feature
Enhancements to the Google Cloud Console intake form –Adds the following functionality:
When you deploy new servers, you can assign an existing client network to the servers.
When you add a client network, you can assign existing Partner Interconnect connections to the network.
Real-time IP address validation prevents conflicting IP addresses in your networks.
Real-time quota validation prevents you from over provisioning resources.
Save draft allows you to save your request, then work on it and submit it at a later time.
You can provision quota from a signed Order Form across multiple requests.
March 09, 2022
Announcement
You can now deploy Oracle® Data Guard on Bare Metal Solution . Oracle Data Guard is a high-availability and disaster recovery solution for Oracle databases. The guide provides instructions on how to set up the primary and standby databases in a Bare Metal Solution environment, Data Guard broker to manage the configuration, and Data Guard observer to configure automatic database failover.
March 04, 2022
Announcement
Bare Metal Solution is now generally available (GA) in the northamerica-northeast2 region (Toronto).
February 15, 2022
Announcement
A Bare Metal Solution security guide is now available. This guide aims to provide you with the security and compliance design elements that you should consider when planning to bring your enterprise workloads to Bare Metal Solution. The guide also discusses Google Cloud's security controls that safeguard your enterprise assets.
January 19, 2022
Feature
Google Cloud Console intake form –Enables you to select and deploy resources in your Bare Metal Solution environment from an Order Form, including:
Networks –You can specify a network name, Partner Interconnect settings, IP address ranges and addresses for the client and private networks, connection bandwidth, and service IP address ranges.
Servers –You can configure a server name, server type, operating system, hyperthreading, and assign networks and IP addresses to each server.
Storage –You can select a storage volume name, the type and size of the storage volume, snapshots, the storage protocol, LUNS, and the servers that can access the storage volume.
January 13, 2022
Feature
Enhancements to Bare Metal Solution resource management –Adds the following functionality:
View networking and storage resources in your Bare Metal Solution environment. You can use gcloud and API commands to view a list of resources, or see full details of specific resources.
September 24, 2021
Feature
Enhancements to Bare Metal Solution resource management –Adds the following functionality:
View servers in your Bare Metal Solution environment. You can use gcloud and API commands to view a list of servers, or see full details of specific servers.
September 02, 2021
Announcement
You can now deploy SAP HANA on Bare Metal Solution in the us-central1 region (Iowa).
August 31, 2021
Announcement
Bare Metal Solution is now generally available (GA) in the following regions :
asia-northeast3 (Seoul)
europe-west6 (Zurich)
August 30, 2021
Deprecated
As of August 30, 2021, the Red Hat Enterprise Linux (RHEL) 7.7 image is deprecated and is no longer available for Bare Metal Solution servers, except for the servers that are associated with a RHEL Update Services for SAP Solutions subscription.
For emergency incident recovery purposes, reimaging is supported for Bare Metal Solution servers that were initially deployed with RHEL 7.7.
If any of your Bare Metal Solution servers use RHEL 7.7, then we strongly recommend that you upgrade to a supported operating system at your earliest convenience.
July 07, 2021
Announcement
You can now deploy SAP HANA on Bare Metal Solution in the following regions :
europe-west3 (Frankfurt)
europe-west4 (Eemshaven, The Netherlands)
April 23, 2021
Announcement
Bare Metal Solution is now generally available (GA) in the us-central1 region (Iowa).
March 18, 2021
Announcement
You can now deploy SAP HANA on Bare Metal Solution in the following regions :
us-east2 (Los Angeles)
us-east4 (Ashburn)
January 13, 2021
Announcement
Bare Metal Solution is now generally available (GA) in the northamerica-northeast1 region (Montréal).
September 03, 2020
Announcement
Bare Metal Solution is now generally available (GA) in the following regions :
asia-northeast1 (Tokyo)
asia-southeast1 (Singapore)
europe-west4 (The Netherlands)
southamerica-east1 (São Paolo)
April 30, 2020
Announcement
Bare Metal Solution is now generally available (GA) in the following regions :
australia-southeast1 (Sydney)
europe-west2 (London)
europe-west3 (Frankfurt)
us-east4 (Ashburn)
us-west2 (Los Angeles)
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
