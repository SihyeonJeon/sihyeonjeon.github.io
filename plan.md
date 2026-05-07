좋은 선택입니다. **Astro**로 가시죠. Next.js는 SSR/서버 기능이 강점인데 정적 사이트(포트폴리오+블로그)에선 오버킬이고, GitHub Pages는 정적 호스팅이라 Astro가 훨씬 자연스럽습니다. Astro는 빌드 결과가 거의 순수 HTML이라 빠르고, 콘텐츠 컬렉션(타입 안전한 마크다운) + MDX(컴포넌트를 글에 임베드) 지원이 강력해서 Claude Design SVG를 끼워 넣기에 최적입니다.

처음이시라니 **CLI 명령 한 줄까지 다 적어드립니다.** 막히는 지점에서 멈추고 물어보시면 됩니다.

---

# Part 1. 사전 준비 (10분)

## 1.1 필요한 것 설치

**Node.js 20 LTS 이상** 필요합니다. 터미널에서 확인:

```bash
node --version
```

`v20.x.x` 이상이면 OK. 없거나 낮으면 https://nodejs.org 에서 LTS 설치 (또는 nvm 사용).

**Git** 설정 (이미 했으면 스킵):

```bash
git config --global user.name "홍길동"
git config --global user.email "you@example.com"
```

## 1.2 GitHub 레포 생성

브라우저에서 GitHub 접속 → New repository.

- **Repository name: `<username>.github.io`** (정확히 이 이름. 예: `gildong.github.io`)
- Public
- "Add a README file" 체크
- Create

> 이 이름이어야 `https://<username>.github.io` 루트 도메인으로 자동 매핑됩니다. 다른 이름으로 만들면 `https://<username>.github.io/repo-name/`이 되어 경로 처리가 번거로워집니다.

## 1.3 클론

```bash
cd ~/  # 또는 원하는 작업 디렉토리
git clone https://github.com/<username>/<username>.github.io.git
cd <username>.github.io
```

---

# Part 2. Astro 프로젝트 셋업 (15분)

## 2.1 Astro 설치

레포 디렉토리에서 (이미 README.md만 있는 상태):

```bash
npm create astro@latest .
```

대화형 질문이 나옵니다. 아래대로 답하세요:

```
dir › . (현재 폴더에 설치)
How would you like to start? › Use blog template
Install dependencies? › Yes
Initialize a new git repository? › No  (이미 git 레포니까)
Use TypeScript? › Yes
How strict? › Strict
```

기존 README.md와 충돌하면 덮어쓸지 물어봅니다 → Yes (나중에 다시 만듭니다).

## 2.2 추가 패키지 설치

```bash
npm install @astrojs/mdx @astrojs/sitemap @astrojs/rss
```

- `mdx`: 마크다운 안에 컴포넌트 직접 임베드 (Claude Design SVG 박기 좋음)
- `sitemap`: 검색엔진 최적화
- `rss`: 블로그 RSS 피드

## 2.3 `astro.config.mjs` 수정

레포 루트의 `astro.config.mjs`를 다음으로 교체:

```javascript
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://<username>.github.io',  // 본인 username으로 교체
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});
```

`site` 필드 꼭 본인 username으로 바꾸세요. 사이트맵/RSS의 절대 URL이 여기서 만들어집니다.

## 2.4 콘텐츠 컬렉션 정의

`src/content.config.ts` 파일을 만들거나 (Astro 5+) 또는 `src/content/config.ts` (Astro 4.x):

```typescript
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    hero: z.string().optional(),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    tech: z.array(z.string()).default([]),
    order: z.number().default(99),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
```

이게 핵심입니다. **타입 검증된 frontmatter** — 빠뜨리면 빌드 에러로 바로 잡힙니다.

## 2.5 디렉토리 구조 정리

블로그 템플릿이 만든 기본 구조를 다음처럼 정리하세요:

```
src/
├── content.config.ts
├── content/
│   ├── blog/              # 기존 글들 다 지우고 비워둠
│   └── projects/          # 새로 만듦
├── layouts/
│   ├── BaseLayout.astro
│   ├── BlogPost.astro
│   └── Project.astro
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── PostCard.astro
│   └── ProjectCard.astro
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── blog/
│   │   ├── index.astro
│   │   └── [...slug].astro
│   ├── projects/
│   │   ├── index.astro
│   │   └── [...slug].astro
│   └── rss.xml.js
├── styles/
│   └── global.css
└── assets/
    └── img/
        ├── posts/
        └── projects/
```

