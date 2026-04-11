---
title: "Evaluate translation models \_|\_ Cloud Translation \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/translate/docs/advanced/translation-model-evaluation
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/translate/docs/intro-to-v3
source_metadata:
  url: https://docs.cloud.google.com/translate/docs/advanced/translation-model-evaluation
  title: "Evaluate translation models \_|\_ Cloud Translation \_|\_ Google Cloud Documentation"
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
Evaluate translation models
The best way to evaluate a translation model is to use the Gen AI evaluation service.
However, for custom NMT models, you can also generate a BLEU score directly on Google Cloud console that can help in
evaluating the mode, with some limitations.
Use Gen AI evaluation service
The Gen AI evaluation service
offers the following translation task evaluation metrics:
MetricX
COMET
BLEU
MetricX and COMET are pointwise model-based metrics that have been trained for
translation tasks. You can evaluate the quality and accuracy of translation
model results for your content, whether they are outputs of NMT,
TranslationLLM, or Gemini models.
You can also use Gemini as a judge model to evaluate your model for
fluency, coherence, verbosity, and text quality in combination with MetricX,
COMET, or BLEU.
MetricX is an error-based
metric developed by Google that predicts a floating point score between
0 and 25 to represent the quality of a translation. MetricX is available
both as a referenced-based and as a reference-free (QE) method. When you
use this metric, a lower score is better because it means there are fewer
errors.
COMET employs a
reference-based regression approach that provides scores ranging from 0
to 1, where 1 signifies a perfect translation.
BLEU (Bilingual Evaluation Understudy) is a
computation-based metric .
A BLEU score indicates how similar candidate text is to reference text.
The closer a BLEU score value is to one, the closer the translation
is to the reference text.
BLEU scores are best for comparisons in one language or body of data.
For example, an English to German BLEU score of 50 is not comparable to a
Japanese to English BLEU score of 50. Many translation experts use
model-based metric approaches, which have higher correlation with human
ratings and are more granular in identifying error scenarios.
To learn how to run evaluations for translation models using
Gen AI evaluation service, see
Evaluate a translation model .
Evaluate a custom NMT model on Google Cloud console
After you have trained a new custom NMT model,
you can use your TEST set to
evaluate the model's quality and accuracy directly on the Google Cloud console.
The model quality will be expressed using a BLEU
score, which indicates how similar the candidate text is to the
reference text. If the score is low, consider adding more (and more diverse)
training segment pairs. After you adjust your dataset, train a new model
by using the improved dataset.
Evaluating on the Google Cloud console only supports BLEU scores.
To evaluate your translation model using model-based metrics, you have to
use the Gen AI evaluation service .
Get the model's BLEU score
Go to the Cloud Translation console.
Go to the
Translation page
From the navigation menu, click Models to view a list of your models.
Click the model to evaluate.
Click the Train tab to see the model's evaluation metrics such as its
BLEU score.
Test model predictions
By using the Google Cloud console, you compare translation results for your
custom model against the default NMT model.
Go to the Cloud Translation console.
Go to the
Translation page
From the navigation menu, click Models to view a list of your models.
Click the model to test.
Click the Predict tab.
Add input text in the source language field.
Click Translate .
The translation results for the custom model
and general NMT model are shown.
Evaluate and compare models with a new test set
From the Google Cloud console, you can reevaluate existing models by
using a new set of test data. In a single evaluation, you can include up to five
different models and then compare their results. Upload your test data to
Cloud Storage as a tab-separated values (TSV) or as a
Translation Memory eXchange
(TMX) file. Your model is evaluated against the test
set and an evaluation score is produced.
You can optionally save the results for each model as a TSV file in a
Cloud Storage bucket, where each row has the following format:
Source segment tab Model candidate translation tab Reference translation
Go to the Cloud Translation console.
Go to the
Translation page
From the navigation menu, click Models to view a list of your models.
Click the model to evaluate.
Click the Evaluate tab.
In the Evaluate tab, click New Evaluation .
Select the models that you want to evaluate and compare, and then click
Next .
The current model must be selected, and Google NMT is selected by default,
which you can deselect.
Specify a name for the Test set name to help you distinguish it from
other evaluations, and then select your new test set from
Cloud Storage.
Click Next .
To export predictions, specify a Cloud Storage destination folder.
Click Start evaluation .
An evaluation score in a table format is presented in the
console after the evaluation is done. You can run only one evaluation at a
time. If you specified a folder to store prediction results,
TSV files will be written to that location. These files will be named
with the associated model ID with the test set name appended.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
