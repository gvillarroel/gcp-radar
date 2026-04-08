---
title: "Enable certificate-based access with Endpoint Verification certificates \_\
  |\_ Access Context Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/access-context-manager/docs/cba-endpoint-verification-certs
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/access-context-manager/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/access-context-manager/docs/cba-endpoint-verification-certs
  title: "Enable certificate-based access with Endpoint Verification certificates\
    \ \_|\_ Access Context Manager \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Enable certificate-based access with Endpoint Verification certificates | Access Context Manager | Google Cloud Documentation
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
Before you begin
Set up Endpoint Verification
Configure users' Chrome browser (Optional) Verify the policy configuration
Configure command-line tools
Using operating systems not fully supported
Home
Documentation
Security
Access Context Manager
Guides
Was this helpful?
Send feedback
Enable certificate-based access with Endpoint Verification certificates
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Set up Endpoint Verification
Configure users' Chrome browser (Optional) Verify the policy configuration
Configure command-line tools
Using operating systems not fully supported
This page describes how to enable certificate-based access
(CBA)
with your Endpoint Verification provisioned certificates.
You can use Endpoint Verification to automatically provision self-signed certificates for
a device. Endpoint Verification provisioned certificates let you use CBA without a PKI
infrastructure. These certificates are stored in keychain on macOS, in
certificate stores on Windows, and in file systems on Linux.
If you have a PKI infrastructure, see
Enable certificate-based access with your enterprise certificates to enable CBA.
You can enable Endpoint Verification provisioned certificates on the following operating systems:
macOS and Windows using the Chrome browser
macOS, Windows, and Linux using the Google Cloud CLI
If your operating system is not listed, see
Using operating systems not fully supported .
Before you begin
Before continuing, ensure that you meet the following requirements:
You created CBA access levels
for your Google Cloud project.
You enforce CBA on your Google Cloud resources using one of the following
methods:
(Recommended) Configure rules around users by enforcing certificate-based
access with Context-Aware Access policies .
Configure rules around data by
enforcing certificate-based access with VPC Service Controls .
You are authorized to go through the mTLS connection process
using a valid client certificate.
Set up Endpoint Verification
Follow the instructions to install the Chrome Endpoint Verification extension
for all user devices in your organization. The extension provisions self-signed
certificates onto your devices and syncs certificate metadata to Google Cloud.
Install the Endpoint Verification helper app . This app is required for
using Endpoint Verification with CBA.
Configure users' Chrome browser
To configure users' Chrome browser to use Endpoint Verification provisioned certificates,
you must configure the AutoSelectCertificateForURLs Chrome policy to allow
Endpoint Verification to search for the device certificate and collect it through Chrome.
Ensure that users' Chrome browser is
managed by Chrome Browser Cloud Management .
In the Google Admin console , add the
AutoSelectCertificateForUrls policy.
Go to Devices > Chrome > Settings > User & Browser Settings > Client certificates .
Select the appropriate organizational unit.
Add a policy. The following example adds the AutoSelectCertificateForUrls
policy:
{"pattern":"https://[*.]clients6.google.com","filter":{"ISSUER":{"CN":"Google Endpoint Verification"}}}
{"pattern":"https://console-secure.cloud.google.com","filter":{"ISSUER":{"CN":"Google Endpoint Verification"}}}
{"pattern":"https://storage.mtls.cloud.google.com","filter":{"ISSUER":{"CN":"Google Endpoint Verification"}}}
After you complete the configuration, users can access protected
Google Cloud resources with the Chrome browser at
console-secure.cloud.google.com .
(Optional) Verify the policy configuration
In the Chrome browser, enter chrome://policy .
Verify that AutoSelectCertificateForUrls is listed under Chrome Policies .
Verify that the value for Applies to is Machine . On ChromeOS, the
value for Applies to is Current User .
Ensure that the status for the policy does not have a conflict. If the status
has a conflict, see Understand Chrome policy management
for information.
Configure command-line tools
You can configure the following tools to use Endpoint Verification provisioned certificates:
The Google Cloud CLI
The Terraform CLI (The gcloud CLI is needed to install and
configure helper components.)
Because device certificates are stored in macOS and Windows keystores, the
gcloud CLI is bundled with the Enterprise Certificate Proxy (ECP)
open source component to interact with the key management APIs.
If you're using a Windows system, you must have the Visual Studio C++ runtime
library installed.
Install the gcloud CLI .
Install with the bundled Python option enabled.
Enable CBA .
For macOS and Linux, download and then run the install.sh script.
./google-cloud-sdk/install.sh
Linux users, go to the
Enable CBA and Endpoint Verification provisioned certificates step.
macOS and Windows users, complete the following steps.
Install the ECP helper component with the gcloud CLI.
gcloud components install enterprise-certificate-proxy
Initialize the ECP certificate configuration with the gcloud CLI.
macOS Windows
More
gcloud auth enterprise-certificate-config create macos \
--issuer="Google Endpoint Verification"
gcloud auth enterprise-certificate-config create windows \
--issuer="Google Endpoint Verification" \
--provider=current_user \
--store=MY
(Optional) Configure the ECP certificate manually by running the following
command.
macOS Windows
More
The ECP configuration is stored in a JSON file, located in
~/.config/gcloud/certificate_config.json .
{
"cert_configs": {
"macos_keychain": {
"issuer": "Google Endpoint Verification"
}
},
"libs": {
"ecp": "<YOUR_GCLOUD_INSTALL_PATH>/google-cloud-sdk/bin/ecp",
"ecp_client": "<YOUR_GCLOUD_INSTALL_PATH>/google-cloud-sdk/platform/enterprise_cert/libecp.dylib",
"tls_offload": "<YOUR_GCLOUD_INSTALL_PATH>/google-cloud-sdk/platform/enterprise_cert/libtls_offload.dylib"
}
}
The ECP configuration is stored in a JSON file, located in
%APPDATA%\gcloud\certificate_config.json .
{
"cert_configs": {
"windows_store": {
"store": "MY",
"provider": "current_user",
"issuer":"Google Endpoint Verification"
}
},
"libs": {
"ecp": "C:/Users/<USERNAME>/AppData/Local/Google/Cloud SDK/google-cloud-sdk/bin/ecp.exe",
"ecp_client": "C:/Users/<USERNAME>/AppData/Local/Google/Cloud SDK/google-cloud-sdk/platform/enterprise_cert/libecp.dll",
"tls_offload": "C:/Users/<USERNAME>/AppData/Local/Google/Cloud SDK/google-cloud-sdk/platform/enterprise_cert/libtls_offload.dll"
}
}
Enable CBA and Endpoint Verification provisioned certificates.
For the gcloud CLI, run the following command.
gcloud config set context_aware/use_client_certificate true
For all other command-line tools, including Terraform, set the environment
variable.
export GOOGLE_API_USE_CLIENT_CERTIFICATE=1
Using operating systems not fully supported
If your operating system is not in the list of supported operating
systems , and you want to use Endpoint Verification provisioned
certificates, you can exempt the environments from certificate-based enforcement
and instead protect them using other types of enforcement. For example, by
using a company owned device policy.
Note that certificate-based enforcement offers stronger protection over other
types of enforcement because it enforces every request coming from a device
through the mTLS handshake.
Following is an example of how to exempt environments from certificate-based
enforcement and protect them using another type of enforcement.
In this example, an organization uses macOS, Windows, and ChromeOS
devices. The organization wants to protect access originating from the
Google Cloud console.
Create an access level
that enforces certificate-based access for all of the devices, except for
ChromeOS devices where a company owned device policy is required. Replace the
YAML file with the following custom expression:
certificateBindingState(origin, device) == CertificateBindingState.CERT_MATCHES_EXISTING_DEVICE
|| (device.os_type == OsType.DESKTOP_CHROME_OS && device.is_corp_owned_device)
Complete the steps in the previous procedures.
Create a context-aware policy
Set up Endpoint Verification
Configure users' Chrome browser to use Endpoint Verification provisioned certificates
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
