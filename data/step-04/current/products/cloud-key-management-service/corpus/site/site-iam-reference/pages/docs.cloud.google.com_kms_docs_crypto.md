---
title: "Including the Pyca cryptography library \_|\_ Cloud Key Management Service\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/crypto
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/crypto
  title: "Including the Pyca cryptography library \_|\_ Cloud Key Management Service\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Including the Pyca cryptography library | Cloud Key Management Service | Google Cloud Documentation
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
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Cloud KMS
Start free
Overview
Guides
Reference
Samples
Resources
More
Technology areas
More
Overview
Guides
Reference
Samples
Resources
Cross-product tools
More
Console
Discover
Product overview
Protection levels
Overview
Cloud HSM overview
Single-tenant Cloud HSM overview
Cloud EKM overview
Reference architectures for Cloud EKM
CMEK overview
Cloud KMS with Autokey
Compatible services
Cloud HSM for Google Workspace
Locations
Get started
Cloud KMS resources
Key purposes and algorithms
Separation of duties
Create and use encryption keys
CMEK best practices
Create and manage Single-tenant Cloud HSM instances
Create keys
Automate key creation
Autokey overview
Enable Autokey
Create a resource with Autokey
Create a key ring
Create a key
Import keys
About key import
Key wrapping
Format a key for import
Manually wrap a key for import
Configure OpenSSL for manual key wrapping
Wrap a key using OpenSSL
Set up automatic key wrapping
Import a key version
Verify an imported key version
Create external keys
Set up Cloud EKM over the internet
Create an EKM connection
Create an external Key
Control access
Manage IAM roles
Use Organization Policy Contraints
Create custom organization policy constraints for Cloud KMS
CMEK organization policies
Control key destruction
Secure data using keys
Key APIs
Use gRPC
Access the API
Sort and filter API list results
Generate random bytes
Use Cloud KMS keys in Google Cloud
Encrypt and decrypt data
Envelope encryption
Additional authenticated data
Asymmetric encryption
Encrypt and decrypt data with a symmetric key
Encrypt and decrypt data with a raw symmetric key
Encrypt and decrypt data with an asymmetric key
Verify end-to-end data integrity
Encrypt application data
Set up client-side encryption with Tink
Onboard to Cloud HSM for Google Workspace
Sign and validate data
Digital signatures
Create and validate signatures
MAC signatures
Create and validate MAC signatures
Share secrets using key encapsulation mechanisms
Key encapsulation mechanisms
Encapsulate and decapsulate using KEMs
Manage keys
Resource consistency
Key version states
View keys and key details
View keys by project
View encryption metrics
View key usage
Get a Cloud KMS resource ID
Retrieve a public key
Attest a Cloud HSM key
Label a key
Create and manage tags
Enable and disable a key version
Destroy and restore a key version
Delete Cloud KMS resources
Rotate keys
About key rotation
Rotate a key
Re-encrypt data
Update external key reference
Monitor
Using Cloud Audit Logging
Cloud KMS Inventory Service audit logging
Monitor state changes
Monitor and adjust quotas
Use Cloud Monitoring
Monitor EKM usage
Troubleshoot
Troubleshoot failed imports
Troubleshoot EKM via VPC errors
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
Installing and using pip
Installing on Linux using a package manager Debian or Ubuntu
Red Hat, CentOS, or SUSE
Enabling site packages
Disabling site packages
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Including the Pyca cryptography library
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Installing and using pip
Installing on Linux using a package manager Debian or Ubuntu
Red Hat, CentOS, or SUSE
Enabling site packages
Disabling site packages
This page describes how to update the Google Cloud CLI to enable support for
automatically wrapping keys for secure import into Cloud Key Management Service, by
installing the
Pyca cryptography library . Version 2.2.0
or higher adds support for the required aes_key_wrap_with_padding wrapping
mechanism.
Before you begin
Install or upgrade the Google Cloud CLI to version 253.0.0 or
higher.
Install the pip command if possible. pip is the platform-independent
command-line interface to the
Python Package Index . The
package manager provided by your operating system may not provide version
2.2.0 or higher of the Pyca cryptographic library.
Important: If you specified your Python version with the
CLOUDSDK_PYTHON environment variable ,
ensure that same version is active when you install the Pyca cryptographic
library.
Installing and using pip
You can install and use pip on Linux, macOS, or Windows systems.
This command installs the library into your user environment, specifying the
minimum version to install. To install system-wide, omit the
--user flag. You may need to install pip as a privileged user.
pip install --user "cryptography>=2.2.0"
After installing the Pyca cryptographic libraries, you must
enable site packages so the gcloud CLI can use
the libraries.
Installing on Linux using a package manager
Follow these instructions on Linux systems if you can't use the pip command.
Debian or Ubuntu
If you use a system based on Debian or Ubuntu, you can install the Pyca
cryptographic library using the apt-get command.
Check the versions of the python-cryptography package available in the
package database. Version 2.2.0 or higher is required.
apt policy python-cryptography
Install the package.
sudo apt-get install python-cryptography
If necessary, specify the version to install.
sudo apt-get install python-cryptography= version
Note: Use an = (equals sign) between the package name and version.
After installing the Pyca cryptographic libraries, you must
enable site packages so the gcloud CLI can use
the libraries.
Red Hat, CentOS, or SUSE
If your system uses RPMs for package management, you can install the Pyca
crytographic library using the yum command.
Check the versions of python-cryptography available in the package
database. Version 2.2.0 or higher is required.
yum --showduplicates list python2-cryptography
Install the package.
sudo yum install python2-cryptography
If necessary, specify the version to install.
sudo yum install python2-cryptography- version
Note: Use a - (hyphen) between the package name and version.
After installing the Pyca cryptographic libraries, you must
enable site packages so the gcloud CLI can use
the libraries.
Enabling site packages
By default, the Google Cloud CLI ignores Python libraries installed on your local
system. To allow the Google Cloud CLI to use the Pyca cryptographic library, you
need to enable site packages.
To enable site packages, set the
CLOUDSDK_PYTHON_SITEPACKAGES environment variable to 1 . With site packages
enabled, the gcloud CLI can use extra libraries outside of the
google-cloud-sdk/lib directory.
Linux macOS Windows
More
export CLOUDSDK_PYTHON_SITEPACKAGES=1
export CLOUDSDK_PYTHON_SITEPACKAGES=1
set CLOUDSDK_PYTHON_SITEPACKAGES=1
Enabling site packages may cause some gcloud CLI commands to fail.
It is recommended that you disable site packages
after importing your keys.
Disabling site packages
After you finish importing keys, it is recommended that you disable site
packages on systems where you use the gcloud CLI. To disable site
packages, set CLOUDSDK_PYTHON_SITEPACKAGES to 0 .
Linux macOS Windows
More
export CLOUDSDK_PYTHON_SITEPACKAGES=0
export CLOUDSDK_PYTHON_SITEPACKAGES=0
set CLOUDSDK_PYTHON_SITEPACKAGES=0
Previous
arrow_back
Wrap a key using OpenSSL
Next
Import a key version
arrow_forward
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
Español
Español – América Latina
Français
Indonesia
Italiano
Português
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
