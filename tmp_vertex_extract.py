import json, re
obj=json.load(open('data/step-03/current/products/vertex-ai.json', encoding='utf8'))
region_pat=re.compile(r'^(?:[a-z]+(?:-[a-z0-9]+)+|[A-Z]{2,}(?:-[A-Z0-9]+)*)$')

def clean_spaces(s):
    return re.sub(r'\s+', ' ', str(s)).strip(' .,:;')

def title_fix(s):
    s=clean_spaces(s)
    s=s.replace('PSC-I','Private Service Connect interface').replace('PSC-E','Private Service Connect endpoints')
    s=s.replace('Deepseek','DeepSeek').replace('Embeddinggemma','EmbeddingGemma')
    return s

def split_list(s):
    s=s.replace(' , ', ', ').replace(' and ', '||').replace(', ', '||')
    return [clean_spaces(p) for p in s.split('||') if clean_spaces(p)]

def features_from_row(name, summary):
    name=clean_spaces(name)
    summary=clean_spaces(summary)
    low=summary.lower()
    out=[]
    if region_pat.match(name.lower()) and ('region' in low or 'locations' in low):
        return []
    if 'supports the following features:' in low:
        after=re.split(r'supports the following features:\s*', summary, flags=re.I)[1]
        first=re.split(r'\s+now in\s+|\s+lets your|\.| For more information', after, flags=re.I)[0]
        out += [title_fix(x) for x in split_list(first)]
    elif 'enterprise security features' in low:
        if 'private vpc environment' in low or 'private service connect interface' in low:
            out.append('Private VPC deployment for Agent Engine')
    elif 'available through model garden' in low or 'available as model as a service' in low or 'models are available' in low:
        n=re.sub(r'(?i)^the following models have been added to model garden\s*:?', '', name)
        n=re.sub(r'(?i)^model garden\s+', '', n)
        n=clean_spaces(n)
        if n and n.lower() not in {'model garden the vertex ai model garden','model garden'}:
            out += [title_fix(x) for x in split_list(n)]
    elif any(x in low for x in [
        'the following generally available',
        'the following ga feature',
        'the following features of vertex ai',
        'the following features of the new and improved vertex ai'
    ]):
        m=re.search(r':\s*(.*)', summary)
        if m:
            tail=m.group(1)
            tail=re.split(r'For more', tail)[0]
            tail=tail.replace('*','|')
            for part in re.split(r'\||\. ', tail):
                part=clean_spaces(part)
                if not part:
                    continue
                if len(part.split()) <= 8 and not re.search(r'now|available|preview|generally|feature store|imagen on vertex ai', part, re.I):
                    out.append(title_fix(part))
    if not out:
        pats=[
            ('flex-start vms','Flex-start VMs'),
            ('spot vms','Spot VMs'),
            ('consume reservations of vms that have gpus attached','Compute Engine reservations for GPU-backed jobs'),
            ('compute engine reservations','Compute Engine reservations'),
            ('copy tuned gemini','Copy tuned Gemini models'),
            ('matching engine public endpoint','Vertex AI Matching Engine public endpoint'),
            ('added support for the following languages','Additional PaLM API language support'),
            ('explainable ai on certain types of bqml models','Explainable AI for BigQuery ML models in Model Registry'),
            ('email notification component','Vertex AI Pipelines email notification component'),
            ('vertex ai model registry is generally available','Vertex AI Model Registry'),
            ('incrementally train an automl model','Incremental AutoML model training'),
            ('custom prediction routines','Custom prediction routines'),
            ('failure policy for a pipeline run','Pipeline failure policy'),
            ('vertex ai private endpoints is now general available','Vertex AI private endpoints'),
            ('mount network file system','NFS share mounts for custom training'),
            ('access cloud storage buckets by reading and writing to the local filesystem','Cloud Storage FUSE access for custom training'),
            ('pre-built container to serve predictions from tensorflow 2','Pre-built TensorFlow 2.6 prediction container'),
            ('the two tower built-in algorithm','Two Tower built-in algorithm'),
            ('the swivel pipeline template','Swivel pipeline template'),
            ('reduction server algorithm','Reduction Server algorithm'),
            ('interactive shell to inspect your custom training container','Interactive shell for custom training containers'),
            ('private service connect interface','Private Service Connect interface'),
            ('private dns peering','Private DNS peering'),
            ('private service connect automation','Private Service Connect automation'),
            ('vector search custom constraints','Vector Search custom constraints'),
            ('hybrid search and sparse embeddings','Vector Search hybrid search and sparse embeddings'),
            ('model copy across different projects','Model copy across projects'),
            ('monitoring models being served outside of vertex ai','Model Monitoring v2 for models served outside Vertex AI'),
            ('optimized online serving','Optimized online serving'),
            ('feature registry','Feature Registry'),
            ('ray on vertex ai','Ray on Vertex AI'),
            ('autoscaling feature','Ray cluster autoscaling'),
            ('schedules api for vertex ai pipelines','Vertex AI Pipelines schedules API'),
            ('scheduler api for vertex ai pipelines','Vertex AI Pipelines schedules API'),
            ('template gallery','Vertex AI Pipelines Template Gallery'),
            ('persistent resources','Persistent resources'),
            ('model evaluation with sliced metrics','Model evaluation with sliced metrics'),
            ('fairness and bias metrics','Model evaluation with fairness and bias metrics'),
            ('example-based explanations','Example-based explanations'),
            ('pipeline task-level logs','Pipeline task-level logs'),
            ('structured logging support for vertex ai custom training','Structured logging for Vertex AI custom training'),
            ('counttoken api','CountToken API'),
            ('computetoken api','ComputeToken API'),
            ('multimodal embeddings video support','Multimodal embeddings for video'),
            ('query an index from the vector search console','Vector Search console querying'),
            ('console experience in google cloud for creating and deploying indexes','Vertex AI Vector Search console'),
            ('numerical filtering available in vertex ai vector search','Vector Search numerical filtering'),
            ('human face generation','Human face generation'),
            ('image visual captioning','Image visual captioning'),
            ('visual question answering','Visual Question Answering'),
            ('image editing','Image editing'),
            ('image generation','Image generation'),
            ('multimodal embeddings available in ga','Multimodal embeddings'),
            ('stream responses from generative ai models','Generative AI model streaming'),
            ('rlhf tuning','RLHF tuning for text-bison'),
            ('supervised fine-tuning (sft)','Supervised fine-tuning'),
            ('batch text','Batch text requests'),
            ('codey apis','Codey APIs'),
            ('model garden is generally available','Model Garden'),
            ('model garden is available in preview','Model Garden'),
            ('generative ai support on vertex ai is now generally available','Generative AI support on Vertex AI'),
            ('generative ai support for vertex ai is now available in preview','Generative AI support on Vertex AI'),
            ('multi-region bigquery table','Multi-region BigQuery input/output for batch prediction'),
            ('co-host models on the same vm','Co-hosted models on one VM'),
            ('deep integration with vertex ai experiments','Vertex AI Experiments integration'),
            ('g2 accelerator-optimized machine types','G2 machine types for prediction'),
            ('a3 machine types','A3 machine types for prediction'),
            ('cloud tpu v5e to serve online predictions','Cloud TPU v5e for online prediction'),
            ('a2 ultra machines','A2 Ultra machines for prediction'),
            ('c3 machine types','C3 machine types for prediction'),
            ('a100 80gb accelerators','A100 80GB accelerators for custom training'),
            ('grounding with vertex ai search','Grounding with Vertex AI Search'),
            ('model grounding for gemini-pro','Grounding for gemini-pro')
        ]
        for needle, feat in pats:
            if needle in low:
                out.append(feat)
    if not out:
        n=name
        for pat in [
            r'(?i)^the following features:\s*',
            r'(?i)^following features of (?:the new and improved )?vertex ai\s*',
            r'(?i)^following generally available \(ga\) features:\s*',
            r'(?i)^following ga\s*',
            r'(?i)^model garden\s+the vertex ai model garden\s*',
            r'(?i)^generally available\s*:\s*',
            r'(?i)^preview\s*:\s*'
        ]:
            n=re.sub(pat, '', n)
        n=clean_spaces(n)
        banned={
            'your agents','the global endpoint','of psc service automation that can automatically create psc endpoints for dedicated privat',
            'following features of vertex ai','following features of the new and improved vertex ai','new and improved vertex ai',
            'following generally available (ga) features: subject model tuning (standard) * style model','following ga','@002'
        }
        if n and len(n) > 2 and n.lower() not in banned:
            for p in split_list(n):
                p=title_fix(p)
                if p and not region_pat.match(p.lower()):
                    out.append(p)
    norm=[]; seen=set()
    for x in out:
        x=title_fix(x)
        if x and x not in seen:
            seen.add(x); norm.append(x)
    return norm

def concise_summary(feat, summary):
    s=clean_spaces(summary)
    low=s.lower()
    if 'available through model garden' in low or 'available as model as a service' in low:
        return f'{feat} is available through Model Garden.'
    if 'generally available' in low or '( ga )' in low or '(ga)' in low:
        return f'{feat} is generally available.'
    if 'preview' in low:
        return f'{feat} is in Preview.'
    if 'supported' in low or 'supports' in low:
        return f'{feat} is supported in Vertex AI.'
    if 'now available' in low or 'is available' in low:
        return f'{feat} is available in Vertex AI.'
    return f'{feat} is a Vertex AI capability.'

rows=[]
for idx,f in enumerate(obj['features'], start=1):
    if f['source_release_note_type'] not in ('FEATURE','DEPRECATION'):
        continue
    feats=features_from_row(f['feature_name'], f['feature_summary'])
    for feat in feats:
        rows.append({
            'row_id': idx,
            'feature_name': feat,
            'feature_summary': concise_summary(feat, f['feature_summary']),
            'event_type': f['source_release_note_type'],
            'deprecation_date': '' if f['source_release_note_type']=='FEATURE' else f['latest_feature_date']
        })
print(json.dumps(rows, ensure_ascii=False, separators=(',',':')))
