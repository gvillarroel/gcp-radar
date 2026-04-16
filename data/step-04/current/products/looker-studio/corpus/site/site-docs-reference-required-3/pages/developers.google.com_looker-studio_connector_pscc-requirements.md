---
title: "Partner Connector requirements \_|\_ Community Connectors \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/looker-studio/connector/pscc-requirements
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://developers.google.com/looker-studio/connector/reference
source_metadata:
  url: https://developers.google.com/looker-studio/connector/pscc-requirements
  title: "Partner Connector requirements \_|\_ Community Connectors \_|\_ Google for\
    \ Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Community Connectors
Partner Connector requirements
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
To publish a Partner Connector, ensure it meets all requirements outlined for Apps Script, Manifest, and the Connector itself.
Before submitting, share view access of your Apps Script project, create a Production deployment, and confirm the manifest file is visible.
The manifest must include specific details such as description, URLs, sources, and authentication information.
Your connector needs to be fully functional, handle errors gracefully, adhere to style guidelines, and complete OAuth client verification.
Once all requirements are met, submit a review request using the provided link.
Review the Publishing overview to understand the benefits and required level
of commitment for publishing a connector. To publish a Partner Connector , your
connector must meet all of the requirements described below.
Apps Script
Before submitting your connector for review, complete the following in Apps
Script:
Share view access of your Apps Script project with the following:
data-studio-contrib-qa@googlegroups.com
data-studio-contrib@google.com
Create a deployment named Production and update the Production
deployment to the version of code you intend to publish.
Confirm that you've updated the Production deployment to the version of
code you want reviewed.
Confirm that the manifest file is visible in Apps Script. At the left, click
Project Settings settings . Select
the Show "appsscript.json" manifest file in editor checkbox.
Manifest
Include the following in your connector's manifest and confirm that your Apps
Script project is configured to show the appsscript.json manifest file in the
editor.
View the Community Connector manifest reference for more
information.
dataStudio
description should provide information
and instructions for a basic understanding of the connector and how to use
it. Connectors with vague and incomplete descriptions will be rejected.
addOnUrl should be a dedicated hosted page
about your connector, preferably hosted on your own domain. The page must
include the following:
A Privacy Policy and Terms of Use or a link to this content, on
the same domain as the addOnUrl .
Details the user will need to know to use your connector.
The sign up link, if an account is required to use your connector,.
Content hosted preferably on your domain. Hosting on
https://sites.google.com/ is not allowed.
See example pages from existing partners: Funnel , Supermetrics ,
CallRail .
supportUrl should be a hosted page to
get support for your connector. This cannot be an email or mailto link.
logoUrl should point to a static image
hosted under your control. You cannot use images served by Google
services on domains such as *.gstatic.com , *.ggpht.com , *.google.com ,
*.googleusercontent.com . Using Google Cloud Storage to serve images from
the *.googleapis.com domain is acceptable and is a recommended hosting
option.
Connectors with animated icons will be rejected. Use static images.
It's recommended to use at minimum, a 48x48-pixel image.
Avoid text-only images that are difficult to read when scaled down to
48x48-pixels.
Populate the sources property with all
sources your connector connects to. See Sources in Manifest reference for
details.
You can view the existing list of sources at
Data Registry Repository . If the source you
are connecting to does not exist in the repository, send a
pull request to the Data Registry Repository to add the source. Your
connector will fail the review process if the sources in your manifest
do not exist in the repository.
This is additional metadata for the connector that will be indexed for
search feature in the gallery. Your connector will show up in the search
results when users search for a specific source in the gallery.
Provide values for
shortDescription ,
authType , feeType , privacyPolicyUrl , and termsOfServiceUrl .
name should directly represent the purpose of
the connector. A clear name will help users determine whether your connector
meets their needs. Avoid using the word connector in the name since users
already know they are looking at a connector.
Do not include special or non-visible characters with the intention of
drawing attention to or potentially altering the position of your
connector.
Do not use shorthand names for Looker Studio anywhere
in the manifest (e.g. GDS, DS, etc.).
Emojis are not allowed in any manifest field
( description , shortDescription , name , etc). In general, do not include
special or non-visible characters with the intention of drawing attention to
your connector.
If your connector has a fixed schema,
create a report template for your connector and add it to the manifest.
Enable Sharing by link for the report.
urlFetchWhitelist
Limit the number of endpoints called by UrlFetchApp to those absolutely
required for connector functionality. Add the urlFetchWhitelist property
to the root level of your manifest. View the urlFetchWhitelist reference
for more info.
Include all endpoints used with the UrlFetchApp service.
If your connector does not fetch resources using the UrlFetchApp
service, set urlFetchWhitelist to an empty list [] .
If your connector does not connect to a set of fixed endpoints or the
endpoint prefix varies, omit the urlFetchWhitelist property and
provide details in the Exception for urlFetchWhitelist form field when
submitting the review request.
oauthScopes
Set explicit OAuth scopes in the manifest. Connectors without explicit
OAuth scopes will be rejected.
Connector
If the user needs an account to use the connector, make sure the connector
description or the addOnUrl link provides instructions to help the user
create one.
Your connector cannot be in unfinished or beta status. You have to publish a
complete and functional connector. You can always update your connector but
the production deployment that is released to users should be tested and
feature complete.
Provide meaningful and actionable error messages to users when users
encounter a Connector internal error . This includes cases when a user
provides invalid/blank input at configuration.
shortDescription , description , addOnUrl link, supportUrl link, and
OAuth page (if applicable) should be free of spelling and grammatical
errors.
shortDescription cannot contain URLs.
Use authentication methods provided by getAuthType() . Do not request
credentials via getConfig() .
Complete the OAuth Client Verification process. The verification is
mandatory for all connectors regardless of the authentication method in
getAuthType() . The verification process is a different process from the
connector review and is handled by a separate team, not Looker Studio.
Consult the OAuth API Verification FAQ for more info. Your connector
will be rejected if the OAuth Client Verification process is not
completed.
During the OAuth verification process ,
add your connector's required OAuth scopes as part of the OAuth
consent screen configuration. If you fail to add all required scopes,
you might pass the OAuth verification process but your connector will
still show the Unverified app screen . This will cause the Partner
Connector verification process to fail.
Authorize and test your connector using a new account after passing the
OAuth verification process to ensure that Unverified app screen is
not displayed to your users.
Ensure you adhere to the
Looker Studio Galleries Terms of Service (Submitter) .
Once you have met all the requirements, click the following button to request a
review for your connector:
Publish your
Partner Connector
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-09-18 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-09-18 UTC."],[],[]]
