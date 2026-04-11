---
title: "Create a Secure Web Proxy policy \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secure-web-proxy/docs/create-a-policy
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/secure-web-proxy/docs/initial-setup-steps
source_metadata:
  url: https://docs.cloud.google.com/secure-web-proxy/docs/create-a-policy
  title: "Create a Secure Web Proxy policy \_|\_ Google Cloud Documentation"
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
Create a Secure Web Proxy policy
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to create a Secure Web Proxy policy.
A policy acts as a centralized container for all security rules that govern
traffic flow through your Secure Web Proxy instance. Policies let you
effectively manage access control for the proxy's outbound web traffic.
You can define a policy and associate it with your Secure Web Proxy instance.
This helps ensure that all outgoing web traffic from your network adheres to
a consistent set of security standards. For more information
about Secure Web Proxy policies, see
Policies overview .
Before creating a policy, make sure that you complete the following
initial setup steps:
Obtain Identity and Access Management (IAM) roles and permissions
Create a Google Cloud project
Enable billing for your Google Cloud project
After creating a policy, you can
create rules and add
them to the policy. For more information about how to associate a policy with
your Secure Web Proxy instance, see
Set up a web proxy .
Console
In the Google Cloud console, go to the SWP Policies page.
Go to SWP Policies
Click add_box Create a policy .
Enter a name for the policy that you want to create, such as policy1 .
Enter a description of the policy, such as My new swp policy .
In the Regions list, select the region where you want to
create the policy, such as us-central1 .
If you want to create rules for your policy, then click Add rule .
For more information, see
Create a Secure Web Proxy rule .
Click Create .
Important: To create a policy with TLS inspection, see
Enable TLS inspection .
Cloud Shell
Use your preferred text editor to create a policy.yaml file.
Add the following to the policy.yaml file that you created:
description : basic Secure Web Proxy policy
name : projects/ PROJECT_ID /locations/ REGION /gatewaySecurityPolicies/policy1
Replace the following:
PROJECT_ID : ID of your project
REGION : region where your policy is created,
such as us-central1
Important: To create a policy with TLS inspection, see
Enable TLS inspection .
Create the Secure Web Proxy policy.
gcloud network-security gateway-security-policies import policy1 \
--source=policy.yaml \
--location= REGION
What's next
Configure rules
Deploy Secure Web Proxy as a Private Service Connect service
Deploy Secure Web Proxy as next hop
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
