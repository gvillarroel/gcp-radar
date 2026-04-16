---
title: "Manifest Reference \_|\_ Community Connectors \_|\_ Google for Developers"
url: https://developers.google.com/looker-studio/connector/manifest
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://developers.google.com/looker-studio/connector/reference
source_metadata:
  url: https://developers.google.com/looker-studio/connector/manifest
  title: "Manifest Reference \_|\_ Community Connectors \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Community Connectors
Reference
Manifest Reference
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The appsscript.json manifest file provides essential information about your Apps Script connector for deployment and usage in Looker Studio.
It includes required fields like connector name, company details, URLs, description, and optional fields for enhanced functionality and user experience.
The manifest supports specifying authentication type, fee type, data sources, and report templates, allowing for customization and integration.
You need to whitelist any external URLs your connector accesses using the urlFetchWhitelist property for security purposes.
All information included in the manifest file is publicly accessible, so avoid including any sensitive data.
The manifest ( appsscript.json ) is a JSON file in your Apps Script connector
project. It contains certain information about your Community Connector
that is required to deploy and use your connector in Looker Studio. Read more
about manifests in Apps Script .
Caution: Any information you put in the manifest file should be considered
public.
Your manifest should contain the following information:
property name
Type
Description
Required (under the dataStudio property)
name
string
Name of your connector.
Limited to 28 characters
company
string
Name of the organization or developer.
companyUrl
string (link)
Link to the organization or developer's website.
logoUrl
string (image link)
The URL to an icon for your connector.
The required dimensions are 40px by 40px.
addOnUrl
string (link)
Link to a dedicated 'Learn More' page that should explain what your
connector does and the data it accesses. You should host and maintain this
page.
This page must contain or link to your Terms of Service and Privacy
Policy.
supportUrl
string (link)
Link to the support page for supporting this connector. Users
should be able to report issues with your connector at this link. You
should host and maintain this page.
description
string
The description for your connector.
Users will see the full description in your connector
configuration page. Links will be clickable.
Optional (under the dataStudio property)
shortDescription
string
Limit: 114 characters. If your connector is published,
this short description will be visible in the gallery card for your
connector. Use this to briefly describe what your connector does. Users
will be able to view this when they browse through connectors in the
gallery.
privacyPolicyUrl
string (link)
Link to the Privacy Policy for the connector / developer organization.
termsOfServiceUrl
string (link)
Link to the Terms of Services for the connector / developer organization.
authType
list( AuthType )
Authentication method type for your connector. See AuthType below.
feeType
list( FeeType )
Indicates the fee type for your connector. See FeeType below.
sources
list( Sources )
The list of data sources that this connector can connect to. See Sources below.
templates
Object
List of templates that can be used with this connector. Only one default
template is supported, identified by setting a
default key. The value should be the report ID for the Looker
Studio report that will be used as the template. See the guide on Providing
report templates .
forceViewersCredentials
boolean
Whether or not viewer's credentials should be forced for data sources
created from this connector. This property is optional and defaults to
false . See Data
source credentials for more details on viewer's credentials.
useQueryConfig
boolean
DEPRECATED : Whether or not this connector will return a query config for
`getData()`. Use `advancedServices` instead.
advancedServices.data
boolean
Whether or not this connector will return a query config for
`getData()`. See advanced
services .
advancedServices.schema
boolean
Whether or not this connector will return a query config for
`getSchema()`. See advanced
services .
Optional (Root level property)
urlFetchWhitelist
list(string)
A list of HTTPS URL prefixes which your connector uses. Any URL endpoint
fetched must match one of the prefixes in this list. This can help to
protect user data. See Safelisting
URLs for more details.
AuthType
The values for authentication method type can be one of the following:
Enum Value
Description
NONE
Indicates there is no authentication required for the
connector.
OAUTH2
Indicates the connector uses OAuth 2.0.
KEY
Indicates the connector uses API key.
USER_PASS
Indicates the connector uses username/password.
USER_TOKEN
Indicates the connector uses username/token.
PATH_USER_PASS
Indicates the connector uses path/username/password.
PATH_KEY
Indicates the connector uses path/key.
FeeType
The values for fee type can be any of the following:
Enum Value
Description
FREE
Indicates the connector is completely free to use.
FREE_TRIAL
Indicates the connector has a free trial option.
PAID
Indicates the user will need to pay to use the connector.
Sources
Sources is a list of enums for sources. You can view the existing list of
sources at our Data Registry Repository . If the source you are connecting to
does not exist in the repository, send a pull request to the Data Registry
Repository to add the source. The source name can contain only uppercase
characters and underscores (e.g. Google Analytics will be GOOGLE_ANALYTICS ).
In your Community Connector manifest, use the value of the data source id
property, e.g. GOOGLE_ANALYTICS .
Example manifest for a Community Connector
The following is an example of a completed manifest:
data-studio/appsscript.json
View on GitHub
{
"dataStudio" : {
"name" : "Nucleus by Hooli" ,
"company" : "Hooli Inc." ,
"companyUrl" : "https://hooli.xyz" ,
"logoUrl" : "https://hooli.xyz/middle-out-optimized/nucleus/logo.png" ,
"addonUrl" : "https://hooli.xyz/data-studio-connector" ,
"supportUrl" : "https://hooli.xyz/data-studio-connector/support" ,
"description" : "Nucleus by Hooli connector lets you connect to your data in Data Studio using Nucleus middle out optimization. You will need an account on hooli.xyz to use this connector. Create your account at https://hooli.xyz/signup" ,
"shortDescription" : "Connect to your data using Nucleus middle out optimization" ,
"privacyPolicyUrl" : "https://hooli.xyz/privacy" ,
"termsOfServiceUrl" : "https://hooli.xyz/tos" ,
"authType" : [ "NONE" ],
"feeType" : [ "PAID" ],
"sources" : [
"HOOLI_CHAT_LOG" ,
"ENDFRAME_SERVER_STREAM" ,
"RETINABYTE_USER_ANALYTICS"
],
"templates" : {
"default" : "872223s89f5fdkjnd983kjf"
}
},
"urlFetchWhitelist" : [ "https://api.hooli.xyz/" , "https://hooli.xyz/" ]
}
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-02 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-02 UTC."],[],[]]