블로그 템플릿이 만들어준 파일 중 안 쓰는 건 지우고, 위 구조에 맞춰 정리하세요. `src/content/blog/` 안의 샘플 글은 다 지워도 됩니다.

---

# Part 3. 핵심 파일 (그대로 복붙)

## 3.1 `src/layouts/BaseLayout.astro`

```astro
---
import '../styles/global.css';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';

interface Props {
  title: string;
  description?: string;
  image?: string;
}

const { title, description = "개발자 홍길동의 포트폴리오와 블로그", image } = Astro.props;
const canonicalURL = new URL(Astro.url.pathname, Astro.site);
const ogImage = image ? new URL(image, Astro.site) : new URL('/og-default.png', Astro.site);
---
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="canonical" href={canonicalURL} />
  <link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml" />
  <meta name="generator" content={Astro.generator} />

  <title>{title}</title>
  <meta name="description" content={description} />

  <meta property="og:type" content="website" />
  <meta property="og:url" content={canonicalURL} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImage} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
</head>
<body>
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</body>
</html>
```

## 3.2 `src/components/Header.astro`

```astro
---
const path = Astro.url.pathname;
const isActive = (p: string) => path === p || path.startsWith(p + '/');
---
<header class="site-header">
  <nav class="container">
    <a href="/" class="logo">홍길동</a>
    <ul class="nav-links">
      <li><a href="/projects/" class:list={[{ active: isActive('/projects') }]}>Projects</a></li>
      <li><a href="/blog/" class:list={[{ active: isActive('/blog') }]}>Blog</a></li>
      <li><a href="/about/" class:list={[{ active: isActive('/about') }]}>About</a></li>
    </ul>
  </nav>
</header>
```

## 3.3 `src/components/Footer.astro`

```astro
---
const year = new Date().getFullYear();
---
<footer class="site-footer">
  <div class="container">
    <p>© {year} 홍길동</p>
    <ul>
      <li><a href="https://github.com/yourusername">GitHub</a></li>
      <li><a href="/rss.xml">RSS</a></li>
      <li><a href="mailto:you@example.com">Email</a></li>
    </ul>
  </div>
</footer>
```

## 3.4 `src/components/PostCard.astro`

```astro
---
import type { CollectionEntry } from 'astro:content';

interface Props {
  post: CollectionEntry<'blog'>;
}
const { post } = Astro.props;
const date = post.data.pubDate.toLocaleDateString('ko-KR', {
  year: 'numeric', month: 'long', day: 'numeric'
});
---
<a href={`/blog/${post.id}/`} class="post-card">
  {post.data.cover && <img src={post.data.cover} alt="" loading="lazy" />}
  <div class="post-card-body">
    <h3>{post.data.title}</h3>
    <p>{post.data.description}</p>
    <time datetime={post.data.pubDate.toISOString()}>{date}</time>
  </div>
</a>
```

## 3.5 `src/components/ProjectCard.astro`

```astro
---
import type { CollectionEntry } from 'astro:content';

interface Props {
  project: CollectionEntry<'projects'>;
}
const { project } = Astro.props;
---
<a href={`/projects/${project.id}/`} class="project-card">
  {project.data.hero && <img src={project.data.hero} alt="" loading="lazy" />}
  <div class="project-card-body">
    <h3>{project.data.title}</h3>
    <p>{project.data.tagline}</p>
    {project.data.tech.length > 0 && (
      <ul class="tech-tags">
        {project.data.tech.map((t) => <li>{t}</li>)}
      </ul>
    )}
  </div>
</a>
```

## 3.6 `src/pages/index.astro`

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import PostCard from '../components/PostCard.astro';
import ProjectCard from '../components/ProjectCard.astro';
import { getCollection } from 'astro:content';

const posts = (await getCollection('blog', ({ data }) => !data.draft))
  .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
  .slice(0, 5);

const featured = (await getCollection('projects', ({ data }) => data.featured))
  .sort((a, b) => a.data.order - b.data.order);
