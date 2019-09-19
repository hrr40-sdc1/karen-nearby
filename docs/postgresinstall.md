scripts git:(apipaths) ✗ brew install postgresql
==> Installing dependencies for postgresql: openssl@1.1 and readline
==> Installing postgresql dependency: openssl@1.1
==> Downloading https://homebrew.bintray.com/bottles/openssl@1.1-1.1.1d.mojave.bottle.tar.gz
==> Downloading from https://akamai.bintray.com/10/104ef018b7bb8fcc49f57e5a60359a28a02d480d85a959e6141394b0571cbb28?__gda__=exp=156840970
######################################################################## 100.0%
==> Pouring openssl@1.1-1.1.1d.mojave.bottle.tar.gz
==> Caveats
A CA file has been bootstrapped using certificates from the system
keychain. To add additional certificates, place .pem files in
  /usr/local/etc/openssl@1.1/certs

and run
  /usr/local/opt/openssl@1.1/bin/c_rehash

openssl@1.1 is keg-only, which means it was not symlinked into /usr/local,
because openssl/libressl is provided by macOS so don't link an incompatible version.

If you need to have openssl@1.1 first in your PATH run:
  echo 'export PATH="/usr/local/opt/openssl@1.1/bin:$PATH"' >> ~/.zshrc

For compilers to find openssl@1.1 you may need to set:
  export LDFLAGS="-L/usr/local/opt/openssl@1.1/lib"
  export CPPFLAGS="-I/usr/local/opt/openssl@1.1/include"

For pkg-config to find openssl@1.1 you may need to set:
  export PKG_CONFIG_PATH="/usr/local/opt/openssl@1.1/lib/pkgconfig"

==> Summary
🍺  /usr/local/Cellar/openssl@1.1/1.1.1d: 7,983 files, 17.9MB
==> Installing postgresql dependency: readline
==> Downloading https://homebrew.bintray.com/bottles/readline-8.0.1.mojave.bottle.tar.gz
==> Downloading from https://akamai.bintray.com/3c/3c754391e9d243835811d128771ca0f1a565024100fd2c2871534353d46aaf0e?__gda__=exp=156840972
######################################################################## 100.0%
==> Pouring readline-8.0.1.mojave.bottle.tar.gz
==> Caveats
readline is keg-only, which means it was not symlinked into /usr/local,
because macOS provides the BSD libedit library, which shadows libreadline.
In order to prevent conflicts when programs look for libreadline we are
defaulting this GNU Readline installation to keg-only.

For compilers to find readline you may need to set:
  export LDFLAGS="-L/usr/local/opt/readline/lib"
  export CPPFLAGS="-I/usr/local/opt/readline/include"

For pkg-config to find readline you may need to set:
  export PKG_CONFIG_PATH="/usr/local/opt/readline/lib/pkgconfig"

==> Summary
🍺  /usr/local/Cellar/readline/8.0.1: 48 files, 1.5MB
==> Installing postgresql
==> Downloading https://homebrew.bintray.com/bottles/postgresql-11.5_1.mojave.bottle.tar.gz
==> Downloading from https://akamai.bintray.com/46/463c6a192a0b6a5d1359b68db24003b2dac6895cdb86c827c41bf03fffd856d6?__gda__=exp=156840972
######################################################################## 100.0%
==> Pouring postgresql-11.5_1.mojave.bottle.tar.gz
==> /usr/local/Cellar/postgresql/11.5_1/bin/initdb --locale=C -E UTF-8 /usr/local/var/postgres
==> Caveats
To migrate existing data from a previous major version of PostgreSQL run:
  brew postgresql-upgrade-database

To have launchd start postgresql now and restart at login:
  brew services start postgresql
Or, if you don't want/need a background service you can just run:
  pg_ctl -D /usr/local/var/postgres start
