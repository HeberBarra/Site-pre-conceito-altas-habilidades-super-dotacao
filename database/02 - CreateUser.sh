#!/bin/bash
set -e

mysql --protocol=socket -uroot -p"$MYSQL_ROOT_PASSWORD" <<EOSQL
CREATE USER IF NOT EXISTS 'usuario'@'$MYSQL_HOST' IDENTIFIED BY '$MYSQL_SENHA_ESTUDANTE';
GRANT INSERT, SELECT ON bd_AltasHabilidades.tbVent TO 'usuario'@'$MYSQL_HOST';

FLUSH PRIVILEGES;
EOSQL
