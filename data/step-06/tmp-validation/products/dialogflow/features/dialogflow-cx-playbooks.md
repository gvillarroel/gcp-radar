---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.644Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX Playbooks"
feature_slug: "dialogflow-cx-playbooks"
latest_feature_date: "2025-03-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/language"
keywords:
  - "playbook"
  - "dtmf"
  - "languages"
  - "playbooks"
---

# Dialogflow CX Playbooks

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Playbooks now support 38 languages; Playbooks now support DTMF in playbook settings and conditional actions as a preview feature.

## Extended Definition

Playbooks now support 38 languages; Playbooks now support DTMF in playbook settings and conditional actions as a preview feature.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/language](https://docs.cloud.google.com/dialogflow/cx/docs/reference/language)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Conversation history made up of user and agent utterances, flow and playbook transition context, tool calls and outputs in the same session from all previous turns sequentially handled by the current playbook.
- Conversation history made up of user and agent utterances, flow and playbook transition context, tool calls and outputs in the same session from all previous turns sequentially handled by the current playbook.
- Playbook context truncation Playbook context truncation culls some past turns from the playbook prompt in order to keep the prompt size from growing with every sequential turn handled by the playbook.
- Playbook few-shot examples: Are added either in order (by default) or by an algorithm that you choose (such as regular expression best match ordering).

### "Conversational Agents console overview \_|\_ Dialogflow CX \_|\_ Google\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)
- Source ID: `site-docs-root`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Using the Conversational Agents console, you can create interactive agents that use generative playbooks , generative data stores , and deterministic flows .
- Agents that utilize generative features such as playbooks, data stores, generators, or generative fallback for a request are charged as generative requests.
- To create an agent with playbooks and/or flows : Open the Conversational Agents console .
- Left navigation X Item Playbooks List, create, and edit generative playbooks .

### Language reference \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/language](https://docs.cloud.google.com/dialogflow/cx/docs/reference/language)
- Source ID: `site-docs-reference`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- All Text (text-only chat) DWI ( Default Welcome Intent has pre-filled training phrases) STT (speech-to-text, audio input, speech recognition) TTS (text-to-speech, audio output, speech synthesis) Playbooks ( Playbooks have been quality tested) Sentiment ( Sentiment Analysis ) aNLU ( Advanced NLU) DS ( Data store) LAD ( Language auto detect) Name Tag Text DWI STT TTS Playbooks Sentiment aNLU DS LAD Afrikaans ( Preview ) af ✔ ✔ ✔ ✔ ✔ Albanian ( Preview ) sq ✔ ✔ ✔ Amharic ( Preview ) am ✔ Arabic ar ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Armenian ( Preview ) hy ✔ ✔ ✔ Azerbaijani ( Preview ) az ✔ ✔ Basque ( Preview ) eu ✔ ✔ ✔ Belarusian ( Preview ) be ✔ ✔ ✔ Bengali bn ✔ ✔ ✔ ✔ ✔ ✔ ✔ Bengali - Bangladesh bn-bd ✔ ✔ ✔ ✔ ✔ Bengali - India bn-in ✔ ✔ ✔ ✔ ✔ Bosnian ( Preview ) bs ✔ ✔ ✔ Bulgarian bg ✔ ✔ ✔ ✔ ✔ ✔ ✔ Catalan ca ✔ ✔ ✔ ✔ ✔ Cebuano ( Preview ) ceb ✔ ✔ Chichewa ( Preview ) ny ✔ Chinese - Cantonese zh-hk ✔ ✔ ✔ ✔ ✔ Chinese - Simplified zh-cn ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Chinese - Traditional zh-tw ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Corsican ( Preview ) co ✔ Croatian hr ✔ ✔ ✔ ✔ ✔ Czech cs ✔ ✔ ✔ ✔ ✔ ✔ ✔ Danish da ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Dutch nl ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ English en ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ English - Australia en-au ✔ ✔ ✔ ✔ ✔ ✔ English - Canada en-ca ✔ ✔ ✔ ✔ ✔ ✔ English - Great Britain en-gb ✔ ✔ ✔ ✔ ✔ ✔ English - India en-in ✔ ✔ ✔ ✔ ✔ ✔ English - US en-us ✔ ✔ ✔ ✔ ✔ ✔ Esperanto ( Preview ) eo ✔ Estonian ( Preview ) et ✔ ✔ ✔ ✔ ✔ Filipino fil ✔ ✔ ✔ Filipino - The Philippines fil-ph ✔ ✔ ✔ Finnish fi ✔ ✔ ✔ ✔ ✔ ✔ ✔ French fr ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ French - Canada fr-ca ✔ ✔ ✔ ✔ ✔ ✔ French - France fr-fr ✔ ✔ ✔ ✔ ✔ ✔ Frisian ( Preview ) fy ✔ Galician gl ✔ ✔ ✔ ✔ ✔ Georgian ( Preview ) ka ✔ ✔ ✔ German de ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ German - Germany de-de ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Greek el ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Gujarati ( Preview ) gu ✔ ✔ ✔ ✔ ✔ Haitian Creole ( Preview ) ht ✔ ✔ Hausa ( Preview ) ha ✔ Hebrew he-il ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Hebrew (deprecated) iw ✔ ✔ ✔ ✔ Hindi hi ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Hmong hmn ✔ Hungarian hu ✔ ✔ ✔ ✔ ✔ ✔ ✔ Icelandic ( Preview ) is ✔ ✔ ✔ ✔ ✔ Igbo ( Preview ) ig ✔ Indonesian id ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Irish ( Preview ) ga ✔ ✔ Italian it ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Japanese ja ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Javanese ( Preview ) jv ✔ ✔ Kannada ( Preview ) kn ✔ ✔ ✔ ✔ ✔ Kazakh ( Preview ) kk ✔ ✔ Khmer ( Preview ) km ✔ ✔ Kinyarwanda ( Preview ) rw ✔ Korean ko ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Kurdish ( Preview ) ku ✔ Kyrgyz ( Preview ) ky ✔ Latin ( Preview ) la ✔ ✔ Latvian ( Preview ) lv ✔ ✔ ✔ ✔ ✔ ✔ ✔ Lithuanian ( Preview ) lt ✔ ✔ ✔ ✔ ✔ Luxembourgish ( Preview ) lb ✔ ✔ Macedonian ( Preview ) mk ✔ ✔ ✔ Malagasy ( Preview ) mg ✔ ✔ Malay ms ✔ ✔ ✔ ✔ ✔ Malay - Malaysia ms-my ✔ ✔ ✔ ✔ ✔ Malayalam ( Preview ) ml ✔ ✔ ✔ ✔ ✔ Maltese ( Preview ) mt ✔ Maori ( Preview ) mi ✔ Marathi mr ✔ ✔ ✔ ✔ ✔ Marathi - India mr-in ✔ ✔ ✔ ✔ ✔ Mongolian ( Preview ) mn ✔ Nepali ( Preview ) ne ✔ ✔ ✔ Norwegian no ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Oriya / Odia ( Preview ) or ✔ Pashto ( Preview ) ps ✔ Persian ( Preview ) fa ✔ ✔ ✔ Polish pl ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Portuguese - Brazil pt-br ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Portuguese - Portugal pt ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Punjabi ( Preview ) pa ✔ ✔ Romanian ro ✔ ✔ ✔ ✔ ✔ ✔ ✔ Romanian - Romania ro-ro ✔ ✔ ✔ ✔ ✔ Russian ru ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Samoan ( Preview ) sm ✔ Scots Gaelic ( Preview ) gd ✔ ✔ Serbian † sr ✔ ✔ ✔ ✔ ✔ ✔ ✔ Sesotho ( Preview ) st ✔ Shona ( Preview ) sn ✔ Sindhi ( Preview ) sd ✔ Sinhala si ✔ ✔ ✔ Sinhala - Sri Lanka si-lk ✔ ✔ ✔ Slovak sk ✔ ✔ ✔ ✔ ✔ ✔ ✔ Slovenian sl ✔ ✔ ✔ ✔ ✔ Somali so ✔ Spanish es ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Spanish - United States es-us ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Spanish - Latin America es-419 ✔ ✔ ✔ ✔ ✔ ✔ ✔ Spanish - Spain es-es ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Sundanese ( Preview ) su ✔ ✔ Swahili ( Preview ) sw ✔ ✔ ✔ ✔ ✔ Swedish sv ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Tajik ( Preview ) tg ✔ ✔ Tamil ta ✔ ✔ ✔ ✔ ✔ Tamil - India ta-in ✔ ✔ ✔ ✔ ✔ Tamil - Sri Lanka ta-lk ✔ ✔ ✔ ✔ ✔ Tamil - Malaysia ta-my ✔ ✔ ✔ ✔ ✔ Tamil - Singapore ta-sg ✔ ✔ ✔ ✔ ✔ Tatar ( Preview ) tt ✔ ✔ Telugu te ✔ ✔ ✔ ✔ ✔ Telugu - India te-in ✔ ✔ ✔ ✔ ✔ Thai th ✔ ✔ ✔ ✔ ✔ ✔ ✔ Turkish tr ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Turkmen ( Preview ) tk ✔ Ukrainian uk ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔ Urdu ( Preview ) ur ✔ ✔ ✔ Uyghur ( Preview ) ug ✔ Uzbek ( Preview ) uz ✔ ✔ ✔ Vietnamese vi ✔ ✔ ✔ ✔ ✔ ✔ ✔ Vietnamese - Vietnam vi-vn ✔ ✔ ✔ ✔ ✔ Welsh ( Preview ) cy ✔ ✔ ✔ Xhosa ( Preview ) xh ✔ Yiddish ( Preview ) yi ✔ Yoruba ( Preview ) yo ✔ ✔ Zulu ( Preview ) zu ✔ Symbol Description Language tags follow the HTTP/1.1 specification, section 3.10 . † Dialogflow supports both Cyrillic and Latin alphabets for Serbian.
- The Cloud Speech-to-Text language reference lists languages that support the "Enhanced phone call" and "Phone call" models.
- Limitations The following limitations apply: System entity support differs for different languages.
- Generative playbook and flow features are also being migrated to a single consolidated console.

