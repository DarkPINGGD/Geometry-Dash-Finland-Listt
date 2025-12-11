export default async function handler(req,res){
const url = process.env.SUPABASE_URL
const key = process.env.SUPABASE_KEY


const r = await fetch(`${url}/rest/v1/levels?select=*`, {
headers:{apikey:key, Authorization:`Bearer ${key}`}
})
const data = await r.json()


res.status(200).json(data)
}
