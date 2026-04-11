---
title: "Create a new self-serve Cloud Billing account \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/billing/docs/how-to/create-billing-account
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/billing/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/billing/docs/how-to/create-billing-account
  title: "Create a new self-serve Cloud Billing account \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Costs and usage management
Cloud Billing
Guides
Send feedback
Create a new self-serve Cloud Billing account
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to create a
self-serve, online Cloud Billing account
to automatically pay for your Google Cloud and Google Maps Platform usage
costs. If you're interested in setting up a Cloud Billing account
that is billed by invoice, visit
Apply for monthly invoiced billing .
Before you begin
Before you create a new billing account, we recommend you do the following:
Review the information
about Cloud Billing accounts
to determine if a new Cloud Billing account is the right solution for
your needs.
Ensure that you have the
required permissions
to create a Cloud Billing account.
About Cloud Billing accounts
Cloud Billing accounts pay for usage costs in Google Cloud projects and
Google Maps Platform projects. Cloud Billing accounts don't
pay for Google Workspace accounts. Google Workspace customers need a
separate Google Workspace billing account.
Product
Billing account needed to pay for product usage costs
Google Cloud
Cloud Billing account
Google Maps Platform
Cloud Billing account
Google Cloud & Google Maps Platform
1 Cloud Billing account
Google Workspace
Google Workspace billing account
Google Cloud & Google Workspace
1 Cloud Billing account + 1 Google Workspace billing account
A project and its service-level resources are linked to one
Cloud Billing account at a time.
A Cloud Billing account operates in a single currency and is linked
to a
Google payments profile .
A Cloud Billing account can be linked to one or more projects.
Usage costs are tracked by Project and are charged to the linked
Cloud Billing account.
Important : Projects that are not linked to an active
Cloud Billing account can't use Google Cloud or
Google Maps Platform services. This is true even if you only use
services that are free .
If you want to change the Cloud Billing account that you're using to
pay for a project (that is, link a project to a different
Cloud Billing account), see
Enable, disable, or change billing for a project .
You can manage your Cloud Billing accounts using the
Google Cloud console.
For more information about the Google Cloud console, visit
General guide to the console .
Permissions required for this task
The permissions required to create a Cloud Billing account depend
on your configuration of Google Cloud or Google Maps Platform.
Members of a Google Cloud Organization
Not using a Google Cloud Organization
If you manage your Google Cloud resources using an
Organization node , and you are a member of that Google Cloud
Organization, then you must be a
Billing Account Creator on the Organization node
to create a new Cloud Billing account.
Specifically, if you're a Google Cloud user within an
Organization, to perform this task, you must have the following
permission .
billing.accounts.create
Additionally, Cloud Billing accounts are linked to a
Google payments profile. If you plan to use an existing
payments profile with your new billing account, you must
be granted the
Sign-up and purchase permission on the
payments profile.
If you're not a member of a Google Cloud Organization but instead
are managing your Google Cloud resources or Google Maps Platform
APIs using projects, you don't need any specific billing role or
permission to create a Cloud Billing account.
Additionally, Cloud Billing accounts are linked to a
Google payments profile. If you plan to use an existing
payments profile with your new billing account, you must
be granted the
Sign-up and purchase permission on the
payments profile.
For more information about Cloud Billing permissions, see:
Overview of access control
Create custom roles for Cloud Billing
Understanding predefined Identity and Access Management roles for Cloud Billing
For more information about Google payments permissions, see
Manage payments users, permissions, and notification settings .
Add a new Cloud Billing account
To create a new self-serve (autopay) Cloud Billing account, complete
the following steps.
Note: If you're getting started with Google Cloud, you create a self-serve
Cloud Billing account as part of the Google Cloud setup process .
Sign in to the Manage billing accounts page in the Google Cloud console.
Sign in to Manage billing accounts
Click Create account .
Enter the Name of the Cloud Billing account. This is the name
of the billing account that displays in billing account selectors and
tabular lists or reports that display the billing account name.
Caution: Don't include sensitive information such as
personally identifiable information (PII) or security data in your
billing account name.
Depending on your configuration, you also need to select one of the
following:
Organization : If you see an Organization drop-down, then
you must select an Organization before you can continue.
Country : If you are prompted to select a Country , select the
country that corresponds with your billing mailing address.
The country you select affects the payment options available in the
next step.
The currency for your Cloud Billing account is automatically
assigned based on the country you select.
Your country determines what payment methods you can use to pay for
your incurred usage costs.
Choose your country (and currency) carefully, as you can't change
these selections later. If you need to edit the country on
an existing Cloud Billing account, you'll need to create
a new billing account.
Prohibited Territories :
Google Cloud is available in most countries and regions.
However, Google restricts access to some of its services in certain
countries or regions, such as China, Crimea, Cuba, Iran, North
Korea, and Syria. If a country isn't in the list, it might be
due to restricted access to Google Cloud services.
Click Continue .
Choose the
Google payments profile
that will be associated with this Cloud Billing account. A
payments profile is shared and used across all Google
products (such as Google Workspace, Google Cloud, Google Fi, and
more). You can choose an existing Google payments profile, or
create a new payments profile. If you create a
new profile, follow the instructions on the screen to set up your
Google payments profile.
Important: About the Account Type
If you're creating a new Google payments profile, when setting your
Account type , be aware that this setting is permanent and might be
used for tax (such as
value-added tax (VAT) )
and identity verification.
If this is for a business, organization, partnership, or educational
institution, or if you want more than one person to have access to the
profile, select Business . Otherwise, select Individual .
Individual account types allow for only one user to be associated with
the Google payments profile.
Depending on your country's tax requirements, you might need to enter
additional tax information.
If you're choosing an existing Google payments profile to be
associated with this Cloud Billing account, select a
Business profile for Cloud account.
When you're done setting all the options and details, click
Submit and enable billing .
About authorization requests
When you create a new account, you might notice a $0.00 transaction from
Google on your bank or credit card statement. This is a pending authorization
request between our billing system and the bank that issued your credit or
debit card. In some countries, authorizations are $1 (which might be converted
to local currency by your bank). These transactions might appear as pending
on your statement for up to a month. These are authorization requests only,
not actual charges. If you have questions, we recommend you contact your bank
about the authorization status.
For information about verifying bank accounts, see
Verify your bank account .
For information about adding backup methods of payment, see
Add, remove, or update a payment method .
Note: If you haven't already verified your email address, you might need to do
so before you can begin using the new Cloud Billing account.
(India only) Verify your identity
Google is required to comply with applicable cybersecurity regulations in India
when providing cloud services. If your Cloud Billing account address
is in India, you must complete the mandatory identity verification process,
described in this section.
After you create a new Cloud Billing account, you must complete the
identity verification process within 30 days. If you don't complete the process
within this timeframe, your Cloud Billing account and access to
Google Cloud might be suspended.
To start the verification, open the Billing account overview page. At
the prompt, select your Cloud Billing account.
Go to Billing account overview
If your account needs to be verified, the page shows a banner to complete
your identity verification. Click Verify now , and follow the prompts to
provide your information.
Information required for organizations
If you're completing the verification for an organization, you must provide the
following information:
Your mobile phone number. You receive a verification code on your device.
The names and designations of at least one individual who has executive
management control, or influence over the management of the company.
You might need additional documents to verify your organization, such as
business registration documents, and proof of address documents. You can
upload one of the following documents for verification:
Certificate of incorporation
Certificate of registration on conversion
Certificate of provisional registration
Amended certificate of registration
Registration of society
Udyam registration certificate
GST registration certificate
VAT Certificate
Registration certificate (Jammu and Kashmir)
A utility or phone bill (with a date in the last 60 days)
Information required for individuals
If you're using Google Cloud as an individual, you must provide documents
that verify your identity and your address.
As your proof of identity, upload one of the following documents:
Passport
Driver's license
PAN card
Election Commission ID card
As your proof of address, upload one of the following documents:
A utility or phone bill (with a date in the last 60 days)
If your identity document also has your address on it, you can upload it
again. Examples of identity documents with your address include the
following:
Driver's license with address, either on the front or back
Election Commission ID card, with the address on the back
The last page of your Indian Passport
Verify your identity using Aadhaar
To verify your identity using e-Aadhaar with provisioning obtained through
DigiLocker, use the following steps. For more information, see
e-Aadhaar .
Enter your name, address, and phone number in the form shown during the
identity verification process. Make sure this information exactly matches
the information on your Aadhaar Letter or Aadhaar PVC Card.
Follow the prompts shown during the process and provide access to your
e-Aadhaar information in DigiLocker.
The name and address from your e-Aadhaar will then be matched to the
information you entered to complete the verification.
Verify your payments contact email address
To ensure you receive billing- and payments-related
notifications, we might ask you to verify your email address on your
Google payments profile.
To verify your email address, we'll send you a verification email to the
email address you entered for your payments profile contact.
To activate your Google payments email preferences, click the
verification link in the email.
If you haven't received the verification email, here's how to request a new
verification link:
In the Google Cloud console, go to the Payment settings page.
Go to Payment settings in Cloud Billing console
At the prompt, choose the Cloud Billing account that you want
to verify.
The Payment settings page opens for the selected
Cloud Billing account.
Under Payments users , click Manage payments users .
In the Manage users list, find the email address you want to verify and
click Resend verification email . If the email address has
already been verified, this link is not available.
Until your primary contact email address is verified, you'll see a
notification banner on the
Payment Overview page in Billing. This notification is similar to "This
payments profile has no verified primary contact. Critical email may not be
received until the primary contact verifies their email" .
Recommended next steps
To ensure that you can maintain your Cloud Billing account, pay your
bills, and monitor your costs, after you create a new billing account, we
recommend you also do the following:
Configure access to billing accounts and payments profiles
Create a FinOps administration project
Set up budgets to track your spend
Enable billing data export to BigQuery
Configure access to billing accounts and payments profiles
After you create a new Cloud Billing account, you might want to grant
user permissions to additional users to access your billing account and
Google payments profile.
Each Cloud Billing account is linked to a Google payments profile.
Access permissions for Cloud Billing and Google payments are
configured in two different systems depending on what type of access you want
to provide.
monetization_on
Cloud Billing permissions
payment
Google payments settings & permissions
Access permissions for a Cloud Billing account are
managed using
IAM roles . Certain Cloud Billing account
permissions also grant access to the associated Google payments profile
to view payment details, edit forms of payment and payment profile settings,
and make a manual payment. Billing account permissions can be
configured to let users complete the following tasks:
Open, close, and modify a Cloud Billing account.
View reports and cost data.
View payments details and documents (such as invoices and
statements).
Add and edit (but not remove) payment methods.
Edit payments profile and account settings.
Make a manual payment.
Analyze and purchase committed use discounts (CUDs).
Enable and manage export of billing data.
Configure budgets and alerts.
Manage billing per project.
Manage user permissions for billing.
Contact billing support.
The access permissions to a Google payments profile are
managed in
Google payments settings . Google payments permissions can
be configured to let users complete the following tasks:
Update payments profile info, including mailing
addresses.
Add, edit, and remove payment methods.
Update the primary and backup payment methods assigned to each
payments account.
Manage payments users, including contact details,
email preferences, and user permissions.
With Google payments permissions, users can access and manage
payments profiles and payments accounts
directly in the Google payments center, without needing separate
permissions on the Cloud Billing account.
To fully manage your payments profile and
payments accounts from within the
Cloud Billing console , users need Cloud Billing permissions and Google payments permissions. For example,
a user with the
Billing Account Viewer role on the Cloud Billing
account and assigned as an
Admin with all permissions on the associated Google payments
profile will be able to fully manage the Google payments profile and
accounts directly from the Cloud Billing console .
Cloud Billing account user permissions
Each Cloud Billing account needs at least one
Billing Account Administrator .
By default, the person who creates the Cloud Billing account is a
Billing Account Administrator for that billing account. For redundancy, we
recommend you configure more than one administrator on each
Cloud Billing account.
You can grant different levels of access to billing accounts to your users,
depending on what they need to do (for example: track spend, review cost
anomalies, manage budgets, optimize costs, or review and pay invoices).
For more information, see
Cloud Billing access control & permissions .
Google payments user permissions
Each Google payments account needs at least one
Admin with all permissions ,
and one
Primary Contact
(the person Google will contact with any payments-related alerts
or questions). By default, the person who creates the Google payments account
is both the Admin with all permissions , and the Primary Contact . For
redundancy, we recommend that you configure more than one Google payments
administrator.
You can add other users to any
Google payments Organization profile
that you manage and grant different levels of access to your users, depending on
what they need to do (for example: manage payment methods or
payments profile details). You can also configure user email
preferences for receiving billing and payments emails.
Not all payments-related tasks require you to be a
Google payments user to gain the permissions required to access and edit
Google payments profile information. Certain Cloud Billing IAM permissions will grant equivalent payments
permissions. Specifically, Cloud Billing account users with the
billing.accounts.updatePaymentInfo permission on their billing account
will be able to access and edit the associated Google payments profile and payments account directly from the Cloud Billing
console, without needing additional permissions on the payments profile itself. This includes users with the
Billing Account Administrator
role ( roles/billing.admin ) and users granted this permission using a
custom role .
For more information, see
Manage Google payments users, permissions, and notification settings .
Create a FinOps administration project
To use many of the powerful tools available in Cloud Billing, you
need a
project that is linked to the billing account .
We recommend that you configure a separate Google Cloud project to contain all
of your FinOps and billing administration needs for a Cloud Billing
account. There are many benefits to using a FinOps-focused project, including
the following:
You can contain all of the billing tools that are project-dependent into one
common project, where you can precisely control who has access to the project
and the tools contained within.
If you want to use
Gemini Cloud Assist in Cloud Billing ,
billing users will also need access to a
project where the Gemini for Google Cloud API is enabled .
To use any of the
billing APIs , each API you use needs to be enabled in a project. You can use the same
project to contain all of the billing APIs.
Many of the billing tools partner with other Google Cloud products
(such as
BigQuery
and Pub/Sub )
that require a project when you set up the tool.
There might be costs associated with the use of some billing tools (like the
cost of running queries
against your
Cloud Billing cost data exported to BigQuery ).
With a FinOps-dedicated project, you can track any FinOps-related costs
separately from your other Google Cloud costs.
For detailed guidance about creating and configuring a project, see
Creating and managing projects .
Set up budgets to track your spend
You can create Cloud Billing budgets to monitor all of your
Google Cloud charges in one place. A budget lets you track your actual
Google Cloud spend against your planned spend. After you set a budget amount,
you set budget alert threshold rules that are used to trigger email
notifications. Budget alert emails help you stay informed about how your
spend is tracking against your budget. You can also configure budget
notifications to automate cost control responses .
For more information about budgets, see
Create, edit, or delete budgets and budget alerts .
Enable billing data export to BigQuery
Managing and reporting costs effectively is an important part of financial
stewardship, no matter your budget. Making data-driven decisions about your
Google Cloud costs and usage starts with collecting the data you'll need to
inform those decisions.
Cloud Billing export to
BigQuery
lets you export detailed Google Cloud billing data (such as usage,
cost estimates, and pricing data) automatically throughout the day to a
BigQuery dataset
that you specify. Then you can access your
Cloud Billing data from BigQuery for detailed analysis, or
use a tool like
Looker Studio
to visualize your data. You can also use this export method to export data to
a JSON file.
Timing is important. To access a more complete set of
Google Cloud billing data for your analysis needs, we recommend that
you enable Cloud Billing data export to BigQuery on each of your
Cloud Billing accounts, at the same time that you create the Cloud Billing
accounts.
For comprehensive guidance, see
Export Cloud Billing data to BigQuery .
Related topics
Modify your Cloud Billing account
Close or re-open your Cloud Billing account
View projects linked to a Cloud Billing account
Enable, disable, or change billing for a project
Add, remove, or update a payment method
Resolve billing issues
View your cost and payment history
View your billing reports and cost trends
Try it for yourself
If you're new to Google Cloud, create an account to evaluate how our
products perform in real-world scenarios. New customers also get $300 in
free credits to run, test, and deploy workloads.
Get started for free
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
