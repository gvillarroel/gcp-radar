---
title: "Manage language settings \_|\_ Gmail \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/api/guides/language-settings
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/api/guides
source_metadata:
  url: https://developers.google.com/workspace/gmail/api/guides/language-settings
  title: "Manage language settings \_|\_ Gmail \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Gmail
Guides
Send feedback
Manage language settings
Stay organized with collections
Save and categorize content based on your preferences.
This document explains how to manage language settings using the Gmail API.
You can use the
settings resource to
configure language settings for an account, which sets the display language for
Gmail.
Configure languages
The
settings.getLanguage
and
settings.updateLanguage
methods on the
settings resource use
a LanguageSettings
object. The
displayLanguage
field of the LanguageSettings object sets the display language for
Gmail. The format of the display language is in RFC 3066 language tag
format .
Not all Gmail clients can display the same set of languages. If a
user's display language is unavailable on a specific client, the
Gmail client automatically chooses the closest supported variant
or a reasonable default.
Language set
The set of supported languages evolves over time. For more information on how to
find the list of languages in Gmail, see Change your
Gmail language settings .
The following table shows a sample of potential language values:
Language (English)
Language (in Gmail settings)
Tag (RFC 3066)
Afrikaans
Afrikaans
af
Azerbaijani
Azərbaycanca
az
Indonesian
Bahasa Indonesia
id
Malay
Bahasa Melayu
ms
Catalan
Català
ca
Czech
Český
cs
Welsh
Cymraeg
cy
Danish
Dansk
da
German
Deutsch
de
Estonian
Eesti keel
et
English (UK)
English (UK)
en-GB
English
English (US)
en
Spanish
Español
es
Spanish (LatAm)
Español (Latinoamerica)
es-419
Basque
Euskara
eu
Filipino
Filipino
fil
French
Français
fr
French (Canada)
Français (Canada)
fr-CA
Irish
Gaeilge
ga
Gallegan
Galego
gl
Croatian
Hrvatski
hr
Italian
Italiano
it
Zulu
IsiZulu
zu
Icelandic
Íslenska
is
Swahili
Kiswahili
sw
Latvian
Latviešu
lv
Lithuanian
Lietuvių
lt
Hungarian
Magyar
hu
Norwegian
Norsk (Bokmål)
no
Dutch
Nederlands
nl
Polish
Polski
pl
Portuguese (BR)
Português (Brasil)
pt-BR
Portuguese (PT)
Português (Portugal)
pt-PT
Romanian
Română
ro
Slovak
Slovenský
sk
Slovenian
Slovenščina
sl
Finnish
Suomi
fi
Swedish
Svenska
sv
Vietnamese
Tiếng Việt
vi
Turkish
Türkçe
tr
Greek
Ελληνικά
el
Bulgarian
Български
bg
Mongolian
Монгол
mn
Russian
Русский
ru
Serbian
Српски
sr
Ukrainian
Українська
uk
Armenian
Հայերեն
hy
Hebrew
עברית
he
Urdu
اردو
ur
Arabic
العربية
ar
Persian
فارسی
fa
Nepali
नेपाली (Nepali)
ne
Marathi
मराठी
mr
Hindi
हिन्दी
hi
Bengali
বাংলা
bn
Gujarati
ગુજરાતી
gu
Tamil
தமிழ்
ta
Telugu
తెలుగు
te
Kannada
ಕನ್ನಡ
kn
Malayalam
മലയാളം
ml
Sinhalese
සිංහල (Sinhala)
si
Thai
ภาษาไทย
th
Lao
ພາສາລາວ (Lao)
lo
Burmese
မြန်မာဘာသာ (Myanmar language)
my
Georgian
ქართული
ka
Amharic
አማርኛ (Amharic)
am
Cherokee
ᏣᎳᎩ (Cherokee)
chr
Khmer
ភាសាខ្មែរ (Khmer)
km
Chinese (HK)
中文 (香港)
zh-HK
Chinese (China)
中文 (简体)
zh-CN
Chinese (Taiwan)
中文 (繁體)
zh-TW
Japanese
日本語
ja
Korean
한국어
ko
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
