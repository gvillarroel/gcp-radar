---
title: "Install the Endpoint Verification extension \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/endpoint-verification/docs/self-install-extension
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/endpoint-verification/docs/creating-device-access-level
source_metadata:
  url: https://docs.cloud.google.com/endpoint-verification/docs/self-install-extension
  title: "Install the Endpoint Verification extension \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Endpoint Verification
Guides
Send feedback
Install the Endpoint Verification extension
Stay organized with collections
Save and categorize content based on your preferences.
This document shows how employees of an organization can install the Endpoint Verification
extension on their devices.
As an employee of an organization, you can access your corporate account on a
company-owned device or a personal device. To ensure that you can securely
access your organization's data from any of your devices, the administrator of your
organization might either install Endpoint Verification on your devices or require
you to install the Endpoint Verification Chrome extension on your devices.
Before you begin
Ensure that your device is running one of the following operating systems:
ChromeOS
Apple® Mac® OS X® El Capitan (10.11) or later
Microsoft® Windows® 10 and 11
Linux® Debian® and Ubuntu®
Install the Endpoint Verification extension
Open the Chrome browser and install the Endpoint Verification extension .
On the browser toolbar, if you see Exception
on the extension, click the
extension to open it.
If prompted, click Add account and enter your corporate email
address and password.
Note: For the devices running ChromeOS, only the account that is used to
sign in to the device is supported.
Information about your computer automatically synchronizes to your
administrator.
If you want to manually sync information, on the toolbar, click
Endpoint Verification > Sync now .
Install the Endpoint Verification helper app
After installing the Endpoint Verification extension, if you see a message that the
helper app is required on your device, do the following:
Mac or Windows
Click Install it .
Follow the steps to install the helper app.
Click the extension again and then click Sync now .
Linux
To open a terminal, click Activities and enter terminal ,
and select the terminal icon from the results.
Add the package source and import the key:
Create the keyrings directory:
sudo mkdir -m 0755 -p /etc/apt/keyrings/
Import Google's public GPG key and convert it to a binary
that is required for package verification:
curl -fsSL https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo gpg --dearmor -o /etc/apt/keyrings/endpoint-verification.gpg
Register Endpoint Verification to use the GPG key to verify the
authenticity of the software:
echo "deb [signed-by=/etc/apt/keyrings/endpoint-verification.gpg] https://packages.cloud.google.com/apt endpoint-verification main" | sudo tee /etc/apt/sources.list.d/endpoint-verification.list > /dev/null
Update and install Endpoint Verification:
Update the package index files to get the latest list of available packages:
sudo apt-get update
Install Endpoint Verification:
sudo apt-get install endpoint-verification
Open the Chrome browser and on the toolbar, click
Endpoint Verification > Sync now .
What's next
Troubleshoot issues with Endpoint Verification
Uninstall the Endpoint Verification extension
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
