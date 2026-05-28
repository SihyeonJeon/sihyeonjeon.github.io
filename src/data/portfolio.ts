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
	identity: 'AI Engineering · Agentic Systems',
	motto: 'fall in love with the problem, not the solution.',
	role: 'Data Science · AI Engineering',
	education: 'SeoulTech · Applied Artificial Intelligence + Industrial Engineering',
	location: 'Seoul, KR',
	github: 'github.com/SihyeonJeon',
	githubUrl: 'https://github.com/SihyeonJeon',
	positioning: 'Agentic Systems · evaluation · retrieval · workflow automation · reliability checks',
	stack: ['Python', 'PyTorch', 'scikit-learn', 'pandas', 'FastAPI', 'SQL', 'GitHub Actions'],
};

export const flagshipSystems = [
	{
		slug: 'industrial-rag-gate',
		name: 'Industrial RAG Gate',
		category: 'AI Evaluation',
		role: 'RAG · citation checks · safety review',
		period: '2026',
		status: 'current',
		summary:
			'Evaluates whether industrial manual answers cite the right authority and escalate unsafe servicing questions',
		stack: ['Python', 'RAG evaluation', 'sentence-transformers', 'hybrid retrieval', 'unittest'],
		evidence: ['91-item fixture', '28-item holdout', 'review packet', '68 tests'],
		nextEvidence: ['second document family', 'SME review loop', 'case record'],
		stat: { k: 'Review queue', v: '5 items · 2 P0' },
		href: '/projects/industrial-rag-gate/',
	},
	{
		slug: 'p2p-replay-gate',
		name: 'P2P Replay Gate',
		category: 'Agentic Systems',
		role: 'workflow replay · action gate · audit report',
		period: '2026',
		status: 'current',
		summary:
			'Pre-checks purchase-to-pay agent actions against replayed workflow state before payment',
		stack: ['Python', 'SQLite', 'JSONL', 'CSV', 'GitHub Actions'],
		evidence: ['agent action gate', 'persistent store replay', 'ops-readiness report', 'BPIC2019 smoke', '66 tests'],
		nextEvidence: ['larger BPIC2019 run', 'trace visualizer', 'external AP workflow feedback'],
		stat: { k: 'Recovery', v: 'recovered' },
		href: '/projects/p2p-replay-gate/',
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
		category: 'AI Product Systems',
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
		category: 'Inference Systems',
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
		slug: 'replenishment-policy-gate',
		name: 'Replenishment Policy Gate',
		category: 'Decision Systems',
		role: 'forecasting · inventory simulation · service check',
		period: '2026',
		status: 'current',
		summary:
			'Gates model-informed reorder policies against service-floor, lead-time, cost, and SKU-level stockout risks',
		stack: ['Python', 'pandas', 'scikit-learn', 'simulation', 'GitHub Actions'],
		evidence: ['UCI dataset', 'failure-mode report', 'frontier gate', 'lead-time uncertainty', 'SKU diagnostics'],
		nextEvidence: ['second dataset check', 'operator feedback'],
		stat: { k: 'Gate', v: 'review' },
		href: '/projects/replenishment-policy-gate/',
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
		category: 'Agent Tooling',
		role: 'MCP/OpenAPI catalog measurement',
		period: '2026',
		status: 'current',
		summary:
			'Measures hidden tool-schema surface across MCP servers, OpenAPI files, and agent tool catalogs',
		stack: ['Python', 'MCP', 'CLI', 'PyPI', 'CI'],
		evidence: ['repo', 'package', 'public benchmark', 'config risk lint'],
		nextEvidence: ['real host traces', 'external MCP feedback'],
		stat: { k: 'Risk lint', v: '5 findings' },
		href: '/projects/tool-tax/',
		repo: 'https://github.com/SihyeonJeon/tool-tax',
	},
	{
		slug: 'site-voice-packs',
		name: 'site-voice-packs',
		category: 'Agent Context',
		role: 'web context files · source-term checks',
		period: '2026',
		status: 'current',
		summary:
			'Separates website structure from copy rhythm so reference style does not leak source-site subject matter',
		stack: ['Python', 'CLI', 'Web analysis', 'Agent context'],
		evidence: ['repo', 'package', 'visible comparison', 'HTML score check'],
		nextEvidence: ['second site corpus', 'external builder feedback'],
		stat: { k: 'HTML score delta', v: '+28.9' },
		href: '/projects/site-voice-packs/',
		repo: 'https://github.com/SihyeonJeon/site-voice-packs',
	},
	{
		slug: 'modulation-aware-key-estimator',
		name: 'Modulation-aware Key Estimator',
		category: 'Audio ML',
		role: 'PyTorch inference · FastAPI',
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

export const publicFlagshipSystems = flagshipSystems.filter((project) => project.status === 'current');
export const publicSupportingArtifacts = supportingArtifacts.filter((project) => project.status === 'current');

export const focusInitiatives = publicFlagshipSystems;
export const currentArtifacts = publicSupportingArtifacts;

export const caseRecords: CaseRecord[] = [
	{
		name: 'Industrial RAG Gate',
		area: 'AI Evaluation',
		status: 'current',
		href: '/projects/industrial-rag-gate/',
		context: 'While testing RAG answers on maintenance and safety manuals, good-looking answers still cited nearby but wrong authority',
		problem: 'Industrial manual QA needs authority checks, not generic answer similarity',
		hardPart: 'Aggregate scores hid an item-level safety citation regression',
		response: 'Built a domain fixture, holdout split, gate states, hybrid RRF baseline, citation diagnostics, and SME review packet',
		result: 'v5_t31 hybrid: recall@5 0.978; citation hit 0.945; safety specificity 5/5 exact; review queue 5 items with 2 P0',
		metrics: [
			{ label: 'fixture items', value: '91', help: 'manual QA cases with expected source behavior', koLabel: 'fixture 항목', koHelp: '기대 근거가 정의된 manual QA 사례' },
			{ label: 'tests', value: '68', help: 'regression checks run in CI', koLabel: 'test', koHelp: 'CI에서 반복 확인하는 regression check' },
			{ label: 'review queue', value: '5 items', help: 'support gaps prepared for SME review', koLabel: 'review queue', koHelp: 'SME review용 support gap 항목' },
		],
		ko: {
			context: '정비·안전 매뉴얼 RAG를 테스트하던 중, 그럴듯한 답변이 가까운 문단을 인용하지만 필요한 근거 문서와 어긋나는 사례 확인',
			problem: '산업 매뉴얼 QA는 답변 유사도보다 근거 문서 확인이 먼저',
			hardPart: '평균 점수가 개별 안전 인용 오류를 가림',
			response: '도메인 fixture, holdout split, gate state, hybrid RRF, citation diagnostics, SME review packet 구성',
			result: 'v5_t31 hybrid: recall@5 0.978; citation hit 0.945; safety specificity 5/5 exact; review queue 5 items, P0 2',
		},
	},
	{
		name: 'P2P Replay Gate',
		area: 'Agentic Systems',
		status: 'current',
		href: '/projects/p2p-replay-gate/',
		context: 'While shaping invoice-agent workflows, document extraction looked clean but payment state could still be unsafe',
		problem: 'P2P agents need state replay for duplicate invoices, vendor mismatch, receipts, approvals, and active holds',
		hardPart: '2-way, 3-way, invoice-before-GR, and consignment flows accept different event orders before action execution',
		response: 'Built JSONL replay, streaming CSV/XES import, BPIC2019 mapping pack, auto policy template, case oracle, seeded defect pack, audit CLI, agent-action gate, ops-readiness report, SQLite store replay, checkpoint recovery, scorecard, and CI',
		result: '12 clean traces; 48 injected scenarios; BPIC2019 real XES smoke 1000 cases; action gate blocks unsafe payment; store replay recovers 4 partitions after simulated interruption; 255 attempted appends; 204 duplicate retries; tests 66',
		metrics: [
			{ label: 'scenarios', value: '48', help: 'seeded replay defects checked by expected codes', koLabel: 'scenario', koHelp: '기대 code로 검증하는 seeded replay defect' },
			{ label: 'critical caught', value: '36/36', bar: 100, help: 'duplicate, vendor, early payment, blocked payment rows caught', koLabel: 'critical caught', koHelp: 'duplicate, vendor, early payment, blocked payment row 탐지' },
			{ label: 'recovery', value: 'recovered', help: 'partition checkpoints restored after simulated interruption', koLabel: 'recovery', koHelp: 'simulated interruption 이후 partition checkpoint 복구' },
		],
		ko: {
			context: 'invoice-agent workflow를 만들던 중, document extraction은 좋아 보여도 payment state가 unsafe할 수 있음을 확인',
			problem: 'P2P agent는 duplicate invoice, vendor mismatch, receipt, approval, active hold를 state replay로 확인해야 함',
			hardPart: '2-way, 3-way, invoice-before-GR, consignment flow마다 action 실행 전 허용되는 event order가 다름',
			response: 'JSONL replay, streaming CSV/XES import, BPIC2019 mapping pack, auto policy template, case oracle, seeded defect pack, audit CLI, agent-action gate, ops-readiness report, SQLite store replay, checkpoint recovery, scorecard, CI 구성',
			result: 'clean trace 12; injected scenario 48; BPIC2019 real XES smoke 1000 cases; action gate가 unsafe payment 차단; store replay가 simulated interruption 이후 4 partition 복구; attempted append 255; duplicate retry 204; test 66',
		},
	},
	{
		name: 'Replenishment Policy Gate',
		area: 'Decision Systems',
		status: 'current',
		href: '/projects/replenishment-policy-gate/',
		context: 'While converting retail demand forecasts into reorder levels, a cheaper model policy still created SKU-level stockout risk',
		problem: 'Forecast error alone did not decide whether the reorder policy was usable',
		hardPart: 'A lower inventory policy could pass aggregate cost while failing service under lead-time and SKU checks',
		response: 'Built base-stock simulation, service-floor gate, frontier selection, lead-time grid, cost sensitivity grid, and named failure-mode report',
		result: 'Top 50 SKUs; final gate review; robust q 0.99 passes 4/4 lead-time settings; SKU floor 48/50',
		metrics: [
			{ label: 'model WAPE', value: '0.865', help: 'weighted forecast error, lower is better', koLabel: 'model WAPE', koHelp: '판매량 기준 가중 예측 오차, 낮을수록 좋음' },
			{ label: 'cost delta', value: '-57.46%', bar: 57, help: 'simulated policy cost reduction vs baseline', koLabel: 'cost delta', koHelp: 'baseline 대비 simulation policy cost 감소율' },
			{ label: 'blocked lead-time', value: '12/16', help: 'lead-time and quantile settings blocked by service-floor failure', koLabel: 'blocked lead-time', koHelp: 'service-floor failure로 block된 lead-time 및 quantile setting' },
		],
		ko: {
			context: 'retail demand forecast를 reorder level로 바꾸는 과정에서, 더 저렴한 model policy가 SKU-level stockout risk를 만들 수 있음을 확인',
			problem: 'forecast error만으로는 reorder policy 사용 가능 여부를 판단할 수 없음',
			hardPart: '낮은 inventory policy가 aggregate cost는 통과해도 lead-time과 SKU check에서 service를 실패할 수 있음',
			response: 'base-stock simulation, service-floor gate, frontier selection, lead-time grid, cost sensitivity grid, named failure-mode report 구성',
			result: 'top 50 SKU; final gate review; robust q 0.99는 lead-time setting 4/4 pass; SKU floor 48/50',
		},
	},
	{
		name: 'tool-tax',
		area: 'Agent Tooling',
		status: 'current',
		href: '/projects/tool-tax/',
		context: 'While running agent workflows with many tools, the session budget was being spent before the task began',
		problem: 'Agent sessions were paying hidden context cost for tool catalogs',
		hardPart: 'MCP, OpenAPI, and custom manifests expose schema surface in different formats',
		response: 'Normalized schema cost, added reports, PR diffs, lazy-schema proxy, public catalog benchmark, and MCP config risk lint',
		result: '10 public catalogs: 3,429 tools; risk lint sample: 2 servers, 5 findings, high risk',
		metrics: [
			{ label: 'public tools', value: '3,429', help: 'tools across 10 MCP/OpenAPI catalogs', koLabel: 'public tools', koHelp: '10개 MCP/OpenAPI catalog의 tool 수' },
			{ label: 'schema tokens', value: '1.44M', help: 'estimated schema tokens loaded up front', koLabel: 'schema token', koHelp: '처음부터 올리는 schema token 추정치' },
			{ label: 'risk findings', value: '5', help: 'no-probe MCP config lint findings in the sample report', koLabel: 'risk findings', koHelp: 'sample report의 no-probe MCP config lint finding' },
		],
		ko: {
			context: 'tool이 많은 agent workflow를 돌리던 중, 실제 작업 전부터 session budget이 tool catalog에 소모되는 문제 확인',
			problem: 'agent session이 tool catalog의 숨은 context cost를 계속 지불',
			hardPart: 'MCP, OpenAPI, custom manifest가 schema surface를 서로 다른 format으로 노출',
			response: 'schema cost 정규화, report, PR diff, lazy-schema proxy, public catalog benchmark, MCP config risk lint 구성',
			result: '10개 public catalog: 3,429 tools; risk lint sample: 2 servers, 5 findings, high risk',
		},
	},
	{
		name: 'site-voice-packs',
		area: 'Agent Context',
		status: 'current',
		href: '/projects/site-voice-packs/',
		context: 'While using reference websites to guide agents, useful tone and structure came with unwanted source-site subject matter',
		problem: 'Reference-site style was useful, but source-site product names leaked into new products',
		hardPart: 'Keep rhythm and structure without copying spans or importing the original business',
		response: 'Split SITE and VOICE files, then added source-term boundaries and visible HTML scoring',
		result: 'Stripe/LedgerFlow web output: visible HTML score 63.2 → 92.1; copy-overlap risk 0.0',
		metrics: [
			{ label: 'before score', value: '63.2', bar: 63, help: 'visible HTML score without context files', koLabel: 'before score', koHelp: 'context file 없이 생성한 visible HTML score' },
			{ label: 'after score', value: '92.1', bar: 92, help: 'visible HTML score with SITE/VOICE context', koLabel: 'after score', koHelp: 'SITE/VOICE context 적용 후 visible HTML score' },
			{ label: 'delta', value: '+28.9', help: 'same prompt, different context', koLabel: 'delta', koHelp: '같은 prompt, 다른 context' },
			{ label: 'copy-overlap risk', value: '0.0', help: 'source-copy overlap risk in the visible HTML report', koLabel: 'copy-overlap risk', koHelp: 'visible HTML report의 source-copy overlap risk' },
		],
		ko: {
			context: 'reference website를 agent context로 쓰던 중, 유용한 tone과 structure가 원본 site의 subject matter까지 함께 끌고 오는 문제 확인',
			problem: 'reference-site style은 유용하지만 원본 site noun이 새 product에 섞임',
			hardPart: 'span 복사나 original business 유입 없이 rhythm과 structure만 유지',
			response: 'SITE file과 VOICE file 분리, source-term boundary와 visible HTML scoring 추가',
			result: 'Stripe/LedgerFlow web output: visible HTML score 63.2 → 92.1; copy-overlap risk 0.0',
		},
	},
	{
		name: 'Modulation-aware Key Estimator',
		area: 'Audio ML',
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
				ev: 'site-voice-packs separates structure, voice, and source-site text leakage checks',
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
				name: 'Audio ML',
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
				name: 'Manifest evaluation',
				ev: 'Modulation-aware Key Estimator exposes a labeled-manifest evaluation path and states benchmark limits',
				ref: 'modulation-aware-key-estimator',
				signal: 'supporting artifact',
			},
		],
	},
	{
		name: 'Full-stack / Product Systems',
		sub: 'Static pages, review surfaces, and repo documentation',
		items: [
			{
				name: 'Project index',
				ev: 'GitHub Pages lists case records, project routes, and visual reports',
				ref: 'sihyeonjeon.github.io',
				signal: 'current site',
			},
			{
				name: 'Documentation as interface',
				ev: 'Repo READMEs keep install commands, outputs, and verification paths near the top',
				ref: 'tool-tax',
				signal: 'public repos',
			},
			{
				name: 'Static publishing',
				ev: 'Astro/GitHub Pages publishes work records, project routes, and project status',
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
				name: 'Operational replay hygiene',
				ev: 'P2P Replay Gate reports idempotency, input ordering, schema coverage, replay digest, and recovery',
				ref: 'p2p-replay-gate',
				signal: 'current system',
			},
			{
				name: 'Decision optimization',
				ev: 'Replenishment gate links demand forecasts to base-stock policy and stockout failure modes',
				ref: 'replenishment-policy-gate',
				signal: 'current system',
			},
			{
				name: 'Workflow policy oracle',
				ev: 'P2P Replay Gate checks event-order failures before an invoice agent clears payment',
				ref: 'p2p-replay-gate',
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
];
