---
title: "Enable TLS inspection \_|\_ Secure Web Proxy \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secure-web-proxy/docs/enable-tls-inspection
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/secure-web-proxy/docs/initial-setup-steps
source_metadata:
  url: https://docs.cloud.google.com/secure-web-proxy/docs/enable-tls-inspection
  title: "Enable TLS inspection \_|\_ Secure Web Proxy \_|\_ Google Cloud Documentation"
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
Enable TLS inspection
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to enable Transport Layer Security (TLS) inspection
for your Secure Web Proxy instance. Secure Web Proxy offers a
TLS inspection service that lets you intercept the TLS traffic, inspect the
encrypted request, and enforce security policies. For more information about
TLS inspection, see TLS inspection overview .
Before you begin
Before you configure your Secure Web Proxy instance for TLS inspection,
complete the tasks in the following sections.
Enable Certificate Authority Service
Secure Web Proxy uses
Certificate Authority Service
to generate the certificates used for TLS inspection.
To enable CA Service, use the following command:
gcloud services enable privateca.googleapis.com
Create a CA pool
A certificate authority (CA) pool
is a collection of multiple CAs with a common certificate issuance policy and
Identity and Access Management (IAM) policy. CA pools provide
the ability to rotate trust chains without any outage or downtime for
their payloads.
You must create a CA pool before you can use CA Service to create a CA. This section walks you through the
permissions that you need to complete this task and then describes how to create
a CA pool.
To generate certificates, TLS inspection uses a separate service account for each project called
service-[ PROJECT_NUMBER ]@gcp-sa-networksecurity.iam.gserviceaccount.com .
Make sure that you have granted permissions to this service account to use
your CA pool. If this access is revoked, then TLS inspection stops working.
To retrieve the PROJECT_NUMBER by using the
PROJECT_ID of the CA pool project, use the following
command:
gcloud projects describe < var>PROJECT_ID < / var >
-- format = "value(projectNumber)"
Important: To check the current permissions granted to a service account, open
IAM . In the
View by principals tab, locate the service account in the table. Then, under
the Security insights column, click the link specified for the service
account. The current permissions of the service account are displayed in a pane.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or IAM roles.
Permissions
networksecurity.tlsInspectionPolicies.create
networksecurity.tlsInspectionPolicies.get
networksecurity.tlsInspectionPolicies.list
networksecurity.tlsInspectionPolicies.delete
networksecurity.tlsInspectionPolicies.update
Roles
Compute Network Admin ( roles/compute.networkAdmin )
Certificate Manager Editor ( roles/certificatemanager.editor )
Optional: Security Policy Admin ( roles/compute.orgSecurityPolicyAdmin )
To create the pool, use the gcloud privateca pools create command and
specify the subordinate pool ID, tier, project ID, and location.
gcloud privateca pools create SUBORDINATE_POOL_ID \
--tier= TIER \
--project= PROJECT_ID \
--location= REGION
Replace the following:
SUBORDINATE_POOL_ID : name of the CA pool
TIER : CA tier, either devops or enterprise
We recommend that you create the CA pool in the devops tier because
tracking individually issued certificates is unnecessary.
PROJECT_ID : ID of the CA pool project
REGION : location of the CA pool
Important: The certificates that are generated for TLS inspection have a short
lifespan. After the certificates are issued, they can't be changed or revoked
by using CA Service.
Create a subordinate CA pool
If you have multiple certificate issuance scenarios, then you can create a subordinate CA for each of those
scenarios. You can create a subordinate CA in a CA pool ,
and the root CA
signs all the CAs in that CA pool. These certificates are used to sign server
certificates that are generated for TLS inspection.
To create a subordinate CA pool, use one of the following methods.
Create a subordinate CA pool by using an existing root CA stored within Certificate Authority Service
To generate a subordinate CA, do the following:
Create a CA pool
Create subordinate CAs within a CA pool
Create a subordinate CA pool by using an existing root CA held externally
To generate a subordinate CA, do the following:
Create a CA pool
Create subordinate CAs signed by an external root CA
Create a root CA
If a root CA doesn't exist, then you can create one within CA Service.
To create a root CA, do the following:
Create a root CA
Create a subordinate CA pool by using an existing root
CA stored within CA Service
Create a service account
A service account helps provide the
necessary permissions for TLS inspection without compromising either the
security of your user accounts or your Secure Web Proxy instance itself.
If you don't have a service account, you must create one and then grant
the required permissions to that service account.
Create a service account.
gcloud beta services identity create \
--service=networksecurity.googleapis.com \
--project= PROJECT_ID
In response, the Google Cloud CLI creates a service account called
service-[PROJECT_NUMBER]@gcp-sa-networksecurity.iam.gserviceaccount.com .
To retrieve the PROJECT_NUMBER by using the
PROJECT_ID of the CA pool project, use the
following command:
gcloud projects describe PROJECT_ID
--format="value(projectNumber)"
For the service account that you created, grant permissions to generate
certificates with your CA pool.
gcloud privateca pools add-iam-policy-binding CA_POOL \
--member='serviceAccount: SERVICE_ACCOUNT ' \
--role='roles/privateca.certificateManager' \
--location=' REGION '
Configure Secure Web Proxy for TLS inspection
You can proceed with the tasks in this section only after you have completed
the prerequisite tasks listed in the Before you begin section.
To configure TLS inspection, complete the tasks in the following sections.
Create a TLS inspection policy
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles.
Permissions
certificatemanager.trustconfigs.list
certificatemanager.trustconfigs.use
privateca.caPools.list
privateca.caPools.use
privateca.certificateAuthorities.list
networksecurity.operations.get
networksecurity.tlsInspectionPolicies.list
networksecurity.tlsInspectionPolicies.create
Roles
Compute Security Admin role ( compute.securityAdmin )
Compute Network Admin role ( compute.networkAdmin )
Console
In the Google Cloud console, go to the TLS inspection policies page.
Go to TLS inspection policies
In the project selector menu, select your project.
Click Create TLS Inspection Policy .
For Name , enter a name.
Caution: Don't include sensitive information such as personally
identifiable information or security data in the TLS inspection policy
name.
Optional: In the Description field, enter a description.
In the Region list, select the region for which you want to create
the TLS inspection policy.
In the CA pool list, select the CA pool from where you want to create
the certificates.
If you haven't configured a CA pool, then click New Pool and follow
the instructions in Create a CA pool .
Optional: In the Minimum TLS version list, select the minimum TLS
version supported by the policy.
For the Trust Configuration , select any one of the following options:
Public CAs only : select this option if you want to trust servers
with publicly signed certificates.
Private CAs only : select this option if you want to trust servers
with privately signed certificates.
In the Private trust configuration list, select the
trust config with the configured trust store to use for
trusting upstream server certificates.
For more information about how to create a trust config,
see Create a trust config .
Public and private CAs : select this option if you want to use both
public and private CAs.
Optional: In the Cipher suite profile list, select the TLS profile
type. You can choose from any one of the following values:
Compatible : allows the broadest set of clients,
including clients that support only out-of-date TLS features,
to negotiate TLS.
Modern : supports a wide set of TLS features, allowing
modern clients to negotiate TLS.
Restricted : supports a reduced set of TLS features
intended to meet stricter compliance requirements.
Custom : lets you select TLS features individually.
In the Cipher suites list, select the
cipher suites
supported by the custom profile.
Click Create .
gcloud
Create the TLS_INSPECTION_FILE .yaml file. Replace
TLS_INSPECTION_FILE with the required filename.
Add the following code to the YAML file to configure the required
TlsInspectionPolicy:
name : projects/ PROJECT_ID /locations/ REGION /tlsInspectionPolicies/ TLS_INSPECTION_NAME
caPool : projects/ PROJECT_ID /locations/ REGION /caPools/ CA_POOL
Replace the following:
PROJECT_ID : ID of the project
REGION : region in which the policy is to be created
TLS_INSPECTION_NAME : name of the
Secure Web Proxy TLS inspection policy
CA_POOL : name of the CA pool from which
the certificates are to be created
The CA pool must exist within the same region.
Import the TLS inspection policy
Import the TLS inspection policy that you created in the previous step:
gcloud network-security tls-inspection-policies import TLS_INSPECTION_NAME \
--source= TLS_INSPECTION_FILE .yaml \
--location= REGION
Add the TLS inspection policy to the security policy
Console
Create the web proxy policy
In the Google Cloud console, go to the SWP Policies page.
Go to SWP Policies
Click add_box Create a policy .
Enter a name for the policy that you want to create,
such as myswppolicy .
Enter a description of the policy, such as My new swp
policy .
In the Regions list, select the region where you want to
create the Secure Web Proxy policy.
To configure TLS inspection, select Configure TLS inspection .
In the TLS inspection policy list, select the TLS
inspection policy that you created.
If you want to create rules for your policy, click
Continue , and then click Add rule . For details, see
Create Secure Web Proxy rules .
Click Create .
Create Secure Web Proxy rules
In the Google Cloud console, go to the SWP Policies page.
Go to SWP Policies
In the project selector menu, select your organization ID
or the folder that contains your policy.
Click the name of your policy.
Click add_box Add rule .
Populate the rule fields:
Name
Description
Status
Priority : the numeric evaluation order of the rule. The rules are
evaluated from highest to lowest priority where 0 is the highest
priority.
In the Action section, specify whether connections that match
the rule are allowed ( Allow ) or denied ( Deny ).
In the Session Match section, specify the criteria for
matching the session. For more information about the syntax for
SessionMatcher , see the
CEL matcher language reference .
To enable TLS inspection, select Enable TLS inspection .
In the Application Match section, specify the criteria for
matching the request. If you don't enable the rule for TLS
inspection, then the request can only match HTTP traffic.
Click Create .
Click Add rule to add another rule.
Click Create to create the policy.
Set up a web proxy
In the Google Cloud console, go to the Web Proxies page.
Go to Web Proxies
Click add_box Create a secure web proxy .
Enter a name for the web proxy that you want to create,
such as myswp .
Enter a description of the web proxy, such as My new swp .
In the Regions list, select the region where you want to
create the web proxy.
In the Network list, select the network where you want to
create the web proxy.
In the Subnetwork list, select the subnetwork where you want to
create the web proxy.
Optional: Enter the Secure Web Proxy IP address. You can enter an IP
address from the range of Secure Web Proxy IP addresses that reside
in the subnetwork you created in the previous step.
If you don't enter the IP address, then your Secure Web Proxy
instance automatically chooses an IP address from the selected
subnetwork.
In the Certificate list, select the certificate that you want
to use to create the web proxy.
In the Policy list, select the policy that you created
to associate the web proxy with.
Click Create .
Cloud Shell
Create the file policy.yaml :
description : basic Secure Web Proxy policy
name : projects/ PROJECT_ID /locations/ REGION /gatewaySecurityPolicies/policy1
tlsInspectionPolicy : projects/ PROJECT_ID /locations/ REGION /tlsInspectionPolicies/ TLS_INSPECTION_NAME
Create the Secure Web Proxy policy:
gcloud network-security gateway-security-policies import policy1 \
--source=policy.yaml --location= REGION
Create the file rule.yaml :
name : projects/ PROJECT_ID /locations/ REGION /gatewaySecurityPolicies/policy1/rules/allow-example-com
description : Allow example.com
enabled : true
priority : 1
basicProfile : ALLOW
sessionMatcher : host() == 'example.com'
applicationMatcher : request.path.contains('index.html')
tlsInspectionEnabled : true
Note: You must enable TLS inspection for each rule. To enable TLS inspection,
set the tlsInspectionEnabled attribute to true for each rule that uses
applicationMatcher to match the HTTPS traffic. The TLS
inspection for the rule is limited to the traffic that matches the
sessionMatcher attribute of the rule. For more information, see
TLS inspection rule evaluation .
Create the security policy rule.
gcloud network-security gateway-security-policies rules import allow-example-com \
--source=rule.yaml \
--location= REGION \
--gateway-security-policy=policy1
To attach a TLS inspection policy to an existing
security policy, create the file
POLICY_FILE .yaml. Replace
POLICY_FILE with your filename.
description : My Secure Web Proxy policy
name : projects/ PROJECT_ID /locations/ REGION /gatewaySecurityPolicies/ POLICY_NAME
tlsInspectionPolicy : projects/ PROJECT_ID /locations/ REGION /tlsInspectionPolicies/ TLS_INSPECTION_NAME
What's next?
Use a URL list to create policies
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
