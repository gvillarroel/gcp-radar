---
title: "Custom extractor mechanisms \_|\_ Document AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/document-ai/docs/ce-mechanisms
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/document-ai/docs
source_metadata:
  url: https://docs.cloud.google.com/document-ai/docs/ce-mechanisms
  title: "Custom extractor mechanisms \_|\_ Document AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Document AI
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Custom extractor mechanisms
You can create custom extractors that are specifically suited to your documents,
and trained and evaluated with your data. This processor identifies and extracts
entities from your documents. You can then use this trained processor on
additional documents.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Document AI, Cloud Storage APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Document AI, Cloud Storage APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Required roles
To get the permissions that
you need to create a custom classifier,
ask your administrator to grant you the
following IAM roles on your project:
Document AI Administrator ( roles/documentai.admin )
Storage Admin ( roles/storage.admin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Note: If you want to access input files stored in a different project, then you
need to grant additional roles to the Document AI service agent. For
more information, see Cross project file access
setup .
Create a processor
In the Google Cloud console, in the Document AI section, go to the
Workbench page.
Workbench
For custom extractor , select
Create processor .
In the Create processor menu, enter a name for your processor, such as
my-custom-document-extractor .
Select the region closest to you.
Optional: Open Advanced options .
You have the option to let Google create a Cloud Storage bucket for you,
or you can create your own . For this tutorial,
select Google-managed storage .
You also have the option to use Google-managed or Customer-managed encryption keys (CMEK) .
For this tutorial, select Google-managed encryption key .
Select Create to create your processor.
Document-level prompts
A document-level prompt provides a way to describe the document overall to bring
deep business knowledge to the model and improve extraction quality. It can
contain some general field information, for example: All the address fields are
located in the USA.
Tip: Use the field description for more specific extraction details.
While prompts can provide information to the model, they shouldn't be used to
check that rules or conditions are met. Example: all prices should sum up to
the total price. The document-level prompt is added to the overall prompt and
should be treated as document-level hints, rather than a full prompt.
Provide a document-level prompt
In the Google Cloud console, go to the Get
started tab.
To input the document prompt click Edit near the document
prompt input field.
In the side-panel, provide a prompt that describes the document as a whole.
Note: The prompt is limited to 500 characters, so be clear and concise in your prompt.
Define processor fields
You are now on the Processor overview page of the processor you just created.
You can specify the fields you want the processor to extract and begin labeling documents.
Select the Get started tab. The fields menu appears.
Select Create new field .
Enter the name for the field. Select the Data type and the Occurrence .
Give the label a descriptive, distinct Description . Property description lets
you provide additional context, insights, and prior knowledge for each entity to
improve extraction accuracy and performance.
Note: Good examples of property descriptions include location information and text
patterns of the property values, which help disambiguate potential sources of
confusion in the document, guiding the model with rules that ensure more reliable
and consistent extractions, regardless of the specific document structure or content variations.
Select Create . Refer to Define processor schema
for detailed instructions on creating and editing a schema.
Note: Generative AI (foundation and fine-tuned) models use the field name and description
to form the underlying prompt, so the field names are semantically critical. See
name fields for generative AI extraction .
Create each of the following labels for the processor schema.
Name
Data Type
Occurrence
control_number
Number
Optional multiple
employees_social_security_number
Number
Required multiple
employer_identification_number
Number
Required multiple
employers_name_address_and_zip_code
Address
Required multiple
federal_income_tax_withheld
Money
Required multiple
social_security_tax_withheld
Money
Required multiple
social_security_wages
Money
Required multiple
wages_tips_other_compensation
Money
Required multiple
You can also create and use other types of labels
in your processor schema, such as checkboxes and tabular entities .
For example, the W-2 forms contain statutory employee , retirement plan ,
and third party sick pay check boxes that you could also add to the schema.
Upload a sample document
Test with a sample document.
Select Upload sample document .
In the sidebar, select Import documents from Cloud Storage .
For this example, enter this bucket name in
Source path . This links directly to one document.
cloud-samples-data/documentai/Custom/W2/PDF/W2_XL_input_clean_2950.pdf
Select Import .
You are redirected to the labeling console.
Label a document
The process of selecting text in a document and applying labels is known as
annotation or labeling .
When you're at the labeling console, notice that many of the labels are already
populated. This is because the default custom extractor model type is a foundation
model, which can perform zero-shot prediction, that is, without training.
Note: Your results might look slightly different than the sample image.
To use the suggested labels, hold the pointer over each label
in the side panel, and select the check mark to confirm the label is correct. Don't edit the text, even if the OCR reads the text incorrectly.
In this example, the values at the bottom of the document were not identified
automatically, so you need to label them manually.
Use the icons in the toolbar above the document to label. Use the
bounding box tool by default, or the Select text tool for multi-line values, to select the content and apply the label.
Note: The select text tool does not work for all text values, so use the
bounding box if appropriate. You can also select non-text fields such as
checkboxes using the bounding box tool.
After text is selected, then a drop-down menu appears with all defined fields (entities)
for you to select one. In this example, the value of wages_tips_other_compensation
is selected with the bounding box tool, and that label is applied.
Review the detected text values to ensure that they reflect the correct location
of text for each field. The labeled W2 document should look like this when complete:
Note: If we were labeling for production review purposes, then incorrect OCR should be edited.
If needed, you can select Create new field
to add a new field to the schema from this page.
Select
Mark as labeled
when you have finished annotating the document. You are redirected to the Get started tab.
Build processor version using foundation model
After labeling a single document, you can create a processor version using the
pretrained foundation model to extract entities.
Select the Build tab.
Under Call foundation model , select Create new version .
Enter a name for your processor version, such as w2-foundation-model .
Select Create version . It takes a few minutes to create.
Note: After you create a processor version, you can't change or delete fields you
have created. You can disable them on the fields page if you no longer need them.
Optional: select the Deploy & use tab. On this page, you can view the available processor versions and the deployment status of the new version.
Use generative AI to auto-label documents
The foundation model can accurately extract fields for a variety of document types,
but you can also provide additional training data to improve the accuracy of the
model for specific document structures.
Custom extractor uses the label names you define and previous annotations to make
it quicker and easier to label documents at scale with auto-labeling .
Go to the Build page.
Select Import documents .
In the sidebar, select Import documents from Google Cloud Storage .
Enter this bucket name containing your documents.
From the Data split list, select Auto-split . This automatically splits
the documents to have 80% in the training set and 20% in the test set.
In the Auto-labeling section, select the
Import with auto-labeling checkbox.
Select the foundation model processor version to label the documents.
select Import and wait for the documents to import. You can leave this page
and return later.
You must verify the auto-labeled documents before you can use them for training
or testing. Select Start labeling
to view the auto-labeled documents.
To use the suggested labels, hold the pointer over each annotation ,
and select the check mark to confirm the label is correct. For training purposes,
don't edit the values if they don't match the document text. Only change the bounding
box if the wrong text was selected.
Select
Mark as labeled
when you have finished annotating the document.
Repeat for each auto-labeled document.
Import prelabeled training documents
Go to the Build page.
Select Import documents .
In the sidebar, select Import documents from Cloud Storage .
Enter your path in Source path containing your documents. This bucket should
contain prelabeled documents in the Document JSON format.
From the Data split list, select Auto-split . This automatically splits
the documents to have 80% in the training set, and 20% in the test set.
Leave Import with auto-labeling unchecked.
Select Import . Import takes several minutes.
Optional: View and manage dataset
From the Build page, you can access the Manage dataset
console to view and edit all documents and labels in the dataset.
Train custom model based processor
Training might take several hours. Make sure you have set up the processor with
the appropriate data and labels before you begin training.
For information about the dataset requirements, under Train a custom model ,
select Create new version or View full requirements . This is not a generative
AI model. At least 10 training instances and 10 test instances of each field are required
for a custom model based processor.
In the Version name field, enter a name for this processor version, such
as w2-custom-model .
Optional: select View label stats to find information about the document
labels. That can help determine your coverage. Select Close to return to the
training setup.
Under Model training method , select Model based .
Select Start training . Training takes a few hours. You can close this page
and come back later.
Optional: select the Deploy & use tab.
On this page, you can view the available processor versions and the training
status of the new version.
Deploy the processor version
After training is complete, select the Deploy & use tab.
Select the checkbox on the left of the version you want to deploy, and select Deploy .
Select Deploy from the dialog window. Deployment takes a few minutes.
When the version is deployed, you can set it as the Default version ,
or you can provide the version ID when processing documents with the API.
Evaluate and test the processor
Select the Evaluate tab
to test the processor version. On this page, you can view evaluation metrics including
the F1 score, precision and recall for the full document, and individual labels.
For more information about evaluation and statistics, refer to evaluate processor .
Select the Version selector and select the
version using the foundation model.
Download a document that has not been involved in previous training or testing
so that you can use it to evaluate the processor version. If using your own data,
you would use a document set aside for this purpose.
file_download
Download PDF
Select Upload Test Document and select the
document you just downloaded. The Custom Document Extractor analysis page opens.
The screen output demonstrates how well the document was extracted.
Test the document again using the version with a custom trained model.
Use the processor
You have successfully created and trained a custom extractor processor.
You can manage your custom trained processor versions just like any other processor
version. For more information, refer to Managing processor versions .
To use the Document AI API:
Follow the code samples in send a processing request
to use online or batch processing.
Refer to Quotas and limits for the
number of pages supported for online and batch processing.
Follow the custom extractor code sample in Handle the processing response
to get the extracted entities from the processor.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
To avoid unnecessary Google Cloud charges, use the
Google Cloud console to delete your processor and project if you don't need
them.
If you created a new project to learn about Document AI and you no
longer need the project, delete the project .
If you used an existing Google Cloud project, delete the resources you
created to avoid incurring charges to your account:
In the Google Cloud console navigation menu, select Document AI and select My Processors .
Select More actions in the same row as the processor you want to delete.
Select Delete processor , enter the processor name, then select Delete again to confirm.
What's next
For details, see Guides .
Explore automated schema extraction .
For automated version upgrades, see
Previous
arrow_back
Custom extractor overview
Next
Automated schema extraction
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
