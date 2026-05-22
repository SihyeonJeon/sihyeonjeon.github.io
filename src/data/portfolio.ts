export type WorkStatus = 'current' | 'next' | 'tbd';

export type CaseRecord = {
	name: string;
	area: string;
	status: WorkStatus;
	href: string;
	problem: string;
	hardPart: string;
	response: string;
	result: string;
	metrics: Array<{ label: string; value: string; bar?: number }>;
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
		evidence: ['91-item fixture', '28-item holdout', '63 tests'],
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
		evidence: ['UCI dataset', 'frontier report', 'sensitivity grid', 'CI'],
		nextEvidence: ['SKU failure gallery', 'second dataset check'],
		stat: { k: 'Sensitivity pass', v: '9/36' },
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
		slug: 'site2voice',
		name: 'site2voice',
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
		href: '/projects/site2voice/',
		repo: 'https://github.com/SihyeonJeon/site2voice',
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
		problem: 'Industrial manual QA needs authority checks, not generic answer similarity',
		hardPart: 'Aggregate scores hid an item-level safety citation regression',
		response: 'Built a domain fixture, holdout split, gate states, hybrid RRF baseline, and citation diagnostics',
		result: 'v5_t31 hybrid: recall@5 0.978; citation hit 0.945; safety specificity 5/5 exact',
		metrics: [
			{ label: 'fixture items', value: '91', bar: 91 },
			{ label: 'tests', value: '63', bar: 100 },
			{ label: 'hybrid exact', value: '5/5', bar: 100 },
		],
	},
	{
		name: 'Industrial Decision Intelligence Lab',
		area: 'Data systems · optimization',
		status: 'current',
		href: '/projects/industrial-decision-intelligence-lab/',
		problem: 'Forecast error alone did not show whether inventory decisions improved',
		hardPart: 'Lower inventory cost could hide service-level loss',
		response: 'Linked demand forecasts to base-stock policy, lead-time simulation, frontier, and sensitivity grid',
		result: 'Model policy: cost 77,323.91 vs 174,450.85; 9/36 sensitivity scenarios pass',
		metrics: [
			{ label: 'model WAPE', value: '0.861', bar: 86 },
			{ label: 'cost delta', value: '-55.68%', bar: 56 },
			{ label: 'sensitivity', value: '9/36', bar: 25 },
		],
	},
	{
		name: 'tool-tax',
		area: 'Agent tooling',
		status: 'current',
		href: '/projects/tool-tax/',
		problem: 'Agent sessions were paying hidden context cost for tool catalogs',
		hardPart: 'MCP, OpenAPI, and custom manifests describe tools differently',
		response: 'Normalized schema cost, added reports, PR diffs, and a lazy-schema proxy',
		result: 'Naive MCP host catalog estimate: 4,091 → 330 tokens',
		metrics: [
			{ label: 'direct catalog', value: '4,091', bar: 100 },
			{ label: 'proxy catalog', value: '330', bar: 8 },
			{ label: 'doctor savings', value: '69.22%', bar: 69 },
		],
	},
	{
		name: 'site2voice',
		area: 'Agent web context',
		status: 'current',
		href: '/projects/site2voice/',
		problem: 'Reference-site style was useful, but source-site nouns leaked into new products',
		hardPart: 'Keep rhythm and structure without copying the original business',
		response: 'Split SITE and VOICE files, then added source-term boundaries',
		result: 'Editorial example: 62.9 → 97.4',
		metrics: [
			{ label: 'before score', value: '62.9', bar: 63 },
			{ label: 'after score', value: '97.4', bar: 97 },
			{ label: 'copy safety', value: '95.5', bar: 96 },
		],
	},
	{
		name: 'Modulation-aware Key Estimator',
		area: 'Applied audio ML',
		status: 'current',
		href: '/projects/modulation-aware-key-estimator/',
		problem: 'Single-key prediction hides section-level modulation',
		hardPart: 'Expose region output while moving a large checkpoint out of git history',
		response: 'Built chroma/HPCP inference, CLI/API paths, release checkpoint loading, and SHA-256 verification',
		result: 'Runnable local and API inference; benchmark page waits on training provenance',
		metrics: [
			{ label: 'key classes', value: '12', bar: 100 },
			{ label: 'interfaces', value: 'CLI/API', bar: 85 },
			{ label: 'training record', value: 'pending', bar: 35 },
		],
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
				ev: 'site2voice separates structure, voice, and source-subject contamination risks',
				ref: 'site2voice',
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
