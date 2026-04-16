---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:31.974Z"
product_name: "Document AI"
product_slug: "document-ai"
feature_name: "Document OCR legacy layout detection"
feature_slug: "document-ocr-legacy-layout-detection"
latest_feature_date: "2023-03-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/document-ai/docs/process-documents-ocr"
  - "https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr"
  - "https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk"
  - "https://docs.cloud.google.com/document-ai/docs/fields"
keywords:
  - "document"
  - "ocr"
  - "legacy"
  - "layout"
  - "detection"
  - "supports"
  - "heuristics"
  - "based"
---

# Document OCR legacy layout detection

Product: Document AI
Coverage: MEDIUM

## Step 02 Summary

Document OCR supports a heuristics-based layout detection algorithm as an alternative to the ML-based layout detector.

## Extended Definition

Document OCR supports a heuristics-based layout detection algorithm as an alternative to the ML-based layout detector.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- [https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr](https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr)
- [https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk](https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk)
- [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)

## Supporting Pages

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- Source ID: `site-docs-root`
- Final score: 285
- Re-rank relevance: N/A

Evidence snippets:
- Input Disable by setting ProcessOptions.ocrConfig.disableCharacterBoxesDetection to true in the processing request. { "rawDocument" : { "mimeType" : " MIME TYPE " , "content" : " IMAGE CONTENT " }, "processOptions" : { "ocrConfig" : { "disableCharacterBoxesDetection" : true } } } Legacy layout If you require a heuristics layout-detection algorithm, you can enable legacy layout, which serves as an alternative to the current ML-based, layout-detection algorithm.
- Current valid values are: legacy layout : a heuristics layout detection algorithm, which serves as an alternative to the current ML-based layout detection algorithm.
- Input Enable by setting ProcessOptions.ocrConfig.premiumFeatures.enableSelectionMarkDetection to true in the processing request. { "rawDocument" : { "mimeType" : " MIME TYPE " , "content" : " IMAGE CONTENT " }, "processOptions" : { "ocrConfig" : { "premiumFeatures" : { "enableSelectionMarkDetection" : true } } } } Output The checkbox output appears in Document.pages[].visualElements[] with "type": "unfilled checkbox" or "type": "filled checkbox" . "visualElements" : [ { "layout" : { "confidence" : 0.89363575 , "boundingPoly" : { "vertices" : [ { "x" : 11 , "y" : 24 }, { "x" : 37 , "y" : 24 }, { "x" : 37 , "y" : 56 }, { "x" : 11 , "y" : 56 } ], "normalizedVertices" : [ { "x" : 0.017488075 , "y" : 0.38709676 }, { "x" : 0.05882353 , "y" : 0.38709676 }, { "x" : 0.05882353 , "y" : 0.9032258 }, { "x" : 0.017488075 , "y" : 0.9032258 } ] } }, "type" : "unfilled checkbox" }, { "layout" : { "confidence" : 0.9148201 , "boundingPoly" : ... }, "type" : "filled checkbox" } ], You can check the full Document JSON output in this link .
- Supported layout detection and extraction attributes: Printed text Handwriting Paragraph Block Line Word Symbol-level Page number Default Default Default Default Default Default Configurable Default Configurable Enterprise Document OCR features include the following: Extract embedded or native text from digital PDFs: This feature extracts text and symbols exactly as they appear in the source documents, even for rotated texts, extreme font sizes or styles, and partially hidden text.

### Enterprise Document OCR \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr](https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr)
- Source ID: `site-docs-root-2`
- Final score: 285
- Re-rank relevance: N/A