==> Summary
🍺  /usr/local/Cellar/postgresql/11.5_1: 3,189 files, 35.4MB
==> `brew cleanup` has not been run in 30 days, running now...
Removing: /usr/local/Cellar/gdbm/1.15... (19 files, 569.8KB)
Removing: /usr/local/Cellar/gdbm/1.16... (19 files, 578.5KB)
Removing: /usr/local/Cellar/gdbm/1.18... (20 files, 584.4KB)
Removing: /Users/user/Library/Caches/Homebrew/heroku--7.27.1.tar.xz... (7.4MB)
Removing: /usr/local/Cellar/heroku-node/10.9.0... (3 files, 37.3MB)
Removing: /Users/user/Library/Caches/Homebrew/icu4c--64.2.mojave.bottle.tar.gz... (26.1MB)
Removing: /Users/user/Library/Caches/Homebrew/libyaml--0.2.2.mojave.bottle.tar.gz... (100.9KB)
Removing: /Users/user/Library/Caches/Homebrew/node--12.9.1.mojave.bottle.tar.gz... (14.7MB)
Removing: /usr/local/Cellar/pcre/8.42... (204 files, 5.3MB)
Removing: /Users/user/Library/Caches/Homebrew/python@2--2.7.16.mojave.bottle.3.tar.gz... (12.4MB)
Removing: /usr/local/Cellar/readline/8.0.0_1... (48 files, 1.5MB)
Removing: /Users/user/Library/Caches/Homebrew/readline--8.0.0_1.mojave.bottle.tar.gz... (517.7KB)
Removing: /Users/user/Library/Caches/Homebrew/ruby--2.6.3.mojave.bottle.tar.gz... (9.2MB)
Removing: /Users/user/Library/Logs/Homebrew/python@2... (3 files, 127.8KB)
Removing: /Users/user/Library/Logs/Homebrew/mariadb... (3.6KB)
Removing: /Users/user/Library/Logs/Homebrew/gdbm... (64B)
Removing: /Users/user/Library/Logs/Homebrew/python... (3 files, 132.0KB)
Removing: /Users/user/Library/Logs/Homebrew/sqlite... (64B)
Removing: /Users/user/Library/Logs/Homebrew/mongodb... (64B)
Removing: /Users/user/Library/Logs/Homebrew/mysql... (2KB)
Removing: /Users/user/Library/Logs/Homebrew/watchman... (212B)
Removing: /Users/user/Library/Logs/Homebrew/pcre... (64B)
Removing: /Users/user/Library/Logs/Homebrew/mysql@5.7... (1.6KB)
Removing: /Users/user/Library/Logs/Homebrew/openssl... (64B)
Pruned 0 symbolic links and 3 directories from /usr/local
==> Caveats
==> openssl@1.1
A CA file has been bootstrapped using certificates from the system
keychain. To add additional certificates, place .pem files in
  /usr/local/etc/openssl@1.1/certs

and run
  /usr/local/opt/openssl@1.1/bin/c_rehash

openssl@1.1 is keg-only, which means it was not symlinked into /usr/local,
because openssl/libressl is provided by macOS so don't link an incompatible version.

If you need to have openssl@1.1 first in your PATH run:
  echo 'export PATH="/usr/local/opt/openssl@1.1/bin:$PATH"' >> ~/.zshrc

For compilers to find openssl@1.1 you may need to set:
  export LDFLAGS="-L/usr/local/opt/openssl@1.1/lib"
  export CPPFLAGS="-I/usr/local/opt/openssl@1.1/include"

For pkg-config to find openssl@1.1 you may need to set:
  export PKG_CONFIG_PATH="/usr/local/opt/openssl@1.1/lib/pkgconfig"

==> readline
readline is keg-only, which means it was not symlinked into /usr/local,
because macOS provides the BSD libedit library, which shadows libreadline.
In order to prevent conflicts when programs look for libreadline we are
defaulting this GNU Readline installation to keg-only.

For compilers to find readline you may need to set:
  export LDFLAGS="-L/usr/local/opt/readline/lib"
  export CPPFLAGS="-I/usr/local/opt/readline/include"

For pkg-config to find readline you may need to set:
  export PKG_CONFIG_PATH="/usr/local/opt/readline/lib/pkgconfig"

==> postgresql
To migrate existing data from a previous major version of PostgreSQL run:
  brew postgresql-upgrade-database

To have launchd start postgresql now and restart at login:
  brew services start postgresql
Or, if you don't want/need a background service you can just run:
  pg_ctl -D /usr/local/var/postgres start
➜  scripts git:(apipaths) ✗