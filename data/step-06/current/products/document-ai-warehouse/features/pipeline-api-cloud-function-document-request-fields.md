---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:15.503Z"
product_name: "Document AI Warehouse"
product_slug: "document-ai-warehouse"
feature_name: "Pipeline API Cloud Function document request fields"
feature_slug: "pipeline-api-cloud-function-document-request-fields"
latest_feature_date: "2023-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/process-documents-ocr"
  - "https://docs.cloud.google.com/document-ai/docs/fields"
  - "https://docs.cloud.google.com/document-ai/docs/languages"
keywords:
  - "pipeline"
  - "document"
  - "request"
  - "fields"
  - "adds"
  - "doc"
  - "ai"
  - "type"
---

# Pipeline API Cloud Function document request fields

Product: Document AI Warehouse
Coverage: MEDIUM

## Step 02 Summary

Adds the doc_ai_document_type and doc_ai_document_path fields to the Pipeline API Cloud Function request.

## Extended Definition

Adds the doc_ai_document_type and doc_ai_document_path fields to the Pipeline API Cloud Function request.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)

## Supporting Pages

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HTTP method and URL: POST https:// LOCATION -documentai.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /processors/ PROCESSOR ID /processorVersions/ PROCESSOR VERSION :process Request JSON body: { "skipHumanReview": skipHumanReview , "rawDocument": { "mimeType": " MIME TYPE ", "content": " IMAGE CONTENT " }, "fieldMask": " FIELD MASK ", "processOptions": { "ocrConfig": { "enableNativePdfParsing": ENABLE NATIVE PDF PARSING , "enableImageQualityScores": ENABLE IMAGE QUALITY SCORES , "enableSymbol": ENABLE SYMBOL , "disableCharacterBoxesDetection": DISABLE CHARACTER BOXES DETECTION , "hints": { "languageHints": [ " LANGUAGE HINTS " ] }, "advancedOcrOptions": [" ADVANCED OCR OPTIONS "], "premiumFeatures": { "enableSelectionMarkDetection": ENABLE SELECTION MARK DETECTION , "computeStyleInfo": COMPUTE STYLE INFO , "enableMathOcr": ENABLE MATH OCR , } }, "individualPageSelector" { "pages": [ INDIVIDUAL PAGES ] } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- PremiumFeatures ( compute style info = True , enable math ocr = False , # Enable to use Math OCR Model enable selection mark detection = True , ), ) ) Online processing request to Document AI document = process document ( project id , location , processor id , processor version , file path , mime type , process options = process options , ) text = document . text print ( f "Full document text: { text } \n " ) print ( f "There are { len ( document . pages ) } page(s) in this document. \n " ) for page in document . pages : print ( f "Page { page . page number } :" ) print page dimensions ( page . dimension ) print detected languages ( page . detected languages ) print blocks ( page . blocks , text ) print paragraphs ( page . paragraphs , text ) print lines ( page . lines , text ) print tokens ( page . tokens , text ) if page . symbols : print symbols ( page . symbols , text ) if page . image quality scores : print image quality scores ( page . image quality scores ) if page . visual elements : print visual elements ( page . visual elements , text ) def print page dimensions ( dimension : documentai .
- Input Enable by setting ProcessOptions.ocrConfig.premiumFeatures.enableSelectionMarkDetection to true in the processing request. { "rawDocument" : { "mimeType" : " MIME TYPE " , "content" : " IMAGE CONTENT " }, "processOptions" : { "ocrConfig" : { "premiumFeatures" : { "enableSelectionMarkDetection" : true } } } } Output The checkbox output appears in Document.pages[].visualElements[] with "type": "unfilled checkbox" or "type": "filled checkbox" . "visualElements" : [ { "layout" : { "confidence" : 0.89363575 , "boundingPoly" : { "vertices" : [ { "x" : 11 , "y" : 24 }, { "x" : 37 , "y" : 24 }, { "x" : 37 , "y" : 56 }, { "x" : 11 , "y" : 56 } ], "normalizedVertices" : [ { "x" : 0.017488075 , "y" : 0.38709676 }, { "x" : 0.05882353 , "y" : 0.38709676 }, { "x" : 0.05882353 , "y" : 0.9032258 }, { "x" : 0.017488075 , "y" : 0.9032258 } ] } }, "type" : "unfilled checkbox" }, { "layout" : { "confidence" : 0.9148201 , "boundingPoly" : ... }, "type" : "filled checkbox" } ], You can check the full Document JSON output in this link .
- At the token (word) level, the following attributes are detected: Handwriting detection Font style Font size Font type Font color Font weight Letter spacing Bold Italic Underlined Text color ( RGBa ) Background color ( RGBa ) Input Enable by setting ProcessOptions.ocrConfig.premiumFeatures.computeStyleInfo to true in the processing request. { "rawDocument" : { "mimeType" : " MIME TYPE " , "content" : " IMAGE CONTENT " }, "processOptions" : { "ocrConfig" : { "premiumFeatures" : { "computeStyleInfo" : true } } } } Output The font-style output appears in Document.pages[].tokens[].styleInfo with type StyleInfo . "tokens" : [ { "styleInfo" : { "fontSize" : 3 , "pixelFontSize" : 13 , "fontType" : "SANS SERIF" , "bold" : true , "fontWeight" : 564 , "textColor" : { "red" : 0.16862746 , "green" : 0.16862746 , "blue" : 0.16862746 }, "backgroundColor" : { "red" : 0.98039216 , "green" : 0.9882353 , "blue" : 0.99215686 } } }, ... ] You can check the full Document JSON output in this link .

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Category Digitize Functions OCR, Quality Analysis Release stage General availability Access status Public lock open Type in API OCR PROCESSOR Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported Afrikaans af Latn Albanian sq Latn Arabic ar Arab Armenian hy Armn Belarusian be Cyrl Bangla bn Beng Bengali bn Beng Bulgarian bg Cyrl Catalan ca Latn Chinese zh Hani Croatian hr Latn Czech cs Latn Danish da Latn Dutch nl Latn English en Latn Estonian et Latn Filipino fil Latn Finnish fi Latn French fr Latn German de Latn Greek el Grek Gujarati gu Gujr Hebrew iw Hebr Hindi hi Deva Hungarian hu Latn Icelandic is Latn Indonesian id Latn Italian it Latn Japanese ja Jpan Kannada kn Knda Khmer km Khmr Korean ko Kore Lao lo Laoo Latvian lv Latn Lithuanian lt Latn Macedonian mk Cyrl Malay ms Latn Malayalam ml Mlym Marathi mr Deva Nepali ne Deva Norwegian no Latn Persian fa Arab Polish pl Latn Portuguese (Portugal & Brazil) pt Latn Punjabi pa Guru Romanian ro Latn Russian ru Cyrl Serbian sr Cyrl Slovak sk Latn Slovenian sl Latn Spanish es Latn Swedish sv Latn Tagalog tl Latn Tamil ta Taml Telugu te Telu Thai th Thai Turkish tr Latn Ukrainian uk Cyrl Vietnamese vi Latn Yiddish yi Hebr Processor versions Version ID Release Channel Release Maturity Description pretrained-ocr-v1.2-2022-11-10 Stable GA Frozen model version of v1.0: Model files, configurations, and binaries of a version snapshot frozen in a container image for up to 18 months. pretrained-ocr-v2.0-2023-06-02 Stable GA Production-ready model specialized for document use cases.
- Category Extract Functions OCR, Form Parsing, Entity Extraction Release stage General availability Access status Public lock open Type in API FORM PARSER PROCESSOR Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported Afrikaans af Latn Albanian sq Latn Arabic ar Arab Belarusian be Cyrl Catalan ca Latn Chinese zh Hani Croatian hr Latn Czech cs Latn Danish da Latn Dutch nl Latn English en Latn Estonian et Latn Filipino fil Latn Finnish fi Latn French fr Latn German de Latn Hebrew iw Hebr Hindi hi Deva Hungarian hu Latn Icelandic is Latn Indonesian id Latn Italian it Latn Japanese ja Jpan Korean ko Kore Latvian lv Latn Lithuanian lt Latn Macedonian mk Cyrl Malay ms Latn Marathi mr Deva Nepali ne Deva Norwegian no Latn Persian fa Arab Polish pl Latn Portuguese (Portugal & Brazil) pt Latn Romanian ro Latn Russian ru Cyrl Serbian sr Cyrl Slovak sk Latn Slovenian sl Latn Spanish es Latn Swedish sv Latn Tagalog tl Latn Turkish tr Latn Ukrainian uk Cyrl Vietnamese vi Latn Yiddish yi Hebr Processor versions Version ID Release Channel Release Maturity Additional fields detected Description pretrained-form-parser-v1.0-2020-09-23 Stable GA None Legacy version.
- Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Processor versions Version ID Release Channel Release Maturity Additional fields detected Description pretrained-paystub-v1.0-2021-03-19 Stable GA None pretrained-paystub-v1.1-2021-08-13 Stable GA Show fields net pay net pay ytd employee account number Quality improvement and new fields support; pretrained-paystub-v1.2-2021-12-10 Stable GA None pretrained-paystub-v2.0-2022-05-17 Release Candidate Public Preview Show fields deduction item deduction item/deduction type deduction item/deduction this period deduction item/deduction ytd direct deposit item direct deposit item/direct deposit direct deposit item/employee account number earning item earning item/earning type earning item/earning rate earning item/earning hours earning item/earning this period earning item/earning ytd page number tax item tax item/tax type tax item/tax this period tax item/tax ytd federal additional tax federal allowance federal marital status state additional tax state allowance state marital status This version assumes that the input file contains a single pay slip.
- Category Pretrained Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Type in API EXPENSE PROCESSOR Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported German de Latn English en Latn Spanish es Latn French fr Latn Japanese ja Jpan Dutch nl Latn Processor versions Version ID Release Channel Release Maturity Additional fields detected Additional languages supported Description pretrained-expense-v1.1-2021-04-09 Stable GA None None Fine-tuned version of the v1.0 processor.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Category Digitize Functions OCR, Quality Analysis Release stage General availability Access status Public lock open Type in API OCR PROCESSOR Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported Afrikaans af Latn Albanian sq Latn Arabic ar Arab Armenian hy Armn Belarusian be Cyrl Bangla bn Beng Bengali bn Beng Bulgarian bg Cyrl Catalan ca Latn Chinese zh Hani Croatian hr Latn Czech cs Latn Danish da Latn Dutch nl Latn English en Latn Estonian et Latn Filipino fil Latn Finnish fi Latn French fr Latn German de Latn Greek el Grek Gujarati gu Gujr Hebrew iw Hebr Hindi hi Deva Hungarian hu Latn Icelandic is Latn Indonesian id Latn Italian it Latn Japanese ja Jpan Kannada kn Knda Khmer km Khmr Korean ko Kore Lao lo Laoo Latvian lv Latn Lithuanian lt Latn Macedonian mk Cyrl Malay ms Latn Malayalam ml Mlym Marathi mr Deva Nepali ne Deva Norwegian no Latn Persian fa Arab Polish pl Latn Portuguese (Portugal & Brazil) pt Latn Punjabi pa Guru Romanian ro Latn Russian ru Cyrl Serbian sr Cyrl Slovak sk Latn Slovenian sl Latn Spanish es Latn Swedish sv Latn Tagalog tl Latn Tamil ta Taml Telugu te Telu Thai th Thai Turkish tr Latn Ukrainian uk Cyrl Vietnamese vi Latn Yiddish yi Hebr Processor versions Version ID Release Channel Release Maturity Description pretrained-ocr-v1.2-2022-11-10 Stable GA Frozen model version of v1.0: Model files, configurations, and binaries of a version snapshot frozen in a container image for up to 18 months. pretrained-ocr-v2.0-2023-06-02 Stable GA Production-ready model specialized for document use cases.
- Category Extract Functions OCR, Form Parsing, Entity Extraction Release stage General availability Access status Public lock open Type in API FORM PARSER PROCESSOR Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported Afrikaans af Latn Albanian sq Latn Arabic ar Arab Belarusian be Cyrl Catalan ca Latn Chinese zh Hani Croatian hr Latn Czech cs Latn Danish da Latn Dutch nl Latn English en Latn Estonian et Latn Filipino fil Latn Finnish fi Latn French fr Latn German de Latn Hebrew iw Hebr Hindi hi Deva Hungarian hu Latn Icelandic is Latn Indonesian id Latn Italian it Latn Japanese ja Jpan Korean ko Kore Latvian lv Latn Lithuanian lt Latn Macedonian mk Cyrl Malay ms Latn Marathi mr Deva Nepali ne Deva Norwegian no Latn Persian fa Arab Polish pl Latn Portuguese (Portugal & Brazil) pt Latn Romanian ro Latn Russian ru Cyrl Serbian sr Cyrl Slovak sk Latn Slovenian sl Latn Spanish es Latn Swedish sv Latn Tagalog tl Latn Turkish tr Latn Ukrainian uk Cyrl Vietnamese vi Latn Yiddish yi Hebr Processor versions Version ID Release Channel Release Maturity Additional fields detected Description pretrained-form-parser-v1.0-2020-09-23 Stable GA None Legacy version.
- Supported languages Language Name BCP 47 Tag Script Handwriting supported English en Latn Processor versions Version ID Release Channel Release Maturity Additional fields detected Description pretrained-paystub-v1.0-2021-03-19 Stable GA None pretrained-paystub-v1.1-2021-08-13 Stable GA Show fields net pay net pay ytd employee account number Quality improvement and new fields support; pretrained-paystub-v1.2-2021-12-10 Stable GA None pretrained-paystub-v2.0-2022-05-17 Release Candidate Public Preview Show fields deduction item deduction item/deduction type deduction item/deduction this period deduction item/deduction ytd direct deposit item direct deposit item/direct deposit direct deposit item/employee account number earning item earning item/earning type earning item/earning rate earning item/earning hours earning item/earning this period earning item/earning ytd page number tax item tax item/tax type tax item/tax this period tax item/tax ytd federal additional tax federal allowance federal marital status state additional tax state allowance state marital status This version assumes that the input file contains a single pay slip.
- Category Pretrained Functions OCR, Entity Extraction Release stage General availability Access status Public lock open Type in API EXPENSE PROCESSOR Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported German de Latn English en Latn Spanish es Latn French fr Latn Japanese ja Jpan Dutch nl Latn Processor versions Version ID Release Channel Release Maturity Additional fields detected Additional languages supported Description pretrained-expense-v1.1-2021-04-09 Stable GA None None Fine-tuned version of the v1.0 processor.

