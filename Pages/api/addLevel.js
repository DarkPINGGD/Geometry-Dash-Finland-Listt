export default async function handler(req,res){
if(req.method!=='POST') return res.status(405).end()


const { name, author } = req.body
const url = process.env.SUPABASE_URL
const key = process.env.SUPABASE_KEY


const r = await fetch(`${url}/rest/v1/levels`, {
method:'POST',
headers:{'Content-Type':'application/json','apikey':key, Authorization:`Bearer ${key}`},
body: JSON.stringify({ name, author, votes:0 })
})


const data = await r.json()
res.status(200).json(data)
}
