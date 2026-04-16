---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.603Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Adaptive translation Portuguese support"
feature_slug: "adaptive-translation-portuguese-support"
latest_feature_date: "2024-02-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation"
  - "https://docs.cloud.google.com/translate/docs/languages"
  - "https://docs.cloud.google.com/translate/docs/advanced/custom-translations"
  - "https://docs.cloud.google.com/translate/docs/overview"
keywords:
  - "adaptive"
  - "translation"
  - "portuguese"
  - "supports"
---

# Adaptive translation Portuguese support

Product: Cloud Translation
Coverage: MEDIUM

## Step 02 Summary

Adaptive translation supports Portuguese.

## Extended Definition

Adaptive translation supports Portuguese.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation](https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation)
- [https://docs.cloud.google.com/translate/docs/languages](https://docs.cloud.google.com/translate/docs/languages)
- [https://docs.cloud.google.com/translate/docs/advanced/custom-translations](https://docs.cloud.google.com/translate/docs/advanced/custom-translations)
- [https://docs.cloud.google.com/translate/docs/overview](https://docs.cloud.google.com/translate/docs/overview)

## Supporting Pages

### "Translate text by using adaptive translation \_|\_ Cloud Translation \_\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation](https://docs.cloud.google.com/translate/docs/advanced/adaptive-translation)
- Source ID: `site-iam-reference`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / Translates using AdaptiveMt. / private static void adaptiveMtTranslate ( TranslationServiceClient translationServiceClient , String projectId , String sourceLang , String targetLang , Pair<String , String > referencePairs ) { ReferenceSentencePairList refList = ReferenceSentencePairList . newBuilder (); for ( Pair<String , String > referencePair : referencePairs ) { ReferenceSentencePair refPair = ReferenceSentencePair . newBuilder () . setSourceSentence ( referencePair . getKey ()) . setTargetSentence ( referencePair . getValue ()); refList . addReferenceSentencePair ( refPair ); } AdaptiveMtTranslateRequest request = AdaptiveMtTranslateRequest . newBuilder () . setParent ( LocationName . of ( projectId , "us-central1" ). toString ()) . setSourceLanguageCode ( sourceLang ) . setTargetLanguageCOde ( targetLang ) . addReferenceSentencePairLists ( refList ) . build (); AdaptiveMtTranslateResponse response = translationServiceClient . adaptiveMtTranslate ( request ); System . out . println ( "Translating using AdaptiveMt" ); System . out . println ( response ); } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .
- For more information, see Set up authentication for a local development environment . / Creates an AdaptiveMtDataset. / private static void createAdaptiveMtDataset ( TranslationServiceClient translationServiceClient , String projectName , String datasetName ) { String adaptiveMtDatasetName = String . format ( "projects/%s/locations/LOCATION/adaptiveMtDatasets/%s" , projectName , datasetName ); AdaptiveMtDataset adaptiveMtDataset = AdaptiveMtDataset . newBuilder () . setName ( adaptiveMtDatasetName ) . setDisplayName ( "DATASET DISPLAY NAME" ) . setSourceLanguageCode ( "SOURCE LANGUAGE CODE" ) . setTargetLanguageCode ( "TARGET LANGUAGE CODE" ) . build (); CreateAdaptiveMtDatasetRequest request = CreateAdaptiveMtDatasetRequest . newBuilder () . setParent ( LocationName . of ( "PROJECT NAME" , "LOCATION" ). toString ()) . setAdaptiveMtDataset ( adaptiveMtDataset ) . build (); AdaptiveMtDataset dataset = translationServiceClient . createAdaptiveMtDataset ( request ); System . out . println ( "Created dataset" ); System . out . println ( dataset ); } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .
- For more information, see Set up authentication for a local development environment . / Imports an AdaptiveMtFile. / private static String importAdaptiveMtFile ( TranslationServiceClient translationServiceClient , String projectId , String datasetId , String gcsUri ) { String adaptiveMtDatasetName = String . format ( "projects/%s/locations/LOCATION/adaptiveMtDatasets/%s" , projectId , datasetId ); ImportAdaptiveMtFileRequest importAdaptiveMtFileRequest = ImportAdaptiveMtFileRequest . newBuilder () . setParent ( adaptiveMtDatasetName ) . setGcsInputSource ( GcsInputSource . newBuilder (). setInputUri ( gcsUri ). build ()) . build (); ImportAdaptiveMtFileResponse response = translationServiceClient . importAdaptiveMtFile ( importAdaptiveMtFileRequest ); System . out . println ( "Importing file" ); System . out . println ( response ); return response . getAdaptiveMtFile (). getName (); } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .
- For more information, see Set up authentication for a local development environment . / Translates using AdaptiveMt. / private static void adaptiveMtTranslate ( TranslationServiceClient translationServiceClient , String projectId , String datasetId ) { String adaptiveMtDatasetName = String . format ( "projects/%s/locations/LOCATION/adaptiveMtDatasets/%s" , projectId , datasetId ); AdaptiveMtTranslateRequest request = AdaptiveMtTranslateRequest . newBuilder () . setParent ( LocationName . of ( projectId , "us-central1" ). toString ()) . setDataset ( adaptiveMtDatasetName ) . addContent ( "Sample translation text" ) . build (); AdaptiveMtTranslateResponse response = translationServiceClient . adaptiveMtTranslate ( request ); System . out . println ( "Translating using AdaptiveMt" ); System . out . println ( response ); } Node.js Before trying this sample, follow the Node.js setup instructions in the Cloud Translation quickstart using client libraries .

### Language support \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/languages](https://docs.cloud.google.com/translate/docs/languages)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Language name Language code Official Support Experimental Support Afrikaans af ✅ Albanian sq ✅ Amharic am ⚠️ Experimental support Arabic (Saudi Arabia) ar-SA ✅ Arabic ar ✅ Armenian hy ⚠️ Experimental support Azerbaijani az ✅ Basque eu ⚠️ Experimental support Belarusian be ✅ Bengali (India) bn-IN ✅ Bengali bn ✅ Bosnian (Cyrillic) bs-Cyrl ✅ Bosnian bs ✅ Bulgarian bg ✅ Burmese my ✅ Catalan ca ✅ Chinese (China) zh-CN ✅ Chinese (Hong Kong) zh-HK ✅ Chinese (Simplified) zh-Hans ✅ Chinese (Taiwan) zh-TW ✅ Chinese (Traditional) zh-Hant ✅ Chinese zh ✅ Croatian hr ✅ Czech cs ✅ Danish da ✅ Dutch (Belgium) nl-BE ✅ Dutch nl ✅ English (Australia) en-AU ✅ English (Canada) en-CA ✅ English (New Zealand) en-NZ ✅ English (Philippines) en-PH ✅ English (South Africa) en-ZA ✅ English (United Kingdom) en-GB ✅ English (United States) en-US ✅ English en ✅ Estonian et ✅ Filipino fil ✅ Finnish fi ✅ French (Canada) fr-CA ✅ French (Switzerland) fr-CH ✅ French fr ✅ Frisian fy ✅ Galician gl ✅ Georgian ka ✅ German de ✅ Greek el ✅ Guarani gn ✅ Gujarati gu ✅ Hausa ha ⚠️ Experimental support Hebrew he ✅ Hebrew iw ✅ Hindi hi ✅ Hungarian hu ✅ Icelandic is ✅ Igbo ig ⚠️ Experimental support Indonesian id ✅ Irish ga ⚠️ Experimental support Italian it ✅ Japanese ja ✅ Kannada kn ✅ Khmer km ✅ Korean ko ✅ Kyrgyz ky ✅ Lao lo ✅ Latvian lv ✅ Lingala ln ✅ Lithuanian lt ✅ Luxembourgish lb ⚠️ Experimental support Macedonian mk ✅ Malay ms ✅ Malayalam ml ✅ Maltese mt ⚠️ Experimental support Marathi mr ✅ Mongolian mn ⚠️ Experimental support Nepali ne ✅ Norwegian Bokmal nb ✅ Norwegian no ✅ Odia or ⚠️ Experimental support Persian fa ✅ Polish pl ✅ Portuguese (Brazil) pt-BR ✅ Portuguese (Portugal) pt-PT ✅ Portuguese pt ✅ Punjabi (Pakistan) pa-PK ✅ Punjabi pa ✅ Romanian ro ✅ Russian ru ✅ Scots Gaelic gd ⚠️ Experimental support Serbian sr ⚠️ Experimental support Slovak sk ✅ Slovenian sl ✅ Somali so ⚠️ Experimental support Spanish (Argentina) es-AR ✅ Spanish (Chile) es-CL ✅ Spanish (Colombia) es-CO ✅ Spanish (Costa Rica) es-CR ✅ Spanish (Ecuador) es-EC ✅ Spanish (El Salvador) es-SV ✅ Spanish (Guatemala) es-GT ✅ Spanish (Haiti) es-HT ✅ Spanish (Honduras) es-HN ✅ Spanish (Latin America) es-419 ✅ Spanish (Mexico) es-MX ✅ Spanish (Nicaragua) es-NI ✅ Spanish (Panama) es-PA ✅ Spanish (Paraguay) es-PY ✅ Spanish (Peru) es-PE ✅ Spanish (Puerto Rico) es-PR ✅ Spanish (Spain) es-ES ✅ Spanish (United States) es-US ✅ Spanish (Uruguay) es-UY ✅ Spanish (Venezuela) es-VE ✅ Spanish es ✅ Swahili sw ✅ Swedish sv ✅ Tagalog tl ✅ Tajik tg ⚠️ Experimental support Tamil ta ✅ Telugu te ✅ Thai th ✅ Turkish tr ✅ Ukrainian uk ✅ Urdu ur ✅ Uzbek uz ✅ Vietnamese vi ✅ Welsh cy ✅ Zulu zu ✅ Neural Machine Translation model The Translation API's recognition engine supports a wide variety of languages for the Neural Machine Translation (NMT) model.
- Try Cloud Translation free Language ISO-639 code Abkhaz ab Acehnese ace Acholi ach Afrikaans af Albanian sq Alur alz Amharic am Arabic ar Armenian hy Assamese as Awadhi awa Aymara ay Azerbaijani az Balinese ban Bambara bm Bashkir ba Basque eu Batak Karo btx Batak Simalungun bts Batak Toba bbc Belarusian be Bemba bem Bengali bn Betawi bew Bhojpuri bho Bikol bik Bosnian bs Breton br Bulgarian bg Buryat bua Cantonese yue Catalan ca Cebuano ceb Chichewa (Nyanja) ny Chinese (Simplified) zh-CN or zh ( BCP-47 ) Chinese (Traditional) zh-TW ( BCP-47 ) Chuvash cv Corsican co Crimean Tatar crh Croatian hr Czech cs Danish da Dinka din Divehi dv Dogri doi Dombe dov Dutch nl Dzongkha dz English en Esperanto eo Estonian et Ewe ee Fijian fj Filipino (Tagalog) fil or tl Finnish fi French fr French (French) fr-FR French (Canadian) fr-CA Frisian fy Fulfulde ff Ga gaa Galician gl Ganda (Luganda) lg Georgian ka German de Greek el Guarani gn Gujarati gu Haitian Creole ht Hakha Chin cnh Hausa ha Hawaiian haw Hebrew iw or he Hiligaynon hil Hindi hi Hmong hmn Hungarian hu Hunsrik hrx Icelandic is Igbo ig Iloko ilo Indonesian id Irish ga Italian it Japanese ja Javanese jw or jv Kannada kn Kapampangan pam Kazakh kk Khmer km Kiga cgg Kinyarwanda rw Kituba ktu Konkani gom Korean ko Krio kri Kurdish (Kurmanji) ku Kurdish (Sorani) ckb Kyrgyz ky Lao lo Latgalian ltg Latin la Latvian lv Ligurian lij Limburgan li Lingala ln Lithuanian lt Lombard lmo Luo luo Luxembourgish lb Macedonian mk Maithili mai Makassar mak Malagasy mg Malay ms Malay (Jawi) ms-Arab Malayalam ml Maltese mt Maori mi Marathi mr Meadow Mari chm Meiteilon (Manipuri) mni-Mtei Minang min Mizo lus Mongolian mn Myanmar (Burmese) my Ndebele (South) nr Nepalbhasa (Newari) new Nepali ne Northern Sotho (Sepedi) nso Norwegian no Nuer nus Occitan oc Odia (Oriya) or Oromo om Pangasinan pag Papiamento pap Pashto ps Persian fa Polish pl Portuguese pt Portuguese (Portugal) pt-PT Portuguese (Brazil) pt-BR Punjabi pa Punjabi (Shahmukhi) pa-Arab Quechua qu Romani rom Romanian ro Rundi rn Russian ru Samoan sm Sango sg Sanskrit sa Scots Gaelic gd Serbian sr Sesotho st Seychellois Creole crs Shan shn Shona sn Sicilian scn Silesian szl Sindhi sd Sinhala (Sinhalese) si Slovak sk Slovenian sl Somali so Spanish es Sundanese su Swahili sw Swati ss Swedish sv Tajik tg Tamil ta Tatar tt Telugu te Tetum tet Thai th Tigrinya ti Tsonga ts Tswana tn Turkish tr Turkmen tk Twi (Akan) ak Ukrainian uk Urdu ur Uyghur ug Uzbek uz Vietnamese vi Welsh cy Xhosa xh Yiddish yi Yoruba yo Yucatec Maya yua Zulu zu Romanization and transliteration support Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Language ISO-639 code Romanization Transliteration Arabic ar Amharic am Bengali bn Belarusian be Gujarati gu Hindi hi Japanese ja Kannada kn Myanmar my Russian ru Serbian sr Tamil ta Telugu te Ukrainian uk Custom models For Cloud Translation - Advanced, AutoML Translation supports the following language pairs for custom models.
- Languages supported by Translation LLM are also supported for Adaptive Translation.

### "Custom translations overview \_|\_ Cloud Translation \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/custom-translations](https://docs.cloud.google.com/translate/docs/advanced/custom-translations)
- Source ID: `site-iam-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Adaptive Translation Adaptive translations use LLMs combined with small datasets to provide high-quality translations, often on par with Cloud Translation custom models.
- Adaptive Translation : You can create a lightweight customization of the Translation LLM (TLLM) model with a limited dataset of translation examples.
- Compared to custom models, Adaptive Translation works well for getting responses that are similar in style, tone, and voice with your input.
- What's next For more information about each feature, see NMT customization overview or Adaptive translation .

### "Google translation offerings \_|\_ Cloud Translation \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/translate/docs/overview](https://docs.cloud.google.com/translate/docs/overview)
- Source ID: `site-api-reference`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It also supports customizations of the NMT model and TLLM model and Adaptive Translation using the TLLM model.
- It lets you choose between the NMT and Translation LLM (TLLM) models and upload example translation pairs for Adaptive Translation or to fine-tune and customize your models.
- Adaptive Translation can achieve customization and localization using a limited number of example translation pairs, optionally in multi-sentence context windows.
- It supports Neural Machine Translation (NMT) custom models and a Translation LLM (TLLM) supervised fine-tuning model.

