#!/bin/bash
set -e

mysql --protocol=socket -uroot -p"$MYSQL_ROOT_PASSWORD" <<EOSQL
CREATE USER IF NOT EXISTS 'usuario'@'%' IDENTIFIED BY '$MYSQL_SENHA_USUARIO';
GRANT INSERT, SELECT ON bd_AltasHabilidades.tbVent TO 'usuario'@'%';

FLUSH PRIVILEGES;
EOSQL
