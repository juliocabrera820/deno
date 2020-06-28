import { writeJson } from "https://deno.land/std/fs/mod.ts";

const langs = [{ name: "ruby" }, { name: "java" }, { name: "elixir" }];
await writeJson("langs.json", langs, { spaces: 2 });