---
<BaseLayout title="홍길동 — Building things that matter">
  <section class="hero container">
    <h1>홍길동</h1>
    <p class="tagline">Backend engineer building useful tools with LLMs.</p>
    <div class="cta">
      <a href="/projects/" class="btn btn-primary">프로젝트 보기</a>
      <a href="/blog/" class="btn btn-secondary">블로그</a>
    </div>
  </section>

  {featured.length > 0 && (
    <section class="featured container">
      <h2>주요 작업</h2>
      <div class="project-grid">
        {featured.map((p) => <ProjectCard project={p} />)}
      </div>
    </section>
  )}

  <section class="recent container">
    <h2>최근 글</h2>
    <div class="post-list">
      {posts.map((p) => <PostCard post={p} />)}
    </div>
  </section>
</BaseLayout>
```

## 3.7 `src/pages/blog/index.astro`

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import PostCard from '../../components/PostCard.astro';
import { getCollection } from 'astro:content';

const posts = (await getCollection('blog', ({ data }) => !data.draft))
  .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
---
<BaseLayout title="Blog | 홍길동" description="기술 글, 회고, 사이드 프로젝트 기록">
  <section class="container">
    <h1>Blog</h1>
    <div class="post-list">
      {posts.map((p) => <PostCard post={p} />)}
    </div>
  </section>
</BaseLayout>
```

## 3.8 `src/pages/blog/[...slug].astro`

```astro
---
import { getCollection, render } from 'astro:content';
import BaseLayout from '../../layouts/BaseLayout.astro';

export async function getStaticPaths() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await render(post);
const date = post.data.pubDate.toLocaleDateString('ko-KR', {
  year: 'numeric', month: 'long', day: 'numeric'
});
---
<BaseLayout
  title={post.data.title}
  description={post.data.description}
  image={post.data.cover}
>
  <article class="post container">
    {post.data.cover && (
      <img class="post-cover" src={post.data.cover} alt={post.data.title} />
    )}
    <header>
      <h1>{post.data.title}</h1>
      <p class="post-meta">
        <time datetime={post.data.pubDate.toISOString()}>{date}</time>
        {post.data.tags.length > 0 && (
          <span class="tags">
            {post.data.tags.map((t) => <span class="tag">#{t}</span>)}
          </span>
        )}
      </p>
    </header>
    <div class="post-content">
      <Content />
    </div>
  </article>
</BaseLayout>
```

## 3.9 `src/pages/projects/index.astro` & `[...slug].astro`

`projects/index.astro`:

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import ProjectCard from '../../components/ProjectCard.astro';
import { getCollection } from 'astro:content';

const projects = (await getCollection('projects'))
  .sort((a, b) => a.data.order - b.data.order);
---
<BaseLayout title="Projects | 홍길동">
  <section class="container">
    <h1>Projects</h1>
    <div class="project-grid">
      {projects.map((p) => <ProjectCard project={p} />)}
    </div>
  </section>
</BaseLayout>
```

`projects/[...slug].astro`:

```astro
---
import { getCollection, render } from 'astro:content';
import BaseLayout from '../../layouts/BaseLayout.astro';

export async function getStaticPaths() {
  const projects = await getCollection('projects');
  return projects.map((project) => ({
    params: { slug: project.id },
    props: { project },
  }));
}

const { project } = Astro.props;
const { Content } = await render(project);
---
<BaseLayout
  title={`${project.data.title} | 홍길동`}
  description={project.data.tagline}
  image={project.data.hero}
>
  <article class="project container">
    {project.data.hero && <img class="project-hero" src={project.data.hero} alt="" />}
    <h1>{project.data.title}</h1>
    <p class="tagline">{project.data.tagline}</p>
    <div class="project-meta">
      {project.data.repo && <a href={project.data.repo}>GitHub →</a>}
      {project.data.demo && <a href={project.data.demo}>Live Demo →</a>}
    </div>
    {project.data.tech.length > 0 && (
      <ul class="tech-stack">
        {project.data.tech.map((t) => <li>{t}</li>)}
      </ul>
    )}
    <div class="project-content">
      <Content />
    </div>
  </article>
