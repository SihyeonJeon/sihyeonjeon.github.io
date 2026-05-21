export type ProofStatus = 'measured' | 'planned' | 'tbd';

export const profile = {
	name: 'Sihyeon Jeon',
	nameKo: '전시현',
	role: 'AI/Data Systems Engineer · Modeling · Full-stack · Low-level Optimization',
	location: 'Seoul, KR',
	github: 'github.com/SihyeonJeon',
	githubUrl: 'https://github.com/SihyeonJeon',
	positioning:
		'I build measurable AI and data systems: evaluation pipelines, model-facing products, and the runtime or data layer underneath them.',
};

export const metrics = [
	{
		k: 'Public repos with release surface',
		v: '3',
		note: 'tool-tax, site2voice, modulation-aware key estimator',
		status: 'measured',
	},
	{
		k: 'Installable packages shipped',
		v: '2',
		note: 'PyPI paths for CLI tools',
		status: 'measured',
	},
	{
		k: 'Model delivery path',
		v: '1',
		note: 'Release asset checkpoint with SHA-256 verified loader',
		status: 'measured',
	},
	{
		k: 'AI/Data portfolio systems',
		v: '5',
		note: 'Roadmap items labelled planned until built',
		status: 'planned',
	},
] satisfies Array<{ k: string; v: string; note: string; status: ProofStatus }>;

export const focusInitiatives = [
	{
		slug: 'rag-eval-system',
		name: 'Production-grade RAG Evaluation System',
		category: 'AI/Data Engineering',
		role: 'system design · eval harness · CI gates',
		period: 'next portfolio slice',
		status: 'planned',
		summary:
			'A retrieval evaluation pipeline that gates prompt, model, index, and chunking changes on recall, faithfulness, latency, and cost before merge.',
		stack: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'Docker', 'GitHub Actions'],
		evidence: ['design target'],
		evidencePlanned: ['benchmark', 'demo', 'runbook'],
		stat: { k: 'Target gate', v: 'recall · faith · cost' },
		href: '/projects/rag-eval-system/',
	},
	{
		slug: 'research-workspace',
		name: 'AI-native Research Workspace',
		category: 'Full-stack AI',
		role: 'React client · Python backend · retrieval inspection',
		period: 'planned',
		status: 'planned',
		summary:
			'A local-first workspace for comparing retrieval changes, eval outputs, prompt diffs, and model responses in one review surface.',
		stack: ['TypeScript', 'React', 'FastAPI', 'WebSocket', 'SQLite'],
		evidence: ['product direction'],
		evidencePlanned: ['prototype', 'screen capture', 'usage notes'],
		stat: { k: 'Target user', v: 'self-use first' },
		href: '/projects/research-workspace/',
	},
	{
		slug: 'inference-runtime-lab',
		name: 'Low-level Inference Runtime Benchmark Lab',
		category: 'Modeling · Systems',
		role: 'profiling · quantization · runtime comparison',
		period: 'planned',
		status: 'planned',
		summary:
			'A small benchmark lab for p50/p95 latency, memory, and quality deltas across model/runtime/quantization choices.',
		stack: ['PyTorch', 'Triton', 'CUDA profiling', 'C++ bindings', 'Nsight'],
		evidence: ['measurement plan'],
		evidencePlanned: ['tokens/sec table', 'variance report', 'methodology'],
		stat: { k: 'Primary metric', v: 'latency / quality trade-off' },
		href: '/projects/inference-runtime-lab/',
	},
	{
		slug: 'industrial-ai-optimization',
		name: 'Industrial AI Decision Optimization Pipeline',
		category: 'Data Systems',
		role: 'forecasting · optimization · decision audit',
		period: 'planned',
		status: 'planned',
		summary:
			'A portfolio-grade pipeline that turns model forecasts into constrained decisions with reproducible scenario reports.',
		stack: ['Python', 'OR-Tools', 'DuckDB', 'dbt', 'Streamlit'],
		evidence: ['domain fit'],
		evidencePlanned: ['scenario benchmark', 'decision trace', 'dashboard'],
		stat: { k: 'Target proof', v: 'decision traceability' },
		href: '/projects/industrial-ai-optimization/',
	},
	{
		slug: 'mlops-data-quality-layer',
		name: 'MLOps / Data Quality / Deployment Layer',
		category: 'MLOps',
		role: 'data contracts · drift checks · deploy surface',
		period: 'planned',
		status: 'planned',
		summary:
			'A thin operational layer for dataset versioning, score provenance, drift alarms, and deployment health around the AI systems above.',
		stack: ['Great Expectations', 'GitHub Actions', 'Docker', 'Prometheus', 'OpenTelemetry'],
		evidence: ['operational target'],
		evidencePlanned: ['quality gates', 'alerts', 'rollback runbook'],
		stat: { k: 'Target proof', v: 'ops readiness' },
		href: '/projects/mlops-data-quality-layer/',
	},
] satisfies Array<{
	slug: string;
	name: string;
	category: string;
	role: string;
	period: string;
	status: ProofStatus;
	summary: string;
	stack: string[];
	evidence: string[];
	evidencePlanned: string[];
	stat: { k: string; v: string };
	href: string;
}>;

