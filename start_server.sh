#!/bin/bash

# ブログサイト用ローカルサーバー起動スクリプト

echo "🚀 ブログサイトのローカルサーバーを起動します..."

# blog-siteディレクトリに移動
cd "$(dirname "$0")/blog-site"

# ポート8001でHTTPサーバーを起動
echo "📡 http://localhost:8001 でサーバーを起動中..."
echo "🌐 ブラウザで http://localhost:8001 にアクセスしてください"
echo "⛔ サーバーを停止するには Ctrl+C を押してください"
echo ""

python3 -m http.server 8001