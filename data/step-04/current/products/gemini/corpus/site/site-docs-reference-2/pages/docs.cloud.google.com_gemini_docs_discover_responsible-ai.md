---
title: "Gemini for Google Cloud and responsible AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/docs/discover/responsible-ai
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/gemini/docs/discover/responsible-ai
  title: "Gemini for Google Cloud and responsible AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Gemini for Google Cloud
Guides
Send feedback
Gemini for Google Cloud and responsible AI
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how Gemini for Google Cloud is designed in view of the
capabilities, limitations, and risks that are associated with generative AI.
Capabilities and risks of large language models
Large language models (LLMs) can perform many useful tasks such as the
following:
Translate language.
Summarize text.
Generate code and creative writing.
Power chatbots and virtual assistants.
Complement search engines and recommendation systems.
At the same time, the evolving technical capabilities of LLMs create the
potential for misapplication, misuse, and unintended or unforeseen consequences.
LLMs can generate output that you don't expect, including text that's offensive,
insensitive, or factually incorrect. Because LLMs are incredibly versatile, it
can be difficult to predict exactly what kinds of unintended or unforeseen
outputs they might produce.
Given these risks and complexities, Gemini for Google Cloud is designed with
Google's AI principles in
mind. However, it's important for users to understand some of the limitations of
Gemini for Google Cloud to work safely and responsibly.
Gemini for Google Cloud limitations
Some of the limitations that you might encounter using Gemini
for Google Cloud include (but aren't limited to) the following:
Edge cases. Edge cases refer to unusual, rare, or exceptional situations
that aren't well represented in the training data. These cases can lead to
limitations in the output of Gemini models, such as model
overconfidence, misinterpretation of context, or inappropriate outputs.
Model hallucinations, grounding, and factuality. Gemini
models might lack grounding and factuality in real-world knowledge, physical
properties, or accurate understanding. This limitation can lead to model
hallucinations, where Gemini for Google Cloud might
generate outputs that are plausible-sounding but factually incorrect,
irrelevant, inappropriate, or nonsensical. Hallucinations can also include
fabricating links to web pages that don't exist and have never existed. For
more information, see
Write better prompts for Gemini for Google Cloud .
Data quality and tuning. The quality, accuracy, and bias of the prompt
data that's entered into Gemini for Google Cloud
products can have a significant impact on its performance. If users enter
inaccurate or incorrect prompts, Gemini for Google Cloud
might return suboptimal or false responses.
Bias amplification. Language models can inadvertently amplify existing
biases in their training data, leading to outputs that might further reinforce
societal prejudices and unequal treatment of certain groups.
Language quality. While Gemini for Google Cloud
yields impressive multilingual capabilities on the benchmarks that we
evaluated against, the majority of our benchmarks (including all of the
fairness evaluations) are in American English.
Language models might provide inconsistent service quality to different users.
For example, text generation might not be as effective for some dialects or
language varieties because they are underrepresented in the training data.
Performance might be worse for non-English languages or English language
varieties with less representation.
Fairness benchmarks and subgroups. Google Research's fairness analyses of
Gemini models don't provide an exhaustive account of the various
potential risks. For example, we focus on biases along gender, race,
ethnicity, and religion axes, but perform the analysis only on the American
English language data and model outputs.
Limited domain expertise. Gemini models have been trained
on Google Cloud technology, but it might lack the depth of knowledge
that's required to provide accurate and detailed responses on highly
specialized or technical topics, leading to superficial or incorrect
information.
When you use the Gemini pane in the Google Cloud console,
Gemini is not context aware of your specific environment, so
it cannot answer questions such as "When was the last time I created a VM?"
In some cases, Gemini for Google Cloud sends a specific
segment of your context to the model to receive a context-specific
response—for example, when you click the Troubleshooting suggestions
button in the Error Reporting service page.
Gemini safety and toxicity filtering
Gemini for Google Cloud prompts and responses are checked
against a comprehensive list of safety attributes as applicable for each use
case. These safety attributes aim to filter out content that violates our
Acceptable Use Policy . If an output is considered
harmful, the response will be blocked.
What's next
Learn more about
how Gemini cites sources when helps you generate code .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
