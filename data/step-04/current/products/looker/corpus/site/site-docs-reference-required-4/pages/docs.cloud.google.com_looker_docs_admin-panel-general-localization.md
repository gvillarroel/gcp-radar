---
title: "Admin settings - Localization \_|\_ Looker \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/looker/docs/admin-panel-general-localization
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/looker/docs/chart-config-editor
source_metadata:
  url: https://docs.cloud.google.com/looker/docs/admin-panel-general-localization
  title: "Admin settings - Localization \_|\_ Looker \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Looker
Guides
Send feedback
Admin settings - Localization
Stay organized with collections
Save and categorize content based on your preferences.
Admins can set the default locale and number format for a Looker instance on the Localization page in the General section of the Admin panel.
Note: If you have a permission that provides access to only select pages in the Admin panel, such as manage_schedules , manage_themes , or see_admin , but you don't have the Admin role , the page or pages that are described here may not be visible to you in the Admin panel.
Admins can set locales or number formats at the user or user group levels as well. Settings at the user or user group levels supersede settings for the instance.
Locale
Certain Looker user interface text can be displayed in the following languages:
Language
Locale Code and Strings Filename
English
en
Czech
cs_CZ
German
de_DE
Spanish (Spain)
es_ES
Finnish
fi_FI
French (Canada)
fr_CA
French (France)
fr_FR
Hindi
hi_IN
Italian
it_IT
Japanese
ja_JP
Korean
ko_KR
Lithuanian
lt_LT
Norwegian (Bokmål)
nb_NO
Dutch
nl_NL
Polish
pl_PL
Brazilian Portuguese
pt_BR
Portuguese
pt_PT
Russian
ru_RU
Swedish
sv_SE
Thai
th_TH
Turkish
tr_TR
Ukrainian
uk_UA
Simplified Chinese
zh_CN
Traditional Chinese
zh_TW
It is helpful if Looker developers who are localizing data models set the models' default_locale parameters and the titles of their associated strings files to match the default locale for the instance.
If no locale is set on this page, Looker defaults to en .
For more information about localizing the Looker user interface, see the Supported user-interface languages documentation page.
Number format
Looker's default number format setting for numbers that appear in data tables and visualizations is 1,234.56 . However, the number format can be set to any of the following:
1,234.56 : Thousands separated with commas; decimals separated with a period
1.234,56 : Thousands separated with periods; decimals separated with a comma
1 234,56 : Thousands separated with spaces; decimals separated with a comma
For more information about localizing number formatting, see the Localizing number formatting documentation page.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
