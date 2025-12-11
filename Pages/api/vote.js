export default async function handler(req,res){
if(req.method!=='POST') return res.status(405).end()


const { id } = req.body
const url = process.env.SUPABASE_URL
const key = process.env.SUPABASE_KEY


const getR = await fetch(`${url}/rest/v1/levels?id=eq.${id}&select=votes`, {
headers:{apikey:key, Authorization:`Bearer ${key}`}
})
const arr = await getR.json()


const newVotes = (arr[0].votes || 0) + 1


const upd = await fetch(`${url}/rest/v1/levels?id=eq.${id}`, {
method:'PATCH',
headers:{'Content-Type':'application/json','apikey':key, Authorization:`Bearer ${key}`},
body: JSON.stringify({votes:newVotes})
})


const data = await upd.json()
res.status(200).json(data)
}
