---
title: "Google Cloud Translation v3 API - Class TranslateDocumentRequest (3.10.0)\
  \ \_|\_ .NET client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.Translate.V3/latest/Google.Cloud.Translate.V3.TranslateDocumentRequest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.Translate.V3/latest/Google.Cloud.Translate.V3.TranslateDocumentRequest
source_metadata:
  url: https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.Translate.V3/latest/Google.Cloud.Translate.V3.TranslateDocumentRequest
  title: "Google Cloud Translation v3 API - Class TranslateDocumentRequest (3.10.0)\
    \ \_|\_ .NET client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
.NET
Client libraries
Send feedback
Google Cloud Translation v3 API - Class TranslateDocumentRequest (3.10.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
3.10.0 (latest)
3.9.0
3.8.0
3.7.0
3.6.0
3.5.0
3.4.0
3.3.0
3.2.0
3.1.0
3.0.0
2.4.0
2.3.0
2.2.0
public sealed class TranslateDocumentRequest : IMessage<TranslateDocumentRequest>, IEquatable<TranslateDocumentRequest>, IDeepCloneable<TranslateDocumentRequest>, IBufferMessage, IMessage
Reference documentation and code samples for the Google Cloud Translation v3 API class TranslateDocumentRequest.
A document translation request.
Inheritance
object >
TranslateDocumentRequest
Implements
IMessage TranslateDocumentRequest ,
IEquatable TranslateDocumentRequest ,
IDeepCloneable TranslateDocumentRequest ,
IBufferMessage ,
IMessage
Inherited Members
object.GetHashCode()
object.GetType()
object.ToString()
Namespace
Google.Cloud.Translate.V3
Assembly
Google.Cloud.Translate.V3.dll
Constructors
TranslateDocumentRequest()
public TranslateDocumentRequest()
TranslateDocumentRequest(TranslateDocumentRequest)
public TranslateDocumentRequest(TranslateDocumentRequest other)
Parameter
Name
Description
other
TranslateDocumentRequest
Properties
CustomizedAttribution
public string CustomizedAttribution { get; set; }
Optional. This flag is to support user customized attribution.
If not provided, the default is Machine Translated by Google .
Customized attribution should follow rules in
https://cloud.google.com/translate/attribution#attribution_and_logos
Property Value
Type
Description
string
DocumentInputConfig
public DocumentInputConfig DocumentInputConfig { get; set; }
Required. Input configurations.
Property Value
Type
Description
DocumentInputConfig
DocumentOutputConfig
public DocumentOutputConfig DocumentOutputConfig { get; set; }
Optional. Output configurations.
Defines if the output file should be stored within Cloud Storage as well
as the desired output format. If not provided the translated file will
only be returned through a byte-stream and its output mime type will be
the same as the input file's mime type.
Property Value
Type
Description
DocumentOutputConfig
EnableRotationCorrection
public bool EnableRotationCorrection { get; set; }
Optional. If true, enable auto rotation correction in DVS.
Property Value
Type
Description
bool
EnableShadowRemovalNativePdf
public bool EnableShadowRemovalNativePdf { get; set; }
Optional. If true, use the text removal server to remove the shadow text on
background image for native pdf translation.
Shadow removal feature can only be enabled when
is_translate_native_pdf_only: false && pdf_native_only: false
Property Value
Type
Description
bool
GlossaryConfig
public TranslateTextGlossaryConfig GlossaryConfig { get; set; }
Optional. Glossary to be applied. The glossary must be within the same
region (have the same location-id) as the model, otherwise an
INVALID_ARGUMENT (400) error is returned.
Property Value
Type
Description
TranslateTextGlossaryConfig
IsTranslateNativePdfOnly
public bool IsTranslateNativePdfOnly { get; set; }
Optional. is_translate_native_pdf_only field for external customers.
If true, the page limit of online native pdf translation is 300 and only
native pdf pages will be translated.
Property Value
Type
Description
bool
Labels
public MapField<string, string> Labels { get; }
Optional. The labels with user-defined metadata for the request.
Label keys and values can be no longer than 63 characters (Unicode
codepoints), can only contain lowercase letters, numeric characters,
underscores and dashes. International characters are allowed. Label values
are optional. Label keys must start with a letter.
See https://cloud.google.com/translate/docs/advanced/labels for more
information.
Property Value
Type
Description
MapField string string
Model
public string Model { get; set; }
Optional. The model type requested for this translation.
The format depends on model type:
AutoML Translation models:
projects/{project-number-or-id}/locations/{location-id}/models/{model-id}
General (built-in) models:
projects/{project-number-or-id}/locations/{location-id}/models/general/nmt ,
If not provided, the default Google model (NMT) will be used for
translation.
Property Value
Type
Description
string
Parent
public string Parent { get; set; }
Required. Location to make a regional call.
Format: projects/{project-number-or-id}/locations/{location-id} .
For global calls, use projects/{project-number-or-id}/locations/global or
projects/{project-number-or-id} .
Non-global location is required for requests using AutoML models or custom
glossaries.
Models and glossaries must be within the same region (have the same
location-id), otherwise an INVALID_ARGUMENT (400) error is returned.
Property Value
Type
Description
string
SourceLanguageCode
public string SourceLanguageCode { get; set; }
Optional. The ISO-639 language code of the input document if known, for
example, "en-US" or "sr-Latn". Supported language codes are listed in
Language Support . If
the source language isn't specified, the API attempts to identify the
source language automatically and returns the source language within the
response. Source language must be specified if the request contains a
glossary or a custom model.
Property Value
Type
Description
string
TargetLanguageCode
public string TargetLanguageCode { get; set; }
Required. The ISO-639 language code to use for translation of the input
document, set to one of the language codes listed in Language
Support .
Property Value
Type
Description
string
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
