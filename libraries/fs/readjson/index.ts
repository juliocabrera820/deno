import { readJson } from "https://deno.land/std/fs/mod.ts";

const langs = await readJson("langs.json");
console.log(langs);
