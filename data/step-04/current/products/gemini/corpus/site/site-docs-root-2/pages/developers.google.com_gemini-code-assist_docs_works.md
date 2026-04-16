---
title: "How Gemini Code Assist works \_|\_ Google for Developers"
url: https://developers.google.com/gemini-code-assist/docs/works
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/gemini-code-assist/docs/overview
source_metadata:
  url: https://developers.google.com/gemini-code-assist/docs/works
  title: "How Gemini Code Assist works \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Gemini Code Assist
Guides
How Gemini Code Assist works
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Gemini Code Assist LLMs are trained on diverse datasets, including public code, Google Cloud data, and other technical information, to provide useful responses.
Gemini Code Assist Standard and Enterprise editions do not use your prompts or generated responses for training or fine-tuning models, and data is used strictly for serving responses.
Gemini Code Assist is designed to generate original content and cites sources, including web pages and open source code, when directly quoting at length.
Gemini Code Assist gathers contextual information from open and relevant local project files to improve code generation in IDEs and lists the files used as reference.
Gemini Code Assist Enterprise offers code customization based on your organization's private codebase.
The Gemini large language models (LLMs) that are used by
Gemini Code Assist are trained on datasets of publicly available code,
Google Cloud-specific material, and other relevant technical information
in addition to the datasets used to train the Gemini
foundation models .
Models are trained so that Gemini Code Assist responses are as useful
to Gemini Code Assist users as possible.
Gemini Code Assist Standard and Enterprise don't use your prompts
or generated responses for training or fine-tuning our underlying models.
Gemini Code Assist Standard and Enterprise editions use your
data strictly for serving a response to the request, and unless instructed by
you, isn't stored.
How and when Gemini Code Assist cites sources
Gemini Code Assist LLMs, like some other standalone LLM
experiences, are intended to generate original content and not replicate
existing content at length. We've designed our systems to limit the chances of
this occurring, and we continue to improve how these systems function.
If Gemini Code Assist directly quotes at length from a web page,
it cites that page. For answers with URLs, Gemini Code Assist
lets users see and, in some cases, click to navigate directly to the source
page.
When generating code or offering code completion,
Gemini Code Assist provides citation information when it directly
quotes at length from another source, such as existing open source code. In the
case of citations to code repositories, the citation might also reference an
applicable open source license.
To allow for better code generation in IDEs,
Gemini Code Assist gathers contextual information from the file
that you're actively using in your IDE as well as other open and relevant local
files in your project.
When working with Gemini Code Assist in your IDE,
Gemini lists your project files (the context sources) that were
used as reference to generate responses to your prompts. Context sources are
shown every time you use Gemini chat.
You can prevent Gemini Code Assist from suggesting code that
matches cited sources by adjusting settings in
VS Code .
Code customization in
Gemini Code Assist Enterprise lets you get code suggestions based
on your organization's private codebase directly from
Gemini Code Assist. To learn more about code customization, and
how we provide security when accessing and storing your private code, see the
Gemini Code Assist overview .
To configure and use code customization, see
Configure and use Gemini Code Assist code customization .
For more information about Gemini Code Assist Standard and
Enterprise security controls, see
Security, privacy, and compliance for Gemini Code Assist Standard and Enterprise .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-10 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-10 UTC."],[],[]]
