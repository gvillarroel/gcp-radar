---
title: "Overview of the Cloud Translation API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/translate/docs/api-overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/translate/docs/intro-to-v3
source_metadata:
  url: https://docs.cloud.google.com/translate/docs/api-overview
  title: "Overview of the Cloud Translation API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Translation
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Overview of the Cloud Translation API
Cloud Translation API can translate text for more than 100 language pairs. If
you don't know the language of your source text, Cloud Translation API can
detect it for you. For a list of all of the supported languages,
see Supported languages .
As an enterprise organization, you can include translated text in existing
internal workflows. For example, you might have a global support team that
receives customer cases in many different languages. You can add
Cloud Translation API into your workflow to translate those customer cases into
the language spoken by your support team members. By using Cloud Translation API,
you improve the overall efficiency of your support team because they don't
need to manually translate text themselves or
rely on others.
Cloud Translation API scales seamlessly and allows unlimited character translations
per day. However, there are restrictions on content size for each request and
request rates. Additionally, you can use quota limits to manage your budget. For
more information, see Quotas and limits .
Note: No customer data or translations are used to improve Cloud Translation API
models. For more information about data usage, refer to the
Data usage FAQ .
Cloud Translation API editions and models
The Cloud Translation API comes in two different editions, namely a
Basic edition and an Advanced edition . For a list
of the different features supported by each, see the
edition comparison .
It gives you a choice of models ,
so that you can pick one that's suited to your particular application.
Cloud Translation - Basic API
The Basic edition is accessed through
v2 client libraries ,
and requires minimal configuration, accepting API keys for authenticatation
as well as service accounts. It only gives access to the unmodified Google
Neural Machine Translation (NMT) model .
It's a good fit for applications that need to translate casual user-generated
content such as chat, social media, or comments.
If you're planning a new project, you may want to choose the Advanced edition
instead of the Basic edition, to take advantage of better security, more
features, and the new service improvements that the Advanced edition will
continue to make going forward.
Cloud Translation - Advanced API
The Advanced edition is accessed through
v3 client libraries
and requires service account authentication that's integrated with
IAM roles. It offers a choice of models ,
including the latest Translation LLM (TLLM) model as well as the
NMT model with and without customization. It also offers
features such as glossaries, batch translation, document translation, and more:
Glossaries : A glossary is a custom dictionary that you create
to translate domain-specific terms correctly and consistently.
Batch requests : Batch requests let you make asynchronous requests
that translate large amounts of text.
Document Translation : This feature lets you translate
documents such as PDF files while preserving their original format and layout.
IAM roles : IAM roles let you secure
your translation requests through Identity and Access Management. You can create service
accounts and grant them permissions using IAM roles.
Note that Cloud Translation - Advanced API does not support API keys.
Labels : You can add user-defined labels (key-value pairs) to your
translation requests to track usage and enable granular billing reports.
Regional endpoint : Using a regional endpoint, you can exercise
control over where the resources for your project are stored and processed.
Advanced API features
Using Cloud Translation - Advanced API rather than Cloud Translation - Basic API gives you
access to the following features that can make your translation solution more
robust and better suited to your specific use case:
Model selection and customization
Cloud Translation - Advanced API model selection
lets you dynamically select different models, including models that you
customize to suit your particular application.
Glossaries
A glossary is a custom dictionary that Cloud Translation - Advanced API uses to
correctly and consistently translate domain-specific terms, named entities,
and other kinds of terms that are specific to you. For example, you can use
a glossary to specify a specific translation for terms such as "Google Summer
of Code," "Gmail confidential mode," or "placement performance report."
You can also use glossaries to prevent certain words, such as borrowed words
or product names, from being translated. For information about how to use
glossaries, refer to
Creating and using glossaries .
Batch requests
Batch translation requests are
asynchronous requests that translate input from Cloud Storage buckets.
Cloud Translation - Advanced API performs the batch translation as a long-running
operation and writes the output to a Cloud Storage bucket that you specify.
Inline requests for batch translation are not supported.
Document Translation
Document Translation lets you directly translate existing documents,
such as PDF and DOCX files, to a target language. Document Translation
preserves the original format so that translated documents have the same layout
and format as the original documents. For example, Document Translation
keeps paragraph breaks and headings so that your translated content is divided
in the same way as in the original document.
Cloud Translation - Advanced API features, such as glossaries and
customized NMT models also work with
Document Translation.
For example, if you already have a customized NMT model
that you use for text translations, you can use that same model for
Document Translation. For
more information about supported file types and how to translate documents,
refer to Translate documents .
IAM roles
Cloud Translation - Advanced API integrates with IAM to provide
additional security for your translation requests, enable fine-grained access
control, and support integration with custom NMT models.
You must
add users and service accounts
to one of the following
roles to grant those accounts access to Cloud Translation - Advanced API. For
information about creating service accounts, refer to
Creating and managing service accounts
in the IAM documentation.
Role
Role ID
Description
Cloud Translation API Viewer
roles/cloudtranslate.viewer
Can access get and list operations.
Cloud Translation API User
roles/cloudtranslate.user
Includes the permissions of roles/cloudtranslate.viewer .
Can translate text using Google's NMT model and
custom NMT models in online and asynchronous
(batch) mode. Can use Document Translation. Can detect
language. Can list supported languages for NMT
models. Can use glossaries for translation.
Cloud Translation API Editor
roles/cloudtranslate.editor
Includes the permissions of roles/cloudtranslate.user , and
can create and delete glossaries, and cancel or delete
long-running operations.
Cloud Translation API Admin
roles/cloudtranslate.admin
Includes the permissions of roles/cloudtranslate.editor ,
and can set IAM policies and grant IAM
permissions for the Cloud Translation API. Has all IAM permissions
for the Cloud Translation API.
To see a list of permissions that are contained in each role, refer to
Understanding roles .
These pre-configured roles address many typical use cases. However, you might
need a role that includes a custom set of permissions. For example, you might
want to create a role that allows a user to create a glossary in a project,
without letting them delete or update existing glossaries in the project.
In those cases, you can create an
IAM custom role
that meets your needs.
For information on managing IAM roles, refer to
Granting, changing, and revoking access to resources
and Granting roles to service accounts .
Labels
Cloud Translation - Advanced API supports adding user-defined labels (key-value pairs)
to TranslateText , BatchTranslateText and DetectLanguage requests.
Information about a request's usage is forwarded to the billing system where
you can break down your billing charges by filtering on your labels.
For more information about user-defined labels, refer to
Reporting usage with labels (Advanced) .
Regional endpoint
By default, Cloud Translation - Advanced API stores and processes resources in a
global location, which means there is no guarantee that resources remain within
a particular location. Instead of using the default global endpoint, you can
use a regional endpoint to keep resources within a particular location, such as
the European Union. For more information, refer to
Specify a regional endpoint .
Edition comparison
The following table shows which features are available in each edition.
Feature
Basic
Advanced
Translate with the NMT model
Translate with the Translation LLM
Translate with Adaptive Translation models
Translate with custom models
Translate multiple strings in a single request
Batch translations with Cloud Storage
Translate documents
Glossary support (control terminology)
Train custom models
Language Detection
Integrated REST API
Integrated gRPC API
Service Account
API Key
Audit logging
Supports HTML
Supports 100+ Languages
Romanization support
Transliteration support
Adaptive Translation
Multi-regional endpoint support
VPC Service Controls support
Refer to Cloud Translation - Advanced API features for more details on
Cloud Translation - Advanced API.
Pricing
Cloud Translation API charges you on a monthly basis based on the number of
characters that you send. For more information, see
Pricing .
Resources and further reading
To start using the API, get set up and then try
the quickstart guide .
Compare supported models
Customize the NMT model
Customize the Translation LLM
Supported languages
Supported formats
Perform adaptive translation
Migrate to Translation Advanced
For answers to general questions about Cloud Translation API, refer to the
General FAQs page.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
