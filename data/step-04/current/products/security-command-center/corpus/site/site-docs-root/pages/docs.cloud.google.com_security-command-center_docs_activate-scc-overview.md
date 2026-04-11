---
title: "Overview of activating Security Command Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/activate-scc-overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/activate-scc-overview
  title: "Overview of activating Security Command Center \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Security Command Center
Guides
Send feedback
Overview of activating Security Command Center
Stay organized with collections
Save and categorize content based on your preferences.
Standard-legacy, Standard, Premium, and Enterprise service tiers
You can activate Security Command Center at
different tiers : Standard, Premium, or
Enterprise. If you select the Standard tier or the Premium tier, you can
activate Security Command Center for an entire organization ( organization-level
activation ) or for individual projects ( project-level activation ). If you
select the Enterprise tier, you can activate Security Command Center at the
organization level only.
The activation process is different for the different tiers. Also, when you activate Security Command Center at the project level, certain detection modules and service
integrations are not available, due to Security Command Center's reduced scope of
access.
Overview of organization-level activation
Standard-legacy, Standard, Premium, and Enterprise service tiers
Activating Security Command Center at the organization level is considered
a best practice because it provides the most
complete protection for your business by allowing Security Command Center to
access and scan resources and assets across all of the folders and projects
in the organization.
With the appropriate IAM permissions, you can do the following in
the Google Cloud console:
Activate the Standard tier for an organization
Activate the Premium tier for an organization using subscription-based or pay-as-you-go pricing
Premium tier pay-as-you-go pricing for an organization gives you the flexibility
to base your Security Command Center charges on usage of Google Cloud
services. Your usage is charged to the billing accounts associated with the
projects in your organization.
To activate the Enterprise tier for an organization, you must purchase a
subscription from Google Cloud sales
or your Google Cloud partner.
For more information about the pricing options for the Enterprise tier or the
Premium tier, see Pricing .
Activate the Standard or Premium tier
For the Standard and Premium tiers, you use the Google Cloud console to enable and
configure Security Command Center. For step-by-step activation instructions, see the
following:
Activate Security Command Center Standard tier for an organization
Activate Security Command Center Premium tier for an organization
If you want to enable
data residency , then you must use
the jurisdictional Google Cloud console instead. To learn how to access the
jurisdictional Google Cloud console, see
About the jurisdictional Google Cloud console .
Activate the Enterprise tier
For the Enterprise tier, you use the Google Cloud console to enable and
configure Security Command Center. For step-by-step activation instructions, see
Activate the Security Command Center Enterprise tier .
If you want to enable
data residency , then you must use
the jurisdictional Google Cloud console instead. To learn how to access the
jurisdictional Google Cloud console, see
About the jurisdictional Google Cloud console .
Note: For the Enterprise service tier, before you activate Security Command Center with data residency
controls, you must contact your Google Cloud account representative and schedule a date and
time when you will activate Security Command Center. After activation, your account representative will
help ensure that your Google SecOps instance is configured to fully support data
residency controls.
If you use the Standard or Premium service tier, then upgrading to the Enterprise tier does not
change the location of your Security Command Center data. If you did not enable Security Command Center data
residency for the Standard or Premium tier, then you cannot enable it when you upgrade to the
Enterprise tier.
Overview of project-level activation
Standard-legacy and Premium service tiers
Activating Security Command Center on an individual project gives
you the flexibility to use Security Command Center for only the projects that
matter to you most and to base your Security Command Center charges on the
resource usage in that project alone.
For a project-level activation, you can activate the Standard or Premium tiers
of Security Command Center yourself in the Google Cloud console, as long as you
have the appropriate IAM permissions. You don't need to contact
Google Cloud sales first.
With project-level activations, the charges for the Premium tier are
based on the usage of certain Google Cloud resources in the project
and are billed to the project by using a pay-as-you-go model .
When you activate Security Command Center at the project level,
Security Command Center's access to logs, data, and other resources is
limited to the project in which it is activated. Consequently, any
services that require data from outside of the project are either
not available or they cannot produce their full set of findings. For
more information about the findings and services that are not available with a
project-level activation, see
Feature availability with project-level activations .
Data residency is not supported with project-level activations of
Security Command Center.
Optimize project-level activations by activating the Standard tier at the organization level
To optimize project-level activations of the Premium tier, we recommend
that you activate the Standard tier of Security Command Center at
the organization level.
Activating the Standard tier at the organization level lets you
manage multiple project-level activations globally and ensures that any
Standard-tier detection modules or service integrations that require
organization-level activation are available to the projects.
For more information, see
Standard tier features that require an organization-level activation .
When to use project-level activation
Typically, you activate Security Command Center for a project in the
following scenarios:
Your organization doesn't use Security Command Center at any tier.
In this case, you can activate Security Command Center for a project at
either the Standard tier or the Premium tier.
The organization uses the Standard tier.
In this case, you can activate only the Premium tier for
a project, because every project in the organization can already
use the Standard tier.
The organization uses the Premium tier, but you only require
Security Command Center Premium tier for particular projects. In this case, you
must
downgrade the organization-level activation to the Standard tier
for the project-level Premium tier activation to take effect. If you are using
an organization-level subscription, this change only comes into effect after
the subscription expires.
View your current activation type
Standard-legacy, Standard, Premium, and Enterprise service tiers
The activation type for Security Command Center determines whether Security Command Center is activated at the project level or the organization level, the tier, and the pricing option.
When you open a project in the Google Cloud console, the level at which
Security Command Center is activated—the project level or the organization
level—is not immediately obvious, because the project
could be inheriting the use of Security Command Center from its parent
organization.
To determine whether Security Command Center is already activated and to view your current activation type for Security Command Center, complete the following:
In the Google Cloud console, go to Security Command Center:
Go to Security Command Center
Select the organization or project that you need to check.
If Security Command Center is active in either the organization or the project,
the Security Command Center Overview page displays. If it is not active in either,
the Get Security Command Center page displays. For activation
instructions, see
Overview of organization-level activation or
Activate Security Command Center for a project .
Go to the Settings page. Do one of the following:
On Security Command Center Standard or Premium, select the Settings button.
On Security Command Center Enterprise, select SCC settings in the navigation.
On the Settings page, select the Tier details tab.
On the Tier details tab, determine your activation type by checking the
Tier and Billing status rows:
Tier : Shows the tier (Enterprise, Premium, or Standard) for the
organization or project. If the organization is set to the Enterprise or
Premium tier, all projects inherit the Enterprise or Premium tier
automatically and the Google Cloud console displays a banner that
describes this inheritance. When the organization is set to the Enterprise
or Premium tier, then, at the project level, this setting shows the tier
that the project will use if you downgrade the organization's tier to the Standard tier.
Billing status : One of the following:
Active : Indicates that your Premium tier pricing is using the
pay-as-you-go option for the organization or project.
Paused : Indicates that the Enterprise or Premium tier is active at
the organization level and being inherited by this project.
Ending date: Indicates that your organization-level activation of
Enterprise or Premium tier is using a subscription or trial.
If Billing status isn't shown: Indicates that the Standard tier is
active for the organization or project. Projects can inherit the Standard
tier from the organization.
Tip: Security Command Center add-ons that have been granted through
subscriptions to other Google Cloud products are listed as Add-ons .
These add-ons automatically grant access to a limited number of relevant
Premium or Enterprise tier services and detection modules.
You can click Manage tier to see what tier and activation options are
available to you.
View when Security Command Center was activated
Standard-legacy, Standard, Premium, and Enterprise service tiers
To find out when Security Command Center was activated, you can use a
Cloud Logging query .
This query returns results if the activation was completed during the
log retention period .
In the Google Cloud console, go to the Logs Explorer page:
Go to Logs Explorer
Select the organization that you activated Security Command Center in.
Run the following query:
protoPayload.serviceName="securitycenter.googleapis.com"
protoPayload.request.securityHealthAnalyticsSettings.serviceEnablementState="ENABLED"
Modify your Security Command Center tier configuration
If you have activated Security Command Center for your project or organization, you
can modify your tier configuration. Common modifications include the following:
Upgrade or downgrade to a different service tier.
Change from a project-level to an organization-level activation.
Switch Security Command Center Premium billing from a subscription to
pay-as-you-go.
To see the tier modification options available to you, select your current
Security Command Center tier:
Standard
Premium
Enterprise
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
