#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

SOURCE_SHA="$(git rev-parse --short HEAD)"
ORIGIN_URL="$(git config --get remote.origin.url)"
DEPLOY_DIR="$(mktemp -d)"

cleanup() {
  rm -rf "$DEPLOY_DIR"
}
trap cleanup EXIT

npm ci
npm run build
touch dist/.nojekyll

cp -R dist/. "$DEPLOY_DIR/"
git -C "$DEPLOY_DIR" init
git -C "$DEPLOY_DIR" checkout -b gh-pages
git -C "$DEPLOY_DIR" config user.name "Sihyeon Jeon"
git -C "$DEPLOY_DIR" config user.email "120177111+SihyeonJeon@users.noreply.github.com"
git -C "$DEPLOY_DIR" add -A
git -C "$DEPLOY_DIR" commit -m "Deploy site ${SOURCE_SHA}"
git -C "$DEPLOY_DIR" remote add origin "$ORIGIN_URL"
git -C "$DEPLOY_DIR" push --force origin gh-pages
