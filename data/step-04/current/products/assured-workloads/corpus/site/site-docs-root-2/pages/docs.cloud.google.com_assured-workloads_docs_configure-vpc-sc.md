---
title: "Configure VPC Service Controls for Assured Workloads \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/docs/configure-vpc-sc
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/docs/configure-vpc-sc
  title: "Configure VPC Service Controls for Assured Workloads \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The names for some Assured Workloads control packages have changed. For information about the name change, see Control package renaming notice .
Home
Documentation
Security
Assured Workloads
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Configure VPC Service Controls for Assured Workloads
Overview
Assured Workloads helps you comply with different regulatory compliance
frameworks by implementing logical controls that segment networks and users from
in-scope sensitive data. Many of the US compliance frameworks are built upon
NIST SP 800-53 Rev. 5 ,
but have their own particular controls based on the sensitivity of the
information and the framework's governing body. For customers who must comply
with FedRAMP High
or DoD IL4 , we
recommend that you use VPC Service Controls to create a strong boundary around
the regulated environment.
VPC Service Controls provides an extra layer of security defense for Google Cloud
services that is independent of Identity and Access Management (IAM). While
Identity and Access Management enables granular identity-based access control, VPC Service Controls
enables broader context-based perimeter security, such as controlling data
ingress and egress across the perimeter. The controls VPC Service Controls are a
logical boundary around Google Cloud APIs that are managed at the
organization level
and applied and enforced at the
project level .
For a high-level overview of VPC Service Controls benefits and configuration
stages, please see the
VPC Service Controls overview . For
more information about the regulatory guidance, see
Control ID SC-7 .
Before you begin
Ensure that you've read and understand the purpose and usage of
VPC Service Controls and its
service perimeters .
Read about how access control in
VPC Service Controls works with IAM .
If you want to configure external access to your protected services when you
create your perimeter, first
create one or more access levels
before you create the perimeter.
Ensure that the Google Cloud services and their resources are
in scope for IL4 or
in scope for FedRAMP High and are
supported by VPC Service Controls .
Configure VPC Service Controls for Assured Workloads
To configure VPC Service Controls, you can use the Google Cloud console, the
Google Cloud CLI (gcloud CLI), or the
Access Context Manager APIs . The
following steps show you how to use the Google Cloud console.
Console
In the Google Cloud console navigation menu, click Security , and then
click VPC Service Controls .
Go to the VPC Service Controls page
If you are prompted, select your organization, folder, or project.
On the VPC Service Controls page, select the Dry run mode . While you
can create in either a Dry run mode or an Enforced mode , we recommend
using the Dry run mode first for either a new or updated service
perimeter. Dry run mode will also allow you to create a test run of your
new service perimeter to see how it performs before you choose to enforce
it within your environment.
Click New perimeter .
On the New VPC Service Perimeter page, in the Perimeter Name box,
type a name for the perimeter.
In the Details tab, select the desired perimeter type and configuration
type.
In the Projects tab, select the projects that you want to include
within the service perimeter boundary. For your IL4 workloads, these should
be the projects that are within your Assured Workloads IL4 folder.
Note: At this time, you can only select projects (and not folders) when
setting up a service perimeter.
In the Restricted Services tab, add services to include within the
service perimeter boundary. You should only select services that are in
scope for your Assured Workloads folder.
(Optional) In the VPC Accessible Services tab, you can further restrict
services within your service perimeter from communicating with each other.
Assured Workloads will implement
resource usage restrictions
as a guardrail to ensure that services scoped to Assured Workloads
can be deployed within your Assured Workloads folder. If you have
overridden these controls, then you may need to implement
VPC Accessible Services to restrict non-Assured Workloads
services from communicating with your workloads.
Click Ingress Policy to set one or more rules that specify the
direction of allowed access from different identities and resources.
Access levels only apply
to requests for protected resources coming from outside the service
perimeter. Access levels cannot be used to permit protected resources or
VMs to access data and services outside the perimeter. You can to assign
an identity different service methods to specific services in order to
transfer regulated data into your workload's service perimeter.
(Optional) Click Egress Policy to set one or more rules that specify
the direction of allowed access to different identities and resources.
Access levels only apply to
requests from protected resources to services outside the service
perimeter.
Click Save .
Use VPC Service Controls with Terraform
You can use the Terraform to synchronize your Assured Workloads folder
with a VPC Service Controls permit if you want your Assured Workloads
regulated boundary to be aligned with your VPC Service Controls boundary. For more
information, see the
Automatically Secured Folder Terraform example on GitHub .
What's next
Learn about the FedRAMP High control package .
Learn about the IL4 control package .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
