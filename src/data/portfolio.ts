export type WorkStatus = 'current' | 'next' | 'tbd';

export type CaseRecord = {
	name: string;
	area: string;
	status: WorkStatus;
	href: string;
	context: string;
	problem: string;
	hardPart: string;
	response: string;
	result: string;
	metrics: Array<{ label: string; value: string; bar?: number; help?: string; koLabel?: string; koHelp?: string }>;
	ko?: {
		context: string;
		problem: string;
		hardPart: string;
		response: string;
		result: string;
	};
};

export const profile = {
	name: 'Sihyeon Jeon',
	nameKo: '전시현',
	role: 'AI/Data Systems · Modeling · Full-stack · Runtime',
	location: 'Seoul, KR',
	github: 'github.com/SihyeonJeon',
	githubUrl: 'https://github.com/SihyeonJeon',
	positioning:
		'Build, test, and revise AI/data systems around concrete failure cases',
};

export const flagshipSystems = [
	{
		slug: 'industrial-rag-gate',
		name: 'Industrial RAG Gate',
		category: 'AI evaluation · industrial safety',
		role: 'fixture design · retrieval eval · authority gate',
		period: '2026',
		status: 'current',
		summary:
			'Evaluates whether industrial manual answers cite the right authority and escalate unsafe servicing questions',
		stack: ['Python', 'RAG evaluation', 'sentence-transformers', 'Hybrid RRF', 'unittest'],
		evidence: ['91-item fixture', '28-item holdout', '65 tests'],
		nextEvidence: ['internal fixture', 'v5_t31 report set', 'case record'],
		stat: { k: 'Hybrid safety specificity', v: '5/5 exact' },
		href: '/projects/industrial-rag-gate/',
	},
	{
		slug: 'rag-eval-system',
		name: 'Production-grade RAG Evaluation System',
		category: 'AI/Data Engineering',
		role: 'system design · eval harness · CI gates',
		period: 'next',
		status: 'next',
		summary:
			'Gate prompt, model, index, and chunking changes on retrieval quality, latency, and cost',
		stack: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'Docker', 'GitHub Actions'],
		evidence: ['design note'],
		nextEvidence: ['benchmark', 'demo', 'runbook'],
		stat: { k: 'Target gate', v: 'recall · faith · cost' },
		href: '/projects/rag-eval-system/',
	},
	{
		slug: 'research-workspace',
		name: 'AI-native Research Workspace',
		category: 'Full-stack AI',
		role: 'React client · Python backend · retrieval inspection',
		period: 'next',
		status: 'next',
		summary:
			'Compare retrieval changes, prompt diffs, eval output, and model responses in one local review surface',
		stack: ['TypeScript', 'React', 'FastAPI', 'WebSocket', 'SQLite'],
		evidence: ['product direction'],
		nextEvidence: ['prototype', 'screen capture', 'usage notes'],
		stat: { k: 'Target user', v: 'self-use first' },
		href: '/projects/research-workspace/',
	},
	{
		slug: 'inference-runtime-lab',
		name: 'Low-level Inference Runtime Benchmark Lab',
		category: 'Modeling · Systems',
		role: 'profiling · quantization · runtime comparison',
		period: 'next',
		status: 'next',
		summary:
			'Track latency, memory, and quality deltas across runtime and quantization choices',
		stack: ['PyTorch', 'Triton', 'CUDA profiling', 'C++ bindings', 'Nsight'],
		evidence: ['measurement plan'],
		nextEvidence: ['tokens/sec table', 'variance report', 'methodology'],
		stat: { k: 'Primary metric', v: 'latency / quality trade-off' },
		href: '/projects/inference-runtime-lab/',
	},
	{
		slug: 'industrial-decision-intelligence-lab',
		name: 'Industrial Decision Intelligence Lab',
		category: 'Data Systems · industrial decision',
		role: 'forecasting · inventory policy · scenario simulation',
		period: '2026',
		status: 'current',
		summary:
			'Turns retail transaction forecasts into base-stock inventory policies and service-cost simulation',
		stack: ['Python', 'pandas', 'scikit-learn', 'simulation', 'GitHub Actions'],
		evidence: ['UCI dataset', 'frontier report', 'sensitivity grid', 'SKU diagnostics', 'CI'],
		nextEvidence: ['second dataset check', 'lead-time uncertainty'],
		stat: { k: 'SKU floor', v: '11/12' },
		href: '/projects/industrial-decision-intelligence-lab/',
	},
	{
		slug: 'mlops-data-quality-layer',
		name: 'MLOps / Data Quality / Deployment Layer',
		category: 'MLOps',
		role: 'data contracts · drift checks · deploy surface',
		period: 'next',
		status: 'next',
		summary:
			'Track dataset identity, score provenance, drift, and deployment health',
		stack: ['Great Expectations', 'GitHub Actions', 'Docker', 'Prometheus', 'OpenTelemetry'],
		evidence: ['operational target'],
		nextEvidence: ['quality gates', 'alerts', 'rollback runbook'],
		stat: { k: 'Focus', v: 'ops readiness' },
		href: '/projects/mlops-data-quality-layer/',
	},
] satisfies Array<{
	slug: string;
	name: string;
	category: string;
	role: string;
	period: string;
	status: WorkStatus;
	summary: string;
	stack: string[];
	evidence: string[];
	nextEvidence: string[];
	stat: { k: string; v: string };
	href: string;
}>;

