#!/bin/sh
git diff --staged --diff-filter=dx --name-only HEAD | grep ".*\.js$" | xargs -I % sh -c './node_modules/.bin/prettier --write --print-width 120 --trailing-comma all --single-quote %; git add %'

STAGED_FILES=$(git diff --staged --diff-filter=dx --name-only HEAD | grep ".*\.js$")

PASS=true

for FILE in $STAGED_FILES
do
  ./node_modules/.bin/eslint "$FILE"
  if [[ "$?" != 0 ]]; then
    PASS=false
  fi
done

if ! $PASS; then
  echo "\033[41mCOMMIT FAILED:\033[0m Your commit contains files that should pass ESLint but do not. Please fix the ESLint errors and try again.\n"
  exit 1
fi