</BaseLayout>
```

## 3.10 `src/pages/rss.xml.js`

```javascript
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return rss({
    title: '홍길동 Blog',
    description: '기술 글과 사이드 프로젝트 기록',
    site: context.site,
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/blog/${post.id}/`,
      })),
  });
}
```

## 3.11 `src/pages/about.astro`

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout title="About | 홍길동">
  <section class="container about">
    <h1>About</h1>
    <p>여기에 자기소개를 적습니다. Claude Design으로 만든 일러스트를 박을 수도 있고요.</p>
  </section>
</BaseLayout>
```

## 3.12 `src/styles/global.css` (최소 스타터)

```css
:root {
  --color-bg: #ffffff;
  --color-text: #1a1a1a;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-primary: #2563eb;
  --color-accent: #7c3aed;

  --font-body: 'Pretendard', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 1rem;
  --space-4: 1.5rem;
  --space-5: 2rem;
  --space-6: 3rem;
  --space-7: 5rem;

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;

  --container-max: 720px;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #0a0a0a;
    --color-text: #ededed;
    --color-muted: #9ca3af;
    --color-border: #262626;
  }
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--font-body);
  background: var(--color-bg);
  color: var(--color-text);
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}
.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: var(--space-5) var(--space-3);
}
a { color: var(--color-primary); text-decoration: none; }
a:hover { text-decoration: underline; }

.site-header { border-bottom: 1px solid var(--color-border); }
.site-header nav { display: flex; justify-content: space-between; align-items: center; }
.site-header .logo { font-weight: 700; font-size: 1.1rem; color: var(--color-text); }
.site-header ul { display: flex; gap: var(--space-4); list-style: none; }
.site-header a.active { color: var(--color-text); font-weight: 600; }

.hero { padding: var(--space-7) var(--space-3); text-align: center; }
.hero h1 { font-size: 3rem; margin-bottom: var(--space-3); }
.hero .tagline { color: var(--color-muted); font-size: 1.25rem; margin-bottom: var(--space-5); }
.cta { display: flex; gap: var(--space-3); justify-content: center; }
.btn {
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  font-weight: 500;
}
.btn-primary { background: var(--color-primary); color: white; }
.btn-secondary { border: 1px solid var(--color-border); color: var(--color-text); }

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-4);
}
.project-card, .post-card {
  display: block;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: transform 0.15s, border-color 0.15s;
  color: var(--color-text);
  text-decoration: none;
}
.project-card:hover, .post-card:hover {
  transform: translateY(-2px);
  border-color: var(--color-primary);
  text-decoration: none;
}
.project-card img, .post-card img { width: 100%; aspect-ratio: 16/9; object-fit: cover; }
.project-card-body, .post-card-body { padding: var(--space-3); }
.project-card h3, .post-card h3 { margin-bottom: var(--space-2); }
.tech-tags { display: flex; gap: var(--space-2); flex-wrap: wrap; list-style: none; margin-top: var(--space-2); }
.tech-tags li { font-size: 0.8rem; padding: 2px 8px; background: var(--color-border); border-radius: var(--radius-sm); }

.post-list { display: flex; flex-direction: column; gap: var(--space-4); }

.post .post-cover { width: 100%; border-radius: var(--radius-lg); margin-bottom: var(--space-4); }
.post-content { margin-top: var(--space-5); }
.post-content h2 { margin: var(--space-5) 0 var(--space-3); }
.post-content p { margin-bottom: var(--space-3); }
.post-content code {
  font-family: var(--font-mono);
  background: var(--color-border);
  padding: 2px 6px;
  border-radius: var(--radius-sm);
  font-size: 0.9em;
}
.post-content pre {
  padding: var(--space-3);
  border-radius: var(--radius-md);
  overflow-x: auto;
  margin-bottom: var(--space-4);
}
.post-content img { max-width: 100%; border-radius: var(--radius-md); }

.site-footer { border-top: 1px solid var(--color-border); padding: var(--space-5) 0; color: var(--color-muted); }
.site-footer .container { display: flex; justify-content: space-between; }
.site-footer ul { display: flex; gap: var(--space-3); list-style: none; }
```

이 CSS는 **자리잡이용**입니다. Part 5의 Claude Design 프롬프트 결과로 갈아끼울 거예요.

---

# Part 4. GitHub Pages 배포 설정

## 4.1 GitHub Actions 워크플로우

`.github/workflows/deploy.yml` 파일 생성:

```yaml
name: Deploy Astro to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npx astro build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

## 4.2 GitHub 설정

브라우저에서 본인 레포로 이동 → **Settings → Pages**:

- **Source**: GitHub Actions 선택 (Deploy from a branch 아님)

저장하면 끝. 이제 main에 푸시할 때마다 자동 빌드+배포됩니다.

## 4.3 첫 배포