export const supportingArtifacts = [
	{
		slug: 'tool-tax',
		name: 'tool-tax',
		category: 'Agent systems · measurement',
		role: 'CLI · MCP proxy · PyPI release',
		period: '2026',
		status: 'current',
		summary:
			'Finds hidden tool-schema token cost across MCP servers, OpenAPI files, and agent tool catalogs',
		stack: ['Python', 'MCP', 'CLI', 'PyPI', 'CI'],
		evidence: ['repo', 'package', 'budget report'],
		nextEvidence: ['larger benchmark'],
		stat: { k: 'Built surface', v: 'installable CLI' },
		href: '/projects/tool-tax/',
		repo: 'https://github.com/SihyeonJeon/tool-tax',
	},
	{
		slug: 'site-voice-packs',
		name: 'site-voice-packs',
		category: 'AI web context · agent input files',
		role: 'SITE.md · VOICE.md · PyPI release',
		period: '2026',
		status: 'current',
		summary:
			'Separates website structure from copy rhythm so reference style does not leak source-site subject matter',
		stack: ['Python', 'CLI', 'Web analysis', 'Agent context'],
		evidence: ['repo', 'package', 'samples'],
		nextEvidence: ['larger site corpus'],
		stat: { k: 'Built surface', v: 'drop-in md files' },
		href: '/projects/site-voice-packs/',
		repo: 'https://github.com/SihyeonJeon/site-voice-packs',
	},
	{
		slug: 'modulation-aware-key-estimator',
		name: 'Modulation-aware Key Estimator',
		category: 'Applied audio ML',
		role: 'model inference · CLI · FastAPI · release asset',
		period: '2026',
		status: 'current',
		summary:
			'Estimates region-wise musical key instead of forcing one global label on the whole track',
		stack: ['Python', 'PyTorch', 'FastAPI', 'Audio ML'],
		evidence: ['repo', 'checkpoint release', 'SHA-256 loader'],
		nextEvidence: ['training provenance'],
		stat: { k: 'Model surface', v: 'inference ready' },
		href: '/projects/modulation-aware-key-estimator/',
		repo: 'https://github.com/SihyeonJeon/Modulation-aware-key-estimator',
	},
] satisfies Array<{
	slug: string;
	name: string;
	category: string;
	role: string;
	period: string;
	status: WorkStatus;
	summary: string;
	stack: string[];
	evidence: string[];
	nextEvidence: string[];
	stat: { k: string; v: string };
	href: string;
	repo: string;
}>;

export const focusInitiatives = flagshipSystems.slice(1);
export const currentArtifacts = supportingArtifacts;

