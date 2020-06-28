const text = "writing a file";
await Deno.writeTextFile("t.txt", text);
