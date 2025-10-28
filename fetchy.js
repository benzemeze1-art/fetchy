export function fetchy(url,opts={}) {
  const {timeout=8000, ...rest}=opts; const ctrl=new AbortController();
  const to=setTimeout(()=>ctrl.abort(),timeout);
  return fetch(url,{...rest,signal:ctrl.signal})
    .finally(()=>clearTimeout(to));
}
export async function getJSON(url,opts){ const r=await fetchy(url,opts); if(!r.ok) throw new Error(r.statusText); return r.json(); }
