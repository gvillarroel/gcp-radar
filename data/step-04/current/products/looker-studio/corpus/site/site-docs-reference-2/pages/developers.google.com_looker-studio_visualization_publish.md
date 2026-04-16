---
title: "Publish your community visualization \_|\_ Community Visualizations \_|\_\
  \ Google for Developers"
url: https://developers.google.com/looker-studio/visualization/publish
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/looker-studio/visualization
source_metadata:
  url: https://developers.google.com/looker-studio/visualization/publish
  title: "Publish your community visualization \_|\_ Community Visualizations \_|\_\
    \ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Community Visualizations
Publish your community visualization
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Publishing your visualization to the Looker Studio gallery allows for increased visibility and potential promotion, while still enabling sharing via component ID if you choose not to publish.
To publish, your visualization must meet specific criteria related to its deployment, manifest, included report, and overall functionality and design.
Your visualization's manifest file must contain essential details like a comprehensive description, support URL, accurate component details, and appropriate links for logos and resources.
The accompanying demo report needs to be publicly accessible, use sample data, showcase the visualization's capabilities, and include necessary information for users to understand and implement it.
Ensure your visualization is polished, handles resizing, works with diverse data sources, adheres to Looker Studio's styling, and complies with the Galleries Terms of Service before submitting for review.
Publishing your visualization will allow all Looker Studio users to find
your visualization in the Looker Studio gallery. Visualizations in the gallery
will be considered for additional promotion and publicity, including inclusion
in the Looker Studio newsletter.
Note: Even if you choose not to publish your visualization, you can still share
your visualization with others by providing the component ID. Users will be able
to add and use your visualization directly.
Publishing criteria
Deployment
You must manage and update your own deployment of the code.
Manifest
Your visualization manifest must be publicly accessible. Refer to the
manifest reference for more information about manifest properties.
The manifest must include the following properties:
The description is specific and grammatically correct. Provide
all information and instructions necessary for a basic understanding of the
visualization and how to use it. For example:
Are there constraints on the data being visualized?
Does the visualization expect that you use a particular data source?
The supportUrl is a page where users can get support for your
visualization, preferably hosted on your own website. This cannot be an
email or mailto link.
The devMode boolean is false in order to enable caching and provide the
best possible latency experience for users.
The logoUrl links to a publicly accessible static PNG or JPG with an
aspect ratio of 4:3. It should be accessible using an incognito browser
window.
The components[].iconUrl links to a static PNG or JPG with an aspect
ratio of 4:3 and a minimum resolution of 800x600.
The packageUrl links to the demo report described in the following section.
Your manifest must contain valid values for:
name
organization
organizationUrl
packageUrl
privacyPolicyUrl
termsOfServiceUrl
components[].name
components[].id
components[].description
components[].iconUrl
The name and the components[].name for each component is
representative of what the visualization is, outlines the purpose
of the visualization, and helps users to find the visualization they need.
Demo Report
Create at least one demo report using your visualization. Your report must
fulfill the following requirements:
The report sharing option is set to Anyone with the link can view .
All attached data sources must be set to use Owner's Credentials .
The report will be shared publicly, so we recommend that you use a sample
dataset. Do not include sensitive data, or data you do not have permission
to share.
The report is well designed and isn't visually cluttered.
Your report must include the following information
Community Visualization title
Author or company name
A description of the visualization
Sample usage of the visualization
The dimensions and metrics expected by the visualization
Style options available to the visualization
How filter interactions work (if applicable)
If needed, a sample data table
Any JavaScript libraries used (e.g. D3.js)
Any links or required attributions
Visualization
Your visualization must not be unfinished or in beta.
Your visualization is aesthetically polished and professional.
Your visualization handles resize actions properly, including an error
message if necessary.
Your visualization works with multiple data sources.
Your visualization uses styling from the theme object to provide a
consistent user experience.
As the visualization submitter, you must adhere to the Looker Studio Galleries
Terms of Service(Submitter) . Once you have met all the
requirements, click the following button to request a review for your
visualization:
Publish
your Community Visualization
Remove your published visualization
To remove your Community Visualization from the gallery, send a removal request
to looker-studio-developer-feedback@google.com .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-03 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-03 UTC."],[],[]]
