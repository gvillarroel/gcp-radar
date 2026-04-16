---
title: "Class Color \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/reference/add-ons-response-service/color
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://developers.google.com/apps-script/reference/content
source_metadata:
  url: https://developers.google.com/apps-script/reference/add-ons-response-service/color
  title: "Class Color \_|\_ Apps Script \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Reference
Send feedback
Class Color
Stay organized with collections
Save and categorize content based on your preferences.
Color
A Color object which represents a color in the RGBA color space.
Only available for Google Workspace add-ons that extend Google Workspace Studio.
const errorStyledText = AddOnsResponseService . newStyledText ()
. setText ( "Styled Text!" )
. addStyle ( AddOnsResponseService . TextStyle . UNDERLINE )
. setColor (
AddOnsResponseService . newColor ()
. setRed ( 0.1 )
. setBlue ( 1.0 )
. setGreen ( 1.0 )
. setAlpha ( 0.78 )
)
Methods
Method Return type Brief description
set Alpha(alpha) Color Sets the alpha component of the color.
set Blue(blue) Color Sets the blue component of the color.
set Green(green) Color Sets the green component of the color.
set Red(red) Color Sets the red component of the color.
Detailed documentation
setAlpha(alpha)
Sets the alpha component of the color.
Parameters
Name Type Description
alpha Number The alpha component of the color.
Return
Color — This object, for chaining.
setBlue(blue)
Sets the blue component of the color.
Parameters
Name Type Description
blue Number The blue component of the color.
Return
Color — This object, for chaining.
setGreen(green)
Sets the green component of the color.
Parameters
Name Type Description
green Number The green component of the color.
Return
Color — This object, for chaining.
setRed(red)
Sets the red component of the color.
Parameters
Name Type Description
red Number The red component of the color.
Return
Color — This object, for chaining.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
