---
title: "Apply Advisory Notifications recommendations \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/advisory-notifications/docs/recommendations-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/advisory-notifications/docs/recommendations-overview
source_metadata:
  url: https://docs.cloud.google.com/advisory-notifications/docs/recommendations-overview
  title: "Apply Advisory Notifications recommendations \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Apply Advisory Notifications recommendations | Google Cloud Documentation
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
Advisory Notifications
Start free
Overview
Guides
Reference
Support
Resources
More
Technology areas
More
Overview
Guides
Reference
Support
Resources
Cross-product tools
More
Console
Discover
Product overview
Security and Privacy Advisory notifications overview
Sensitive Actions notifications overview
Security MSA notifications overview
Threat Horizons preview notifications overview
Get started
View notifications
Recommendations
Opt in to or out of notifications
Respond
Respond to Sensitive Actions notifications
Monitor
Audit logging
Work with Sensitive Actions logs
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
How Advisory Notifications recommendations work
View Advisory Notifications recommendations Before you begin
View recommendations
Act on Advisory Notifications recommendations Grant Access to Advisory Notifications
Configure your Advisory Notifications Viewers
Pricing
What's next
Home
Documentation
Security
Advisory Notifications
Guides
Was this helpful?
Send feedback
Apply Advisory Notifications recommendations
Stay organized with collections
Save and categorize content based on your preferences.
On this page
How Advisory Notifications recommendations work
View Advisory Notifications recommendations Before you begin
View recommendations
Act on Advisory Notifications recommendations Grant Access to Advisory Notifications
Configure your Advisory Notifications Viewers
Pricing
What's next
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Advisory Notifications provides IAM policy recommendations to ensure that the right
parties within your organization have access to view critical security and
privacy notifications in the Google Cloud console. These recommendations are generated
automatically by analyzing your Essential Contacts configuration and your IAM
policy. Use these recommendations to ensure that your security administrators can
receive and quickly address security notifications.
How Advisory Notifications recommendations work
Advisory Notifications recommendations monitor your Essential Contacts and IAM
policy configurations, and make recommendations based on the previous day's data.
The recommendations include the following:
If no user has permission to view notifications, Advisory Notifications
recommends granting the appropriate parties within your organization access.
If a principal is listed as a Security Essential Contact but does not have
permission to view Advisory Notifications in the
Google Cloud console, Advisory Notifications recommends granting the principal access.
Advisory Notifications recommendations don't take custom roles into account. If
you are granting a principal permission to Advisory Notifications through a
custom role, disregard or dismiss the recommendation.
View Advisory Notifications recommendations
Advisory Notifications makes insights and recommendations available through the
Recommender using the Google Cloud CLI, the API, or the
BigQuery export feature.
Before you begin
Before you can view the insights and recommendations, you must do the following:
You must enable the Recommender API . You only need to enable the API on a single billing project. You can then use this same billing project to examine recommendations and insights for other projects, the entire organization, or the billing account, by specifying the billing project in your gcloud commands and API requests.
Ensure that you have the required permissions
Permissions required for this task
To perform this task, you must have the following
permissions :
recommender.cloudSecurityGeneralRecommendations.list on the organization
recommender.cloudSecurityGeneralInsights.list on the organization
For your convenience, you can use the Security Recommendation Viewer role to grant this permission:
roles/recommender.cloudSecurityRecommendationViewer
If you want to accept or dismiss recommendations and insights, you must have the following permissions:
recommender.cloudSecurityGeneralRecommendations.update on the organization
recommender.cloudSecurityGeneralInsights.update on the organization
You can use the Security Recommendation Admin role to grant these permissions:
roles/recommender.cloudSecurityRecommendationAdmin
View recommendations
gcloud API BigQuery export
More
To view your recommendations, use the following gcloud recommender recommendations list
command:
gcloud recommender recommendations list \
--recommender=google.cloud.security.GeneralRecommender \
--organization= ORGANIZATION_ID \
--location=global \
--billing-project= QUOTA_PROJECT \
--filter=recommenderSubtype=[ SECURITY_ESSENTIAL_CONTACTS_WITHOUT_ADVISORY_NOTIFICATIONS | NO_VIEWERS_OF_ADVISORY_NOTIFICATIONS] \
--format= FORMAT
Replace the following:
ORGANIZATION_ID : the ID of your organization.
FORMAT : your preferred output format. For example, yaml , text , and json . For all the possible values, see Projections . The values csv , diff , get , table , and value require non-empty
projections .
QUOTA_PROJECT : The ID of the project to use for quota and billing.
The output of the gcloud recommender recommendations list command includes
the following fields:
name : the name of the recommendation.
description : a human-readable explanation of the recommendation.
associatedInsights : a list of associated insights.
You can also view the insights associated to these recommendations. To view your insights, use the gcloud recommender insights list
command below.
gcloud recommender insights list \
--insight-type=google.cloud.security.GeneralInsight \
--organization= ORGANIZATION_ID \
--location=global \
--billing-project= QUOTA_PROJECT \
--filter=insightSubtype=[ SECURITY_ESSENTIAL_CONTACTS_WITHOUT_ADVISORY_NOTIFICATIONS | NO_VIEWERS_OF_ADVISORY_NOTIFICATIONS] \
--format= FORMAT
Replace the following:
ORGANIZATION_ID : the ID of your organization.
FORMAT : your preferred output format. For example, yaml , text , and json . For all the possible values, see Projections . The values csv , diff , get , table , and value require non-empty
projections .
QUOTA_PROJECT : the ID of the project to use for quota and billing.
The output of the gcloud recommender insights list command includes
the following fields:
name : the name of the recommendation.
description : a human-readable explanation of the insight.
associatedRecommendations : a list of associated recommendations.
For more information, see
the Recommender docs.
To view your recommendations, use the
Recommender API with
the google.cloud.security.GeneralRecommender recommender ID.
The following example bash script uses an access token returned by
Application Default Credentials ,
for a curl request. For information about setting up Application
Default Credentials, see
Provide credentials for Application Default Credentials .
ORGANIZATION_ID= ORGANIZATION_ID
LOCATION=global
RECOMMENDER_ID=google.cloud.security.GeneralRecommender
QUOTA_PROJECT= QUOTA_PROJECT
curl \
-H "Authorization: Bearer $(gcloud auth application-default print-access-token)" \
-H "x-goog-user-project: $QUOTA_PROJECT" \
https://recommender.googleapis.com/v1/organizations/$ORGANIZATION_ID/locations/$LOCATION/recommenders/$RECOMMENDER_ID/recommendations
Replace the following:
ORGANIZATION_ID : the ID of your organization.
QUOTA_PROJECT : the ID of the project to use for quota and billing.
The response includes the following fields:
name : The name of the recommendation.
description : A human-readable explanation of the recommendation.
associatedInsights : a list of associated insights.
To view your insights, use the
Recommender API with
the google.cloud.security.GeneralInsight insight type.
The following example bash script uses an access token returned by
Application Default Credentials ,
for a curl request. For information about about setting up Application
Default Credentials, see
Provide credentials for Application Default Credentials .
ORGANIZATION_ID= ORGANIZATION_ID
LOCATION=global
INSIGHT_TYPE=google.cloud.security.GeneralInsight
QUOTA_PROJECT= QUOTA_PROJECT
curl \
-H "Authorization: Bearer $(gcloud auth application-default print-access-token)" \
-H "x-goog-user-project: $QUOTA_PROJECT" \
https://recommender.googleapis.com/v1/organizations/$ORGANIZATION_ID/locations/$LOCATION/insightTypes/$INSIGHT_TYPE/insights
Replace the following:
ORGANIZATION_ID : the ID of your organization.
QUOTA_PROJECT : the ID of the project to use for quota and billing.
The response includes the following fields:
name : The name of the recommendation.
description : A human-readable explanation of the recommendation.
associatedRecommendations : a list of associated recommendations.
For more information, see
Using the Recommender API .
Recommendations and insights can also be exported in bulk to a BigQuery table.
For details refer to the
BigQuery export documentation .
Act on Advisory Notifications recommendations
Note: You might have valid reasons to ignore a recommendation. Advisory Notifications recommendations are suggestions to help you prepare for critical security and privacy notifications, but they might not be appropriate for every situation.
The following sections provide targeted advice about acting on specific Advisory Notifications recommendations. Each section corresponds to one Advisory Notifications Recommender Subtype . The following list mentions the sections for your Recommender Subtype.
SECURITY_ESSENTIAL_CONTACTS_WITHOUT_ADVISORY_NOTIFICATIONS
NO_VIEWERS_OF_ADVISORY_NOTIFICATIONS
Grant Access to Advisory Notifications
This section helps you act on recommendations with the SECURITY_ESSENTIAL_CONTACTS_WITHOUT_ADVISORY_NOTIFICATIONS Recommender Subtype.
You received this recommendation because some of your Essential Contacts in the
Security and All categories don't have access to Advisory Notifications.
This means that these contacts receive email notifications but aren't
able to view the notification in the Google Cloud console.
We recommend that each Essential Contact be granted access to
Advisory Notifications rather than granting access through parent
groups or domains.
Granting access to each Essential Contact makes it less likely that the access
is revoked accidentally in the future. Additionally, you can use the
self-documenting Advisory Notifications Viewer role to clarify
why the binding
exists.
To apply this recommendation, do the following:
Find all organization-level Security Essential Contacts in
your Essential Contacts configuration. These are the contacts in
the Security and All
categories.
Go to Essential Contacts
Grant each contact permission to view Advisory Notifications in the Identity and Access Management
Admin page by assigning them the Advisory Notifications Viewer ( roles/advisorynotifications.viewer ) role. See viewing
Advisory Notifications if you would like to know the specific permissions
required for viewing Advisory Notifications.
Go to IAM
Configure your Advisory Notifications Viewers
This section helps you act on recommendations with the NO_VIEWERS_OF_ADVISORY_NOTIFICATIONS Recommender Subtype.
You received this recommendation because we couldn't identify any principals in
your organization with access to Advisory Notifications.
We recommend that you configure Essential Contacts and Advisory Notifications so
that you are prepared to receive critical security and privacy notifications.
To apply this recommendation, do the following:
Configure your organization-level Security Essential Contacts in the
Essential Contacts page.
Go to Essential Contacts
Grant each contact permission to view Advisory Notifications by assigning
them the Advisory Notifications Viewer Role ( roles/advisorynotifications.viewer ) in the Identity and Access Management Admin page. See viewing
Advisory Notifications if you would like to know the specific permissions
required for viewing Advisory Notifications.
Go to IAM
If you prefer not to use Essential Contacts, we still recommend granting viewing
permissions for Advisory Notifications to the appropriate parties within your
organization, such as a Security Administrator. Granting
viewing permissions for Advisory Notifications without
configuring Essential Contacts doesn't guarantee that the parties
receive email notifications from
Advisory Notifications.
Pricing
For pricing information, see Recommender pricing .
What's next
Learn more about
Advisory Notifications .
Learn more about the Recommender and its
API
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