```bash
# .gitignore 확인 (node_modules, dist, .astro 무시되는지)
cat .gitignore

# 로컬에서 빌드 한번 돌려보기
npm run build

# 잘 되면 푸시
git add .
git commit -m "feat: initial astro site"
git push origin main
```

GitHub 레포의 **Actions 탭**에서 워크플로우 진행 상황 보입니다. 2~3분 후 `https://<username>.github.io` 에서 확인.

## 4.4 로컬 개발

```bash
npm run dev
```

→ `http://localhost:4321` 에서 라이브 프리뷰. 파일 저장하면 즉시 반영.

---

# Part 5. Claude Design 프롬프트 (Astro/MDX 맞춤)

이전 답변의 프롬프트를 **Astro 환경에 최적화**해서 다시 정리합니다.

## 5.1 [최초 1회] 디자인 시스템 — global.css 산출

```
내 Astro 기반 GitHub Pages 사이트의 디자인 시스템을 만들어줘.
결과를 src/styles/global.css 에 그대로 붙여넣을 거니까 CSS 파일 형태로 출력해.

[브랜드 정체성]
- 이름: 홍길동
- 정체성: 백엔드 개발자, LLM 응용 사이드 프로젝트
- 톤: linear.app의 정제됨 + paulgraham.com의 단정함의 중간
  화려하지 않고 신뢰감 있게, 그러나 지루하지 않게

[CSS 변수로 정의해야 할 것]
- 컬러: --color-bg, --color-text, --color-muted, --color-border, 
        --color-primary, --color-accent, --color-success, --color-warning, --color-error
- 라이트/다크 모드 둘 다 (prefers-color-scheme 사용)
- 폰트: --font-body (Pretendard 우선), --font-mono (JetBrains Mono)
- 타입 스케일: --text-xs, sm, base, lg, xl, 2xl, 3xl, 4xl
- 간격: --space-1 ~ --space-7 (4px 베이스)
- 라운딩: --radius-sm, md, lg, full
- 그림자: --shadow-sm, md, lg
- 컨테이너: --container-max (720px), --container-wide (960px)

[필요한 컴포넌트 클래스]
- .container, .container-wide
- .btn, .btn-primary, .btn-secondary, .btn-ghost
- .post-card, .project-card (이미지 + 텍스트 카드, hover 인터랙션)
- .tech-tags, .tag
- 헤더(.site-header), 푸터(.site-footer)
- 글 본문(.post-content) — h2/h3, 인용문, 코드, pre, ul/ol 정리
- .hero (랜딩페이지 상단)
- .project-grid, .post-list

[제약]
- Tailwind 등 외부 의존성 금지, 순수 CSS만
- 한글이 영문보다 약간 작게 보이는 시각 보정 고려
- 접근성: 포커스 링, prefers-reduced-motion 대응
- 반응형: 모바일 우선

[출력]
완전한 global.css 한 파일. 주석으로 섹션 구분 명확히.
```

→ 결과를 `src/styles/global.css`에 통째로 교체.

## 5.2 [최초 1회] Hero 섹션 디자인

```
Astro 사이트의 메인 페이지 Hero 섹션을 디자인해줘.

[전제]
- 앞서 만든 디자인 시스템(global.css 변수)을 사용
- src/pages/index.astro 의 <section class="hero"> 부분에 들어감
- Astro 컴포넌트 문법으로 출력 (HTML + JSX 표현 혼용 가능)

[구성]
- 좌측 2/3: 이름 (h1), 한 줄 자기소개, 두 줄 더 상세 소개, CTA 버튼 2개
- 우측 1/3: 추상 일러스트 SVG (아래 별도 명시)
- 모바일에서는 세로 스택, 일러스트가 위로

[일러스트 SVG 요구사항]
- 인라인 SVG로 코드에 직접 박을 수 있게
- 400x400px viewBox
- 백엔드/시스템/연결을 암시하는 기하학적 추상 (사람 형상 X)
- 디자인 시스템 컬러 변수(currentColor, var(--color-primary) 등) 사용해서 다크모드 자동 대응
- 정적, 애니메이션 없음 (또는 매우 절제된 호흡 정도만)

[출력]
1. index.astro의 hero 섹션 마크업 전체
2. 인라인 SVG 코드
3. 추가로 필요한 CSS (global.css에 추가할 부분만 별도 블록으로)
```

→ 결과의 마크업 부분으로 `index.astro`의 hero 섹션 교체. SVG는 그 안에 인라인으로.

