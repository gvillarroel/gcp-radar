---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.478Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX multilingual language support"
feature_slug: "dialogflow-cx-multilingual-language-support"
latest_feature_date: "2020-11-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-multilingual"
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-multilingual"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/language"
keywords:
  - "dialogflow"
  - "cx"
  - "multilingual"
  - "language"
  - "supports"
  - "same"
  - "set"
  - "languages"
---

# Dialogflow CX multilingual language support

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX supports the same set of languages as Dialogflow ES.

## Extended Definition

Dialogflow CX supports the same set of languages as Dialogflow ES.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-multilingual](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-multilingual)
- [https://docs.cloud.google.com/dialogflow/es/docs/agents-multilingual](https://docs.cloud.google.com/dialogflow/es/docs/agents-multilingual)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/language](https://docs.cloud.google.com/dialogflow/cx/docs/reference/language)

## Supporting Pages

### Multilingual agents \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-multilingual](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-multilingual)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- That means Dialogflow is able to differentiate among languages like ["en", "pt-br"], but not among variants of the same language like ["zh-tw", "zh-cn"] or ["pt", "pt-br"].
- Note: At the moment, language detection only supports identifying languages with major structural differences, and not variants of the same language.
- Dialogflow supports many languages.
- In the Languages drop-down menu, select the languages you want Dialogflow to be able to respond in.

### Multilingual agents \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-multilingual](https://docs.cloud.google.com/dialogflow/es/docs/agents-multilingual)
- Source ID: `site-iam-reference`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dialogflow supports many languages.
- Most agent data is common for all languages of a multilingual agent.
- Requests that do not supply an agent's language When Dialogflow receives a request that does not supply a language supported by the agent, the following rules apply: When a request does not supply a language, Dialogflow automatically determines the input language and responds in that language if automatic language detection is enabled .
- Examples: Chinese-Cantonese (zh-HK) Chinese-Simplified (zh-CN) Chinese-Traditional (zh-TW) Portuguese-Brazil (pt-BR) Portuguese-Portugal (pt) You should primarily design your agent for root languages, and only customize for locale-specific languages as needed.

### Language reference \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/language](https://docs.cloud.google.com/dialogflow/cx/docs/reference/language)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- All Text (text-only chat) DWI ( Default Welcome Intent has pre-filled training phrases) STT (speech-to-text, audio input, speech recognition) TTS (text-to-speech, audio output, speech synthesis) Playbooks ( Playbooks have been quality tested) Sentiment ( Sentiment Analysis ) aNLU ( Advanced NLU) DS ( Data store) LAD ( Language auto detect) Name Tag Text DWI STT TTS Playbooks Sentiment aNLU DS LAD Afrikaans ( Preview ) af ✔ ✔ ✔ ✔ ✔ Albanian ( Preview ) sq ✔ ✔ ✔ Amharic ( Preview ) am ✔ Arabic ar ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Armenian ( Preview ) hy ✔ ✔ ✔ Azerbaijani ( Preview ) az ✔ ✔ Basque ( Preview ) eu ✔ ✔ ✔ Belarusian ( Preview ) be ✔ ✔ ✔ Bengali bn ✔ ✔ ✔ ✔ ✔ ✔ ✔ Bengali - Bangladesh bn-bd ✔ ✔ ✔ ✔ ✔ Bengali - India bn-in ✔ ✔ ✔ ✔ ✔ Bosnian ( Preview ) bs ✔ ✔ ✔ Bulgarian bg ✔ ✔ ✔ ✔ ✔ ✔ ✔ Catalan ca ✔ ✔ ✔ ✔ ✔ Cebuano ( Preview ) ceb ✔ ✔ Chichewa ( Preview ) ny ✔ Chinese - Cantonese zh-hk ✔ ✔ ✔ ✔ ✔ Chinese - Simplified zh-cn ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Chinese - Traditional zh-tw ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Corsican ( Preview ) co ✔ Croatian hr ✔ ✔ ✔ ✔ ✔ Czech cs ✔ ✔ ✔ ✔ ✔ ✔ ✔ Danish da ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Dutch nl ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ English en ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ English - Australia en-au ✔ ✔ ✔ ✔ ✔ ✔ English - Canada en-ca ✔ ✔ ✔ ✔ ✔ ✔ English - Great Britain en-gb ✔ ✔ ✔ ✔ ✔ ✔ English - India en-in ✔ ✔ ✔ ✔ ✔ ✔ English - US en-us ✔ ✔ ✔ ✔ ✔ ✔ Esperanto ( Preview ) eo ✔ Estonian ( Preview ) et ✔ ✔ ✔ ✔ ✔ Filipino fil ✔ ✔ ✔ Filipino - The Philippines fil-ph ✔ ✔ ✔ Finnish fi ✔ ✔ ✔ ✔ ✔ ✔ ✔ French fr ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ French - Canada fr-ca ✔ ✔ ✔ ✔ ✔ ✔ French - France fr-fr ✔ ✔ ✔ ✔ ✔ ✔ Frisian ( Preview ) fy ✔ Galician gl ✔ ✔ ✔ ✔ ✔ Georgian ( Preview ) ka ✔ ✔ ✔ German de ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ German - Germany de-de ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Greek el ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Gujarati ( Preview ) gu ✔ ✔ ✔ ✔ ✔ Haitian Creole ( Preview ) ht ✔ ✔ Hausa ( Preview ) ha ✔ Hebrew he-il ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Hebrew (deprecated) iw ✔ ✔ ✔ ✔ Hindi hi ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Hmong hmn ✔ Hungarian hu ✔ ✔ ✔ ✔ ✔ ✔ ✔ Icelandic ( Preview ) is ✔ ✔ ✔ ✔ ✔ Igbo ( Preview ) ig ✔ Indonesian id ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Irish ( Preview ) ga ✔ ✔ Italian it ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Japanese ja ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Javanese ( Preview ) jv ✔ ✔ Kannada ( Preview ) kn ✔ ✔ ✔ ✔ ✔ Kazakh ( Preview ) kk ✔ ✔ Khmer ( Preview ) km ✔ ✔ Kinyarwanda ( Preview ) rw ✔ Korean ko ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Kurdish ( Preview ) ku ✔ Kyrgyz ( Preview ) ky ✔ Latin ( Preview ) la ✔ ✔ Latvian ( Preview ) lv ✔ ✔ ✔ ✔ ✔ ✔ ✔ Lithuanian ( Preview ) lt ✔ ✔ ✔ ✔ ✔ Luxembourgish ( Preview ) lb ✔ ✔ Macedonian ( Preview ) mk ✔ ✔ ✔ Malagasy ( Preview ) mg ✔ ✔ Malay ms ✔ ✔ ✔ ✔ ✔ Malay - Malaysia ms-my ✔ ✔ ✔ ✔ ✔ Malayalam ( Preview ) ml ✔ ✔ ✔ ✔ ✔ Maltese ( Preview ) mt ✔ Maori ( Preview ) mi ✔ Marathi mr ✔ ✔ ✔ ✔ ✔ Marathi - India mr-in ✔ ✔ ✔ ✔ ✔ Mongolian ( Preview ) mn ✔ Nepali ( Preview ) ne ✔ ✔ ✔ Norwegian no ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Oriya / Odia ( Preview ) or ✔ Pashto ( Preview ) ps ✔ Persian ( Preview ) fa ✔ ✔ ✔ Polish pl ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Portuguese - Brazil pt-br ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Portuguese - Portugal pt ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Punjabi ( Preview ) pa ✔ ✔ Romanian ro ✔ ✔ ✔ ✔ ✔ ✔ ✔ Romanian - Romania ro-ro ✔ ✔ ✔ ✔ ✔ Russian ru ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Samoan ( Preview ) sm ✔ Scots Gaelic ( Preview ) gd ✔ ✔ Serbian † sr ✔ ✔ ✔ ✔ ✔ ✔ ✔ Sesotho ( Preview ) st ✔ Shona ( Preview ) sn ✔ Sindhi ( Preview ) sd ✔ Sinhala si ✔ ✔ ✔ Sinhala - Sri Lanka si-lk ✔ ✔ ✔ Slovak sk ✔ ✔ ✔ ✔ ✔ ✔ ✔ Slovenian sl ✔ ✔ ✔ ✔ ✔ Somali so ✔ Spanish es ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Spanish - United States es-us ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Spanish - Latin America es-419 ✔ ✔ ✔ ✔ ✔ ✔ ✔ Spanish - Spain es-es ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Sundanese ( Preview ) su ✔ ✔ Swahili ( Preview ) sw ✔ ✔ ✔ ✔ ✔ Swedish sv ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Tajik ( Preview ) tg ✔ ✔ Tamil ta ✔ ✔ ✔ ✔ ✔ Tamil - India ta-in ✔ ✔ ✔ ✔ ✔ Tamil - Sri Lanka ta-lk ✔ ✔ ✔ ✔ ✔ Tamil - Malaysia ta-my ✔ ✔ ✔ ✔ ✔ Tamil - Singapore ta-sg ✔ ✔ ✔ ✔ ✔ Tatar ( Preview ) tt ✔ ✔ Telugu te ✔ ✔ ✔ ✔ ✔ Telugu - India te-in ✔ ✔ ✔ ✔ ✔ Thai th ✔ ✔ ✔ ✔ ✔ ✔ ✔ Turkish tr ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Turkmen ( Preview ) tk ✔ Ukrainian uk ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Urdu ( Preview ) ur ✔ ✔ ✔ Uyghur ( Preview ) ug ✔ Uzbek ( Preview ) uz ✔ ✔ ✔ Vietnamese vi ✔ ✔ ✔ ✔ ✔ ✔ ✔ Vietnamese - Vietnam vi-vn ✔ ✔ ✔ ✔ ✔ Welsh ( Preview ) cy ✔ ✔ ✔ Xhosa ( Preview ) xh ✔ Yiddish ( Preview ) yi ✔ Yoruba ( Preview ) yo ✔ ✔ Zulu ( Preview ) zu ✔ Symbol Description Language tags follow the HTTP/1.1 specification, section 3.10 . † Dialogflow supports both Cyrillic and Latin alphabets for Serbian.
- Language table Most Dialogflow CX features support all of these languages.
- For more information on using languages, see Multilingual agents .
- This page lists all languages supported by Dialogflow CX.

