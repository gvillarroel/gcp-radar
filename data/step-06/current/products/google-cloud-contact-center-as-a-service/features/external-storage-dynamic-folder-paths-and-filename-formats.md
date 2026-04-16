---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.126Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "External Storage dynamic folder paths and filename formats"
feature_slug: "external-storage-dynamic-folder-paths-and-filename-formats"
latest_feature_date: "2023-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/conversational-insights"
keywords:
  - "external"
  - "storage"
  - "dynamic"
  - "folder"
  - "paths"
  - "filename"
  - "formats"
  - "can"
---

# External Storage dynamic folder paths and filename formats

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

External Storage can use runtime variables and custom subpaths to format folder paths and filenames for stored contact center files.

## Extended Definition

External Storage can use runtime variables and custom subpaths to format folder paths and filenames for stored contact center files.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/conversational-insights](https://docs.cloud.google.com/contact-center/ccai-platform/docs/conversational-insights)

## Supporting Pages

### "Android SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Configure external deflection link icons Customize the icon in the External Deflection Link channel by uploading the icon into a drawable folder of your app and ensure you use the same icon name while creating the external deflection link in the CCAI Platform portal at Settings > Chat > External Deflection Links > View links > Add Deflection Link.
- Configure the surveys Thank You icon You can customize or override the icon in survey thank you page by uploading an icon into the drawable folder of your app and use the filename ujet survey thank you icon as icon name.
- Use UjetCustomData.putObject("external chat transfer", hashMapObject) to set the transcript data in JSON format as follows: HashMap<String, Object> jsonData = new HashMap<> () ; // Convert json string into hashmap object and store it in jsonData UjetCustomData customData = new UjetCustomData () ; customData.putObject ( "external chat transfer" , jsonData ) ; // Use external chat transfer key to send chat transcript data UjetStartOptions ujetStartOptions = new UjetStartOptions.Builder () .setUnsignedCustomData ( customData ) .build () ; Ujet.start ( ujetStartOptions ) ; JSON format: greeting override : string agent : dictionary name : string avatar : string [url of agent avatar, optional] transcript : array sender : string ["end user" or "agent"] timestamp : string [ie "2021-03-15 12:00:00Z"] content : array type : string [one of text, media] text : string [required for text type] media : dictionary [required for media type] type : string [one of image, video] url : string [public URL pointing at media file] JSON example: { "greeting override" : "Please hold while we connect you with a human agent." , "agent" : { "name" : "Name" , "avatar" : "avatar url" }, "transcript" : [ { "sender" : "agent" , "timestamp" : "2021-03-15 12:00:15Z" , "content" : [ { "type" : "text" , "text" : " Suggestions shown: \n\n Help with batch or delivery\n Help with metrics or order feedback\n Help with Instant Cashout" } ] }, { "sender" : "end user" , "timestamp" : "2021-03-15 12:00:16Z" , "content" : [ { "type" : "text" , "text" : "Help with batch or delivery" } ] } ] } You can use Markdown on the text type.
- ChatStyles ( ... formCard = FormCardStyle ( backgroundColor = "color reference" , cornerRadius = 8 , font = FontStyle ( colorReference = "color reference" , size = 16 , style = "bold italic" , family = "Roboto-Black.ttf" , ) , border = BorderStyle ( color = "color reference" , width = 2 , ) , title = TextStyle ( FontStyle ( colorReference = "color reference" , size = 18 , style = "bold italic" , family = "Roboto-Black.ttf" , ) ) , subtitle = TextStyle ( FontStyle ( colorReference = "color reference" , size = 16 , style = "bold italic" , family = "Roboto-Black.ttf" , ) ) , image = ImageStyle ( height = 94 , ) , ) ) Surveys You can change the icon on the survey thank you page by uploading an icon to your app's drawable folder.

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Transcript upload locations in a CRM or external storage After the chat is complete, transcripts are uploaded to the CRM or external storage as a TXT file.
- Chat transcripts and chat history You can configure CCAI Platform to upload a chat transcript to your CRM or external storage after the chat has ended.
- For a completely custom CRM, the chat transcript is stored in external storage, if configured.
- Configure whether you want to upload to linked CRM tickets, to external storage, or both.

### "Customer Experience Insights and Quality AI \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/conversational-insights](https://docs.cloud.google.com/contact-center/ccai-platform/docs/conversational-insights)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- Browse your files > Folder Path : Enter the path to your Cloud Storage bucket to connect your data to CX Insights.
- File destinations : Voice and chat preview file paths will be generated based on your folder path entered.
- Note: This tab will be enabled only when external storage is turned ON with GCS selected.
- For Server Setup , select Existing External Google Cloud Storage .

