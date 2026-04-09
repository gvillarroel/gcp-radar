---
title: "Quickstart: Set up Cloud Identity as a Google Cloud administrator \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/identity/docs/setup
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/identity/docs
source_metadata:
  url: https://docs.cloud.google.com/identity/docs/setup
  title: "Quickstart: Set up Cloud Identity as a Google Cloud administrator \_|\_\
    \ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Quickstart: Set up Cloud Identity as a Google Cloud administrator | Google Cloud Documentation
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
Requirements
Sign up for Cloud Identity Free
Sign up for Cloud Identity Premium
Create your Cloud Identity account and first administrator user
Finishing setup
About your Cloud Identity organization
Migrate projects and billing accounts and set permissions
Activate a Cloud Billing account
Troubleshooting steps
What's next
Home
Documentation
Access and resource management
Cloud Identity
Guides
Was this helpful?
Send feedback
On this page
Requirements
Sign up for Cloud Identity Free
Sign up for Cloud Identity Premium
Create your Cloud Identity account and first administrator user
Finishing setup
About your Cloud Identity organization
Migrate projects and billing accounts and set permissions
Activate a Cloud Billing account
Troubleshooting steps
What's next
Set up Cloud Identity as a Google Cloud admin
Stay organized with collections
Save and categorize content based on your preferences.
This document shows you how to set up Cloud Identity and become a
Google Cloud administrator who can manage Google Cloud users
and resources. Setting up Cloud Identity is one of the first steps
that you'll take when creating a Google Cloud resource
hierarchy .
For more information about the differences between these services, see Compare
Cloud Identity features and editions .
Requirements
Cloud Identity Free : You need your company's domain name and the
administrator username and password to your domain registrar to get started.
Cloud Identity Premium : You need your company's domain name to get
started, or you need to purchase a domain during sign-up.
Sign up for Cloud Identity Free
If you're a Google Workspace customer
Sign in with an administrator account to the
Google Admin console.
If you aren't using an administrator account, you can't access the Admin
console.
Go to Billing > Buy or upgrade .
Make sure that you have the
Billing management
administrator privilege.
In Categories , click Cloud Identity .
In Cloud Identity Free , click Get Started .
Follow the guided instructions.
If you're not a Google Workspace customer
Go to the following sign-up page:
https://workspace.google.com/gcpidentity/signup?sku=identitybasic
Follow the guided instructions.
Sign up for Cloud Identity Premium
If you're a Google Workspace customer
Sign in with an administrator account to the
Google Admin console.
If you aren't using an administrator account, you can't access the Admin
console.
Go to Billing > Buy or upgrade .
Make sure that you have the
Billing management
administrator privilege.
Click Cloud Identity .
Next to Cloud Identity Premium , click Start Free Trial .
Follow the guided instructions.
If you're not a Google Workspace customer
Go to the following sign-up page:
https://workspace.google.com/gcpidentity/signup?sku=identitypremium
Follow the guided instructions.
Create your Cloud Identity account and first administrator user
To create your Cloud Identity account and first administrator user using the
Setup Wizard:
For About you , enter your first and last name in the Name
field.
In Current email address you use for work , enter your email
address.
This email address will be used as a recovery address. It must be
different from the address you create that you'll use as your admin
account for Cloud Identity.
In the About your business section, for
Business or organization name , enter your company name.
In the Country/Region list, choose the appropriate country or region.
To set up your domain, click Next .
In the Your Cloud Identity Domain window, add the domain that you've
already purchased for your company. You'll later need to verify that you own
the domain.
In the Create your Cloud Identity account window, enter a username and
password. This account is your Cloud Identity administrator account
and must be different from the email address you entered in step 2. As a
best practice, we recommend that you enter a username with the following
format: admin@example.com
For more details and instructions about verifying your domain, see Verify your
domain for Cloud Identity .
Congratulations! You successfully enabled Cloud Identity and created
your first user.
Finishing setup
After you create your Cloud Identity account and verify your domain,
you're returned to the Google Cloud console. Before you continue, you'll
need to accept the Cloud Identity Agreement on behalf of your
organization. You're then directed to the Identity page.
You now have a fully functioning Cloud Identity account. But you'll also
have the option to complete a few more setup steps in the console, described in
this document.
Note : Later, you might want to return to the Google Admin console to add
more users and create groups. For instructions, see Manage
users .
About your Cloud Identity organization
Your Cloud Identity organization is created after you finish your signup
and setup steps for your Cloud Identity service. This maps a
Cloud Identity account from the Admin console to Google Cloud, and
is used to group all of your projects for billing and management purposes. For
example, using your Cloud Identity organization you can restrict project
access only to Cloud Identity users.
As the first super administrator to access the Google Cloud console, you'll be
assigned the role of Org Owner , and you'll be able to manage the
organization settings and assign policies at the highest level.
Migrate projects and billing accounts and set permissions
Important:
Complete steps 1–2 from your non-administrator Google Cloud
account. This account is typically a personal Gmail account.
Complete steps 3–6 from your Cloud Identity administrator account.
To migrate content from a previous account, follow these steps:
Step 1: Grant access to billing accounts
Follow these steps to migrate projects and billing accounts from
accounts outside of your Cloud Identity organization to your new
Cloud Identity organization. We recommend that you open this page
in a separate tab to use as reference while completing the steps.
Sign in to the Google Cloud account that has the existing
billing account you want to connect to.
Grant your organization administrator from Cloud Identity access to
this billing account.
Go to the left nav and open Billing .
Navigate to the billing account that you want to connect to.
Add the Organization administrator of your Cloud Identity as a
Billing administrator.
Step 2: Grant access to projects
You can grant access to projects one at a time or using the bulk
permissions UI. Step 1 walks through the one-at-a-time method, while
step 2 walks through the bulk method.
Grant your organization administrator Owner access to projects.
Navigate to the IAM and Admin page for the projects
you want to migrate, and add your organization admin's account as
Owner .
Set Bulk permissions (optional).
Navigate to the IAM and Admin section and click
Manage Resources or All projects from
the left navigation. From the Manage Resources view, select all the
projects you want to migrate and use the Identity and Access Management (IAM)
panel to add your new account as Owner to these
projects.
Step 3: Sign in to your Cloud Identity account,
and accept the project invitations
Sign in to your Cloud Identity account and check your
email.
For the projects you're migrating, you must accept the project
invitation sent by email to your new account. You must click the link in
each email for each project that you're migrating.
Step 4: Go to Google Cloud, sign in with your
Cloud Identity account, and remove access
Remove access to the billing account.
Navigate to the billing account you connected from your old account, and
remove access for any user accounts that are not within your company's
domain, including your @gmail.com account.
Remove access to projects.
Navigate to the IAM and Admin page, and click
Manage Resources .
From the Manage Resources page, select
No organization from the drop-down list next to the filter
control.
The projects from your old account are displayed with a yellow
warning icon. Select these projects and use the IAM
panel to remove access for any accounts that are not within your
company's domain, including your @gmail.com account.
Step 5: Migrate projects
Navigate to the IAM and Admin section, and click
Manage Resources .
From the Manage Resources page, click No organization from the
drop-down list next to the filter control. The projects from your old
account are displayed with a yellow warning icon.
Select these projects from your old account, and click Migrate
from the top bar, or click the icon for each project.
After the migration is finished, your projects will be moved to your
company's organization. You must switch the No organization
drop-down to your company's organization to view the projects.
Step 6: Set permissions
Navigate to the IAM and Admin section, and select your
organization from the top bar drop-down list. This will allow you to set
IAM permissions that will affect all projects under your
organization.
From the IAM page, add your Admin users and grant them
the appropriate roles.
For more details, see also
Configuring permissions on Google Cloud .
Activate a Cloud Billing account
Free trial users: After you set up Cloud Identity, check your billable
status to verify that
you have remaining free trial credits. When the free trial offer
ends , you can activate a full, paid
Cloud Billing account
to continue to use Google Cloud resources that require a
Cloud Billing account. To learn more about the free trial, see Free
cloud features and trial offer .
Troubleshooting steps
While signing up for Cloud Identity with your domain, you might encounter one
of the following error messages. Based on the message, try the following
solutions.
"This domain is already in use."
If you receive this message when trying to sign up for Cloud Identity, it might be because:
You have a Google Workspace account with this domain and tried to sign up for Cloud Identity Premium from a marketing page or third party. Instead, you need to sign up for Cloud Identity Premium with this domain from the Billing section of your Google Admin console. Learn more .
You have an account for Cloud Identity Free edition through Google Cloud with this domain, and tried to sign up for Cloud Identity Premium from a marketing page or third party. Instead, you need to sign up for Cloud Identity Premium with this domain from the Billing section of your Google Admin console. Learn more .
You recently removed this domain from another Google Account. It can take 24 hours (or 7 days if you purchased your account from a third party) before you can use the domain with a new account.
You or someone in your organization already created a Cloud Identity or Google Workspace account with your domain. Try resetting the administrator password . Then we'll send an email to the secondary email you provided when you signed up, with details on how to access the account.
You're using the domain with another Cloud Identity account you own. If so, remove the domain from the other account.
"This domain has been registered and is in the process of ownership verification."
If you receive this message when trying to sign up for Cloud Identity, it might be because:
You or someone in your organization already created a Cloud Identity or Google Workspace account with your domain and is in the process of domain verification (which can take up to 72 hours). Try resetting the administrator password . Then, we'll send an email to the secondary email you provided when you signed up, with details on how to access the account.
You're using the domain with another Cloud Identity account you own. If so, remove the domain from the other account.
"This domain name doesn't exist yet."
You're getting this error message because the domain hasn't yet been registered with a domain host.
If you already registered your domain name with a domain host, check that the spelling of the domain name you entered matches the registered name. Keep in mind that it can take up to 72 hours for Whois directories to be updated with your new domain ownership.
"Cloud Identity does not currently support this domain name."
The domain that you're trying to sign up with isn't supported by Cloud Identity policies. Sign up with another domain name.
What's next
Verify your domain
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