export const caseRecords: CaseRecord[] = [
	{
		name: 'Industrial RAG Gate',
		area: 'Evaluation systems',
		status: 'current',
		href: '/projects/industrial-rag-gate/',
		context: 'While testing RAG answers on maintenance and safety manuals, good-looking answers still cited nearby but wrong authority',
		problem: 'Industrial manual QA needs authority checks, not generic answer similarity',
		hardPart: 'Aggregate scores hid an item-level safety citation regression',
		response: 'Built a domain fixture, holdout split, gate states, hybrid RRF baseline, and citation diagnostics',
		result: 'v5_t31 hybrid: recall@5 0.978; citation hit 0.945; safety specificity 5/5 exact',
		metrics: [
			{ label: 'fixture items', value: '91', help: 'manual QA cases with expected source behavior', koLabel: 'fixture 항목', koHelp: '기대 근거가 정의된 manual QA 사례' },
			{ label: 'tests', value: '65', help: 'regression checks run in CI', koLabel: 'test', koHelp: 'CI에서 반복 확인하는 regression check' },
			{ label: 'hybrid exact', value: '5/5', bar: 100, help: 'safety questions routed to the exact expected authority', koLabel: 'hybrid exact', koHelp: '안전 질문이 정확한 근거 문서로 연결된 개수' },
		],
		ko: {
			context: '정비·안전 매뉴얼 RAG를 테스트하던 중, 그럴듯한 답변이 가까운 문단을 인용하지만 필요한 근거 문서와 어긋나는 사례 확인',
			problem: '산업 매뉴얼 QA는 답변 유사도보다 근거 문서 확인이 먼저',
			hardPart: '평균 점수가 개별 안전 인용 오류를 가림',
			response: '도메인 fixture, holdout split, gate state, hybrid RRF, citation diagnostics 구성',
			result: 'v5_t31 hybrid: recall@5 0.978; citation hit 0.945; safety specificity 5/5 exact',
		},
	},
	{
		name: 'Industrial Decision Intelligence Lab',
		area: 'Data systems · optimization',
		status: 'current',
		href: '/projects/industrial-decision-intelligence-lab/',
		context: 'While turning retail demand forecasts into replenishment policy, the better forecast did not automatically mean a better inventory decision',
		problem: 'Forecast error alone did not show whether inventory decisions improved',
		hardPart: 'Lower inventory cost could hide service-level loss',
		response: 'Linked forecasts to base-stock policy, lead-time simulation, sensitivity grid, and SKU diagnostics',
		result: 'Cost 77,323.91 vs 174,450.85; 9/36 sensitivity scenarios pass; 1 service-risk SKU',
		metrics: [
			{ label: 'model WAPE', value: '0.861', help: 'weighted forecast error, lower is better', koLabel: 'model WAPE', koHelp: '판매량 기준 가중 예측 오차, 낮을수록 좋음' },
			{ label: 'cost delta', value: '-55.68%', bar: 56, help: 'simulated policy cost reduction vs baseline', koLabel: 'cost delta', koHelp: 'baseline 대비 simulation policy cost 감소율' },
			{ label: 'SKU floor', value: '11/12', bar: 92, help: 'SKUs staying above the service floor', koLabel: 'SKU floor', koHelp: 'service floor 이상을 유지한 SKU 개수' },
		],
		ko: {
			context: 'retail demand forecast를 replenishment policy로 바꾸는 과정에서, 더 좋은 예측이 항상 더 좋은 재고 의사결정을 뜻하지 않음을 확인',
			problem: 'forecast error만으로는 재고 의사결정 개선 여부가 보이지 않음',
			hardPart: '낮은 재고 비용이 service-level loss를 숨길 수 있음',
			response: 'forecast, base-stock policy, lead-time simulation, sensitivity grid, SKU diagnostics 연결',
			result: 'cost 77,323.91 vs 174,450.85; sensitivity 9/36 pass; service-risk SKU 1',
		},
	},
	{
		name: 'tool-tax',
		area: 'Agent tooling',
		status: 'current',
		href: '/projects/tool-tax/',
		context: 'While running agent workflows with many tools, the session budget was being spent before the task began',
		problem: 'Agent sessions were paying hidden context cost for tool catalogs',
		hardPart: 'MCP, OpenAPI, and custom manifests describe tools differently',
		response: 'Normalized schema cost, added reports, PR diffs, and a lazy-schema proxy',
		result: 'Naive MCP host catalog estimate: 4,091 → 330 tokens',
		metrics: [
			{ label: 'direct catalog', value: '4,091', help: 'estimated schema tokens loaded up front', koLabel: 'direct catalog', koHelp: '처음부터 올리는 schema token 추정치' },
			{ label: 'proxy catalog', value: '330', help: 'estimated tokens after lazy index', koLabel: 'proxy catalog', koHelp: 'lazy index 적용 후 token 추정치' },
			{ label: 'doctor savings', value: '69.22%', bar: 69, help: 'estimated reduction in tool catalog context', koLabel: 'doctor savings', koHelp: 'tool catalog context 감소 추정치' },
		],
		ko: {
			context: 'tool이 많은 agent workflow를 돌리던 중, 실제 작업 전부터 session budget이 tool catalog에 소모되는 문제 확인',
			problem: 'agent session이 tool catalog의 숨은 context cost를 계속 지불',
			hardPart: 'MCP, OpenAPI, custom manifest마다 tool schema 표현 방식이 다름',
			response: 'schema cost 정규화, report, PR diff, lazy-schema proxy 구성',
			result: 'naive MCP host catalog estimate: 4,091 → 330 tokens',
		},
	},
	{
		name: 'site-voice-packs',
		area: 'Agent web context',
		status: 'current',
		href: '/projects/site-voice-packs/',
		context: 'While using reference websites to guide agents, useful tone and structure came with unwanted source-site subject matter',
		problem: 'Reference-site style was useful, but source-site nouns leaked into new products',
		hardPart: 'Keep rhythm and structure without copying the original business',
		response: 'Split SITE and VOICE files, then added source-term boundaries',
		result: 'Editorial example: 62.9 → 97.4',
		metrics: [
			{ label: 'before score', value: '62.9', bar: 63, help: 'reference-fit before context files', koLabel: 'before score', koHelp: 'context file 적용 전 reference-fit' },
			{ label: 'after score', value: '97.4', bar: 97, help: 'reference-fit after SITE/VOICE context', koLabel: 'after score', koHelp: 'SITE/VOICE context 적용 후 reference-fit' },
			{ label: 'copy safety', value: '95.5', bar: 96, help: 'low overlap with source-site wording', koLabel: 'copy safety', koHelp: 'source-site wording과의 낮은 중복도' },
		],
		ko: {
			context: 'reference website를 agent context로 쓰던 중, 유용한 tone과 structure가 원본 site의 subject matter까지 함께 끌고 오는 문제 확인',
			problem: 'reference-site style은 유용하지만 원본 site noun이 새 product에 섞임',
			hardPart: 'rhythm과 structure를 유지하면서 original business copy를 차단',
			response: 'SITE file과 VOICE file 분리, source-term boundary 추가',
			result: 'editorial example: 62.9 → 97.4',
		},
	},
	{
		name: 'Modulation-aware Key Estimator',
		area: 'Applied audio ML',
		status: 'current',
		href: '/projects/modulation-aware-key-estimator/',
		context: 'While estimating song key from audio, one global label failed on tracks that change key by section',
		problem: 'Single-key prediction hides section-level modulation',
		hardPart: 'Expose region output while moving a large checkpoint out of git history',
		response: 'Built chroma/HPCP inference, CLI/API paths, release checkpoint loading, and SHA-256 verification',
		result: 'Runnable local and API inference; benchmark page waits on training provenance',
		metrics: [
			{ label: 'key classes', value: '12', help: 'major/minor pitch-class targets', koLabel: 'key class', koHelp: 'major/minor pitch-class target' },
			{ label: 'interfaces', value: 'CLI/API', help: 'local and service inference paths', koLabel: 'interface', koHelp: 'local inference와 service inference 경로' },
			{ label: 'training record', value: 'pending', help: 'dataset and training manifest still incomplete', koLabel: 'training record', koHelp: 'dataset과 training manifest 정리 전' },
		],
		ko: {
			context: 'audio key estimation을 하던 중, 곡 전체에 하나의 key label만 붙이면 section별 modulation이 사라지는 문제 확인',
			problem: 'single-key prediction이 section-level modulation을 가림',
			hardPart: 'region output을 유지하면서 large checkpoint를 git history 밖으로 이동',
			response: 'chroma/HPCP inference, CLI/API path, release checkpoint loading, SHA-256 verification 구성',
			result: 'local/API inference 가능; training provenance 정리 대기',
		},
	},
];