## 5.3 [매주 반복] 블로그 포스트 cover 이미지

```
이번 주 블로그 글의 cover 이미지를 만들어줘.

[글 정보]
- 제목: "Rate Limiter를 직접 구현하며 배운 것"
- 부제: Token Bucket 알고리즘과 동시성 처리
- 분야: 시스템 디자인
- 톤: 기술적, 진중

[디자인 시스템 컨텍스트]
앞서 만든 컬러/타이포 그대로 사용. primary는 #__, accent는 #__ (앞서 정의된 값 명시).
폰트는 Pretendard.

[Cover 이미지 명세]
- 1200x630px (OG 이미지 비율)
- SVG 출력
- 좌측: 제목 텍스트 (큰 한글), 하단에 부제 작게
- 우측: Token Bucket 개념을 시각화한 단순 다이어그램
  - 양동이(bucket)와 토큰들, 일정 속도로 떨어지는 토큰
  - 추상화하되 알아볼 수 있게
- 다크모드/라이트모드 둘 다 자연스럽게 (currentColor 활용)

[추가 요청 — 같이 만들 본문 삽화 2개]
1. token-bucket-flow.svg (800x500px)
   - Token Bucket의 동작 원리 다이어그램
   - 시간축 + 토큰 충전 + 요청 들어옴 + 처리/거부
2. concurrency-sequence.svg (800x600px)
   - 동시 요청 시나리오를 시퀀스 다이어그램으로
   - 3개 클라이언트가 동시 요청, 일부는 통과/일부는 reject

세 개 모두 SVG로 출력.
```

→ 다운로드 후 `src/assets/img/posts/2026-05-07-cover.svg`, `token-bucket-flow.svg`, `concurrency-sequence.svg`로 저장.

## 5.4 글 작성 (`src/content/blog/2026-05-07-rate-limiter.mdx`)

```mdx
---
title: "Rate Limiter를 직접 구현하며 배운 것"
description: "Token Bucket 알고리즘으로 분당 요청 제한을 구현하면서 마주친 동시성 함정들"
pubDate: 2026-05-07
cover: /src/assets/img/posts/2026-05-07-cover.svg
tags: [시스템디자인, 동시성, 백엔드]
---

import { Image } from 'astro:assets';
import flow from '../../assets/img/posts/token-bucket-flow.svg';
import seq from '../../assets/img/posts/concurrency-sequence.svg';

본문 시작.

## Token Bucket이란

<Image src={flow} alt="Token Bucket의 동작 원리" />

설명...

## 동시성 함정

<Image src={seq} alt="동시 요청 시나리오" />

설명...
```

> MDX 안에서 `<Image />`를 쓰면 Astro가 자동으로 최적화합니다. SVG는 그대로 패스되니 그래픽 손실 없음.

## 5.5 [프로젝트 추가 시] 프로젝트 hero & 카드

```
사이드 프로젝트를 사이트에 추가하려고 해. 시각 자산 만들어줘.

[프로젝트]
- 이름: KoReader
- 한 줄: 한국어 PDF에 최적화된 e-book 리더
- 핵심 가치: 한글 줄바꿈/하이픈/세로쓰기 지원, 다크모드, 메모

[필요한 자산]
1. 카드용 hero (800x500px SVG)
   - 프로젝트 인덱스/메인페이지 카드 그리드에 들어감
   - 추상적, 텍스트 없음 (제목은 카드 컴포넌트가 담당)
   - 한글 텍스트 흐름을 추상화 (선들이 흐르는 형태 등)

2. 프로젝트 상세페이지 hero (1600x600px SVG)
   - 위와 같은 디자인 언어, 더 와이드한 비율
   - 텍스트 없음

3. GitHub README 헤더 배너 (1280x320px SVG)
   - 프로젝트 이름 텍스트 포함 (크게)
   - 한 줄 설명 작게
   - GitHub 라이트/다크 둘 다 자연스럽게 (currentColor + 의도된 색)

디자인 시스템 일관성 유지. SVG로 모두 출력.
```

→ `src/assets/img/projects/koreader-hero.svg` 등으로 저장. 그리고 `src/content/projects/koreader.mdx`:

