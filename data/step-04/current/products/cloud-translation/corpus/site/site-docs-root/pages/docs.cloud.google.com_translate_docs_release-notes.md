---
title: "Cloud Translation release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/translate/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/translate/docs
source_metadata:
  url: https://docs.cloud.google.com/translate/docs/release-notes
  title: "Cloud Translation release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Translation
Resources
Send feedback
Cloud Translation release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Cloud Translation. We recommend
that Cloud Translation developers periodically check this list for any
new announcements. Major changes are also announced via the
[google-translate-api](https://groups.google.com/forum/#!forum/google-translate-api) mailing list.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
February 24, 2026
Change
Translation LLM now supports full finetuning with LoRA .
May 16, 2025
Change
The latency and quality of Translation LLM has been improved.
Change
Translation LLM now supports even more languages.
See our documentation for a list of all supported languages.
February 10, 2025
Change
Translation LLM now supports translation between any of the supported source/target languages without English having to be either source or target.
November 04, 2024
Change
Glossary now supports Translation-LLM and Adaptive Translation. In GlossaryConfig settings, change contextual_translation_enabled to True in order to apply LLM enhanced glossary.
Change
The translation LLM now supports Polish, Turkish, Indonesian, Dutch, Vietnamese, Thai and Czech. For the full list of supported languages, see the Translate text page.
August 12, 2024
Change
The translation LLM and adaptive translation now support Arabic, Hindi, and Russian. For the full list of supported languages, see Supported languages .
July 25, 2024
Change
The translation LLM has been enhanced with the following changes:
In addition to plain text, you can send HTML as input for text translations.
When you use the translation LLM for text translations , you can use a glossary with your translation requests.
Change
Adaptive translations with reference sentence pairs support a larger context window, on par with zero-shot translations. For example, when sending a paragraph for translation, Cloud Translation translates the whole paragraph at once instead of translating each sentence one at a time.
May 28, 2024
Change
For adaptive translations , when you use the API, you can include up to five reference sentence pairs in a request instead of specifying a dataset.
March 12, 2024
Change
You can request document translations with multi-regional endpoints .
Feature
For AutoML datasets, you can tag segment pairs when importing them through the Google Cloud console.
February 14, 2024
Feature
Adaptive translation is Generally Available and adds Portuguese support, raises the limit for input and output characters, and decreases latency in the API and console.
December 12, 2023
Feature
Adaptive translation , which leverages Google LLMs to tailor translations, is in Preview
May 19, 2023
Feature
Romanization and transliteration are now in Preview .
April 07, 2023
Announcement
Creating and managing datasets and custom models is now supported by the Cloud Translation API. All future custom model enhancements will be applied to the Cloud Translation API instead of the AutoML API, which will continue to be maintained.
You can upgrade your existing AutoML resources to use the Cloud Translation API and the Cloud Console without any additional costs. To work with upgraded resources, API users must update existing AutoML API calls to use the Cloud Translation API. For more information, see Upgrade AutoML resources .
March 30, 2023
Feature
Added new fields to the document translation methods to handle translation and parsing issues:
Shadow text removal for overlapping text (for native PDFs).
Auto rotate document to the correct orientation (for scanned PDFs).
February 28, 2023
Feature
For document translations, added support for Microsoft DOC, PPT, and XLS files. For more information, see Supported formats .
February 15, 2023
Change
Glossaries are now supported for the recently added 24 languages .
Assamese
Aymara
Bambara
Bhojpuri
Dhivehi
Dogri
Ewe
Guarani
Ilocano
Konkani
Krio
Kurdish(Sorani)
Lingala
Luganda
Maithili
Meiteilon(Manipuri)
Mizo
Oromo
Quechua
Sanskrit
Sepedi(Pedi)
Tigrinya
Tsonga
Twi (Akan)
November 15, 2022
Feature
For online document translations , you can increase the page limit for native PDF documents to 300 pages.
September 27, 2022
Feature
Support for 24 new languages is Generally Available ( GA ). Glossaries aren't supported when translating to or from these languages.
Assamese
Aymara
Bambara
Bhojpuri
Dhivehi
Dogri
Ewe
Guarani
Ilocano
Konkani
Krio
Kurdish(Sorani)
Lingala
Luganda
Maithili
Meiteilon(Manipuri)
Mizo
Oromo
Quechua
Sanskrit
Sepedi(Pedi)
Tigrinya
Tsonga
Twi (Akan)
August 31, 2022
Feature
Cloud Translation - Advanced (v3) support for a multi-regional US endpoint is now Generally Available ( GA ).
August 17, 2022
Feature
For Cloud Translation - Advanced (v3) glossaries, you can now manage glossary entries . This feature is Generally Available ( GA ).
January 28, 2022
Feature
Cloud Translation - Advanced (v3) support for a multi-regional EU endpoint is now Generally Available ( GA ).
November 01, 2021
Feature
Document Translation for Cloud Translation - Advanced (v3) is now Generally Available ( GA ) and includes the following enhancements:
Right to left language support for PDFs
Preserves font size, font color, font style, and hyperlinks for native PDFs only
Batch document translation requests support PDF to DOCX conversions for native PDFs only
August 02, 2021
Change
Removed the Phrase-Based Machine Translation (PBMT) model. For requests that specify the PBMT model, Cloud Translation uses the Neural Machine Translation (NMT) model instead.
July 01, 2021
Feature
Cloud Translation - Advanced (v3) support for a regional EU endpoint is now in Preview . For more information, see Specify a regional endpoint .
April 26, 2021
Feature
Document Translation for Cloud Translation - Advanced (v3) is now available in Preview . Document Translation supports the DOCX, PPTX, XLSX, and PDF file formats. For more information, see Translate documents .
March 23, 2020
Change
The Cloud Translation Advanced API is migrating to a new quota system that eliminates the distinction between default and maximum limits.
This change will roll out gradually, starting on March 30, 2020 and continuing through April 30, 2020 . Since quotas define the usage limits for a project or a user, the change could impact your billing.
November 05, 2019
Feature
Cloud Translation v3, rebranded as Translation API - Advanced , is now generally available. In addition to the features of Cloud Translation API v3beta1, Translation API - Advanced supports:
* User labels
* Audit logging
* Separate quotas for batch translation and for translation using AutoML models
* Client libraries for additional languages PHP, GO, C#, and Ruby
Note: Existing users should pay careful attention to client library versions before updating. Translation API - Basic and Translation API - Advanced client libraries are not backward or forward compatible.
Translation API - Advanced also fixes bugs from the v3beta1 version, notably for the glossary feature.
Change
Translation API - Advanced has a revised pricing structure. Each account receives $10 worth of free usage per month, applied to usage of any of these SKUs:
Neural Translation Model Predictions (D90A-CFB2-7CCD)
Neural Translation Model Predictions In Translation V3 (E205-31DB-F1F4)
Phrase-Based Translation Model Predictions (53BA-5E1D-4314)
This credit replaces the free tier for Text Translation requests using NMT for 0-500k characters on Translation API v3beta1.
April 10, 2019
Feature
Cloud Translation API v3beta1 is now available. This release includes support for AutoML models when translating text. In addition, the release includes the following new features:
custom glossaries for customer-specific terminology,
batch translation for asynchronous translation of .txt, .tsv, and .html files saved in Google Cloud Storage.
v3 API offers monthly free tier , and guarded by new Quotas and Limit . Learn more on how to use new features and client library in v3.
September 10, 2018
Change
The maximum values for Characters per 100 seconds quotas have increased. The new maximum for both Characters per 100 seconds per project and Characters per 100 seconds per project per user is 10,000,000 characters . The default quotas remain unchanged.
The recently updated default Characters per day quota has been adjusted again; it is now 1 billion characters .
See Quotas & Limits .
August 22, 2018
Change
The change to the default Characters per day quota has taken effect. It is now unlimited . See Quotas & Limits .
August 01, 2018
Change
On August 15, the default Characters per day quota will be updated to unlimited . For more information, see Quotas & Limits .
November 01, 2017
Change
The maximum Characters per day quota has been updated to unlimited . For more information, see Quotas & Limits .
October 25, 2017
Change
The Neural Machine Translation (NMT) models for the following languages have been updated for improved translation quality:
English (en) <-> French (fr)
English (en) -> German (de)
English (en) -> Spanish (es)
For a list of all NMT supported languages, see Language Support for the Neural Machine Translation Model .
September 26, 2017
Change
Quotas for usage of the Translation API have been updated. The quota for characters requested per 100 seconds, per project has been updated to a maximum of 1,000,000. While the quotas are updated, you may see a brief period where the maximum is not limited to the per project maximum. The quota for characters requested per 100 seconds, per user remains at 100,000 characters per user, per project. For more information, see Quotas & Limits .
September 15, 2017
Change
The Translation API has added support for 70 new languages in the Neural Machine Translation (NMT) model. For a list of all NMT supported languages, see Language Support for the Neural Machine Translation Model .
June 19, 2017
Change
The Translation API no longer supports conditional HTTPS requests. If-Match , If-None-Match , or ETag headers in requests to the Translation API are ignored. The Translation API returns a status code of 200 for successful requests, but does not return a status code of 304 for conditional HTTPS requests. Conditional HTTPS requests are billed as a normal request to the Translation API.
Change
The https://www.googleapis.com/language/translate/v2 endpoint now supports the Neural Machine Translation (NMT) model. However, we recommend that you use the https://translation.googleapis.com/language/translate/v2 endpoint for requests to the Translation API.
April 06, 2017
Change
The Cloud Translation API is no longer taking requests for access to the Premium Edition (Beta). Instead, the premium features of the Cloud Translation API have been made generally available in the Standard Edition.
Feature
You now have access to the robust translation features available using the Neural Machine Translation (NMT) model . There is no difference in pricing between the standard, Phrase-Based Machine Translation (PBMT) model, and the NMT model.
By default, when you make a translation request to the Cloud Translation API, your text is translated using the NMT model. If the NMT model is not supported for the requested language translation pair, or if you explicitly request it, the PBMT model is used.
In order for your request to be translated using the NMT model, you must send your request to the current Translation API endpoint: https://translation.googleapis.com/language/translate/v2 . The https://www.googleapis.com/language/translate/v2 endpoint does not support the NMT model.
NMT models are computationally intensive and may take more time to translate your query as compared to the same query translated using the PBMT model. If your application is latency sensitive, we recommend that you try both models to determine which best fits your needs for response time.
Feature
The model query parameter has been added to the translate method. You can use the model parameter to explicitly specify the translation model for your request. Specify base to use the PBMT model, and nmt to use the NMT model.
If you do not specify a model parameter for your request, then nmt is used.
If you specify the nmt model, and the requested language translation pair is not supported for the NMT model, then the request is translated using the base model.
November 15, 2016
Feature
Changed API endpoint from www.googleapis.com to translation.googleapis.com .
Deprecated
API endpoint of www.googleapis.com will continue to work, but migrate code to translation.googleapis.com to take advantage of the latest features.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
