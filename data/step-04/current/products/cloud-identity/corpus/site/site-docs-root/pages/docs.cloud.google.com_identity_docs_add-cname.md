---
title: "Verifying your domain \_|\_ Cloud Identity \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/identity/docs/add-cname
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/identity/docs
source_metadata:
  url: https://docs.cloud.google.com/identity/docs/add-cname
  title: "Verifying your domain \_|\_ Cloud Identity \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Verifying your domain | Cloud Identity | Google Cloud Documentation
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
Cloud Identity
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
Cloud Identity
Product overview
How-to Guides
All How-to Guides
Getting started with Cloud Identity
Setting up Cloud Identity
Turning off automatic Google Workspace licensing
Signing up for Cloud Identity Premium
Understanding your Cloud Identity Premium trial
Upgrading and downgrading
Canceling Cloud Identity
Verifying your domain
Verifying your domain
Finding your domain host
Setting up email with your domain
Managing users and licenses
Understanding licensing
Adding users
Adding licenses
Changing a user's license
Managing billing and payments
Billing and payments overview
Setting up paid Cloud Identity service
Comparing Cloud Identity billing plans
Understanding your bill and charges
Updating your bank account details
Maintaining security
Managing file sharing and syncing for Cloud Identity
Monitoring usage and security with reports
Using the Devices API
Setting up the Devices API
Creating devices
Listing and retrieving device users
Updating the client state
Approving a device
Using the Groups API
Setting up the Groups API
Creating and managing Google Groups
Creating and searching for Google Groups
Managing Google Group memberships
Creating and managing security groups
Creating security groups
Searching for security groups
Creating and managing POSIX groups
Creating and updating POSIX groups
Retrieving and listing POSIX groups
Creating and managing dynamic groups
Formulating and testing a membership query
Creating and updating a dynamic group
Retrieving a dynamic group and listing members
Valid user fields for dynamic group queries
Creating and managing identity-mapped groups
Creating and searching for identity-mapped groups
Managing identity-mapped group memberships
Querying group memberships
Managing membership expirations
Using the User Invitation API
Setting up the User Invitation API
Creating and managing user invitations
Using the Policy API
Setting up the Policy API
Listing and getting policies
Contacting support
Concepts
All Concepts
Cloud Identity overview
Devices API overview
Devices overview
Groups API overview
Dynamic groups overview
User Invitation API overview
Policy API overview
Policy API supported settings
Policy API concepts
Editions
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
Step 1: Copy a unique TXT record value from the Google Admin console
Step 2: Paste the unique TXT record value in your domain registrar settings Detailed instructions for popular domain registrars
General instructions
Step 3: Verify ownership in the Google Admin console
Troubleshooting steps
Home
Documentation
Access and resource management
Cloud Identity
Guides
Was this helpful?
Send feedback
On this page
Step 1: Copy a unique TXT record value from the Google Admin console
Step 2: Paste the unique TXT record value in your domain registrar settings Detailed instructions for popular domain registrars
General instructions
Step 3: Verify ownership in the Google Admin console
Troubleshooting steps
Verifying your domain
Stay organized with collections
Save and categorize content based on your preferences.
To make sure no one else uses your domain with Cloud Identity, you need to add
a unique text (TXT) record in your domain settings, which proves you own your
domain.
Note: If you purchased your domain through a Google partner when you signed
up for Cloud Identity, your domain might be verified already.
To verify your domain, you need to complete the following steps:
Copy a unique TXT record value from the Google Admin console
Paste the unique TXT record value in your domain registrar settings
Verify ownership in the Google Admin console
Step 1: Copy a unique TXT record value from the Google Admin console
Sign in with an administrator account to the
Google Admin console.
If you aren't using an administrator account, you can't access the
Admin console.
Go to Account > Domains > Manage domains .
Requires having the
Domain settings
administrator privilege.
Tip: If you recently signed up for Cloud Identity, you can use the
Setup tool .
Click Verify domain for the domain or subdomain you want to verify.
In the domain setup tool, click Get started , then choose your domain
registrar and click Continue . If your domain registrar isn't in the
list, select My domain uses a different host .
In the "TXT record" section, copy the Value , including
"google-site-verification=".
Step 2: Paste the unique TXT record value in your domain registrar settings
Detailed instructions for popular domain registrars
Amazon
(AWS) Route 53
BlueHost
Cloudflare
GoDaddy
Hostinger
IONOS
Namecheap
Shopify
Squarespace
Wix
Wordpress
General instructions
Sign in to the website where you manage your domain. This is where you
can change your domain's DNS records.
Go to your domain's DNS settings. Look for something like DNS
Records , Domain Management , or Name Server Management .
Find the TXT records.
Add a new TXT record, using the following values:
Type
TXT
Name / Host / Alias
Leave this blank, or enter @
If you're adding a subdomain, enter the subdomain value in this
field. (Example: For the subdomain support.your-company.com ,
you enter support )
Value / Answer / Destination
Enter your unique ID, copied from the Google Admin console.
Example:
google-site-verification=abcdef123_456wx789yz
Save your new TXT record.
Wait for the changes to take effect. It can take up to 72 hours for the
new TXT records to be recognized. After your domain registrar publishes the
code, the system recognizes you as the domain owner.
Step 3: Verify ownership in the Google Admin console
Go back to the Admin console, where you copied the unique
TXT record value. If you've already closed that window, follow the
instructions in Step 1 again.
Select Come back here and confirm , then click Confirm . The
Admin console then searches for your unique TXT record and
checks if it's associated with the domain you're verifying.
If the Admin console finds your unique TXT record
associated with the expected domain, you're all set. If it can't find your
TXT record, a message appears telling you that your domain couldn't be
verified. Review the tips on screen and try the troubleshooting steps in
this page for help.
Troubleshooting steps
Double-check your entries : Make sure you entered everything correctly,
following your domain registrar's preferred format.
Wait 72 hours : It can take some time for TXT record changes to be
recognized across the internet.
Contact your domain registrar's support : They can help you troubleshoot
any issues with your DNS settings. If you're not sure which registrar to
contact, read our tips about how to identify your domain
registrar .
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
