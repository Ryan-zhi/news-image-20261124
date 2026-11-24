// make.fun news-image entry for Tuesday 24 November 2026.
//
// The picture is entry.png in this folder: a broadsheet-style poster of the
// day's world news, drawn by draw.py from the stories in day24.py (leaked
// data putting Russia's war dead near 500,000, NATO's space-defence vow,
// the GTA VI hacker's sentence, South Korea's jet scramble and Denmark's
// school phone ban). This program's whole job is to hand that picture to
// the grader: copy entry.png into the output directory — MAKEFUN_OUTPUT_DIR
// when set, /output in the grading sandbox.

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const folder = dirname(fileURLToPath(import.meta.url));
const target = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(target, { recursive: true });
copyFileSync(join(folder, 'entry.png'), join(target, 'entry.png'));