Evidence snippets:
- Input Disable by setting ProcessOptions.ocrConfig.disableCharacterBoxesDetection to true in the processing request. { "rawDocument" : { "mimeType" : " MIME TYPE " , "content" : " IMAGE CONTENT " }, "processOptions" : { "ocrConfig" : { "disableCharacterBoxesDetection" : true } } } Legacy layout If you require a heuristics layout-detection algorithm, you can enable legacy layout, which serves as an alternative to the current ML-based, layout-detection algorithm.
- Current valid values are: legacy layout : a heuristics layout detection algorithm, which serves as an alternative to the current ML-based layout detection algorithm.
- Input Enable by setting ProcessOptions.ocrConfig.premiumFeatures.enableSelectionMarkDetection to true in the processing request. { "rawDocument" : { "mimeType" : " MIME TYPE " , "content" : " IMAGE CONTENT " }, "processOptions" : { "ocrConfig" : { "premiumFeatures" : { "enableSelectionMarkDetection" : true } } } } Output The checkbox output appears in Document.pages[].visualElements[] with "type": "unfilled checkbox" or "type": "filled checkbox" . "visualElements" : [ { "layout" : { "confidence" : 0.89363575 , "boundingPoly" : { "vertices" : [ { "x" : 11 , "y" : 24 }, { "x" : 37 , "y" : 24 }, { "x" : 37 , "y" : 56 }, { "x" : 11 , "y" : 56 } ], "normalizedVertices" : [ { "x" : 0.017488075 , "y" : 0.38709676 }, { "x" : 0.05882353 , "y" : 0.38709676 }, { "x" : 0.05882353 , "y" : 0.9032258 }, { "x" : 0.017488075 , "y" : 0.9032258 } ] } }, "type" : "unfilled checkbox" }, { "layout" : { "confidence" : 0.9148201 , "boundingPoly" : ... }, "type" : "filled checkbox" } ], You can check the full Document JSON output in this link .
- Supported layout detection and extraction attributes: Printed text Handwriting Paragraph Block Line Word Symbol-level Page number Default Default Default Default Default Default Configurable Default Configurable Enterprise Document OCR features include the following: Extract embedded or native text from digital PDFs: This feature extracts text and symbols exactly as they appear in the source documents, even for rotated texts, extreme font sizes or styles, and partially hidden text.

### "Process documents with Gemini layout parser \_|\_ Document AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk](https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk)
- Source ID: `site-docs-root-2`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Reduced hallucinations Unlike pure LLM-based parsers that try to read text that isn't there, Gemini layout parser's foundation in advanced OCR grounds it in the document's actual content.
- Release Candidate January 13, 2026 Key capabilities Going forward in this documentation, Gemini layout parser refers to Gemini based pretrained layout parser processor versions, such as pretrained-layout-parser-v1.5-2025-08-25 and pretrained-layout-parser-v1.5-pro-2025-08-25 .
- Primary use cases Document OCR: It can parse text and layout elements like heading, header, footer, table structure and figures from PDF documents.
- Limitations The following limitations apply: Online processing: Input file size maximum of 20 MB for all file types Maximum of 15 pages per PDF file Batch processing: Maximum single file size of 1 GB for PDF files Maximum of 500 pages per PDF file Layout detection per file type Note: Support for the PDF, HTML, DOCX, PPTX, XLSX, and XLSM file types is GA and is subject to charges.

### Processor list \_|\_ Document AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/document-ai/docs/fields](https://docs.cloud.google.com/document-ai/docs/fields)
- Source ID: `site-docs-reference`
- Final score: 205
- Re-rank relevance: N/A