export const skillDomains = [
	{
		name: 'AI / RAG Engineering',
		sub: 'Retrieval, evaluation, cost and latency discipline',
		items: [
			{
				name: 'Domain eval design',
				ev: 'Industrial RAG Gate tracks authority, safety escalation, citation hits, and item-level regressions',
				ref: 'industrial-rag-gate',
				signal: 'current system',
			},
			{
				name: 'Agent budget measurement',
				ev: 'tool-tax turns schema cost into a reportable engineering budget',
				ref: 'tool-tax',
				signal: 'public package',
			},
			{
				name: 'Context hygiene',
				ev: 'site-voice-packs separates structure, voice, and source-subject contamination risks',
				ref: 'site-voice-packs',
				signal: 'public package',
			},
		],
	},
	{
		name: 'Modeling',
		sub: 'Model inference, evaluation surface, and training provenance',
		items: [
			{
				name: 'Applied audio ML',
				ev: 'Region-wise key estimation keeps modulation confidence visible',
				ref: 'modulation-aware-key-estimator',
				signal: 'public repo',
			},
			{
				name: 'Checkpoint delivery',
				ev: 'Large model artifact moved to release asset with verified loading',
				ref: 'modulation-aware-key-estimator',
				signal: 'release surface',
			},
			{
				name: 'Benchmark method',
				ev: 'Inference lab will publish latency, memory, and quality deltas before claiming wins',
				ref: 'inference-runtime-lab',
				signal: 'benchmark queue',
			},
		],
	},
	{
		name: 'Full-stack / Product Systems',
		sub: 'Build the client when AI infrastructure needs a real review surface',
		items: [
			{
				name: 'Research UI',
				ev: 'Workspace roadmap connects retrieval diffs, eval outputs, and prompt changes',
				ref: 'research-workspace',
				signal: 'product queue',
			},
			{
				name: 'Documentation as interface',
				ev: 'Repos are shaped so installation, effect, and verification are visible quickly',
				ref: 'tool-tax',
				signal: 'public repos',
			},
			{
				name: 'Static publishing',
				ev: 'Astro/GitHub Pages keeps work records, project routes, and project status together',
				ref: 'sihyeonjeon.github.io',
				signal: 'current site',
			},
		],
	},
	{
		name: 'Data / Operations',
		sub: 'Data quality, deployment health, and decision traceability',
		items: [
			{
				name: 'Data contracts',
				ev: 'MLOps layer targets dataset hashes, score provenance, and drift alarms',
				ref: 'mlops-data-quality-layer',
				signal: 'system queue',
			},
			{
				name: 'Decision optimization',
				ev: 'Decision lab links demand forecasts to inventory policy and cost-service frontier',
				ref: 'industrial-decision-intelligence-lab',
				signal: 'current system',
			},
			{
				name: 'Release discipline',
				ev: 'Current projects already separate code, package, release artifact, and verification path',
				ref: 'modulation-aware-key-estimator',
				signal: 'current artifacts',
			},
		],
	},
];

export const evidenceRows = [
	...caseRecords.map((record) => ({
		name: record.name,
		kind: record.area,
		status: record.status,
		result: record.result,
		signal: record.metrics.map((metric) => `${metric.label}: ${metric.value}`).join(' · '),
		href: record.href,
	})),
	...focusInitiatives.slice(0, 3).map((project) => ({
		name: project.name,
		kind: project.category,
		status: project.status,
		result: project.summary,
		signal: project.nextEvidence.join(' · '),
		href: project.href,
	})),
];
