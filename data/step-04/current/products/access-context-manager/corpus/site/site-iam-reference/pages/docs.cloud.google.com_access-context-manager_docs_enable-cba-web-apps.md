---
title: "Enable certificate-based access for web applications \_|\_ Access Context\
  \ Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/access-context-manager/docs/enable-cba-web-apps
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/access-context-manager/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/access-context-manager/docs/enable-cba-web-apps
  title: "Enable certificate-based access for web applications \_|\_ Access Context\
    \ Manager \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Enable certificate-based access for web applications | Access Context Manager | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español – América Latina
Français
Indonesia
Italiano
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Access Context Manager
Start free
Overview
Guides
Reference
Resources
More
Technology areas
More
Overview
Guides
Reference
Resources
Cross-product tools
More
Console
How-to guides
All how-to guides
Access control with IAM
Create an access policy
Create a basic access level
Create a custom access level
Use mobile devices with access levels
Manage an access policy
Create custom constraints
Manage access levels
Make bulk changes to access levels
Audit logging
Use Context-Aware Access
Set up context-aware access
Define access policies using access levels
Apply policies to user groups with access bindings
Configure session controls for re-authentication
Configure a credential strength policy
Configure Chrome browser attributes
Configure enterprise certificate conditions
Configure time and date conditions
Manage access bindings
Context-aware access enforcement points
Use certificate-based access
Certificate-based access overview
Understand mutual TLS at Google Cloud
Set up certificate-based access
Create access levels for certificate-based access
Enforce certificate-based access for a user group
Enforce certificate-based access with VPC Service Controls
Enable certificate-based access in client applications
Enable certificate-based access for web applications
Enable certificate-based access for VMs
Setting up Endpoint Verification
Enable certificate-based access with your enterprise certificates
Enable certificate-based access with Endpoint Verification certificates
Configure certificate-based access for Workload Identity Federation
Concepts
All concepts
Overview
Scoped policies
Custom access levels
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Overview
Before you begin
Set up mTLS for the external HTTPS load balancer Create a trust config
Create a TLS policy to enable mTLS on your external load balancer
Attach a TLS policy to a target HTTPS policy
Create an access level that requires certificates
Enforce certificate-based access using Identity-Aware Proxy (IAP)
Configure the browser to automatically select the certificate
Home
Documentation
Security
Access Context Manager
Guides
Was this helpful?
Send feedback
Enable certificate-based access for web applications
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Overview
Before you begin
Set up mTLS for the external HTTPS load balancer Create a trust config
Create a TLS policy to enable mTLS on your external load balancer
Attach a TLS policy to a target HTTPS policy
Create an access level that requires certificates
Enforce certificate-based access using Identity-Aware Proxy (IAP)
Configure the browser to automatically select the certificate
This page describes how to enable certificate-based
access
(CBA) for your web applications. You can use CBA to secure access from trusted
devices to enterprise web applications running on Google Cloud.
Overview
CBA for web applications uses the Chrome Enterprise Premium Context-Aware Access features and
Google Cloud networking to secure access using mutual
TLS (mTLS). Following are the main
components that you work with to enable CBA for web applications:
Access Context Manager: lets you create access levels that require certificates when
determining access to web applications.
Identity-Aware Proxy (IAP): authenticates user access to web applications.
Google Cloud HTTPS load balancer: provides mutual authentication (mTLS) between
users and web applications.
Chrome Enterprise Policy: provides mutual authentication (mTLS) between
users and web applications when using the Chrome browser.
Before you begin
Verify that you have a current version of the Google Cloud CLI
by running the following command:
See more code actions.
Light code theme
Dark code theme
gcloud components update
Set up m TLS for the external HTTPS load balancer
Follow the instructions to set up
the HTTPS external load balancer. Note the name of the target HTTPS proxy that
is created, because you will need it in a later step.
Create a trust config
Create a trust config to
represent your type of Public Key Infrastructure (PKI).
To complete this task, you must have the
certificatemanager.trustconfigs.create
permission on the target Google Cloud project.
You can create a trust config using a Google-issued certificate (Method 1), using your own certificate (Method 2), or using a self-signed certificate with Endpoint Verification (Method 3).
Method 1 Method 2 Method 3
More
Use a Google-issued certificate to create a trust config.
Complete the steps to Create a root CA .
Fetch the PEM file contents:
gcloud privateca roots describe ROOT_CA_ID \
--pool= POOL_ID \
--location= CA_LOCATION \
--format='value(pemCaCertificates)'
Replace the following:
ROOT_CA_ID : The root certificate ID.
POOL_ID : The root certificate pool ID.
CA_LOCATION : The CA location.
Retrieve the root certificate, returned in the pemCaCertificates field.
The certificate is the string between the BEGIN CERTIFICATE and END
CERTIFICATE markers, and includes both markers.
Save the root certificate in PEM format to a file.
Create a trust config:
Set the following environment variables:
ROOT_PEM_FILE= TRUST_ANCHOR_PATH
INT_PEM_FILE1= IM_CERT_PATH
INT_PEM_FILE2= SECOND_IM_CERT_PATH
Replace the following:
TRUST_ANCHOR_PATH : The path to your PEM-encoded trust anchor.
IM_CERT_PATH : The path to your PEM-encoded intermediate certificate.
SECOND_IM_CERT_PATH : The path to your second PEM-encoded intermediate certificate.
Prepare the contents of the trust config YAML file:
ROOT=$(cat ROOT_PEM_FILE | sed 's/^[ ]*//g' | tr '\n' $ | sed 's/\$/\\n/g')
INT_1=$(cat INT_PEM_FILE1 | sed 's/^[ ]*//g' | tr '\n' $ | sed 's/\$/\\n/g')
INT_2=$(cat INT_PEM_FILE2 | sed 's/^[ ]*//g' | tr '\n' $ | sed 's/\$/\\n/g')
Create the trust config YAML file:
cat << EOF > trust_config.yaml
name: "${TRUST_CONFIG_NAME?}"
trustStores:
- trustAnchors:
- pemCertificate: "${ROOT?}"
intermediateCas:
- pemCertificate: "${INT_1?}"
- pemCertificate: "${INT_2?}"
EOF
This YAML file defines a trust config named TRUST_CONFIG_NAME . The
trust config contains one trust store, which includes the root
certificate and two intermediate certificates.
Import the trust config into Google Cloud Certificate Manager:
gcloud certificate-manager trust-configs import TRUST_CONFIG_NAME \
--project= GCP_PROJECT \
--source=${PWD?}/trust_config.yaml
Replace the following:
TRUST_CONFIG_NAME : The name of your trust config.
GCP_PROJECT : The Google Cloud project ID.
If you deploy a more complex structure with intermediate CAs signed by the
root, ensure that you add your intermediates as intermediateCAs .
Use your own PKI deployment with existing certificates to create a trust config.
This type of trust config assumes a basic trust store with a single trust
anchor representing a root certificate. No intermediate certificates are
specified.
Create a trust config:
Set the following environment variables:
ROOT_PEM_FILE= TRUST_ANCHOR_PATH
INT_PEM_FILE1= IM_CERT_PATH
INT_PEM_FILE2= SECOND_IM_CERT_PATH
Replace the following:
TRUST_ANCHOR_PATH : The path to your PEM-encoded trust anchor.
IM_CERT_PATH : The path to your PEM-encoded intermediate certificate.
SECOND_IM_CERT_PATH : The path to your second PEM-encoded
intermediate certificate.
Prepare the contents of the trust config YAML file:
ROOT=$(cat ROOT_PEM_FILE | sed 's/^[ ]*//g' | tr '\n' $ | sed 's/\$/\\n/g')
INT_1=$(cat INT_PEM_FILE1 | sed 's/^[ ]*//g' | tr '\n' $ | sed 's/\$/\\n/g')
INT_2=$(cat INT_PEM_FILE2 | sed 's/^[ ]*//g' | tr '\n' $ | sed 's/\$/\\n/g')
Create the trust config YAML file:
cat << EOF > trust_config.yaml
name: "${TRUST_CONFIG_NAME?}"
trustStores:
- trustAnchors:
- pemCertificate: "${ROOT?}"
intermediateCas:
- pemCertificate: "${INT_1?}"
- pemCertificate: "${INT_2?}"
EOF
This YAML file defines a trust config named TRUST_CONFIG_NAME . The
trust config contains one trust store, which includes the root
certificate and two intermediate certificates.
Import the trust config into Google Cloud Certificate Manager:
gcloud certificate-manager trust-configs import TRUST_CONFIG_NAME \
--project= GCP_PROJECT \
--source=${PWD?}/trust_config.yaml
Replace the following:
TRUST_CONFIG_NAME : The name of your trust config.
GCP_PROJECT : The Google Cloud project ID.
If you are using a Chrome browser, and want to use a self-signed certificate
with Endpoint Verification, follow the instructions in this
section.
Follow the instructions to deploy Endpoint Verification
for your organization. Endpoint Verification automatically deploys a Google-issued, self-signed
certificate to your devices and you don't have to create a trust config.
Create a TLS policy to enable m TLS on your external load balancer
If you used Method 3, you can skip this step.
To complete this task, you must have the following permissions:
certificatemanager.trustconfigs.use
on the trust config you created for this ServerTlsPolicy
networksecurity.serverTlsPolicies.create
on the target Google Cloud project
Create the server TLS policy YAML file:
cat << EOF > server_tls_policy.yaml
name: " SERVER_TLS_POLICY_NAME "
mtlsPolicy:
clientValidationMode: ALLOW_INVALID_OR_MISSING_CLIENT_CERT
clientValidationTrustConfig: projects/ GCP_PROJECT /locations/global/trustConfigs/ TRUST_CONFIG_NAME
EOF
Replace the following:
SERVER_TLS_POLICY_NAME : The name of the server TLS policy.
GCP_PROJECT : The Google Cloud project ID.
TRUST_CONFIG_NAME : The trust config that you
created in a previous step.
For information about the client validation options for clientValidationMode , see MTLS client validation modes .
Import the server TLS policy YAML to the Google Cloud project:
gcloud network-security server-tls-policies import ${SERVER_TLS_POLICY_NAME?} \
--project= GCP_PROJECT \
--source=${PWD?}/server_tls_policy.yaml \
--location=global
Replace GCP_PROJECT with the Google Cloud project ID.
After you create a TLS policy, you cannot modify it. If you want to make changes to an
existing TLS policy, delete the existing TLS policy and create new one.
Attach a TLS policy to a target HTTPS policy
To complete this task, you must have the compute.targetHttpsProxies.get permission on the target Google Cloud project.
Export your existing target HTTPS proxy into a local
file:
gcloud compute target - https - proxies export TARGET_HTTPS_PROXY_NAME \
-- project = GCP_PROJECT \
-- global \
-- destination =$ { PWD ? } / xlb - mtls - target - proxy . yaml
Replace the following:
TARGET_HTTPS_PROXY_NAME : The target HTTPS proxy.
GCP_PROJECT : The Google Cloud project ID.
Append the ServerTlsPolicy to the target HTTPS proxy configuration:
To complete this task, you must have the following permissions:
networksecurity.serverTlsPolicies.use on the ServerTlsPolicy you created
for the target HTTPS proxy
compute.targetHttpsProxies.update on the target Google Cloud project
echo "serverTlsPolicy:
//networksecurity.googleapis.com/projects/ GCP_PROJECT /locations/global/serverTlsPolicies/ SERVER_TLS_POLICY_NAME " >> xlb-mtls-target-proxy.yaml
Replace the following:
GCP_PROJECT : The Google Cloud project ID.
SERVER_TLS_POLICY_NAME : The server TLS policy.
Update the target HTTPS proxy by importing the new config from the local
file:
gcloud compute target-https-proxies import TARGET_HTTPS_PROXY_NAME \
--project= GCP_PROJECT \
--global \
--source=${PWD?}/xlb-mtls-target-proxy.yaml
Replace the following:
TARGET_HTTPS_PROXY_NAME : The target HTTPS proxy.
GCP_PROJECT : The Google Cloud project ID.
Create an access level that requires certificates
Console gcloud
More
Follow the instructions to create a custom access level .
Add the following expression to your custom access level:
If you created a trust config (Method 1 or Method 2), add the following
expression in the Conditions field of your custom access level to use
PKI-attestation binding when authenticating:
certIsPkiAttested(origin, [" TLS_POLICY_FULL_RESOURCE_PATH1 ", " TLS_POLICY_FULL_RESOURCE_PATH2 ", …]) == true
Where TLS_POLICY_FULL_RESOURCE_PATH1 and TLS_POLICY_FULL_RESOURCE_PATH2 are the paths that represent
multiple trust configs: certificatemanager.googleapis.com/projects/ GCP_PROJECT /locations/global/trustConfigs/ TRUST_CONFIG_NAME .
You must provide at least one trust config path.
Replace the following:
GCP_PROJECT : The Google Cloud project ID.
TRUST_CONFIG_NAME : The name of your trust config.
If you used a Google-issued, self-signed
certificate (Method 3), add the following expression in the
Conditions field of your custom access level to use the certificate
binding when authenticating:
certificateBindingState(origin, device) == CertificateBindingState.CERT_MATCHES_EXISTING_DEVICE
If you created a trust config (Method 1 or Method 2), run the following
command to create a custom access level that uses
PKI-attestation binding when authenticating:
gcloud access-context-manager levels create ACCESS_LEVEL_NAME \
--title= TITLE \
--custom-level-spec= FILE \
--description= DESCRIPTION \
--policy= POLICY_NAME
Replace the following:
ACCESS_LEVEL_NAME : A unique name for the access level.
TITLE : A human-readable title.
FILE : A YAML file that contains the following expression:
certIsPkiAttested(origin, [" TLS_POLICY_FULL_RESOURCE_PATH1 ", " TLS_POLICY_FULL_RESOURCE_PATH2 ", …]) == true
Where TLS_POLICY_FULL_RESOURCE_PATH1 and TLS_POLICY_FULL_RESOURCE_PATH2 are the paths that represent
multiple trust configs: certificatemanager.googleapis.com/projects/ GCP_PROJECT /locations/global/trustConfigs/ TRUST_CONFIG_NAME .
You must provide at least one trust config path.
Replace the following:
GCP_PROJECT : The Google Cloud project ID.
TRUST_CONFIG_NAME : The name of your trust config.
DESCRIPTION : A long-form description of the access level.
POLICY_NAME : Your organization's access policy.
If you don't have a trust config, because you are using a self-signed
certificate with Endpoint Verification (Method 3), add the following expression to your
custom access level:
certificateBindingState(origin, device) == CertificateBindingState.CERT_MATCHES_EXISTING_DEVICE
Enforce certificate-based access using Identity-Aware Proxy (IAP)
In the CBA for web applications architecture, IAP provides
principal-based policy enforcement
to protect your web applications from untrusted devices.
Complete the following steps to enable IAP and configure the CBA policy:
If you don't have IAP set up, follow the instructions
to set up IAP.
Go to IAP to attach the access level you created earlier:
Go to IAP
Select the resource that you want to secure with CBA, and then click Settings .
In the Access Levels field, enter the name of the access level you created .
To use the Google Cloud CLI to configure a CBA policy in IAP, see the Google Cloud CLI documentation .
Configure the browser to automatically select the certificate
To have your browser automatically select the certificate when determining access,
complete the steps for your browser.
Chrome Safari Edge
More
Configure the AutoSelectCertificateForURLs Chrome policy so that Chrome uses
the correct certificate during the mTLS handshake.
Ensure that the Chrome browser is managed by the Chrome browser cloud
management or Windows group policy:
Windows, macOS, Linux: Complete the steps to set up a managed Chrome profile .
Chrome: Enroll the device to the enterprise.
Add the AutoSelectCertificateForUrls policy:
In the admin console , go to
Devices > Chrome > Settings > User & Browser Settings > Client certificates .
Select an organization.
Add an AutoSelectCertificateForUrls policy for your web application URL and root certificate information .
For more information, see the documentation on the policy schema . Following is an example policy configuration that uses the certificate from Endpoint Verification:
{
"pattern":"https://[*.].mysite.com",
"Filter":{
"ISSUER":{
"CN":"Google Endpoint Verification"
}
}
}
Configure the identity preference:
Open the Keychain Access app, and then select All Items .
Select the certificate that you want to configure.
Click File > New Identity Preference .
Enter the URL and click Add .
This creates a new identity preference entry in your Keychain that you can update.
Set the AutoSelectCertificateForUrls Edge policy by following the instructions
in the Edge documentation .
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español – América Latina
Français
Indonesia
Italiano
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