Evidence snippets:
- Category Extract Functions Layout Parsing, Document Chunking Release stage General availability Access status Public lock open Type in API LAYOUT PARSER PROCESSOR Notes This parser supports PDF, HTML, DOCX, PPTX, and XLSX/XLSM files.
- Category Digitize Functions OCR, Quality Analysis Release stage General availability Access status Public lock open Type in API OCR PROCESSOR Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported Afrikaans af Latn Albanian sq Latn Arabic ar Arab Armenian hy Armn Belarusian be Cyrl Bangla bn Beng Bengali bn Beng Bulgarian bg Cyrl Catalan ca Latn Chinese zh Hani Croatian hr Latn Czech cs Latn Danish da Latn Dutch nl Latn English en Latn Estonian et Latn Filipino fil Latn Finnish fi Latn French fr Latn German de Latn Greek el Grek Gujarati gu Gujr Hebrew iw Hebr Hindi hi Deva Hungarian hu Latn Icelandic is Latn Indonesian id Latn Italian it Latn Japanese ja Jpan Kannada kn Knda Khmer km Khmr Korean ko Kore Lao lo Laoo Latvian lv Latn Lithuanian lt Latn Macedonian mk Cyrl Malay ms Latn Malayalam ml Mlym Marathi mr Deva Nepali ne Deva Norwegian no Latn Persian fa Arab Polish pl Latn Portuguese (Portugal & Brazil) pt Latn Punjabi pa Guru Romanian ro Latn Russian ru Cyrl Serbian sr Cyrl Slovak sk Latn Slovenian sl Latn Spanish es Latn Swedish sv Latn Tagalog tl Latn Tamil ta Taml Telugu te Telu Thai th Thai Turkish tr Latn Ukrainian uk Cyrl Vietnamese vi Latn Yiddish yi Hebr Processor versions Version ID Release Channel Release Maturity Description pretrained-ocr-v1.2-2022-11-10 Stable GA Frozen model version of v1.0: Model files, configurations, and binaries of a version snapshot frozen in a container image for up to 18 months. pretrained-ocr-v2.0-2023-06-02 Stable GA Production-ready model specialized for document use cases.
- Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported Afrikaans af Latn Albanian sq Latn Arabic ar Arab Armenian hy Armn Belarusian be Cyrl Bangla bn Beng Bengali bn Beng Bulgarian bg Cyrl Catalan ca Latn Chinese zh Hani Croatian hr Latn Czech cs Latn Danish da Latn Dutch nl Latn English en Latn Estonian et Latn Filipino fil Latn Finnish fi Latn French fr Latn German de Latn Greek el Grek Gujarati gu Gujr Hebrew iw Hebr Hindi hi Deva Hungarian hu Latn Icelandic is Latn Indonesian id Latn Italian it Latn Japanese ja Jpan Kannada kn Knda Khmer km Khmr Korean ko Kore Lao lo Laoo Latvian lv Latn Lithuanian lt Latn Macedonian mk Cyrl Malay ms Latn Malayalam ml Mlym Marathi mr Deva Nepali ne Deva Norwegian no Latn Persian fa Arab Polish pl Latn Portuguese (Portugal & Brazil) pt Latn Punjabi pa Guru Romanian ro Latn Russian ru Cyrl Serbian sr Cyrl Slovak sk Latn Slovenian sl Latn Spanish es Latn Swedish sv Latn Tagalog tl Latn Tamil ta Taml Telugu te Telu Thai th Thai Turkish tr Latn Ukrainian uk Cyrl Vietnamese vi Latn Yiddish yi Hebr Processor versions Version ID Release Channel Release Maturity Description pretrained-layout-parser-v1.0-2024-06-03 Stable GA General availability version for document layout analysis.
- Category Extract Functions OCR, Form Parsing, Entity Extraction Release stage General availability Access status Public lock open Type in API FORM PARSER PROCESSOR Supported languages Full list of languages Language Name BCP 47 Tag Script Handwriting supported Afrikaans af Latn Albanian sq Latn Arabic ar Arab Belarusian be Cyrl Catalan ca Latn Chinese zh Hani Croatian hr Latn Czech cs Latn Danish da Latn Dutch nl Latn English en Latn Estonian et Latn Filipino fil Latn Finnish fi Latn French fr Latn German de Latn Hebrew iw Hebr Hindi hi Deva Hungarian hu Latn Icelandic is Latn Indonesian id Latn Italian it Latn Japanese ja Jpan Korean ko Kore Latvian lv Latn Lithuanian lt Latn Macedonian mk Cyrl Malay ms Latn Marathi mr Deva Nepali ne Deva Norwegian no Latn Persian fa Arab Polish pl Latn Portuguese (Portugal & Brazil) pt Latn Romanian ro Latn Russian ru Cyrl Serbian sr Cyrl Slovak sk Latn Slovenian sl Latn Spanish es Latn Swedish sv Latn Tagalog tl Latn Turkish tr Latn Ukrainian uk Cyrl Vietnamese vi Latn Yiddish yi Hebr Processor versions Version ID Release Channel Release Maturity Additional fields detected Description pretrained-form-parser-v1.0-2020-09-23 Stable GA None Legacy version.

