---
title: "User guide: Summarization automatic evaluation \_|\_ Agent Assist \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/agent-assist/docs/summarization-autoeval-guide
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/agent-assist/docs/generative-knowledge-assist
source_metadata:
  url: https://docs.cloud.google.com/agent-assist/docs/summarization-autoeval-guide
  title: "User guide: Summarization automatic evaluation \_|\_ Agent Assist \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Agent Assist
Guides
Send feedback
User guide: Summarization automatic evaluation
Stay organized with collections
Save and categorize content based on your preferences.
Summarization automatic evaluation (autoevaluation) assesses the quality of summaries based on three metrics: accuracy, completeness, and adherence. This feature helps you to evaluate the quality of summarization generators, which is crucial when tuning custom section definitions or upgrading software that affect summarization models. For more details about the evaluation metrics, see summarization autoevaluation basics .
Before you begin
Create a summarization generator that generates candidate summaries for your evaluation.
The section definitions in the generator serve as the ground truth for evaluation.
For the final score to reflect generator quality, each section's instructions must match those in the generator.
Create a summarization autoevaluation request
Follow these steps to create a summarization generator.
Navigate to the Agent Assist console and sign in.
Go to console
Select your project.
Click Evaluations > New evaluation .
Enter a unique Display Name and choose a Generator that matches the candidate summary.
Click Next .
Choose an evaluation dataset with one of the following two options:
Random sample of conversations from date range : If you've paid for the Agent Assist summarization feature, specify a Date range and maximum Number of conversations . Evaluations randomly select up to the maximum number of conversations and summaries from your history.
Select a specific dataset : Choose a specific sample of conversations that you curated with Customer Experience Insights .
Choose a summary source from one of the following options:
Generate only missing summaries using the specified generator. You pay the summary generation cost
Generate new summaries for all conversations. You pay the summary generation cost
Don't generate summaries. Instead, use existing summaries found with the dataset. You must pay a different cost.
Click Next .
Click Select folder , choose a Cloud Storage folder in a bucket to store your result, then click Ok . Autoevaluation writes to a CSV file and saves it in your Cloud Storage bucket.
Click Run . This is a long-running operation. Your new evaluation is listed in the table.
Evaluations
Follow these steps to view a list of summarization generators and completed evaluation session runs.
Navigate to the Agent Assist console and sign in.
Go to console
Select your project.
Click Evaluations .
Optional: To switch the creation time order, click keyboard_arrow_down Down in the Create time column heading.
Filter the list
Follow these steps to filter your list to search for a specific evaluation:
Click Filter evaluations .
Choose one of the following options:
Display name
Generator name
Create time
Enter the value of the parameter.
Delete an evaluation
Wait until your generator finishes running an evaluation.
Click delete Delete to clear the evaluation.
View evaluation results
Follow these steps to view detailed evaluation results from the Agent Assist console .
Navigate to the Agent Assist console and sign in.
Go to console
Select your project.
Click Evaluations .
Click any row in the list to view Evaluation details , which includes the following information:
Display name for the generator
Number of conversations
If any Customer Experience Insights datasets, name of the associated Customer Experience Insights dataset
Run time
Cloud Storage output
Overall performance results for an entire dataset
Conversation-level results for each conversation in a dataset
Conversation-level results
Agent Assist displays the conversation-level evaluation results in a table.
From the Evaluation details page, click any row of the Conversation-level results table to view detailed results, a summary, and a transcript of the conversation.
Click a section to view examples of that section from the summary.
Results comparison
Follow these steps to compare results across different evaluations:
Within the Agent Assist console, navigate to Evaluations .
Click an evaluation to view its details. This evaluation provides the basis for comparison and determines which metrics the comparison includes.
Click Compare > Add run to add other evaluations for comparison. You can compare up to five evaluations at one time. Each display name is highlighted in gray.
To remove an evaluation from the comparison, click close Close .
Compare summarization generator versions
You can also use summarization autoevaluation to compare summaries from different versions of a summarization generator. You need a collection of conversation transcripts.
The following is an example of comparing evaluation results based on summarization v4.0 generator and v5.0 generator.
Step 1: Create a new version of your summarization generator
If you don't already use a summarization generator, follow the instructions to create one that uses summarization version 4.0. Then, follow these steps to create a second generator that uses summarization version 5.0:
Navigate to the Agent Assist console > Summarization page.
Click more_vert for your generator > Duplicate generator > the name of the generator copy.
For the Version , choose 5.0 and click Save .
Step 2: Create a dataset
Follow the instructions to create a dataset with up to 100 conversations. You can create a maximum number of 100 conversations for each evaluation.
Step 3: Create summarization evaluations
Follow these steps to create each evaluation.
Navigate to the Agent Assist Console , sign in, and select your project.
Click Evaluations > New evaluation .
Enter a unique Display Name .
Choose your summarization 4.0 Generator .
Click Next .
Select Select a specific dataset .
Select Generate summaries .
Click Next > Select folder .
Choose a Cloud Storage folder in a bucket to store your result, then click Ok . Autoevaluation writes to a CSV file and saves it in your Cloud Storage bucket.
Click Run . This is a long-running operation. Your new evaluation is listed in the table.
Repeat steps 2-10 for your summarization 5.0 generator, and use the same dataset.
Step 4: Compare the evaluation results
Follow the instructions to compare results .
Agent Assist displays the comparison of your two evaluation results. If one generator has higher scores than the other, the higher scores are highlighted in green. If both generators have equal scores, those are also highlighted in green.
Limitation
Summarization autoevaluation doesn't support VPC Service Controls .
Available regions
Summarization autoevaluation is available only in three Agent Assist regions. For a list of regions available for each feature, see the regionalization table .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
