---
title: "Committed use discounts \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/vmware-engine/docs/cud
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vmware-engine/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/vmware-engine/docs/cud
  title: "Committed use discounts \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
VMware Engine
Resources
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Committed use discounts
This page describes how committed use discounts work with Google Cloud VMware Engine.
What are VMware Engine committed use discounts?
Committed use discounts (CUDs) for VMware Engine provide
discounted prices in exchange for committing to continuously use
VMware Engine nodes in a particular region for a one- or three-year
term.
VMware Engine CUDs are ideal for workloads with predictable resource
needs. You commit to a consistent amount of usage, measured in $/hour of
equivalent on-demand spend, for a one- or three-year term. In exchange, you
receive a discounted rate on the applicable usage your commitment covers.
VMware Engine CUD agreement type
VMware Engine gives you the following commitment options for node
types:
Portable License commitment : includes only VMware Engine nodes.
For this commitment type, you need to use your portable VMware Cloud
Foundations license to pay for the capacity of node and VMware components. This is the only CUD model available for new purchases.
Fully licensed commitment : includes VMware Engine nodes with
VMware Cloud Foundations licenses for the capacity of the node and the
VMware components. This model is no longer available for sale.
Fully licensed convertible commitment : includes VMware Engine
with VMware Cloud Foundations licenses for the capacity of the node and the
VMware components. This offers the flexibility of CUD conversion. For more
information about conversion of CUDs, contact your sales team. This model is no longer available for sale.
Legacy License commitment : all commitments purchased prior to July 25,
2024 are considered legacy. These CUDs remain valid until their expiry dates. This model is no longer available for sale.
CUD Analysis is not supported for the following agreement types: Fully
licensed, Fully licensed convertible, and Portable license commitments.
CUD analysis for upfront legacy CUDs is not supported ; ignore any recommendations
provided.
See VMware Engine pricing
for examples of pricing that include CUDs.
How do CUDs apply to VMware Engine usage?
CUDs automatically apply to aggregate VMware Engine node usage in a
region, giving you low, predictable costs, without the need to make any manual
changes or updates yourself. This flexibility saves you time and helps you to
save more by achieving high utilization rates across your commitments.
VMware Engine CUDs apply to all VMware Engine nodes for the
region for which you have purchased commitments. VMware Engine CUDs
don't apply to storage, backups, IP Addresses, network outbound data
transfer, or licensing.
Purchasing VMware Engine commitments
To learn more about purchasing spend-based commitments, see the
Google Cloud Committed use discounts
page.
You can purchase CUDs from any Cloud Billing
account, and the discount applies to any eligible usage in projects paid for by
that Cloud Billing account. Any overage is charged at the on-demand
rate. Before you purchase a commitment, read the Service specific terms regarding Committed Units.
Warning: Once you purchase a CUD, you can't cancel it.
VMware Engine CUDs are spend-based commitments and not tied to a specific project or resource.
Caution: Spend-based commitments are purchased at the Cloud Billing account level. You can't cancel these commitments or change the Cloud Billing account that they are associated with.
When you purchase a VMware Engine CUD, you pay the same commitment fee
for the entirety of the commitment term, even if the price of applicable usage
changes. You still receive the same discount percentage on applicable usage in
the event of a price change. The commitment fee is billed monthly or upfront,
depending on the type of CUD.
Before you begin
Before you can purchase a CUD, make sure you have a correct Enterprise
Discount Program (EDP), SKU group discounts, and CUD information.
Enable Enterprise Purchasing API
You must enable the Enterprise Purchasing API to purchase and view CUD details
in the VMware Engine portal. If this API isn't enabled, you can't see
your VMware Engine CUDs. When you click the Purchase button on the
Committed use discounts page for the first time, you're prompted to enable
the API if it's not already enabled.
Make sure that you have the following role or roles on the project:
roles/owner, roles/billing.admin
Check for the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
In the Principal column, find all rows that identify you or a group that
you're included in. To learn which groups you're included in, contact your
administrator.
For all rows that specify or include you, check the Role column to see whether
the list of roles includes the required roles.
Grant the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
Click person_add Grant access .
In the New principals field, enter your user identifier.
This is typically the email address for a Google Account.
Click Select a role , then search for the role.
To grant additional roles, click add Add
another role and add each additional role.
Click Save .
Alternatively, you can make a purchase with a custom role with the following permissions:
enterprisepurchasing.gcveCuds.list
enterprisepurchasing.gcveNodePricingInfo.list
enterprisepurchasing.gcveCuds.create
billing.accounts.get
billing.subscriptions.create
vmwareengine.projectState.get
consumerprocurement.orders.place
resourcemanager.projects.get
See VMware Engine IAM roles and permissions
for more information.
Purchasing commitments for node types
You can purchase commitments for node types by using the
Google Cloud console. After purchasing a CUD, monthly paid CUDs begin within
an hour of purchasing, while upfront paid CUDs begin at 12 AM Pacific.
CUDs are automatically applied to eligible usage in the region you specified. If
there is no eligible usage in that region, you can add VMware Engine
nodes to count towards your commitment by requesting node quota .
Note: Upfront or prepaid commitments, Legacy license commitments, and Fully
licensed convertible commitments are generally not available for new purchases. To find out if you are eligible to purchase or renew one of these commitment types, contact Cloud Customer Care or your Google Cloud account team.
To purchase a VMware Engine spend-based commitment in your
project, do the following:
In the Google Cloud console, go to the Committed use discounts page.
Go to Committed use discounts
Click Select a project and then select the organization, folder, or project
where you want to purchase the commitment.
Click Purchase .
In the Name field, provide a name that helps you identify the commitment
that you're purchasing.
Select the region where you want to spend towards your commitment.
Choose a subscription type for your commitment.
Choose an Agreement Type.
Choose a commitment duration of 1 or 3 years.
Select a node type and node count for your commitment.
Review the information you provided and click Purchase to purchase the
commitment.
Prices are estimated and might differ from the final price.
For information about how to view the audit logs, see Committed use discounts audit logging .
Questions and challenges
Consider the following questions and answers in addition to some challenges you
might face and how to address them:
Where do I find discount information?
You can find discount information by doing the following:
Check the contracts signed with Google Cloud.
Talk to your Google account representative.
Check the pricing table found in your billing account and search for
VMware Engine SKUs by filtering for the "VMware Engine" service
description. The discount column displays your discount percentage.
Check for the Discount column VMware Engine pay-as-you-go SKUs.
For example, look for "Standard 72 VCPU Node ( REGION_NAME )" for
ve1 nodes.
What kind of discount information do I need to know before purchasing CUDs?
Customers receive different kinds of discounts based on the contracts they
signed with Google Cloud. For VMware Engine, the most common discount
is SKU group discount followed by EDP. Custom discount was used with legacy
CUDs. You can find your discounts on pricing page .
Custom discount
Custom discounts are less common discount structures applied to a specific SKU.
For fully licensed, fully licensed convertible, and Portable License commitments,
the custom discount is generally 0%. This applies to legacy CUDs only when
offered as part of the contract. Additionally, the following applies to custom discounts:
Specific regions and CUD types may offer a deeper discount. For example, you
might be offered a deeper CUD discount for a 3-year prepaid CUD in us-east4 only.
To use this discount, you should purchase only that particular CUD in that
region. If you purchase any other CUD in a different region, the extra
discount won't be applied.
You should refer to your contract or talk to your Google representative
before proceeding with any CUD purchase with a custom discount.
Contracted discounts are available in the pricing page under
chosen billing account. The discount is displayed in the Discount column.
Check for VMware Engine SKUs that have Commitment in
the SKU description.
Custom discounts on legacy agreements may be more expensive than the current
fully licensed agreement price. Check pricing and discount levels
before making a purchase.
SKU group discount
Consider the following information about SKU group discounts:
A SKU group discount is the most common discount used by
VMware Engine customers. This discount is offered as part of a
large Google Cloud commit.
Contracted discounts are available in the pricing page under
chosen billing account. You can see the discount under the column
"Discount".
Check for VMware Engine pay-as-you-go SKUs. For example, look for
"Standard 72 VCPU Node ( region-name )" for ve1 nodes or "VMware
Engine Gen 2" for ve2. SKUs that have "Commitment" and "dollar based" are
not applicable.
You can also refer to your contract or talk to your Google representative to
verify.
For example, customers with 10% SKU group discount on VMware Engine
pay-as-you-go SKUs will receive this discount on VMware Engine
consumption during the contract period.
More questions and challenges
Question or challenge
How it can be addressed
What happens if the wrong CUD is purchased?
Reach out to your Google representative as soon as possible to facilitate
a resolution.
I am a resold customer and my partner does not have access to my
projects. This is stopping the partner from buying commitments.
Create a new project under the same billing account and give access to
that project to the partner to access the purchase page. This project is
just used for purchasing commitments only.
CUD Visibility
How can I list all CUDs associated with my Billing Account?
Running the following command from the Cloud Shell will return all CUDs
associated with the Billing Account of the current project:
curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" https://enterprisepurchasing.googleapis.com/v1alpha/projects/$GOOGLE_CLOUD_PROJECT/locations/global/gcveCuds
What's next
Analyze the effectiveness of your spend-based committed use discounts
CUD analysis is not supported for upfront CUDs.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
