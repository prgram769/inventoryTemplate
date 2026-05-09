import { createClient } from "@/lib/supabase/server";
import { Suspense } from "react";

async function GetData() {
  const supabase = await createClient();
  const { data: numbers} = await supabase.from("instruments").select();

  return (
    <pre>{numbers?.map((n => (
      <li key={n.id}>{n.id} - {n.name}</li>
    )))}</pre>
  )
}

export default function Test() {
  return (
    <Suspense fallback={<div>cargando...</div>}>
      <GetData/>
    </Suspense>
  )
}