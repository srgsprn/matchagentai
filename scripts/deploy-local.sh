#!/bin/bash
# Запускать на вашем Mac: из папки svt_dating выполнить: ./scripts/deploy-local.sh
# Заливает файлы на VPS и настраивает nginx + HTTPS.

set -e
cd "$(dirname "$0")/.."
VPS="root@85.239.51.175"
SSH_KEY="${DEPLOY_SSH_KEY:-$HOME/.ssh/timeweb_vps}"
SSH_OPTS="-i $SSH_KEY -o ConnectTimeout=15"
SITE_DIR="/var/www/matchagentai.com"

echo "Загрузка файлов на VPS..."
scp $SSH_OPTS -r index.html assets "$VPS:$SITE_DIR/" 2>/dev/null || {
  echo "Создаю директорию на сервере и загружаю..."
  ssh $SSH_OPTS $VPS "mkdir -p $SITE_DIR"
  scp $SSH_OPTS -r index.html assets "$VPS:$SITE_DIR/"
}

echo "Запуск настройки nginx и HTTPS на сервере..."
ssh $SSH_OPTS $VPS 'bash -s' < "scripts/deploy-server.sh"

echo "Готово. Откройте https://matchagentai.com"
