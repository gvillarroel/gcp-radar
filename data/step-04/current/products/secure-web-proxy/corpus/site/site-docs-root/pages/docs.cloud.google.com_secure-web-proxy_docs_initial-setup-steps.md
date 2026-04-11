---
title: "Initial setup steps \_|\_ Secure Web Proxy \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secure-web-proxy/docs/initial-setup-steps
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/secure-web-proxy/docs
source_metadata:
  url: https://docs.cloud.google.com/secure-web-proxy/docs/initial-setup-steps
  title: "Initial setup steps \_|\_ Secure Web Proxy \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Secure Web Proxy
Guides
Send feedback
Initial setup steps
Stay organized with collections
Save and categorize content based on your preferences.
This document describes the initial setup steps that are required to use
Secure Web Proxy.
Note: These setup steps are required only before the first time you use
Secure Web Proxy.
Get IAM roles and permissions
To get the permissions that you need to provision a Secure Web Proxy instance,
ask your administrator to grant you the following IAM roles on
your project:
To configure policies and provision a Secure Web Proxy instance:
Compute Network Admin role
( roles/compute.networkAdmin )
To upload explicit Secure Web Proxy TLS certificates:
Certificate Manager Editor role
( roles/certificatemanager.editor )
For more information about granting roles, see
Manage access to projects, folders, and organizations .
You might also be able to get the required permissions through custom roles or
other predefined roles.
Optional: If you have a set of users who are responsible for managing your
Compute Engine organization security policies, then grant them the
Compute Organization Security Policy Admin role
( roles/compute.orgSecurityPolicyAdmin ).
For more information about project roles and permissions, see the following:
Identity and Access Management documentation
Compute Engine API documentation
Cloud Monitoring API documentation
Create a Google Cloud project
To create or select a Google Cloud project, follow these steps:
Console
In the Google Cloud console, go to the project selector page.
Go to project selector
Either
create a Google Cloud project
or select an existing project.
gcloud
You can follow one of these steps:
To create a Google Cloud project, use the
gcloud projects create command .
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a unique project ID.
To select an existing Google Cloud project, use the
gcloud config set command .
gcloud config set project PROJECT_ID
Enable billing
Make sure that billing is enabled for your Google Cloud project. For more
information, see
Enable, disable, or change billing for a project
and Verify the billing status of your projects .
Enable the required APIs
Console
In the Google Cloud console, go to the Enable access to APIs page.
Go to Enable access to APIs
Follow the instructions to enable these required APIs:
Compute Engine API, Certificate Manager API, Network Services API,
and Network Security API.
Optional: If you plan to configure TLS inspection
for your proxy, then you must enable the Certificate Authority Service API.
Go to Enable access to API
gcloud
To enable the required Google Cloud APIs, use the
gcloud services enable command .
gcloud services enable \
--compute.googleapis.com \
--certificatemanager.googleapis.com \
--networkservices.googleapis.com \
--networksecurity.googleapis.com \
--privateca.googleapis.com
Optional: If you plan to configure TLS inspection for your proxy, then you
must enable the Certificate Authority Service ( privateca.googleapis.com )
API.
Create a VPC subnet
Create a subnet in the VPC network for each region where you
want to deploy your Secure Web Proxy instance. If you've previously created a
subnet, then you can reuse it as a VPC subnet by setting the
purpose parameter to PRIVATE .
Important: VPC subnets are referenced when
creating a Secure Web Proxy instance .
gcloud
To create a subnet, use the
gcloud compute networks subnets create command .
gcloud compute networks subnets create VPC_SUBNET_NAME \
--purpose=PRIVATE \
--region= REGION \
--network= NETWORK_NAME \
--range= IP_RANGE
Replace the following:
VPC_SUBNET_NAME : name of your VPC
subnet
REGION : region where you want to deploy your
VPC subnet
NETWORK_NAME : name of your VPC
network
IP_RANGE : subnet range, such as 10.10.10.0/24
Create a proxy subnet
Create a proxy subnet for each region where you want to deploy your
Secure Web Proxy instance.
We recommend that you create a subnet size of /23 , which can store up to
512 proxy-only addresses. Secure Web Proxy uses this range to allocate
a dedicated pool of unique IP addresses. This reserved pool helps ensure
that the proxy has sufficient capacity to handle scaling
and securely interact with Cloud NAT and destinations in your
VPC network.
Important: Proxy-only subnets aren't referenced when
creating a Secure Web Proxy instance .
For more information, see
Proxy-only subnets for Envoy-based load balancers .
gcloud
To create a proxy subnet, use the
gcloud compute networks subnets create command .
gcloud compute networks subnets create PROXY_SUBNET_NAME \
--purpose=REGIONAL_MANAGED_PROXY \
--role=ACTIVE \
--region= REGION \
--network= NETWORK_NAME \
--range= IP_RANGE
Replace the following:
PROXY_SUBNET_NAME : name of your proxy subnet
REGION : region where you want to deploy the proxy
subnet
NETWORK_NAME : name of your VPC
network
IP_RANGE : subnet range, such as 192.168.0.0/23
Deploy a TLS certificate
Because the default and most basic function of Secure Web Proxy—policy
enforcement without deep inspection—doesn't require Transport Layer
Security (TLS) certificates, TLS (formerly
SSL )
certificates are optional for Secure Web Proxy.
TLS certificates are required for Secure Web Proxy only when clients—the
workloads, applications, or devices within your network—connect
to the proxy by using HTTPS. For more information, see
SSL certificates overview .
To deploy TLS certificates by using Certificate Manager, follow any one
of these methods:
Deploy a regional Google-managed certificate with per-project DNS authorization
Deploy a regional Google-managed certificate with Certificate Authority Service
Deploy a regional self-managed certificate
The following example shows how to deploy a regional self-managed certificate
by using Certificate Manager:
Create a TLS certificate.
openssl req -x509 -newkey rsa:2048 \
-keyout KEY_PATH \
-out CERTIFICATE_PATH -days 365 \
-subj '/CN= SWP_HOST_NAME ' -nodes -addext \
"subjectAltName=DNS: SWP_HOST_NAME "
Replace the following:
KEY_PATH : path at which to save the private key,
such as ~/key.pem
CERTIFICATE_PATH : path at which to save the
certificate, such as ~/cert.pem
SWP_HOST_NAME : hostname of your
Secure Web Proxy instance, such as myswp.example.com
Upload the TLS certificate to Certificate Manager
Deploy the TLS certificate to a load balancer
What's next
Create and deploy a Secure Web Proxy instance
Enable TLS inspection
Create a policy
Configure rules
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
