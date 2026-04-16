---
title: "Direct Link \_|\_ Community Connectors \_|\_ Google for Developers"
url: https://developers.google.com/looker-studio/connector/direct-links
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://developers.google.com/looker-studio/connector/reference
source_metadata:
  url: https://developers.google.com/looker-studio/connector/direct-links
  title: "Direct Link \_|\_ Community Connectors \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Community Connectors
Direct Link
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Share your Community Connector deployments using direct links, allowing users to access them within Looker Studio.
Get the direct link from the Apps Script deployment settings or construct it using the Deployment ID and base URL.
Pre-populate connector configurations within the direct link using URL-encoded JSON to streamline the user experience.
Customize pre-populated links further by specifying a default report template ID.
You can share any deployment of your Community Connector with a link. When a
user follows the link, it will take them directly to Looker Studio with your
connector selected.
To get a direct link for your community connector, follow these steps:
Navigate to Apps Scripts and open the project of the Community
Connector to share. Click Deploy > Manage Deployments .
Click the Active deployment to share. Under Looker Studio Add-on URL , a
direct link to Looker Studio for the selected deployment is displayed, click
Copy . Alternatively, under Deployment ID click Copy and append the
copied Deployment ID to the following URL to form a direct link:
https://lookerstudio.google.com/datasources/create?connectorId= DEPLOYMENT_ID
The direct link can be shared with users. For example, send it via email,
post it on a website, blog, social media, etc.
Preconfigure a direct link
If you know the configuration values that your users will want ahead of time,
you can provide additional query parameters to pre-populate the connector
configuration. The pre-populated configuration can still be modified by users.
Create a preconfigured direct Link
To create a preconfigured direct link, add the following optional query
parameters:
connectorConfig - A URL encoded JSON string containing key-value pairs to
use to pre-populate the connector configuration.
Key names must match the parameter names defined in the
connector config .
TEXTINPUT , TEXTAREA , and SELECT_SINGLE values should be strings.
CHECKBOX values should be a boolean.
SELECT_MULTIPLE values should be an array of strings.
reportTemplateId - An identifier for the default reporting template to use
for the connector. If a default template is set in the connector manifest,
this value will override the manifest. See
How To Add The Report Template for the value to use.
Example
The following example illustrates how to create a direct link to the
StackOverflow Questions community connector. The direct link
pre-populates the connector configuration to use the looker-studio tag on
Stack Overflow.
Caution: If a connector hasn't been authorized, then pre-populating does not
work. Users will need to authorize the connector, then try the link again.
Step 1: Create the config JSON
The keys for the config JSON are the names of each configuration item. For the
Stack Overflow config , these names are tagged , pagesize , and
sort .
JSON before encoding
{
"tagged": "looker-studio",
"pagesize": 25,
"sort": "activity"
}
Step 2: Encode the URL
After the configuration JSON is created, URL encode the object. An easy option
is to use the encodeURIComponent JavaScript function.
Encoding Url
// get a reference to the jsonConfig
var jsonConfig ;
var encoded = encodeURIComponent ( jsonConfig );
The result is the following encoded string:
"%7B%22tagged%22%3A%22looker-studio%22%2C%22pagesize%22%3A%2225%22%2C%22sort%22%3A%22activity%22%7D"
Step 3: Build the URL
The following code builds the direct link. Note that you will need your
connector's Deployment ID to build the URL.
data-studio/links.gs
View on GitHub
// These variables should be filled in as necessary for your connector.
let configJSON ;
let templateId ;
let deploymentId ;
const params = [];
const jsonString = JSON . stringify ( configJSON );
const encoded = encodeURIComponent ( jsonString );
params . push ( `connectorConfig= ${ encoded } ` );
params . push ( `reportTemplateId= ${ templateId } ` );
params . push ( `connectorId= ${ deploymentId } ` );
const joinedParams = params . join ( "&" );
const URL = `https://datastudio.google.com/datasources/create? ${ joinedParams } ` ;
Note: The reportTemplateId is optional, but included in the above snippet. If
you aren't using a reportTemplateId , remove that part of the code.
This returns the following encoded URL, a pre-populated direct link for the
connector:
https://lookerstudio.google.com/datasources/create?connectorConfig=%7B%22tagged%22%3A%22looker-studio%22%2C%22pagesize%22%3A%2225%22%2C%22sort%22%3A%22activity%22%7D&reportTemplateId=1lR9CGfx3uyQp6oz7oAgA1rsqZViA-IQs&connectorId=AKfycbwGMj-oe532y-NEbMHo-KLUCEz0EEGOZj-3lhEgw7q65-hs-T_F9B3Qjw
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-03 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-03 UTC."],[],[]]
