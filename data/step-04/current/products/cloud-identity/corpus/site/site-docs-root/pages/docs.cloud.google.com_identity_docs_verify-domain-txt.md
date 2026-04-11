---
title: "Verifying your domain \_|\_ Cloud Identity \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/identity/docs/verify-domain-txt
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/identity/docs
source_metadata:
  url: https://docs.cloud.google.com/identity/docs/verify-domain-txt
  title: "Verifying your domain \_|\_ Cloud Identity \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Cloud Identity
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Verifying your domain
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
