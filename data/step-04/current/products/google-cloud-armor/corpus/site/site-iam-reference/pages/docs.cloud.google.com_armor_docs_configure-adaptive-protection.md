---
title: "Configure Google Cloud Armor Adaptive Protection \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/armor/docs/configure-adaptive-protection
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/armor/docs/address-groups-using
source_metadata:
  url: https://docs.cloud.google.com/armor/docs/configure-adaptive-protection
  title: "Configure Google Cloud Armor Adaptive Protection \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Google Cloud Armor
Guides
Send feedback
Configure Google Cloud Armor Adaptive Protection
Stay organized with collections
Save and categorize content based on your preferences.
This page contains information about configuring Adaptive Protection. Before
you configure Adaptive Protection, make sure that you're familiar with the
information in the
Adaptive Protection overview
and with the
Adaptive Protection use cases .
Before you begin
The following sections explain all of the Identity and Access Management (IAM) roles and
permissions required to configure Cloud Armor security policies. For
the use cases in this document, you only need the
compute.securityPolicies.update permission.
Set up IAM permissions for Cloud Armor security policies
The following operations require the Identity and Access Management (IAM)
Compute Security Admin role
( roles/compute.securityAdmin ):
Configuring, modifying, updating, and deleting a Cloud Armor
security policy
Using the following API methods:
SecurityPolicies insert
SecurityPolicies delete
SecurityPolicies patch
SecurityPolicies addRule
SecurityPolicies patchRule
SecurityPolicies removeRule
A user with the
Compute Network Admin role
( roles/compute.networkAdmin ) can perform the following operations:
Setting a Cloud Armor security policy for a backend service
Using the following API methods:
BackendServices setSecurityPolicy
BackendServices list ( gcloud only)
Users with the Security Admin role
( roles/iam.securityAdmin ) and the Compute Network Admin role
( roles/compute.networkAdmin ) can view Cloud Armor security
policies by using the SecurityPolicies API methods get , list , and
getRule .
Set up IAM permissions for custom roles
The following table lists the IAM roles' base permissions, their
associated API methods, and the roles that grant that permission.
IAM permission
API methods
Roles
compute.securityPolicies.create
SecurityPolicies insert
Compute Security Admin ( roles/compute.securityAdmin )
compute.securityPolicies.delete
SecurityPolicies delete
Compute Security Admin ( roles/compute.securityAdmin )
compute.securityPolicies.get
SecurityPolicies get
SecurityPolicies getRule
Security Admin ( roles/iam.securityAdmin )
compute.securityPolicies.list
SecurityPolicies list
Security Admin ( roles/iam.securityAdmin )
Both of the following:
compute.securityPolicies.use
compute.backendServices. setSecurityPolicy
BackendServices setSecurityPolicy
Compute Network Admin ( roles/compute.networkAdmin )
compute.securityPolicies.update
SecurityPolicies patch
SecurityPolicies addRule
SecurityPolicies patchRule
SecurityPolicies removeRule
Compute Security Admin ( roles/compute.securityAdmin )
Enable Adaptive Protection
Use the following steps to enable Adaptive Protection for your security
policy. Adaptive Protection is applied to each security policy individually.
Console
To activate Adaptive Protection for a security policy:
In the Google Cloud console, go to the Network Security page.
Go to Network Security
On the Policies page, click the name of a security policy.
Click Edit .
Under Adaptive Protection , select Enable .
Click Update .
To deactivate Adaptive Protection for a security policy:
In the Google Cloud console, go to the Network Security page.
Go to Network Security
On the Policies page, click the name of a security policy.
Click Edit .
Under Adaptive Protection , clear Enable .
Click Update .
gcloud
To activate Adaptive Protection for a security policy:
gcloud compute security-policies update MY-SECURITY-POLICY \
--enable-layer7-ddos-defense
To deactivate Adaptive Protection for a security policy:
gcloud compute security-policies update MY-SECURITY-POLICY \
--no-enable-layer7-ddos-defense
Configure granular models
The granular models feature lets you configure specific hosts or paths as the
granular units that Adaptive Protection analyzes. In the following examples,
you create granular traffic units for each host, customize a granular traffic
unit, and configure Adaptive Protection to take action when traffic exceeds
your baseline queries per second (QPS). For more information about granular
models, see the
Adaptive Protection overview .
Configure granular traffic units
The examples in this section use the
add-layer7-ddos-defense-threshold-config
command with some or all of the following flags:
Flag
Description
--threshold-config-name
The name of the threshold config.
--traffic-granularity-configs
Configuration options for enabling Adaptive Protection to work on
the specified service granularity.
--auto-deploy-impacted-baseline-threshold
Threshold on Adaptive Protection's estimated impact to the
baseline traffic of the suggested mitigating rule to a detected attack.
Automatic defenses are applied only if the threshold is not exceeded.
--auto-deploy-expiration-sec
The duration of actions, if any, taken by auto-deploy.
--detection-load-threshold
Detection threshold based on the backend service's load.
--detection-absolute-qps
Detection threshold based on absolute QPS.
--detection-relative-to-baseline-qps
Detection threshold based on QPS relative to the average of baseline
traffic.
In the first example, you configure Adaptive Protection to detect attacks on
and suggest independent mitigations for each host behind your backend service,
without overriding any default thresholds.
gcloud
Create a security policy with the name POLICY_NAME ,
or use an existing security policy.
If Adaptive Protection is not already enabled, use the following command
to enable Adaptive Protection for your policy:
gcloud compute security-policies update POLICY_NAME
--enable-layer7-ddos-defense
Apply the security policy to a backend service with multiple hosts.
Use the following add-layer7-ddos-defense-threshold-config command with
the --traffic-granularity-configs flag to configure a granular traffic
unit:
gcloud compute security-policies add-layer7-ddos-defense-threshold-config POLICY_NAME
--threshold-config-name=per-host-config
--traffic-granularity-configs=type=HTTP_HEADER_HOST;enableEachUniqueValue=true
In the second example, you configure different auto-deploy and detection
thresholds for some or all of the granular traffic units that you configured in
the first example.
gcloud
If Adaptive Protection auto-deploy is not already enabled,
create a placeholder rule .
The following command customizes the auto-deploy threshold for a granular
traffic unit with an HTTP_HEADER_HOST of HOST
and an HTTP_PATH of PATH . Use this command for
each granular traffic unit that you want to customize, replacing the
variables as needed for each host and URL path:
gcloud compute security-policies add-layer7-ddos-defense-threshold-config POLICY_NAME
--threshold-config-name=my-host-config
--auto-deploy-impacted-baseline-threshold=0.01
--auto-deploy-expiration-sec=3600
--traffic-granularity-configs=type=HTTP_HEADER_HOST;value= HOST ,type=HTTP_PATH;value= PATH
Detect when attack volume exceeds baseline average QPS
In the following example, you configure Adaptive Protection to detect an
attack only when the attack volume exceeds your baseline average QPS by more
than 50%, and only when the backend service's load is more than 90% of its
capacity.
gcloud
Create a security policy with the name POLICY_NAME ,
or use an existing security policy.
If Adaptive Protection is not already enabled, use the following
command to enable Adaptive Protection for your policy:
gcloud compute security-policies update POLICY_NAME \
--enable-layer7-ddos-defense
Apply the security policy to a backend service.
Use the following command to configure Adaptive Protection with
customized detection thresholds:
gcloud compute security-policies add-layer7-ddos-defense-threshold-config POLICY_NAME \
--threshold-config-name=my-customized-thresholds \
--detection-load-threshold=0.9 \
--detection-relative-to-baseline-qps=1.5
What's next
Google Cloud Armor Adaptive Protection overview
Google Cloud Armor Adaptive Protection use cases
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
