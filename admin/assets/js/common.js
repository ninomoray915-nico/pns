
const cfg=window.NINO_CONFIG;
const supabaseClient=window.supabase.createClient(cfg.SUPABASE_URL,cfg.SUPABASE_PUBLISHABLE_KEY);
async function requireAdmin(){
  const {data:{session}}=await supabaseClient.auth.getSession();
  if(!session){location.href="login.html";return null}
  const {data,error}=await supabaseClient.from("admin_users").select("user_id").eq("user_id",session.user.id).maybeSingle();
  if(error||!data){await supabaseClient.auth.signOut();alert("当前账号没有管理员权限");location.href="login.html";return null}
  return session;
}
async function logout(){await supabaseClient.auth.signOut();location.href="login.html"}