```mdx
---
title: "KoReader"
tagline: "한국어 PDF에 최적화된 e-book 리더"
hero: /src/assets/img/projects/koreader-hero.svg
repo: https://github.com/yourusername/koreader
demo: https://koreader.example.com
tech: [Rust, Tauri, TypeScript]
order: 1
featured: true
---

## 문제

상용 PDF 리더는 한글 줄바꿈을 어색하게 처리한다...

## 해결

...

## 배운 것

...
```

## 5.6 [수시] 인포그래픽

```
다음 개념을 한 장 인포그래픽으로 만들어줘.

[주제]
RAG 파이프라인의 5단계:
1. Document Loading (PDF, 웹 등에서 원문 가져오기)
2. Chunking (적절한 크기로 자르기)
3. Embedding (각 chunk를 벡터로)
4. Vector Store (벡터 DB에 저장 + 인덱싱)
5. Retrieval + Generation (질문에 유사한 chunk 검색 → LLM에 전달)

[명세]
- 1000x500px SVG (가로형, 블로그 본문 폭에 맞게)
- 5단계가 좌→우로 흐르는 파이프라인
- 각 단계에 아이콘(추상 도형 OK) + 한국어 라벨 + 한 줄 설명
- 단계 사이 화살표
- 디자인 시스템 컬러
- 다크모드 호환 (currentColor)
- 텍스트는 SVG 내부 <text>로 (이미지화 X — 검색/접근성)

블로그 본문에 <Image>로 박을 거야.
```

---

# Part 6. 매주 워크플로우 (정리)

```
월요일 (Claude Design 한도 리셋 직후, 30~40분):
1. 이번 주 블로그 글 1개 + (있다면) 새 프로젝트 1개 정함
2. 프롬프트 5.3 → cover + 본문 SVG 2~3개 생성
3. 다운로드 → src/assets/img/posts/ 에 저장
4. src/content/blog/YYYY-MM-DD-slug.mdx 작성
5. 새 프로젝트 있으면 프롬프트 5.5 → src/content/projects/ 추가
6. 한도 남으면 프롬프트 5.6으로 다음 주 글용 인포그래픽 미리 비축

푸시:
  npm run build      # 로컬에서 한 번 빌드 통과 확인
  git add .
  git commit -m "post: rate limiter"
  git push

자동 배포 → 2~3분 후 사이트 반영
```

---

# Part 7. 자주 막히는 곳

**`npm create astro@latest .` 가 빈 디렉토리 아니라고 거부:**
README.md만 있으면 보통 진행 가능. 안 되면 `mv README.md README-old.md` 하고 진행, 끝나고 합치세요.

**빌드 시 `Cannot find module 'astro:content'`:**
타입 생성 안 됨. `npx astro sync` 한 번 돌리면 해결.

**MDX에서 SVG 임포트 깨짐:**
`src/assets/` 밑에 두면 Astro Asset 시스템이 처리. `public/` 밑에 두면 절대경로 `/img/foo.svg`로 접근. 둘 중 하나로 통일하세요. **추천: `src/assets/`** (최적화 + 캐시버스팅 자동).

**한글 폰트 안 예쁨:**
이미 `BaseLayout.astro`에 Pretendard CDN 박혀있음. 그래도 이상하면 브라우저 강제 새로고침(Ctrl+Shift+R).

**Actions 빌드 실패 — `output directory does not exist`:**
`astro.config.mjs`에 `outDir` 안 건드렸는지 확인. 기본값 `dist`라야 워크플로우의 `path: ./dist`와 맞음.

**404 페이지 자동 생성하고 싶음:**
`src/pages/404.astro` 만들면 됩니다.

**커스텀 도메인 (yourname.dev 같은 거):**
`public/CNAME` 파일에 도메인 한 줄 적고 푸시 → DNS에서 A 레코드 4개를 GitHub Pages IP로 (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153). 또는 CNAME 레코드를 `<username>.github.io`로.

---

여기까지가 Astro + GitHub Pages + Claude Design 풀세트입니다. 처음부터 끝까지 따라하면 1~2시간 안에 사이트가 살아 있을 거예요.

지금 단계에서 가장 먼저 막힐 만한 곳은 보통 **2.1 Astro 설치**(Node 버전이나 빈 디렉토리 이슈) 또는 **4.2 Pages Source 설정**(Branch가 아니라 Actions로 바꿔야 함)입니다. 거기서부터 차근차근 진행해보시고, 멈추는 지점 있으면 에러 메시지 그대로 던져주세요.

어디서부터 시작하실래요?