export const currentArtifacts = [
	{
		slug: 'tool-tax',
		name: 'tool-tax',
		category: 'Agent systems · measurement',
		role: 'CLI · MCP proxy · PyPI release',
		period: '2026',
		status: 'measured',
		summary:
			'Measures hidden tool-schema token cost across MCP servers, OpenAPI files, and agent tool catalogs so schema growth can be reviewed like a budget.',
		stack: ['Python', 'MCP', 'CLI', 'PyPI', 'CI'],
		evidence: ['repo', 'package', 'budget report'],
		evidencePlanned: ['larger benchmark'],
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
		status: 'measured',
		summary:
			'Separates website structure from copy rhythm so agents can reuse reference-site tone without leaking source-site subject matter.',
		stack: ['Python', 'CLI', 'Web analysis', 'Agent context'],
		evidence: ['repo', 'package', 'samples'],
		evidencePlanned: ['larger site corpus'],
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
		status: 'measured',
		summary:
			'Estimates region-wise musical key for songs with modulation instead of forcing one global label on the whole track.',
		stack: ['Python', 'PyTorch', 'FastAPI', 'Audio ML'],
		evidence: ['repo', 'checkpoint release', 'SHA-256 loader'],
		evidencePlanned: ['training provenance'],
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
	status: ProofStatus;
	summary: string;
	stack: string[];
	evidence: string[];
	evidencePlanned: string[];
	stat: { k: string; v: string };
	href: string;
	repo: string;
}>;

export const skillDomains = [
	{
		name: 'AI / RAG Engineering',
		sub: 'Retrieval, evaluation, cost and latency discipline.',
		items: [
			{
				name: 'Eval design',
				ev: 'Roadmap defines recall, faithfulness, latency, and cost as merge gates.',
				ref: 'rag-eval-system',
				proof: 'planned system',
			},
			{
				name: 'Agent budget measurement',
				ev: 'tool-tax turns schema cost into a reportable engineering budget.',
				ref: 'tool-tax',
				proof: 'public package',
			},
			{
				name: 'Context hygiene',
				ev: 'site2voice separates structure, voice, and source-subject contamination risks.',
				ref: 'site2voice',
				proof: 'public package',
			},
		],
	},
	{
		name: 'Modeling',
		sub: 'Model inference, evaluation surface, and training provenance.',
		items: [
			{
				name: 'Applied audio ML',
				ev: 'Region-wise key estimation keeps modulation confidence visible.',
				ref: 'modulation-aware-key-estimator',
				proof: 'public repo',
			},
			{
				name: 'Checkpoint delivery',
				ev: 'Large model artifact moved to release asset with verified loading.',
				ref: 'modulation-aware-key-estimator',
				proof: 'release surface',
			},
			{
				name: 'Benchmark method',
				ev: 'Inference lab will publish latency, memory, and quality deltas before claiming wins.',
				ref: 'inference-runtime-lab',
				proof: 'planned benchmark',
			},
		],
	},
	{
		name: 'Full-stack / Product Systems',
		sub: 'Build the client when AI infrastructure needs a real review surface.',
		items: [
			{
				name: 'Research UI',
				ev: 'Workspace roadmap connects retrieval diffs, eval outputs, and prompt changes.',
				ref: 'research-workspace',
				proof: 'planned product',
			},
			{
				name: 'Documentation as interface',
				ev: 'Repos are shaped so installation, effect, and verification are visible quickly.',
				ref: 'tool-tax',
				proof: 'public repos',
			},
			{
				name: 'Static publishing',
				ev: 'This portfolio is an Astro/GitHub Pages evidence hub, not a generic landing page.',
				ref: 'sihyeonjeon.github.io',
				proof: 'current site',
			},
		],
	},
	{
		name: 'Data / Operations',
		sub: 'Data quality, deployment health, and decision traceability.',
		items: [
			{
				name: 'Data contracts',
				ev: 'MLOps layer is planned around dataset hashes, score provenance, and drift alarms.',
				ref: 'mlops-data-quality-layer',
				proof: 'planned system',
			},
			{
				name: 'Decision optimization',
				ev: 'Optimization pipeline will connect forecasts to constrained decisions with audit logs.',
				ref: 'industrial-ai-optimization',
				proof: 'planned system',
			},
			{
				name: 'Release discipline',
				ev: 'Current projects already separate code, package, release artifact, and verification path.',
				ref: 'modulation-aware-key-estimator',
				proof: 'current artifacts',
			},
		],
	},
];

export const evidenceRows = [
	...currentArtifacts.map((project) => ({
		name: project.name,
		kind: project.category,
		status: project.status,
		result: project.summary,
		proof: project.evidence.join(' · '),
		href: project.href,
	})),
	...focusInitiatives.slice(0, 3).map((project) => ({
		name: project.name,
		kind: project.category,
		status: project.status,
		result: project.summary,
		proof: project.evidencePlanned.join(' · '),
		href: project.href,
	})),
];
